"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6882],{28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>c});var n=a(96540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}},37801:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"gql-api/mutations/create-totp","title":"createTotp","description":"Create a new randomly generated TOTP token for a user if they do not currently have one.","source":"@site/docs/gql-api/mutations/create-totp.mdx","sourceDirName":"gql-api/mutations","slug":"/gql-api/mutations/create-totp","permalink":"/ecosystem-platform/gql-api/mutations/create-totp","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/mutations/create-totp.mdx","tags":[],"version":"current","frontMatter":{"id":"create-totp","title":"createTotp","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"createSecondaryEmail","permalink":"/ecosystem-platform/gql-api/mutations/create-secondary-email"},"next":{"title":"deleteAvatar","permalink":"/ecosystem-platform/gql-api/mutations/delete-avatar"}}');var o=a(74848),r=a(28453),s=a(96540);const c={id:"create-totp",title:"createTotp",hide_table_of_contents:!1},l=void 0,i={},d=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:t,children:a,startOpen:n=!1})=>{const[r,c]=(0,s.useState)(n);return(0,o.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&a]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>createTotp.<b>input</b></code><Bullet></Bullet><code>CreateTotpInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createtotpinputcreatetotpinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CreateTotpPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"createtotppayload-",level:4}];function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Create a new randomly generated TOTP token for a user if they do not currently have one."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"createTotp(\n  input: CreateTotpInput!\n): CreateTotpPayload!\n"})}),"\n",(0,o.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,o.jsxs)(t.h4,{id:"createtotpinputcreatetotpinput--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["createTotp.",(0,o.jsx)("b",{children:"input"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(t.a,{href:"/gql-api/inputs/create-totp-input",children:(0,o.jsx)(t.code,{children:"CreateTotpInput!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,o.jsx)(t.blockquote,{children:"\n"}),"\n",(0,o.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,o.jsxs)(t.h4,{id:"createtotppayload-",children:[(0,o.jsx)(t.a,{href:"/gql-api/objects/create-totp-payload",children:(0,o.jsx)(t.code,{children:"CreateTotpPayload"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(t.blockquote,{children:"\n"})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}}}]);