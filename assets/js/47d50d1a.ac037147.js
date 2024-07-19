"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,s(s({ref:t},c),{},{components:r})):a.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Overview"},s="Concepts Overview",i={unversionedId:"concepts/index",id:"version-1.5.6/concepts/index",title:"Overview",description:"The Casper blockchain is a Turing-complete smart-contracting platform using a Proof-of-Stake (PoS) consensus algorithm and WebAssembly (Wasm). The Casper Mainnet is permissionless, decentralized, and public. Network administrators can also create private or hybrid Casper networks as described here.",source:"@site/versioned_docs/version-1.5.6/concepts/index.md",sourceDirName:"concepts",slug:"/concepts/",permalink:"/concepts/",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/version-1.5.6/concepts/index.md",tags:[],version:"1.5.6",lastUpdatedAt:1719863791,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{title:"Overview"},sidebar:"concepts",next:{title:"What is Casper?",permalink:"/"}},l={},p=[{value:"Concepts",id:"concepts",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Developers",id:"developers",level:3},{value:"Operators",id:"operators",level:3},{value:"Users",id:"users",level:3},{value:"Resources",id:"resources",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"concepts-overview"},"Concepts Overview"),(0,n.kt)("p",null,"The Casper blockchain is a ",(0,n.kt)("a",{parentName:"p",href:"/concepts/glossary/T#turing-complete-blockchain"},"Turing-complete")," smart-contracting platform using a Proof-of-Stake (PoS) consensus algorithm and WebAssembly (Wasm). The ",(0,n.kt)("a",{parentName:"p",href:"https://cspr.live/"},"Casper Mainnet")," is permissionless, decentralized, and public. Network administrators can also create private or hybrid Casper networks as described ",(0,n.kt)("a",{parentName:"p",href:"/operators/setup-network/"},"here"),"."),(0,n.kt)("h2",{id:"concepts"},"Concepts"),(0,n.kt)("p",null,"This section of the documentation covers the core concepts underpinning the Casper blockchain. Working with Casper requires an understanding of blockchain technology, as well as some Casper-specific features. We recommend starting with the topics below if you are new to Casper."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Topic"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/"},"Introduction to the Casper Blockchain")),(0,n.kt)("td",{parentName:"tr",align:null},"High-level details about the Casper blockchain")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/concepts/intro-to-dapps"},"Introduction to dApps")),(0,n.kt)("td",{parentName:"tr",align:null},"Developing distributed applications on the Casper blockchain")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/concepts/accounts-and-keys"},"Accounts and Cryptographic Keys")),(0,n.kt)("td",{parentName:"tr",align:null},"The Casper programming model is account-based. Learn how Casper accounts work and how they are secured")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/concepts/hash-types"},"Hash Types")),(0,n.kt)("td",{parentName:"tr",align:null},"Hashes are used throughout the Casper ecosystem for keys, addresses, packaging data, and more")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/concepts/global-state"},"Global State")),(0,n.kt)("td",{parentName:"tr",align:null},"Learn about the storage layer for the Casper blockchain. All accounts, contracts, and data are stored in global state")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/concepts/callstack"},"Call Stacks")),(0,n.kt)("td",{parentName:"tr",align:null},"Learn how Casper manages the calling of a contract")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/deploy-and-deploy-lifecycle"},"Deploys and the Deploy Lifecycle")),(0,n.kt)("td",{parentName:"tr",align:null},"Deploys are a concept fundamental to the Casper blockchain. Learn about deploys, what they are for, how to create and send them")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/concepts/smart-contracts"},"Smart Contracts")),(0,n.kt)("td",{parentName:"tr",align:null},"Learn how to develop smart contracts on Casper")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/concepts/dictionaries"},"Dictionaries")),(0,n.kt)("td",{parentName:"tr",align:null},"Learn about dictionaries, which are a primary construct for storing and retrieving data on the Casper platform")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/concepts/serialization-standard"},"Serialization")),(0,n.kt)("td",{parentName:"tr",align:null},"Learn about serializing data types and the Casper Serialization Standard")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/design"},"Design")),(0,n.kt)("td",{parentName:"tr",align:null},"The high-level design of a Casper network")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/economics"},"Economics")),(0,n.kt)("td",{parentName:"tr",align:null},"Learn about the Casper on-chain economics")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/glossary"},"Glossary")),(0,n.kt)("td",{parentName:"tr",align:null},"A compendium of all the terms used in Casper, in alphabetical order")))),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"After learning the basic concepts underpinning the Casper protocol, you may wish to look into the following categories."),(0,n.kt)("h3",{id:"developers"},"Developers"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/developers"},"Developers")," area caters to those interested in building dApps and writing smart contracts, including information about specific features or Casper APIs."),(0,n.kt)("h3",{id:"operators"},"Operators"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/operators"},"Operators")," section caters to those who want to run and administrate a Casper node or network."),(0,n.kt)("h3",{id:"users"},"Users"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/users/"},"Users")," section contains tutorials for those interested in interacting with the Casper blockchain using a block explorer or a Ledger device."),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("p",null,"Navigate to ",(0,n.kt)("a",{parentName:"p",href:"/resources/"},"Resources")," to try various tutorials. If you are just getting started and looking to build your first Casper-based dApp, start with the ",(0,n.kt)("a",{parentName:"p",href:"/resources/tutorials/beginner/"},"beginner tutorials"),". Afterward, continue with more ",(0,n.kt)("a",{parentName:"p",href:"/resources/tutorials/advanced/"},"advanced tutorials")," to explore the multi-signature feature, runtime return values, and other essential features."))}u.isMDXComponent=!0}}]);