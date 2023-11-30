"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[4992],{49279:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var n=o(85893),c=o(11151);const a={title:"Creating an Account Locally"},i=void 0,l={id:"how-tos/creating-an-account-locally",title:"Creating an Account Locally",description:"Once you've got FxA running locally you'll probably want to create an account that you can use for development and testing purposes. This process can be done almost exactly like you would in production:",source:"@site/docs/how-tos/creating-an-account-locally.md",sourceDirName:"how-tos",slug:"/how-tos/creating-an-account-locally",permalink:"/ecosystem-platform/how-tos/creating-an-account-locally",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/creating-an-account-locally.md",tags:[],version:"current",frontMatter:{title:"Creating an Account Locally"},sidebar:"docs",previous:{title:"Connecting to a local MySQL DB",permalink:"/ecosystem-platform/how-tos/connecting-to-a-local-mysql-db"},next:{title:"Local Emails with MailDev",permalink:"/ecosystem-platform/how-tos/local-emails-with-maildev"}},s={},r=[];function u(e){const t={a:"a",code:"code",img:"img",li:"li",ol:"ol",p:"p",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Once you've got FxA running locally you'll probably want to create an account that you can use for development and testing purposes. This process can be done almost exactly like you would in production:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Visit the ",(0,n.jsx)(t.a,{href:"http://localhost:3030/",children:"root page"}),", which should ask you to enter your email. Enter the email you want to use for the account."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If you're taken to ",(0,n.jsx)(t.code,{children:"/signin"}),' you can just click "Use a different account" to return to the email field.']}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'Fill out the next form with your password and age, then click "Create account".'}),"\n",(0,n.jsxs)(t.li,{children:["You'll be taken to a page asking you to enter a verification code. From your terminal run ",(0,n.jsx)(t.code,{children:"yarn pm2 logs inbox"}),', which will have the most recent verification code. Copy this code into the form field and click "Verify".']}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Terminal preview of inbox service",src:o(30880).Z+"",width:"1212",height:"140"})}),"\n",(0,n.jsxs)(t.p,{children:["If you'd rather receive the actual verification code email instead of using the terminal, check out how to ",(0,n.jsx)(t.a,{href:"local-emails-with-maildev",children:"use MailDev"})," for local emails."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["That's it! You'll be taken to ",(0,n.jsx)(t.code,{children:"/settings"}),' with the message "Account verified successfully" appearing along the top.']}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},30880:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/logs-inbox-signin-41eeac9e094d2dad297e18f684f5bd52.png"},11151:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>i});var n=o(67294);const c={},a=n.createContext(c);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);