"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[5983],{28453:(e,a,s)=>{s.d(a,{R:()=>d,x:()=>c});var t=s(96540);const n={},o=t.createContext(n);function d(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(o.Provider,{value:a},e.children)}},80995:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>h,Bullet:()=>r,Details:()=>g,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>t,toc:()=>y});const t=JSON.parse('{"id":"gql-api/types/objects/session-reauthed-account-payload","title":"SessionReauthedAccountPayload","description":"No description","source":"@site/docs/gql-api/types/objects/session-reauthed-account-payload.mdx","sourceDirName":"gql-api/types/objects","slug":"/gql-api/types/objects/session-reauthed-account-payload","permalink":"/ecosystem-platform/gql-api/types/objects/session-reauthed-account-payload","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/types/objects/session-reauthed-account-payload.mdx","tags":[],"version":"current","frontMatter":{"id":"session-reauthed-account-payload","title":"SessionReauthedAccountPayload"},"sidebar":"schemaSidebar","previous":{"title":"SecurityEvent","permalink":"/ecosystem-platform/gql-api/types/objects/security-event"},"next":{"title":"SessionStatus","permalink":"/ecosystem-platform/gql-api/types/objects/session-status"}}');var n=s(74848),o=s(28453),d=s(96540);const c={id:"session-reauthed-account-payload",title:"SessionReauthedAccountPayload"},l=void 0,i={},r=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:a,children:s,startOpen:t=!1})=>{const[o,c]=(0,d.useState)(t);return(0,n.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&s]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>SessionReauthedAccountPayload.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sessionreauthedaccountpayloadclientmutationidstring-",level:4},{value:'<code>SessionReauthedAccountPayload.<b>uid</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sessionreauthedaccountpayloaduidstring--",level:4},{value:'<code>SessionReauthedAccountPayload.<b>verified</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sessionreauthedaccountpayloadverifiedboolean--",level:4},{value:'<code>SessionReauthedAccountPayload.<b>authAt</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sessionreauthedaccountpayloadauthatfloat--",level:4},{value:'<code>SessionReauthedAccountPayload.<b>metricsEnabled</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sessionreauthedaccountpayloadmetricsenabledboolean--",level:4},{value:'<code>SessionReauthedAccountPayload.<b>keyFetchToken</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sessionreauthedaccountpayloadkeyfetchtokenstring-",level:4},{value:'<code>SessionReauthedAccountPayload.<b>verificationMethod</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sessionreauthedaccountpayloadverificationmethodstring-",level:4},{value:'<code>SessionReauthedAccountPayload.<b>verificationReason</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sessionreauthedaccountpayloadverificationreasonstring-",level:4},{value:"Returned By",id:"returned-by",level:3}];function p(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type SessionReauthedAccountPayload {\n  clientMutationId: String\n  uid: String!\n  verified: Boolean!\n  authAt: Float!\n  metricsEnabled: Boolean!\n  keyFetchToken: String\n  verificationMethod: String\n  verificationReason: String\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"sessionreauthedaccountpayloadclientmutationidstring-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SessionReauthedAccountPayload.",(0,n.jsx)("b",{children:"clientMutationId"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(a.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,n.jsx)(a.code,{children:"String"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"A unique identifier for the client performing the mutation."}),"\n",(0,n.jsxs)(a.h4,{id:"sessionreauthedaccountpayloaduidstring--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SessionReauthedAccountPayload.",(0,n.jsx)("b",{children:"uid"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(a.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.h4,{id:"sessionreauthedaccountpayloadverifiedboolean--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SessionReauthedAccountPayload.",(0,n.jsx)("b",{children:"verified"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(a.a,{href:"/ecosystem-platform/gql-api/types/scalars/boolean",children:(0,n.jsx)(a.code,{children:"Boolean!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.h4,{id:"sessionreauthedaccountpayloadauthatfloat--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SessionReauthedAccountPayload.",(0,n.jsx)("b",{children:"authAt"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(a.a,{href:"/ecosystem-platform/gql-api/types/scalars/float",children:(0,n.jsx)(a.code,{children:"Float!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.h4,{id:"sessionreauthedaccountpayloadmetricsenabledboolean--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SessionReauthedAccountPayload.",(0,n.jsx)("b",{children:"metricsEnabled"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(a.a,{href:"/ecosystem-platform/gql-api/types/scalars/boolean",children:(0,n.jsx)(a.code,{children:"Boolean!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.h4,{id:"sessionreauthedaccountpayloadkeyfetchtokenstring-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SessionReauthedAccountPayload.",(0,n.jsx)("b",{children:"keyFetchToken"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(a.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,n.jsx)(a.code,{children:"String"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.h4,{id:"sessionreauthedaccountpayloadverificationmethodstring-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SessionReauthedAccountPayload.",(0,n.jsx)("b",{children:"verificationMethod"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(a.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,n.jsx)(a.code,{children:"String"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.h4,{id:"sessionreauthedaccountpayloadverificationreasonstring-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SessionReauthedAccountPayload.",(0,n.jsx)("b",{children:"verificationReason"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(a.a,{href:"/ecosystem-platform/gql-api/types/scalars/string",children:(0,n.jsx)(a.code,{children:"String"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/ecosystem-platform/gql-api/operations/mutations/reauth-session",children:(0,n.jsx)(a.code,{children:"reauthSession"})}),"  ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}}}]);