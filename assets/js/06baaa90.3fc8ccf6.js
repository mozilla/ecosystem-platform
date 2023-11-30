"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[5516],{58820:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=i(85893),r=i(11151);const s={id:"apple-iap",title:"Apple IAP",sidebar_label:"Apple IAP"},o=void 0,a={id:"relying-parties/how-tos/apple-iap",title:"Apple IAP",description:"Introduction",source:"@site/docs/relying-parties/how-tos/apple-iap.md",sourceDirName:"relying-parties/how-tos",slug:"/relying-parties/how-tos/apple-iap",permalink:"/ecosystem-platform/relying-parties/how-tos/apple-iap",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/how-tos/apple-iap.md",tags:[],version:"current",frontMatter:{id:"apple-iap",title:"Apple IAP",sidebar_label:"Apple IAP"},sidebar:"docs",previous:{title:"Google IAP",permalink:"/ecosystem-platform/relying-parties/how-tos/google-iap"},next:{title:"Product metrics",permalink:"/ecosystem-platform/relying-parties/how-tos/product-metrics"}},p={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Create an IAP configuration document",id:"create-an-iap-configuration-document",level:3},{value:"Add App Store Server API keys in SubPlat",id:"add-app-store-server-api-keys-in-subplat",level:3},{value:"Send App Store Server notifications to SubPlat",id:"send-app-store-server-notifications-to-subplat",level:3},{value:"Map Apple IAP to Stripe plans",id:"map-apple-iap-to-stripe-plans",level:3},{value:"Prevent Apple IAP subscribers from double subscribing",id:"prevent-apple-iap-subscribers-from-double-subscribing",level:3},{value:"SubPlat API Calls",id:"subplat-api-calls",level:2},{value:"Getting the current subscription status for an FxA user",id:"getting-the-current-subscription-status-for-an-fxa-user",level:3},{value:"Registering an Apple IAP subscriber",id:"registering-an-apple-iap-subscriber",level:3},{value:"(Optional) Migrating existing Apple IAP subscribers to the Subscription Platform",id:"optional-migrating-existing-apple-iap-subscribers-to-the-subscription-platform",level:3},{value:"Testing your integration",id:"testing-your-integration",level:2},{value:"End-to-end testing of SubPlat APIs",id:"end-to-end-testing-of-subplat-apis",level:3},{value:"Idiosyncrasies of the App Store Server API",id:"idiosyncrasies-of-the-app-store-server-api",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.p,{children:["As of December 2022, the Subscription Platform supports ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/app-store/subscriptions/",children:"Apple IAP"})," integrations for products with Mozilla VPN as one example. An integration allows us to maintain an awareness of an Apple IAP subscriber's subscription status for a given iOS app, including any state changes, which we forward on to the relevant relying party."]}),"\n",(0,n.jsx)(t.p,{children:"Importantly, Apple provides read-only access to Apple IAP subscriptions. Consequently, we do not (and cannot) modify Apple IAP subscriptions (e.g. making plan changes such as upgrades)."}),"\n",(0,n.jsxs)(t.p,{children:["A more technical discussion (geared toward FxA engineers) can be found in ",(0,n.jsx)(t.a,{href:"/ecosystem-platform/tutorials/subscription-platform#apple-iap-integration",children:"Apple IAP Integration"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.p,{children:["This guide assumes you are already integrated with FxA/the Subscription Platform; please see ",(0,n.jsx)(t.a,{href:"/ecosystem-platform/relying-parties/tutorials/integration-with-subscription-platform",children:"Integration with Subscription Platform"})," for more information."]}),"\n",(0,n.jsxs)(t.p,{children:["Ideally, you will also want to grant 1-2 Subscription Platform engineers working on the integration developer access to your iOS app in ",(0,n.jsx)(t.a,{href:"https://appstoreconnect.apple.com/",children:"App Store Connect"})," (",(0,n.jsx)(t.a,{href:"https://bugzilla.mozilla.org/show_bug.cgi?id=1760053",children:"example bug"}),"). This allows us to access your iOS app\u2019s ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/appstoreserverapi",children:"App Store Server API"})," keys, to look up needed app-specific information and to configure an endpoint to receive App Store Server notifications."]}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["These steps can be done by a product manager or developer and in parallel with steps in ",(0,n.jsx)(t.a,{href:"#subplat-api-calls",children:"SubPlat API Calls"}),". More information regarding specific Stripe metadata keys mentioned below can be found in the ",(0,n.jsx)(t.a,{href:"/ecosystem-platform/tutorials/subscription-platform#stripe-productplans",children:"Subscription Platform integration tutorial"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"create-an-iap-configuration-document",children:"Create an IAP configuration document"}),"\n",(0,n.jsxs)(t.p,{children:["This document represents a list of App Store plans (identified uniquely by their App Store ",(0,n.jsxs)(t.a,{href:"https://developer.apple.com/documentation/appstoreserverapi/productid/",children:[(0,n.jsx)(t.code,{children:"productId"}),"s"]})," for your product."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go into App Store Connect and find your iOS app\u2019s human-readable ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/appstoreserverapi/productid/",children:(0,n.jsx)(t.code,{children:"productId"})}),"s and ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/appstoreserverapi/bundleid/",children:(0,n.jsx)(t.code,{children:"bundleId"})}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Create a configuration document similar in form to ",(0,n.jsx)(t.a,{href:"https://api.accounts.firefox.com/v1/oauth/subscriptions/iap/plans/guardian-vpn",children:"https://api.accounts.firefox.com/v1/oauth/subscriptions/iap/plans/guardian-vpn"})," (omitting Android plans) including a ",(0,n.jsx)(t.code,{children:"bundleId"})," property. This can be in a Google document for now.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Note: The only information SubPlat uses from the VPN document currently is the ",(0,n.jsx)(t.code,{children:"productId"})," and ",(0,n.jsx)(t.code,{children:"platform"}),". The VPN configuration document is structured in this way for historical reasons. We may change how this information is structured for future integrations."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["File a ticket in the ",(0,n.jsx)(t.a,{href:"https://mozilla-hub.atlassian.net/browse/FXA",children:"FXA Jira project"}),' to create a new document in SubPlat\'s "IAP config" Firestore collection, and provide the document from Step 2 along with an ',(0,n.jsx)(t.code,{children:"appName"}),".","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"appName"})," is a human-readable name that SubPlat uses to uniquely identify your app in our system (e.g. ",(0,n.jsx)(t.code,{children:'"guardian-vpn"'})," is the ",(0,n.jsx)(t.code,{children:"appName"})," for the Mozilla VPN in the link above).\nWhen the ticket is complete and deployed, you should be able to view your configuration at ",(0,n.jsx)(t.a,{href:"https://api.accounts.firefox.com/v1/oauth/subscriptions/iap/plans/$%7BappName%7D",children:"https://api.accounts.firefox.com/v1/oauth/subscriptions/iap/plans/${appName}"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"add-app-store-server-api-keys-in-subplat",children:"Add App Store Server API keys in SubPlat"}),"\n",(0,n.jsxs)(t.p,{children:["A SubPlat engineer with developer access to App Store Connect (see ",(0,n.jsx)(t.a,{href:"#prerequisites",children:"Prerequisites"}),") can configure this for you when ready."]}),"\n",(0,n.jsxs)(t.p,{children:["App Store Server API keys are needed for SubPlat to make calls to Apple\u2019s API. See ",(0,n.jsx)(t.a,{href:"/ecosystem-platform/tutorials/subscription-platform#apple-iap-integration",children:"Apple IAP Integration"})," for more information on how to obtain these keys."]}),"\n",(0,n.jsx)(t.h3,{id:"send-app-store-server-notifications-to-subplat",children:"Send App Store Server notifications to SubPlat"}),"\n",(0,n.jsxs)(t.p,{children:["A SubPlat engineer with developer access to App Store Connect (see ",(0,n.jsx)(t.a,{href:"#prerequisites",children:"Prerequisites"}),") can configure this for you when ready."]}),"\n",(0,n.jsx)(t.p,{children:"The Sandbox and, when ready, Production endpoints in App Store Connect must be updated with SubPlat's notification endpoint in order for our system to receive App Store Server notifications."}),"\n",(0,n.jsx)(t.h3,{id:"map-apple-iap-to-stripe-plans",children:"Map Apple IAP to Stripe plans"}),"\n",(0,n.jsxs)(t.p,{children:["In order to know what capabilities to grant a given Apple IAP user, we map App Store Connect ",(0,n.jsx)(t.code,{children:"productId"}),"s to ",(0,n.jsxs)(t.a,{href:"https://support.stripe.com/questions/how-to-create-products-and-prices",children:["Stripe ",(0,n.jsx)(t.code,{children:"price"})," or ",(0,n.jsx)(t.code,{children:"plan"})]})," IDs (",(0,n.jsx)(t.code,{children:"price"}),"s supersede ",(0,n.jsx)(t.code,{children:"plan"}),"s)."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go into App Store Connect and find your iOS app\u2019s human-readable ",(0,n.jsx)(t.code,{children:"productId"}),"s."]}),"\n",(0,n.jsxs)(t.li,{children:["In the Stripe dashboard for the desired environment (stage or production), create a new, valid product in Stripe and a new, valid plan underneath that product.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["We hope to simplify this process in SubPlat 3.0, expected in 2023; see this ",(0,n.jsx)(t.a,{href:"https://mozilla-hub.atlassian.net/browse/PSP-64?focusedCommentId=627245",children:"Jira comment"})," for more details."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Add each App Store ",(0,n.jsx)(t.code,{children:"productId"})," as a comma-separated value to a new ",(0,n.jsx)(t.code,{children:"appStoreProductIds"})," metadata property on the newly created plan."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"prevent-apple-iap-subscribers-from-double-subscribing",children:"Prevent Apple IAP subscribers from double subscribing"}),"\n",(0,n.jsx)(t.p,{children:"As noted previously, we don\u2019t support upgrades or any plan changes for Apple IAP subscribers. However, it is possible for an Apple IAP subscriber to try to sign up again for your product on the Subscription Platform website. Follow these steps to prevent them from double subscribing."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["In the Stripe dashboard for the given environment (stage or production), remove any ",(0,n.jsx)(t.code,{children:"productSet"})," properties that may have been previously set on the newly created product/plan from ",(0,n.jsx)(t.a,{href:"#map-apple-iap-to-stripe-plans",children:"Map Apple IAP to Stripe plans"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Add a ",(0,n.jsx)(t.code,{children:"productSet"})," metadata key with a value equal to the comma-separated list of all the unique ",(0,n.jsx)(t.code,{children:"productSet"}),"s for all your product\u2019s plans in the environment to the new product referenced in Step 1. Without their own ",(0,n.jsx)(t.code,{children:"productSet"})," specified, the new plan will inherit its product\u2019s ",(0,n.jsx)(t.code,{children:"productSet"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"subplat-api-calls",children:"SubPlat API Calls"}),"\n",(0,n.jsxs)(t.p,{children:["These steps can be done by a developer and in parallel with the steps in ",(0,n.jsx)(t.a,{href:"#configuration",children:"Configuration"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["As mentioned in the ",(0,n.jsx)(t.a,{href:"#introduction",children:"Introduction"}),", SubPlat has read-only access to App Store subscription information. We will store Apple IAP subscribers' data in our system and update the information when we receive notifications from the App Store server, broadcasting updates in real time to the relevant relying parties."]}),"\n",(0,n.jsx)(t.h3,{id:"getting-the-current-subscription-status-for-an-fxa-user",children:"Getting the current subscription status for an FxA user"}),"\n",(0,n.jsxs)(t.p,{children:["Assuming you are already integrated with FxA generally (see ",(0,n.jsx)(t.a,{href:"#prerequisites",children:"Prerequisites"}),"), are receiving subscription updates for other types of subscriptions (e.g. for PayPal or Stripe), and you have completed the ",(0,n.jsx)(t.a,{href:"#map-apple-iap-to-stripe-plans",children:"mapping of App Store to Stripe plans"}),", no further work is required to continue receiving these updates for Apple IAP subscribers. You can also pull this information from FxA with the existing ",(0,n.jsx)(t.a,{href:"/ecosystem-platform/api#tag/Account/operation/getAccountProfile",children:(0,n.jsx)(t.code,{children:"/account/profile"})})," endpoint without any further changes."]}),"\n",(0,n.jsx)(t.h3,{id:"registering-an-apple-iap-subscriber",children:"Registering an Apple IAP subscriber"}),"\n",(0,n.jsxs)(t.p,{children:["SubPlat needs to be able to associate an Apple IAP subscription in Apple's system to a specific FxA user. This is done by registering each Apple IAP subscriber with the ",(0,n.jsx)(t.a,{href:"/ecosystem-platform/api#tag/Subscriptions/operation/postOauthSubscriptionsIapAppstoretransactionAppname",children:(0,n.jsx)(t.code,{children:"/subscriptions/iap/app-store-transaction/${appName}"})})," endpoint."]}),"\n",(0,n.jsxs)(t.p,{children:["By design, we allow only one FxA user per App Store ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/appstoreserverapi/originaltransactionid/",children:(0,n.jsx)(t.code,{children:"originalTransactionId"})}),", which is how Apple uniquely identifies a subscription."]}),"\n",(0,n.jsxs)(t.p,{children:["This endpoint can be used to register a new Apple IAP subscriber or to migrate an existing Apple IAP subscriber. For the latter, see ",(0,n.jsx)(t.a,{href:"#optional-migrating-existing-apple-iap-subscribers-to-the-subscription-platform",children:"(Optional) Migrate existing Apple IAP subscribers to the Subscription Platform"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"optional-migrating-existing-apple-iap-subscribers-to-the-subscription-platform",children:"(Optional) Migrating existing Apple IAP subscribers to the Subscription Platform"}),"\n",(0,n.jsx)(t.p,{children:"This section only applies to products that currently have a direct integration with Apple who need to migrate existing subscribers to the Subscription Platform."}),"\n",(0,n.jsxs)(t.p,{children:["These steps can be done by a developer. While step 1 can be completed in parallel, otherwise perform this migration after completing the steps under ",(0,n.jsx)(t.a,{href:"#configuration",children:"Configuration"})," and ",(0,n.jsx)(t.a,{href:"#subplat-api-calls",children:"SubPlat API Calls"}),". See also the ",(0,n.jsx)(t.a,{href:"#testing-your-integration",children:"Testing your integration"})," section."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["File a ticket in the ",(0,n.jsx)(t.a,{href:"https://mozilla-hub.atlassian.net/browse/FXA",children:"FXA Jira project"})," to add a temporary scope for ",(0,n.jsx)(t.code,{children:"'profile:subscriptions'"})," to the App Store registration endpoint.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Example ticket to add ",(0,n.jsx)(t.a,{href:"https://mozilla-hub.atlassian.net/browse/FXA-5833",children:"FXA-5833"})," and remove ",(0,n.jsx)(t.a,{href:"https://mozilla-hub.atlassian.net/browse/FXA-5848",children:"FXA-5848"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Use the existing registration endpoint (",(0,n.jsx)(t.a,{href:"/ecosystem-platform/api#tag/Subscriptions/operation/postOauthSubscriptionsIapAppstoretransactionAppname",children:(0,n.jsx)(t.code,{children:"/subscriptions/iap/app-store-transaction/${appName}"})}),") to register each existing user with SubPlat.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Important: While SubPlat routes can handle thousands of requests per second, we recommend limiting requests to 10-20 per minute to start and potentially increase that if there are no issues. This is because, at the time of writing, the App Store Server APIs docs don\u2019t list a rate limit threshold, and we make more than one request to Apple for each SubPlat request."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"testing-your-integration",children:"Testing your integration"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Like many systems, Apple's Sandbox environment does not necessarily exhibit behavior consistent with what is stated in their docs. When in doubt, directly test the scenario in question, potentially more than once, to understand what to expect."})}),"\n",(0,n.jsx)(t.h3,{id:"end-to-end-testing-of-subplat-apis",children:"End-to-end testing of SubPlat APIs"}),"\n",(0,n.jsx)(t.p,{children:"After development and the steps above are complete (and importantly, before involving QA), it is recommended for the lead RP integration engineer to pair with the lead SubPlat integration engineer to test the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#getting-the-current-subscription-status-for-an-fxa-user",children:"Getting the current subscription status for an FxA user"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#registering-an-apple-iap-subscriber",children:"Registering an Apple IAP subscriber"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#send-app-store-server-notifications-to-subplat",children:"Receiving a Sandbox notification in our stage environment"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#optional-migrating-existing-apple-iap-subscribers-to-the-subscription-platform",children:"(Optional) Migrating existing Apple IAP subscribers to the Subscription Platform"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"idiosyncrasies-of-the-app-store-server-api",children:"Idiosyncrasies of the App Store Server API"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The unique subscription identifier used by Apple (",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/appstoreserverapi/originaltransactionid/",children:"original transaction ID"}),") is per App Store account. When testing with different FxA accounts, it is therefore necessary to either:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"(Recommended) Use a separate Sandbox App Store account for each FxA account."}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://mozilla-hub.atlassian.net/browse/PSP-509?focusedCommentId=592265",children:"Clear the Sandbox App Store account's purchase history"})," in App Store Connect in between test cases."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Unlike in Production where Apple retries notifications several times over a period of days, in the Sandbox environment, Apple ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/appstoreservernotifications/responding_to_app_store_server_notifications",children:"only sends each notification once with no retries"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["In the Sandbox environment, ",(0,n.jsx)(t.a,{href:"https://help.apple.com/app-store-connect/#/dev7e89e149d",children:"subscriptions autorenew at an accelerated rate and auto-expire after 12 renewals"})," if no action is taken otherwise."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var n=i(67294);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);