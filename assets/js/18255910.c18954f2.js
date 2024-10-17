"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[9398],{56449:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>m});var a=s(74848),n=s(28453),r=s(96540);const c={id:"security-event",title:"SecurityEvent"},l=void 0,o={id:"gql-api/types/objects/security-event",title:"SecurityEvent",description:"No description",source:"@site/docs/gql-api/types/objects/security-event.mdx",sourceDirName:"gql-api/types/objects",slug:"/gql-api/types/objects/security-event",permalink:"/ecosystem-platform/gql-api/types/objects/security-event",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/types/objects/security-event.mdx",tags:[],version:"current",frontMatter:{id:"security-event",title:"SecurityEvent"},sidebar:"schemaSidebar",previous:{title:"RecoveryKeyBundlePayload",permalink:"/ecosystem-platform/gql-api/types/objects/recovery-key-bundle-payload"},next:{title:"SessionReauthedAccountPayload",permalink:"/ecosystem-platform/gql-api/types/objects/session-reauthed-account-payload"}},d={},i=()=>{const e={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,n.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:t,children:s,startOpen:c=!1})=>{const l={details:"details",summary:"summary",...(0,n.R)()},[o,d]=(0,r.useState)(c);return(0,a.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&s]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>SecurityEvent.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"securityeventnamestring--",level:4},{value:'<code>SecurityEvent.<b>createdAt</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"securityeventcreatedatfloat--",level:4},{value:'<code>SecurityEvent.<b>verified</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"securityeventverifiedboolean-",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type SecurityEvent {\n  name: String!\n  createdAt: Float!\n  verified: Boolean\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"securityeventnamestring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SecurityEvent.",(0,a.jsx)("b",{children:"name"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.h4,{id:"securityeventcreatedatfloat--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SecurityEvent.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/scalars/float",children:(0,a.jsx)(t.code,{children:"Float!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.h4,{id:"securityeventverifiedboolean-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SecurityEvent.",(0,a.jsx)("b",{children:"verified"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/scalars/boolean",children:(0,a.jsx)(t.code,{children:"Boolean"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/objects/account",children:(0,a.jsx)(t.code,{children:"Account"})}),"  ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>l});var a=s(96540);const n={},r=a.createContext(n);function c(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);