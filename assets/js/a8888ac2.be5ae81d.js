"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2993],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=o,m=u["".concat(l,".").concat(c)]||u[c]||h[c]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},89693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={title:"Zug Consensus"},i="Simple and Fast Consensus with Zug",s={unversionedId:"concepts/design/zug",id:"concepts/design/zug",title:"Zug Consensus",description:"The Casper node was designed with a pluggable consensus protocol in mind. So far the only choice was Highway. Casper 2.0.0 has added Zug, a much simpler consensus protocol.",source:"@site/source/docs/concepts/design/zug.md",sourceDirName:"concepts/design",slug:"/concepts/design/zug",permalink:"/next/concepts/design/zug",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/concepts/design/zug.md",tags:[],version:"current",lastUpdatedAt:1719861245,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{title:"Zug Consensus"},sidebar:"concepts",previous:{title:"Consensus in a Casper Network",permalink:"/next/concepts/design/consensus"},next:{title:"Highway Consensus",permalink:"/next/concepts/design/highway"}},l={},p=[{value:"How Zug Works",id:"how-zug-works",level:2},{value:"Some Advantages of Zug",id:"some-advantages-of-zug",level:2},{value:"Comparison with Highway",id:"comparison-with-highway",level:2},{value:"Block Rewards",id:"block-rewards",level:3},{value:"Read the Paper",id:"read-the-paper",level:2}],d={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"simple-and-fast-consensus-with-zug"},"Simple and Fast Consensus with Zug"),(0,o.kt)("p",null,"The Casper node was designed with a pluggable consensus protocol in mind. So far the only choice was Highway. Casper 2.0.0 has added Zug, ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2205.06314"},"a much simpler consensus protocol"),"."),(0,o.kt)("p",null,"The Zug protocol requires that at most one-third of the validator weight could be attributed to faulty validators. It also assumes that there exists an upper bound for the network delay, which is the duration for a correct validator to deliver a message. The value of the upper bound may be unknown, but it exists. Under these conditions, all correct nodes will reach agreement on a chain of finalized blocks."),(0,o.kt)("p",null,"Of course, all nodes in a network have to run the same protocol to work together, but when starting a new network or upgrading an existing one, either ",(0,o.kt)("inlineCode",{parentName:"p"},"Highway")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Zug")," can now be selected as the ",(0,o.kt)("inlineCode",{parentName:"p"},"consensus_protocol")," in the chainspec file. The Casper Mainnet will switch to Zug."),(0,o.kt)("h2",{id:"how-zug-works"},"How Zug Works"),(0,o.kt)("p",null,"In every round, the designated leader can sign a ",(0,o.kt)("strong",{parentName:"p"},"proposal message")," to suggest a block. The proposal also points to an earlier round in which the parent block was proposed."),(0,o.kt)("p",null,"Each validator then signs an ",(0,o.kt)("strong",{parentName:"p"},"echo message")," with the proposal's hash. Correct validators only sign one echo per round, so at most one proposal can get echo messages signed by a quorum. A ",(0,o.kt)("strong",{parentName:"p"},"quorum")," is a set of validators whose total weight is greater than ",(0,o.kt)("inlineCode",{parentName:"p"},"(n + f) / 2"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," is the total weight of all validators and ",(0,o.kt)("inlineCode",{parentName:"p"},"f")," is the maximum allowed total weight of faulty validators. Thus, any two quorums always have a correct validator in common. As long as ",(0,o.kt)("inlineCode",{parentName:"p"},"n > 3f"),", the correct validators will constitute a quorum since ",(0,o.kt)("inlineCode",{parentName:"p"},"(n + f) / 2 < n - f"),"."),(0,o.kt)("p",null,"The proposal is accepted if there is a quorum and some other conditions are met (see below). Now, the next round's leader can make a new proposal that uses this proposal as a parent."),(0,o.kt)("p",null,"Each validator observing the proposal in time signs a ",(0,o.kt)("inlineCode",{parentName:"p"},"Vote(true)")," message. If validators time out while waiting, they sign ",(0,o.kt)("inlineCode",{parentName:"p"},"Vote(false)")," message instead. If a quorum signs ",(0,o.kt)("em",{parentName:"p"},"true"),", the round is committed and the proposal and all its ancestors are finalized. If a quorum signs ",(0,o.kt)("em",{parentName:"p"},"false"),", the round is ",(0,o.kt)("strong",{parentName:"p"},"skippable"),", meaning that the next round's leader can propose a block with a parent from an earlier round. Correct validators only sign either ",(0,o.kt)("em",{parentName:"p"},"true")," or ",(0,o.kt)("em",{parentName:"p"},"false"),", so a round can be either committed or skippable, but not both."),(0,o.kt)("p",null,"If there is no accepted proposal, all correct validators will eventually vote ",(0,o.kt)("em",{parentName:"p"},"false"),", so the round becomes skippable. This is what makes the protocol ",(0,o.kt)("strong",{parentName:"p"},"live"),". The next leader will eventually be allowed to make a proposal because either there is an accepted proposal that can be the parent, or the round will eventually be skippable, and an earlier round's proposal can be used as a parent. If the timeout is long enough, the correct proposers' blocks will usually get finalized."),(0,o.kt)("p",null,"For a proposal to be accepted, the parent proposal must also be accepted, and all rounds between the parent and the current round must be skippable. This is what makes the protocol ",(0,o.kt)("strong",{parentName:"p"},"safe"),". If two rounds are committed, their proposals must be ancestors of each other because they are not skippable. Thus, the protocol cannot finalize two conflicting blocks."),(0,o.kt)("p",null,"Of course, there is also a first block. Whenever all earlier rounds are skippable (particularly the first round), the leader may propose a block with no parent."),(0,o.kt)("p",null,"Every new signed message is optimistically sent directly to all peers. We want to guarantee that it is eventually seen by all validators, even if they are not fully connected. This is achieved via a pull-based randomized gossip mechanism, where a ",(0,o.kt)("inlineCode",{parentName:"p"},"SyncRequest")," message containing information about a random part of the local protocol state is periodically sent to a random peer. The peer compares that to its local state and responds with all the signed messages that it has recorded."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"The Zug protocol can be summarized as follows:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"In every round, the round leader proposes a new block, ",(0,o.kt)("inlineCode",{parentName:"li"},"B"),"."),(0,o.kt)("li",{parentName:"ul"},"Every validator creates and broadcasts an ",(0,o.kt)("em",{parentName:"li"},"echo")," message, with a signature of ",(0,o.kt)("inlineCode",{parentName:"li"},"B"),"."),(0,o.kt)("li",{parentName:"ul"},"When a suitable block ",(0,o.kt)("inlineCode",{parentName:"li"},"B")," has received echoes from 67% of the validators:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The next round begins. The next leader can propose a child of ",(0,o.kt)("inlineCode",{parentName:"li"},"B"),"."),(0,o.kt)("li",{parentName:"ul"},"Every validator signs and broadcasts a ",(0,o.kt)("em",{parentName:"li"},"vote")," message, voting ",(0,o.kt)("inlineCode",{parentName:"li"},"yes"),"."))),(0,o.kt)("li",{parentName:"ul"},"If this does not happen before a timeout, the validators vote ",(0,o.kt)("inlineCode",{parentName:"li"},"no")," instead.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If there are ",(0,o.kt)("inlineCode",{parentName:"li"},"no")," votes from 67%, the next round begins, too.\nThe next leader can propose a child from an earlier block and skip this round."))),(0,o.kt)("li",{parentName:"ul"},"If there are ",(0,o.kt)("inlineCode",{parentName:"li"},"yes")," votes from 67%, ",(0,o.kt)("inlineCode",{parentName:"li"},"B")," is finalized and gets executed, together with all its ancestors. (Usually, the next round has already started at this point.)"))),(0,o.kt)("p",null,"Notice that proposals, votes, and echoes are broadcast, so if one correct node receives a message, all nodes will eventually receive it. An honest validator sends only one echo or vote per round. So, unless 34% of validators double-sign, at most one block per round gets 67% echoes, and no finalized block can ever be skipped, ensuring safety. As long as there are 67% of echoes for a proposal, the next round begins and Zug doesn't get stuck. If there are not, everyone votes ",(0,o.kt)("inlineCode",{parentName:"p"},"no"),", and the next round also begins."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Expand to see a simple example")),(0,o.kt)("p",null,"Let's review a simple scenario demonstrating the Zug consensus. The example shows five rounds with a different leader and nodes voting on a card suit. The bottom row indicates whether or not the round was finalized. Notice that round 5 was the first finalized round."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/image/design/zug-example.png",alt:"Zug Example"})),(0,o.kt)("p",null,"In round 1, we had a leader who proposed ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2665"),", but was slow, so the other nodes timed out and voted ",(0,o.kt)("inlineCode",{parentName:"p"},"no.")," The first round had a proposal and was skippable, but nothing was finalized. "),(0,o.kt)("p",null,"In round 2, the second proposer saw ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2665")," and proposed ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2663")," as a child of ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2665"),". Some nodes voted ",(0,o.kt)("inlineCode",{parentName:"p"},"yes"),", and some timed out and voted ",(0,o.kt)("inlineCode",{parentName:"p"},"no"),". So, round 2 will never output anything because there wasn't a decision."),(0,o.kt)("p",null,"In round 3, the leader proposed ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2666")," as a child of ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2663"),". Assuming the leader was still too slow, everyone voted ",(0,o.kt)("inlineCode",{parentName:"p"},"no"),", and round 3 became skippable even though it had a proposal."),(0,o.kt)("p",null,"In round 4, the proposer might have crashed or been malicious, so everyone timed out and voted ",(0,o.kt)("inlineCode",{parentName:"p"},"no"),"."),(0,o.kt)("p",null,"In round 5, the leader didn't see the ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2666")," proposal from round 3 but saw the ",(0,o.kt)("inlineCode",{parentName:"p"},"no")," decision. So, from their perspective, rounds 3 and 4 were skippable and had no proposals. Thus, the leader in round 5 proposed ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2660")," as a child of ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2663"),". ",(0,o.kt)("strong",{parentName:"p"},"Notice that the algorithm encountered a fork"),". Regardless, everyone voted ",(0,o.kt)("inlineCode",{parentName:"p"},"yes"),", and round 5 was finalized. I.e., at that moment, ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2665"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2663"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2660")," all become finalized and executed in that order. As a result, every future proposer needs to propose children of this round."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important Notes:")),(0,o.kt)("p",null,"Even proposals from rounds with a quorum of ",(0,o.kt)("inlineCode",{parentName:"p"},"no")," votes can become finalized indirectly."),(0,o.kt)("p",null,"If a round is neither finalized nor skippable, the round will likely be finalized at some point in the future. When one-third of the network's weight votes ",(0,o.kt)("inlineCode",{parentName:"p"},"yes"),", a proposal with a quorum of echoes is formed. Consequently, all other honest nodes will eventually see this quorum of echoes and the accepted proposal, which will serve as a parent in future rounds."),(0,o.kt)("p",null,"Nodes vote ",(0,o.kt)("inlineCode",{parentName:"p"},"yes")," when they have a quorum of echoes, and all the ancestors of that proposal have a quorum of echoes. Also, those ancestors have a quorum of echoes, and the rounds with no ancestors all have a quorum of ",(0,o.kt)("inlineCode",{parentName:"p"},"no")," votes (being skippable)."),(0,o.kt)("p",null,"The algorithm will always produce a result in at least one of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Accepted proposal")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Finalized round")," rows. If a proposal doesn't get accepted in a round, everyone times out and votes ",(0,o.kt)("inlineCode",{parentName:"p"},"no"),". Otherwise, a proposal is visible to someone with a quorum of votes and will eventually be visible to everyone.")),(0,o.kt)("h2",{id:"some-advantages-of-zug"},"Some Advantages of Zug"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Apart from the leader, who has to send the proposed block, each validator node broadcasts only two tiny messages in each round, making the communication overhead very small."),(0,o.kt)("li",{parentName:"ul"},"Unlike in Highway and Practical Byzantine Fault Tolerance (PBFT), and similar to pipelined protocols like HotStuff, only one round of messages (the echoes) is needed for the next leader to propose a block, reducing the delay between a block and its child."),(0,o.kt)("li",{parentName:"ul"},"But ",(0,o.kt)("em",{parentName:"li"},"unlike")," HotStuff, Zug can finalize a block without waiting for its child or grandchild. And, unlike Highway, it does so without waiting for any timeout. Even if a network is configured to produce only one block per minute, every block gets finalized within seconds, as fast as the network connections allow."),(0,o.kt)("li",{parentName:"ul"},"Zug's technical description is more flexible than Highway's, giving us a family of related, correct implementations from which to choose.")),(0,o.kt)("h2",{id:"comparison-with-highway"},"Comparison with Highway"),(0,o.kt)("p",null,"Unlike Highway, Zug does not use a communication history DAG. Highway sends larger messages due to citing and is slower. Zug does not have any notion of citing units, as does Highway, and relies on exchanging signed messages. On the other hand, Highway allows for more fine-grained ",(0,o.kt)("a",{parentName:"p",href:"#block-rewards"},"block rewards"),"."),(0,o.kt)("p",null,"With Zug, finality happens after nodes constituting two-thirds of the network's total weight vote ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," for a round in which the block was proposed or a later round that has this one as an ancestor. Highways' criterion for detecting finality is the presence of a pattern of messages called a ",(0,o.kt)("inlineCode",{parentName:"p"},"Summit.")," Summits preserve the advantage of tunable fault tolerance while being detected in polynomial time. Both ways of detecting finality are improvements over previous CBC Casper finality criteria, which were more difficult to attain and computationally more expensive to detect."),(0,o.kt)("p",null,"Highway and Zug offer flexibility in terms of fault tolerance thresholds. Highway allows different clients to follow the protocol with varying thresholds, each with its own balance between security and latency. However, if a sufficient number of validators are online, Zug demonstrates lower latency than Highway at any threshold. This is because Zug does not have predefined, rigid values for the round length, and its design allows the network to adapt to actual delays. If delays occur, block times may vary. Otherwise, blocks should appear as soon as they are finalized. Highway has a defined minimum round length, and the round lengths have to be powers of two times that minimum. Zug has a defined minimum round length, but a round can finish anytime as soon as enough messages are successfully exchanged. So, with Zug, there is no need to wait for a power of two times the minimum if the actual time falls somewhere between."),(0,o.kt)("p",null,"Highway is a much more complicated protocol than Zug. Implementing it takes more than twice as many lines of code. Also, Highway's proof of correctness has proved more difficult to verify than Zug's. Zug will make it easier for third parties to create compatible node software that works with the Casper node."),(0,o.kt)("p",null,"Using Zug consensus and smaller messages, the network could scale to a larger number of validators."),(0,o.kt)("h3",{id:"block-rewards"},"Block Rewards"),(0,o.kt)("p",null,"Using a DAG in Highway makes fine-grained information about the validators' behavior available temporarily in the protocol state, so block rewards can be tuned to incentivize full participation in the consensus protocol. However, this does not apply at the end of each era. Any message sent after the era's last block was proposed cannot be taken into account, even though these messages are still needed to finalize that block. And this granularity comes at a cost: Highway messages are relatively big."),(0,o.kt)("p",null,"The current system does not reward finality signatures, which are arguably the most important outcome. The signatures are the user-visible proof, signed by the validators, that an executed block is correct."),(0,o.kt)("p",null,"In Zug, messages are much smaller, so a smaller incentive is needed to send them."),(0,o.kt)("p",null,"Casper 2.0.0 will distribute a configurable fraction of the seigniorage as a reward for finality signatures and the rest as a simple reward for each block, both proportionally to the validators' stakes."),(0,o.kt)("p",null,"This new reward system is simpler, fairer, predictable, and transparent. It will give equal weight to all blocks (including at the end of an era), but it will not take into account every single consensus message."),(0,o.kt)("h2",{id:"read-the-paper"},"Read the Paper"),(0,o.kt)("p",null,"Here, we describe Zug, an implementation of the ideas from our paper ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2205.06314"},"From Weakly-terminating Binary Agreement and Reliable Broadcast to Atomic Broadcast"),". The paper, however, contains a much more general algorithm parameterized by the two subprotocols named in the title: Reliable Broadcast and Weakly-terminating Binary Agreement. In our specialization of this algorithm made for the Casper blockchain, the ",(0,o.kt)("em",{parentName:"p"},"echo")," messages are used by our Reliable Broadcast implementation, and the ",(0,o.kt)("em",{parentName:"p"},"vote")," messages are used by our Weakly-terminating Binary Agreement implementation."))}h.isMDXComponent=!0}}]);