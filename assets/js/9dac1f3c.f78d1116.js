"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[7002],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77979:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Local Emails with MailDev"},c=void 0,s={unversionedId:"how-tos/local-emails-with-maildev",id:"how-tos/local-emails-with-maildev",title:"Local Emails with MailDev",description:"If you're interested in receiving emails locally you can use MailDev to intercept emails and display them in a local inbox.",source:"@site/docs/how-tos/local-emails-with-maildev.md",sourceDirName:"how-tos",slug:"/how-tos/local-emails-with-maildev",permalink:"/ecosystem-platform/how-tos/local-emails-with-maildev",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/local-emails-with-maildev.md",tags:[],version:"current",frontMatter:{title:"Local Emails with MailDev"},sidebar:"docs",previous:{title:"Creating an Account Locally",permalink:"/ecosystem-platform/how-tos/creating-an-account-locally"},next:{title:"Node Debugging",permalink:"/ecosystem-platform/how-tos/node-debugging"}},p={},m=[],u={toc:m};function f(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you're interested in receiving emails locally you can use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/maildev"},"MailDev")," to intercept emails and display them in a local inbox."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the MailDev CLI globally:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn global add maildev\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Assuming you have FxA running locally you'll need to stop the ",(0,o.kt)("inlineCode",{parentName:"p"},"inbox")," service: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn pm2 stop inbox\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start MailDev on port 9999. You may need to start it with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo")," permissions: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo maildev -s 9999\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"All emails will now be sent to the local inbox, which you can access at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:1080"},"http://localhost:1080")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MailDev inbox preview",src:n(26202).Z,width:"2190",height:"1330"})))}f.isMDXComponent=!0},26202:function(e,t,n){t.Z=n.p+"assets/images/maildev-inbox-ea1bb03f9477f2fa891cae0d77a55def.png"}}]);