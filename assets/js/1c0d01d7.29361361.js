"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[577],{93340:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var s=n(85893),i=n(11151),r=n(67294);const a={id:"metrics-opt-input",title:"MetricsOptInput",hide_table_of_contents:!1},c=void 0,o={id:"gql-api/inputs/metrics-opt-input",title:"MetricsOptInput",description:"No description",source:"@site/docs/gql-api/inputs/metrics-opt-input.mdx",sourceDirName:"gql-api/inputs",slug:"/gql-api/inputs/metrics-opt-input",permalink:"/ecosystem-platform/gql-api/inputs/metrics-opt-input",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/inputs/metrics-opt-input.mdx",tags:[],version:"current",frontMatter:{id:"metrics-opt-input",title:"MetricsOptInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MetricsContext",permalink:"/ecosystem-platform/gql-api/inputs/metrics-context"},next:{title:"PasswordChangeInputOptions",permalink:"/ecosystem-platform/gql-api/inputs/password-change-input-options"}},l={},d=()=>{const e={span:"span",...(0,i.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,i.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,i.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>MetricsOptInput.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"metricsoptinputclientmutationidstring-",level:4},{value:'<code>MetricsOptInput.<b>state</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metricsoptinputstatestring--",level:4},{value:"Member of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,i.a)()},[o,l]=(0,r.useState)(a);return(0,s.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})};function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input MetricsOptInput {\n  clientMutationId: String\n  state: String!\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"metricsoptinputclientmutationidstring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MetricsOptInput.",(0,s.jsx)("b",{children:"clientMutationId"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"A unique identifier for the client performing the mutation."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"metricsoptinputstatestring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MetricsOptInput.",(0,s.jsx)("b",{children:"state"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(t.code,{children:"String!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:'The desired state: "in" or "out"'}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/gql-api/mutations/metrics-opt",children:(0,s.jsx)(t.code,{children:"metricsOpt"})}),"  ",(0,s.jsx)(u,{class:"secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var s=n(67294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);