"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[8211],{69968:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=l(87462),n=(l(67294),l(3905));l(8209);const o={title:"Connecting to a local MySQL DB"},s=void 0,i={unversionedId:"how-tos/connecting-to-a-local-mysql-db",id:"how-tos/connecting-to-a-local-mysql-db",title:"Connecting to a local MySQL DB",description:"FxA has several databases, for example fxa, fxa_profile and pushbox. Sometimes changes need to be made to a database, or it is helpful to read local data for development.",source:"@site/docs/how-tos/connecting-to-a-local-mysql-db.md",sourceDirName:"how-tos",slug:"/how-tos/connecting-to-a-local-mysql-db",permalink:"/ecosystem-platform/how-tos/connecting-to-a-local-mysql-db",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/connecting-to-a-local-mysql-db.md",tags:[],version:"current",frontMatter:{title:"Connecting to a local MySQL DB"},sidebar:"docs",previous:{title:"CI Guidelines",permalink:"/ecosystem-platform/how-tos/ci-guidelines"},next:{title:"Creating an Account Locally",permalink:"/ecosystem-platform/how-tos/creating-an-account-locally"}},r={},c=[],m={toc:c},p="wrapper";function d(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"FxA has several databases, for example ",(0,n.kt)("inlineCode",{parentName:"p"},"fxa"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"fxa_profile")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"pushbox"),". Sometimes changes need to be made to a database, or it is helpful to read local data for development."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Prerequisites")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"FxA running locally"),(0,n.kt)("li",{parentName:"ul"},"Docker"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/en/mysql.html"},"mysql CLI"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If using the ",(0,n.kt)("inlineCode",{parentName:"li"},"mysql-client")," option below, this can be installed via Homebrew with ",(0,n.kt)("inlineCode",{parentName:"li"},"brew install mysql-client"),".")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps")),(0,n.kt)("p",null,"Execute an interactive shell on the MySQL DB container and start the MySQL shell:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yarn mysql\n")),(0,n.kt)("p",null,"OR"),(0,n.kt)("p",null,"Start the MySQL shell through the MySQL client:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -uroot --host=127.0.0.1 --port=3306\n")),(0,n.kt)("p",null,"Note: ",(0,n.kt)("inlineCode",{parentName:"p"},"mysql")," is located in the ",(0,n.kt)("inlineCode",{parentName:"p"},"mysql-client")," installation directory, e.g. at ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/local/opt/mysql-client/bin/mysql"),"."))}d.isMDXComponent=!0}}]);