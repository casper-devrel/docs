"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9297],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(n),k=a,m=u["".concat(c,".").concat(k)]||u[k]||d[k]||s;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2136:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),i=["components"],o={},c="Working with Cryptographic Keys",p={unversionedId:"dapp-dev-guide/keys",id:"dapp-dev-guide/keys",isDocsHomePage:!1,title:"Working with Cryptographic Keys",description:"The Casper platform supports two types of signatures for creating accounts and signing transactions: secp256k1 and ed25519. You can generate keys using the Casper client in both formats. It is also possible to work with existing Ethereum keys.",source:"@site/source/docs/casper/dapp-dev-guide/keys.md",sourceDirName:"dapp-dev-guide",slug:"/dapp-dev-guide/keys",permalink:"/docs/dapp-dev-guide/keys",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/dapp-dev-guide/keys.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Execution Error Codes",permalink:"/docs/dapp-dev-guide/execution-error-codes"},next:{title:"Introduction",permalink:"/docs/sdk"}},l=[{value:"Key Generation",id:"key-generation",children:[{value:"Ethereum Keys",id:"ethereum-keys",children:[]},{value:"EdDSA Keys",id:"eddsa-keys",children:[]}]},{value:"Working with Existing Ethereum Keys",id:"working-with-existing-ethereum-keys",children:[]}],d={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"working-with-cryptographic-keys"},"Working with Cryptographic Keys"),(0,s.kt)("p",null,"The Casper platform supports two types of signatures for creating accounts and signing transactions: ",(0,s.kt)("inlineCode",{parentName:"p"},"secp256k1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"ed25519"),". You can generate keys using the Casper client in both formats. It is also possible to work with existing Ethereum keys."),(0,s.kt)("h2",{id:"key-generation"},"Key Generation"),(0,s.kt)("h3",{id:"ethereum-keys"},"Ethereum Keys"),(0,s.kt)("p",null,"To create ",(0,s.kt)("inlineCode",{parentName:"p"},"secp256k1")," keys, commonly known as Ethereum keys, follow these steps:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir secp256k1-keys\n\n$ casper-client keygen -a secp256k1 secp256k1-keys/\nKeys successfully created in directory: /secp256k1-keys\n\n$ tree secp256k1-keys/\nsecp256k1-keys/\n\u251c\u2500\u2500 public_key.pem\n\u251c\u2500\u2500 public_key_hex\n\u2514\u2500\u2500 secret_key.pem\n")),(0,s.kt)("p",null,"Looking at the public-key-hex file, we see that ",(0,s.kt)("inlineCode",{parentName:"p"},"secp256k1")," public hex keys start with ",(0,s.kt)("em",{parentName:"p"},"02")," in Casper:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat secp256k1-keys/public_key_hex\n020287e1a79d0d9f3196391808a8b3e5007895f43cde679e4c960e7e9b92841bb98d\n")),(0,s.kt)("h3",{id:"eddsa-keys"},"EdDSA Keys"),(0,s.kt)("p",null,"It is also possible to create ",(0,s.kt)("inlineCode",{parentName:"p"},"ed25519")," keys, which use the Edwards-curve Digital Signature Algorithm (EdDSA). To generate EdDSA keys, follow these steps:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir ed25519-keys\n\n$ casper-client keygen ed25519-keys/\nKeys successfully created in the directory: /ed25519-keys\n\n$ tree ed25519-keys/\ned25519-keys/\n\u251c\u2500\u2500 public_key.pem\n\u251c\u2500\u2500 public_key_hex\n\u2514\u2500\u2500 secret_key.pem\n")),(0,s.kt)("p",null,"Looking at the public-key-hex file, we see that keys of this type are pre-pended with ","`","01","`",":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat ed25519-keys/public_key_hex\n011724c5c8e2404ca01c872e1bbd9202a0114e5d143760f685086a5cffe261dabd\n")),(0,s.kt)("h2",{id:"working-with-existing-ethereum-keys"},"Working with Existing Ethereum Keys"),(0,s.kt)("p",null,"It is also possible to use existing Ethereum keys in Casper. Here is an example set of Ethereum keys and their corresponding address:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Address:0x7863B6F7232D99FF80B74E4C8BB3BEE3BDE0291F\nPublic key:0470fecd1f7ae5c1cd53a52c4ca88cd5b76c2926d7e1d831addaa2a64bea9cc3ede6a8e9981c609ee7ab7e3fa37ba914f2fc52f6eea9b746b6fe663afa96750d66\nPrivate key:29773906aef3ee1f5868371fd7c50f9092205df26f60e660cafacbf2b95fe086\n")),(0,s.kt)("p",null,"To use existing Ethereum keys, the Casper VM needs to know that the key is a ",(0,s.kt)("inlineCode",{parentName:"p"},"secp256k1")," type."),(0,s.kt)("p",null,"The Rust ",(0,s.kt)("em",{parentName:"p"},"casper-client")," provides an example of how this works. Pre-pending the public key with a ",(0,s.kt)("em",{parentName:"p"},"02")," indicates the key is a ",(0,s.kt)("inlineCode",{parentName:"p"},"secp256k1")," key."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example"),":"),(0,s.kt)("p",null,"The following transaction sends 100 CSPR."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client transfer --node-address http://localhost:7777 --chain-name casper -t 020470fecd1f7ae5c1cd53a52c4ca88cd5b76c2926d7e1d831addaa2a64bea9cc3ede6a8e9981c609ee7ab7e3fa37ba914f2fc52f6eea9b746b6fe663afa96750d66 -a 10000000000 -k /home/mykeys/secret_key.pem -p 10000\n")),(0,s.kt)("p",null,"The Rust ",(0,s.kt)("em",{parentName:"p"},"casper-client")," requires the secret key to be in ",(0,s.kt)("em",{parentName:"p"},"PEM")," format to send a transaction from this account. If you want to use existing Ethereum keys with the Rust client, a conversion to ",(0,s.kt)("em",{parentName:"p"},"PEM")," format is needed."),(0,s.kt)("p",null,"The following example is a JS script that generates a ",(0,s.kt)("em",{parentName:"p"},"PEM")," file, using ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/blockstack/key-encoder-js"},"key encoder")," and node.js. To install these components, do the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt install nodejs\n$ npm install key-encoder\n")),(0,s.kt)("p",null,"Then create the JS script ",(0,s.kt)("inlineCode",{parentName:"p"},"convert-to-pem.js")," using ",(0,s.kt)("em",{parentName:"p"},"vi")," or ",(0,s.kt)("em",{parentName:"p"},"nano")," and include this content:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'var KeyEncoder = require(\'key-encoder\'),\nkeyEncoder = new KeyEncoder.default(\'secp256k1\');\nlet priv_hex = "THE SECRET KEY TO ENCODE";\nlet priv_pem = keyEncoder.encodePrivate(priv_hex, "raw", "pem");\nconsole.log(priv_pem);\n')),(0,s.kt)("p",null,"Then run the script using node.js. Name the secret key something different."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ node convert-to-pem.js > eth-secret.pem\n")),(0,s.kt)("p",null,"To view the secret key, use ","`","cat","`",":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat eth-secret.pem\n-----BEGIN EC PRIVATE KEY-----\nMHQCAQEEIBjXY+7xZagzTjL4p8bGWS8FPRcW13mgytdu5c3e556MoAcGBSuBBAAK\noUQDQgAEpV4dVaPeAEaH0VXrQtLzjpGt1pui1q08311em6wDCchGNjzsnOY7stGF\ntlKF2V5RFQn4rzkwipSYnrqaPf1pTA==\n-----END EC PRIVATE KEY-----\n")))}u.isMDXComponent=!0}}]);