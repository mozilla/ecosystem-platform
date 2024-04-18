"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6008],{50958:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>u,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>g});var a=t(74848),r=t(28453),n=t(96540);const d={id:"create-password",title:"CreatePassword",hide_table_of_contents:!1},o=void 0,i={id:"gql-api/inputs/create-password",title:"CreatePassword",description:"No description",source:"@site/docs/gql-api/inputs/create-password.mdx",sourceDirName:"gql-api/inputs",slug:"/gql-api/inputs/create-password",permalink:"/ecosystem-platform/gql-api/inputs/create-password",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/inputs/create-password.mdx",tags:[],version:"current",frontMatter:{id:"create-password",title:"CreatePassword",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ChangeRecoveryCodesInput",permalink:"/ecosystem-platform/gql-api/inputs/change-recovery-codes-input"},next:{title:"CreateTotpInput",permalink:"/ecosystem-platform/gql-api/inputs/create-totp-input"}},l={},c=()=>{const e={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,r.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>CreatePassword.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"createpasswordclientmutationidstring-",level:4},{value:'<code>CreatePassword.<b>email</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createpasswordemailstring--",level:4},{value:'<code>CreatePassword.<b>password</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createpasswordpasswordstring--",level:4},{value:"Member of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:s,children:t,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,r.R)()},[i,l]=(0,n.useState)(d);return(0,a.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&t]})};function m(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"No description"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"input CreatePassword {\n  clientMutationId: String\n  email: String!\n  password: String!\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"createpasswordclientmutationidstring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CreatePassword.",(0,a.jsx)("b",{children:"clientMutationId"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/gql-api/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"A unique identifier for the client performing the mutation."}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"createpasswordemailstring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CreatePassword.",(0,a.jsx)("b",{children:"email"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/gql-api/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Users email, used to hash password"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"createpasswordpasswordstring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CreatePassword.",(0,a.jsx)("b",{children:"password"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/gql-api/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"The new password"}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/gql-api/mutations/create-password",children:(0,a.jsx)(s.code,{children:"createPassword"})}),"  ",(0,a.jsx)(u,{class:"secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>o});var a=t(96540);const r={},n=a.createContext(r);function d(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);