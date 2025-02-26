"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[7465],{28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>r});var o=t(96540);const n={},a=o.createContext(n);function i(e){const s=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(a.Provider,{value:s},e.children)}},76862:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>u,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>y});const o=JSON.parse('{"id":"gql-api/operations/mutations/destroy-session","title":"destroySession","description":"Logs out the current session","source":"@site/docs/gql-api/operations/mutations/destroy-session.mdx","sourceDirName":"gql-api/operations/mutations","slug":"/gql-api/operations/mutations/destroy-session","permalink":"/ecosystem-platform/gql-api/operations/mutations/destroy-session","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/operations/mutations/destroy-session.mdx","tags":[],"version":"current","frontMatter":{"id":"destroy-session","title":"destroySession"},"sidebar":"schemaSidebar","previous":{"title":"deleteTotp","permalink":"/ecosystem-platform/gql-api/operations/mutations/delete-totp"},"next":{"title":"emailVerifyCode","permalink":"/ecosystem-platform/gql-api/operations/mutations/email-verify-code"}}');var n=t(74848),a=t(28453),i=t(96540);const r={id:"destroy-session",title:"destroySession"},d=void 0,l={},c=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:s,children:t,startOpen:o=!1})=>{const[a,r]=(0,i.useState)(o);return(0,n.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:a?e:s}),a&&t]})},y=[{value:"Arguments",id:"arguments",level:3},{value:'<code>destroySession.<b>input</b></code><Bullet></Bullet><code>DestroySessionInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"destroysessioninputdestroysessioninput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>BasicPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"basicpayload-",level:4}];function g(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Logs out the current session"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"destroySession(\n  input: DestroySessionInput!\n): BasicPayload!\n"})}),"\n",(0,n.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(s.h4,{id:"destroysessioninputdestroysessioninput--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["destroySession.",(0,n.jsx)("b",{children:"input"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/ecosystem-platform/gql-api/types/inputs/destroy-session-input",children:(0,n.jsx)(s.code,{children:"DestroySessionInput!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(s.h4,{id:"basicpayload-",children:[(0,n.jsx)(s.a,{href:"/ecosystem-platform/gql-api/types/objects/basic-payload",children:(0,n.jsx)(s.code,{children:"BasicPayload"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);