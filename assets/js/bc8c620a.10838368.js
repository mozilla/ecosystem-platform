"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[920],{16845:(e,i,n)=>{n.r(i),n.d(i,{Badge:()=>p,Bullet:()=>o,Details:()=>m,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>f});const t=JSON.parse('{"id":"gql-api/inputs/verify-email-input","title":"VerifyEmailInput","description":"No description","source":"@site/docs/gql-api/inputs/verify-email-input.mdx","sourceDirName":"gql-api/inputs","slug":"/gql-api/inputs/verify-email-input","permalink":"/ecosystem-platform/gql-api/inputs/verify-email-input","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/inputs/verify-email-input.mdx","tags":[],"version":"current","frontMatter":{"id":"verify-email-input","title":"VerifyEmailInput","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"VerifyEmailCodeInput","permalink":"/ecosystem-platform/gql-api/inputs/verify-email-code-input"},"next":{"title":"VerifySessionInput","permalink":"/ecosystem-platform/gql-api/inputs/verify-session-input"}}');var s=n(74848),l=n(28453),a=n(96540);const r={id:"verify-email-input",title:"VerifyEmailInput",hide_table_of_contents:!1},c=void 0,d={},o=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:i,children:n,startOpen:t=!1})=>{const[l,r]=(0,a.useState)(t);return(0,s.jsxs)("details",{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:i}),l&&n]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>VerifyEmailInput.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"verifyemailinputclientmutationidstring-",level:4},{value:'<code>VerifyEmailInput.<b>email</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"verifyemailinputemailstring--",level:4},{value:'<code>VerifyEmailInput.<b>code</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"verifyemailinputcodestring--",level:4},{value:"Member of",id:"member-of",level:3}];function g(e){const i={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"No description"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-graphql",children:"input VerifyEmailInput {\n  clientMutationId: String\n  email: String!\n  code: String!\n}\n"})}),"\n",(0,s.jsx)(i.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(i.h4,{id:"verifyemailinputclientmutationidstring-",children:[(0,s.jsx)(i.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VerifyEmailInput.",(0,s.jsx)("b",{children:"clientMutationId"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(i.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(i.code,{children:"String"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"A unique identifier for the client performing the mutation."}),"\n"]}),"\n",(0,s.jsxs)(i.h4,{id:"verifyemailinputemailstring--",children:[(0,s.jsx)(i.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VerifyEmailInput.",(0,s.jsx)("b",{children:"email"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(i.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(i.code,{children:"String!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"The email to verify"}),"\n"]}),"\n",(0,s.jsxs)(i.h4,{id:"verifyemailinputcodestring--",children:[(0,s.jsx)(i.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VerifyEmailInput.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(i.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(i.code,{children:"String!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"The code to check"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/gql-api/mutations/verify-secondary-email",children:(0,s.jsx)(i.code,{children:"verifySecondaryEmail"})}),"  ",(0,s.jsx)(p,{class:"secondary",text:"mutation"})]})]})}function h(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>r});var t=n(96540);const s={},l=t.createContext(s);function a(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);