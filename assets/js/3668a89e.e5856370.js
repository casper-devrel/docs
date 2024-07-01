"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9421],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(a),h=n,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||s;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1333:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=a(7462),n=a(3366),s=(a(7294),a(3905)),o=["components"],i={title:"SDK Client Libraries",slug:"/sdk"},p="SDK Client Libraries",l={unversionedId:"developers/dapps/sdk/index",id:"developers/dapps/sdk/index",title:"SDK Client Libraries",description:"This section covers the software development kits (SDKs) published by third parties available for interacting with the Casper blockchain. These SDKs are client-side libraries providing functions or methods (depending on the language) to interact with a Casper network. You can use them as a model to develop your application and accomplish tasks such as generating account keys, sending transfers, or other blockchain transactions.",source:"@site/source/docs/casper/developers/dapps/sdk/index.md",sourceDirName:"developers/dapps/sdk",slug:"/sdk",permalink:"/sdk",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/dapps/sdk/index.md",tags:[],version:"current",lastUpdatedAt:1689760532,formattedLastUpdatedAt:"Jul 19, 2023",frontMatter:{title:"SDK Client Libraries",slug:"/sdk"},sidebar:"developers",previous:{title:"Prerequisites",permalink:"/developers/dapps/prerequisites"},next:{title:"SDK Client Library Usage",permalink:"/developers/dapps/sdk/client-library-usage"}},d={},c=[{value:"Serialization Standard",id:"serialization-standard",level:2},{value:"JSON-RPC API",id:"json-rpc-api",level:2},{value:"Table of Contents",id:"table-of-contents",level:2}],u={toc:c},h="wrapper";function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)(h,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sdk-client-libraries"},"SDK Client Libraries"),(0,s.kt)("p",null,"This section covers the software development kits (SDKs) published by third parties available for interacting with the Casper blockchain. These SDKs are client-side libraries providing functions or methods (depending on the language) to interact with a Casper network. You can use them as a model to develop your application and accomplish tasks such as generating account keys, sending transfers, or other blockchain transactions."),(0,s.kt)("p",null,"Each of these SDKs can be used to build dApps. For browser interaction, you can use the JavaScript SDK; for desktop applications, there are C# and Java SDKs. Click the link on your preferred SDK to learn how to use it in dApp development. To delve into the source code, you may visit the SDKs' Github repositories."),(0,s.kt)("p",null,"Each such third party is solely responsible for the SDK it provides, any warranties (to the extent that such warranties have not been disclaimed), and for any claims you may have relating to your access or use thereof. We do not approve or endorse any such SDKs by providing a link thereto, and assume no responsibility for your access or use thereof. The SDKs may be subject to additional licenses and disclaimers as set out in the relevant GitHub repositories."),(0,s.kt)("h2",{id:"serialization-standard"},"Serialization Standard"),(0,s.kt)("p",null,"The Casper platform uses a custom serialization format. To this end, we've established a ",(0,s.kt)("a",{parentName:"p",href:"/concepts/serialization-standard"},"Serialization Standard"),", which must be followed when building a Casper SDK."),(0,s.kt)("h2",{id:"json-rpc-api"},"JSON-RPC API"),(0,s.kt)("p",null,"Developers can interact directly with the ",(0,s.kt)("a",{parentName:"p",href:"/developers/json-rpc/"},"Casper JSON-RPC API")," instead of using an SDK."),(0,s.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"SDK Documentation"),(0,s.kt)("th",{parentName:"tr",align:null},"GitHub Location"),(0,s.kt)("th",{parentName:"tr",align:null},"Organization"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/developers/dapps/sdk/script-sdk"},"JavaScript/TypeScript")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/casper-js-sdk/"},"casper-js-sdk")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem"},"Casper Ecosystem"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Java SDK"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/casper-network/casper-java-sdk/"},"casper-java-sdk")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/casper-network"},"Casper Association"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/developers/dapps/sdk/csharp-sdk"},"C# SDK")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/make-software/casper-net-sdk"},"casper-net-sdk")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/make-software"},"MAKE"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/developers/dapps/sdk/go-sdk"},"Go SDK")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/make-software/casper-go-sdk"},"casper-go-sdk")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/make-software"},"MAKE"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/developers/dapps/sdk/python-sdk"},"Python SDK")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/casper-network/casper-python-sdk/"},"casper-python-sdk")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/casper-network"},"Casper Association"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"PHP SDK"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/make-software/casper-php-sdk"},"casper-php-sdk")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/make-software"},"MAKE"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Scala SDK"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/abahmanem/casper-scala-sdk"},"casper-scala-sdk")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/abahmanem"},"M. Abahmane"))))))}m.isMDXComponent=!0}}]);