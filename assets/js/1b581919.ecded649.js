"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7832],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},160:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=(n(4996),["components"]),s={title:"Recovery"},l="Recovering from Validator Eviction",c={unversionedId:"operators/becoming-a-validator/recovering",id:"operators/becoming-a-validator/recovering",title:"Recovery",description:"This topic discusses the steps a validator needs to take if it is evicted from the validator set:",source:"@site/source/docs/casper/operators/becoming-a-validator/recovering.md",sourceDirName:"operators/becoming-a-validator",slug:"/operators/becoming-a-validator/recovering",permalink:"/docs/operators/becoming-a-validator/recovering",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/operators/becoming-a-validator/recovering.md",tags:[],version:"current",lastUpdatedAt:1707225855,formattedLastUpdatedAt:"Feb 6, 2024",frontMatter:{title:"Recovery"},sidebar:"operators",previous:{title:"Unbonding",permalink:"/docs/operators/becoming-a-validator/unbonding"},next:{title:"Inactive and Faulty Nodes",permalink:"/docs/operators/becoming-a-validator/inactive-vs-faulty"}},p={},d=[{value:"Detecting the Eviction",id:"detecting-the-eviction",level:2},{value:"Detection using CSPR.live",id:"detection-using-csprlive",level:3},{value:"Detection using the Casper Client",id:"detection-using-the-casper-client",level:3},{value:"Correcting any Underlying Node Issues",id:"correcting-any-underlying-node-issues",level:2},{value:"Activating the Bid",id:"activating-the-bid",level:2},{value:"Method 1: Activating the Bid with the System Auction Contract",id:"activating-system-auction",level:3},{value:"Method 2: Activating the Bid with Compiled Wasm",id:"activating-compiled-wasm",level:3},{value:"Checking the Bid Activation",id:"checking-the-bid-activation",level:2}],u={toc:d},h="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"recovering-from-validator-eviction"},"Recovering from Validator Eviction"),(0,o.kt)("p",null,"This topic discusses the steps a validator needs to take if it is evicted from the validator set:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Detecting the eviction"),(0,o.kt)("li",{parentName:"ol"},"Correcting any underlying node issues"),(0,o.kt)("li",{parentName:"ol"},"Re-building the contracts for bonding"),(0,o.kt)("li",{parentName:"ol"},"Activating the bid"),(0,o.kt)("li",{parentName:"ol"},"Checking the bid")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/operators/becoming-a-validator/inactive-vs-faulty"},"Inactive vs. Faulty Validator Nodes")," topic explains why a node would be evicted."),(0,o.kt)("h2",{id:"detecting-the-eviction"},"Detecting the Eviction"),(0,o.kt)("p",null,"The validator selection occurs at the end of an Era. Due to the bonding delay, this determines the Validators for the Era after the Era is about to start. When a validating node does not participate in consensus for some time, it will be marked invalid and evicted at the end of the next Era."),(0,o.kt)("p",null,"For example, if we are in Era 100 and your node is invalid, your node will be marked for eviction to be removed at the start of Era 102. This is due to the bonding delay of 1 Era."),(0,o.kt)("h3",{id:"detection-using-csprlive"},"Detection using CSPR.live"),(0,o.kt)("p",null,"If you were a previous validator and still exist on the ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/validators-auction"},"Validators Auction")," tab but not in ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/validators"},"Validators"),", you may have been evicted or outbid. "),(0,o.kt)("h3",{id:"detection-using-the-casper-client"},"Detection using the Casper Client"),(0,o.kt)("p",null,"All auction information is returned with the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-client get-auction-info")," command. It would help if you filtered this down to your public key. "),(0,o.kt)("p",null,"You can replace the <public_key> with your public key manually and run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info | jq '.result.auction_state.bids[] | select( .public_key == \"<public_key>\")'\n")),(0,o.kt)("p",null,"Or, if you set up the node as described in this documentation, you can run another command that will automatically put in your public key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info | jq --arg pk \"$(cat /etc/casper/validator_keys/public_key_hex)\" '.result.auction_state.bids[] | select( (.public_key | ascii_downcase) == ($pk | ascii_downcase) )'\n")),(0,o.kt)("p",null,"You know you were evicted if the ",(0,o.kt)("inlineCode",{parentName:"p"},"get-auction-info")," command returned your bid showing an ",(0,o.kt)("strong",{parentName:"p"},"inactive")," field. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/operators/becoming-a-validator/inactive-vs-faulty"},"Inactive vs. Faulty Validator Nodes")," page for more information."),(0,o.kt)("p",null,"If you receive a ",(0,o.kt)("inlineCode",{parentName:"p"},"parse error: Invalid numeric literal at"),", this usually means that your RPC port is not up yet. Get your node in sync, and the RPC will come up. This should be working before you try to recover. Try running the following command to check the status of your RPC port:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info\n")),(0,o.kt)("h2",{id:"correcting-any-underlying-node-issues"},"Correcting any Underlying Node Issues"),(0,o.kt)("p",null,"Before fixing the eviction, you need to correct the problem that caused your node to be evicted. Stage missed upgrades, correct any node issues, and get your node in sync."),(0,o.kt)("p",null,"To check if your node is in sync, compare the current block height at ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/"},"https://cspr.live/")," with the height from your node with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s localhost:8888/status | jq .last_added_block_info\n")),(0,o.kt)("p",null,"If you cannot figure out the issue, ask for help in the ",(0,o.kt)("em",{parentName:"p"},"node-tech-support")," channel on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/casperblockchain"},"Discord"),"."),(0,o.kt)("h2",{id:"activating-the-bid"},"Activating the Bid"),(0,o.kt)("p",null,"Once your node is in sync and ready to validate again, you must activate your invalid bid. There are two ways to reactivate your bid. The recommended and cheaper method is to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"activate_bid")," entry point from the system auction contract. The second method involves building the ",(0,o.kt)("inlineCode",{parentName:"p"},"activate_bid.wasm")," contract as explained in ",(0,o.kt)("a",{parentName:"p",href:"/docs/operators/setup/joining#step-3-build-contracts"},"Building the Required Contracts"),"."),(0,o.kt)("p",null,"We recommend testing the following steps on the official Testnet before performing them in a live environment like the Casper Mainnet."),(0,o.kt)("h3",{id:"activating-system-auction"},"Method 1: Activating the Bid with the System Auction Contract"),(0,o.kt)("p",null,"This method calls the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"activate_bid")," entry point from the system auction contract. Using this method, you do not need to build any contracts, reducing costs and complexity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-hash <SESSION_HASH> \\\n--session-entry-point activate_bid \\\n--session-arg \"validator_public_key:public_key='$(cat /etc/casper/validator_keys/public_key_hex)'\"\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the account paying for the Deploy"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,o.kt)("em",{parentName:"li"},"casper"),". For Testnet, use ",(0,o.kt)("em",{parentName:"li"},"casper-test")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The payment for the Deploy in motes. You must check the network's chainspec. For example, this entry point call needs 10,000 motes for node version ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml"},"1.5.1")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"session-hash")," - Hex-encoded hash of the stored auction contract, which depends on the network you are using. For Casper's Mainnet and Testnet, the hashes are:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Testnet"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Mainnet"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea"))),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"session-entry-point")," - Name of the entry point that will be used when calling the system auction contract. In this case, it is ",(0,o.kt)("inlineCode",{parentName:"li"},"activate_bid"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"activate_bid")," entry point expects one argument:"),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"validator_public_key"),": The hexadecimal public key of the validator reactivating its bid. ",(0,o.kt)("strong",{parentName:"li"},"This key must match the secret key that signs the bid activation request"))),(0,o.kt)("p",null,"The command will return a deploy hash, which is needed to verify the deploy's processing results. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/resources/tutorials/beginner/querying-network#deploy-status"},"Deploy Status")," section for more details."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"activate_bid")," entry point on the auction contract has a fixed cost of 10,000 motes.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,"This example uses the Casper Testnet to reactivate a bid:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client put-deploy \\\n--node-address http://65.21.75.254:7777  \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--chain-name casper-test \\\n--payment-amount 10000 \\\n--session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n--session-entry-point activate_bid \\\n--session-arg \"validator_public_key:public_key='$(cat /etc/casper/validator_keys/public_key_hex)'\"\n")),(0,o.kt)("p",null,"Next, ",(0,o.kt)("a",{parentName:"p",href:"#checking-the-bid-activation"},"check the bid activation")," status."),(0,o.kt)("h3",{id:"activating-compiled-wasm"},"Method 2: Activating the Bid with Compiled Wasm"),(0,o.kt)("p",null,"The second method to rejoin the network is to reactivate your bid using the ",(0,o.kt)("inlineCode",{parentName:"p"},"activate_bid.wasm"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo -u casper casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-path "$HOME/casper-node/target/wasm32-unknown-unknown/release/activate_bid.wasm" \\\n--session-arg "validator_public_key:public_key=\'$(cat /etc/casper/validator_keys/public_key_hex)\'"\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the account paying for the Deploy"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,o.kt)("em",{parentName:"li"},"casper"),". For Testnet, use ",(0,o.kt)("em",{parentName:"li"},"casper-test")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The payment for the Deploy in motes"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"session-path")," - The path to the compiled Wasm on your computer")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"activate_bid.wasm")," expects one argument:"),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"validator_public_key"),": The hexadecimal public key of the validator reactivating its bid. ",(0,o.kt)("strong",{parentName:"li"},"This key must match the secret key that signs the bid activation request"))),(0,o.kt)("p",null,"The command will return a deploy hash, which is needed to verify the deploy's processing results."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"As described above, this method is much more expensive than calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"activate_bid")," entry point.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,"Here is an example that reactivates a bid using the ",(0,o.kt)("inlineCode",{parentName:"p"},"activate_bid.wasm"),". You must modify the payment and other values in the deploy based on your environment and the network's ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/glossary/C#chainspec"},"chainspec.toml"),". For example, if you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"activate_bid.wasm")," on a network with node version ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/release-1.4.9/resources/production/chainspec.toml"},"1.4.9"),", you will require a balance of at least 5 CSPR for this contract. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo -u casper casper-client put-deploy \\\n--node-address http://65.21.75.254:7777  \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--chain-name casper-test \\\n--payment-amount 5000000000 \\\n--session-path "$HOME/casper-node/target/wasm32-unknown-unknown/release/activate_bid.wasm" \\\n--session-arg "validator_public_key:public_key=\'$(cat /etc/casper/validator_keys/public_key_hex)\'"\n')),(0,o.kt)("p",null,"Check that the deploy was successful with the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-client get-deploy <deploy_hash>")," or by searching for the deploy hash on ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/"},"https://cspr.live/"),". Also, check the bid activation status as shown below."),(0,o.kt)("h2",{id:"checking-the-bid-activation"},"Checking the Bid Activation"),(0,o.kt)("p",null,"Once your deploy processes, you can ",(0,o.kt)("a",{parentName:"p",href:"/docs/operators/becoming-a-validator/recovering#detecting-the-eviction-using-the-casper-client"},"check your bid")," again. You should now see ",(0,o.kt)("inlineCode",{parentName:"p"},'"inactive": false')," in the output."),(0,o.kt)("p",null,"If you wait until the next Era starts, you should also see your public key as a future validator on the ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/validators"},"Validators")," tab."))}m.isMDXComponent=!0}}]);