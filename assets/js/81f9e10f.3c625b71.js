"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9108],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6197:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={title:"Quick Installation"},c="Casper NFT Quick Installation Guide",l={unversionedId:"resources/tokens/cep78/using-casper-client/quickstart-guide",id:"resources/tokens/cep78/using-casper-client/quickstart-guide",title:"Quick Installation",description:"This quick installation guide introduces you to the Casper client commands and Wasm files necessary to deploy a CEP-78 Casper Enhanced NFT contract to the Casper Testnet. For greater detail into the creation and mechanics of the Casper NFT contract, see the complete Casper NFT Tutorial.",source:"@site/source/docs/casper/resources/tokens/cep78/using-casper-client/quickstart-guide.md",sourceDirName:"resources/tokens/cep78/using-casper-client",slug:"/resources/tokens/cep78/using-casper-client/quickstart-guide",permalink:"/resources/tokens/cep78/using-casper-client/quickstart-guide",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/resources/tokens/cep78/using-casper-client/quickstart-guide.md",tags:[],version:"current",lastUpdatedAt:1714742814,formattedLastUpdatedAt:"May 3, 2024",frontMatter:{title:"Quick Installation"},sidebar:"resources",previous:{title:"CEP-78 Modalities",permalink:"/resources/tokens/cep78/modalities"},next:{title:"Installation Workflow",permalink:"/resources/tokens/cep78/using-casper-client/full-installation-tutorial"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Installing the NFT Contract",id:"installing-the-nft-contract",level:2},{value:"Next Steps",id:"next-steps",level:2}],d={toc:p},m="wrapper";function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"casper-nft-quick-installation-guide"},"Casper NFT Quick Installation Guide"),(0,s.kt)("p",null,"This quick installation guide introduces you to the Casper client commands and Wasm files necessary to deploy a CEP-78 Casper Enhanced NFT contract to the ",(0,s.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/"},"Casper Testnet"),". For greater detail into the creation and mechanics of the Casper NFT contract, see the complete ",(0,s.kt)("a",{parentName:"p",href:"/resources/tokens/cep78/using-casper-client/full-installation-tutorial"},"Casper NFT Tutorial"),"."),(0,s.kt)("p",null,"To execute transactions on a Casper network involving NFTs, you will need some CSPR tokens to pay for the transactions. The Testnet provides test tokens using a ",(0,s.kt)("a",{parentName:"p",href:"/users/testnet-faucet"},"faucet"),"."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"Before using this guide, ensure you meet the following requirements:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Set up the ",(0,s.kt)("a",{parentName:"li",href:"/developers/prerequisites"},"development prerequisites"),", including the ",(0,s.kt)("a",{parentName:"li",href:"/developers/prerequisites#install-casper-client"},"Casper client")),(0,s.kt)("li",{parentName:"ul"},"Get a valid ",(0,s.kt)("a",{parentName:"li",href:"/developers/prerequisites#acquire-node-address-from-network-peers"},"node address")," from the network"),(0,s.kt)("li",{parentName:"ul"},"Know how to install a ",(0,s.kt)("a",{parentName:"li",href:"/developers/cli/sending-deploys"},"smart contract")," on a Casper network"),(0,s.kt)("li",{parentName:"ul"},"Hold enough CSPR tokens to pay for transactions")),(0,s.kt)("h2",{id:"setup"},"Setup"),(0,s.kt)("p",null,"Clone the Casper NFT (CEP-78) ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/"},"contract repository"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/casper-ecosystem/cep-78-enhanced-nft/ && cd cep-78-enhanced-nft\n")),(0,s.kt)("p",null,"Run the following commands to build the ",(0,s.kt)("inlineCode",{parentName:"p"},"contract.wasm")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"contract/target/wasm32-unknown-unknown/release")," directory and run the tests."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"make prepare\nmake test\n")),(0,s.kt)("p",null,"The output of the command would end with the following message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"test result: ok. 159 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 15.33s\n")),(0,s.kt)("h2",{id:"installing-the-nft-contract"},"Installing the NFT Contract"),(0,s.kt)("p",null,"The following command will install a sample NFT contract on the Testnet:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy --node-address http://localhost:11101/rpc/ \\\n--chain-name "casper-net-1" \\\n--payment-amount 5000000000 \\\n--secret-key ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \\\n--session-path contract/target/wasm32-unknown-unknown/release/contract.wasm \\\n--session-arg "collection_name:string=\'CEP-78-collection\'" \\\n--session-arg "collection_symbol:string=\'CEP78\'" \\\n--session-arg "total_token_supply:u64=\'100\'" \\\n--session-arg "ownership_mode:u8=\'2\'" \\\n--session-arg "nft_kind:u8=\'1\'" \\\n--session-arg "nft_metadata_kind:u8=\'0\'" \\\n--session-arg "json_schema:string=\'nft-schema\'" \\\n--session-arg "identifier_mode:u8=\'0\'" \\\n--session-arg "metadata_mutability:u8=\'0\'"\n')),(0,s.kt)("h2",{id:"next-steps"},"Next Steps"),(0,s.kt)("p",null,"Learn to query the contract, perform token transfers, set up approvals, and understand the testing framework."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/resources/tokens/cep78/using-casper-client/querying-NFTs"},"Query")," the NTF Contract"),(0,s.kt)("li",{parentName:"ul"},"Learn to ",(0,s.kt)("a",{parentName:"li",href:"/resources/tokens/cep78/using-casper-client/interacting-with-NFTs"},"Mint, Transfer, and Burn")," NFT tokens"),(0,s.kt)("li",{parentName:"ul"},"Review the ",(0,s.kt)("a",{parentName:"li",href:"/resources/tokens/cep78/using-casper-client/testing-NFTs"},"Tests"))))}k.isMDXComponent=!0}}]);