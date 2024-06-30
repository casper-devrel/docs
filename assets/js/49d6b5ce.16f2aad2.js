"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3582],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:e},l),{},{components:r})):n.createElement(f,i({ref:e},l))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[d]="string"==typeof t?t:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8389:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={slug:"/resources/tutorials/advanced/"},c="Advanced Tutorials",u={unversionedId:"resources/advanced/index",id:"resources/advanced/index",title:"Advanced Tutorials",description:"| Title                                                       | Description                                                      |",source:"@site/source/docs/casper/resources/advanced/index.md",sourceDirName:"resources/advanced",slug:"/resources/tutorials/advanced/",permalink:"/docs/resources/tutorials/advanced/",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/resources/advanced/index.md",tags:[],version:"current",lastUpdatedAt:1714494013,formattedLastUpdatedAt:"Apr 30, 2024",frontMatter:{slug:"/resources/tutorials/advanced/"},sidebar:"resources",previous:{title:"AWS Casper Nodes",permalink:"/docs/resources/tutorials/beginner/aws-node"},next:{title:"Two-Party Multi-Sig",permalink:"/docs/resources/tutorials/advanced/two-party-multi-sig"}},l={},d=[],p={toc:d},m="wrapper";function f(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)(m,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced-tutorials"},"Advanced Tutorials"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/resources/tutorials/advanced/two-party-multi-sig"},"Two-Party Multi-Signature Transactions")),(0,o.kt)("td",{parentName:"tr",align:null},"A trivial two-party multi-signature scheme for signing and sending transactions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/resources/advanced/multi-sig/"},"Multi-Sig Management")),(0,o.kt)("td",{parentName:"tr",align:null},"Integrate key management on Casper accounts and sign transactions with multiple keys")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/resources/tutorials/advanced/return-values-tutorial"},"Interacting with Runtime Return Values")),(0,o.kt)("td",{parentName:"tr",align:null},"Contract code returning a value to the immediate caller via ",(0,o.kt)("inlineCode",{parentName:"td"},"runtime::ret()"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/resources/tutorials/advanced/transfer-token-to-contract"},"Safely Transfer Tokens to a Contract")),(0,o.kt)("td",{parentName:"tr",align:null},"Two methods to handle tokens via a contract")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/resources/tutorials/advanced/storage-workflow"},"Reading and Writing to Global State using Rust")),(0,o.kt)("td",{parentName:"tr",align:null},"Methods to read and write data to global state on a Casper network using Rust")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/resources/tutorials/advanced/cross-contract"},"Cross Contract Communication")),(0,o.kt)("td",{parentName:"tr",align:null},"Variations of cross-contract communication for more complex scenarios")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/resources/advanced/list-auth-keys-tutorial"},"Working with Authorization Keys")),(0,o.kt)("td",{parentName:"tr",align:null},"Retrieve and use the authorization keys associated with a transaction")))))}f.isMDXComponent=!0}}]);