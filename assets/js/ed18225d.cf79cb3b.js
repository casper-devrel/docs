"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,y=m["".concat(o,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(y,l(l({ref:t},d),{},{components:n})):a.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},l="CLType",p={unversionedId:"developers/json-rpc/types_cl",id:"developers/json-rpc/types_cl",title:"CLType",description:"Casper types, i.e. types which can be stored and manipulated by smart contracts. Provides a description of the underlying data type of a CLValue.",source:"@site/source/docs/developers/json-rpc/types_cl.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/types_cl",permalink:"/docs/next/developers/json-rpc/types_cl",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/developers/json-rpc/types_cl.md",tags:[],version:"current",lastUpdatedAt:1719861245,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{},sidebar:"developers",previous:{title:"Types",permalink:"/docs/next/developers/json-rpc/types_chain"},next:{title:"Overview of Casper dApps",permalink:"/docs/next/developers/dapps/"}},o={},s=[{value:"CLValue",id:"clvalue",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cltype"},"CLType"),(0,r.kt)("p",null,"Casper types, i.e. types which can be stored and manipulated by smart contracts. Provides a description of the underlying data type of a ",(0,r.kt)("a",{parentName:"p",href:"#clvalue"},(0,r.kt)("inlineCode",{parentName:"a"},"CLValue")),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Bool")," Primitive"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"I32")," Primitive"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"I64")," Primitive"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"U8")," Primitive"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"U32")," Primitive"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"U64")," Primitive"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"U128")," Large unsigned integer type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"U256")," Large unsigned integer type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"U512")," Large unsigned integer type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Unit")," Primitive"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")," Primitive"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Key")," System type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"URef")," System type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PublicKey")," System type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Option")," Option of a ",(0,r.kt)("inlineCode",{parentName:"li"},"CLType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List")," Variable-length list of a single ",(0,r.kt)("inlineCode",{parentName:"li"},"CLType")," (comparable to a ",(0,r.kt)("inlineCode",{parentName:"li"},"Vec"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ByteArray")," Fixed-length list of a single ",(0,r.kt)("inlineCode",{parentName:"li"},"CLType")," (comparable to a Rust array)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Result")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Result")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"Ok")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Err")," variants of ",(0,r.kt)("inlineCode",{parentName:"li"},"CLType"),"'s"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Map")," Map with keys of a single ",(0,r.kt)("inlineCode",{parentName:"li"},"CLType")," and values of a single ",(0,r.kt)("inlineCode",{parentName:"li"},"CLType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tuple1")," 1-ary tuple of a ",(0,r.kt)("inlineCode",{parentName:"li"},"CLType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tuple2")," 2-ary tuple of ",(0,r.kt)("inlineCode",{parentName:"li"},"CLType"),"s"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tuple3")," 3-ary tuple of ",(0,r.kt)("inlineCode",{parentName:"li"},"CLType"),"s"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Any")," Unspecified type")),(0,r.kt)("h2",{id:"clvalue"},"CLValue"),(0,r.kt)("p",null,"A Casper value, i.e. a value which can be stored and manipulated by smart contracts. It holds the underlying data as a type-erased, serialized ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec<u8>")," and also holds the CLType of the underlying data as a separate member. The ",(0,r.kt)("inlineCode",{parentName:"p"},"parsed")," field, representing the original value, is a convenience only available when a CLValue is encoded to JSON, and can always be set to null if preferred."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bytes")," A Casper serialized representation of the underlying value. For more information, reference the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts/serialization-standard"},"Serialization Standard"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#cltype"},(0,r.kt)("inlineCode",{parentName:"a"},"cl_type"))))))}u.isMDXComponent=!0}}]);