(()=>{"use strict";var e,a,f,b,d,c={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=c,r.c=t,e=[],r.O=(a,f,b,d)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],b=e[i][1],d=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&d||c>=d)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,d<c&&(c=d));if(t){e.splice(i--,1);var n=b();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,b,d]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var c={};a=a||[null,f({}),f([]),f(f)];for(var t=2&b&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,r.d(d,c),d},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({272:"916350cb",288:"3817a60c",319:"9bbb9bff",331:"63165f34",362:"0cb9c435",384:"39380ae8",466:"dab73f02",497:"987cad44",606:"a6a9d1e4",712:"65ede1c8",715:"c4040e40",742:"d2bb60ab",767:"4f39be85",800:"e8b5107e",829:"8285d874",841:"698ffa79",848:"338770ad",850:"9242f14e",864:"06b68135",902:"cec41d76",920:"bc8c620a",947:"4a1afa31",957:"86905a09",1087:"35b8fec4",1112:"e3246db5",1122:"50b5b0e0",1141:"e476581f",1233:"1c0d01d7",1236:"5eeb9047",1256:"3e20135b",1348:"b6c08e50",1352:"d7d14c06",1383:"43ad54b5",1387:"a5f3d4d3",1482:"54b89eb4",1484:"685e9813",1776:"50e33a0d",1788:"224a8709",1795:"3333f936",1824:"635781a4",1838:"82f49eb5",1840:"1e4e8123",1902:"93a20088",1909:"44109891",1939:"d289dfcd",1947:"e3429d9b",1964:"40e58b14",1976:"985217f7",1985:"f71bf9e2",2001:"9e8709bd",2010:"3e884023",2060:"b84ff97a",2138:"1a4e3797",2193:"ad410354",2256:"a29270f0",2261:"a987e5c8",2278:"f8533a87",2290:"a3ec3556",2345:"646981ee",2368:"b8315de2",2415:"e748dd17",2445:"91051824",2472:"2641d68d",2541:"b6dfc324",2551:"a9484c01",2632:"afa5d0b2",2677:"ba8153a7",2777:"46ae467a",2833:"23f82a46",2908:"d1564a06",2969:"f0ad3fbb",2976:"4ab9c840",2997:"36f4a5f7",3049:"69eff5ad",3074:"4008fff7",3075:"628988b7",3080:"7d1f696f",3157:"ef0ac018",3162:"b2f6a9b5",3204:"d179580e",3222:"b82d6e0a",3243:"42ff82ff",3250:"88343e6f",3272:"03e06aa7",3382:"da37101f",3390:"1c04a7ef",3514:"f9734b91",3592:"e322a99f",3726:"48c68ad3",3778:"3e86d11e",3782:"21033e4e",3783:"8867b911",3819:"dc463d44",3823:"6da97d5b",3832:"f7f60e58",3862:"624b72a3",3869:"f2e9a472",3883:"2c6eb2fd",3924:"06eb90e0",3976:"0e384e19",3982:"f5b0050a",4001:"664e7932",4161:"6939712c",4234:"fdd72c56",4255:"0945cc86",4273:"223e4a50",4275:"5cba231a",4327:"a852bbb4",4328:"e27cd83e",4354:"a108884c",4419:"d35e5d73",4460:"f0b750c2",4462:"fc49bffc",4494:"272f43cb",4528:"6801025a",4676:"5654da00",4692:"5c93823d",4771:"86edb86a",4859:"7bdc42a1",4997:"9110f38f",5019:"42f3785a",5072:"e4232e8f",5079:"3a6cf436",5138:"ed79e225",5139:"f97f9915",5147:"2e3e970c",5182:"55cc11e8",5313:"0a9812da",5333:"630dc608",5365:"81766363",5383:"a5711496",5415:"117aaa88",5438:"ee91edb8",5557:"e0868feb",5579:"030341eb",5678:"5026ea5c",5785:"3d11f99a",5824:"402fdae9",5865:"2e476804",5951:"8c1bc555",6007:"6033a0dc",6008:"9cefbf99",6123:"19778a8e",6136:"33161a8b",6386:"a3d48351",6438:"4a0e76ae",6447:"06baaa90",6488:"0fe33e41",6502:"c3a8bbca",6537:"d4765d02",6539:"c0615bfa",6634:"f482079a",6882:"bf476a78",6994:"c50e860f",7015:"aa2d09ab",7092:"38de5f3c",7098:"a7bd4aaa",7201:"3239c303",7234:"fd8139f4",7283:"53b3af7a",7379:"f2aa5a66",7461:"71f89b38",7495:"42795c4f",7565:"4eb9f0ee",7577:"9aba6085",7582:"d5c26917",7647:"e76b61f9",7685:"c9dcca9b",7716:"f923bd50",7740:"7af5887e",7749:"97ed811c",7766:"248d6ffe",7781:"158abbab",7838:"8b3b5a19",7865:"f077f840",7922:"51b72358",7933:"18fa2a27",7948:"9ef84191",7960:"0481c177",8015:"0adb6319",8091:"5556484c",8253:"4819920a",8286:"fa19bda5",8371:"383e8ed0",8401:"17896441",8437:"32ae25e3",8525:"8bc421df",8540:"f1cfd616",8552:"4a4db6f0",8581:"935f2afb",8589:"70acafe9",8745:"07d414d2",8850:"52572dea",8859:"ab225c16",8890:"de6e56b8",8908:"b5043254",8935:"b485b3aa",9048:"a94703ab",9069:"635b4bb2",9074:"10bed0e6",9180:"76176154",9231:"991fd4ed",9301:"74bde459",9329:"82a3f709",9350:"b40bf177",9449:"56165ff5",9461:"027f3190",9495:"d3959fc5",9510:"83aa35bf",9513:"3002cdd8",9518:"45a56422",9608:"a702eb3a",9647:"5e95c892",9668:"6fdce5db",9699:"5ea3127b",9755:"1491e8ae",9783:"6f7562a3",9835:"5627c5e3",9861:"bedc1d4a",9932:"a85731f2",9987:"9a1311ca",9993:"3ec46315",9999:"9dac1f3c"}[e]||e)+"."+{272:"48734f7a",288:"69b7626b",319:"c7ebfa7c",331:"a5058b21",362:"f19e6fed",384:"51edef55",416:"66405ca4",466:"0a7fbf5c",497:"880e0525",606:"29c5d531",712:"592acd1e",715:"91ba0f5c",742:"c16d1caf",767:"172ea3bd",778:"f5dcdcf4",800:"48db7bc5",829:"e49248a0",841:"d8e3c957",848:"a0fb1212",850:"3a969e3b",864:"58dcd445",902:"00653ba3",920:"d9d76558",947:"ded48c8f",957:"7b20c8eb",982:"8114e2a0",1087:"09e0a431",1112:"98e59848",1122:"761b5524",1141:"5c77b1af",1176:"e6a68f79",1233:"276e0b39",1236:"38174b1e",1256:"64a045c4",1348:"96ed0db1",1352:"42822ac4",1383:"26db09fe",1387:"a4b9250f",1482:"6b9ef29b",1484:"147aebf4",1609:"eb4ee471",1635:"249b4c23",1776:"d9fa09f7",1788:"9f69c77e",1795:"5612d80b",1824:"e1251694",1838:"7059c3b2",1840:"7f786f0c",1902:"2092aa09",1909:"95e132c4",1939:"719dd6bb",1947:"f1e7060d",1964:"6fb9791e",1976:"a0dfa402",1985:"43d92c40",2001:"e2ee3670",2010:"d446cc3f",2060:"f680dfc7",2102:"8c8f490f",2138:"633cd3e3",2193:"6cd710c7",2237:"708dc3c7",2256:"cf9632fd",2261:"22d3dd99",2278:"0e15dc9f",2290:"8225b974",2345:"78213313",2368:"56aca368",2398:"28430304",2415:"f862e6e6",2445:"062d1081",2472:"295ce56d",2541:"a17adf2f",2551:"cdc1f0bf",2632:"0a2d6cd8",2677:"bcefb1c8",2777:"a3ff88e6",2833:"4cfb5fe2",2908:"863853ca",2969:"018c85b8",2976:"73cb41e7",2997:"1c15851b",3049:"7d54ca2f",3074:"063f6b5a",3075:"c5cf06e6",3080:"83efa71e",3157:"0956d514",3162:"d7146e28",3204:"16227239",3222:"d3163b54",3243:"88b0fa97",3250:"71814735",3253:"6d67eb61",3272:"a38695b9",3382:"ce75b6f6",3390:"baf2c243",3514:"b221ebe7",3592:"f0c11b35",3726:"66138cc7",3778:"ad9d9038",3782:"0b02e7bf",3783:"6beee1ac",3819:"54c0df04",3823:"94002d8b",3832:"ae062fe7",3840:"be2a7aa8",3862:"9ea01bbe",3869:"1219541b",3883:"821ce432",3924:"2e6f080a",3976:"10613b4a",3982:"03fd9ef7",4001:"2f97c46d",4059:"2f9704b7",4161:"6acbb71b",4234:"8b5fdcbc",4255:"117f01c5",4273:"481c355e",4275:"47043086",4327:"51dbcbd2",4328:"8f993d45",4354:"760cd070",4419:"e3125587",4460:"7d3aa16e",4462:"de50a651",4494:"14e41dcd",4528:"88884031",4676:"2060779f",4692:"5ab0cf9d",4771:"1859ba2a",4859:"0b1fab7f",4997:"b29c0f30",5019:"37970411",5072:"581a19b7",5079:"5005f47b",5118:"62b52801",5138:"8e831fdf",5139:"c2958197",5147:"18e5da46",5182:"e8b3256c",5313:"2e92e1bf",5333:"018a44ce",5365:"b572fe45",5383:"a8b3bb06",5415:"ca7e74a5",5438:"08eb72ab",5557:"ee083866",5570:"1af93807",5579:"70d6ed3b",5678:"cb6145ef",5785:"0ac675bd",5824:"11735166",5865:"8ddfb3ed",5951:"c9900352",6007:"69fbfd49",6008:"388e5bde",6123:"a5c3e9e1",6136:"9abebb16",6163:"cf6810ce",6319:"b280fad4",6351:"a5e4142b",6386:"d98f54ab",6438:"9a9be14d",6447:"a7e1586f",6488:"0f952818",6502:"c2573e21",6537:"4935810c",6539:"18942ed5",6634:"571216a9",6882:"a20d66b6",6911:"3dfbf14e",6994:"12848ef1",7008:"cea8f056",7015:"0a276dec",7092:"fef56fa6",7098:"c6b2aaf9",7102:"e6e6e505",7201:"0b59c90f",7234:"973ff8f4",7283:"1456ac48",7379:"e58d3029",7461:"557fb7d5",7495:"e0118f68",7565:"cbf3f1b3",7577:"030ff5ce",7582:"d232b8f9",7647:"bfac51f4",7685:"f565d2a5",7716:"564234d7",7740:"5daf216c",7749:"e9f48ec6",7766:"0f3183ba",7781:"0af674b0",7812:"6d215bdf",7813:"be716cb3",7830:"95a7a19f",7838:"92c619f7",7865:"d56451a5",7922:"3a1b604f",7933:"4646396f",7948:"9d2dad04",7960:"6c4718aa",7990:"4d01510b",8015:"bec3af05",8017:"aaf70b81",8091:"3376df14",8253:"8c8fa662",8286:"ed436a2a",8371:"bfd4063f",8401:"c363f98a",8437:"0810936f",8525:"59b843c8",8540:"96832e5e",8552:"cb2f129c",8581:"0ef85f40",8589:"e7d34619",8705:"fb94dd3c",8745:"e597e241",8850:"82e5dea3",8859:"b0fbd751",8890:"be8ac8fd",8908:"6eace5e7",8913:"538e73f7",8935:"c422e56b",9023:"1be1f91f",9048:"9c1a06d3",9069:"a00bb06f",9074:"e93cf3b2",9119:"1c2013e1",9180:"54737077",9231:"593de640",9301:"62559ad8",9329:"61e0428d",9350:"d79f3146",9449:"3efbd0ab",9461:"16e300ff",9462:"ca2b0b45",9495:"25c93764",9510:"d8e0ac35",9513:"375a5b6b",9518:"7dd1eec6",9608:"67e58a4e",9647:"2ffaf921",9668:"fc37e9bc",9699:"7c7b4925",9755:"8b10515c",9783:"0b48fcc2",9806:"be6a8a6a",9835:"e1df8868",9861:"10edaba7",9866:"f8169d21",9932:"605e6c3f",9966:"24f50699",9987:"fbbb0cb3",9993:"c532b5bb",9999:"a8e68656"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),b={},d="firefox-ecosystem-platform:",r.l=(e,a,f,c)=>{if(b[e])b[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==d+f){t=l;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+f),t.src=e),b[e]=[a];var u=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var d=b[e];if(delete b[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(f))),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/ecosystem-platform/",r.gca=function(e){return e={17896441:"8401",44109891:"1909",76176154:"9180",81766363:"5365",91051824:"2445","916350cb":"272","3817a60c":"288","9bbb9bff":"319","63165f34":"331","0cb9c435":"362","39380ae8":"384",dab73f02:"466","987cad44":"497",a6a9d1e4:"606","65ede1c8":"712",c4040e40:"715",d2bb60ab:"742","4f39be85":"767",e8b5107e:"800","8285d874":"829","698ffa79":"841","338770ad":"848","9242f14e":"850","06b68135":"864",cec41d76:"902",bc8c620a:"920","4a1afa31":"947","86905a09":"957","35b8fec4":"1087",e3246db5:"1112","50b5b0e0":"1122",e476581f:"1141","1c0d01d7":"1233","5eeb9047":"1236","3e20135b":"1256",b6c08e50:"1348",d7d14c06:"1352","43ad54b5":"1383",a5f3d4d3:"1387","54b89eb4":"1482","685e9813":"1484","50e33a0d":"1776","224a8709":"1788","3333f936":"1795","635781a4":"1824","82f49eb5":"1838","1e4e8123":"1840","93a20088":"1902",d289dfcd:"1939",e3429d9b:"1947","40e58b14":"1964","985217f7":"1976",f71bf9e2:"1985","9e8709bd":"2001","3e884023":"2010",b84ff97a:"2060","1a4e3797":"2138",ad410354:"2193",a29270f0:"2256",a987e5c8:"2261",f8533a87:"2278",a3ec3556:"2290","646981ee":"2345",b8315de2:"2368",e748dd17:"2415","2641d68d":"2472",b6dfc324:"2541",a9484c01:"2551",afa5d0b2:"2632",ba8153a7:"2677","46ae467a":"2777","23f82a46":"2833",d1564a06:"2908",f0ad3fbb:"2969","4ab9c840":"2976","36f4a5f7":"2997","69eff5ad":"3049","4008fff7":"3074","628988b7":"3075","7d1f696f":"3080",ef0ac018:"3157",b2f6a9b5:"3162",d179580e:"3204",b82d6e0a:"3222","42ff82ff":"3243","88343e6f":"3250","03e06aa7":"3272",da37101f:"3382","1c04a7ef":"3390",f9734b91:"3514",e322a99f:"3592","48c68ad3":"3726","3e86d11e":"3778","21033e4e":"3782","8867b911":"3783",dc463d44:"3819","6da97d5b":"3823",f7f60e58:"3832","624b72a3":"3862",f2e9a472:"3869","2c6eb2fd":"3883","06eb90e0":"3924","0e384e19":"3976",f5b0050a:"3982","664e7932":"4001","6939712c":"4161",fdd72c56:"4234","0945cc86":"4255","223e4a50":"4273","5cba231a":"4275",a852bbb4:"4327",e27cd83e:"4328",a108884c:"4354",d35e5d73:"4419",f0b750c2:"4460",fc49bffc:"4462","272f43cb":"4494","6801025a":"4528","5654da00":"4676","5c93823d":"4692","86edb86a":"4771","7bdc42a1":"4859","9110f38f":"4997","42f3785a":"5019",e4232e8f:"5072","3a6cf436":"5079",ed79e225:"5138",f97f9915:"5139","2e3e970c":"5147","55cc11e8":"5182","0a9812da":"5313","630dc608":"5333",a5711496:"5383","117aaa88":"5415",ee91edb8:"5438",e0868feb:"5557","030341eb":"5579","5026ea5c":"5678","3d11f99a":"5785","402fdae9":"5824","2e476804":"5865","8c1bc555":"5951","6033a0dc":"6007","9cefbf99":"6008","19778a8e":"6123","33161a8b":"6136",a3d48351:"6386","4a0e76ae":"6438","06baaa90":"6447","0fe33e41":"6488",c3a8bbca:"6502",d4765d02:"6537",c0615bfa:"6539",f482079a:"6634",bf476a78:"6882",c50e860f:"6994",aa2d09ab:"7015","38de5f3c":"7092",a7bd4aaa:"7098","3239c303":"7201",fd8139f4:"7234","53b3af7a":"7283",f2aa5a66:"7379","71f89b38":"7461","42795c4f":"7495","4eb9f0ee":"7565","9aba6085":"7577",d5c26917:"7582",e76b61f9:"7647",c9dcca9b:"7685",f923bd50:"7716","7af5887e":"7740","97ed811c":"7749","248d6ffe":"7766","158abbab":"7781","8b3b5a19":"7838",f077f840:"7865","51b72358":"7922","18fa2a27":"7933","9ef84191":"7948","0481c177":"7960","0adb6319":"8015","5556484c":"8091","4819920a":"8253",fa19bda5:"8286","383e8ed0":"8371","32ae25e3":"8437","8bc421df":"8525",f1cfd616:"8540","4a4db6f0":"8552","935f2afb":"8581","70acafe9":"8589","07d414d2":"8745","52572dea":"8850",ab225c16:"8859",de6e56b8:"8890",b5043254:"8908",b485b3aa:"8935",a94703ab:"9048","635b4bb2":"9069","10bed0e6":"9074","991fd4ed":"9231","74bde459":"9301","82a3f709":"9329",b40bf177:"9350","56165ff5":"9449","027f3190":"9461",d3959fc5:"9495","83aa35bf":"9510","3002cdd8":"9513","45a56422":"9518",a702eb3a:"9608","5e95c892":"9647","6fdce5db":"9668","5ea3127b":"9699","1491e8ae":"9755","6f7562a3":"9783","5627c5e3":"9835",bedc1d4a:"9861",a85731f2:"9932","9a1311ca":"9987","3ec46315":"9993","9dac1f3c":"9999"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(a,f)=>{var b=r.o(e,a)?e[a]:void 0;if(0!==b)if(b)f.push(b[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>b=e[a]=[f,d]));f.push(b[2]=d);var c=r.p+r.u(a),t=new Error;r.l(c,(f=>{if(r.o(e,a)&&(0!==(b=e[a])&&(e[a]=void 0),b)){var d=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+d+": "+c+")",t.name="ChunkLoadError",t.type=d,t.request=c,b[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var b,d,c=f[0],t=f[1],o=f[2],n=0;if(c.some((a=>0!==e[a]))){for(b in t)r.o(t,b)&&(r.m[b]=t[b]);if(o)var i=o(r)}for(a&&a(f);n<c.length;n++)d=c[n],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},f=self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})(),r.nc=void 0})();