"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[9471],{60599:(e,c,a)=>{a.r(c),a.d(c,{Badge:()=>g,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>o,default:()=>j,frontMatter:()=>l,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"gql-api/types/objects/account","title":"Account","description":"The current authenticated user\'s Firefox Account record.","source":"@site/docs/gql-api/types/objects/account.mdx","sourceDirName":"gql-api/types/objects","slug":"/gql-api/types/objects/account","permalink":"/ecosystem-platform/gql-api/types/objects/account","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/types/objects/account.mdx","tags":[],"version":"current","frontMatter":{"id":"account","title":"Account"},"sidebar":"schemaSidebar","previous":{"title":"AccountStatusPayload","permalink":"/ecosystem-platform/gql-api/types/objects/account-status-payload"},"next":{"title":"AttachedClient","permalink":"/ecosystem-platform/gql-api/types/objects/attached-client"}}');var t=a(74848),d=a(28453),n=a(96540);const l={id:"account",title:"Account"},o=void 0,r={},i=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:c,children:a,startOpen:s=!1})=>{const[d,l]=(0,n.useState)(s);return(0,t.jsxs)("details",{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:c}),d&&a]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>Account.<b>uid</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountuidid--",level:4},{value:'<code>Account.<b>accountCreated</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountaccountcreatedfloat--",level:4},{value:'<code>Account.<b>passwordCreated</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountpasswordcreatedfloat--",level:4},{value:'<code>Account.<b>displayName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountdisplaynamestring-",level:4},{value:'<code>Account.<b>avatar</b></code><Bullet></Bullet><code>Avatar!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountavataravatar--",level:4},{value:'<code>Account.<b>locale</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountlocalestring-",level:4},{value:'<code>Account.<b>subscriptions</b></code><Bullet></Bullet><code>[Subscription!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountsubscriptionssubscription--",level:4},{value:'<code>Account.<b>totp</b></code><Bullet></Bullet><code>Totp!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accounttotptotp--",level:4},{value:'<code>Account.<b>recoveryKey</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountrecoverykeyboolean--",level:4},{value:'<code>Account.<b>metricsEnabled</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmetricsenabledboolean--",level:4},{value:'<code>Account.<b>emails</b></code><Bullet></Bullet><code>[Email!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountemailsemail--",level:4},{value:'<code>Account.<b>attachedClients</b></code><Bullet></Bullet><code>[AttachedClient!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountattachedclientsattachedclient--",level:4},{value:'<code>Account.<b>linkedAccounts</b></code><Bullet></Bullet><code>[LinkedAccount!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountlinkedaccountslinkedaccount--",level:4},{value:'<code>Account.<b>securityEvents</b></code><Bullet></Bullet><code>[SecurityEvent!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountsecurityeventssecurityevent--",level:4},{value:"Returned By",id:"returned-by",level:3}];function x(e){const c={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.p,{children:"The current authenticated user's Firefox Account record."}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-graphql",children:"type Account {\n  uid: ID!\n  accountCreated: Float!\n  passwordCreated: Float!\n  displayName: String\n  avatar: Avatar!\n  locale: String\n  subscriptions: [Subscription!]!\n  totp: Totp!\n  recoveryKey: Boolean!\n  metricsEnabled: Boolean!\n  emails: [Email!]!\n  attachedClients: [AttachedClient!]!\n  linkedAccounts: [LinkedAccount!]!\n  securityEvents: [SecurityEvent!]!\n}\n"})}),"\n",(0,t.jsx)(c.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(c.h4,{id:"accountuidid--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,t.jsx)("b",{children:"uid"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/ecosystem-platform/gql-api/types/scalars/id",children:(0,t.jsx)(c.code,{children:"ID!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(c.p,{children:"Firefox Account User ID."}),"\n",(0,t.jsxs)(c.h4,{id:"accountaccountcreatedfloat--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,t.jsx)("b",{children:"accountCreated"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/ecosystem-platform/gql-api/types/scalars/float",children:(0,t.jsx)(c.code,{children:"Float!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(c.p,{children:"Timestamp when the account was created."}),"\n",(0,t.jsxs)(c.h4,{id:"accountpasswordcreatedfloat--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,t.jsx)("b",{children:"passwordCreated"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/ecosystem-platform/gql-api/types/scalars/float",children:(0,t.jsx)(c.code,{children:"Float!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(c.p,{children:"Timestamp the password was created or last changed."}),"\n",(0,t.jsxs)(c.h4,{id:"accountdisplaynamestring-",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,t.jsx)("b",{children:"displayName"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,t.jsx)(c.code,{children:"String"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(c.p,{children:"Display name the user has set."}),"\n",(0,t.jsxs)(c.h4,{id:"accountavataravatar--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,t.jsx)("b",{children:"avatar"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/ecosystem-platform/gql-api/types/objects/avatar",children:(0,t.jsx)(c.code,{children:"Avatar!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(c.h4,{id:"accountlocalestring-",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,t.jsx)("b",{children:"locale"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,t.jsx)(c.code,{children:"String"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(c.p,{children:"User locale."}),"\n",(0,t.jsxs)(c.h4,{id:"accountsubscriptionssubscription--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,t.jsx)("b",{children:"subscriptions"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/gql-api/types/objects/subscription.mdx",children:(0,t.jsx)(c.code,{children:"[Subscription!]!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(c.p,{children:"Active subscriptions for the user."}),"\n",(0,t.jsxs)(c.h4,{id:"accounttotptotp--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,t.jsx)("b",{children:"totp"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/ecosystem-platform/gql-api/types/objects/totp",children:(0,t.jsx)(c.code,{children:"Totp!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(c.h4,{id:"accountrecoverykeyboolean--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,t.jsx)("b",{children:"recoveryKey"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/ecosystem-platform/gql-api/types/scalars/boolean",children:(0,t.jsx)(c.code,{children:"Boolean!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(c.p,{children:"Whether the user has had an account recovery key issued."}),"\n",(0,t.jsxs)(c.h4,{id:"accountmetricsenabledboolean--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,t.jsx)("b",{children:"metricsEnabled"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/ecosystem-platform/gql-api/types/scalars/boolean",children:(0,t.jsx)(c.code,{children:"Boolean!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(c.p,{children:"Whether metrics are enabled and may be reported"}),"\n",(0,t.jsxs)(c.h4,{id:"accountemailsemail--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,t.jsx)("b",{children:"emails"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/ecosystem-platform/gql-api/types/objects/email",children:(0,t.jsx)(c.code,{children:"[Email!]!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(c.p,{children:"Email addresses for the user."}),"\n",(0,t.jsxs)(c.h4,{id:"accountattachedclientsattachedclient--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,t.jsx)("b",{children:"attachedClients"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/ecosystem-platform/gql-api/types/objects/attached-client",children:(0,t.jsx)(c.code,{children:"[AttachedClient!]!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(c.p,{children:"Client sessions attached to the user."}),"\n",(0,t.jsxs)(c.h4,{id:"accountlinkedaccountslinkedaccount--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,t.jsx)("b",{children:"linkedAccounts"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/ecosystem-platform/gql-api/types/objects/linked-account",children:(0,t.jsx)(c.code,{children:"[LinkedAccount!]!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(c.p,{children:"Linked accounts"}),"\n",(0,t.jsxs)(c.h4,{id:"accountsecurityeventssecurityevent--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Account.",(0,t.jsx)("b",{children:"securityEvents"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/ecosystem-platform/gql-api/types/objects/security-event",children:(0,t.jsx)(c.code,{children:"[SecurityEvent!]!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(c.p,{children:"Security events"}),"\n",(0,t.jsx)(c.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.a,{href:"/ecosystem-platform/gql-api/operations/queries/account",children:(0,t.jsx)(c.code,{children:"account"})}),"  ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"query"})]})]})}function j(e={}){const{wrapper:c}={...(0,d.R)(),...e.components};return c?(0,t.jsx)(c,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,c,a)=>{a.d(c,{R:()=>n,x:()=>l});var s=a(96540);const t={},d=s.createContext(t);function n(e){const c=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function l(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),s.createElement(d.Provider,{value:c},e.children)}}}]);