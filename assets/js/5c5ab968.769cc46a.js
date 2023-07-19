"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3212],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1473:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=r(3117),n=r(102),o=(r(7294),r(3905)),i=(r(4996),["components"]),l={title:"Inactive and Faulty Nodes"},s="Inactive vs. Faulty Validator Nodes",c={unversionedId:"operators/becoming-a-validator/inactive-vs-faulty",id:"operators/becoming-a-validator/inactive-vs-faulty",title:"Inactive and Faulty Nodes",description:"This page describes the differences between a validator node being considered inactive or faulty.",source:"@site/source/docs/casper/operators/becoming-a-validator/inactive-vs-faulty.md",sourceDirName:"operators/becoming-a-validator",slug:"/operators/becoming-a-validator/inactive-vs-faulty",permalink:"/operators/becoming-a-validator/inactive-vs-faulty",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/operators/becoming-a-validator/inactive-vs-faulty.md",tags:[],version:"current",lastUpdatedAt:1689780668,formattedLastUpdatedAt:"Jul 19, 2023",frontMatter:{title:"Inactive and Faulty Nodes"},sidebar:"operators",previous:{title:"Recovery",permalink:"/operators/becoming-a-validator/recovering"},next:{title:"Setting up Private Networks",permalink:"/operators/setup-network/"}},u={},d=[],p={toc:d},f="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(f,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"inactive-vs-faulty-validator-nodes"},"Inactive vs. Faulty Validator Nodes"),(0,o.kt)("p",null,"This page describes the differences between a validator node being considered inactive or faulty."),(0,o.kt)("p",null,"In the last block of each era ",(0,o.kt)("em",{parentName:"p"},"N"),", the consensus algorithm checks whether there are ",(0,o.kt)("em",{parentName:"p"},"any")," messages from your validator node in that era that have been received by most of the other validators. Only if there is no such message does your node get marked as ",(0,o.kt)("strong",{parentName:"p"},"inactive")," in that block."),(0,o.kt)("p",null,"Similarly, the consensus algorithm checks whether any two messages from your validator node contradict each other. If that is the case, it gets marked as ",(0,o.kt)("strong",{parentName:"p"},"faulty")," in that block. Usually, that means:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you got marked as ",(0,o.kt)("strong",{parentName:"li"},"inactive"),", your node probably crashed or was offline for the duration of one whole era, i.e., at least from when the era began until the era's last block was proposed."),(0,o.kt)("li",{parentName:"ul"},"If you got marked as ",(0,o.kt)("strong",{parentName:"li"},"faulty"),", you were probably running two nodes with the same validator key, or you restarted a node during the era and deleted its unit file.")),(0,o.kt)("p",null,"The auction contract is run when the block gets executed, as always at the end of the era. But if you were faulty or inactive, you are now evicted and don't participate in the auction anymore. You also don't receive any rewards for era ",(0,o.kt)("em",{parentName:"p"},"N"),". The auction determines the validator set for the era after the next (because ",(0,o.kt)("inlineCode",{parentName:"p"},"auction_delay")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," on mainnet), i.e., for era ",(0,o.kt)("em",{parentName:"p"},"N + 2"),". That means you will still be a validator (with a weight proportional to your stake) in the next era, ",(0,o.kt)("em",{parentName:"p"},"N + 1"),", but after that, you will not be a validator anymore, and your slot will be given to the next highest bidder."),(0,o.kt)("p",null,"And even in the next era, ",(0,o.kt)("em",{parentName:"p"},"N + 1"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are inactive, you won't be assigned leader slots or be allowed to propose any blocks. Your node will only vote on other proposers' blocks if it returns online and can still receive rewards. But, even if it comes back online in era ",(0,o.kt)("em",{parentName:"li"},"N + 1"),", it will get evicted for being offline in era ",(0,o.kt)("em",{parentName:"li"},"N"),"."),(0,o.kt)("li",{parentName:"ul"},"If you are faulty, all your messages will be ignored. You won't be able to propose blocks or vote for them and won't receive block rewards.")),(0,o.kt)("p",null,"In both cases, you remain evicted until you reactivate your bid, as described ",(0,o.kt)("a",{parentName:"p",href:"/operators/becoming-a-validator/recovering"},"here"),"."))}m.isMDXComponent=!0}}]);