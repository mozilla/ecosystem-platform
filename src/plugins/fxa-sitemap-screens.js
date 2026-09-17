/**
 * Docusaurus plugin (plain Node, no React) for the Mozilla accounts FxA sitemap.
 *
 * Reads the screen tables in docs/fxa-sitemap/*.md and writes
 * static/fxa-sitemap-data/screens.json: a map from route to the Storybook story
 * that previews it, plus the page that documents it. The client module
 * (src/js/fxa-sitemap-live.js) uses it so routes mentioned on one page can
 * show previews of screens documented on another. Runs on `start` and `build`.
 */
const fs = require('fs');
const path = require('path');

const STORY_LINK = /\[([^\]]+)\]\(https:\/\/mozilla\.github\.io\/fxa\/storybooks\/main\/([a-z-]+)\/\?path=\/story\/([a-z0-9-]+)\)/;

function routeKey(route) {
  const t = route.trim();
  if (t === '/') return '/';
  return t.replace(/^\//, '').replace(/\/\*$/, '').replace(/\/$/, '');
}

function extractScreens(docsDir) {
  const screens = {};
  const files = fs.readdirSync(docsDir).filter((f) => f.endsWith('.md')).sort();
  for (const file of files) {
    const page = file.replace(/\.md$/, '').replace(/^index$/, '');
    const md = fs.readFileSync(path.join(docsDir, file), 'utf8');
    let previous = null;
    for (const line of md.split('\n')) {
      if (!line.startsWith('|')) continue;
      const cells = line.split('|').slice(1, -1).map((c) => c.trim());
      if (cells.length < 3) continue;
      const screenName = (cells[1] || '').replace(/`/g, '');
      let entry = null;
      const link = STORY_LINK.exec(line);
      if (link && link[2] !== 'fxa-settings') {
        // Email tables key rows by landing route; their stories preview the
        // email, not the screen, so they must not claim the route.
        previous = null;
        continue;
      }
      if (link) {
        entry = { storyTitle: link[1], pkg: link[2], id: link[3], screenName, page };
        previous = entry;
      } else if (previous && /same as above/i.test(line)) {
        entry = { ...previous, screenName };
      }
      if (!entry) continue;
      for (const m of cells[0].matchAll(/`(\/[^`]*)`/g)) {
        const key = routeKey(m[1]);
        if (!(key in screens)) screens[key] = entry;
      }
    }
  }
  return screens;
}

module.exports = function fxaSitemapScreens(context) {
  return {
    name: 'fxa-sitemap-screens',
    async loadContent() {
      const docsDir = path.join(context.siteDir, 'docs/fxa-sitemap');
      const outDir = path.join(context.siteDir, 'static/fxa-sitemap-data');
      const screens = extractScreens(docsDir);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'screens.json'), JSON.stringify(screens, null, 1));
      return screens;
    },
  };
};

module.exports.extractScreens = extractScreens;
