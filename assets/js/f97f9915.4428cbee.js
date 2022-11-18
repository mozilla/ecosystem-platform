"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[1845],{83307:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>x,frontMatter:()=>f,metadata:()=>y,toc:()=>N});var n=a(87462),s=a(67294),l=a(3905),o=(a(16758),a(86010)),r=a(72389),i=a(67392),p=a(7094),u=a(12466);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:a,block:l,defaultValue:r,values:m,groupId:h,className:k}=e,g=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,i.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===r?r:r??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,p.U)(),[w,x]=(0,s.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=h){const e=b[h];null!=e&&e!==w&&f.some((t=>t.value===e))&&x(e)}const D=e=>{const t=e.currentTarget,a=T.indexOf(t),n=f[a].value;n!==w&&(C(t),x(n),null!=h&&N(h,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return s.createElement("div",{className:(0,o.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},k)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:S,onClick:D},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,s.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,r.Z)();return s.createElement(m,(0,n.Z)({key:String(t)},e))}const k="tabItem_Ymn6";function g(e){let{children:t,hidden:a,className:n}=e;return s.createElement("div",{role:"tabpanel",className:(0,o.Z)(k,n),hidden:a},t)}const f={title:"Development Setup"},v=void 0,y={unversionedId:"tutorials/development-setup",id:"tutorials/development-setup",title:"Development Setup",description:"Getting Started",source:"@site/docs/tutorials/development-setup.mdx",sourceDirName:"tutorials",slug:"/tutorials/development-setup",permalink:"/ecosystem-platform/tutorials/development-setup",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/tutorials/development-setup.mdx",tags:[],version:"current",frontMatter:{title:"Development Setup"},sidebar:"docs",previous:{title:"Using APIs",permalink:"/ecosystem-platform/relying-parties/reference/using-apis"},next:{title:"Subscription Platform",permalink:"/ecosystem-platform/tutorials/subscription-platform"}},b={},N=[{value:"Getting Started",id:"getting-started",level:2},{value:"Handy commands",id:"handy-commands",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"Secrets",id:"secrets",level:2},{value:"Testing",id:"testing",level:2},{value:"Test all or some packages",id:"test-all-or-some-packages",level:3},{value:"Functional Playwright Tests",id:"functional-playwright-tests",level:3},{value:"Emulating a CI environment",id:"emulating-a-ci-environment",level:3},{value:"Contributing",id:"contributing",level:2}],w={toc:N};function x(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\ud83d\udc4b Just a heads up - FxA has a lot of moving parts, and there are plenty of areas that may cause headaches when getting set up. If you get stuck feel free to ",(0,l.kt)("a",{parentName:"p",href:"/#lets-chat"},"reach out")," and we'll do our best to help.")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Manually install the ",(0,l.kt)("a",{parentName:"p",href:"#dependencies"},"system dependencies"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Clone this repository:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/mozilla/fxa.git\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter the directory, install Yarn dependencies, and start everything up:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd fxa\nyarn install\nyarn start\n")),(0,l.kt)("admonition",{parentName:"li",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"yarn start")," starts up ",(0,l.kt)("strong",{parentName:"p"},"all")," required services via PM2. This includes Redis, MySQL, and Memcached. It is recommended that you don't run these services yourself, or occupy any of the server ports (check out our ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/search?type=code&q=repo:mozilla/fxa+filename:pm2.config.js+filename:infrastructure.config.js"},"PM2 configs"),"). Doing so may result in errors."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Once your services have all started up you should now be able to ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:3030"},"visit FxA\nlocally"),". Next up you may want to ",(0,l.kt)("a",{parentName:"p",href:"../how-tos/creating-an-account-locally"},"create an account"),"."))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"FxA should only be accessed locally using the ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost")," host, and not via ",(0,l.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),".")),(0,l.kt)("h3",{id:"handy-commands"},"Handy commands"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unitech/PM2"},"PM2")," is used to control services locally. Use the CLI to control and inspect services:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Start all services\nyarn start\n\n# Stop all services\nyarn stop\n\n# Display logs for all services\nyarn pm2 logs\n\n# Display logs for just the `auth` service\nyarn pm2 logs auth\n\n# Restart the `mysql` service\nyarn pm2 restart mysql\n\n# Stop the `content` service\nyarn pm2 stop content\n")),(0,l.kt)("p",null,"Check out the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unitech/PM2"},"PM2 docs")," for more commands. If\nyou're using VS Code there is also a ",(0,l.kt)("a",{parentName:"p",href:"../how-tos/using-vscode-with-fxa"},"handy extension")," for managing PM2 services."),(0,l.kt)("p",null,"Additionally, be sure to check out the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/search?q=package.json"},(0,l.kt)("inlineCode",{parentName:"a"},"package.json"))," files in both the root and individual packages to see all available commands."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To avoid wasting computer resources while not working on FxA make sure to stop the servers using ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn stop"),". Once you are back working on FxA just use the ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn start")," command to bring the servers back up.")),(0,l.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[TODO common issues]")),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Looking for how to manage Yarn dependencies? ",(0,l.kt)("a",{parentName:"p",href:"how-tos/managing-yarn-dependencies"},"Click here")," to learn more.")),(0,l.kt)("p",null,"Select your operating system to install the required dependencies for developing FxA. The instructions are intended to be followed in order."),(0,l.kt)(h,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(g,{value:"mac",label:"macOS",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Node.js can be installed in a few ways (including using the ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"installer"),"). The following commands install the latest version, but you should check out ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/.nvmrc"},(0,l.kt)("inlineCode",{parentName:"a"},".nvmrc"))," to see the specific version FxA expects (YMMV using versions greater than it):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# via nvm (recommended) - https://github.com/nvm-sh/nvm\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash\nnvm install node\n\n# via Bash\ncurl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE \'s|.*>node-(.*)\\.pkg</a>.*|\\1|p\')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"\n\n# via Brew\nbrew install node\n')),(0,l.kt)("p",null,"Next, use the command line to install the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Git (via XCode)\nxcode-select --install\n\n# Python deps\nsudo easy_install pip && sudo pip install virtualenv\n\n# Rust\ncurl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain nightly --profile default\n\n# Yarn (via NPM)\nnpm install -g yarn\n")),(0,l.kt)("p",null,"Finally, manually install the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/mac/install/"},"Docker Desktop")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.java.com/en/download/"},"Java")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gmplib.org/#DOWNLOAD"},"libgmp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/quickstart#mac"},"Google Cloud SDK CLI")))),(0,l.kt)(g,{value:"ubuntu",label:"Ubuntu",mdxType:"TabItem"},(0,l.kt)("p",null,"Start by installing some essentials:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Git, curl, libgmp, Java, Python deps, Firefox, + more\nsudo apt-get install git curl build-essential python-virtualenv python-dev pkg-config libssl-dev libgmp3-dev openjdk-11-jre firefox\n\n# Rust\ncurl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain nightly --profile default\n")),(0,l.kt)("p",null,"Node.js can be installed in a few ways (including using the ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"installer"),"). The following commands install the latest version, but you should check out ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/.nvmrc"},(0,l.kt)("inlineCode",{parentName:"a"},".nvmrc"))," to see the specific version FxA expects (YMMV using versions greater than it):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# via nvm (recommended) - https://github.com/nvm-sh/nvm\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash\nnvm install node\n\n# via NodeSource\ncurl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -\nsudo apt-get install -y nodejs\n")),(0,l.kt)("p",null,"With Node + NPM installed you can now install Yarn:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g yarn\n")),(0,l.kt)("p",null,"Finally, manually install the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/"},"Docker Desktop")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Additional Docker notes"),"Docker commands require sudo, to avoid it, follow steps below:",(0,l.kt)("p",{parentName:"li"},"  Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"docker")," group if it doesn't already exist:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo groupadd docker\n")),(0,l.kt)("p",{parentName:"li"},"  Add the connected user ",(0,l.kt)("inlineCode",{parentName:"p"},"$USER")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"docker")," group"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo gpasswd -a $USER docker\n")),(0,l.kt)("p",{parentName:"li"},"  Restart the ",(0,l.kt)("inlineCode",{parentName:"p"},"docker")," daemon"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo service docker restart\n")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/quickstart#deb"},"Google Cloud SDK CLI"))))),(0,l.kt)(g,{value:"win",label:"Windows",mdxType:"TabItem"},(0,l.kt)("p",null,"Start by installing ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-ca/windows/wsl/"},"Windows Subsystem for Linux"),"."),(0,l.kt)("p",null,"Follow the Ubuntu instructions for installing essentials and Node via CLI."),(0,l.kt)("p",null,"Finally, manually install the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/windows/install/"},"Docker Desktop")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/quickstart#windows"},"Google Cloud SDK CLI"))))),(0,l.kt)("h2",{id:"secrets"},"Secrets"),(0,l.kt)("p",null,"When developing locally you may need to set up some secrets in order to effectively work with certain services. These secrets are managed at the package level."),(0,l.kt)("p",null,"Check out the Secrets section in the following package documentation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-auth-server#secrets"},"fxa-auth-server")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-payments-server#secrets"},"fxa-payments-server"))),(0,l.kt)("h2",{id:"testing"},"Testing"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"While it is possible to run the entire code base's test suite, in development you'll likely want to run a specific test or a subset of tests. Please refer to each package's documentation for detailed instructions on how to test its respective code.")),(0,l.kt)("h3",{id:"test-all-or-some-packages"},"Test all or some packages"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"You might need to run ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn start infrastructure")," to start services before running tests.")),(0,l.kt)("p",null,"From the root directory you may test all or some FxA packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Test only `fxa-shared`\nyarn test fxa-shared\n\n# Test `fxa-shared` and `fxa-auth-server`\nyarn test fxa-shared fxa-auth-server\n\n# Test all packages\nyarn test all\n")),(0,l.kt)("p",null,"The above commands invoke the same tests that CI uses, and is not necessarily the same as running yarn test in any given package."),(0,l.kt)("h3",{id:"functional-playwright-tests"},"Functional Playwright Tests"),(0,l.kt)("p",null,"You can run functional tests that emulate user behavior. This is a good final pass for any change that affects the UI. It can also save lots of time during development, because running the functional test is quite fast. Note that functional tests are not a replacement for unit tests, so use them judiciously."),(0,l.kt)("p",null,"Make sure the stack has been started and is running (",(0,l.kt)("inlineCode",{parentName:"p"},"yarn start"),"). From here, there are a few variants:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Run tests in headless mode\nyarn workspace functional-tests test\n\n# Run tests in debug mode allowing step through of each test stage. Note, using the --grep argument\n# or adding .only statements to tests cases is a good idea when debugging, since stepping though every\n# single tests is not desirable.\nyarn workspace functional-tests test --debug --grep=$test_name\n\n# Run tests in debug console mode, allowing browser debugging.\n# https://playwright.dev/docs/debug#selectors-in-developer-tools-console\nPWDEBUG=console yarn workspace functional-tests test\n\n# Target a specific test\nyarn test workspace functional-tests test --grep=$test_name\n")),(0,l.kt)("p",null,"For more info, see details at ",(0,l.kt)("a",{parentName:"p",href:"https://playwright.dev"},"https://playwright.dev"),"."),(0,l.kt)("h3",{id:"emulating-a-ci-environment"},"Emulating a CI environment"),(0,l.kt)("p",null,"It is possible to run various test suites (known as Jobs) acting as CircleCI. This is useful if you're encountering CI-specific failures. Please refer to ",(0,l.kt)("a",{parentName:"p",href:"#UPDATE-ME"},"this documentation"),"."),(0,l.kt)("h2",{id:"contributing"},"Contributing"),(0,l.kt)("p",null,"If you've got FxA all set up and running, congratulations! Those interested in helping to develop Firefox Accounts should check out the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/CONTRIBUTING.md"},"Contributing")," doc."))}x.isMDXComponent=!0}}]);