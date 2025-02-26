"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[4255],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}},59410:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>a,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"gql-api/directives/include","title":"include","description":"Directs the executor to include this field or fragment only when the if argument is true.","source":"@site/docs/gql-api/directives/include.mdx","sourceDirName":"gql-api/directives","slug":"/gql-api/directives/include","permalink":"/ecosystem-platform/gql-api/directives/include","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/directives/include.mdx","tags":[],"version":"current","frontMatter":{"id":"include","title":"include","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"deprecated","permalink":"/ecosystem-platform/gql-api/directives/deprecated"},"next":{"title":"skip","permalink":"/ecosystem-platform/gql-api/directives/skip"}}');var i=n(74848),l=n(28453),r=n(96540);const c={id:"include",title:"include",hide_table_of_contents:!1},a=void 0,o={},d=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),f=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const[l,c]=(0,r.useState)(s);return(0,i.jsxs)("details",{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>include.<b>if</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"includeifboolean--",level:4}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Directs the executor to include this field or fragment only when the ",(0,i.jsx)(t.code,{children:"if"})," argument is true."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"directive @include(\n  if: Boolean!\n) on \r\n  | FIELD\r\n  | FRAGMENT_SPREAD\r\n  | INLINE_FRAGMENT\n"})}),"\n",(0,i.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(t.h4,{id:"includeifboolean--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["include.",(0,i.jsx)("b",{children:"if"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/gql-api/scalars/boolean",children:(0,i.jsx)(t.code,{children:"Boolean!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Included when true."}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);