"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[1902],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}},40803:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>y});const s=JSON.parse('{"id":"gql-api/mutations/verify-totp","title":"verifyTotp","description":"Verifies the current session if the passed TOTP code is valid.","source":"@site/docs/gql-api/mutations/verify-totp.mdx","sourceDirName":"gql-api/mutations","slug":"/gql-api/mutations/verify-totp","permalink":"/ecosystem-platform/gql-api/mutations/verify-totp","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/mutations/verify-totp.mdx","tags":[],"version":"current","frontMatter":{"id":"verify-totp","title":"verifyTotp","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"verifySession","permalink":"/ecosystem-platform/gql-api/mutations/verify-session"},"next":{"title":"AccountResetPayload","permalink":"/ecosystem-platform/gql-api/objects/account-reset-payload"}}');var o=n(74848),i=n(28453),a=n(96540);const r={id:"verify-totp",title:"verifyTotp",hide_table_of_contents:!1},l=void 0,c={},d=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),f=e=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{className:e.class,children:e.text})}),u=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const[i,r]=(0,a.useState)(s);return(0,o.jsxs)("details",{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})},y=[{value:"Arguments",id:"arguments",level:3},{value:'<code>verifyTotp.<b>input</b></code><Bullet></Bullet><code>VerifyTotpInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"verifytotpinputverifytotpinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>VerifyTotpPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"verifytotppayload-",level:4}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Verifies the current session if the passed TOTP code is valid."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"verifyTotp(\n  input: VerifyTotpInput!\n): VerifyTotpPayload!\n"})}),"\n",(0,o.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,o.jsxs)(t.h4,{id:"verifytotpinputverifytotpinput--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["verifyTotp.",(0,o.jsx)("b",{children:"input"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(t.a,{href:"/gql-api/inputs/verify-totp-input",children:(0,o.jsx)(t.code,{children:"VerifyTotpInput!"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,o.jsx)(t.blockquote,{children:"\n"}),"\n",(0,o.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,o.jsxs)(t.h4,{id:"verifytotppayload-",children:[(0,o.jsx)(t.a,{href:"/gql-api/objects/verify-totp-payload",children:(0,o.jsx)(t.code,{children:"VerifyTotpPayload"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(t.blockquote,{children:"\n"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}}}]);