"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6074],{28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>o});var a=t(96540);const r={},n=a.createContext(r);function d(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(n.Provider,{value:s},e.children)}},63259:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>g,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>o,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"gql-api/types/inputs/create-password","title":"CreatePassword","description":"No description","source":"@site/docs/gql-api/types/inputs/create-password.mdx","sourceDirName":"gql-api/types/inputs","slug":"/gql-api/types/inputs/create-password","permalink":"/ecosystem-platform/gql-api/types/inputs/create-password","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/types/inputs/create-password.mdx","tags":[],"version":"current","frontMatter":{"id":"create-password","title":"CreatePassword"},"sidebar":"schemaSidebar","previous":{"title":"ChangeRecoveryCodesInput","permalink":"/ecosystem-platform/gql-api/types/inputs/change-recovery-codes-input"},"next":{"title":"CreateTotpInput","permalink":"/ecosystem-platform/gql-api/types/inputs/create-totp-input"}}');var r=t(74848),n=t(28453),d=t(96540);const o={id:"create-password",title:"CreatePassword"},i=void 0,l={},c=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:s,children:t,startOpen:a=!1})=>{const[n,o]=(0,d.useState)(a);return(0,r.jsxs)("details",{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:n?e:s}),n&&t]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>CreatePassword.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"createpasswordclientmutationidstring-",level:4},{value:'<code>CreatePassword.<b>email</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createpasswordemailstring--",level:4},{value:'<code>CreatePassword.<b>password</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createpasswordpasswordstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"No description"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",children:"input CreatePassword {\n  clientMutationId: String\n  email: String!\n  password: String!\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(s.h4,{id:"createpasswordclientmutationidstring-",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["CreatePassword.",(0,r.jsx)("b",{children:"clientMutationId"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(s.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,r.jsx)(s.code,{children:"String"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(s.p,{children:"A unique identifier for the client performing the mutation."}),"\n",(0,r.jsxs)(s.h4,{id:"createpasswordemailstring--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["CreatePassword.",(0,r.jsx)("b",{children:"email"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(s.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,r.jsx)(s.code,{children:"String!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(s.p,{children:"Users email, used to hash password"}),"\n",(0,r.jsxs)(s.h4,{id:"createpasswordpasswordstring--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["CreatePassword.",(0,r.jsx)("b",{children:"password"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(s.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,r.jsx)(s.code,{children:"String!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(s.p,{children:"The new password"}),"\n",(0,r.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/ecosystem-platform/gql-api/operations/mutations/create-password",children:(0,r.jsx)(s.code,{children:"createPassword"})}),"  ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}}}]);