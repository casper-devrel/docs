"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4452],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(n),u=r,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6621:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=(n(4996),["components"]),c={},s="Writing a Basic Smart Contract in Rust",l={unversionedId:"developers/writing-onchain-code/simple-contract",id:"developers/writing-onchain-code/simple-contract",title:"Writing a Basic Smart Contract in Rust",description:"What is a Smart Contract?",source:"@site/source/docs/casper/developers/writing-onchain-code/simple-contract.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/simple-contract",permalink:"/developers/writing-onchain-code/simple-contract",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/writing-onchain-code/simple-contract.md",tags:[],version:"current",lastUpdatedAt:1677858345,formattedLastUpdatedAt:"3/3/2023",frontMatter:{},sidebar:"developers",previous:{title:"Getting Started with AssemblyScript",permalink:"/developers/writing-onchain-code/assembly-script"},next:{title:"Testing Smart Contracts",permalink:"/developers/writing-onchain-code/testing-contracts"}},p={},d=[{value:"What is a Smart Contract?",id:"what-is-a-smart-contract",level:2},{value:"Key Features of Casper Contracts",id:"key-features-of-casper-contracts",level:2},{value:"Creating the Directory Structure",id:"directory-structure",level:2},{value:"Creating the Project Manually",id:"creating-the-project-manually",level:3},{value:"Creating the Project Automatically",id:"creating-the-project-automatically",level:3},{value:"Writing a Basic Smart Contract",id:"writing-a-basic-smart-contract",level:2},{value:"Dependencies in <code>Cargo.toml</code>",id:"dependencies-in-cargotoml",level:3},{value:"Updating the <code>main.rs</code> File",id:"updating-the-mainrs-file",level:3},{value:"Defining Required Dependencies",id:"defining-required-dependencies",level:4},{value:"Defining the Global Constants",id:"defining-the-global-constants",level:4},{value:"Defining the Contract Entry Points",id:"defining-the-contract-entry-points",level:4},{value:"Defining the <code>call</code> Function",id:"defining-the-call-function",level:4},{value:"Locked Contracts",id:"locked-contracts",level:2},{value:"Compiling Contract Code",id:"compiling-contract-code",level:2},{value:"Executing Contract Code",id:"executing-contract-code",level:2},{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],h={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"writing-a-basic-smart-contract-in-rust"},"Writing a Basic Smart Contract in Rust"),(0,o.kt)("h2",{id:"what-is-a-smart-contract"},"What is a Smart Contract?"),(0,o.kt)("p",null,"A smart contract is a self-contained program installed on a blockchain. In the context of a Casper network, a smart contract consists of contract code installed on-chain using a ",(0,o.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#execution-semantics-deploys"},"Deploy"),". Casper smart contracts are programs that run on a Casper network. They interact with accounts and other contracts through entry points, allowing for various triggers, conditions, and logic."),(0,o.kt)("p",null,"Smart contracts exist as stored on-chain logic, allowing disparate users to call the included entry points. These contracts can, in turn, call one another to perform interconnected operations and create more complex programs. The decentralized nature of blockchain technology means that these smart contracts do not suffer from any single point of failure. Even if a Casper node leaves the network, other nodes will continue to allow the contract to operate as intended."),(0,o.kt)("h2",{id:"key-features-of-casper-contracts"},"Key Features of Casper Contracts"),(0,o.kt)("p",null,"On the Casper platform, developers may write smart contracts in any language that compiles to Wasm binaries. This tutorial focuses specifically on writing a smart contract in the Rust language. The Rust compiler compiles the contract code into Wasm. After that, the Wasm binary can be ",(0,o.kt)("a",{parentName:"p",href:"/developers/cli/installing-contracts"},"sent to a node")," on a Casper network using a Deploy. Nodes within the network then ",(0,o.kt)("a",{parentName:"p",href:"/concepts/design/p2p#communications-gossiping"},"gossip deploys"),", include them within a block, and finalize them. After finalizing, the network executes the deploys within the block."),(0,o.kt)("p",null,"Further, the Casper platform allows for ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/upgrading-contracts"},"upgradable contracts"),". A ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractPackage.html"},"ContractPackage")," is created through the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_contract.html"},"new_contract")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_locked_contract.html"},"new_locked_contract")," methods. Through these methods, the Casper execution engine creates the new contract package automatically and assigns a ",(0,o.kt)("a",{parentName:"p",href:"/concepts/understanding-hash-types#hash-and-key-explanations"},(0,o.kt)("inlineCode",{parentName:"a"},"ContractPackageHash")),". The new contract is added to this package with a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractHash.html"},(0,o.kt)("inlineCode",{parentName:"a"},"ContractHash"))," key. The execution engine stores the new contract within the contract package alongside any previously installed contract versions, if applicable."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"new_contract")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"new_locked_contract")," methods are a convenience that automatically creates the package associated with a new contract. Developers choosing not to use these methods must first create a contract package to function as a container for their new contract."),(0,o.kt)("p",null,"The contract contains required metadata, and it is primarily identified by its ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractHash"),". While the contract hash identifies a specific ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.ContractVersion.html"},"ContractVersion"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractPackageHash")," serves as an identifier for the most recent contract version in the contract package."),(0,o.kt)("h2",{id:"directory-structure"},"Creating the Directory Structure"),(0,o.kt)("p",null,"To begin creating a smart contract, you need to set up the project structure, either manually or automatically, as shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"project-directory/\n\u2514\u2500\u2500 contract/\n    \u251c\u2500\u2500 src/\n        \u2514\u2500\u2500 main.rs\n    \u2514\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 tests/\n    \u251c\u2500\u2500 src/\n        \u2514\u2500\u2500 integration-tests.rs\n    \u2514\u2500\u2500 Cargo.toml\n")),(0,o.kt)("h3",{id:"creating-the-project-manually"},"Creating the Project Manually"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a top-level project directory to store the contract code and its corresponding tests.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a folder for the contract code inside the project directory. This folder contains the logic that will be compiled into Wasm and executed on a Casper node. In this example, we named the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"contract"),". You can use a different folder name if you wish."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"contract")," folder, add a source folder called ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," and a ",(0,o.kt)("inlineCode",{parentName:"li"},"Cargo.toml")," file, which specifies the contract's dependencies."),(0,o.kt)("li",{parentName:"ul"},"Add a Rust file with the contract code in the ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," folder. In this example, we have the ",(0,o.kt)("inlineCode",{parentName:"li"},"main.rs")," file."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigating back to the project directory, create a folder for the tests, which help verify the contract's functionality. In this example, we named the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"tests"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"tests")," folder, add a source folder called ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," and a ",(0,o.kt)("inlineCode",{parentName:"li"},"Cargo.toml")," file, which specifies the required dependencies to run the tests."),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," folder, add a Rust file with the tests that verify the contract's behavior. In this example, we have the ",(0,o.kt)("inlineCode",{parentName:"li"},"integration-tests.rs")," file.")))),(0,o.kt)("h3",{id:"creating-the-project-automatically"},"Creating the Project Automatically"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo casper")," command can automatically set up the project structure, as shown ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/getting-started#creating-a-project"},"here"),". Alternatively, follow the steps below to customize the project, yet create the various folders using ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a top-level project directory for the contract code and its corresponding tests.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Inside the project directory, run the following command to create a new binary package called ",(0,o.kt)("inlineCode",{parentName:"p"},"contract"),". Use a different name instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"contract")," if you wish."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo new contract\n")),(0,o.kt)("p",{parentName:"li"},"The command creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"contract")," folder with a ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/main.rs")," file and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"main.rs")," - This file would contain the contract code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Cargo.toml")," - This file would contain crate dependencies and other configurations.")),(0,o.kt)("p",{parentName:"li"},"The following sections explain how to update these files using example code.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Inside the project directory, run the command to auto-generate the folder structure for the tests. Use a different name instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"tests")," if you wish."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo new tests\n")),(0,o.kt)("p",{parentName:"li"},"The command creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"tests")," folder with a ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/main.rs")," file and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"main.rs")," - This file would store the unit test code required to test the contract. If you wish, you can rename the file to ",(0,o.kt)("inlineCode",{parentName:"li"},"integration-tests.rs")," as shown in the example structure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Cargo.toml")," - This is the file with test configurations.")),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/testing-contracts"},"Testing Smart Contracts")," guide explains how to update the tests using example code."))),(0,o.kt)("h2",{id:"writing-a-basic-smart-contract"},"Writing a Basic Smart Contract"),(0,o.kt)("p",null,"This section covers the process of writing a smart contract in Rust, using example code from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/"},"counter contract"),". This simple contract allows callers to increment and retrieve an integer. Casper provides a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/index.html"},"contract API")," within the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/index.html"},(0,o.kt)("inlineCode",{parentName:"a"},"casper_contract"))," crate."),(0,o.kt)("h3",{id:"dependencies-in-cargotoml"},"Dependencies in ",(0,o.kt)("inlineCode",{parentName:"h3"},"Cargo.toml")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file includes the dependencies and versions the contract requires. At a minimum, you need to import the latest versions of the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/"},"casper-contract")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/"},"casper-types")," crates. The following dependencies and version numbers are only examples and must be adjusted based on your requirements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'[dependencies]\n// A library for developing Casper network smart contracts.\ncasper-contract = "1.4.4"\n// Types shared by many Casper crates for use on a Casper network.\ncasper-types = "1.5.0"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'casper-contract = "1.4.4"')," - Provides the SDK for the execution engine (EE). The latest version of the crate is published ",(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/casper-contract"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'casper-types = "1.5.0"')," - Includes types shared by many Casper crates for use on a Casper network. This crate is necessary for the EE to understand and interpret the session code. The latest version of the crate is published ",(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/casper-types"},"here"),".")),(0,o.kt)("h3",{id:"updating-the-mainrs-file"},"Updating the ",(0,o.kt)("inlineCode",{parentName:"h3"},"main.rs")," File"),(0,o.kt)("p",null,"To begin writing contract code, add the following file attributes to support the Wasm execution environment. If you have an auto-generated ",(0,o.kt)("inlineCode",{parentName:"p"},"main.rs")," file, remove the auto-generated main function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#![no_std]\n#![no_main]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#![no_main]")," - This attribute tells the program not to use the standard main function as its entry point."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#![no_std]")," - This attribute tells the program not to import the standard libraries.")),(0,o.kt)("h4",{id:"defining-required-dependencies"},"Defining Required Dependencies"),(0,o.kt)("p",null,"Add the required imports and dependencies. The example code for the counter contract declares the following dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// This code imports necessary aspects of external crates that we will use in our contract code.\nextern crate alloc;\n\n// Importing Rust types.\nuse alloc::{\n    string::{String, ToString},\n    vec::Vec,\n};\n// Importing aspects of the Casper platform.\nuse casper_contract::{\n    contract_api::{runtime, storage},\n    unwrap_or_revert::UnwrapOrRevert,\n};\n// Importing specific Casper types.\nuse casper_types::{\n    api_error::ApiError,\n    contracts::{EntryPoint, EntryPointAccess, EntryPointType, EntryPoints, NamedKeys},\n    CLType, CLValue, URef,\n};\n")),(0,o.kt)("h4",{id:"defining-the-global-constants"},"Defining the Global Constants"),(0,o.kt)("p",null,"After importing the necessary dependencies, you should define the constants used within the contract, including entry points and values. The following example outlines the necessary constants for the counter contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// Creating constants for values within the contract package.\nconst CONTRACT_PACKAGE_NAME: &str = "counter_package_name";\nconst CONTRACT_ACCESS_UREF: &str = "counter_access_uref";\n\n// Creating constants for the various contract entry points.\nconst ENTRY_POINT_COUNTER_INC: &str = "counter_inc";\nconst ENTRY_POINT_COUNTER_GET: &str = "counter_get";\n\n// Creating constants for values within the contract.\nconst CONTRACT_VERSION_KEY: &str = "version";\nconst CONTRACT_KEY: &str = "counter";\nconst COUNT_KEY: &str = "count";\n')),(0,o.kt)("h4",{id:"defining-the-contract-entry-points"},"Defining the Contract Entry Points"),(0,o.kt)("p",null,"Entry points provide access to contract code installed in global state. Either ",(0,o.kt)("a",{parentName:"p",href:"/concepts/session-code"},"session code")," or another smart contract may call these entry points. A contract must have at least one entry point and may have more than one entry point. Entry points are defined by their name, and those names should be clear and self-describing. Each entry point is equivalent to a static main entry point in a traditional program."),(0,o.kt)("p",null,"Entry points are not functions or methods, and they have no arguments. They are static entry points into the contract's logic. Yet, the contract logic can access parameters by name, passed along with the Deploy. Note that another smart contract may access any of these entry points."),(0,o.kt)("p",null,"If an entry point has one or more mandatory parameters that will cause the logic to revert if they are not included, declare them within that entry point. Optional and non-critical parameters should be excluded."),(0,o.kt)("p",null,"When defining entry points, begin with a ",(0,o.kt)("inlineCode",{parentName:"p"},"#[no_mangle]")," line to ensure that the system does not change critical syntax within the method names. Each entry point should contain the contract code that drives the action you wish it to accomplish. Finally, include any storage or return values needed, as applicable."),(0,o.kt)("p",null,"The following entry point is an example from the counter contract. To see all the available entry points, review the contract in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/blob/master/contract-v1/src/main.rs"},"GitHub"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\npub extern "C" fn counter_inc() {\n    let uref: URef = runtime::get_key(COUNT_KEY)\n        .unwrap_or_revert_with(ApiError::MissingKey)\n        .into_uref()\n        .unwrap_or_revert_with(ApiError::UnexpectedKeyVariant);\n    storage::add(uref, 1); // Increment the count by 1.\n}\n')),(0,o.kt)("h4",{id:"defining-the-call-function"},"Defining the ",(0,o.kt)("inlineCode",{parentName:"h4"},"call")," Function"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function starts the code execution and is responsible for installing the contract on-chain. In some cases, it also initializes some constructs, such as a Dictionary for record-keeping or a purse. The following steps describe how to structure the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function. Review the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/blob/8a622cd92d768893b9ef9fc2b150c674415be87e/contract-v1/src/main.rs#L55"},"call function")," in the counter contract."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Define the runtime arguments.")),(0,o.kt)("p",null,"At the time of contract installation, pass in parameters as runtime arguments. Use this pattern of variable definition to collect any sentinel values that dictate the behavior of the contract. If the entry point takes in arguments, you must declare those as part of the entry point's definition."),(0,o.kt)("p",null,"Look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/contract/src/main.rs"},"CEP-78 contract")," to see examples of entry points taking in arguments. The counter contract does not use variable parameters since it is too simple."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add the entry points into the ",(0,o.kt)("inlineCode",{parentName:"li"},"call")," function.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function replaces a traditional ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function and executes automatically when a caller interacts with the contract. Within the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function, we define entry points that the caller can access using session code or another contract. When writing code that calls an entry point, there must be a one-to-one mapping of the entry point name. Otherwise, the execution engine will return an error that the entry point does not exist."),(0,o.kt)("p",null,"Each entry point should have these arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," - The name of the entry point, which should be the same as the initial definition."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arguments")," - A list of runtime arguments declared as part of the definition of the entry point."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"return type")," - The CLType that is returned by the entry point. Use the type ",(0,o.kt)("em",{parentName:"li"},"Unit")," for empty return types."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"access level")," - Access permissions of the entry point."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"entry point type")," - This can be ",(0,o.kt)("inlineCode",{parentName:"li"},"contract")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"session")," code.")),(0,o.kt)("p",null,"This step adds the individual entry points to a ",(0,o.kt)("inlineCode",{parentName:"p"},"counter_entry_points")," object using the ",(0,o.kt)("inlineCode",{parentName:"p"},"add_entry_point")," method. This object will later be passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"new_contract")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    // Create the entry points for this contract\n    let mut counter_entry_points = EntryPoints::new();\n\n    counter_entry_points.add_entry_point(EntryPoint::new(\n        ENTRY_POINT_COUNTER_GET,\n        Vec::new(),\n        CLType::I32,\n        EntryPointAccess::Public,\n        EntryPointType::Contract,\n    ));\n\n    counter_entry_points.add_entry_point(EntryPoint::new(\n        ENTRY_POINT_COUNTER_INC,\n        Vec::new(),\n        CLType::Unit,\n        EntryPointAccess::Public,\n        EntryPointType::Contract,\n    ));\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create the contract's named keys.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.NamedKeys.html"},"NamedKeys")," are a collection of String-Key pairs used to easily identify some network data."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html"},"String")," is the name given to identify the data"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/enum.Key.html"},"Key")," is the data to be referenced")),(0,o.kt)("p",null,"You can create named keys to store any record or value as needed, such as other accounts, smart contracts, URefs, transfers, deploy information, purse balances, etc. The entire list of possible Key variants can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/enum.Key.html"},"here"),"."),(0,o.kt)("p",null,"For the counter, we store the integer that we increment into a named key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    // In the named keys of the counter contract, add a key for the count.\n    let mut counter_named_keys = NamedKeys::new();\n    let key_name = String::from(COUNT_KEY);\n    counter_named_keys.insert(key_name, count_start.into());\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Create the contract.")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_contract.html"},"new_contract")," method to create the contract, with its named keys and entry points. This method creates the contract object and saves the access URef and the contract package hash in the caller's context. The execution engine automatically creates a contract package and assigns it a ",(0,o.kt)("inlineCode",{parentName:"p"},"contractPackageHash"),". Then, it adds the contract to the package with a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractHash.html"},(0,o.kt)("inlineCode",{parentName:"a"},"contractHash")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    // Create a new contract package that can be upgraded.\n    let (stored_contract_hash, contract_version) = storage::new_contract(\n        counter_entry_points,\n        Some(counter_named_keys),\n        Some(CONTRACT_PACKAGE_NAME.to_string()),\n        Some(CONTRACT_ACCESS_UREF.to_string()),\n    );\n")),(0,o.kt)("p",null,"Usually, these contracts are upgradeable with the ability to add new ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.ContractVersion.html"},"versions"),". To add a new contract version, you will need the access URef to the contract package. This can be accomplished by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(CONTRACT_ACCESS_UREF.to_string())")," argument to the ",(0,o.kt)("inlineCode",{parentName:"p"},"new_contract")," method. To prevent any upgrades to a contract, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"new_locked_contract")," method described ",(0,o.kt)("a",{parentName:"p",href:"#locked-contracts"},"below"),"."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Create additional named keys.")),(0,o.kt)("p",null,"Generally, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract_Hash")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract_Version")," are saved as ",(0,o.kt)("inlineCode",{parentName:"p"},"NamedKeys")," in the account's context for later use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    // Store the contract version in the context's named keys.\n    let version_uref = storage::new_uref(contract_version);\n    runtime::put_key(CONTRACT_VERSION_KEY, version_uref.into());\n\n    // Create a named key for the contract hash.\n    runtime::put_key(CONTRACT_KEY, stored_contract_hash.into());\n")),(0,o.kt)("h2",{id:"locked-contracts"},"Locked Contracts"),(0,o.kt)("p",null,"Locked contracts cannot contain other contract ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.ContractVersion.html"},"versions")," in the same contract package; thus, they cannot be upgraded. In this scenario, the Casper execution engine will create a contract package, add a contract to that package and prevent any further upgrades to the contract. Use locked contracts when you need to ensure high security and will not require updates to the contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn new_locked_contract(\n    entry_points: EntryPoints,\n    named_keys: Option<NamedKeys>,\n    hash_name: Option<String>,\n    uref_name: Option<String>,\n) -> (ContractHash, ContractVersion) {\n    create_contract(entry_points, named_keys, hash_name, uref_name, true)\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"entry_points")," - The set of entry points defined inside the smart contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"named_keys")," - Any ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.NamedKeys.html"},"named-key")," pairs for the contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hash_name")," - Contract hash value. Puts ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractHash.html"},"contractHash")," in the current context's named keys under ",(0,o.kt)("inlineCode",{parentName:"li"},"hash_name"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"uref_name")," - Access URef value. Puts access_uref in the current context's named keys under ",(0,o.kt)("inlineCode",{parentName:"li"},"uref_name"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": The current context is the context of the person who initiated the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function, usually an account."),(0,o.kt)("p",null,"The counter contract in our example would be locked if we created it this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let (stored_contract_hash, _) =\n        storage::new_locked_contract(counter_entry_points, Some(counter_named_keys), None, None);\n")),(0,o.kt)("h2",{id:"compiling-contract-code"},"Compiling Contract Code"),(0,o.kt)("p",null,"To compile the smart contract, run the following command in the directory hosting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file and ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release --target wasm32-unknown-unknown\n")),(0,o.kt)("p",null,"For the counter example, you may use the Makefile provided:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make build-contract\n")),(0,o.kt)("h2",{id:"executing-contract-code"},"Executing Contract Code"),(0,o.kt)("p",null,"Contract execution must be initiated through an outside call, usually via ",(0,o.kt)("a",{parentName:"p",href:"/concepts/session-code"},"session code")," or another smart contract. Developers should also be familiar with the difference between contract code and session code, explained in the next section."),(0,o.kt)("h2",{id:"video-walkthrough"},"Video Walkthrough"),(0,o.kt)("p",null,"The following brief video accompanies this guide."),(0,o.kt)("p",{align:"center"},(0,o.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=6",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn to ",(0,o.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/testing-contracts"},"test your contract"),"."),(0,o.kt)("li",{parentName:"ul"},"Understand ",(0,o.kt)("a",{parentName:"li",href:"/concepts/session-code"},"session code")," and how it triggers a smart contract."),(0,o.kt)("li",{parentName:"ul"},"Learn to ",(0,o.kt)("a",{parentName:"li",href:"/developers/cli/installing-contracts"},"install a contract and query global state")," with the Casper command-line client.")))}u.isMDXComponent=!0}}]);