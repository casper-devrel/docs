"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9540],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=d(a),f=r,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||s;return a?n.createElement(h,l(l({ref:t},i),{},{components:a})):n.createElement(h,l({ref:t},i))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<s;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},93355:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const s={},l="Verifying a Transfer",o={unversionedId:"developers/cli/transfers/verify-transfer",id:"developers/cli/transfers/verify-transfer",title:"Verifying a Transfer",description:"Prerequisites",source:"@site/source/docs/developers/cli/transfers/verify-transfer.md",sourceDirName:"developers/cli/transfers",slug:"/developers/cli/transfers/verify-transfer",permalink:"/docs/next/developers/cli/transfers/verify-transfer",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/developers/cli/transfers/verify-transfer.md",tags:[],version:"current",lastUpdatedAt:1719861245,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{},sidebar:"developers",previous:{title:"Transferring Tokens using a Multi-Sig Deploy",permalink:"/docs/next/developers/cli/transfers/multisig-deploy-transfer"},next:{title:"Delegating Tokens",permalink:"/docs/next/developers/cli/delegate"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Query the State Root Hash",id:"query-the-state-root-hash",level:2},{value:"Query the Transfer Details",id:"query-transfer-details",level:2},{value:"Query the Account State",id:"query-account-state",level:2},{value:"Query the Purse Balance",id:"get-purse-balance",level:2}],i={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"verifying-a-transfer"},"Verifying a Transfer"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before verifying a transfer, make sure you have:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Initiated a ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/developers/cli/transfers/direct-token-transfer"},"Direct Transfer")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/developers/cli/transfers/multisig-deploy-transfer"},"Multi-sig Deploy Transfer")),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("em",{parentName:"li"},"deploy_hash")," of the transfer you want to verify"),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("em",{parentName:"li"},"public key")," of the source and target accounts")),(0,r.kt)("h2",{id:"query-the-state-root-hash"},"Query the State Root Hash"),(0,r.kt)("p",null,"The state root hash is an identifier of the current network state. It gives a snapshot of the blockchain state at a moment in time. You can use the state root hash to query the network state after sending a deploy. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address [NODE_SERVER_ADDRESS]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address https://rpc.testnet.casperlabs.io \n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Sample output of the get-state-root-hash command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 6458079936180872466,\n  "result": {\n    "api_version": "1.5.3",\n    "state_root_hash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n  }\n}\n'))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"After sending deploys to the network, you must get the new state root hash to see the changes reflected. Otherwise, you will be looking at events in the past.")),(0,r.kt)("h2",{id:"query-transfer-details"},"Query the Transfer Details"),(0,r.kt)("p",null,"A transfer is executed as part of a deploy. In a Casper network, deploys can contain multiple transfers. Execution of the deploy includes writing information about each individual transfer to global state. A unique hash known as the ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer-address")," identifies each transfer. The ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer-address")," consists of a formatted string with a ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer-")," prefix."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/image/transfers/transfer-hash-example.png",alt:"Image showing a transfer hash"})),(0,r.kt)("p",null,"First, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"get-deploy")," command and the ",(0,r.kt)("em",{parentName:"p"},"deploy_hash")," to identify the corresponding transfer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-deploy \\\n--node-address [NODE_SERVER_ADDRESS]  \\\n[DEPLOY_HASH]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important response fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"result"."execution_results"."result"."Success"."transfers"')," - List of transfers contained in a successful deploy")),(0,r.kt)("p",null,"After obtaining the transfer identifier, query the transfer details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n--id [ID] \\\n--node-address [NODE_SERVER_ADDRESS]  \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [TRANSFER_HASH]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - The hex-encoded hash of the state root"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - The base key for the query. This must be a properly formatted transfer address with a ",(0,r.kt)("inlineCode",{parentName:"li"},"transfer-")," prefix, i.e., ",(0,r.kt)("inlineCode",{parentName:"li"},"transfer-ab3e11fd612ccf9ddf5ddb3e5c0b3d3b5e5c0921fd1b45e8c657a63f01d6adcb"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," option generates verbose output, printing the RPC request and response generated. Let's explore an example below."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -v \\\n--id 3 \\\n--node-address https://rpc.testnet.casperlabs.io/  \\\n--state-root-hash fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1 \\\n--key transfer-ab3e11fd612ccf9ddf5ddb3e5c0b3d3b5e5c0921fd1b45e8c657a63f01d6adcb\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "query_global_state",\n  "params": {\n    "state_identifier": {\n      "StateRootHash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n    },\n    "key": "transfer-ab3e11fd612ccf9ddf5ddb3e5c0b3d3b5e5c0921fd1b45e8c657a63f01d6adcb",\n    "path": []\n  },\n  "id": 3\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.5.3",\n    "block_header": null,\n    "stored_value": {\n      "Transfer": {\n        "deploy_hash": "4eedbb5cf4a571748cf7ae9c2f17777364a01f80f79f3633a0cec32b7e8cf2e3",\n        "from": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n        "to": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n        "source": "uref-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1-007",\n        "target": "uref-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c-004",\n        "amount": "5000000000",\n        "gas": "0",\n        "id": 11102023\n      }\n    },\n    "merkle_proof": "[42526 hex chars]"\n  },\n  "id": 3\n}\n'))),(0,r.kt)("p",null,"The query responds with more information about the transfer: its deploy hash, the account which executed the transfer, the source and target purses, and the target account. You can verify that the transfer processed successfully using this additional information."),(0,r.kt)("h2",{id:"query-account-state"},"Query the Account State"),(0,r.kt)("p",null,"Next, query for information about the ",(0,r.kt)("em",{parentName:"p"},"Source")," account, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"state-root-hash")," of the block containing the transfer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n--id [ID] \\\n--node-address [NODE_SERVER_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [SOURCE_PUBLIC_KEY]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - Hex-encoded hash of the network state"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - The base key for the query. This must be a properly formatted public key, account hash, contract address hash, URef, transfer hash, or deploy-info hash")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important response fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"result"."stored_value"."Account"."main_purse"')," - the address of the main purse containing the sender's tokens. In this example, this purse is the source of the tokens transferred")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source Account Query:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -v \\\n--id 4 \\\n--node-address https://rpc.testnet.casperlabs.io/  \\\n--state-root-hash fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1 \\\n--key 0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "query_global_state",\n  "params": {\n    "state_identifier": {\n      "StateRootHash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n    },\n    "key": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n    "path": []\n  },\n  "id": 4\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.5.3",\n    "block_header": null,\n    "stored_value": {\n      "Account": {\n        "account_hash": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n        "named_keys": [...],\n        "main_purse": "uref-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1-007",\n        "associated_keys": [\n          {\n            "account_hash": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n            "weight": 1\n          }\n        ],\n        "action_thresholds": {\n          "deployment": 1,\n          "key_management": 1\n        }\n      }\n    },\n    "merkle_proof": "[31406 hex chars]"\n  },\n  "id": 4\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Target Account Query:")),(0,r.kt)("p",null,"Repeat the same step to query information about the ",(0,r.kt)("em",{parentName:"p"},"Target")," account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -v \\\n--id 5 \\\n--node-address https://rpc.testnet.casperlabs.io/  \\\n--state-root-hash fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1 \\\n--key 01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "query_global_state",\n  "params": {\n    "state_identifier": {\n      "StateRootHash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n    },\n    "key": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n    "path": []\n  },\n  "id": 5\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.5.3",\n    "block_header": null,\n    "stored_value": {\n      "Account": {\n        "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n        "named_keys": [...],\n        "main_purse": "uref-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c-007",\n        "associated_keys": [...],\n        "action_thresholds": {\n          "deployment": 2,\n          "key_management": 3\n        }\n      }\n    },\n    "merkle_proof": "[32060 hex chars]"\n  },\n  "id": 5\n}\n'))),(0,r.kt)("h2",{id:"get-purse-balance"},"Query the Purse Balance"),(0,r.kt)("p",null,"All accounts on a Casper network have a purse associated with the Casper system mint, which is the ",(0,r.kt)("em",{parentName:"p"},"main purse"),". The balance associated with a given purse is recorded in global state, and the value can be queried using the ",(0,r.kt)("inlineCode",{parentName:"p"},"query-balance")," command and the purse identifier, which can be a public key or account hash, implying the main purse of the given account should be used. Alternatively, the purse's URef can be used. For full details, run the following help command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-balance --help\n")),(0,r.kt)("p",null,"Verify the source purse balance using the ",(0,r.kt)("inlineCode",{parentName:"p"},"query-balance")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-balance \\\n--id 6 \\\n--node-address [NODE_SERVER_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HAHS] \\\n--purse-identifier [SOURCE_PUBLIC_KEY_HEX] \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - Hex-encoded hash of the state root"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"purse-identifier")," - A public key or account hash, implying the main purse of the given account should be used. Alternatively, the purse's URef")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Query Source Account Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-balance -v --id 6 \\\n--node-address https://rpc.testnet.casperlabs.io/ \\\n--state-root-hash fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1 \\\n--purse-identifier account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Explore the sample JSON-RPC request and response generated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "query_balance",\n  "params": {\n    "state_identifier": {\n      "StateRootHash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n    },\n    "purse_identifier": {\n      "main_purse_under_account_hash": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655"\n    }\n  },\n  "id": 6\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.5.3",\n    "balance": "1109111876194"\n  },\n  "id": 6\n}\n'))),(0,r.kt)("p",null,"Similarly, query the balance of the target purse."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-balance \\\n--id 7 \\\n--node-address [NODE_SERVER_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HAHS] \\\n--purse-identifier [TARGET_PUBLIC_KEY_HEX] \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Target Account Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-balance -v --id 7 \\\n--node-address https://rpc.testnet.casperlabs.io/ \\\n--state-root-hash fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1 \\\n--purse-identifier account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Explore the sample JSON-RPC request and response generated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "query_balance",\n  "params": {\n    "state_identifier": {\n      "StateRootHash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n    },\n    "purse_identifier": {\n      "main_purse_under_account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7"\n    }\n  },\n  "id": 7\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.5.3",\n    "balance": "46200000000"\n  },\n  "id": 7\n}\n'))))}u.isMDXComponent=!0}}]);