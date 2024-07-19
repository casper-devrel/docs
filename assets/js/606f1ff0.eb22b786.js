"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>k});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),u=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return r?o.createElement(k,s(s({ref:t},l),{},{components:r})):o.createElement(k,s({ref:t},l))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13561:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={title:"Non-Root Users"},s="Setting up a Non-Root User",i={unversionedId:"operators/setup/non-root-user",id:"operators/setup/non-root-user",title:"Non-Root Users",description:"Operators may log into their servers remotely using a key. The following steps explain how to create a non-root user and log in using a private key instead of the root user. Replace `` in the instructions below with your username.",source:"@site/source/docs/operators/setup/non-root-user.md",sourceDirName:"operators/setup",slug:"/operators/setup/non-root-user",permalink:"/next/operators/setup/non-root-user",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/operators/setup/non-root-user.md",tags:[],version:"current",lastUpdatedAt:1719861245,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{title:"Non-Root Users"},sidebar:"operators",previous:{title:"Join a Network",permalink:"/next/operators/setup/joining"},next:{title:"Node Events",permalink:"/next/operators/setup/node-events"}},p={},u=[],l={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"setting-up-a-non-root-user"},"Setting up a Non-Root User"),(0,n.kt)("p",null,"Operators may log into their servers remotely using a key. The following steps explain how to create a non-root user and log in using a private key instead of the root user. Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"<username>")," in the instructions below with your username."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("a",{parentName:"p",href:"https://www.ssh.com/academy/ssh/keygen"},"ssh-keygen")," to generate a new SSH key.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create the user with no password, as the key is your password."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo adduser <username> --disabled-password\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Create authorized_keys with your key to log in.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo su - <username>\nmkdir .ssh\nchmod 700 .ssh\ntouch .ssh/authorized_keys\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the editor of your choice and paste your .ssh public key i the ",(0,n.kt)("inlineCode",{parentName:"p"},".ssh/authorized_keys")," file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Exit out of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<username>")," account and log into the root or previous sudo-er account."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"exit\n")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Add your user to sudo-ers under the root account or your previous sudo-er account.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo visudo\n")),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Type ",(0,n.kt)("inlineCode",{parentName:"li"},"<username>  ALL=(ALL:ALL) NOPASSWD:ALL")," below the row containing ",(0,n.kt)("inlineCode",{parentName:"li"},"root    ALL=(ALL:ALL) ALL"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# User privilege specification\nroot    ALL=(ALL:ALL) ALL\n<username>  ALL=(ALL:ALL) NOPASSWD:ALL\n")),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"You should be able to log in with the key and not use the root user.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ssh -i <your ssh private key> <username>@<server ip>\n")),(0,n.kt)("p",null,"Here is an example command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ssh -i ~/.ssh/id_rsa casper@10.21.10.200\n")))}d.isMDXComponent=!0}}]);