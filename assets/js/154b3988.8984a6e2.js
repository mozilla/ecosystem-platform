"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[7139],{28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>d});var o=s(96540);const n={},a=o.createContext(n);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(a.Provider,{value:t},e.children)}},34991:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>f});const o=JSON.parse('{"id":"gql-api/types/inputs/password-forgot-code-status-input","title":"PasswordForgotCodeStatusInput","description":"No description","source":"@site/docs/gql-api/types/inputs/password-forgot-code-status-input.mdx","sourceDirName":"gql-api/types/inputs","slug":"/gql-api/types/inputs/password-forgot-code-status-input","permalink":"/ecosystem-platform/gql-api/types/inputs/password-forgot-code-status-input","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/types/inputs/password-forgot-code-status-input.mdx","tags":[],"version":"current","frontMatter":{"id":"password-forgot-code-status-input","title":"PasswordForgotCodeStatusInput"},"sidebar":"schemaSidebar","previous":{"title":"PasswordChangeInput","permalink":"/ecosystem-platform/gql-api/types/inputs/password-change-input"},"next":{"title":"PasswordForgotSendCodeInput","permalink":"/ecosystem-platform/gql-api/types/inputs/password-forgot-send-code-input"}}');var n=s(74848),a=s(28453),r=s(96540);const d={id:"password-forgot-code-status-input",title:"PasswordForgotCodeStatusInput"},i=void 0,l={},c=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:t,children:s,startOpen:o=!1})=>{const[a,d]=(0,r.useState)(o);return(0,n.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:a?e:t}),a&&s]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>PasswordForgotCodeStatusInput.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"passwordforgotcodestatusinputclientmutationidstring-",level:4},{value:'<code>PasswordForgotCodeStatusInput.<b>token</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"passwordforgotcodestatusinputtokenstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function m(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"input PasswordForgotCodeStatusInput {\n  clientMutationId: String\n  token: String!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"passwordforgotcodestatusinputclientmutationidstring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PasswordForgotCodeStatusInput.",(0,n.jsx)("b",{children:"clientMutationId"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"A unique identifier for the client performing the mutation."}),"\n",(0,n.jsxs)(t.h4,{id:"passwordforgotcodestatusinputtokenstring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PasswordForgotCodeStatusInput.",(0,n.jsx)("b",{children:"token"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Password forgot token"}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/ecosystem-platform/gql-api/operations/mutations/password-forgot-code-status",children:(0,n.jsx)(t.code,{children:"passwordForgotCodeStatus"})}),"  ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}}}]);