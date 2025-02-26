"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[3982],{92966:(e,o,t)=>{t.r(o),t.d(o,{Badge:()=>f,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>y});const s=JSON.parse('{"id":"gql-api/objects/password-forgot-verify-code-payload","title":"PasswordForgotVerifyCodePayload","description":"No description","source":"@site/docs/gql-api/objects/password-forgot-verify-code-payload.mdx","sourceDirName":"gql-api/objects","slug":"/gql-api/objects/password-forgot-verify-code-payload","permalink":"/ecosystem-platform/gql-api/objects/password-forgot-verify-code-payload","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/objects/password-forgot-verify-code-payload.mdx","tags":[],"version":"current","frontMatter":{"id":"password-forgot-verify-code-payload","title":"PasswordForgotVerifyCodePayload","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"PasswordForgotSendCodePayload","permalink":"/ecosystem-platform/gql-api/objects/password-forgot-send-code-payload"},"next":{"title":"RecoveryKeyBundlePayload","permalink":"/ecosystem-platform/gql-api/objects/recovery-key-bundle-payload"}}');var a=t(74848),r=t(28453),d=t(96540);const n={id:"password-forgot-verify-code-payload",title:"PasswordForgotVerifyCodePayload",hide_table_of_contents:!1},l=void 0,i={},c=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),f=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:o,children:t,startOpen:s=!1})=>{const[r,n]=(0,d.useState)(s);return(0,a.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),n((e=>!e))},style:{listStyle:"none"},children:r?e:o}),r&&t]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>PasswordForgotVerifyCodePayload.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"passwordforgotverifycodepayloadclientmutationidstring-",level:4},{value:'<code>PasswordForgotVerifyCodePayload.<b>accountResetToken</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"passwordforgotverifycodepayloadaccountresettokenstring--",level:4},{value:"Returned by",id:"returned-by",level:3}];function u(e){const o={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"No description"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-graphql",children:"type PasswordForgotVerifyCodePayload {\n  clientMutationId: String\n  accountResetToken: String!\n}\n"})}),"\n",(0,a.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(o.h4,{id:"passwordforgotverifycodepayloadclientmutationidstring-",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PasswordForgotVerifyCodePayload.",(0,a.jsx)("b",{children:"clientMutationId"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(o.a,{href:"/gql-api/scalars/string",children:(0,a.jsx)(o.code,{children:"String"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"A unique identifier for the client performing the mutation."}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"passwordforgotverifycodepayloadaccountresettokenstring--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PasswordForgotVerifyCodePayload.",(0,a.jsx)("b",{children:"accountResetToken"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(o.a,{href:"/gql-api/scalars/string",children:(0,a.jsx)(o.code,{children:"String!"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(o.blockquote,{children:"\n"}),"\n",(0,a.jsx)(o.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/gql-api/mutations/password-forgot-verify-code",children:(0,a.jsx)(o.code,{children:"passwordForgotVerifyCode"})}),"  ",(0,a.jsx)(f,{class:"secondary",text:"mutation"})]})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>d,x:()=>n});var s=t(96540);const a={},r=s.createContext(a);function d(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);