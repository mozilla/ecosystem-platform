"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[3860],{29273:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(16758);const r={title:"Metrics"},s=void 0,o={unversionedId:"explanation/metrics",id:"explanation/metrics",title:"Metrics",description:"Last updated: March 21st, 2022",source:"@site/docs/explanation/metrics.md",sourceDirName:"explanation",slug:"/explanation/metrics",permalink:"/ecosystem-platform/explanation/metrics",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/explanation/metrics.md",tags:[],version:"current",frontMatter:{title:"Metrics"},sidebar:"docs",previous:{title:"Using Swagger for API documentation",permalink:"/ecosystem-platform/reference/using-swagger-for-api-documentation"},next:{title:"onepw Protocol",permalink:"/ecosystem-platform/explanation/onepw-protocol"}},l={},d=[{value:"So, where does that leave us?",id:"so-where-does-that-leave-us",level:2},{value:"Auth server",id:"auth-server",level:2},{value:"Content server",id:"content-server",level:2},{value:"Event Broker",id:"event-broker",level:2},{value:"Payments server",id:"payments-server",level:2},{value:"Relying Parties",id:"relying-parties",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Last updated: ",(0,i.kt)("inlineCode",{parentName:"p"},"March 21st, 2022")),(0,i.kt)("p",null,"Please read our ",(0,i.kt)("a",{parentName:"p",href:"../reference/metrics"},"metrics reference")," before this document as it has the context of our current system in it.  The document below is about ",(0,i.kt)("em",{parentName:"p"},"application metrics"),"."),(0,i.kt)("h1",{id:"a-brief-history"},"A brief history"),(0,i.kt)("p",null,"The FxA metrics ecosystem is arcane and esoteric, so a brief history of how we got to where we are may be helpful to understand the landscape."),(0,i.kt)("p",null,"In the beginning there were simple ",(0,i.kt)("em",{parentName:"p"},"activity events"),". These were basic events emitted from the auth and oauth servers, visualised via now defunct dashboards."),(0,i.kt)("p",null,"They provided useful insights from a high level about things like how many sign-ins and sign-ups there were. But they didn\u2019t allow us to follow a user\u2019s journey through a sign-in or sign-up flow, which include email verification steps that may take place across multiple devices."),(0,i.kt)("p",null,"So the ",(0,i.kt)("em",{parentName:"p"},"flow events")," were created, stored in Redshift and visualised in Redash (and the existing activity metrics were moved to Redshift/Redash at the same time)."),(0,i.kt)("p",null,"Flow events include two extra pieces of metadata, a flow id and a flow begin-time, which gave us more detailed insight into user behaviour. And, unlike the activity events, these were also emitted by client-side code in the content server."),(0,i.kt)("p",null,"The flow events proved handy for some use-cases that they weren\u2019t meant for, so we started piggy-backing other things like performance metrics, post-sign-in activity and email events on them too. That stressed the infrastructure somewhat, but also gave us the ability to e.g. directly link perf metrics to user behaviour, which was an unexpected new superpower."),(0,i.kt)("p",null,"The stressed infrastructure meant queries ran pretty slowly though and they required SQL knowledge. And the organic growth of the event schema meant there were issues around inconsistent nomenclature confusing people. And they were ingested via Heka, which meant working with an unfamiliar language (Lua) in an environment that was hard to meaningfully test without just pushing your changes and seeing whether they worked. And we never got round to ingesting the events more frequently than daily, so people were frustrated about having to wait a day to see stuff show up in charts."),(0,i.kt)("p",null,"For all of those reasons, at the end of 2017 Amplitude was chosen as a paid-for replacement for the more producty metrics we were sending to Redshift.  We called these ",(0,i.kt)("em",{parentName:"p"},"Amplitude Events"),"."),(0,i.kt)("p",null,"These had some really good properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The event schema was designed in advance, so it would be less confusing"),(0,i.kt)("li",{parentName:"ul"},"We sent these events in real time.  This was a huge improvement over the 24hr+ lag we were used to"),(0,i.kt)("li",{parentName:"ul"},"Nobody had to wrestle with SQL any more")),(0,i.kt)("p",null,"They also had some really bad properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Amplitude service is expensive and we send a lot of events"),(0,i.kt)("li",{parentName:"ul"},"Due to #1, we decided to only send a subset of events.  This means there were now two places you have to look if you don't know exactly what you need.")),(0,i.kt)("p",null,"In June 2020 we stopped using Amplitude due to cost.  That leaves us with a lot of things referring to ",(0,i.kt)("em",{parentName:"p"},"amplitude events")," still.  That's fine for identifying that subset of events, but understand we don't actually use Amplitude anymore."),(0,i.kt)("h2",{id:"so-where-does-that-leave-us"},"So, where does that leave us?"),(0,i.kt)("p",null,"Well, it's a bit complicated and you should make sure you've read our ",(0,i.kt)("a",{parentName:"p",href:"../reference/metrics"},"metrics reference")," first."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"firefox_accounts")," dataset in the ",(0,i.kt)("inlineCode",{parentName:"p"},"mozdata")," project:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fxa_[server]_*")," tables will be most of the amplitude events"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fxa_log_[server]_*")," tables will be most of the flow events")),(0,i.kt)("p",null,"However, there are a bunch of other tables in there as well.  In short, only experience can really help you find the data you are looking for if there isn't already a dashboard for it.  Ask the FxA team or #data-help in slack."),(0,i.kt)("h1",{id:"how-are-metrics-emitted"},"How are metrics emitted?"),(0,i.kt)("h2",{id:"auth-server"},"Auth server"),(0,i.kt)("p",null,"Activity events, flow events and amplitude events are all just mozlog-format log lines. There are functions for each of them in the module ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/log.js"),", respectively called ",(0,i.kt)("inlineCode",{parentName:"p"},"activityEvent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"flowEvent")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"amplitudeEvent"),". However, to reduce boilerplate in the codebase they\u2019re actually invoked via calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"request.emitMetricsEvent"),". That function is defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/metrics/events.js")," and is decorated onto the request object by some code in ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/server.js"),"."),(0,i.kt)("p",null,"Activity events must have a ",(0,i.kt)("inlineCode",{parentName:"p"},"uid")," property. Some call sites also set ",(0,i.kt)("inlineCode",{parentName:"p"},"device_id"),". Properties containing user agent information and the OAuth client id are set automatically based on the request object."),(0,i.kt)("p",null,"Flow events have their properties set automatically too, either from the request object or, if there is an authentication token of some kind, from data stored against the uid and token id in memcached. This data is widely referred to as ",(0,i.kt)("inlineCode",{parentName:"p"},"metricsContext")," throughout the codebase and has a lifetime of 2 hours, which is kind of an arbitrary limit that allows us to fetch data for most flows while ignoring dubious data from stale or non-authentic sources. The ",(0,i.kt)("inlineCode",{parentName:"p"},"metricsContext")," is written to memcached via calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"request.stashMetricsContext")," (where it\u2019s copied from the request data) and ",(0,i.kt)("inlineCode",{parentName:"p"},"request.propagateMetricsContext")," (where it\u2019s copied from some other stashed data). Those functions are both defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/metrics/context.js")," and decorated onto the request object in ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/server.js"),"."),(0,i.kt)("p",null,"Amplitude events are not explicitly emitted (note the exception in ",(0,i.kt)("a",{parentName:"p",href:"#payments-server"},"fxa-payments-server"),"), because they can all be mapped to from previously-existing activity or flow events. Those mappings are defined by structures called ",(0,i.kt)("inlineCode",{parentName:"p"},"EVENTS")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FUZZY_EVENTS")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/metrics/amplitude.js"),". Any event matching a string key from ",(0,i.kt)("inlineCode",{parentName:"p"},"EVENTS")," or a regex key from ",(0,i.kt)("inlineCode",{parentName:"p"},"FUZZY_EVENTS")," gets transformed into the corresponding event by common code in the ",(0,i.kt)("inlineCode",{parentName:"p"},"fxa-shared")," package (it\u2019s also used by the content server). Most of the properties on those events are set automatically, although there are still some cases where data must be set explicitly at the call site."),(0,i.kt)("p",null,"StatsD is used to capture latency performance metrics on SQS calls, SNS calls, Stripe calls, and any HTTP API requests handled by ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/backendService.js")," (e.g. requests to our customs server).  It is also used to time the server's request handling on all routes."),(0,i.kt)("h2",{id:"content-server"},"Content server"),(0,i.kt)("p",null,"Again, flow events and amplitude events in the content server are just mozlog-format log lines. But before they can be logged on the back-end, the front-end has to submit them to the endpoint POST ",(0,i.kt)("inlineCode",{parentName:"p"},"/metrics")," first. This is handled by the module ",(0,i.kt)("inlineCode",{parentName:"p"},"app/scripts/lib/metrics.js"),"."),(0,i.kt)("p",null,"The front-end also needs to make sure it has a ",(0,i.kt)("inlineCode",{parentName:"p"},"flowId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"flowBeginTime"),", either from ",(0,i.kt)("inlineCode",{parentName:"p"},"data- attributes")," on the body element that were set by the back-end, or from data propagated in the resume token. In both cases, the data is loaded by ",(0,i.kt)("inlineCode",{parentName:"p"},"app/scripts/models/flow.js"),"."),(0,i.kt)("p",null,"After they reach the back-end, events are processed by ",(0,i.kt)("inlineCode",{parentName:"p"},"server/lib/flow-event.js"),". And, just like the auth server, there are ",(0,i.kt)("inlineCode",{parentName:"p"},"EVENTS")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FUZZY_EVENTS")," mappings to control transformations to amplitude events in ",(0,i.kt)("inlineCode",{parentName:"p"},"server/lib/amplitude.js"),"."),(0,i.kt)("h2",{id:"event-broker"},"Event Broker"),(0,i.kt)("p",null,"StatsD is used to collect SQS processing latency metrics and message type counts.  Details are on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-event-broker#metrics"},"the package's README"),"."),(0,i.kt)("h2",{id:"payments-server"},"Payments server"),(0,i.kt)("p",null,"One thing to keep in mind is that users should not access the pages on Payments directly.  The Content server will redirect them to the Payments server, along with metrics related query params.  Those query params are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flow_id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flow_begin_time")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"device_id"))),(0,i.kt)("p",null,"They are converted to ",(0,i.kt)("inlineCode",{parentName:"p"},"camelCase")," once in Payments."),(0,i.kt)("p",null,"The main module on the front end for emitting events is ",(0,i.kt)("inlineCode",{parentName:"p"},"src/lib/flow-events.ts"),".  Its ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," function is called in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),", during which the three query params above are passed into the module."),(0,i.kt)("p",null,"A call to ",(0,i.kt)("inlineCode",{parentName:"p"},"logAmplitudeEvent")," results in a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/metrics"),", which is handled by ",(0,i.kt)("inlineCode",{parentName:"p"},"server/lib/routes/post-metrics.js"),".  The events are log lines in identitical formats to those emitted by Content server."),(0,i.kt)("p",null,"The Payments frontend reports the timing data surfaced by ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/navigation-timing-2/"},"Navigation Timing Level 2")," back to the server side, which then sends the calculated performance metrics to our statsD server.  One major difference between these performance metrics and those in Redshift for Content Server is that these do not have a flow id to connect the timings into a performance overview for a particular request."),(0,i.kt)("h2",{id:"relying-parties"},"Relying Parties"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/ecosystem-platform/relying-parties/reference/metrics-for-relying-parties"},"metrics for relying parties"),"."),(0,i.kt)("h1",{id:"what-other-docs-are-there"},"What other docs are there?"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"These are pretty old and may not be accurate")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-auth-server/docs/metrics-events.md"},"https://github.com/mozilla/fxa/blob/main/packages/fxa-auth-server/docs/metrics-events.md")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/docs/client-metrics.md"},"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/docs/client-metrics.md"))))}m.isMDXComponent=!0}}]);