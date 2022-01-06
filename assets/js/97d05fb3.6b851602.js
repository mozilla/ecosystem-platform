"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[1714],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=i.createContext({}),p=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=p(t.components);return i.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?i.createElement(f,a(a({ref:e},u),{},{components:n})):i.createElement(f,a({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13231:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],s={id:"integration-with-subscription-platform",title:"Integration with Subscription Platform",sidebar_label:"Integration with Subscription Platform"},l=void 0,p={unversionedId:"platform/sub-plat/integration-with-subscription-platform",id:"platform/sub-plat/integration-with-subscription-platform",isDocsHomePage:!1,title:"Integration with Subscription Platform",description:"Setting up A Subscription",source:"@site/docs/platform/sub-plat/integration-with-subscription-platform.md",sourceDirName:"platform/sub-plat",slug:"/platform/sub-plat/integration-with-subscription-platform",permalink:"/ecosystem-platform/platform/sub-plat/integration-with-subscription-platform",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/main/website/docs/platform/sub-plat/integration-with-subscription-platform.md",tags:[],version:"current",frontMatter:{id:"integration-with-subscription-platform",title:"Integration with Subscription Platform",sidebar_label:"Integration with Subscription Platform"},sidebar:"docs",previous:{title:"Subscription Features",permalink:"/ecosystem-platform/platform/sub-plat/sub-plat-features"},next:{title:"Coupons",permalink:"/ecosystem-platform/platform/sub-plat/sub-plat-coupons"}},u=[{value:"Setting up A Subscription",id:"setting-up-a-subscription",children:[{value:"Pre-Development",id:"pre-development",children:[]},{value:"Development",id:"development",children:[]}]}],c={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"setting-up-a-subscription"},"Setting up A Subscription"),(0,o.kt)("h3",{id:"pre-development"},"Pre-Development"),(0,o.kt)("h4",{id:"file-a-ticket"},"File A ticket"),(0,o.kt)("p",null,"First thing's first. File an FxA ticket in GitHub. This ticket can be used to track documentation for your subscription. You can use the label ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscription Request")," but otherwise, don't worry too much about format for your issue. We will use this request to set up an initial meeting and get the ball rolling. We will track your subscription setup in Mana in order to keep sensitive details such as price and release dates and market confidential."),(0,o.kt)("h4",{id:"have-a-kickoff-meeting"},"Have a kickoff meeting"),(0,o.kt)("p",null,"Once your ticket is filed, you should have had a RRA-style meeting with the Firefox Accounts team. During or shortly after this meeting, an initial subscription capability string or strings should be agreed upon."),(0,o.kt)("p",null,"We will use this meeting to do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set up a Mana page to track basic info about your product such as name & capability string or strings"),(0,o.kt)("li",{parentName:"ol"},"Get a rough estimate of your shipping timeline (don't worry if this isn't 100% pinned down)"),(0,o.kt)("li",{parentName:"ol"},"Get a staging subscription set up for you to start testing with")),(0,o.kt)("h3",{id:"development"},"Development"),(0,o.kt)("p",null,"Integration with FxA is the primary development task to complete for a working subscription integration. The additional Subscription Capability string will be included as the ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriptions")," field in the response from the FxA Profile Server."),(0,o.kt)("p",null,"If your integration includes an application service, it will need a webhook handler to receive relying party events from the FxA Event Broker."),(0,o.kt)("h4",{id:"demoing-subscription-flows"},"Demoing Subscription Flows"),(0,o.kt)("p",null,"The FxA Team maintains the Firefox Fortress package ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa/packages/fortress")," in order to demonstrate various Sub Plat capabilities including tiers & different cycle durations. This package runs at ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:9292"),", and is an up-to-date representation of Sub Plat features. In order complete the demo, you will need access to a Stripe dev instance. An Accounts team member can provide this upon request. Please see our ",(0,o.kt)("a",{parentName:"p",href:"/ecosystem-platform/docs/fxa-engineering/fxa-sub-platform#configuration"},"developer docs")," to learn more."),(0,o.kt)("h4",{id:"setting-up-your-marketing-pages"},"Setting up your marketing pages"),(0,o.kt)("p",null,"If your integration includes lead pages to start a subscription flow, you will need to include the product and plan id's in the subscription 'buy' URL. This link for production has the form of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://{hostname}/subscriptions/products/{productId}?plan={planId}\n")),(0,o.kt)("p",null,"Valid hostnames for the FxA environments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Production - ",(0,o.kt)("inlineCode",{parentName:"li"},"accounts.firefox.com")),(0,o.kt)("li",{parentName:"ul"},"Stage - ",(0,o.kt)("inlineCode",{parentName:"li"},"accounts.stage.mozaws.net")),(0,o.kt)("li",{parentName:"ul"},"Development - ",(0,o.kt)("inlineCode",{parentName:"li"},"latest.dev.lcip.org"))),(0,o.kt)("p",null,"Note that valid values for ",(0,o.kt)("inlineCode",{parentName:"p"},"productId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"planId")," will vary with environment as a different Stripe account is associated with each."),(0,o.kt)("p",null,"Additionally, if your product has multiple associated plans in any environment, you will need to ensure that you are routing users correctly. The most likely cases for this would be:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If your product has plans with different billing intervals (monthly, annually)"),(0,o.kt)("li",{parentName:"ol"},"If your product has plans in different currencies")),(0,o.kt)("p",null,"Importantly, the Subscription Platform does not currently provide any inbuilt capabilities for routing users to a correct currency or for showing multiple plans to a user at once. If this is a requirement for your product, you must provide the appropriate UI and routing to ensure that users end up on the correct payment page for the correct product."),(0,o.kt)("h4",{id:"webhook-events"},"Webhook Events"),(0,o.kt)("p",null,"If your integration includes an application service, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-event-broker#subscription-state-change"},"subscription state notifications")," will also be sent via ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webhook"},"webhook")," to your registered ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webhook"},"webhook")," URL."),(0,o.kt)("h4",{id:"testing"},"Testing"),(0,o.kt)("p",null,"When integrated with the FxA stage or development environments, subscription sign-up's can be tested using ",(0,o.kt)("a",{parentName:"p",href:"https://stripe.com/docs/testing#cards"},"Stripe test cards"),"."))}m.isMDXComponent=!0}}]);