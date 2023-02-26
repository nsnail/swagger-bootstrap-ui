"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7899],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>s});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),c=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=c(r),s=a,f=u["".concat(i,".").concat(s)]||u[s]||d[s]||o;return r?n.createElement(f,l(l({ref:e},m),{},{components:r})):n.createElement(f,l({ref:e},m))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},58796:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],p={},i="OpenAPI3\u6ce8\u89e3",c={unversionedId:"oas/openapi3-annotation",id:"oas/openapi3-annotation",title:"OpenAPI3\u6ce8\u89e3",description:"| Swagger3                                                     | \u6ce8\u89e3\u8bf4\u660e                                              |",source:"@site/docs/oas/openapi3-annotation.md",sourceDirName:"oas",slug:"/oas/openapi3-annotation",permalink:"/docs/oas/openapi3-annotation",draft:!1,tags:[],version:"current",lastUpdatedBy:"\u6687\u4eab",lastUpdatedAt:1672732934,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{},sidebar:"oas",previous:{title:"Swagger2\u6ce8\u89e3",permalink:"/docs/oas/openapi2-annotation"}},m={},d=[],u={toc:d};function s(t){var e=t.components,r=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openapi3\u6ce8\u89e3"},"OpenAPI3\u6ce8\u89e3"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Swagger3"),(0,o.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"@Tag(name = \u201c\u63a5\u53e3\u7c7b\u63cf\u8ff0\u201d)"),(0,o.kt)("td",{parentName:"tr",align:null},"Controller \u7c7b")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"@Operation(summary =\u201c\u63a5\u53e3\u65b9\u6cd5\u63cf\u8ff0\u201d)"),(0,o.kt)("td",{parentName:"tr",align:null},"Controller \u65b9\u6cd5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"@Parameters"),(0,o.kt)("td",{parentName:"tr",align:null},"Controller \u65b9\u6cd5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"@Parameter(description=\u201c\u53c2\u6570\u63cf\u8ff0\u201d)"),(0,o.kt)("td",{parentName:"tr",align:null},"Controller \u65b9\u6cd5\u4e0a @Parameters \u91ccController \u65b9\u6cd5\u7684\u53c2\u6570")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"@Parameter(hidden = true)  \u3001@Operation(hidden = true)@Hidden"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6392\u9664\u6216\u9690\u85cfapi")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"@Schema"),(0,o.kt)("td",{parentName:"tr",align:null},"DTO\u5b9e\u4f53DTO\u5b9e\u4f53\u5c5e\u6027")))))}s.isMDXComponent=!0}}]);