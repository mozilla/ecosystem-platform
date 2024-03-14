"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[7002],{90213:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>r});var t=l(85893),s=l(11151);const i={title:"Local Emails with MailDev"},o=void 0,a={id:"how-tos/local-emails-with-maildev",title:"Local Emails with MailDev",description:"If you're interested in receiving emails locally you can use MailDev to intercept emails and display them in a local inbox.",source:"@site/docs/how-tos/local-emails-with-maildev.md",sourceDirName:"how-tos",slug:"/how-tos/local-emails-with-maildev",permalink:"/ecosystem-platform/how-tos/local-emails-with-maildev",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/local-emails-with-maildev.md",tags:[],version:"current",frontMatter:{title:"Local Emails with MailDev"},sidebar:"docs",previous:{title:"Creating an Account Locally",permalink:"/ecosystem-platform/how-tos/creating-an-account-locally"},next:{title:"Managing Yarn Dependencies",permalink:"/ecosystem-platform/how-tos/managing-yarn-dependencies"}},c={},r=[];function d(e){const n={a:"a",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["If you're interested in receiving emails locally you can use ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/maildev",children:"MailDev"})," to intercept emails and display them in a local inbox."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the MailDev CLI globally:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"npm i -g maildev\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Assuming you have FxA running locally you'll need to stop the ",(0,t.jsx)(n.code,{children:"inbox"})," service:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"yarn pm2 stop inbox\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start MailDev on port 9999. You may need to start it with ",(0,t.jsx)(n.code,{children:"sudo"})," permissions:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo maildev -s 9999\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["All emails will now be sent to the local inbox, which you can access at ",(0,t.jsx)(n.a,{href:"http://localhost:1080",children:"http://localhost:1080"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"MailDev inbox preview",src:l(26202).Z+"",width:"2190",height:"1330"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},26202:(e,n,l)=>{l.d(n,{Z:()=>t});const t=l.p+"assets/images/maildev-inbox-ea1bb03f9477f2fa891cae0d77a55def.png"},11151:(e,n,l)=>{l.d(n,{Z:()=>a,a:()=>o});var t=l(67294);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);