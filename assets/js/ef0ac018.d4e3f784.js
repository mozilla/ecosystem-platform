"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[2582],{72761:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var i=n(85893),a=n(11151),s=n(67294);const l={id:"email-input",title:"EmailInput",hide_table_of_contents:!1},r=void 0,o={id:"gql-api/inputs/email-input",title:"EmailInput",description:"No description",source:"@site/docs/gql-api/inputs/email-input.mdx",sourceDirName:"gql-api/inputs",slug:"/gql-api/inputs/email-input",permalink:"/ecosystem-platform/gql-api/inputs/email-input",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/inputs/email-input.mdx",tags:[],version:"current",frontMatter:{id:"email-input",title:"EmailInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DestroySessionInput",permalink:"/ecosystem-platform/gql-api/inputs/destroy-session-input"},next:{title:"FinishSetupInput",permalink:"/ecosystem-platform/gql-api/inputs/finish-setup-input"}},c={},d=()=>{const e={span:"span",...(0,a.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,a.a)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,a.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>EmailInput.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"emailinputclientmutationidstring-",level:4},{value:'<code>EmailInput.<b>email</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"emailinputemailstring--",level:4},{value:"Member of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:t,children:n,startOpen:l=!1})=>{const r={details:"details",summary:"summary",...(0,a.a)()},[o,c]=(0,s.useState)(l);return(0,i.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(r.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input EmailInput {\n  clientMutationId: String\n  email: String!\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"emailinputclientmutationidstring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["EmailInput.",(0,i.jsx)("b",{children:"clientMutationId"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/gql-api/scalars/string",children:(0,i.jsx)(t.code,{children:"String"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"A unique identifier for the client performing the mutation."}),"\n"]}),"\n",(0,i.jsxs)(t.h4,{id:"emailinputemailstring--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["EmailInput.",(0,i.jsx)("b",{children:"email"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/gql-api/scalars/string",children:(0,i.jsx)(t.code,{children:"String!"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"The email address to apply this operation to."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/gql-api/mutations/create-secondary-email",children:(0,i.jsx)(t.code,{children:"createSecondaryEmail"})}),"  ",(0,i.jsx)(u,{class:"secondary",text:"mutation"}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/gql-api/mutations/delete-secondary-email",children:(0,i.jsx)(t.code,{children:"deleteSecondaryEmail"})}),"  ",(0,i.jsx)(u,{class:"secondary",text:"mutation"}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/gql-api/mutations/resend-secondary-email-code",children:(0,i.jsx)(t.code,{children:"resendSecondaryEmailCode"})}),"  ",(0,i.jsx)(u,{class:"secondary",text:"mutation"}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/gql-api/mutations/update-primary-email",children:(0,i.jsx)(t.code,{children:"updatePrimaryEmail"})}),"  ",(0,i.jsx)(u,{class:"secondary",text:"mutation"})]})]})}function g(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>l});var i=n(67294);const a={},s=i.createContext(a);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);