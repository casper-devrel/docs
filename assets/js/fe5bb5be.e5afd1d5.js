"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9979],{3905:(e,n,a)=>{a.d(n,{Zo:()=>i,kt:()=>m});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function f(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),o=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):f(f({},n),e)),a},i=function(e){var n=o(e.components);return t.createElement(d.Provider,{value:n},e.children)},l="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,c=e.originalType,d=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=o(a),p=r,m=l["".concat(d,".").concat(p)]||l[p]||b[p]||c;return a?t.createElement(m,f(f({ref:n},i),{},{components:a})):t.createElement(m,f({ref:n},i))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=a.length,f=new Array(c);f[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[l]="string"==typeof e?e:r,f[1]=s;for(var o=2;o<c;o++)f[o]=a[o];return t.createElement.apply(null,f)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8306:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>f,default:()=>b,frontMatter:()=>c,metadata:()=>s,toc:()=>o});var t=a(87462),r=(a(67294),a(3905));const c={},f="Direct Token Transfer",s={unversionedId:"developers/cli/transfers/direct-token-transfer",id:"version-1.5.6/developers/cli/transfers/direct-token-transfer",title:"Direct Token Transfer",description:"This workflow describes how to use the Casper command-line client to transfer tokens between purses on a Casper network.",source:"@site/versioned_docs/version-1.5.6/developers/cli/transfers/direct-token-transfer.md",sourceDirName:"developers/cli/transfers",slug:"/developers/cli/transfers/direct-token-transfer",permalink:"/developers/cli/transfers/direct-token-transfer",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/version-1.5.6/developers/cli/transfers/direct-token-transfer.md",tags:[],version:"1.5.6",lastUpdatedAt:1719863791,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{},sidebar:"developers",previous:{title:"Transferring Tokens",permalink:"/developers/cli/transfers/"},next:{title:"Transferring Tokens using a Multi-Sig Deploy",permalink:"/developers/cli/transfers/multisig-deploy-transfer"}},d={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Direct Transfer Example",id:"transfer",level:2},{value:"Verifying the Deploy",id:"verify-deploy",level:2},{value:"Verifying the Transfer",id:"verifying-the-transfer",level:2}],i={toc:o},l="wrapper";function b(e){let{components:n,...a}=e;return(0,r.kt)(l,(0,t.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"direct-token-transfer"},"Direct Token Transfer"),(0,r.kt)("p",null,"This workflow describes how to use the Casper command-line client to transfer tokens between purses on a Casper network."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This workflow assumes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You meet the general ",(0,r.kt)("a",{parentName:"li",href:"/developers/prerequisites"},"development prerequisites")),(0,r.kt)("li",{parentName:"ol"},"You are using the Casper command-line client"),(0,r.kt)("li",{parentName:"ol"},"You have a target ",(0,r.kt)("em",{parentName:"li"},"public key")),(0,r.kt)("li",{parentName:"ol"},"You have a valid ",(0,r.kt)("em",{parentName:"li"},"node address")),(0,r.kt)("li",{parentName:"ol"},"You must be able to sign a deploy for the source account using the source ",(0,r.kt)("em",{parentName:"li"},"secret key"))),(0,r.kt)("h2",{id:"transfer"},"Direct Transfer Example"),(0,r.kt)("p",null,"The following ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," command allows you to move CSPR from one account's purse to another as denominated in ",(0,r.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#tokens-divisibility"},"Motes"),". A ",(0,r.kt)("em",{parentName:"p"},"Mote")," is a denomination of the cryptocurrency CSPR, where 1 CSPR = 1,000,000,000 Motes."),(0,r.kt)("p",null,"For transfers of at least 2.5 CSPR (2,500,000,000 Motes) from a single sender to a single recipient on a Casper network, the most efficient option is to use the direct transfer capability."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client transfer \\\n--id <ID> \\\n--transfer-id <TRANSFER_ID> \\\n--node-address [NODE_SERVER_ADDRESS]  \\\n--amount [AMOUNT_TO_TRANSFER] \\\n--secret-key [KEY_PATH]/secret_key.pem \\\n--chain-name [CHAIN_NAME] \\\n--target-account [TARGET_PUBLIC_KEY_HEX] \\\n--payment-amount [PAYMENT_AMOUNT_IN_MOTES]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"transfer-id")," -<64-BIT INTEGER> The ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer-id")," is a memo field, providing additional information about the recipient, which is necessary when transferring tokens to some recipients. For example, if depositing tokens into an account's purse where off-chain management keeps track of individual sub-balances, it is necessary to provide a memo ID uniquely identifying the actual recipient. If this is not necessary for a given recipient, you may pass ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," or some ",(0,r.kt)("inlineCode",{parentName:"p"},"u64")," value that is meaningful to you")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"node-address")," - Hostname or IP and port of a node on a network bound to a JSON-RPC endpoint ","[","default:",(0,r.kt)("a",{parentName:"p",href:"http://localhost:7777"},"http://localhost:7777"),"]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"amount")," -<512-BIT INTEGER> The number of motes to transfer (1 CSPR = 1,000,000,000 ",(0,r.kt)("inlineCode",{parentName:"p"},"Motes"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"secret-key")," - Path to secret key file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"chain-name")," - Name of the chain, to avoid the deploy from being accidentally or maliciously included in a different chain"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"chain-name")," for Testnet is ",(0,r.kt)("strong",{parentName:"li"},"casper-test")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"chain-name")," for Mainnet is ",(0,r.kt)("strong",{parentName:"li"},"casper")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"target-account")," - Hex-encoded public key of the account that will receive the funds in its main purse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"payment-amount")," - The payment for the transfer in motes. The payment amount varies based on each deploy and network ",(0,r.kt)("a",{parentName:"p",href:"/concepts/glossary/C#chainspec"},"chainspec"),". For Testnet node version ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml"},"1.5.1"),", you can specify 10^8 motes"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important response fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"result"."deploy_hash"')," - The address of the deploy, needed to look up additional information about the transfer")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Save the returned ",(0,r.kt)("em",{parentName:"p"},"deploy_hash")," from the output to query information about the transfer deploy later.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Transfer:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client transfer -v \\\n--id 3 \\\n--transfer-id 11102023 \\\n--node-address https://rpc.testnet.casperlabs.io/  \\\n--amount 5000000000 \\\n--secret-key ~/KEYS/secret_key.pem \\\n--chain-name casper-test \\\n--target-account 01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986 \\\n--payment-amount 100000000\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "account_put_deploy",\n  "params": {\n    "deploy": {\n      "hash": "1f17a0bdeaaf71abd03492c854cdf97f746432751721ce555e95b9cefe641e3c",\n      "header": {\n        "account": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf",\n        "timestamp": "2023-10-12T14:59:40.760Z",\n        "ttl": "30m",\n        "gas_price": 1,\n        "body_hash": "ea7e6a6cbdd4d761827cb627e162896bee3e771beda000550615c9b4fafa3a2d",\n        "dependencies": [],\n        "chain_name": "casper-test"\n      },\n      "payment": {\n        "ModuleBytes": {\n          "module_bytes": "",\n          "args": [\n            [\n              "amount",\n              {\n                "cl_type": "U512",\n                "bytes": "0400e1f505",\n                "parsed": "100000000"\n              }\n            ]\n          ]\n        }\n      },\n      "session": {\n        "Transfer": {\n          "args": [\n            [\n              "amount",\n              {\n                "cl_type": "U512",\n                "bytes": "0500f2052a01",\n                "parsed": "5000000000"\n              }\n            ],\n            [\n              "target",\n              {\n                "cl_type": "PublicKey",\n                "bytes": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986",\n                "parsed": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986"\n              }\n            ],\n            [\n              "id",\n              {\n                "cl_type": {\n                  "Option": "U64"\n                },\n                "bytes": "014767a90000000000",\n                "parsed": 11102023\n              }\n            ]\n          ]\n        }\n      },\n      "approvals": [\n        {\n          "signer": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf",\n          "signature": "01e53cb742ed13ff4f0584a3da0f22f5942a33e010965adf640c91204ae4bc7436f1e5534d338ffa117d193295214816445439781229d24a372085c316eac5e305"\n        }\n      ]\n    }\n  },\n  "id": 3\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 3,\n  "result": {\n    "api_version": "1.5.3",\n    "deploy_hash": "1f17a0bdeaaf71abd03492c854cdf97f746432751721ce555e95b9cefe641e3c"\n  }\n}\n'))),(0,r.kt)("h2",{id:"verify-deploy"},"Verifying the Deploy"),(0,r.kt)("p",null,"A transfer on a Casper network is only executed after it has been included in a finalized block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-deploy \n--node-address [NODE_SERVER_ADDRESS] [DEPLOY_HASH]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important response fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"result"."execution_results"[0]."transfers[0]"')," - the address of the executed transfer that the source account initiated. We will use it to look up additional information about the transfer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"result"."execution_results"[0]."block_hash"')," - contains the block hash of the block that included the transfer. We will require the ",(0,r.kt)("em",{parentName:"li"},"state_root_hash")," of this block to look up information about the accounts and their purse balances")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Transfer addresses use a ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer-")," string prefix.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Query:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-deploy \n--node-address https://rpc.testnet.casperlabs.io \n1f17a0bdeaaf71abd03492c854cdf97f746432751721ce555e95b9cefe641e3c\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "info_get_deploy",\n  "params": {\n    "deploy_hash": "1f17a0bdeaaf71abd03492c854cdf97f746432751721ce555e95b9cefe641e3c",\n    "finalized_approvals": false\n  },\n  "id": -3447643973713335073\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.5.3",\n    "deploy": {\n      "hash": "1f17a0bdeaaf71abd03492c854cdf97f746432751721ce555e95b9cefe641e3c",\n      "header": {\n        "account": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf",\n        "timestamp": "2023-10-12T14:59:40.760Z",\n        "ttl": "30m",\n        "gas_price": 1,\n        "body_hash": "ea7e6a6cbdd4d761827cb627e162896bee3e771beda000550615c9b4fafa3a2d",\n        "dependencies": [],\n        "chain_name": "casper-test"\n      },\n      "payment": {\n        "ModuleBytes": {\n          "module_bytes": "",\n          "args": [\n            [\n              "amount",\n              {\n                "cl_type": "U512",\n                "bytes": "0400e1f505",\n                "parsed": "100000000"\n              }\n            ]\n          ]\n        }\n      },\n      "session": {\n        "Transfer": {\n          "args": [\n            [\n              "amount",\n              {\n                "cl_type": "U512",\n                "bytes": "0500f2052a01",\n                "parsed": "5000000000"\n              }\n            ],\n            [\n              "target",\n              {\n                "cl_type": "PublicKey",\n                "bytes": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986",\n                "parsed": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986"\n              }\n            ],\n            [\n              "id",\n              {\n                "cl_type": {\n                  "Option": "U64"\n                },\n                "bytes": "014767a90000000000",\n                "parsed": 11102023\n              }\n            ]\n          ]\n        }\n      },\n      "approvals": [\n        {\n          "signer": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf",\n          "signature": "01e53cb742ed13ff4f0584a3da0f22f5942a33e010965adf640c91204ae4bc7436f1e5534d338ffa117d193295214816445439781229d24a372085c316eac5e305"\n        }\n      ]\n    },\n    "execution_results": [\n      {\n        "block_hash": "aac51dad028ba8b3d6fec86a39252bbc4285d513fd57a8af4696ab5390ac5c2b",\n        "result": {\n          "Success": {\n            "effect": {\n              "operations": [],\n              "transforms": [\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-624dbe2395b9d9503fbee82162f1714ebff6b639f96d2084d26d944c354ec4c5",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-9824d60dc3a5c44a20b9fd260a412437933835b52fc683d8ae36e4ec2114843e",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1",\n                  "transform": {\n                    "WriteCLValue": {\n                      "cl_type": "U512",\n                      "bytes": "06621c3e660301",\n                      "parsed": "1114111876194"\n                    }\n                  }\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": {\n                    "AddUInt512": "100000000"\n                  }\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-624dbe2395b9d9503fbee82162f1714ebff6b639f96d2084d26d944c354ec4c5",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-9824d60dc3a5c44a20b9fd260a412437933835b52fc683d8ae36e4ec2114843e",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1",\n                  "transform": {\n                    "WriteCLValue": {\n                      "cl_type": "U512",\n                      "bytes": "06621c3e660301",\n                      "parsed": "1114111876194"\n                    }\n                  }\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": {\n                    "AddUInt512": "100000000"\n                  }\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-9824d60dc3a5c44a20b9fd260a412437933835b52fc683d8ae36e4ec2114843e",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1",\n                  "transform": {\n                    "WriteCLValue": {\n                      "cl_type": "U512",\n                      "bytes": "06622a383c0201",\n                      "parsed": "1109111876194"\n                    }\n                  }\n                },\n                {\n                  "key": "balance-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c",\n                  "transform": {\n                    "AddUInt512": "5000000000"\n                  }\n                },\n                {\n                  "key": "transfer-0de7250864e67aa76626a844dcc931e615284a13a110df3f97cec9e3e97af405",\n                  "transform": {\n                    "WriteTransfer": {\n                      "deploy_hash": "1f17a0bdeaaf71abd03492c854cdf97f746432751721ce555e95b9cefe641e3c",\n                      "from": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n                      "to": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n                      "source": "uref-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1-007",\n                      "target": "uref-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c-004",\n                      "amount": "5000000000",\n                      "gas": "0",\n                      "id": 11102023\n                    }\n                  }\n                },\n                {\n                  "key": "deploy-1f17a0bdeaaf71abd03492c854cdf97f746432751721ce555e95b9cefe641e3c",\n                  "transform": {\n                    "WriteDeployInfo": {\n                      "deploy_hash": "1f17a0bdeaaf71abd03492c854cdf97f746432751721ce555e95b9cefe641e3c",\n                      "transfers": [\n                        "transfer-0de7250864e67aa76626a844dcc931e615284a13a110df3f97cec9e3e97af405"\n                      ],\n                      "from": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n                      "source": "uref-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1-007",\n                      "gas": "100000000"\n                    }\n                  }\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-624dbe2395b9d9503fbee82162f1714ebff6b639f96d2084d26d944c354ec4c5",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-9824d60dc3a5c44a20b9fd260a412437933835b52fc683d8ae36e4ec2114843e",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-da632bfba17f4a7882581de2a37219be71628600ccd0df83f1d42465bd018537",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": {\n                    "WriteCLValue": {\n                      "cl_type": "U512",\n                      "bytes": "00",\n                      "parsed": "0"\n                    }\n                  }\n                },\n                {\n                  "key": "balance-da632bfba17f4a7882581de2a37219be71628600ccd0df83f1d42465bd018537",\n                  "transform": {\n                    "AddUInt512": "100000000"\n                  }\n                }\n              ]\n            },\n            "transfers": [\n              "transfer-0de7250864e67aa76626a844dcc931e615284a13a110df3f97cec9e3e97af405"\n            ],\n            "cost": "100000000"\n          }\n        }\n      }\n    ]\n  },\n  "id": -3447643973713335073\n}\n'))),(0,r.kt)("p",null,"Refer to the Section on ",(0,r.kt)("a",{parentName:"p",href:"/resources/tutorials/beginner/querying-network#querying-deploys"},"querying deploys")," for more information."),(0,r.kt)("h2",{id:"verifying-the-transfer"},"Verifying the Transfer"),(0,r.kt)("p",null,"In addition to verifying the deploy, you also need to ",(0,r.kt)("a",{parentName:"p",href:"/developers/cli/transfers/verify-transfer"},"verify the transfer details"),". The deploy may have been successful, but you also need to ensure the source and target accounts were updated correctly."))}b.isMDXComponent=!0}}]);