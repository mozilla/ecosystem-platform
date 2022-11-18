"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[4081],{881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));t(16758);const l={title:"WebChannels in Firefox Desktop & Fennec"},s=void 0,o={unversionedId:"reference/webchannels-in-firefox-desktop-fennec",id:"reference/webchannels-in-firefox-desktop-fennec",title:"WebChannels in Firefox Desktop & Fennec",description:"Current as of December 2nd, 2019",source:"@site/docs/reference/webchannels-in-firefox-desktop-fennec.md",sourceDirName:"reference",slug:"/reference/webchannels-in-firefox-desktop-fennec",permalink:"/ecosystem-platform/reference/webchannels-in-firefox-desktop-fennec",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/webchannels-in-firefox-desktop-fennec.md",tags:[],version:"current",frontMatter:{title:"WebChannels in Firefox Desktop & Fennec"},sidebar:"docs",previous:{title:"Storybook Deploys with CircleCI",permalink:"/ecosystem-platform/reference/storybook-deploys-with-circleci"},next:{title:"WebChannels in Fenix & WebExtensions",permalink:"/ecosystem-platform/reference/webchannels-in-fenix-webextensions"}},r={},d=[{value:"Context",id:"context",level:2},{value:"Commands",id:"commands",level:2},{value:"fxaccounts:fxa_status",id:"fxaccountsfxa_status",level:3},{value:"request data",id:"request-data",level:4},{value:"response data",id:"response-data",level:4},{value:"support",id:"support",level:4},{value:"fxaccounts:loaded",id:"fxaccountsloaded",level:3},{value:"fxaccounts:can_link_account",id:"fxaccountscan_link_account",level:3},{value:"request data",id:"request-data-1",level:4},{value:"response data",id:"response-data-1",level:4},{value:"fxaccounts:login",id:"fxaccountslogin",level:3},{value:"data",id:"data",level:4},{value:"fxaccounts:verified",id:"fxaccountsverified",level:3},{value:"data",id:"data-1",level:4},{value:"support",id:"support-1",level:4},{value:"fxaccounts:delete_account",id:"fxaccountsdelete_account",level:3},{value:"data",id:"data-2",level:4},{value:"fxaccounts:delete",id:"fxaccountsdelete",level:3},{value:"data",id:"data-3",level:4},{value:"fxaccount:change_password",id:"fxaccountchange_password",level:3},{value:"data",id:"data-4",level:4},{value:"fxaccounts:logout",id:"fxaccountslogout",level:3},{value:"data",id:"data-5",level:4},{value:"profile:change",id:"profilechange",level:3},{value:"data",id:"data-6",level:4},{value:"Command data values",id:"command-data-values",level:2},{value:"loginData",id:"logindata",level:3},{value:"capabilities",id:"capabilities",level:3},{value:"engines",id:"engines",level:4},{value:"Possible values (Firefox Desktop)",id:"possible-values-firefox-desktop",level:5},{value:"Possible values (OAuth WebChannel Flow)",id:"possible-values-oauth-webchannel-flow",level:5},{value:"declinedSyncEngines, offeredSyncEngines",id:"declinedsyncengines-offeredsyncengines",level:3},{value:"signedInUser",id:"signedinuser",level:3},{value:"Command/Request format",id:"commandrequest-format",level:2},{value:"Response format",id:"response-format",level:2},{value:"Command order for a signin/signup",id:"command-order-for-a-signinsignup",level:2}],u={toc:d};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Current as of ",(0,i.kt)("inlineCode",{parentName:"p"},"December 2nd, 2019")),(0,i.kt)("h1",{id:"communication-with-firefox-via-webchannels"},"Communication with Firefox via WebChannels"),(0,i.kt)("p",null,"Firefox Accounts communicates with Firefox desktop and Fennec using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/WebChannel.jsm"},"WebChannels"),". WebChannels provide secure two-way communication between the browser and web content. Messages sent from content to the browser utilize ",(0,i.kt)("inlineCode",{parentName:"p"},"WebChannelMessageToChrome")," custom events. Messages sent from the browser to content utilize ",(0,i.kt)("inlineCode",{parentName:"p"},"WebChannelMessageToContent")," custom events."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"./webchannels-in-fenix-webextensions"},"WebChannels in Fenix & WebExtensions")," for details specific to those environments."),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"WebChannels are used to communicate Sync related information when\n",(0,i.kt)("inlineCode",{parentName:"p"},"service=sync&context=<context>")," query parameters are specified.\n",(0,i.kt)("inlineCode",{parentName:"p"},"<context>")," should be one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fx_desktop_v3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fx_fennec_v1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./webchannels-in-fenix-webextensions"},(0,i.kt)("inlineCode",{parentName:"a"},"oauth_webchannel_v1")))),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("p",null,"A command is a ",(0,i.kt)("inlineCode",{parentName:"p"},"WebChannelMessageToChrome")," custom event sent from FxA to the browser using the ",(0,i.kt)("inlineCode",{parentName:"p"},"account_updates")," WebChannel."),(0,i.kt)("p",null,"Command format is explained in the section titled ",(0,i.kt)("a",{parentName:"p",href:"#command-request-format"},"Command/Request format"),"."),(0,i.kt)("h3",{id:"fxaccountsfxa_status"},"fxaccounts:fxa_status"),(0,i.kt)("p",null,"Sent on startup to fetch the FxA state from supporting browsers.\nUsed to get the browser's currently signed in user as well as browser capabilities."),(0,i.kt)("h4",{id:"request-data"},"request data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  isPairing: <boolean>,\n  service: <string>\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isPairing"),": whether or not accounts.firefox.com is executing a pairing flow"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"service"),": the service name or OAuth client-id that is requesting authentication")),(0,i.kt)("h4",{id:"response-data"},"response data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  capabilities: <capabilities>\n  signedInUser: <signed in user> || null\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"capabilities")," - A list of capabilities supported by the browser. See ",(0,i.kt)("a",{parentName:"li",href:"#capabilities"},"capabilities"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signedInUser")," - the user currently signed into Sync on the browser. See ",(0,i.kt)("a",{parentName:"li",href:"#signedInUser"},"signedInUser"),".")),(0,i.kt)("h4",{id:"support"},"support"),(0,i.kt)("p",null,"Fx Desktop 55+"),(0,i.kt)("h3",{id:"fxaccountsloaded"},"fxaccounts:loaded"),(0,i.kt)("p",null,"Sent on startup. Sent after the first screen is visible. No data is sent. No response is expected."),(0,i.kt)("h3",{id:"fxaccountscan_link_account"},"fxaccounts:can_link_account"),(0,i.kt)("p",null,"Sent on signin or signup after a user has entered their credentials and submit the form. A response with an ",(0,i.kt)("inlineCode",{parentName:"p"},"ok")," field is expected."),(0,i.kt)("h4",{id:"request-data-1"},"request data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  email: <email>\n}\n")),(0,i.kt)("h4",{id:"response-data-1"},"response data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  ok: true | false;\n}\n")),(0,i.kt)("h3",{id:"fxaccountslogin"},"fxaccounts:login"),(0,i.kt)("p",null,"Sent when a user successfully authenticates with Firefox Accounts and sync can begin. This includes after a user signs up but before they verify their email address, after an account unlock, and after a password reset. No response is expected."),(0,i.kt)("h4",{id:"data"},"data"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#logindata"},"Login Data"),"."),(0,i.kt)("h3",{id:"fxaccountsverified"},"fxaccounts:verified"),(0,i.kt)("p",null,"The user has successfully verified their email address."),(0,i.kt)("h4",{id:"data-1"},"data"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#logindata"},"Login Data"),"."),(0,i.kt)("h4",{id:"support-1"},"support"),(0,i.kt)("h3",{id:"fxaccountsdelete_account"},"fxaccounts:delete_account"),(0,i.kt)("p",null,"Sent after the user successfully deletes their account. No response is expected.\nExpected by Fennec."),(0,i.kt)("h4",{id:"data-2"},"data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  email: <email>,\n  uid: <user id>\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"email")," - User's email address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uid")," - The user identifier.")),(0,i.kt)("h3",{id:"fxaccountsdelete"},"fxaccounts:delete"),(0,i.kt)("p",null,"Sent after the user successfully deletes their account. No response is expected.\nExpected by Fx Desktop."),(0,i.kt)("h4",{id:"data-3"},"data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  email: <email>,\n  uid: <user id>\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"email")," - User's email address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uid")," - The user identifier.")),(0,i.kt)("h3",{id:"fxaccountchange_password"},"fxaccount:change_password"),(0,i.kt)("p",null,"Sent after the user successfully changes their password. No response is expected."),(0,i.kt)("h4",{id:"data-4"},"data"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#logindata"},"Login Data"),"."),(0,i.kt)("h3",{id:"fxaccountslogout"},"fxaccounts:logout"),(0,i.kt)("p",null,"Called whenever the user signs out of their account. No response is expected."),(0,i.kt)("h4",{id:"data-5"},"data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  uid: <user id>\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uid")," - The user identifier.")),(0,i.kt)("h3",{id:"profilechange"},"profile:change"),(0,i.kt)("p",null,"Sent after the user changes their avatar or display name. No response is\nexpected."),(0,i.kt)("h4",{id:"data-6"},"data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  uid: <user id>\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uid")," - The user identifier.")),(0,i.kt)("h2",{id:"command-data-values"},"Command data values"),(0,i.kt)("h3",{id:"logindata"},"loginData"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  declinedSyncEngines: [<array of declined sync engines>],\n  email: <email>,\n  keyFetchToken: <key fetch token>,\n  offeredSyncEngines: [<array of displayed sync engines>],\n  sessionToken: <session token>,\n  uid: <user id>,\n  unwrapBKey: <unwrap b key>,\n  verified: (true|false),\n  verifiedCanLinkAccount: (true|false)\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"declinedSyncEngines")," - An array of Sync engines the user has deselected. See ",(0,i.kt)("a",{parentName:"li",href:"#declinedsyncengines-offeredsyncengines"},"declinedSyncEngines, offeredSyncEngines"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"email")," - User's email address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keyFetchToken")," - Token used to fetch wrapWrapKB from the server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"offeredSyncEngines")," - An array of Sync engines that were displayed to the user. See ",(0,i.kt)("a",{parentName:"li",href:"#declinedsyncengines-offeredsyncengines"},"declinedSyncEngines, offeredSyncEngines"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sessionToken")," - The current session token that can be used to interact with FxA's auth server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uid")," - The user identifier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unwrapBKey")," - Used to unwrap wrapWrapKB fetched from the server, resulting key is called kB. Keys derived from kB are used for data encryption for Sync, Send, and Notes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verified")," - Is the user verified?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verifiedCanLinkAccount")," - Has the user verified they want to link accounts, if signing into a different account than previously signed in to?")),(0,i.kt)("h3",{id:"capabilities"},"capabilities"),(0,i.kt)("p",null,"An object containing browser supported capabilities. Only available with browser support."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  engines: [list of optional supported engines],\n  choose_what_to_sync : <boolean>[default: false],\n  multiService: <boolean>[default: false],\n  pairing: <boolean>\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"engines")," - A list of optional supported engines."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"choose_what_to_sync")," - (OAuth WebChannel Only) - Whether to show the Choose What to Sync screen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"multiService")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),' if the user is signing into a "Sync Optional" flow where the user can sign into the browser but not enable Sync, e.g., about:welcome or the protection report. ',(0,i.kt)("inlineCode",{parentName:"li"},"false")," if the user is signing into Sync."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pairing")," - Whether the browser can act as a pairing authority.")),(0,i.kt)("h4",{id:"engines"},"engines"),(0,i.kt)("p",null,"A list of optional supported engines. If we are unsure whether an optional engine should be displayed, it will only be displayed if the engine is in the list."),(0,i.kt)("h5",{id:"possible-values-firefox-desktop"},"Possible values (Firefox Desktop)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addresses")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"creditcards"))),(0,i.kt)("h5",{id:"possible-values-oauth-webchannel-flow"},"Possible values (OAuth WebChannel Flow)"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"./webchannels-in-fenix-webextensions#engines-capability"},(0,i.kt)("inlineCode",{parentName:"a"},"engines")," capability in Fenix & WebExtensions"),"."),(0,i.kt)("h3",{id:"declinedsyncengines-offeredsyncengines"},"declinedSyncEngines, offeredSyncEngines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addons")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addresses")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bookmarks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"creditcards")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"history")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"passwords")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preferences")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tabs"))),(0,i.kt)("h3",{id:"signedinuser"},"signedInUser"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"email")," - User's email address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sessionToken")," - The current session token that can be used to interact with FxA's auth server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uid")," - The user identifier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verified")," - Is the user verified?")),(0,i.kt)("h2",{id:"commandrequest-format"},"Command/Request format"),(0,i.kt)("p",null,"Each custom event is created as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"new CustomEvent('WebChannelMessageToChrome', {\n  detail: {\n    id: 'account_updates',\n    message: {\n      command: <command>,\n      data: <data>,\n      messageId: <message id>\n    }\n  }\n});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command")," is one of the commands specified below."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")," is an optional JavaScript object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"messageId")," is an opaque identifier that should be specified when responding to to a message.")),(0,i.kt)("h2",{id:"response-format"},"Response format"),(0,i.kt)("p",null,"Responses to FxA use the ",(0,i.kt)("inlineCode",{parentName:"p"},"WebChannelMessageToContent")," custom event, which is handled by the ",(0,i.kt)("inlineCode",{parentName:"p"},"WebChannel.jsm")," module's ",(0,i.kt)("a",{parentName:"p",href:"https://dxr.mozilla.org/mozilla-central/source/toolkit/modules/WebChannel.jsm#272"},(0,i.kt)("inlineCode",{parentName:"a"},"send")," function"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," parameter should the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  command: <command>,\n  data: <data>,\n  messageId: <message id>\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command")," is one of the commands specified below."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")," is an optional JavaScript object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"messageId")," is the message ID sent in the ",(0,i.kt)("inlineCode",{parentName:"li"},"WebChannelMessageToChrome")," custom event.")),(0,i.kt)("h2",{id:"command-order-for-a-signinsignup"},"Command order for a signin/signup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"fxaccounts:fxa_status (if supported)"),(0,i.kt)("li",{parentName:"ol"},"fxaccounts:loaded"),(0,i.kt)("li",{parentName:"ol"},"fxaccounts:can_link_account"),(0,i.kt)("li",{parentName:"ol"},"fxaccounts:login"),(0,i.kt)("li",{parentName:"ol"},"fxaccounts:email_verified (if supported)")))}c.isMDXComponent=!0}}]);