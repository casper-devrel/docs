"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,y=p["".concat(c,".").concat(u)]||p[u]||h[u]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="Calling Contracts",s={unversionedId:"developers/writing-onchain-code/calling-contracts",id:"version-1.5.6/developers/writing-onchain-code/calling-contracts",title:"Calling Contracts",description:"Calling a contract on a Casper network requires the use of a deploy. When using the Casper Rust client, JavaScript SDK, or any other client, the intermediary client crafts the deploy for you, using the arguments you provide. This document outlines the various deploy variants through which you can execute Wasm or invoke the execution of on-chain Wasm.",source:"@site/versioned_docs/version-1.5.6/developers/writing-onchain-code/calling-contracts.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/calling-contracts",permalink:"/docs/developers/writing-onchain-code/calling-contracts",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/version-1.5.6/developers/writing-onchain-code/calling-contracts.md",tags:[],version:"1.5.6",lastUpdatedAt:1719863791,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{},sidebar:"developers",previous:{title:"Upgrading and Maintaining Smart Contracts",permalink:"/docs/developers/writing-onchain-code/upgrading-contracts"},next:{title:"Contracts and Session Code",permalink:"/docs/developers/writing-onchain-code/contract-vs-session"}},c={},l=[{value:"Using Deploy Variants",id:"using-deploy-variants",level:2},{value:"ModuleBytes",id:"modulebytes",level:3},{value:"StoredContractByHash",id:"storedcontractbyhash",level:3},{value:"StoredContractByName",id:"storedcontractbyname",level:3},{value:"StoredVersionedContractByHash",id:"storedversionedcontractbyhash",level:3},{value:"StoredVersionedContractByName",id:"storedversionedcontractbyname",level:3},{value:"Transfer",id:"transfer",level:3}],d={toc:l},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"calling-contracts"},"Calling Contracts"),(0,a.kt)("p",null,"Calling a contract on a Casper network requires the use of a deploy. When using the Casper Rust client, JavaScript SDK, or any other client, the intermediary client crafts the deploy for you, using the arguments you provide. This document outlines the various deploy variants through which you can execute Wasm or invoke the execution of on-chain Wasm."),(0,a.kt)("h2",{id:"using-deploy-variants"},"Using Deploy Variants"),(0,a.kt)("h3",{id:"modulebytes"},"ModuleBytes"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ModuleBytes")," is a deploy variant that allows you to pass opaque Wasm bytes to a network. This variant is used to install a contract on the chain or execute Wasm."),(0,a.kt)("p",null,"However, you can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"ModuleBytes")," to deploy session code that calls a contract."),(0,a.kt)("p",null,"Further information on the structure of ",(0,a.kt)("inlineCode",{parentName:"p"},"ModuleBytes")," can be found in ",(0,a.kt)("a",{parentName:"p",href:"/docs/developers/json-rpc/types_chain#modulebytes"},"here"),"."),(0,a.kt)("h3",{id:"storedcontractbyhash"},"StoredContractByHash"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"StoredContractByHash")," is a deploy variant that invokes on-chain Wasm by specifying the contract hash and an entry point within the contract. When you don't need to send additional Wasm, you can use this deploy variant to invoke on-chain Wasm. It accepts any runtime arguments necessary for the entry point in question."),(0,a.kt)("p",null,"While there is no Wasm associated with this variant, it is still a deploy sent to a node that invokes an installed contract."),(0,a.kt)("p",null,"Further information on the structure of ",(0,a.kt)("inlineCode",{parentName:"p"},"StoredContractByHash")," can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/developers/json-rpc/types_chain#storedcontractbyhash"},"here"),"."),(0,a.kt)("h3",{id:"storedcontractbyname"},"StoredContractByName"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"StoredContractByName")," is similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"StoredContractByHash"),", with the main difference being the reference used to invoke on-chain Wasm. Where ",(0,a.kt)("inlineCode",{parentName:"p"},"StoredContractByHash")," requires the contract hash, ",(0,a.kt)("inlineCode",{parentName:"p"},"StoredContractByName")," uses a string stored as a ",(0,a.kt)("a",{parentName:"p",href:"/docs/developers/json-rpc/types_chain#namedkey"},(0,a.kt)("inlineCode",{parentName:"a"},"NamedKey"))," in the caller's account."),(0,a.kt)("p",null,"This allows the caller to more easily reference a contract stored on-chain for later use but requires pre-planning to store the name within their account's ",(0,a.kt)("inlineCode",{parentName:"p"},"NamedKeys"),"."),(0,a.kt)("h3",{id:"storedversionedcontractbyhash"},"StoredVersionedContractByHash"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"StoredVersionedContractByHash")," is a deploy variant that invokes on-chain Wasm based on the contract package hash rather than the contract hash directly. This variant allows the caller to specify a version within the contract package, but if a specific version is not supplied, it will use the most recent version of the contract within the package."),(0,a.kt)("p",null,"This makes ",(0,a.kt)("inlineCode",{parentName:"p"},"StoredVersionedContractByHash")," more stable than ",(0,a.kt)("inlineCode",{parentName:"p"},"StoredContractByHash"),", as any caller will be directed to the most recent version of the internal contract without needing to specify the hash of that specific contract. Callers that regularly interact with a contract that they know will be upgraded can use this variant to ensure they are always using the most up-to-date version."),(0,a.kt)("p",null,"DApp developers that use contracts developed by other parties can use ",(0,a.kt)("inlineCode",{parentName:"p"},"StoredVersionedContractByHash")," to avoid interruptions from contract version changes."),(0,a.kt)("p",null,"Further information on the structure of ",(0,a.kt)("inlineCode",{parentName:"p"},"StoredVersionedContractByHash")," can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/developers/json-rpc/types_chain#storedversioncontractbyhash"},"here"),"."),(0,a.kt)("h3",{id:"storedversionedcontractbyname"},"StoredVersionedContractByName"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"StoredVersionedContractByName")," combines the functionality of ",(0,a.kt)("inlineCode",{parentName:"p"},"StoredContractByName")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"StoredVersionedContractByHash"),". It allows a developer to store a reference string as a ",(0,a.kt)("inlineCode",{parentName:"p"},"NamedKey")," within their account context that references a contract by its contract package hash."),(0,a.kt)("p",null,"Further information on the structure of ",(0,a.kt)("inlineCode",{parentName:"p"},"StoredVersionedContractByName")," can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/developers/json-rpc/types_chain#storedversioncontractbyname"},"here"),"."),(0,a.kt)("h3",{id:"transfer"},"Transfer"),(0,a.kt)("p",null,"Native ",(0,a.kt)("inlineCode",{parentName:"p"},"Transfer"),"s are Wasmless transfers on a Casper network. This is how most transfers take place, albeit through a system like the Rust client that crafts the associated deploy and sends it to the network."),(0,a.kt)("p",null,"Further information on the structure of a native ",(0,a.kt)("inlineCode",{parentName:"p"},"Transfer")," can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/developers/json-rpc/types_chain#transfer"},"here"),"."))}h.isMDXComponent=!0}}]);