"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[1387],{46:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>p,assets:()=>a,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"gql-api/inputs/verify-totp-input","title":"VerifyTotpInput","description":"No description","source":"@site/docs/gql-api/inputs/verify-totp-input.mdx","sourceDirName":"gql-api/inputs","slug":"/gql-api/inputs/verify-totp-input","permalink":"/ecosystem-platform/gql-api/inputs/verify-totp-input","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/inputs/verify-totp-input.mdx","tags":[],"version":"current","frontMatter":{"id":"verify-totp-input","title":"VerifyTotpInput","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"VerifySessionInput","permalink":"/ecosystem-platform/gql-api/inputs/verify-session-input"},"next":{"title":"accountReset","permalink":"/ecosystem-platform/gql-api/mutations/account-reset"}}');var s=n(74848),r=n(28453),o=n(96540);const l={id:"verify-totp-input",title:"VerifyTotpInput",hide_table_of_contents:!1},c=void 0,a={},d=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),f=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const[r,l]=(0,o.useState)(i);return(0,s.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>VerifyTotpInput.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"verifytotpinputclientmutationidstring-",level:4},{value:'<code>VerifyTotpInput.<b>code</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"verifytotpinputcodestring--",level:4},{value:'<code>VerifyTotpInput.<b>service</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"verifytotpinputservicestring-",level:4},{value:"Member of",id:"member-of",level:3}];function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input VerifyTotpInput {\n  clientMutationId: String\n  code: String!\n  service: String\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"verifytotpinputclientmutationidstring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VerifyTotpInput.",(0,s.jsx)("b",{children:"clientMutationId"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"A unique identifier for the client performing the mutation."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"verifytotpinputcodestring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VerifyTotpInput.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(t.code,{children:"String!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The TOTP code to check"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"verifytotpinputservicestring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VerifyTotpInput.",(0,s.jsx)("b",{children:"service"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/gql-api/mutations/verify-totp",children:(0,s.jsx)(t.code,{children:"verifyTotp"})}),"  ",(0,s.jsx)(u,{class:"secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);