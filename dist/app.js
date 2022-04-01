/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./node_modules/keen-slider/keen-slider.min.css":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./node_modules/keen-slider/keen-slider.min.css ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".keen-slider:not([data-keen-slider-disabled]){-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;align-content:flex-start;display:flex;overflow:hidden;position:relative;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-khtml-user-select:none;width:100%}.keen-slider:not([data-keen-slider-disabled]) .keen-slider__slide{min-height:100%;overflow:hidden;position:relative;width:100%}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-reverse]{flex-direction:row-reverse}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-v]{flex-wrap:wrap}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-moves] *{pointer-events:none}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/keen-slider/keen-slider.es.js":
/*!****************************************************!*\
  !*** ./node_modules/keen-slider/keen-slider.es.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ y)
/* harmony export */ });
var n=function(){return n=Object.assign||function(n){for(var t,i=1,e=arguments.length;i<e;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},n.apply(this,arguments)};function t(n,t,i){if(i||2===arguments.length)for(var e,r=0,a=t.length;r<a;r++)!e&&r in t||(e||(e=Array.prototype.slice.call(t,0,r)),e[r]=t[r]);return n.concat(e||Array.prototype.slice.call(t))}function i(n){return Array.prototype.slice.call(n)}function e(){return Date.now()}function r(n,t,i){if(t="data-keen-slider-"+t,null===i)return n.removeAttribute(t);n.setAttribute(t,i||"")}function a(n,t){return t=t||document,"function"==typeof n&&(n=n(t)),Array.isArray(n)?n:"string"==typeof n?i(t.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList?i(n):[]}function o(n){n.raw&&(n=n.raw),n.cancelable&&!n.defaultPrevented&&n.preventDefault()}function u(n){n.raw&&(n=n.raw),n.stopPropagation&&n.stopPropagation()}function s(){var n=[];return{add:function(t,i,e,r){t.addListener?t.addListener(e):t.addEventListener(i,e,r),n.push([t,i,e,r])},input:function(n,t,i,e){this.add(n,t,function(n){return function(t){t.nativeEvent&&(t=t.nativeEvent);var i=t.changedTouches||[],e=t.targetTouches||[],r=t.detail&&t.detail.x?t.detail:null;return n({id:r?r.identifier?r.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",raw:t,x:r&&r.x?r.x:e[0]?e[0].screenX:r?r.x:t.pageX,y:r&&r.y?r.y:e[0]?e[0].screenY:r?r.y:t.pageY})}}(i),e)},purge:function(){n.forEach((function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3])})),n=[]}}}function c(n,t,i){return Math.min(Math.max(n,t),i)}function d(n){return(n>0?1:0)-(n<0?1:0)||+n}function l(n){return n.getBoundingClientRect()}function f(n,t,i,e){var r=n&&n[t];return null==r?i:e&&"function"==typeof r?r():r}function p(n){return Math.round(1e6*n)/1e6}function v(n){var t,i,e,r,a,o;function u(t){o||(o=t),s(!0);var a=t-o;a>e&&(a=e);var l=r[i];if(l[3]<a)return i++,u(t);var f=l[2],p=l[4],v=l[0],m=l[1]*(0,l[5])(0===p?1:(a-f)/p);if(m&&n.track.to(v+m),a<e)return d();o=null,s(!1),c(null),n.emit("animationEnded")}function s(n){t.active=n}function c(n){t.targetIdx=n}function d(){var n;n=u,a=window.requestAnimationFrame(n)}function l(){var t;t=a,window.cancelAnimationFrame(t),s(!1),c(null),o&&n.emit("animationStopped"),o=null}return t={active:!1,start:function(t){if(l(),n.track.details){var a=0,o=n.track.details.position;i=0,e=0,r=t.map((function(n){var t,i=o,r=null!==(t=n.earlyExit)&&void 0!==t?t:n.duration,u=n.easing,s=n.distance*u(r/n.duration)||0;o+=s;var c=e;return e+=r,a+=s,[i,n.distance,c,e,n.duration,u]})),c(n.track.distToIdx(a)),d(),n.emit("animationStarted")}},stop:l,targetIdx:null}}function m(n){var i,r,a,o,u,s,l,v,m,h,g,b,x,y=1/0,k=[],w=null,M=0;function T(n){_(M+n)}function C(n){var t=E(M+n).abs;return A(t)?t:null}function E(n){var i=Math.floor(Math.abs(n/r)),e=p((n%r+r)%r),a=d(n),o=l.indexOf(t([],l,!0).reduce((function(n,t){return Math.abs(t-e)<Math.abs(n-e)?t:n}))),u=o;return a<0&&0!==e&&i++,o===s&&(u=0,i+=a>0?1:-1),{abs:u+i*s*a,origin:o,rel:u}}function z(n,t,i){var e;if(t||!L())return I(n,i);if(!A(n))return null;var r=E(null!=i?i:M),a=r.abs,o=n-r.rel,u=a+o;e=I(u);var c=I(u-s*Math.sign(o));return(null!==c&&Math.abs(c)<Math.abs(e)||null===e)&&(e=c),p(e)}function I(n,t){if(null==t&&(t=p(M)),!A(n)||null===n)return null;n=Math.round(n);var i=E(t),e=i.abs,a=i.rel,o=i.origin,u=S(n),c=(t%r+r)%r,d=l[o],f=Math.floor((n-(e-a))/s)*r;return p(d-c-d+l[u]+f+(o===s?r:0))}function A(n){return D(n)===n}function D(n){return c(n,v,m)}function L(){return o.loop}function S(n){return(n%s+s)%s}function _(t){var i;i=t-M,k.push({distance:i,timestamp:e()}),k.length>6&&(k=k.slice(-6)),M=Math.round(1e6*t)/1e6;var r=O().abs;if(r!==w){var a=null!==w;w=r,a&&n.emit("slideChanged")}}function O(t){var e=t?null:function(){if(s){var n=L(),t=n?(M%r+r)%r:M,i=(n?M%r:M)-u[0][2],e=0-(i<0&&n?r-Math.abs(i):i),c=0,l=E(M),f=l.abs,p=l.rel,y=u[p][2],k=u.map((function(t,i){var a=e+c;(a<0-t[0]||a>1)&&(a+=(Math.abs(a)>r-1&&n?r:0)*d(-a));var u=i-p,l=Math.sign(u),v=u+f;n&&(-1===l&&a>y&&(v+=s),1===l&&a<y&&(v-=s),null!==h&&v<h&&(a+=r),null!==g&&v>g&&(a-=r));var m=a+t[0]+t[1],b=Math.max(a>=0&&m<=1?1:m<0||a>1?0:a<0?Math.min(1,(t[0]+a)/t[0]):(1-a)/t[0],0);return c+=t[0]+t[1],{abs:v,distance:o.rtl?-1*a+1-t[0]:a,portion:b,size:t[0]}}));return f=D(f),p=S(f),{abs:D(f),length:a,max:x,maxIdx:m,min:b,minIdx:v,position:M,progress:n?t/r:M/a,rel:p,slides:k}}}();return i.details=e,n.emit("detailsChanged"),e}return i={absToRel:S,add:T,details:null,distToIdx:C,idxToDist:z,init:function(t){if(function(){if(o=n.options,u=(o.trackConfig||[]).map((function(n){return[f(n,"size",1),f(n,"spacing",0),f(n,"origin",0)]})),s=u.length){r=p(u.reduce((function(n,t){return n+t[0]+t[1]}),0));var t=s-1;a=p(r+u[0][2]-u[t][0]-u[t][2]-u[t][1]),(l=u.reduce((function(n,t){if(!n)return[0];var i=u[n.length-1],e=n[n.length-1]+(i[0]+i[2])+i[1];return e-=t[2],n[n.length-1]>e&&(e=n[n.length-1]),n.push(p(e)),n}),null)).push(r)}}(),!s)return O(!0);var i;!function(){var t=n.options.range,i=n.options.loop;h=v=i?f(i,"min",-1/0):0,g=m=i?f(i,"max",y):u.length-1;var e=f(t,"min",null),r=f(t,"max",null);e&&(v=e),r&&(m=r),b=v===-1/0?v:n.track.idxToDist(v||0,!0,0),x=m===y?m:z(m,!0,0),null===r&&(g=m),f(t,"align",!1)&&m!==y&&0===u[S(m)][2]&&(x-=1-u[S(m)][0],m=C(x)),b=p(b),x=p(x)}(),i=t,Number(i)===i?T(I(D(t))):O()},to:_,velocity:function(){var n=e(),t=k.reduce((function(t,i){var e=i.distance,r=i.timestamp;return n-r>200||(d(e)!==d(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=e),t.lastTimestamp&&(t.time+=r-t.lastTimestamp),t.lastTimestamp=r),t}),{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}function h(n){var t,i,e,r,a,o,u;function s(n){return 2*n}function l(n){return c(n,o,u)}function f(n){return 1-Math.pow(1-n,3)}function p(){h();var t="free-snap"===n.options.mode,i=n.track,o=i.velocity();e=d(o);var u=n.track.details,c=[];if(o||!t){var p=v(o),m=p.dist,g=p.dur;if(g=s(g),m*=e,t){var b=i.idxToDist(i.distToIdx(m),!0);b&&(m=b)}c.push({distance:m,duration:g,easing:f});var x=u.position,y=x+m;if(y<r||y>a){var k=y<r?r-x:a-x,w=0,M=o;if(d(k)===e){var T=Math.min(Math.abs(k)/Math.abs(m),1),C=function(n){return 1-Math.pow(1-n,1/3)}(T)*g;c[0].earlyExit=C,M=o*(1-T)}else c[0].earlyExit=0,w+=k;var E=v(M,100),z=E.dist*e;n.options.rubberband&&(c.push({distance:z,duration:s(E.dur),easing:f}),c.push({distance:-z+w,duration:500,easing:f}))}n.animator.start(c)}else n.moveToIdx(l(u.abs),!0,{duration:500,easing:function(n){return 1+--n*n*n*n*n}})}function v(n,t){void 0===t&&(t=1e3);var i=147e-9+(n=Math.abs(n))/t;return{dist:Math.pow(n,2)/i,dur:n/i}}function m(){var t=n.track.details;t&&(r=t.min,a=t.max,o=t.minIdx,u=t.maxIdx)}function h(){n.animator.stop()}n.on("updated",m),n.on("optionsChanged",m),n.on("created",m),n.on("dragStarted",(function(){h(),t=i=n.track.details.abs})),n.on("dragEnded",(function(){var e=n.options.mode;"snap"===e&&function(){var e=n.track,o=n.track.details,u=o.position,s=d(e.velocity());(u>a||u<r)&&(s=0);var c=t+s;0===o.slides[e.absToRel(c)].portion&&(c-=s),t!==i&&(c=i),d(e.idxToDist(c,!0))!==s&&(c+=s),c=l(c);var f=e.idxToDist(c,!0);n.animator.start([{distance:f,duration:500,easing:function(n){return 1+--n*n*n*n*n}}])}(),"free"!==e&&"free-snap"!==e||p()})),n.on("dragged",(function(){i=n.track.details.abs}))}function g(n){var t,i,e,l,f,p,v,m,h,g,b,x,y,k,w,M,T,C,E=s();function z(a){if(p&&m===a.id){var s=L(a);if(h){if(!D(a))return A(a);g=s,h=!1,n.emit("dragChecked")}if(M)return g=s;o(a);var y=function(t){if(T===-1/0&&C===1/0)return t;var e=n.track.details,r=e.length,a=e.position,o=c(t,T-a,C-a);if(0===r)return 0;if(!n.options.rubberband)return o;if(a<=C&&a>=T)return t;if(a<T&&i>0||a>C&&i<0)return t;var u=(a<T?a-T:a-C)/r,s=l*r,d=Math.abs(u*s),p=Math.max(0,1-d/f*2);return p*p*t}(v(g-s)/l*e);i=d(y);var k=n.track.details.position;(k>T&&k<C||k===T&&i>0||k===C&&i<0)&&u(a),b+=y,!x&&Math.abs(b*l)>5&&(x=!0,r(t,"moves","")),n.track.add(y),g=s,n.emit("dragged")}}function I(t){!p&&n.track.details&&n.track.details.length&&(x=!1,b=0,p=!0,h=!0,m=t.id,D(t),g=L(t),n.emit("dragStarted"))}function A(i){p&&m===i.idChanged&&(r(t,"moves",null),p=!1,n.emit("dragEnded"))}function D(n){var t=S(),i=t?n.y:n.x,e=t?n.x:n.y,r=void 0!==y&&void 0!==k&&Math.abs(k-e)<=Math.abs(y-i);return y=i,k=e,r}function L(n){return S()?n.y:n.x}function S(){return n.options.vertical}function _(){l=n.size,f=S()?window.innerHeight:window.innerWidth;var t=n.track.details;t&&(T=t.min,C=t.max)}function O(){if(E.purge(),n.options.drag&&!n.options.disabled){var i;i=n.options.dragSpeed||1,v="function"==typeof i?i:function(n){return n*i},e=n.options.rtl?-1:1,_(),t=n.container,function(){var n="data-keen-slider-clickable";a("[".concat(n,"]:not([").concat(n,"=false])"),t).map((function(n){E.add(n,"mousedown",u),E.add(n,"touchstart",u)}))}(),E.add(t,"dragstart",(function(n){o(n)})),E.input(t,"ksDragStart",I),E.input(t,"ksDrag",z),E.input(t,"ksDragEnd",A),E.input(t,"mousedown",I),E.input(t,"mousemove",z),E.input(t,"mouseleave",A),E.input(t,"mouseup",A),E.input(t,"touchstart",I,{passive:!0}),E.input(t,"touchmove",z,{passive:!1}),E.input(t,"touchend",A),E.input(t,"touchcancel",A),E.add(window,"wheel",(function(n){p&&o(n)}));var r="data-keen-slider-scrollable";a("[".concat(r,"]:not([").concat(r,"=false])"),n.container).map((function(n){return function(n){var t;E.input(n,"touchstart",(function(n){t=L(n),M=!0,w=!0}),{passive:!0}),E.input(n,"touchmove",(function(i){var e=S(),r=e?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,a=t-L(i),u=e?n.scrollTop:n.scrollLeft,s=e&&"scroll"===n.style.overflowY||!e&&"scroll"===n.style.overflowX;if(t=L(i),(a<0&&u>0||a>0&&u<r)&&w&&s)return M=!0;w=!1,o(i),M=!1})),E.input(n,"touchend",(function(){M=!1}))}(n)}))}}n.on("updated",_),n.on("optionsChanged",O),n.on("created",O),n.on("destroyed",E.purge)}function b(n){var t,i,e=null;function r(t,i,e){n.animator.active?o(t,i,e):requestAnimationFrame((function(){return o(t,i,e)}))}function a(){r(!1,!1,i)}function o(i,r,a){var o=0,u=n.size,d=n.track.details;if(d&&t){var l=d.slides;t.forEach((function(n,t){if(i)!e&&r&&s(n,null,a),c(n,null,a);else{if(!l[t])return;var d=l[t].size*u;!e&&r&&s(n,d,a),c(n,l[t].distance*u-o,a),o+=d}}))}}function u(t){return"performance"===n.options.renderMode?Math.round(t):t}function s(n,t,i){var e=i?"height":"width";null!==t&&(t=u(t)+"px"),n.style["min-"+e]=t,n.style["max-"+e]=t}function c(n,t,i){if(null!==t){t=u(t);var e=i?t:0;t="translate3d(".concat(i?0:t,"px, ").concat(e,"px, 0)")}n.style.transform=t,n.style["-webkit-transform"]=t}function d(){t&&r(!0,!0,i),n.on("detailsChanged",a,!0)}function l(){r(!1,!0,i)}function p(){d(),i=n.options.vertical,n.options.disabled||"custom"===n.options.renderMode||(e="auto"===f(n.options.slides,"perView",null),n.on("detailsChanged",a),(t=n.slides).length&&l())}n.on("created",p),n.on("optionsChanged",p),n.on("updated",l),n.on("destroyed",d)}function x(t,i){return function(e){var o,u,c,d,p,v,m=s();function h(n){var t;r(e.container,"reverse","rtl"!==(t=e.container,window.getComputedStyle(t,null).getPropertyValue("direction"))||n?null:""),r(e.container,"v",e.options.vertical&&!n?"":null),r(e.container,"disabled",e.options.disabled&&!n?"":null)}function g(){b()&&M()}function b(){var t=null;if(d.forEach((function(n){n.matches&&(t=n.__media)})),t===o)return!1;o=t;var i=t?c.breakpoints[t]:c;return e.options=n(n({},c),i),h(),I(),A(),C(),!0}function x(n){var t=l(n);return(e.options.vertical?t.height:t.width)/e.size||1}function y(){return e.options.trackConfig.length}function k(t){for(var r in o=!1,c=n(n({},i),t),m.purge(),u=e.size,d=[],c.breakpoints||[]){var a=window.matchMedia(r);a.__media=r,d.push(a),m.add(a,"change",g)}m.add(window,"orientationchange",z),m.add(window,"resize",E),b()}function w(n){e.animator.stop();var t=e.track.details;e.track.init(null!=n?n:t?t.abs:0)}function M(n){w(n),e.emit("optionsChanged")}function T(n,t){if(n)return k(n),void M(t);I(),A();var i=y();C(),y()!==i?M(t):w(t),e.emit("updated")}function C(){var n=e.options.slides;if("function"==typeof n)return e.options.trackConfig=n(e.size,e.slides);for(var t=e.slides,i=t.length,r="number"==typeof n?n:f(n,"number",i,!0),a=[],o=f(n,"perView",1,!0),u=f(n,"spacing",0,!0)/e.size||0,s="auto"===o?u:u/o,c=f(n,"origin","auto"),d=0,l=0;l<r;l++){var p="auto"===o?x(t[l]):1/o-u+s,v="center"===c?.5-p/2:"auto"===c?0:c;a.push({origin:v,size:p,spacing:u}),d+=p}if(d+=u*(r-1),"auto"===c&&!e.options.loop&&1!==o){var m=0;a.map((function(n){var t=d-m;return m+=n.size+u,t>=1||(n.origin=1-t-(d>1?0:1-d)),n}))}e.options.trackConfig=a}function E(){I();var n=e.size;e.options.disabled||n===u||(u=n,T())}function z(){E(),setTimeout(E,500),setTimeout(E,2e3)}function I(){var n=l(e.container);e.size=(e.options.vertical?n.height:n.width)||1}function A(){e.slides=a(e.options.selector,e.container)}e.container=(v=a(t,p||document)).length?v[0]:null,e.destroy=function(){m.purge(),e.emit("destroyed"),h(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=T,k(e.options)}}var y=function(n,i,e){try{return function(n,t){var i,e={};return i={emit:function(n){e[n]&&e[n].forEach((function(n){n(i)}));var t=i.options[n];t&&t(i)},moveToIdx:function(n,t,e){var r=i.track.idxToDist(n,t);if(r){var a=i.options.defaultAnimation;i.animator.start([{distance:r,duration:f(e||a,"duration",500),easing:f(e||a,"easing",(function(n){return 1+--n*n*n*n*n}))}])}},on:function(n,t,i){void 0===i&&(i=!1),e[n]||(e[n]=[]);var r=e[n].indexOf(t);r>-1?i&&delete e[n][r]:i||e[n].push(t)},options:n},function(){if(i.track=m(i),i.animator=v(i),t)for(var n in t){var e=t[n];e&&e(i)}i.track.init(i.options.initial||0),i.emit("created")}(),i}(i,t([x(n,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),b,g,h],e||[],!0))}catch(n){console.error(n)}};


/***/ }),

/***/ "./node_modules/keen-slider/keen-slider.min.css":
/*!******************************************************!*\
  !*** ./node_modules/keen-slider/keen-slider.min.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_2_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!../postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./keen-slider.min.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./node_modules/keen-slider/keen-slider.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_2_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_2_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ "./node_modules/keen-slider/keen-slider.min.css");
/* harmony import */ var keen_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! keen-slider */ "./node_modules/keen-slider/keen-slider.es.js");



function navigation(slider) {
  var wrapper, dots, arrowLeft, arrowRight;

  function markup(remove) {
    wrapperMarkup(remove);
    dotMarkup(remove);
    arrowMarkup(remove);
  }

  function removeElement(elment) {
    elment.parentNode.removeChild(elment);
  }

  function createDiv(className) {
    var div = document.createElement("div");
    var classNames = className.split(" ");
    classNames.forEach(function (name) {
      return div.classList.add(name);
    });
    return div;
  }

  function arrowMarkup(remove) {
    if (remove) {
      removeElement(arrowLeft);
      removeElement(arrowRight);
      return;
    }

    arrowLeft = createDiv("arrow arrow--left");
    arrowLeft.addEventListener("click", function () {
      return slider.prev();
    });
    arrowRight = createDiv("arrow arrow--right");
    arrowRight.addEventListener("click", function () {
      return slider.next();
    });
    wrapper.appendChild(arrowLeft);
    wrapper.appendChild(arrowRight);
  }

  function wrapperMarkup(remove) {
    if (remove) {
      var parent = wrapper.parentNode;

      while (wrapper.firstChild) {
        parent.insertBefore(wrapper.firstChild, wrapper);
      }

      removeElement(wrapper);
      return;
    }

    wrapper = createDiv("navigation-wrapper");
    slider.container.parentNode.appendChild(wrapper);
    wrapper.appendChild(slider.container);
  }

  function dotMarkup(remove) {
    if (remove) {
      removeElement(dots);
      return;
    }

    dots = createDiv("dots");
    slider.track.details.slides.forEach(function (_e, idx) {
      var dot = createDiv("dot");
      dot.addEventListener("click", function () {
        return slider.moveToIdx(idx);
      });
      dots.appendChild(dot);
    });
    wrapper.appendChild(dots);
  }

  function updateClasses() {
    var slide = slider.track.details.rel;
    slide === 0 ? arrowLeft.classList.add("arrow--disabled") : arrowLeft.classList.remove("arrow--disabled");
    slide === slider.track.details.slides.length - 1 ? arrowRight.classList.add("arrow--disabled") : arrowRight.classList.remove("arrow--disabled");
    Array.from(dots.children).forEach(function (dot, idx) {
      idx === slide ? dot.classList.add("dot--active") : dot.classList.remove("dot--active");
    });
  }

  slider.on("created", function () {
    markup();
    updateClasses();
  });
  slider.on("optionsChanged", function () {
    console.log(2);
    markup(true);
    markup();
    updateClasses();
  });
  slider.on("slideChanged", function () {
    updateClasses();
  });
  slider.on("destroyed", function () {
    markup(true);
  });
}

var slider = new keen_slider__WEBPACK_IMPORTED_MODULE_1__["default"]("#my-keen-slider", {
  loop: true
}, [navigation]);
})();

/******/ })()
;