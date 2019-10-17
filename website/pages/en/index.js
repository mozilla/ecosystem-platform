const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

const Index = (props) => {
  return (
    <div className="index-message">
        <div className="content-block">
        <h1>Welcome to our docs</h1>
        <p>This is very early-stage documentation hub for Firefox Accounts, Synced Client Integrations, and Subscription Platform.</p>
        <p>The intent of this site is to allow members of these teams to build up documentation without having to overwrite existing docs.</p>
        <p>This site is built using <a href="https://docusaurus.io/en/">Docusaurus</a>.</p>
        <br></br>
        <a className="button" href="/ecosystem-platform/docs/welcome">Go to the docs </a>
      </div>
    </div>
  );
}

module.exports = Index;

