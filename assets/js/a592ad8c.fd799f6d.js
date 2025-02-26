"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[1968],{28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var i=s(96540);const n={},a=i.createContext(n);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:t},e.children)}},95252:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"gql-api/api/directives/skip","title":"skip","description":"Directs the executor to skip this field or fragment when the if argument is true.","source":"@site/docs/gql-api/api/directives/skip.mdx","sourceDirName":"gql-api/api/directives","slug":"/gql-api/api/directives/skip","permalink":"/ecosystem-platform/gql-api/api/directives/skip","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/api/directives/skip.mdx","tags":[],"version":"current","frontMatter":{"id":"skip","title":"skip"},"sidebar":"schemaSidebar","previous":{"title":"include","permalink":"/ecosystem-platform/gql-api/api/directives/include"},"next":{"title":"accountReset","permalink":"/ecosystem-platform/gql-api/api/mutations/account-reset"}}');var n=s(74848),a=s(28453),r=s(96540);const o={id:"skip",title:"skip"},l=void 0,c={},d=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:t,children:s,startOpen:i=!1})=>{const[a,o]=(0,r.useState)(i);return(0,n.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:a?e:t}),a&&s]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>skip.<b>if</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"skipifboolean--",level:4}];function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Directs the executor to skip this field or fragment when the ",(0,n.jsx)(t.code,{children:"if"})," argument is true."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"directive @skip(\n  if: Boolean!\n) on \r\n  | FIELD\r\n  | FRAGMENT_SPREAD\r\n  | INLINE_FRAGMENT\n"})}),"\n",(0,n.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.h4,{id:"skipifboolean--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["skip.",(0,n.jsx)("b",{children:"if"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/gql-api/types/scalars/boolean",children:(0,n.jsx)(t.code,{children:"Boolean!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Skipped when true."}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}}}]);