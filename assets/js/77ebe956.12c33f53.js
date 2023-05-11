"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7581],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||g[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1533:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return g}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=n(4996),l=["components"],s={},u="Undelegating with a Block Explorer",c={unversionedId:"users/undelegate-ui",id:"users/undelegate-ui",title:"Undelegating with a Block Explorer",description:"If you want to undelegate tokens from a validator, you can do so at any time. Note that undelegation costs approximately 0.5 CSPR.",source:"@site/source/docs/casper/users/undelegate-ui.md",sourceDirName:"users",slug:"/users/undelegate-ui",permalink:"/users/undelegate-ui",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/users/undelegate-ui.md",tags:[],version:"current",lastUpdatedAt:1683730485,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{},sidebar:"users",previous:{title:"Delegating Tokens with a Block Explorer",permalink:"/users/delegate-ui"},next:{title:"Ledger Setup with Casper",permalink:"/users/ledger-setup"}},p={},g=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Accessing the Undelegation Feature",id:"accessing-the-undelegation-feature",level:2},{value:"Stepping through the Undelegation Process",id:"stepping-through-the-undelegation-process",level:2}],d={toc:g},h="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"undelegating-with-a-block-explorer"},"Undelegating with a Block Explorer"),(0,o.kt)("p",null,"If you want to undelegate tokens from a validator, you can do so at any time. Note that undelegation costs approximately 0.5 CSPR."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"This guide assumes that you have previously delegated tokens to a validator using a ",(0,o.kt)("a",{parentName:"p",href:"/users/delegate-ui"},"block explorer")," or the ",(0,o.kt)("a",{parentName:"p",href:"/developers/cli/delegate"},"Casper client"),"."),(0,o.kt)("h2",{id:"accessing-the-undelegation-feature"},"Accessing the Undelegation Feature"),(0,o.kt)("p",null,"You can access the undelegation functionality in three ways."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Option 1:")," Click ",(0,o.kt)("strong",{parentName:"p"},"Wallet")," from the top navigation menu and then click ",(0,o.kt)("strong",{parentName:"p"},"Undelegate Stake"),"."),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/undelegate/1.wallet-undelegate.png"),alt:"Undelegate from Wallet",width:"150"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Option 2:")," Click ",(0,o.kt)("strong",{parentName:"p"},"Validators")," from the top navigation menu. Using the validators table, find the validator you wish to undelegate from, and click the ",(0,o.kt)("strong",{parentName:"p"},"Undelegate Stake")," button."),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/undelegate/2.validator-undelegate.png"),alt:"Undelegate from Validator"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Option 3:")," Open your account details and select the ",(0,o.kt)("strong",{parentName:"p"},"Delegations")," tab. Click the ",(0,o.kt)("strong",{parentName:"p"},"Undelegate")," button next to the validator from whom you wish to undelegate."),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/undelegate/3.account-undelegate.png"),alt:"Undelegate from Account View"}),(0,o.kt)("h2",{id:"stepping-through-the-undelegation-process"},"Stepping through the Undelegation Process"),(0,o.kt)("p",null,'The following instructions will take you through the undelegation process, starting with the "Undelegation details" screen.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1 - Undelegation details")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Specify the validator from whom you want to undelegate your tokens if you have reached this screen using the Wallet drop-down menu. The search box will automatically show you the validators with whom you have staked. Otherwise, verify the pre-populated key in the Validator field."),(0,o.kt)("li",{parentName:"ol"},"Enter the amount of Casper tokens you want to undelegate."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Next"),".")),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/undelegate/4.undelegate-details.png"),alt:"Undelegation details",width:"400"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2 - Confirm the undelegation")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Review the undelegation details."),(0,o.kt)("li",{parentName:"ol"},"If everything looks correct, click ",(0,o.kt)("strong",{parentName:"li"},"Confirm and undelegate stake"),". If you wish to make changes, return to the previous screen.")),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/undelegate/5.confirm-undelegation.png"),alt:"Confirm undelegation",width:"400"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3 - Sign the undelegation")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Sign with Casper Wallet")," to sign the undelegation.")),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/undelegate/6.sign-undelegation.png"),alt:"Sign the undelegation",width:"400"}),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Once the Casper Wallet opens, ",(0,o.kt)("strong",{parentName:"li"},"check the deploy hash"),'. Ensure the deploy hash in the "Signature Request" window matches the deploy hash in the "Sign undelegation" window before continuing.')),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/undelegate/7.confirm-hash.png"),alt:"Confirm deploy hash"}),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Sign")," in the Signature Request window to finalize the undelegation. The stake undelegation initiates as soon as the corresponding deploy is signed. Here is the expected output:")),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/undelegate/8.undelegation-confirmed.png"),alt:"Undelegation confirmed",width:"400"}),(0,o.kt)("p",null,'It may take 1-2 minutes for the undelegation details to become available. Click "Deploy Details" for more information.'),(0,o.kt)("p",null,"Note that your undelegated tokens will appear in your account automatically after a 7-era delay of approximately 14 hours."))}m.isMDXComponent=!0}}]);