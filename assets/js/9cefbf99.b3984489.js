"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[9797],{90010:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>n,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>g});var s=a(87462),r=a(67294),o=a(3905);a(8209);const l={id:"create-password",title:"CreatePassword",hide_table_of_contents:!1},n=void 0,d={unversionedId:"gql-api/inputs/create-password",id:"gql-api/inputs/create-password",title:"CreatePassword",description:"No description",source:"@site/docs/gql-api/inputs/create-password.mdx",sourceDirName:"gql-api/inputs",slug:"/gql-api/inputs/create-password",permalink:"/ecosystem-platform/gql-api/inputs/create-password",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/inputs/create-password.mdx",tags:[],version:"current",frontMatter:{id:"create-password",title:"CreatePassword",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ChangeRecoveryCodesInput",permalink:"/ecosystem-platform/gql-api/inputs/change-recovery-codes-input"},next:{title:"CreateTotpInput",permalink:"/ecosystem-platform/gql-api/inputs/create-totp-input"}},i={},c=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreatePassword.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createpasswordbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreatePassword.<b>email</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createpasswordbemailbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreatePassword.<b>password</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createpasswordbpasswordbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:n=!1}=e;const[d,i]=(0,r.useState)(n);return(0,o.kt)("details",(0,s.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&l)},k={Bullet:c,SpecifiedBy:p,Badge:m,toc:g,Details:u};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreatePassword {\n  clientMutationId: String\n  email: String!\n  password: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createpasswordbclientmutationidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CreatePassword.",(0,o.kt)("b",null,"clientMutationId"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createpasswordbemailbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CreatePassword.",(0,o.kt)("b",null,"email"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Users email, used to hash password")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createpasswordbpasswordbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CreatePassword.",(0,o.kt)("b",null,"password"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The new password")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/gql-api/mutations/create-password"},(0,o.kt)("inlineCode",{parentName:"a"},"createPassword")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);