!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.focusBagel,r=e.focusBagel=t();r.noConflict=function(){return e.focusBagel=n,r}}())}(this,(function(){"use strict";function e(){e=function(){return t};var t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var i=t&&t.prototype instanceof d?t:d,u=Object.create(i.prototype),a=new j(r||[]);return o(u,"_invoke",{value:L(e,n,a)}),u}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var v={};function d(){}function h(){}function p(){}var y={};l(y,u,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(P([])));m&&m!==n&&r.call(m,u)&&(y=m);var w=p.prototype=d.prototype=Object.create(y);function x(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,i,u,a){var c=s(e[o],e,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,u,a)}),(function(e){n("throw",e,u,a)})):t.resolve(f).then((function(e){l.value=e,u(l)}),(function(e){return n("throw",e,u,a)}))}a(c.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function L(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var a=k(u,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function k(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=s(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,v;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,v):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function P(e){if(e){var t=e[u];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=p,o(w,"constructor",{value:p,configurable:!0}),o(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},x(E.prototype),l(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var u=new E(f(e,n,r,o),i);return t.isGeneratorFunction(n)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},x(w),l(w,c,"Generator"),l(w,u,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=P,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return u.type="throw",u.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=e,u.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:P(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},t}function t(e,t,n,r,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}var n=function(e){return Object.prototype.toString.call(e)},r=function(e){return"[object Object]"===n(e)},o=function(){return document.activeElement},i=function(e){return"string"==typeof e?(t=e,document.querySelector(t)):e;var t},u=function(e){return"Enter"===e.key||13===e.keyCode},a=function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode},c=function(e){return"Tab"===e.key||9===e.keyCode},l=function(e){return c(e)&&!e.shiftKey},f=function(e){return c(e)&&e.shiftKey},s=function(e){var t;return e.focus(),(t=e).tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select&&e.select(),!0},v=function(e){null==e?setTimeout((function(){return e&&s(e)}),0):s(e)},d=function(e,t,n,r,o,u){var a,c=t.map((function(e){return i(e)})).filter((function(e){return null!=e})),l=c[0],f=c.slice(-1)[0],s=null!==(a=i(e))&&void 0!==a?a:function(e,t){if(null==e||null==t)return null;if(e.contains(t))return e;if(t.contains(e))return t;var n=new Range;return n.setStartBefore(e),n.setEndAfter(t),n.collapsed&&(n.setStartBefore(t),n.setEndAfter(e)),n.commonAncestorContainer}(l,f);return{rootNode:s,subNodes:c,head:l,tail:f,exitNode:i(n),coverNode:!0===r?s:i(r),coverNext:i(o),coverPrev:i(u)}};return function(){var c,h=0-((arguments.length<=0?void 0:arguments[0])instanceof Array),p=0+h<0||arguments.length<=0+h?void 0:arguments[0+h],y=1+h<0||arguments.length<=1+h?void 0:arguments[1+h],g=null!==(c=2+h<0||arguments.length<=2+h?void 0:arguments[2+h])&&void 0!==c?c:{},m=g.manual,w=g.loop,x=g.forward,E=g.backward,L=g.trigger,k=g.enter,b=void 0===k?{}:k,N=g.exit,j=void 0===N?{}:N,P=g.onEscape,O=g.cover,_=void 0!==O&&O,T=g.delayToFocus,B=g.removeListenersEachExit,S=void 0===B||B;g.demo;var F=b.node,D=b.on,G=b.key,K=j.node,A=j.on,C=j.key,I=r(x)?x:{key:x},M=I.key,Y=I.on,q=r(E)?E:{key:E},R=q.key,z=q.on,H=r(_)?_:{node:_?p||!0:null},J=H.node,Q=H.next,U=H.nextKey,V=H.nextKeyBack,W=H.onNext,X=H.onNextBack,Z=H.prev,$=H.prevKey,ee=H.prevKeyBack,te=H.onPrev,ne=H.onPrevBack,re=H.enterKey,oe=H.onEnter,ie=H.exitKey,ue=H.onExit,ae=!!J,ce=d(p,y,K,J,Q,Z),le=ce.rootNode,fe=ce.subNodes,se=ce.head,ve=ce.tail,de=ce.coverNode,he=ce.exitNode,pe=ce.coverNext,ye=ce.coverPrev,ge="[object Function]"===n(T),me=ge&&T((function(){})),we=ge&&"[object Promise]"===n(me),xe=ge&&!we,Ee=(null==se||null==ve||ae&&null==de)&&!we&&!xe,Le=we||xe||Ee,ke=!(null==w||w),be=!!(M||R||m),Ne=null!=P?P:A,je=!1===Ne||null==Ne,Pe=i(L||F),Oe=0,_e=!1,Te=!1;return Pe&&(Pe.addEventListener("click",Be),G&&Pe.addEventListener("keydown",(function(e){G(e)&&Be(e)}))),Le||Ge(le,fe,se,ve,he,de,pe,ye),{enter:function(){Pe=Pe||o();var e=i(y[0]);null==e?console.warn("没有找到元素 "+y[0]+"，如果元素需要等待渲染，您需要延迟调用 enter 等待渲染完毕。"):s(e)},exit:function(){null==Pe?console.warn("未指定触发器，将不会聚焦触发器，您可以在调用 focusBagel 时传入选项 trigger 指定触发器，或者在触发触发器的时候调用函数 enter。"):s(Pe)},i:function(){return Oe}};function Be(e){return Se.apply(this,arguments)}function Se(){var n;return n=e().mark((function t(n){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D&&D(n),!Le){e.next=11;break}if(!we){e.next=8;break}return e.next=5,T((function(){}));case 5:Fe(),e.next=9;break;case 8:xe?T(Fe):Ee&&Fe();case 9:e.next=12;break;case 11:S?(Ge(le,fe,se,ve,he,de,pe,ye),De(le,se)):De(le,se);case 12:case"end":return e.stop()}}),t)})),Se=function(){var e=this,r=arguments;return new Promise((function(o,i){var u=n.apply(e,r);function a(e){t(u,o,i,a,c,"next",e)}function c(e){t(u,o,i,a,c,"throw",e)}a(void 0)}))},Se.apply(this,arguments)}function Fe(){var e=d(p,y,K,J,Q,Z),t=e.rootNode,n=e.subNodes,r=e.head,o=e.tail,i=e.coverNode;Ge(t,n,r,o,e.exitNode,i,e.coverNext,e.coverPrev),De(i,r)}function De(e,t){v(ae?e:t)}function Ge(e,t,n,r,i,c,v,d){if(null==e)throw new Error("没有找到元素 "+p+"，您可以尝试 delayToFocus 选项，等待元素 "+p+" 渲染完毕后进行聚焦。");if(null==n||null==r)throw new Error("至少需要包含两个可以聚焦的元素，如果元素需要等待渲染，您可以尝试 delayToFocus 选项。");K&&null==i&&console.warn("没有找到元素 "+K+"，如果元素需要等待渲染，您可以尝试 delayToFocus 选项。");var h=be?function(e,t,n,r,o,i,u,c,v,d){return function(h){if(h.target!==d)if(h.stopImmediatePropagation(),h.stopImmediatePropagation(),(null!=o?o:l)(h)){u&&u(h);var p=e.length,y=t+1;t=n?Math.min(p-1,y):y,t%=p,h.preventDefault(),s(e[t])}else if((null!=i?i:f)(h)){c&&c(h);var g=e.length,m=t-1;t=((t=n?Math.max(0,m):m)+g)%g,h.preventDefault(),s(e[t])}else(null!=v?v:a)(h)&&r()}}(t,Oe,ke,L,M,R,Y,z,C,c):function(e,t,n,r,o,i,u,c){return function(v){var d=v.target;d!==c&&(v.stopImmediatePropagation(),l(v)?(o&&o(v),d===t&&(v.preventDefault(),n||s(e))):f(v)?(i&&i(v),d===e&&(v.preventDefault(),n||s(t))):(null!=u?u:a)(v)&&r())}}(n,r,ke,L,Y,z,C,c);function y(e){var t=e.target;o()!==c&&(Te=!0),t===r&&(s(r),Te=!0)}function g(e){e.relatedTarget===c||Te||s(c)}function m(e){null!=V&&V(e)?(null==X||X(e),s(c)):f(e)&&(null==X||X(e),e.preventDefault(),s(c))}function w(e){null!=ee&&ee(e)?(null==ne||ne(e),s(c)):l(e)&&(null==ne||ne(e),e.preventDefault(),s(c))}function x(e){null!=U&&U(e)?(null==W||W(e),null==v?console.warn("当前没有指定聚焦元素，请指定 cover.next。"):s(v)):l(e)?(null==W||W(e),null==v?s(r):(e.preventDefault(),s(v))):null!=$&&$(e)?(null==te||te(e),null==d?console.warn("当前没有指定聚焦元素，请指定 cover.prev。"):s(d)):f(e)?(null==te||te(e),null==d?s(c):(e.preventDefault(),s(d))):(null!=re?re:u)(e)?(Te=!0,null==oe||oe(e),s(n)):(null!=ie?ie:a)(e)&&function(e){k(),null==ue||ue(e),Pe&&s(Pe)}(e)}function E(e){k(),null==A||A(e),null!=Pe?s(Pe):console.warn("未指定触发器，将不会聚焦触发器，您可以在调用 focusBagel 时传入选项 trigger 指定触发器，或者在触发触发器的时候调用函数 enter，如果您使用了选项 enter，您也可以设置 enter.selector 而不指定选项 trigger 或者调用函数 enter。")}function L(e){if(!je)return ae?(Te=!1,null==Ne||Ne(e),s(c)):(k(),null==Ne||Ne(e),Pe&&s(Pe))}function k(){S&&(e.removeEventListener("keydown",h),null==i||i.removeEventListener("click",E),null==c||c.removeEventListener("keydown",x),null==v||v.removeEventListener("keydown",m),null==d||d.removeEventListener("keydown",w),null==r||r.removeEventListener("focus",g),e.removeEventListener("click",y))}!S&&_e||(_e=function(e,t,n,r,o,i,u,a,c,l,f,s,v){return e.addEventListener("keydown",t),null==n||n.addEventListener("click",r),null==o||o.addEventListener("keydown",i),null==u||u.addEventListener("keydown",a),null==c||c.addEventListener("keydown",l),null==u&&o&&(null==f||f.addEventListener("focus",s),e.addEventListener("click",v)),!0}(e,h,i,E,c,x,v,m,d,w,r,g,y))}}}));
//# sourceMappingURL=focus-bagel.umd.min.js.map
