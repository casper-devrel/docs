"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4400],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(a),d=r,h=g["".concat(s,".").concat(d)]||g[d]||p[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5011:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return g}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=a(4996),l=["components"],s={},c="Delegating Tokens with a Block Explorer",u={unversionedId:"users/delegate-ui",id:"users/delegate-ui",title:"Delegating Tokens with a Block Explorer",description:"Introduction",source:"@site/source/docs/casper/users/delegate-ui.md",sourceDirName:"users",slug:"/users/delegate-ui",permalink:"/users/delegate-ui",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/users/delegate-ui.md",tags:[],version:"current",lastUpdatedAt:1677858345,formattedLastUpdatedAt:"3/3/2023",frontMatter:{},sidebar:"users",previous:{title:"Block Explorers on Casper Network",permalink:"/users/block-explorer"},next:{title:"Undelegating with a Block Explorer",permalink:"/users/undelegate-ui"}},p={},g=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Reviewing your Account",id:"account-review",level:3},{value:"Accessing the Delegation Feature",id:"delegation-access",level:2},{value:"Stepping through the Delegation Process",id:"stepping-through-the-delegation-process",level:2},{value:"Video Tutorial",id:"video-tutorial",level:2}],d={toc:g};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"delegating-tokens-with-a-block-explorer"},"Delegating Tokens with a Block Explorer"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This tutorial covers how to delegate Casper tokens to a validator on the network."),(0,o.kt)("p",null,"Casper and other Proof-of-Stake protocols allow token holders to earn rewards and participate in the protocol through a mechanism called ",(0,o.kt)("strong",{parentName:"p"},"delegation")," or ",(0,o.kt)("strong",{parentName:"p"},"staking"),". We will use these terms interchangeably in this guide. See the ",(0,o.kt)("a",{parentName:"p",href:"/staking"},"Staking Key Concepts")," page for more details about the differences."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To stake tokens with a validator, you must create an account with CSPR tokens in its main purse. One option is to use the ",(0,o.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/casper-signer/djhndpllfiibmcdbnmaaahkhchcoijce"},"Casper Signer")," by following ",(0,o.kt)("a",{parentName:"li",href:"https://docs.cspr.community/docs/user-guides/SignerGuide.html"},"the Signer Guide"),"."),(0,o.kt)("li",{parentName:"ol"},"You need to ",(0,o.kt)("a",{parentName:"li",href:"/users/funding-from-exchanges"},"fund the account's main purse")," to delegate tokens."),(0,o.kt)("li",{parentName:"ol"},"Connect to a block explorer to set up the delegation. This guide uses ",(0,o.kt)("a",{parentName:"li",href:"https://cspr.live/"},"cspr.live")," and the Casper Signer."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#account-review"},"Review your account")," before starting the process."),(0,o.kt)("li",{parentName:"ol"},"Review the current ",(0,o.kt)("a",{parentName:"li",href:"/staking#delegation-fees"},"delegation fees")," and ensure you have extra CSPR in your account's main purse apart from the amount you are delegating. Otherwise, the delegation might fail.")),(0,o.kt)("h3",{id:"account-review"},"Reviewing your Account"),(0,o.kt)("p",null,"Once connected to the Casper blockchain, we recommend reviewing the active account you wish to use for delegating tokens, especially these fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"Liquid Account Balance"),", representing the tokens you have for immediate use"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"Delegated Account Balance"),", representing the delegated tokens already staked with validators on the network"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"Delegations")," tab, listing the validators to whom you have delegated tokens")),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/staking/2.delegations.png"),alt:"Account and delegations details",width:"800"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"Staking Rewards")," tab, showing the rewards received in each era")),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/staking/3.rewards.png"),alt:"Account and rewards",width:"800"}),(0,o.kt)("h2",{id:"delegation-access"},"Accessing the Delegation Feature"),(0,o.kt)("p",null,"You can access the delegation functionality in two ways."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Option 1:")," Click ",(0,o.kt)("strong",{parentName:"p"},"Wallet")," from the top navigation menu and then click ",(0,o.kt)("strong",{parentName:"p"},"Delegate"),". In the next screen, you will need to specify the validator's public key or search for a validator."),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/staking/4.wallet-delegate.png"),alt:"Delegate from the Wallet",width:"150"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Option 2:")," Click ",(0,o.kt)("strong",{parentName:"p"},"Validators")," from the top navigation menu. From the validators table, click on any validator to access their details. Once you find the validator to whom you want to delegate tokens, click the ",(0,o.kt)("strong",{parentName:"p"},"Delegate")," button. The next screen will have the validator's public key pre-populated."),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/staking/5.validator-delegate.png"),alt:"Delegate from a Validator"}),(0,o.kt)("h2",{id:"stepping-through-the-delegation-process"},"Stepping through the Delegation Process"),(0,o.kt)("p",null,'The following instructions will take you through the delegation process, starting with the "Delegation details" screen.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1 - Delegation details")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Specify the validator's public key if you have reached this screen using the Wallet drop-down menu. Otherwise, verify the pre-populated key in the Validator field."),(0,o.kt)("li",{parentName:"ol"},"Enter the amount of CSPR you wish to delegate. Remember to account for the transaction fee."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Next"),".")),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/staking/6.delegation-details.png"),alt:"Delegation details",width:"400"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2 - Confirm the delegation")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Review the details of the transaction."),(0,o.kt)("li",{parentName:"ol"},"If everything is correct, click ",(0,o.kt)("strong",{parentName:"li"},"Confirm and delegate stake"),". If you wish to make changes, return to the previous screen.")),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/staking/7.confirm-delegation.png"),alt:"Confirm delegation details",width:"400"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3 - Sign the delegation")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sign the transaction by clicking ",(0,o.kt)("strong",{parentName:"li"},"Sign with Casper Signer"),".")),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/staking/8.sign-delegation.png"),alt:"Sign delegation",width:"400"}),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Once the Signer app window opens, ",(0,o.kt)("strong",{parentName:"li"},'make sure that the deploy hash in the "Signer window" matches the deploy hash in the "Sign delegation" window before continuing'),".")),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/staking/9.signer-window.png"),alt:"Signer window"}),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Sign")," in the Signer window to finalize the transaction. You have completed the delegation.")),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/staking/10.completed-delegation.png"),alt:"Completed delegation",width:"400"}),(0,o.kt)("p",null,"The delegation transaction initiates as soon as the corresponding deploy is signed. You can review the details and status of the deploy by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Deploy Details")," highlighted above."),(0,o.kt)("p",null,"Remember to ",(0,o.kt)("a",{parentName:"p",href:"/staking/#monitoring-rewards"},"Monitor your Stake"),". Staking rewards are delivered to your account's main purse after each era, which is currently set to 2 hours. Note that it may take up to 2 eras (4 hours) for the first reward to appear after delegation. The rewards are automatically added to your current stake on the corresponding validator. You may view them under the ",(0,o.kt)("em",{parentName:"p"},"Rewards")," tab on your account page on ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/"},"https://cspr.live/"),"."),(0,o.kt)("p",null,"If you want to undelegate your tokens, you can do so at any time. See the ",(0,o.kt)("a",{parentName:"p",href:"/users/undelegate-ui"},"Undelegation Guide")," for details."),(0,o.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,o.kt)("p",null,"This video guide covers the process at a high level, but we recommend following the written tutorial to go through the process step by step."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/cR3v8AthlkQ",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}h.isMDXComponent=!0}}]);