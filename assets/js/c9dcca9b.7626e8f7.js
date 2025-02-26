"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[7685],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}},75566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"how-tos/working-with-metrics","title":"Working with Metrics","description":"Last updated: May 21st, 2024","source":"@site/docs/how-tos/working-with-metrics.md","sourceDirName":"how-tos","slug":"/how-tos/working-with-metrics","permalink":"/ecosystem-platform/how-tos/working-with-metrics","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/working-with-metrics.md","tags":[],"version":"current","frontMatter":{"title":"Working with Metrics"},"sidebar":"docs","previous":{"title":"Using VS Code with FxA","permalink":"/ecosystem-platform/how-tos/using-vscode-with-fxa"},"next":{"title":"Rotating Secrets","permalink":"/ecosystem-platform/how-tos/rotating-secrets"}}');var r=n(74848),s=n(28453);const o={title:"Working with Metrics"},l="How do I...",a={},d=[{value:"...find documentation on Glean?",id:"find-documentation-on-glean",level:2},{value:"...enable Glean in my local development environment?",id:"enable-glean-in-my-local-development-environment",level:2},{value:"Auth server",id:"auth-server",level:3},{value:"Content server / Settings",id:"content-server--settings",level:3},{value:"...add more Glean events?",id:"add-more-glean-events",level:2},{value:"Auth server",id:"auth-server-1",level:3},{value:"Content server",id:"content-server",level:3},{value:"Settings",id:"settings",level:3},{value:"...view the Glean pings while debugging?",id:"view-the-glean-pings-while-debugging",level:2},{value:"Auth server",id:"auth-server-2",level:3},{value:"Content server / Settings",id:"content-server--settings-1",level:3},{value:"...create a new activity event?",id:"create-a-new-activity-event",level:2},{value:"...create a new flow event?",id:"create-a-new-flow-event",level:2},{value:"Auth server",id:"auth-server-3",level:3},{value:"Content server",id:"content-server-1",level:3},{value:"...create a new email event?",id:"create-a-new-email-event",level:2},{value:"...create a new Amplitude event?",id:"create-a-new-amplitude-event",level:2},{value:"Auth server",id:"auth-server-4",level:3},{value:"Content server",id:"content-server-2",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Last updated: ",(0,r.jsx)(t.code,{children:"May 21st, 2024"})]}),"\n",(0,r.jsxs)(t.p,{children:["Other relevant documents include our ",(0,r.jsx)(t.a,{href:"../reference/metrics",children:"metrics reference"})," and ",(0,r.jsx)(t.a,{href:"../explanation/metrics",children:"metrics explanation"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In Spring 2023, FxA began its migration to use Mozilla's ",(0,r.jsx)(t.a,{href:"https://mozilla.github.io/glean/book/",children:"Glean"})," for metrics.  At the time of writing, it is still ongoing.  Here you'll find the Glean related content at the top; information on older metric event types can be found at the bottom."]}),"\n",(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-do-i",children:"How do I..."})}),"\n",(0,r.jsx)(t.h2,{id:"find-documentation-on-glean",children:"...find documentation on Glean?"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://mozilla.github.io/glean/book/",children:"The Glean book"})," is very good.  We use ",(0,r.jsx)(t.a,{href:"https://github.com/mozilla/glean.js",children:"Glean.js"})," in FxA."]}),"\n",(0,r.jsx)(t.h2,{id:"enable-glean-in-my-local-development-environment",children:"...enable Glean in my local development environment?"}),"\n",(0,r.jsx)(t.h3,{id:"auth-server",children:"Auth server"}),"\n",(0,r.jsxs)(t.p,{children:["Set the env var ",(0,r.jsx)(t.code,{children:"AUTH_GLEAN_ENABLED"})," to true."]}),"\n",(0,r.jsx)(t.h3,{id:"content-server--settings",children:"Content server / Settings"}),"\n",(0,r.jsxs)(t.ol,{start:"0",children:["\n",(0,r.jsxs)(t.li,{children:["Set the env var ",(0,r.jsx)(t.code,{children:"GLEAN_ENABLED"})," to true."]}),"\n",(0,r.jsxs)(t.li,{children:["Use ",(0,r.jsx)(t.code,{children:"GLEAN_UPLOAD_ENABLED"}),", with a value of true or false, to toggle the ",(0,r.jsx)(t.a,{href:"https://mozilla.github.io/glean/book/reference/general/toggling-upload-status.html",children:"upload status"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"add-more-glean-events",children:"...add more Glean events?"}),"\n",(0,r.jsx)(t.p,{children:'Initially FxA used a string metric for the event name, so adding an "event" merely involved a new string.  At the time of writing, we are migrating to Glean\'s event metric type.  To add a new event now, we need to declare it in the appropriate YAML.'}),"\n",(0,r.jsxs)(t.p,{children:["For event specific properties, we have a ",(0,r.jsx)(t.code,{children:"event.reason"})," string metric to capture some additional, ",(0,r.jsx)(t.code,{children:"event.name"}),"-specific information.  Moving forward, we should use the ",(0,r.jsx)(t.a,{href:"https://mozilla.github.io/glean/book/reference/metrics/event.html#extra-metric-parameters",children:(0,r.jsx)(t.code,{children:"extra_keys"})})," in the event for these event properties."]}),"\n",(0,r.jsx)(t.h3,{id:"auth-server-1",children:"Auth server"}),"\n",(0,r.jsxs)(t.ol,{start:"0",children:["\n",(0,r.jsxs)(t.li,{children:["Update the YAML in ",(0,r.jsx)(t.code,{children:"packages/fxa-shared/metrics/glean/fxa-backend-metrics.yaml"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Run ",(0,r.jsx)(t.code,{children:"yarn glean-generate"})," from ",(0,r.jsx)(t.code,{children:"packages/fxa-auth-server"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Update ",(0,r.jsx)(t.code,{children:"gleanMetrics"})," in ",(0,r.jsx)(t.code,{children:"packages/fxa-auth-server/lib/metrics/glean/index.ts"})," to add the event.  Ensure that you call the ",(0,r.jsx)(t.code,{children:"record*"})," method on the new event by adding another case in the big switch statement in ",(0,r.jsx)(t.code,{children:"createEventFn"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"content-server",children:"Content server"}),"\n",(0,r.jsxs)(t.ol,{start:"0",children:["\n",(0,r.jsxs)(t.li,{children:["Update the YAML in ",(0,r.jsx)(t.code,{children:"packages/fxa-shared/metrics/glean/fxa-ui-metrics.yaml"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Run ",(0,r.jsx)(t.code,{children:"yarn glean-generate"})," from ",(0,r.jsx)(t.code,{children:"packages/fxa-content-server"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Update ",(0,r.jsx)(t.code,{children:"GleanMetrics"})," in ",(0,r.jsx)(t.code,{children:"packages/fxa-content-server/app/scripts/lib/glean/index.ts"})," so its API exposes a function for the event.  Also ensure that you add the new event to the switch statement in ",(0,r.jsx)(t.code,{children:"recordEventMetric"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"settings",children:"Settings"}),"\n",(0,r.jsxs)(t.ol,{start:"0",children:["\n",(0,r.jsxs)(t.li,{children:["Update the YAML in ",(0,r.jsx)(t.code,{children:"packages/fxa-shared/metrics/glean/fxa-ui-metrics.yaml"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Run ",(0,r.jsx)(t.code,{children:"yarn glean-generate"})," from ",(0,r.jsx)(t.code,{children:"packages/fxa-shared"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Add the event to ",(0,r.jsx)(t.code,{children:"eventsMap"})," in ",(0,r.jsx)(t.code,{children:"packages/fxa-shared/metrics/glean/web/index.ts"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Update ",(0,r.jsx)(t.code,{children:"recordEventMetric"})," in ",(0,r.jsx)(t.code,{children:"packages/fxa-settings/src/lib/glean/index.ts"})," to include the new event in the switch statement."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"view-the-glean-pings-while-debugging",children:"...view the Glean pings while debugging?"}),"\n",(0,r.jsx)(t.h3,{id:"auth-server-2",children:"Auth server"}),"\n",(0,r.jsxs)(t.p,{children:["Grep for ",(0,r.jsx)(t.code,{children:"glean-server-event"})," in ",(0,r.jsx)(t.code,{children:"auth-out.log"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"content-server--settings-1",children:"Content server / Settings"}),"\n",(0,r.jsxs)(t.ol,{start:"0",children:["\n",(0,r.jsxs)(t.li,{children:["Set ",(0,r.jsx)(t.code,{children:"GLEAN_LOG_PINGS"})," to true to see the pings in the page's JS console."]}),"\n",(0,r.jsxs)(t.li,{children:["Set ",(0,r.jsx)(t.code,{children:"GLEAN_DEBUG_VIEW_TAG"})," to some string to see the pings in the ",(0,r.jsx)(t.a,{href:"https://debug-ping-preview.firebaseapp.com/",children:"Debug Ping Viewer"}),".  For example, if you set a value of 'bchen-local-dev', then you can view the pings at ",(0,r.jsx)(t.a,{href:"https://debug-ping-preview.firebaseapp.com/pings/bchen-local-dev",children:"https://debug-ping-preview.firebaseapp.com/pings/bchen-local-dev"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"create-a-new-activity-event",children:"...create a new activity event?"}),"\n",(0,r.jsxs)(t.ol,{start:"0",children:["\n",(0,r.jsxs)(t.li,{children:["Add the event name to ",(0,r.jsx)(t.code,{children:"ACTIVITY_EVENTS"})," in ",(0,r.jsx)(t.code,{children:"lib/metrics/events.js"}),". Unless it\u2019s also a flow event (most new events will be one or the other), you should also add it to ",(0,r.jsx)(t.code,{children:"NOT_FLOW_EVENTS"})," in the same module."]}),"\n",(0,r.jsxs)(t.li,{children:["Emit the new event in code like ",(0,r.jsx)(t.code,{children:"request.emitMetricsEvent('foo.bar', { uid })"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Wherever you emit it, add test cases to cover that the event is correctly logged."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"create-a-new-flow-event",children:"...create a new flow event?"}),"\n",(0,r.jsx)(t.h3,{id:"auth-server-3",children:"Auth server"}),"\n",(0,r.jsxs)(t.ol,{start:"0",children:["\n",(0,r.jsxs)(t.li,{children:["Emit the new event in code like ",(0,r.jsx)(t.code,{children:"request.emitMetricsEvent('foo.bar')"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Wherever you emit it, add test cases to cover that the event is correctly logged."}),"\n",(0,r.jsxs)(t.li,{children:["Be aware that flow events are only emitted if you have a ",(0,r.jsx)(t.code,{children:"metricsContext"}),". If there\u2019s one in the payload for the current route, you\u2019re all good. If not, the code will try to read one from Redis for you. But a previous call to ",(0,r.jsx)(t.code,{children:"request.stashMetricsContext"})," or ",(0,r.jsx)(t.code,{children:"request.propagateMetricsContext"})," will need to have been made with the token that your request is authenticated by. Maybe that\u2019s done already, maybe it isn\u2019t, you\u2019ll need to trace the request flow and grep the code."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"content-server-1",children:"Content server"}),"\n",(0,r.jsxs)(t.ol,{start:"0",children:["\n",(0,r.jsxs)(t.li,{children:["On the front-end, make sure your view has mixed in ",(0,r.jsx)(t.code,{children:"FlowEventsMixin"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["view and engage events will be emitted automatically when you add the mixin, for other events you need to call ",(0,r.jsx)(t.code,{children:"this.logFlowEvent"})," from your view."]}),"\n",(0,r.jsx)(t.li,{children:"Add test coverage for the new event to your view unit tests."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"create-a-new-email-event",children:"...create a new email event?"}),"\n",(0,r.jsx)(t.p,{children:"You don\u2019t need to do this, it\u2019s all set up to work automatically."}),"\n",(0,r.jsx)(t.h2,{id:"create-a-new-amplitude-event",children:"...create a new Amplitude event?"}),"\n",(0,r.jsx)(t.h3,{id:"auth-server-4",children:"Auth server"}),"\n",(0,r.jsxs)(t.ol,{start:"0",children:["\n",(0,r.jsx)(t.li,{children:"Amplitude events are all triggered by activity or flow events, so the first step is to ensure there\u2019s one of those (see above if you need to create a new one)."}),"\n",(0,r.jsxs)(t.li,{children:["If you\u2019re triggering from a specific event, add a new mapping to the ",(0,r.jsx)(t.code,{children:"EVENTS"})," object in ",(0,r.jsx)(t.code,{children:"lib/metrics/amplitude.js"}),". If you\u2019re triggering from a set of events, add a mapping to ",(0,r.jsx)(t.code,{children:"FUZZY_EVENTS"})," instead."]}),"\n",(0,r.jsxs)(t.li,{children:["Add a new test case for the new event to ",(0,r.jsx)(t.code,{children:"test/local/metrics/amplitude.js"}),". Every event should have its own test case in that module."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"content-server-2",children:"Content server"}),"\n",(0,r.jsxs)(t.ol,{start:"0",children:["\n",(0,r.jsx)(t.li,{children:"Amplitude events are all triggered by flow or screen events, so the first step is to ensure there\u2019s one of those (see above if you need to create a new flow event)."}),"\n",(0,r.jsxs)(t.li,{children:["If you\u2019re triggering from a specific event, add a new mapping to the ",(0,r.jsx)(t.code,{children:"EVENTS"})," object in ",(0,r.jsx)(t.code,{children:"server/lib/amplitude.js"}),". If you\u2019re triggering from a set of events, add a mapping to ",(0,r.jsx)(t.code,{children:"FUZZY_EVENTS"})," instead."]}),"\n",(0,r.jsxs)(t.li,{children:["Add a new test case for the new event to ",(0,r.jsx)(t.code,{children:"tests/server/amplitude.js"}),". Every event should have its own test case in that module."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);