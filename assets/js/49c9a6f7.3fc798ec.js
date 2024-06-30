"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5021],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=i(n),d=o,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7591:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return h}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],s={},c="Tutorial Walkthrough",i={unversionedId:"resources/beginner/counter/walkthrough",id:"resources/beginner/counter/walkthrough",title:"Tutorial Walkthrough",description:"Now that you are familiar with the basic commands, you can begin the tutorial walkthrough.",source:"@site/source/docs/casper/resources/beginner/counter/walkthrough.md",sourceDirName:"resources/beginner/counter",slug:"/resources/beginner/counter/walkthrough",permalink:"/docs/resources/beginner/counter/walkthrough",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/resources/beginner/counter/walkthrough.md",tags:[],version:"current",lastUpdatedAt:1689356505,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{},sidebar:"resources",previous:{title:"Casper-Client Commands",permalink:"/docs/resources/beginner/counter/commands"},next:{title:"Introduction",permalink:"/docs/counter-testnet"}},u={},h=[{value:"Clone the Repository",id:"clone-the-repository",level:2},{value:"Create a Local Network",id:"create-a-local-network",level:2},{value:"View the Network State",id:"view-the-network-state",level:2},{value:"Install the Contract",id:"install-the-contract",level:2},{value:"View the Updated Network State",id:"view-the-updated-network-state",level:2},{value:"Increment the Counter",id:"increment-the-counter",level:2},{value:"View the Updated Network State Again",id:"view-the-updated-network-state-again",level:2},{value:"Increment the Counter Again",id:"increment-the-counter-again",level:2},{value:"View the Final Network State",id:"view-the-final-network-state",level:2}],p={toc:h},d="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-walkthrough"},"Tutorial Walkthrough"),(0,r.kt)("p",null,"Now that you are familiar with the basic commands, you can begin the tutorial walkthrough."),(0,r.kt)("h2",{id:"clone-the-repository"},"Clone the Repository"),(0,r.kt)("p",null,"First, you will need to clone ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter"},"the counter contract repository")," on our local machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/casper-ecosystem/counter\n")),(0,r.kt)("p",null,"If you explore the source code, you will see that there are two versions of the counter contract and one file with session code that calls the contract's entry-points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"contract-v1")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is the first version of the counter contract."),(0,r.kt)("li",{parentName:"ul"},"Defines two named keys: ",(0,r.kt)("em",{parentName:"li"},"counter")," to reference the contract and an associated variable ",(0,r.kt)("em",{parentName:"li"},"count")," to store a value."),(0,r.kt)("li",{parentName:"ul"},"Provides a function to get the current count (",(0,r.kt)("em",{parentName:"li"},"count_get"),")."),(0,r.kt)("li",{parentName:"ul"},"Provides a function to increment the current count (",(0,r.kt)("em",{parentName:"li"},"counter_inc"),")."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"contract-v2")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is a second version of the counter contract, which will not be used in this tutorial. "),(0,r.kt)("li",{parentName:"ul"},"This version provides an additional function to decrement the counter and to demonstrate contract upgrades in another tutorial."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"counter-call")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is session code that retrieves the ",(0,r.kt)("em",{parentName:"li"},"contract-v1")," contract, gets the current count value, increments it, and ensures the count was incremented by 1.")))),(0,r.kt)("h2",{id:"create-a-local-network"},"Create a Local Network"),(0,r.kt)("p",null,"After getting familiar with the counter source code, you need to create a local Casper network to install the contract. If you completed the NCTL tutorial, all you need to do is allocate the network assets and then start the network."),(0,r.kt)("p",null,"If you run the following line in your terminal, you should be able to spin up a network effortlessly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nctl-assets-setup && nctl-start\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If it fails for any reason, please refer the ",(0,r.kt)("a",{parentName:"p",href:"/docs/developers/dapps/setup-nctl"},"NCTL tutorial")," and make sure that all your packages are up to date.")),(0,r.kt)("h2",{id:"view-the-network-state"},"View the Network State"),(0,r.kt)("p",null,"With a network up and running, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-client query-global-state")," command to check the status of the network. However, you first need an ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountHash")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"state-root-hash")," so that you can get the current snapshot. Once you have that information, check the status of the network."),(0,r.kt)("p",null,"You will need to use the following three commands:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"nctl-view-faucet-account")," - Get the faucet's account hash"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"casper-client get-state-root-hash")," - Get the state root hash"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"casper-client query-global-state")," - Get the network state")),(0,r.kt)("p",null,"Run through these commands in order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nctl-view-faucet-account\n")),(0,r.kt)("p",null,"If NCTL is correctly up and running, this command should return quite a bit of information about the faucet account. Feel free to look through the records and make a note of the ",(0,r.kt)("em",{parentName:"p"},"account-hash")," field and the ",(0,r.kt)("em",{parentName:"p"},"secret_key.pem")," path because you will often use both."),(0,r.kt)("p",null,"Get the state root hash:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address http://localhost:11101\n")),(0,r.kt)("p",null,"You are using localhost as the node server since the network is running on our local machine. Make a note of the ",(0,r.kt)("em",{parentName:"p"},"state-root-hash")," that is returned, but keep in mind that this hash value will need to be updated every time you modify the network state. "),(0,r.kt)("p",null,"Finally, query the actual state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n    --node-address http://localhost:11101 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH]\n")),(0,r.kt)("p",null,"Substitute the state root hash and account hash values you just retrieved into this command and execute it. Do not be surprised if you see nothing on the network. That is because you have not sent anything to the network yet."),(0,r.kt)("h2",{id:"install-the-contract"},"Install the Contract"),(0,r.kt)("p",null,"Before installing the contract on the chain, you will need to compile it to Wasm."),(0,r.kt)("p",null,"The Makefile included in the repository makes compilation trivial. With these two commands, you can build (in release mode) and test the contract before installing it. ",(0,r.kt)("em",{parentName:"p"},"make prepare")," sets the Wasm target and ",(0,r.kt)("em",{parentName:"p"},"make test")," builds the contracts and verifies them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd counter\nmake prepare\nmake test\n")),(0,r.kt)("p",null,"With the compiled contract, you can call the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-client put-deploy")," command to install the contract on the chain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n    --node-address http://localhost:11101 \\\n    --chain-name casper-net-1 \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-path ./contract-v1/target/wasm32-unknown-unknown/release/counter-v1.wasm\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"li"},"[PATH_TO_YOUR_KEY]")," field with the actual path of where your secret key is stored. It is one of the fields that gets returned when you call ",(0,r.kt)("em",{parentName:"li"},"nctl-view-faucet-account"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"session-path")," argument should point to wherever you compiled the counter-v1.wasm on your computer. The code snippet shows you the default path if the counter folder is in the same directory.")),(0,r.kt)("p",null,"Once you call this command, it will return a deploy hash. You can use this hash to verify that the deploy successfully took place."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"casper-client get-deploy \\\n    --node-address http://localhost:11101 [DEPLOY_HASH]\n")),(0,r.kt)("h2",{id:"view-the-updated-network-state"},"View the Updated Network State"),(0,r.kt)("p",null,"Hopefully, the deploy was successful. Call the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-client query-global-state")," command to check if the named key is visible on the chain."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You must get the new state root hash since you just wrote a deploy to the chain.")),(0,r.kt)("p",null,"If you run these two commands, there will be a new counter named key on the chain."),(0,r.kt)("p",null,"Get the NEW state-root-hash:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address http://localhost:11101\n")),(0,r.kt)("p",null,"Get the network state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n    --node-address http://localhost:11101 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH]\n")),(0,r.kt)("p",null,"You can actually dive further into the data stored on the chain using the query path argument or directly querying the deploy hash. Try the following commands and notice that each one gives you a different level of detail."),(0,r.kt)("p",null,"Retrieve the specific counter contract details:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state --node-address http://localhost:11101 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] -q "counter"\n')),(0,r.kt)("p",null,"Retrieve the specific count value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state --node-address http://localhost:11101 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] -q "counter/count"\n')),(0,r.kt)("p",null,"Retrieve the specific deploy details:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state --node-address http://localhost:11101 \\\n    --state-root-hash [STATE_ROOT_HASH] --key deploy-[DEPLOY_HASH]\n")),(0,r.kt)("p",null,"The first two commands access the ",(0,r.kt)("inlineCode",{parentName:"p"},"counter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," named keys, respectively, using the query path argument. The third command uses the deploy hash (the return value of ",(0,r.kt)("em",{parentName:"p"},"put-deploy"),") to query the state of that specific deploy only."),(0,r.kt)("h2",{id:"increment-the-counter"},"Increment the Counter"),(0,r.kt)("p",null,"You now have a counter on the chain, and you can increment it by calling the entry-point ",(0,r.kt)("em",{parentName:"p"},"counter_inc"),", the function defined in the contract. You can call an entry-point in an installed contract by using the ",(0,r.kt)("em",{parentName:"p"},"put-deploy")," command as illustrated here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy \\\n    --node-address http://localhost:11101 \\\n    --chain-name casper-net-1 \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-name "counter" \\\n    --session-entry-point "counter_inc"\n')),(0,r.kt)("p",null,"Notice that this command is nearly identical to the command used to install the contract. However, instead of ",(0,r.kt)("em",{parentName:"p"},"session-path")," pointing to the Wasm binary, you have ",(0,r.kt)("em",{parentName:"p"},"session-name")," and ",(0,r.kt)("em",{parentName:"p"},"session-entry-point")," identifying the on-chain contract and its associated entry-point to execute."),(0,r.kt)("h2",{id:"view-the-updated-network-state-again"},"View the Updated Network State Again"),(0,r.kt)("p",null,"After calling the entry-point, theoretically, the count value should increment by one, but how can you be sure of that? You can query the network again, however, remember that you have to get a new state root hash. Check if the count was incremented by looking at it with the query argument."),(0,r.kt)("p",null,"Get the NEW state-root-hash:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address http://localhost:11101\n")),(0,r.kt)("p",null,"Get the network state, specifically for the count variable this time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state --node-address http://localhost:11101 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] -q "counter/count"\n')),(0,r.kt)("p",null,"You should be able to see the count value and observe that it has increased."),(0,r.kt)("h2",{id:"increment-the-counter-again"},"Increment the Counter Again"),(0,r.kt)("p",null,"If you recall, in the repository there is session code called ",(0,r.kt)("em",{parentName:"p"},"counter-call"),". Try to increment the count using that session code instead of the session entry-point used above."),(0,r.kt)("p",null,"Keep in mind, this is another ",(0,r.kt)("em",{parentName:"p"},"put-deploy")," call just like when you installed the contract. The session-path is once again going to be different for you depending on where you compiled the contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n    --node-address http://localhost:11101 \\\n    --chain-name casper-net-1 \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-path ./counter/counter-call/target/wasm32-unknown-unknown/release/counter-call.wasm\n")),(0,r.kt)("h2",{id:"view-the-final-network-state"},"View the Final Network State"),(0,r.kt)("p",null,"To make sure that the session code ran successfully, get the new state root hash and query the network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address http://localhost:11101\n")),(0,r.kt)("p",null,"Get the network state, specifically for the count variable this time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state --node-address http://localhost:11101 \\\n    --state-root-hash [STATE_ROOT_HASH]\n    --key [ACCOUNT_HASH] -q "counter/count"\n')),(0,r.kt)("p",null,"If all went according to plan, your count value should be 2 at this point. "),(0,r.kt)("p",null,"Congratulations on building, installing, and using a smart contract on your local network!"))}m.isMDXComponent=!0}}]);