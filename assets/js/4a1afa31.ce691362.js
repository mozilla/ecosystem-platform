"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[947],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}},70754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"how-tos/using-swagger-for-api-documentation","title":"Using Swagger for API documentation","description":"Last updated: May 2022","source":"@site/docs/how-tos/using-swagger-for-api-documentation.md","sourceDirName":"how-tos","slug":"/how-tos/using-swagger-for-api-documentation","permalink":"/ecosystem-platform/how-tos/using-swagger-for-api-documentation","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/using-swagger-for-api-documentation.md","tags":[],"version":"current","frontMatter":{"title":"Using Swagger for API documentation"},"sidebar":"docs","previous":{"title":"Using Sentry.io for Local Development","permalink":"/ecosystem-platform/how-tos/using-sentry-locally"},"next":{"title":"Tracing for Stage/Prod","permalink":"/ecosystem-platform/how-tos/using-tracing-in-gcp"}}');var o=t(74848),s=t(28453);const a={title:"Using Swagger for API documentation"},r=void 0,c={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"How to view locally",id:"how-to-view-locally",level:2},{value:"API documentation",id:"api-documentation",level:2},{value:"Tags",id:"tags",level:3},{value:"API documentation file",id:"api-documentation-file",level:3},{value:"Adding API documentation to its route",id:"adding-api-documentation-to-its-route",level:3},{value:"Other information",id:"other-information",level:2},{value:"Descriptions",id:"descriptions",level:3},{value:"Hapi-swagger documentation",id:"hapi-swagger-documentation",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Last updated: May 2022"}),"\n",(0,o.jsxs)(n.p,{children:["We currently utilize Swagger, specifically the ",(0,o.jsx)(n.a,{href:"https://github.com/glennjones/hapi-swagger",children:"hapi-swagger"})," plug-in, to autogenerate a JSON file (e.g., ",(0,o.jsx)(n.code,{children:"https://api.accounts.firefox.com/swagger.json"}),") that includes details of the available API endpoints, operations on each endpoint, input and output parameters for each operation, authentication methods, and other information. This JSON file is then rendered with ",(0,o.jsx)(n.a,{href:"https://github.com/rohit-gohri/redocusaurus",children:"redocusaurus"})," to display our API documentation in the Firefox Ecosystem Platform."]}),"\n",(0,o.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsxs)(n.p,{children:["Add the following code to create a Hapi ",(0,o.jsx)(n.code,{children:"server"})," object."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"const Hapi = require('@hapi/hapi');\nconst HapiSwagger = require('hapi-swagger');\nconst Pack = require('./package');\n\n(async () => {\n    const server = await new Hapi.Server({\n        host: 'localhost',\n        port: 3000,\n    });\n\n    const swaggerOptions = {\n        info: {\n                title: 'Test API Documentation',\n                version: Pack.version,\n            },\n        };\n\n    await server.register([\n        {\n            plugin: HapiSwagger,\n            options: swaggerOptions\n        }\n    ]);\n\n    try {\n        await server.start();\n        console.log('Server running at:', server.info.uri);\n    } catch(err) {\n        console.log(err);\n    }\n\n    server.route(Routes);\n})();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Source: ",(0,o.jsx)(n.a,{href:"https://github.com/glennjones/hapi-swagger#quick-start",children:"Quick start | hapi-swagger"})]}),"\n",(0,o.jsx)(n.h2,{id:"how-to-view-locally",children:"How to view locally"}),"\n",(0,o.jsx)(n.p,{children:"To view the hapi-swagger generated JSON file locally:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"npm start"})," on ",(0,o.jsx)(n.code,{children:"fxa-auth-server"})]}),"\n",(0,o.jsxs)(n.li,{children:["Go to ",(0,o.jsx)(n.a,{href:"http://localhost:9000/swagger.json",children:"localhost:9000/swagger.json"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"To view the API documentation within Ecosystem Platform locally:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"yarn start"})," the ",(0,o.jsx)(n.a,{href:"https://github.com/mozilla/ecosystem-platform",children:"Ecosystem Platform"})," repository"]}),"\n",(0,o.jsxs)(n.li,{children:["Go to ",(0,o.jsx)(n.a,{href:"http://localhost:3333/ecosystem-platform/api",children:"localhost:3333/ecosystem-platform/api"})]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["If you are modifying the Swagger JSON file and want to view the API documentation locally, temporarily use the Swagger JSON file (e.g., ",(0,o.jsx)(n.code,{children:"http://localhost:9000/swagger.json"}),") in the specs array within ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})]})}),"\n",(0,o.jsx)(n.h2,{id:"api-documentation",children:"API documentation"}),"\n",(0,o.jsx)(n.h3,{id:"tags",children:"Tags"}),"\n",(0,o.jsxs)(n.p,{children:["The available sections of our API documentation (e.g., 'Account', 'Devices and Sessions', 'Subscriptions', etc.) are designated by the ",(0,o.jsx)(n.code,{children:"tags"})," property in each operation on an endpoint. Existing sections and their tags can be found in ",(0,o.jsx)(n.code,{children:"fxa-auth-server/docs/swagger/swagger-tags.ts"}),". This file ensures there are no duplicate or mislabeled sections/tags (e.g. 'Device and Sessions' vs. 'Devices and Sessions'); it will be later referenced within each ",(0,o.jsx)(n.a,{href:"#api-documentation-file",children:"API documentation file"}),", which you can proceed to if you are modifying the API documentation and the section or tag already exists. If it doesn't, create and save new tags to the ",(0,o.jsx)(n.code,{children:"TAGS"})," object."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Be sure to include ",(0,o.jsx)(n.code,{children:"'api'"})," in the tag's array for it to appear in the documentation."]})}),"\n",(0,o.jsxs)(n.p,{children:["If you have created a new tag, you will also need to add it in the array of the API doc it is to appear under in ",(0,o.jsx)(n.code,{children:"fxa-auth-server/docs/swagger/swagger-options.ts"}),". If the tag includes a description, add the tag object to the ",(0,o.jsx)(n.code,{children:"tags"})," property as well. While ",(0,o.jsx)(n.code,{children:"name"})," is the only required property in a tag's object, other properties include ",(0,o.jsx)(n.code,{children:"description"})," and ",(0,o.jsx)(n.code,{children:"externalDocs"}),". See ",(0,o.jsx)(n.a,{href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#tag-object",children:"Tag Object"})," for more information."]}),"\n",(0,o.jsx)(n.h3,{id:"api-documentation-file",children:"API documentation file"}),"\n",(0,o.jsxs)(n.p,{children:["Each tag has an API documentation file that can be found through ",(0,o.jsx)(n.code,{children:"fxa-auth-server/docs/swagger"}),". If you created a new tag, create its corresponding API documentation file - please follow the naming convention ",(0,o.jsx)(n.code,{children:"<TAG>-api.ts"})," (e.g. ",(0,o.jsx)(n.code,{children:"account-api.ts"}),", ",(0,o.jsx)(n.code,{children:"subscriptions-api.ts"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["Within an API documentation file, there is a route object for each operation of an endpoint. Our naming convention for the variable of a route object typically includes the endpoint and its method (e.g., ",(0,o.jsx)(n.code,{children:"ACCOUNT_CREATE_POST"})," is for ",(0,o.jsx)(n.code,{children:"POST /account/create"}),"). At the very least, each route object requires ",(0,o.jsx)(n.code,{children:"description"})," and ",(0,o.jsx)(n.code,{children:"tags"})," properties. The description is what will appear within the sidebar of the API documentation (e.g., ",(0,o.jsx)(n.code,{children:"/account/create"}),"). The tag is the section that the endpoint will appear under."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["An operation of an endpoint can be included in multiple sections within our API documentation by modifying the ",(0,o.jsx)(n.code,{children:"tags"})," property to reflect all of the sections it should be included in (e.g., ",(0,o.jsx)(n.code,{children:"tags: ['api', 'Account', 'Subscriptions']"}),")."]})}),"\n",(0,o.jsxs)(n.p,{children:["Any details regarding the operation are included within a ",(0,o.jsx)(n.code,{children:"notes"})," array property; the ",(0,o.jsx)(n.code,{children:"dedent"})," dependency is utilized for multi-line strings. Response errors, if any, are included within a ",(0,o.jsx)(n.code,{children:"plugins['hapi-swagger'].responses"})," object (see example below)."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"// account-api.ts\n\nimport TAGS from './swagger-tags';\n\nconst TAGS_ACCOUNT = {\n  tags: TAGS.ACCOUNT,\n};\n\nconst ACCOUNT_CREATE_POST = {\n  ...TAGS_ACCOUNT,\n  description: '/account/create',\n  notes: [\n    dedent`\n      Creates a user account. The client provides the email address with which this account will be associated and a stretched password. Stretching is detailed on the [**onepw**](https://github.com/mozilla/fxa-auth-server/wiki/onepw-protocol#creating-the-account) wiki page.\n\n      This endpoint may send a verification email to the user. Callers may optionally provide the \\`service\\` parameter to indicate which service they are acting on behalf of. This is an opaque alphanumeric token that will be embedded in the verification link as a query parameter.\n\n      Creating an account also logs in. The response contains a \\`sessionToken\\` and, optionally, a \\`keyFetchToken\\` if the url has a query parameter of \\`keys=true\\`.\n  `,\n  ],\n  plugins: {\n    'hapi-swagger': {\n      responses: {\n        400: {\n          description: dedent`\n            Failing requests may be caused by the following errors (this is not an exhaustive list):\n            \\`errno: 101\\` - Account already exists\n            \\`errno: 144\\` - Email already exists\n          `,\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Caption: Example of a route object"}),"\n",(0,o.jsx)(n.h3,{id:"adding-api-documentation-to-its-route",children:"Adding API documentation to its route"}),"\n",(0,o.jsx)(n.p,{children:"Once a route object is properly created in an API documentation file, it can be simply added to its appropriate route. See example below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"// routes/account.ts\n\nimport ACCOUNT_DOCS from '../../docs/swagger/account-api';\n.\n.\n.\n\n{\n    method: 'POST',\n    path: '/account/create',\n    options: {\n        ...ACCOUNT_DOCS.ACCOUNT_CREATE_POST, // <-- API DOCUMENTATION FILE\n        validate: {\n          query: isA.object({\n            keys: isA.boolean().optional().description(DESCRIPTION.keys),\n            service: validators.service.description(DESCRIPTION.service),\n          }),\n          payload: isA.object({\n            email: validators.email().required().description(DESCRIPTION.email),\n            authPW: validators.authPW.description(DESCRIPTION.authPW),\n            service: validators.service.description(DESCRIPTION.service),\n            redirectTo: validators\n              .redirectTo(config.smtp.redirectDomain)\n              .optional()\n              .description(DESCRIPTION.redirectTo),\n            resume: isA\n              .string()\n              .max(2048)\n              .optional()\n              .description(DESCRIPTION.resume),\n            metricsContext: METRICS_CONTEXT_SCHEMA,\n            style: isA.string().allow(['trailhead']).optional(),\n            verificationMethod: validators.verificationMethod.optional(),\n            // preVerified is not available in production mode.\n            ...(!(config as any).isProduction && {\n              preVerified: isA.boolean(),\n            }),\n          }),\n        },\n        response: {\n          schema: isA.object({\n            uid: isA.string().regex(HEX_STRING).required(),\n            sessionToken: isA.string().regex(HEX_STRING).required(),\n            keyFetchToken: isA.string().regex(HEX_STRING).optional(),\n            authAt: isA.number().integer().description(DESCRIPTION.authAt),\n            verificationMethod: validators.verificationMethod.optional(),\n          }),\n        },\n    },\n    handler: (request: AuthRequest) => accountHandler.accountCreate(request),\n},\n"})}),"\n",(0,o.jsx)(n.p,{children:"Caption: Example of a route"}),"\n",(0,o.jsx)(n.h2,{id:"other-information",children:"Other information"}),"\n",(0,o.jsx)(n.h3,{id:"descriptions",children:"Descriptions"}),"\n",(0,o.jsxs)(n.p,{children:["There is a glossary of descriptions that can be found in ",(0,o.jsx)(n.code,{children:"fxa-auth-server/docs/swagger/shared/descriptions.ts"}),". As opposed to the required descriptions mentioned for the route object, these descriptions are optionally used to provide more details about the parameters used within a payload, query, schema, etc. This file helps eliminate repetitive descriptions and declutters the route files."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"import DESCRIPTION from '../../docs/swagger/shared/descriptions';\n.\n.\n.\nkeys: isA.boolean().optional().description(DESCRIPTION.keys),\n"})}),"\n",(0,o.jsx)(n.h3,{id:"hapi-swagger-documentation",children:"Hapi-swagger documentation"}),"\n",(0,o.jsxs)(n.p,{children:["The values for the ",(0,o.jsx)(n.code,{children:"description"})," and ",(0,o.jsx)(n.code,{children:"notes"})," properties for each route object shift in hapi-swagger's autogenerated JSON file:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["the value set for ",(0,o.jsx)(n.code,{children:"description"})," becomes the value for ",(0,o.jsx)(n.code,{children:"summary"})]}),"\n",(0,o.jsxs)(n.li,{children:["the value set for ",(0,o.jsx)(n.code,{children:"notes"})," becomes the value for ",(0,o.jsx)(n.code,{children:"description"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This is important to note, as this affects how our API documentation appears using redocusaurus, please follow the guide above. We are aware this guide does not follow how hapi-swagger outlines how to tag our API routes; however, we are not utilizing hapi-swagger's UI to display the documentation page."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);