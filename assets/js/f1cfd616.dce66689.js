"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[9768],{64407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var o=n(87462),a=(n(67294),n(3905));n(8209);const i={title:"Using a Custom Profile with Firefox"},r=void 0,l={unversionedId:"how-tos/using-a-custom-profile-with-firefox",id:"how-tos/using-a-custom-profile-with-firefox",title:"Using a Custom Profile with Firefox",description:"If you're working on something in FxA involving Firefox you may need to configure the browser to suit your development environment.",source:"@site/docs/how-tos/using-a-custom-profile-with-firefox.md",sourceDirName:"how-tos",slug:"/how-tos/using-a-custom-profile-with-firefox",permalink:"/ecosystem-platform/how-tos/using-a-custom-profile-with-firefox",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/using-a-custom-profile-with-firefox.md",tags:[],version:"current",frontMatter:{title:"Using a Custom Profile with Firefox"},sidebar:"docs",previous:{title:"Node Debugging",permalink:"/ecosystem-platform/how-tos/node-debugging"},next:{title:"Using Sentry.io for Local Development",permalink:"/ecosystem-platform/how-tos/using-sentry-locally"}},s={},m=[{value:"Firefox iOS with a custom profile",id:"firefox-ios-with-a-custom-profile",level:2}],p={toc:m},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you're working on something in FxA involving Firefox you may need to configure the browser to suit your development environment."),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn start firefox"),", which will open an instance of Firefox. It is configurable with the following environment variables:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable"),(0,a.kt)("th",{parentName:"tr",align:null},"Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FXA_ENV")," - The API endpoints Firefox should use"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"local"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"latest"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"stable"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"stage")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"local"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FXA_DESKTOP_CONTEXT")," - The ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/docs/query-params.md#context"},(0,a.kt)("inlineCode",{parentName:"a"},"context"))," in which FxA is being run"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"fx_desktop_v3"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"fx_fennec_v1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"fx_ios_v1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"oauth_webchannel_v1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"fx_desktop_v3"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FIREFOX_BIN")," - Path to Firefox bin file"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/Applications/FirefoxNightly.app/Contents/MacOS/firefox-bin"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FIREFOX_DEBUGGER")," - Open the ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Tools/Browser_Toolbox"},"Browser Toolbox")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FXA_E10S")," - Enable ",(0,a.kt)("a",{parentName:"td",href:"https://wiki.mozilla.org/Electrolysis"},"Electrolysis")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))))),(0,a.kt)("h2",{id:"firefox-ios-with-a-custom-profile"},"Firefox iOS with a custom profile"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From Firefox iOS, go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings > About")," and tap on the Firefox version number 10 times"),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"Firefox Account")," section, a new row will appear ",(0,a.kt)("inlineCode",{parentName:"li"},"Advance Sync Settings"),", select row"),(0,a.kt)("li",{parentName:"ol"},"Toggle ",(0,a.kt)("inlineCode",{parentName:"li"},"Use stage servers")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"ON"))),(0,a.kt)("p",null,"To use a custom FxA server, toggle ",(0,a.kt)("inlineCode",{parentName:"p"},"Use Custom FxA Content Server")," and set it to home url of FxA (ex. ",(0,a.kt)("inlineCode",{parentName:"p"},"https://accounts.firefox.com"),"))."))}f.isMDXComponent=!0}}]);