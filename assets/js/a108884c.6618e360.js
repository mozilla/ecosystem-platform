"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[4354],{73715:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>x});const n=JSON.parse('{"id":"gql-api/objects/account-reset-payload","title":"AccountResetPayload","description":"No description","source":"@site/docs/gql-api/objects/account-reset-payload.mdx","sourceDirName":"gql-api/objects","slug":"/gql-api/objects/account-reset-payload","permalink":"/ecosystem-platform/gql-api/objects/account-reset-payload","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/objects/account-reset-payload.mdx","tags":[],"version":"current","frontMatter":{"id":"account-reset-payload","title":"AccountResetPayload","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"verifyTotp","permalink":"/ecosystem-platform/gql-api/mutations/verify-totp"},"next":{"title":"AccountStatusPayload","permalink":"/ecosystem-platform/gql-api/objects/account-status-payload"}}');var s=a(74848),c=a(28453),o=a(96540);const l={id:"account-reset-payload",title:"AccountResetPayload",hide_table_of_contents:!1},d=void 0,r={},i=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:t,children:a,startOpen:n=!1})=>{const[c,l]=(0,o.useState)(n);return(0,s.jsxs)("details",{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&a]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>AccountResetPayload.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountresetpayloadclientmutationidstring-",level:4},{value:'<code>AccountResetPayload.<b>uid</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountresetpayloaduidstring-",level:4},{value:'<code>AccountResetPayload.<b>sessionToken</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountresetpayloadsessiontokenstring-",level:4},{value:'<code>AccountResetPayload.<b>verified</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"accountresetpayloadverifiedboolean-",level:4},{value:'<code>AccountResetPayload.<b>authAt</b></code><Bullet></Bullet><code>Float</code> <Badge class="badge badge--secondary"></Badge>',id:"accountresetpayloadauthatfloat-",level:4},{value:'<code>AccountResetPayload.<b>keyFetchToken</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountresetpayloadkeyfetchtokenstring-",level:4},{value:'<code>AccountResetPayload.<b>unwrapBKey</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountresetpayloadunwrapbkeystring-",level:4},{value:"Returned by",id:"returned-by",level:3}];function y(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"type AccountResetPayload {\n  clientMutationId: String\n  uid: String\n  sessionToken: String\n  verified: Boolean\n  authAt: Float\n  keyFetchToken: String\n  unwrapBKey: String\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"accountresetpayloadclientmutationidstring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountResetPayload.",(0,s.jsx)("b",{children:"clientMutationId"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"A unique identifier for the client performing the mutation."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"accountresetpayloaduidstring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountResetPayload.",(0,s.jsx)("b",{children:"uid"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(t.h4,{id:"accountresetpayloadsessiontokenstring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountResetPayload.",(0,s.jsx)("b",{children:"sessionToken"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(t.h4,{id:"accountresetpayloadverifiedboolean-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountResetPayload.",(0,s.jsx)("b",{children:"verified"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/gql-api/scalars/boolean",children:(0,s.jsx)(t.code,{children:"Boolean"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(t.h4,{id:"accountresetpayloadauthatfloat-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountResetPayload.",(0,s.jsx)("b",{children:"authAt"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/gql-api/scalars/float",children:(0,s.jsx)(t.code,{children:"Float"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(t.h4,{id:"accountresetpayloadkeyfetchtokenstring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountResetPayload.",(0,s.jsx)("b",{children:"keyFetchToken"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(t.h4,{id:"accountresetpayloadunwrapbkeystring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountResetPayload.",(0,s.jsx)("b",{children:"unwrapBKey"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/gql-api/mutations/account-reset",children:(0,s.jsx)(t.code,{children:"accountReset"})}),"  ",(0,s.jsx)(h,{class:"secondary",text:"mutation"})]})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>l});var n=a(96540);const s={},c=n.createContext(s);function o(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);