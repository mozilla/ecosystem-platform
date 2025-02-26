"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[9231],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var c=n(96540);const a={},s=c.createContext(a);function i(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),c.createElement(s.Provider,{value:t},e.children)}},98874:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>r,Details:()=>p,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>m});const c=JSON.parse('{"id":"gql-api/mutations/attached-client-disconnect","title":"attachedClientDisconnect","description":"Destroy all tokens held by a connected client, disconnecting it from the user\'s account.","source":"@site/docs/gql-api/mutations/attached-client-disconnect.mdx","sourceDirName":"gql-api/mutations","slug":"/gql-api/mutations/attached-client-disconnect","permalink":"/ecosystem-platform/gql-api/mutations/attached-client-disconnect","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/mutations/attached-client-disconnect.mdx","tags":[],"version":"current","frontMatter":{"id":"attached-client-disconnect","title":"attachedClientDisconnect","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"accountReset","permalink":"/ecosystem-platform/gql-api/mutations/account-reset"},"next":{"title":"changeRecoveryCodes","permalink":"/ecosystem-platform/gql-api/mutations/change-recovery-codes"}}');var a=n(74848),s=n(28453),i=n(96540);const o={id:"attached-client-disconnect",title:"attachedClientDisconnect",hide_table_of_contents:!1},l=void 0,d={},r=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),h=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),p=({dataOpen:e,dataClose:t,children:n,startOpen:c=!1})=>{const[s,o]=(0,i.useState)(c);return(0,a.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:s?e:t}),s&&n]})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>attachedClientDisconnect.<b>input</b></code><Bullet></Bullet><code>AttachedClientDisconnectInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"attachedclientdisconnectinputattachedclientdisconnectinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>BasicPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"basicpayload-",level:4}];function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Destroy all tokens held by a connected client, disconnecting it from the user's account."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"attachedClientDisconnect(\n  input: AttachedClientDisconnectInput!\n): BasicPayload!\n"})}),"\n",(0,a.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(t.h4,{id:"attachedclientdisconnectinputattachedclientdisconnectinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["attachedClientDisconnect.",(0,a.jsx)("b",{children:"input"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(t.a,{href:"/gql-api/inputs/attached-client-disconnect-input",children:(0,a.jsx)(t.code,{children:"AttachedClientDisconnectInput!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(t.h4,{id:"basicpayload-",children:[(0,a.jsx)(t.a,{href:"/gql-api/objects/basic-payload",children:(0,a.jsx)(t.code,{children:"BasicPayload"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}}}]);