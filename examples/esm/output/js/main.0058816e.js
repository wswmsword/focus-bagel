"use strict";(self.webpackChunkcjs=self.webpackChunkcjs||[]).push([[179],{292:()=>{function t(){t=function(){return e};var e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),u=new _(r||[]);return o(a,"_invoke",{value:x(t,n,u)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var d={};function v(){}function p(){}function h(){}var y={};l(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(A([])));m&&m!==n&&r.call(m,a)&&(y=m);var w=h.prototype=v.prototype=Object.create(y);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function x(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=b(a,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function b(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function A(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=h,o(w,"constructor",{value:h,configurable:!0}),o(h,"constructor",{value:p,configurable:!0}),p.displayName=l(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},k(E.prototype),l(E.prototype,u,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new E(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=A,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;I(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}function e(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function n(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=t.apply(n,r);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))}}function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a=function(t){return Object.prototype.toString.call(t)},u=function(t){return"[object Object]"===a(t)},c=function(t){return"[object Function]"===a(t)},l=function(){return document.activeElement},s=function(t){return"string"==typeof t?(e=t,document.querySelector(e)):t;var e},f=function(t){return"Enter"===t.key||13===t.keyCode},d=function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode},v=function(t){return"Tab"===t.key||9===t.keyCode},p=function(t){return v(t)&&!t.shiftKey},h=function(t){return v(t)&&t.shiftKey},y=function(t){var e;return t.focus(),(e=t).tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select&&t.select(),!0},g=function(){var e=n(t().mark((function e(n){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){null==n?setTimeout((function(){return t(n&&y(n))}),0):t(y(n))})));case 1:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(t,e,n,r){var o,i=e.map((function(t){return s(t)})).filter((function(t){return null!=t})),a=i[0],u=i.slice(-1)[0],c=null!==(o=s(t))&&void 0!==o?o:function(t,e){if(null==t||null==e)return null;if(t.contains(e))return t;if(e.contains(t))return e;var n=new Range;return n.setStartBefore(t),n.setEndAfter(e),n.collapsed&&(n.setStartBefore(e),n.setEndAfter(t)),n.commonAncestorContainer}(a,u);return{rootNode:c,subNodes:i,head:a,tail:u,coverNode:r?c:s(n)}},w=function(t,e){var n=Array.isArray(e.node)?e.node.map((function(t){return r({},e,{node:t})})):e;return t.concat(n)},k=function(t,e,n,o,i){var a,l,s=[].concat(t).filter((function(t){return null!=t})).map((function(t){return u(t)?t:{node:t}})).map((function(t){return r({},t,{type:void 0===t.type?[null==t.key?"":"keydown",null==t.node?"":"click"].filter((function(t){return""!==t})):[].concat(t.type)})})).reduce(w,[]),f=c(e)?e:!0===e?null!==(a=null===(l=s[0])||void 0===l?void 0:l.on)&&void 0!==a?a:function(){}:e;return[c(f)?{node:null,key:d,on:f,target:n?o:i,type:["keydown"]}:null].concat(s).filter((function(t){return null!=t}))},E=function(t){var e=c(t),n=e&&t((function(){})),r=e&&"[object Promise]"===a(n),o=e&&!r;return{promiseDelay:r,callbackDelay:o,commonDelay:!0===t&&!r&&!o}},x=function(){var e=n(t().mark((function e(n,r){var o,i,a,u;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=n?E(n):{},i=o.promiseDelay,a=o.callbackDelay,u=o.commonDelay,!i){t.next=7;break}return t.next=4,n((function(){}));case 4:r(),t.next=16;break;case 7:if(!a){t.next=11;break}n(r),t.next=16;break;case 11:if(!u){t.next=15;break}r(),t.next=16;break;case 15:return t.abrupt("return",!0);case 16:case"end":return t.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(t,e,n,r,o,i,a,u){if(null==t||!0===t)return o?e:a;if(c(t)){var l=t({e:u,list:n,cover:e,root:r,last:n[i],lastI:i});return null==l||!0===l?o?e:a:l}return s(t)},L=function(){function t(){this.cache=[],this.isEmpty=!0}var e=t.prototype;return e.push=function(t,e,n){this.isEmpty=!1,this.cache.push({node:t,type:e,handler:n})},e.clean=function(){this.cache=[],this.isEmpty=!0},e.addListeners=function(){this.cache.forEach((function(t){var e;return null===(e=t.node)||void 0===e?void 0:e.addEventListener(t.type,t.handler)}))},e.removeListeners=function(){this.cache.forEach((function(t){var e;return null===(e=t.node)||void 0===e?void 0:e.removeEventListener(t.type,t.handler)})),this.clean()},t}(),I=function(){function t(){this.cache=new Map}var e=t.prototype;return e.has=function(t){return this.cache.has(t)},e.push=function(t,e,n){this.has(t)||(e.addEventListener("keydown",n),this.cache.set(t,{node:e,handler:n}))},e.remove=function(t){var e=this;[].concat(t).forEach((function(t){return e.cache.get(t).node.removeEventListener("keydown",e.cache.get(t).handler)}))},t}(),_=function(){function t(){this.data=[],this.head=null,this.tail=null}var e=t.prototype;return e.update=function(t){this.data.splice(0,this.data.length),Array.prototype.push.apply(this.data,t),this.head=t[0],this.tail=t.at(-1)},e.isEmpty=function(){return 0===this.data.length},e.has=function(t){return!!this.data[t]},t}(),A=function(){var e,o,a=0-((arguments.length<=0?void 0:arguments[0])instanceof Array),v=0+a<0||arguments.length<=0+a?void 0:arguments[0+a],E=1+a<0||arguments.length<=1+a?void 0:arguments[1+a],A=null!==(e=2+a<0||arguments.length<=2+a?void 0:arguments[2+a])&&void 0!==e?e:{};if(!(Array.isArray(E)&&E.length>1))throw new Error("请至少传入一个数组，数组至少包含两个可聚焦元素，用来表示列表的头和尾。");var N=A.sequence,j=A.loop,T=A.next,D=A.prev,O=A.trigger,S=A.entry,F=A.exit,B=A.onEscape,K=A.onClick,P=A.onMove,C=A.cover,M=A.initialActive,$=A.correctionTarget,G=A.delayToFocus,R=A.delayToBlur,U=A.removeListenersEachExit,q=void 0===U||U,Y=A.removeListenersEachEnter,z=A.manual,H=A.allowSafariToFocusAfterMousedown,J=void 0===H||H;A.demo;var Q=u(C)?C:{},V=Q.node,W=Q.enterKey,X=Q.onEnter,Z=Q.exit,tt=null!=C&&!1!==C&&!1!==V,et=tt&&(!0===C||!0===V||null==V),nt=new _,rt=[].concat(S).filter((function(t){return null!=t})).map((function(t){return u(t)?t:{node:t}})).map((function(t){var e;return r({},t,{delay:null!==(e=t.delay)&&void 0!==e?e:G,type:void 0===t.type?[null==t.key?"":"keydown",null==t.node?"":"click"].filter((function(t){return""!=t})):[].concat(t.type),onExit:!0===t.onExit?t.on:t.onExit})})).reduce(w,[]),ot=0===rt.length,it=new Set(rt.map((function(t){return c(t.onExit)?t.node:null})).filter((function(t){return null!=t})).map((function(t){return s(t)}))),at=s(O||(null===(o=rt[0])||void 0===o?void 0:o.node)),ut=[].concat(Z).filter((function(t){return null!=t})).map((function(t){return u(t)?t:{key:t}})).map((function(t){var e;return r({},t,{target:null!==(e=t.target)&&void 0!==e?e:at})})),ct=tt&&0===ut.length,lt=!1===B,st=u(T)?T:{key:T},ft=st.key,dt=st.on,vt=u(D)?D:{key:D},pt=vt.key,ht=vt.on,yt=!(null==j||j),gt=!!(ft||pt||N),mt=null!=M?M:-1,wt=-1,kt=new L,Et=!1,xt=!1,bt=new L,Lt=new I;if(!z&&(Kt(),(ot?[{}]:rt).some((function(t){return!t.delay})))){var It=m(v,E,V,et),_t=It.rootNode,At=It.subNodes,Nt=It.head,jt=It.tail,Tt=It.coverNode;nt.update(At),Bt(_t,nt.data,Nt,jt,Tt)}var Dt={enter:function(t){if(at=at||l(),t)return Ot({fromInvoke:!0},t.on,t.target,t.delay);for(var e,n=function(){var t=e.value,n=t.on,r=t.type,o=t.node,i=t.target,a=t.delay;if(null!=r&&r.some((function(t){return null==t||!1===t||"invoke"===t}))||null==o)return{v:Ot({fromInvoke:!0},n,i,a)}},r=i(rt);!(e=r()).done;){var o=n();if("object"==typeof o)return o.v}return Ot({fromInvoke:!0})},exit:function(t){var e=m(v,E,V,et),n=e.subNodes,r=e.coverNode,o=e.rootNode;if(t){var a=t.on,u=t.target;return p(s(u),a)}for(var c,l=function(){var t=c.value,e=t.on,n=t.type,r=t.target;if(null!=n&&n.some((function(t){return null==t||!1===t||"invoke"===t})))return{v:p(r,e)}},f=i(k(F,B,tt,r,at));!(c=f()).done;){var d=l();if("object"==typeof d)return d.v}function p(t,e){return nt.isEmpty()&&nt.update(n),Ft({fromInvoke:!0},e,t,!1,r,nt.data,o)}},removeListeners:function(){kt.removeListeners(),bt.removeListeners()},removeListRelatedListeners:function(){kt.removeListeners()},removeEntryListeners:function(){bt.removeListeners()},addEntryListeners:function(){Kt()},addListRelatedListeners:function(){var t=m(v,E,V,et),e=t.rootNode,n=t.subNodes,r=t.coverNode;nt.isEmpty()&&nt.update(n),Bt(e,nt.data,nt.head,nt.tail,r)},addForward:function(t,e){var n=null;if(c(e)){var r=m(v,E,V,et);n=e({root:r.rootNode,list:r.subNodes,head:r.head,tail:r.tail,cover:r.coverNode,curI:mt,prevI:wt})}else n=e;var o=n,i=o.node,a=o.on,u=o.key,l=o.target,f=s(i),d=s(l);Lt.push(t,f,(function(t){null!=u&&u(t,mt)&&(t.preventDefault(),null==a||a(),g(d))}))},removeForward:function(t){Lt.remove(t)},updateList:function(t){var e=t.map((function(t){return s(t)})).filter((function(t){return null!=t}));nt.update(e)},i:function(t){return nt.has(t)&&Et?(wt=mt,mt=t,null==P||P({e:{fromI:!0},prev:nt.data[wt],cur:nt.data[mt],prevI:wt,curI:mt}),y(E[mt]),t):mt}};return Dt;function Ot(t,e,n,r){return St.apply(this,arguments)}function St(){return St=n(t().mark((function e(n,r,o,i){var a,u;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=function(t,e,r){var i=b(o,t,e,r,tt,mt,e[-1===mt?0:mt],n),a=e.indexOf(i);a>-1&&(wt=mt,mt=a,null==P||P({e:n,prev:e[wt],cur:i,prevI:wt,curI:mt}),Et=!0),tt&&(i===t||a>-1)&&(xt=!0),g(i)},a=function(){var t=m(v,E,V,et),e=t.rootNode,n=t.subNodes,r=t.head,i=t.tail,a=t.coverNode;nt.update(n),z||Bt(e,nt.data,r,i,a),!1!==o&&u(a,n,e)},!xt&&!Et){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,null==r?void 0:r(n);case 6:i?x(i,a):a();case 8:case"end":return t.stop()}}),e)}))),St.apply(this,arguments)}function Ft(e,r,o,i,a,u,l,s){var f;if(!Et||c(s)&&!s({e,prev:u[wt],cur:u[mt],prevI:wt,curI:mt}))return!1;Et=!1,null===(f=e.preventDefault)||void 0===f||f.call(e);var d=b(o,a,u,l,tt,mt,at,e);return d?function(){return v.apply(this,arguments)}():function(){return p.apply(this,arguments)}();function v(){return(v=n(t().mark((function n(){var o,c;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){y(d),null==P||P({e,prev:u[mt],cur:d,prevI:mt,curI:-1}),z||(d!==a&&Pt(),Kt())},t.next=3,null==r?void 0:r(e);case 3:return i=null!==(o=i)&&void 0!==o?o:R,t.next=6,x(i,c);case 6:t.sent&&c();case 8:case"end":return t.stop()}}),n)})))).apply(this,arguments)}function p(){return(p=n(t().mark((function n(){var o,c;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==d){t.next=6;break}return t.next=3,null==r?void 0:r(e);case 3:return null==P||P({e,prev:u[mt],cur:null,prevI:mt,curI:-1}),z||(Pt(),Kt()),t.abrupt("return");case 6:if(!tt){t.next=13;break}return t.next=9,null==r?void 0:r(e);case 9:null==P||P({e,prev:u[mt],cur:null,prevI:mt,curI:-1}),y(a),t.next=21;break;case 13:return c=function(){at&&y(at),null==P||P({e,prev:u[mt],cur:null,prevI:mt,curI:-1}),z||(Pt(),Kt())},t.next=16,null==r?void 0:r(e);case 16:return i=null!==(o=i)&&void 0!==o?o:R,t.next=19,x(i,c);case 19:t.sent&&c();case 21:case"end":return t.stop()}}),n)})))).apply(this,arguments)}}function Bt(t,e,n,r,o){if(kt.isEmpty){if(null==t)throw new Error("没有找到元素 "+v+"，您可以尝试 delayToFocus 选项，等待元素 "+v+" 渲染完毕后进行聚焦。");if(null==n||null==r)throw new Error("至少需要包含两个可以聚焦的元素，如果元素需要等待渲染，您可以尝试 delayToFocus 选项。");var a=function(){return!!ot||Et},u=gt?function(t,e,n,r,o,i,a,u,c,l,s){return function(e){if(e.target!==c&&s()){var n=[mt,function(t){return mt=t}],f=n[0],d=n[1],v=function(t){return wt=t},g=Math.max(0,f),m=t.length;if((null!=o?o:p)(e)){var w=g+1,k=r?Math.min(m-1,w):w;k%=m,null==a||a({e,prev:t[g],cur:t[k],prevI:g,curI:k}),null==l||l({e,prev:t[g],cur:t[k],prevI:g,curI:k}),d(k),v(g),y(t[k]),e.preventDefault()}else if((null!=i?i:h)(e)){var E=g-1,x=r?Math.max(0,E):E;x=(x+m)%m,null==u||u({e,prev:t[g],cur:t[x],prevI:g,curI:x}),null==l||l({e,prev:t[g],cur:t[x],prevI:g,curI:x}),d(x),v(g),y(t[x]),e.preventDefault()}}}}(e,0,0,yt,ft,pt,dt,ht,o,P,a):function(t,e,n,r,o,i,a){return function(u){var c=t[0],l=t.at(-1),s=u.target;s!==i&&a()&&(p(u)?(null==n||n({e:u}),s===l&&(u.preventDefault(),e||y(c)),s===o&&(u.preventDefault(),y(c))):h(u)&&(null==r||r({e:u}),s===c&&(u.preventDefault(),e||y(l)),s===o&&(u.preventDefault(),y(l))))}}(e,yt,dt,ht,t,o,a),c=function(t,e){var n=t.reduce((function(t,n){var r,o=t[0],i=t[1],a=t[2],u=t[3],c=t[4],l=t[5],f=function(t){var e;return null===(e=n.type)||void 0===e?void 0:e.includes(t)};return null!=(r=n.node)&&e.contains(s(r))||null==r?(f("keydown")&&(o=o.concat(n)),f("click")&&(i=i.concat(n)),f("focus")&&(a=a.concat(n)),f("outlist")&&(l=l.concat(n))):(f("click")&&(u=u.concat(n)),f("focus")&&(c=c.concat(n)),f("outlist")&&(l=l.concat(n))),[o,i,a,u,c,l]}),new Array(6).fill([])),r=n[0],o=n[1],i=n[2],a=n[3],u=n[4],c=n[5];return{keyExits:r,clickExits:o,focusExits:i,hasClickExits:o.length>0,hasFocusExits:i.length>0,hasKeyExits:r.length>0,clickExits_wild:a,focusExits_wild:u,outListExits:c}}(k(F,B,tt,o,at),t),m=c.keyExits,w=c.clickExits,E=c.focusExits,x=c.hasClickExits,b=c.hasFocusExits,L=c.hasKeyExits,I=c.clickExits_wild,_=c.focusExits_wild,A=c.outListExits,N=I.map((function(t){return[s(null==t?void 0:t.node),V(t)]})),j=_.map((function(t){return[s(null==t?void 0:t.node),Z(t)]}));kt.push(t,"focusin",O),kt.push(t,"focusout",S),t.contains(o)||null==o||(kt.push(o,"focus",G),kt.push(o,"blur",R)),kt.push(t,"keydown",(function(t){u(t),L&&function(t){if(!(t.target===o||lt&&d(t)))for(var e,n=i(m);!(e=n()).done&&!Q(t,e.value););}(t)})),gt&&kt.push(t,"click",M),kt.push(t,"mousedown",C),x&&kt.push(t,"click",Y),b&&kt.push(t,"focusin",H),j.forEach((function(t){var e=t[0],n=t[1];kt.push(e,"focus",n)})),N.forEach((function(t){var e=t[0],n=t[1];kt.push(e,"click",n)})),null!=o&&kt.push(o,"keydown",U),kt.addListeners();var T=!1,D=!1}function O(n){var r=n.target;if(tt&&r===o)xt=!0;else if(tt&&!1===T&&!1===xt)g(o);else{if(!1!==$&&gt&&!1===Et&&!1===T){var i,a=null!==(i=null==$?void 0:$({list:e,cover:o,root:t,last:e[mt],lastI:mt}))&&void 0!==i?i:-1===mt?e[0]:e[mt],u=s(a),c=e.findIndex((function(t){return t===u}));c>-1&&(wt=mt,mt=c,null==P||P({e:n,prev:e[wt],cur:e[mt],prevI:wt,curI:mt})),g(u)}Et=!0}}function S(n){it.has(n.relatedTarget)||setTimeout((function(){var r=l(),a=!t.contains(r),u=r===o;if(n.target===o&&a)xt=!1;else{var c=null;(u||a)&&(c=function(n){for(var r,a=i(A);!(r=a()).done;){var u=r.value,c=u.on,l=u.target,f=u.delay;return Ft(n,c,s(l),f,o,e,t,u.if)}}(n)),!1!==c&&(u?Et=!1:a&&(Et=!1,xt=!1))}}))}function C(t){var n;T=!0,setTimeout((function(){T=!1})),(!gt||gt&&(n=e.find((function(e){return e.contains(t.target)}))))&&(Et=!0,tt&&(xt=!0),J&&n&&void 0!==window.safari&&(y(n),t.preventDefault()))}function M(t){var n=t.target,r=e.findIndex((function(t){return t.contains(n)}));r>-1&&(wt=mt,mt=r,null==K||K({e:t,prev:e[wt],cur:e[mt],prevI:wt,curI:mt}),wt===mt&&!1!==Et||null==P||P({e:t,prev:e[wt],cur:e[mt],prevI:wt,curI:mt}))}function G(){xt=!0}function R(){D?D=!1:xt=!1}function U(t){if(t.target===o&&xt&&!Et){if((null!=W?W:f)(t)&&!Et)return t.preventDefault(),D=!0,Et=!0,null==X||X(t),y(e[mt=-1===mt?0:mt]),void(null==P||P({e:t,prev:null,cur:e[mt],prevI:null,curI:mt}));for(var n,a=i(ut);!(n=a()).done;){var u=n.value,c=u.key,l=u.on,d=u.target,v=s(d);if(null!=c&&c(t,mt))return void h(t,l,v)}ct&&p(t)&&y(r)}function h(t,e,n){null==e||e(t),n&&y(n),Pt()}}function q(n,r){var i=r.node,a=r.on,u=r.target,c=r.delay,l=s(i),f=s(u);return!(null!=l&&!l.contains(n.target)||null==l||(Ft(n,a,f,c,o,e,t,r.if),0))}function Y(t){for(var e,n=i(w);!(e=n()).done&&!q(t,e.value););}function z(n,r){var i=r.node,a=r.on,u=r.target,c=r.delay,l=s(i),f=s(u);return(null==l||n.target===l)&&null!=l&&(Ft(n,a,f,c,o,e,t,r.if),!0)}function H(t){for(var e,n=i(E);!(e=n()).done&&!z(t,e.value););}function Q(n,r){var i=r.key,a=r.node,u=r.target,c=r.on,l=r.delay,f=s(a);return(null==f||n.target===f)&&(null!=i&&i(n,mt)?(Ft(n,c,u,l,o,e,t,r.if),!0):void 0)}function V(t){return function(e){q(e,t)}}function Z(t){return function(e){z(e,t)}}}function Kt(){if(bt.isEmpty){for(var t,e=function(){var e=t.value,n=e.node,r=e.on,o=e.key,i=e.type,a=e.target,u=e.delay,l=e.onExit,f=e.if,d=[].concat(i),p=["keydown","focus","click"],h=s(n);function y(t){null==o||!o(t,mt)||c(f)&&!f({e:t,prev:nt.data[wt],cur:nt.data[mt],prevI:wt,curI:mt})||w(t,!0)}function g(t){c(f)&&!f({e:t,prev:nt.data[wt],cur:nt.data[mt],prevI:wt,curI:mt})||w(t)}function w(t,e){if(Et){if(c(l)){var n=m(v,E,V,et),o=n.subNodes,i=n.coverNode,s=n.rootNode;e&&t.preventDefault(),Ft(t,l,a,!1,i,o,s)}}else e&&t.preventDefault(),Ot(t,r,a,u),Y&&!z&&bt.removeListeners()}d.forEach((function(t){if(h&&p.includes(t)){var e="keydown"===t?y:g;bt.push(h,t,e)}}))},n=i(rt);!(t=n()).done;)e();bt.addListeners()}}function Pt(){ct||q&&!z&&kt.removeListeners()}};const N=document.getElementById("dialog"),j=document.getElementById("dialog_mask"),T=document.getElementById("open");A(N,["#firstFocusBtn","#close"],{loop:!1,entry:{node:T,on:function(){N.classList.add("openedDialog"),N.classList.remove("closedDialog"),j.classList.remove("closed_mask"),T.ariaExpanded=!0}},exit:{node:["#close","#firstFocusBtn","#confirm"],on:function(){N.classList.remove("openedDialog"),N.classList.add("closedDialog"),j.classList.add("closed_mask"),T.ariaExpanded=!1},type:["click","outlist"]},onEscape:!0});const D=document.getElementById("menu_btn"),O=document.getElementById("menu");function S(){D.classList.toggle("opened"),O.classList.toggle("opened"),D.ariaExpanded=!!D.classList.contains("opened")}A(O,["#dialog_anchor","#player_anchor"],{onEscape:S,entry:{node:D,on:S,onExit:!0},exit:[{node:"#dialog_anchor",type:"keydown",key:t=>"Tab"===t.key&&t.shiftKey,on:S},{node:"#player_anchor",type:"keydown",key:t=>"Tab"===t.key&&!t.shiftKey,on:S,target:"#nav_link"},{type:"outlist",on:S,target:({e:t})=>!t?.relatedTarget?.id?.includes("h-")&&D}]}),A("#tab_list",["#tab_1","#tab_2","#tab_3","#tab_4","#tab_5"],{next:t=>"ArrowRight"===t.key,prev:t=>"ArrowLeft"===t.key,exit:[{key:t=>"Tab"===t.key&&!t.shiftKey,target:"#tags_code"},{key:t=>"Tab"===t.key&&t.shiftKey,target:"#navigation_code"}],initialActive:1,removeListenersEachExit:!1,onMove:function({prev:t,cur:e,prevI:n,curI:r}){if(r===n||-1===r)return;(t??document.getElementById("tab_1")).setAttribute("aria-selected","false"),e.setAttribute("aria-selected","true");const o=document.getElementById("tabpanel_"+(n+1))||document.getElementById("tabpanel_1"),i=document.getElementById("tabpanel_"+(r+1));o.classList.add("is-hidden"),i.classList.remove("is-hidden")}}),A("#songs_wrapper",["#song_1","#song_2","#song_3","#song_4","#song_5","#song_6","#song_7"],{next:t=>"ArrowDown"===t.key,prev:t=>"ArrowUp"===t.key,exit:[{key:t=>"Tab"===t.key&&!t.shiftKey,target:"#more_from"},{key:t=>"Tab"===t.key&&t.shiftKey,target:"#grid_wrapper"}],entry:{node:"#grid_wrapper",key:(t,e)=>("Tab"===t.key&&!t.shiftKey&&e>-1||"ArrowDown"===t.key||"ArrowUp"===t.key)&&"grid_wrapper"===t.target.id,type:"keydown"},onMove:function({cur:t,prev:e,curI:n}){e?.classList.remove("focused"),t?.classList.add("focused"),null!=B&&(F=-1===B.i()?0:B.i()),B?.removeListeners(),n>-1&&(B=function(t,e){const n=t+1;return A(`#song_${n}`,[`#s${n}_play`,`#s${n}_a`,`#s${n}_like`,`#s${n}_more`],{entry:[{node:`#song_${n}`,type:"focus",target:({list:t})=>t[e]},{node:`#song_${n}`,key:t=>"ArrowRight"===t.key||"ArrowLeft"===t.key,type:"keydown"},{node:`#song_${n}`,type:"click",target:!1}],next:t=>"ArrowRight"===t.key,prev:t=>"ArrowLeft"===t.key,exit:{type:"outlist",target:!1},initialActive:F,correctionTarget:!1})}(n,F))},correctionTarget:({lastI:t,last:e})=>-1===t?"#grid_wrapper":e,removeListenersEachExit:!1}).addForward("grid",{node:"#grid_wrapper",key:(t,e)=>"Tab"===t.key&&!t.shiftKey&&-1===e,target:"#more_from"});let F=0,B=null}},t=>{t(t.s=292)}]);