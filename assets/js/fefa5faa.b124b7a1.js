"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2647],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),s=a(12466),i=a(16550),l=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[s,i]=(0,r.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const r=null!=(t=n.find((e=>e.default)))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=null!=l?l:p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);i(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var g=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),l(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var n;const t=u.indexOf(e.currentTarget)+1;a=null!=(n=u[t])?n:u[0];break}case"ArrowLeft":{var r;const t=u.indexOf(e.currentTarget)-1;a=null!=(r=u[t])?r:u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},14779:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=(a(44996),a(74866)),s=a(85162);const i={title:"Move to Casper"},l="Moving to Casper from another Blockchain",c={unversionedId:"resources/moving-to-casper",id:"version-1.5.6/resources/moving-to-casper",title:"Move to Casper",description:"moving-to-casper}",source:"@site/versioned_docs/version-1.5.6/resources/moving-to-casper.md",sourceDirName:"resources",slug:"/resources/moving-to-casper",permalink:"/resources/moving-to-casper",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/version-1.5.6/resources/moving-to-casper.md",tags:[],version:"1.5.6",lastUpdatedAt:1719863791,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{title:"Move to Casper"},sidebar:"resources",previous:{title:"Build on Casper",permalink:"/resources/build-on-casper/introduction"},next:{title:"Casper Token Standards",permalink:"/resources/tokens/"}},u={},p=[{value:"Smart Contract Platform",id:"contract-overview",level:2},{value:"Variable Storage and State Management",id:"variable-storage",level:2},{value:"Contract Functions",id:"contract-functions",level:2},{value:"Passing Arguments",id:"passing-arguments",level:2},{value:"Additional Considerations",id:"additional-considerations",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"moving-to-casper"},"Moving to Casper from another Blockchain"),(0,r.kt)("p",null,"This page covers various considerations for moving to Casper from another blockchain by comparing Casper to Ethereum, Near, Aptos, and Solana in these aspects:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#contract-overview"},"Smart Contract Platform Overview")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#variable-storage"},"Variable Storage and State Management")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#contract-functions"},"Contract Functions")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#passing-arguments"},"Passing Arguments"))),(0,r.kt)("p",null,"Since other blockchain projects use different technologies, it is essential to consider how those technologies serve your use case."),(0,r.kt)("p",null,"When choosing a blockchain, it is also essential to compare consensus mechanisms, tokenomics, cross-contract capabilities, contract upgradability, and software development kits (SDKs) as described ",(0,r.kt)("a",{parentName:"p",href:"#additional-considerations"},"here"),"."),(0,r.kt)("h2",{id:"contract-overview"},"Smart Contract Platform"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Casper",label:"Casper",mdxType:"TabItem"},(0,r.kt)("p",null,"Casper smart contracts are written in Rust. "),(0,r.kt)("p",null,"Variables defined within the smart contract can be stored as either ",(0,r.kt)("a",{parentName:"p",href:"/developers/json-rpc/types_chain#namedkey"},"Named Keys")," or ",(0,r.kt)("a",{parentName:"p",href:"/concepts/dictionaries"},"Dictionaries")," as described in ",(0,r.kt)("a",{parentName:"p",href:"/concepts/design/reading-and-writing-to-the-blockchain"},"Reading and Writing Data to the Blockchain"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," function serves as the main entry point of the ",(0,r.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/simple-contract"},"smart contract"),". It automatically executes when the smart contract is installed, setting the initial state of the contract and defining all other entry points."),(0,r.kt)("p",null,"It's worth noting that Casper only supports public entry points for contracts. Additionally, contracts can be defined as upgradable or immutable as described ",(0,r.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/upgrading-contracts"},"here"),".")),(0,r.kt)(s.Z,{value:"Ethereum",label:"Ethereum",mdxType:"TabItem"},(0,r.kt)("p",null,"Ethereum smart contracts are primarily written in Solidity, a programming language specifically designed for this purpose. These contracts comprise a collection of global variables that persist on the blockchain and define the contract's state."),(0,r.kt)("p",null,"Furthermore, Ethereum smart contracts feature a constructor that specifies an initial state after deployment on the blockchain. Public functions declared within the contract can be invoked from outside the blockchain."),(0,r.kt)("p",null,'In terms of immutability, Ethereum smart contracts are inherently immutable once deployed. However, design patterns such as "Proxy" or "Diamond" facilitate versioning contracts on the Ethereum blockchain.'),(0,r.kt)("p",null,"Solidity smart contracts adhere to object-oriented programming principles and support features such as inheritance and libraries.")),(0,r.kt)(s.Z,{value:"Near",label:"Near",mdxType:"TabItem"},(0,r.kt)("p",null,"Near smart contracts can be written in JavaScript or Rust, and the Near SDK can pack the code with lightweight runtime. This can be compiled into a single WebAssembly file and deployed on the NEAR network. "),(0,r.kt)("p",null,'In the Near ecosystem, smart contracts function as classes. The constructor, referred to as the "init" method, can receive attributes required for initializing the contract\'s initial state.'),(0,r.kt)("p",null,"All public methods defined within the contract serve as its interface, exposing its functionality. "),(0,r.kt)("p",null,"Near smart contracts are immutable, but their state can change as transactions are executed. Contracts can also be upgraded by deploying new versions of the contract.  The Near blockchain provides various capabilities for versioning, including state migrations, state versioning, and contract self-updates.")),(0,r.kt)(s.Z,{value:"Aptos",label:"Aptos",mdxType:"TabItem"},(0,r.kt)("p",null,"The Aptos programming language is known as Move. Its primary concepts revolve around scripts and modules. Scripts enable developers to incorporate additional logic into transactions, while modules allow them to expand blockchain functionality or create custom smart contracts. "),(0,r.kt)("p",null,"A distinctive feature of Move is the concept of Resources, which are specialized structures representing assets. This design allows resources to be managed similarly to other data types in Aptos, such as vectors or structs."),(0,r.kt)("p",null,"A smart contract in the Aptos blockchain is called a Module. It is always connected with an account address. The modules have to be compiled to call functions in the Module."),(0,r.kt)("p",null,"The Module's public methods are its interface and can be invoked from code outside the blockchain."),(0,r.kt)("p",null,"Module code can be upgraded and changed under the account address, which does not change. The upgrade is only accepted if the code is backward compatible.")),(0,r.kt)(s.Z,{value:"Solana",label:"Solana",mdxType:"TabItem"},(0,r.kt)("p",null,"Solana smart contracts are primarily written in Rust. "),(0,r.kt)("p",null,"Unlike other blockchain platforms, Solana's smart contracts are stateless and solely focus on program logic. The management of the contract state is handled at the account level, separating the state stored within the account and the contract logic defined in the programs."),(0,r.kt)("p",null,"Smart contracts are commonly referred to as on-chain programs. These programs expose their interface as a public entry point, allowing external interaction. "),(0,r.kt)("p",null,'It is worth noting that Solana programs can be updated using an authority known as the "update authority," which holds the necessary permissions for making modifications to the program.'))),(0,r.kt)("h2",{id:"variable-storage"},"Variable Storage and State Management"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Casper",label:"Casper",mdxType:"TabItem"},(0,r.kt)("p",null,"Variables can be stored as Named Keys or Dictionaries as described in ",(0,r.kt)("a",{parentName:"p",href:"/concepts/design/reading-and-writing-to-the-blockchain"},"Reading and Writing Data to the Blockchain"),"."),(0,r.kt)("p",null,"Additionally, local variables are available within the entry points and can be used to perform necessary actions or computations within the scope of each entry point.")),(0,r.kt)(s.Z,{value:"Ethereum",label:"Ethereum",mdxType:"TabItem"},(0,r.kt)("p",null,"The variables within the contract are responsible for storing the state of the contract at a specific moment in time. However, it's important to note that local variables used within the call functions are not stored in the contract's state. Instead, they are employed solely for computational purposes within those specific functions."),(0,r.kt)("p",null,"State variables must be strongly typed so that the smart contract compiler can enforce type consistency and ensure the storage space aligns with the declared data types. Strong typing promotes code correctness and prevents potential data corruption or memory-related issues related to the contract's state variables.")),(0,r.kt)(s.Z,{value:"Near",label:"Near",mdxType:"TabItem"},(0,r.kt)("p",null,"Variables in the contract can be stored as native types, SDK collections, or internal structures. SDK collections offer advantages over native types. "),(0,r.kt)("p",null,"Additionally, there is a distinction between class attributes and local variables. Class attributes represent the state of the contract, while local variables are specific to the invocation of a function and have no impact on the contract's overall state."),(0,r.kt)("p",null,"SDK Collections are typical when creating state variables because they provide convenient data structures such as lists, maps, and sets. These data structures can organize and manage complex data within the contract's storage. Using SDK Collections ensures efficient storage and facilitates easier access and data management in the smart contract.")),(0,r.kt)(s.Z,{value:"Aptos",label:"Aptos",mdxType:"TabItem"},(0,r.kt)("p",null,"Aptos employs primitive types, such as integers, booleans, and addresses, to represent variables. These elementary types can be combined to create structures, but it's important to note that struct definitions are only permitted within Modules. "),(0,r.kt)("p",null,"Aptos advises developers to cluster related data into Resources for efficient data management and organization. Resources represent assets or specific data entities on the blockchain. By grouping data into Resources, you can maintain logical coherence and improve the readability and maintainability of the code."),(0,r.kt)("p",null,"The Aptos blockchain introduces a tree-shaped persistent global storage that allows read and write operations. Global storage consists of trees originating from an account address.")),(0,r.kt)(s.Z,{value:"Solana",label:"Solana",mdxType:"TabItem"},(0,r.kt)("p",null,"Variables can be utilized locally within the execution context of a specific entry point. They are limited to the scope of that entry point and not accessible outside of it. These variables can be defined as elementary types such as bool, String, int, etc."),(0,r.kt)("p",null,"Data persists in structs within the account. The Binary Object Representation Serializer for Hashing (Borsh) facilitates the serialization and deserialization of these structs. The process involves reading the data from the account, deserializing it to obtain the values it contains, updating the values, and then serializing the modified data to save the new values back into the account."))),(0,r.kt)("h2",{id:"contract-functions"},"Contract Functions"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Casper",label:"Casper",mdxType:"TabItem"},(0,r.kt)("p",null,"For Casper smart contracts, public functions are called entry points. To declare them, the following format is used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\npub extern "C" fn counter_inc() {\n    \n    // Entry point body\n}\n')),(0,r.kt)("p",null,"It's important to note that entry points do not have input arguments in their definition, but the arguments can be accessed using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/struct.RuntimeArgs.html"},"RuntimeArgs")," passed to the contract. Entry points are instantiated within the ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," entry point."),(0,r.kt)("p",null,"If a return value is needed, it should be declared using the syntax described in the ",(0,r.kt)("a",{parentName:"p",href:"/resources/tutorials/advanced/return-values-tutorial"},"Interacting with Runtime Return Values")," tutorial."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"runtime::ret(value);\n")),(0,r.kt)("p",null,"Each call to an entry point is treated as a ",(0,r.kt)("a",{parentName:"p",href:"/deploy-and-deploy-lifecycle"},"Deploy")," to the network, and therefore, each call incurs a cost paid in motes (the network's native accounting unit).")),(0,r.kt)(s.Z,{value:"Ethereum",label:"Ethereum",mdxType:"TabItem"},(0,r.kt)("p",null,"On Ethereum, public methods serve two purposes: they can be used to execute contract logic and modify the contract's state, or they can be utilized to retrieve data stored within the contract's state."),(0,r.kt)("p",null,"The declaration of public methods in Ethereum follows the format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"function update_name(string value) public {\n    dapp_name = value;\n}\n")),(0,r.kt)("p",null,"In cases where a public method only returns a value without modifying the state, it should be defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"function balanceOf(address _owner) public view returns (uint256 return_parameter) { }\n")),(0,r.kt)("p",null,"It is worth noting that public view methods on Ethereum, which solely retrieve data without making state changes, do not consume gas.")),(0,r.kt)(s.Z,{value:"Near",label:"Near",mdxType:"TabItem"},(0,r.kt)("p",null,"In the Near blockchain, there are three types of public functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Init Methods")," - These are used as the class constructors to initialize the state of the contract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"View Methods")," - These functions are used to read the state of the contract variables."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Call Methods")," - These methods can mutate the state of the contract and perform specific actions, such as calling another contract.")),(0,r.kt)("p",null,"The definition of public methods in Near is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn add_message(&mut self, ...) { }\n")),(0,r.kt)("p",null,"For public methods that return variables, the definition would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn get_messages(&self, from_index: Option<U128>, limit: Option<u64>) -> Vec<PostedMessage> { }\n")),(0,r.kt)("p",null,"The actual implementation of the functions may include the necessary parameters and logic based on the contract's specific requirements.")),(0,r.kt)(s.Z,{value:"Aptos",label:"Aptos",mdxType:"TabItem"},(0,r.kt)("p",null,"Public functions in Aptos are similar to public methods or functions found in other blockchain networks. The definition of a public function in Aptos appears as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"public fun start_collection(account: &signer) {}\n")),(0,r.kt)("p",null,"For public functions that return variables, the definition would be as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"public fun max(a: u8, b: u8): (u8, bool) {}\n")),(0,r.kt)("p",null,"In the Aptos blockchain, it is possible to return one or more values from a function.")),(0,r.kt)(s.Z,{value:"Solana",label:"Solana",mdxType:"TabItem"},(0,r.kt)("p",null,"In Solana, functions are defined as public entry points that act as interfaces visible to the network. The declaration of an entry point follows this format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"entrypoint!(process_instruction);\n")),(0,r.kt)("p",null,"The implementation of the entry point may resemble the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn process_instruction(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    _instruction_data: &[u8],\n) -> ProgramResult {}\n")),(0,r.kt)("p",null,"Within the entry point function, the necessary parameters are specified, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"program_id"),", which represents the program's identifier, ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts"),", an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountInfo")," providing account details, and ",(0,r.kt)("inlineCode",{parentName:"p"},"_instruction_data"),", representing the instruction data received. The function returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"ProgramResult"),", which indicates the success or failure of the instruction execution."))),(0,r.kt)("h2",{id:"passing-arguments"},"Passing Arguments"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Casper",label:"Casper",mdxType:"TabItem"},(0,r.kt)("p",null,"Named arguments are passed as strings with type specifiers. To provide session arguments to the entry point during a Deploy, you can utilize the following approach:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy \\\n  --node-address http://65.21.235.219:7777 \\\n  --chain-name casper-test \\\n  --secret-key [KEY_PATH]/secret_key.pem \\\n  --payment-amount 2500000000 \\\n  --session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n  --session-entry-point "delegate" \\\n  --session-arg "validator:public_key=\'0145fb72c75e1b459839555d70356a5e6172e706efa204d86c86050e2f7878960f\'" \\\n  --session-arg "amount:u512=\'500000000000\'" \\\n  --session-arg "delegator:public_key=\'0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf\'"\n')),(0,r.kt)("p",null,"To understand the context of this example, refer to: ",(0,r.kt)("a",{parentName:"p",href:"/developers/cli/delegate"},"Delegating with the Casper Client"),"."),(0,r.kt)("p",null,"In the contract, you can access the session arguments as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"let uref: URef = runtime::get_key(Key_Name)\n")),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"get_key")," function to retrieve the desired session argument by specifying the key's name."),(0,r.kt)("p",null,"If you are uncertain how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"get_key")," function to obtain a specific session argument, check how to ",(0,r.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/simple-contract"},"write a basic smart contract on Casper"),".")),(0,r.kt)(s.Z,{value:"Ethereum",label:"Ethereum",mdxType:"TabItem"},(0,r.kt)("p",null,"Ethereum uses strongly typed function arguments, and developers must explicitly define the input and return variables. The compiler checks the correctness of the arguments passed to the functions during runtime. As a result, developers must explicitly specify the argument and return types in the function signature. The compiler ensures that the provided arguments adhere to the specified types, helping to catch type-related errors and ensure type safety."),(0,r.kt)("p",null,"By enforcing strong typing, the compiler helps prevent potential runtime errors and enhances code reliability by verifying the compatibility of the passed arguments and expected return types.")),(0,r.kt)(s.Z,{value:"Near",label:"Near",mdxType:"TabItem"},(0,r.kt)("p",null,"Strongly typed function arguments require explicitly defining the input and return variables. By enforcing strong typing, the programming language ensures that the arguments passed to a function match the expected types, preventing type-related errors and promoting code correctness. Strong typing provides additional clarity and safety by explicitly stating the data types of the function's inputs and outputs.")),(0,r.kt)(s.Z,{value:"Aptos",label:"Aptos",mdxType:"TabItem"},(0,r.kt)("p",null,"Like Near, Aptos requires strongly typed function arguments, thus preventing type-related errors and promoting code correctness.")),(0,r.kt)(s.Z,{value:"Solana",label:"Solana",mdxType:"TabItem"},(0,r.kt)("p",null,"Like Near and Aptos, Solana requires strongly typed function arguments, thus preventing type-related errors and promoting code correctness."))),(0,r.kt)("h2",{id:"additional-considerations"},"Additional Considerations"),(0,r.kt)("p",null,"When choosing a blockchain, you may also look into the network's consensus mechanism, the tokenomics or economic model, cross-contract communication, smart contract upgrades, and the available software development kits (SDKs)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Consensus mechanism")," refers to the algorithm the blockchain network uses to achieve agreement on the validity and ordering of transactions. Different blockchains employ various consensus mechanisms such as Proof-of-Work (PoW), Proof-of-Stake (PoS), or Delegated Proof-of-Stake (DPoS). The choice of consensus mechanism impacts factors like security, scalability, and energy efficiency.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Tokenomics")," relates to the economic model of the blockchain network and its native tokens, involving token distribution, inflation, utility, and governance. Understanding the tokenomics of the network is crucial for evaluating the ecosystem's long-term viability and potential value.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cross-contract capabilities")," refer to the ability of smart contracts to interact and communicate within the blockchain network. This feature is essential for building complex decentralized applications (dApps) and implementing inter-contract functionality.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Contract upgradability")," determines whether the smart contracts installed on the network can be modified or updated after installation. It is essential to assess the flexibility of the chosen blockchain in terms of contract maintenance, bug fixes, and incorporating new features or improvements without disrupting the existing ecosystem.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SDK availability")," also plays a significant role in the development process. SDKs provide tools, libraries, and documentation to simplify the creation of applications and smart contracts on the blockchain. Evaluating the maturity, community support, and compatibility of the available SDKs is crucial for developers."))),(0,r.kt)("p",null,"Considering these aspects helps when selecting a blockchain that aligns with a project or application's specific requirements and goals. "),(0,r.kt)("p",null,"The Casper ecosystem aims to fulfill all of these aspects, including supporting enterprise-grade projects."))}h.isMDXComponent=!0}}]);