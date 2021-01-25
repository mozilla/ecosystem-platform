/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <img src="/ecosystem-platform/img/mozilla-logo.png" height="24" />
        <script
          src="https://unpkg.com/mermaid@8.9.0/dist/mermaid.min.js"
          type="application/javascript"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        mermaid.initialize({
            startOnReady: true,
            theme: 'forest',
            themeCSS: '.noteText { font-family: monospace; }'
          });
        // remarkable converts the mermaid diagrams to HTML and injects a bunch
        // of HTML tags the mermaid parser cannot handle. Remove the HTML and
        // run the parser on the original text.
        const mermaidDiagramEls = document.querySelectorAll('.language-mermaid');
        mermaidDiagramEls.forEach(function(diagramEl, index) {
          // strip out any HTML
          diagramEl.innerHTML = diagramEl.innerText;
          diagramEl.addEventListener('click', (evt) => {
            evt.currentTarget.classList.toggle('highlight');
            document.body.classList.toggle('highlight-service');
          }, false);
        });
        mermaid.init(undefined, mermaidDiagramEls);
        `,
          }}
        />
      </footer>
    );
  }
}

module.exports = Footer;
