"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,v=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(v,i(i({ref:t},d),{},{components:r})):n.createElement(v,i({ref:t},d))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Overview",slug:"/developers"},i="Developers Overview",l={unversionedId:"developers/index",id:"developers/index",title:"Overview",description:"This section supports developers getting started with the Casper blockchain by writing dApps or smart contracts in Rust. Developers can install a local development environment with a runtime and a test framework. They can also create and test contracts with the libraries provided or use these libraries to build decentralized applications. Prior knowledge of Unix-based operating systems, like GNU/Linux, and programming knowledge with Rust, AssemblyScript, JavaScript, or Python are highly recommended.",source:"@site/source/docs/developers/index.md",sourceDirName:"developers",slug:"/developers",permalink:"/docs/next/developers",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/developers/index.md",tags:[],version:"current",lastUpdatedAt:1719861245,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{title:"Overview",slug:"/developers"},sidebar:"developers",next:{title:"Development Prerequisites",permalink:"/docs/next/developers/prerequisites"}},s={},p=[],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developers-overview"},"Developers Overview"),(0,a.kt)("p",null,"This section supports developers getting started with the Casper blockchain by writing dApps or smart contracts in Rust. Developers can install a local development environment with a runtime and a test framework. They can also create and test contracts with the libraries provided or use these libraries to build decentralized applications. Prior knowledge of Unix-based operating systems, like GNU/Linux, and programming knowledge with Rust, AssemblyScript, JavaScript, or Python are highly recommended."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Topic"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/next/developers/prerequisites"},"Development Prerequisites")),(0,a.kt)("td",{parentName:"tr",align:null},"Setup needed for various workflows")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/next/developers/essential-crates"},"Essential Casper Crates")),(0,a.kt)("td",{parentName:"tr",align:null},"Available Casper crates and the corresponding documentation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/next/writing-contracts"},"Writing On-Chain Code")),(0,a.kt)("td",{parentName:"tr",align:null},"Writing contracts in Rust and Wasm for a Casper network")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/next/developers/json-rpc/"},"Casper JSON-RPC API")),(0,a.kt)("td",{parentName:"tr",align:null},"Endpoints for developers wishing to interact directly with a Casper node's JSON-RPC API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/next/developers/dapps/"},"Building dApps")),(0,a.kt)("td",{parentName:"tr",align:null},"Useful information for dApp developers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/next/developers/cli/"},"Interacting with the Blockchain Using CLI")),(0,a.kt)("td",{parentName:"tr",align:null},"Using a Rust command-line client to install and call contracts; transfer, delegate, and undelegate tokens.")))),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/resources/build-on-casper/casper-open-source-software"},"Ecosystem Open-Source Software")," may provide other helpful examples. "),(0,a.kt)("p",null,"The motivation for the Casper Network roadmap is inspired by community feedback and recommendations. We look forward to building a decentralized future together."))}u.isMDXComponent=!0}}]);