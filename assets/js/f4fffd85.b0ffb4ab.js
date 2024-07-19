"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Genesis"},s="The Genesis Block",i={unversionedId:"operators/setup-network/genesis",id:"version-1.5.6/operators/setup-network/genesis",title:"Genesis",description:"the-genesis-block}",source:"@site/versioned_docs/version-1.5.6/operators/setup-network/genesis.md",sourceDirName:"operators/setup-network",slug:"/operators/setup-network/genesis",permalink:"/docs/operators/setup-network/genesis",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/version-1.5.6/operators/setup-network/genesis.md",tags:[],version:"1.5.6",lastUpdatedAt:1719863791,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{title:"Genesis"},sidebar:"operators",previous:{title:"Setting up Private Networks",permalink:"/docs/operators/setup-network/"},next:{title:"The Chainspec",permalink:"/docs/operators/setup-network/chain-spec"}},c={},p=[{value:"chainspec.toml",id:"chainspectoml",level:2},{value:"accounts.toml",id:"accountstoml",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-genesis-block"},"The Genesis Block"),(0,o.kt)("p",null,"The Casper node software creates a genesis block from the following input files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chainspec.toml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"accounts.toml"))),(0,o.kt)("h2",{id:"chainspectoml"},"chainspec.toml"),(0,o.kt)("p",null,"A version of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/glossary/C#chainspec"},"chainspec")," is downloaded by the ",(0,o.kt)("inlineCode",{parentName:"p"},"pull_casper_node_version.sh")," script installed with the casper-node-launcher debian package. This script pulls the ",(0,o.kt)("inlineCode",{parentName:"p"},"chainspec.toml")," file from the appropriate path defined in the network config file used (",(0,o.kt)("inlineCode",{parentName:"p"},"casper.conf")," for MainNet and ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-test.conf")," for TestNet)."),(0,o.kt)("p",null,"The production version of the file from which this is based on can be found at ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node/resources/production/chainspec.toml")," in the code base. To create a custom network, this file can be updated as desired. Any changes to this file will result in a different genesis hash. Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/operators/setup-network/chain-spec"},"this page")," for detailed documentation on each of the variables in the file."),(0,o.kt)("h2",{id:"accountstoml"},"accounts.toml"),(0,o.kt)("p",null,"This file contains the genesis validator set information, starting accounts and associated balances and bond amounts."),(0,o.kt)("p",null,"If an account is not bonded at genesis, specify a ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," for the bond amount."),(0,o.kt)("p",null,"Similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"chainspec.toml"),", this is pulled from the appropriate path defined in the network config file used."))}d.isMDXComponent=!0}}]);