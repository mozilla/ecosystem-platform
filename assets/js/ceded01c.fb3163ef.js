"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[1974],{28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>l});var s=a(96540);const n={},c=s.createContext(n);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(c.Provider,{value:t},e.children)}},67207:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>s,toc:()=>y});const s=JSON.parse('{"id":"gql-api/types/objects/account-reset-payload","title":"AccountResetPayload","description":"No description","source":"@site/docs/gql-api/types/objects/account-reset-payload.mdx","sourceDirName":"gql-api/types/objects","slug":"/gql-api/types/objects/account-reset-payload","permalink":"/ecosystem-platform/gql-api/types/objects/account-reset-payload","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/types/objects/account-reset-payload.mdx","tags":[],"version":"current","frontMatter":{"id":"account-reset-payload","title":"AccountResetPayload"},"sidebar":"schemaSidebar","previous":{"title":"VerifyTotpInput","permalink":"/ecosystem-platform/gql-api/types/inputs/verify-totp-input"},"next":{"title":"AccountStatusPayload","permalink":"/ecosystem-platform/gql-api/types/objects/account-status-payload"}}');var n=a(74848),c=a(28453),o=a(96540);const l={id:"account-reset-payload",title:"AccountResetPayload"},d=void 0,r={},i=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:t,children:a,startOpen:s=!1})=>{const[c,l]=(0,o.useState)(s);return(0,n.jsxs)("details",{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&a]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>AccountResetPayload.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountresetpayloadclientmutationidstring-",level:4},{value:'<code>AccountResetPayload.<b>uid</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountresetpayloaduidstring-",level:4},{value:'<code>AccountResetPayload.<b>sessionToken</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountresetpayloadsessiontokenstring-",level:4},{value:'<code>AccountResetPayload.<b>verified</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"accountresetpayloadverifiedboolean-",level:4},{value:'<code>AccountResetPayload.<b>authAt</b></code><Bullet></Bullet><code>Float</code> <Badge class="badge badge--secondary"></Badge>',id:"accountresetpayloadauthatfloat-",level:4},{value:'<code>AccountResetPayload.<b>keyFetchToken</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountresetpayloadkeyfetchtokenstring-",level:4},{value:'<code>AccountResetPayload.<b>unwrapBKey</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountresetpayloadunwrapbkeystring-",level:4},{value:"Returned By",id:"returned-by",level:3}];function g(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type AccountResetPayload {\n  clientMutationId: String\n  uid: String\n  sessionToken: String\n  verified: Boolean\n  authAt: Float\n  keyFetchToken: String\n  unwrapBKey: String\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"accountresetpayloadclientmutationidstring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountResetPayload.",(0,n.jsx)("b",{children:"clientMutationId"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"A unique identifier for the client performing the mutation."}),"\n",(0,n.jsxs)(t.h4,{id:"accountresetpayloaduidstring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountResetPayload.",(0,n.jsx)("b",{children:"uid"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.h4,{id:"accountresetpayloadsessiontokenstring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountResetPayload.",(0,n.jsx)("b",{children:"sessionToken"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.h4,{id:"accountresetpayloadverifiedboolean-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountResetPayload.",(0,n.jsx)("b",{children:"verified"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/scalars/boolean",children:(0,n.jsx)(t.code,{children:"Boolean"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.h4,{id:"accountresetpayloadauthatfloat-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountResetPayload.",(0,n.jsx)("b",{children:"authAt"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/scalars/float",children:(0,n.jsx)(t.code,{children:"Float"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.h4,{id:"accountresetpayloadkeyfetchtokenstring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountResetPayload.",(0,n.jsx)("b",{children:"keyFetchToken"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.h4,{id:"accountresetpayloadunwrapbkeystring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountResetPayload.",(0,n.jsx)("b",{children:"unwrapBKey"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/ecosystem-platform/gql-api/operations/mutations/account-reset",children:(0,n.jsx)(t.code,{children:"accountReset"})}),"  ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);