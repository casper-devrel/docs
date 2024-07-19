"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return n?o.createElement(m,s(s({ref:t},d),{},{components:n})):o.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},31163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=n(87462),r=(n(67294),n(3905)),a=n(44996);const s={},i="Contracts and Session Code",c={unversionedId:"developers/writing-onchain-code/contract-vs-session",id:"developers/writing-onchain-code/contract-vs-session",title:"Contracts and Session Code",description:"What is Session Code?",source:"@site/source/docs/developers/writing-onchain-code/contract-vs-session.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/contract-vs-session",permalink:"/docs/next/developers/writing-onchain-code/contract-vs-session",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/developers/writing-onchain-code/contract-vs-session.md",tags:[],version:"current",lastUpdatedAt:1719861245,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{},sidebar:"developers",previous:{title:"Calling Contracts",permalink:"/docs/next/developers/writing-onchain-code/calling-contracts"},next:{title:"Writing Session Code",permalink:"/docs/next/developers/writing-onchain-code/writing-session-code"}},l={},d=[{value:"What is Session Code?",id:"what-is-session-code",level:2},{value:"Comparing Session and Contract Code",id:"comparing-session-and-contract",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],p={toc:d},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contracts-and-session-code"},"Contracts and Session Code"),(0,r.kt)("h2",{id:"what-is-session-code"},"What is Session Code?"),(0,r.kt)("p",null,"Session code is the simplest logic one can execute on a Casper network. It is essential because it is often used to trigger contract logic stored on the chain. Session code requires only one entry point, the ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," function, and it runs within the context of the account executing the session code. As a result, the session code runs with the account's permissions, such as having access to the account's main purse. For example, the session code could transfer tokens from the account's main purse. "),(0,r.kt)("p",null,"The best use of session code is when the situation calls for ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts/glossary/S#stateless"},"stateless")," execution, and very little or no internal data needs to be tracked. Session code is required when interacting and accepting values returned across the Wasm boundary."),(0,r.kt)("h2",{id:"comparing-session-and-contract"},"Comparing Session and Contract Code"),(0,r.kt)("p",null,"The following table summarizes the key differences between session code and contract code on a Casper network."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Session Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Contract Code"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Session code always executes in the context of the account that signed the transaction containing the session code."),(0,r.kt)("td",{parentName:"tr",align:null},"A smart contract, which is stored on-chain logic, executes within its own context.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Session code has only one entry point, ",(0,r.kt)("inlineCode",{parentName:"td"},"call"),", which can be used to interact with the session code."),(0,r.kt)("td",{parentName:"tr",align:null},"A smart contract can have multiple entry points that can be invoked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"call")," entry point initiates any action the session code takes."),(0,r.kt)("td",{parentName:"tr",align:null},"Any action undertaken by a contract must initiate through an outside call, usually via session code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"When a ",(0,r.kt)("inlineCode",{parentName:"td"},"put_key")," call is made within the body of the session code, the key is added to the account's named keys."),(0,r.kt)("td",{parentName:"tr",align:null},"When a ",(0,r.kt)("inlineCode",{parentName:"td"},"put_key")," call is made within the smart contract's context, the contract's record is modified to have a new named_key entry.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"For more information on how to write session code, see ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/developers/writing-onchain-code/writing-session-code"},"Writing Session Code"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"For more information on writing contracts, see ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/developers/writing-onchain-code/simple-contract"},"Writing a Basic Smart Contract in Rust"),".")))),(0,r.kt)("p",null,"The following image depicts the comparison presented in the table."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:(0,a.Z)("/image/design/session-contract-context.png"),alt:"Comparing Session and Contract Code"})),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn to ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/developers/writing-onchain-code/writing-session-code"},"write session code")),(0,r.kt)("li",{parentName:"ul"},"Learn to ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/developers/writing-onchain-code/testing-session-code"},"test session code"))))}h.isMDXComponent=!0}}]);