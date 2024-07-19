"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={},s="Casper-Client Commands",i={unversionedId:"resources/beginner/counter/commands",id:"resources/beginner/counter/commands",title:"Casper-Client Commands",description:"Faucet Account Information",source:"@site/source/docs/resources/beginner/counter/commands.md",sourceDirName:"resources/beginner/counter",slug:"/resources/beginner/counter/commands",permalink:"/next/resources/beginner/counter/commands",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/resources/beginner/counter/commands.md",tags:[],version:"current",lastUpdatedAt:1719861245,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{},sidebar:"resources",previous:{title:"Overview",permalink:"/next/resources/beginner/counter/overview"},next:{title:"Tutorial Walkthrough",permalink:"/next/resources/beginner/counter/walkthrough"}},c={},l=[{value:"Faucet Account Information",id:"faucet-account-information",level:2},{value:"State Root Hash",id:"state-root-hash",level:2},{value:"Querying Network State",id:"querying-network-state",level:2},{value:"Put Deploys (onto the Chain)",id:"put-deploys-onto-the-chain",level:2},{value:"Deploy via a compiled Wasm binary",id:"deploy-via-a-compiled-wasm-binary",level:3},{value:"Deploy via a named key already on the blockchain",id:"deploy-via-a-named-key-already-on-the-blockchain",level:3},{value:"Get Deploys (from the Chain)",id:"get-deploys-from-the-chain",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"casper-client-commands"},"Casper-Client Commands"),(0,o.kt)("h2",{id:"faucet-account-information"},"Faucet Account Information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"nctl-view-faucet-account\n")),(0,o.kt)("p",null,"This command is part of NCTL and provides a view into the faucet account details. The faucet is the default account created on the network. Generally on the Mainnet, your own account is used to fund transactions. However, for the sake of this tutorial, you do not need accounts and will use the faucet to execute deploys. This command supplies two key pieces of information: the account's ",(0,o.kt)("em",{parentName:"p"},"secret key")," location and the ",(0,o.kt)("em",{parentName:"p"},"account hash"),", which are used to sign deploys and query the network state, respectively."),(0,o.kt)("h2",{id:"state-root-hash"},"State Root Hash"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client get-state-root-hash --node-address [NODE_SERVER_ADDRESS]\n")),(0,o.kt)("p",null,"The first command to cover is the ",(0,o.kt)("em",{parentName:"p"},"get-state-root-hash")," command from the ",(0,o.kt)("em",{parentName:"p"},"casper-client")," tool. The state root hash is an identifier of the current network state. It is similar to a Git commit ID for commit history. It gives a snapshot of the blockchain state at a moment in time. For this tutorial, it will be used to query the network state after sending deploys."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"After sending deploys to the network, you must get the new state root hash to see the new changes reflected. Otherwise, you will be looking at events in the past.")),(0,o.kt)("h2",{id:"querying-network-state"},"Querying Network State"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'casper-client query-global-state \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] \\\n    -q "[SESSION_NAME]/[SESSION_NAMED_KEY]" (OPTIONAL)\n')),(0,o.kt)("p",null,"This command allows you to query the state of a Casper network at a given moment in time, which is specified by the ",(0,o.kt)("em",{parentName:"p"},"state-root-hash")," described above."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"node-address")," is the location of the RPC endpoint, which is typically represented in the form ",(0,o.kt)("inlineCode",{parentName:"li"},"http://IP:PORT"),". In this particular tutorial, for a default-configured NCTL network running locally, the address you can use is ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:11101"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"key")," is the identifier for the query. It must be either the account public key, account hash, contract address hash, transfer hash, or deploy hash. The tutorial demonstrates two of these key types."),(0,o.kt)("li",{parentName:"ul"},"The optional query path argument (",(0,o.kt)("em",{parentName:"li"},"q"),") allows you to drill into the specifics of a query concerning the key.")),(0,o.kt)("h2",{id:"put-deploys-onto-the-chain"},"Put Deploys (onto the Chain)"),(0,o.kt)("h3",{id:"deploy-via-a-compiled-wasm-binary"},"Deploy via a compiled Wasm binary"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name casper-net-1 \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-path [CONTRACT_PATH]/counter-v1.wasm\n")),(0,o.kt)("p",null,"This command creates a deploy and sends it to the network for execution. In this first usage of the command,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"session-path")," points to a compiled Wasm contract."),(0,o.kt)("li",{parentName:"ul"},"This contract is then installed on the network specified by the ",(0,o.kt)("em",{parentName:"li"},"chain-name"),'. By default, NCTL names the chain "casper-net-1" but this is configurable.'),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"payment-amount")," is in units of motes (1 nano-CSPR) and is required to pay the transaction fee for the deploy. If it is too small, the transaction will get denied due to insufficient funds.")),(0,o.kt)("h3",{id:"deploy-via-a-named-key-already-on-the-blockchain"},"Deploy via a named key already on the blockchain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name casper-net-1 \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-name "counter" \\\n    --session-entry-point "counter_inc"\n')),(0,o.kt)("p",null,"This second usage of ",(0,o.kt)("em",{parentName:"p"},"put-deploy")," does not place a new contract on the chain, but it allows you to call entry points (functions) defined in smart contracts."),(0,o.kt)("p",null,'This examples uses "counter" and "counter_inc" from the ',(0,o.kt)("a",{parentName:"p",href:"/next/resources/beginner/counter/walkthrough"},"tutorial walkthrough"),". However, these will be different when you write your contracts."),(0,o.kt)("h2",{id:"get-deploys-from-the-chain"},"Get Deploys (from the Chain)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client get-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    [DEPLOY_HASH]\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"get-deploy")," command is complementary to the ",(0,o.kt)("em",{parentName:"p"},"put-deploy")," command. It retrieves a deploy from the network and allows you to check the status of the deploy. The ",(0,o.kt)("em",{parentName:"p"},"DEPLOY_HASH")," is the identifier to a specific deploy and is returned by the ",(0,o.kt)("em",{parentName:"p"},"put-deploy")," command."))}m.isMDXComponent=!0}}]);