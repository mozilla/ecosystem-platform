"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[3157],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var i=n(96540);const s={},a=i.createContext(s);function l(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:t},e.children)}},83544:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"gql-api/inputs/email-input","title":"EmailInput","description":"No description","source":"@site/docs/gql-api/inputs/email-input.mdx","sourceDirName":"gql-api/inputs","slug":"/gql-api/inputs/email-input","permalink":"/ecosystem-platform/gql-api/inputs/email-input","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/inputs/email-input.mdx","tags":[],"version":"current","frontMatter":{"id":"email-input","title":"EmailInput","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"DestroySessionInput","permalink":"/ecosystem-platform/gql-api/inputs/destroy-session-input"},"next":{"title":"FinishSetupInput","permalink":"/ecosystem-platform/gql-api/inputs/finish-setup-input"}}');var s=n(74848),a=n(28453),l=n(96540);const r={id:"email-input",title:"EmailInput",hide_table_of_contents:!1},o=void 0,c={},d=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const[a,r]=(0,l.useState)(i);return(0,s.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:a?e:t}),a&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>EmailInput.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"emailinputclientmutationidstring-",level:4},{value:'<code>EmailInput.<b>email</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"emailinputemailstring--",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input EmailInput {\n  clientMutationId: String\n  email: String!\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"emailinputclientmutationidstring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["EmailInput.",(0,s.jsx)("b",{children:"clientMutationId"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"A unique identifier for the client performing the mutation."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"emailinputemailstring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["EmailInput.",(0,s.jsx)("b",{children:"email"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(t.code,{children:"String!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The email address to apply this operation to."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/gql-api/mutations/create-secondary-email",children:(0,s.jsx)(t.code,{children:"createSecondaryEmail"})}),"  ",(0,s.jsx)(u,{class:"secondary",text:"mutation"}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/gql-api/mutations/delete-secondary-email",children:(0,s.jsx)(t.code,{children:"deleteSecondaryEmail"})}),"  ",(0,s.jsx)(u,{class:"secondary",text:"mutation"}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/gql-api/mutations/resend-secondary-email-code",children:(0,s.jsx)(t.code,{children:"resendSecondaryEmailCode"})}),"  ",(0,s.jsx)(u,{class:"secondary",text:"mutation"}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/gql-api/mutations/update-primary-email",children:(0,s.jsx)(t.code,{children:"updatePrimaryEmail"})}),"  ",(0,s.jsx)(u,{class:"secondary",text:"mutation"})]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}}}]);