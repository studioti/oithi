(()=>{var e={};e.id=731,e.ids=[220,636,731],e.modules={671:(e,t)=>{"use strict";Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4477:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>f,default:()=>u,getServerSideProps:()=>p,getStaticPaths:()=>c,getStaticProps:()=>d,reportWebVitals:()=>h,routeModule:()=>P,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>_,unstable_getStaticParams:()=>m,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>g});var n=r(3865),o=r(9455),i=r(671),a=r(5583),s=r(1287),l=r(3532);let u=(0,i.M)(l,"default"),d=(0,i.M)(l,"getStaticProps"),c=(0,i.M)(l,"getStaticPaths"),p=(0,i.M)(l,"getServerSideProps"),f=(0,i.M)(l,"config"),h=(0,i.M)(l,"reportWebVitals"),g=(0,i.M)(l,"unstable_getStaticProps"),y=(0,i.M)(l,"unstable_getStaticPaths"),m=(0,i.M)(l,"unstable_getStaticParams"),b=(0,i.M)(l,"unstable_getServerProps"),_=(0,i.M)(l,"unstable_getServerSideProps"),P=new n.PagesRouteModule({definition:{kind:o.A.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:s.default,Document:a.default},userland:l})},3532:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let n=r(9929),o=r(8732),i=n._(r(2015)),a=n._(r(4426)),s={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function l(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let u={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class d extends i.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||s[e]||"An unexpected error has occurred";return(0,o.jsxs)("div",{style:u.error,children:[(0,o.jsx)(a.default,{children:(0,o.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,o.jsxs)("div",{style:u.desc,children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,o.jsx)("h1",{className:"next-error-h1",style:u.h1,children:e}):null,(0,o.jsx)("div",{style:u.wrap,children:(0,o.jsxs)("h2",{style:u.h2,children:[this.props.title||e?r:(0,o.jsx)(o.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}d.displayName="ErrorPage",d.getInitialProps=l,d.origGetInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8498:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},4426:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let n=r(9929),o=r(4588),i=r(8732),a=o._(r(2015)),s=n._(r(3309)),l=r(9811),u=r(9241),d=r(8498);function c(e){void 0===e&&(e=!1);let t=[(0,i.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(9794);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let i=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?i=!1:(r.add(e),n[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let n=e.key||t;if(process.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,a.useContext)(l.AmpStateContext),n=(0,a.useContext)(u.HeadManagerContext);return(0,i.jsx)(s.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3309:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(2015),o=()=>{},i=()=>{};function a(e){var t;let{headManager:r,reduceComponentsToState:a}=e;function s(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(a(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),s(),o(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),o(()=>(r&&(r._pendingUpdate=s),()=>{r&&(r._pendingUpdate=s)})),i(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},9794:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},1287:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(8732);function o({Component:e,pageProps:t}){return(0,n.jsx)(e,{...t})}r(5578)},5583:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(8732),o=r(883);function i(){return(0,n.jsxs)(o.Html,{lang:"pt-br",children:[(0,n.jsx)(o.Head,{}),(0,n.jsxs)("body",{children:[(0,n.jsx)(o.Main,{}),(0,n.jsx)(o.NextScript,{})]})]})}},5578:()=>{},9455:(e,t)=>{"use strict";Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}});var r=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})},9811:(e,t,r)=>{"use strict";e.exports=r(3865).vendored.contexts.AmpContext},9241:(e,t,r)=>{"use strict";e.exports=r(3865).vendored.contexts.HeadManagerContext},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},2015:e=>{"use strict";e.exports=require("react")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},3873:e=>{"use strict";e.exports=require("path")},4588:(e,t)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(o,a,s):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[883],()=>r(4477));module.exports=n})();