(function(t){function e(e){for(var i,r,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],i=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var i={},n={app:0},a=[];function r(t){return s.p+"js/"+({canvg:"canvg",pdfmake:"pdfmake",xlsx:"xlsx"}[t]||t)+"."+{"chunk-2aed1fc2":"f963bca6","chunk-6f1adc24":"10537127",canvg:"7c93e398",pdfmake:"35db232b",xlsx:"6a06529a"}[t]+".js"}function s(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,i){o=n[t]=[e,i]}));e.push(o[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var o=n[t];if(0!==o){if(o){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}n[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=i,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(o,i,function(e){return t[e]}.bind(null,i));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/test-task-lead-hit/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"0554":function(t,e,o){var i=o("96a4");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("499e").default;n("8de89716",i,!0,{sourceMap:!1,shadowMode:!1})},"0613":function(t,e,o){"use strict";var i=o("2b0e"),n=o("2f62");i["a"].use(n["a"]),e["a"]=new n["a"].Store({state:{},mutations:{},actions:{},modules:{}})},"1da2":function(t,e,o){"use strict";o("fb52")},"2d2a":function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,".successfully[data-v-773d30c0]{border:1px solid #68cc89}.error[data-v-773d30c0]{border:1px solid #e54d42}.authorization[data-v-773d30c0]{max-width:500px;display:flex;flex-direction:column;height:100%;align-items:center;justify-content:center;margin:auto}.authorization__title[data-v-773d30c0]{color:#036}.form[data-v-773d30c0]{width:100%;border:1px solid rgba(0,0,0,.5);border-radius:8px}.form__header[data-v-773d30c0]{display:flex;align-items:center;justify-content:center;height:70px;border-radius:7px 7px 0 0;background-color:#09f;color:#036}.form__body[data-v-773d30c0]{padding:50px}.form__input-wrapper[data-v-773d30c0]{max-width:370px;width:100%;margin:auto}.form__input[data-v-773d30c0]{position:relative;outline:none;display:flex;padding:8px;font-weight:300;line-height:20px;align-items:center;color:#b3b3b3;border-radius:8px;font-size:32px;width:100%}.form__description[data-v-773d30c0]{position:absolute;margin-top:-2px;margin-left:10px;font-style:italic;color:#b3b3b3}.form__button[data-v-773d30c0]{margin:auto;font-family:sans-serif;background:#09f;font-size:16px;border:none;border-radius:10px;color:#036;cursor:pointer;font-weight:700;padding:10px 30px;letter-spacing:2px;outline:none;text-transform:uppercase;text-decoration:none;display:inline-block;text-shadow:0 1px 1px rgba(0,0,0,.3);transition:all .1s linear;display:flex;margin-top:50px}.form__button[data-v-773d30c0]:hover{box-shadow:0 4px 12px rgba(0,0,0,.2)}.form__button[data-v-773d30c0]:active{background:rgba(0,153,255,.5)}.form__button[data-v-773d30c0]:disabled{background-color:grey;pointer-events:none;cursor:default}.form__button-demo[data-v-773d30c0]{font-style:italic;display:flex;margin:5px auto 0;color:#b3b3b3;font-size:16px}.button_disabled span[data-v-773d30c0]{color:#b3b3b3;opacity:.2}",""]),t.exports=e},3300:function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,"/*! _normalize.css v8.0.1 | MIT License | github.com/necolas/_normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}*,:after,:before{box-sizing:border-box}ul{padding:0}blockquote,body,dd,dl,figcaption,figure,h1,h2,h3,h4,h5,li,p,ul{margin:0}html{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed}ul{list-style:none}a,a:hover,a:visited{text-decoration:none}button{padding:0;border:none;font:inherit;color:inherit;background-color:transparent;cursor:pointer}img{max-width:100%;display:block}article>*+*{margin-top:1em}button,input,select,textarea{font:inherit}#app{width:100%;height:100vh;overflow-y:auto}body{line-height:1.5}a{color:#0d6dfd;transition:all .1s linear}a:hover{color:rgba(13,109,253,.6)}a:active{color:rgba(13,109,253,.3)}h1,h2,h3,h4,h5{font-weight:500}h1{font-size:40px}h2{font-size:32px}h3{font-size:24px}p{text-align:justify}",""]),t.exports=e},"5c0b":function(t,e,o){"use strict";o("0554")},"6ab0":function(t,e,o){"use strict";o("e9b8")},"7dd5":function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,".notification[data-v-64b88c1b]{position:absolute;top:10px;right:10px;max-width:300px;width:100%;color:#fff;border-radius:6px;padding:10px;opacity:.8}.notification__title[data-v-64b88c1b]{font-weight:700}.notification__message[data-v-64b88c1b]{line-height:20px}.notification_error[data-v-64b88c1b]{background-color:#e54d42}.notification_success[data-v-64b88c1b]{background-color:#68cc89}",""]),t.exports=e},"965f":function(t,e,o){var i=o("9a21");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("499e").default;n("3ce96dac",i,!0,{sourceMap:!1,shadowMode:!1})},"96a4":function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,"/*! _normalize.css v8.0.1 | MIT License | github.com/necolas/_normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}*,:after,:before{box-sizing:border-box}ul{padding:0}blockquote,body,dd,dl,figcaption,figure,h1,h2,h3,h4,h5,li,p,ul{margin:0}html{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed}ul{list-style:none}a,a:hover,a:visited{text-decoration:none}button{padding:0;border:none;font:inherit;color:inherit;background-color:transparent;cursor:pointer}img{max-width:100%;display:block}article>*+*{margin-top:1em}button,input,select,textarea{font:inherit}#app{width:100%;height:100vh;overflow-y:auto}body{line-height:1.5}a{color:#0d6dfd;transition:all .1s linear}a:hover{color:rgba(13,109,253,.6)}a:active{color:rgba(13,109,253,.3)}h1,h2,h3,h4,h5{font-weight:500}h1{font-size:40px}h2{font-size:32px}h3{font-size:24px}p{text-align:justify}",""]),t.exports=e},"9a21":function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,".slide-enter-active[data-v-cc7cc352],.slide-leave-active[data-v-cc7cc352]{transition:.5s}.slide-enter[data-v-cc7cc352],.slide-leave-to[data-v-cc7cc352]{transform:translate(100%)}",""]),t.exports=e},ac4f:function(t,e,o){"use strict";o("965f")},ca18:function(t,e,o){var i=o("3300");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("499e").default;n("55ac8b0b",i,!0,{sourceMap:!1,shadowMode:!1})},cd47:function(t,e,o){"use strict";var i=o("d4ec"),n=o("bee2"),a=o("262e"),r=o("2caf"),s=o("9ab4"),c=o("2b0e"),u=o("2f62"),l=o("0613"),d=o("6fc5"),p="NotificationModule";c["a"].use(u["a"]);var f=function(t){Object(a["a"])(o,t);var e=Object(r["a"])(o);function o(){var t;return Object(i["a"])(this,o),t=e.apply(this,arguments),t.isShowNotification=!1,t.notificationOptions={message:"",type:""},t}return Object(n["a"])(o,[{key:"toggleShowNotification",value:function(t){this.isShowNotification=t}},{key:"setNotificationOptions",value:function(t){this.notificationOptions=t}}]),o}(d["d"]);Object(s["a"])([d["c"]],f.prototype,"toggleShowNotification",null),Object(s["a"])([d["c"]],f.prototype,"setNotificationOptions",null),f=Object(s["a"])([Object(d["b"])({dynamic:!0,namespaced:!0,name:p,stateFactory:!0,store:l["a"]})],f),e["a"]=Object(d["e"])(f)},cd49:function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view"),o("transition",{attrs:{name:"slide"}},[t.isShowNotification?o("NotificationView"):t._e()],1)],1)},a=[],r=o("d4ec"),s=o("bee2"),c=o("262e"),u=o("2caf"),l=o("9ab4"),d=o("1b40"),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notification",class:t.setClass},[o("div",{staticClass:"notification__title"},[t._v(t._s(t.setTitle))]),o("p",{staticClass:"notification__message"},[t._v(t._s(t.setMessage))])])},f=[],b=o("cd47"),h=function(t){Object(c["a"])(o,t);var e=Object(u["a"])(o);function o(){var t;return Object(r["a"])(this,o),t=e.apply(this,arguments),t.typeNotification={error:"Ошибка",success:"Успех"},t}return Object(s["a"])(o,[{key:"setTitle",get:function(){return this.getNotificationOptions?this.typeNotification[this.getNotificationOptions.type]:null}},{key:"setMessage",get:function(){return this.getNotificationOptions?this.getNotificationOptions.message:null}},{key:"setClass",get:function(){return this.getNotificationOptions?"notification_".concat(this.getNotificationOptions.type):null}},{key:"getNotificationOptions",get:function(){return b["a"].notificationOptions}}]),o}(d["c"]);h=Object(l["a"])([Object(d["a"])({components:{}})],h);var m=h,g=m,v=(o("6ab0"),o("2877")),y=Object(v["a"])(g,p,f,!1,null,"64b88c1b",null),x=y.exports,w=function(t){Object(c["a"])(o,t);var e=Object(u["a"])(o);function o(){return Object(r["a"])(this,o),e.apply(this,arguments)}return Object(s["a"])(o,[{key:"isShowNotification",get:function(){return b["a"].isShowNotification}}]),o}(d["c"]);w=Object(l["a"])([Object(d["a"])({components:{NotificationView:x}})],w);var _=w,k=_,z=(o("5c0b"),o("ac4f"),Object(v["a"])(k,n,a,!1,null,"cc7cc352",null)),O=z.exports,j=(o("d3b7"),o("3ca3"),o("ddb0"),o("8c4f")),N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"authorization"},[o("h1",{staticClass:"authorization__title"},[t._v("LeadHit")]),o("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submitHandler.apply(null,arguments)}}},[o("div",{staticClass:"form__header"},[t._v("Вход")]),o("div",{staticClass:"form__body"},[o("div",{staticClass:"form__input-wrapper"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"form__input",class:t.setClassStatus,attrs:{type:"text",name:"id",id:"id",placeholder:"Введите id",maxlength:"24",onkeyup:"this.value=this.value.replace(/\\s/,'')"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),t.validationInput?o("small",{staticClass:"form__description"},[t._v(" id сайта должен содержать 24 символа. "+t._s(t.setTextWithEnding(t.getLengthInput,"Введен","Введено","Введено"))+" "+t._s(t.getLengthInput)+" "+t._s(t.setTextWithEnding(t.getLengthInput,"символ","символа","символов"))+" ")]):t._e()]),o("button",{staticClass:"form__button",class:{button_disabled:t.validationInput},attrs:{disabled:t.validationInput}},[o("span",[t._v("Войти")])]),o("button",{staticClass:"form__button-demo",on:{click:function(e){return e.preventDefault(),t.fillWithTestData.apply(null,arguments)}}},[t._v(" заполнить тестовыми данными ")])])])])},S=[],M=o("c7eb"),C=o("1da1"),T=o("2f62"),L=o("0613"),A=o("6fc5"),I=o("bc3a"),P=o.n(I),E=P.a.create({baseURL:"https://track-api.leadhit.io/client/"}),q=E,$=function(){function t(){Object(r["a"])(this,t)}return Object(s["a"])(t,null,[{key:"authorization",value:function(t){return q.get("test_auth",{headers:{"Content-type":"application/json","Api-Key":"5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo","Leadhit-Site-Id":t}}).then((function(t){return t.data}))}}]),t}(),W="AuthorizationModule";i["a"].use(T["a"]);var D=function(t){Object(c["a"])(o,t);var e=Object(u["a"])(o);function o(){var t;return Object(r["a"])(this,o),t=e.apply(this,arguments),t.isAuthorized=!1,t}return Object(s["a"])(o,[{key:"toggleAuthorizationStates",value:function(t){this.isAuthorized=t}},{key:"authorizationAction",value:function(){var t=Object(C["a"])(Object(M["a"])().mark((function t(e){var o;return Object(M["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.authorization(e);case 2:return o=t.sent,"ok"===o.message&&(this.toggleAuthorizationStates(!0),localStorage.setItem("leadhit-site-id","5f8475902b0be670555f1bb3")),t.abrupt("return",o.message);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),o}(A["d"]);Object(l["a"])([A["c"]],D.prototype,"toggleAuthorizationStates",null),Object(l["a"])([A["a"]],D.prototype,"authorizationAction",null),D=Object(l["a"])([Object(A["b"])({dynamic:!0,namespaced:!0,name:W,stateFactory:!0,store:L["a"]})],D);var H=Object(A["e"])(D),R=function(t){Object(c["a"])(o,t);var e=Object(u["a"])(o);function o(){var t;return Object(r["a"])(this,o),t=e.apply(this,arguments),t.id="",t.requiredLength=24,t}return Object(s["a"])(o,[{key:"mounted",value:function(){var t=this.$el.querySelector("#id");t.focus()}},{key:"fillWithTestData",value:function(){this.id="5f8475902b0be670555f1bb3"}},{key:"setClassStatus",get:function(){var t;return(null===(t=this.id)||void 0===t?void 0:t.length)<this.requiredLength?"error":"successfully"}},{key:"validationInput",get:function(){var t;return(null===(t=this.id)||void 0===t?void 0:t.length)!==this.requiredLength}},{key:"getLengthInput",get:function(){var t;return null===(t=this.id)||void 0===t?void 0:t.length}},{key:"submitHandler",value:function(){var t=this;H.authorizationAction(this.id).then((function(e){"ok"===e&&(b["a"].setNotificationOptions({message:"Поздравляю, вы успешно авторизованы!",type:"success"}),b["a"].toggleShowNotification(!0),setTimeout((function(){b["a"].toggleShowNotification(!1)}),3e3),t.$router.push("/analytics"))})).catch((function(){b["a"].setNotificationOptions({message:"К сожалению, не удалось войти!",type:"error"}),b["a"].toggleShowNotification(!0),setTimeout((function(){b["a"].toggleShowNotification(!1)}),3e3),console.error("Ошибка запроса")}))}},{key:"setTextWithEnding",value:function(t,e,o,i){var n=Math.abs(t);return n%=100,n>=5&&n<=20?i:(n%=10,1===n?e:n>=2&&n<=4?o:i)}}]),o}(d["c"]);R=Object(l["a"])([Object(d["a"])({components:{}})],R);var B=R,F=B,J=(o("1da2"),Object(v["a"])(F,N,S,!1,null,"773d30c0",null)),V=J.exports;i["a"].use(j["a"]);var Y=[{path:"/",name:"AuthorizationPage",component:V},{path:"/analytics",name:"AnalyticsPage",component:function(){return o.e("chunk-2aed1fc2").then(o.bind(null,"68f2"))}},{path:"*",component:function(){return o.e("chunk-6f1adc24").then(o.bind(null,"0c8b"))}}],G=new j["a"]({mode:"history",base:"/test-task-lead-hit/",routes:Y}),K=G;o("ca18");i["a"].config.productionTip=!1,new i["a"]({router:K,store:L["a"],render:function(t){return t(O)}}).$mount("#app")},e9b8:function(t,e,o){var i=o("7dd5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("499e").default;n("19628964",i,!0,{sourceMap:!1,shadowMode:!1})},fb52:function(t,e,o){var i=o("2d2a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("499e").default;n("6e79940a",i,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.1c5b03f2.js.map