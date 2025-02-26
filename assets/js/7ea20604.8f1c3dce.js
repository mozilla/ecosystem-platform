"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[3288],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}},92379:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>f});const s=JSON.parse('{"id":"gql-api/api/mutations/finish-setup","title":"finishSetup","description":"Call auth-server to finish signing up a \\"stub\\" account","source":"@site/docs/gql-api/api/mutations/finish-setup.mdx","sourceDirName":"gql-api/api/mutations","slug":"/gql-api/api/mutations/finish-setup","permalink":"/ecosystem-platform/gql-api/api/mutations/finish-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/api/mutations/finish-setup.mdx","tags":[],"version":"current","frontMatter":{"id":"finish-setup","title":"finishSetup"},"sidebar":"schemaSidebar","previous":{"title":"emailVerifyCode","permalink":"/ecosystem-platform/gql-api/api/mutations/email-verify-code"},"next":{"title":"metricsOpt","permalink":"/ecosystem-platform/gql-api/api/mutations/metrics-opt"}}');var i=n(74848),a=n(28453),o=n(96540);const l={id:"finish-setup",title:"finishSetup"},c=void 0,r={},d=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const[a,l]=(0,o.useState)(s);return(0,i.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:a?e:t}),a&&n]})},f=[{value:"Arguments",id:"arguments",level:3},{value:'<code>finishSetup.<b>input</b></code><Bullet></Bullet><code>FinishSetupInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"finishsetupinputfinishsetupinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>FinishedSetupAccountPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"finishedsetupaccountpayload-",level:4}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:'Call auth-server to finish signing up a "stub" account'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"finishSetup(\n  input: FinishSetupInput!\n): FinishedSetupAccountPayload!\n"})}),"\n",(0,i.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(t.h4,{id:"finishsetupinputfinishsetupinput--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["finishSetup.",(0,i.jsx)("b",{children:"input"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/gql-api/types/inputs/finish-setup-input",children:(0,i.jsx)(t.code,{children:"FinishSetupInput!"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"}),"\n",(0,i.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,i.jsxs)(t.h4,{id:"finishedsetupaccountpayload-",children:[(0,i.jsx)(t.a,{href:"/gql-api/types/objects/finished-setup-account-payload",children:(0,i.jsx)(t.code,{children:"FinishedSetupAccountPayload"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);