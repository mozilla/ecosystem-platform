"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[9643],{67499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=a(87462),o=(a(67294),a(3905));a(8209);const i={title:"Metrics"},n=void 0,l={unversionedId:"reference/metrics",id:"reference/metrics",title:"Metrics",description:"Last updated: March 21st, 2022",source:"@site/docs/reference/metrics.md",sourceDirName:"reference",slug:"/reference/metrics",permalink:"/ecosystem-platform/reference/metrics",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/metrics.md",tags:[],version:"current",frontMatter:{title:"Metrics"},sidebar:"docs",previous:{title:"Localization",permalink:"/ecosystem-platform/reference/localization"},next:{title:"Tokens",permalink:"/ecosystem-platform/reference/tokens"}},s={},m=[],d={toc:m};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Last updated: ",(0,o.kt)("inlineCode",{parentName:"p"},"March 21st, 2022")),(0,o.kt)("p",null,"Firefox accounts collects metrics from servers running our code and clients accessing our services.  Mozilla takes data collection seriously so our policies and processes around it may seem more complex than most organizations but it is in an effort to grant agency to users over their own data."),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.mozilla.org/Data_Collection"},"Mozilla Data Collection policies")," apply to Firefox Accounts."),(0,o.kt)("p",null,"Our code is deployed to a staging environment before it goes to production so the metrics detailed below are available for both environments.  The details below will focus mostly on production."),(0,o.kt)("p",null,"Keep in mind that Firefox accounts allows users to opt-out of data collection via a toggle on the account settings page."),(0,o.kt)("p",null,"We also have a ",(0,o.kt)("a",{parentName:"p",href:"../explanation/metrics"},"metrics section which expands on the history of our system and how these are implemented"),"."),(0,o.kt)("h1",{id:"application-metrics"},"Application metrics"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Derived tables do not include all the events in the original logs.  You can read the queries that create the derived tables to see what is included.")),(0,o.kt)("p",null,"These are logs from Firefox accounts code.  These are probably the most useful logs for product decision making as they were written by hand by engineers.  They are also the most comlex."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example data recorded",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"See the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.telemetry.mozilla.org/datasets/fxa.html"},"taxonomies in the Mozilla Data Docs"),"."))),(0,o.kt)("li",{parentName:"ul"},"Recorded with",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"These are logged via ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mozilla/mozlog/"},"mozlog")," as regular server logs."),(0,o.kt)("li",{parentName:"ul"},"The logs are immediately ingested into ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/logging"},"GCP Cloud Logging")),(0,o.kt)("li",{parentName:"ul"},"From there they are passed and stored in BigQuery in the ",(0,o.kt)("inlineCode",{parentName:"li"},"fxa-prod")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"fxa-nonprod")," projects depending on which environment they are coming out of.  These projects are relatively restricted and not for general consumption."),(0,o.kt)("li",{parentName:"ul"},"Every 24 hours, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mozilla/bigquery-etl/tree/main/sql/moz-fx-data-shared-prod/firefox_accounts_derived"},"some ETL jobs")," run which create derived tables from the original logs and store them in the ",(0,o.kt)("inlineCode",{parentName:"li"},"mozdata")," project in BigQuery.  ",(0,o.kt)("inlineCode",{parentName:"li"},"mozdata")," is accessible by anyone at Mozilla."),(0,o.kt)("li",{parentName:"ul"},"Additionally, there are some ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mozilla/bigquery-etl/tree/main/sql/moz-fx-data-shared-prod/firefox_accounts"},"user-facing datasets")," of that same data, and also in ",(0,o.kt)("inlineCode",{parentName:"li"},"mozdata"),", which are designed to be easier to use."))),(0,o.kt)("li",{parentName:"ul"},"Accessible via",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/bigquery?"},"BigQuery"),".  Look for the ",(0,o.kt)("inlineCode",{parentName:"li"},"firefox_accounts")," dataset in the ",(0,o.kt)("inlineCode",{parentName:"li"},"mozdata")," project.  ",(0,o.kt)("em",{parentName:"li"},"Be aware that there are large amounts of data in BigQuery and you can spend a lot of money if you don't restrict your queries.")),(0,o.kt)("li",{parentName:"ul"},"Looker is backed by BigQuery and there is a ",(0,o.kt)("a",{parentName:"li",href:"https://mozilla.cloud.looker.com/folders/374"},"Firefox Accounts folder")," there"),(0,o.kt)("li",{parentName:"ul"},"There are ",(0,o.kt)("a",{parentName:"li",href:"https://earthangel-b40313e5.influxcloud.net/?orgId=1&search=open&query=fxa"},"several dashboards in grafana")," with a mix of these metrics on them"),(0,o.kt)("li",{parentName:"ul"})))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you need real-time data you need to be looking at the raw logs in ",(0,o.kt)("inlineCode",{parentName:"p"},"fxa-prod"),".  Otherwise there will be a 24 hour delay on the data.  We don't run our normal metrics out of those logs because it is too expensive and slow.")),(0,o.kt)("h1",{id:"crashes"},"Crashes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example data recorded:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"t is undefined")," and a link to the JS that failed to run"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"An internal validation check failed.")," and details about what the software expected to see and what it actually saw"))),(0,o.kt)("li",{parentName:"ul"},"Recorded with",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sentry"))),(0,o.kt)("li",{parentName:"ul"},"Accessible via",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sentry.prod.mozaws.net/operations/"},"Sentry")),(0,o.kt)("li",{parentName:"ul"},"Look for any project starting with ",(0,o.kt)("inlineCode",{parentName:"li"},"fxa-"),".  Eg. ",(0,o.kt)("inlineCode",{parentName:"li"},"fxa-auth-prod")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"fxa-content-client-prod"))))),(0,o.kt)("h1",{id:"server-health"},"Server Health"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example data recorded",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"There are 30 healthy hosts running"),(0,o.kt)("li",{parentName:"ul"},"A host is running at 100% cpu"))),(0,o.kt)("li",{parentName:"ul"},"Recorded with",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The reporting tools built into the clouds we use"))),(0,o.kt)("li",{parentName:"ul"},"Accessible via",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In their most detailed form, you'd need access to the cloud consoles themselves, but most of the data is also available in our Grafana instance.  ",(0,o.kt)("a",{parentName:"li",href:"https://earthangel-b40313e5.influxcloud.net/d/HqOQKXoZk/fxa-auth-prod-elb?orgId=1"},"Here is one of our dashboards hitting CloudWatch for metrics"))))),(0,o.kt)("h1",{id:"front-end-performance"},"Front-end Performance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example data recorded",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It took 400ms to load ",(0,o.kt)("inlineCode",{parentName:"li"},"/settings")))),(0,o.kt)("li",{parentName:"ul"},"Recorded with",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"As of this writing we record the data using our own library (which maybe isn't totally accurate) and write the data via ",(0,o.kt)("inlineCode",{parentName:"li"},"statsd")," which ends up in influxdb.  We expect to move to ",(0,o.kt)("a",{parentName:"li",href:"https://sentry.io/for/performance/"},"Sentry Performance")," soon"))),(0,o.kt)("li",{parentName:"ul"},"Accessible via",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Look for the ",(0,o.kt)("inlineCode",{parentName:"li"},"svcops_aws")," project in Grafana.  ",(0,o.kt)("a",{parentName:"li",href:"https://earthangel-b40313e5.influxcloud.net/d/1tthDDrWk/content-server?orgId=1"},"Here is a dashboard with some examples"))))))}c.isMDXComponent=!0}}]);