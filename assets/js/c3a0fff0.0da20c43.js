"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),p=n(67392),c=n(50012);function u(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:n,groupId:a}),[u,g]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=null!=s?s:u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);i(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var b=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==i&&(u(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const t=c.indexOf(e.currentTarget)+1;n=null!=(a=c[t])?a:c[0];break}case"ArrowLeft":{var r;const t=c.indexOf(e.currentTarget)-1;n=null!=(r=c[t])?r:c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",y.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},72246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));n(74866),n(85162);const o={title:"Front-end in React"},l="Front-end Template with React",i={unversionedId:"developers/dapps/template-frontend",id:"developers/dapps/template-frontend",title:"Front-end in React",description:"For building web applications, it is most common to use the Casper JS SDK with React. This is a popular solution among developers, but you may use any front-end library or framework, including none at all, to interact with a Casper network via the Casper JS SDK.",source:"@site/source/docs/developers/dapps/template-frontend.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/template-frontend",permalink:"/next/developers/dapps/template-frontend",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/developers/dapps/template-frontend.md",tags:[],version:"current",lastUpdatedAt:1719861245,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{title:"Front-end in React"},sidebar:"developers",previous:{title:"dApp Technology Stack",permalink:"/next/developers/dapps/technology-stack"},next:{title:"URef Access Rights",permalink:"/next/developers/dapps/uref-security"}},s={},p=[{value:"Get Started",id:"get-started",level:2},{value:"Casper Wallet Integration",id:"casper-wallet-integration",level:2},{value:"Disconnect the Casper Wallet",id:"disconnect-the-casper-wallet",level:3},{value:"Call a Smart Contract",id:"call-a-smart-contract",level:2},{value:"Query a Smart Contract",id:"query-a-smart-contract",level:2},{value:"Test Application",id:"test-application",level:2},{value:"Build for Production",id:"build-for-production",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"front-end-template-with-react"},"Front-end Template with React"),(0,r.kt)("p",null,"For building web applications, it is most common to use the Casper JS SDK with React. This is a popular solution among developers, but you may use any front-end library or framework, including none at all, to interact with a Casper network via the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/casper-js-sdk"},"Casper JS SDK"),"."),(0,r.kt)("p",null,"This guide will walk you through setting up and developing a React application with ",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," that communicates with a Casper network. Experience with Vite is not required; however, if you have never built a React app, you should begin by ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/getting-started.html"},"reading the React documentation"),"."),(0,r.kt)("h2",{id:"get-started"},"Get Started"),(0,r.kt)("p",null,"Begin by opening a terminal and running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\n")),(0,r.kt)("p",null,"To get your Node.js version."),(0,r.kt)("p",null,"To ensure compatibility, you should be running Node.js version 18 or above. Upgrade to version 18 using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"Node Version Manager")," or another tool if you are running an earlier version."),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),", create a new Vite project by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g vite\nnpm create vite@latest\n")),(0,r.kt)("p",null,'Name your project, select "React", then choose your preferred language. In this example, we will use JavaScript.'),(0,r.kt)("p",null,"Head into your new project directory, replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"vite-project")," with your project name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd vite-project/\n")),(0,r.kt)("p",null,"Run the following command to test the server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nvite dev\n")),(0,r.kt)("p",null,"Quit the server by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"q"),". Install the Casper JS SDK by running the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install casper-js-sdk\n")),(0,r.kt)("p",null,"This guide will use ",(0,r.kt)("a",{parentName:"p",href:"https://axios-http.com/"},"axios")," to communicate with the backend; install it by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install axios\n")),(0,r.kt)("h2",{id:"casper-wallet-integration"},"Casper Wallet Integration"),(0,r.kt)("p",null,"The Casper Wallet extension content script injects the SDK into your website's global scope. Provider class and event types can be accessed with ",(0,r.kt)("inlineCode",{parentName:"p"},"window.CasperWalletProvider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"window.CasperWalletEventTypes"),". If the value of these variables is ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," the Casper Wallet is not installed."),(0,r.kt)("p",null,"Start with a helper for getting the provider instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/casper-wallet.js\n")),(0,r.kt)("p",null,"Fill the file with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Timeout (in ms) for requests to the extension [DEFAULT: 30 min]\nconst REQUESTS_TIMEOUT_MS = 30 * 60 * 1000;\n\nexport const getProvider = () => {\n    let providerConstructor = window.CasperWalletProvider;\n    if (providerConstructor === undefined) {\n        alert("Casper Wallet extension is not installed!");\n        return;\n    }\n    let provider = providerConstructor({\n        timeout: REQUESTS_TIMEOUT_MS\n    });\n    return provider;\n}\n\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For complete integration details, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/make-software/casper-wallet-sdk/#readme"},"README of Casper Wallet SDK"),".")),(0,r.kt)("p",null,"To ensure that a user's public key will be available to all necessary components, create a React state variable in ",(0,r.kt)("em",{parentName:"p"},"src/App.jsx")," or another parent component that encapsulates the components that should have access to this public key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport Connect from "./Connect";\nimport \'./App.css\'\n\nfunction App() {\n    const [publicKey, setPublicKey] = React.useState(null);\n    return (\n        <>\n            <Connect setPublicKey={ setPublicKey } />\n            <div>\n                {publicKey !== null && (<>\n                    Wallet connected: {publicKey}<br/>\n                </>)}\n            </div>\n        </>\n    );\n}\n\nexport default App;\n')),(0,r.kt)("p",null,"This is an example of ",(0,r.kt)("em",{parentName:"p"},"src/App.jsx")," that imports and displays the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect")," component that is described next. The ",(0,r.kt)("inlineCode",{parentName:"p"},"setPublicKey")," function is passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect")," component as a ",(0,r.kt)("a",{parentName:"p",href:"https://legacy.reactjs.org/docs/components-and-props.html"},"prop")," so that it may set the public key and make it available to all of ",(0,r.kt)("em",{parentName:"p"},"src/App.jsx"),". This way, when more components are added to ",(0,r.kt)("em",{parentName:"p"},"src/App.jsx"),", they may utilize the ",(0,r.kt)("inlineCode",{parentName:"p"},"publicKey")," variable."),(0,r.kt)("p",null,"To connect to the Casper Wallet within your React app, create the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect")," component and import the ",(0,r.kt)("inlineCode",{parentName:"p"},"getProvider")," helper."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/Connect.jsx\n")),(0,r.kt)("p",null,"Open the file and write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { getProvider } from "./casper-wallet";\n\nconst provider = getProvider();\n\nconst Connect = (props) => {\n    return (\n        <>\n            <button onClick={ () => connectToWallet(props) }>Connect Wallet</button>\n            {/* Place for disconnect button */}\n        </>\n    );\n}\n\nexport default Connect;\n')),(0,r.kt)("p",null,"Notice that ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect")," accepts props, and forwards them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"connectToWallet")," function described below. This function is called when the button is clicked, allowing it to set the public key within ",(0,r.kt)("em",{parentName:"p"},"src/App.jsx")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"props.setPublicKey()"),"."),(0,r.kt)("p",null,"Write the ",(0,r.kt)("inlineCode",{parentName:"p"},"connectToWallet")," function under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect")," function component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const connectToWallet = (props) => {\n    provider.requestConnection().then(connected => {\n        if (!connected) {\n            alert("Couldn\'t connect to wallet");\n        } else {\n            provider.getActivePublicKey().then(publicKey => {\n                props.setPublicKey(publicKey);\n            }).catch(error => {\n                alert(error.message);\n            });\n        }\n    })\n    .catch(error => {\n        alert(error.message);\n    });\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"connectToWallet()")," function calls ",(0,r.kt)("inlineCode",{parentName:"p"},"provider.isConnected()")," to check if the Casper Wallet is already connected. If it is, it gets the public key of the selected account; if it's not, it opens up a connection request within the Wallet. ",(0,r.kt)("inlineCode",{parentName:"p"},"provider.isConnected()")," will throw an error if the Wallet is not installed as an extension or if it is locked."),(0,r.kt)("h3",{id:"disconnect-the-casper-wallet"},"Disconnect the Casper Wallet"),(0,r.kt)("p",null,"To request that the Casper Wallet disconnect from a website, add the following function call to ",(0,r.kt)("em",{parentName:"p"},"src/Connect.jsx"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const disconnect = (props) => {\n    provider.disconnectFromSite().then(disconnected => {\n        if (disconnected) {\n            props.setPublicKey(null);\n            alert("Disconnected");\n        } \n    }).catch(error => {\n        alert(error.message);\n    });\n}\n')),(0,r.kt)("p",null,"Then connect it to a button:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const Connect = (props) => {\n    return (\n        <>\n            <button onClick={ () => connectToWallet(props) }>Connect Wallet</button>\n            // highlight-next-line-green\n            <button onClick={ () => disconnect(props) }>Disconnect</button>\n        </>\n    );\n}\n")),(0,r.kt)("h2",{id:"call-a-smart-contract"},"Call a Smart Contract"),(0,r.kt)("p",null,'For this example, we\'ll call a hypothetical "hello world" contract containing a single entrypoint "update_message". We\'ll call the "update_message" entrypoint with text entered by the user in an HTML ',(0,r.kt)("inlineCode",{parentName:"p"},"input")," field."),(0,r.kt)("p",null,"When calling smart contracts from React, you'll need to implement the logic within a function accessible from a React component. You can obtain user-entered data from the DOM using elements like ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),", then grab the value within the smart-contract-calling function."),(0,r.kt)("p",null,"Create a new component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/UpdateMessage.jsx\n")),(0,r.kt)("p",null,"Open the file and write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useState } from \'react\';\nimport { Contracts, CasperClient, RuntimeArgs, CLValueBuilder, CLPublicKey, DeployUtil } from "casper-js-sdk";\nimport axios from "axios";\nimport { getProvider } from "./casper-wallet";\n\nconst provider = getProvider();\n\nconst UpdateMessage = (props) => {\n    const [message, setMessage] = useState("");\n\n    return (\n        <>\n            <input id="message" type="text" value={message} onChange={(e) => {setMessage(e.target.value)}} />\n            <button onClick={ () => updateMessage(props, message) }>Update Message</button>\n        </>\n    );\n}\n\nexport default UpdateMessage;\n')),(0,r.kt)("p",null,"On the front-end you'll need to build the deploy and forward it to the Casper Wallet to be signed. In most cases, you will be calling smart contract entrypoints. This example deploy shows the calling of entrypoint \"update_message\" which will update the chain's global state to reflect the new data. You'll need the user's active public key to prepare the deploy, and you may retrieve this from the ",(0,r.kt)("inlineCode",{parentName:"p"},"publicKey")," variable passed in as a prop from ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.jsx"),". Write this function under your ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateMessage")," component function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const NODE_URL = "http://65.108.127.242:7777/rpc";\nconst NETWORK_NAME = "casper-test"; // "casper" for mainnet\nconst CONTRACT_HASH = "hash-75143aa708275b7dead20ac2cc06c1c3eccff4ffcf1eb9aebb8cce7c35cea041";\n\nconst updateMessage = (props, message) => {\n    const casperClient = new CasperClient(NODE_URL);\n    const contract = new Contracts.Contract(casperClient);\n    contract.setContractHash(CONTRACT_HASH);\n    const runtimeArguments = RuntimeArgs.fromMap({\n        "message": CLValueBuilder.string(message)\n    });\n    const deploy = contract.callEntrypoint(\n        "update_message",\n        runtimeArguments,\n        CLPublicKey.fromHex(props.publicKey),\n        NETWORK_NAME,\n        "1000000000", // 1 CSPR (10^9 Motes)\n    );\n    const deployJSON = DeployUtil.deployToJson(deploy);\n    provider.sign(JSON.stringify(deployJSON), props.publicKey).then((signedDeploy) => { // Initiates sign request\n        axios.post("/sendDeploy", signedDeploy, {\n            headers: {\n                \'Content-Type\': \'application/json\'\n            }\n        }).then((response) => {\n            alert(response.data);\n        }).catch((error) => {\n            console.error(error.message);\n        });\n    }).catch((error) => {\n        console.error(error.message);\n    });\n}\n')),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"updateMessage")," builds a deploy and forwards it to the Casper Wallet to be signed by the user. Once it's been signed, ",(0,r.kt)("inlineCode",{parentName:"p"},"signedDeploy")," is forwarded to the backend at the ",(0,r.kt)("inlineCode",{parentName:"p"},"/sendDeploy")," endpoint using ",(0,r.kt)("inlineCode",{parentName:"p"},"axios.post")," before being sent off to a Casper node. If an error occurs, or the user rejects the signature request, it will be logged to ",(0,r.kt)("inlineCode",{parentName:"p"},"stderr"),". In this particular example, the result of this deployment will be presented to the user in the form of a JavaScript ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"},"alert"),"; however, you may do with the response data as you wish."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The backend endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/sendDeploy")," should handle signed deployment by simply passing it to a Casper node."),(0,r.kt)("p",{parentName:"admonition"},"In Casper node ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.5.0"),", which sets up appropriate CORS headers, it will also be possible to send deployments directly from the browser, without relying on a backend server. This is useful for prototyping, however it is advised that you operate your own node.")),(0,r.kt)("p",null,"Now that this component is created, render it to the user interface in ",(0,r.kt)("em",{parentName:"p"},"src/App.jsx"),", passing along the ",(0,r.kt)("inlineCode",{parentName:"p"},"publicKey")," as a prop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport Connect from "./Connect";\n// highlight-next-line-green\nimport UpdateMessage from "./UpdateMessage";\nimport \'./App.css\'\n\nfunction App() {\n    const [publicKey, setPublicKey] = React.useState(null);\n    return (\n        <>\n            <Connect setPublicKey={ setPublicKey } />\n            <div>\n                {publicKey !== null && (<>\n                    Wallet connected: {publicKey}<br/>\n                    // highlight-next-line-green\n                    <UpdateMessage publicKey={ publicKey } />\n                </>)}\n            </div>\n        </>\n    );\n}\n')),(0,r.kt)("h2",{id:"query-a-smart-contract"},"Query a Smart Contract"),(0,r.kt)("p",null,"Consider that the message written to the chain during the ",(0,r.kt)("inlineCode",{parentName:"p"},"update_message")," entrypoint invocation is stored in the ",(0,r.kt)("a",{parentName:"p",href:"/next/concepts/glossary/D#dictionary"},"dictionary")," ",(0,r.kt)("inlineCode",{parentName:"p"},"messages")," in the contract. Further consider that each account may write its own message and that the messages are stored under the account's ",(0,r.kt)("a",{parentName:"p",href:"/next/concepts/glossary/A#account-hash"},"account hash")," as the dictionary key. Querying this kind of data is essential in any dApp; here is how to communicate contract data to and from the front-end."),(0,r.kt)("p",null,"Create a new component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/Query.jsx\n")),(0,r.kt)("p",null,"Open the file and write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import axios from "axios";\nimport { CLPublicKey } from "casper-js-sdk";\n\nconst Query = (props) => {\n  return <button onClick={ () => query(props) }>Query</button>;\n}\n\nconst query = (props) => {\n  const accountHash = CLPublicKey.fromHex(props.publicKey).toAccountHashStr().substring(13);\n  axios.get("/queryMessage?accountHash=" + accountHash).then((response) => {\n    alert(response.data)\n  }).catch((error) => {\n    console.error(error.message);\n  });\n}\n\nexport default Query;\n')),(0,r.kt)("p",null,"All this component does is render an HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"button")," element that, when pressed, performs a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the backend that includes the user's active account hash. The account hash is derived from the active public key, and is used to look up the message stored by the current user."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"toAccountHashStr"),' method produces a string that is prepended by the text "account-hash-". In this case, this text is not needed, so it is discarded by chaining on the ',(0,r.kt)("inlineCode",{parentName:"p"},"substring(13)")," method.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This functionality relies on the ",(0,r.kt)("inlineCode",{parentName:"p"},"/queryMessage")," endpoint, which should be implemented in your backend.")),(0,r.kt)("p",null,"Now add this component to ",(0,r.kt)("em",{parentName:"p"},"src/App.jsx"),", making available the ",(0,r.kt)("inlineCode",{parentName:"p"},"publicKey")," state variable via a prop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport Connect from "./Connect";\nimport UpdateMessage from "./UpdateMessage";\n// highlight-next-line-green\nimport Query from "./Query";\nimport \'./App.css\'\n\nfunction App() {\n    const [publicKey, setPublicKey] = React.useState(null);\n    return (\n        <>\n            <Connect setPublicKey={ setPublicKey } />\n            <div>\n                {publicKey !== null && (<>\n                    Wallet connected: {publicKey}<br/>\n                    <UpdateMessage publicKey={ publicKey } />\n                    // highlight-next-line-green\n                    <Query publicKey={ publicKey } />\n                </>)}\n            </div>\n        </>\n    );\n}\n')),(0,r.kt)("h2",{id:"test-application"},"Test Application"),(0,r.kt)("p",null,"Test your application by running the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vite dev\n")),(0,r.kt)("p",null,"Your application will start locally, and a URL will be shown where you can visit your application. Alternatively, press ",(0,r.kt)("inlineCode",{parentName:"p"},"h"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"o")," to open the app in a browser."),(0,r.kt)("h2",{id:"build-for-production"},"Build for Production"),(0,r.kt)("p",null,"When you're ready to release your application, you'll want to compile it to pure JavaScript and serve it from a web server. Do so by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vite build\n")),(0,r.kt)("p",null,"Once this is complete, you can preview your production build by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vite preview\n")))}d.isMDXComponent=!0}}]);