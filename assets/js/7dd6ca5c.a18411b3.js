"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6273],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,k=u["".concat(l,".").concat(d)]||u[d]||f[d]||s;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40843:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),s=r(44996);const o={title:"Transfer Tokens",slug:"/users/token-transfer"},i="Transferring Tokens",l={unversionedId:"users/csprlive/token-transfer",id:"version-1.5.6/users/csprlive/token-transfer",title:"Transfer Tokens",description:"You can transfer Casper tokens (CSPR) using any block explorer built to explore the Casper blockchain. The Wallet feature on these block explorers enables transfers to another user's purse, delegate stake, or undelegate stake. In this section, we will discuss the steps to transfer CSPR tokens.",source:"@site/versioned_docs/version-1.5.6/users/csprlive/token-transfer.md",sourceDirName:"users/csprlive",slug:"/users/token-transfer",permalink:"/users/token-transfer",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/version-1.5.6/users/csprlive/token-transfer.md",tags:[],version:"1.5.6",lastUpdatedAt:1719863791,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{title:"Transfer Tokens",slug:"/users/token-transfer"},sidebar:"users",previous:{title:"Undelegate Tokens",permalink:"/users/undelegate-ui"},next:{title:"Casper on Ledger",permalink:"/users/ledger/"}},p={},c=[{value:"Transferring Tokens",id:"transferring-tokens-1",level:2}],u={toc:c},f="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transferring-tokens"},"Transferring Tokens"),(0,a.kt)("p",null,"You can transfer Casper tokens (CSPR) using any ",(0,a.kt)("a",{parentName:"p",href:"/users/block-explorer"},"block explorer")," built to explore the Casper blockchain. The Wallet feature on these block explorers enables transfers to another user's purse, delegate stake, or undelegate stake. In this section, we will discuss the steps to transfer CSPR tokens."),(0,a.kt)("h2",{id:"transferring-tokens-1"},"Transferring Tokens"),(0,a.kt)("p",null,"To transfer tokens, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Sign in to your account with the ",(0,a.kt)("a",{parentName:"li",href:"https://www.casperwallet.io/"},"Casper Wallet"),". See the ",(0,a.kt)("a",{parentName:"li",href:"https://www.casperwallet.io/user-guide/getting-started"},"Getting Started")," user guide for detailed instructions."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Wallet")," on the top menu bar and select ",(0,a.kt)("strong",{parentName:"li"},"Transfer CSPR")," from the drop-down menu. "),(0,a.kt)("li",{parentName:"ol"},"Enter the recipient's public key, the amount you wish to transfer, and an optional Transfer ID for reference. If you do not provide an ID, the system will auto-generate one."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Next")," to proceed.")),(0,a.kt)("img",{src:(0,s.Z)("/image/tutorials/transfer/1.transfer-details.png"),alt:"Transfer details",width:"500"}),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"A confirmation window appears to verify the details entered. Click ",(0,a.kt)("strong",{parentName:"li"},"Confirm and transfer")," to proceed to the next step.")),(0,a.kt)("img",{src:(0,s.Z)("/image/tutorials/transfer/2.confirm-transfer.png"),alt:"Confirm transfer",width:"500"}),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Review the following important fields:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Deploy hash, which uniquely identifies your transfer"),(0,a.kt)("li",{parentName:"ul"},"The Recipient public key of the person receiving your transfer"),(0,a.kt)("li",{parentName:"ul"},"The Recipient account hash used by the system to track the transaction"),(0,a.kt)("li",{parentName:"ul"},"The Transfer Amount containing the value of the transfer")),(0,a.kt)("p",null,"Sign the transaction by selecting the ",(0,a.kt)("strong",{parentName:"p"},"Sign with Casper Wallet")," button to proceed to the next step. "),(0,a.kt)("img",{src:(0,s.Z)("/image/tutorials/transfer/3.sign-transfer.png"),alt:"Sign the transfer",width:"500"}),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Once the Casper Wallet opens, ",(0,a.kt)("strong",{parentName:"li"},"check the deploy hash"),'. Ensure the deploy hash in the "Signature Request" window matches the deploy hash in the "Sign transaction" window before continuing. Click ',(0,a.kt)("strong",{parentName:"li"},"Sign")," in the Signature Request window to complete the transaction.")),(0,a.kt)("img",{src:(0,s.Z)("/image/tutorials/transfer/4.wallet-window.png"),alt:"Review the transaction",width:"500"}),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"You completed the transaction and successfully transferred tokens.")),(0,a.kt)("img",{src:(0,s.Z)("/image/tutorials/transfer/5.transfer-completed.png"),alt:"Transfer completed window",width:"500"}),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"View the updated CSPR balance in the account's main purse next.")))}d.isMDXComponent=!0}}]);