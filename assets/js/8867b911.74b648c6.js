"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[4249],{61918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var i=n(87462),a=(n(67294),n(3905));n(29420);const o={title:"Rate limiting"},r=void 0,s={unversionedId:"reference/rate-limiting",id:"reference/rate-limiting",title:"Rate limiting",description:"Last updated: June 21th, 2022",source:"@site/docs/reference/rate-limiting.md",sourceDirName:"reference",slug:"/reference/rate-limiting",permalink:"/ecosystem-platform/reference/rate-limiting",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/rate-limiting.md",tags:[],version:"current",frontMatter:{title:"Rate limiting"},sidebar:"docs",previous:{title:"Third Party Authentication in FxA",permalink:"/ecosystem-platform/reference/third-party-authentication"},next:{title:"Using Swagger for API documentation",permalink:"/ecosystem-platform/reference/using-swagger-for-api-documentation"}},l={},m=[{value:"Policies",id:"policies",level:3},{value:"Usage in Auth-server",id:"usage-in-auth-server",level:3}],d={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Last updated: ",(0,a.kt)("inlineCode",{parentName:"p"},"June 21th, 2022")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-customs-server/README.md"},"Customs server")," is the service responsible for maintaining and implementing rate limiting in FxA.\nIt was developed to help detect and deter ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.mozilla.org/Identity/Firefox_Accounts/Fraud_and_abuse"},"fraud and abuse"),"."),(0,a.kt)("p",null,"Currently, only it is used by the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa-auth-server"},"Firefox Accounts Auth Server"),"."),(0,a.kt)("p",null,"The Customs server uses a sliding window to keep track of the current count of a specific type of action and trims the count as needed."),(0,a.kt)("h3",{id:"policies"},"Policies"),(0,a.kt)("p",null,"There are two types of policies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"rate-limiting: slows down attackers by temporarily blocking requests for 15 minutes (see ",(0,a.kt)("inlineCode",{parentName:"li"},"config.limits.rateLimitIntervalSeconds"),")"),(0,a.kt)("li",{parentName:"ul"},"block / ban: stops attacks by temporarily blocking requests for 24 hours (see ",(0,a.kt)("inlineCode",{parentName:"li"},"config.limits.blockIntervalSeconds"),")")),(0,a.kt)("p",null,"We currently have the following policies in place:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"rate-limiting when too many emails (",(0,a.kt)("inlineCode",{parentName:"li"},"config.limits.maxEmails")," defaults to 3) have been sent to the same email address in a given time period (",(0,a.kt)("inlineCode",{parentName:"li"},"config.limits.rateLimitIntervalSeconds")," defaults to 15 minutes)"),(0,a.kt)("li",{parentName:"ul"},"rate-limiting when too many requests to look up account status by email address (",(0,a.kt)("inlineCode",{parentName:"li"},"config.limits.maxAccountStatusCheck"),") have been sent from the same ip address during"),(0,a.kt)("li",{parentName:"ul"},"rate-limiting when too many sms (",(0,a.kt)("inlineCode",{parentName:"li"},"config.limits.smsRateLimit.maxSms"),") have been sent from the same ip address during period (",(0,a.kt)("inlineCode",{parentName:"li"},"config.limits.smsRateLimit.limitIntervalSeconds")," defaults to 60 minutes)"),(0,a.kt)("li",{parentName:"ul"},"rate-limiting when too many sms (",(0,a.kt)("inlineCode",{parentName:"li"},"config.limits.smsRateLimit.maxSms"),") have been sent from the same email address during period (",(0,a.kt)("inlineCode",{parentName:"li"},"config.limits.smsRateLimit.limitIntervalSeconds")," defaults to 60 minutes)"),(0,a.kt)("li",{parentName:"ul"},"rate-limiting when too many sms (",(0,a.kt)("inlineCode",{parentName:"li"},"config.limits.smsRateLimit.maxSms"),") have been sent to the same phone number during period (",(0,a.kt)("inlineCode",{parentName:"li"},"config.limits.smsRateLimit.limitIntervalSeconds")," defaults to 60 minutes)"),(0,a.kt)("li",{parentName:"ul"},"rate-limiting when too many failed login attempts (",(0,a.kt)("inlineCode",{parentName:"li"},"config.limits.maxBadLogins")," defaults to 2) have occurred for a given account and IP address, in a given time period (",(0,a.kt)("inlineCode",{parentName:"li"},"config.limits.rateLimitIntervalSeconds")," defaults to 15 minutes)"),(0,a.kt)("li",{parentName:"ul"},"rate-limiting too many attempts to verify randomly-generated codes (",(0,a.kt)("inlineCode",{parentName:"li"},"config.limits.maxVerifyCodes")," defaults to 10) have occurred for a given account and IP address, in a given time period (",(0,a.kt)("inlineCode",{parentName:"li"},"config.limits.rateLimitIntervalSeconds")," defaults to 15 minutes)"),(0,a.kt)("li",{parentName:"ul"},"manual blocking of an account (see ",(0,a.kt)("inlineCode",{parentName:"li"},"/blockEmail")," API call)"),(0,a.kt)("li",{parentName:"ul"},"manual blocking of an IP address (see ",(0,a.kt)("inlineCode",{parentName:"li"},"/blockIp")," API call)")),(0,a.kt)("p",null,"The data that these policies are based on is stored in a memcache instance (keyed by ",(0,a.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ip")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ip + email")," depending on the policy) and the code that implements them is split across these three files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"email_record.js")," handles blocking and rate-limiting based only on the email address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ip_email_record.js")," handles rate-limiting based on both the email and IP address of the request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ip_record.js")," handles blocking based only on the IP address")),(0,a.kt)("p",null,"The rate-limiting and blocking policies are conveyed to the auth server via the ",(0,a.kt)("inlineCode",{parentName:"p"},"block")," property in the response to ",(0,a.kt)("inlineCode",{parentName:"p"},"/check"),"."),(0,a.kt)("h3",{id:"usage-in-auth-server"},"Usage in Auth-server"),(0,a.kt)("p",null,"In the auth-server, we utilized a helper library to make calls to the custom server api. The request could contain email, ip, and the action being performed."),(0,a.kt)("p",null,"For example, the call ",(0,a.kt)("inlineCode",{parentName:"p"},"customs.check(request, email, 'accountCreate')")," would increment the ",(0,a.kt)("inlineCode",{parentName:"p"},"accountCreate")," event for the user coming from this ip address and email."),(0,a.kt)("p",null,"Below are the current actions supported:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Actions that, if allowed, would allow an attacker\n// to try a candidtate password against an account.\nconst PASSWORD_CHECKING_ACTION = {\n  accountLogin: true,\n  accountDestroy: true,\n  passwordChange: true,\n};\n\n// Actions that, if allowed, would allow an attacker\n// to try a guess at a randomly-generated security code.\n// Code are higher entropy so we can allow more of these,\n// but if you're doing it a lot, you're probably a baddie.\nconst CODE_VERIFYING_ACTION = {\n  recoveryEmailVerifyCode: true,\n  passwordForgotVerifyCode: true,\n  verifyRecoveryCode: true,\n  verifySessionCode: true,\n  // not high entropy\n  // changes at 60 seconds\n  // limits by email\n  verifyTotpCode: true,\n};\n\n// Actions that, if allowed, would allow an attacker\n// to check whether an account exists or has certain\n// properties for a particular user.\n// Basically any unauthenticated endpoint that takes\n// an email address as input.\nconst ACCOUNT_STATUS_ACTION = {\n  accountCreate: true,\n  accountLogin: true,\n  accountDestroy: true,\n  passwordChange: true,\n  passwordForgotSendCode: true,\n  accountStatusCheck: true,\n  sendUnblockCode: true,\n  recoveryKeyExists: true,\n};\n\n// Actions that send an email, and hence might make\n// us look like spammers if abused.\nconst EMAIL_SENDING_ACTION = {\n  accountCreate: true,\n  createEmail: true,\n  recoveryEmailResendCode: true,\n  recoveryEmailSecondaryResendCode: true,\n  passwordForgotSendCode: true,\n  passwordForgotResendCode: true,\n  sendUnblockCode: true,\n};\n\n// Actions that can send sms, and could make us\n// very annoying to a user if abused.\nconst SMS_SENDING_ACTION = {\n  connectDeviceSms: true,\n};\n")))}c.isMDXComponent=!0}}]);