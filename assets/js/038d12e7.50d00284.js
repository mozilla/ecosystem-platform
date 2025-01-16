"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[4237],{43269:(e,i,t)=>{t.r(i),t.d(i,{Badge:()=>m,Bullet:()=>o,Details:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>r,metadata:()=>n,toc:()=>f});const n=JSON.parse('{"id":"gql-api/types/inputs/verify-email-input","title":"VerifyEmailInput","description":"No description","source":"@site/docs/gql-api/types/inputs/verify-email-input.mdx","sourceDirName":"gql-api/types/inputs","slug":"/gql-api/types/inputs/verify-email-input","permalink":"/ecosystem-platform/gql-api/types/inputs/verify-email-input","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/types/inputs/verify-email-input.mdx","tags":[],"version":"current","frontMatter":{"id":"verify-email-input","title":"VerifyEmailInput"},"sidebar":"schemaSidebar","previous":{"title":"VerifyEmailCodeInput","permalink":"/ecosystem-platform/gql-api/types/inputs/verify-email-code-input"},"next":{"title":"VerifySessionInput","permalink":"/ecosystem-platform/gql-api/types/inputs/verify-session-input"}}');var s=t(74848),a=t(28453),l=t(96540);const r={id:"verify-email-input",title:"VerifyEmailInput"},d=void 0,c={},o=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),m=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),u=({dataOpen:e,dataClose:i,children:t,startOpen:n=!1})=>{const[a,r]=(0,l.useState)(n);return(0,s.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:a?e:i}),a&&t]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>VerifyEmailInput.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"verifyemailinputclientmutationidstring-",level:4},{value:'<code>VerifyEmailInput.<b>email</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"verifyemailinputemailstring--",level:4},{value:'<code>VerifyEmailInput.<b>code</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"verifyemailinputcodestring--",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const i={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"No description"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-graphql",children:"input VerifyEmailInput {\n  clientMutationId: String\n  email: String!\n  code: String!\n}\n"})}),"\n",(0,s.jsx)(i.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(i.h4,{id:"verifyemailinputclientmutationidstring-",children:[(0,s.jsx)(i.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VerifyEmailInput.",(0,s.jsx)("b",{children:"clientMutationId"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(i.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,s.jsx)(i.code,{children:"String"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(i.p,{children:"A unique identifier for the client performing the mutation."}),"\n",(0,s.jsxs)(i.h4,{id:"verifyemailinputemailstring--",children:[(0,s.jsx)(i.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VerifyEmailInput.",(0,s.jsx)("b",{children:"email"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(i.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,s.jsx)(i.code,{children:"String!"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(i.p,{children:"The email to verify"}),"\n",(0,s.jsxs)(i.h4,{id:"verifyemailinputcodestring--",children:[(0,s.jsx)(i.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VerifyEmailInput.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(i.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,s.jsx)(i.code,{children:"String!"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(i.p,{children:"The code to check"}),"\n",(0,s.jsx)(i.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/ecosystem-platform/gql-api/operations/mutations/verify-secondary-email",children:(0,s.jsx)(i.code,{children:"verifySecondaryEmail"})}),"  ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"mutation"})]})]})}function y(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>r});var n=t(96540);const s={},a=n.createContext(s);function l(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);