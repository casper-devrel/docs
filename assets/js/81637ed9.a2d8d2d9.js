"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7576],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,g=p["".concat(c,".").concat(d)]||p[d]||f[d]||s;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6032:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),i=["components"],o={title:"Transferring Tokens"},c="Transferring Tokens with the Casper CLI Client",l={unversionedId:"developers/cli/transfers/index",id:"developers/cli/transfers/index",title:"Transferring Tokens",description:"The following topics describe using the Casper command-line client to transfer tokens between purses on a Casper network. Depending on the account configuration, a direct transfer or a multiple-signature (multi-sig) transaction transfer can be utilized.",source:"@site/source/docs/casper/developers/cli/transfers/index.md",sourceDirName:"developers/cli/transfers",slug:"/developers/cli/transfers/",permalink:"/docs/developers/cli/transfers/",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/cli/transfers/index.md",tags:[],version:"current",lastUpdatedAt:1714494013,formattedLastUpdatedAt:"Apr 30, 2024",frontMatter:{title:"Transferring Tokens"},sidebar:"developers",previous:{title:"Interacting with the Blockchain",permalink:"/docs/developers/cli/"},next:{title:"Direct Token Transfer",permalink:"/docs/developers/cli/transfers/direct-token-transfer"}},u={},p=[],f={toc:p},d="wrapper";function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)(d,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"transferring-tokens-with-the-casper-cli-client"},"Transferring Tokens with the Casper CLI Client"),(0,s.kt)("p",null,"The following topics describe using the Casper command-line client to transfer tokens between purses on a Casper network. Depending on the account configuration, a direct transfer or a multiple-signature (multi-sig) transaction transfer can be utilized."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Transferring tokens using a direct transfer")),(0,s.kt)("p",null,"Tokens can be transferred directly when the signing key has enough weight to approve the transaction. This is the most common scenario, applicable by default for accounts with a single primary key. To use a direct transfer, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/developers/cli/transfers/direct-token-transfer"},"Transferring Tokens Using Direct Transfer"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Transferring tokens using a multi-sig tranasction")),(0,s.kt)("p",null,"Multi-sig transaction transfers are typically used when the account initiating the transfer has multiple associated keys that need to sign the transaction. To set up the account's associated keys, see the ",(0,s.kt)("a",{parentName:"p",href:"/docs/resources/tutorials/advanced/two-party-multi-sig"},"Two-Party Multi-Signature transactions")," workflow. To use a multi-sig transaction transfer, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/developers/cli/transfers/multisig-deploy-transfer"},"Transferring Tokens Using a Multi-sig Account"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Verifying a transfer using the command-line client")),(0,s.kt)("p",null,"To verify the status of a transfer, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/developers/cli/transfers/verify-transfer"},"Verifying a Transfer"),"."))}g.isMDXComponent=!0}}]);