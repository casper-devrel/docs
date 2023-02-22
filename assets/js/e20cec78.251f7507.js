"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5458],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4140:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=n(4996),c=["components"],s={},l="Understanding Call Stacks",d={unversionedId:"dapp-dev-guide/building-dapps/callstack",id:"dapp-dev-guide/building-dapps/callstack",title:"Understanding Call Stacks",description:"Users wishing to interact with a Casper network must do so through sending a Deploy. All Deploys consist of session code run in the context of the user account that sent the Deploy. The session code may install contract code to global state, or interact with previously installed contract code.",source:"@site/source/docs/casper/dapp-dev-guide/building-dapps/callstack.md",sourceDirName:"dapp-dev-guide/building-dapps",slug:"/dapp-dev-guide/building-dapps/callstack",permalink:"/dapp-dev-guide/building-dapps/callstack",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/building-dapps/callstack.md",tags:[],version:"current",lastUpdatedAt:1677063022,formattedLastUpdatedAt:"2/22/2023",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Calling Contracts",permalink:"/dapp-dev-guide/building-dapps/calling-contracts"},next:{title:"SDK Client Libraries",permalink:"/sdk"}},p={},u=[{value:"The Caller",id:"the-caller",level:2},{value:"The Immediate Caller",id:"the-immediate-caller",level:2},{value:"Limitations",id:"limitations",level:2}],h={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"understanding-call-stacks"},"Understanding Call Stacks"),(0,i.kt)("p",null,"Users wishing to interact with a Casper network must do so through ",(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/building-dapps/sending-deploys"},"sending a Deploy"),". All Deploys consist of ",(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/session-code"},"session code")," run in the context of the user account that sent the Deploy. The session code may ",(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/installing-contracts"},"install contract code to global state"),", or interact with previously ",(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/building-dapps/calling-contracts"},"installed contract code"),"."),(0,i.kt)("p",null,"When the session code within a Deploy interacts with one or more contracts, this is the beginning of a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/system/enum.CallStackElement.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Call Stack")),". A call stack is the chronological order in which contracts call other contracts, initiated by an instance of session code."),(0,i.kt)("h2",{id:"the-caller"},"The Caller"),(0,i.kt)("p",null,"In every instance of a call stack, the originating ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/system/mint/trait.RuntimeProvider.html#tymethod.get_caller"},"caller")," is the session code within the account's context that began the interaction. Contract code cannot spontaneously act without session code to activate it. As such, the session code represents the ",(0,i.kt)("em",{parentName:"p"},"zeroth")," entity in each call stack."),(0,i.kt)("h2",{id:"the-immediate-caller"},"The Immediate Caller"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/1.5.0/casper_types/system/mint/trait.RuntimeProvider.html#tymethod.get_immediate_caller"},"immediate caller")," is the caller that interacted directly with the contract in question."),(0,i.kt)("p",null,"If session code calls a contract, which in turn calls another contract, then the session code would represent the ",(0,i.kt)("em",{parentName:"p"},"zeroth")," entity in the stack, the contract called by the initiating session code would be the ",(0,i.kt)("em",{parentName:"p"},"first")," and the contract called by the first contract would be the ",(0,i.kt)("em",{parentName:"p"},"second"),"."),(0,i.kt)("p",null,"In this example, the first contract would be the ",(0,i.kt)("inlineCode",{parentName:"p"},"immediate caller")," of the second contract. The session code would remain the ",(0,i.kt)("inlineCode",{parentName:"p"},"caller"),"."),(0,i.kt)("img",{class:"align-center",src:(0,o.Z)("/image/callstack.png"),width:"450",alt:"Call Stack"}),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"Casper networks place a limitation on the maximum height of a call stack at ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," contracts. This does not include the initiating session code, which would still count as the ",(0,i.kt)("em",{parentName:"p"},"zeroth")," instance within the stack."),(0,i.kt)("p",null,"As such, a call stack may consist of up to ten consecutive called smart contracts."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Contract code cannot call session code, only other contract code."))))}m.isMDXComponent=!0}}]);