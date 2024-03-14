"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[4249],{29691:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(85893),s=t(11151);const r={title:"Rate limiting"},o=void 0,a={id:"reference/rate-limiting",title:"Rate limiting",description:"Last updated: June 21th, 2022",source:"@site/docs/reference/rate-limiting.md",sourceDirName:"reference",slug:"/reference/rate-limiting",permalink:"/ecosystem-platform/reference/rate-limiting",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/rate-limiting.md",tags:[],version:"current",frontMatter:{title:"Rate limiting"},sidebar:"docs",previous:{title:"OAuth Details",permalink:"/ecosystem-platform/reference/oauth-details"},next:{title:"Storybook Deploys with CircleCI",permalink:"/ecosystem-platform/reference/storybook-deploys-with-circleci"}},c={},l=[{value:"Policies",id:"policies",level:3},{value:"Usage in Auth-server",id:"usage-in-auth-server",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Last updated: ",(0,i.jsx)(n.code,{children:"June 21th, 2022"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-customs-server/README.md",children:"Customs server"})," is the service responsible for maintaining and implementing rate limiting in FxA.\nIt was developed to help detect and deter ",(0,i.jsx)(n.a,{href:"https://wiki.mozilla.org/Identity/Firefox_Accounts/Fraud_and_abuse",children:"fraud and abuse"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Currently, only it is used by the ",(0,i.jsx)(n.a,{href:"https://github.com/mozilla/fxa-auth-server",children:"Mozilla accounts Auth Server"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The Customs server uses a sliding window to keep track of the current count of a specific type of action and trims the count as needed."}),"\n",(0,i.jsx)(n.h3,{id:"policies",children:"Policies"}),"\n",(0,i.jsx)(n.p,{children:"There are two types of policies:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["rate-limiting: slows down attackers by temporarily blocking requests for 15 minutes (see ",(0,i.jsx)(n.code,{children:"config.limits.rateLimitIntervalSeconds"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["block / ban: stops attacks by temporarily blocking requests for 24 hours (see ",(0,i.jsx)(n.code,{children:"config.limits.blockIntervalSeconds"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We currently have the following policies in place:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["rate-limiting when too many emails (",(0,i.jsx)(n.code,{children:"config.limits.maxEmails"})," defaults to 3) have been sent to the same email address in a given time period (",(0,i.jsx)(n.code,{children:"config.limits.rateLimitIntervalSeconds"})," defaults to 15 minutes)"]}),"\n",(0,i.jsxs)(n.li,{children:["rate-limiting when too many requests to look up account status by email address (",(0,i.jsx)(n.code,{children:"config.limits.maxAccountStatusCheck"}),") have been sent from the same ip address during"]}),"\n",(0,i.jsxs)(n.li,{children:["rate-limiting when too many sms (",(0,i.jsx)(n.code,{children:"config.limits.smsRateLimit.maxSms"}),") have been sent from the same ip address during period (",(0,i.jsx)(n.code,{children:"config.limits.smsRateLimit.limitIntervalSeconds"})," defaults to 60 minutes)"]}),"\n",(0,i.jsxs)(n.li,{children:["rate-limiting when too many sms (",(0,i.jsx)(n.code,{children:"config.limits.smsRateLimit.maxSms"}),") have been sent from the same email address during period (",(0,i.jsx)(n.code,{children:"config.limits.smsRateLimit.limitIntervalSeconds"})," defaults to 60 minutes)"]}),"\n",(0,i.jsxs)(n.li,{children:["rate-limiting when too many sms (",(0,i.jsx)(n.code,{children:"config.limits.smsRateLimit.maxSms"}),") have been sent to the same phone number during period (",(0,i.jsx)(n.code,{children:"config.limits.smsRateLimit.limitIntervalSeconds"})," defaults to 60 minutes)"]}),"\n",(0,i.jsxs)(n.li,{children:["rate-limiting when too many failed login attempts (",(0,i.jsx)(n.code,{children:"config.limits.maxBadLogins"})," defaults to 2) have occurred for a given account and IP address, in a given time period (",(0,i.jsx)(n.code,{children:"config.limits.rateLimitIntervalSeconds"})," defaults to 15 minutes)"]}),"\n",(0,i.jsxs)(n.li,{children:["rate-limiting too many attempts to verify randomly-generated codes (",(0,i.jsx)(n.code,{children:"config.limits.maxVerifyCodes"})," defaults to 10) have occurred for a given account and IP address, in a given time period (",(0,i.jsx)(n.code,{children:"config.limits.rateLimitIntervalSeconds"})," defaults to 15 minutes)"]}),"\n",(0,i.jsxs)(n.li,{children:["manual blocking of an account (see ",(0,i.jsx)(n.code,{children:"/blockEmail"})," API call)"]}),"\n",(0,i.jsxs)(n.li,{children:["manual blocking of an IP address (see ",(0,i.jsx)(n.code,{children:"/blockIp"})," API call)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The data that these policies are based on is stored in a memcache instance (keyed by ",(0,i.jsx)(n.code,{children:"email"}),", ",(0,i.jsx)(n.code,{children:"ip"})," or ",(0,i.jsx)(n.code,{children:"ip + email"})," depending on the policy) and the code that implements them is split across these three files:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"email_record.js"})," handles blocking and rate-limiting based only on the email address"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ip_email_record.js"})," handles rate-limiting based on both the email and IP address of the request"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ip_record.js"})," handles blocking based only on the IP address"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The rate-limiting and blocking policies are conveyed to the auth server via the ",(0,i.jsx)(n.code,{children:"block"})," property in the response to ",(0,i.jsx)(n.code,{children:"/check"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"usage-in-auth-server",children:"Usage in Auth-server"}),"\n",(0,i.jsx)(n.p,{children:"In the auth-server, we utilized a helper library to make calls to the custom server api. The request could contain email, ip, and the action being performed."}),"\n",(0,i.jsxs)(n.p,{children:["For example, the call ",(0,i.jsx)(n.code,{children:"customs.check(request, email, 'accountCreate')"})," would increment the ",(0,i.jsx)(n.code,{children:"accountCreate"})," event for the user coming from this ip address and email."]}),"\n",(0,i.jsx)(n.p,{children:"Below are the current actions supported:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// Actions that, if allowed, would allow an attacker\n// to try a candidtate password against an account.\nconst PASSWORD_CHECKING_ACTION = {\n  accountLogin: true,\n  accountDestroy: true,\n  passwordChange: true,\n};\n\n// Actions that, if allowed, would allow an attacker\n// to try a guess at a randomly-generated security code.\n// Code are higher entropy so we can allow more of these,\n// but if you're doing it a lot, you're probably a baddie.\nconst CODE_VERIFYING_ACTION = {\n  recoveryEmailVerifyCode: true,\n  passwordForgotVerifyCode: true,\n  verifyRecoveryCode: true,\n  verifySessionCode: true,\n  // not high entropy\n  // changes at 60 seconds\n  // limits by email\n  verifyTotpCode: true,\n};\n\n// Actions that, if allowed, would allow an attacker\n// to check whether an account exists or has certain\n// properties for a particular user.\n// Basically any unauthenticated endpoint that takes\n// an email address as input.\nconst ACCOUNT_STATUS_ACTION = {\n  accountCreate: true,\n  accountLogin: true,\n  accountDestroy: true,\n  passwordChange: true,\n  passwordForgotSendCode: true,\n  accountStatusCheck: true,\n  sendUnblockCode: true,\n  recoveryKeyExists: true,\n};\n\n// Actions that send an email, and hence might make\n// us look like spammers if abused.\nconst EMAIL_SENDING_ACTION = {\n  accountCreate: true,\n  createEmail: true,\n  recoveryEmailResendCode: true,\n  recoveryEmailSecondaryResendCode: true,\n  passwordForgotSendCode: true,\n  passwordForgotResendCode: true,\n  sendUnblockCode: true,\n};\n\n// Actions that can send sms, and could make us\n// very annoying to a user if abused.\nconst SMS_SENDING_ACTION = {\n  connectDeviceSms: true,\n};\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(67294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);