"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1472],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5373:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),l=n(4996),o=["components"],i={},p="Transferring Tokens using a Multi-Sig Deploy",c={unversionedId:"developers/cli/transfers/multisig-deploy-transfer",id:"developers/cli/transfers/multisig-deploy-transfer",title:"Transferring Tokens using a Multi-Sig Deploy",description:"This page presents a method of transferring tokens via a deploy file using multiple signatures. This method is recommended when implementing multi-signature transfers between purses on a Casper network.",source:"@site/source/docs/casper/developers/cli/transfers/multisig-deploy-transfer.md",sourceDirName:"developers/cli/transfers",slug:"/developers/cli/transfers/multisig-deploy-transfer",permalink:"/developers/cli/transfers/multisig-deploy-transfer",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/cli/transfers/multisig-deploy-transfer.md",tags:[],version:"current",lastUpdatedAt:1704220553,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{},sidebar:"developers",previous:{title:"Direct Token Transfer",permalink:"/developers/cli/transfers/direct-token-transfer"},next:{title:"Verifying a Transfer",permalink:"/developers/cli/transfers/verify-transfer"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Token Transfer Workflow",id:"token-transfer-workflow",level:2},{value:"Creating the transfer",id:"creating-the-transfer",level:3},{value:"Signing the transfer",id:"signing-the-transfer",level:3},{value:"Sending the deploy",id:"sending-the-deploy",level:3},{value:"Verifying the transfer",id:"verifying-the-transfer",level:3}],m={toc:u},f="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"transferring-tokens-using-a-multi-sig-deploy"},"Transferring Tokens using a Multi-Sig Deploy"),(0,s.kt)("p",null,"This page presents a method of transferring tokens via a deploy file using multiple signatures. This method is recommended when implementing multi-signature transfers between purses on a Casper network."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"make-transfer")," command allows you to create a transfer and save the output to a file. You can then have the transfer signed by other parties using the ",(0,s.kt)("inlineCode",{parentName:"p"},"sign-deploy")," command and send it to the network for execution using the ",(0,s.kt)("inlineCode",{parentName:"p"},"send-deploy")," command."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"You must ensure the following prerequisites are met."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Set up all the prerequisites listed ",(0,s.kt)("a",{parentName:"li",href:"/developers/prerequisites"},"here"),", including:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"A funded ",(0,s.kt)("a",{parentName:"li",href:"/developers/prerequisites#setting-up-an-account"},"Account")," on Testnet or Mainnet"),(0,s.kt)("li",{parentName:"ul"},"A valid ",(0,s.kt)("em",{parentName:"li"},"node address")," from the ",(0,s.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/tools/peers"},"Testnet peers")," or ",(0,s.kt)("a",{parentName:"li",href:"https://cspr.live/tools/peers"},"Mainnet peers")),(0,s.kt)("li",{parentName:"ul"},"The Casper ",(0,s.kt)("a",{parentName:"li",href:"/developers/prerequisites#the-casper-command-line-client"},"command-line client")))),(0,s.kt)("li",{parentName:"ol"},"Set up the source account for multi-signature deploys, as outlined in the ",(0,s.kt)("a",{parentName:"li",href:"/resources/tutorials/advanced/two-party-multi-sig"},"Two-Party Multi-Signature Deploys")," workflow"),(0,s.kt)("li",{parentName:"ol"},"Get the path of the source account's ",(0,s.kt)("em",{parentName:"li"},"secret key")," file"),(0,s.kt)("li",{parentName:"ol"},"Get the target account's ",(0,s.kt)("em",{parentName:"li"},"public key")," in hex format")),(0,s.kt)("h2",{id:"token-transfer-workflow"},"Token Transfer Workflow"),(0,s.kt)("p",null,"The high-level flow to transfer tokens using the Casper CLI client and a deploy file is described in the following steps:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"make-transfer")," command creates and signs a transfer, saving the output to a file"),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"sign-deploy")," command adds additional signatures for a multi-signature transfer"),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"send-deploy")," command sends the deploy containing the transfer to the network")),(0,s.kt)("img",{src:(0,l.Z)("/image/deploy-flow.png"),alt:"Deployment flow",style:{backgroundColor:"#e6e6e6",padding:"0.25em"}}),(0,s.kt)("h3",{id:"creating-the-transfer"},"Creating the transfer"),(0,s.kt)("p",null,"This section explains the ",(0,s.kt)("inlineCode",{parentName:"p"},"make-transfer")," command using an example you can try on the Testnet. For this example, we are transferring 2,500,000,000 motes from the source account (with the ",(0,s.kt)("inlineCode",{parentName:"p"},"secret_key.pem")," file) to a target account. To use this example on the Mainnet, the ",(0,s.kt)("em",{parentName:"p"},"chain-name")," would be ",(0,s.kt)("inlineCode",{parentName:"p"},"casper")," instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"casper-test"),". Note that we are saving the output of the ",(0,s.kt)("inlineCode",{parentName:"p"},"make-transfer")," command in a ",(0,s.kt)("inlineCode",{parentName:"p"},"transfer.deploy")," file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client make-transfer --amount 2500000000 \\\n--secret-key [PATH]/secret_key.pem \\\n--chain-name casper-test \\\n--target-account [PUBLIC_KEY_HEX] \\\n--transfer-id [ID] \\\n--payment-amount 100000000 \\\n--output transfer.deploy\n")),(0,s.kt)("p",null,"The following table explains the parameters used in the ",(0,s.kt)("inlineCode",{parentName:"p"},"make-transfer")," command."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"amount"),(0,s.kt)("td",{parentName:"tr",align:null},"The number of motes you wish to transfer (1 CSPR = 1,000,000,000 motes)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"secret-key"),(0,s.kt)("td",{parentName:"tr",align:null},"The path of the secret key file for the source account")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"chain-name"),(0,s.kt)("td",{parentName:"tr",align:null},"The name of the chain, to avoid the deploy from being accidentally or maliciously included in a different chain ",(0,s.kt)("ul",null,(0,s.kt)("li",null,"For Testnet use ",(0,s.kt)("strong",{parentName:"td"},"casper-test")),(0,s.kt)("li",null,"For Mainnet use ",(0,s.kt)("strong",{parentName:"td"},"casper"))))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"target-account"),(0,s.kt)("td",{parentName:"tr",align:null},"Hex-encoded public key of the target account from which the main purse will be used")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"transfer-id"),(0,s.kt)("td",{parentName:"tr",align:null},"A user-defined identifier permanently associated with the transfer")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"payment-amount"),(0,s.kt)("td",{parentName:"tr",align:null},"The payment for the transfer in motes. The payment amount varies based on the deploy and network ",(0,s.kt)("a",{parentName:"td",href:"/concepts/glossary/C#chainspec"},"chainspec"),". For Testnet node version ",(0,s.kt)("a",{parentName:"td",href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml"},"1.5.1"),", wasmless transfers cost 10^8 motes")))),(0,s.kt)("p",null,"In the output, you will see a section named ",(0,s.kt)("strong",{parentName:"p"},"approvals"),". This is where a signature from the source account is added to the deploy."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client make-transfer --amount 2500000000 \\\n--secret-key ~/KEYS/multi-sig/keys/default_secret_key.pem \\\n--chain-name casper-test \\\n--target-account 0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf \\\n--transfer-id 1 \\\n--payment-amount 100000000 \\\n--output transfer.deploy\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Sample output of the make-transfer command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "hash": "88c49fa9108485397a330f294914a6c2d614c581fbe0a31de1a954baad6d709b",\n    "header": {\n        "account": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986",\n        "timestamp": "2023-10-12T19:14:22.080Z",\n        "ttl": "30m",\n        "gas_price": 1,\n        "body_hash": "1bb7436d4703816b5cbeef245dd83c0520f1c7173cdf609c664a29487cc5de1c",\n        "dependencies": [],\n        "chain_name": "casper-test"\n    },\n    "payment": {\n        "ModuleBytes": {\n            "module_bytes": "",\n            "args": [\n                [\n                    "amount",\n                    {\n                        "cl_type": "U512",\n                        "bytes": "0400e1f505",\n                        "parsed": "100000000"\n                    }\n                ]\n            ]\n        }\n    },\n    "session": {\n        "Transfer": {\n            "args": [\n                [\n                    "amount",\n                    {\n                        "cl_type": "U512",\n                        "bytes": "0400f90295",\n                        "parsed": "2500000000"\n                    }\n                ],\n                [\n                    "target",\n                    {\n                        "cl_type": "PublicKey",\n                        "bytes": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf",\n                        "parsed": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf"\n                    }\n                ],\n                [\n                    "id",\n                    {\n                        "cl_type": {\n                            "Option": "U64"\n                        },\n                        "bytes": "010100000000000000",\n                        "parsed": 1\n                    }\n                ]\n            ]\n        }\n    },\n    "approvals": [\n        {\n            "signer": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986",\n            "signature": "015e0db50b174f3627e0e27cb503f0836b30bd0e0f2c4b989366b0df57500a1cb2b0945408c938bc3c33c40dab59a9c6af6f4e01e474330cd27262bfc87680030e"\n        }\n    ]\n}\n'))),(0,s.kt)("h3",{id:"signing-the-transfer"},"Signing the transfer"),(0,s.kt)("p",null,"Once the deploy file is created, you can sign the deploy using other designated accounts. For this example, we are signing the deploy with a second secret key and saving the output in a ",(0,s.kt)("inlineCode",{parentName:"p"},"transfer2.deploy")," file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client sign-deploy \\\n--input transfer.deploy \\\n--secret-key [PATH]/another_secret_key.pem \\\n--output transfer2.deploy\n")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"input"),(0,s.kt)("td",{parentName:"tr",align:null},"The path of the deploy file, which needs to be signed")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"secret-key"),(0,s.kt)("td",{parentName:"tr",align:null},"The path of the secret key file used to sign the deploy")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"output"),(0,s.kt)("td",{parentName:"tr",align:null},"The path of the output file used to save the deploy with multiple signatures")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client sign-deploy \\\n--input transfer.deploy \\\n--secret-key ~/KEYS/multi-sig/keys/user_1_secret_key.pem \\\n--output transfer2.deploy\n")),(0,s.kt)("p",null,"Towards the end of the following output, you can observe that there is an ",(0,s.kt)("strong",{parentName:"p"},"approvals")," section, which has two signatures, one from the account initiating the transfer and the second from the account used to sign the deploy."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Sample output saved in the transfer2.deploy file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "hash": "88c49fa9108485397a330f294914a6c2d614c581fbe0a31de1a954baad6d709b",\n    "header": {\n        "account": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986",\n        "timestamp": "2023-10-12T19:14:22.080Z",\n        "ttl": "30m",\n        "gas_price": 1,\n        "body_hash": "1bb7436d4703816b5cbeef245dd83c0520f1c7173cdf609c664a29487cc5de1c",\n        "dependencies": [],\n        "chain_name": "casper-test"\n    },\n    "payment": {\n        "ModuleBytes": {\n            "module_bytes": "",\n            "args": [\n                [\n                    "amount",\n                    {\n                        "cl_type": "U512",\n                        "bytes": "0400e1f505",\n                        "parsed": "100000000"\n                    }\n                ]\n            ]\n        }\n    },\n    "session": {\n        "Transfer": {\n            "args": [\n                [\n                    "amount",\n                    {\n                        "cl_type": "U512",\n                        "bytes": "0400f90295",\n                        "parsed": "2500000000"\n                    }\n                ],\n                [\n                    "target",\n                    {\n                        "cl_type": "PublicKey",\n                        "bytes": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf",\n                        "parsed": "0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf"\n                    }\n                ],\n                [\n                    "id",\n                    {\n                        "cl_type": {\n                            "Option": "U64"\n                        },\n                        "bytes": "010100000000000000",\n                        "parsed": 1\n                    }\n                ]\n            ]\n        }\n    },\n    "approvals": [\n        {\n            "signer": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986",\n            "signature": "015e0db50b174f3627e0e27cb503f0836b30bd0e0f2c4b989366b0df57500a1cb2b0945408c938bc3c33c40dab59a9c6af6f4e01e474330cd27262bfc87680030e"\n        },\n        {\n            "signer": "01e3d3392c2e0b943abe709b25de5c353e5e1e9d95c7a76e3dd343d8aa1aa08d51",\n            "signature": "017793ad52d27393b1aa8ff5bb9bdbcb48708910d6cdabd9a89b44690ca174edf8924aad340bf901ac343391cb4cba7cf4db07390372f28ecf471fd522e0b63803"\n        }\n    ]\n}\n'))),(0,s.kt)("h3",{id:"sending-the-deploy"},"Sending the deploy"),(0,s.kt)("p",null,"The next step is to send the deploy for processing on the network. As described in the ",(0,s.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites")," section, you need to get an active node address from the corresponding network to complete this task. The following example uses the node ",(0,s.kt)("inlineCode",{parentName:"p"},"https://rpc.testnet.casperlabs.io/")," from the Testnet."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client send-deploy \\\n--input transfer2.deploy \\\n--node-address https://rpc.testnet.casperlabs.io/\n")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"input"),(0,s.kt)("td",{parentName:"tr",align:null},"The path of the deploy file, which is used as the input")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"node-address"),(0,s.kt)("td",{parentName:"tr",align:null},"The Hostname or IP and port of the node")))),(0,s.kt)("p",null,"Make a note of the ",(0,s.kt)("em",{parentName:"p"},"deploy_hash")," from the ",(0,s.kt)("inlineCode",{parentName:"p"},"send-deploy")," command output to verify the status of the deploy."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Successful output of the send-deploy command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "id": -818883417884028030,\n    "result": {\n        "api_version": "1.5.3",\n        "deploy_hash": "88c49fa9108485397a330f294914a6c2d614c581fbe0a31de1a954baad6d709b"\n    }\n}\n'))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If you encounter an account authorization error, you ",(0,s.kt)("strong",{parentName:"p"},"must set up the source account to allow multi-signature deploys")," using session code. The ",(0,s.kt)("a",{parentName:"p",href:"/resources/tutorials/advanced/two-party-multi-sig"},"Two-Party Multi-Signature Deploys")," workflow is an example of how to accomplish this.")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Example of an account authorization error"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": -32008,\n    "message": "deploy parameter failure: account authorization invalid at prestate_hash: 5f0392de8ac3512a48a110acfc5bc10d4a6a07109b350ae14cbec0428656c8ac"\n}\n'))),(0,s.kt)("h3",{id:"verifying-the-transfer"},"Verifying the transfer"),(0,s.kt)("p",null,"To verify the transfer status, see ",(0,s.kt)("a",{parentName:"p",href:"/developers/cli/transfers/verify-transfer"},"Verifying a Transfer"),"."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can also verify if the transfer was successful by checking your account balance using a ",(0,s.kt)("a",{parentName:"p",href:"/users/block-explorer"},"block explorer"),".")))}h.isMDXComponent=!0}}]);