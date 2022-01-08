---
title: Managing Yarn Dependencies
---

## On Your Machine

FxA uses [Yarn](https://yarnpkg.com/) to manage its Node dependencies. Follow the [Development Setup guide](../tutorials/development-setup) for how to install Yarn and the `yarn` command on your machine.

:::note
Once upon a time FxA used [`npm`](https://docs.npmjs.com/cli/v7/commands/npm) to manage its dependencies, which means you may come across documentation or commands that still reference its usage. In most cases you should be able to freely replace the keyword `npm` with `yarn`, but it's worth learning about [the differences](https://www.sitepoint.com/yarn-vs-npm/#comparingnpmandyarncommands) between the two CLIs.
:::

We have a _lot_ of dependencies, and they're constantly updating, so be sure to occasionally run `yarn install` to stay up-to-date.

:::tip
If `yarn install` is failing run `yarn -v` and check that it is at least 1.22.0. Run `npm install -g yarn` to update to the latest version if needed.
:::

:::tip
We have a script that can automatically detect changes to the `yarn.lock` file and run `yarn install` when you check out a branch or pull in latest. To enable it set `FXA_AUTO_INSTALL=1`.  If you don't enable it, you'll see a warning when changes are detected letting you know to run `yarn install` manually.
:::

## Dependabot Pull Requests

We use GitHub's [Dependabot](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates) to automatically update our dependencies.

It [runs daily](https://github.com/mozilla/fxa/blob/main/.github/dependabot.yml), opening Pull Requests whenever a update is available for any of our many packages' dependencies. PRs will automatically request a review from the `@mozilla/fxa-devs` GitHub group. FxA engineers are expected to occasionally pitch in with reviewing and merging these PRs.

[Click here](https://github.com/mozilla/fxa/pulls?q=is:pr+is:open+sort:updated-desc+author:app/dependabot) to see all open Dependabot PRs.
