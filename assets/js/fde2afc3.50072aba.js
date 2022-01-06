"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[4126],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),g=i,m=f["".concat(l,".").concat(g)]||f[g]||p[g]||r;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32620:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],s={id:"using-the-staging-environment",title:"Using the Staging Environment",sidebar_label:"Using the Staging Environment"},l=void 0,c={unversionedId:"platform/firefox-sync/using-the-staging-environment",id:"platform/firefox-sync/using-the-staging-environment",isDocsHomePage:!1,title:"Using the Staging Environment",description:"Overview",source:"@site/docs/platform/firefox-sync/using-the-staging-environment.md",sourceDirName:"platform/firefox-sync",slug:"/platform/firefox-sync/using-the-staging-environment",permalink:"/ecosystem-platform/platform/firefox-sync/using-the-staging-environment",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/main/website/docs/platform/firefox-sync/using-the-staging-environment.md",tags:[],version:"current",frontMatter:{id:"using-the-staging-environment",title:"Using the Staging Environment",sidebar_label:"Using the Staging Environment"},sidebar:"docs",previous:{title:"Sync Testing",permalink:"/ecosystem-platform/platform/firefox-sync/sync-testing"},next:{title:"Overview",permalink:"/ecosystem-platform/platform/sub-plat/sub-plat-overview"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Working with Staging Firefox Accounts",id:"working-with-staging-firefox-accounts",children:[{value:"Desktop",id:"desktop",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]}]},{value:"How do I...",id:"how-do-i",children:[]},{value:"...create a new Firefox Profile?",id:"create-a-new-firefox-profile",children:[]}],p={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Staging is available in order to test against an environment that more closely mirrors production. Here is where you can access production-like logs, perform load tests, and work with various Firefox clients that can be more difficult to configure locally."),(0,r.kt)("h2",{id:"working-with-staging-firefox-accounts"},"Working with Staging Firefox Accounts"),(0,r.kt)("p",null,"The first thing you'll need to do is create a Firefox account while pointed at the staging environment. It's easiest to do this in Desktop:"),(0,r.kt)("h3",{id:"desktop"},"Desktop"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, make sure you are ",(0,r.kt)("a",{parentName:"li",href:"/ecosystem-platform/docs/process/using-the-staging-environment#create-a-new-firefox-profile"},"using a new profile"),"."),(0,r.kt)("li",{parentName:"ol"},"Now, in ",(0,r.kt)("inlineCode",{parentName:"li"},"about:config"),", set ",(0,r.kt)("inlineCode",{parentName:"li"},"identity.fxaccounts.autoconfig.uri")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"https://accounts.stage.mozaws.net"),"."),(0,r.kt)("li",{parentName:"ol"},"Restart Firefox. Make sure to use the same profile you setup in step #1."),(0,r.kt)("li",{parentName:"ol"},"Now, either login to an existing staging Firefox account, OR create a new Firefox account now that you're pointed to staging."),(0,r.kt)("li",{parentName:"ol"},"Once you're logged into your Firefox account, verify that you're actually pointed to staging by ",(0,r.kt)("a",{parentName:"li",href:"/ecosystem-platform/docs/process/sync-testing#verify-ive-set-things-up-correctly"},"testing a manual Sync"),".")),(0,r.kt)("h3",{id:"ios"},"iOS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, delete and then re-install the Firefox iOS app to ensure you're using a fresh profile."),(0,r.kt)("li",{parentName:"ol"},"Before logging in, go to App Menu > Settings. Scroll to the bottom, and tap the version number 5 times. You should now see some hidden menu options appear."),(0,r.kt)("li",{parentName:"ol"},"Scroll back up to the top of the Settings screen, and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Advanced Sync Settings"),"."),(0,r.kt)("li",{parentName:"ol"},"Enable ",(0,r.kt)("inlineCode",{parentName:"li"},"Use stage servers"),"."),(0,r.kt)("li",{parentName:"ol"},"Then, ",(0,r.kt)("inlineCode",{parentName:"li"},"Sign in to Sync"),". Make sure you're using either an existing staging account, or create a fresh one now that you're pointed to staging."),(0,r.kt)("li",{parentName:"ol"},"Once you're logged into your Firefox account, verify that you're actually pointed to staging by ",(0,r.kt)("a",{parentName:"li",href:"/ecosystem-platform/docs/process/sync-testing#verify-ive-set-things-up-correctly"},"testing a manual Sync"),".")),(0,r.kt)("h3",{id:"android"},"Android"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, delete and then re-install the Firefox Android app to ensure you're using a fresh profile."),(0,r.kt)("li",{parentName:"ol"},'Before logging in, go to App Menu > Settings > About Firefox. Click the logo 5 times. You should see a "debug menu enabled" notification.'),(0,r.kt)("li",{parentName:"ol"},"Now, return to App Menu > Settings. Scroll to the very top. You'll see an option for ",(0,r.kt)("inlineCode",{parentName:"li"},"Custom Firefox Account server"),". Set this value to ",(0,r.kt)("inlineCode",{parentName:"li"},"https://accounts.stage.mozaws.net"),". Changing this value will cause Firefox to close."),(0,r.kt)("li",{parentName:"ol"},"Re-open Firefox, and either login to an existing staging Firefox account, OR create a new Firefox account now that you're pointed to staging. Pairing doesn't work against staging, so you'll need to use an email address if you're signing into an existing staging account."),(0,r.kt)("li",{parentName:"ol"},"Once you're logged into your Firefox account, verify that you're actually pointed to staging by ",(0,r.kt)("a",{parentName:"li",href:"/ecosystem-platform/docs/process/sync-testing#verify-ive-set-things-up-correctly"},"testing a manual Sync"),".")),(0,r.kt)("h2",{id:"how-do-i"},"How do I..."),(0,r.kt)("h2",{id:"create-a-new-firefox-profile"},"...create a new Firefox Profile?"),(0,r.kt)("p",null,"Follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles"},"here")," for managing your profiles. It can be very useful to set a shortcut to open the profile picker when testing Sync."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alias ff_profiles='/Applications/Firefox.app/Contents/MacOS/firefox-bin -P -no-remote'")," - an example of a bash alias you could use to start Firefox with the profile picker on OSX.")))}f.isMDXComponent=!0}}]);