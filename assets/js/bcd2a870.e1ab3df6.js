"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6099],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5916:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=n(102),s=(n(7294),n(3905)),o=["components"],i={},c="JavaScript/TypeScript SDK",l={unversionedId:"developers/dapps/sdk/script-sdk",id:"developers/dapps/sdk/script-sdk",title:"JavaScript/TypeScript SDK",description:"This page contains details related to a few JavaScript (JS) clients and the Casper JS SDK.",source:"@site/source/docs/casper/developers/dapps/sdk/script-sdk.md",sourceDirName:"developers/dapps/sdk",slug:"/developers/dapps/sdk/script-sdk",permalink:"/developers/dapps/sdk/script-sdk",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/dapps/sdk/script-sdk.md",tags:[],version:"current",lastUpdatedAt:1683730485,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{},sidebar:"developers",previous:{title:"SDK Client Library Usage",permalink:"/developers/dapps/sdk/client-library-usage"},next:{title:".NET SDK",permalink:"/developers/dapps/sdk/csharp-sdk"}},p={},u=[{value:"Usage of JavaScript Clients",id:"usage-of-javascript-clients",level:2},{value:"Repository &amp; Client Packages",id:"repository-7-client-packages",level:3},{value:"Casper SDK for JavaScript",id:"casper-sdk-for-javascript",level:2},{value:"Installation",id:"installation",level:2},{value:"Tests",id:"tests",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Generating Account Keys",id:"generating-account-keys",level:3},{value:"Sending a Transfer",id:"sending-a-transfer",level:3}],d={toc:u},m="wrapper";function y(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"javascripttypescript-sdk"},"JavaScript/TypeScript SDK"),(0,s.kt)("p",null,"This page contains details related to a few JavaScript (JS) clients and the Casper JS SDK."),(0,s.kt)("h2",{id:"usage-of-javascript-clients"},"Usage of JavaScript Clients"),(0,s.kt)("p",null,"The Casper team has implemented specific JS clients to support interaction with the Casper contracts."),(0,s.kt)("h3",{id:"repository-7-client-packages"},"Repository & Client Packages"),(0,s.kt)("p",null,"We provide you with a repository that will help you create clients for Casper contracts. The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-contracts-js-clients/"},"casper-contracts-js-clients")," repository contains details to create clients for Casper contracts and usage examples of such clients dedicated to interacting with smart contracts on Casper."),(0,s.kt)("p",null,"The two primary clients in this repository are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-contracts-js-clients/tree/master/packages/erc20-client"},"Casper ERC-20 Client")," (casper-erc20-js-client)"),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-contracts-js-clients/blob/master/packages/cep47-client/README.md"},"Casper CEP-47 (NFT) Client")," (casper-cep47-js-client)")),(0,s.kt)("p",null,"These packages give you an easy way to install and interact with the corresponding Casper contract."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Package"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("em",{parentName:"strong"},"casper-erc20-js-client"))),(0,s.kt)("td",{parentName:"tr",align:null},"Supports installation of the Casper ERC-20 contract and includes usage examples for creating client instances, installing contracts, and handling transfers, balances, allowances, and more through code examples")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("em",{parentName:"strong"},"casper-cep47-js-client"))),(0,s.kt)("td",{parentName:"tr",align:null},"Supports installation of the Casper CEP-47 (NFT) smart contract along with installation, usage, and method details; it also includes steps to track events via the event stream")))),(0,s.kt)("h2",{id:"casper-sdk-for-javascript"},"Casper SDK for JavaScript"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/casper-js-sdk"},"TypeScript/JavaScript SDK")," allows developers to interact with a Casper network using TypeScript or JavaScript. This section covers different examples of using the Casper JS SDK."),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("p",null,"To install this library using Node.js, run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install casper-js-sdk@next --save\n")),(0,s.kt)("h2",{id:"tests"},"Tests"),(0,s.kt)("p",null,"You can find basic examples for how to use this library in the ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," directory. To run the tests, use this command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test\n")),(0,s.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,s.kt)("p",null,"In this section, we outline a couple of essential tasks you can accomplish with the JavaScript SDK:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Generating account keys"),(0,s.kt)("li",{parentName:"ul"},"Sending a transfer")),(0,s.kt)("h3",{id:"generating-account-keys"},"Generating Account Keys"),(0,s.kt)("p",null,"This example shows you how to use the SDK to generate account keys to sign your deploy."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const fs = require("fs");\nconst path = require("path");\nconst { Keys } = require("casper-js-sdk");\n\nconst createAccountKeys = () => {\n    // Generating keys\n    const edKeyPair = Keys.Ed25519.new();\n    const { publicKey, privateKey } = edKeyPair;\n\n    // Create a hexadecimal representation of the public key\n    const accountAddress = publicKey.toHex();\n\n    // Get the account hash (Uint8Array) from the public key\n    const accountHash = publicKey.toAccountHash();\n\n    // Store keys as PEM files\n    const publicKeyInPem = edKeyPair.exportPublicKeyInPem();\n    const privateKeyInPem = edKeyPair.exportPrivateKeyInPem();\n\n    const folder = path.join("./", "casper_keys");\n\n    if (!fs.existsSync(folder)) {\n        const tempDir = fs.mkdirSync(folder);\n    }\n\n    fs.writeFileSync(folder + "/" + accountAddress + "_public.pem", publicKeyInPem);\n    fs.writeFileSync(folder + "/" + accountAddress + "_private.pem", privateKeyInPem);\n\n    return accountAddress;\n};\n\nconst newAccountAddress = createAccountKeys();\n')),(0,s.kt)("p",null,"After generating the keys with this code, you can add them to the ",(0,s.kt)("a",{parentName:"p",href:"https://www.casperwallet.io/"},"Casper Wallet Chrome extension")," and use them to sign your transactions."),(0,s.kt)("h3",{id:"sending-a-transfer"},"Sending a Transfer"),(0,s.kt)("p",null,"This code block shows you how to define and send a transfer on a Casper network. Replace the ",(0,s.kt)("inlineCode",{parentName:"p"},"sender-public-key")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"recipient-public-key")," in the code below."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"sendTransfer")," function below will return a ",(0,s.kt)("inlineCode",{parentName:"p"},"transfer-hash")," which you can check on ",(0,s.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/"},"https://testnet.cspr.live/"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const fs = require("fs");\nconst path = require("path");\nconst axios = require("axios");\nconst casperClientSDK = require("casper-js-sdk");\n\nconst { Keys, CasperClient, CLPublicKey, DeployUtil } = require("casper-js-sdk");\n\nconst RPC_API = "http://159.65.203.12:7777/rpc";\nconst STATUS_API = "http://159.65.203.12:8888";\n\nconst sendTransfer = async ({ from, to, amount }) => {\n    const casperClient = new CasperClient(RPC_API);\n\n    const folder = path.join("./", "casper_keys");\n\n    // Read keys from the structure created in #Generating keys\n    const signKeyPair = Keys.Ed25519.parseKeyFiles(folder + "/" + from + "_public.pem", folder + "/" + from + "_private.pem");\n\n    // networkName can be taken from the status api\n    const response = await axios.get(STATUS_API + "/status");\n\n    let networkName = null;\n\n    if (response.status == 200) {\n        networkName = response.data.chainspec_name;\n    }\n\n    // For native-transfers the payment price is fixed\n    const paymentAmount = 100000000;\n\n    // transfer_id field in the request to tag the transaction and to correlate it to your back-end storage\n    const id = 187821;\n\n    // gasPrice for native transfers can be set to 1\n    const gasPrice = 1;\n\n    // Time that the deploy will remain valid for, in milliseconds\n    // The default value is 1800000 ms (30 minutes)\n    const ttl = 1800000;\n\n    let deployParams = new DeployUtil.DeployParams(signKeyPair.publicKey, networkName, gasPrice, ttl);\n\n    // We create a hex representation of the public key with an added prefix\n    const toPublicKey = CLPublicKey.fromHex(to);\n\n    const session = DeployUtil.ExecutableDeployItem.newTransfer(amount, toPublicKey, null, id);\n\n    const payment = DeployUtil.standardPayment(paymentAmount);\n    const deploy = DeployUtil.makeDeploy(deployParams, session, payment);\n    const signedDeploy = DeployUtil.signDeploy(deploy, signKeyPair);\n\n    // Here we are sending the signed deploy\n    return await casperClient.putDeploy(signedDeploy);\n};\n\nsendTransfer({\n    // Put here the public key of the sender\'s main purse. Note that it needs to have a balance greater than 2.5 CSPR\n    from: "<sender-public-key>",\n\n    // Put here the public key of the recipient\'s main purse. This account doesn\'t need to exist. If the key is correctly formatted, the network will create the account when the deploy is sent\n    to: "<recipient-public-key>",\n\n    // Minimal amount is 2.5 CSPR (1 CSPR = 1,000,000,000 motes)\n    amount: 25000000000,\n});\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note"),": At any moment, you can serialize the deploy from this example to JSON to accomplish whatever you want (store it, send it, etc.)."),(0,s.kt)("p",null,"Here is the code you can use to serialize the deploy:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const jsonFromDeploy = DeployUtil.deployToJson(signedDeploy);\n")),(0,s.kt)("p",null,"Then, you can reconstruct the deploy object using this function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const deployFromJson = DeployUtil.deployFromJson(jsonFromDeploy);\n")))}y.isMDXComponent=!0}}]);