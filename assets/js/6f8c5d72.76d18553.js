"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"CEP-78 JavaScript Client",slug:"/resources/tokens/cep78/js-tutorial"},l="CEP-78 JavaScript Client Tutorial",o={unversionedId:"resources/tokens/cep78/js-tutorial",id:"resources/tokens/cep78/js-tutorial",title:"CEP-78 JavaScript Client",description:"This tutorial outlines the usage of the JavaScript client available for the CEP-78 Enhanced NFT Standard.",source:"@site/source/docs/resources/tokens/cep78/js-tutorial.md",sourceDirName:"resources/tokens/cep78",slug:"/resources/tokens/cep78/js-tutorial",permalink:"/docs/next/resources/tokens/cep78/js-tutorial",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/resources/tokens/cep78/js-tutorial.md",tags:[],version:"current",lastUpdatedAt:1721391932,formattedLastUpdatedAt:"Jul 19, 2024",frontMatter:{title:"CEP-78 JavaScript Client",slug:"/resources/tokens/cep78/js-tutorial"},sidebar:"resources",previous:{title:"Ownership Lookup",permalink:"/docs/next/resources/tokens/cep78/reverse-lookup"},next:{title:"Open-Source Software",permalink:"/docs/next/resources/build-on-casper/casper-open-source-software"}},s={},p=[{value:"Client Installation",id:"client-installation",level:2},{value:"Installing a CEP-78 Contract using the JavaScript Client",id:"installing-a-cep-78-contract-using-the-javascript-client",level:2},{value:"Minting a Token",id:"minting-a-token",level:2},{value:"Register Recipient",id:"register-recipient",level:2},{value:"Transferring a Token",id:"transferring-a-token",level:2},{value:"Burning a Token",id:"burning-a-token",level:2},{value:"Example Usages",id:"example-usages",level:2},{value:"Running an Install Example",id:"running-an-install-example",level:3},{value:"Running a Usage Example",id:"running-a-usage-example",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cep-78-javascript-client-tutorial"},"CEP-78 JavaScript Client Tutorial"),(0,i.kt)("p",null,"This tutorial outlines the usage of the JavaScript client available for the CEP-78 Enhanced NFT Standard."),(0,i.kt)("p",null,"Further information on the CEP-78 Enhanced NFT Standard can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft"},"here"),"."),(0,i.kt)("p",null,"The client is available in ",(0,i.kt)("em",{parentName:"p"},"npm")," as ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/casper-cep78-js-client"},"casper-cep78-js-client"),"."),(0,i.kt)("h2",{id:"client-installation"},"Client Installation"),(0,i.kt)("p",null,"The client can be installed in a project you have built using TypeScript / Javascript."),(0,i.kt)("p",null,"To install run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"npm install casper-cep78-js-client\n")),(0,i.kt)("h2",{id:"installing-a-cep-78-contract-using-the-javascript-client"},"Installing a CEP-78 Contract using the JavaScript Client"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"install")," method crafts a ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/concepts/glossary/T#transaction-transaction"},"Transaction")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"InstallArgs"),".\nAs with every deploy created by the SDK, you can send it using the ",(0,i.kt)("inlineCode",{parentName:"p"},".send(rpcUrl)")," method providing the RPC URL that you want to use. It will return deployHash. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'\n  const cc = new CEP78Client(process.env.NODE_URL!, process.env.NETWORK_NAME!);\n\n  const installDeploy = await cc.install(\n    {\n      collectionName: "my-collection",\n      collectionSymbol: "MY-NFTS",\n      totalTokenSupply: "1000",\n      ownershipMode: NFTOwnershipMode.Transferable,\n      nftKind: NFTKind.Physical,\n      jsonSchema: {\n        properties: {\n          color: { name: "color", description: "", required: true },\n          size: { name: "size", description: "", required: true },\n          material: { name: "material", description: "", required: true },\n          condition: { name: "condition", description: "", required: false },\n        },\n      },\n      nftMetadataKind: NFTMetadataKind.CustomValidated,\n      identifierMode: NFTIdentifierMode.Ordinal,\n      metadataMutability: MetadataMutability.Immutable,\n      mintingMode: MintingMode.Installer,\n      ownerReverseLookupMode: OwnerReverseLookupMode.Complete\n    },\n    "250000000000",\n    FAUCET_KEYS.publicKey,\n    [FAUCET_KEYS]\n  );\n\n  const hash = await installDeploy.send(process.env.http://localhost:11101/rpc);\n\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"InstallArgs")," are specified as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"collectionName")," - The name of the NFT collection, passed in as a ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),". ",(0,i.kt)("strong",{parentName:"p"},"This parameter is required and cannot be changed post installation"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"collectionSymbol")," - The symbol representing a given NFT collection, passed in as a ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),". ",(0,i.kt)("strong",{parentName:"p"},"This parameter is required and cannot be changed post installation"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"totalTokenSupply")," - The total number of NFTs that a specific contract instance will mint passed in as a ",(0,i.kt)("inlineCode",{parentName:"p"},"U64")," value. ",(0,i.kt)("strong",{parentName:"p"},"This parameter is required and cannot be changed post installation"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ownershipMode")," - The ",(0,i.kt)("inlineCode",{parentName:"p"},"OwnershipMode")," modality that dictates the ownership behavior of the NFT contract. This argument is passed in as a ",(0,i.kt)("inlineCode",{parentName:"p"},"u8")," value and is required at the time of installation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"nftKind")," - The ",(0,i.kt)("inlineCode",{parentName:"p"},"NFTKind")," modality that specifies the off-chain items represented by the on-chain NFT data. This argument is passed in as a ",(0,i.kt)("inlineCode",{parentName:"p"},"u8")," value and is required at the time of installation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"jsonSchema")," - The JSON schema for the NFT tokens that will be minted by the NFT contract passed in as a ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),". More information on ",(0,i.kt)("inlineCode",{parentName:"p"},"NFTMetadataKind")," can be found ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/resources/tokens/cep78/modalities#nftmetadatakind"},"here"),". This parameter may be left empty if metadata kind is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"Raw(3)"),". If the metadata kind is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomValidated(4)"),", it will require a specifically formatted custom schema. This parameter ",(0,i.kt)("strong",{parentName:"p"},"cannot be changed post installation"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"nftMetadataKind")," - The metadata schema for the NFTs to be minted by the NFT contract. This argument is passed in as a ",(0,i.kt)("inlineCode",{parentName:"p"},"u8")," value and is required at the time of installation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"identifierMode")," - The ",(0,i.kt)("inlineCode",{parentName:"p"},"NFTIdentifierMode")," modality dictates the primary identifier for NFTs minted by the contract. This argument is passed in as a ",(0,i.kt)("inlineCode",{parentName:"p"},"u8")," value and is required at the time of installation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"metadataMutability")," - The ",(0,i.kt)("inlineCode",{parentName:"p"},"MetadataMutability")," modality dictates whether the metadata of minted NFTs can be updated. This argument is passed in as a ",(0,i.kt)("inlineCode",{parentName:"p"},"u8")," value and is required at the time of installation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"mintingmode")," - The ",(0,i.kt)("inlineCode",{parentName:"p"},"MintingMode")," modality dictates the access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"mint()")," entry point in the NFT contract. This optional parameter will default to restricting access to the installer of the contract. ",(0,i.kt)("strong",{parentName:"p"},"This parameter cannot be changed once the contract has been installed"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"holdermode")," - The ",(0,i.kt)("inlineCode",{parentName:"p"},"NFTHolderMode")," modality dictates which entities can hold NFTs. This optional parameter will default to a mixed mode, allowing either ",(0,i.kt)("inlineCode",{parentName:"p"},"Accounts")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Contracts")," to hold NFTs. ",(0,i.kt)("strong",{parentName:"p"},"This parameter cannot be changed once the contract has been installed"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"burnMode")," - The ",(0,i.kt)("inlineCode",{parentName:"p"},"BurnMode")," modality dictates whether minted NFTs can be burned. This optional parameter will allow tokens to be burnt by default. ",(0,i.kt)("strong",{parentName:"p"},"This parameter cannot be changed once the contract has been installed"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ownerReverseLookupMode")," - The ",(0,i.kt)("inlineCode",{parentName:"p"},"OwnerReverseLookupMode")," dictates whether the contract will index ownership of tokens as outlined ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/resources/tokens/cep78/reverse-lookup#the-cep-78-page-system"},"here")," to allow lookup of owned tokens by account. ",(0,i.kt)("strong",{parentName:"p"},"This parameter cannot be changed once the contract has been installed"),"."))),(0,i.kt)("p",null,"Further information on CEP-78 modality options can be found ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/resources/tokens/cep78/modalities"},"here"),"."),(0,i.kt)("h2",{id:"minting-a-token"},"Minting a Token"),(0,i.kt)("p",null,"The CEP-78 JS Client includes code to construct a deploy that will ",(0,i.kt)("inlineCode",{parentName:"p"},"Mint")," a token, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'\n  const mintDeploy = cc.mint(\n    {\n      owner: FAUCET_KEYS.publicKey,\n      meta: {\n        color: "Blue",\n        size: "Medium",\n        material: "Aluminum",\n        condition: "Used",\n      },\n    },\n    { useSessionCode: true },\n    "2000000000",\n    FAUCET_KEYS.publicKey,\n    [FAUCET_KEYS]\n  );\n\n  const mintDeployHash = await mintDeploy.send("http://localhost:11101/rpc");\n\n')),(0,i.kt)("p",null,"The arguments adhere to those provided in the original installation, with the ",(0,i.kt)("inlineCode",{parentName:"p"},".send()")," pointing to a valid RPC URL on your target Casper network. In this instance, we are using an NCTL RPC URL."),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/client-js/examples/usage.ts#L86-L88"},(0,i.kt)("inlineCode",{parentName:"a"},"useSessionCode"))," variable decides if the user will call ",(0,i.kt)("inlineCode",{parentName:"p"},"mint")," using session code, or not. It will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the ",(0,i.kt)("inlineCode",{parentName:"p"},"OwnerReverseLookupMode")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"Complete"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/client-js/examples/usage.ts#L116-L130"},"It then registers the recipient with the contract")," and mints the token."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"OwnerReverseLookupMode")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"NoLookup"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"useSessionCode")," will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and it will simply mint the token as it does not need to register the recipient."),(0,i.kt)("h2",{id:"register-recipient"},"Register Recipient"),(0,i.kt)("p",null,"As we used ",(0,i.kt)("inlineCode",{parentName:"p"},"ownerReverseLookupMode: OwnerReverseLookupMode.Complete")," in this contract installation, we must register the recipient. To do this, we construct a ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," deploy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'\n    const registerDeploy = cc.register(\n      {\n        tokenOwner: USER1_KEYS.publicKey,\n      },\n      "1000000000",\n      USER1_KEYS.publicKey,\n      [USER1_KEYS]\n    );\n\n    const registerDeployHash = await registerDeploy.send("http://localhost:11101/rpc");\n    \n')),(0,i.kt)("h2",{id:"transferring-a-token"},"Transferring a Token"),(0,i.kt)("p",null,"After minting one or more tokens, you can then use the following code to transfer the tokens between accounts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'\n  const transferDeploy = cc.transfer(\n    {\n      tokenId: "0",\n      source: FAUCET_KEYS.publicKey,\n      target: USER1_KEYS.publicKey,\n    },\n    { useSessionCode: true },\n    "13000000000",\n    FAUCET_KEYS.publicKey,\n    [FAUCET_KEYS]\n  );\n\n  const transferDeployHash = await transferDeploy.send("http://localhost:11101/rpc");\n\n')),(0,i.kt)("p",null,"Transferring accepts the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"tokenId")," - The sequential ID assigned to a token in mint order.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"source")," - The account sending the token in question.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"target")," - The account receiving the transferred token."))),(0,i.kt)("p",null,"As above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"useSessionCode")," variable determines if the user will call ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer")," using session code based on the setting of ",(0,i.kt)("inlineCode",{parentName:"p"},"OwnerReverseLookupMode"),"."),(0,i.kt)("h2",{id:"burning-a-token"},"Burning a Token"),(0,i.kt)("p",null,"The following code shows how to burn a minted NFT that you hold and have access rights to, requiring only the ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenId")," argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'\n  const burnDeploy = await contractClient.burn(\n    { tokenId: "0" },\n    "13000000000",\n    USER1_KEYS.publicKey,\n    [USER1_KEYS]\n  );\n\n  const burnDeployHash = await burnDeploy.send("http://localhost:11101/rpc");\n\n')),(0,i.kt)("h2",{id:"example-usages"},"Example Usages"),(0,i.kt)("h3",{id:"running-an-install-example"},"Running an Install Example"),(0,i.kt)("p",null,"This repository includes an example script for installing a CEP-78 contract instance."),(0,i.kt)("p",null,"You will need to define the following variables in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NODE_URL")," - The address of a node. If you are testing using ",(0,i.kt)("a",{parentName:"p",href:"./developers/dapps/setup-nctl"},"NCTL"),", this will be ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:11101/rpc"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NETWORK_NAME")," - The name of the Casper network you are operating on, ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-net-1")," when testing using a local network with NCTL.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"MASTER_KEY_PAIR_PATH")," - The path to the key pair of the minting account.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"USER1_KEY_PAIR_PATH")," - The path to an additional account's key pair for use in testing transfer features."))),(0,i.kt)("p",null,"You may also need to install associated dependencies using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"npm i\n")),(0,i.kt)("p",null,"This example can be run using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"npm run example:install\n")),(0,i.kt)("p",null,"The example will then return the installation's ",(0,i.kt)("inlineCode",{parentName:"p"},"deployHash"),", and inform you when the installation is successful."),(0,i.kt)("p",null,"The example will then provide the installing account's information, which will include the CEP-78 NFT contract's hash and package hash."),(0,i.kt)("h3",{id:"running-a-usage-example"},"Running a Usage Example"),(0,i.kt)("p",null,"A usage example uses the same variables as the Install example above, but tests the basic functionality of the contract after installation."),(0,i.kt)("p",null,"The usage example can be run using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"npm run example:usage\n")),(0,i.kt)("p",null,"This example will acquire the contract's hash and package hash, prior to sending three separate deploys to perform several function tests as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Mint")," - The example will attempt to mint an NFT using the installation account.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Transfer")," - The example will transfer the previously minted NFT to a second account (USER1 as defined in the variables.)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Burn")," - The example will burn the minted NFT."))),(0,i.kt)("p",null,"The associated code for these deploys may be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"client-js/examples")," directory."))}u.isMDXComponent=!0}}]);