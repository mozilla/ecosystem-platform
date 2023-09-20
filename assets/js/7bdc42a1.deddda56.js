"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[8725],{96706:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>c,assets:()=>r,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>d,toc:()=>f});var o=n(87462),i=n(67294),s=n(3905);n(8209);const a={id:"session-verify-code-input",title:"SessionVerifyCodeInput",hide_table_of_contents:!1},l=void 0,d={unversionedId:"gql-api/inputs/session-verify-code-input",id:"gql-api/inputs/session-verify-code-input",title:"SessionVerifyCodeInput",description:"No description",source:"@site/docs/gql-api/inputs/session-verify-code-input.mdx",sourceDirName:"gql-api/inputs",slug:"/gql-api/inputs/session-verify-code-input",permalink:"/ecosystem-platform/gql-api/inputs/session-verify-code-input",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/inputs/session-verify-code-input.mdx",tags:[],version:"current",frontMatter:{id:"session-verify-code-input",title:"SessionVerifyCodeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SessionReauthOptionsInput",permalink:"/ecosystem-platform/gql-api/inputs/session-reauth-options-input"},next:{title:"SessionVerifyCodeOptionsInput",permalink:"/ecosystem-platform/gql-api/inputs/session-verify-code-options-input"}},r={},p=()=>(0,s.kt)(i.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,s.kt)(i.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,s.kt)(i.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SessionVerifyCodeInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sessionverifycodeinputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SessionVerifyCodeInput.<b>code</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sessionverifycodeinputbcodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SessionVerifyCodeInput.<b>options</b></code><Bullet /><code>SessionVerifyCodeOptionsInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-sessionverifycodeinputboptionsbcodesessionverifycodeoptionsinput--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:l=!1}=e;const[d,r]=(0,i.useState)(l);return(0,s.kt)("details",(0,o.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&a)},g={Bullet:p,SpecifiedBy:c,Badge:u,toc:f,Details:m},y="wrapper";function k(e){let{components:t,...n}=e;return(0,s.kt)(y,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"input SessionVerifyCodeInput {\n  clientMutationId: String\n  code: String!\n  options: SessionVerifyCodeOptionsInput!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-sessionverifycodeinputbclientmutationidbcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"SessionVerifyCodeInput.",(0,s.kt)("b",null,"clientMutationId"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-sessionverifycodeinputbcodebcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"SessionVerifyCodeInput.",(0,s.kt)("b",null,"code"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The code to check")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-sessionverifycodeinputboptionsbcodesessionverifycodeoptionsinput--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"SessionVerifyCodeInput.",(0,s.kt)("b",null,"options"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/gql-api/inputs/session-verify-code-options-input"},(0,s.kt)("inlineCode",{parentName:"a"},"SessionVerifyCodeOptionsInput!"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/gql-api/mutations/verify-code"},(0,s.kt)("inlineCode",{parentName:"a"},"verifyCode")),"  ",(0,s.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);