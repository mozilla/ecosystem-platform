"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[2220],{87993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));n(8209);const s={title:"NPM / NX Guidelines"},r=void 0,l={unversionedId:"reference/npm-scripts-and-nx",id:"reference/npm-scripts-and-nx",title:"NPM / NX Guidelines",description:"This doc aims to provide guidelines for standardization of NPM scripts. Standardized approaches for building and testing let us run workspace commands across mono repo packages more effectively.",source:"@site/docs/reference/npm-scripts-and-nx.md",sourceDirName:"reference",slug:"/reference/npm-scripts-and-nx",permalink:"/ecosystem-platform/reference/npm-scripts-and-nx",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/npm-scripts-and-nx.md",tags:[],version:"current",frontMatter:{title:"NPM / NX Guidelines"},sidebar:"docs",previous:{title:"Mobile Specifics",permalink:"/ecosystem-platform/reference/mobile-specifics"},next:{title:"OAuth Details",permalink:"/ecosystem-platform/reference/oauth-details"}},o={},p=[{value:"Cacheable NX Script Names",id:"cacheable-nx-script-names",level:2},{value:"NX Task Dependencies",id:"nx-task-dependencies",level:2},{value:"Creating a library in NX",id:"creating-a-library-in-nx",level:2},{value:"General Formatting Of Script Names",id:"general-formatting-of-script-names",level:2},{value:"General Guidelines for Npm Scripts",id:"general-guidelines-for-npm-scripts",level:2},{value:"Follow Naming Conventions",id:"follow-naming-conventions",level:3},{value:"Avoid Shell Scripts When Possible!",id:"avoid-shell-scripts-when-possible",level:3},{value:"Keep Scripts Small and Targeted",id:"keep-scripts-small-and-targeted",level:3},{value:"Avoid custom scripts for existing options!",id:"avoid-custom-scripts-for-existing-options",level:3},{value:"Avoid relying on <code>postinstall</code> or <code>preinstall</code>",id:"avoid-relying-on-postinstall-or-preinstall",level:3},{value:"Don\u2019t cross reference scripts directly",id:"dont-cross-reference-scripts-directly",level:3},{value:"Stick with existing script names!",id:"stick-with-existing-script-names",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This doc aims to provide guidelines for standardization of NPM scripts. Standardized approaches for building and testing let us run workspace commands across mono repo packages more effectively. "),(0,i.kt)("p",null,"We have decided to use NX as our build system. For NX to cache effectively, it becomes even more important that we need to standardize our script names. "),(0,i.kt)("h2",{id:"cacheable-nx-script-names"},"Cacheable NX Script Names"),(0,i.kt)("p",null,"The following script names should be supported, when applicable, by our packages. They are considered cacheable and therefore once executed, if there are no changes in the package\u2019s source, they should effectively run immediately when re-executed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"build"),(0,i.kt)("li",{parentName:"ul"},"build-storybook"),(0,i.kt)("li",{parentName:"ul"},"lint"),(0,i.kt)("li",{parentName:"ul"},"prebuild"),(0,i.kt)("li",{parentName:"ul"},"test"),(0,i.kt)("li",{parentName:"ul"},"test-unit"),(0,i.kt)("li",{parentName:"ul"},"test-integration"),(0,i.kt)("li",{parentName:"ul"},"test-e2e")),(0,i.kt)("h2",{id:"nx-task-dependencies"},"NX Task Dependencies"),(0,i.kt)("p",null,"It\u2019s important to know that NX allows npm scripts to depend on one another. You can always generate the most up to date view of all known NX dependencies by running ",(0,i.kt)("inlineCode",{parentName:"p"},"nx graph"),". "),(0,i.kt)("p",null,"The dependencies between common targets can be seen in the ",(0,i.kt)("inlineCode",{parentName:"p"},"nx.json")," file in the project root. At the time of writing, the tree looks something like this, with children depend on parents:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"lint"),(0,i.kt)("li",{parentName:"ul"},"prebuild",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"build",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"restart"),(0,i.kt)("li",{parentName:"ul"},"start"),(0,i.kt)("li",{parentName:"ul"},"test-e2e"),(0,i.kt)("li",{parentName:"ul"},"test-integration"),(0,i.kt)("li",{parentName:"ul"},"test-unit"),(0,i.kt)("li",{parentName:"ul"},"build-storybook")))))),(0,i.kt)("p",null,"For example, if someone were to execute ",(0,i.kt)("inlineCode",{parentName:"p"},"nx run fxa-auth-server:start"),", which starts the auth server, then the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"prebuild")," tasks would be run automatically. Ideally their states are already in the NX cache, and these tasks come with zero penalty, however, if they are not in the NX cache, NX will execute these tasks and make sure they have completed prior to running the start script! "),(0,i.kt)("p",null,"These dependencies also work across packages. So if fxa-shared has changed, and we execute ",(0,i.kt)("inlineCode",{parentName:"p"},"nx run fxa-auth-server:restart"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"prebuild")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," will happen on ",(0,i.kt)("inlineCode",{parentName:"p"},"fxa-shared"),", prior to auth server being restarted!"),(0,i.kt)("h2",{id:"creating-a-library-in-nx"},"Creating a library in NX"),(0,i.kt)("p",null,"The following command can be used to create a Nx library in the monorepo: ",(0,i.kt)("inlineCode",{parentName:"p"},"nx g @nx/node:library <name of library> --directory=<path/to> --buildable")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"nx g @nx/node:library capability --directory=libs/payments --buildable")," will create a Nx library with the directory ",(0,i.kt)("inlineCode",{parentName:"li"},"libs/payments/capability"))),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--dry-run")," flag to see what will be generated."),(0,i.kt)("p",null,"After generating the Nx library, you will also need to make the following changes in the library (see other libraries in the monorepo for examples):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rename the job in ",(0,i.kt)("inlineCode",{parentName:"li"},"project.json")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"test-unit")),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"rootDir")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"targets")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"build")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"options")," of the ",(0,i.kt)("inlineCode",{parentName:"li"},"project.json"))),(0,i.kt)("h2",{id:"general-formatting-of-script-names"},"General Formatting Of Script Names"),(0,i.kt)("p",null,"We will use dashes to separate subtasks. i.e. build-ts or test-unit. We want to group similar tasks together, so use prefixes accordingly. For example build-ts is preferred over ts-build. This way if other types of assets need to be built, they will be structured in a similar way and will be grouped logically when put into alphabetical order."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We should be intentional with the use of ",(0,i.kt)("inlineCode",{parentName:"p"},":")," characters in script names. For example, test:watch isn't a good name. It turns out that adding a colon character makes the command globally runnable. So in general, we should not use this notation. Furthermore nx uses colons to help target projects and project configs, so we should avoid using them to avoid confusion there.")),(0,i.kt)("h2",{id:"general-guidelines-for-npm-scripts"},"General Guidelines for Npm Scripts"),(0,i.kt)("h3",{id:"follow-naming-conventions"},"Follow Naming Conventions"),(0,i.kt)("p",null,"This has already been mentioned, but in a mono repo consistency is king. We want npm scripts names to be consistent and predictable across all packages. If you need a new type of script, ping the fxa-team channel and get feedback on what to call it."),(0,i.kt)("h3",{id:"avoid-shell-scripts-when-possible"},"Avoid Shell Scripts When Possible!"),(0,i.kt)("p",null,"We\u2019d like to avoid shell scripts from our npm scripts. There are few reasons for this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Shell scripts are difficult to test"),(0,i.kt)("li",{parentName:"ul"},"Shell scripts don\u2019t work on all operating systems, or even worse from shell to shell."),(0,i.kt)("li",{parentName:"ul"},"Shell scripts encourage branching logic and special cases that have to be understood"),(0,i.kt)("li",{parentName:"ul"},"Oftentimes shell scripts obscure standard functionality of the underlying library they invoke.")),(0,i.kt)("p",null,"In the event a script like thing is needed we should look to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"See if there\u2019s something else that can facilitate, ie grunt, rescripts, ect\u2026"),(0,i.kt)("li",{parentName:"ul"},"Write a .cjs or .mjs script that can be put under test and is system agnostic.")),(0,i.kt)("h3",{id:"keep-scripts-small-and-targeted"},"Keep Scripts Small and Targeted"),(0,i.kt)("p",null,"We\u2019d like to keep scripts targeted. Lots of dependencies between scripts is not necessary, keeping scripts small and to the point makes it easier to compose actions. Ideally each script has a single purpose. Note, that now that we are using NX, we can also leverage nx to manage script dependencies. "),(0,i.kt)("p",null,"For example, we can require that all build operations run the prebuild operation first, and furthermore require that all downstream projects run first. This extra ability to define dependencies between scripts really helps keeping the scripts small and targeted! Take advantage of this whenever possible."),(0,i.kt)("h3",{id:"avoid-custom-scripts-for-existing-options"},"Avoid custom scripts for existing options!"),(0,i.kt)("p",null,"We\u2019d like to avoid creating scripts for specific options. For example, consider this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    "test:watch": "jest --watch",\n    "test:cov": "jest --coverage",\n')),(0,i.kt)("p",null,"This could simply be ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),", and then the user could supply the extra arguments. For example with yarn: ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn test \u2013 \u2013watch")," or with nx: ",(0,i.kt)("inlineCode",{parentName:"p"},"nx run fxa-settings:test --skip-nx-cache -- --watchAll=true"),". This keeps our scripts simple and flexible. Common usages should be documented in the readme file for those who aren\u2019t as familiar with the cli options of the underlying packages. Most packages have pretty decent behaviors out of the box. If a bunch of options are required, a step back might be necessary to ask why."),(0,i.kt)("p",null,"Use environment variables and config to target dev no dev operations. For example rather than having a start-prod script, simply make sure that the start script can be configured."),(0,i.kt)("h3",{id:"avoid-relying-on-postinstall-or-preinstall"},"Avoid relying on ",(0,i.kt)("inlineCode",{parentName:"h3"},"postinstall")," or ",(0,i.kt)("inlineCode",{parentName:"h3"},"preinstall")),(0,i.kt)("p",null,"Don\u2019t abuse ",(0,i.kt)("inlineCode",{parentName:"p"},"postinstall")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"preinstall"),". These are very specific tasks that get run automatically by yarn / npm. The danger here is two fold."),(0,i.kt)("p",null,"First, since these tasks happen implicitly, they are often overlooked or forgotten. There were a lot of extra build operations occurring in our CI pipelines because of his. Second, because they happen automatically, we don\u2019t have a ton of control over them. There are situations where a postinstall makes sense, but this is primarily for third party packages that need to compile system libraries after installation, not for simply setting of string events in a mono repo after install. See ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/advanced/lifecycle-scripts#a-note-about-postinstall"},"this")," for more info about not abusing post install."),(0,i.kt)("p",null,"Rather relying on post install, we should simply run ",(0,i.kt)("inlineCode",{parentName:"p"},"nx run-many -t build \u2013all")," after switching branches. This can even be done with a git hook if a seamless behavior is desired when switching between branches."),(0,i.kt)("h3",{id:"dont-cross-reference-scripts-directly"},"Don\u2019t cross reference scripts directly"),(0,i.kt)("p",null,"Now that we have NX, we should not see something like this ",(0,i.kt)("inlineCode",{parentName:"p"},' "build": "tsc --build ../fxa-react &&...'),". NX can wrangle these dependencies for us!"),(0,i.kt)("h3",{id:"stick-with-existing-script-names"},"Stick with existing script names!"),(0,i.kt)("p",null,"Here\u2019s a run down of our current sanctioned script names. Before coming up with your own script name, check this list. If you need a new script name, that\u2019s fine, but add it to the list and document the purpose."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"build")," - Top level build command, executes build-* commands."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"build-ts")," - Build typescript"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"build-css")," - Builds tailwind, sass, etc\u2026 and produced css bundles"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"build-js")," - Builds / bundles js"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"build-react")," - Builds / bundles react"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"build-storybook")," - Generates storybooks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"build-l10n")," - Creates l10n assets and places them in correct location"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"build-l10n-for-test")," - Creates l10n assets specific for testing new language strings"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"build-legal")," - Creates legal assets and places them in the correct location"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"build-finalize")," - Any extra post build steps that are required"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"format")," - Audio formats / pretties code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"l10n-prime")," - Pulls latest l10n resources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"l10n-bundle")," - Bundles l10n files files and places them in the correct location"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"l10n-merge")," - Merges in l10n files with existing l10n strings"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"l10n-tos-pp")," - Legacy l10n process"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"legal-prime")," - Pulls latest legal resources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"lint")," - Lints code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"test")," - Runs all test suites"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"test-unit")," - Runs unit tests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"test-integration")," - Runs integration tests")))}u.isMDXComponent=!0}}]);