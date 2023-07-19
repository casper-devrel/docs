"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5863],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return k}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(k,s(s({ref:t},l),{},{components:r})):n.createElement(k,s({ref:t},l))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6065:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),s=["components"],i={title:"Non-Root Users"},u="Setting up a Non-Root User",p={unversionedId:"operators/setup/non-root-user",id:"operators/setup/non-root-user",title:"Non-Root Users",description:"Operators may log into their servers remotely using a key. The following steps explain how to create a non-root user and log in using a private key instead of the root user. Replace `` in the instructions below with your username.",source:"@site/source/docs/casper/operators/setup/non-root-user.md",sourceDirName:"operators/setup",slug:"/operators/setup/non-root-user",permalink:"/operators/setup/non-root-user",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/operators/setup/non-root-user.md",tags:[],version:"current",lastUpdatedAt:1689780668,formattedLastUpdatedAt:"Jul 19, 2023",frontMatter:{title:"Non-Root Users"},sidebar:"operators",previous:{title:"Join a Network",permalink:"/operators/setup/joining"},next:{title:"Becoming a Validator",permalink:"/operators/becoming-a-validator/"}},l={},c=[],d={toc:c},m="wrapper";function k(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-a-non-root-user"},"Setting up a Non-Root User"),(0,a.kt)("p",null,"Operators may log into their servers remotely using a key. The following steps explain how to create a non-root user and log in using a private key instead of the root user. Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<username>")," in the instructions below with your username."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("a",{parentName:"p",href:"https://www.ssh.com/ssh/keygen/"},"ssh-keygen")," to generate a new SSH key.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create the user with no password, as the key is your password."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo adduser <username> --disabled-password\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Create authorized_keys with your key to log in.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo su - <username>\nmkdir .ssh\nchmod 700 .ssh\ntouch .ssh/authorized_keys\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the editor of your choice and paste your .ssh public key i the ",(0,a.kt)("inlineCode",{parentName:"p"},".ssh/authorized_keys")," file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Exit out of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<username>")," account and log into the root or previous sudo-er account."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"exit\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Add your user to sudo-ers under the root account or your previous sudo-er account.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo visudo\n")),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"<username> ALL=(ALL:ALL) NOPASSWD:ALL")," below the row containing ",(0,a.kt)("inlineCode",{parentName:"li"},"root ALL=(ALL:ALL) ALL"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# User privilege specification\nroot    ALL=(ALL:ALL) ALL\n<username>  ALL=(ALL:ALL) NOPASSWD:ALL\n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"You should be able to log in with the key and not use the root user.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh -i <your ssh private key> <username>@<server ip>\n")),(0,a.kt)("p",null,"Here is an example command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh -i ~/.ssh/id_rsa casper@10.21.10.200\n")))}k.isMDXComponent=!0}}]);