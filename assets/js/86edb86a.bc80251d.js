"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[4771],{3244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"how-tos/ci-guidelines","title":"CI Guidelines","description":"Our CI process is largely automatic. By simply pushing up a branch and opening a PR the CI system will kick in and start validating your changes. By landing a PR on the main branch, the system will also build and deploy docker images that keep the current state of the FxA fresh.","source":"@site/docs/how-tos/ci-guidelines.md","sourceDirName":"how-tos","slug":"/how-tos/ci-guidelines","permalink":"/ecosystem-platform/how-tos/ci-guidelines","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/ci-guidelines.md","tags":[],"version":"current","frontMatter":{"title":"CI Guidelines"},"sidebar":"docs","previous":{"title":"Subscription Platform","permalink":"/ecosystem-platform/tutorials/subscription-platform"},"next":{"title":"Connecting to a local MySQL DB","permalink":"/ecosystem-platform/how-tos/connecting-to-a-local-mysql-db"}}');var i=n(74848),r=n(28453);const a={title:"CI Guidelines"},o=void 0,l={},c=[{value:"Rebase Off Main Before Pushing Code",id:"rebase-off-main-before-pushing-code",level:2},{value:"Be mindful when adding or updating packages",id:"be-mindful-when-adding-or-updating-packages",level:2},{value:"Helpful yarnrc.yml configurations",id:"helpful-yarnrcyml-configurations",level:2},{value:"Tag tests as unit or integration tests",id:"tag-tests-as-unit-or-integration-tests",level:2},{value:"Prioritize lightweight tests",id:"prioritize-lightweight-tests",level:2},{value:"Keep NPM Scripts Consistent",id:"keep-npm-scripts-consistent",level:2},{value:"Export Tests Reports",id:"export-tests-reports",level:2},{value:"Review the CI Workflows",id:"review-the-ci-workflows",level:2},{value:"Updating CI Runner Images",id:"updating-ci-runner-images",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Our CI process is largely automatic. By simply pushing up a branch and opening a PR the CI system will kick in and start validating your changes. By landing a PR on the main branch, the system will also build and deploy docker images that keep the current state of the FxA fresh."}),"\n",(0,i.jsxs)(t.p,{children:["Even though this is all seamless, there are a few best practices to keep in mind. Following these will help pipelines run faster in the future and with fewer errors. Also, if unfamiliar with CI concepts, we have some more info ",(0,i.jsx)(t.a,{href:"/ecosystem-platform/reference/tests-in-circleci#workflows",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"rebase-off-main-before-pushing-code",children:"Rebase Off Main Before Pushing Code"}),"\n",(0,i.jsx)(t.p,{children:"This might just be the most important tip! Always try to rebase your code on main before pushing up a PR. This ensures a couple things. First it decreases the possibility of merge conflict or a \u2018bad\u2019 merge state occurring when the PR finally lands. Second, it ensures that your branch and the docker images we use to run our CI pipelines will be similar, and therefore have low start up time."}),"\n",(0,i.jsx)(t.p,{children:"If there are no changes to npm packages in your PR and it has been rebased off main, we can skip the yarn install step in the CI, which leads to much faster execution times. If your branch meets these criteria, you\u2019ll see a message saying something like \u2018Congrats! No changes detected on yarn.lock\u2019 in the base install step."}),"\n",(0,i.jsx)(t.p,{children:"It\u2019s possible that at some point in the future we will enforce that PRs have been rebased off of main. But for the time being this is the honors system."}),"\n",(0,i.jsx)(t.h2,{id:"be-mindful-when-adding-or-updating-packages",children:"Be mindful when adding or updating packages"}),"\n",(0,i.jsxs)(t.p,{children:["As discussed in the ",(0,i.jsx)(t.a,{href:"/ecosystem-platform/reference/continuous-integration-for-monorepos",children:"Continuous Integration"})," Reference. One of the challenges faced in mono repos is large sets dependencies. There are a few things we can do going forward to help ensure this doesn\u2019t get worse:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Before adding a new package, make sure it\u2019s really needed. Ideally we consolidate / gravitate towards a fixed set of high level frameworks."}),"\n",(0,i.jsx)(t.li,{children:"Try to have a one in one out policy. If a new package is added, look to phase out an old package."}),"\n",(0,i.jsxs)(t.li,{children:["If updating a package, try to update across all workspaces, so we don\u2019t have different versions. This is much easier said than done; however, and oftentimes it\u2019s not possible. Running ",(0,i.jsx)(t.code,{children:"yarn dedupe -c $package_name"})," can give an idea of the extent of the problem."]}),"\n",(0,i.jsxs)(t.li,{children:["Be mindful of upstream dependencies. Run ",(0,i.jsx)(t.code,{children:"yarn why"})," to see the dependency tree for any package."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Also be aware that making changes to packages means a yarn install will be needed in each CI job to ensure the packages are up to date. It will also likely trigger a full rerun of all test suites. This adds unavoidable overhead to your CI pipeline. It isn\u2019t all that big a deal, but it is something to be avoided when possible."}),"\n",(0,i.jsx)(t.h2,{id:"helpful-yarnrcyml-configurations",children:"Helpful yarnrc.yml configurations"}),"\n",(0,i.jsx)(t.p,{children:"There are two settings that result in a pretty drastic reduction in the size of the yarn cache needed to run FxA."}),"\n",(0,i.jsxs)(t.p,{children:["First, ",(0,i.jsx)(t.code,{children:"nmMode: hardlinks-global"})," reduces the size of the internal yarn cache for FxA by about a third. This essentially uses hard links to reduce the amount of redundant packages held in the node_modules folder.  When enabled, if two modules both reference the same package, yarn will hardlink the package instead of copying it into both modules folders which can end up saving a lot of space on disk."]}),"\n",(0,i.jsxs)(t.p,{children:["Second, ",(0,i.jsx)(t.code,{children:"enableGlobalCache: true"}),", reduces the size of the internal yarn cache by 1/2 in the CI. When this is not enabled, all the packages will get stored as zips in the global cache located in the ~/.yarn/berry, as well as the project local cache located in fxa/.yarn/berry. This redundancy really isn\u2019t helpful in most scenarios, and particularly unhelpful in the CI as it results in bloat."]}),"\n",(0,i.jsx)(t.h2,{id:"tag-tests-as-unit-or-integration-tests",children:"Tag tests as unit or integration tests"}),"\n",(0,i.jsx)(t.p,{children:"In order to provide better performance, and to fail bad PRs more quickly, break our tests up into unit tests and integration tests and run these tests in separate CI jobs."}),"\n",(0,i.jsx)(t.p,{children:"In our system unit tests are tests that can:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Run quickly, typically under 100ms, and definitely under 500ms."}),"\n",(0,i.jsx)(t.li,{children:"Run without any infrastructure, i.e. tests can run without any pm2 services running."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Integration tests are tests that:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Take longer to run, typically over 500ms."}),"\n",(0,i.jsxs)(t.li,{children:["Run with just infrastructure, i.e. we must execute a ",(0,i.jsx)(t.code,{children:"yarn start infrastructure"})," prior to running tests)"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In order to distinguish between these kinds of tests, we have created a tagging convention. Our tests names need to be tagged with either #unit or #integration. These tags can exist at the test level (i.e. the \u2018it\u2019 block) or at the suite level (i.e. the \u2018describe\u2019 block)."}),"\n",(0,i.jsx)(t.p,{children:"In the future we may have better conventions for this such as file names or even folders, but for now, this was the least disruptive way to separate the two types of tests without disrupting the git history too much."}),"\n",(0,i.jsxs)(t.p,{children:["Important: For jest tests we need to be explicit and add the #unit and #integration tag to each top level 'describe\u2019 block. This is due to the fact that jest does not support an [\u2018invert\u2019 option",(0,i.jsx)(t.a,{href:"https://mochajs.org/api/mocha#invert"})," like mocha does, so we have not way run all tests except those with #integration. Therefore we must explicitly tag all tests."]}),"\n",(0,i.jsx)(t.h2,{id:"prioritize-lightweight-tests",children:"Prioritize lightweight tests"}),"\n",(0,i.jsxs)(t.p,{children:["Ideally we have a ",(0,i.jsx)(t.a,{href:"https://martinfowler.com/articles/practical-test-pyramid.html",children:"pyramid"})," distribution of test types."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Unit tests, which are the fastest and quickest to run, should be the bulk of the tests. And run first."}),"\n",(0,i.jsx)(t.li,{children:"Integration tests, which only require some infrastructure like databases or caches to be present or are inherently long running tests, should be run next."}),"\n",(0,i.jsx)(t.li,{children:"Backend services should be run last. They require a full stack as well as a headless browser to be running which adds significant overhead to the test suite."}),"\n",(0,i.jsx)(t.li,{children:"Finally manual black box testing that involves a human being should be conducted prior to release.."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"These tests increase almost exponentially in cost, and therefore we should be mindful of their distribution in our system."}),"\n",(0,i.jsx)(t.p,{children:"Unit and integration tests also have the ability to report coverage metrics, so we can actually see how many lines and logical branches we have covered in these test suites. Ideally we have about 80% or better code coverage for unit / integration tests."}),"\n",(0,i.jsx)(t.p,{children:"There are always things that will be difficult to test purely with a unit or integration test, so keep that in mind as well. Functional tests, and manual testing will always be useful and are still necessary."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"If a scenario is encountered where a functional test fails, but there were not any unit or integration tests that also failed, this might be a good opportunity to go back and improve unit or integration test coverage."})}),"\n",(0,i.jsx)(t.h2,{id:"keep-npm-scripts-consistent",children:"Keep NPM Scripts Consistent"}),"\n",(0,i.jsxs)(t.p,{children:["If an operation is general enough to be targeted in the CI, then put it in an npm script and make sure the npm script name is consistent across packages. The reason this is useful is that we can then target these scripts with ",(0,i.jsx)(t.code,{children:"yarn workspaces foreach run $script_name"})," commands."]}),"\n",(0,i.jsx)(t.p,{children:"This is a very convenient way to execute various operations across packages in the mono repo. If scripts aren\u2019t consistently named, then things get quite messy. Currently there are a few scripts we rely on heavily in the CI"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"yarn workspaces foreach run compile"}),"- Should compile typescript"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"yarn workspaces foreach run test-unit"})," - Runs unit tests"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"yarn workspaces foreach run test-integration"})," - Runs integration tests"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"yarn workspaces foreach run postinstall"})," - Should prime the repo after running yarn install. We generally use this for pulling down and priming l10n content."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"export-tests-reports",children:"Export Tests Reports"}),"\n",(0,i.jsx)(t.p,{children:"We have a lot of tests. No one really wants to dig through command line output to figure out what failed. So whenever possible, we will generate and export test reports. This  is especially important for unit and integration tests where many workspace packages are being tested in a single job. By exporting test reports, the errors will show up nicely formatted in the UI. For example:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"test report",src:n(94142).A+"",title:"image_tooltip",width:"823",height:"763"})}),"\n",(0,i.jsx)(t.p,{children:"Test reports are fairly easy to export. Most testing frameworks will export a json format, typically in the junit reporter format, which can be interpreted by CircleCI. Any test report that ultimately ends up in the artifacts/tests will be accessible in the tests tab in circle ci as depicted above."}),"\n",(0,i.jsx)(t.h2,{id:"review-the-ci-workflows",children:"Review the CI Workflows"}),"\n",(0,i.jsxs)(t.p,{children:["The CI workflows in FxA have been crafted to address some of the side effects that mono repos can have on CI. Checkout the ",(0,i.jsx)(t.a,{href:"/ecosystem-platform/reference/tests-in-circleci",children:"Continuous Integration"})," reference to learn more about how our CI design attempts to address some of these issues."]}),"\n",(0,i.jsx)(t.h2,{id:"updating-ci-runner-images",children:"Updating CI Runner Images"}),"\n",(0,i.jsxs)(t.p,{children:["The day will come when it might be necessary to update the base images we use in our CI runners. A good example is upgrading a major version of node. When this happens we must update images to reference ",(0,i.jsx)(t.code,{children:"cimg/node:$VER"})," and ",(0,i.jsx)(t.code,{children:"node:$VER"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Because CI images are built as changes land on main, it may seem as though there is a chicken egg problem. In order to produce new CI images we must land the changes we need on main, but in order to land changes on main we must test them in branch using our CI runner images. This can definitely be a quandary, but here\u2019s how to deal with it:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["In ",(0,i.jsx)(t.code,{children:".circleci/config.yml"}),", look for ",(0,i.jsx)(t.code,{children:"commands > build-ci-image > steps > run > command"})," and version the docker tag. For example, you would change ",(0,i.jsx)(t.code,{children:"-t mozilla/fxa-circleci:ci-<< parameters.target >>-v1"})," to ",(0,i.jsx)(t.code,{children:"-t mozilla/fxa-circleci:ci-<< parameters.target >>-v2"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["In ",(0,i.jsx)(t.code,{children:".circleci/config.yml"}),", update all references to use the new image tags. For example change all occurences of","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"fxa-circleci:ci-builder-v1"})," to ",(0,i.jsx)(t.code,{children:"fxa-circleci:ci-builder-v2"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"fxa-circleci:ci-test-runner-v1"})," to ",(0,i.jsx)(t.code,{children:"fxa-circleci:ci-test-runner-v2"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"fxa-circleci:ci-functional-test-runner-v1"})," to ",(0,i.jsx)(t.code,{children:"fxa-circleci:ci-functional-test-runner-v2"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["In ",(0,i.jsx)(t.code,{children:".circleci/config.yml"}),", go to ",(0,i.jsx)(t.code,{children:"workflows > deploy_ci_images > jobs > filters > branches"})," and add the name of the branch being worked on to the list."]}),"\n",(0,i.jsxs)(t.li,{children:["Open the ",(0,i.jsx)(t.code,{children:"_dev/docker/ci/Dockerfile"})," and change ",(0,i.jsx)(t.code,{children:"cimg/node:16.3"})," to whatever ",(0,i.jsx)(t.code,{children:"cimg/node:$version"})," needs to be targeted."]}),"\n",(0,i.jsx)(t.li,{children:"Push changes."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This will end up triggering a new build. The tests will fail the first time. In fact you may as well cancel the ",(0,i.jsx)(t.code,{children:"test_pull_request"})," workflow. The ",(0,i.jsx)(t.code,{children:"deploy_ci_images"})," workflow will run (due to change in step 4) and push up the new image tags to docker hub that our CI runners use. On a rerun, or subsequent push, the image with node 18 should now be in place, and they will pass. And of course, it won\u2019t break everyone else\u2019s pipelines cause it\u2019ll be using a different tag, and their configs still reference the original images."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["If the deploy_ci_images job runs very quickly, something is off. It's possible the build was skipped, so check the output for the job. If the build was skipped, (perahaps the script didn't find any changes the require a new build), then you can 'force' the docker CI images to rebuild by going to 'trigger pipeline' select 'Add parameters' and then add ",(0,i.jsx)(t.code,{children:"boolean"})," | ",(0,i.jsx)(t.code,{children:"force-deploy-fxa-ci-images"})," | ",(0,i.jsx)(t.code,{children:"true"}),"."]})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94142:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/test-report-a96b06cd789079fb8e1842c5a0956c23.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);