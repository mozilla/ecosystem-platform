---
title: NPM / NX Guidelines
---

This doc aims to provide guidelines for standardization of NPM scripts. Standardized approaches for building and testing let us run workspace commands across mono repo packages more effectively.

We have decided to use NX as our build system. For NX to cache effectively, it becomes even more important that we need to standardize our script names.

## Cacheable NX Script Names

The following script names should be supported, when applicable, by our packages. They are considered cacheable and therefore once executed, if there are no changes in the package’s source, they should effectively run immediately when re-executed.

- build
- build-storybook
- lint
- prebuild
- test
- test-unit
- test-integration
- test-e2e

## NX Task Dependencies

It’s important to know that NX allows npm scripts to depend on one another. You can always generate the most up to date view of all known NX dependencies by running `nx graph`.

The dependencies between common targets can be seen in the `nx.json` file in the project root. At the time of writing, the tree looks something like this, with children depend on parents:

- lint
- prebuild
  - build
    - restart
    - start
    - test-e2e
    - test-integration
    - test-unit
    - build-storybook

For example, if someone were to execute `nx run fxa-auth-server:start`, which starts the auth server, then the `build` and `prebuild` tasks would be run automatically. Ideally their states are already in the NX cache, and these tasks come with zero penalty, however, if they are not in the NX cache, NX will execute these tasks and make sure they have completed prior to running the start script!

These dependencies also work across packages. So if fxa-shared has changed, and we execute `nx run fxa-auth-server:restart`, a `prebuild` and `build` will happen on `fxa-shared`, prior to auth server being restarted!

## Creating a library in NX

The following command can be used to create a Nx library in the monorepo.

```
yarn nx g @nx/js:lib <name of library> --directory=<path/to> --importPath=<TS path alias> --bundler=esbuild --unitTestRunner=jest --projectNameAndRootFormat=as-provided
```
- `<name of library>` - Should follow the pattern of `{sub_dir}-{lib_name}`. e.g. `shared-l10n` or `payments-stripe`.
- `<path/to>` - Should be the full path to root directory of the library. e.g. `libs/shared/l10n` or `libs/payments/stripe`
- `<TS path alias>` - Should follow the pattern of `@fxa/{sub_dir}/{lib_name}`. e.g. `@fxa/shared/l10n` or `@fxa/payments/stripe`

For example:
```
yarn nx g @nx/js:lib payments-stripe --directory=libs/payments/stripe --importPath=@fxa/payments/stripe --bundler=esbuild --unitTestRunner=jest --projectNameAndRootFormat=as-provided
```

### Post-creation steps

#### Required

- Modify `project.json` with the following changes.

  <details>
    <summary>Add build `decleration` option</summary>

    ```json
    {
      "targets": {
        ...
        "build": {
          ...
          "options": {
            ...
            "declaration": true,
            ...
          }
          ...
        },
      }
    }
    ```
  </details>
  <details>
    <summary>Remove target `test`</summary>

    ```json
    {
      "targets": {
        ...
        "test": { <--- delete all of this
          ...
        },
      }
    }
    ```
  </details>
  <details>
    <summary>Add new target `test-unit`</summary>

    ```json
    {
      "targets": {
        ...
        "test-unit": {
          "executor": "@nx/jest:jest",
          "outputs": ["{workspaceRoot}/coverage/{projectRoot}"],
          "options": {
            "jestConfig": "libs/payments/stripe/jest.config.ts",
            "testPathPattern": ["^(?!.*\\.in\\.spec\\.ts$).*$"]
          }
        },
      }
    }
    ```
  </details>
  <details>
    <summary>Add new target `test-integration`</summary>

    ```json
    {
      "targets": {
        ...
        "test-integration": {
          "executor": "@nx/jest:jest",
          "outputs": ["{workspaceRoot}/coverage/{projectRoot}"],
          "options": {
            "jestConfig": "libs/payments/stripe/jest.config.ts",
            "testPathPattern": ["\\.in\\.spec\\.ts$"]
          }
        },
      }
    }
    ```
  </details>
  <details>
    <summary>Update the project README</summary>

    ```md
    ## Running unit tests

    Run `nx run payments-stripe:test-unit` to execute the unit tests via [Jest](https://jestjs.io).

    ## Running integration tests

    Run `nx run payments-stripe:test-integration` to execute the integration tests via [Jest](https://jestjs.io).
    ```
  </details>

#### Optional (but recommended)

- Modify `project.json` with the following changes.

  <details>
    <summary>Remove build option `format`, to use default of `esm`</summary>

    ```json
    {
      "targets": {
        ...
        "build": {
          ...
          "options": {
            ...
            "format": ["cjs"], <---- Delete this
            ...
          }
          ...
        },
      }
    }
    ```
  </details>
- Change test runner to `@swc/jest` 

  <details>
    <summary>Add this `.swcrc` to the library root. (Same folder as project.json)</summary>

    ```json
    {
      "jsc": {
        "target": "es2017",
        "parser": {
          "syntax": "typescript",
          "decorators": true,
          "dynamicImport": true
        },
        "transform": {
          "decoratorMetadata": true,
          "legacyDecorator": true
        },
        "keepClassNames": true,
        "externalHelpers": true,
        "loose": true
      },
      "module": {
        "type": "commonjs"
      },
      "sourceMaps": true,
      "exclude": [
        "jest.config.ts",
        ".*\\.spec.tsx?$",
        ".*\\.test.tsx?$",
        "./src/jest-setup.ts$",
        "./**/jest-setup.ts$",
        ".*.js$"
      ]
    }

    ```
  </details>

  <details>
    <summary>Update `jest.config.ts`</summary>

    ```typescript
    // Start ----- Add to the top of the file

    /* eslint-disable */
    import { readFileSync } from 'fs';

    // Reading the SWC compilation config and remove the "exclude"
    // for the test files to be compiled by SWC
    const { exclude: _, ...swcJestConfig } = JSON.parse(
      readFileSync(`${__dirname}/.swcrc`, 'utf-8')
    );

    // disable .swcrc look-up by SWC core because we're passing in swcJestConfig ourselves.
    // If we do not disable this, SWC Core will read .swcrc and won't transform our test files due to "exclude"
    if (swcJestConfig.swcrc === undefined) {
      swcJestConfig.swcrc = false;
    }

    // Uncomment if using global setup/teardown files being transformed via swc
    // https://nx.dev/packages/jest/documents/overview#global-setup/teardown-with-nx-libraries
    // jest needs EsModule Interop to find the default exported setup/teardown functions
    // swcJestConfig.module.noInterop = false;

    // End ----- Add to the top of the file

    //Make the following changes to `export default {}`

    export default {
      ...
      transform: {
        '^.+\\.[tj]s$': ['@swc/jest', swcJestConfig], // <---- Change this line
      },
      testEnvironment: 'node',
      ...
    }

    ```
  </details>

## General Formatting Of Script Names

We will use dashes to separate subtasks. i.e. build-ts or test-unit. We want to group similar tasks together, so use prefixes accordingly. For example build-ts is preferred over ts-build. This way if other types of assets need to be built, they will be structured in a similar way and will be grouped logically when put into alphabetical order.

:::tip
We should be intentional with the use of `:` characters in script names. For example, test:watch isn't a good name. It turns out that adding a colon character makes the command globally runnable. So in general, we should not use this notation. Furthermore nx uses colons to help target projects and project configs, so we should avoid using them to avoid confusion there.
:::

## General Guidelines for Npm Scripts

### Follow Naming Conventions

This has already been mentioned, but in a mono repo consistency is king. We want npm scripts names to be consistent and predictable across all packages. If you need a new type of script, ping the fxa-team channel and get feedback on what to call it.

### Avoid Shell Scripts When Possible

We’d like to avoid shell scripts from our npm scripts. There are few reasons for this:

- Shell scripts are difficult to test
- Shell scripts don’t work on all operating systems, or even worse from shell to shell.
- Shell scripts encourage branching logic and special cases that have to be understood
- Oftentimes shell scripts obscure standard functionality of the underlying library they invoke.

In the event a script like thing is needed we should look to:

- See if there’s something else that can facilitate, ie grunt, rescripts, ect…
- Write a .cjs or .mjs script that can be put under test and is system agnostic.

### Keep Scripts Small and Targeted

We’d like to keep scripts targeted. Lots of dependencies between scripts is not necessary, keeping scripts small and to the point makes it easier to compose actions. Ideally each script has a single purpose. Note, that now that we are using NX, we can also leverage nx to manage script dependencies.

For example, we can require that all build operations run the prebuild operation first, and furthermore require that all downstream projects run first. This extra ability to define dependencies between scripts really helps keeping the scripts small and targeted! Take advantage of this whenever possible.

### Avoid custom scripts for existing options

We’d like to avoid creating scripts for specific options. For example, consider this:

```
    "test:watch": "jest --watch",
 "test:cov": "jest --coverage",
```

This could simply be `test`, and then the user could supply the extra arguments. For example with yarn: `yarn test – –watch` or with nx: `nx run fxa-settings:test --skip-nx-cache -- --watchAll=true`. This keeps our scripts simple and flexible. Common usages should be documented in the readme file for those who aren’t as familiar with the cli options of the underlying packages. Most packages have pretty decent behaviors out of the box. If a bunch of options are required, a step back might be necessary to ask why.

Use environment variables and config to target dev no dev operations. For example rather than having a start-prod script, simply make sure that the start script can be configured.

### Avoid relying on `postinstall` or `preinstall`

Don’t abuse `postinstall` or `preinstall`. These are very specific tasks that get run automatically by yarn / npm. The danger here is two fold.

First, since these tasks happen implicitly, they are often overlooked or forgotten. There were a lot of extra build operations occurring in our CI pipelines because of his. Second, because they happen automatically, we don’t have a ton of control over them. There are situations where a postinstall makes sense, but this is primarily for third party packages that need to compile system libraries after installation, not for simply setting of string events in a mono repo after install. See [this](https://yarnpkg.com/advanced/lifecycle-scripts#a-note-about-postinstall) for more info about not abusing post install.

Rather relying on post install, we should simply run `nx run-many -t build –all` after switching branches. This can even be done with a git hook if a seamless behavior is desired when switching between branches.

### Don’t cross reference scripts directly

Now that we have NX, we should not see something like this `"build": "tsc --build ../fxa-react &&...`. NX can wrangle these dependencies for us!

### Stick with existing script names

Here’s a run down of our current sanctioned script names. Before coming up with your own script name, check this list. If you need a new script name, that’s fine, but add it to the list and document the purpose.

- __build__ - Top level build command, executes build-* commands.
- __build-ts__ - Build typescript
- __build-css__ - Builds tailwind, sass, etc… and produced css bundles
- __build-js__ - Builds / bundles js
- __build-react__ - Builds / bundles react
- __build-storybook__ - Generates storybooks
- __build-l10n__ - Creates l10n assets and places them in correct location
- __build-l10n-for-test__ - Creates l10n assets specific for testing new language strings
- __build-legal__ - Creates legal assets and places them in the correct location
- __build-finalize__ - Any extra post build steps that are required
- __format__ - Audio formats / pretties code
- __l10n-prime__ - Pulls latest l10n resources
- __l10n-bundle__ - Bundles l10n files files and places them in the correct location
- __l10n-merge__ - Merges in l10n files with existing l10n strings
- __l10n-tos-pp__ - Legacy l10n process
- __legal-prime__ - Pulls latest legal resources
- __lint__ - Lints code
- __test__ - Runs all test suites
- __test-unit__ - Runs unit tests
- __test-integration__ - Runs integration tests
