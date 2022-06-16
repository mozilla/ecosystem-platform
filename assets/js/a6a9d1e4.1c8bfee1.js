"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[4258],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return m}});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(i),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return i?n.createElement(f,a(a({ref:t},p),{},{components:i})):n.createElement(f,a({ref:t},p))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},78916:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=i(87462),r=i(63366),o=(i(67294),i(3905)),a=["components"],s={id:"integration-with-subscription-platform",title:"Integration with Subscription Platform",sidebar_label:"Integration with Subscription Platform"},l=void 0,u={unversionedId:"relying-parties/tutorials/integration-with-subscription-platform",id:"relying-parties/tutorials/integration-with-subscription-platform",title:"Integration with Subscription Platform",description:"Setting up A Subscription",source:"@site/docs/relying-parties/tutorials/integration-with-subscription-platform.md",sourceDirName:"relying-parties/tutorials",slug:"/relying-parties/tutorials/integration-with-subscription-platform",permalink:"/ecosystem-platform/relying-parties/tutorials/integration-with-subscription-platform",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/tutorials/integration-with-subscription-platform.md",tags:[],version:"current",frontMatter:{id:"integration-with-subscription-platform",title:"Integration with Subscription Platform",sidebar_label:"Integration with Subscription Platform"},sidebar:"docs",previous:{title:"Integration with FxA",permalink:"/ecosystem-platform/relying-parties/tutorials/integration-with-fxa"},next:{title:"Pairing authentication",permalink:"/ecosystem-platform/relying-parties/tutorials/pairing"}},p={},c=[{value:"Setting up A Subscription",id:"setting-up-a-subscription",level:2},{value:"Pre-Development",id:"pre-development",level:3},{value:"File A ticket",id:"file-a-ticket",level:4},{value:"Have a kickoff meeting",id:"have-a-kickoff-meeting",level:4},{value:"Development",id:"development",level:3},{value:"Demoing Subscription Flows",id:"demoing-subscription-flows",level:4},{value:"Setting up your marketing pages",id:"setting-up-your-marketing-pages",level:4},{value:"Webhook Events",id:"webhook-events",level:4},{value:"Testing",id:"testing",level:4},{value:"Evaluating the current user flow",id:"evaluating-the-current-user-flow",level:2}],d={toc:c};function m(e){var t=e.components,i=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"setting-up-a-subscription"},"Setting up A Subscription"),(0,o.kt)("h3",{id:"pre-development"},"Pre-Development"),(0,o.kt)("h4",{id:"file-a-ticket"},"File A ticket"),(0,o.kt)("p",null,"First thing's first. File an FxA ticket in GitHub. This ticket can be used to track documentation for your subscription. You can use the label ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscription Request")," but otherwise, don't worry too much about format for your issue. We will use this request to set up an initial meeting and get the ball rolling. We will track your subscription setup in Mana in order to keep sensitive details such as price and release dates and market confidential."),(0,o.kt)("h4",{id:"have-a-kickoff-meeting"},"Have a kickoff meeting"),(0,o.kt)("p",null,"Once your ticket is filed, you should have had a RRA-style meeting with the Firefox Accounts team. During or shortly after this meeting, an initial subscription capability string or strings should be agreed upon."),(0,o.kt)("p",null,"We will use this meeting to do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set up a Mana page to track basic info about your product such as name & capability string or strings"),(0,o.kt)("li",{parentName:"ol"},"Get a rough estimate of your shipping timeline (don't worry if this isn't 100% pinned down)"),(0,o.kt)("li",{parentName:"ol"},"Get a staging subscription set up for you to start testing with")),(0,o.kt)("h3",{id:"development"},"Development"),(0,o.kt)("p",null,"Integration with FxA is the primary development task to complete for a working subscription integration. The additional Subscription Capability string will be included as the ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriptions")," field in the response from the FxA Profile Server."),(0,o.kt)("p",null,"If your integration includes an application service, it will need a webhook handler to receive relying party events from the FxA Event Broker."),(0,o.kt)("h4",{id:"demoing-subscription-flows"},"Demoing Subscription Flows"),(0,o.kt)("p",null,"The FxA Team maintains the Firefox Fortress package ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa/packages/fortress")," in order to demonstrate various Sub Plat capabilities including tiers & different cycle durations. This package runs at ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:9292"),", and is an up-to-date representation of Sub Plat features. In order complete the demo, you will need access to a Stripe dev instance. An Accounts team member can provide this upon request. Please see our ",(0,o.kt)("a",{parentName:"p",href:"/ecosystem-platform/tutorials/subscription-platform#configuration"},"developer docs")," to learn more."),(0,o.kt)("h4",{id:"setting-up-your-marketing-pages"},"Setting up your marketing pages"),(0,o.kt)("p",null,"If your integration includes lead pages to start a subscription flow, you will need to include the product and plan id's in the subscription 'buy' URL. This link for production has the form of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://{hostname}/subscriptions/products/{productId}?plan={planId}\n")),(0,o.kt)("p",null,"Valid hostnames for the FxA environments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Production - ",(0,o.kt)("inlineCode",{parentName:"li"},"accounts.firefox.com")),(0,o.kt)("li",{parentName:"ul"},"Stage - ",(0,o.kt)("inlineCode",{parentName:"li"},"accounts.stage.mozaws.net"))),(0,o.kt)("p",null,"Note that valid values for ",(0,o.kt)("inlineCode",{parentName:"p"},"productId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"planId")," will vary with environment as a different Stripe account is associated with each."),(0,o.kt)("p",null,"Additionally, if your product has multiple associated plans in any environment, you will need to ensure that you are routing users correctly. The most likely cases for this would be:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If your product has plans with different billing intervals (monthly, annually)"),(0,o.kt)("li",{parentName:"ol"},"If your product has plans in different currencies")),(0,o.kt)("p",null,"Importantly, the Subscription Platform does not currently provide any inbuilt capabilities for routing users to a correct currency or for showing multiple plans to a user at once. If this is a requirement for your product, you must provide the appropriate UI and routing to ensure that users end up on the correct payment page for the correct product."),(0,o.kt)("h4",{id:"webhook-events"},"Webhook Events"),(0,o.kt)("p",null,"If your integration includes an application service, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-event-broker#subscription-state-change"},"subscription state notifications")," will also be sent via ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webhook"},"webhook")," to your registered ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webhook"},"webhook")," URL."),(0,o.kt)("h4",{id:"testing"},"Testing"),(0,o.kt)("p",null,"When integrated with the FxA stage or development environments, subscription sign-up's can be tested using ",(0,o.kt)("a",{parentName:"p",href:"https://stripe.com/docs/testing#cards"},"Stripe test cards"),"."),(0,o.kt)("h2",{id:"evaluating-the-current-user-flow"},"Evaluating the current user flow"),(0,o.kt)("p",null,"To see the user experience without setting up your localhost you can subscribe to any of the existing subscriptions that we have available. If you want to try out the upgrade flow please use MDN Plus. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VPN - ",(0,o.kt)("a",{parentName:"li",href:"https://www-dev.allizom.org/en-US/products/vpn/#pricing"},"https://www-dev.allizom.org/en-US/products/vpn/#pricing")),(0,o.kt)("li",{parentName:"ul"},"Relay Premium - ",(0,o.kt)("a",{parentName:"li",href:"https://stage.fxprivaterelay.nonprod.cloudops.mozgcp.net/"},"https://stage.fxprivaterelay.nonprod.cloudops.mozgcp.net/")),(0,o.kt)("li",{parentName:"ul"},"MDN Plus - ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/plus#subscribe"},"https://developer.mozilla.org/en-US/plus#subscribe"))),(0,o.kt)("p",null,"Once you selected a plan please create a new user. You can use the following Credit Card number: 4242424242424242 with any 3 digit CVC and a valid expiration date. NOTE: this is a test card and is only available on staging. Once you complete the subscription you can look at the email communications sent out by the SubPlat team. "),(0,o.kt)("p",null,"To cancel your subscription simply go to ",(0,o.kt)("a",{parentName:"p",href:"https://accounts.stage.mozaws.net/subscriptions"},"https://accounts.stage.mozaws.net/subscriptions")," and press the cancel button. "),(0,o.kt)("p",null,"To upgrade your subscription sign in to your accont using the step above and got to the MDN Plus link. The website will now display your current plan and the upgrade options. "))}m.isMDXComponent=!0}}]);