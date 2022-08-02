---
title: Using Swagger for API documentation
---

Last updated: May 2022

We currently utilize Swagger, specifically the [hapi-swagger](https://github.com/glennjones/hapi-swagger) plug-in, to autogenerate a JSON file (e.g., `https://api.accounts.firefox.com/swagger.json`) that includes details of the available API endpoints, operations on each endpoint, input and output parameters for each operation, authentication methods, and other information. This JSON file is then rendered with [redocusaurus](https://github.com/rohit-gohri/redocusaurus) to display our API documentation in the Firefox Ecosystem Platform.

## Getting Started

Add the following code to create a Hapi `server` object.

```
const Hapi = require('@hapi/hapi');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');

(async () => {
    const server = await new Hapi.Server({
        host: 'localhost',
        port: 3000,
    });

    const swaggerOptions = {
        info: {
                title: 'Test API Documentation',
                version: Pack.version,
            },
        };

    await server.register([
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    try {
        await server.start();
        console.log('Server running at:', server.info.uri);
    } catch(err) {
        console.log(err);
    }

    server.route(Routes);
})();
```

Source: [Quick start | hapi-swagger](https://github.com/glennjones/hapi-swagger#quick-start)

## How to view locally

To view the hapi-swagger generated JSON file locally:

- `npm start` on `fxa-auth-server`
- Go to [localhost:9000/swagger.json](http://localhost:9000/swagger.json)

To view the API documentation within Ecosystem Platform locally:

- `yarn start` the [Ecosystem Platform](https://github.com/mozilla/ecosystem-platform) repository
- Go to [localhost:3000/ecosystem-platform/api](http://localhost:3000/ecosystem-platform/api)

:::note
If you are modifying the Swagger JSON file and want to view the API documentation locally, temporarily use the Swagger JSON file (e.g., `http://localhost:9000/swagger.json`) in the specs array within `docusaurus.config.js`
:::

## API documentation

### Tags

The available sections of our API documentation (e.g., 'Account', 'Devices and Sessions', 'Subscriptions', etc.) are designated by the `tags` property in each operation on an endpoint. Existing sections and their tags can be found in `fxa-auth-server/docs/swagger/swagger-tags.ts`. This file ensures there are no duplicate or mislabeled sections/tags (e.g. 'Device and Sessions' vs. 'Devices and Sessions'); it will be later referenced within each [API documentation file](#api-documentation-file), which you can proceed to if you are modifying the API documentation and the section or tag already exists. If it doesn't, create and save new tags to the `TAGS` object.

:::note
Be sure to include `'api'` in the tag's array for it to appear in the documentation.
:::

If you have created a new tag, you will also need to add it in the array of the API doc it is to appear under in `fxa-auth-server/docs/swagger/swagger-options.ts`. If the tag includes a description, add the tag object to the `tags` property as well. While `name` is the only required property in a tag's object, other properties include `description` and `externalDocs`. See [Tag Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#tag-object) for more information.

### API documentation file

Each tag has an API documentation file that can be found through `fxa-auth-server/docs/swagger`. If you created a new tag, create its corresponding API documentation file - please follow the naming convention `<TAG>-api.ts` (e.g. `account-api.ts`, `subscriptions-api.ts`).

Within an API documentation file, there is a route object for each operation of an endpoint. Our naming convention for the variable of a route object typically includes the endpoint and its method (e.g., `ACCOUNT_CREATE_POST` is for `POST /account/create`). At the very least, each route object requires `description` and `tags` properties. The description is what will appear within the sidebar of the API documentation (e.g., `/account/create`). The tag is the section that the endpoint will appear under.

:::note
An operation of an endpoint can be included in multiple sections within our API documentation by modifying the `tags` property to reflect all of the sections it should be included in (e.g., `tags: ['api', 'Account', 'Subscriptions']`).
:::

Any details regarding the operation are included within a `notes` array property; the `dedent` dependency is utilized for multi-line strings. Response errors, if any, are included within a `plugins['hapi-swagger'].responses` object (see example below).

```
// account-api.ts

import TAGS from './swagger-tags';

const TAGS_ACCOUNT = {
  tags: TAGS.ACCOUNT,
};

const ACCOUNT_CREATE_POST = {
  ...TAGS_ACCOUNT,
  description: '/account/create',
  notes: [
    dedent`
      Creates a user account. The client provides the email address with which this account will be associated and a stretched password. Stretching is detailed on the [**onepw**](https://github.com/mozilla/fxa-auth-server/wiki/onepw-protocol#creating-the-account) wiki page.

      This endpoint may send a verification email to the user. Callers may optionally provide the \`service\` parameter to indicate which service they are acting on behalf of. This is an opaque alphanumeric token that will be embedded in the verification link as a query parameter.

      Creating an account also logs in. The response contains a \`sessionToken\` and, optionally, a \`keyFetchToken\` if the url has a query parameter of \`keys=true\`.
  `,
  ],
  plugins: {
    'hapi-swagger': {
      responses: {
        400: {
          description: dedent`
            Failing requests may be caused by the following errors (this is not an exhaustive list):
            \`errno: 101\` - Account already exists
            \`errno: 144\` - Email already exists
          `,
        },
      },
    },
  },
};
```

Caption: Example of a route object

### Adding API documentation to its route

Once a route object is properly created in an API documentation file, it can be simply added to its appropriate route. See example below:

```
// routes/account.ts

import ACCOUNT_DOCS from '../../docs/swagger/account-api';
.
.
.

{
    method: 'POST',
    path: '/account/create',
    options: {
        ...ACCOUNT_DOCS.ACCOUNT_CREATE_POST, // <-- API DOCUMENTATION FILE
        validate: {
          query: isA.object({
            keys: isA.boolean().optional().description(DESCRIPTION.keys),
            service: validators.service.description(DESCRIPTION.service),
          }),
          payload: isA.object({
            email: validators.email().required().description(DESCRIPTION.email),
            authPW: validators.authPW.description(DESCRIPTION.authPW),
            service: validators.service.description(DESCRIPTION.service),
            redirectTo: validators
              .redirectTo(config.smtp.redirectDomain)
              .optional()
              .description(DESCRIPTION.redirectTo),
            resume: isA
              .string()
              .max(2048)
              .optional()
              .description(DESCRIPTION.resume),
            metricsContext: METRICS_CONTEXT_SCHEMA,
            style: isA.string().allow(['trailhead']).optional(),
            verificationMethod: validators.verificationMethod.optional(),
            // preVerified is not available in production mode.
            ...(!(config as any).isProduction && {
              preVerified: isA.boolean(),
            }),
          }),
        },
        response: {
          schema: isA.object({
            uid: isA.string().regex(HEX_STRING).required(),
            sessionToken: isA.string().regex(HEX_STRING).required(),
            keyFetchToken: isA.string().regex(HEX_STRING).optional(),
            authAt: isA.number().integer().description(DESCRIPTION.authAt),
            verificationMethod: validators.verificationMethod.optional(),
          }),
        },
    },
    handler: (request: AuthRequest) => accountHandler.accountCreate(request),
},
```

Caption: Example of a route

## Other information

### Descriptions

There is a glossary of descriptions that can be found in `fxa-auth-server/docs/swagger/shared/descriptions.ts`. As opposed to the required descriptions mentioned for the route object, these descriptions are optionally used to provide more details about the parameters used within a payload, query, schema, etc. This file helps eliminate repetitive descriptions and declutters the route files.

```
import DESCRIPTION from '../../docs/swagger/shared/descriptions';
.
.
.
keys: isA.boolean().optional().description(DESCRIPTION.keys),
```

### Hapi-swagger documentation

The values for the `description` and `notes` properties for each route object shift in hapi-swagger's autogenerated JSON file:

- the value set for `description` becomes the value for `summary`
- the value set for `notes` becomes the value for `description`

This is important to note, as this affects how our API documentation appears using redocusaurus, please follow the guide above. We are aware this guide does not follow how hapi-swagger outlines how to tag our API routes; however, we are not utilizing hapi-swagger's UI to display the documentation page.
