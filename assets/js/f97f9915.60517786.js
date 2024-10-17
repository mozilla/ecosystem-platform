"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[377],{4212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>A,contentTitle:()=>N,default:()=>E,frontMatter:()=>S,metadata:()=>D,toc:()=>C});var s=t(74848),o=t(28453),a=t(96540),r=t(34164),l=t(23104),i=t(56347),c=t(205),d=t(57485),u=t(31682),h=t(70679);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:o}}=e;return{value:n,label:t,attributes:s,default:o}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=m(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[i,d]=f({queryString:t,groupId:s}),[u,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,h.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),x=(()=>{const e=i??u;return g({value:e,tabValues:o})?e:null})();(0,c.A)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),p(e)}),[d,p,o]),tabValues:o}}var y=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:o,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),s=i[t].value;s!==o&&(d(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...a,className:(0,r.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:o}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=x(e);return(0,s.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,s.jsx)(v,{...n,...e}),(0,s.jsx)(b,{...n,...e})]})}function k(e){const n=(0,y.A)();return(0,s.jsx)(w,{...e,children:p(e.children)},String(n))}const T={tabItem:"tabItem_Ymn6"};function I(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(T.tabItem,o),hidden:t,children:n})}const S={title:"Development Setup"},N=void 0,D={id:"tutorials/development-setup",title:"Development Setup",description:"Getting Started",source:"@site/docs/tutorials/development-setup.mdx",sourceDirName:"tutorials",slug:"/tutorials/development-setup",permalink:"/ecosystem-platform/tutorials/development-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/tutorials/development-setup.mdx",tags:[],version:"current",frontMatter:{title:"Development Setup"},sidebar:"docs",previous:{title:"Using APIs",permalink:"/ecosystem-platform/relying-parties/reference/using-apis"},next:{title:"Subscription Platform",permalink:"/ecosystem-platform/tutorials/subscription-platform"}},A={},C=[{value:"Getting Started",id:"getting-started",level:2},{value:"Step 1: Install the system dependencies",id:"step-1-install-the-system-dependencies",level:3},{value:"Step 2: Set up and run the code",id:"step-2-set-up-and-run-the-code",level:3},{value:"Step 3: Optional Additions",id:"step-3-optional-additions",level:3},{value:"Do you need a relying party to test with?",id:"do-you-need-a-relying-party-to-test-with",level:4},{value:"Do you want to test with 3rd party logins (e.g. Apple or Google)?",id:"do-you-want-to-test-with-3rd-party-logins-eg-apple-or-google",level:4},{value:"Do you need the payments services up and running?",id:"do-you-need-the-payments-services-up-and-running",level:4},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Handy commands",id:"handy-commands",level:3},{value:"Testing",id:"testing",level:2},{value:"Test all or some packages",id:"test-all-or-some-packages",level:3},{value:"Functional Playwright Tests",id:"functional-playwright-tests",level:3},{value:"Emulating a CI environment",id:"emulating-a-ci-environment",level:3},{value:"Contributing",id:"contributing",level:2}];function q(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\ud83d\udc4b Just a heads up - FxA has a lot of moving parts, and there are plenty of areas that may cause headaches when getting set up. If you get stuck feel free to ",(0,s.jsx)(n.a,{href:"/#lets-chat",children:"reach out"})," and we'll do our best to help."]})}),"\n",(0,s.jsx)(n.h3,{id:"step-1-install-the-system-dependencies",children:"Step 1: Install the system dependencies"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Looking for how to manage Yarn dependencies? ",(0,s.jsx)(n.a,{href:"../how-tos/managing-yarn-dependencies",children:"Click here"})," to learn more."]})}),"\n",(0,s.jsx)(n.p,{children:"Select your operating system to install the required dependencies for developing FxA. The instructions are intended to be followed in order."}),"\n",(0,s.jsxs)(k,{groupId:"operating-systems",children:[(0,s.jsxs)(I,{value:"mac",label:"macOS",default:!0,children:[(0,s.jsx)(n.p,{children:"First, we need to install git via XCode.  This will take a few minutes.  Type this in your shell:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"xcode-select --install\n"})}),(0,s.jsx)(n.p,{children:"Then install nvm"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash\n"})}),(0,s.jsx)(n.p,{children:"Next, use the command line to install the following:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# JQ (via brew, for more install options see: https://stedolan.github.io/jq/download/)\nbrew install jq\n"})}),(0,s.jsx)(n.p,{children:"Finally, manually install the following:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.docker.com/desktop/mac/install/",children:"Docker Desktop"})," (required)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cloud.google.com/sdk/docs/quickstart#mac",children:"Google Cloud SDK CLI"})}),"\n"]})]}),(0,s.jsxs)(I,{value:"ubuntu",label:"Ubuntu",children:[(0,s.jsx)(n.p,{children:"Start by installing some essentials:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# Git, curl, libgmp + more\nsudo apt-get install git curl jq build-essential pkg-config libssl-dev libgmp3-dev\n"})}),(0,s.jsxs)(n.p,{children:["Node.js can be installed in a few ways (including using the ",(0,s.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"installer"}),"). The following commands install the latest version, but you should check out ",(0,s.jsx)(n.a,{href:"https://github.com/mozilla/fxa/blob/main/.nvmrc",children:(0,s.jsx)(n.code,{children:".nvmrc"})})," to see the specific version FxA expects (YMMV using versions greater than it):"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# via nvm (recommended) - https://github.com/nvm-sh/nvm\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash\nnvm install node\n\n# via NodeSource\ncurl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -\nsudo apt-get install -y nodejs\n"})}),(0,s.jsx)(n.p,{children:"With Node + NPM installed you can now install Yarn:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npm install -g yarn\n"})}),(0,s.jsx)(n.p,{children:"Finally, manually install the following:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/install/ubuntu/",children:"Docker Desktop"})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)("summary",{children:"Additional Docker notes"}),"\nDocker commands require sudo, to avoid it, follow steps below:"]}),(0,s.jsxs)(n.p,{children:["Add the ",(0,s.jsx)(n.code,{children:"docker"})," group if it doesn't already exist:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo groupadd docker\n"})}),(0,s.jsxs)(n.p,{children:["Add the connected user ",(0,s.jsx)(n.code,{children:"$USER"})," to the ",(0,s.jsx)(n.code,{children:"docker"})," group"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo gpasswd -a $USER docker\n"})}),(0,s.jsxs)(n.p,{children:["Restart the ",(0,s.jsx)(n.code,{children:"docker"})," daemon"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo service docker restart\n"})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://cloud.google.com/sdk/docs/quickstart#deb",children:"Google Cloud SDK CLI"})}),"\n"]}),"\n"]})]}),(0,s.jsxs)(I,{value:"win",label:"Windows",children:[(0,s.jsxs)(n.p,{children:["Start by installing ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/en-ca/windows/wsl/",children:"Windows Subsystem for Linux"}),"."]}),(0,s.jsx)(n.p,{children:"Follow the Ubuntu instructions for installing essentials and Node via CLI."}),(0,s.jsx)(n.p,{children:"Finally, manually install the following:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.docker.com/desktop/windows/install/",children:"Docker Desktop"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cloud.google.com/sdk/docs/quickstart#windows",children:"Google Cloud SDK CLI"})}),"\n"]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"step-2-set-up-and-run-the-code",children:"Step 2: Set up and run the code"}),"\n",(0,s.jsx)(n.p,{children:"Make sure you're using a new shell if you just installed all the dependencies above.  That will ensure your environment\nis configured properly before we move on to the rest of the steps:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# Clone the repository\ngit clone https://github.com/mozilla/fxa.git\ncd fxa\n\n# Install some packages\nnvm install          # This picks up on the version in .nvmrc and installs the right thing\nnpm install -g yarn  # This installs yarn for the specific version of node you just installed above\nnpm install -g nx\n\n# Initialize the L10n repository\n./_scripts/l10n/clone.sh\n\n## Install the node dependencies\nyarn install\n\n## Start the project!\nyarn start\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"yarn start"})," starts up ",(0,s.jsx)(n.strong,{children:"all"})," required services via PM2. This includes Redis, MySQL, and Memcached. It is recommended that you don't run these services yourself, or occupy any of the server ports (check out our ",(0,s.jsx)(n.a,{href:"https://github.com/search?type=code&q=repo:mozilla/fxa+filename:pm2.config.js+filename:infrastructure.config.js",children:"PM2 configs"}),"). Doing so may result in errors."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Additional ",(0,s.jsx)(n.code,{children:"start"})," command options are available to partially start the stack. E.g. ",(0,s.jsx)(n.code,{children:"yarn start mza"})," to start only required Mozilla Accounts services."]}),(0,s.jsxs)(n.p,{children:["For a full list of these commands, run ",(0,s.jsx)(n.code,{children:"yarn nps -h"}),"."]})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Once your services have all started up you should now be able to ",(0,s.jsx)(n.a,{href:"http://localhost:3030",children:"visit FxA\nlocally"}),". Next up you may want to ",(0,s.jsx)(n.a,{href:"../how-tos/creating-an-account-locally",children:"create an account"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["FxA should only be accessed locally using the ",(0,s.jsx)(n.code,{children:"localhost"})," host, and not via ",(0,s.jsx)(n.code,{children:"127.0.0.1"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"step-3-optional-additions",children:"Step 3: Optional Additions"}),"\n",(0,s.jsx)(n.h4,{id:"do-you-need-a-relying-party-to-test-with",children:"Do you need a relying party to test with?"}),"\n",(0,s.jsxs)(n.p,{children:["123done is automatically started with ",(0,s.jsx)(n.code,{children:"yarn start"})," but it won't work until ",(0,s.jsx)(n.a,{href:"https://github.com/mozilla/fxa/blob/main/packages/123done/README.md#running-locally",children:"you finish setting it up"}),".  Talk to someone on the team for the right value to put in the ",(0,s.jsx)(n.code,{children:"packages/123done/secrets.json"})," file."]}),"\n",(0,s.jsx)(n.h4,{id:"do-you-want-to-test-with-3rd-party-logins-eg-apple-or-google",children:"Do you want to test with 3rd party logins (e.g. Apple or Google)?"}),"\n",(0,s.jsxs)(n.p,{children:["Those need ",(0,s.jsx)(n.a,{href:"../reference/third-party-authentication",children:"some additional configuration"}),".  Talk to someone on the team for the right values to put in your ",(0,s.jsx)(n.code,{children:"packages/fxa-auth-server/config/secrets.json"})," file."]}),"\n",(0,s.jsx)(n.h4,{id:"do-you-need-the-payments-services-up-and-running",children:"Do you need the payments services up and running?"}),"\n",(0,s.jsxs)(n.p,{children:["Those need ",(0,s.jsx)(n.a,{href:"../tutorials/subscription-platform",children:"additional configuration"})," also. You'll need to talk to someone on the team for the right values to put in your ",(0,s.jsx)(n.code,{children:"packages/fxa-auth-server/config/secrets.json"})," file."]}),"\n",(0,s.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(n.p,{children:["If a ",(0,s.jsx)(n.code,{children:"NX - Daemon processes terminated and closed the connect"})," error message appears when attempting to start the stack, you may turn off the nx daemon locally by adding this setting to a .env file in fxa root:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"NX_DAEMON=false\n"})}),"\n",(0,s.jsx)(n.h3,{id:"handy-commands",children:"Handy commands"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/Unitech/PM2",children:"PM2"})," is used to control services locally. Use the CLI to control and inspect services:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# Start all services\nyarn start\n\n# Stop all services\nyarn stop\n\n# Display logs for all services\nyarn pm2 logs\n\n# Display logs for just the `auth` service\nyarn pm2 logs auth\n\n# Restart the `mysql` service\nyarn pm2 restart mysql\n\n# Stop the `content` service\nyarn pm2 stop content\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Check out the ",(0,s.jsx)(n.a,{href:"https://github.com/Unitech/PM2",children:"PM2 docs"})," for more commands. If\nyou're using VS Code there is also a ",(0,s.jsx)(n.a,{href:"../how-tos/using-vscode-with-fxa",children:"handy extension"})," for managing PM2 services."]}),"\n",(0,s.jsxs)(n.p,{children:["Additionally, be sure to check out the ",(0,s.jsx)(n.a,{href:"https://github.com/mozilla/fxa/search?q=package.json",children:(0,s.jsx)(n.code,{children:"package.json"})})," files in both the root and individual packages to see all available commands."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["To avoid wasting computer resources while not working on FxA make sure to stop the servers using ",(0,s.jsx)(n.code,{children:"yarn stop"}),". Once you are back working on FxA just use the ",(0,s.jsx)(n.code,{children:"yarn start"})," command to bring the servers back up."]})}),"\n",(0,s.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"While it is possible to run the entire code base's test suite, in development you'll likely want to run a specific test or a subset of tests. Please refer to each package's documentation for detailed instructions on how to test its respective code."})}),"\n",(0,s.jsx)(n.h3,{id:"test-all-or-some-packages",children:"Test all or some packages"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You might need to run ",(0,s.jsx)(n.code,{children:"yarn start infrastructure"})," to start services before running tests."]})}),"\n",(0,s.jsx)(n.p,{children:"From the root directory you may test all or some FxA packages:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# Test only `fxa-shared`\nyarn test fxa-shared\n\n# Test `fxa-shared` and `fxa-auth-server`\nyarn test fxa-shared fxa-auth-server\n\n# Test all packages\nyarn test all\n"})}),"\n",(0,s.jsx)(n.p,{children:"The above commands invoke the same tests that CI uses, and is not necessarily the same as running yarn test in any given package."}),"\n",(0,s.jsx)(n.h3,{id:"functional-playwright-tests",children:"Functional Playwright Tests"}),"\n",(0,s.jsx)(n.p,{children:"You can run functional tests that emulate user behavior. This is a good final pass for any change that affects the UI. It can also save lots of time during development, because running the functional test is quite fast. Note that functional tests are not a replacement for unit tests, so use them judiciously."}),"\n",(0,s.jsxs)(n.p,{children:["Make sure the stack has been started and is running (",(0,s.jsx)(n.code,{children:"yarn start"}),"). From here, there are a few variants:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Run tests in headless mode\nyarn workspace functional-tests test\n\n# Run tests in debug mode allowing step through of each test stage. Note, using the --grep argument\n# or adding .only statements to tests cases is a good idea when debugging, since stepping though every\n# single tests is not desirable.\nyarn workspace functional-tests test --debug --grep=$test_name\n\n# Run tests in debug console mode, allowing browser debugging.\n# https://playwright.dev/docs/debug#selectors-in-developer-tools-console\nPWDEBUG=console yarn workspace functional-tests test\n\n# Target a specific test\nyarn test workspace functional-tests test --grep=$test_name\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For more info, see details at ",(0,s.jsx)(n.a,{href:"https://playwright.dev",children:"https://playwright.dev"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"emulating-a-ci-environment",children:"Emulating a CI environment"}),"\n",(0,s.jsxs)(n.p,{children:["It is possible to run various test suites (known as Jobs) acting as CircleCI. This is useful if you're encountering CI-specific failures. Please refer to ",(0,s.jsx)(n.a,{href:"#UPDATE-ME",children:"this documentation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,s.jsxs)(n.p,{children:["If you've got FxA all set up and running, congratulations! Those interested in helping to develop Mozilla accounts should check out the ",(0,s.jsx)(n.a,{href:"https://github.com/mozilla/fxa/blob/main/CONTRIBUTING.md",children:"Contributing"})," doc."]})]})}function E(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(q,{...e})}):q(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);