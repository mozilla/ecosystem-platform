"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[2679],{79369:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=i(85893),n=i(11151);const a={},r="Admin Panel Support User Documentation",o={id:"reference/admin-panel",title:"Admin Panel Support User Documentation",description:"The Firefox account admin panel provides access to key information about user accounts and allows administrative functions to be performed on these accounts. This document is broken down by UI component, and explains all the functionality afforded by the admin panel.",source:"@site/docs/reference/admin-panel.md",sourceDirName:"reference",slug:"/reference/admin-panel",permalink:"/ecosystem-platform/reference/admin-panel",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/admin-panel.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Additional Docs",permalink:"/ecosystem-platform/additional-docs"}},c={},l=[{value:"Search Bar",id:"search-bar",level:2},{value:"Account Search Results",id:"account-search-results",level:2},{value:"<strong>Primary Account Info</strong>",id:"primary-account-info",level:3},{value:"Secondary Email",id:"secondary-email",level:3},{value:"Email Bounces",id:"email-bounces",level:3},{value:"TOTP (Time-Based One-Time Passwords)",id:"totp-time-based-one-time-passwords",level:3},{value:"Recovery Key",id:"recovery-key",level:3},{value:"Connected Services",id:"connected-services",level:3},{value:"Subscriptions",id:"subscriptions",level:3},{value:"Stripe Subscription Status",id:"stripe-subscription-status",level:4},{value:"Google Play Store Subscription Status",id:"google-play-store-subscription-status",level:4},{value:"Apple App Store Subscription Status",id:"apple-app-store-subscription-status",level:4},{value:"Account History",id:"account-history",level:3},{value:"Linked Accounts",id:"linked-accounts",level:3},{value:"Email Verification",id:"email-verification",level:3},{value:"Disable Login",id:"disable-login",level:3},{value:"Features Guarded by Permissions",id:"features-guarded-by-permissions",level:2},{value:"Requesting Access / More Permissions",id:"requesting-access--more-permissions",level:2}];function h(e){const s={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"admin-panel-support-user-documentation",children:"Admin Panel Support User Documentation"}),"\n",(0,t.jsx)(s.p,{children:"The Firefox account admin panel provides access to key information about user accounts and allows administrative functions to be performed on these accounts. This document is broken down by UI component, and explains all the functionality afforded by the admin panel."}),"\n",(0,t.jsx)(s.h1,{id:"menu-bar",children:"Menu Bar"}),"\n",(0,t.jsxs)(s.p,{children:["The menu bar located in the upper left provides two functions at the moment. ",(0,t.jsx)(s.a,{href:"#account-search",children:"Account search "})," and ",(0,t.jsx)(s.a,{href:"#permissions",children:"Permissions"}),". Clicking on a menu item will bring up the corresponding view."]}),"\n",(0,t.jsx)(s.h1,{id:"account-search",children:"Account Search"}),"\n",(0,t.jsx)(s.p,{children:"The account search is the primary place for interactions in the admin panel. It allows looking up a customer by either email address or user id. In the vast majority of support situations, user email will be used for look up."}),"\n",(0,t.jsx)(s.h2,{id:"search-bar",children:"Search Bar"}),"\n",(0,t.jsx)(s.p,{children:"Simply start by typing a user\u2019s email address into the search bar. As you type, a list of possible email address matches will be displayed. Either select one of these auto completes, enter the exact email address, and click the search icon or press enter."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," This is a prefix match, meaning that it will match on the beginning of the email addresses. For example, if you are looking up ",(0,t.jsx)(s.a,{href:"mailto:foxkeh@mozilla.com",children:"foxkeh@mozilla.com"})," typing ",(0,t.jsx)(s.em,{children:"foxke"}),", would present ",(0,t.jsx)(s.a,{href:"mailto:foxkeh@mozilla.com",children:"foxkeh@mozilla.com"}),", but typing ",(0,t.jsx)(s.em,{children:"oxkeh"})," would not present a match."]}),"\n",(0,t.jsx)(s.h2,{id:"account-search-results",children:"Account Search Results"}),"\n",(0,t.jsx)(s.p,{children:"If the user is found, a view with all the pertinent user information will be displayed. Here\u2019s an example screenshot of what an account may look like. More detail about each section follows."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"account search box screen capture",src:i(97450).Z+"",title:"image_tooltip",width:"327",height:"107"})}),"\n",(0,t.jsx)(s.p,{children:"If the user is not found, a message below the search box will appear, indicating no account is found."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"account search not found screen capture",src:i(90110).Z+"",title:"image_tooltip",width:"500",height:"284"})}),"\n",(0,t.jsx)(s.h3,{id:"primary-account-info",children:(0,t.jsx)(s.strong,{children:"Primary Account Info"})}),"\n",(0,t.jsx)(s.p,{children:"This section holds the key identifying information for the retrieved account."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"primary account info screen capture",src:i(77911).Z+"",title:"image_tooltip",width:"500",height:"360"})}),"\n",(0,t.jsx)(s.p,{children:"It includes:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The user\u2019s email address."}),"\n",(0,t.jsx)(s.li,{children:"Whether or not the account has verified the email address by clicking on the verification link that was sent to their email during registration."}),"\n",(0,t.jsx)(s.li,{children:"The user\u2019s unique identifier, also known as their \u2018uid\u2019."}),"\n",(0,t.jsxs)(s.li,{children:["The time at which the account was created. The number shown is a timestamp in ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Unix_time",children:"epoch time"}),", and the date below is value adjusted to your timezone."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"secondary-email",children:"Secondary Email"}),"\n",(0,t.jsx)(s.p,{children:"Users are able to provide an optional secondary email address as a backup. If they have done so, this value can also be searched for."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"secondary email screen capture",src:i(56182).Z+"",title:"image_tooltip",width:"500",height:"133"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," If the user has provided a secondary email address, but has not verified the code sent to their email address yet, the UI should note the email address is \u2018not verified.\u2019 Once they have verified the code sent to their email, the status will change to \u2018verified.\u2019"]}),"\n",(0,t.jsx)(s.h3,{id:"email-bounces",children:"Email Bounces"}),"\n",(0,t.jsx)(s.p,{children:"This is probably one of the most common uses of the admin panel. Occasionally, we will receive complaints that a user is blocked from accessing their account and never got a registration/verification/notification email. Generally this is due to an email bounce, or in other words, we sent out an email and it was rejected by the user\u2019s email server."}),"\n",(0,t.jsxs)(s.p,{children:["In the event this happens, we generally clear the email bounces, which also unblocks their account. We then ask the user to add ",(0,t.jsx)(s.a,{href:"mailto:accounts@firefox.com",children:"accounts@firefox.com"})," to their address book and try again. Clearing the bounces is an important step, because the email cannot be delivered until the bounce is cleared. And a user can be locked out of their account until they have received a verification code in their inbox."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"email bounces screen capture",src:i(46548).Z+"",title:"image_tooltip",width:"500",height:"236"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Important!"})," There are essentially two basic types of email bounces. There are \u2018hard bounces\u2019 and \u2018soft bounces\u2019. Soft email bounces will automatically clear themselves in 24 hours, whereas hard email bounces will not automatically clear, and must therefore be manually cleared."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Important!"})," There is one bounce type we must pay special attention to. If the email is bouncing because it is \u2018suppressed\u2019, clearing it isn't going to help and will hurt our deliverability score if we keep trying to send it. In this case, we should reach out to the email provider and try to resolve the issue. Once resolved, we can then clear the bounce on our side and ask the user to try again."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Important!"})," In the event a user continues to have trouble even after bounces have been cleared and they have added ",(0,t.jsx)(s.a,{href:"mailto:accounts@firefox.com",children:"accounts@firefox.com"})," as a contact, the extra information below the \u2018clear all  bounces\u2019 button will be useful for the engineering team to further troubleshoot the issue. If clearing bounces doesn\u2019t seem to be working. Don\u2019t keep trying it over and over again! There may be something specific going on with the bounceType that requires a special resolution path. For more details about bounces reference this ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/ses/latest/dg/notification-contents.html#bounce-types",children:"document"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"totp-time-based-one-time-passwords",children:"TOTP (Time-Based One-Time Passwords)"}),"\n",(0,t.jsx)(s.p,{children:"TOTP, also often referred to as two step authentication, two factor authentication, or 2FA, is a secure way to validate a user on sign in. It requires that they have a secondary device or application they use for authentication. Upon logging in, they will be prompted for a code that could have only been generated by this secondary source. This code is then also required to access the account, thereby providing an extra layer of security."}),"\n",(0,t.jsx)(s.p,{children:"If the user has enabled TOTP this section will indicate this."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"totp screen capture",src:i(77554).Z+"",title:"image_tooltip",width:"500",height:"274"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," When setting up TOTP the user is guided through a 3 step process. If they don\u2019t successfully finish the process, then the state may look like something like the following, in which case the user should attempt to set up TOTP again or remove it."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"totp unverified screen capture",src:i(37282).Z+"",title:"image_tooltip",width:"500",height:"180"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Important!"})," Once TOTP is enabled, for security reasons, there is no way to disable it on a user\u2019s behalf. If they have lost their TOTP device, they only have two avenues to restore access. The first option is to use a recovery code that was provided when they initially set up TOTP. This is different from the ",(0,t.jsx)(s.a,{href:"#recovery-key",children:"Recovery Key"}),", and is a common source of confusion. A second option, might be logging into settings and disabling TOTP with a device that is currently connected; however, this only works if the user is lucky enough to still have an active session. See ",(0,t.jsx)(s.a,{href:"#connected-services",children:"Connected Services"})," for more info about this."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Tip:"})," TOTP is time based. This means if the clock on the user\u2019s TOTP device is off, it might say the code is invalid. If a user has appeared to successfully set up TOTP but they are still unable to verify the code with their TOTP device, asking them to verify the clock on their TOTP device is accurate may be a pathway to resolution."]}),"\n",(0,t.jsx)(s.h3,{id:"recovery-key",children:"Recovery Key"}),"\n",(0,t.jsx)(s.p,{children:"The recovery key is another security measure that allows a user to get back into their account in the event they lose their password."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"recovery key screen capture",src:i(14726).Z+"",title:"image_tooltip",width:"500",height:"198"})}),"\n",(0,t.jsx)(s.p,{children:"Similar to other sections of the admin panel, this field will indicate if the recovery has been verified or not."}),"\n",(0,t.jsx)(s.p,{children:"Oftentimes a user will report losing their password and being locked out of their account and have simply forgotten they created recovery codes. If they have recovery keys, reminding them of the date the recovery keys were created can be helpful and sometimes leads to a resolution."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Important!"})," At the time of writing, the recovery key does not supersede TOTP. In other words, if the user has enabled TOTP, they will still be required to verify with TOTP even after using their recovery key."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Tip:"})," Some users will confuse the TOTP recovery codes with their recovery key. If they have both TOTP and a recovery key enabled, be sure they understand the difference."]}),"\n",(0,t.jsx)(s.h3,{id:"connected-services",children:"Connected Services"}),"\n",(0,t.jsx)(s.p,{children:"This section shows all the active devices that have been authorized with Mozilla accounts. A connected device might be a browser, an app, or a third party product (also known as a relying party), that authenticates with Mozilla accounts. This section will give an overview of all the devices that are currently connected."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"connected services screen capture",src:i(46864).Z+"",title:"image_tooltip",width:"327",height:"99"})}),"\n",(0,t.jsx)(s.p,{children:"Here is summary of these fields:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Client"})," - A unique name for the connected device. The name is descriptive and provides some indication of what the client is."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Device Type"})," - The type of device connected. The most common types will be ",(0,t.jsx)(s.em,{children:"mobile"})," or ",(0,t.jsx)(s.em,{children:"desktop"}),". A device type may also be marked as ",(0,t.jsx)(s.em,{children:"unknown"})," if it\u2019s a session from a third party service."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"User Agent"})," - This is a common value sent by all browsers. It should indicate the client\u2019s browser type and version. This value may be set to ",(0,t.jsx)(s.em,{children:"unknown"})," if the session is coming from a third party service."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Operating System"})," - This is the device\u2019s operating system. Again the value may be ",(0,t.jsx)(s.em,{children:"unknown"})," if it is a third party service."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Created At"})," - The time the device session was first initialized."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Last Used"})," - The time the session was last accessed."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Location"})," - The location of the device. Note that this information is not always available."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Client ID"})," - If the client has a specific Client ID, this will be displayed here. This is an optional field, and is generally reserved for third party services."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Device ID"})," - In the event a client is associated with more than one device, there may also be a unique device identifier."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Session Token ID"})," - If the connected service/client utilizes a session token, this field will be marked as [REDACTED] for security reasons. If the device doesn\u2019t have a known session token this field will be marked as N/A."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Refresh Token ID"})," - Once a session has been brokered, a refresh token may be used to keep the session active. If a refresh token is present it will be marked as [REDACTED], otherwise it will be marked as N/A."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"subscriptions",children:"Subscriptions"}),"\n",(0,t.jsx)(s.p,{children:"This section indicates products that the user has purchased subscriptions for. Subscriptions can be purchased through one of three sources, Stripe, the Apple App Store, or the Google Play Store.  A typical subscription will look something like this:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"subscriptions screen capture",src:i(70554).Z+"",title:"image_tooltip",width:"500",height:"110"})}),"\n",(0,t.jsx)(s.p,{children:"The fields are as follows:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Product Name"})," - The name of the product purchased. This should be self explanatory."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Status"})," - The status of the product. See ",(0,t.jsx)(s.a,{href:"#stripe-subscription-status",children:"Stripe Subscription Status"}),", ",(0,t.jsx)(s.a,{href:"#google-play-store-subscription-status",children:"Google Play Store Subscription Status"}),", or ",(0,t.jsx)(s.a,{href:"#apple-app-store-subscription-status",children:"Apple App Store Subscription Status"})," for more information."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Created at"})," - This is the date the subscription was created."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Current Period Start"})," - This is the start date of the current billing cycle."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Current Period End"})," - This is the end date of the current billing cycle."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Cancel at period end?"})," - Many subscriptions will automatically renew. If this is the case this value is false, otherwise this value will be true."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Subscription ID"}),"- A unique identifier for the subscription."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Product ID"})," - A unique identifier for the product purchased."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Plan ID"})," - A unique identifier for the plan. Note that this corresponds to a plan that has been configured in Stripe. Even subscriptions in the Google Play Store and Apple App Store will have a corresponding plan configuration in Stripe."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Latest Invoice"})," - Only available for subscriptions purchased through Stripe. This will link directly to the last invoice issued for the subscription."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Manage Subscriptions"})," - Only available for subscriptions purchased through Stripe. This link will open up a session where a customer\u2019s subscription can be managed."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"stripe-subscription-status",children:"Stripe Subscription Status"}),"\n",(0,t.jsxs)(s.p,{children:["The status field for a Subscription purchased through Stripe can be one of several values. We don\u2019t do any mappings on this field and display the raw subscription status for stripe accounts. More on the possible values of status and what these mean can be found ",(0,t.jsx)(s.a,{href:"https://stripe.com/docs/api/subscriptions/object#subscription_object-status",children:"here"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"google-play-store-subscription-status",children:"Google Play Store Subscription Status"}),"\n",(0,t.jsx)(s.p,{children:"The status field for the Google Play Store can be one of several values. We must look at the start and end dates of the subscription as well as its payment status to determine an overall status. Here are the possible values:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"active"})," - The user has paid and has an active subscription."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"canceled"})," - The user's subscription has expired or been replaced by another subscription."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"trialing"})," - The user has an active trail subscription."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"unpaid"})," - The user\u2019s subscription is pending payment and/or payment is being retried."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"apple-app-store-subscription-status",children:"Apple App Store Subscription Status"}),"\n",(0,t.jsx)(s.p,{children:"The status field for the Apple App Store can be one of X values. We must look at the start and end dates of the subscription, whether or not it auto renews, and the subscription\u2019s payment status to determine an overall status. Here are the possible values:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"active"})," - The user has paid and has an active subscription."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"canceled"})," - The user\u2019s subscription has expired."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"past_due"})," - The user\u2019s subscription needs to be paid, but is currently in a grace period where it has not been canceled yet."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"trialing"})," - The user has an active trial subscription."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"unpaid"})," - The user has an unpaid subscription, but the payment is pending and/or being retried."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"account-history",children:"Account History"}),"\n",(0,t.jsx)(s.p,{children:"This section simply displays a history of recent key account events such as creation and login."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"account history screen capture",src:i(569).Z+"",title:"image_tooltip",width:"500",height:"739"})}),"\n",(0,t.jsx)(s.h3,{id:"linked-accounts",children:"Linked Accounts"}),"\n",(0,t.jsxs)(s.p,{children:["This section shows accounts that have linked through OAuth. Mozilla accounts support logging in with ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/OAuth",children:"OAuth"})," from a google account or an apple account. When a user authenticates via OAuth, the third party account that they used for authorization will be considered linked and will  show up here."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"linked accounts screen capture",src:i(24759).Z+"",title:"image_tooltip",width:"500",height:"131"})}),"\n",(0,t.jsx)(s.p,{children:"The unlink button allows an admin to effectively remove the OAuth account tied to the user\u2019s account. This may be necessary if the user has lost access to their firefox account, and they want to remove their linked OAuth account."}),"\n",(0,t.jsx)(s.h1,{id:"the-danger-zone",children:"The Danger Zone"}),"\n",(0,t.jsx)(s.p,{children:"This section holds actions that potentially alter a user\u2019s account state. Please take care, as actions here can affect a user\u2019s ability to access their account. Note that some actions in this area require Admin Level permissions."}),"\n",(0,t.jsx)(s.h3,{id:"email-verification",children:"Email Verification"}),"\n",(0,t.jsx)(s.p,{children:"Executing the \u2018Unverify Email\u2019 action in this section will do a couple things. First, it will automatically sign out the user from their account. Second, it sets a flag on the account indicating that a verification code, which will be sent to the user\u2019s primary email address, will also be required for their next login."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"email verification screen capture",src:i(37457).Z+"",title:"image_tooltip",width:"500",height:"127"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Tip:"})," This can be useful in the event that a user\u2019s account password has been compromised by another malicious user. By \u2018unverifying\u2019 the email address, the malicious user would not be able to access the account with a password alone."]}),"\n",(0,t.jsx)(s.h3,{id:"disable-login",children:"Disable Login"}),"\n",(0,t.jsx)(s.p,{children:"Also fairly self explanatory, this section disables a users ability to log into an account. This might be necessary if a user's account has been compromised, or if we believe an account is being used for a malicious purpose."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"disable login screen capture",src:i(55338).Z+"",title:"image_tooltip",width:"500",height:"144"})}),"\n",(0,t.jsx)(s.p,{children:"Once the account login has been disabled, it can be reenabled by selecting the \u2018Enable\u2019 action."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"enable login screen capture",src:i(70103).Z+"",title:"image_tooltip",width:"500",height:"87"})}),"\n",(0,t.jsx)(s.h1,{id:"permissions",children:"Permissions"}),"\n",(0,t.jsxs)(s.p,{children:["This section indicates the features an admin panel user has access to. Admin panel access is controlled in two ways. First, the admin panel is only accessible via a Mozilla VPN connection. As a Mozilla employee, you should be able to access the VPN by following the instructions on our ",(0,t.jsx)(s.a,{href:"https://mana.mozilla.org/wiki/display/SD/VPN",children:"mana pages"}),". Second, once VPN access has been granted, your account must be added to one of several LDAP groups. These groups ultimately control the admin panel features you have access to."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," It is likely that you are in multiple LDAP groups relating to admin panel permissions. If this is the case, you will operate under the group with the highest permission level. For example, if you are in the LDAP groups vpn_fxa_admin_panel_prod and vpn_fxa_support_agent_prod, you will operate under the ",(0,t.jsx)(s.em,{children:"Admin"})," group."]}),"\n",(0,t.jsx)(s.h2,{id:"features-guarded-by-permissions",children:"Features Guarded by Permissions"}),"\n",(0,t.jsxs)(s.p,{children:["There are numerous ",(0,t.jsx)(s.em,{children:"guards"})," that restrict access to features. Each feature is listed on the permissions view, and a checkbox indicates if permissions are granted to the feature. For example, here is what an Admin user would see:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"permission features screen capture",src:i(55220).Z+"",title:"image_tooltip",width:"500",height:"512"})}),"\n",(0,t.jsx)(s.p,{children:"And here is a summary of each feature:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Lookup Account By Email/UID"})," - This feature grants access to the search box on the ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.a,{href:"#account-search",children:"Account Search"})})," page."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Account History"})," - This feature grants access to the ",(0,t.jsx)(s.a,{href:"#account-history",children:"Account History"})," section on the ",(0,t.jsx)(s.em,{children:"Account Search"})," page."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"View Active Sessions"})," - This feature grants access to the ",(0,t.jsx)(s.a,{href:"#connected-services",children:"Connected Services"})," section on the A_ccount Search_ page.."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"View Account Logs"})," - This feature is currently not applicable."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"View Linked Accounts"})," - This feature grants access to the ",(0,t.jsx)(s.a,{href:"#linked-accounts",children:"Linked Accounts"})," section on the ",(0,t.jsx)(s.em,{children:"Account Search"})," page."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Clear Email Bounces"})," - This feature grants access to the ",(0,t.jsx)(s.a,{href:"#email-bounces",children:"Email Bounces"})," section on the ",(0,t.jsx)(s.em,{children:"Account Search"})," page."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Disable Account"})," - This feature grants access to the ",(0,t.jsx)(s.a,{href:"#disable-login",children:"Disable Login"})," section on the ",(0,t.jsx)(s.em,{children:"Account Search"})," page."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Enable Account"})," - This feature grants access to the ",(0,t.jsx)(s.a,{href:"#enable-login",children:"Enable Login"})," section on the ",(0,t.jsx)(s.em,{children:"Account Search"})," page. Note that unless an account has been manually disabled, this section will not be visible."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Site Status"})," - This feature is currently not applicable."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Unverify Email Address"})," - This feature grants access to the Unverify Email button in the ",(0,t.jsx)(s.a,{href:"#email-verification",children:"Email Verification"})," section in the \u2018Danger Zone\u2019 area on the ",(0,t.jsx)(s.em,{children:"Account Search"})," page."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Unlink Account"})," - This feature grants access to the ",(0,t.jsx)(s.em,{children:"Unlink Account"})," button found in the ",(0,t.jsx)(s.a,{href:"#linked-accounts",children:"Linked Accounts"})," section on the ",(0,t.jsx)(s.em,{children:"Account Search"})," page."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"requesting-access--more-permissions",children:"Requesting Access / More Permissions"}),"\n",(0,t.jsx)(s.p,{children:"In the event one of the features described above is not available, and you feel like you need to be in a different user group with more permissions, get in touch with the FxA team."})]})}function d(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},97450:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/image1-c87cd4cfd730ed44a9b2bee6840e794e.png"},70554:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/image10-9cef0b0dd73ec40a9e49fbb29deb14f3.png"},569:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/image11-430c7a881f70ffdbdc1e3dc84032a82b.png"},24759:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/image12-eb12851e1b6eb7171a697c816e6febbe.png"},37457:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/image13-02056c7250e136e57ece6a3257318a32.png"},55338:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/image14-7cc2d8c1a6599a7a7e429e31af9074f0.png"},70103:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/image15-6920b71fba6eb46764055fac8313163b.png"},55220:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/image16-2bf79d73008677fc2be11ea3d79db506.png"},90110:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/image2-7575afac9b91c7d6455c68921f1a615e.png"},77911:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/image3-6e121530a0609f407af32e7b5b480768.png"},56182:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/image4-ec56268e6926cdd4e3fe6ab1dc0bc94a.png"},46548:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/image5-32ad5e7423b5647792993de288a2cea3.png"},77554:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/image6-6d2b10b0d508bb044b3b464d656fea5e.png"},37282:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/image7-b42b794271e78bef65438e76087a3480.png"},14726:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/image8-eac590f20ffe8c5645c00a0ad48e63c2.png"},46864:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/image9-38299fee9546f94a2f646c2b74ef7660.png"},11151:(e,s,i)=>{i.d(s,{Z:()=>o,a:()=>r});var t=i(67294);const n={},a=t.createContext(n);function r(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);