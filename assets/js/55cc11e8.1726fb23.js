"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6221],{85196:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=o(87462),i=(o(67294),o(3905));o(16758);const r=o.p+"assets/images/storybook-circleci-ae90d4f4b43a5ba61eca5c9be8db596f.png",n={title:"Storybook Deploys with CircleCI"},s=void 0,l={unversionedId:"reference/storybook-deploys-with-circleci",id:"reference/storybook-deploys-with-circleci",title:"Storybook Deploys with CircleCI",description:"Several of the packages in this repository use Storybook to build and demonstrate user interface components (mostly in React). These notably include fxa-settings, fxa-payments-server, fxa-react, and fxa-auth-server which contains our emails.",source:"@site/docs/reference/storybook-deploys-with-circleci.md",sourceDirName:"reference",slug:"/reference/storybook-deploys-with-circleci",permalink:"/ecosystem-platform/reference/storybook-deploys-with-circleci",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/storybook-deploys-with-circleci.md",tags:[],version:"current",frontMatter:{title:"Storybook Deploys with CircleCI"},sidebar:"docs",previous:{title:"JWT Access Tokens",permalink:"/ecosystem-platform/reference/jwt-access-tokens"},next:{title:"WebChannels in Firefox Desktop & Fennec",permalink:"/ecosystem-platform/reference/webchannels-in-firefox-desktop-fennec"}},c={},p=[{value:"Maintaining Storybook Builds",id:"maintaining-storybook-builds",level:2}],m={toc:p};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Several of the packages in this repository use ",(0,i.kt)("a",{parentName:"p",href:"https://storybook.js.org/"},"Storybook")," to build and demonstrate user interface components (mostly in React). These notably include ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-settings"},"fxa-settings"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-payments-server"},"fxa-payments-server"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-react"},"fxa-react"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-auth-server/lib/senders/emails"},"fxa-auth-server")," which contains our emails."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The latest Storybook builds on the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch can ",(0,i.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/mozilla-storybooks-fxa/commits/latest/index.html"},"be found here"),".")),(0,i.kt)("p",null,"For most ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/.circleci/config.yml"},"test runs in CircleCI"),", a static build of each package's Storybook for the relevant commit is published to a website we host on Google Cloud Platform. ",(0,i.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/mozilla-storybooks-fxa/index.html"},"Click here")," to view the index page."),(0,i.kt)("p",null,'You can find the Storybook build associated with a given commit on GitHub by clicking the "Details" link next to a ',(0,i.kt)("strong",{parentName:"p"},"storybooks: pull request")," check, accessible via clicking the green check mark next to the commit title."),(0,i.kt)("img",{src:r,alt:"Example showing how to preview a Storybook build",width:"400px"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Since Storybook builds per commit, it can be helpful to send Storybook links around to Product, UX, or anyone else that may want to preview UI changes for a PR you have up before it's approved and merged.")),(0,i.kt)("h2",{id:"maintaining-storybook-builds"},"Maintaining Storybook Builds"),(0,i.kt)("p",null,"If you've been given access, the Google Cloud Platform project dashboard for the website can be ",(0,i.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/home/dashboard?project=storybook-static-sites"},"found here"),"."),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla-fxa/storybook-gcp-publisher"},"mozilla-fxa/storybook-gcp-publisher")," for publishing Storybook builds. Refer to its repository for full documentation."),(0,i.kt)("p",null,"For quick reference, here are a few ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla-fxa/storybook-gcp-publisher#basic-1"},"CircleCI environment variables")," used by ",(0,i.kt)("inlineCode",{parentName:"p"},"storybook-gcp-publisher")," that are relevant to FxA operations in CircleCI. Occasionally they may need maintenance or replacement (e.g. in case of a security incident involving another tool that exposes variables):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"STORYBOOKS_GITHUB_TOKEN")," - personal access token on GitHub for use in posting status check updates"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"STORYBOOKS_GCP_BUCKET")," - name of the GCP bucket to which Storybook builds will be uploaded"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"STORYBOOKS_GCP_PROJECT_ID")," - the ID of the GCP project to which the bucket belongs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"STORYBOOKS_GCP_CLIENT_EMAIL")," - client email address from GCP credentials with access to the bucket"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"STORYBOOKS_GCP_PRIVATE_KEY_BASE64")," - the private key from GCP credentials, encoded with base64 to accommodate line breaks")))}h.isMDXComponent=!0}}]);