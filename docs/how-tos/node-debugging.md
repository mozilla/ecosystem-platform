---
title: Node Debugging
---

It's possible to debug a running Node process using a variety of debuggers (see the [Node debugging docs](https://nodejs.org/en/docs/guides/debugging-getting-started/) for details).

You may also be interested in checking out how to use [VS Code with FxA](./vscode-development).

## Debugging a Server

`yarn start` runs some of the services with the debugger enabled by default.

1. Start the whole server as usual (`yarn && yarn start` from top-level in the monorepo)
1. To see which debug port each service is listening on check `.vscode/launch.json` or the `pm2.config.js` file of the package you're interested in.
1. Connect to the process to debug it:
    - Using Google Chrome, go to `chrome://inspect`, then click the process to connect to DevTools.
      - You may need to add a new target in the "Configure..." menu with the correct debug port
    - VS Code requires setting up a `.vscode/launch.json` file - see the [VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging) docs for details.

### Default Debug Ports

If you're using `yarn start`, the following ports are used for `--inspect`:

| Port | Service         |
| ---- | --------------- |
| 9130 | content-server  |
| 9140 | admin-panel     |
| 9150 | admin-server    |
| 9160 | auth-server     |
| 9170 | payments-server |
| 9180 | event-broker    |
| 9190 | support-panel   |
| 9200 | graphql-api     |

## Debugging Tests

The Node debugger can also be attached to a running test process. Firefox Accounts uses a variety of test frameworks, so the steps vary by package.

:::tip
The `--inspect` argument is used in the examples below, but `--inspect-brk` can also be used to pause the process as soon as it starts.
:::

### Mocha tests (e.g. `fxa-shared`)

For Mocha, pass the `--timeout 0` option, otherwise the test will fail if you step through it and exceed the default timeout (currently 2 seconds on `fxa-shared`):

```shell
node --inspect ./node_modules/.bin/mocha --timeout 0 path/to/file
```

In `fxa-shared`, this incantation works for some directories, but not yet others.

### Jest tests (e.g. `fxa-payments-server`)

For Jest, pass the `--runInBand` argument so it doesn't fork off the test runner to a separate process that isn't available to the inspector:

```shell
node --inspect ./node_modules/.bin/jest --runInBand --config server/jest.config.js filematcher
```

Where `filematcher` is a regex that matches against test file paths. If you omit `filematcher`, Jest will run all tests (but you have to hit Enter a second time to trigger the test run).
