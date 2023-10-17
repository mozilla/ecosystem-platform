"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[2259],{58669:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var i=a(87462),s=(a(67294),a(3905));a(8209);const n={title:"Rotating Secrets"},r=void 0,o={unversionedId:"how-tos/rotating-secrets",id:"how-tos/rotating-secrets",title:"Rotating Secrets",description:"Last updated: Oct 6th, 2023",source:"@site/docs/how-tos/rotating-secrets.md",sourceDirName:"how-tos",slug:"/how-tos/rotating-secrets",permalink:"/ecosystem-platform/how-tos/rotating-secrets",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/rotating-secrets.md",tags:[],version:"current",frontMatter:{title:"Rotating Secrets"},sidebar:"docs",previous:{title:"Working with Metrics",permalink:"/ecosystem-platform/how-tos/working-with-metrics"},next:{title:"Planning and Development",permalink:"/ecosystem-platform/reference/team-processes/development-process"}},l={},c=[{value:"Find or be informed about the (potential) leak",id:"find-or-be-informed-about-the-potential-leak",level:2},{value:"Confirm the leak and its severity",id:"confirm-the-leak-and-its-severity",level:2},{value:"Fix the leak",id:"fix-the-leak",level:2},{value:"Rotate the secret (if valid)",id:"rotate-the-secret-if-valid",level:2},{value:"Places to check where a secret might be used",id:"places-to-check-where-a-secret-might-be-used",level:3},{value:"Clean up the mess (if applicable)",id:"clean-up-the-mess-if-applicable",level:2},{value:"Mitigating leaks and risks",id:"mitigating-leaks-and-risks",level:2},{value:"Additional reading",id:"additional-reading",level:3}],d={toc:c},h="wrapper";function p(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Last updated: ",(0,s.kt)("inlineCode",{parentName:"p"},"Oct 6th, 2023")),(0,s.kt)("p",null,"It is unfortunate yet inevitable that secrets such as API keys get leaked upon occasion. In most cases, this is an urgent matter that must be addressed immediately, but it depends on what information was leaked, whether it's still valid, and what damage can be done with that information."),(0,s.kt)("p",null,"In the steps below, we'll walk through an example for how to resolve a possible leak of a Stripe API key."),(0,s.kt)("h2",{id:"find-or-be-informed-about-the-potential-leak"},"Find or be informed about the (potential) leak"),(0,s.kt)("p",null,"There are many ways this can happen:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"An engineer stumbles upon it while working on a patch"),(0,s.kt)("li",{parentName:"ul"},"The Mozilla information security team finds it as part of a routine scan"),(0,s.kt)("li",{parentName:"ul"},"It is flagged as part of Mozilla's bug bounty program"),(0,s.kt)("li",{parentName:"ul"},"GitHub notifies us with a ",(0,s.kt)("a",{parentName:"li",href:"https://docs.github.com/en/code-security/secret-scanning"},"secret scanning alert")),(0,s.kt)("li",{parentName:"ul"},"And more...")),(0,s.kt)("p",null,"In the case of our example, we received a secret scanning alert from GitHub in the ",(0,s.kt)("inlineCode",{parentName:"p"},"fxa")," repo."),(0,s.kt)("h2",{id:"confirm-the-leak-and-its-severity"},"Confirm the leak and its severity"),(0,s.kt)("p",null,"Sometimes, sensitive looking data isn't actually valid or compromising. Try to answer the following questions, answered below with our Stripe API key example:"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If the secret is expired or otherwise invalid, the urgency goes away, and you can skip these questions to the next step.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Is this a valid secret?"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Yes. It is listed in the ",(0,s.kt)("a",{parentName:"li",href:"https://dashboard.stripe.com/test/apikeys"},"stage (",(0,s.kt)("inlineCode",{parentName:"a"},"SUB_PLAT_STAGE"),") dashboard")," as the unrestricted ",(0,s.kt)("a",{parentName:"li",href:"https://stripe.com/docs/test-mode"},"test mode")," secret key, and it is active. This is a real leak."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Is it in use?"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"In this case, the ",(0,s.kt)("a",{parentName:"li",href:"https://dashboard.stripe.com/test/apikeys"},"Stripe API Keys page in the dashboard")," has helpful information including when a given valid key was last used. Per the dashboard, our example key was last used very recently, so it's definitely still in use!"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"What do we use it for?"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Since this is an unrestricted Stripe API key (test mode), it is used to make read/write API requests to any Stripe API in test mode in our staging environment. Without searching for this key value explicitly in various places (see ",(0,s.kt)("a",{parentName:"li",href:"#places-to-check-where-a-secret-might-be-used"},"Places to check where a secret might be used"),"), one can only guess at this point that it's likely used by our stage apps to make Stripe API calls, and maybe by our CI end-to-end tests to do the same."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"What ",(0,s.kt)("em",{parentName:"strong"},"can")," it be used for?"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"In terms of severity, the fact that this key is unrestricted is very bad, but the fact that it's only valid for our staging environment (and in Stripe test mode), which uses fake data and money, greatly reduces the risk and urgency of this leak. ",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"By contrast, if this same key was for production (live mode), an attacker could ",(0,s.kt)("a",{parentName:"li",href:"https://stripe.com/docs/keys#safe-keys"},"make charges or issue refunds")," among other things."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Can someone with this secret access sensitive user data?"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"No. All data is test data."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Can someone with this secret modify critical user or application state?"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"They could not modify real users' state. They could modify our stage application state and/or cause us to get rate limited by Stripe, where subsequent API requests are denied."))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Where was it exposed?"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"The GitHub secret scanning alert indicates where it found the secret referenced. It scans the code but also other forms of user-generated content, like PR comments and issues. It's worth noting that depending on how old the alert is, a reference may have since been removed or moved."),(0,s.kt)("li",{parentName:"ul"},"In this example of the leaked test Stripe API key, this was leaked in a user comment within a GitHub issue.")))),(0,s.kt)("h2",{id:"fix-the-leak"},"Fix the leak"),(0,s.kt)("p",null,"The most important thing to do -- particularly if the secret is valid -- is to remove the exposed secret from wherever it was found."),(0,s.kt)("p",null,"In this example, the secret was leaked in a GitHub issue comment. The comment can be edited to redact the reference, but it will still be retained in the comment's revision history. An ",(0,s.kt)("a",{parentName:"p",href:"https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization"},"admin for the repo")," can remove the revision which introduced the leak to completely remove any public reference to it."),(0,s.kt)("h2",{id:"rotate-the-secret-if-valid"},"Rotate the secret (if valid)"),(0,s.kt)("p",null,"Now that we've stopped the bleeding, it's time to rotate the secret if it was determined to be valid and in use. "),(0,s.kt)("p",null,"The steps here are to:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create a new secret,"),(0,s.kt)("li",{parentName:"ol"},"Replace the old secret where it's used with the new secret, and"),(0,s.kt)("li",{parentName:"ol"},"Invalidate the old secret")),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Order matters! Don't invalidate the old key unless/until a new key has been created, the old key's value has been replaced everywhere it's used and any affected parties (such as other engineers) have been notified."),(0,s.kt)("p",{parentName:"admonition"},"Depending on the urgency and deployment process, this overlap period where both keys are valid could be on the order of seconds, hours or even days. Discuss this with the team if you're uncertain.")),(0,s.kt)("p",null,"For our example, ",(0,s.kt)("a",{parentName:"p",href:"https://stripe.com/docs/keys#rolling-keys"},"Stripe provides some helpful docs")," on how to create a new secret and invalidate the old secret. The hard part here is replacing the old secret where it is used with the new secret, as we store secrets in a number of different places for different purposes."),(0,s.kt)("h3",{id:"places-to-check-where-a-secret-might-be-used"},"Places to check where a secret might be used"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Application config environment variables",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"These secrets are managed by SRE, so you will need to ",(0,s.kt)("a",{parentName:"li",href:"https://mozilla-hub.atlassian.net/wiki/spaces/SECENGOPS/pages/378273870/How+to+share+a+secret+with+coworkers"},"securely send them the new secret"),", so they can update it and redeploy the affected application(s)."),(0,s.kt)("li",{parentName:"ul"},"If you're unsure what environment variable(s) represent this secret in what app(s), you can send them both the old secret and the new secret, so they can do a find-and-replace."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://circleci.com/docs/env-vars/#private-keys-and-secrets"},"CircleCI environment variables")),(0,s.kt)("li",{parentName:"ul"},"GitHub ",(0,s.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions"},"Actions"),", ",(0,s.kt)("a",{parentName:"li",href:"https://docs.github.com/en/codespaces/managing-your-codespaces/managing-secrets-for-your-codespaces"},"Codespaces")," and/or ",(0,s.kt)("a",{parentName:"li",href:"https://docs.github.com/en/code-security/dependabot/working-with-dependabot"},"Dependabot")," environment variables")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This is not an exhaustive list. Check with other engineers and/or SRE if you are unsure of all of the locations where a secret may be kept.")),(0,s.kt)("p",null,"In our example case, after scanning all three above locations, application config was the sole place where the leaked Stripe API key was used."),(0,s.kt)("h2",{id:"clean-up-the-mess-if-applicable"},"Clean up the mess (if applicable)"),(0,s.kt)("p",null,'If the leak was for a valid secret in use in production, it may have been exploited. Based on the risk profile for the secret identified above (see "What ',(0,s.kt)("em",{parentName:"p"},"can"),' it be used for?" when ',(0,s.kt)("a",{parentName:"p",href:"#confirm-the-leak-and-its-severity"},"confirming the leak"),"), review monitoring tools like Grafana, Sentry and application logs in BigQuery for any indications of exploitation."),(0,s.kt)("p",null,"The work involved here will vary depending on many factors. It could involve correcting/updating database records, placing new limits or access restrictions on certain resources and/or notifying affected end users."),(0,s.kt)("p",null,"Work with the team to determine what all needs to be done, whether or not the leak rises to the level of an ",(0,s.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/wiki/spaces/MIR/overview"},"incident"),", and follow those procedures accordingly."),(0,s.kt)("p",null,"Take a moment to document the leak and the fix in the form of a ticket if one was not yet created, and update the ticket with what was done before closing it out. File any follow-up tickets as necessary and ensure they are triaged in a timely manner."),(0,s.kt)("h2",{id:"mitigating-leaks-and-risks"},"Mitigating leaks and risks"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Never post or commit sensitive data to public repos or other public or semi-public forums."),(0,s.kt)("li",{parentName:"ul"},"Use secure methods to share secrets with team members. See Mozilla's ",(0,s.kt)("a",{parentName:"li",href:"https://mozilla-hub.atlassian.net/wiki/spaces/SECENGOPS/pages/378273870/How+to+share+a+secret+with+coworkers"},"recommended guidance for sharing secrets"),"."),(0,s.kt)("li",{parentName:"ul"},"Restrict API keys to only the privileges needed for the task at hand and nothing more. For example, you can create ",(0,s.kt)("a",{parentName:"li",href:"https://stripe.com/docs/keys#limit-access"},"restricted keys")," for Stripe that only permit read/write access to specific APIs."),(0,s.kt)("li",{parentName:"ul"},"For public GitHub repositories, regularly review GitHub's ",(0,s.kt)("a",{parentName:"li",href:"https://docs.github.com/en/code-security/secret-scanning"},"secret scanning alerts")," and resolve them in a timely manner.")),(0,s.kt)("h3",{id:"additional-reading"},"Additional reading"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://mozilla-hub.atlassian.net/wiki/spaces/SRE/pages/27924750/Secrets+Management"},"SRE docs on secrets management"))))}p.isMDXComponent=!0}}]);