"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[3156],{45411:(e,c,a)=>{a.r(c),a.d(c,{Badge:()=>h,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>l,default:()=>j,frontMatter:()=>t,metadata:()=>o,toc:()=>b});var s=a(85893),n=a(11151),d=a(67294);const t={id:"account",title:"Account",hide_table_of_contents:!1},l=void 0,o={id:"gql-api/objects/account",title:"Account",description:"The current authenticated user's Firefox Account record.",source:"@site/docs/gql-api/objects/account.mdx",sourceDirName:"gql-api/objects",slug:"/gql-api/objects/account",permalink:"/ecosystem-platform/gql-api/objects/account",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/objects/account.mdx",tags:[],version:"current",frontMatter:{id:"account",title:"Account",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccountStatusPayload",permalink:"/ecosystem-platform/gql-api/objects/account-status-payload"},next:{title:"AttachedClient",permalink:"/ecosystem-platform/gql-api/objects/attached-client"}},r={},i=()=>{const e={span:"span",...(0,n.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const c={a:"a",...(0,n.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(c.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const c={span:"span",...(0,n.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>Account.<b>uid</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountuidid--",level:4},{value:'<code>Account.<b>accountCreated</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountaccountcreatedfloat--",level:4},{value:'<code>Account.<b>passwordCreated</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountpasswordcreatedfloat--",level:4},{value:'<code>Account.<b>displayName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountdisplaynamestring-",level:4},{value:'<code>Account.<b>avatar</b></code><Bullet></Bullet><code>Avatar!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountavataravatar--",level:4},{value:'<code>Account.<b>locale</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountlocalestring-",level:4},{value:'<code>Account.<b>subscriptions</b></code><Bullet></Bullet><code>[Subscription!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountsubscriptionssubscription--",level:4},{value:'<code>Account.<b>totp</b></code><Bullet></Bullet><code>Totp!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accounttotptotp--",level:4},{value:'<code>Account.<b>recoveryKey</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountrecoverykeyboolean--",level:4},{value:'<code>Account.<b>metricsEnabled</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmetricsenabledboolean--",level:4},{value:'<code>Account.<b>emails</b></code><Bullet></Bullet><code>[Email!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountemailsemail--",level:4},{value:'<code>Account.<b>attachedClients</b></code><Bullet></Bullet><code>[AttachedClient!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountattachedclientsattachedclient--",level:4},{value:'<code>Account.<b>linkedAccounts</b></code><Bullet></Bullet><code>[LinkedAccount!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountlinkedaccountslinkedaccount--",level:4},{value:'<code>Account.<b>securityEvents</b></code><Bullet></Bullet><code>[SecurityEvent!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountsecurityeventssecurityevent--",level:4},{value:"Returned by",id:"returned-by",level:3}],g=({dataOpen:e,dataClose:c,children:a,startOpen:t=!1})=>{const l={details:"details",summary:"summary",...(0,n.a)()},[o,r]=(0,d.useState)(t);return(0,s.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:o?e:c}),o&&a]})};function x(e){const c={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.p,{children:"The current authenticated user's Firefox Account record."}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-graphql",children:"type Account {\n  uid: ID!\n  accountCreated: Float!\n  passwordCreated: Float!\n  displayName: String\n  avatar: Avatar!\n  locale: String\n  subscriptions: [Subscription!]!\n  totp: Totp!\n  recoveryKey: Boolean!\n  metricsEnabled: Boolean!\n  emails: [Email!]!\n  attachedClients: [AttachedClient!]!\n  linkedAccounts: [LinkedAccount!]!\n  securityEvents: [SecurityEvent!]!\n}\n"})}),"\n",(0,s.jsx)(c.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(c.h4,{id:"accountuidid--",children:[(0,s.jsx)(c.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,s.jsx)("b",{children:"uid"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/gql-api/scalars/id",children:(0,s.jsx)(c.code,{children:"ID!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(c.blockquote,{children:["\n",(0,s.jsx)(c.p,{children:"Firefox Account User ID."}),"\n"]}),"\n",(0,s.jsxs)(c.h4,{id:"accountaccountcreatedfloat--",children:[(0,s.jsx)(c.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,s.jsx)("b",{children:"accountCreated"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/gql-api/scalars/float",children:(0,s.jsx)(c.code,{children:"Float!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(c.blockquote,{children:["\n",(0,s.jsx)(c.p,{children:"Timestamp when the account was created."}),"\n"]}),"\n",(0,s.jsxs)(c.h4,{id:"accountpasswordcreatedfloat--",children:[(0,s.jsx)(c.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,s.jsx)("b",{children:"passwordCreated"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/gql-api/scalars/float",children:(0,s.jsx)(c.code,{children:"Float!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(c.blockquote,{children:["\n",(0,s.jsx)(c.p,{children:"Timestamp the password was created or last changed."}),"\n"]}),"\n",(0,s.jsxs)(c.h4,{id:"accountdisplaynamestring-",children:[(0,s.jsx)(c.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,s.jsx)("b",{children:"displayName"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(c.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(c.blockquote,{children:["\n",(0,s.jsx)(c.p,{children:"Display name the user has set."}),"\n"]}),"\n",(0,s.jsxs)(c.h4,{id:"accountavataravatar--",children:[(0,s.jsx)(c.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,s.jsx)("b",{children:"avatar"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/gql-api/objects/avatar",children:(0,s.jsx)(c.code,{children:"Avatar!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(c.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(c.h4,{id:"accountlocalestring-",children:[(0,s.jsx)(c.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,s.jsx)("b",{children:"locale"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(c.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(c.blockquote,{children:["\n",(0,s.jsx)(c.p,{children:"User locale."}),"\n"]}),"\n",(0,s.jsxs)(c.h4,{id:"accountsubscriptionssubscription--",children:[(0,s.jsx)(c.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,s.jsx)("b",{children:"subscriptions"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/gql-api/objects/subscription",children:(0,s.jsx)(c.code,{children:"[Subscription!]!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(c.blockquote,{children:["\n",(0,s.jsx)(c.p,{children:"Active subscriptions for the user."}),"\n"]}),"\n",(0,s.jsxs)(c.h4,{id:"accounttotptotp--",children:[(0,s.jsx)(c.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,s.jsx)("b",{children:"totp"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/gql-api/objects/totp",children:(0,s.jsx)(c.code,{children:"Totp!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(c.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(c.h4,{id:"accountrecoverykeyboolean--",children:[(0,s.jsx)(c.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,s.jsx)("b",{children:"recoveryKey"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/gql-api/scalars/boolean",children:(0,s.jsx)(c.code,{children:"Boolean!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(c.blockquote,{children:["\n",(0,s.jsx)(c.p,{children:"Whether the user has had an account recovery key issued."}),"\n"]}),"\n",(0,s.jsxs)(c.h4,{id:"accountmetricsenabledboolean--",children:[(0,s.jsx)(c.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,s.jsx)("b",{children:"metricsEnabled"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/gql-api/scalars/boolean",children:(0,s.jsx)(c.code,{children:"Boolean!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(c.blockquote,{children:["\n",(0,s.jsx)(c.p,{children:"Whether metrics are enabled and may be reported"}),"\n"]}),"\n",(0,s.jsxs)(c.h4,{id:"accountemailsemail--",children:[(0,s.jsx)(c.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,s.jsx)("b",{children:"emails"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/gql-api/objects/email",children:(0,s.jsx)(c.code,{children:"[Email!]!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(c.blockquote,{children:["\n",(0,s.jsx)(c.p,{children:"Email addresses for the user."}),"\n"]}),"\n",(0,s.jsxs)(c.h4,{id:"accountattachedclientsattachedclient--",children:[(0,s.jsx)(c.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,s.jsx)("b",{children:"attachedClients"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/gql-api/objects/attached-client",children:(0,s.jsx)(c.code,{children:"[AttachedClient!]!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(c.blockquote,{children:["\n",(0,s.jsx)(c.p,{children:"Client sessions attached to the user."}),"\n"]}),"\n",(0,s.jsxs)(c.h4,{id:"accountlinkedaccountslinkedaccount--",children:[(0,s.jsx)(c.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,s.jsx)("b",{children:"linkedAccounts"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/gql-api/objects/linked-account",children:(0,s.jsx)(c.code,{children:"[LinkedAccount!]!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(c.blockquote,{children:["\n",(0,s.jsx)(c.p,{children:"Linked accounts"}),"\n"]}),"\n",(0,s.jsxs)(c.h4,{id:"accountsecurityeventssecurityevent--",children:[(0,s.jsx)(c.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,s.jsx)("b",{children:"securityEvents"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(c.a,{href:"/gql-api/objects/security-event",children:(0,s.jsx)(c.code,{children:"[SecurityEvent!]!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(c.blockquote,{children:["\n",(0,s.jsx)(c.p,{children:"Security events"}),"\n"]}),"\n",(0,s.jsx)(c.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.a,{href:"/gql-api/queries/account",children:(0,s.jsx)(c.code,{children:"account"})}),"  ",(0,s.jsx)(h,{class:"secondary",text:"query"})]})]})}function j(e={}){const{wrapper:c}={...(0,n.a)(),...e.components};return c?(0,s.jsx)(c,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,c,a)=>{a.d(c,{Z:()=>l,a:()=>t});var s=a(67294);const n={},d=s.createContext(n);function t(e){const c=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function l(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(d.Provider,{value:c},e.children)}}}]);