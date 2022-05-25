"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[2679],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||s;return a?i.createElement(m,r(r({ref:t},u),{},{components:a})):i.createElement(m,r({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var c=2;c<s;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},94804:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var i=a(87462),n=a(63366),s=(a(67294),a(3905)),r=["components"],o={},l="Admin Panel Support User Documentation",c={unversionedId:"reference/admin-panel",id:"reference/admin-panel",title:"Admin Panel Support User Documentation",description:"The Firefox account admin panel provides access to key information about user accounts and allows administrative functions to be performed on these accounts. This document is broken down by UI component, and explains all the functionality afforded by the admin panel.",source:"@site/docs/reference/admin-panel.md",sourceDirName:"reference",slug:"/reference/admin-panel",permalink:"/ecosystem-platform/reference/admin-panel",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/admin-panel.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Additional Docs",permalink:"/ecosystem-platform/additional-docs"}},u={},p=[{value:"Search Bar",id:"search-bar",level:2},{value:"Account Search Results",id:"account-search-results",level:2},{value:"<strong>Primary Account Info</strong>",id:"primary-account-info",level:3},{value:"Secondary Email",id:"secondary-email",level:3},{value:"Email Bounces",id:"email-bounces",level:3},{value:"TOTP (Time-Based One-Time Passwords)",id:"totp-time-based-one-time-passwords",level:3},{value:"Recovery Key",id:"recovery-key",level:3},{value:"Connected Services",id:"connected-services",level:3},{value:"Subscriptions",id:"subscriptions",level:3},{value:"Stripe Subscription Status",id:"stripe-subscription-status",level:4},{value:"Google Play Store Subscription Status",id:"google-play-store-subscription-status",level:4},{value:"Apple App Store Subscription Status",id:"apple-app-store-subscription-status",level:4},{value:"Account History",id:"account-history",level:3},{value:"Linked Accounts",id:"linked-accounts",level:3},{value:"Email Verification",id:"email-verification",level:3},{value:"Disable Login",id:"disable-login",level:3},{value:"Features Guarded by Permissions",id:"features-guarded-by-permissions",level:2},{value:"Requesting Access / More Permissions",id:"requesting-access--more-permissions",level:2}],h={toc:p};function d(e){var t=e.components,o=(0,n.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"admin-panel-support-user-documentation"},"Admin Panel Support User Documentation"),(0,s.kt)("p",null,"The Firefox account admin panel provides access to key information about user accounts and allows administrative functions to be performed on these accounts. This document is broken down by UI component, and explains all the functionality afforded by the admin panel."),(0,s.kt)("h1",{id:"menu-bar"},"Menu Bar"),(0,s.kt)("p",null,"The menu bar located in the upper left provides two functions at the moment. ",(0,s.kt)("a",{parentName:"p",href:"#account-search"},"Account search ")," and ",(0,s.kt)("a",{parentName:"p",href:"#permissions"},"Permissions"),". Clicking on a menu item will bring up the corresponding view."),(0,s.kt)("h1",{id:"account-search"},"Account Search"),(0,s.kt)("p",null,"The account search is the primary place for interactions in the admin panel. It allows looking up a customer by either email address or user id. In the vast majority of support situations, user email will be used for look up."),(0,s.kt)("h2",{id:"search-bar"},"Search Bar"),(0,s.kt)("p",null,"Simply start by typing a user\u2019s email address into the search bar. As you type, a list of possible email address matches will be displayed. Either select one of these auto completes, enter the exact email address, and click the search icon or press enter."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," This is a prefix match, meaning that it will match on the beginning of the email addresses. For example, if you are looking up ",(0,s.kt)("a",{parentName:"p",href:"mailto:foxkeh@mozilla.com"},"foxkeh@mozilla.com")," typing ",(0,s.kt)("em",{parentName:"p"},"foxke"),", would present ",(0,s.kt)("a",{parentName:"p",href:"mailto:foxkeh@mozilla.com"},"foxkeh@mozilla.com"),", but typing ",(0,s.kt)("em",{parentName:"p"},"oxkeh")," would not present a match."),(0,s.kt)("h2",{id:"account-search-results"},"Account Search Results"),(0,s.kt)("p",null,"If the user is found, a view with all the pertinent user information will be displayed. Here\u2019s an example screenshot of what an account may look like. More detail about each section follows."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"account search box screen capture",src:a(97450).Z,title:"image_tooltip",width:"327",height:"107"})),(0,s.kt)("p",null,"If the user is not found, a message below the search box will appear, indicating no account is found."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"account search not found screen capture",src:a(90110).Z,title:"image_tooltip",width:"894",height:"508"})),(0,s.kt)("h3",{id:"primary-account-info"},(0,s.kt)("strong",{parentName:"h3"},"Primary Account Info")),(0,s.kt)("p",null,"This section holds the key identifying information for the retrieved account."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"primary account info screen capture",src:a(77911).Z,title:"image_tooltip",width:"1472",height:"1060"})),(0,s.kt)("p",null,"It includes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The user\u2019s email address. "),(0,s.kt)("li",{parentName:"ul"},"Whether or not the account has verified the email address by clicking on the verification link that was sent to their email during registration. "),(0,s.kt)("li",{parentName:"ul"},"The user\u2019s unique identifier, also known as their \u2018uid\u2019. "),(0,s.kt)("li",{parentName:"ul"},"The time at which the account was created. The number shown is a timestamp in ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Unix_time"},"epoch time"),", and the date below is value adjusted to your timezone.")),(0,s.kt)("h3",{id:"secondary-email"},"Secondary Email"),(0,s.kt)("p",null,"Users are able to provide an optional secondary email address as a backup. If they have done so, this value can also be searched for."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"secondary email screen capture",src:a(56182).Z,title:"image_tooltip",width:"750",height:"200"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," If the user has provided a secondary email address, but has not verified the code sent to their email address yet, the UI should note the email address is \u2018not verified.\u2019 Once they have verified the code sent to their email, the status will change to \u2018verified.\u2019"),(0,s.kt)("h3",{id:"email-bounces"},"Email Bounces"),(0,s.kt)("p",null,"This is probably one of the most common uses of the admin panel. Occasionally, we will receive complaints that a user is blocked from accessing their account and never got a registration/verification/notification email. Generally this is due to an email bounce, or in other words, we sent out an email and it was rejected by the user\u2019s email server."),(0,s.kt)("p",null,"In the event this happens, we generally clear the email bounces, which also unblocks their account. We then ask the user to add ",(0,s.kt)("a",{parentName:"p",href:"mailto:accounts@firefox.com"},"accounts@firefox.com")," to their address book and try again. Clearing the bounces is an important step, because the email cannot be delivered until the bounce is cleared. And a user can be locked out of their account until they have received a verification code in their inbox."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"email bounces screen capture",src:a(46548).Z,title:"image_tooltip",width:"1152",height:"544"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Important!")," There are essentially two basic types of email bounces. There are \u2018hard bounces\u2019 and \u2018soft bounces\u2019. Soft email bounces will automatically clear themselves in 24 hours, whereas hard email bounces will not automatically clear, and must therefore be manually cleared."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Important!")," There is one bounce type we must pay special attention to. If the email is bouncing because it is \u2018suppressed\u2019, clearing it isn't going to help and will hurt our deliverability score if we keep trying to send it. In this case, we should reach out to the email provider and try to resolve the issue. Once resolved, we can then clear the bounce on our side and ask the user to try again."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Important!")," In the event a user continues to have trouble even after bounces have been cleared and they have added ",(0,s.kt)("a",{parentName:"p",href:"mailto:accounts@firefox.com"},"accounts@firefox.com")," as a contact, the extra information below the \u2018clear all  bounces\u2019 button will be useful for the engineering team to further troubleshoot the issue. If clearing bounces doesn\u2019t seem to be working. Don\u2019t keep trying it over and over again! There may be something specific going on with the bounceType that requires a special resolution path. For more details about bounces reference this ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ses/latest/dg/notification-contents.html#bounce-types"},"document"),"."),(0,s.kt)("h3",{id:"totp-time-based-one-time-passwords"},"TOTP (Time-Based One-Time Passwords)"),(0,s.kt)("p",null,"TOTP, also often referred to as two step authentication, two factor authentication, or 2FA, is a secure way to validate a user on sign in. It requires that they have a secondary device or application they use for authentication. Upon logging in, they will be prompted for a code that could have only been generated by this secondary source. This code is then also required to access the account, thereby providing an extra layer of security."),(0,s.kt)("p",null,"If the user has enabled TOTP this section will indicate this."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"totp screen capture",src:a(77554).Z,title:"image_tooltip",width:"668",height:"366"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," When setting up TOTP the user is guided through a 3 step process. If they don\u2019t successfully finish the process, then the state may look like something like the following, in which case the user should attempt to set up TOTP again or remove it."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"totp unverified screen capture",src:a(37282).Z,title:"image_tooltip",width:"818",height:"294"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Important!")," Once TOTP is enabled, for security reasons, there is no way to disable it on a user\u2019s behalf. If they have lost their TOTP device, they only have two avenues to restore access. The first option is to use a recovery code that was provided when they initially set up TOTP. This is different from the ",(0,s.kt)("a",{parentName:"p",href:"#recovery-key"},"Recovery Key"),", and is a common source of confusion. A second option, might be logging into settings and disabling TOTP with a device that is currently connected; however, this only works if the user is lucky enough to still have an active session. See ",(0,s.kt)("a",{parentName:"p",href:"#connected-services"},"Connected Services")," for more info about this. "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Tip:")," TOTP is time based. This means if the clock on the user\u2019s TOTP device is off, it might say the code is invalid. If a user has appeared to successfully set up TOTP but they are still unable to verify the code with their TOTP device, asking them to verify the clock on their TOTP device is accurate may be a pathway to resolution."),(0,s.kt)("h3",{id:"recovery-key"},"Recovery Key"),(0,s.kt)("p",null,"The recovery key is another security measure that allows a user to get back into their account in the event they lose their password. "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"recovery key screen capture",src:a(14726).Z,title:"image_tooltip",width:"526",height:"208"})),(0,s.kt)("p",null,"Similar to other sections of the admin panel, this field will indicate if the recovery has been verified or not.  "),(0,s.kt)("p",null,"Oftentimes a user will report losing their password and being locked out of their account and have simply forgotten they created recovery codes. If they have recovery keys, reminding them of the date the recovery keys were created can be helpful and sometimes leads to a resolution. "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Important!")," At the time of writing, the recovery key does not supersede TOTP. In other words, if the user has enabled TOTP, they will still be required to verify with TOTP even after using their recovery key."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Tip:")," Some users will confuse the TOTP recovery codes with their recovery key. If they have both TOTP and a recovery key enabled, be sure they understand the difference."),(0,s.kt)("h3",{id:"connected-services"},"Connected Services"),(0,s.kt)("p",null,"This section shows all the active devices that have been authorized with Firefox accounts. A connected device might be a browser, an app, or a third party product (also known as a relying party), that authenticates with Firefox accounts. This section will give an overview of all the devices that are currently connected."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"connected services screen capture",src:a(46864).Z,title:"image_tooltip",width:"327",height:"99"})),(0,s.kt)("p",null,"Here is summary of these fields:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Client")," - A unique name for the connected device. The name is descriptive and provides some indication of what the client is."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Device Type")," - The type of device connected. The most common types will be ",(0,s.kt)("em",{parentName:"li"},"mobile")," or ",(0,s.kt)("em",{parentName:"li"},"desktop"),". A device type may also be marked as ",(0,s.kt)("em",{parentName:"li"},"unknown")," if it\u2019s a session from a third party service."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"User Agent")," - This is a common value sent by all browsers. It should indicate the client\u2019s browser type and version. This value may be set to ",(0,s.kt)("em",{parentName:"li"},"unknown")," if the session is coming from a third party service."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Operating System")," - This is the device\u2019s operating system. Again the value may be ",(0,s.kt)("em",{parentName:"li"},"unknown")," if it is a third party service."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Created At")," - The time the device session was first initialized."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Last Used")," - The time the session was last accessed. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Location")," - The location of the device. Note that this information is not always available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Client ID")," - If the client has a specific Client ID, this will be displayed here. This is an optional field, and is generally reserved for third party services. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Device ID")," - In the event a client is associated with more than one device, there may also be a unique device identifier. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Session Token ID")," - If the connected service/client utilizes a session token, this field will be marked as ","[REDACTED]"," for security reasons. If the device doesn\u2019t have a known session token this field will be marked as N/A. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Refresh Token ID")," - Once a session has been brokered, a refresh token may be used to keep the session active. If a refresh token is present it will be marked as ","[REDACTED]",", otherwise it will be marked as N/A.")),(0,s.kt)("h3",{id:"subscriptions"},"Subscriptions"),(0,s.kt)("p",null,"This section indicates products that the user has purchased subscriptions for. Subscriptions can be purchased through one of three sources, Stripe, the Apple App Store, or the Google Play Store.  A typical subscription will look something like this:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"subscriptions screen capture",src:a(70554).Z,title:"image_tooltip",width:"1066",height:"234"})),(0,s.kt)("p",null,"The fields are as follows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Product Name")," - The name of the product purchased. This should be self explanatory."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Status")," - The status of the product. See ",(0,s.kt)("a",{parentName:"li",href:"#stripe-subscription-status"},"Stripe Subscription Status"),", ",(0,s.kt)("a",{parentName:"li",href:"#google-play-store-subscription-status"},"Google Play Store Subscription Status"),", or ",(0,s.kt)("a",{parentName:"li",href:"#apple-app-store-subscription-status"},"Apple App Store Subscription Status")," for more information."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Created at")," - This is the date the subscription was created."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Current Period Start")," - This is the start date of the current billing cycle."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Current Period End")," - This is the end date of the current billing cycle."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Cancel at period end?")," - Many subscriptions will automatically renew. If this is the case this value is false, otherwise this value will be true."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Subscription ID"),"- A unique identifier for the subscription."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Product ID")," - A unique identifier for the product purchased."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Plan ID")," - A unique identifier for the plan. Note that this corresponds to a plan that has been configured in Stripe. Even subscriptions in the Google Play Store and Apple App Store will have a corresponding plan configuration in Stripe."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Latest Invoice")," - Only available for subscriptions purchased through Stripe. This will link directly to the last invoice issued for the subscription."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Manage Subscriptions")," - Only available for subscriptions purchased through Stripe. This link will open up a session where a customer\u2019s subscription can be managed. ")),(0,s.kt)("h4",{id:"stripe-subscription-status"},"Stripe Subscription Status"),(0,s.kt)("p",null,"The status field for a Subscription purchased through Stripe can be one of several values. We don\u2019t do any mappings on this field and display the raw subscription status for stripe accounts. More on the possible values of status and what these mean can be found ",(0,s.kt)("a",{parentName:"p",href:"https://stripe.com/docs/api/subscriptions/object#subscription_object-status"},"here"),"."),(0,s.kt)("h4",{id:"google-play-store-subscription-status"},"Google Play Store Subscription Status"),(0,s.kt)("p",null,"The status field for the Google Play Store can be one of several values. We must look at the start and end dates of the subscription as well as its payment status to determine an overall status. Here are the possible values:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"active")," - The user has paid and has an active subscription."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"canceled")," - The user's subscription has expired or been replaced by another subscription."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"trialing")," - The user has an active trail subscription."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"unpaid")," - The user\u2019s subscription is pending payment and/or payment is being retried.")),(0,s.kt)("h4",{id:"apple-app-store-subscription-status"},"Apple App Store Subscription Status"),(0,s.kt)("p",null,"The status field for the Apple App Store can be one of X values. We must look at the start and end dates of the subscription, whether or not it auto renews, and the subscription\u2019s payment status to determine an overall status. Here are the possible values:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"active")," - The user has paid and has an active subscription."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"canceled")," - The user\u2019s subscription has expired."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"past_due")," - The user\u2019s subscription needs to be paid, but is currently in a grace period where it has not been canceled yet."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"trialing")," - The user has an active trial subscription."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"unpaid")," - The user has an unpaid subscription, but the payment is pending and/or being retried.")),(0,s.kt)("h3",{id:"account-history"},"Account History"),(0,s.kt)("p",null,"This section simply displays a history of recent key account events such as creation and login."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"account history screen capture",src:a(569).Z,title:"image_tooltip",width:"1352",height:"1999"})),(0,s.kt)("h3",{id:"linked-accounts"},"Linked Accounts"),(0,s.kt)("p",null,"This section shows accounts that have linked through OAuth. Firefox accounts support logging in with ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/OAuth"},"OAuth")," from a google account or an apple account. When a user authenticates via OAuth, the third party account that they used for authorization will be considered linked and will  show up here."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"linked accounts screen capture",src:a(24759).Z,title:"image_tooltip",width:"869",height:"228"})),(0,s.kt)("p",null,"The unlink button allows an admin to effectively remove the OAuth account tied to the user\u2019s account. This may be necessary if the user has lost access to their firefox account, and they want to remove their linked OAuth account."),(0,s.kt)("h1",{id:"the-danger-zone"},"The Danger Zone"),(0,s.kt)("p",null,"This section holds actions that potentially alter a user\u2019s account state. Please take care, as actions here can affect a user\u2019s ability to access their account. Note that some actions in this area require Admin Level permissions."),(0,s.kt)("h3",{id:"email-verification"},"Email Verification"),(0,s.kt)("p",null,"Executing the \u2018Unverify Email\u2019 action in this section will do a couple things. First, it will automatically sign out the user from their account. Second, it sets a flag on the account indicating that a verification code, which will be sent to the user\u2019s primary email address, will also be required for their next login."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"email verification screen capture",src:a(37457).Z,title:"image_tooltip",width:"852",height:"216"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Tip:")," This can be useful in the event that a user\u2019s account password has been compromised by another malicious user. By \u2018unverifying\u2019 the email address, the malicious user would not be able to access the account with a password alone."),(0,s.kt)("h3",{id:"disable-login"},"Disable Login"),(0,s.kt)("p",null,"Also fairly self explanatory, this section disables a users ability to log into an account. This might be necessary if a user's account has been compromised, or if we believe an account is being used for a malicious purpose."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"disable login screen capture",src:a(55338).Z,title:"image_tooltip",width:"710",height:"204"})),(0,s.kt)("p",null,"Once the account login has been disabled, it can be reenabled by selecting the \u2018Enable\u2019 action."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"enable login screen capture",src:a(70103).Z,title:"image_tooltip",width:"865",height:"150"})),(0,s.kt)("h1",{id:"permissions"},"Permissions"),(0,s.kt)("p",null,"This section indicates the features an admin panel user has access to. Admin panel access is controlled in two ways. First, the admin panel is only accessible via a Mozilla VPN connection. As a Mozilla employee, you should be able to access the VPN by following the instructions on our ",(0,s.kt)("a",{parentName:"p",href:"https://mana.mozilla.org/wiki/display/SD/VPN"},"mana pages"),". Second, once VPN access has been granted, your account must be added to one of several LDAP groups. These groups ultimately control the admin panel features you have access to."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," It is likely that you are in multiple LDAP groups relating to admin panel permissions. If this is the case, you will operate under the group with the highest permission level. For example, if you are in the LDAP groups vpn",(0,s.kt)("em",{parentName:"p"},"fxa_admin_panel_prod and vpn_fxa_support_agent_prod, you will operate under the _Admin")," group."),(0,s.kt)("h2",{id:"features-guarded-by-permissions"},"Features Guarded by Permissions"),(0,s.kt)("p",null,"There are numerous ",(0,s.kt)("em",{parentName:"p"},"guards")," that restrict access to features. Each feature is listed on the permissions view, and a checkbox indicates if permissions are granted to the feature. For example, here is what an Admin user would see:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"permission features screen capture",src:a(55220).Z,title:"image_tooltip",width:"994",height:"1018"})),(0,s.kt)("p",null,"And here is a summary of each feature:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Lookup Account By Email/UID")," - This feature grants access to the search box on the ",(0,s.kt)("em",{parentName:"li"},(0,s.kt)("a",{parentName:"em",href:"#account-search"},"Account Search"))," page."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Account History")," - This feature grants access to the ",(0,s.kt)("a",{parentName:"li",href:"#account-history"},"Account History")," section on the ",(0,s.kt)("em",{parentName:"li"},"Account Search")," page."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"View Active Sessions")," - This feature grants access to the ",(0,s.kt)("a",{parentName:"li",href:"#connected-services"},"Connected Services")," section on the A",(0,s.kt)("em",{parentName:"li"},"ccount Search")," page.."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"View Account Logs")," - This feature is currently not applicable."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"View Linked Accounts")," - This feature grants access to the ",(0,s.kt)("a",{parentName:"li",href:"#linked-accounts"},"Linked Accounts")," section on the ",(0,s.kt)("em",{parentName:"li"},"Account Search")," page."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Clear Email Bounces")," - This feature grants access to the ",(0,s.kt)("a",{parentName:"li",href:"#email-bounces"},"Email Bounces")," section on the ",(0,s.kt)("em",{parentName:"li"},"Account Search")," page."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Disable Account")," - This feature grants access to the ",(0,s.kt)("a",{parentName:"li",href:"#disable-login"},"Disable Login")," section on the ",(0,s.kt)("em",{parentName:"li"},"Account Search")," page."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Enable Account")," - This feature grants access to the ",(0,s.kt)("a",{parentName:"li",href:"#enable-login"},"Enable Login")," section on the ",(0,s.kt)("em",{parentName:"li"},"Account Search")," page. Note that unless an account has been manually disabled, this section will not be visible."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Site Status")," - This feature is currently not applicable."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Unverify Email Address")," - This feature grants access to the Unverify Email button in the ",(0,s.kt)("a",{parentName:"li",href:"#email-verification"},"Email Verification")," section in the \u2018Danger Zone\u2019 area on the ",(0,s.kt)("em",{parentName:"li"},"Account Search")," page."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Unlink Account")," - This feature grants access to the ",(0,s.kt)("em",{parentName:"li"},"Unlink Account")," button found in the ",(0,s.kt)("a",{parentName:"li",href:"#linked-accounts"},"Linked Accounts")," section on the ",(0,s.kt)("em",{parentName:"li"},"Account Search")," page.")),(0,s.kt)("h2",{id:"requesting-access--more-permissions"},"Requesting Access / More Permissions"),(0,s.kt)("p",null,"In the event one of the features described above is not available, and you feel like you need to be in a different user group with more permissions, there is a process for requesting that you are added to a user group. "),(0,s.kt)("p",null,"TBD"))}d.isMDXComponent=!0},97450:function(e,t,a){t.Z=a.p+"assets/images/image1-a17b9ab18f5521b1da7884b3a3c9def7.png"},70554:function(e,t,a){t.Z=a.p+"assets/images/image10-c5ac6a101703740b30da14c4484e1a04.png"},569:function(e,t,a){t.Z=a.p+"assets/images/image11-7efc8c8240faf9fcd18f2963c96df204.png"},24759:function(e,t,a){t.Z=a.p+"assets/images/image12-8beb63796438b9406a689513afc8196c.png"},37457:function(e,t,a){t.Z=a.p+"assets/images/image13-9acc8db8eb042272c52e1bc534aa6327.png"},55338:function(e,t,a){t.Z=a.p+"assets/images/image14-a0ee9724381d3b82a033524551c6defa.png"},70103:function(e,t,a){t.Z=a.p+"assets/images/image15-825a997dc88df5e7ab506de4ddea03a0.png"},55220:function(e,t,a){t.Z=a.p+"assets/images/image16-c23d34033fb9b381029dd6abd7e8b4d2.png"},90110:function(e,t,a){t.Z=a.p+"assets/images/image2-601a540005962ea60852ec4c125208ea.png"},77911:function(e,t,a){t.Z=a.p+"assets/images/image3-42aa6ead3a8459d4face42dd70749c68.png"},56182:function(e,t,a){t.Z=a.p+"assets/images/image4-6df87dc7989bc948e3bf96cb370673b7.png"},46548:function(e,t,a){t.Z=a.p+"assets/images/image5-fe21389ef825a81d3e310edb43e0b7d5.png"},77554:function(e,t,a){t.Z=a.p+"assets/images/image6-7fed64cc5693283a33c67534b9ed70d7.png"},37282:function(e,t,a){t.Z=a.p+"assets/images/image7-70f15b483cc4269f690e11c4a56865a8.png"},14726:function(e,t,a){t.Z=a.p+"assets/images/image8-52dbba0b94f278912fa68484a71c1c55.png"},46864:function(e,t,a){t.Z=a.p+"assets/images/image9-7f2f0055458ae8cf71b3f4b4f4e91bf3.png"}}]);