"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[8194],{28453:(e,a,s)=>{s.d(a,{R:()=>n,x:()=>c});var o=s(96540);const t={},r=o.createContext(t);function n(e){const a=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),o.createElement(r.Provider,{value:a},e.children)}},82149:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>p,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>y,assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"gql-api/types/objects/change-recovery-codes-payload","title":"ChangeRecoveryCodesPayload","description":"No description","source":"@site/docs/gql-api/types/objects/change-recovery-codes-payload.mdx","sourceDirName":"gql-api/types/objects","slug":"/gql-api/types/objects/change-recovery-codes-payload","permalink":"/ecosystem-platform/gql-api/types/objects/change-recovery-codes-payload","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/types/objects/change-recovery-codes-payload.mdx","tags":[],"version":"current","frontMatter":{"id":"change-recovery-codes-payload","title":"ChangeRecoveryCodesPayload"},"sidebar":"schemaSidebar","previous":{"title":"BasicPayload","permalink":"/ecosystem-platform/gql-api/types/objects/basic-payload"},"next":{"title":"CreateTotpPayload","permalink":"/ecosystem-platform/gql-api/types/objects/create-totp-payload"}}');var t=s(74848),r=s(28453),n=s(96540);const c={id:"change-recovery-codes-payload",title:"ChangeRecoveryCodesPayload"},d=void 0,l={},i=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),y=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:a,children:s,startOpen:o=!1})=>{const[r,c]=(0,n.useState)(o);return(0,t.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:r?e:a}),r&&s]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ChangeRecoveryCodesPayload.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"changerecoverycodespayloadclientmutationidstring-",level:4},{value:'<code>ChangeRecoveryCodesPayload.<b>recoveryCodes</b></code><Bullet></Bullet><code>[String!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"changerecoverycodespayloadrecoverycodesstring--",level:4},{value:"Returned By",id:"returned-by",level:3}];function m(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"No description"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type ChangeRecoveryCodesPayload {\n  clientMutationId: String\n  recoveryCodes: [String!]!\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"changerecoverycodespayloadclientmutationidstring-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ChangeRecoveryCodesPayload.",(0,t.jsx)("b",{children:"clientMutationId"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,t.jsx)(a.code,{children:"String"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"A unique identifier for the client performing the mutation."}),"\n",(0,t.jsxs)(a.h4,{id:"changerecoverycodespayloadrecoverycodesstring--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ChangeRecoveryCodesPayload.",(0,t.jsx)("b",{children:"recoveryCodes"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,t.jsx)(a.code,{children:"[String!]!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/ecosystem-platform/gql-api/operations/mutations/change-recovery-codes",children:(0,t.jsx)(a.code,{children:"changeRecoveryCodes"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}}}]);