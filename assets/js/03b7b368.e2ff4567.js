"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1598],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),k=r,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=k;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7014:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],c={title:"On-chain Installation",slug:"/resources/tokens/cep18/quickstart-guide"},l="Installing and Interacting with a CEP-18 Contract",i={unversionedId:"resources/tokens/cep18/quickstart-guide",id:"resources/tokens/cep18/quickstart-guide",title:"On-chain Installation",description:"This quick start guide introduces you to the Casper client commands and Wasm files necessary to deploy a CEP-18 Casper Fungible Token contract to a Casper network.",source:"@site/source/docs/casper/resources/tokens/cep18/quickstart-guide.md",sourceDirName:"resources/tokens/cep18",slug:"/resources/tokens/cep18/quickstart-guide",permalink:"/resources/tokens/cep18/quickstart-guide",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/resources/tokens/cep18/quickstart-guide.md",tags:[],version:"current",lastUpdatedAt:1714742814,formattedLastUpdatedAt:"May 3, 2024",frontMatter:{title:"On-chain Installation",slug:"/resources/tokens/cep18/quickstart-guide"},sidebar:"resources",previous:{title:"Fungible Token Workflow",permalink:"/resources/tokens/cep18/full-tutorial"},next:{title:"CEP-18 Contract Details",permalink:"/resources/tokens/cep18/query"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install the Main Fungible Token Contract",id:"install-the-main-fungible-token-contract",level:2},{value:"Install the <code>cep18_test_contract</code> Contract Package",id:"install-the-cep18_test_contract-contract-package",level:2},{value:"Next Steps",id:"next-steps",level:3}],d={toc:u},k="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)(k,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-and-interacting-with-a-cep-18-contract"},"Installing and Interacting with a CEP-18 Contract"),(0,o.kt)("p",null,"This quick start guide introduces you to the Casper client commands and Wasm files necessary to deploy a CEP-18 Casper Fungible Token contract to a ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live"},"Casper network"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-20#specification"},"Ethereum Request for Comment (ERC-20)")," standard defines a set of rules that dictate the total supply of tokens, how the tokens are transferred, how transactions are approved, and how token data is accessed. These fungible tokens are blockchain-based assets that have value and can be transferred or recorded."),(0,o.kt)("p",null,"To execute transactions on a Casper network (involving fungible tokens), you will need some CSPR tokens to pay for the transactions."),(0,o.kt)("p",null,"For greater detail into the creation and mechanics of the Casper fungible token contract, see the full ",(0,o.kt)("a",{parentName:"p",href:"/resources/tokens/cep18/full-tutorial"},"Casper Fungible Token Tutorial"),"."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before using this guide, ensure you meet the following requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set up your machine as per the ",(0,o.kt)("a",{parentName:"li",href:"/developers/prerequisites/"},"prerequisites")),(0,o.kt)("li",{parentName:"ul"},"Use the ","[Casper command-line client]"),(0,o.kt)("li",{parentName:"ul"},"Get a valid ",(0,o.kt)("a",{parentName:"li",href:"https://cspr.live/tools/peers"},(0,o.kt)("inlineCode",{parentName:"a"},"node-address"))),(0,o.kt)("li",{parentName:"ul"},"Know how to deploy a ",(0,o.kt)("a",{parentName:"li",href:"/developers/cli/sending-deploys/"},"smart contract")," to a Casper network"),(0,o.kt)("li",{parentName:"ul"},"Hold enough CSPR tokens to pay for transactions")),(0,o.kt)("h1",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18"},"fungible token (CEP-18) contract repository")," and run the ",(0,o.kt)("inlineCode",{parentName:"p"},"make build-contract")," command. This will create the ",(0,o.kt)("inlineCode",{parentName:"p"},"cep18.wasm")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"cep18_test_contract.wasm"),". The token Wasm is the main contract. We will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"cep18_test_contract")," Wasm to query the balances and allowances of the fungible token balances throughout this workflow."),(0,o.kt)("h2",{id:"install-the-main-fungible-token-contract"},"Install the Main Fungible Token Contract"),(0,o.kt)("p",null,"The following command will create a deploy containing the CEP-18 contract instance using your supplied arguments as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name")," - The name of your CEP-18 token"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Symbol")," - The symbol used to refer to your CEP-18 token"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total_supply")," - The total supply of the CEP-18 token to be minted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Decimals")," - The number of spaces after the decimal. (As an example, a total supply of 1000000 with a ",(0,o.kt)("inlineCode",{parentName:"li"},"decimals")," setting of 3 would be 1,000.000 tokens)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy -n http://<NODE IP>:<PORT> \\\n--chain-name <CHAIN NAME> \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-path ~/casper/demo/cep18.wasm \\\n--session-arg \"name:string='CEP18'\" \\\n--session-arg \"symbol:string='gris'\" \\\n--session-arg \"total_supply:u256='100'\" \\\n--session-arg \"decimals:u8='1'\" \\\n--payment-amount 150000000000\n")),(0,o.kt)("h2",{id:"install-the-cep18_test_contract-contract-package"},"Install the ",(0,o.kt)("inlineCode",{parentName:"h2"},"cep18_test_contract")," Contract Package"),(0,o.kt)("p",null,"The following command will install the CEP-18 helper contract that allows you to check balances and access approval features."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy -n http://<NODE IP>:<PORT> \\\n--chain-name <CHAIN NAME> \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-path ~/casper/demo/cep18_test_contract.wasm \\\n--payment-amount 50000000000\n")),(0,o.kt)("p",null,"At this point, the account that installed both the main contract and the helper contract will look like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "src": {\n    "Account": {\n    "_accountHash": "account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd",\n    "namedKeys": [\n        {\n        "name": "cep18_test_contract",\n        "key": "hash-999326ca8408dfd37da023eb6fd82f174151be64f83f9fb837632a0d69fd4c7e"\n        },\n        {\n        "name": "cep18_token_contract",\n        "key": "hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180"\n        },\n    ],\n    "mainPurse": "uref-6c062525debdee18d5cad083ca530fcb65ef8741574fba4c97673f4ed00093f7-007",\n    "associatedKeys": [\n        {\n        "accountHash": "account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd",\n        "weight": 1\n        }\n    ],\n    "actionThresholds": {\n        "deployment": 1,\n        "keyManagement": 1\n        }\n        }\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note:"))),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cep18_token_contract")," is the main contract, and is a stored contract, record its hash"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cep18_test_call")," is a contract package which contains the utility contract required to read the balances and allowances of users within the fungible token state."))),(0,o.kt)("h3",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"In the following sections, the sample guide explains the querying of the contract package, token transfers, and approvals."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/resources/tokens/cep18/query"},"Exploring the CEP18 Contracts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/resources/tokens/cep18/transfer"},"CEP-18 Token Transfers and Allowances")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/resources/tokens/cep18/tests"},"Testing Framework for CEP-18"))))}m.isMDXComponent=!0}}]);