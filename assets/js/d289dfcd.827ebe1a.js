"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[1939],{28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>s});var t=a(96540);const c={},l=t.createContext(c);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(l.Provider,{value:n},e.children)}},31683:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>h,Bullet:()=>r,Details:()=>b,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>g});const t=JSON.parse('{"id":"gql-api/objects/linked-account","title":"LinkedAccount","description":"No description","source":"@site/docs/gql-api/objects/linked-account.mdx","sourceDirName":"gql-api/objects","slug":"/gql-api/objects/linked-account","permalink":"/ecosystem-platform/gql-api/objects/linked-account","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/objects/linked-account.mdx","tags":[],"version":"current","frontMatter":{"id":"linked-account","title":"LinkedAccount","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"LegalDoc","permalink":"/ecosystem-platform/gql-api/objects/legal-doc"},"next":{"title":"Location","permalink":"/ecosystem-platform/gql-api/objects/location"}}');var c=a(74848),l=a(28453),o=a(96540);const s={id:"linked-account",title:"LinkedAccount",hide_table_of_contents:!1},d=void 0,i={},r=()=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{className:e.class,children:e.text})}),b=({dataOpen:e,dataClose:n,children:a,startOpen:t=!1})=>{const[l,s]=(0,o.useState)(t);return(0,c.jsxs)("details",{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&a]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>LinkedAccount.<b>providerId</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"linkedaccountprovideridfloat--",level:4},{value:'<code>LinkedAccount.<b>enabled</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"linkedaccountenabledboolean--",level:4},{value:'<code>LinkedAccount.<b>authAt</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"linkedaccountauthatfloat--",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"No description"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-graphql",children:"type LinkedAccount {\n  providerId: Float!\n  enabled: Boolean!\n  authAt: Float!\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(n.h4,{id:"linkedaccountprovideridfloat--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["LinkedAccount.",(0,c.jsx)("b",{children:"providerId"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(n.a,{href:"/gql-api/scalars/float",children:(0,c.jsx)(n.code,{children:"Float!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(n.h4,{id:"linkedaccountenabledboolean--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["LinkedAccount.",(0,c.jsx)("b",{children:"enabled"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(n.a,{href:"/gql-api/scalars/boolean",children:(0,c.jsx)(n.code,{children:"Boolean!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(n.h4,{id:"linkedaccountauthatfloat--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["LinkedAccount.",(0,c.jsx)("b",{children:"authAt"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(n.a,{href:"/gql-api/scalars/float",children:(0,c.jsx)(n.code,{children:"Float!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.blockquote,{children:"\n"}),"\n",(0,c.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/gql-api/objects/account",children:(0,c.jsx)(n.code,{children:"Account"})}),"  ",(0,c.jsx)(h,{class:"secondary",text:"object"})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}}}]);