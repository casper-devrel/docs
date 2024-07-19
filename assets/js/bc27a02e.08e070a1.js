"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4301],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=t.createContext({}),l=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},p=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=l(a),h=o,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||s;return a?t.createElement(m,c(c({ref:n},p),{},{components:a})):t.createElement(m,c({ref:n},p))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=a.length,c=new Array(s);c[0]=h;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r[u]="string"==typeof e?e:o,c[1]=r;for(var l=2;l<s;l++)c[l]=a[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},14120:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=a(87462),o=(a(67294),a(3905));const s={title:"CEP-18 Transfers",slug:"/resources/tokens/cep18/transfer"},c="CEP-18 Token Transfers and Allowances",r={unversionedId:"resources/tokens/cep18/transfer",id:"version-1.5.6/resources/tokens/cep18/transfer",title:"CEP-18 Transfers",description:"This document describes how to transfer CEP-18 tokens on a Casper network using the Casper client. The Exploring the CEP18 Contracts documentation contains more in depth explanations on how to find the various hashes and URefs referenced throughout this document.",source:"@site/versioned_docs/version-1.5.6/resources/tokens/cep18/transfer.md",sourceDirName:"resources/tokens/cep18",slug:"/resources/tokens/cep18/transfer",permalink:"/docs/resources/tokens/cep18/transfer",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/version-1.5.6/resources/tokens/cep18/transfer.md",tags:[],version:"1.5.6",lastUpdatedAt:1719863791,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{title:"CEP-18 Transfers",slug:"/resources/tokens/cep18/transfer"},sidebar:"resources",previous:{title:"CEP-18 Contract Details",permalink:"/docs/resources/tokens/cep18/query"},next:{title:"Testing Guide",permalink:"/docs/resources/tokens/cep18/tests"}},i={},l=[{value:"Transferring CEP-18 Tokens to Another Account",id:"transferring-cep-18-tokens-to-another-account",level:2},{value:"Invoking the <code>check_balance_of</code> Entry Point",id:"invoking-the-check_balance_of-entry-point",level:3},{value:"Approving an Allowance for Another Account",id:"approving-an-allowance-for-another-account",level:2},{value:"Approving an Account to Spend Tokens on Another Account&#39;s Behalf",id:"approving-an-account-to-spend-tokens-on-another-accounts-behalf",level:3},{value:"Verifying a Previously Issued Allowance",id:"verifying-a-previously-issued-allowance",level:3},{value:"Transferring Tokens from an Allowance",id:"transferring-tokens-from-an-allowance",level:3},{value:"Increasing and Decreasing an Allowance",id:"increasing-and-decreasing-an-allowance",level:3},{value:"Increasing an Allowance",id:"increasing-an-allowance",level:4},{value:"Decreasing an Allowance",id:"decreasing-an-allowance",level:4},{value:"Minting and Burning Additional CEP-18 Tokens",id:"minting-and-burning-additional-cep-18-tokens",level:3},{value:"Minting Additional Tokens",id:"minting-additional-tokens",level:4},{value:"Burning Tokens",id:"burning-tokens",level:4},{value:"Changing Account Security Permissions",id:"changing-account-security-permissions",level:3},{value:"Next Steps",id:"next-steps",level:3}],p={toc:l},u="wrapper";function d(e){let{components:n,...a}=e;return(0,o.kt)(u,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cep-18-token-transfers-and-allowances"},"CEP-18 Token Transfers and Allowances"),(0,o.kt)("p",null,"This document describes how to transfer CEP-18 tokens on a Casper network using the Casper client. The ",(0,o.kt)("a",{parentName:"p",href:"/docs/resources/tokens/cep18/query"},"Exploring the CEP18 Contracts")," documentation contains more in depth explanations on how to find the various hashes and URefs referenced throughout this document."),(0,o.kt)("h2",{id:"transferring-cep-18-tokens-to-another-account"},"Transferring CEP-18 Tokens to Another Account"),(0,o.kt)("p",null,"The following command will invoke the ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," entry point on your instance of CEP-18, directing it to transfer 10 of the associated CEP-18 tokens to another account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'casper-client put-deploy -n http://<node IP>:<PORT> \\\n// The chain name of the Casper network on which your CEP-18 instance was installed.\n--chain-name <CHAIN NAME>\\\n// The local path to your account\'s secret key.\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n// The contract hash of your CEP-18 contract instance.\n--session-hash hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180 \\\n// The name of the entry point you are invoking.\n--session-entry-point "transfer" \\\n// The account hash of the account that you are sending CEP-18 tokens to.\n--session-arg "recipient:key=\'account-hash-9f81014b9c7406c531ebf0477132283f4eb59143d7903a2fae54358b26cea44b" \\\n// The amount of CEP-18 tokens you are sending to the receiving account.\n--session-arg "amount:u256=\'10\'" \\\n// The gas payment you are allotting, in motes.\n--payment-amount "10000000000"\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Casper client command without comments")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://<node IP>:<PORT> \\\n--chain-name <CHAIN NAME>\\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-hash hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180 \\\n--session-entry-point "transfer" \\\n--session-arg "recipient:key=\'account-hash-9f81014b9c7406c531ebf0477132283f4eb59143d7903a2fae54358b26cea44b" \\\n--session-arg "amount:u256=\'50\'" \\\n--payment-amount "10000000000"\n'))),(0,o.kt)("p",null,"This command will return a deploy hash that you can query using ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-client get-deploy"),". Querying the Deploy allows you to verify execution success, but you will need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"check_balance_of")," entry point on the utility contract to verify the account's balance."),(0,o.kt)("h3",{id:"invoking-the-check_balance_of-entry-point"},"Invoking the ",(0,o.kt)("inlineCode",{parentName:"h3"},"check_balance_of")," Entry Point"),(0,o.kt)("p",null,"The following Casper client command invokes the ",(0,o.kt)("inlineCode",{parentName:"p"},"check_balance_of")," entry point on the ",(0,o.kt)("inlineCode",{parentName:"p"},"cep18_test_contract"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'casper-client put-deploy -n http://<node IP>:<PORT>\\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-package-name "cep18_test_contract" \\\n--session-entry-point "check_balance_of" \\\n// This is the contract hash of your CEP-18 contract instance, passed in as an `account-hash-`.\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n// This is the account hash of the account you are checking the balance of.\n--session-arg "address:key=\'account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd\'" \\\n--chain-name <CHAIN NAME> \\\n--payment-amount 1000000000\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Casper client command without comments")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://<node IP>:<PORT>\\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-package-name "cep18_test_contract" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd\'" \\\n--chain-name <CHAIN NAME> \\\n--payment-amount 1000000000\n'))),(0,o.kt)("p",null,"After sending this command, you will need to query the ",(0,o.kt)("inlineCode",{parentName:"p"},"results")," URef within the ",(0,o.kt)("inlineCode",{parentName:"p"},"NamedKeys")," of your ",(0,o.kt)("inlineCode",{parentName:"p"},"cep18_test_contract")," utility contract instance. More information on finding this URef can be found in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/resources/tokens/cep18/query#querying-the-utility-contract"},"Exploring the CEP18 Contracts")," document."),(0,o.kt)("p",null,"You can use the following command to query global state for the ",(0,o.kt)("inlineCode",{parentName:"p"},"results")," URef."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"casper-client query-global-state -n http://<NODE IP>:<PORT> \\\n// This is the `results` URef location from your `cep18_test_contract` `NamedKeys`\n--key uref-a46ad389b53715d9991a513c8ca48e1502facc4c563c0700a31e830c4cb8a7d4-007 \\\n--state-root-hash 3aecd0e4b6ec29ee7c1eed701132eabfe6e66a1e0f1595c9c65bfed447e474f7\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Casper client command without comments")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -n http://<NODE IP>:<PORT> \\\n--key uref-a46ad389b53715d9991a513c8ca48e1502facc4c563c0700a31e830c4cb8a7d4-007 \\\n--state-root-hash 3aecd0e4b6ec29ee7c1eed701132eabfe6e66a1e0f1595c9c65bfed447e474f7\n"))),(0,o.kt)("p",null,"This command should show something similar to the following in response, with ",(0,o.kt)("inlineCode",{parentName:"p"},"parsed")," being the amount of CEP-18 tokens that the account holds."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -8841145064950441692,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.0.0",\n    "block_header": null,\n    "merkle_proof": "[3796 hex chars]",\n    "stored_value": {\n      "CLValue": {\n        "bytes": "010a",\n        "cl_type": "U256",\n        "parsed": "10"\n      }\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"approving-an-allowance-for-another-account"},"Approving an Allowance for Another Account"),(0,o.kt)("p",null,"The Casper fungible token contract features an ",(0,o.kt)("inlineCode",{parentName:"p"},"allowance")," entry point that allows an account to delegate another account to spend a preset number of CEP-18 tokens from their balance. "),(0,o.kt)("h3",{id:"approving-an-account-to-spend-tokens-on-another-accounts-behalf"},"Approving an Account to Spend Tokens on Another Account's Behalf"),(0,o.kt)("p",null,"The following command approves a third-party account to spend an ",(0,o.kt)("inlineCode",{parentName:"p"},"allowance")," of 15 CEP-18 tokens from the balance of the account that sent the CEP-18 instance. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'casper-client put-deploy -n http://<node IP>:<PORT>\\\n--chain-name <CHAIN NAME> \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n// This is the contract hash of the CEP-18 token contract.\n--session-hash hash-05d893e76c731729fc26339e5a970bd79fbf4a6adf743c8385431fb494bff45e \\\n--session-entry-point "approve" \\\n// This is the account hash of the account that will receive an allowance from the balance of the account that sent the Deploy.\n--session-arg "spender:key=\'account-hash-17192017d32db5dc9f598bf8ac6ac35ee4b64748669b00572d88335941479513\'" \\\n// This is the number of CEP-18 tokens included in the allowance.\n--session-arg "amount:u256=\'15\'" \\\n--payment-amount "10000000000"\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Casper client command without comments")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://<node IP>:<PORT>\\\n--chain-name <CHAIN NAME> \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-hash hash-05d893e76c731729fc26339e5a970bd79fbf4a6adf743c8385431fb494bff45e \\\n--session-entry-point "approve" \\\n--session-arg "spender:key=\'account-hash-17192017d32db5dc9f598bf8ac6ac35ee4b64748669b00572d88335941479513\'" \\\n--session-arg "amount:u256=\'15\'" \\\n--payment-amount "10000000000"\n'))),(0,o.kt)("h3",{id:"verifying-a-previously-issued-allowance"},"Verifying a Previously Issued Allowance"),(0,o.kt)("p",null,"After approving an account to spend an ",(0,o.kt)("inlineCode",{parentName:"p"},"allowance")," of tokens, we can verify the allotted allowance by using the utility contract. The following command will write the ",(0,o.kt)("inlineCode",{parentName:"p"},"allowance")," of the spender's account to the ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," URef of in the utility contract's ",(0,o.kt)("inlineCode",{parentName:"p"},"NamedKeys"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'casper-client put-deploy -n http://<node IP>:<PORT>\\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-package-name "cep18_test_contract" \\\n--session-entry-point "check_allowance_of" \\\n// This is the contract hash for the CEP-18 token.\n--session-arg "token_contract:account_hash=\'account-hash-05d893e76c731729fc26339e5a970bd79fbf4a6adf743c8385431fb494bff45e\'" \\\n// This is the account hash for the account that owns the CEP-18 tokens.\n--session-arg "owner:key=\'account-hash-39f15c23df9be1244572bb499fac62cbcad3cab2dc1438609842f602f943d7d2\'" \\\n// This is the account hash for the account previously authorized to spend an allowance of the owning account\'s CEP-18 tokens.\n--session-arg "spender:key=\'account-hash-17192017d32db5dc9f598bf8ac6ac35ee4b64748669b00572d88335941479513\'" \\\n--chain-name <CHAIN NAME> \\\n--payment-amount 10000000000\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Casper client command without comments")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://<node IP>:<PORT>\\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-package-name "cep18_test_contract" \\\n--session-entry-point "check_allowance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-05d893e76c731729fc26339e5a970bd79fbf4a6adf743c8385431fb494bff45e\'" \\\n--session-arg "owner:key=\'account-hash-39f15c23df9be1244572bb499fac62cbcad3cab2dc1438609842f602f943d7d2\'" \\\n--session-arg "spender:key=\'account-hash-17192017d32db5dc9f598bf8ac6ac35ee4b64748669b00572d88335941479513\'" \\\n--chain-name <CHAIN NAME> \\\n--payment-amount 10000000000\n'))),(0,o.kt)("p",null,"The following command queries global state to return the value stored under the ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," URef:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"casper-client query-global-state -n http://<node IP>:<PORT> \\\n// This is the previously identified `result` URef from the utility contract's `NamedKeys`\n--key uref-a46ad389b53715d9991a513c8ca48e1502facc4c563c0700a31e830c4cb8a7d4-007 \\\n--state-root-hash e64f877f65df26db74300bb175c244d589bd88a23b91abf9ceb73ac5e65e90f1\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Casper client command without comments")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -n http://<node IP>:<PORT> \\\n--key uref-a46ad389b53715d9991a513c8ca48e1502facc4c563c0700a31e830c4cb8a7d4-007 \\\n--state-root-hash e64f877f65df26db74300bb175c244d589bd88a23b91abf9ceb73ac5e65e90f1\n"))),(0,o.kt)("p",null,"You should get a response similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -9142472925449984061,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.0.0",\n    "block_header": null,\n    "merkle_proof": "[3796 hex chars]",\n    "stored_value": {\n      "CLValue": {\n        "bytes": "010f",\n        "cl_type": "U256",\n        "parsed": "15"\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"transferring-tokens-from-an-allowance"},"Transferring Tokens from an Allowance"),(0,o.kt)("p",null,"The following command allows an account to transfer CEP-18 tokens held by another account up to their approved ",(0,o.kt)("inlineCode",{parentName:"p"},"allowance"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'casper-client put-deploy -n http://<NODE IP>:<PORT> \\\n--chain-name <CHAIN NAME> \\\n// This is the secret key for the account that is spending their `allowance` from another account\'s balance.\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n// This is the CEP-18 token contract.\n--session-hash hash-05d893e76c731729fc26339e5a970bd79fbf4a6adf743c8385431fb494bff45e \\\n--session-entry-point "transfer_from" \\\n// This is the account hash of the account that holds the CEP-18 in their balance.\n--session-arg "owner:key=\'account-hash-39f15c23df9be1244572bb499fac62cbcad3cab2dc1438609842f602f943d7d2\'" \\\n// This is the account hash of the account that will receive the transferred CEP-18 tokens.\n--session-arg "recipient:key=\'account-hash-17192017d32db5dc9f598bf8ac6ac35ee4b64748669b00572d88335941479513\'" \\\n// This is the amount of tokens to be transferred. If this amount exceeds the `allowance` of the account sending the Deploy, it will fail.\n--session-arg "amount:u256=\'10\'" \\\n--payment-amount "10000000000"\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Casper client command without comments")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://<NODE IP>:<PORT> \\\n--chain-name <CHAIN NAME> \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-hash hash-05d893e76c731729fc26339e5a970bd79fbf4a6adf743c8385431fb494bff45e \\\n--session-entry-point "transfer_from" \\\n--session-arg "owner:key=\'account-hash-39f15c23df9be1244572bb499fac62cbcad3cab2dc1438609842f602f943d7d2\'" \\\n--session-arg "recipient:key=\'account-hash-17192017d32db5dc9f598bf8ac6ac35ee4b64748669b00572d88335941479513\'" \\\n--session-arg "amount:u256=\'10\'" \\\n--payment-amount "10000000000"\n'))),(0,o.kt)("h3",{id:"increasing-and-decreasing-an-allowance"},"Increasing and Decreasing an Allowance"),(0,o.kt)("h4",{id:"increasing-an-allowance"},"Increasing an Allowance"),(0,o.kt)("p",null,"The following command increases the designated ",(0,o.kt)("inlineCode",{parentName:"p"},"allowance")," for the provided account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://<NODE IP>:<PORT> \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-package-name "cep18_contract_package_CEP18" \\\n--session-entry-point "increase_allowance" \\\n// This is the account hash of the previously authorized allowance account.\n--session-arg "spender:key=\'account-hash-683f53f56926f54ef9584b07585b025c68415dc05f7b2e56749153574b83d5cd\'" \\\n// This is the additional number of CEP-18 tokens that the authorized account may spend.\n--session-arg "amount:U256=\'10\'" \\\n--chain-name <CHAIN NAME> \\\n--payment-amount 1000000000\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Casper client command without comments")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://<NODE IP>:<PORT> \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-package-name "cep18_contract_package_CEP18" \\\n--session-entry-point "increase_allowance" \\\n--session-arg "spender:key=\'account-hash-683f53f56926f54ef9584b07585b025c68415dc05f7b2e56749153574b83d5cd\'" \\\n--session-arg "amount:U256=\'10\'" \\\n--chain-name <CHAIN NAME> \\\n--payment-amount 1000000000\n'))),(0,o.kt)("h4",{id:"decreasing-an-allowance"},"Decreasing an Allowance"),(0,o.kt)("p",null,"The following command decreases the designated allowance for the provided account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://<NODE IP>:<PORT> \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-package-name "cep18_contract_package_CEP18" \\\n--session-entry-point "decrease_allowance" \\\n// This is the account hash of the previously authorized allowance account.\n--session-arg "spender:key=\'account-hash-683f53f56926f54ef9584b07585b025c68415dc05f7b2e56749153574b83d5cd\'" \\\n// This is the additional number of CEP-18 tokens that the authorized account may spend.\n--session-arg "amount:U256=\'10\'" \\\n--chain-name <CHAIN NAME> \\\n--payment-amount 1000000000\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Casper client command without comments")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://<NODE IP>:<PORT> \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-package-name "cep18_contract_package_CEP18" \\\n--session-entry-point "decrease_allowance" \\\n--session-arg "spender:key=\'account-hash-683f53f56926f54ef9584b07585b025c68415dc05f7b2e56749153574b83d5cd\'" \\\n--session-arg "amount:U256=\'10\'" \\\n--chain-name <CHAIN NAME> \\\n--payment-amount 1000000000\n'))),(0,o.kt)("h3",{id:"minting-and-burning-additional-cep-18-tokens"},"Minting and Burning Additional CEP-18 Tokens"),(0,o.kt)("h4",{id:"minting-additional-tokens"},"Minting Additional Tokens"),(0,o.kt)("p",null,"If the contract allows for minting, the following command will mint a number of CEP-18 tokens directly to the provided account. This increases the total supply of the token in question."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://<NODE IP>:<PORT> \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-package-name "cep18_contract_package_CEP18" \\\n--session-entry-point "mint" \\\n// This is the account that will receive the newly minted CEP-18 tokens.\n--session-arg "owner:key=\'account-hash-683f53f56926f54ef9584b07585b025c68415dc05f7b2e56749153574b83d5cd\'" \\\n// This is the number of additional CEP-18 tokens to add to the total supply.\n--session-arg "amount:U256=\'10\'" \\\n--chain-name <CHAIN NAME> \\\n--payment-amount 1000000000\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Casper client command without comments")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://<NODE IP>:<PORT> \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-package-name "cep18_contract_package_CEP18" \\\n--session-entry-point "mint" \\\n--session-arg "owner:key=\'account-hash-683f53f56926f54ef9584b07585b025c68415dc05f7b2e56749153574b83d5cd\'" \\\n--session-arg "amount:U256=\'10\'" \\\n--chain-name <CHAIN NAME> \\\n--payment-amount 1000000000\n'))),(0,o.kt)("h4",{id:"burning-tokens"},"Burning Tokens"),(0,o.kt)("p",null,"If the contract allows for burning, the following command will burn a number of CEP-18 tokens directly from the provided account. This decreases the total supply of the token in question."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://<NODE IP>:<PORT> \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-package-name "cep18_contract_package_CEP18" \\\n--session-entry-point "burn" \\\n// This is the account that the tokens will be burned from.\n--session-arg "owner:key=\'account-hash-683f53f56926f54ef9584b07585b025c68415dc05f7b2e56749153574b83d5cd\'" \\\n// This is the number of CEP-18 tokens to remove from the total supply.\n--session-arg "amount:U256=\'10\'" \\\n--chain-name <CHAIN NAME> \\\n--payment-amount 1000000000\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Casper client command without comments")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://<NODE IP>:<PORT> \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-package-name "cep18_contract_package_CEP18" \\\n--session-entry-point "burn" \\\n// This is the account that the tokens will be burned from.\n--session-arg "owner:key=\'account-hash-683f53f56926f54ef9584b07585b025c68415dc05f7b2e56749153574b83d5cd\'" \\\n// This is the number of CEP-18 tokens to remove from the total supply.\n--session-arg "amount:U256=\'10\'" \\\n--chain-name <CHAIN NAME> \\\n--payment-amount 1000000000\n'))),(0,o.kt)("h3",{id:"changing-account-security-permissions"},"Changing Account Security Permissions"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"change_security")," entrypoint can be used by an account with ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," access to alter the security level of other accounts."),(0,o.kt)("p",null,"There are five security levels, with the strongest level taking precedence over any other assigned levels. In order of highest strength to lowest:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"None")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," overrides other security levels and removes all admin, minting and burning access of an account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Admin")," - Allows the account full access and control over the CEP-18 contract.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"MintAndBurn")," - Allows the account to mint new tokens and burn existing tokens.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Burner")," - The account can burn tokens.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Minter")," - The account can mint new tokens."))),(0,o.kt)("p",null,"Here is an example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"session-arg")," that provides a list of account hashes to be included on the ",(0,o.kt)("inlineCode",{parentName:"p"},"mint_and_burn_list"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"--session-arg \"mint_and_burn_list:string='account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7,account-hash-0ea7998b2822afe5b62b08a21d54c941ad791279b089f3f7ede0d72b477eca34,account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655'\"\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Be aware that removing all admin accounts will lock out all admin functionality.")),(0,o.kt)("p",null,"The following command can be supplied with any of the optional arguments above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://<NODE IP>:<PORT> \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-package-name "cep18_contract_package_CEP18" \\\n--session-entry-point "change_security" \\\n/// The following arguments are all optional and each consists of a string of the account hashes to be added to the list specified, separated by commas.\n--session-arg "none_list:string:\'<List of account hashes>\'" \\\n--session-arg "admin_list:string:\'<List of account hashes>\'" \\\n--session-arg "mint_and_burn_list:string:\'<List of account hashes>\'" \\\n--session-arg "burner_list:string:\'<List of account hashes>\'" \\\n--chain-name <CHAIN NAME> \\\n--payment-amount 1000000000\n')),(0,o.kt)("h3",{id:"next-steps"},"Next Steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/resources/tokens/cep18/tests"},"Testing Framework for CEP-18"))))}d.isMDXComponent=!0}}]);