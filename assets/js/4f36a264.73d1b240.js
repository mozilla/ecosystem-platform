"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[8757],{86907:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>g,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"gql-api/types/inputs/sign-in-input","title":"SignInInput","description":"No description","source":"@site/docs/gql-api/types/inputs/sign-in-input.mdx","sourceDirName":"gql-api/types/inputs","slug":"/gql-api/types/inputs/sign-in-input","permalink":"/ecosystem-platform/gql-api/types/inputs/sign-in-input","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/types/inputs/sign-in-input.mdx","tags":[],"version":"current","frontMatter":{"id":"sign-in-input","title":"SignInInput"},"sidebar":"schemaSidebar","previous":{"title":"SessionVerifyCodeOptionsInput","permalink":"/ecosystem-platform/gql-api/types/inputs/session-verify-code-options-input"},"next":{"title":"SignInOptionsInput","permalink":"/ecosystem-platform/gql-api/types/inputs/sign-in-options-input"}}');var i=t(74848),a=t(28453),l=t(96540);const o={id:"sign-in-input",title:"SignInInput"},d=void 0,r={},c=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),u=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const[a,o]=(0,l.useState)(s);return(0,i.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:a?e:n}),a&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>SignInInput.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"signininputclientmutationidstring-",level:4},{value:'<code>SignInInput.<b>authPW</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"signininputauthpwstring--",level:4},{value:'<code>SignInInput.<b>email</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"signininputemailstring--",level:4},{value:'<code>SignInInput.<b>options</b></code><Bullet></Bullet><code>SignInOptionsInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"signininputoptionssigninoptionsinput--",level:4},{value:"Member Of",id:"member-of",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"No description"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"input SignInInput {\n  clientMutationId: String\n  authPW: String!\n  email: String!\n  options: SignInOptionsInput!\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(n.h4,{id:"signininputclientmutationidstring-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["SignInInput.",(0,i.jsx)("b",{children:"clientMutationId"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(n.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,i.jsx)(n.code,{children:"String"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(n.p,{children:"A unique identifier for the client performing the mutation."}),"\n",(0,i.jsxs)(n.h4,{id:"signininputauthpwstring--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["SignInInput.",(0,i.jsx)("b",{children:"authPW"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(n.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,i.jsx)(n.code,{children:"String!"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(n.h4,{id:"signininputemailstring--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["SignInInput.",(0,i.jsx)("b",{children:"email"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(n.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,i.jsx)(n.code,{children:"String!"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(n.h4,{id:"signininputoptionssigninoptionsinput--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["SignInInput.",(0,i.jsx)("b",{children:"options"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(n.a,{href:"/ecosystem-platform/gql-api/types/inputs/sign-in-options-input",children:(0,i.jsx)(n.code,{children:"SignInOptionsInput!"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/ecosystem-platform/gql-api/operations/mutations/sign-in",children:(0,i.jsx)(n.code,{children:"signIn"})}),"  ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(96540);const i={},a=s.createContext(i);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);