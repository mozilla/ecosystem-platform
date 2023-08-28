"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6747],{96747:(e,t,l)=>{l.r(t),l.d(t,{diagram:()=>b});var o=l(81423),a=l(38077),n=l(45625),i=l(81581),s=l(46476);l(27484),l(17967),l(27856),l(41644),l(39354);const d=e=>i.e.sanitizeText(e,(0,i.c)());let r={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const c=function(e,t,l,o,a){const n=Object.keys(e);i.l.info("keys:",n),i.l.info(e),n.filter((t=>e[t].parent==a)).forEach((function(l){var n,s;const r=e[l],c=r.cssClasses.join(" "),p="",f="",b=r.label??r.id,u={labelStyle:p,shape:"class_box",labelText:d(b),classData:r,rx:0,ry:0,class:c,style:f,id:r.id,domId:r.domId,tooltip:o.db.getTooltip(r.id,a)||"",haveCallback:r.haveCallback,link:r.link,width:"group"===r.type?500:void 0,type:r.type,padding:(null==(n=(0,i.c)().flowchart)?void 0:n.padding)??(null==(s=(0,i.c)().class)?void 0:s.padding)};t.setNode(r.id,u),a&&t.setParent(r.id,a),i.l.info("setNode",u)}))};function p(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const f={setConf:function(e){r={...r,...e}},draw:async function(e,t,l,o){i.l.info("Drawing class - ",t);const f=(0,i.c)().flowchart??(0,i.c)().class,b=(0,i.c)().securityLevel;i.l.info("config:",f);const u=(null==f?void 0:f.nodeSpacing)??50,y=(null==f?void 0:f.rankSpacing)??50,g=new n.k({multigraph:!0,compound:!0}).setGraph({rankdir:o.db.getDirection(),nodesep:u,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),h=o.db.getNamespaces(),v=o.db.getClasses(),w=o.db.getRelations(),k=o.db.getNotes();let m;i.l.info(w),function(e,t,l,o){const a=Object.keys(e);i.l.info("keys:",a),i.l.info(e),a.forEach((function(a){var n,s;const r=e[a],p={shape:"rect",id:r.id,domId:r.domId,labelText:d(r.id),labelStyle:"",style:"fill: none; stroke: black",padding:(null==(n=(0,i.c)().flowchart)?void 0:n.padding)??(null==(s=(0,i.c)().class)?void 0:s.padding)};t.setNode(r.id,p),c(r.classes,t,l,o,r.id),i.l.info("setNode",p)}))}(h,g,t,o),c(v,g,t,o),function(e,t){const l=(0,i.c)().flowchart;let o=0;e.forEach((function(e){var n;o++;const s={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:"id"+o,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:p(e.relation.type1),arrowTypeEnd:p(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,i.o)(null==l?void 0:l.curve,a.c_6)};if(i.l.info(s,e),void 0!==e.style){const t=(0,i.k)(e.style);s.style=t.style,s.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(s.arrowheadStyle="fill: #333"):(s.arrowheadStyle="fill: #333",s.labelpos="c",(null==(n=(0,i.c)().flowchart)?void 0:n.htmlLabels)??(0,i.c)().htmlLabels?(s.labelType="html",s.label='<span class="edgeLabel">'+e.text+"</span>"):(s.labelType="text",s.label=e.text.replace(i.e.lineBreakRegex,"\n"),void 0===e.style&&(s.style=s.style||"stroke: #333; stroke-width: 1.5px;fill:none"),s.labelStyle=s.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,s,o)}))}(w,g),function(e,t,l,o){i.l.info(e),e.forEach((function(e,n){var s,c;const p=e,f="",b="",u=p.text,y={labelStyle:f,shape:"note",labelText:d(u),noteData:p,rx:0,ry:0,class:"",style:b,id:p.id,domId:p.id,tooltip:"",type:"note",padding:(null==(s=(0,i.c)().flowchart)?void 0:s.padding)??(null==(c=(0,i.c)().class)?void 0:c.padding)};if(t.setNode(p.id,y),i.l.info("setNode",y),!p.class||!(p.class in o))return;const g=l+n,h={id:`edgeNote${g}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,i.o)(r.curve,a.c_6)};t.setEdge(p.id,p.class,h,g)}))}(k,g,w.length+1,v),"sandbox"===b&&(m=(0,a.Ys)("#i"+t));const x="sandbox"===b?(0,a.Ys)(m.nodes()[0].contentDocument.body):(0,a.Ys)("body"),T=x.select(`[id="${t}"]`),S=x.select("#"+t+" g");if(await(0,s.r)(S,g,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),i.u.insertTitle(T,"classTitleText",(null==f?void 0:f.titleTopMargin)??5,o.db.getDiagramTitle()),(0,i.p)(g,T,null==f?void 0:f.diagramPadding,null==f?void 0:f.useMaxWidth),!(null==f?void 0:f.htmlLabels)){const e="sandbox"===b?m.nodes()[0].contentDocument:document,l=e.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of l){const l=t.getBBox(),o=e.createElementNS("http://www.w3.org/2000/svg","rect");o.setAttribute("rx",0),o.setAttribute("ry",0),o.setAttribute("width",l.width),o.setAttribute("height",l.height),t.insertBefore(o,t.firstChild)}}}},b={parser:o.p,db:o.d,renderer:f,styles:o.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,o.d.clear()}}}}]);