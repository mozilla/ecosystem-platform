"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[758],{21235:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));a(29420);const i={title:"Application Tracing"},r="Distributed Application Tracing",s={unversionedId:"reference/application-tracing",id:"reference/application-tracing",title:"Application Tracing",description:"Distributed tracing allows developers to investigate how data flows between various parts of the application. At a high level a trace is just a series of events called spans that represent the timings and state of various operations. When properly implemented, tracing should let a developer visualize the data flowing between services, starting with a request at the client and flowing all the way to the database layer, or third party APIs, and back. Tracing can be useful for finding inefficiencies or errors in code that might otherwise be unrecognized or be difficult to track down.",source:"@site/docs/reference/application-tracing.md",sourceDirName:"reference",slug:"/reference/application-tracing",permalink:"/ecosystem-platform/reference/application-tracing",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/application-tracing.md",tags:[],version:"current",frontMatter:{title:"Application Tracing"},sidebar:"docs",previous:{title:"Application Logging",permalink:"/ecosystem-platform/reference/application-logging"},next:{title:"Scheduled Maintenance",permalink:"/ecosystem-platform/reference/scheduled-maintenance"}},l={},c=[{value:"System Diagrams",id:"system-diagrams",level:2},{value:"Terminology of Application Tracing",id:"terminology-of-application-tracing",level:2},{value:"Tooling",id:"tooling",level:3},{value:"General Concepts",id:"general-concepts",level:3},{value:"OpenTelemetry Concepts",id:"opentelemetry-concepts",level:3},{value:"Custom Instrumentation",id:"custom-instrumentation",level:3},{value:"Filtering PII",id:"filtering-pii",level:3},{value:"Some final guidelines for filtering PII are:",id:"some-final-guidelines-for-filtering-pii-are",level:4},{value:"Sending Traces to Google Cloud Trace Locally",id:"sending-traces-to-google-cloud-trace-locally",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"distributed-application-tracing"},"Distributed Application Tracing"),(0,o.kt)("p",null,"Distributed tracing allows developers to investigate how data flows between various parts of the application. At a high level a trace is just a series of events called spans that represent the timings and state of various operations. When properly implemented, tracing should let a developer visualize the data flowing between services, starting with a request at the client and flowing all the way to the database layer, or third party APIs, and back. Tracing can be useful for finding inefficiencies or errors in code that might otherwise be unrecognized or be difficult to track down."),(0,o.kt)("p",null,"We utilize ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"Open Telemetry")," to instrument our servers, collect, and export trace data. Open telemetry allows tracing to be fairly agnostic. Rather than implement a specific tracing solution, e.g. sentry tracing, a developer adds open telemetry and then configures it to export to various targets. It\u2019s also good to note that open telemetry supports more than just traces. In theory we could also use it to capture metrics and logs and then export them accordingly. However, at the time of writing this document, open telemetry is only being used for tracing. "),(0,o.kt)("h2",{id:"system-diagrams"},"System Diagrams"),(0,o.kt)("p",null,"Here is a general system diagram taken from open telemetry\u2019s website. As you can see various services, infrastructure, and clients are being instrumented. Spans and traces are being collected and sent to a collector service which then pushes them to a database for later viewing."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"otel system diagram",src:a(77354).Z,title:"image_tooltip",width:"622",height:"407"})),(0,o.kt)("p",null,"And for a more general FxA view on this. Here\u2019s a diagram showing how traces flow from clients and services to the collector, and are then directed to either jaeger for local development or google cloud trace for stage / production."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"otel system diagram",src:a(8497).Z,title:"image_tooltip",width:"622",height:"407"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Dotted lines represent interservice communication and yellow lines represent exported trace data.")),(0,o.kt)("h2",{id:"terminology-of-application-tracing"},"Terminology of Application Tracing"),(0,o.kt)("p",null,"Once some of the basic terminology for tracing is known it becomes quite approachable. Here\u2019s a quick run down of key terms that are particularly useful for understanding tracing in FxA\u2019s implementation. A full glossary can be found ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/concepts/glossary/"},"here"),"."),(0,o.kt)("h3",{id:"tooling"},"Tooling"),(0,o.kt)("p",null,"These are the software tools we use to trace. You'll see these get referenced a lot."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://opentelemetry.io/"},"Open Telemetry"))," - SDKs and APIs used to add distributed tracing to our applications. This provides auto instrumentation, and exports traces to various targets."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cloud.google.com/trace"},"Google Cloud Trace"))," - A cloud native GCP service that allows us to capture and view trace data."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.jaegertracing.io/go"},"Jaeger"))," - Similar to google cloud trace, this lets us capture and view traces, but it can be run locally with a stand alone docker container."),(0,o.kt)("h3",{id:"general-concepts"},"General Concepts"),(0,o.kt)("p",null,"Here's some terms that come up a lot when talking about tracing. They are universal to distributed tracing platforms."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Span")," - A span is just a single operation. In a nutshell it has a start/end time, attributes, some context, parent trace id, and previous span id."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Trace")," - A trace is just a set of spans held in a directed acyclic graph. Traces generally \u2018fan out\u2019, beginning with a single request, then showing all the subsequent requests that occur as data flows through the system."),(0,o.kt)("h3",{id:"opentelemetry-concepts"},"OpenTelemetry Concepts"),(0,o.kt)("p",null,"Here's some open telemetry terminology. These terms will be found in our source code, so they are worth mentioning."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Providers")," - This \u2018provides\u2019 a tracing solution. In our cases it does so for either a nodejs server or a web browser, and it contains the configuration for Samplering, Instrumentation, and Exporting,    "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Samplers")," - This makes the decision about whether or not to capture a trace. We generally capture a subset of traces to limit the amount of data collected."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Instrumentations")," - Hooks into existing code, typically popular npm modules, and wraps key calls with spans. This is where the \u2018magic\u2019 happens."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exporter")," - Sends spans to a target collector. In our case, some post processing may occur in the exporter. Our exporters are configured to send spans to google cloud trace, or jaeger for local development."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Collectors")," - Collects and aggregates spans sent from exporters. Collectors then generally store span data in one or more databases. Collectors may also do some post processing of the data and in some cases might make sampling decisions."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tracer")," - Used to create new spans"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Propagators")," - These allow trace context to propagate between services. Essentially it just decorates outbound messages with enough data so that the next service has enough info to keep the trace going. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Context")," - This is an object that is made available between spans inside a service. It operates in a nested manner. Here\u2019s an ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/concepts/glossary/"},"example of context"),"."),(0,o.kt)("h1",{id:"advanced-topics"},"Advanced Topics"),(0,o.kt)("p",null,"In all likelihood, viewing traces and setting a few configuration options is all that will ever be needed to work with tracing. However, there are a couple other topics for more advanced usage that are good to cover."),(0,o.kt)("h3",{id:"custom-instrumentation"},"Custom Instrumentation"),(0,o.kt)("p",null,"Instrumentation is the process of hooking into existing code so traces can be captured. This is mostly automatic. The ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@opentelemetry/auto-instrumentations-node"},"@opentelemetry/auto-instrumentations-node library")," provides \u2018auto\u2019 instrumentation which allows us to easily instrument most aspects of node applications. For example, auto instrumentation will capture all outbound HTTP requests, and sql queries."),(0,o.kt)("p",null,"By default, all instrumentations are enabled. In the future we may want to prefer more targeted instrumentation, as this would result in a smaller number of dependent packages; however, at the time of writing, the ability to easily instrument and gain awareness of all the things that can be traced outweighs the desire to have reduced dependencies."),(0,o.kt)("p",null,"The instrumentation portion of tracing may seem like a bit of magic at first, however, if you look under the hood at some of the source code you will see the instrumentations are actually pretty straightforward and follow some basic patterns. They use a combination of Asynchooks and good old fashion method hijacking to wrap spans around functions making requests. "),(0,o.kt)("p",null,"A lot can be learned from looking at existing trace implementations which can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-js-contrib/blob/main/plugins"},"here"),". Is there a custom integration that FxA needs?"),(0,o.kt)("p",null,"It's also easy to instrument a single portion of code manually. Perhaps you have a routine that might be time consuming, but you aren't sure exactly how time consuming it is. Wrapping it with a span is pretty easy. Just ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/instrumentation/js/instrumentation/#acquiring-a-tracer"},"aquire the tracer")," and ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/instrumentation/js/instrumentation/#create-nested-spans"},"wrap the routine with a new span"),". "),(0,o.kt)("h3",{id:"filtering-pii"},"Filtering PII"),(0,o.kt)("p",null,"It\u2019s important that we filter out any personally identifiable information from the data we capture in our traces. We should follow the same procedures that are followed for Sentry data. Essentially anything that might identify a user needs to be stripped out. A good example of PII is an email address. Essentially if the data contains something that can be used to identify a user uniquely it is likely PII. When in doubt, ask about the data in question."),(0,o.kt)("p",null,"In open telemetry filtering can happen in two ways. Some instrumentations support filtering data before it is even captured. Unfortunately, this is not uniform between instrumentations. Therefore, we will opt to filter on export. This allows us to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/6a415eb4c4aac4a5eabf4c79857b7874d09811b1/packages/fxa-shared/tracing/exporters/fxa-otlp.ts#L38"},"modify the data")," just before it is sent off. We have access to all the spans and their attributes / tags at this point in time. Simply mutating this data should be sufficient for filtering out PII. "),(0,o.kt)("h4",{id:"some-final-guidelines-for-filtering-pii-are"},"Some final guidelines for filtering PII are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Be proactive about removing PII from traces. If you see something in a trace that could uniquely identify a user, file a ticket calling it out!"),(0,o.kt)("li",{parentName:"ul"},"Ideally we still leave as much of the data intact as possible. For example, if there is a sql query containing an email address, if possible, leave the query intact and only filter out the email. E.g { query: ",(0,o.kt)("inlineCode",{parentName:"li"},"select * from users where email = [FILTERED]")," }  as opposed to { query: ",(0,o.kt)("inlineCode",{parentName:"li"},"[FILTERED]")," }"),(0,o.kt)("li",{parentName:"ul"},"Be mindful of performance. If a data field is to be processed, consider truncating it. - If there are an extremely large number of elements to loop through, consider short circuiting and remove elements that can\u2019t be processed. "),(0,o.kt)("li",{parentName:"ul"},"Keep in mind the goal is to provide as much info in the trace as possible while still being pragmatic about removing PII.")),(0,o.kt)("h3",{id:"sending-traces-to-google-cloud-trace-locally"},"Sending Traces to Google Cloud Trace Locally"),(0,o.kt)("p",null,"In the event that trace export isn\u2019t working properly on stage or production, the need to debug this locally might arise. If so, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/install"},"gcloud")," cli tool if you don\u2019t already have it."),(0,o.kt)("li",{parentName:"ol"},"Make sure you\u2019ve authenticated with gcloud locally, in order to export data. Once you have gcloud install, simply login with this command:\n",(0,o.kt)("inlineCode",{parentName:"li"},"gcloud auth application-default login")),(0,o.kt)("li",{parentName:"ol"},"Set your .env file up like this:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"     TRACING_SAMPLE_RATE=1\n     TRACING_BATCH_PROCESSING=false\n     TRACING_OTEL_EXPORTER_ENABLED=true\n     TRACING_OTEL_COLLECTOR_ENABLED=true\n     TRACING_OTEL_COLLECTOR_GCP_ENABLED=true\n"))),(0,o.kt)("li",{parentName:"ol"},"Stop pm2 ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn stop")),(0,o.kt)("li",{parentName:"ol"},"Start up the stack again with the .env file applied, ",(0,o.kt)("inlineCode",{parentName:"li"},"dotenv \u2014- yarn start")),(0,o.kt)("li",{parentName:"ol"},"Check the logs for the collector service, you should see mention of google cloud trace being supported, ",(0,o.kt)("inlineCode",{parentName:"li"},"pm2 log otel-collector")),(0,o.kt)("li",{parentName:"ol"},"Go to google cloud trace. If there are lots of traces try narrowing them down with the following filter, ",(0,o.kt)("inlineCode",{parentName:"li"},"FILTER:/http/host:localhost:9000"))))}u.isMDXComponent=!0},77354:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fxa-otel-system-diagram-3751506741c3b8c0b7e166136d5f52ea.png"},8497:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fxa-tracing-system-diagram-ebcfc4009389dbc75a8843a635f52049.png"}}]);