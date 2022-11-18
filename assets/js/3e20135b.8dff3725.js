"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[3487],{77169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));n(16758);const a={title:"Experiments & A/B Testing"},o=void 0,s={unversionedId:"reference/experiments-ab-testing",id:"reference/experiments-ab-testing",title:"Experiments & A/B Testing",description:"Current as of December 3rd, 2019",source:"@site/docs/reference/experiments-ab-testing.md",sourceDirName:"reference",slug:"/reference/experiments-ab-testing",permalink:"/ecosystem-platform/reference/experiments-ab-testing",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/experiments-ab-testing.md",tags:[],version:"current",frontMatter:{title:"Experiments & A/B Testing"},sidebar:"docs",previous:{title:"Internal API Documentation",permalink:"/ecosystem-platform/reference/internal-api-documentation"},next:{title:"System Diagrams",permalink:"/ecosystem-platform/reference/system-diagrams"}},l={},p=[{value:"Experiment grouping rules",id:"experiment-grouping-rules",level:2},{value:"Creating a new rule",id:"creating-a-new-rule",level:3},{value:"Determining choice within a view",id:"determining-choice-within-a-view",level:2},{value:"Functional and manual testing",id:"functional-and-manual-testing",level:2},{value:"Manual test",id:"manual-test",level:3},{value:"Functional test",id:"functional-test",level:3},{value:"Amplitude Metrics",id:"amplitude-metrics",level:2},{value:"<code>choose</code> recipes",id:"choose-recipes",level:2},{value:"feature flag",id:"feature-flag",level:3},{value:"Phased rollout feature flag",id:"phased-rollout-feature-flag",level:3},{value:"A/B test",id:"ab-test",level:3},{value:"Phased rollout A/B test",id:"phased-rollout-ab-test",level:3},{value:"Recursive calls to other rules",id:"recursive-calls-to-other-rules",level:3},{value:"Mutually exclusive grouping rules",id:"mutually-exclusive-grouping-rules",level:3},{value:"group_chooser.js",id:"group_chooserjs",level:4},{value:"experiment_1.js",id:"experiment_1js",level:4},{value:"experiment_2.js",id:"experiment_2js",level:4},{value:"View recipes",id:"view-recipes",level:2},{value:"Add the ExperimentMixin",id:"add-the-experimentmixin",level:3},{value:"Get the experiment group, report the choice to Amplitude",id:"get-the-experiment-group-report-the-choice-to-amplitude",level:3},{value:"Get the experiment group without reporting choice to Amplitude",id:"get-the-experiment-group-without-reporting-choice-to-amplitude",level:3},{value:"Is user in an experiment?",id:"is-user-in-an-experiment",level:3},{value:"Is user in a group?",id:"is-user-in-a-group",level:3},{value:"Pass additional data to <code>choose</code>",id:"pass-additional-data-to-choose",level:3},{value:"Ensuring experiment metrics are reported to Amplitude",id:"ensuring-experiment-metrics-are-reported-to-amplitude",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Current as of ",(0,i.kt)("inlineCode",{parentName:"p"},"December 3rd, 2019")),(0,i.kt)("p",null,"This document outlines how to add an experiment, A/B test, or phased rollout of a feature in the content server."),(0,i.kt)("h2",{id:"experiment-grouping-rules"},"Experiment grouping rules"),(0,i.kt)("p",null,"Every new experiment, A/B test, or phased rollout needs an experiment grouping\nrule. These rules decide whether a user is part of an experiment, and if so, which group."),(0,i.kt)("p",null,"An experiment grouping rule needs some metadata about the user, within\nthe rule the metadata is called ",(0,i.kt)("inlineCode",{parentName:"p"},"subject"),"."),(0,i.kt)("h3",{id:"creating-a-new-rule"},"Creating a new rule"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/app/scripts/lib/experiments/grouping-rules/TEMPLATE.js"},"TEMPLATE.js")," to a new grouping rule file."),(0,i.kt)("li",{parentName:"ol"},"Change ",(0,i.kt)("inlineCode",{parentName:"li"},"ChangeMeGroupingRule")," class name to another name."),(0,i.kt)("li",{parentName:"ol"},"Change ",(0,i.kt)("inlineCode",{parentName:"li"},"this.name")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"CHANGE_ME")," in the constructor."),(0,i.kt)("li",{parentName:"ol"},"Fill in the ",(0,i.kt)("inlineCode",{parentName:"li"},"choose")," function. See ",(0,i.kt)("a",{parentName:"li",href:"#choose-recipes"},(0,i.kt)("inlineCode",{parentName:"a"},"choose")," recipes")," for guidance on different experiment types."),(0,i.kt)("li",{parentName:"ol"},"Include the new grouping rule file in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/app/scripts/lib/experiments/grouping-rules/index.js"},"index.js"),"."),(0,i.kt)("li",{parentName:"ol"},"Add experiment name to one of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/app/scripts/lib/experiment.js"},"MANUAL_EXPERIMENTS or STARTUP_EXPERIMENTS")," to ensure test name/group are reported to Amplitude."),(0,i.kt)("li",{parentName:"ol"},"Access in views, see ",(0,i.kt)("a",{parentName:"li",href:"#view-recipes"},"View recipes"),".")),(0,i.kt)("h2",{id:"determining-choice-within-a-view"},"Determining choice within a view"),(0,i.kt)("p",null,"Once a grouping rule has been created, a view can make choices depending\non whether the user is in the experiment, and if so which group. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/app/scripts/views/mixins/experiment-mixin.js"},"ExperimentMixin")," ",(0,i.kt)("em",{parentName:"p"},"must")," be mixed in to the view for the view to have experiment capabilities."),(0,i.kt)("p",null,"See also: ",(0,i.kt)("a",{parentName:"p",href:"#view-recipes"},"View recipes"),"."),(0,i.kt)("h2",{id:"functional-and-manual-testing"},"Functional and manual testing"),(0,i.kt)("p",null,"To avoid random breakage of functional tests due to experiments, by default, ",(0,i.kt)("em",{parentName:"p"},"all")," experiments are disabled during test runs. It is however possible to force an\nexperiment using the ",(0,i.kt)("inlineCode",{parentName:"p"},"forceExperiment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"forceExperimentGroup")," query parameters."),(0,i.kt)("p",null,"Both of these examples force the user into the ",(0,i.kt)("inlineCode",{parentName:"p"},"treatment")," group of the ",(0,i.kt)("inlineCode",{parentName:"p"},"my-new-experiment")," experiment."),(0,i.kt)("h3",{id:"manual-test"},"Manual test"),(0,i.kt)("p",null,"In the URL bar, open:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://accounts.firefox.com/settings?forceExperiment=my-new-experiment&forceExperimentGroup=treatment"},"https://accounts.firefox.com/settings?forceExperiment=my-new-experiment&forceExperimentGroup=treatment"))),(0,i.kt)("h3",{id:"functional-test"},"Functional test"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  ...\n  'test new feature here': function () {\n    this.remote\n      .then(openPage('/settings', {\n        query: {\n          forceExperiment: 'my-new-experiment',\n          forceExperimentGroup: 'treatment'\n        }\n      }))\n      .then(testTreatmentGroupFunctionality());\n  },\n  ...\n")),(0,i.kt)("h2",{id:"amplitude-metrics"},"Amplitude Metrics"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"We no longer use Amplitude.  This section is out of date.")),(0,i.kt)("p",null,"As long as the experiment name is added to one of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/app/scripts/lib/experiment.js"},"MANUAL_EXPERIMENTS or STARTUP_EXPERIMENTS"),", the experiment name and group are reported to Amplitude and added to the user's ",(0,i.kt)("inlineCode",{parentName:"p"},"experiments")," user property. The Amplitude experiment name is in the form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"amplitudeExperimentName = ${snake_case(experimentName)}_${snake_case(groupName)}`\n")),(0,i.kt)("h2",{id:"choose-recipes"},(0,i.kt)("inlineCode",{parentName:"h2"},"choose")," recipes"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"subject")," parameter contains data used to determine the value returned from ",(0,i.kt)("inlineCode",{parentName:"p"},"choose"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"subject")," automatically ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/cc74b2bf5be4184d20c919aaa199677ebfd431d1/packages/fxa-content-server/app/scripts/lib/experiment.js#L216"},"contains the following fields"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"account")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/app/scripts/models/account.js#L1"},"Account model")," for the user.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"experimentGroupingRules")),(0,i.kt)("td",{parentName:"tr",align:null},"A reference to ",(0,i.kt)("em",{parentName:"td"},"all")," grouping rules. Used to recursively choose experiments")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"forceExperiment")),(0,i.kt)("td",{parentName:"tr",align:null},"the value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"forceExperiment")," query parameter. Used in functional/manual tests to force a particular experiment.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"forceExperimentGroup")),(0,i.kt)("td",{parentName:"tr",align:null},"the value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"forceExperimentGroup")," query parameter. Used in functional/manual tests to force a particular experiment group.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"isMetricsEnabledValue")),(0,i.kt)("td",{parentName:"tr",align:null},"A legacy of when metrics were sampled at 10%. Does not apply to Amplitude events.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"uniqueUserId")),(0,i.kt)("td",{parentName:"tr",align:null},"A stable UUID that is distinct from the user's uid. The same ",(0,i.kt)("inlineCode",{parentName:"td"},"uniqueUserId")," is used across multiple users of the same device to ensure multiple users of a single device receive the same experience.")))),(0,i.kt)("p",null,"Additional fields can be passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"choose")," via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/16e6295edc5d805ea5f7e00217f20d0bdbf4a9c2/packages/fxa-content-server/app/scripts/lib/experiment.js#L208"},(0,i.kt)("inlineCode",{parentName:"a"},"getExperimentGroup")),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"uniqueUserId")," is used to ensure multiple users receive the same experience on the same device. Conversely, a single user will have distinct ",(0,i.kt)("inlineCode",{parentName:"p"},"uniqueUserId"),"s on multiple devices. If the goal is for a single user to have the same experience across multiple devices, in the examples below replace ",(0,i.kt)("inlineCode",{parentName:"p"},"subject.uniqueUserId")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"subject.account.get('email')")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"subject.account.get('uid')"),"."),(0,i.kt)("h3",{id:"feature-flag"},"feature flag"),(0,i.kt)("p",null,"Return a boolean value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"choose (subject = {}) {\n  return subject.firefoxVersion >= MIN_FIREFOX_VERSION;\n}\n")),(0,i.kt)("h3",{id:"phased-rollout-feature-flag"},"Phased rollout feature flag"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"bernoulliTrial")," to return a Boolean value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const ROLLOUT_RATE = 0.3;\nchoose (subject = {}) {\n  return this.bernoulliTrial(ROLLOUT_RATE, subject.uniqueUserId);\n}\n")),(0,i.kt)("h3",{id:"ab-test"},"A/B test"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"uniformChoice")," to return the bucket choice."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"choose (subject = {}) {\n  const GROUPS = ['control', 'treatment'];\n  return this.uniformChoice(GROUPS, subject.uniqueUserId);\n}\n")),(0,i.kt)("h3",{id:"phased-rollout-ab-test"},"Phased rollout A/B test"),(0,i.kt)("p",null,"Combine ",(0,i.kt)("inlineCode",{parentName:"p"},"bernoulliTrial")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"uniformChoice"),".\nFirst, use ",(0,i.kt)("inlineCode",{parentName:"p"},"bernoulliTrial")," to determine if the user is\npart of the experiment. If the user is part of the experiment,\nuse ",(0,i.kt)("inlineCode",{parentName:"p"},"uniformChoice")," to determine which bucket."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"choose (subject = {}) {\n  const ROLLOUT_RATE = 0.3;\n  // first, determine if the user is part of the experiment.\n  if (this.bernoulliTrial(ROLLOUT_RATE, subject.uniqueUserId)) {\n    // User is part of the experiment, determine which bucket.\n    // 15% of users will be in `control`, 15% in `treatment`\n    const GROUPS = ['control', 'treatment'];\n    return this.uniformChoice(GROUPS, subject.uniqueUserId);\n  }\n  return false;\n}\n")),(0,i.kt)("h3",{id:"recursive-calls-to-other-rules"},"Recursive calls to other rules"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"subject")," will contain a reference to ",(0,i.kt)("inlineCode",{parentName:"p"},"experimentGroupingRules")," which can\nbe used to recursively call other tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"choose (subject = {}) {\n  const choice = this.uniformChoice(['recursive-rule-1', 'recursive-rule-2'], subject.uniqueUserId);\n  return subject.experimentGroupingRules.choose(choice, subject);\n}\n")),(0,i.kt)("h3",{id:"mutually-exclusive-grouping-rules"},"Mutually exclusive grouping rules"),(0,i.kt)("p",null,"Recursive rules can be used to implement mutual exclusion amongst two or more grouping rules."),(0,i.kt)("h4",{id:"group_chooserjs"},"group_chooser.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"constructor () {\n  super();\n  this.name = 'experiment-chooser';\n}\n\nchoose (subject = {}) {\n  return this.uniformChoice(['experiment-1', 'experiment-2'], subject.uniqueUserId);\n}\n")),(0,i.kt)("h4",{id:"experiment_1js"},"experiment_1.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"constructor () {\n  super();\n  this.name = 'experiment-1';\n}\n\nchoose (subject = {}) {\n  if (subject.experimentGroupingRules.choose('experiment-chooser') === this.name) {\n    // user is part of the experiment-1, determine which bucket.\n    const GROUPS = ['control', 'treatment'];\n    return this.uniformChoice(GROUPS, subject.uniqueUserId);\n  }\n}\n")),(0,i.kt)("h4",{id:"experiment_2js"},"experiment_2.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"constructor () {\n  super();\n  this.name = 'experiment-2';\n}\n\nchoose (subject = {}) {\n  if (subject.experimentGroupingRules.choose('experiment-chooser') === this.name) {\n    // user is part of the experiment-2, determine which bucket.\n    const GROUPS = ['control', 'treatment'];\n    return this.uniformChoice(GROUPS, subject.uniqueUserId);\n  }\n}\n")),(0,i.kt)("h2",{id:"view-recipes"},"View recipes"),(0,i.kt)("h3",{id:"add-the-experimentmixin"},"Add the ExperimentMixin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import BaseView from './base';\nimport Cocktail from '../lib/cocktail';\nimport ExperimentMixin from './mixins/experiment-mixin'\n\nclass MyView extends BaseView {\n  ...\n}\n\nCocktail.extend(\n  MyView,\n  ExperimentMixin\n);\n")),(0,i.kt)("h3",{id:"get-the-experiment-group-report-the-choice-to-amplitude"},"Get the experiment group, report the choice to Amplitude"),(0,i.kt)("p",null,"This is the most common form as well as the most flexible because\nit does everything necessary to report to Amplitude."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const experimentGroup = this.getAndReportExperimentGroup('experiment-2');\nif (experimentGroup === 'treatment') {\n    // do something awesome here.\n}\n")),(0,i.kt)("h3",{id:"get-the-experiment-group-without-reporting-choice-to-amplitude"},"Get the experiment group without reporting choice to Amplitude"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const experimentGroup = this.getExperimentGroup('experiment-2');\nif (experimentGroup === 'treatment') {\n    // do something awesome here.\n}\n")),(0,i.kt)("h3",{id:"is-user-in-an-experiment"},"Is user in an experiment?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"if (this.isInExperiment('experiment-2')) {\n    // do something awesome here.\n}\n")),(0,i.kt)("h3",{id:"is-user-in-a-group"},"Is user in a group?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"if (this.isInExperimentGroup('experiment-2', 'treatment')) {\n    // do something awesome here.\n}\n")),(0,i.kt)("h3",{id:"pass-additional-data-to-choose"},"Pass additional data to ",(0,i.kt)("inlineCode",{parentName:"h3"},"choose")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const country = getCountrySomehow();\nconst experimentGroup = this.getExperimentGroup('experiment-2', {\n  // can be used by `choose` to gate a feature on the user's country\n  country\n});\nif (experimentGroup === 'treatment') {\n    // do something awesome here.\n}\n")),(0,i.kt)("h2",{id:"ensuring-experiment-metrics-are-reported-to-amplitude"},"Ensuring experiment metrics are reported to Amplitude"),(0,i.kt)("p",null,"As noted in ",(0,i.kt)("a",{parentName:"p",href:"#creating-a-new-rule"},"Creating a new rule"),", the experiment name\n",(0,i.kt)("em",{parentName:"p"},"must")," be added to one of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/app/scripts/lib/experiment.js"},"MANUAL_EXPERIMENTS or STARTUP_EXPERIMENTS")," to ensure experiment metrics are reported to Amplitude."),(0,i.kt)("p",null,"Within a view, if the user is part of an experiment, ",(0,i.kt)("inlineCode",{parentName:"p"},"this.createExperiment(experimentName, groupName)")," must be called."))}m.isMDXComponent=!0}}]);