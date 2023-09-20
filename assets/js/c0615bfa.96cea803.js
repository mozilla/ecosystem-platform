"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[136],{87329:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=n(87462),i=n(67294),l=n(3905);n(8209);const o={id:"sign-in-input",title:"SignInInput",hide_table_of_contents:!1},s=void 0,d={unversionedId:"gql-api/inputs/sign-in-input",id:"gql-api/inputs/sign-in-input",title:"SignInInput",description:"No description",source:"@site/docs/gql-api/inputs/sign-in-input.mdx",sourceDirName:"gql-api/inputs",slug:"/gql-api/inputs/sign-in-input",permalink:"/ecosystem-platform/gql-api/inputs/sign-in-input",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/gql-api/inputs/sign-in-input.mdx",tags:[],version:"current",frontMatter:{id:"sign-in-input",title:"SignInInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SetupCartInput",permalink:"/ecosystem-platform/gql-api/inputs/setup-cart-input"},next:{title:"SignInOptionsInput",permalink:"/ecosystem-platform/gql-api/inputs/sign-in-options-input"}},r={},p=()=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,l.kt)(i.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SignInInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-signininputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignInInput.<b>authPW</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-signininputbauthpwbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignInInput.<b>email</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-signininputbemailbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignInInput.<b>options</b></code><Bullet /><code>SignInOptionsInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-signininputboptionsbcodesigninoptionsinput--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:s=!1}=e;const[d,r]=(0,i.useState)(s);return(0,l.kt)("details",(0,a.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&o)},b={Bullet:p,SpecifiedBy:g,Badge:c,toc:u,Details:m},k="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input SignInInput {\n  clientMutationId: String\n  authPW: String!\n  email: String!\n  options: SignInOptionsInput!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-signininputbclientmutationidbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SignInInput.",(0,l.kt)("b",null,"clientMutationId"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-signininputbauthpwbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SignInInput.",(0,l.kt)("b",null,"authPW"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-signininputbemailbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SignInInput.",(0,l.kt)("b",null,"email"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-signininputboptionsbcodesigninoptionsinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SignInInput.",(0,l.kt)("b",null,"options"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/gql-api/inputs/sign-in-options-input"},(0,l.kt)("inlineCode",{parentName:"a"},"SignInOptionsInput!"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/gql-api/mutations/sign-in"},(0,l.kt)("inlineCode",{parentName:"a"},"signIn")),"  ",(0,l.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);