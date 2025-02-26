"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[5139],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(96540);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}},35796:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>y,assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"gql-api/operations/queries/get-recovery-key-bundle","title":"getRecoveryKeyBundle","description":"Retrieves a user recovery key bundle from its recovery key id. The bundle contains an encrypted copy for the sync key.","source":"@site/docs/gql-api/operations/queries/get-recovery-key-bundle.mdx","sourceDirName":"gql-api/operations/queries","slug":"/gql-api/operations/queries/get-recovery-key-bundle","permalink":"/ecosystem-platform/gql-api/operations/queries/get-recovery-key-bundle","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/operations/queries/get-recovery-key-bundle.mdx","tags":[],"version":"current","frontMatter":{"id":"get-recovery-key-bundle","title":"getRecoveryKeyBundle"},"sidebar":"schemaSidebar","previous":{"title":"getLegalDoc","permalink":"/ecosystem-platform/gql-api/operations/queries/get-legal-doc"},"next":{"title":"sessionStatus","permalink":"/ecosystem-platform/gql-api/operations/queries/session-status"}}');var s=n(74848),o=n(28453),a=n(96540);const l={id:"get-recovery-key-bundle",title:"getRecoveryKeyBundle"},c=void 0,d={},i=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),y=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),p=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const[o,l]=(0,a.useState)(r);return(0,s.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},g=[{value:"Arguments",id:"arguments",level:3},{value:'<code>getRecoveryKeyBundle.<b>input</b></code><Bullet></Bullet><code>RecoveryKeyBundleInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"getrecoverykeybundleinputrecoverykeybundleinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>RecoveryKeyBundlePayload</code> <Badge class="badge badge--secondary"></Badge>',id:"recoverykeybundlepayload-",level:4}];function m(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Retrieves a user recovery key bundle from its recovery key id. The bundle contains an encrypted copy for the sync key."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"getRecoveryKeyBundle(\n  input: RecoveryKeyBundleInput!\n): RecoveryKeyBundlePayload!\n"})}),"\n",(0,s.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.h4,{id:"getrecoverykeybundleinputrecoverykeybundleinput--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["getRecoveryKeyBundle.",(0,s.jsx)("b",{children:"input"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/inputs/recovery-key-bundle-input",children:(0,s.jsx)(t.code,{children:"RecoveryKeyBundleInput!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,s.jsxs)(t.h4,{id:"recoverykeybundlepayload-",children:[(0,s.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/objects/recovery-key-bundle-payload",children:(0,s.jsx)(t.code,{children:"RecoveryKeyBundlePayload"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}}}]);