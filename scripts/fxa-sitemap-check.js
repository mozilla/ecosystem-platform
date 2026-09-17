#!/usr/bin/env node
/**
 * Checks docs/fxa-sitemap against the routes served by mozilla/fxa
 * main, the same comparison the freshness banner on the overview page runs in
 * the browser, and prints ready-to-paste table rows for anything missing.
 *
 *   node scripts/fxa-sitemap-check.js               # routes, against GitHub main
 *   node scripts/fxa-sitemap-check.js --fxa ../fxa  # routes plus arrows, against a local checkout
 *
 * With --fxa it also audits the maps: every arrow between two screens must
 * correspond to a navigation to the target route somewhere in the source
 * screen's page folder in fxa-settings. Sign-in, sign-up, and post-verify pages
 * route through the shared pages/Signin/utils.ts, which is searched too, so an
 * arrow between two screens of that family is checked less strictly than the
 * rest. Exit code 1 when anything disagrees.
 */
const fs = require('fs');
const path = require('path');

const RAW = 'https://raw.githubusercontent.com/mozilla/fxa/main/';
const STORYBOOK = 'https://mozilla.github.io/fxa/storybooks/main/fxa-settings/';
const FILES = {
  served: 'packages/fxa-content-server/server/lib/routes/react-app/content-server-routes.js',
  settings: 'packages/fxa-settings/src/components/Settings/index.tsx',
  app: 'packages/fxa-settings/src/components/App/index.tsx',
};
// Server-only endpoints that are documented but never appear in the served list.
const IGNORE = new Set(['update_firefox', 'download_firefox', '.well-known/change-password', 'metrics-flow']);

const args = process.argv.slice(2);
const opt = (name) => { const i = args.indexOf(name); return i === -1 ? null : args[i + 1]; };
const fxaDir = opt('--fxa');
const docsDir = opt('--docs') || path.join(__dirname, '..', 'docs', 'fxa-sitemap');

async function source(key) {
  if (fxaDir) return fs.readFileSync(path.join(fxaDir, FILES[key]), 'utf8');
  const res = await fetch(RAW + FILES[key]);
  if (!res.ok) throw new Error(`${res.status} fetching ${FILES[key]}`);
  return res.text();
}

const norm = (r) => r.trim().replace(/^\//, '').replace(/\/\*$/, '').replace(/\/$/, '');

function servedRoutes(servedSrc, settingsSrc) {
  const routes = new Set();
  for (const m of servedSrc.matchAll(/'([^'\n]+)'/g)) {
    if (/^[A-Za-z0-9_./:-]+$/.test(m[1])) routes.add(norm(m[1]));
  }
  routes.add('settings');
  for (const m of settingsSrc.matchAll(/path="([^"]+)"/g)) routes.add(`settings/${m[1]}`);
  routes.delete('');
  return routes;
}

function documentedRoutes() {
  const md = fs.readFileSync(path.join(docsDir, 'index.md'), 'utf8');
  const routes = new Set();
  for (const line of md.split('\n')) {
    if (!line.startsWith('|')) continue;
    for (const m of line.matchAll(/`(\/[^`]*)`/g)) {
      const r = norm(m[1]);
      if (r) routes.add(r);
    }
  }
  return routes;
}

function routeComponents(appSrc, settingsSrc) {
  const map = {};
  for (const m of appSrc.matchAll(/path="([^"]+)"(?:[^<]|<(?!Route))*?<([A-Z][A-Za-z0-9]+)/gs)) {
    map[norm(m[1])] = m[2].replace(/Container$/, '');
  }
  for (const m of settingsSrc.matchAll(/path="([^"]+)"[^>]*?element=\{<([A-Z][A-Za-z0-9]+)/gs)) {
    map[`settings/${m[1]}`] = m[2];
  }
  return map;
}

async function storyFor(component, index) {
  if (!component) return null;
  const wanted = component.replace(/^(MfaGuard|MfaGuarded|PageMfaGuard)/, '').toLowerCase();
  const stories = Object.values(index.entries).filter((e) => e.type === 'story');
  const hit = stories.find((s) => s.title.split('/').pop().toLowerCase() === wanted)
    || stories.find((s) => s.title.toLowerCase().includes(wanted));
  return hit ? { title: hit.title, url: `${STORYBOOK}?path=/story/${hit.id}` } : null;
}

/* ---------- Arrow audit (needs --fxa) ---------- */

function mermaidBlocks(md) {
  return [...md.matchAll(/```mermaid\n([\s\S]*?)\n```/g)].map((m) => m[1]);
}

// Routes named in a box label: any token starting with "/", or a line that is just "/".
function routesInLabel(label) {
  const out = [];
  for (const line of label.split('<br/>')) {
    if (line.trim() === '/') { out.push('/'); continue; }
    for (const t of line.split(/[\s,]+/)) if (t.startsWith('/') && t !== '/') out.push(t.replace(/[),.]+$/, ''));
  }
  return out;
}

function parseMap(block) {
  const nodes = {};
  for (const m of block.matchAll(/([A-Za-z_][A-Za-z0-9_]*)(?:\(\["|\{\{"|\[")([\s\S]*?)(?:"\]\)|"\}\}|"\])/g)) nodes[m[1]] = m[2];
  const edges = [];
  for (const line of block.split('\n')) {
    if (/^\s*(class|classDef|click|subgraph|end)\b/.test(line)) continue;
    const chain = line.trim().split(/\s*(?:-->|-\.[^.]*\.->|-\.->)\s*(?:\|[^|]*\|\s*)?/).map((p) => (p.match(/^([A-Za-z_][A-Za-z0-9_]*)/) || [])[1]).filter(Boolean);
    for (let i = 0; i + 1 < chain.length; i++) edges.push([chain[i], chain[i + 1]]);
  }
  return { nodes, edges };
}

// Routes grouped in the same Screens-table row stand for one box, so a box's
// evidence may come from any screen in its row.
function tableGroups(md) {
  const groups = {};
  for (const line of md.split('\n')) {
    if (!line.startsWith('| `/')) continue;
    const routes = [...line.split('|')[1].matchAll(/`(\/[^`]*)`/g)].map((m) => m[1]);
    for (const r of routes) groups[r] = routes;
  }
  return groups;
}

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (/\.tsx?$/.test(e.name) && !/test|stories|mocks/.test(e.name)) out.push(p);
  }
  return out;
}

function auditArrows(appSrc, settingsSrc) {
  const settingsRoot = path.join(fxaDir, 'packages/fxa-settings/src');
  const appDir = path.join(settingsRoot, 'components/App');
  const componentDir = {};
  for (const m of appSrc.matchAll(/const (\w+) = lazy\(\s*\(\)\s*=>\s*import\('([^']+)'\)/gs)) componentDir[m[1]] = path.resolve(appDir, m[2]);
  for (const m of appSrc.matchAll(/import (\w+) from '(\.[^']+)'/g)) componentDir[m[1]] = componentDir[m[1]] || path.resolve(appDir, m[2]);
  const routeComponent = {};
  for (const m of appSrc.matchAll(/path="([^"]+)"(?:[^<]|<(?!Route))*?<([A-Z][A-Za-z0-9]+)/gs)) routeComponent[m[1].replace(/\/\*$/, '') || '/'] = m[2];
  for (const m of settingsSrc.matchAll(/path="([^"]+)"[^>]*?element=\{<([A-Z][A-Za-z0-9]+)/gs)) routeComponent[`/settings/${m[1]}`] = m[2];
  routeComponent['/settings'] = 'PageSettings';
  const settingsDir = path.join(settingsRoot, 'components/Settings');
  const signinUtils = path.join(settingsRoot, 'pages/Signin/utils.ts');

  const filesFor = (route) => {
    const comp = routeComponent[route];
    let dir = comp && (componentDir[comp] || (route.startsWith('/settings') ? settingsDir : null));
    if (!dir) return [];
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) dir = path.dirname(dir);
    if (!fs.existsSync(dir)) return [];
    const files = walk(dir);
    if (/\/pages\/(Signin|Signup|Index|PostVerify)/.test(dir)) files.push(signinUtils);
    return files;
  };

  const results = { checked: 0, failed: [] };
  for (const file of fs.readdirSync(docsDir).filter((f) => f.endsWith('.md')).sort()) {
    const md = fs.readFileSync(path.join(docsDir, file), 'utf8');
    const groups = tableGroups(md);
    for (const block of mermaidBlocks(md)) {
      const { nodes, edges } = parseMap(block);
      for (const [a, b] of edges) {
        const from = routesInLabel(nodes[a] || '');
        const to = routesInLabel(nodes[b] || '');
        if (!from.length || !to.length) continue; // flows, triggers, exits: not route-level claims
        results.checked++;
        const sources = new Set(from.flatMap((r) => groups[r] || [r]));
        const targets = to.flatMap((r) => [r, ...(r.startsWith('/settings/') ? [r.split('/').pop()] : [])]);
        let ok = false;
        for (const r of sources) {
          for (const f of filesFor(r)) {
            const txt = fs.readFileSync(f, 'utf8');
            if (targets.some((t) => new RegExp(`[\`'"/]${t.replace(/^\//, '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![A-Za-z0-9_])`).test(txt) || (t === '/' && /hardNavigate\(`\/\$\{/.test(txt)))) { ok = true; break; }
          }
          if (ok) break;
        }
        if (!ok) results.failed.push({ file, from: a, to: b, routes: `${from[0]} -> ${to[0]}` });
      }
    }
  }
  return results;
}

(async () => {
  const [servedSrc, settingsSrc, appSrc] = await Promise.all([source('served'), source('settings'), source('app')]);
  const served = servedRoutes(servedSrc, settingsSrc);
  const documented = documentedRoutes();
  const missing = [...served].filter((r) => !documented.has(r) && !IGNORE.has(r)).sort();
  const stale = [...documented].filter((r) => !served.has(r) && !IGNORE.has(r)).sort();

  if (!missing.length && !stale.length) {
    console.log(`Routes in sync: ${served.size} served routes, all documented.`);
  }
  if (fxaDir) {
    const arrows = auditArrows(appSrc, settingsSrc);
    if (arrows.failed.length) {
      console.log(`\nArrows: ${arrows.checked - arrows.failed.length} of ${arrows.checked} screen-to-screen arrows verified; ${arrows.failed.length} have no matching navigation in code:`);
      for (const f of arrows.failed) console.log(`  ${f.file}: ${f.from} -> ${f.to}  (${f.routes})`);
      process.exitCode = 1;
    } else {
      console.log(`Arrows in sync: all ${arrows.checked} screen-to-screen arrows match a navigation in fxa-settings.`);
    }
  } else {
    console.log('Pass --fxa <path to fxa checkout> to also verify the arrows in the maps.');
  }
  if (!missing.length && !stale.length) return;
  if (missing.length) {
    const components = routeComponents(appSrc, settingsSrc);
    let index = { entries: {} };
    try { index = await (await fetch(`${STORYBOOK}index.json`)).json(); } catch (e) { /* offline: no story suggestions */ }
    console.log(`\n${missing.length} route(s) in code but not documented:\n`);
    for (const r of missing) {
      const comp = components[r] || null;
      const story = await storyFor(comp, index);
      const screen = story ? `[${comp}](${story.url})` : (comp || 'TODO screen');
      console.log(`  /${r}${comp ? `  (component: ${comp})` : '  (not a React route: legacy or server-side)'}`);
      console.log(`    index.md, All routes table:`);
      console.log(`      | \`/${r}\` | [TODO flow page](./flow-TODO.md) | |`);
      console.log(`    the flow page's Screens table:`);
      console.log(`      | \`/${r}\` | ${screen} | TODO one-line purpose. |\n`);
    }
  }
  if (stale.length) {
    console.log(`\n${stale.length} documented route(s) no longer in code, remove their rows:\n`);
    for (const r of stale) console.log(`  /${r}`);
  }
  process.exitCode = 1;
})().catch((err) => {
  console.error(`Could not check: ${err.message}`);
  process.exitCode = 2;
});
