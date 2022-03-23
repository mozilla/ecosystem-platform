"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[7138],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(t),m=i,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},40047:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],s={id:"using-apis",title:"Using APIs",sidebar_label:"Using APIs"},l="Using APIs",c={unversionedId:"relying-parties/reference/using-apis",id:"relying-parties/reference/using-apis",title:"Using APIs",description:"The Ecosystem Platform provides some public APIs.  Usage and expectations are detailed below.  Narrower requirements and rate limits may apply to more specific APIs.",source:"@site/docs/relying-parties/reference/using-apis.md",sourceDirName:"relying-parties/reference",slug:"/relying-parties/reference/using-apis",permalink:"/ecosystem-platform/relying-parties/reference/using-apis",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/reference/using-apis.md",tags:[],version:"current",frontMatter:{id:"using-apis",title:"Using APIs",sidebar_label:"Using APIs"},sidebar:"docs",previous:{title:"Subscription Coupons",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-coupons"},next:{title:"Development Setup",permalink:"/ecosystem-platform/tutorials/development-setup"}},p=[{value:"API versioning",id:"api-versioning",children:[{value:"Minor changes",id:"minor-changes",children:[],level:3}],level:2},{value:"Global Rate Limits",id:"global-rate-limits",children:[],level:2}],u={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-apis"},"Using APIs"),(0,a.kt)("p",null,"The Ecosystem Platform provides some public APIs.  Usage and expectations are detailed below.  Narrower requirements and rate limits may apply to more specific APIs."),(0,a.kt)("p",null,"If these rules change significantly we'll notify the ",(0,a.kt)("a",{parentName:"p",href:"https://groups.google.com/a/mozilla.com/g/firefox-accounts-notices"},"firefox-accounts-notices group"),".  If you're using this API please subscribe to that group."),(0,a.kt)("h2",{id:"api-versioning"},"API versioning"),(0,a.kt)("p",null,"Firefox Accounts APIs are versioned and breaking changes will be pushed out in newer versions of the APIs.  When newer versions of the API are announced we'll also communicate how long we will support the older versions of the APIs."),(0,a.kt)("h3",{id:"minor-changes"},"Minor changes"),(0,a.kt)("p",null,"Firefox Accounts may change existing APIs in non-breaking ways, for example, adding a new field to a JSON response.  It's expected that clients will not fail if new fields are added."),(0,a.kt)("h2",{id:"global-rate-limits"},"Global Rate Limits"),(0,a.kt)("p",null,'During periods of maintenance or heavy load, the server may request that clients enter a "back-off" state, in which they avoid making further requests.'),(0,a.kt)("p",null,"At such times, you may receive a ",(0,a.kt)("inlineCode",{parentName:"p"},"429 Too Many Requests")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"503 Service Unavailable")," response with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Retry-After")," header denoting the number of seconds to wait before issuing any further requests. It will also include an ",(0,a.kt)("inlineCode",{parentName:"p"},"errno")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"retryAfter")," field matching the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Retry-After")," header in the body."),(0,a.kt)("p",null,"For example, the following response indicates that the client should suspend making further requests for 30 seconds:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'HTTP/1.1 503 Service Unavailable\nRetry-After: 30\nContent-Type: application/json\n\n{\n  "code": 503,\n  "errno": 201,\n  "error": "Service Unavailable",\n  "message": "Service unavailable",\n  "info": "https://github.com/mozilla/fxa/blob/main/packages/fxa-auth-server/docs/api.md#response-format",\n  "retryAfter": 30,\n  "retryAfterLocalized": "in a few seconds"\n}\n')))}f.isMDXComponent=!0}}]);