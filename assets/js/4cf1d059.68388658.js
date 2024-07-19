"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5358],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),p=r,h=u["".concat(l,".").concat(p)]||u[p]||_[p]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},92198:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>_,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={title:"Authorization Keys"},o="Working with Authorization Keys",s={unversionedId:"resources/advanced/list-auth-keys-tutorial",id:"resources/advanced/list-auth-keys-tutorial",title:"Authorization Keys",description:"These examples should not be used in a production environment. They are intended only for teaching and must be tested and adapted for production use.",source:"@site/source/docs/resources/advanced/list-auth-keys-tutorial.md",sourceDirName:"resources/advanced",slug:"/resources/advanced/list-auth-keys-tutorial",permalink:"/next/resources/advanced/list-auth-keys-tutorial",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/resources/advanced/list-auth-keys-tutorial.md",tags:[],version:"current",lastUpdatedAt:1719861245,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{title:"Authorization Keys"},sidebar:"resources",previous:{title:"Runtime Return Values",permalink:"/next/resources/tutorials/advanced/return-values-tutorial"},next:{title:"Token Transfers",permalink:"/next/resources/tutorials/advanced/transfer-token-to-contract"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Workflow",id:"workflow",level:2},{value:"The example contract",id:"the-example-contract",level:3},{value:"Client Wasm files",id:"client-wasm-files",level:3},{value:"<code>add_keys.wasm</code>",id:"add_keyswasm",level:4},{value:"<code>contract_call.wasm</code>",id:"contract_callwasm",level:4},{value:"Testing this example",id:"testing-this-example",level:3},{value:"Test 1: <code>should_allow_install_contract_with_default_account</code>",id:"test-1-should_allow_install_contract_with_default_account",level:4},{value:"Test 2: <code>should_disallow_install_with_non_added_authorization_key</code>",id:"test-2-should_disallow_install_with_non_added_authorization_key",level:4},{value:"Test 3: <code>should_allow_install_with_added_authorization_key</code>",id:"test-3-should_allow_install_with_added_authorization_key",level:4},{value:"Test 4: <code>should_allow_entry_point_with_installer_authorization_key</code>",id:"test-4-should_allow_entry_point_with_installer_authorization_key",level:4},{value:"Test 5: <code>should_allow_entry_point_with_account_authorization_key</code>",id:"test-5-should_allow_entry_point_with_account_authorization_key",level:4},{value:"Test 6: <code>should_disallow_entry_point_without_authorization_key</code>",id:"test-6-should_disallow_entry_point_without_authorization_key",level:4},{value:"Test 7: <code>should_allow_entry_point_through_contract_call_with_authorization_key</code>",id:"test-7-should_allow_entry_point_through_contract_call_with_authorization_key",level:4},{value:"Test 8: <code>should_disallow_entry_point_through_contract_call_without_authorization_key</code>",id:"test-8-should_disallow_entry_point_through_contract_call_without_authorization_key",level:4}],c={toc:d},u="wrapper";function _(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"working-with-authorization-keys"},"Working with Authorization Keys"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"These examples should not be used in a production environment. They are intended only for teaching and must be tested and adapted for production use.")),(0,r.kt)("p",null,"This tutorial demonstrates retrieving and using the authorization keys associated with a deploy using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.list_authorization_keys.html"},"list_authorization_keys")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let authorization_keys = runtime::list_authorization_keys();\n")),(0,r.kt)("p",null,"Remember that authorization keys are listed under a Deploy's ",(0,r.kt)("a",{parentName:"p",href:"/next/concepts/serialization-standard#serialization-standard-deploy"},"approvals")," section, which lists the signatures and the public keys of the signers, also called authorizing keys. Here is an example of a deploy's approvals:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"approvals": [\n    {\n      "signer": "02021a4da3d6f32ea3ebd2519e1a37a1b811671085bf4f1cf2a36b931344a99b756a",\n      "signature": "02df8cdf0bff3bd93e831d24563d5acbefa0ed13814550e910d03208d5fb3c11770dd3d918784ec84342e53666eacf59aeecbf4ce0cdd60e167c4a4b20e4b8f481"\n    }\n]\n')),(0,r.kt)("p",null,"The contract code in this example retrieves the set of authorization keys for a given deploy by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime::list_authorization_keys")," function. In other words, ",(0,r.kt)("inlineCode",{parentName:"p"},"list_authorization_keys")," returns the set of account hashes representing the keys used to sign a deploy. Upon installation, the contract code stores the authorization keys for the installer deploy into a NamedKey. The contract also contains an entry point that returns the intersection of the caller deploy's, and installer deploy's authorization keys. The tests in this repository verify different scenarios and check the resulting intersection. "),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You meet the ",(0,r.kt)("a",{parentName:"li",href:"/next/developers/prerequisites"},"development prerequisites")," and are familiar with ",(0,r.kt)("a",{parentName:"li",href:"/next/writing-contracts"},"writing and testing on-chain code")),(0,r.kt)("li",{parentName:"ul"},"You know how to ",(0,r.kt)("a",{parentName:"li",href:"/next/developers/cli/sending-transactions"},"send and verify deploys")),(0,r.kt)("li",{parentName:"ul"},"You are familiar with these concepts:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/concepts/serialization-standard#serialization-standard-account"},"Casper Accounts")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/concepts/serialization-standard#serialization-standard-deploy"},"Deploys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/concepts/serialization-standard#associatedkey"},"Associated Keys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/concepts/serialization-standard#approval"},"Approvals"),", also known as authorization keys")))),(0,r.kt)("h2",{id:"workflow"},"Workflow"),(0,r.kt)("p",null,"To start, clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/tutorials-example-wasm"},"tutorials-example-wasm")," repository. Then, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization-keys-example")," directory, prepare your Rust environment, and build the tests with the following commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/casper-ecosystem/tutorials-example-wasm\ncd tutorials-example-wasm/authorization-keys-example\nmake prepare\nmake test\n")),(0,r.kt)("p",null,"Review the repository's structure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/tree/dev/authorization-keys-example/client"},"client")," - A client folder containing two Wasm files",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add_keys.wasm")," - Session code that adds an associated key to the calling account"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contract_call.wasm")," - Session code that calls the contract's entry point and stores the result into a named key"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/tree/dev/authorization-keys-example/contract"},"contract")," - A simple contract that demonstrates the usage of authorization keys and compiles into a ",(0,r.kt)("inlineCode",{parentName:"li"},"contract.wasm")," file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/tree/dev/authorization-keys-example/tests"},"tests")," - Tests and supporting utilities to verify and demonstrate the contract's expected behavior")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This tutorial highlights certain lines of code found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/tree/dev/authorization-keys-example"},"GitHub"),".")),(0,r.kt)("h3",{id:"the-example-contract"},"The example contract"),(0,r.kt)("p",null,"Upon ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/contract/src/main.rs#L75"},"installation"),", the contract in this example stores the authorization keys that signed the installer deploy into a named key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\npub extern "C" fn init() {\n    if runtime::get_key(AUTHORIZATION_KEYS_INSTALLER).is_none() {\n        let authorization_keys: Vec<AccountHash> =\n            runtime::list_authorization_keys().iter().cloned().collect();\n\n        let authorization_keys: Key = storage::new_uref(authorization_keys).into();\n        runtime::put_key(AUTHORIZATION_KEYS_INSTALLER, authorization_keys);\n    }\n}\n')),(0,r.kt)("p",null,"The contract contains an entry point that returns the intersection of the caller deploy's authorization keys and the installer deploy's authorization keys saved during contract installation. The following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/contract/src/main.rs#L52"},"usage")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime::list_authorization_keys")," retrieves the set of account hashes representing the keys signing the caller deploy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let authorization_keys_caller: Vec<AccountHash> =\n    runtime::list_authorization_keys().iter().cloned().collect();\n")),(0,r.kt)("h3",{id:"client-wasm-files"},"Client Wasm files"),(0,r.kt)("h4",{id:"add_keyswasm"},(0,r.kt)("inlineCode",{parentName:"h4"},"add_keys.wasm")),(0,r.kt)("p",null,"This file contains session code that adds an associated key to the calling account. For more details and a similar example, visit the ",(0,r.kt)("a",{parentName:"p",href:"/next/resources/tutorials/advanced/two-party-multi-sig"},"Two-Party Multi-Signature")," tutorial."),(0,r.kt)("h4",{id:"contract_callwasm"},(0,r.kt)("inlineCode",{parentName:"h4"},"contract_call.wasm")),(0,r.kt)("p",null,"This session code calls the contract's entry point, which returns the intersection between two sets of keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The authorization keys that signed the deploy that installed the contract (referred to in this tutorial as the installer deploy)"),(0,r.kt)("li",{parentName:"ul"},"The authorization keys that signed the deploy calling the entry point (referred to in this tutorial as the caller deploy).")),(0,r.kt)("p",null,"The intersection result is a list stored under a named key of the account calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"contract_call.wasm"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let key_name: String = runtime::get_named_arg(ARG_KEY_NAME);\nlet intersection =\n    runtime::call_contract::<Vec<AccountHash>>(contract_hash, ENTRY_POINT, runtime_args! {});\nruntime::put_key(&key_name, storage::new_uref(intersection).into());\n}\n")),(0,r.kt)("h3",{id:"testing-this-example"},"Testing this example"),(0,r.kt)("p",null,"This section highlights the tests written for this example, demonstrating the usage of authorization keys. The tests are divided into three parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Testing the contract installation"),(0,r.kt)("li",{parentName:"ul"},"Testing the contract's unique entry point"),(0,r.kt)("li",{parentName:"ul"},"Testing the entry point using a client contract call")),(0,r.kt)("p",null,"These tests focus on testing the contract installation."),(0,r.kt)("h4",{id:"test-1-should_allow_install_contract_with_default_account"},"Test 1: ",(0,r.kt)("inlineCode",{parentName:"h4"},"should_allow_install_contract_with_default_account")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Installer deploy authorization keys"),(0,r.kt)("th",{parentName:"tr",align:null},"Expected outcome"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT_ACCOUNT_ADDR")),(0,r.kt)("td",{parentName:"tr",align:null},"Successful contract installation")))),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L28"},"test")," signs the installer deploy with an authorization key ",(0,r.kt)("inlineCode",{parentName:"p"},"DEFAULT_ACCOUNT_ADDR")," that belongs to the calling accounts's associated keys. In other words, since the caller is the default account, ",(0,r.kt)("inlineCode",{parentName:"p"},"DEFAULT_ACCOUNT_ADDR")," can be used to sign the deploy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let session_code = PathBuf::from(CONTRACT_WASM);\nlet session_args = RuntimeArgs::new();\n\nlet deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[*DEFAULT_ACCOUNT_ADDR])\n    .with_address(*DEFAULT_ACCOUNT_ADDR)\n    .with_session_code(session_code, session_args)\n    .build();\n\n")),(0,r.kt)("h4",{id:"test-2-should_disallow_install_with_non_added_authorization_key"},"Test 2: ",(0,r.kt)("inlineCode",{parentName:"h4"},"should_disallow_install_with_non_added_authorization_key")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Installer deploy authorization keys"),(0,r.kt)("th",{parentName:"tr",align:null},"Expected outcome"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT_ACCOUNT_ADDR"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"account_addr_1")),(0,r.kt)("td",{parentName:"tr",align:null},"Failed contract installation")))),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L57"},"test")," tries to sign the installer deploy with an authorization key that is not part of the caller's associated keys. This is not allowed because the authorization keys used to sign a deploy need to be a subset of the caller's associated keys. So, the installer deploy fails as expected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let session_code = PathBuf::from(CONTRACT_WASM);\nlet session_args = RuntimeArgs::new();\n\nlet deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[*DEFAULT_ACCOUNT_ADDR, account_addr_1])\n    .with_address(*DEFAULT_ACCOUNT_ADDR)\n    .with_session_code(session_code, session_args)\n    .build();\n\nlet execute_request = ExecuteRequestBuilder::from_deploy_item(deploy_item).build();\nbuilder.exec(execute_request).commit().expect_failure();\nlet error = builder.get_error().expect("must have error");\nassert_eq!(error.to_string(), "Authorization failure: not authorized.");\n')),(0,r.kt)("h4",{id:"test-3-should_allow_install_with_added_authorization_key"},"Test 3: ",(0,r.kt)("inlineCode",{parentName:"h4"},"should_allow_install_with_added_authorization_key")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Installer deploy authorization keys"),(0,r.kt)("th",{parentName:"tr",align:null},"Expected outcome"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT_ACCOUNT_ADDR"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"account_addr_1")),(0,r.kt)("td",{parentName:"tr",align:null},"Successful contract installation")))),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L83"},"test")," demonstrates a successful installer deploy using an added authorization key. After the initial test framework setup, the test calls session code to add the associated account ",(0,r.kt)("inlineCode",{parentName:"p"},"account_addr_1")," to the default account's associated keys."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Add account_addr_1 to the default account's associated keys\nlet session_code = PathBuf::from(ADD_KEYS_WASM);\nlet session_args = runtime_args! {\n    ASSOCIATED_ACCOUNT => account_addr_1\n};\n\nlet add_keys_deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[*DEFAULT_ACCOUNT_ADDR])\n    .with_address(*DEFAULT_ACCOUNT_ADDR)\n    .with_session_code(session_code, session_args)\n    .build();\n\nlet add_keys_execute_request =\n    ExecuteRequestBuilder::from_deploy_item(add_keys_deploy_item).build();\n\nbuilder\n    .exec(add_keys_execute_request)\n    .commit()\n    .expect_success();\n")),(0,r.kt)("p",null,"Since the deploy threshold is now 2, the installer deploy is signed with the default account hash and with ",(0,r.kt)("inlineCode",{parentName:"p"},"account_addr_1"),". See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L191"},"GitHub"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let session_code = PathBuf::from(CONTRACT_WASM);\n\nlet deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[*DEFAULT_ACCOUNT_ADDR, account_addr_1])\n    .with_address(*DEFAULT_ACCOUNT_ADDR)\n    .with_session_code(session_code, session_args)\n    .build();\n\nlet execute_request = ExecuteRequestBuilder::from_deploy_item(deploy_item).build();\nbuilder.exec(execute_request).commit().expect_success();\n")),(0,r.kt)("p",null,"The next tests exercise the contract's unique entry point to calculate the intersection between the caller deploy's authorization keys and the installer deploy's authorization keys."),(0,r.kt)("h4",{id:"test-4-should_allow_entry_point_with_installer_authorization_key"},"Test 4: ",(0,r.kt)("inlineCode",{parentName:"h4"},"should_allow_entry_point_with_installer_authorization_key")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Installer deploy authorization keys"),(0,r.kt)("th",{parentName:"tr",align:null},"Caller deploy authorization keys"),(0,r.kt)("th",{parentName:"tr",align:null},"Intersection returned by the entry point"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT_ACCOUNT_ADDR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"account_addr_1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT_ACCOUNT_ADDR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"account_addr_1"))))),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L144"},"test")," builds upon the previous test, which adds an associated account to the default account's associated keys and installs the contract using these two keys. Additionally, on line 201, the test invokes the contract's entry point using a deploy that runs under ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCOUNT_USER_1")," signed only with ",(0,r.kt)("inlineCode",{parentName:"p"},"account_addr_1"),". This is possible because the deploy action threshold for ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCOUNT_USER_1")," is 1 as you can see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L201"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let contract_hash = builder\n    .get_expected_account(*DEFAULT_ACCOUNT_ADDR)\n    .named_keys()\n    .get(CONTRACT_HASH)\n    .expect("must have this entry in named keys")\n    .into_hash()\n    .map(ContractHash::new)\n    .unwrap();\n\nlet entry_point_deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[account_addr_1])\n    .with_address(account_addr_1)\n    .with_stored_session_hash(contract_hash, ENTRYPOINT, runtime_args! {})\n    .build();\n\nlet entry_point_request =\n    ExecuteRequestBuilder::from_deploy_item(entry_point_deploy_item).build();\n\nbuilder.exec(entry_point_request).expect_success().commit();\n')),(0,r.kt)("p",null,"The entry point returns the intersection of the caller deploy's authorization keys and the installer deploy's authorization keys. The intersection is a list containing the key ",(0,r.kt)("inlineCode",{parentName:"p"},"account_addr_1"),". Thus, the caller deploy is expected to succeed and return a result."),(0,r.kt)("h4",{id:"test-5-should_allow_entry_point_with_account_authorization_key"},"Test 5: ",(0,r.kt)("inlineCode",{parentName:"h4"},"should_allow_entry_point_with_account_authorization_key")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Installer deploy authorization keys"),(0,r.kt)("th",{parentName:"tr",align:null},"Caller deploy authorization keys"),(0,r.kt)("th",{parentName:"tr",align:null},"Intersection returned by the entry point"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT_ACCOUNT_ADDR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"account_addr_1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT_ACCOUNT_ADDR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT_ACCOUNT_ADDR"))))),(0,r.kt)("p",null,"This is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L224"},"main test")," in this example repository. After installing the contract using the default account, the test adds the default account hash to ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCOUNT_USER_1")," as an associated key. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let session_code = PathBuf::from(ADD_KEYS_WASM);\nlet session_args = runtime_args! {\n    ASSOCIATED_ACCOUNT => *DEFAULT_ACCOUNT_ADDR\n};\n\nlet add_keys_deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[account_addr_1])\n    .with_address(account_addr_1)\n    .with_session_code(session_code, session_args)\n    .build();\n")),(0,r.kt)("p",null,"Then, the test creates a deploy to invoke the contract's entry point. This deploy executes under ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCOUNT_USER_1")," and has two authorization keys, ",(0,r.kt)("inlineCode",{parentName:"p"},"account_addr_1")," and the default account hash. Note that both authorization keys must sign the deploy to meet the deploy's action threshold, which is set to 2. The deploy should be executed successfully because the resulting intersection should contain the default account hash."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let entry_point_deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[account_addr_1, *DEFAULT_ACCOUNT_ADDR])\n    .with_address(account_addr_1)\n    .with_stored_session_hash(contract_hash, ENTRYPOINT, runtime_args! {})\n    .build();\n\nlet entry_point_request =\n    ExecuteRequestBuilder::from_deploy_item(entry_point_deploy_item).build();\n\nbuilder.exec(entry_point_request).expect_success().commit();\n")),(0,r.kt)("h4",{id:"test-6-should_disallow_entry_point_without_authorization_key"},"Test 6: ",(0,r.kt)("inlineCode",{parentName:"h4"},"should_disallow_entry_point_without_authorization_key")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Installer deploy authorization keys"),(0,r.kt)("th",{parentName:"tr",align:null},"Caller deploy authorization keys"),(0,r.kt)("th",{parentName:"tr",align:null},"Intersection returned by the entry point"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT_ACCOUNT_ADDR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"account_addr_2")),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L304"},"test")," verifies that the entry point returns an error when there is no intersection between the caller deploy's authorization keys and the installer deploy's authorization keys. "),(0,r.kt)("p",null,"The default account hash is used to sign the installer deploy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let session_code = PathBuf::from(CONTRACT_WASM);\n\nlet deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[*DEFAULT_ACCOUNT_ADDR])\n    .with_address(*DEFAULT_ACCOUNT_ADDR)\n    .with_session_code(session_code, runtime_args! {})\n    .build();\n")),(0,r.kt)("p",null,"In the test, a new account, ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCOUNT_USER_2"),", creates a deploy invoking the contract's entry point and signs the deploy with ",(0,r.kt)("inlineCode",{parentName:"p"},"account_addr_2"),". When calling the entry point, an error is returned because the caller and the installer deploys do not have any authorization keys in common."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    // Here ACCOUNT_USER_2 does not have DEFAULT_ACCOUNT_ADDR (from the contract installer) in its associated keys\n    // The deploy will therefore revert with PermissionDenied\n    let entry_point_deploy_item = DeployItemBuilder::new()\n        .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n        .with_authorization_keys(&[account_addr_2])\n        .with_address(account_addr_2)\n        .with_stored_session_hash(contract_hash, ENTRYPOINT, runtime_args! {})\n        .build();\n\n    let entry_point_request =\n        ExecuteRequestBuilder::from_deploy_item(entry_point_deploy_item).build();\n\n    builder.exec(entry_point_request).commit().expect_failure();\n    let error = builder.get_error().expect("must have User error: 0");\n    assert_expected_error(\n        error,\n        0,\n        "should fail execution since DEFAULT_ACCOUNT_ADDR is not in ACCOUNT_USER_2 associated keys",\n    );\n')),(0,r.kt)("p",null,"The following tests exercise the entry point using a ",(0,r.kt)("a",{parentName:"p",href:"#contract_callwasm"},"contract call")," and verifying the result returned."),(0,r.kt)("h4",{id:"test-7-should_allow_entry_point_through_contract_call_with_authorization_key"},"Test 7: ",(0,r.kt)("inlineCode",{parentName:"h4"},"should_allow_entry_point_through_contract_call_with_authorization_key")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Installer deploy authorization keys"),(0,r.kt)("th",{parentName:"tr",align:null},"Caller deploy authorization keys"),(0,r.kt)("th",{parentName:"tr",align:null},"Intersection returned by the entry point"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT_ACCOUNT_ADDR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"account_addr_1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT_ACCOUNT_ADDR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT_ACCOUNT_ADDR"))))),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L403"},"test")," validates the contract's entry point using a client contract call. The contract is installed using the default account hash in the deploy's authorization keys."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let session_code = PathBuf::from(CONTRACT_WASM);\n\nlet deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[*DEFAULT_ACCOUNT_ADDR])\n    .with_address(*DEFAULT_ACCOUNT_ADDR)\n    .with_session_code(session_code, runtime_args! {})\n    .build();\n")),(0,r.kt)("p",null,"The caller deploy is signed by ",(0,r.kt)("inlineCode",{parentName:"p"},"account_addr_1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DEFAULT_ACCOUNT_ADDR"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let entry_point_deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[account_addr_1, *DEFAULT_ACCOUNT_ADDR])\n    .with_address(account_addr_1)\n    .with_session_code(session_code, session_args)\n    .build();\n\nlet entry_point_request =\n    ExecuteRequestBuilder::from_deploy_item(entry_point_deploy_item).build();\nbuilder.exec(entry_point_request).expect_success().commit();\n")),(0,r.kt)("p",null,"The test then verifies that the result returned was saved in the named keys for ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCOUNT_USER_1"),", containing the default account hash."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let intersection_receipt: Key = *builder\n    .get_expected_account(account_addr_1)\n    .named_keys()\n    .get(INTERSECTION_RECEIPT)\n    .expect("must have this entry in named keys");\n\nlet actual_intersection = builder\n    .query(None, intersection_receipt, &[])\n    .expect("must have stored_value")\n    .as_cl_value()\n    .map(|intersection_cl_value| {\n        CLValue::into_t::<Vec<AccountHash>>(intersection_cl_value.clone())\n    })\n    .unwrap()\n    .unwrap();\n\nlet expected_intersection = vec![*DEFAULT_ACCOUNT_ADDR];\n\nassert_eq!(actual_intersection, expected_intersection);\n')),(0,r.kt)("h4",{id:"test-8-should_disallow_entry_point_through_contract_call_without_authorization_key"},"Test 8: ",(0,r.kt)("inlineCode",{parentName:"h4"},"should_disallow_entry_point_through_contract_call_without_authorization_key")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Installer deploy authorization keys"),(0,r.kt)("th",{parentName:"tr",align:null},"Caller deploy authorization keys"),(0,r.kt)("th",{parentName:"tr",align:null},"Intersection returned by the entry point"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT_ACCOUNT_ADDR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"account_addr_1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"account_addr_2")),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L509"},"final test")," in this tutorial checks that when there is no intersection between the caller deploy's authorization keys (",(0,r.kt)("inlineCode",{parentName:"p"},"account_addr_1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"account_addr_2"),") and the installer deploy's authorization keys (",(0,r.kt)("inlineCode",{parentName:"p"},"DEFAULT_ACCOUNT_ADDR"),"), the entry point returns an error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},' let session_code = PathBuf::from(CONTRACT_CALL_WASM);\n\nlet session_args = runtime_args! {\n    ARG_CONTRACT_HASH => Key::from(contract_hash),\n    ARG_KEY_NAME => INTERSECTION_RECEIPT\n};\n\n// account_addr_2 as an associated key is not among the default account\'s associated keys\n// The deploy will therefore revert with PermissionDenied\nlet entry_point_deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[account_addr_1, account_addr_2])\n    .with_address(account_addr_1)\n    .with_session_code(session_code, session_args)\n    .build();\n\nlet entry_point_request =\n    ExecuteRequestBuilder::from_deploy_item(entry_point_deploy_item).build();\n\nbuilder.exec(entry_point_request).commit().expect_failure();\n\nlet error = builder.get_error().expect("must have User error: 0");\nassert_expected_error(\n    error,\n    0,\n    "should fail execution since ACCOUNT_USER_2 as associated key is not in installer (DEFAULT_ACCOUNT_ADDR) associated keys",\n);\n')))}_.isMDXComponent=!0}}]);