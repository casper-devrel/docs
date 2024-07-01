"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9025],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=i(r),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2358:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],s={},p="Documentation Updates by Protocol Release",i={unversionedId:"resources/changelog",id:"resources/changelog",title:"Documentation Updates by Protocol Release",description:"Condor (2.0)",source:"@site/source/docs/casper/resources/changelog.md",sourceDirName:"resources",slug:"/resources/changelog",permalink:"/resources/changelog",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/resources/changelog.md",tags:[],version:"current",lastUpdatedAt:1715267827,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{}},l={},u=[{value:"Condor (2.0)",id:"condor-20",level:2},{value:"Concepts",id:"concepts",level:3},{value:"Developers",id:"developers",level:3},{value:"Operators",id:"operators",level:3}],d={toc:u},f="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"documentation-updates-by-protocol-release"},"Documentation Updates by Protocol Release"),(0,a.kt)("h2",{id:"condor-20"},"Condor (2.0)"),(0,a.kt)("h3",{id:"concepts"},"Concepts"),(0,a.kt)("p",null,"The following are changes introduced alongside release of the Condor network upgrade."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/concepts/key-types"},"Understanding Key Types")," - Additional Key Types and document restructuring."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/concepts/serialization-standard"},"Serialization Standard")," - Serialization information for new types."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/concepts/smart-contracts"},"Smart Contracts")," - Information on the new factory pattern feature for smart contracts."),(0,a.kt)("h3",{id:"developers"},"Developers"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/developers/dapps/monitor-and-consume-events"},"Building dApps -> Monitoring and Consuming Events")," - Information related to contract-level events."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-informational"},"Casper JSON-RPC API -> Informational JSON-RPC Methods")," - New RPC methods."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-transactional"},"Casper JSON-RPC API -> Transactional JSON-RPC Methods")," - New RPC methods."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/developers/json-rpc/types_chain"},"Casper JSON-RPC API -> Types")," - New parameters used by the JSON-RPC API."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/emitting-contract-events"},"Writing On-Chain Code -> Contract-Level Events")," - Guide to the new contract-level events feature."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/factory-pattern"},"Writing On-Chain Code -> Factory Contracts")," - Guide to the new factory pattern for smart contracts."),(0,a.kt)("h3",{id:"operators"},"Operators"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/operators/setup-network/chain-spec"},"Private Network -> The Chainspec")," - Updates to the ",(0,a.kt)("inlineCode",{parentName:"p"},"chainpsec")," relating to contract-level events."))}m.isMDXComponent=!0}}]);