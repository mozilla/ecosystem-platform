"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[3514],{9199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>a,toc:()=>p});var i=r(74848),s=r(28453);const n={id:"sub-plat-features",title:"Subscription Features",sidebar_label:"Subscription Features"},o=void 0,a={id:"relying-parties/reference/sub-plat-features",title:"Subscription Features",description:"Before reading this page, it will be useful to have a grounding in Sub Plat terminology. Please see the Subscription Platform Overview for more information.",source:"@site/docs/relying-parties/reference/sub-plat-features.md",sourceDirName:"relying-parties/reference",slug:"/relying-parties/reference/sub-plat-features",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-features",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/reference/sub-plat-features.md",tags:[],version:"current",frontMatter:{id:"sub-plat-features",title:"Subscription Features",sidebar_label:"Subscription Features"},sidebar:"docs",previous:{title:"Subscription Platform Overview",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-overview"},next:{title:"Subscription Coupons",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-coupons"}},l={},p=[{value:"Payment Methods",id:"payment-methods",level:2},{value:"Staffed Support",id:"staffed-support",level:2},{value:"Data Reporting",id:"data-reporting",level:2},{value:"Geo-Restrictions",id:"geo-restrictions",level:2},{value:"Currency &amp; Market Support",id:"currency--market-support",level:2},{value:"Billing intervals",id:"billing-intervals",level:3},{value:"Tiers &amp; upgradable subscriptions",id:"tiers--upgradable-subscriptions",level:3}];function u(e){const t={a:"a",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Before reading this page, it will be useful to have a grounding in Sub Plat terminology. Please see the Subscription Platform Overview for more information."}),"\n",(0,i.jsx)(t.h2,{id:"payment-methods",children:"Payment Methods"}),"\n",(0,i.jsx)(t.p,{children:"The Subscription Platform currently supports payments with major credit cards through Stripe and Paypal. Supported Products with Mobile products may also integrate to Apple and Google IAP through the Subscription Platform."}),"\n",(0,i.jsx)(t.h2,{id:"staffed-support",children:"Staffed Support"}),"\n",(0,i.jsx)(t.p,{children:"Subscription Platform integrates with ZenDesk to provide staffed support. The Subscription Platform team partners with the Support Team to manage ZenDesk. The Support team is directly responsible for provisioning resourcing for support and setting up SLAs for your subscription offerings."}),"\n",(0,i.jsx)(t.h2,{id:"data-reporting",children:"Data Reporting"}),"\n",(0,i.jsxs)(t.p,{children:["Data reporting consists of standard FxA funnel metrics, Stripe data & ZenDesk ticket data in addition to any telemetry you collect in your offering. Please see ",(0,i.jsx)(t.a,{href:"/ecosystem-platform/relying-parties/reference/metrics-for-relying-parties",children:"this document"})," to understand access and status for all of these endpoints."]}),"\n",(0,i.jsx)(t.h2,{id:"geo-restrictions",children:"Geo-Restrictions"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"The Subscription Platform does not implement any geo-restrictions"}),". Instead, we rely on Stripe to reject credit cards from countries that our legal team has not given us permission to ship in. This means that if you're building a lead page to market a subscription product, you will be responsible for geo-restricting access to the Subscription Platform."]}),"\n",(0,i.jsx)(t.h2,{id:"currency--market-support",children:"Currency & Market Support"}),"\n",(0,i.jsxs)(t.p,{children:["The Subscription Platform currently supports several ",(0,i.jsx)(t.a,{href:"https://mozilla-hub.atlassian.net/l/cp/MMwzvYV4",children:"currencies and markets"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Importantly, if you wish to offer your product in multiple different currencies, you will have to configure your marketing page to correctly route different users to different plans depending on their region. You will also need to set up individual stripe plans for each currency."}),"\n",(0,i.jsx)(t.p,{children:"Reach out to the Subscription Platform team in Slack at #subscription-platform to request additional market support so that we may advise you on next steps toward coverage."}),"\n",(0,i.jsx)(t.h3,{id:"billing-intervals",children:"Billing intervals"}),"\n",(0,i.jsx)(t.p,{children:"The Subscription Platform supports billing intervals of one-month, six months, and one year. Subscriptions auto-renew and do not expire until a user cancels them."}),"\n",(0,i.jsxs)(t.p,{children:["Like currencies, each billing interval represents a separate ",(0,i.jsx)(t.strong,{children:"plan"})," in Stripe. This means, if you wish to offer multiple different intervals, you will need to implement multiple different ",(0,i.jsx)(t.strong,{children:"plans"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"tiers--upgradable-subscriptions",children:"Tiers & upgradable subscriptions"}),"\n",(0,i.jsx)(t.p,{children:"The Subscription Platform supports upgradable subscriptions between tiers of a product. This is a streamlined way to organize a set of subscription products that are related. For example, you might wish to sell a subscription to Firefox Private Network Proxy for $2.99 a month with an optional upgrade to unlock the Firefox Private Network VPN for $4.99 a month."}),"\n",(0,i.jsx)(t.p,{children:"Rather than making a user go through an entire payments Flow, Sub Plat allows upgrades with a single click. Users are charged a pro-rated amount for the the upgrade for their current billing cycle and in subsequent billing cycles they will be charged the full amount of their new subscription."})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var i=r(96540);const s={},n=i.createContext(s);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);