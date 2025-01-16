"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[4758],{58061:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>g,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>f});const a=JSON.parse('{"id":"gql-api/types/objects/password-forgot-code-status-payload","title":"PasswordForgotCodeStatusPayload","description":"No description","source":"@site/docs/gql-api/types/objects/password-forgot-code-status-payload.mdx","sourceDirName":"gql-api/types/objects","slug":"/gql-api/types/objects/password-forgot-code-status-payload","permalink":"/ecosystem-platform/gql-api/types/objects/password-forgot-code-status-payload","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/types/objects/password-forgot-code-status-payload.mdx","tags":[],"version":"current","frontMatter":{"id":"password-forgot-code-status-payload","title":"PasswordForgotCodeStatusPayload"},"sidebar":"schemaSidebar","previous":{"title":"PasswordChangePayload","permalink":"/ecosystem-platform/gql-api/types/objects/password-change-payload"},"next":{"title":"PasswordForgotSendCodePayload","permalink":"/ecosystem-platform/gql-api/types/objects/password-forgot-send-code-payload"}}');var o=t(74848),d=t(28453),r=t(96540);const l={id:"password-forgot-code-status-payload",title:"PasswordForgotCodeStatusPayload"},n=void 0,c={},i=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{className:e.class,children:e.text})}),u=({dataOpen:e,dataClose:s,children:t,startOpen:a=!1})=>{const[d,l]=(0,r.useState)(a);return(0,o.jsxs)("details",{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&t]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>PasswordForgotCodeStatusPayload.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"passwordforgotcodestatuspayloadclientmutationidstring-",level:4},{value:'<code>PasswordForgotCodeStatusPayload.<b>tries</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"passwordforgotcodestatuspayloadtriesfloat--",level:4},{value:'<code>PasswordForgotCodeStatusPayload.<b>ttl</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"passwordforgotcodestatuspayloadttlfloat--",level:4},{value:"Returned By",id:"returned-by",level:3}];function y(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"No description"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-graphql",children:"type PasswordForgotCodeStatusPayload {\n  clientMutationId: String\n  tries: Float!\n  ttl: Float!\n}\n"})}),"\n",(0,o.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(s.h4,{id:"passwordforgotcodestatuspayloadclientmutationidstring-",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["PasswordForgotCodeStatusPayload.",(0,o.jsx)("b",{children:"clientMutationId"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,o.jsx)(s.code,{children:"String"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(s.p,{children:"A unique identifier for the client performing the mutation."}),"\n",(0,o.jsxs)(s.h4,{id:"passwordforgotcodestatuspayloadtriesfloat--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["PasswordForgotCodeStatusPayload.",(0,o.jsx)("b",{children:"tries"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/ecosystem-platform/gql-api/types/scalars/float",children:(0,o.jsx)(s.code,{children:"Float!"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(s.h4,{id:"passwordforgotcodestatuspayloadttlfloat--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["PasswordForgotCodeStatusPayload.",(0,o.jsx)("b",{children:"ttl"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/ecosystem-platform/gql-api/types/scalars/float",children:(0,o.jsx)(s.code,{children:"Float!"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(s.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/ecosystem-platform/gql-api/operations/mutations/password-forgot-code-status",children:(0,o.jsx)(s.code,{children:"passwordForgotCodeStatus"})}),"  ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"mutation"})]})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(y,{...e})}):y(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>l});var a=t(96540);const o={},d=a.createContext(o);function r(e){const s=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(d.Provider,{value:s},e.children)}}}]);