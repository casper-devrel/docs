"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5677],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(r),m=a,f=l["".concat(u,".").concat(m)]||l[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3582:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"Hardware"},u="Recommended Hardware Specifications",c={unversionedId:"operators/setup/hardware",id:"operators/setup/hardware",title:"Hardware",description:"System Requirements",source:"@site/source/docs/casper/operators/setup/hardware.md",sourceDirName:"operators/setup",slug:"/operators/setup/hardware",permalink:"/operators/setup/hardware",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/operators/setup/hardware.md",tags:[],version:"current",lastUpdatedAt:1689366049,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{title:"Hardware"},sidebar:"operators",previous:{title:"Setting up a Node",permalink:"/operators/setup/"},next:{title:"Configuration",permalink:"/operators/setup/basic-node-configuration"}},p={},l=[{value:"System Requirements",id:"system-requirements",level:2},{value:"CPU Requirements",id:"cpu-requirements",level:3}],d={toc:l},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"recommended-hardware-specifications"},"Recommended Hardware Specifications"),(0,o.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,o.kt)("p",null,"The following hardware specifications are recommended for the Casper ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/"},"Mainnet")," and ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/"},"Testnet"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"4 Cores"),(0,o.kt)("li",{parentName:"ul"},"32 GB Ram"),(0,o.kt)("li",{parentName:"ul"},"2 TB SSD or network SSD backed disk"),(0,o.kt)("li",{parentName:"ul"},"Linux machine running Ubuntu 20.04")),(0,o.kt)("admonition",{title:"Notes",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SSD is required because HDD cannot perform random writes at the performance needed to keep in sync with the full speed of the network.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For non-archival nodes, disc usage will drop once data recovery is implemented. It is safe to slowly increase the disc space as needed while monitoring on a server capable of this.")))),(0,o.kt)("h3",{id:"cpu-requirements"},"CPU Requirements"),(0,o.kt)("p",null,"Attempting to run a Casper node on older hardware can result in unexpected crashes. This is due to the CPU not supporting instructions used by our official binaries, including AVX2 and Intel SHA extensions."),(0,o.kt)("p",null,"To avoid these issues, we recommend a CPU running AMD Zen, Intel Ice Lake or newer architecture."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This only applies to official binaries released by Casper. If you are compiling your node from scratch, you may choose to disable the extensions in question.")))}f.isMDXComponent=!0}}]);