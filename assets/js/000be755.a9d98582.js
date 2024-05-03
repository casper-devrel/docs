"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6688],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},825:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={title:"Overview",slug:"/operators"},s="Operators Overview",l={unversionedId:"operators/index",id:"operators/index",title:"Overview",description:"Operators who wish to run node infrastructure on a Casper network, either as a standalone private network, or as part of the public network should explore this section.",source:"@site/source/docs/casper/operators/index.md",sourceDirName:"operators",slug:"/operators",permalink:"/operators",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/operators/index.md",tags:[],version:"current",lastUpdatedAt:1714742814,formattedLastUpdatedAt:"May 3, 2024",frontMatter:{title:"Overview",slug:"/operators"},sidebar:"operators",next:{title:"Setting up a Node",permalink:"/operators/setup/"}},u={},c=[],d={toc:c},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"operators-overview"},"Operators Overview"),(0,o.kt)("p",null,"Operators who wish to run node infrastructure on a Casper network, either as a standalone private network, or as part of the public network should explore this section."),(0,o.kt)("p",null,"Prior knowledge of Unix-based operating systems and proficiency with ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bash")," scripting are recommended. If you are unfamiliar with ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd"),", the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/title/systemd"},"Arch Linux page on systemd")," is a good introduction."),(0,o.kt)("p",null,"Operators should know the ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/hardware"},"hardware requirements")," before running a node."),(0,o.kt)("p",null,"Also, the ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/install-node/#network-requirements"},"network requirements")," specify how to open ports and modify the network firewall to which the node is connected. This step is necessary to allow incoming connections, enabling communication among nodes."),(0,o.kt)("p",null,"Review the ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/basic-node-configuration"},"node's configuration")," first. Then, you can follow the node ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/install-node"},"installation instructions"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Topic"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/operators/setup/"},"Node Setup")),(0,o.kt)("td",{parentName:"tr",align:null},"How to set up a Casper node")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/operators/becoming-a-validator/"},"Becoming a Validator")),(0,o.kt)("td",{parentName:"tr",align:null},"How to join a network and become a validator")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/operators/setup-network/"},"Private Network Setup")),(0,o.kt)("td",{parentName:"tr",align:null},"How to set up a private Casper network")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/operators/maintenance/"},"Maintenance")),(0,o.kt)("td",{parentName:"tr",align:null},"Topics related to node maintenance")))))}f.isMDXComponent=!0}}]);