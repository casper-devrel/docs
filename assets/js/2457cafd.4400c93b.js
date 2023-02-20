"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1335],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(a),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3012:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),s=(a(4996),["components"]),l={tags:["smart contract developers","rust","put-deploy"]},c="Installing Smart Contracts and Querying Global State",i={unversionedId:"dapp-dev-guide/writing-contracts/installing-contracts",id:"dapp-dev-guide/writing-contracts/installing-contracts",title:"Installing Smart Contracts and Querying Global State",description:"This tutorial is a continuation of the Smart Contracts on Casper guide, and covers the installation of Casper contracts using the Casper command-line client and the put-deploy command.",source:"@site/source/docs/casper/dapp-dev-guide/writing-contracts/installing-contracts.md",sourceDirName:"dapp-dev-guide/writing-contracts",slug:"/dapp-dev-guide/writing-contracts/installing-contracts",permalink:"/dapp-dev-guide/writing-contracts/installing-contracts",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/writing-contracts/installing-contracts.md",tags:[{label:"smart contract developers",permalink:"/tags/smart-contract-developers"},{label:"rust",permalink:"/tags/rust"},{label:"put-deploy",permalink:"/tags/put-deploy"}],version:"current",lastUpdatedAt:1676913128,formattedLastUpdatedAt:"2/20/2023",frontMatter:{tags:["smart contract developers","rust","put-deploy"]},sidebar:"dapp-dev-guide",previous:{title:"Testing Session Code",permalink:"/dapp-dev-guide/writing-contracts/testing-session-code"},next:{title:"Calling Smart Contracts with the Rust Client",permalink:"/dapp-dev-guide/writing-contracts/calling-contracts"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing a Contract in Global State",id:"installing-contract-code",level:2},{value:"Querying Global State",id:"querying-global-state",level:2},{value:"Get the state root hash",id:"get-state-root-hash",level:3},{value:"Query global state",id:"query-global-state",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}],u={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-smart-contracts-and-querying-global-state"},"Installing Smart Contracts and Querying Global State"),(0,o.kt)("p",null,"This tutorial is a continuation of the ",(0,o.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/rust-contracts"},"Smart Contracts on Casper")," guide, and covers the installation of Casper contracts using the ",(0,o.kt)("a",{parentName:"p",href:"/dapp-dev-guide/setup/#the-casper-command-line-client"},"Casper command-line client")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"put-deploy")," command."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You know how to ",(0,o.kt)("a",{parentName:"li",href:"/dapp-dev-guide/building-dapps/sending-deploys"},"send and verify deploys"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Your environment meets these ",(0,o.kt)("a",{parentName:"li",href:"/dapp-dev-guide/setup/"},"prerequisites")," and you have a client to interact with the network, such as the ",(0,o.kt)("a",{parentName:"li",href:"/dapp-dev-guide/setup#the-casper-command-line-client"},"default Casper client")),(0,o.kt)("li",{parentName:"ul"},"You have a ",(0,o.kt)("a",{parentName:"li",href:"/dapp-dev-guide/setup/#setting-up-an-account"},"Casper Account")," with a public and secret key pair to initiate the deploy"),(0,o.kt)("li",{parentName:"ul"},"You have enough CSPR tokens in your account's main purse to pay for deploys. If you plan to use the Casper Testnet, learn about the ",(0,o.kt)("a",{parentName:"li",href:"/workflow/users/token-transfer#2-the-faucet"},"faucet")," to fund your testing account's main purse"))),(0,o.kt)("li",{parentName:"ul"},"You understand how to ",(0,o.kt)("a",{parentName:"li",href:"/writing-contracts"},"write basic contract code")," and session code"),(0,o.kt)("li",{parentName:"ul"},"You have a contract Wasm to send to a Casper network")),(0,o.kt)("h2",{id:"installing-contract-code"},"Installing a Contract in Global State"),(0,o.kt)("p",null,"To install a contract in ",(0,o.kt)("a",{parentName:"p",href:"/glossary/G#global-state"},"global state"),", you need to send a deploy to the network with the contract Wasm. You can do so by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"put-deploy")," command. Remember to ",(0,o.kt)("a",{parentName:"p",href:"/dapp-dev-guide/building-dapps/sending-deploys#sending-the-deploy"},"verify the deploy")," after sending it to the network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name [CHAIN_NAME] \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-path [CONTRACT_PATH]/[CONTRACT_NAME].wasm\n")),(0,o.kt)("p",null,"The arguments used above are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port for JSON-RPC servers on Mainnet and Testnet is 7777"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain name to the network where you wish to send the deploy. For Mainnet, use ",(0,o.kt)("em",{parentName:"li"},"casper"),". For Testnet, use ",(0,o.kt)("em",{parentName:"li"},"casper-test")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the account paying for the deploy"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The payment for the deploy in motes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"session-path")," - The path to the contract Wasm, which should point to wherever you compiled the contract (.wasm file) on your computer")),(0,o.kt)("p",null,"Once you call this command, it will return a deploy hash. You can use this hash to verify that the deploy successfully took place."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example - Install the contract:")),(0,o.kt)("p",null,"Here we send a ",(0,o.kt)("inlineCode",{parentName:"p"},"counter-v1.wasm")," to a local NCTL network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n    --node-address http://localhost:11101 \\\n    --chain-name casper-net-1 \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount 5000000000000 \\\n    --session-path ./counter/target/wasm32-unknown-unknown/release/counter-v1.wasm\n")),(0,o.kt)("p",null,"To verify the deploy, call ",(0,o.kt)("inlineCode",{parentName:"p"},"get-deploy")," and provide the deploy hash you received from ",(0,o.kt)("inlineCode",{parentName:"p"},"put-deploy"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-deploy \\\n    --node-address http://localhost:11101 [DEPLOY_HASH]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Video - Contract Installation Walkthrough")),(0,o.kt)("p",null,"This video demonstrates the commands described above for installing a contract on-chain."),(0,o.kt)("p",{align:"center"},(0,o.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=8",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("h2",{id:"querying-global-state"},"Querying Global State"),(0,o.kt)("p",null,"Here we look at how to query global state to see details about a successfully installed contract."),(0,o.kt)("h3",{id:"get-state-root-hash"},"Get the state root hash"),(0,o.kt)("p",null,"First, you need to get the state root hash. After sending deploys to the network, you must get the new state root hash to see the new changes reflected. Otherwise, you would be looking at past events."),(0,o.kt)("p",null,"The state root hash identifies the current network state (global state). It is much like a Git commit ID for commit history. It gives a snapshot of the blockchain state at a moment in time. We use it to query global state after sending deploys to the network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address [NODE_SERVER_ADDRESS]\n")),(0,o.kt)("p",null,"Here is an example with the node address filled in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address http://localhost:11101\n")),(0,o.kt)("h3",{id:"query-global-state"},"Query global state"),(0,o.kt)("p",null,"Next, query the state of a Casper network at a given time, specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"state-root-hash")," described above. You can dive into the data stored in global state using the query path argument ",(0,o.kt)("inlineCode",{parentName:"p"},"q"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [HASH_STRING] \\\n    -q "[SESSION_NAME]/[SESSION_NAMED_KEY]" (OPTIONAL)\n')),(0,o.kt)("p",null,"The arguments used above are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port for JSON-RPC servers on Mainnet and Testnet is 7777"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - Hex-encoded hash of the state root"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key")," - The identifier for the query. It must be the account public key, account hash, contract package hash, transfer hash, or deploy hash"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"q")," - An optional query path argument that allows you to drill into the specifics of a query with respect to the key")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example - Query the account:")),(0,o.kt)("p",null,"To find your account details, query global state using your account hash."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --state-root-hash fa968344a2000282686303f1664c474465f9a028f32ec4f51791d9fa64c0bcd7 \\\n  --key account-hash-1d17e3fdad268f866a73558d1ae45e1eea3924c247871cb63f67ebf1a116e66d\n")),(0,o.kt)("p",null,'Here is how your account state would look. Notice that the sample response contains several named keys, including "counter", "counter_package_name", and "version". You can use these values to query the contract state further, as shown in the next example.'),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Sample account state")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -6831525034388467034,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "block_header": null,\n    "merkle_proof": "[27614 hex chars]",\n    "stored_value": {\n      "Account": {\n        "account_hash": "account-hash-1d17e3fdad268f866a73558d1ae45e1eea3924c247871cb63f67ebf1a116e66d",\n        "action_thresholds": {\n          "deployment": 1,\n          "key_management": 1\n        },\n        "associated_keys": [\n          {\n            "account_hash": "account-hash-1d17e3fdad268f866a73558d1ae45e1eea3924c247871cb63f67ebf1a116e66d",\n            "weight": 1\n          }\n        ],\n        "main_purse": "uref-d92e420120199f90005802bf3036362f368ab69bebf17e7e53856d6ac82e117f-007",\n        "named_keys": [\n          {\n            "key": "hash-22228188b85b6ee4a4a41c7e98225c3918139e9a5eb4b865711f2e409d85e88e",\n            "name": "counter"\n          },\n          {\n            "key": "uref-41c3f4ae3c1ce2446f6fd880a96e698ae5abc715151e45e357d88bb739489c03-007",\n            "name": "counter_access_uref"\n          },\n          {\n            "key": "hash-76a8c3daa6d6ac799ce9f46d82ac98efb271d2d64b517861ec89a06051ef019e",\n            "name": "counter_package_name"\n          },\n          {\n            "key": "uref-917762490591a1404cba59ed8dcf0bcfa7f644ef6c6be9bf5ea7b1641617cad0-007",\n            "name": "version"\n          }\n        ]\n      }\n    }\n  }\n}\n'))),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you don't know your account hash, you can run this command:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client account-address --public-key [PATH_TO_PUBLIC_KEY]\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example - Query the contract:")),(0,o.kt)("p",null,"This example shows how to query global state given a contract hash. We use the contract hash from the sample response above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n  --node-address http://localhost:11101  \\\n  --state-root-hash fa968344a2000282686303f1664c474465f9a028f32ec4f51791d9fa64c0bcd7 \\\n  --key hash-22228188b85b6ee4a4a41c7e98225c3918139e9a5eb4b865711f2e409d85e88e\n")),(0,o.kt)("p",null,"Here is how the sample contract would look and would contain details such as the ",(0,o.kt)("inlineCode",{parentName:"p"},"contract_package_hash"),", the contract ",(0,o.kt)("inlineCode",{parentName:"p"},"entry_points"),", and the ",(0,o.kt)("inlineCode",{parentName:"p"},"named_keys")," for the contract."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Sample contract state")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -4657473054587773855,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "block_header": null,\n    "merkle_proof": "[21330 hex chars]",\n    "stored_value": {\n      "Contract": {\n        "contract_package_hash": "contract-package-76a8c3daa6d6ac799ce9f46d82ac98efb271d2d64b517861ec89a06051ef019e",\n        "contract_wasm_hash": "contract-wasm-576b1718711d524a79ab2f05ce801006a3fd32eb48b9f7dac69a9fa966d634e3",\n        "entry_points": [\n          {\n            "access": "Public",\n            "args": [],\n            "entry_point_type": "Contract",\n            "name": "counter_get",\n            "ret": "I32"\n          },\n          {\n            "access": "Public",\n            "args": [],\n            "entry_point_type": "Contract",\n            "name": "counter_inc",\n            "ret": "Unit"\n          }\n        ],\n        "named_keys": [\n          {\n            "key": "uref-d40613e50c7b405b02795e3fe3252554bef49b4b522e31a55f39b87c442f922a-007",\n            "name": "count"\n          }\n        ],\n        "protocol_version": "1.4.5"\n      }\n    }\n  }\n}\n\n'))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example - Query a value using its key and the contract hash:")),(0,o.kt)("p",null,"Next, you can query a named key associated with the contract using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-q")," option. This example comes from the ",(0,o.kt)("a",{parentName:"p",href:"/counter"},"Counter Contract Tutorial"),', where a "count" variable is incremented and stored under a named key.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --state-root-hash [STATE_ROOT_HASH] \\\n  --key [CONTRACT_HASH] -q "count"\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Sample stored value")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -2540117660598287261,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "block_header": null,\n    "merkle_proof": "[56562 hex chars]",\n    "stored_value": {\n      "CLValue": {\n        "bytes": "00000000",\n        "cl_type": "I32",\n        "parsed": 0\n      }\n    }\n  }\n}\n'))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example - Query a value using the account hash and named keys:")),(0,o.kt)("p",null,'It is also possible to check the state of a specific contract variable in global state given the account hash under which the contract was installed. Here we query the named key "count", stored under another key identifying the contract and named "counter".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state \\\n    --node-address http://localhost:11101 \\\n    --state-root-hash fa968344a2000282686303f1664c474465f9a028f32ec4f51791d9fa64c0bcd7 \\\n    --key account-hash-1d17e3fdad268f866a73558d1ae45e1eea3924c247871cb63f67ebf1a116e66d \\\n    -q "counter/count"\n')),(0,o.kt)("p",null,"The response should be the same as in Example 3, above."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example - Query contract package state:")),(0,o.kt)("p",null,"You can query information about a contract package, such as the latest contract hash and contract version, given its contract package hash."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --key hash-76a8c3daa6d6ac799ce9f46d82ac98efb271d2d64b517861ec89a06051ef019e \\\n  --state-root-hash 763e737cf55a298d54bcdfb4ee55526538a1a086128914b9cc25ccbdebbbb966\n")),(0,o.kt)("p",null,"Here is how the contract package details would look. The response would contain the ",(0,o.kt)("inlineCode",{parentName:"p"},"contract_hash"),", which you would need to ",(0,o.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/calling-contracts#calling-contracts-by-hash"},"call a contract by hash")," in the next section. You would also see the ",(0,o.kt)("inlineCode",{parentName:"p"},"access_key")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractPackage")," and the current ",(0,o.kt)("inlineCode",{parentName:"p"},"contract_version"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Sample contract package state")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -6225901853092301031,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "block_header": null,\n    "merkle_proof": "[20964 hex chars]",\n    "stored_value": {\n      "ContractPackage": {\n        "access_key": "uref-41c3f4ae3c1ce2446f6fd880a96e698ae5abc715151e45e357d88bb739489c03-007",\n        "disabled_versions": [],\n        "groups": [],\n        "versions": [\n          {\n            "contract_hash": "contract-22228188b85b6ee4a4a41c7e98225c3918139e9a5eb4b865711f2e409d85e88e",\n            "contract_version": 1,\n            "protocol_version_major": 1\n          }\n        ]\n      }\n    }\n  }\n}\n'))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Video - Querying Walkthrough")),(0,o.kt)("p",null,"This video shows you what to expect when querying the network."),(0,o.kt)("p",{align:"center"},(0,o.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=9",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn ",(0,o.kt)("a",{parentName:"li",href:"/dapp-dev-guide/writing-contracts/calling-contracts"},"different ways to call contracts")," using the Casper command-line client")))}h.isMDXComponent=!0}}]);