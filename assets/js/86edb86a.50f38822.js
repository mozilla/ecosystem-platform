"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[5557],{90901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));n(29420);const s={title:"CI Guidelines"},r=void 0,o={unversionedId:"how-tos/ci-guidelines",id:"how-tos/ci-guidelines",title:"CI Guidelines",description:"Our CI process is largely automatic. By simply pushing up a branch and opening a PR the CI system will kick in and start validating your changes. By landing a PR on the main branch, the system will also build and deploy docker images that keep the current state of the FxA fresh.",source:"@site/docs/how-tos/ci-guidelines.md",sourceDirName:"how-tos",slug:"/how-tos/ci-guidelines",permalink:"/ecosystem-platform/how-tos/ci-guidelines",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/ci-guidelines.md",tags:[],version:"current",frontMatter:{title:"CI Guidelines"},sidebar:"docs",previous:{title:"Tracing for Stage/Prod",permalink:"/ecosystem-platform/how-tos/using-tracing-in-gcp"},next:{title:"Planning and Development",permalink:"/ecosystem-platform/reference/team-processes/development-process"}},l={},u=[{value:"Rebase Off Main Before Pushing Code",id:"rebase-off-main-before-pushing-code",level:2},{value:"Be mindful when adding or updating packages",id:"be-mindful-when-adding-or-updating-packages",level:2},{value:"Helpful yarnrc.yml configurations",id:"helpful-yarnrcyml-configurations",level:2},{value:"Tag tests as unit or integration tests",id:"tag-tests-as-unit-or-integration-tests",level:2},{value:"Prioritize lightweight tests",id:"prioritize-lightweight-tests",level:2},{value:"Keep NPM Scripts Consistent",id:"keep-npm-scripts-consistent",level:2},{value:"Export Tests Reports",id:"export-tests-reports",level:2},{value:"Review the CI Workflows",id:"review-the-ci-workflows",level:2},{value:"Updating CI Runner Images",id:"updating-ci-runner-images",level:2}],h={toc:u};function p(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Our CI process is largely automatic. By simply pushing up a branch and opening a PR the CI system will kick in and start validating your changes. By landing a PR on the main branch, the system will also build and deploy docker images that keep the current state of the FxA fresh."),(0,i.kt)("p",null,"Even though this is all seamless, there are a few best practices to keep in mind. Following these will help pipelines run faster in the future and with fewer errors. Also, if unfamiliar with CI concepts, we have some more info ",(0,i.kt)("a",{parentName:"p",href:"/ecosystem-platform/reference/tests-in-circleci#workflows"},"here"),"."),(0,i.kt)("h2",{id:"rebase-off-main-before-pushing-code"},"Rebase Off Main Before Pushing Code"),(0,i.kt)("p",null,"This might just be the most important tip! Always try to rebase your code on main before pushing up a PR. This ensures a couple things. First it decreases the possibility of merge conflict or a \u2018bad\u2019 merge state occurring when the PR finally lands. Second, it ensures that your branch and the docker images we use to run our CI pipelines will be similar, and therefore have low start up time."),(0,i.kt)("p",null,"If there are no changes to npm packages in your PR and it has been rebased off main, we can skip the yarn install step in the CI, which leads to much faster execution times. If your branch meets these criteria, you\u2019ll see a message saying something like \u2018Congrats! No changes detected on yarn.lock\u2019 in the base install step."),(0,i.kt)("p",null,"It\u2019s possible that at some point in the future we will enforce that PRs have been rebased off of main. But for the time being this is the honors system."),(0,i.kt)("h2",{id:"be-mindful-when-adding-or-updating-packages"},"Be mindful when adding or updating packages"),(0,i.kt)("p",null,"As discussed in the ",(0,i.kt)("a",{parentName:"p",href:"/ecosystem-platform/reference/continuous-integration-for-monorepos"},"Continuous Integration")," Reference. One of the challenges faced in mono repos is large sets dependencies. There are a few things we can do going forward to help ensure this doesn\u2019t get worse:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Before adding a new package, make sure it\u2019s really needed. Ideally we consolidate / gravitate towards a fixed set of high level frameworks."),(0,i.kt)("li",{parentName:"ul"},"Try to have a one in one out policy. If a new package is added, look to phase out an old package."),(0,i.kt)("li",{parentName:"ul"},"If updating a package, try to update across all workspaces, so we don\u2019t have different versions. This is much easier said than done; however, and oftentimes it\u2019s not possible. Running ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn dedupe -c $package_name")," can give an idea of the extent of the problem."),(0,i.kt)("li",{parentName:"ul"},"Be mindful of upstream dependencies. Run ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn why")," to see the dependency tree for any package. ")),(0,i.kt)("p",null,"Also be aware that making changes to packages means a yarn install will be needed in each CI job to ensure the packages are up to date. It will also likely trigger a full rerun of all test suites. This adds unavoidable overhead to your CI pipeline. It isn\u2019t all that big a deal, but it is something to be avoided when possible."),(0,i.kt)("h2",{id:"helpful-yarnrcyml-configurations"},"Helpful yarnrc.yml configurations"),(0,i.kt)("p",null,"There are two settings that result in a pretty drastic reduction in the size of the yarn cache needed to run FxA."),(0,i.kt)("p",null,"First, ",(0,i.kt)("inlineCode",{parentName:"p"},"nmMode: hardlinks-global")," reduces the size of the internal yarn cache for FxA by about a third. This essentially uses hard links to reduce the amount of redundant packages held in the node_modules folder.  When enabled, if two modules both reference the same package, yarn will hardlink the package instead of copying it into both modules folders which can end up saving a lot of space on disk."),(0,i.kt)("p",null,"Second, ",(0,i.kt)("inlineCode",{parentName:"p"},"enableGlobalCache: true"),", reduces the size of the internal yarn cache by 1/2 in the CI. When this is not enabled, all the packages will get stored as zips in the global cache located in the ~/.yarn/berry, as well as the project local cache located in fxa/.yarn/berry. This redundancy really isn\u2019t helpful in most scenarios, and particularly unhelpful in the CI as it results in bloat."),(0,i.kt)("h2",{id:"tag-tests-as-unit-or-integration-tests"},"Tag tests as unit or integration tests"),(0,i.kt)("p",null,"In order to provide better performance, and to fail bad PRs more quickly, break our tests up into unit tests and integration tests and run these tests in separate CI jobs."),(0,i.kt)("p",null,"In our system unit tests are tests that can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run quickly, typically under 100ms, and definitely under 500ms."),(0,i.kt)("li",{parentName:"ul"},"Run without any infrastructure, i.e. tests can run without any pm2 services running.")),(0,i.kt)("p",null,"Integration tests are tests that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Take longer to run, typically over 500ms."),(0,i.kt)("li",{parentName:"ul"},"Run with just infrastructure, i.e. we must execute a ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn start infrastructure")," prior to running tests)")),(0,i.kt)("p",null,"In order to distinguish between these kinds of tests, we have created a tagging convention. Our tests names need to be tagged with either #unit or #integration. These tags can exist at the test level (i.e. the \u2018it\u2019 block) or at the suite level (i.e. the \u2018describe\u2019 block). "),(0,i.kt)("p",null,"In the future we may have better conventions for this such as file names or even folders, but for now, this was the least disruptive way to separate the two types of tests without disrupting the git history too much."),(0,i.kt)("p",null,"Important: For jest tests we need to be explicit and add the #unit and #integration tag to each top level 'describe\u2019 block. This is due to the fact that jest does not support an [\u2018invert\u2019 option",(0,i.kt)("a",{parentName:"p",href:"https://mochajs.org/api/mocha#invert"})," like mocha does, so we have not way run all tests except those with #integration. Therefore we must explicitly tag all tests."),(0,i.kt)("h2",{id:"prioritize-lightweight-tests"},"Prioritize lightweight tests"),(0,i.kt)("p",null,"Ideally we have a ",(0,i.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/practical-test-pyramid.html"},"pyramid")," distribution of test types. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unit tests, which are the fastest and quickest to run, should be the bulk of the tests. And run first."),(0,i.kt)("li",{parentName:"ul"},"Integration tests, which only require some infrastructure like databases or caches to be present or are inherently long running tests, should be run next."),(0,i.kt)("li",{parentName:"ul"},"Backend services should be run last. They require a full stack as well as a headless browser to be running which adds significant overhead to the test suite."),(0,i.kt)("li",{parentName:"ul"},"Finally manual black box testing that involves a human being should be conducted prior to release.. ")),(0,i.kt)("p",null,"These tests increase almost exponentially in cost, and therefore we should be mindful of their distribution in our system. "),(0,i.kt)("p",null,"Unit and integration tests also have the ability to report coverage metrics, so we can actually see how many lines and logical branches we have covered in these test suites. Ideally we have about 80% or better code coverage for unit / integration tests."),(0,i.kt)("p",null,"There are always things that will be difficult to test purely with a unit or integration test, so keep that in mind as well. Functional tests, and manual testing will always be useful and are still necessary."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If a scenario is encountered where a functional test fails, but there were not any unit or integration tests that also failed, this might be a good opportunity to go back and improve unit or integration test coverage. ")),(0,i.kt)("h2",{id:"keep-npm-scripts-consistent"},"Keep NPM Scripts Consistent"),(0,i.kt)("p",null,"If an operation is general enough to be targeted in the CI, then put it in an npm script and make sure the npm script name is consistent across packages. The reason this is useful is that we can then target these scripts with ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn workspaces foreach run $script_name")," commands. "),(0,i.kt)("p",null,"This is a very convenient way to execute various operations across packages in the mono repo. If scripts aren\u2019t consistently named, then things get quite messy. Currently there are a few scripts we rely on heavily in the CI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn workspaces foreach run compile"),"- Should compile typescript"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn workspaces foreach run test:unit")," - Runs unit tests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn workspaces foreach run test:integration")," - Runs integration tests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn workspaces foreach run postinstall")," - Should prime the repo after running yarn install. We generally use this for pulling down and priming l10n content.")),(0,i.kt)("h2",{id:"export-tests-reports"},"Export Tests Reports"),(0,i.kt)("p",null,"We have a lot of tests. No one really wants to dig through command line output to figure out what failed. So whenever possible, we will generate and export test reports. This  is especially important for unit and integration tests where many workspace packages are being tested in a single job. By exporting test reports, the errors will show up nicely formatted in the UI. For example:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"test report",src:n(77851).Z,title:"image_tooltip",width:"823",height:"763"})),(0,i.kt)("p",null,"Test reports are fairly easy to export. Most testing frameworks will export a json format, typically in the junit reporter format, which can be interpreted by CircleCI. Any test report that ultimately ends up in the artifacts/tests will be accessible in the tests tab in circle ci as depicted above."),(0,i.kt)("h2",{id:"review-the-ci-workflows"},"Review the CI Workflows"),(0,i.kt)("p",null,"The CI workflows in FxA have been crafted to address some of the side effects that mono repos can have on CI. Checkout the ",(0,i.kt)("a",{parentName:"p",href:"/ecosystem-platform/reference/continuous-integration"},"Continuous Integration")," reference to learn more about how our CI design attempts to address some of these issues."),(0,i.kt)("h2",{id:"updating-ci-runner-images"},"Updating CI Runner Images"),(0,i.kt)("p",null,"The day will come when it might be necessary to update the base images we use in our CI runners. A good example is upgrading a major version of node. When this happens we must update images to reference ",(0,i.kt)("inlineCode",{parentName:"p"},"cimg/node:$VER")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"node:$VER"),". "),(0,i.kt)("p",null,"Because CI images are built as changes land on main, it may seem as though there is a chicken egg problem. In order to produce new CI images we must land the changes we need on main, but in order to land changes on main we must test them in branch using our CI runner images. This can definitely be a quandary, but here\u2019s how to deal with it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},".circleci/config.yml"),", go to ",(0,i.kt)("inlineCode",{parentName:"li"},"commands > create-ci-images > build-ci-image > target"),", and version those values. So the targets would become ",(0,i.kt)("inlineCode",{parentName:"li"},"test-runner-v2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"builder-v2"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"functional-test-runner-v2"),"."),(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},".circleci/config.yml"),", update all references to these images in the executor section."),(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},".circleci/config.yml"),", go to ",(0,i.kt)("inlineCode",{parentName:"li"},"workflows > deploy_ci_images > jobs > filters > branches")," and add the name of the branch being worked on to the list."),(0,i.kt)("li",{parentName:"ul"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"_dev/docker/ci/Dockerfile")," and change ",(0,i.kt)("inlineCode",{parentName:"li"},"cimg/node:16.3")," to whatever ",(0,i.kt)("inlineCode",{parentName:"li"},"cimg/node:$version")," needs to be targeted."),(0,i.kt)("li",{parentName:"ul"},"Push changes.")),(0,i.kt)("p",null,"This will end up triggering a new build. The tests will fail the first time. In fact you may as well cancel the ",(0,i.kt)("inlineCode",{parentName:"p"},"test_pull_request")," workflow. The ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy_ci_images")," workflow will run (due to change in step 4) and push up the new image tags to docker hub that our CI runners use. On a rerun, or subsequent push, the image with node 18 should now be in place, and they will pass. And of course, it won\u2019t break everyone else\u2019s pipelines cause it\u2019ll be using a different tag, and their configs still reference the original images."))}p.isMDXComponent=!0},77851:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/test-report-a96b06cd789079fb8e1842c5a0956c23.png"}}]);