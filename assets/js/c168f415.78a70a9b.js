"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6153],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),s=a(16550),i=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,s]=(0,r.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const r=null!=(t=n.find((e=>e.default)))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,u]=h({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=null!=i?i:p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);s(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var g=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(p(t),i(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var n;const t=c.indexOf(e.currentTarget)+1;a=null!=(n=c[t])?n:c[0];break}case"ArrowLeft":{var r;const t=c.indexOf(e.currentTarget)-1;a=null!=(r=c[t])?r:c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===t})}),null!=a?a:t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},73034:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=(a(44996),a(74866)),o=a(85162);const s={},i="Development Prerequisites",u={unversionedId:"developers/prerequisites",id:"version-1.5.6/developers/prerequisites",title:"Development Prerequisites",description:"This page covers the necessary software for your Casper development environment. To develop comfortably, you should use Linux Ubuntu 20.04. Casper does not officially support macOS, but the commands are included for your convenience. If you encounter any problems, reach out to the community on Telegram or Discord. Developing on Windows is not advised.",source:"@site/versioned_docs/version-1.5.6/developers/prerequisites.md",sourceDirName:"developers",slug:"/developers/prerequisites",permalink:"/docs/developers/prerequisites",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/version-1.5.6/developers/prerequisites.md",tags:[],version:"1.5.6",lastUpdatedAt:1719863791,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{},sidebar:"developers",previous:{title:"Overview",permalink:"/docs/developers"},next:{title:"Essential Rust Crates",permalink:"/docs/developers/essential-crates"}},c={},p=[{value:"Preparing your Development Environment",id:"preparing-your-development-environment",level:2},{value:"Installing <code>curl</code>",id:"install-curl",level:3},{value:"Installing essential Linux packages",id:"install-essential",level:3},{value:"Installing packages required for Casper tools",id:"install-adds",level:3},{value:"Installing <code>cargo</code> on Linux",id:"install-linux-cargo",level:3},{value:"Installing Xcode developer tools for macOS",id:"install-xcode",level:3},{value:"Installing <code>brew</code>",id:"install-brew",level:3},{value:"Installing packages required for Casper tools",id:"install-adds-macos",level:3},{value:"Installing Rust",id:"install-rust",level:2},{value:"Installing the Casper Crates",id:"installing-the-casper-crates",level:2},{value:"Installing the Casper Client",id:"install-casper-client",level:2},{value:"Accessing the Casper client source code",id:"building-client-from-source",level:3},{value:"Installing CMake",id:"install-cmake",level:2},{value:"Installing an IDE",id:"installing-an-ide",level:2},{value:"Setting up a Casper Account",id:"setting-up-an-account",level:2},{value:"Creating an account",id:"creating-an-account",level:3},{value:"Generating the account hash",id:"generating-the-account-hash",level:3},{value:"Funding an Account",id:"fund-your-account",level:2},{value:"Acquiring a Node Address from the Network",id:"acquire-node-address-from-network-peers",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development-prerequisites"},"Development Prerequisites"),(0,r.kt)("p",null,"This page covers the necessary software for your Casper development environment. To develop comfortably, you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"Linux Ubuntu 20.04"),". Casper does not officially support ",(0,r.kt)("inlineCode",{parentName:"p"},"macOS"),", but the commands are included for your convenience. If you encounter any problems, reach out to the community on ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/casperblockchain"},"Telegram")," or ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/casperblockchain"},"Discord"),". Developing on Windows is not advised."),(0,r.kt)("h2",{id:"preparing-your-development-environment"},"Preparing your Development Environment"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("h3",{id:"install-curl"},"Installing ",(0,r.kt)("inlineCode",{parentName:"h3"},"curl")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install curl\n")),(0,r.kt)("h3",{id:"install-essential"},"Installing essential Linux packages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install build-essential\n")),(0,r.kt)("h3",{id:"install-adds"},"Installing packages required for Casper tools"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install pkg-config\nsudo apt-get install openssl\nsudo apt-get install libssl-dev\n")),(0,r.kt)("h3",{id:"install-linux-cargo"},"Installing ",(0,r.kt)("inlineCode",{parentName:"h3"},"cargo")," on Linux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install cargo\n"))),(0,r.kt)(o.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("h3",{id:"install-xcode"},"Installing Xcode developer tools for macOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xcode-select --install\n")),(0,r.kt)("p",null,"Verify the installation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xcode-select -p\n")),(0,r.kt)("h3",{id:"install-brew"},"Installing ",(0,r.kt)("inlineCode",{parentName:"h3"},"brew")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,r.kt)("h3",{id:"install-adds-macos"},"Installing packages required for Casper tools"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install pkg-config\nbrew install openssl\n")))),(0,r.kt)("h2",{id:"install-rust"},"Installing Rust"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org"},"Rust programming language")," if you don't already have it on your computer."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"official Rust guide")," recommends installing Rust by using ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,r.kt)("p",null,"After your next login, the installation script automatically adds Rust to your system PATH. To start using Rust immediately, run the following command in your shell instead of restarting your terminal. The command will add Rust to your system PATH."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source $HOME/.cargo/env\n")),(0,r.kt)("p",null,"Verify the installation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rustup --version\n")),(0,r.kt)("p",null,"Note: You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"brew")," on MacOS or ",(0,r.kt)("inlineCode",{parentName:"p"},"apt")," on Linux to install Rust."),(0,r.kt)("h2",{id:"installing-the-casper-crates"},"Installing the Casper Crates"),(0,r.kt)("p",null,"The best and fastest way to set up a Casper Rust project is to use ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/cargo-casper"},"cargo casper"),", which is the command line tool for creating a Wasm smart contract and tests for use on a Casper network. This tool will create a simple contract, a runtime environment, and a testing framework with a simple test. ",(0,r.kt)("em",{parentName:"p"},"Cargo")," is a build system and package manager for Rust (much like ",(0,r.kt)("em",{parentName:"p"},"pip")," if you are familiar with Python, or ",(0,r.kt)("em",{parentName:"p"},"npm")," and ",(0,r.kt)("em",{parentName:"p"},"yarn")," for those familiar with Javascript). It is also possible to use this configuration in your CI/CD pipeline."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-casper\n")),(0,r.kt)("p",null,"If you run into any issues with this command and you have not recently installed Rust from scratch, please make sure to update your Rust version with this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rustup update\n")),(0,r.kt)("p",null,"Verify the installation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo-casper --version\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Familiarize yourself with the essential Casper crates described ",(0,r.kt)("a",{parentName:"p",href:"/docs/developers/essential-crates"},"here"),".")),(0,r.kt)("h2",{id:"install-casper-client"},"Installing the Casper Client"),(0,r.kt)("p",null,"The default Casper client is on ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/casper-client"},"crates.io"),". This client can transmit your deploys to a Casper network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install casper-client\n")),(0,r.kt)("p",null,"Verify the installation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client --version\n")),(0,r.kt)("p",null,"The Casper client can print out help information, which provides an up-to-date list of supported commands. To do so, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client --help\n")),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"help")," for each command to get the most up-to-date arguments and descriptions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client <command> --help\n")),(0,r.kt)("h3",{id:"building-client-from-source"},"Accessing the Casper client source code"),(0,r.kt)("p",null,"You can access the Casper client source code ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/casper-client-rs"},"here"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," directory contains the source for the client library, which may be called directly rather than through the CLI binary. The CLI app ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-client")," uses this library to implement its functionality."),(0,r.kt)("p",null,"If you wish to compile it, you will need to first install the nightly Rust toolchain with this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rustup toolchain install nightly\n")),(0,r.kt)("p",null,"Then, compile the source code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release\n")),(0,r.kt)("p",null,"You will find the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-client")," executable in the ",(0,r.kt)("inlineCode",{parentName:"p"},"target/release")," directory."),(0,r.kt)("h2",{id:"install-cmake"},"Installing CMake"),(0,r.kt)("p",null,"If you plan to compile contracts from the source code, including those provided in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node"},"casper-node")," repository, install ",(0,r.kt)("inlineCode",{parentName:"p"},"CMake")," with the commands below."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cmake.org/"},"CMake")," is a popular build tool that we will use, and you may have it installed. If you do, make sure that you have the latest version. If you need to install or upgrade it, follow the steps below or on the ",(0,r.kt)("a",{parentName:"p",href:"https://cmake.org/resources/"},"CMake website"),". Once installed, check your version as shown below."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get -y install cmake\n"))),(0,r.kt)(o.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install cmake\n")))),(0,r.kt)("p",null,"Check your version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cmake --version\n")),(0,r.kt)("p",null,"Sample output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cmake version 3.20.0 (or above)\n\nCMake suite maintained and supported by Kitware (kitware.com/cmake).\n")),(0,r.kt)("h2",{id:"installing-an-ide"},"Installing an IDE"),(0,r.kt)("p",null,"We advise using an integrated development environment such as Visual Studio Code (VSC) for development. There are many IDEs available for Rust development. The most popular IDEs for Rust are the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"Visual Studio Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/clion/"},"CLion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/idea/"},"IntelliJ Idea")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.vim.org/"},"Vim"))),(0,r.kt)("p",null,"You can use any IDE you wish. Most of our documentation and examples use Visual Studio Code (VSC), a popular IDE with many extensions that might be helpful during development."),(0,r.kt)("p",null,"If you are using VSC, you might find the following extensions useful:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CodeLLDB")," \u2013 An important extension for debugging Rust code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rust-analyzer")," \u2013 The official Rust language extension"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Better TOML")," \u2013 Support for formatting TOML files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"crates")," \u2013 An extension to help manage crates"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Error Lens")," \u2013 Enhances the programming experience by highlighting syntax errors")),(0,r.kt)("h2",{id:"setting-up-an-account"},"Setting up a Casper Account"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/design/casper-design#accounts-head"},"Account")," creation process consists of two steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Creating an Account"),(0,r.kt)("li",{parentName:"ol"},"Funding the Account")),(0,r.kt)("p",null,"The following video complements the instructions below, showing you the expected output."),(0,r.kt)("p",{align:"center"},(0,r.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sA1HTPjV_bc&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=3",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h3",{id:"creating-an-account"},"Creating an account"),(0,r.kt)("p",null,"The Casper blockchain uses an on-chain account-based model, uniquely identified by an ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountHash")," derived from a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"PublicKey"),"."),(0,r.kt)("p",null,"By default, a transactional interaction with the blockchain takes the form of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," cryptographically signed by the key-pair corresponding to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PublicKey")," used to create the account."),(0,r.kt)("p",null,"Developers must create accounts using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/accounts-and-keys#option-1-generating-keys-using-the-casper-client-option-1-key-generation-using-the-casper-client"},"Casper command-line client")," to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key.pem")," file needed during development."),(0,r.kt)("p",null,"Some Casper networks, such as the official Testnet and Mainnet, provide wallets that allow account creation as outlined\xa0here. However, these wallets do not give developers access to the secret key file."),(0,r.kt)("h3",{id:"generating-the-account-hash"},"Generating the account hash"),(0,r.kt)("p",null,"As a developer, you will often use an account hash, which is a 32-byte hash of the public key. This is because responses from the node contain ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountHashes")," instead of the direct hexadecimal-encoded public key. To view the account hash for a public key, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"account-address")," option of the Casper CLI client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client account-address --public-key <path-to-public_key.pem/public-key-hex>\n")),(0,r.kt)("h2",{id:"fund-your-account"},"Funding an Account"),(0,r.kt)("p",null,"After generating the cryptographic key-pair for an Account, you must fund the account's main purse to create it on-chain."),(0,r.kt)("p",null,"On Testnet, you can fund an account by requesting test tokens according to ",(0,r.kt)("a",{parentName:"p",href:"/docs/users/testnet-faucet"},"this guide"),". You can request test tokens ",(0,r.kt)("strong",{parentName:"p"},"only once")," for each account."),(0,r.kt)("p",null,"On Mainnet, a pre-existing account must transfer CSPR tokens to the newly created account's main purse to finalize the setup. The source account needs to transfer CSPR tokens to the hexadecimal-encoded public key of the target account. This transfer will automatically create the target account if it does not exist. Currently, this is the only way to create an account on Mainnet."),(0,r.kt)("h2",{id:"acquire-node-address-from-network-peers"},"Acquiring a Node Address from the Network"),(0,r.kt)("p",null,"Clients can interact with a node on the blockchain via requests sent to that node's JSON-RPC endpoint, ",(0,r.kt)("inlineCode",{parentName:"p"},"http://<node-ip-address>:7777")," by default."),(0,r.kt)("p",null,"The node address is the IP of a peer node."),(0,r.kt)("p",null,"Both the official Testnet and Mainnet provide block explorers that list the IP addresses of nodes on their respective networks."),(0,r.kt)("p",null,"You can get the ",(0,r.kt)("inlineCode",{parentName:"p"},"node-ip-address")," of a node on the network by visiting the following block explorers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/tools/peers"},"Peers")," on Testnet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cspr.live/tools/peers"},"Peers")," on Mainnet")),(0,r.kt)("p",null,"You will see a list of peers, and you can select the IP of any peer on the list."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": If the selected peer is unresponsive, pick a different peer and try again."))}h.isMDXComponent=!0}}]);