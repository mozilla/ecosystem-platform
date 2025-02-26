"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[9377],{28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>o});var a=t(96540);const n={},d=a.createContext(n);function i(e){const s=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(d.Provider,{value:s},e.children)}},97599:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>p,Bullet:()=>r,Details:()=>h,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>g});const a=JSON.parse('{"id":"gql-api/types/objects/finished-setup-account-payload","title":"FinishedSetupAccountPayload","description":"No description","source":"@site/docs/gql-api/types/objects/finished-setup-account-payload.mdx","sourceDirName":"gql-api/types/objects","slug":"/gql-api/types/objects/finished-setup-account-payload","permalink":"/ecosystem-platform/gql-api/types/objects/finished-setup-account-payload","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/types/objects/finished-setup-account-payload.mdx","tags":[],"version":"current","frontMatter":{"id":"finished-setup-account-payload","title":"FinishedSetupAccountPayload"},"sidebar":"schemaSidebar","previous":{"title":"Email","permalink":"/ecosystem-platform/gql-api/types/objects/email"},"next":{"title":"LegalDoc","permalink":"/ecosystem-platform/gql-api/types/objects/legal-doc"}}');var n=t(74848),d=t(28453),i=t(96540);const o={id:"finished-setup-account-payload",title:"FinishedSetupAccountPayload"},c=void 0,l={},r=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:s,children:t,startOpen:a=!1})=>{const[d,o]=(0,i.useState)(a);return(0,n.jsxs)("details",{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&t]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>FinishedSetupAccountPayload.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"finishedsetupaccountpayloadclientmutationidstring-",level:4},{value:'<code>FinishedSetupAccountPayload.<b>uid</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"finishedsetupaccountpayloaduidstring--",level:4},{value:'<code>FinishedSetupAccountPayload.<b>sessionToken</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"finishedsetupaccountpayloadsessiontokenstring--",level:4},{value:'<code>FinishedSetupAccountPayload.<b>verified</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"finishedsetupaccountpayloadverifiedboolean--",level:4},{value:"Returned By",id:"returned-by",level:3}];function y(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type FinishedSetupAccountPayload {\n  clientMutationId: String\n  uid: String!\n  sessionToken: String!\n  verified: Boolean!\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"finishedsetupaccountpayloadclientmutationidstring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FinishedSetupAccountPayload.",(0,n.jsx)("b",{children:"clientMutationId"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.p,{children:"A unique identifier for the client performing the mutation."}),"\n",(0,n.jsxs)(s.h4,{id:"finishedsetupaccountpayloaduidstring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FinishedSetupAccountPayload.",(0,n.jsx)("b",{children:"uid"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,n.jsx)(s.code,{children:"String!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.h4,{id:"finishedsetupaccountpayloadsessiontokenstring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FinishedSetupAccountPayload.",(0,n.jsx)("b",{children:"sessionToken"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,n.jsx)(s.code,{children:"String!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.h4,{id:"finishedsetupaccountpayloadverifiedboolean--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FinishedSetupAccountPayload.",(0,n.jsx)("b",{children:"verified"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/ecosystem-platform/gql-api/types/scalars/boolean",children:(0,n.jsx)(s.code,{children:"Boolean!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/ecosystem-platform/gql-api/operations/mutations/finish-setup",children:(0,n.jsx)(s.code,{children:"finishSetup"})}),"  ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function f(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(y,{...e})}):y(e)}}}]);