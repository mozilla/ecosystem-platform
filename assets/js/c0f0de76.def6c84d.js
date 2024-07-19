"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[8450],{92302:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var n=s(74848),i=s(28453),r=s(96540);const a={id:"metrics-opt-input",title:"MetricsOptInput"},c=void 0,o={id:"gql-api/types/inputs/metrics-opt-input",title:"MetricsOptInput",description:"No description",source:"@site/docs/gql-api/types/inputs/metrics-opt-input.mdx",sourceDirName:"gql-api/types/inputs",slug:"/gql-api/types/inputs/metrics-opt-input",permalink:"/ecosystem-platform/gql-api/types/inputs/metrics-opt-input",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/types/inputs/metrics-opt-input.mdx",tags:[],version:"current",frontMatter:{id:"metrics-opt-input",title:"MetricsOptInput"},sidebar:"schemaSidebar",previous:{title:"MetricsContext",permalink:"/ecosystem-platform/gql-api/types/inputs/metrics-context"},next:{title:"PasswordChangeInputOptions",permalink:"/ecosystem-platform/gql-api/types/inputs/password-change-input-options"}},l={},d=()=>{const e={span:"span",...(0,i.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,i.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,i.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>MetricsOptInput.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"metricsoptinputclientmutationidstring-",level:4},{value:'<code>MetricsOptInput.<b>state</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metricsoptinputstatestring--",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:t,children:s,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,i.R)()},[o,l]=(0,r.useState)(a);return(0,n.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&s]})};function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"input MetricsOptInput {\n  clientMutationId: String\n  state: String!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"metricsoptinputclientmutationidstring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetricsOptInput.",(0,n.jsx)("b",{children:"clientMutationId"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/gql-api/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"A unique identifier for the client performing the mutation."}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"metricsoptinputstatestring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetricsOptInput.",(0,n.jsx)("b",{children:"state"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/gql-api/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:'The desired state: "in" or "out"'}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/gql-api/api/mutations/metrics-opt",children:(0,n.jsx)(t.code,{children:"metricsOpt"})}),"  ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var n=s(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);