"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[9551],{28453:(e,a,t)=>{t.d(a,{R:()=>n,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function n(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(r.Provider,{value:a},e.children)}},72138:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>m,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>y});const s=JSON.parse('{"id":"gql-api/operations/mutations/update-primary-email","title":"updatePrimaryEmail","description":"Change users primary email address, this email address must belong to the user and be verified.","source":"@site/docs/gql-api/operations/mutations/update-primary-email.mdx","sourceDirName":"gql-api/operations/mutations","slug":"/gql-api/operations/mutations/update-primary-email","permalink":"/ecosystem-platform/gql-api/operations/mutations/update-primary-email","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/operations/mutations/update-primary-email.mdx","tags":[],"version":"current","frontMatter":{"id":"update-primary-email","title":"updatePrimaryEmail"},"sidebar":"schemaSidebar","previous":{"title":"updateDisplayName","permalink":"/ecosystem-platform/gql-api/operations/mutations/update-display-name"},"next":{"title":"verifyCode","permalink":"/ecosystem-platform/gql-api/operations/mutations/verify-code"}}');var i=t(74848),r=t(28453),n=t(96540);const l={id:"update-primary-email",title:"updatePrimaryEmail"},o=void 0,d={},c=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),m=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),u=({dataOpen:e,dataClose:a,children:t,startOpen:s=!1})=>{const[r,l]=(0,n.useState)(s);return(0,i.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:a}),r&&t]})},y=[{value:"Arguments",id:"arguments",level:3},{value:'<code>updatePrimaryEmail.<b>input</b></code><Bullet></Bullet><code>EmailInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updateprimaryemailinputemailinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>BasicPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"basicpayload-",level:4}];function h(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"Change users primary email address, this email address must belong to the user and be verified."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-graphql",children:"updatePrimaryEmail(\n  input: EmailInput!\n): BasicPayload!\n"})}),"\n",(0,i.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(a.h4,{id:"updateprimaryemailinputemailinput--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["updatePrimaryEmail.",(0,i.jsx)("b",{children:"input"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(a.a,{href:"/ecosystem-platform/gql-api/types/inputs/email-input",children:(0,i.jsx)(a.code,{children:"EmailInput!"})})," ",(0,i.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(m,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,i.jsxs)(a.h4,{id:"basicpayload-",children:[(0,i.jsx)(a.a,{href:"/ecosystem-platform/gql-api/types/objects/basic-payload",children:(0,i.jsx)(a.code,{children:"BasicPayload"})})," ",(0,i.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);