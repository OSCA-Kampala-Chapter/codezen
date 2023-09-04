(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{1395:function(e,r){"use strict";var t,o;Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{PrefetchKind:function(){return t},ACTION_REFRESH:function(){return n},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u}});let n="refresh",l="navigate",i="restore",a="server-patch",s="prefetch",c="fast-refresh",u="server-action";(o=t||(t={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},4244:function(e,r,t){"use strict";function o(e,r,t,o){return!1}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getDomainLocale",{enumerable:!0,get:function(){return o}}),t(1645),("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},5567:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return x}});let o=t(8266),n=o._(t(959)),l=t(9438),i=t(3663),a=t(5587),s=t(6067),c=t(5823),u=t(1874),d=t(8855),f=t(4584),p=t(4244),b=t(7365),m=t(1395),g=new Set;function v(e,r,t,o,n,l){if(!l&&!(0,i.isLocalURL)(r))return;if(!o.bypassPrefetchedCheck){let n=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=r+"%"+t+"%"+n;if(g.has(l))return;g.add(l)}let a=l?e.prefetch(r,n):e.prefetch(r,t,o);Promise.resolve(a).catch(e=>{})}function h(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let y=n.default.forwardRef(function(e,r){let t,o;let{href:a,as:g,children:y,prefetch:x=null,passHref:w,replace:k,shallow:C,scroll:j,locale:O,onClick:E,onMouseEnter:P,onTouchStart:_,legacyBehavior:z=!1,...M}=e;t=y,z&&("string"==typeof t||"number"==typeof t)&&(t=n.default.createElement("a",null,t));let N=n.default.useContext(u.RouterContext),I=n.default.useContext(d.AppRouterContext),R=null!=N?N:I,S=!N,T=!1!==x,A=null===x?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:G,as:L}=n.default.useMemo(()=>{if(!N){let e=h(a);return{href:e,as:g?h(g):e}}let[e,r]=(0,l.resolveHref)(N,a,!0);return{href:e,as:g?(0,l.resolveHref)(N,g):r||e}},[N,a,g]),F=n.default.useRef(G),U=n.default.useRef(L);z&&(o=n.default.Children.only(t));let V=z?o&&"object"==typeof o&&o.ref:r,[W,K,H]=(0,f.useIntersection)({rootMargin:"200px"}),$=n.default.useCallback(e=>{(U.current!==L||F.current!==G)&&(H(),U.current=L,F.current=G),W(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[L,V,G,H,W]);n.default.useEffect(()=>{R&&K&&T&&v(R,G,L,{locale:O},{kind:A},S)},[L,G,K,O,T,null==N?void 0:N.locale,R,S,A]);let Z={ref:$,onClick(e){z||"function"!=typeof E||E(e),z&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),R&&!e.defaultPrevented&&function(e,r,t,o,l,a,s,c,u,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let r=e.currentTarget,t=r.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,i.isLocalURL)(t)))return;e.preventDefault();let b=()=>{let e=null==s||s;"beforePopState"in r?r[l?"replace":"push"](t,o,{shallow:a,locale:c,scroll:e}):r[l?"replace":"push"](o||t,{forceOptimisticNavigation:!d,scroll:e})};u?n.default.startTransition(b):b()}(e,R,G,L,k,C,j,O,S,T)},onMouseEnter(e){z||"function"!=typeof P||P(e),z&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),R&&(T||!S)&&v(R,G,L,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:A},S)},onTouchStart(e){z||"function"!=typeof _||_(e),z&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),R&&(T||!S)&&v(R,G,L,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:A},S)}};if((0,s.isAbsoluteUrl)(L))Z.href=L;else if(!z||w||"a"===o.type&&!("href"in o.props)){let e=void 0!==O?O:null==N?void 0:N.locale,r=(null==N?void 0:N.isLocaleDomain)&&(0,p.getDomainLocale)(L,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);Z.href=r||(0,b.addBasePath)((0,c.addLocale)(L,e,null==N?void 0:N.defaultLocale))}return z?n.default.cloneElement(o,Z):n.default.createElement("a",{...M,...Z},t)}),x=y;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},4584:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useIntersection",{enumerable:!0,get:function(){return s}});let o=t(959),n=t(6755),l="function"==typeof IntersectionObserver,i=new Map,a=[];function s(e){let{rootRef:r,rootMargin:t,disabled:s}=e,c=s||!l,[u,d]=(0,o.useState)(!1),f=(0,o.useRef)(null),p=(0,o.useCallback)(e=>{f.current=e},[]);(0,o.useEffect)(()=>{if(l){if(c||u)return;let e=f.current;if(e&&e.tagName){let o=function(e,r,t){let{id:o,observer:n,elements:l}=function(e){let r;let t={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===t.root&&e.margin===t.margin);if(o&&(r=i.get(o)))return r;let n=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)})},e);return r={id:t,observer:l,elements:n},a.push(t),i.set(t,r),r}(t);return l.set(e,r),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),i.delete(o);let e=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&d(e),{root:null==r?void 0:r.current,rootMargin:t});return o}}else if(!u){let e=(0,n.requestIdleCallback)(()=>d(!0));return()=>(0,n.cancelIdleCallback)(e)}},[c,t,r,u,f.current]);let b=(0,o.useCallback)(()=>{d(!1)},[]);return[p,u,b]}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},5712:function(e,r,t){e.exports=t(5567)},8185:function(e,r,t){"use strict";t.d(r,{w_:function(){return s}});var o=t(959),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=o.createContext&&o.createContext(n),i=function(){return(i=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},a=function(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>r.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(t[o[n]]=e[o[n]]);return t};function s(e){return function(r){return o.createElement(c,i({attr:i({},e.attr)},r),function e(r){return r&&r.map(function(r,t){return o.createElement(r.tag,i({key:t},r.attr),e(r.child))})}(e.child))}}function c(e){var r=function(r){var t,n=e.attr,l=e.size,s=e.title,c=a(e,["attr","size","title"]),u=l||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),o.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,c,{className:t,style:i(i({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&o.createElement("title",null,s),e.children)};return void 0!==l?o.createElement(l.Consumer,null,function(e){return r(e)}):r(n)}},7366:function(e,r,t){"use strict";function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}t.d(r,{Z:function(){return o}})},5625:function(e,r,t){"use strict";t.d(r,{F:function(){return n},e:function(){return l}});var o=t(959);function n(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function l(...e){return(0,o.useCallback)(n(...e),e)}},4875:function(e,r,t){"use strict";t.d(r,{WV:function(){return i}});var o=t(7366),n=t(959);t(422);var l=t(599);let i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=(0,n.forwardRef)((e,t)=>{let{asChild:i,...a}=e,s=i?l.g7:r;return(0,n.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,n.createElement)(s,(0,o.Z)({},a,{ref:t}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{})},599:function(e,r,t){"use strict";t.d(r,{g7:function(){return i}});var o=t(7366),n=t(959),l=t(5625);let i=(0,n.forwardRef)((e,r)=>{let{children:t,...l}=e,i=n.Children.toArray(t),s=i.find(c);if(s){let e=s.props.children,t=i.map(r=>r!==s?r:n.Children.count(e)>1?n.Children.only(null):(0,n.isValidElement)(e)?e.props.children:null);return(0,n.createElement)(a,(0,o.Z)({},l,{ref:r}),(0,n.isValidElement)(e)?(0,n.cloneElement)(e,void 0,t):null)}return(0,n.createElement)(a,(0,o.Z)({},l,{ref:r}),t)});i.displayName="Slot";let a=(0,n.forwardRef)((e,r)=>{let{children:t,...o}=e;return(0,n.isValidElement)(t)?(0,n.cloneElement)(t,{...function(e,r){let t={...r};for(let o in r){let n=e[o],l=r[o],i=/^on[A-Z]/.test(o);i?n&&l?t[o]=(...e)=>{l(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...l}:"className"===o&&(t[o]=[n,l].filter(Boolean).join(" "))}return{...e,...t}}(o,t.props),ref:r?(0,l.F)(r,t.ref):t.ref}):n.Children.count(t)>1?n.Children.only(null):null});a.displayName="SlotClone";let s=({children:e})=>(0,n.createElement)(n.Fragment,null,e);function c(e){return(0,n.isValidElement)(e)&&e.type===s}},3270:function(e,r,t){"use strict";t.d(r,{j:function(){return i}});var o=t(5341);let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,l=o.W,i=(e,r)=>t=>{var o;if((null==r?void 0:r.variants)==null)return l(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:i,defaultVariants:a}=r,s=Object.keys(i).map(e=>{let r=null==t?void 0:t[e],o=null==a?void 0:a[e];if(null===r)return null;let l=n(r)||n(o);return i[e][l]}),c=t&&Object.entries(t).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{}),u=null==r?void 0:null===(o=r.compoundVariants)||void 0===o?void 0:o.reduce((e,r)=>{let{class:t,className:o,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...a,...c}[r]):({...a,...c})[r]===t})?[...e,t,o]:e},[]);return l(e,s,u,null==t?void 0:t.class,null==t?void 0:t.className)}},5341:function(e,r,t){"use strict";function o(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o);else for(t in r)r[t]&&(n&&(n+=" "),n+=t)}return n}(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{W:function(){return o}})},7899:function(e,r,t){"use strict";t.d(r,{m:function(){return R}});var o=/^\[(.+)\]$/;function n(e,r){var t=e;return r.split("-").forEach(function(e){t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t}var l=/\s+/;function i(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){if("string"==typeof r)return r;for(var t,o="",n=0;n<r.length;n++)r[n]&&(t=e(r[n]))&&(o&&(o+=" "),o+=t);return o}(e))&&(o&&(o+=" "),o+=r);return o}function a(e){var r=function(r){return r[e]||[]};return r.isThemeGetter=!0,r}var s=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),d=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,p=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function b(e){return x(e)||u.has(e)||c.test(e)||m(e)}function m(e){return P(e,"length",_)}function g(e){return P(e,"size",z)}function v(e){return P(e,"position",z)}function h(e){return P(e,"url",M)}function y(e){return P(e,"number",x)}function x(e){return!Number.isNaN(Number(e))}function w(e){return e.endsWith("%")&&x(e.slice(0,-1))}function k(e){return N(e)||P(e,"number",N)}function C(e){return s.test(e)}function j(){return!0}function O(e){return d.test(e)}function E(e){return P(e,"",I)}function P(e,r,t){var o=s.exec(e);return!!o&&(o[1]?o[1]===r:t(o[2]))}function _(e){return f.test(e)}function z(){return!1}function M(e){return e.startsWith("url(")}function N(e){return Number.isInteger(Number(e))}function I(e){return p.test(e)}var R=function(){for(var e,r,t,a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];var u=function(l){var i=s[0];return r=(e=function(e){var r,t,l,i,a,s,c,u,d,f,p;return{cache:function(e){if(e<1)return{get:function(){},set:function(){}};var r=0,t=new Map,o=new Map;function n(n,l){t.set(n,l),++r>e&&(r=0,o=t,t=new Map)}return{get:function(e){var r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set:function(e,r){t.has(e)?t.set(e,r):n(e,r)}}}(e.cacheSize),splitModifiers:(t=1===(r=e.separator||":").length,l=r[0],i=r.length,function(e){for(var o,n=[],a=0,s=0,c=0;c<e.length;c++){var u=e[c];if(0===a){if(u===l&&(t||e.slice(c,c+i)===r)){n.push(e.slice(s,c)),s=c+i;continue}if("/"===u){o=c;continue}}"["===u?a++:"]"===u&&a--}var d=0===n.length?e:e.substring(s),f=d.startsWith("!"),p=f?d.substring(1):d;return{modifiers:n,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:o&&o>s?o-s:void 0}}),...(u=e.theme,d=e.prefix,f={nextPart:new Map,validators:[]},(p=Object.entries(e.classGroups),d?p.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?d+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[d+e[0],e[1]]})):e})]}):p).forEach(function(e){var r=e[0];(function e(r,t,o,l){r.forEach(function(r){if("string"==typeof r){(""===r?t:n(t,r)).classGroupId=o;return}if("function"==typeof r){if(r.isThemeGetter){e(r(l),t,o,l);return}t.validators.push({validator:r,classGroupId:o});return}Object.entries(r).forEach(function(r){var i=r[0];e(r[1],n(t,i),o,l)})})})(e[1],f,r,u)}),a=e.conflictingClassGroups,c=void 0===(s=e.conflictingClassGroupModifiers)?{}:s,{getClassGroupId:function(e){var r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(r,t){if(0===r.length)return t.classGroupId;var o=r[0],n=t.nextPart.get(o),l=n?e(r.slice(1),n):void 0;if(l)return l;if(0!==t.validators.length){var i=r.join("-");return t.validators.find(function(e){return(0,e.validator)(i)})?.classGroupId}}(r,f)||function(e){if(o.test(e)){var r=o.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}(e)},getConflictingClassGroupIds:function(e,r){var t=a[e]||[];return r&&c[e]?[].concat(t,c[e]):t}})}}(s.slice(1).reduce(function(e,r){return r(e)},i()))).cache.get,t=e.cache.set,u=d,d(l)};function d(o){var n,i,a,s,c,u=r(o);if(u)return u;var d=(i=(n=e).splitModifiers,a=n.getClassGroupId,s=n.getConflictingClassGroupIds,c=new Set,o.trim().split(l).map(function(e){var r=i(e),t=r.modifiers,o=r.hasImportantModifier,n=r.baseClassName,l=r.maybePostfixModifierPosition,s=a(l?n.substring(0,l):n),c=!!l;if(!s){if(!l||!(s=a(n)))return{isTailwindClass:!1,originalClassName:e};c=!1}var u=(function(e){if(e.length<=1)return e;var r=[],t=[];return e.forEach(function(e){"["===e[0]?(r.push.apply(r,t.sort().concat([e])),t=[]):t.push(e)}),r.push.apply(r,t.sort()),r})(t).join(":");return{isTailwindClass:!0,modifierId:o?u+"!":u,classGroupId:s,originalClassName:e,hasPostfixModifier:c}}).reverse().filter(function(e){if(!e.isTailwindClass)return!0;var r=e.modifierId,t=e.classGroupId,o=e.hasPostfixModifier,n=r+t;return!c.has(n)&&(c.add(n),s(t,o).forEach(function(e){return c.add(r+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return t(o,d),d}return function(){return u(i.apply(null,arguments))}}(function(){var e=a("colors"),r=a("spacing"),t=a("blur"),o=a("brightness"),n=a("borderColor"),l=a("borderRadius"),i=a("borderSpacing"),s=a("borderWidth"),c=a("contrast"),u=a("grayscale"),d=a("hueRotate"),f=a("invert"),p=a("gap"),P=a("gradientColorStops"),_=a("gradientColorStopPositions"),z=a("inset"),M=a("margin"),N=a("opacity"),I=a("padding"),R=a("saturate"),S=a("scale"),T=a("sepia"),A=a("skew"),G=a("space"),L=a("translate"),F=function(){return["auto","contain","none"]},U=function(){return["auto","hidden","clip","visible","scroll"]},V=function(){return["auto",C,r]},W=function(){return[C,r]},K=function(){return["",b]},H=function(){return["auto",x,C]},$=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},Z=function(){return["solid","dashed","dotted","double","none"]},D=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},q=function(){return["start","end","center","between","around","evenly","stretch"]},B=function(){return["","0",C]},Y=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},J=function(){return[x,y]},Q=function(){return[x,C]};return{cacheSize:500,theme:{colors:[j],spacing:[b],blur:["none","",O,C],brightness:J(),borderColor:[e],borderRadius:["none","","full",O,C],borderSpacing:W(),borderWidth:K(),contrast:J(),grayscale:B(),hueRotate:Q(),invert:B(),gap:W(),gradientColorStops:[e],gradientColorStopPositions:[w,m],inset:V(),margin:V(),opacity:J(),padding:W(),saturate:J(),scale:J(),sepia:B(),skew:Q(),space:W(),translate:W()},classGroups:{aspect:[{aspect:["auto","square","video",C]}],container:["container"],columns:[{columns:[O]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat($(),[C])}],overflow:[{overflow:U()}],"overflow-x":[{"overflow-x":U()}],"overflow-y":[{"overflow-y":U()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[z]}],"inset-x":[{"inset-x":[z]}],"inset-y":[{"inset-y":[z]}],start:[{start:[z]}],end:[{end:[z]}],top:[{top:[z]}],right:[{right:[z]}],bottom:[{bottom:[z]}],left:[{left:[z]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",k]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",C]}],grow:[{grow:B()}],shrink:[{shrink:B()}],order:[{order:["first","last","none",k]}],"grid-cols":[{"grid-cols":[j]}],"col-start-end":[{col:["auto",{span:["full",k]},C]}],"col-start":[{"col-start":H()}],"col-end":[{"col-end":H()}],"grid-rows":[{"grid-rows":[j]}],"row-start-end":[{row:["auto",{span:[k]},C]}],"row-start":[{"row-start":H()}],"row-end":[{"row-end":H()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",C]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",C]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal"].concat(q())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(q(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(q(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[I]}],px:[{px:[I]}],py:[{py:[I]}],ps:[{ps:[I]}],pe:[{pe:[I]}],pt:[{pt:[I]}],pr:[{pr:[I]}],pb:[{pb:[I]}],pl:[{pl:[I]}],m:[{m:[M]}],mx:[{mx:[M]}],my:[{my:[M]}],ms:[{ms:[M]}],me:[{me:[M]}],mt:[{mt:[M]}],mr:[{mr:[M]}],mb:[{mb:[M]}],ml:[{ml:[M]}],"space-x":[{"space-x":[G]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[G]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",C,r]}],"min-w":[{"min-w":["min","max","fit",C,b]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[O]},O,C]}],h:[{h:[C,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",C,b]}],"max-h":[{"max-h":[C,r,"min","max","fit"]}],"font-size":[{text:["base",O,m]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[j]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",C]}],"line-clamp":[{"line-clamp":["none",x,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",C,b]}],"list-image":[{"list-image":["none",C]}],"list-style-type":[{list:["none","disc","decimal",C]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[N]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[N]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(Z(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",b]}],"underline-offset":[{"underline-offset":["auto",C,b]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:W()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",C]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",C]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[N]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat($(),[v])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",g]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},h]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[P]}],"gradient-via":[{via:[P]}],"gradient-to":[{to:[P]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[N]}],"border-style":[{border:[].concat(Z(),["hidden"])}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[N]}],"divide-style":[{divide:Z()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(Z())}],"outline-offset":[{"outline-offset":[C,b]}],"outline-w":[{outline:[b]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:K()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[N]}],"ring-offset-w":[{"ring-offset":[b]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",O,E]}],"shadow-color":[{shadow:[j]}],opacity:[{opacity:[N]}],"mix-blend":[{"mix-blend":D()}],"bg-blend":[{"bg-blend":D()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",O,C]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[R]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[N]}],"backdrop-saturate":[{"backdrop-saturate":[R]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",C]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",C]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",C]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[k,C]}],"translate-x":[{"translate-x":[L]}],"translate-y":[{"translate-y":[L]}],"skew-x":[{"skew-x":[A]}],"skew-y":[{"skew-y":[A]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",C]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",C]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":W()}],"scroll-mx":[{"scroll-mx":W()}],"scroll-my":[{"scroll-my":W()}],"scroll-ms":[{"scroll-ms":W()}],"scroll-me":[{"scroll-me":W()}],"scroll-mt":[{"scroll-mt":W()}],"scroll-mr":[{"scroll-mr":W()}],"scroll-mb":[{"scroll-mb":W()}],"scroll-ml":[{"scroll-ml":W()}],"scroll-p":[{"scroll-p":W()}],"scroll-px":[{"scroll-px":W()}],"scroll-py":[{"scroll-py":W()}],"scroll-ps":[{"scroll-ps":W()}],"scroll-pe":[{"scroll-pe":W()}],"scroll-pt":[{"scroll-pt":W()}],"scroll-pr":[{"scroll-pr":W()}],"scroll-pb":[{"scroll-pb":W()}],"scroll-pl":[{"scroll-pl":W()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",C]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[b,y]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);