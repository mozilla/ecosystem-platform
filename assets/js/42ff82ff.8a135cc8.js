"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[3243],{17380:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"how-tos/rotating-secrets","title":"Rotating Secrets","description":"Last updated: Oct 6th, 2023","source":"@site/docs/how-tos/rotating-secrets.md","sourceDirName":"how-tos","slug":"/how-tos/rotating-secrets","permalink":"/ecosystem-platform/how-tos/rotating-secrets","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/rotating-secrets.md","tags":[],"version":"current","frontMatter":{"title":"Rotating Secrets"},"sidebar":"docs","previous":{"title":"Working with Metrics","permalink":"/ecosystem-platform/how-tos/working-with-metrics"},"next":{"title":"Planning and Development","permalink":"/ecosystem-platform/reference/team-processes/development-process"}}');var n=s(74848),r=s(28453);const a={title:"Rotating Secrets"},o=void 0,l={},c=[{value:"Find or be informed about the (potential) leak",id:"find-or-be-informed-about-the-potential-leak",level:2},{value:"Confirm the leak and its severity",id:"confirm-the-leak-and-its-severity",level:2},{value:"Fix the leak",id:"fix-the-leak",level:2},{value:"Rotate the secret (if valid)",id:"rotate-the-secret-if-valid",level:2},{value:"Places to check where a secret might be used",id:"places-to-check-where-a-secret-might-be-used",level:3},{value:"Clean up the mess (if applicable)",id:"clean-up-the-mess-if-applicable",level:2},{value:"Mitigating leaks and risks",id:"mitigating-leaks-and-risks",level:2},{value:"Additional reading",id:"additional-reading",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Last updated: ",(0,n.jsx)(t.code,{children:"Oct 6th, 2023"})]}),"\n",(0,n.jsx)(t.p,{children:"It is unfortunate yet inevitable that secrets such as API keys get leaked upon occasion. In most cases, this is an urgent matter that must be addressed immediately, but it depends on what information was leaked, whether it's still valid, and what damage can be done with that information."}),"\n",(0,n.jsx)(t.p,{children:"In the steps below, we'll walk through an example for how to resolve a possible leak of a Stripe API key."}),"\n",(0,n.jsx)(t.h2,{id:"find-or-be-informed-about-the-potential-leak",children:"Find or be informed about the (potential) leak"}),"\n",(0,n.jsx)(t.p,{children:"There are many ways this can happen:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"An engineer stumbles upon it while working on a patch"}),"\n",(0,n.jsx)(t.li,{children:"The Mozilla information security team finds it as part of a routine scan"}),"\n",(0,n.jsx)(t.li,{children:"It is flagged as part of Mozilla's bug bounty program"}),"\n",(0,n.jsxs)(t.li,{children:["GitHub notifies us with a ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/code-security/secret-scanning",children:"secret scanning alert"})]}),"\n",(0,n.jsx)(t.li,{children:"And more..."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In the case of our example, we received a secret scanning alert from GitHub in the ",(0,n.jsx)(t.code,{children:"fxa"})," repo."]}),"\n",(0,n.jsx)(t.h2,{id:"confirm-the-leak-and-its-severity",children:"Confirm the leak and its severity"}),"\n",(0,n.jsx)(t.p,{children:"Sometimes, sensitive looking data isn't actually valid or compromising. Try to answer the following questions, answered below with our Stripe API key example:"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"If the secret is expired or otherwise invalid, the urgency goes away, and you can skip these questions to the next step."})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Is this a valid secret?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Yes. It is listed in the ",(0,n.jsxs)(t.a,{href:"https://dashboard.stripe.com/test/apikeys",children:["stage (",(0,n.jsx)(t.code,{children:"SUB_PLAT_STAGE"}),") dashboard"]})," as the unrestricted ",(0,n.jsx)(t.a,{href:"https://stripe.com/docs/test-mode",children:"test mode"})," secret key, and it is active. This is a real leak."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Is it in use?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["In this case, the ",(0,n.jsx)(t.a,{href:"https://dashboard.stripe.com/test/apikeys",children:"Stripe API Keys page in the dashboard"})," has helpful information including when a given valid key was last used. Per the dashboard, our example key was last used very recently, so it's definitely still in use!"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"What do we use it for?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Since this is an unrestricted Stripe API key (test mode), it is used to make read/write API requests to any Stripe API in test mode in our staging environment. Without searching for this key value explicitly in various places (see ",(0,n.jsx)(t.a,{href:"#places-to-check-where-a-secret-might-be-used",children:"Places to check where a secret might be used"}),"), one can only guess at this point that it's likely used by our stage apps to make Stripe API calls, and maybe by our CI end-to-end tests to do the same."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:["What ",(0,n.jsx)(t.em,{children:"can"})," it be used for?"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["In terms of severity, the fact that this key is unrestricted is very bad, but the fact that it's only valid for our staging environment (and in Stripe test mode), which uses fake data and money, greatly reduces the risk and urgency of this leak.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["By contrast, if this same key was for production (live mode), an attacker could ",(0,n.jsx)(t.a,{href:"https://stripe.com/docs/keys#safe-keys",children:"make charges or issue refunds"})," among other things."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Can someone with this secret access sensitive user data?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"No. All data is test data."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Can someone with this secret modify critical user or application state?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"They could not modify real users' state. They could modify our stage application state and/or cause us to get rate limited by Stripe, where subsequent API requests are denied."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Where was it exposed?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The GitHub secret scanning alert indicates where it found the secret referenced. It scans the code but also other forms of user-generated content, like PR comments and issues. It's worth noting that depending on how old the alert is, a reference may have since been removed or moved."}),"\n",(0,n.jsx)(t.li,{children:"In this example of the leaked test Stripe API key, this was leaked in a user comment within a GitHub issue."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"fix-the-leak",children:"Fix the leak"}),"\n",(0,n.jsx)(t.p,{children:"The most important thing to do -- particularly if the secret is valid -- is to remove the exposed secret from wherever it was found."}),"\n",(0,n.jsxs)(t.p,{children:["In this example, the secret was leaked in a GitHub issue comment. The comment can be edited to redact the reference, but it will still be retained in the comment's revision history. An ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization",children:"admin for the repo"})," can remove the revision which introduced the leak to completely remove any public reference to it."]}),"\n",(0,n.jsx)(t.h2,{id:"rotate-the-secret-if-valid",children:"Rotate the secret (if valid)"}),"\n",(0,n.jsx)(t.p,{children:"Now that we've stopped the bleeding, it's time to rotate the secret if it was determined to be valid and in use."}),"\n",(0,n.jsx)(t.p,{children:"The steps here are to:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Create a new secret,"}),"\n",(0,n.jsx)(t.li,{children:"Replace the old secret where it's used with the new secret, and"}),"\n",(0,n.jsx)(t.li,{children:"Invalidate the old secret"}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsx)(t.p,{children:"Order matters! Don't invalidate the old key unless/until a new key has been created, the old key's value has been replaced everywhere it's used and any affected parties (such as other engineers) have been notified."}),(0,n.jsx)(t.p,{children:"Depending on the urgency and deployment process, this overlap period where both keys are valid could be on the order of seconds, hours or even days. Discuss this with the team if you're uncertain."})]}),"\n",(0,n.jsxs)(t.p,{children:["For our example, ",(0,n.jsx)(t.a,{href:"https://stripe.com/docs/keys#rolling-keys",children:"Stripe provides some helpful docs"})," on how to create a new secret and invalidate the old secret. The hard part here is replacing the old secret where it is used with the new secret, as we store secrets in a number of different places for different purposes."]}),"\n",(0,n.jsx)(t.h3,{id:"places-to-check-where-a-secret-might-be-used",children:"Places to check where a secret might be used"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Application config environment variables","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["These secrets are managed by SRE, so you will need to ",(0,n.jsx)(t.a,{href:"https://mozilla-hub.atlassian.net/wiki/spaces/SECENGOPS/pages/378273870/How+to+share+a+secret+with+coworkers",children:"securely send them the new secret"}),", so they can update it and redeploy the affected application(s)."]}),"\n",(0,n.jsx)(t.li,{children:"If you're unsure what environment variable(s) represent this secret in what app(s), you can send them both the old secret and the new secret, so they can do a find-and-replace."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://circleci.com/docs/env-vars/#private-keys-and-secrets",children:"CircleCI environment variables"})}),"\n",(0,n.jsxs)(t.li,{children:["GitHub ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions",children:"Actions"}),", ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/codespaces/managing-your-codespaces/managing-secrets-for-your-codespaces",children:"Codespaces"})," and/or ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/code-security/dependabot/working-with-dependabot",children:"Dependabot"})," environment variables"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"This is not an exhaustive list. Check with other engineers and/or SRE if you are unsure of all of the locations where a secret may be kept."})}),"\n",(0,n.jsx)(t.p,{children:"In our example case, after scanning all three above locations, application config was the sole place where the leaked Stripe API key was used."}),"\n",(0,n.jsx)(t.h2,{id:"clean-up-the-mess-if-applicable",children:"Clean up the mess (if applicable)"}),"\n",(0,n.jsxs)(t.p,{children:['If the leak was for a valid secret in use in production, it may have been exploited. Based on the risk profile for the secret identified above (see "What ',(0,n.jsx)(t.em,{children:"can"}),' it be used for?" when ',(0,n.jsx)(t.a,{href:"#confirm-the-leak-and-its-severity",children:"confirming the leak"}),"), review monitoring tools like Grafana, Sentry and application logs in BigQuery for any indications of exploitation."]}),"\n",(0,n.jsx)(t.p,{children:"The work involved here will vary depending on many factors. It could involve correcting/updating database records, placing new limits or access restrictions on certain resources and/or notifying affected end users."}),"\n",(0,n.jsxs)(t.p,{children:["Work with the team to determine what all needs to be done, whether or not the leak rises to the level of an ",(0,n.jsx)(t.a,{href:"https://mozilla-hub.atlassian.net/wiki/spaces/MIR/overview",children:"incident"}),", and follow those procedures accordingly."]}),"\n",(0,n.jsx)(t.p,{children:"Take a moment to document the leak and the fix in the form of a ticket if one was not yet created, and update the ticket with what was done before closing it out. File any follow-up tickets as necessary and ensure they are triaged in a timely manner."}),"\n",(0,n.jsx)(t.h2,{id:"mitigating-leaks-and-risks",children:"Mitigating leaks and risks"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Never post or commit sensitive data to public repos or other public or semi-public forums."}),"\n",(0,n.jsxs)(t.li,{children:["Use secure methods to share secrets with team members. See Mozilla's ",(0,n.jsx)(t.a,{href:"https://mozilla-hub.atlassian.net/wiki/spaces/SECENGOPS/pages/378273870/How+to+share+a+secret+with+coworkers",children:"recommended guidance for sharing secrets"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Restrict API keys to only the privileges needed for the task at hand and nothing more. For example, you can create ",(0,n.jsx)(t.a,{href:"https://stripe.com/docs/keys#limit-access",children:"restricted keys"})," for Stripe that only permit read/write access to specific APIs."]}),"\n",(0,n.jsxs)(t.li,{children:["For public GitHub repositories, regularly review GitHub's ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/code-security/secret-scanning",children:"secret scanning alerts"})," and resolve them in a timely manner."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"additional-reading",children:"Additional reading"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://mozilla-hub.atlassian.net/wiki/spaces/SRE/pages/27924750/Secrets+Management",children:"SRE docs on secrets management"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var i=s(96540);const n={},r=i.createContext(n);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);