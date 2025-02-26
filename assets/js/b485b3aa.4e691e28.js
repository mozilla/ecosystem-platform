"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[8935],{28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>l});var d=a(96540);const s={},c=d.createContext(s);function o(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),d.createElement(c.Provider,{value:n},e.children)}},85710:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>h,Bullet:()=>r,Details:()=>u,SpecifiedBy:()=>g,assets:()=>t,contentTitle:()=>i,default:()=>j,frontMatter:()=>l,metadata:()=>d,toc:()=>x});const d=JSON.parse('{"id":"gql-api/objects/signed-in-account-payload","title":"SignedInAccountPayload","description":"No description","source":"@site/docs/gql-api/objects/signed-in-account-payload.mdx","sourceDirName":"gql-api/objects","slug":"/gql-api/objects/signed-in-account-payload","permalink":"/ecosystem-platform/gql-api/objects/signed-in-account-payload","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/objects/signed-in-account-payload.mdx","tags":[],"version":"current","frontMatter":{"id":"signed-in-account-payload","title":"SignedInAccountPayload","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"Session","permalink":"/ecosystem-platform/gql-api/objects/session"},"next":{"title":"SignedUpAccountPayload","permalink":"/ecosystem-platform/gql-api/objects/signed-up-account-payload"}}');var s=a(74848),c=a(28453),o=a(96540);const l={id:"signed-in-account-payload",title:"SignedInAccountPayload",hide_table_of_contents:!1},i=void 0,t={},r=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),u=({dataOpen:e,dataClose:n,children:a,startOpen:d=!1})=>{const[c,l]=(0,o.useState)(d);return(0,s.jsxs)("details",{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&a]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>SignedInAccountPayload.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"signedinaccountpayloadclientmutationidstring-",level:4},{value:'<code>SignedInAccountPayload.<b>uid</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"signedinaccountpayloaduidstring--",level:4},{value:'<code>SignedInAccountPayload.<b>verified</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"signedinaccountpayloadverifiedboolean--",level:4},{value:'<code>SignedInAccountPayload.<b>authAt</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"signedinaccountpayloadauthatfloat--",level:4},{value:'<code>SignedInAccountPayload.<b>metricsEnabled</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"signedinaccountpayloadmetricsenabledboolean--",level:4},{value:'<code>SignedInAccountPayload.<b>keyFetchToken</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"signedinaccountpayloadkeyfetchtokenstring-",level:4},{value:'<code>SignedInAccountPayload.<b>verificationMethod</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"signedinaccountpayloadverificationmethodstring-",level:4},{value:'<code>SignedInAccountPayload.<b>verificationReason</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"signedinaccountpayloadverificationreasonstring-",level:4},{value:'<code>SignedInAccountPayload.<b>sessionToken</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"signedinaccountpayloadsessiontokenstring--",level:4},{value:"Returned by",id:"returned-by",level:3}];function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type SignedInAccountPayload {\n  clientMutationId: String\n  uid: String!\n  verified: Boolean!\n  authAt: Float!\n  metricsEnabled: Boolean!\n  keyFetchToken: String\n  verificationMethod: String\n  verificationReason: String\n  sessionToken: String!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"signedinaccountpayloadclientmutationidstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SignedInAccountPayload.",(0,s.jsx)("b",{children:"clientMutationId"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A unique identifier for the client performing the mutation."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"signedinaccountpayloaduidstring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SignedInAccountPayload.",(0,s.jsx)("b",{children:"uid"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"signedinaccountpayloadverifiedboolean--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SignedInAccountPayload.",(0,s.jsx)("b",{children:"verified"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/gql-api/scalars/boolean",children:(0,s.jsx)(n.code,{children:"Boolean!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"signedinaccountpayloadauthatfloat--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SignedInAccountPayload.",(0,s.jsx)("b",{children:"authAt"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/gql-api/scalars/float",children:(0,s.jsx)(n.code,{children:"Float!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"signedinaccountpayloadmetricsenabledboolean--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SignedInAccountPayload.",(0,s.jsx)("b",{children:"metricsEnabled"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/gql-api/scalars/boolean",children:(0,s.jsx)(n.code,{children:"Boolean!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"signedinaccountpayloadkeyfetchtokenstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SignedInAccountPayload.",(0,s.jsx)("b",{children:"keyFetchToken"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"signedinaccountpayloadverificationmethodstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SignedInAccountPayload.",(0,s.jsx)("b",{children:"verificationMethod"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"signedinaccountpayloadverificationreasonstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SignedInAccountPayload.",(0,s.jsx)("b",{children:"verificationReason"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"signedinaccountpayloadsessiontokenstring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SignedInAccountPayload.",(0,s.jsx)("b",{children:"sessionToken"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/gql-api/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/gql-api/mutations/sign-in",children:(0,s.jsx)(n.code,{children:"signIn"})}),"  ",(0,s.jsx)(h,{class:"secondary",text:"mutation"})]})]})}function j(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}}}]);