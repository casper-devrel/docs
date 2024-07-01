"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4609],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,k=p["".concat(l,".").concat(d)]||p[d]||f[d]||s;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5e3:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return f}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=r(4996),i=["components"],l={title:"Transfer Tokens",slug:"/users/token-transfer"},u="Transferring Tokens",c={unversionedId:"users/csprlive/token-transfer",id:"users/csprlive/token-transfer",title:"Transfer Tokens",description:"You can transfer Casper tokens (CSPR) using any block explorer built to explore the Casper blockchain. The Wallet feature on these block explorers enables transfers to another user's purse, delegate stake, or undelegate stake. In this section, we will discuss the steps to transfer CSPR tokens.",source:"@site/source/docs/casper/users/csprlive/token-transfer.md",sourceDirName:"users/csprlive",slug:"/users/token-transfer",permalink:"/users/token-transfer",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/users/csprlive/token-transfer.md",tags:[],version:"current",lastUpdatedAt:1690396120,formattedLastUpdatedAt:"Jul 26, 2023",frontMatter:{title:"Transfer Tokens",slug:"/users/token-transfer"},sidebar:"users",previous:{title:"Undelegate Tokens",permalink:"/users/undelegate-ui"},next:{title:"Casper on Ledger",permalink:"/users/ledger/"}},p={},f=[{value:"Transferring Tokens",id:"transferring-tokens-1",level:2}],d={toc:f},k="wrapper";function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)(k,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"transferring-tokens"},"Transferring Tokens"),(0,s.kt)("p",null,"You can transfer Casper tokens (CSPR) using any ",(0,s.kt)("a",{parentName:"p",href:"/users/block-explorer"},"block explorer")," built to explore the Casper blockchain. The Wallet feature on these block explorers enables transfers to another user's purse, delegate stake, or undelegate stake. In this section, we will discuss the steps to transfer CSPR tokens."),(0,s.kt)("h2",{id:"transferring-tokens-1"},"Transferring Tokens"),(0,s.kt)("p",null,"To transfer tokens, follow these steps:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Sign in to your account with the ",(0,s.kt)("a",{parentName:"li",href:"https://www.casperwallet.io/"},"Casper Wallet"),". See the ",(0,s.kt)("a",{parentName:"li",href:"https://www.casperwallet.io/user-guide/getting-started"},"Getting Started")," user guide for detailed instructions."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Wallet")," on the top menu bar and select ",(0,s.kt)("strong",{parentName:"li"},"Transfer CSPR")," from the drop-down menu. "),(0,s.kt)("li",{parentName:"ol"},"Enter the recipient's public key, the amount you wish to transfer, and an optional Transfer ID for reference. If you do not provide an ID, the system will auto-generate one."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Next")," to proceed.")),(0,s.kt)("img",{src:(0,o.Z)("/image/tutorials/transfer/1.transfer-details.png"),alt:"Transfer details",width:"500"}),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"A confirmation window appears to verify the details entered. Click ",(0,s.kt)("strong",{parentName:"li"},"Confirm and transfer")," to proceed to the next step.")),(0,s.kt)("img",{src:(0,o.Z)("/image/tutorials/transfer/2.confirm-transfer.png"),alt:"Confirm transfer",width:"500"}),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},"Review the following important fields:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The Deploy hash, which uniquely identifies your transfer"),(0,s.kt)("li",{parentName:"ul"},"The Recipient public key of the person receiving your transfer"),(0,s.kt)("li",{parentName:"ul"},"The Recipient account hash used by the system to track the transaction"),(0,s.kt)("li",{parentName:"ul"},"The Transfer Amount containing the value of the transfer")),(0,s.kt)("p",null,"Sign the transaction by selecting the ",(0,s.kt)("strong",{parentName:"p"},"Sign with Casper Wallet")," button to proceed to the next step. "),(0,s.kt)("img",{src:(0,o.Z)("/image/tutorials/transfer/3.sign-transfer.png"),alt:"Sign the transfer",width:"500"}),(0,s.kt)("ol",{start:7},(0,s.kt)("li",{parentName:"ol"},"Once the Casper Wallet opens, ",(0,s.kt)("strong",{parentName:"li"},"check the deploy hash"),'. Ensure the deploy hash in the "Signature Request" window matches the deploy hash in the "Sign transaction" window before continuing. Click ',(0,s.kt)("strong",{parentName:"li"},"Sign")," in the Signature Request window to complete the transaction.")),(0,s.kt)("img",{src:(0,o.Z)("/image/tutorials/transfer/4.wallet-window.png"),alt:"Review the transaction",width:"500"}),(0,s.kt)("ol",{start:8},(0,s.kt)("li",{parentName:"ol"},"You completed the transaction and successfully transferred tokens.")),(0,s.kt)("img",{src:(0,o.Z)("/image/tutorials/transfer/5.transfer-completed.png"),alt:"Transfer completed window",width:"500"}),(0,s.kt)("ol",{start:9},(0,s.kt)("li",{parentName:"ol"},"View the updated CSPR balance in the account's main purse next.")))}h.isMDXComponent=!0}}]);