"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3377],{3905:(a,t,e)=>{e.d(t,{Zo:()=>m,kt:()=>c});var n=e(67294);function r(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function l(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function i(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){r(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function d(a,t){if(null==a)return{};var e,n,r=function(a,t){if(null==a)return{};var e,n,r={},l=Object.keys(a);for(n=0;n<l.length;n++)e=l[n],t.indexOf(e)>=0||(r[e]=a[e]);return r}(a,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(n=0;n<l.length;n++)e=l[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var p=n.createContext({}),o=function(a){var t=n.useContext(p),e=t;return a&&(e="function"==typeof a?a(t):i(i({},t),a)),e},m=function(a){var t=o(a.components);return n.createElement(p.Provider,{value:t},a.children)},k="mdxType",s={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(a,t){var e=a.components,r=a.mdxType,l=a.originalType,p=a.parentName,m=d(a,["components","mdxType","originalType","parentName"]),k=o(e),u=r,c=k["".concat(p,".").concat(u)]||k[u]||s[u]||l;return e?n.createElement(c,i(i({ref:t},m),{},{components:e})):n.createElement(c,i({ref:t},m))}));function c(a,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof a||r){var l=e.length,i=new Array(l);i[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=a,d[k]="string"==typeof a?a:r,i[1]=d;for(var o=2;o<l;o++)i[o]=e[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},32095:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=e(87462),r=(e(67294),e(3905));const l={title:"Key Types"},i="Understanding Key Types",d={unversionedId:"concepts/key-types",id:"concepts/key-types",title:"Key Types",description:"For user convenience and compatibility, we expect the delivery of hashes, keys, and similar data as a prefixed string when using the node. The following is a list of string representations used.",source:"@site/source/docs/concepts/key-types.md",sourceDirName:"concepts",slug:"/concepts/key-types",permalink:"/docs/next/concepts/key-types",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/concepts/key-types.md",tags:[],version:"current",lastUpdatedAt:1719861245,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{title:"Key Types"},sidebar:"concepts",previous:{title:"Accounts and Keys",permalink:"/docs/next/concepts/accounts-and-keys"},next:{title:"Transaction Lifecycle",permalink:"/docs/next/transactions-and-transaction-lifecycle"}},p={},o=[{value:"Key Explanations",id:"key-explanations",level:2},{value:"Account",id:"account",level:3},{value:"Hash",id:"hash",level:3},{value:"URef",id:"uref",level:3},{value:"Transfer",id:"transfer",level:3},{value:"DeployInfo",id:"deployinfo",level:3},{value:"EraInfo",id:"erainfo",level:3},{value:"Balance",id:"balance",level:3},{value:"BalanceHold",id:"balancehold",level:3},{value:"Bid",id:"bid",level:3},{value:"Withdraw",id:"withdraw",level:3},{value:"Dictionary",id:"dictionary",level:3},{value:"SystemContractRegistry",id:"systemcontractregistry",level:3},{value:"EraSummary",id:"erasummary",level:3},{value:"Unbond",id:"unbond",level:3},{value:"ChainspecRegistry",id:"chainspecregistry",level:3},{value:"ChecksumRegistry",id:"checksumregistry",level:3},{value:"BidAddr",id:"bidaddr",level:3},{value:"Package",id:"package",level:3},{value:"AddressableEntity",id:"addressableentity",level:3},{value:"ByteCode",id:"bytecode",level:3},{value:"Message",id:"message",level:3},{value:"NamedKey",id:"namedkey",level:3},{value:"BlockGlobal",id:"blockglobal",level:3},{value:"EntryPoint",id:"entrypoint",level:3}],m={toc:o},k="wrapper";function s(a){let{components:t,...e}=a;return(0,r.kt)(k,(0,n.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"understanding-key-types"},"Understanding Key Types"),(0,r.kt)("p",null,"For user convenience and compatibility, we expect the delivery of hashes, keys, and similar data as a prefixed string when using the node. The following is a list of string representations used."),(0,r.kt)("h2",{id:"key-explanations"},"Key Explanations"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key")," is a wrapper type that may contain one of several possible sets of data."),(0,r.kt)("h3",{id:"account"},"Account"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::Account")," contains an AccountHash."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key::Account"),(0,r.kt)("td",{parentName:"tr",align:null},"account-hash-"),(0,r.kt)("td",{parentName:"tr",align:null},"account-hash-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70")))),(0,r.kt)("h3",{id:"hash"},"Hash"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::Hash")," contains a byte array with a length of 32, which can be used to pass any of the hashes. Please take note that the developer of the contract is responsible for the implementation of any checks necessary on the receiving side."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key::Hash"),(0,r.kt)("td",{parentName:"tr",align:null},"hash-"),(0,r.kt)("td",{parentName:"tr",align:null},"hash-0101010101010101010101010101010101010101010101010101010101010101")))),(0,r.kt)("h3",{id:"uref"},"URef"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::URef")," contains an URef suffixed by ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/developers/dapps/uref-security"},"access rights"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key::URef"),(0,r.kt)("td",{parentName:"tr",align:null},"uref-"),(0,r.kt)("td",{parentName:"tr",align:null},"uref-0101010101010101010101010101010101010101010101010101010101010101-001")))),(0,r.kt)("h3",{id:"transfer"},"Transfer"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::Transfer")," should contain the address hash for a transfer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key::Transfer"),(0,r.kt)("td",{parentName:"tr",align:null},"transfer-"),(0,r.kt)("td",{parentName:"tr",align:null},"transfer-0101010101010101010101010101010101010101010101010101010101010101")))),(0,r.kt)("h3",{id:"deployinfo"},"DeployInfo"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::DeployInfo")," retains the address hash of deploy information."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key::DeployInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"deploy-"),(0,r.kt)("td",{parentName:"tr",align:null},"deploy-0101010101010101010101010101010101010101010101010101010101010101")))),(0,r.kt)("h3",{id:"erainfo"},"EraInfo"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::EraInfo")," is the integer number of the associated era."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key::EraInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"era-"),(0,r.kt)("td",{parentName:"tr",align:null},"era-1")))),(0,r.kt)("h3",{id:"balance"},"Balance"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::Balance")," is the balance of a purse."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key::Balance"),(0,r.kt)("td",{parentName:"tr",align:null},"balance-"),(0,r.kt)("td",{parentName:"tr",align:null},"balance-0101010101010101010101010101010101010101010101010101010101010101")))),(0,r.kt)("h3",{id:"balancehold"},"BalanceHold"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::BalanceHold")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," under which a hold on a purse balance is stored."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key::BalanceHold"),(0,r.kt)("td",{parentName:"tr",align:null},"balance-hold-"),(0,r.kt)("td",{parentName:"tr",align:null},"balance-hold-002a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a6400000000000000")))),(0,r.kt)("h3",{id:"bid"},"Bid"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::Bid")," is used to keep track of bids for the auction contract. It is not generally used by users."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key::Bid"),(0,r.kt)("td",{parentName:"tr",align:null},"bid-"),(0,r.kt)("td",{parentName:"tr",align:null},"bid-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70")))),(0,r.kt)("h3",{id:"withdraw"},"Withdraw"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::Withdraw")," is used to keep track of withdraws for the auction contract. It is not generally used by users and exists in a historical context."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key::Withdraw"),(0,r.kt)("td",{parentName:"tr",align:null},"withdraw-"),(0,r.kt)("td",{parentName:"tr",align:null},"withdraw-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70")))),(0,r.kt)("h3",{id:"dictionary"},"Dictionary"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::Dictionary")," is the hash derived from a URef and a piece of arbitrary data and leads to a dictionary."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key::Dictionary"),(0,r.kt)("td",{parentName:"tr",align:null},"dictionary-"),(0,r.kt)("td",{parentName:"tr",align:null},"dictionary-0101010101010101010101010101010101010101010101010101010101010101")))),(0,r.kt)("h3",{id:"systemcontractregistry"},"SystemContractRegistry"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::SystemContractRegistry")," is a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," under which a mapping of the names and ContractHashes for system contracts, including ",(0,r.kt)("inlineCode",{parentName:"p"},"Mint"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Auction"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"HandlePayment")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"StandardPayment"),", is stored."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key::SystemContractRegistry"),(0,r.kt)("td",{parentName:"tr",align:null},"system-entity-registry-"),(0,r.kt)("td",{parentName:"tr",align:null},"system-entity-registry-0000000000000000000000000000000000000000000000000000000000000000")))),(0,r.kt)("h3",{id:"erasummary"},"EraSummary"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::EraSummary")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," under which we store current era info."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key::EraSummary"),(0,r.kt)("td",{parentName:"tr",align:null},"era-summary-"),(0,r.kt)("td",{parentName:"tr",align:null},"era-summary-00000000000000000000000000000000")))),(0,r.kt)("h3",{id:"unbond"},"Unbond"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::Unbond")," is a variant of the key type that tracks unbonding purses."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key::Unbond"),(0,r.kt)("td",{parentName:"tr",align:null},"unbond-"),(0,r.kt)("td",{parentName:"tr",align:null},"unbond-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70")))),(0,r.kt)("h3",{id:"chainspecregistry"},"ChainspecRegistry"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::ChainspecRegistry")," is a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," which contains a mapping of file names to the hash of the file itself. These files include ",(0,r.kt)("em",{parentName:"p"},"Chainspec.toml")," and may also include ",(0,r.kt)("em",{parentName:"p"},"Accounts.toml")," and ",(0,r.kt)("em",{parentName:"p"},"GlobalState.toml"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key::ChainspecRegistry"),(0,r.kt)("td",{parentName:"tr",align:null},"chainspec-registry-"),(0,r.kt)("td",{parentName:"tr",align:null},"chainspec-registry-11111111111111111111111111111111")))),(0,r.kt)("h3",{id:"checksumregistry"},"ChecksumRegistry"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::ChecksumRegistry")," is a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," variant under which we write a registry of checksums for a given block.  There are two checksums in the registry, one for the execution results and the other for the approvals of all transactions in the block."),(0,r.kt)("p",null,"|Key::ChecksumRegistry | checksum-registry- | checksum-registry-00000000000000000000000000000000 |"),(0,r.kt)("h3",{id:"bidaddr"},"BidAddr"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::BidAddr")," manages data associated with bids for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Auction")," contract. It may be any one of three variants: ",(0,r.kt)("inlineCode",{parentName:"p"},"unified"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"validator"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"delegator"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Unified")),(0,r.kt)("td",{parentName:"tr",align:null},"bid-addr-00"),(0,r.kt)("td",{parentName:"tr",align:null},"bid-addr-00ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Validator")),(0,r.kt)("td",{parentName:"tr",align:null},"bid-addr-01"),(0,r.kt)("td",{parentName:"tr",align:null},"bid-addr-01ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Delegator")),(0,r.kt)("td",{parentName:"tr",align:null},"bid-addr-02"),(0,r.kt)("td",{parentName:"tr",align:null},"bid-addr-02ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70")))),(0,r.kt)("h3",{id:"package"},"Package"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::Package")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," under which package information is stored."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key::Package"),(0,r.kt)("td",{parentName:"tr",align:null},"package-"),(0,r.kt)("td",{parentName:"tr",align:null},"package-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a")))),(0,r.kt)("h3",{id:"addressableentity"},"AddressableEntity"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::AddressableEntity")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," under which an ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/developers/json-rpc/types_chain/#addressableentity"},(0,r.kt)("inlineCode",{parentName:"a"},"AddressableEntity"))," is stored. It may be one of three variants: ",(0,r.kt)("inlineCode",{parentName:"p"},"Account"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"System")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"SmartContract"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Account")),(0,r.kt)("td",{parentName:"tr",align:null},"addressable-entity-account-"),(0,r.kt)("td",{parentName:"tr",align:null},"addressable-entity-account-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"System")),(0,r.kt)("td",{parentName:"tr",align:null},"addressable-entity-system-"),(0,r.kt)("td",{parentName:"tr",align:null},"addressable-entity-system-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SmartContract")),(0,r.kt)("td",{parentName:"tr",align:null},"addressable-entity-contract-"),(0,r.kt)("td",{parentName:"tr",align:null},"addressable-entity-contract-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a")))),(0,r.kt)("h3",{id:"bytecode"},"ByteCode"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::ByteCode")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," under which a byte code record is stored. It may be one of two variants: ",(0,r.kt)("inlineCode",{parentName:"p"},"v1-wasm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"empty"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v1-wasm")),(0,r.kt)("td",{parentName:"tr",align:null},"byte-code-v1-wasm-"),(0,r.kt)("td",{parentName:"tr",align:null},"byte-code-v1-wasm-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"empty")),(0,r.kt)("td",{parentName:"tr",align:null},"byte-code-empty-"),(0,r.kt)("td",{parentName:"tr",align:null},"byte-code-empty-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a")))),(0,r.kt)("h3",{id:"message"},"Message"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::Message")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," under which a message is stored."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message Topic"),(0,r.kt)("td",{parentName:"tr",align:null},"message-topic-entity-contract-"),(0,r.kt)("td",{parentName:"tr",align:null},"message-topic-entity-contract-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message"),(0,r.kt)("td",{parentName:"tr",align:null},"message-entity-contract-"),(0,r.kt)("td",{parentName:"tr",align:null},"message-entity-contract-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a-0202020202020202020202020202020202020202020202020202020202020202-f")))),(0,r.kt)("h3",{id:"namedkey"},"NamedKey"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::NamedKey")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," under which a single named key entry is stored."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Account Named Key"),(0,r.kt)("td",{parentName:"tr",align:null},"named-key-entity-account-"),(0,r.kt)("td",{parentName:"tr",align:null},"named-key-entity-account-928d914bdcad3ca269e750f63ed3615c5d3f615cf97dba87006fd9f979dacb3c-dde6f264c89fe385a5b07c26d77284d6fddabe79653c5ca25cec39a6363e6ec7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contract Named Key"),(0,r.kt)("td",{parentName:"tr",align:null},"named-key-entity-contract-"),(0,r.kt)("td",{parentName:"tr",align:null},"named-key-entity-contract-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a-2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b")))),(0,r.kt)("h3",{id:"blockglobal"},"BlockGlobal"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::BlockGlobal")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," under which per-block details are stored to global state."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block Time"),(0,r.kt)("td",{parentName:"tr",align:null},"block-time-"),(0,r.kt)("td",{parentName:"tr",align:null},"block-time-00000000000000000000000000000000000000000000000000000000000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block Message Count"),(0,r.kt)("td",{parentName:"tr",align:null},"block-message-count-"),(0,r.kt)("td",{parentName:"tr",align:null},"block-message-count-00000000000000000000000000000000000000000000000000000000000000")))),(0,r.kt)("h3",{id:"entrypoint"},"EntryPoint"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key::EntryPoint")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," under which an entrypoint record is written."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V1 Entry Point"),(0,r.kt)("td",{parentName:"tr",align:null},"entry-point-v1-entity-contract-"),(0,r.kt)("td",{parentName:"tr",align:null},"entry-point-v1-entity-contract-53c02487fa9a4bb1cd3e27b849e942cddb97caacb357e5b6bc86f702b2e32dbb-3eba75fc27f0ec2786e09c09d72d61e4c28a86d44d8efc9911460d5438396481")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V2 Entry Point"),(0,r.kt)("td",{parentName:"tr",align:null},"entry-point-v2-entity-contract-"),(0,r.kt)("td",{parentName:"tr",align:null},"entry-point-v2-entity-contract-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a-1")))))}s.isMDXComponent=!0}}]);