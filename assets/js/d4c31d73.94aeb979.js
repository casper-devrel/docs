"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7785],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},773:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],c={title:"Introduction",slug:"/erc20"},s="ERC-20 Tutorial",p={unversionedId:"dapp-dev-guide/tutorials/erc20/index",id:"dapp-dev-guide/tutorials/erc20/index",isDocsHomePage:!1,title:"Introduction",description:"This tutorial introduces an implementation of the ERC-20 standard for the Casper blockchain. The code for this tutorial is available in GitHub.",source:"@site/source/docs/casper/dapp-dev-guide/tutorials/erc20/index.md",sourceDirName:"dapp-dev-guide/tutorials/erc20",slug:"/erc20",permalink:"/docs/erc20",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/dapp-dev-guide/tutorials/erc20/index.md",tags:[],version:"current",frontMatter:{title:"Introduction",slug:"/erc20"},sidebar:"dapp-dev-guide",previous:{title:"Tutorial Walkthrough",permalink:"/docs/dapp-dev-guide/tutorials/counter/walkthrough"},next:{title:"Preparation",permalink:"/docs/dapp-dev-guide/tutorials/erc20/prepare"}},u=[],l={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"erc-20-tutorial"},"ERC-20 Tutorial"),(0,o.kt)("p",null,"This tutorial introduces an implementation of the ERC-20 standard for the Casper blockchain. The code for this tutorial is available in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/erc20"},"GitHub"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-20#specification"},"Ethereum Request for Comment (ERC-20)")," standard is an integral part of the Ethereum ecosystem. This standard is well established for building new tokens based on smart contracts. These ERC-20 tokens are blockchain-based assets that have value and can be transferred or recorded."),(0,o.kt)("p",null,"The ERC-20 standard defines a set of rules that dictate the total supply of tokens, how the tokens are transferred, how transactions are approved, and how token data is accessed."),(0,o.kt)("p",null,"The following functions implement the rules defined by ERC-20: ",(0,o.kt)("inlineCode",{parentName:"p"},"totalSupply"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"transferFrom"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"approve"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"balanceOf"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"allowance"),". As part of this tutorial, we will review the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/erc20/blob/master/example/erc20-token/src/main.rs"},"contract")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-erc20/latest/casper_erc20/"},"casper_erc20")," library."),(0,o.kt)("p",null,"If you haven't read ",(0,o.kt)("a",{parentName:"p",href:"/docs/dapp-dev-guide/writing-contracts/rust"},"Writing Rust Contracts on Casper"),", we recommend you start there."))}d.isMDXComponent=!0}}]);