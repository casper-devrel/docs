"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3854],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6910:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={title:"Rewards Design"},l="Network Participation Rewards",c={unversionedId:"concepts/design/rewards",id:"concepts/design/rewards",title:"Rewards Design",description:"Validators receive rewards for participating in consensus and thus securing the network. Delegators also receive rewards indirectly by staking with a validator. This page serves as an introduction to how the rewards are calculated and distributed. For more details, refer to the corresponding CEP.",source:"@site/source/docs/casper/concepts/design/rewards.md",sourceDirName:"concepts/design",slug:"/concepts/design/rewards",permalink:"/docs/concepts/design/rewards",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/concepts/design/rewards.md",tags:[],version:"current",lastUpdatedAt:1714007780,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Rewards Design"},sidebar:"concepts",previous:{title:"Highway Consensus",permalink:"/docs/concepts/design/highway"},next:{title:"Reading and Writing Data",permalink:"/docs/concepts/design/reading-and-writing-to-the-blockchain"}},d={},p=[{value:"Calculating Rewards",id:"calculating-rewards",level:2},{value:"Chainspec settings for calculating rewards",id:"chainspec-settings-for-calculating-rewards",level:3},{value:"Rewards distribution summary",id:"rewards-distribution-summary",level:3}],u={toc:p},h="wrapper";function g(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"network-participation-rewards"},"Network Participation Rewards"),(0,i.kt)("p",null,"Validators receive rewards for participating in consensus and thus securing the network. Delegators also receive rewards indirectly by staking with a validator. This page serves as an introduction to how the rewards are calculated and distributed. For more details, refer to the corresponding CEP. "),(0,i.kt)("p",null,"Like other Proof-of-Stake chains, a Casper network rewards validators for participating in building a linear chain of blocks, each containing ordered state changes and ensuring that the entire ecosystem of validators, builders, and users eventually achieve common knowledge of the chain's history. External, non-validator participants in the ecosystem can thus have a high degree of confidence on the canonical history of the blockchain's state, thus making the blockchain economically useful."),(0,i.kt)("p",null,"The network uses a new reward scheme that does not depend on the details of the consensus protocol and is compatible with both ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/design/zug"},"Zug")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/design/highway"},"Highway"),". The current reward scheme has the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rewards are proportional to a validator's weight on average."),(0,i.kt)("li",{parentName:"ul"},"The reward scheme incentivizes cooperation."),(0,i.kt)("li",{parentName:"ul"},"Rewards are distributed at the end of an era for all blocks in that era and several eligible blocks from the previous era."),(0,i.kt)("li",{parentName:"ul"},"Reward calculations depend only on the linear structure of the blockchain and published finality signatures, rather than any internal details of the consensus protocol."),(0,i.kt)("li",{parentName:"ul"},"Reward calculations assume a known constant token supply inflation with nominal platform operation.")),(0,i.kt)("p",null,"Previously, with Highway, the reward scheme incentivized block production and participation in their finalization. Unfortunately, this scheme was highly coupled with the consensus protocol and unsuitable for adaptation with the Zug consensus. The current scheme calculates rewards after blocks have been finalized, as described below."),(0,i.kt)("h2",{id:"calculating-rewards"},"Calculating Rewards"),(0,i.kt)("p",null,'The execution engine calculates rewards for block production and finality signature generation and distribution in each switch block. Finality signatures are produced after a block has been finalized by consensus. Thus, rewards are independent of the consensus algorithm used. Block proposers collect those finality signatures and include them in future blocks. The rewards scheme allows blocks to cite finality signatures for several past blocks so that validators can agree on which finality signatures have been produced and should be rewarded. This mechanism to "look back" is necessary because signatures cannot be distributed instantly.'),(0,i.kt)("p",null,"Rewards are divided into these categories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Block rewards"),": These rewards are received for each proposed block that is finalized. They incentivize timely participation in building the chain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Finality signature rewards"),": These rewards are received for collecting finality signatures for each block and generating a finality signature to sign a block. They incentivize the creation, propagation and publication of finality signatures, which is critical in establishing common knowledge of the canonical chain.")),(0,i.kt)("p",null,"In each round, a total reward pool is shared among all participating validators proportionally to their weight, as long as all validators fully participate in the processes that are rewarded by this mechanism. These processes are block creation, signature creation, signature propagation and signature publication as part of block proposals. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"round_seigniorage_rate")," setting in the chainspec determines the total reward pool for a block. This value, along with the current total supply and minimum round length, is used to compute the full allocation of rewards for a particular block. The rate itself is set to result in a target annual inflation, provided validators fully participate in the rewardable processes described above."),(0,i.kt)("p",null,'Each switch block triggers a reward calculation. To account for potential network lag delaying the timely arrival of signatures for finalized blocks, the calculation "looks back" into previous eras. In particular, this enables rewards for switch blocks, which was impossible with the prior Highway-specific calculation. The number of prior blocks to look up is specified using the ',(0,i.kt)("inlineCode",{parentName:"p"},"signature_rewards_max_delay")," setting in the chainspec."),(0,i.kt)("p",null,"Blocks carry information on their proposer and the finality signatures collected for several past blocks, the depth being determined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"signature_rewards_max_delay")," parameter. Global state contains data on token supply and validator weights as part of the Mint and Auction states. Based on these inputs, the rewards are calculated according to a formula. Rewards are designed to be proportional to weight on average, as long as blocks are created and the finality signatures are propagated and published in a timely manner. "),(0,i.kt)("p",null,"Validators are motivated to produce, propagate and publish (i.e., include in the block body) finality signatures as quickly as possible. If they do not include a finality signature in a block, the next validator can include it in their block and get the collection fee."),(0,i.kt)("h3",{id:"chainspec-settings-for-calculating-rewards"},"Chainspec settings for calculating rewards"),(0,i.kt)("p",null,"Each Casper network chainspec contains 4 settings related to calculating rewards:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"finality_signature_proportion"),": The proportion of baseline rewards going to reward finality signatures, rather than block proposal rewards."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"finders_fee"),": The proportion of the rewards allocated to finality signatures that are due for signature publication in a block proposal."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signature_rewards_max_delay"),": The number of prior blocks to include for the reward calculation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"round_seigniorage_rate"),": Setting that calculates the fraction of the total supply that will constitute the reward pool for every round.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Expand to see sample values")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"# The split in finality signature rewards between block producer and participating signers.\nfinders_fee = [1, 5]\n# The proportion of baseline rewards going to reward finality signatures specifically.\nfinality_signature_proportion = [1, 2]\n# Lookback interval indicating which past block we are looking at to reward.\nsignature_rewards_max_delay = 3\n...\n# Round seigniorage rate represented as a fraction of the total supply.\n#\n# Annual issuance: 8%\n# Minimum block time: 2^14 milliseconds\n# Ticks per year: 31536000000\n#\n# (1+0.08)^((2^14)/31536000000)-1 is expressed as a fractional number below\n# Python:\n# from fractions import Fraction\n# Fraction((1 + 0.08)**((2**14)/31536000000) - 1).limit_denominator(1000000000)\nround_seigniorage_rate = [7, 175070816]\n"))),(0,i.kt)("h3",{id:"rewards-distribution-summary"},"Rewards distribution summary"),(0,i.kt)("p",null,"The following steps summarize the rewards distribution mechanism."),(0,i.kt)("p",null,"Each round has a reward pool calculated from the ",(0,i.kt)("inlineCode",{parentName:"p"},"round_seigniorage_rate")," chainspec parameter and the current total supply for the relevant era."),(0,i.kt)("p",null,"In each round, the reward pool is split into two parts for block proposals and finality signature rewards, based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"finality_signature_proportion")," chainspec parameter. "),(0,i.kt)("p",null,"The amount allocated for finality signatures is split further into two parts: creating and publishing finality signatures. The split is configurable in the chainspec using the ",(0,i.kt)("inlineCode",{parentName:"p"},"finders_fee")," chainspec parameter. "),(0,i.kt)("p",null,"For each finality signature:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The creator gets a portion of what was allocated for creating signatures, in proportion to relative consensus weight."),(0,i.kt)("li",{parentName:"ul"},"The block proposer gets a portion corresponding to the ",(0,i.kt)("inlineCode",{parentName:"li"},"finders_fee")," chainspec parameter, scaled by the total collected signature creator weight divided by the total weight in the relevant era.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/image/design/rewards-pot.png",alt:"Pie chart showing how rewards are split",width:"300"})),(0,i.kt)("p",null,"The rewards calculation takes place at the end of an era. In addition to rewarding everything in that era, the algorithm also looks back into blocks from the previous era, depending on the ",(0,i.kt)("inlineCode",{parentName:"p"},"signature_rewards_max_delay")," parameter, to compensate for the delay in creating and distributing finality signatures."))}g.isMDXComponent=!0}}]);