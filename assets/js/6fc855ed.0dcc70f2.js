"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1263],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=c(r),d=a,k=g["".concat(s,".").concat(d)]||g[d]||u[d]||i;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4756:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=r(4996),o=["components"],s={title:"Ledger and CSPR.live"},c="Using Ledger and CSPR.live",p={unversionedId:"users/ledger/ledger-cspr-live",id:"users/ledger/ledger-cspr-live",title:"Ledger and CSPR.live",description:"This guide will help you connect your Ledger device to a Casper account using the cspr.live block explorer to send and receive CSPR tokens.",source:"@site/source/docs/casper/users/ledger/ledger-cspr-live.md",sourceDirName:"users/ledger",slug:"/users/ledger/ledger-cspr-live",permalink:"/docs/users/ledger/ledger-cspr-live",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/users/ledger/ledger-cspr-live.md",tags:[],version:"current",lastUpdatedAt:1705602476,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{title:"Ledger and CSPR.live"},sidebar:"users",previous:{title:"Ledger and Ledger Live",permalink:"/docs/users/ledger/ledger-live"},next:{title:"Delegate with Ledger",permalink:"/docs/users/staking-ledger"}},g={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Signing In",id:"sign-in",level:2},{value:"Viewing Account Details",id:"view-account-details",level:2},{value:"Receiving Tokens",id:"receive-tokens",level:2},{value:"Sending Tokens",id:"send-tokens",level:2}],d={toc:u},k="wrapper";function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(k,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-ledger-and-csprlive"},"Using Ledger and CSPR.live"),(0,i.kt)("p",null,"This guide will help you connect your Ledger device to a Casper account using the ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/"},"cspr.live")," block explorer to send and receive CSPR tokens."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install a Chromium-based browser, such as Chrome or Brave, for use with ",(0,i.kt)("a",{parentName:"li",href:"https://cspr.live/"},"cspr.live")," for the Casper Mainnet.")),(0,i.kt)("h2",{id:"sign-in"},"Signing In"),(0,i.kt)("p",null,"To use the Ledger device with the ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/"},"cspr.live")," block explorer, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Connect the Ledger device to your computer and unlock it by entering your device PIN."),(0,i.kt)("li",{parentName:"ol"},"Open the Casper app on the Ledger device as shown above."),(0,i.kt)("li",{parentName:"ol"},"While keeping the Casper app open, navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://cspr.live/sign-in"},"cspr.live/sign-in"),".")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/cspr-signin.png"),alt:"Sign into cspr.live",width:"800"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Connect")," button in the Ledger section.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/cspr-connect.png"),alt:"Choose to connect with Ledger",width:"800"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Connect to Ledger wallet")," button next.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/connect-ledger.png"),alt:"Connect to Ledger Wallet in CSPR Live",width:"800"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Select an account you want to use.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/connect-select-account.png"),alt:"Choose an account to connect",width:"800"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Your Ledger device is now connected to the block explorer, displaying your account details.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/account-connected.png"),alt:"Account connected",width:"800"})),(0,i.kt)("h2",{id:"view-account-details"},"Viewing Account Details"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("a",{parentName:"li",href:"https://cspr.live"},"cspr.live"),"."),(0,i.kt)("li",{parentName:"ol"},"Click on the account in the upper-right corner of the page.")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/view-account.png"),alt:"3-view-account",width:"800"}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"View Account")," button.")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/view-account-button.png"),alt:"6-view-account-button",width:"800"}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"You are presented with a page displaying details about your account. Check your account's main purse balance in the ",(0,i.kt)("strong",{parentName:"li"},"Liquid")," row under ",(0,i.kt)("strong",{parentName:"li"},"Total Balance"),".")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/account-details.png"),alt:"4-account-details",width:"800"}),(0,i.kt)("h2",{id:"receive-tokens"},"Receiving Tokens"),(0,i.kt)("p",null,"To receive tokens, you need to provide the sender with your account's public key. To find it, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the account details page as described ",(0,i.kt)("a",{parentName:"li",href:"#view-account-details"},"here")," and copy the public key in the ",(0,i.kt)("strong",{parentName:"li"},"Public Key")," row."),(0,i.kt)("li",{parentName:"ol"},"Alternatively, click on the drop-down menu on your account address.")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/view-account.png"),alt:"View account",width:"800"}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Copy Public Key")," button and share it with the sender.")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/copy-public-key.png"),alt:"Copy public key",width:"800"}),(0,i.kt)("h2",{id:"send-tokens"},"Sending Tokens"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("a",{parentName:"li",href:"https://cspr.live"},"cspr.live"),"."),(0,i.kt)("li",{parentName:"ol"},"Sign in with your Ledger device."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Wallet")," and then ",(0,i.kt)("strong",{parentName:"li"},"Transfer CSPR"),".")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/transfer-wallet.png"),alt:"5-transfer-wallet",width:"800"}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Fill in the details for the transfer.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/cspr-live/1-transfer-details.png"),alt:"1-transfer-details",width:"500"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Next")," button."),(0,i.kt)("li",{parentName:"ol"},"On the next page, click ",(0,i.kt)("strong",{parentName:"li"},"Confirm and transfer"),".")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/cspr-live/2-transfer-confirm.png"),alt:"2-transfer-confirm",width:"500"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Sign transaction")," page, click on the ",(0,i.kt)("strong",{parentName:"li"},"Sign with Ledger")," button.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/cspr-live/3-transfer-sign.png"),alt:"3-transfer-sign",width:"500"})),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Your Ledger hardware wallet will present you with transfer details. Verify the transfer details (txn hash, chain ID, source ",(0,i.kt)("strong",{parentName:"li"},"account"),", fee, target, and amount). Meanwhile, the block explorer will show this message:")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/cspr-live/3-transfer-submitted.png"),alt:"3-transfer-sign",width:"500"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Verify the transaction on your Ledger device")),(0,i.kt)("p",null,"Press the right button on your Ledger Device to review the transaction details (Amount and Address) until you see ",(0,i.kt)("strong",{parentName:"p"},'"Approve"'),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Verify the ",(0,i.kt)("strong",{parentName:"li"},"Txn hash")," - ensure it matches the value displayed on ",(0,i.kt)("a",{parentName:"li",href:"https://cspr.live"},"cspr.live"),".")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/3-txn-1.jpg"),alt:"3-txn-1",width:"400"})),(0,i.kt)("p",null,"The Txn hash value continues on a second screen."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/4-txn-2.jpg"),alt:"4-txn-2",width:"400"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"The next page displays transaction ",(0,i.kt)("strong",{parentName:"li"},"Type")," - for CSPR transfers, that will be ",(0,i.kt)("strong",{parentName:"li"},"Token transfer"),".")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/5-type.jpg"),alt:"5-type",width:"400"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Verify the ",(0,i.kt)("strong",{parentName:"li"},"Chain ID"),", which identifies the network to which you want to send the transaction.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/7-chain.jpg"),alt:"7-chain",width:"400"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Verify the ",(0,i.kt)("strong",{parentName:"li"},"Account"),", the account's public key initiating the transaction.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/8-account-1.jpg"),alt:"8-account-1",width:"400"})),(0,i.kt)("p",null,"The Account value continues on a second screen."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/9-account-2.jpg"),alt:"9-account-2",width:"400"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Verify the ",(0,i.kt)("strong",{parentName:"li"},"Fee"),". For CSPR token transfers, that value should be constant and equal to 100,000,000 motes = 0.1 CSPR.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/10-fee.jpg"),alt:"10-fee",width:"400"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Verify the ",(0,i.kt)("strong",{parentName:"li"},"Target"),", the recipient's public key. Compare this value with the one in the block explorer.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/11-target-1.jpg"),alt:"11-target-1",width:"400"})),(0,i.kt)("p",null,"The Target value continues on a second screen."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/12-target-2.jpg"),alt:"12-target-2",width:"400"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Verify the ",(0,i.kt)("strong",{parentName:"li"},"Amount")," you want to transfer.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/13-amount.jpg"),alt:"13-amount",width:"400"})),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"If you want to approve the transaction, click both buttons on the Ledger device while on the ",(0,i.kt)("strong",{parentName:"li"},"APPROVE")," screen.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/15-approve.jpg"),alt:"15-approve",width:"400"})),(0,i.kt)("p",null,"After approving the transaction with your Ledger hardware wallet, the ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live"},"cspr.live"),' block explorer will display a "Transfer completed" page.'),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/cspr-live/4-transfer-completed.png"),alt:"4-transfer-completed",width:"500"})),(0,i.kt)("p",null,"You can now check your account to see a list of all the completed transfers."))}h.isMDXComponent=!0}}]);