"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3055],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||s;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2288:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=n(3117),r=n(102),s=(n(7294),n(3905)),o=["components"],i={},c="Testing Smart Contracts",l={unversionedId:"developers/writing-onchain-code/testing-contracts",id:"developers/writing-onchain-code/testing-contracts",title:"Testing Smart Contracts",description:"Introduction",source:"@site/source/docs/casper/developers/writing-onchain-code/testing-contracts.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/testing-contracts",permalink:"/developers/writing-onchain-code/testing-contracts",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/writing-onchain-code/testing-contracts.md",tags:[],version:"current",lastUpdatedAt:1677858345,formattedLastUpdatedAt:"3/3/2023",frontMatter:{},sidebar:"developers",previous:{title:"Writing a Basic Smart Contract in Rust",permalink:"/developers/writing-onchain-code/simple-contract"},next:{title:"Upgrading and Maintaining Smart Contracts",permalink:"/developers/writing-onchain-code/upgrading-contracts"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Defining Dependencies in <code>Cargo.toml</code>",id:"defining-dependencies-in-cargotoml",level:3},{value:"Writing the Tests",id:"writing-the-tests",level:2},{value:"Importing Builders and Constants",id:"importing-builders-and-constants",level:3},{value:"Creating a Test Function",id:"creating-a-test-function",level:3},{value:"Installing the Contract",id:"installing-the-contract",level:4},{value:"Calling the Contract by Hash",id:"calling-the-contract-by-hash",level:4},{value:"Calling the Contract using Session Code",id:"calling-the-contract-using-session-code",level:4},{value:"Evaluating and Comparing Results",id:"evaluating-and-comparing-results",level:4},{value:"Testing Contracts that Call Contracts",id:"testing-contracts-that-call-contracts",level:2},{value:"Running the Tests",id:"running-the-tests",level:2},{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"Further Testing",id:"further-testing",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testing-smart-contracts"},"Testing Smart Contracts"),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"As part of the Casper development environment, we provide a ",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/casper-engine-test-support/latest/casper_engine_test_support/"},"testing framework")," to test new contracts without running a full node. The framework creates an instance of the Casper execution engine, which can confirm successful deploys and monitor changes to global state using assertions. The Casper test crate must be included within the Rust workspace alongside the Wasm-producing crate to be validated."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The Casper test support crate is one of many options for testing contracts before sending them to a Casper network. If you prefer, you can create your own testing framework."))),(0,s.kt)("h3",{id:"defining-dependencies-in-cargotoml"},"Defining Dependencies in ",(0,s.kt)("inlineCode",{parentName:"h3"},"Cargo.toml")),(0,s.kt)("p",null,"This guide uses the project structure, and example contract outlined ",(0,s.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/simple-contract#directory-structure"},"here")," for creating tests."),(0,s.kt)("p",null,"To begin, outline the required test dependencies in the ",(0,s.kt)("inlineCode",{parentName:"p"},"/tests/Cargo.toml")," file. Specify the dependencies for your tests similarly and update the crate versions. Dependencies may vary with each project. For the counter tests, we have the following dependencies:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'[dependencies]\ncasper-execution-engine = "2.0.1"\ncasper-engine-test-support = { version = "2.2.0", features = ["test-support"] }\ncasper-types = "1.5.0"\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"casper-execution-engine")," - This crate imports the execution engine functionality, enabling Wasm execution within the test framework. Each node contains an instance of an execution engine, and the testing framework simulates this behavior."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"casper-engine-test-support")," - A helper crate that provides the interface to write tests and interact with an instance of the execution engine."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"casper-types")," - Types shared by many Casper crates for use on a Casper network.")),(0,s.kt)("h2",{id:"writing-the-tests"},"Writing the Tests"),(0,s.kt)("p",null,"The tests for the contract usually reside in the ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," directory. Tests for the counter contract reside in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/blob/master/tests/src/integration_tests.rs"},"tests/src/integration-tests.rs")," file. Notice that this file contains an empty ",(0,s.kt)("inlineCode",{parentName:"p"},"main")," method to initialize the test program. Alternatively, we could use the ",(0,s.kt)("inlineCode",{parentName:"p"},"#![no_main]")," annotation at the top of the file, as we did ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/blob/8a622cd92d768893b9ef9fc2b150c674415be87e/contract-v1/src/main.rs#L1-L2"},"here"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n panic!("Execute \\"cargo test\\" to test the contract, not \\"cargo run\\".");\n}\n')),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"#[cfg(test)]")," attribute tells the Rust compiler to compile and run the tests only when invoking ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test"),", not while debugging or releasing. All testing functions reside within the grouping mechanism ",(0,s.kt)("inlineCode",{parentName:"p"},"mod tests"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[cfg(test)]\nmod tests {\n    // The entire test program resides here\n}\n")),(0,s.kt)("h3",{id:"importing-builders-and-constants"},"Importing Builders and Constants"),(0,s.kt)("p",null,"Import external test support, which includes a variety of default values and helper methods to be used throughout the test. Additionally, you will need to import any ",(0,s.kt)("a",{parentName:"p",href:"/developers/json-rpc/types_cl"},"CLTypes")," used within the contract code to be tested."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"    // Outlining aspects of the Casper test support crate to include.\n    use casper_engine_test_support::{\n        ExecuteRequestBuilder, InMemoryWasmTestBuilder, DEFAULT_ACCOUNT_ADDR,\n        DEFAULT_RUN_GENESIS_REQUEST,\n    };\n    // Custom Casper types that will be used within this test.\n    use casper_types::{runtime_args, ContractHash, RuntimeArgs};\n")),(0,s.kt)("p",null,"Next, you need to define any global variables or constants for the test."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'    const COUNTER_V1_WASM: &str = "counter-v1.wasm"; // The first version of the contract\n    const COUNTER_V2_WASM: &str = "counter-v2.wasm"; // The second version of the contract\n    const COUNTER_CALL_WASM: &str = "counter-call.wasm"; // Session code that calls the contract\n\n    const CONTRACT_KEY: &str = "counter"; // Named key referencing this contract\n    const COUNT_KEY: &str = "count"; // Named key referencing the value to increment/decrement\n    const CONTRACT_VERSION_KEY: &str = "version"; // Key maintaining the version of a contract package\n\n    const ENTRY_POINT_COUNTER_DECREMENT: &str = "counter_decrement"; // Entry point to decrement the count value\n    const ENTRY_POINT_COUNTER_INC: &str = "counter_inc"; // Entry point to increment the count value\n')),(0,s.kt)("h3",{id:"creating-a-test-function"},"Creating a Test Function"),(0,s.kt)("p",null,"Each test function installs the contract and calls entry points to assert that the contract's behavior matches expectations. The test uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"InMemoryWasmTestBuilder")," to invoke an instance of the execution engine, effectively simulating the process of installing the contract on the chain."),(0,s.kt)("p",null,"As part of this process, we use the ",(0,s.kt)("inlineCode",{parentName:"p"},"DEFAULT_RUN_GENESIS_REQUEST")," to install the system contracts necessary for the tests, including the ",(0,s.kt)("inlineCode",{parentName:"p"},"Mint"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Auction"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"HandlePayment"),"contracts, as well as establishing a default account and funding the associated purse."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"    #[test]\n    /// Install version 1 of the counter contract and check its available entry points. ...\n    fn install_version1_and_check_entry_points() {\n        let mut builder = InMemoryWasmTestBuilder::default();\n        builder.run_genesis(&*DEFAULT_RUN_GENESIS_REQUEST).commit();\n\n        // See the repository for the full function.\n    }\n")),(0,s.kt)("h4",{id:"installing-the-contract"},"Installing the Contract"),(0,s.kt)("p",null,"Test functions use the ",(0,s.kt)("inlineCode",{parentName:"p"},"ExecuteRequestBuilder")," to install a contract to be tested. In the counter tests, we use standard dependencies and the counter contract. Within the execution request, we specify the ",(0,s.kt)("inlineCode",{parentName:"p"},"DEFAULT_ACCOUNT_ADDR")," established by our genesis builder as the account sending the Deploy."),(0,s.kt)("p",null,"After building the ",(0,s.kt)("inlineCode",{parentName:"p"},"ExecuteRequestBuilder")," (in this example, ",(0,s.kt)("inlineCode",{parentName:"p"},"contract_installation_request"),"), we process the request through ",(0,s.kt)("inlineCode",{parentName:"p"},"builder.exec")," and then add and process other requests as necessary."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"    // Install the contract.\n    let contract_v1_installation_request = ExecuteRequestBuilder::standard(\n        *DEFAULT_ACCOUNT_ADDR,\n        COUNTER_V1_WASM,\n        runtime_args! {},\n    )\n    .build();\n\n    builder\n        .exec(contract_v1_installation_request)\n        .expect_success()\n        .commit();\n")),(0,s.kt)("h4",{id:"calling-the-contract-by-hash"},"Calling the Contract by Hash"),(0,s.kt)("p",null,"To verify the installed contract, we need its contract hash. The test will then call its entry points using the ",(0,s.kt)("inlineCode",{parentName:"p"},"contract_call_by_hash")," function. The following code retrieves the contract hash from the named keys of the ",(0,s.kt)("inlineCode",{parentName:"p"},"DEFAULT_ACCOUNT_ADDR")," that sent the installation Deploy."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'    // Check the contract hash.\n    let contract_v1_hash = builder\n        .get_expected_account(*DEFAULT_ACCOUNT_ADDR)\n        .named_keys()\n        .get(CONTRACT_KEY)\n        .expect("must have contract hash key as part of contract creation")\n        .into_hash()\n        .map(ContractHash::new)\n        .expect("must get contract hash");\n')),(0,s.kt)("p",null,"Next, we test an entry point that should not exist in the first version of the contract."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"    // Call the decrement entry point, which should not be in version 1 before the upgrade.\n    let contract_decrement_request = ExecuteRequestBuilder::contract_call_by_hash(\n        *DEFAULT_ACCOUNT_ADDR,\n        contract_v1_hash,\n        ENTRY_POINT_COUNTER_DECREMENT,\n        runtime_args! {},\n    )\n    .build();\n\n    // Try executing the decrement entry point and expect an error.\n    builder\n        .exec(contract_decrement_request)\n        .expect_failure()\n        .commit();\n")),(0,s.kt)("h4",{id:"calling-the-contract-using-session-code"},"Calling the Contract using Session Code"),(0,s.kt)("p",null,"In the counter example, we use the session code included in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/blob/master/counter-call/src/main.rs"},"counter-call.wasm")," file. For more details on what session code is and how it differs from contract code, see the ",(0,s.kt)("a",{parentName:"p",href:"/concepts/session-code"},"next section"),"."),(0,s.kt)("p",null,"The following session code uses the contract hash to identify the contract, the account for sending the deploy (",(0,s.kt)("inlineCode",{parentName:"p"},"DEFAULT_ACCOUNT_ADDR"),"), the deploy to be sent (",(0,s.kt)("inlineCode",{parentName:"p"},"COUNTER_CALL_WASM"),"), and the runtime arguments required. Once again, the ",(0,s.kt)("inlineCode",{parentName:"p"},"ExecuteRequestBuilder")," simulates the execution of session code and calls the ",(0,s.kt)("inlineCode",{parentName:"p"},"counter-inc")," entry point."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"    // Use session code to increment the counter.\n    let session_code_request = ExecuteRequestBuilder::standard(\n        *DEFAULT_ACCOUNT_ADDR,\n        COUNTER_CALL_WASM,\n        runtime_args! {\n            CONTRACT_KEY => contract_v1_hash\n        },\n    )\n    .build();\n\n    builder.exec(session_code_request)\n        .expect_success()\n        .commit();\n")),(0,s.kt)("h4",{id:"evaluating-and-comparing-results"},"Evaluating and Comparing Results"),(0,s.kt)("p",null,"After calling the contract, we should verify the results received to ensure the contract operated as intended. The ",(0,s.kt)("inlineCode",{parentName:"p"},"builder")," method retrieves the required information and converts it to the value type required. Then, ",(0,s.kt)("inlineCode",{parentName:"p"},"assert_eq!()")," compares the result against the expected value."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'    // Verify the value of count is now 1.\n    let incremented_count = builder\n        .query(None, count_key, &[])\n        .expect("should be stored value.")\n        .as_cl_value()\n        .expect("should be cl value.")\n        .clone()\n        .into_t::<i32>()\n        .expect("should be i32.");\n\n    assert_eq!(incremented_count, 1);\n')),(0,s.kt)("p",null,"For more test examples, visit the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/tree/dev/smart_contracts/contracts/test"},"casper-node")," GitHub repository."),(0,s.kt)("h2",{id:"testing-contracts-that-call-contracts"},"Testing Contracts that Call Contracts"),(0,s.kt)("p",null,"If the code to be tested involves multiple contracts, they must be installed within the test. The exceptions are system contracts installed as part of the ",(0,s.kt)("inlineCode",{parentName:"p"},"DEFAULT_RUN_GENESIS_REQUEST"),". The testing framework exists independently of any Casper network, so you will need access to the original contract installation code or the Wasm you wish to include."),(0,s.kt)("p",null,"Each contract installation will require an additional Wasm file installed through a ",(0,s.kt)("inlineCode",{parentName:"p"},"Deploy")," using ",(0,s.kt)("inlineCode",{parentName:"p"},"ExecuteRequestBuilder"),". Depending on your requirements as a smart contract author, you may need to use ",(0,s.kt)("a",{parentName:"p",href:"/resources/tutorials/advanced/return-values-tutorial"},"return values")," to interact with stacks of contracts. Interaction between contracts will require session code to initiate the process, as contracts will not execute actions autonomously."),(0,s.kt)("p",null,"The major difference between calling a contract from session code versus contract code is the ability to use non-standard dependencies for the ",(0,s.kt)("inlineCode",{parentName:"p"},"ExecuteRequestBuilder"),". Where session code must designate a Wasm file within the standard dependencies, contract code can use one of the four available options for calling other contracts, namely:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"contract_call_by_hash")," - Calling a contract by its ",(0,s.kt)("inlineCode",{parentName:"li"},"ContractHash"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"contract_call_by_name")," - Calling a contract referenced by a named key in the signer's Account context."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"versioned_contract_call_by_hash")," - Calling a specific contract version using its ",(0,s.kt)("inlineCode",{parentName:"li"},"ContractHash"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"versioned_contract_call_by_name")," - Calling a specific version of a contract referenced by a named key in the signer's Account context.")),(0,s.kt)("p",null,"The calling contract must also provide an entry point and any necessary runtime arguments in all cases."),(0,s.kt)("h2",{id:"running-the-tests"},"Running the Tests"),(0,s.kt)("p",null,"To run the tests, the counter example uses a ",(0,s.kt)("inlineCode",{parentName:"p"},"Makefile"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,s.kt)("p",null,"Under the hood, the ",(0,s.kt)("inlineCode",{parentName:"p"},"Makefile")," generates a ",(0,s.kt)("inlineCode",{parentName:"p"},"tests/wasm")," folder, copies the Wasm files to the folder, and runs the tests using ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"test: build-contract\n    mkdir -p tests/wasm\n    cp contract-v1/target/wasm32-unknown-unknown/release/counter-v1.wasm tests/wasm\n    cp contract-v2/target/wasm32-unknown-unknown/release/counter-v2.wasm tests/wasm\n    cp counter-call/target/wasm32-unknown-unknown/release/counter-call.wasm tests/wasm\n    cd tests && cargo test\n")),(0,s.kt)("h2",{id:"video-walkthrough"},"Video Walkthrough"),(0,s.kt)("p",null,"The following brief video describes testing ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/"},"sample contract code"),"."),(0,s.kt)("p",{align:"center"},(0,s.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=7",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,s.kt)("h2",{id:"further-testing"},"Further Testing"),(0,s.kt)("p",null,"Unit testing is only one way to test contracts before installing them on a Casper network. After unit testing a contract, you may perform ",(0,s.kt)("a",{parentName:"p",href:"/dapp-dev-guide/building-dapps/setup-nctl"},"local network testing")," using NCTL. This allows you to set up and control multiple local Casper nodes to perform ",(0,s.kt)("a",{parentName:"p",href:"/dapp-dev-guide/building-dapps/nctl-test"},"testing in an other simulated network environment"),"."),(0,s.kt)("p",null,"You may also wish to test your contracts on the Casper ",(0,s.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/"},"Testnet"),"."),(0,s.kt)("h2",{id:"whats-next"},"What's Next?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Understand ",(0,s.kt)("a",{parentName:"li",href:"/concepts/session-code"},"session code")," and how it triggers a smart contract."),(0,s.kt)("li",{parentName:"ul"},"Learn to ",(0,s.kt)("a",{parentName:"li",href:"/developers/cli/installing-contracts"},"install a contract and query global state")," with the Casper command-line client.")))}h.isMDXComponent=!0}}]);