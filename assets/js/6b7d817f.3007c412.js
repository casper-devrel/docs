"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4541],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[d]="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},902:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],r={title:"Transaction Lifecycle",slug:"/transactions-and-transaction-lifecycle"},c="Transactions and the Transaction Lifecycle",l={unversionedId:"concepts/transactions-and-transaction-lifecycle",id:"concepts/transactions-and-transaction-lifecycle",title:"Transaction Lifecycle",description:"Transactions",source:"@site/source/docs/casper/concepts/transactions-and-transaction-lifecycle.md",sourceDirName:"concepts",slug:"/transactions-and-transaction-lifecycle",permalink:"/transactions-and-transaction-lifecycle",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/concepts/transactions-and-transaction-lifecycle.md",tags:[],version:"current",lastUpdatedAt:1718839176,formattedLastUpdatedAt:"Jun 19, 2024",frontMatter:{title:"Transaction Lifecycle",slug:"/transactions-and-transaction-lifecycle"},sidebar:"concepts",previous:{title:"Key Types",permalink:"/concepts/key-types"},next:{title:"Global State",permalink:"/concepts/global-state"}},p={},d=[{value:"Transactions",id:"execution-semantics-transactions",level:2},{value:"The Transaction Lifecycle",id:"execution-semantics-phases",level:2},{value:"Transaction Received",id:"transaction-received",level:3},{value:"Transaction Gossiped",id:"transaction-gossiped",level:3},{value:"Block Proposed",id:"block-proposed",level:3},{value:"Block Gossiped",id:"block-gossiped",level:3},{value:"Consensus Reached",id:"consensus-reached",level:3},{value:"Transaction Executed",id:"transaction-executed",level:3}],u={toc:d},h="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transactions-and-the-transaction-lifecycle"},"Transactions and the Transaction Lifecycle"),(0,i.kt)("h2",{id:"execution-semantics-transactions"},"Transactions"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/concepts/glossary/T#transaction"},"transaction")," is a data structure containing Wasm and the requester's signature(s). Additionally, the transaction header contains additional metadata about the transaction itself. A transactions\u2019s structure is as follows:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/image/design/transaction-structure.png",alt:"Image showing the transaction data structure",width:"500"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Body: Containing payment code and session code (more details on these below)"),(0,i.kt)("li",{parentName:"ul"},"Header: containing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#publickey"},"Public Key")," of the account in whose context the transaction will run"),(0,i.kt)("li",{parentName:"ul"},"The timestamp of the transaction\u2019s creation"),(0,i.kt)("li",{parentName:"ul"},"A time-to-live, after which the transaction expires and cannot be included in a block"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"blake2b256")," hash of the body"))),(0,i.kt)("li",{parentName:"ul"},"Transaction hash: the ",(0,i.kt)("inlineCode",{parentName:"li"},"blake2b")," hash of the Header"),(0,i.kt)("li",{parentName:"ul"},"Approvals: the set of signatures which have signed the transaction hash; these are used in the ",(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#accounts-associated-keys-weights"},"account permissions model"))),(0,i.kt)("h2",{id:"execution-semantics-phases"},"The Transaction Lifecycle"),(0,i.kt)("p",null,"A transaction goes through the following phases on Casper:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Transaction Received"),(0,i.kt)("li",{parentName:"ol"},"Transaction Gossiped"),(0,i.kt)("li",{parentName:"ol"},"Block Proposed"),(0,i.kt)("li",{parentName:"ol"},"Block Gossiped"),(0,i.kt)("li",{parentName:"ol"},"Consensus Reached"),(0,i.kt)("li",{parentName:"ol"},"Transaction Executed")),(0,i.kt)("h3",{id:"transaction-received"},"Transaction Received"),(0,i.kt)("p",null,"A client sending the transaction will send it to one or more nodes via their JSON RPC servers. The node will ensure that a given transaction matches configuration settings outlined in the network's chainspec. Transaction configuration for the Casper Mainnet can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/dev/resources/production/chainspec.toml#L79"},"here"),". Once accepted, the system returns the transaction hash to the client to indicate it has been enqueued for execution. The transaction could expire while waiting to be gossiped; whenever this happens, a ",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionExpired")," event is emitted by the event stream servers of all nodes which have the expired transaction."),(0,i.kt)("h3",{id:"transaction-gossiped"},"Transaction Gossiped"),(0,i.kt)("p",null,"After a node accepts a new transaction, it will gossip to all other nodes. A validator node will put the transaction into the block proposer buffer. The validator leader will pick the transaction from the block proposer buffer to create a new proposed block for the chain. This mechanism is efficient and ensures all nodes in the network eventually hold the given transaction. Each node that accepts a gossiped transaction also emits a ",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionAccepted")," event on its event stream server. The transaction may expire while waiting for a node to add it to the block. Whenever this happens, the node emits a ",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionExpired")," event."),(0,i.kt)("h3",{id:"block-proposed"},"Block Proposed"),(0,i.kt)("p",null,"The validator leader for this round will propose a block that includes as many transactions from the block proposer buffer as can fit in a block."),(0,i.kt)("h3",{id:"block-gossiped"},"Block Gossiped"),(0,i.kt)("p",null,"The proposed block propagates to all other nodes."),(0,i.kt)("h3",{id:"consensus-reached"},"Consensus Reached"),(0,i.kt)("p",null,"Once the other validators reach consensus that the proposed block is valid, all transactions in the block are executed, and this block becomes the final block added to the chain. Whenever reaching consensus, the event stream server emits a ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockAdded"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"FinalitySignature")," events emit shortly after that. Finality signatures for the new block arrive from the validators."),(0,i.kt)("h3",{id:"transaction-executed"},"Transaction Executed"),(0,i.kt)("p",null,"A transaction executes in distinct phases to accommodate flexibly paying for computation. The phases of a transaction are ",(0,i.kt)("em",{parentName:"p"},"payment"),", ",(0,i.kt)("em",{parentName:"p"},"session"),", and ",(0,i.kt)("em",{parentName:"p"},"finalization"),". Payment code executes during the payment phase. If it is successful, the session code executes during the session phase. And, independently of session code execution, the finalization phase does some bookkeeping around the payment. Once the transaction is executed, a ",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionProcessed")," event is emitted by the event stream server."),(0,i.kt)("p",null,"In the event of execution failure, the sender will be charged the minimum penalty payment - 2.5 CSPR on the Casper Mainnet. This prevents malicious spamming of faulty transactions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Payment code")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Payment code")," determines the payment amount for the computation requested and how much the sender is willing to pay. Payment code may include arbitrary logic, providing flexibility in paying for a transaction. For example, the simplest payment code could use the account entity's ",(0,i.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#tokens-purses-and-accounts"},"main purse"),". In contrast, an enterprise application may require a multi-signature scheme that accesses a corporate purse. To ensure the payment code will pay for its own computation, only entities with a balance in their main purse greater than or equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"MAX_PAYMENT_COST")," may execute transactions. Based on the current conversion rate between gas and motes, we restrict the gas limit of the payment code execution so that the process spends no more than ",(0,i.kt)("inlineCode",{parentName:"p"},"MAX_PAYMENT_COST")," motes (a constant of the system.)\nIf the payment is absent or not enough, then payment execution is not successful. In this case, the effects of the payment code on global state are reverted, and the system covers the cost of the computation with motes taken from the offending entity's main purse."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Session code")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Session code")," provides the main logic for the transaction. It only executes if the payment code is successful. The gas limit for this computation is determined based on the amount of payment given (after subtracting the cost of the payment code itself)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Specifying payment code and session code")),(0,i.kt)("p",null,"The user-defined logic of a transaction can be specified in a number of ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a Wasm module in binary format representing valid session code, including logic to be executed in the context of an account entity or to store Wasm in the form of a contract to be executed later. (Note that the named keys from the context of the entity the transaction is running in.)"),(0,i.kt)("li",{parentName:"ul"},"a 32-byte identifier representing the ",(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#serialization-standard-hash-key"},"hash")," where a contract is already stored in the global state"),(0,i.kt)("li",{parentName:"ul"},"a name corresponding to a named key, where a contract is stored under the key")),(0,i.kt)("p",null,"Payment and session code can be independently specified, so different methods of specifying them may be used (e.g. payment could be specified by a hash key, while the session is explicitly provided as a Wasm module)."))}m.isMDXComponent=!0}}]);