"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[288],{28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}},60561:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"gql-api/directives/skip","title":"skip","description":"Directs the executor to skip this field or fragment when the if argument is true.","source":"@site/docs/gql-api/directives/skip.mdx","sourceDirName":"gql-api/directives","slug":"/gql-api/directives/skip","permalink":"/ecosystem-platform/gql-api/directives/skip","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/directives/skip.mdx","tags":[],"version":"current","frontMatter":{"id":"skip","title":"skip","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"include","permalink":"/ecosystem-platform/gql-api/directives/include"},"next":{"title":"specifiedBy","permalink":"/ecosystem-platform/gql-api/directives/specified-by"}}');var i=s(74848),r=s(28453),a=s(96540);const o={id:"skip",title:"skip",hide_table_of_contents:!1},l=void 0,c={},d=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),f=({dataOpen:e,dataClose:t,children:s,startOpen:n=!1})=>{const[r,o]=(0,a.useState)(n);return(0,i.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&s]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>skip.<b>if</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"skipifboolean--",level:4}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Directs the executor to skip this field or fragment when the ",(0,i.jsx)(t.code,{children:"if"})," argument is true."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"directive @skip(\n  if: Boolean!\n) on \r\n  | FIELD\r\n  | FRAGMENT_SPREAD\r\n  | INLINE_FRAGMENT\n"})}),"\n",(0,i.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(t.h4,{id:"skipifboolean--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["skip.",(0,i.jsx)("b",{children:"if"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/gql-api/scalars/boolean",children:(0,i.jsx)(t.code,{children:"Boolean!"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Skipped when true."}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);