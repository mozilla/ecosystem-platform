(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[1884],{808:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return f}});var n=a(87462),s=a(63366),r=(a(67294),a(3905)),o=a(93456),i=["components"],p={id:"fxa-system-diagrams",title:"Maps of the FxA Universe",sidebar_label:"FxA System Diagrams"},u=void 0,l={unversionedId:"fxa-engineering/fxa-system-diagrams",id:"fxa-engineering/fxa-system-diagrams",isDocsHomePage:!1,title:"Maps of the FxA Universe",description:"Current as of November 15th, 2019",source:"@site/docs/fxa-engineering/fxa-systems.md",sourceDirName:"fxa-engineering",slug:"/fxa-engineering/fxa-system-diagrams",permalink:"/ecosystem-platform/fxa-engineering/fxa-system-diagrams",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/main/website/docs/fxa-engineering/fxa-systems.md",tags:[],version:"current",frontMatter:{id:"fxa-system-diagrams",title:"Maps of the FxA Universe",sidebar_label:"FxA System Diagrams"},sidebar:"docs",previous:{title:"Internal API Documentation",permalink:"/ecosystem-platform/fxa-engineering/fxa-api"},next:{title:"Application Logging",permalink:"/ecosystem-platform/fxa-engineering/fxa-logging"}},c=[{value:"FxA universe",id:"fxa-universe",children:[]},{value:"fxa-auth-server",id:"fxa-auth-server",children:[]},{value:"fxa-content-server",id:"fxa-content-server",children:[]},{value:"fxa-customs-server",id:"fxa-customs-server",children:[]},{value:"fxa-email-service",id:"fxa-email-service",children:[]},{value:"fxa-payments-server",id:"fxa-payments-server",children:[]},{value:"fxa-profile-server",id:"fxa-profile-server",children:[]},{value:"fxa-support-panel",id:"fxa-support-panel",children:[]}],m={toc:c};function f(e){var t=e.components,a=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Current as of ",(0,r.kt)("inlineCode",{parentName:"p"},"November 15th, 2019")),(0,r.kt)("p",null,"Click on any image to expand."),(0,r.kt)("h2",{id:"fxa-universe"},"FxA universe"),(0,r.kt)(o.Mermaid,{chart:'stateDiagram\n  state "RP" as RP\n  state "Amazon S3" as s3: Profile photo storage\n  state "Amazon SNS" as sns: Amazon hosted email/SMS\n  state "Amplitude" as amplitude: Hosted metrics\n  state "Basket - Salesforce Marketing Cloud (SFMC)" as basket: Send marketing emails, hosted by Marketing\n  state "fraud detection pipeline" as fdp: Should an event be blocked? Hosted by SecOps\n  state "fxa-auth-server" as auth: authn/authz\n  state "fxa-auth-db-mysql" as authdb: DB service for auth-server\n  state "fxa-content-server" as content\n  state "fxa-customs-server" as customs: Fraud/abuse prevention\n  state "fxa-email-service" as email: SMTP gateway\n  state "fxa-event-broker" as eb: Notify RPs of important user events\n  state "fxa-payments-server" as payments\n  state "fxa-profile-server" as profile\n  state "fxa-support-panel" as support_panel: Allow support agents to access user info\n  state "gcp" as gcp: logging/metrics\n  state "iprepd" as iprepd: Should an IP be blocked? Hosted by SecOps\n  state "memcached" as memcached: store blocks, rate limits\n  state "Mozilla Data Platform (MDP)" as mdp: Send marketing emails, hosted by Marketing\n  state "mysql" as mysql: auth, oauth, profile CRUD\n  state "redis" as redis: session/profile info cache\n  state "subhub" as subhub: Hosted by IT\n  state "Support agent" as support_agent: Fix user problems\n  state "Zendesk" as zendesk: Hosted support management\n\n  User--\x3eRP\n  RP--\x3eauth\n  RP--\x3econtent\n  auth--\x3eauthdb\n  auth--\x3ebasket\n  auth--\x3ecustoms\n  auth--\x3eeb\n  auth--\x3eemail\n  auth--\x3egcp\n  auth--\x3emysql\n  auth--\x3eprofile\n  auth--\x3eredis\n  auth--\x3esns\n  auth--\x3esubhub\n  auth--\x3ezendesk\n  authdb--\x3emysql\n  content--\x3eauth\n  content--\x3egcp\n  content--\x3epayments\n  content--\x3eprofile\n  customs--\x3egcp\n  customs--\x3eiprepd\n  customs--\x3ememcached\n  eb--\x3eRP\n  email--\x3esns\n  fdp--\x3ecustoms\n  gcp--\x3efdp\n  gcp--\x3emdp\n  gcp--\x3eamplitude\n  payments--\x3eauth\n  payments--\x3eprofile\n  payments--\x3estripe\n  payments--\x3egcp\n  payments--\x3eRP\n  profile--\x3eauth\n  profile--\x3egcp\n  profile--\x3emysql\n  profile--\x3es3\n  subhub--\x3estripe\n  support_agent--\x3esupport_panel\n  support_agent--\x3ezendesk\n  support_panel--\x3eauth\n  support_panel--\x3eprofile',mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"fxa-auth-server"},"fxa-auth-server"),(0,r.kt)(o.Mermaid,{chart:'stateDiagram\n  state "RP" as RP\n  state "amazon sns" as sns: Amazon hosted email/SMS\n  state "Basket - Salesforce Marketing Cloud (SFMC)" as basket: Send marketing emails, hosted by Marketing\n  state "fxa-auth-db-mysql" as authdb: DB service for auth-server\n  state "fxa-auth-server" as auth: authn/authz\n  state "fxa-content-server" as content\n  state "fxa-customs-server" as customs: Fraud/abuse prevention\n  state "fxa-email-service" as email: SMTP gateway\n  state "fxa-event-broker" as eb: Notify RPs of important user events\n  state "fxa-payments-server" as payments\n  state "fxa-profile-server" as profile\n  state "fxa-support-panel" as support_panel: Allow support agents to access user info\n  state "gcp" as gcp: logging/metrics\n  state "mysql" as mysql: auth, oauth, profile CRUD\n  state "redis" as redis: session/profile info cache\n  state "subhub" as subhub: Hosted by IT\n  state "Zendesk" as zendesk: Hosted support management\n\n  RP--\x3eauth : 1\n  content--\x3eauth : 2\n  payments--\x3eauth : 3\n  profile--\x3eauth : 4\n  support_panel--\x3eauth : 5\n  auth--\x3eauthdb : 6\n  auth--\x3ebasket : 7\n  auth--\x3ecustoms : 8\n  auth--\x3eeb : 9\n  auth--\x3eemail : 10\n  auth--\x3egcp : 11\n  auth--\x3emysql : 12\n  auth--\x3eredis : 13\n  auth--\x3esns : 14\n  auth--\x3esubhub : 15\n  auth--\x3ezendesk : 16\n\n  note left of RP\nNo.  Connection             Reason\n1.   RP &rarr; auth              verify/fetch OAuth tokens\n2.   content &rarr; auth         authentication/authorization\n3.   payments &rarr; auth        update subscriptions\n4.   profile &rarr; auth         canonical profile info\n5.   support_panel &rarr; auth   view user info\n6.   auth &rarr; authdb          authentication/subscription CRUD\n7.   auth &rarr; basket          notify of user events\n8.   auth &rarr; customs         fraud detection\n9.   auth &rarr; event broker    notify of user update\n10.  auth &rarr; email           send email to users\n11.  auth &rarr; gcp             logging\n12.  auth &rarr; mysql           authorization CRUD\n13.  auth &rarr; redis           profile/sessionToken cache\n14.  auth &rarr; sns             send SMS messages\n15.  auth &rarr; subhub          update subscriptions\n16.  auth &rarr; zendesk         file support tickets\n\n  end note\n',mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"fxa-content-server"},"fxa-content-server"),(0,r.kt)(o.Mermaid,{chart:'stateDiagram\n  RP\n  state "fxa-auth-server" as auth: authn/authz\n  state "fxa-content-server" as content\n  state "fxa-payments-server" as payments\n  state "fxa-profile-server" as profile\n  state "gcp" as gcp: logging/metrics\n\n  RP--\x3econtent : 1\n  content--\x3eauth : 2\n  content--\x3epayments : 3\n  content--\x3eprofile : 4\n  content--\x3egcp : 5\n\n  note left of RP\nNo.  Connection          Reason\n1.   RP &rarr; content        authorization\n2.   content &rarr; auth      authentication &amp; authorization\n3.   content &rarr; payments  redirect to update subscriptions\n4.   content &rarr; profile   fetch subscription info\n5.   content &rarr; gcp       send logs\n\n  end note',mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"fxa-customs-server"},"fxa-customs-server"),(0,r.kt)(o.Mermaid,{chart:'stateDiagram\n  state "fxa-auth-server" as auth: authn/authz\n  state "fxa-customs-server" as customs: Fraud/abuse prevention\n  state "gcp" as gcp: logging/metrics\n  state "memcached" as memcached: store blocks, rate limits\n  state "iprepd" as iprepd: Should an IP be blocked? Hosted by SecOps\n  state "fraud detection pipeline" as fdp: Should an event be blocked? Hosted by SecOps\n\n  auth--\x3ecustoms : 1\n  customs--\x3egcp : 2\n  customs--\x3eiprepd : 3\n  customs--\x3ememcached : 4\n  fdp--\x3ecustoms : 5\n  gcp--\x3efdp : 6\n\n  note left of auth\nNo.  Connection           Reason\n1.   auth &rarr; customs       check whether request should be blocked\n2.   customs &rarr; gcp        send logs\n3.   customs &rarr; iprepd     check ip address\n4.   customs &rarr; memcached  store counts &amp; blocks\n5.   fdp &rarr; customs        inform of block\n6.   gcp &rarr; fdp            notify of user events\n  end note\n',mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"fxa-email-service"},"fxa-email-service"),(0,r.kt)(o.Mermaid,{chart:'stateDiagram\n  state "fxa-auth-server" as auth: authn/authz\n  state "fxa-email-service" as email: SMTP gateway\n  state "amazon sns" as sns: Amazon hosted email/SMS\n\n  auth--\x3eemail\n  email--\x3esns',mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"fxa-payments-server"},"fxa-payments-server"),(0,r.kt)(o.Mermaid,{chart:'stateDiagram\n  state "fxa-auth-server" as auth: authn/authz\n  state "fxa-content-server" as content\n  state "fxa-payments-server" as payments\n  state "fxa-profile-server" as profile\n  state "gcp" as gcp: logging/metrics\n\n  content--\x3epayments : 1\n  payments--\x3eauth : 2\n  payments--\x3eprofile : 3\n  payments--\x3estripe : 4\n  payments--\x3egcp : 5\n  payments--\x3eRP : 6\n\n  note left of content\nNo.  Connection           Reason\n1.   content &rarr; payments   redirect\n2.   payments &rarr; auth      update subscriptions\n3.   payments &rarr; profile   get user profile\n4.   payments &rarr; stripe    get payment widget\n5.   payments &rarr; gcp       send logs &amp; metrics\n6.   payments &rarr; RP        redirect after subscription update\n\n  end note',mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"fxa-profile-server"},"fxa-profile-server"),(0,r.kt)(o.Mermaid,{chart:'stateDiagram\n  state "fxa-auth-server" as auth: authn/authz\n  state "fxa-content-server" as content\n  state "fxa-payments-server" as payments\n  state "fxa-profile-server" as profile\n  state "mysql" as mysql: auth, oauth, profile CRUD\n  state "gcp" as gcp: logging/metrics\n  state "fxa-support-panel" as support_panel: Allow support agents to access user info\n  state "S3" as s3: Profile photo storage\n\n  content--\x3eprofile : 1\n  payments--\x3eprofile : 2\n  auth--\x3eprofile : 3\n  profile--\x3eauth : 4\n  support_panel--\x3eprofile : 5\n  profile--\x3egcp : 6\n  profile--\x3emysql : 7\n  profile--\x3es3 : 8\n\n  note left of gcp\nNo.  Connection               Reason\n1.   content &rarr; profile        get user profile\n2.   payments &rarr; profile       get user profile\n3.   auth &rarr; profile           notify of user events\n4.   profile &rarr; auth           get canonical profile info\n5.   support_panel &rarr; profile  get  user profile\n6.   profile &rarr; gcp            logging/metrics\n7.   profile &rarr; mysql          profile CRUD\n8.   profile &rarr; s3             store profile photos\n  end note',mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"fxa-support-panel"},"fxa-support-panel"),(0,r.kt)(o.Mermaid,{chart:'stateDiagram\n  state "fxa-auth-server" as auth: authn/authz\n  state "fxa-content-server" as content\n  state "fxa-profile-server" as profile\n  state "fxa-support-panel" as support_panel: Allow support agents to access user info\n  state "Support agent" as support_agent: Fix user problems\n  state "Zendesk" as zendesk: Hosted support management\n\n  User--\x3econtent : 1\n  content--\x3eauth : 2\n  auth--\x3ezendesk : 3\n  support_agent--\x3esupport_panel : 4\n  support_agent--\x3ezendesk : 5\n  support_panel--\x3eauth : 6\n  support_panel--\x3eprofile : 7\n\n  note left of zendesk\nNo.  Connection                      Reason\n1.   User &rarr; content                  file support ticket\n2.   content &rarr; auth                  forward support ticket\n3.   auth &rarr; zendesk                  forward support ticket\n4.   support_agent &rarr; support_panel   check user status\n5.   support_agent &rarr; zendesk         get support ticket\n6.   support_panel &rarr; auth            get user info\n7.   support_panel &rarr; profile         get user info\n\n  end note',mdxType:"Mermaid"}),(0,r.kt)("h1",{id:"a-few-additional-diagrams"},"A few additional diagrams"),(0,r.kt)("p",null,"There are a few more private diagrams maintained by the operations group about\nhow we have our cloud services set up.  If you're an employee, you can see\nthem here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mana.mozilla.org/wiki/display/SVCOPS/FxA+Auth+Server+Logical+Diagram"},"Firefox Accounts Auth Server Logical Diagram")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mana.mozilla.org/wiki/display/SVCOPS/FxA+Content+Server+Logical+Diagram"},"Firefox Accounts Content Server Logical Diagram")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mana.mozilla.org/wiki/display/SVCOPS/FxA+Profile+Server+Logical+Diagram"},"Firefox Accounts Profile Server Logical Diagram"))))}f.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=11748}}]);