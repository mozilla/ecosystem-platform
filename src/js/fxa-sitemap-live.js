/**
 * Live data for the Mozilla accounts FxA sitemap (docs/fxa-sitemap).
 *
 * Plain JavaScript Docusaurus client module (no React). Three features:
 *
 *  1. Hover previews. Every route in a screen table that has a Storybook link,
 *     and every Mermaid node whose label starts with one of those routes, shows
 *     the screen in a floating Storybook iframe on hover. Routes documented on
 *     other pages are covered by static/fxa-sitemap-data/screens.json, written at
 *     build time by src/plugins/fxa-sitemap-screens.js. Hover only; the preview
 *     carries the one link to Storybook.
 *
 *  2. Diagram legend and badges. Mermaid nodes carry role classes (page, step,
 *     legacy, exit, source) set in the Markdown; a legend is added under each
 *     diagram and nodes with a preview get an eye badge.
 *
 *  3. Route drift banner. An element with `data-fxa-route-drift` compares the
 *     routes documented on the current page (every `<code>` cell in a table that
 *     starts with "/") against the route tables on mozilla/fxa main, and lists
 *     the differences.
 *
 * Everything fetches public URLs that send `Access-Control-Allow-Origin: *`.
 */

const STORYBOOK_BASE = 'https://mozilla.github.io/fxa/storybooks/main';
const RAW_BASE = 'https://raw.githubusercontent.com/mozilla/fxa/main';
const SVG_NS = 'http://www.w3.org/2000/svg';

const ROUTE_SOURCES = [
  {
    label: 'content-server FRONTEND_ROUTES',
    url: `${RAW_BASE}/packages/fxa-content-server/server/lib/routes/react-app/content-server-routes.js`,
    // Keep only plain route strings: this drops quoted prose in comments and
    // regex-style entries such as subscriptions/products/[\\w_]+.
    parse: (text) =>
      Array.from(text.matchAll(/'([^'\n]+)'/g), (m) => m[1]).filter((r) =>
        /^[A-Za-z0-9_./:-]+$/.test(r)
      ),
  },
  {
    label: 'fxa-settings Settings routes',
    url: `${RAW_BASE}/packages/fxa-settings/src/components/Settings/index.tsx`,
    // /settings itself is served separately by the content server, so add it here.
    parse: (text) => [
      'settings',
      ...Array.from(text.matchAll(/path="([^"]+)"/g), (m) => `settings/${m[1]}`),
    ],
  },
];

const cache = new Map();

function fetchText(url) {
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(url).then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${url}`);
        return res.text();
      })
    );
  }
  return cache.get(url);
}

function normalizeRoute(route) {
  return route
    .trim()
    .replace(/^\//, '')
    .replace(/\/\*$/, '')
    .replace(/\/$/, '')
    .replace(/\(\/\)$/, '');
}

// Map key for a route as written in the docs. The root route keeps its slash so
// it does not collapse to an empty string.
function routeKey(route) {
  const t = route.trim();
  return t === '/' ? '/' : normalizeRoute(t);
}

function storyIframeUrl(pkg, id) {
  return `${STORYBOOK_BASE}/${pkg}/iframe.html?id=${encodeURIComponent(id)}&viewMode=story`;
}

function storyPageUrl(pkg, id) {
  return `${STORYBOOK_BASE}/${pkg}/?path=/story/${encodeURIComponent(id)}`;
}

// Optional static screenshot published next to the Storybook build. When the
// image exists the hover preview uses it (instant, no runtime); otherwise it
// falls back to the live story iframe.
function storyImageUrl(pkg, id) {
  return `${STORYBOOK_BASE}/${pkg}/screenshots/${encodeURIComponent(id)}.png`;
}

const previewKind = new Map();
function resolvePreviewKind(entry) {
  const key = `${entry.pkg}/${entry.id}`;
  if (!previewKind.has(key)) {
    previewKind.set(
      key,
      new Promise((resolve) => {
        const probe = new Image();
        probe.onload = () => resolve('image');
        probe.onerror = () => resolve('iframe');
        probe.src = storyImageUrl(entry.pkg, entry.id);
      })
    );
  }
  return previewKind.get(key);
}

function el(tag, attrs, children) {
  const node = document.createElement(tag);
  Object.entries(attrs || {}).forEach(([k, v]) => {
    if (k === 'text') node.textContent = v;
    else node.setAttribute(k, v);
  });
  (children || []).forEach((c) => node.appendChild(c));
  return node;
}

/* ---------- Site-wide screen index ---------- */

// e.g. "/ecosystem-platform/fxa-sitemap"
function sitemapBase() {
  const m = window.location.pathname.match(/^(.*\/fxa-sitemap)(?:\/|$)/);
  return m ? m[1] : null;
}

// Written at build time by src/plugins/fxa-sitemap-screens.js from the screen
// tables on every sitemap page: route -> { storyTitle, pkg, id, screenName, page }.
let screensPromise = null;
function fetchScreens() {
  if (!screensPromise) {
    const base = sitemapBase();
    const url = base ? `${base.replace(/fxa-sitemap$/, '')}fxa-sitemap-data/screens.json` : null;
    screensPromise = url
      ? fetch(url).then((r) => (r.ok ? r.json() : {})).catch(() => ({}))
      : Promise.resolve({});
  }
  return screensPromise;
}

/* ---------- Hover previews ---------- */

let pop = null;
let popFrame;
let popImg;
let popLoading;
let popTitle;
let popOpen;
let popCurrent = null;
let showTimer;
let hideTimer;
let overPop = false;
let overTarget = false;

function ensurePopover() {
  if (pop) return;
  popTitle = el('span', { class: 'fxa-pop-title' });
  popOpen = el('a', { class: 'fxa-pop-open', target: '_blank', rel: 'noopener', text: 'Open in Storybook' });
  const close = el('button', { class: 'fxa-pop-close', type: 'button', 'aria-label': 'Close preview', text: '×' });
  popFrame = el('iframe', { class: 'fxa-pop-frame', title: 'Screen preview (Storybook)' });
  popImg = el('img', { class: 'fxa-pop-img', alt: 'Screen preview' });
  popLoading = el('div', { class: 'fxa-pop-loading', text: 'Loading preview…' });
  pop = el('div', { class: 'fxa-pop', role: 'dialog', 'aria-label': 'Screen preview' }, [
    el('div', { class: 'fxa-pop-head' }, [popTitle, popOpen, close]),
    el('div', { class: 'fxa-pop-body' }, [popLoading, popImg, popFrame]),
  ]);
  const loaded = () => pop.classList.remove('is-loading');
  popFrame.addEventListener('load', () => {
    if (pop.classList.contains('is-iframe')) loaded();
  });
  popImg.addEventListener('load', loaded);
  pop.addEventListener('mouseenter', () => {
    overPop = true;
    clearTimeout(hideTimer);
  });
  pop.addEventListener('mouseleave', () => {
    overPop = false;
    scheduleHide();
  });
  close.addEventListener('click', hidePopover);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hidePopover();
  });
  window.addEventListener('scroll', hidePopover, { passive: true });
  document.body.appendChild(pop);
}

function hidePopover() {
  clearTimeout(showTimer);
  if (pop) pop.classList.remove('is-visible');
}

// Hide only if the pointer has left both the trigger and the popover by the
// time the timer fires, whatever order the boundary events arrived in.
function scheduleHide() {
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    if (!overPop && !overTarget) hidePopover();
  }, 250);
}

function positionPopover(target) {
  const r = target.getBoundingClientRect();
  const w = pop.offsetWidth || 460;
  const h = pop.offsetHeight || 640;
  const gap = 12;
  let left = r.right + gap;
  if (left + w > window.innerWidth - 8) left = r.left - w - gap;
  if (left < 8) left = Math.max(8, window.innerWidth - w - 8);
  let top = r.top;
  if (top + h > window.innerHeight - 8) top = window.innerHeight - h - 8;
  if (top < 8) top = 8;
  pop.style.left = `${Math.round(left)}px`;
  pop.style.top = `${Math.round(top)}px`;
}

function showPopover(target, entry) {
  ensurePopover();
  if (popCurrent !== entry.id) {
    popCurrent = entry.id;
    // Hide the previous screen immediately so it never flashes under the new
    // one. The iframe keeps its old document (hidden) until the new story's
    // load event fires; resetting src to about:blank would fire a stray load
    // event that races the real one.
    pop.classList.add('is-loading');
    pop.classList.remove('is-image', 'is-iframe');
    popImg.removeAttribute('src');
    popOpen.href = storyPageUrl(entry.pkg, entry.id);
    popTitle.textContent = entry.screenName || entry.storyTitle;
    popTitle.title = entry.storyTitle;
    resolvePreviewKind(entry).then((kind) => {
      if (popCurrent !== entry.id) return;
      if (kind === 'image') {
        pop.classList.add('is-image');
        popImg.src = storyImageUrl(entry.pkg, entry.id);
      } else {
        pop.classList.add('is-iframe');
        popFrame.setAttribute('src', storyIframeUrl(entry.pkg, entry.id));
      }
    });
  }
  pop.classList.add('is-visible');
  positionPopover(target);
}

function makeHoverable(elm, entry) {
  if (elm.dataset.fxaHover) return;
  elm.dataset.fxaHover = '1';
  elm.classList.add('fxa-hoverable');
  elm.addEventListener('mouseenter', () => {
    overTarget = true;
    clearTimeout(hideTimer);
    clearTimeout(showTimer);
    showTimer = setTimeout(() => showPopover(elm, entry), 120);
  });
  elm.addEventListener('mouseleave', () => {
    overTarget = false;
    clearTimeout(showTimer);
    scheduleHide();
  });
  // Hover only. The only link to Storybook is inside the preview, and the only
  // clickable map boxes are the top-level flows, which Mermaid links itself.
}

/**
 * Reads the screen tables on the page: for every row that links to a Storybook
 * story, every route in the first cell becomes hoverable and is recorded so
 * Mermaid nodes can be matched by route.
 */
function buildScreenMap() {
  const map = new Map();
  let previous = null;
  document.querySelectorAll('article table tr').forEach((tr) => {
    const cells = tr.querySelectorAll('td');
    if (!cells.length) return;
    const link = tr.querySelector('a[href*="path=/story/"]');
    let entry = null;
    if (link && link.getAttribute('href').includes('/email-renderer/')) {
      // Email rows are keyed by landing route, but their stories preview the
      // emails themselves: every template link in the row gets a hover, and the
      // route is left to the screen index.
      tr.querySelectorAll('a[href*="/email-renderer/"][href*="path=/story/"]').forEach((a) => {
        const m = a.getAttribute('href').match(/path=\/story\/([^&]+)/);
        if (!m) return;
        makeHoverable(a, {
          id: decodeURIComponent(m[1]),
          pkg: 'email-renderer',
          storyTitle: a.textContent.trim(),
          screenName: `${a.textContent.trim()} email`,
        });
      });
      previous = null;
      return;
    }
    if (link) {
      const m = link.getAttribute('href').match(/path=\/story\/([^&]+)/);
      if (!m) return;
      entry = {
        id: decodeURIComponent(m[1]),
        pkg: 'fxa-settings',
        storyTitle: link.textContent.trim(),
        screenName: cells[1] ? cells[1].textContent.trim() : '',
      };
      previous = entry;
    } else if (previous && /same as above/i.test(tr.textContent)) {
      entry = { ...previous, screenName: cells[1] ? cells[1].textContent.trim() : previous.screenName };
    }
    if (!entry) return;
    cells[0].querySelectorAll('code').forEach((code) => {
      const t = code.textContent.trim();
      if (!t.startsWith('/')) return;
      const key = routeKey(t);
      if (!map.has(key)) map.set(key, entry);
      makeHoverable(code, entry);
    });
  });
  return map;
}

// Routes in tables that have no Storybook link on this page (for example the
// All routes table on the overview) become hoverable through the site index.
function hoverTableRoutes(map) {
  document.querySelectorAll('article table td:first-child code').forEach((code) => {
    if (code.dataset.fxaHover) return;
    const t = code.textContent.trim();
    if (!t.startsWith('/')) return;
    const entry = map.get(routeKey(t));
    if (entry) makeHoverable(code, entry);
  });
}

// First token of the first label line that starts with "/". Handles Mermaid's
// HTML labels (line breaks are <br> elements) and plain SVG text.
function firstRouteInLabel(node) {
  const label = node.querySelector('.nodeLabel') || node.querySelector('.label') || node;
  let text = '';
  const walk = (n) => {
    n.childNodes.forEach((c) => {
      if (c.nodeType === 3) text += c.textContent;
      else if (c.nodeName.toLowerCase() === 'br') text += '\n';
      else walk(c);
    });
  };
  walk(label);
  for (const line of text.split('\n')) {
    const tok = line.trim().split(/[\s,]+/)[0];
    if (tok && tok.startsWith('/')) return routeKey(tok);
  }
  return null;
}

/* ---------- Diagram legend and badges ---------- */

const LEGEND = [
  ['flow', 'Top-level flow'],
  ['page', 'Primary screen'],
  ['step', 'Intermediate screen'],
  ['legacy', 'Legacy Backbone screen'],
  ['mode', 'Entry mode'],
  ['exit', 'Exit'],
  ['source', 'External trigger'],
];

// A small eye icon, drawn in SVG so it renders identically in the legend and on
// diagram nodes. Inline styles because Mermaid's per-diagram stylesheet targets
// `.node path` and `.node rect` by id and would otherwise recolor it.
function eyeIcon(standalone) {
  const g = document.createElementNS(SVG_NS, 'g');
  const bg = document.createElementNS(SVG_NS, 'rect');
  bg.setAttribute('x', 0);
  bg.setAttribute('y', 0);
  bg.setAttribute('width', 20);
  bg.setAttribute('height', 14);
  bg.setAttribute('rx', 3);
  bg.setAttribute('style', 'fill:#fff;stroke:#8f8f9d;stroke-width:1px');
  const eye = document.createElementNS(SVG_NS, 'path');
  eye.setAttribute('d', 'M3 7 C6 2.5, 14 2.5, 17 7 C14 11.5, 6 11.5, 3 7 Z');
  eye.setAttribute('style', 'fill:none;stroke:#0060df;stroke-width:1.6px');
  const pupil = document.createElementNS(SVG_NS, 'circle');
  pupil.setAttribute('cx', 10);
  pupil.setAttribute('cy', 7);
  pupil.setAttribute('r', 2.2);
  pupil.setAttribute('style', 'fill:#0060df;stroke:none');
  g.appendChild(bg);
  g.appendChild(eye);
  g.appendChild(pupil);
  if (standalone) {
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', '0 0 20 14');
    svg.setAttribute('width', 20);
    svg.setAttribute('height', 14);
    svg.setAttribute('aria-hidden', 'true');
    svg.appendChild(g);
    return svg;
  }
  return g;
}

function addBadge(node) {
  if (node.querySelector('.fxa-preview-badge')) return;
  try {
    const box = node.getBBox();
    const badge = eyeIcon(false);
    badge.setAttribute('class', 'fxa-preview-badge');
    badge.setAttribute('transform', `translate(${box.x + box.width - 14}, ${box.y - 7})`);
    const title = document.createElementNS(SVG_NS, 'title');
    title.textContent = 'Hover for preview';
    badge.appendChild(title);
    node.appendChild(badge);
  } catch (e) {
    /* getBBox can throw for detached nodes; badge is decorative */
  }
}

function addLegend(container, svg) {
  if (container.dataset.fxaLegend) return;
  container.dataset.fxaLegend = '1';
  const items = LEGEND.filter(([cls]) => svg.querySelector(`g.node.${cls}`));
  if (!items.length) return;
  const legend = el('div', { class: 'fxa-legend', 'aria-label': 'Diagram legend' });
  items.forEach(([cls, label]) => {
    legend.appendChild(
      el('span', { class: 'fxa-legend-item' }, [el('span', { class: `fxa-swatch fxa-swatch-${cls}` }), el('span', { text: label })])
    );
  });
  if (svg.querySelector('.fxa-preview-badge')) {
    const item = el('span', { class: 'fxa-legend-item' });
    item.appendChild(eyeIcon(true));
    item.appendChild(el('span', { text: 'Hover for preview' }));
    legend.appendChild(item);
  }
  container.insertAdjacentElement('afterend', legend);
}

// Mermaid sizes edge-label boxes to the text exactly and clips anything
// larger, so CSS padding breaks them. A spread shadow in the label's own
// background color gives the same breathing room without changing layout.
function padEdgeLabels(svg) {
  if (svg.dataset.fxaEdgePad) return;
  svg.dataset.fxaEdgePad = '1';
  svg.querySelectorAll('.edgeLabel').forEach((label) => {
    const target = label.querySelector('p') || label;
    const bg = getComputedStyle(target).backgroundColor;
    const el2 = bg && bg !== 'rgba(0, 0, 0, 0)' ? target : label;
    const color = getComputedStyle(el2).backgroundColor;
    if (!color || color === 'rgba(0, 0, 0, 0)') return;
    el2.style.boxShadow = `0 0 0 8px ${color}`;
    el2.style.borderRadius = '2px';
  });
}

function processMermaid(map) {
  document.querySelectorAll('.docusaurus-mermaid-container').forEach((container) => {
    const svg = container.querySelector('svg');
    if (!svg) return;
    padEdgeLabels(svg);
    svg.querySelectorAll('g.node').forEach((node) => {
      if (node.dataset.fxaScanned) return;
      const key = firstRouteInLabel(node);
      if (!key) {
        node.dataset.fxaScanned = '1';
        return;
      }
      const entry = map.get(key);
      if (!entry) return; // leave unscanned: the site index may still arrive
      node.dataset.fxaScanned = '1';
      node.classList.add('fxa-has-preview');
      makeHoverable(node, entry);
      addBadge(node);
    });
    addLegend(container, svg);
  });
}

/* ---------- Route drift banner ---------- */

function documentedRoutes() {
  const codes = document.querySelectorAll('article table code');
  const set = new Set();
  codes.forEach((c) => {
    const t = c.textContent.trim();
    if (t.startsWith('/') && normalizeRoute(t)) set.add(normalizeRoute(t));
  });
  return set;
}

function renderDrift(container) {
  if (container.dataset.fxaRendered) return;
  container.dataset.fxaRendered = '1';
  container.classList.add('fxa-drift');
  container.textContent = 'Checking documented routes against mozilla/fxa main…';

  Promise.all(ROUTE_SOURCES.map((s) => fetchText(s.url).then((t) => s.parse(t))))
    .then((lists) => {
      const inCode = new Set(lists.flat().map(normalizeRoute).filter(Boolean));
      const documented = documentedRoutes();
      const ignore = new Set(
        (container.dataset.ignore || '').split(/\s+/).map(normalizeRoute).filter(Boolean)
      );

      const undocumented = [...inCode].filter((r) => !documented.has(r) && !ignore.has(r)).sort();
      const stale = [...documented].filter((r) => !inCode.has(r) && !ignore.has(r)).sort();

      container.textContent = '';
      const when = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
      const howItStaysCurrent = el('p', {
        class: 'fxa-drift-meta',
        text: 'This sitemap keeps itself current: screen previews are embedded live from Storybook, and this check compares the routes listed here with the code on every visit.',
      });
      if (undocumented.length === 0 && stale.length === 0) {
        container.classList.add('fxa-drift-ok');
        container.appendChild(el('p', { text: `Routes match mozilla/fxa main as of ${when}.` }));
        container.appendChild(howItStaysCurrent);
        return;
      }
      container.classList.add('fxa-drift-warn');
      const list = (heading, items) => {
        if (items.length === 0) return;
        container.appendChild(el('p', { text: heading }));
        container.appendChild(
          el('ul', {}, items.map((r) => el('li', {}, [el('code', { text: `/${r}` })])))
        );
      };
      list(`${undocumented.length} route(s) exist in code but are not listed here:`, undocumented);
      list(`${stale.length} listed route(s) no longer exist in code:`, stale);
      const fix = el('p', {}, [
        el('a', { href: '#keeping-this-current', text: 'How to fix this' }),
        el('span', { text: ': run the check script, paste the rows it prints, describe the screen.' }),
      ]);
      container.appendChild(fix);
      container.appendChild(howItStaysCurrent);
    })
    .catch((err) => {
      // The check itself failed (GitHub unreachable, or the fxa route file moved).
      container.textContent = '';
      container.classList.add('fxa-drift-error');
      container.appendChild(el('p', { text: `Could not verify the routes against mozilla/fxa right now (${err.message}). The list may still be current; it just could not be checked.` }));
      container.appendChild(
        el('p', {}, [
          el('span', { text: 'If this persists, the route files in fxa may have moved; see ' }),
          el('a', { href: '#keeping-this-current', text: 'Keeping this current' }),
          el('span', { text: '.' }),
        ])
      );
    });
}

/* ---------- Docusaurus hook ---------- */

let mermaidPoll = null;

function hydrate() {
  if (typeof document === 'undefined') return null;
  if (sitemapBase()) {
    // Lets the stylesheet size the screen tables without touching other docs.
    document.querySelectorAll('article').forEach((a) => a.classList.add('fxa-sitemap'));
  }
  document.querySelectorAll('[data-fxa-route-drift]').forEach(renderDrift);
  const map = buildScreenMap();
  fetchScreens().then((screens) => {
    Object.entries(screens).forEach(([key, entry]) => {
      if (!map.has(key)) map.set(key, entry);
    });
    hoverTableRoutes(map);
    processMermaid(map);
  });
  processMermaid(map);
  return map;
}

export function onRouteDidUpdate() {
  hidePopover();
  clearInterval(mermaidPoll);
  const map = hydrate();
  if (!map) return;
  // Mermaid renders asynchronously and re-renders on theme change, so keep
  // looking for new diagrams for a while after each navigation.
  let ticks = 0;
  mermaidPoll = setInterval(() => {
    processMermaid(map);
    if (++ticks > 40) clearInterval(mermaidPoll);
  }, 300);
}
