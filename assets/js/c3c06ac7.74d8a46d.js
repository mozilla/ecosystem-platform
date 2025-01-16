"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[977],{66562:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"relying-parties/reference/glossary","title":"Glossary","description":"Last updated: Jan  16th, 2025","source":"@site/docs/relying-parties/reference/glossary.md","sourceDirName":"relying-parties/reference","slug":"/relying-parties/reference/glossary","permalink":"/ecosystem-platform/relying-parties/reference/glossary","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/reference/glossary.md","tags":[],"version":"current","frontMatter":{"title":"Glossary","sidebar_label":"Glossary"},"sidebar":"docs","previous":{"title":"Device Registration (Sync)","permalink":"/ecosystem-platform/relying-parties/how-tos/device-registration"},"next":{"title":"Integration Requirements","permalink":"/ecosystem-platform/relying-parties/reference/integration-requirements"}}');var n=s(74848),r=s(28453);const o={title:"Glossary",sidebar_label:"Glossary"},a=void 0,l={},c=[{value:"offering",id:"offering",level:3},{value:"product team",id:"product-team",level:3},{value:"subscription",id:"subscription",level:3},{value:"Subscription Platform (formerly Subscription Services)",id:"subscription-platform-formerly-subscription-services",level:3},{value:"Mozilla Accounts (formerly Firefox Accounts - often still abreviated as FxA)",id:"mozilla-accounts-formerly-firefox-accounts---often-still-abreviated-as-fxa",level:3},{value:"Relying Party",id:"relying-party",level:3},{value:"Client",id:"client",level:3},{value:"Partner",id:"partner",level:3},{value:"User",id:"user",level:3},{value:"OAuth 2.0",id:"oauth-20",level:3},{value:"WebPush",id:"webpush",level:3},{value:"MFA",id:"mfa",level:3},{value:"GDPR",id:"gdpr",level:3},{value:"Scope",id:"scope",level:3},{value:"Scope Value",id:"scope-value",level:3},{value:"Scoped Key",id:"scoped-key",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Last updated: ",(0,n.jsx)(t.code,{children:"Jan  16th, 2025"})]}),"\n",(0,n.jsx)(t.p,{children:"This is a working document, it is intended to facilitate teams\u2019 alignment through a common language. Please contribute to it."}),"\n",(0,n.jsx)(t.h3,{id:"offering",children:"offering"}),"\n",(0,n.jsx)(t.p,{children:"A generic term that includes one or more products, services, features, and/or applications."}),"\n",(0,n.jsx)(t.h3,{id:"product-team",children:"product team"}),"\n",(0,n.jsx)(t.p,{children:"At Mozilla, \u201cproduct team\u201d is a generic term for teams that provide an offering (see above)\u2014i.e., they build one or more products, services, features, and/or applications."}),"\n",(0,n.jsx)(t.h3,{id:"subscription",children:"subscription"}),"\n",(0,n.jsx)(t.p,{children:"A transactional agreement: the subscribing user will pay in exchange for an offering."}),"\n",(0,n.jsx)(t.p,{children:"At Mozilla, a subscription is a means or a mode for \u201cproduct teams\u201d to deliver an offering to Mozilla end users."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:'"subscription" is also a term used by the Webpush specification to indicate a notification agreement between a site and an end user.  So you would "subscribe" to slack to get notifications when something of interest is mentioned. Associated items include "Subscription Info" which contains what\'s needed to send a "Subscription Update" to a user.'})}),"\n",(0,n.jsx)(t.h3,{id:"subscription-platform-formerly-subscription-services",children:"Subscription Platform (formerly Subscription Services)"}),"\n",(0,n.jsx)(t.p,{children:"The Subscription Platform is the Mozilla platform that offers subscription product teams:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Authentication"}),"\n",(0,n.jsx)(t.li,{children:"Subscription payments and billing"}),"\n",(0,n.jsx)(t.li,{children:"Staffed customer service & support"}),"\n",(0,n.jsx)(t.li,{children:"CRM integration"}),"\n",(0,n.jsx)(t.li,{children:"Revenue recognition & dashboards"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The Subscription Platform Team is an umbrella term for the cross-org team administering that platform on behalf of subscription service teams. The team includes the FxA team and an Operations team comprised of IT and Support."}),"\n",(0,n.jsx)(t.h3,{id:"mozilla-accounts-formerly-firefox-accounts---often-still-abreviated-as-fxa",children:"Mozilla Accounts (formerly Firefox Accounts - often still abreviated as FxA)"}),"\n",(0,n.jsx)(t.p,{children:"Firefox Accounts (FxA) enables users to register for a FxA identity. With an FxA identity, a user can sign in, make payments, and receive \u201cpaid support,\u201d i.e. a higher level of tracked/ticketed support provided to paid subscribers. FxA also provides scoped keys, which enable products and services to perform client side encryption (in the app, rather than on the server) of sensitive user data. Encrypted data that is stored on a server is safe from prying eyes, its contents cannot be read by anyone without the key - including the product/service (if done properly), external attackers, governments, or even Mozilla."}),"\n",(0,n.jsx)(t.p,{children:"When Clients integrate with FxA, they are enabling their users to use an FxA identity in the context of their product/service. In the current model, users with paid subscriptions can thus access payment and \u201cpaid support.\u201d When Clients integrate with FxA, they are also enabling their users to traverse without friction between products and services within the Firefox ecosystem."}),"\n",(0,n.jsx)(t.h3,{id:"relying-party",children:"Relying Party"}),"\n",(0,n.jsx)(t.p,{children:"A Mozilla product team that relies on FxA to manage authentication or the Subscription Platform."}),"\n",(0,n.jsx)(t.p,{children:"This is an industry term."}),"\n",(0,n.jsx)(t.p,{children:"E.g., Monitor is a relying party for FxA."}),"\n",(0,n.jsx)(t.h3,{id:"client",children:"Client"}),"\n",(0,n.jsx)(t.p,{children:"An OAuth Client. Distinct from a relying party."}),"\n",(0,n.jsx)(t.h3,{id:"partner",children:"Partner"}),"\n",(0,n.jsx)(t.p,{children:"External company that provides a product or service to a user, that makes use of the Subscription Platform."}),"\n",(0,n.jsx)(t.p,{children:"Note that Partners delivering a service using FxA to login, act as Reliers."}),"\n",(0,n.jsx)(t.h3,{id:"user",children:"User"}),"\n",(0,n.jsx)(t.p,{children:"The User is a prospective or current FxA holder."}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.mdxAdmonitionTitle,{}),(0,n.jsxs)(t.p,{children:["Note that \u201cThe OAuth 2.0 spec refers to the user as the \u2018resource owner.\u2019 The resource owner is the person who is giving access to some portion of their account. The resources in this case can be data (photos, documents, contacts), services (posting a blog entry, transferring funds), or any other resource requiring access restrictions. Any system that wants to act on behalf of the user must first get permission from them. \u2014 From the ",(0,n.jsx)(t.a,{href:"https://www.oauth.com/oauth2-servers/definitions/",children:"OAuth website"}),"."]})]}),"\n",(0,n.jsx)(t.h3,{id:"oauth-20",children:"OAuth 2.0"}),"\n",(0,n.jsx)(t.p,{children:"OAuth 2.0 is an open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the initial, related, single logon credential. In authentication parlance, this is known as secure, third-party, user-agent, delegated authorization."}),"\n",(0,n.jsxs)(t.p,{children:["OAuth 2.0 allows FxA users to delegate access to OAuth 2.0 protected resources for that user. An addition to OAuth 2.0, OpenID Connect allows us to do login flows to internal/external sites for a FxA user. Google documents these separately for their Identity system: ",(0,n.jsx)(t.a,{href:"https://developers.google.com/identity/protocols/OpenIDConnect",children:"https://developers.google.com/identity/protocols/OpenIDConnect"})]}),"\n",(0,n.jsx)(t.h3,{id:"webpush",children:"WebPush"}),"\n",(0,n.jsx)(t.p,{children:"WebPush is part of the Application Services Team\u2019s catalog of services."}),"\n",(0,n.jsx)(t.p,{children:"WebPush is the protocol that allows instantaneous communication between two devices. Only the term \u201cWebPush\u201d\u2014and not \u201cPush\u201d or \u201cAutopush\u201d\u2014should be used, unless referring to Mozilla's Push server."}),"\n",(0,n.jsx)(t.p,{children:"The WebPush service allows for rapid messaging (e.g. this is how we do Broadcast/Megaphone, Send Tab, and a few other functions.)"}),"\n",(0,n.jsx)(t.p,{children:"Note that prospective reliers may want to use this service, and WebPush is not widely understood or supported by the team."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"\u201cWebPush\u201d is the specification for server-published notifications to the web browser. \u201cAutopush\u201d is the project name of the WebPush server used by Mozilla. \u201cPush\u201d is the synonym that has grown to encompass both of these. Unfortunately, these terms tend to be used interchangeably."})}),"\n",(0,n.jsx)(t.h3,{id:"mfa",children:"MFA"}),"\n",(0,n.jsx)(t.p,{children:"Multi-Factor Authentication, also known as 2FA."}),"\n",(0,n.jsx)(t.h3,{id:"gdpr",children:"GDPR"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations_en",children:"General Data Protection Regulation"}),", EU law governing use of personal data across all member states."]}),"\n",(0,n.jsx)(t.h3,{id:"scope",children:"Scope"}),"\n",(0,n.jsxs)(t.p,{children:["A list of capabilities/permissions that an FxA user has granted to a client, allowing it to access data and perform operations on the user's behalf. For example a client that can read the user's profile data and access their data in Firefox Sync might have been granted the scope ",(0,n.jsx)(t.code,{children:"profile https://identity.mozilla.com/apps/oldsync"}),". ",(0,n.jsx)(t.a,{href:"/reference/oauth-details#oauth-scopes",children:"Ref"})]}),"\n",(0,n.jsx)(t.h3,{id:"scope-value",children:"Scope Value"}),"\n",(0,n.jsxs)(t.p,{children:["A particular capability/permission that an FxA user may grant to a client, such as ",(0,n.jsx)(t.code,{children:"profile"})," or ",(0,n.jsx)(t.code,{children:"https://identity.mozilla.com/apps/oldsync"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"scoped-key",children:"Scoped Key"}),"\n",(0,n.jsxs)(t.p,{children:["Client-side key material associated with a particular scope value, which clients will need to use to access the data associated with that scope value. For example ",(0,n.jsx)(t.code,{children:"https://identity.mozilla.com/apps/oldsync"})," has a corresponding encryption key which the client must obtain (and remember!) in order to actually access the user's sync data."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var i=s(96540);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);