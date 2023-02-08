"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6039],{98618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));n(29420);const i={title:"Managing Yarn Dependencies"},s=void 0,p={unversionedId:"how-tos/managing-yarn-dependencies",id:"how-tos/managing-yarn-dependencies",title:"Managing Yarn Dependencies",description:"On Your Machine",source:"@site/docs/how-tos/managing-yarn-dependencies.md",sourceDirName:"how-tos",slug:"/how-tos/managing-yarn-dependencies",permalink:"/ecosystem-platform/how-tos/managing-yarn-dependencies",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/managing-yarn-dependencies.md",tags:[],version:"current",frontMatter:{title:"Managing Yarn Dependencies"},sidebar:"docs",previous:{title:"Using VS Code with FxA",permalink:"/ecosystem-platform/how-tos/using-vscode-with-fxa"},next:{title:"Connecting to a local MySQL DB",permalink:"/ecosystem-platform/how-tos/connecting-to-a-local-mysql-db"}},r={},l=[{value:"On Your Machine",id:"on-your-machine",level:2},{value:"Dependabot Pull Requests",id:"dependabot-pull-requests",level:2}],d={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"on-your-machine"},"On Your Machine"),(0,o.kt)("p",null,"FxA uses ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn")," to manage its Node dependencies. Follow the ",(0,o.kt)("a",{parentName:"p",href:"../tutorials/development-setup"},"Development Setup guide")," for how to install Yarn and the ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," command on your machine."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Once upon a time FxA used ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/commands/npm"},(0,o.kt)("inlineCode",{parentName:"a"},"npm"))," to manage its dependencies, which means you may come across documentation or commands that still reference its usage. In most cases you should be able to freely replace the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),", but it's worth learning about ",(0,o.kt)("a",{parentName:"p",href:"https://www.sitepoint.com/yarn-vs-npm/#comparingnpmandyarncommands"},"the differences")," between the two CLIs.")),(0,o.kt)("p",null,"We have a ",(0,o.kt)("em",{parentName:"p"},"lot")," of dependencies, and they're constantly updating, so be sure to occasionally run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install")," to stay up-to-date."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install")," is failing run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn -v")," and check that it is at least 1.22.0. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install -g yarn")," to update to the latest version if needed.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We have a script that can automatically detect changes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn.lock")," file and run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install")," when you check out a branch or pull in latest. To enable it set ",(0,o.kt)("inlineCode",{parentName:"p"},"FXA_AUTO_INSTALL=1"),".  If you don't enable it, you'll see a warning when changes are detected letting you know to run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install")," manually.")),(0,o.kt)("h2",{id:"dependabot-pull-requests"},"Dependabot Pull Requests"),(0,o.kt)("p",null,"We use GitHub's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates"},"Dependabot")," to automatically update our dependencies."),(0,o.kt)("p",null,"It ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/.github/dependabot.yml"},"runs daily"),", opening Pull Requests whenever a update is available for any of our many packages' dependencies. PRs will automatically request a review from the ",(0,o.kt)("inlineCode",{parentName:"p"},"@mozilla/fxa-devs")," GitHub group. FxA engineers are expected to occasionally pitch in with reviewing and merging these PRs."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/pulls?q=is:pr+is:open+sort:updated-desc+author:app/dependabot"},"Click here")," to see all open Dependabot PRs."))}m.isMDXComponent=!0}}]);