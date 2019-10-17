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
        <img src='/ecosystem-platform/img/mozilla-logo.png' height='24' />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/mermaid/8.3.0/mermaid.js' type="application/javascript" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        mermaid.initialize({
            startOnReady: true,
            theme: 'forest'
          });
        // remarkable converts the mermaid diagrams to HTML and injects a bunch
        // of HTML tags the mermaid parser cannot handle. Remove the HTML and
        // run the parser on the original text.
        const mermaidDiagramEls = document.querySelectorAll('.language-mermaid');
        mermaidDiagramEls.forEach(function(diagramEl) {
          // strip out any HTML
          diagramEl.innerHTML = diagramEl.innerText;
          // ditch the ugly grey background
          diagramEl.style.backgroundColor = '#fff';
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
