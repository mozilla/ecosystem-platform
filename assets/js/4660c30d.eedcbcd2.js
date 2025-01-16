"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[1649],{60818:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>a,Details:()=>g,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>b});const c=JSON.parse('{"id":"gql-api/types/inputs/reject-unblock-code-input","title":"RejectUnblockCodeInput","description":"No description","source":"@site/docs/gql-api/types/inputs/reject-unblock-code-input.mdx","sourceDirName":"gql-api/types/inputs","slug":"/gql-api/types/inputs/reject-unblock-code-input","permalink":"/ecosystem-platform/gql-api/types/inputs/reject-unblock-code-input","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/types/inputs/reject-unblock-code-input.mdx","tags":[],"version":"current","frontMatter":{"id":"reject-unblock-code-input","title":"RejectUnblockCodeInput"},"sidebar":"schemaSidebar","previous":{"title":"RecoveryKeyBundleInput","permalink":"/ecosystem-platform/gql-api/types/inputs/recovery-key-bundle-input"},"next":{"title":"SendSessionVerificationInput","permalink":"/ecosystem-platform/gql-api/types/inputs/send-session-verification-input"}}');var s=n(74848),o=n(28453),l=n(96540);const i={id:"reject-unblock-code-input",title:"RejectUnblockCodeInput"},d=void 0,r={},a=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:t,children:n,startOpen:c=!1})=>{const[o,i]=(0,l.useState)(c);return(0,s.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>RejectUnblockCodeInput.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"rejectunblockcodeinputclientmutationidstring-",level:4},{value:'<code>RejectUnblockCodeInput.<b>uid</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rejectunblockcodeinputuidstring--",level:4},{value:'<code>RejectUnblockCodeInput.<b>unblockCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rejectunblockcodeinputunblockcodestring--",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input RejectUnblockCodeInput {\n  clientMutationId: String\n  uid: String!\n  unblockCode: String!\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"rejectunblockcodeinputclientmutationidstring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RejectUnblockCodeInput.",(0,s.jsx)("b",{children:"clientMutationId"})]})}),(0,s.jsx)(a,{}),(0,s.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.p,{children:"A unique identifier for the client performing the mutation."}),"\n",(0,s.jsxs)(t.h4,{id:"rejectunblockcodeinputuidstring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RejectUnblockCodeInput.",(0,s.jsx)("b",{children:"uid"})]})}),(0,s.jsx)(a,{}),(0,s.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.h4,{id:"rejectunblockcodeinputunblockcodestring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RejectUnblockCodeInput.",(0,s.jsx)("b",{children:"unblockCode"})]})}),(0,s.jsx)(a,{}),(0,s.jsx)(t.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/ecosystem-platform/gql-api/operations/mutations/reject-unblock-code",children:(0,s.jsx)(t.code,{children:"rejectUnblockCode"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var c=n(96540);const s={},o=c.createContext(s);function l(e){const t=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),c.createElement(o.Provider,{value:t},e.children)}}}]);