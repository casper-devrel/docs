"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[377],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67960:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i="Setting up a Node",p={unversionedId:"operators/setup/index",id:"version-1.5.6/operators/setup/index",title:"Setting up a Node",description:"The prerequisite for becoming a validator is to set up a node and join a network as described here.",source:"@site/versioned_docs/version-1.5.6/operators/setup/index.md",sourceDirName:"operators/setup",slug:"/operators/setup/",permalink:"/operators/setup/",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/version-1.5.6/operators/setup/index.md",tags:[],version:"1.5.6",lastUpdatedAt:1719863791,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{},sidebar:"operators",previous:{title:"Overview",permalink:"/operators"},next:{title:"Hardware",permalink:"/operators/setup/hardware"}},s={},l=[],d={toc:l},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-a-node"},"Setting up a Node"),(0,a.kt)("p",null,"The prerequisite for becoming a validator is to set up a node and join a network as described here."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/operators/setup/hardware"},"Recommended Hardware Specifications")),(0,a.kt)("td",{parentName:"tr",align:null},"System requirements for the Casper Mainnet and Testnet")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/operators/setup/basic-node-configuration"},"Basic Node Configuration")),(0,a.kt)("td",{parentName:"tr",align:null},"Processes and files involved in setting up a Casper node")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/operators/setup/node-endpoints"},"Node Endpoints")),(0,a.kt)("td",{parentName:"tr",align:null},"Ports for communicating with other nodes and dApps")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/operators/setup/install-node"},"Installing a Node")),(0,a.kt)("td",{parentName:"tr",align:null},"Step-by-step instructions to install a Casper node")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/operators/setup/open-files"},"Setting the Open Files Limit")),(0,a.kt)("td",{parentName:"tr",align:null},"Required setting for the Casper node to run correctly")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/operators/setup/upgrade"},"Upgrading the Node")),(0,a.kt)("td",{parentName:"tr",align:null},"Before joining the network, the node needs to be upgraded")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/operators/setup/joining"},"Joining a Running Network")),(0,a.kt)("td",{parentName:"tr",align:null},"Steps to join an existing Casper network")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/operators/setup/non-root-user"},"Setting up a Non-Root User")),(0,a.kt)("td",{parentName:"tr",align:null},"Logging into the node remotely using a key")))))}c.isMDXComponent=!0}}]);