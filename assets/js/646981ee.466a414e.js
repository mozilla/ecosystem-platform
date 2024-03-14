"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6119],{89280:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var r=i(85893),s=i(11151);const n={id:"sub-plat-overview",title:"Subscription Platform Overview"},o=void 0,a={id:"relying-parties/reference/sub-plat-overview",title:"Subscription Platform Overview",description:"Introduction",source:"@site/docs/relying-parties/reference/sub-plat-overview.md",sourceDirName:"relying-parties/reference",slug:"/relying-parties/reference/sub-plat-overview",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/reference/sub-plat-overview.md",tags:[],version:"current",frontMatter:{id:"sub-plat-overview",title:"Subscription Platform Overview"},sidebar:"docs",previous:{title:"Query Parameters",permalink:"/ecosystem-platform/relying-parties/reference/query-parameters"},next:{title:"Subscription Features",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-features"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"How subscriptions work",id:"how-subscriptions-work",level:2},{value:"Previews",id:"previews",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Relying Party",id:"relying-party",level:3},{value:"Product",id:"product",level:3},{value:"Plan",id:"plan",level:3},{value:"Capability",id:"capability",level:3},{value:"FxA Event Broker",id:"fxa-event-broker",level:3}];function p(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"What is the Subscription Platform? Think of it as a catch-all name for a set of interdependent features that allow users to unlock premium value by entering into a subscription relationship with Mozilla, and that allows Mozilla to receive payment, track subscriptions and provide support to users. Breaking this down further, Sub Plat provides the following:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Payment & Subscription Creation"})," - The initial payment funnel where users enter CC information to subscribe to a product. We use Stripe to handle transactions."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Entitlement"})," - The ability for your app or apps to see and respond to a user's subscription status."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Billing"})," - Ongoing billing & receipt emails once a subscription is entered."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Subscription Management UI"})," - Settings that allow the user to update payment information."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Subscription Support"})," - Staffed support for end users."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Revenue and funnel metrics"})," - dashboards in Looker and Stripe that provide insights into conversion through the subscription funnel, as well as revenue data such as MRR and churn."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"how-subscriptions-work",children:"How subscriptions work"}),"\n",(0,r.jsx)(t.p,{children:"From your product's perspective, subscriptions are basically just metadata that attach to a user's Firefox Account. Once a user has subscribed to your product, their FxA profile reflects their subscribed state and your product can respond accordingly."}),"\n",(0,r.jsxs)(t.p,{children:["Importantly, subscriptions are not locked to any one FxA-attached product by default, so if a user is subscribed to Firefox Foo, Firefox Bar can optionally see the subscription metadata as well. In this way, we can create subscription bundles that can span multiple different products or services. ",(0,r.jsx)(t.a,{href:"https://mana.mozilla.org/wiki/display/FJT/Tutorial+Videos",children:"These videos"})," give a general overview of what subscription setup looks like."]}),"\n",(0,r.jsx)(t.p,{children:"If a user cancels their subscription, this metadata goes away and your product can go back to treating them as a non-subscribed user."}),"\n",(0,r.jsx)(t.h2,{id:"previews",children:"Previews"}),"\n",(0,r.jsx)(t.p,{children:"For a preview of the different pages and components that make up the Subscription Platform, as well as emails sent to customers, we have Storybook builds available."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://storage.googleapis.com/mozilla-storybooks-fxa/commits/latest/fxa-payments-server/index.html",children:"Pages and components"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://storage.googleapis.com/mozilla-storybooks-fxa/commits/latest/fxa-payments-server/index.html?path=/story/routes-product--subscribing-with-new-account",children:"Checkout with existing Firefox Account"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://storage.googleapis.com/mozilla-storybooks-fxa/commits/latest/fxa-payments-server/index.html?path=/story/routes-checkout--subscribing-with-a-new-account",children:"Checkout without Firefox Account"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://storage.googleapis.com/mozilla-storybooks-fxa/commits/latest/fxa-payments-server/index.html?path=/story/routes-subscriptions--subscribed-with-web-subscription",children:"Subscription Management"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://storage.googleapis.com/mozilla-storybooks-fxa/commits/latest/fxa-auth-server/index.html?path=/story/subplat-emails-templates",children:"Email templates"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"terminology",children:"Terminology"}),"\n",(0,r.jsxs)(t.p,{children:["Before diving into ",(0,r.jsx)(t.a,{href:"/ecosystem-platform/relying-parties/reference/sub-plat-features",children:"features"})," and ",(0,r.jsx)(t.a,{href:"/ecosystem-platform/relying-parties/tutorials/integration-with-subscription-platform",children:"integration"})," how-tos, it's useful to align on key terminology."]}),"\n",(0,r.jsx)(t.h3,{id:"relying-party",children:"Relying Party"}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Relying_party",children:"relying party (RP)"})," is any service that uses Mozilla accounts. This can be a free or subscription service. Firefox Monitor, Mozilla VPN and Firefox Sync are all examples of relying parties."]}),"\n",(0,r.jsx)(t.h3,{id:"product",children:"Product"}),"\n",(0,r.jsx)(t.p,{children:"This term has a specific meaning in subscription world. A Product refers to one or more Relying Party services that are sold as a unit. For example, since we sell the Mozilla VPN alone, that is a product. If we were to sell another product Called Mozilla VPN Plus that bundled a password manager, that would be another product."}),"\n",(0,r.jsx)(t.h3,{id:"plan",children:"Plan"}),"\n",(0,r.jsxs)(t.p,{children:["This referrers to a product billed at a specific amount charged at a specific interval. So, if the product is Mozilla VPN, the Plan might Be ",(0,r.jsx)(t.em,{children:"Mozilla VPN, billed monthly at $4.99 USD"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Stripe is used to handle payments and subscriptions in the Subscription Platform. Terminology dealing with products and plans uses the ",(0,r.jsx)(t.a,{href:"https://stripe.com/docs/billing/subscriptions/products-and-plans",children:"Stripe definitions of Product/Plan"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"capability",children:"Capability"}),"\n",(0,r.jsxs)(t.p,{children:["This is how your Relying Parties know they're subscribed. Each product is associated with the capabilities that it confers to a user. A bundle product may include multiple capabilities provided by varying ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Relying_party",children:"relying parties (RPs)"}),", or a single product may confer a single capability provided by multiple RPs. These capabilities are typically RP-specific."]}),"\n",(0,r.jsxs)(t.p,{children:["Subscription capabilities are lower-case strings that will be included in the users profile data and webhook ",(0,r.jsx)(t.a,{href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-event-broker#subscription-state-change",children:"subscription state notifications"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"fxa-event-broker",children:"FxA Event Broker"}),"\n",(0,r.jsxs)(t.p,{children:["This is a service that distributes ",(0,r.jsx)(t.a,{href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-event-broker#relying-party-event-format",children:"relying party events"})," to FxA integrations that have a registered ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Webhook",children:"webhook"})," URL. These events are only sent to integrations that a FxA user has logged into."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var r=i(67294);const s={},n=r.createContext(s);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);