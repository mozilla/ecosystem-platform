"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[3832],{24875:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"reference/github-strategies","title":"GitHub Strategies","description":"This strategy was developed before there were more permission options in Github and before we started using Github Enterprise.  It is probably worth revisiting this.","source":"@site/docs/reference/github-strategies.md","sourceDirName":"reference","slug":"/reference/github-strategies","permalink":"/ecosystem-platform/reference/github-strategies","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/github-strategies.md","tags":[],"version":"current","frontMatter":{"title":"GitHub Strategies"},"sidebar":"docs","previous":{"title":"Experiments & A/B Testing","permalink":"/ecosystem-platform/reference/experiments-ab-testing"},"next":{"title":"Incident Response","permalink":"/ecosystem-platform/reference/incident-response"}}');var t=n(74848),r=n(28453);const o={title:"GitHub Strategies"},a="Groups & Permissions",l={},c=[{value:"fxa-archives",id:"fxa-archives",level:2}];function d(e){const s={admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"This strategy was developed before there were more permission options in Github and before we started using Github Enterprise.  It is probably worth revisiting this."})}),"\n",(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"groups--permissions",children:"Groups & Permissions"})}),"\n",(0,t.jsx)(s.p,{children:"Mozilla accounts has a history of using [too?] many repositories on GitHub.\nOver many years this means important repositories can be neglected.\nAdditionally, we need to maintain proper access controls to all of the\nrepositories in a world where priorities shift quickly and often."}),"\n",(0,t.jsx)(s.p,{children:"To address this, our GitHub strategy takes advantage of Github\u2019s nested teams.\nBy having groups with progressively tighter access controls we can be sure we\nare addressing all of the appropriate repositories because permissions are\ninherited.  We have a simple hierarchy:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Firstly, no team.  You don\u2019t need to be in an FxA team to open or comment on\nissues and pull requests."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"fxa-community"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Read access"}),"\n",(0,t.jsx)(s.li,{children:"This essentially collects all of our repositories in one place"}),"\n",(0,t.jsx)(s.li,{children:"Being in this group means a person can be assigned issues"}),"\n",(0,t.jsxs)(s.li,{children:["All repositories that this group has access to are ",(0,t.jsx)(s.em,{children:"read only"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"fxa-write"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"A sub-team of fxa-community"}),"\n",(0,t.jsxs)(s.li,{children:["All repositories that this group has access to are ",(0,t.jsx)(s.em,{children:"read/write"})]}),"\n",(0,t.jsx)(s.li,{children:"If you're on this team you are likely employed at Mozilla"}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"fxa-devs"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Sub-team of ",(0,t.jsx)(s.strong,{children:"fxa-write"})]}),"\n",(0,t.jsx)(s.li,{children:"Used for requesting reviews.  If you work in specific areas of FxA and\ndon\u2019t want to be pinged about general reviews you probably want write\naccess but not on this team."}),"\n",(0,t.jsx)(s.li,{children:"Required to be in this team to push to production (enforced on github)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"Occasionally other teams will be added here as well, for example, if\nwe're doing an internship program or working with external teams."}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"fxa-admins"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Sub-team of ",(0,t.jsx)(s.strong,{children:"fxa-write"})]}),"\n",(0,t.jsxs)(s.li,{children:["This group has ",(0,t.jsx)(s.em,{children:"admin access"})," to all repositories."]}),"\n",(0,t.jsx)(s.li,{children:"If you're in this group you are employed at Mozilla and you probably\nwork with FxA day-to-day."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"fxa-archives",children:"fxa-archives"}),"\n",(0,t.jsxs)(s.p,{children:["There is another team called ",(0,t.jsx)(s.strong,{children:"fxa-archives"}),".  It holds many old archived\nrepositories that FxA created and no longer uses.  It\u2019s around to collect that\nhistorical context and keep the archived repositories out of the way while we\ndo day-to-day work."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var i=n(96540);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);