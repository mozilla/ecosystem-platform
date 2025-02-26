"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6539],{28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var t=i(96540);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}},68977:(e,n,i)=>{i.r(n),i.d(n,{Badge:()=>p,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"gql-api/inputs/sign-in-input","title":"SignInInput","description":"No description","source":"@site/docs/gql-api/inputs/sign-in-input.mdx","sourceDirName":"gql-api/inputs","slug":"/gql-api/inputs/sign-in-input","permalink":"/ecosystem-platform/gql-api/inputs/sign-in-input","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/inputs/sign-in-input.mdx","tags":[],"version":"current","frontMatter":{"id":"sign-in-input","title":"SignInInput","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"SetupCartInput","permalink":"/ecosystem-platform/gql-api/inputs/setup-cart-input"},"next":{"title":"SignInOptionsInput","permalink":"/ecosystem-platform/gql-api/inputs/sign-in-options-input"}}');var s=i(74848),a=i(28453),l=i(96540);const d={id:"sign-in-input",title:"SignInInput",hide_table_of_contents:!1},o=void 0,r={},c=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),u=({dataOpen:e,dataClose:n,children:i,startOpen:t=!1})=>{const[a,d]=(0,l.useState)(t);return(0,s.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:a?e:n}),a&&i]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>SignInInput.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"signininputclientmutationidstring-",level:4},{value:'<code>SignInInput.<b>authPW</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"signininputauthpwstring--",level:4},{value:'<code>SignInInput.<b>email</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"signininputemailstring--",level:4},{value:'<code>SignInInput.<b>options</b></code><Bullet></Bullet><code>SignInOptionsInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"signininputoptionssigninoptionsinput--",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"input SignInInput {\n  clientMutationId: String\n  authPW: String!\n  email: String!\n  options: SignInOptionsInput!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"signininputclientmutationidstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SignInInput.",(0,s.jsx)("b",{children:"clientMutationId"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A unique identifier for the client performing the mutation."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"signininputauthpwstring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SignInInput.",(0,s.jsx)("b",{children:"authPW"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"signininputemailstring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SignInInput.",(0,s.jsx)("b",{children:"email"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"signininputoptionssigninoptionsinput--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SignInInput.",(0,s.jsx)("b",{children:"options"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/gql-api/inputs/sign-in-options-input",children:(0,s.jsx)(n.code,{children:"SignInOptionsInput!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/gql-api/mutations/sign-in",children:(0,s.jsx)(n.code,{children:"signIn"})}),"  ",(0,s.jsx)(p,{class:"secondary",text:"mutation"})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}}}]);