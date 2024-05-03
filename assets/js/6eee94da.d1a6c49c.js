"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2388],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),i=c(t),m=a,f=i["".concat(p,".").concat(m)]||i[m]||u[m]||o;return t?r.createElement(f,s(s({ref:n},d),{},{components:t})):r.createElement(f,s({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[i]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8219:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return i}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],l={},p="Go SDK",c={unversionedId:"developers/dapps/sdk/go-sdk",id:"developers/dapps/sdk/go-sdk",title:"Go SDK",description:"Usage Examples",source:"@site/source/docs/casper/developers/dapps/sdk/go-sdk.md",sourceDirName:"developers/dapps/sdk",slug:"/developers/dapps/sdk/go-sdk",permalink:"/developers/dapps/sdk/go-sdk",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/dapps/sdk/go-sdk.md",tags:[],version:"current",lastUpdatedAt:1714742814,formattedLastUpdatedAt:"May 3, 2024",frontMatter:{},sidebar:"developers",previous:{title:".NET SDK",permalink:"/developers/dapps/sdk/csharp-sdk"},next:{title:"Python SDK",permalink:"/developers/dapps/sdk/python-sdk"}},d={},i=[{value:"Usage Examples",id:"usage-examples",level:2},{value:"Get a Deploy from the Network",id:"get-a-deploy-from-the-network",level:3},{value:"Handle the Deploy Processed Event",id:"handle-the-deploy-processed-event",level:3},{value:"Sending a Transfer",id:"sending-a-transfer",level:3}],u={toc:i},m="wrapper";function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go-sdk"},"Go SDK"),(0,o.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,o.kt)("p",null,"This section includes some examples of how to use Go SDK:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#get-a-deploy-from-the-network"},"Get a ",(0,o.kt)("em",{parentName:"a"},"Deploy")," from the Network")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handle-the-deploy-processed-event"},"Handle the Deploy Processed Event")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sending-a-transfer"},"Sending a Transfer"))),(0,o.kt)("h3",{id:"get-a-deploy-from-the-network"},"Get a Deploy from the Network"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "net/http"\n\n    "github.com/make-software/casper-go-sdk/casper"\n)\n\nfunc main() {\n    handler := casper.NewRPCHandler("https://<Node Address and Port>/rpc", http.DefaultClient)\n    client := casper.NewRPCClient(handler)\n    deployHash := "62972eddc6fdc03b7ec53e52f7da7e24f01add9a74d68e3e21d924051c43f126"\n    deploy, err := client.GetDeploy(context.Background(), deployHash)\n    if err != nil {\n        return\n    }\n    fmt.Println(deploy.Deploy.Hash)\n}\n')),(0,o.kt)("h3",{id:"handle-the-deploy-processed-event"},"Handle the Deploy Processed Event"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "log"\n\n    "github.com/make-software/casper-go-sdk/sse"\n)\n\nfunc main() {\n    client := sse.NewClient("https://<Node Address and Port>/events/main")\n    defer client.Stop()\n    client.RegisterHandler(\n        sse.DeployProcessedEventType,\n        func(ctx context.Context, rawEvent sse.RawEvent) error {\n            deploy, err := rawEvent.ParseAsDeployProcessedEvent()\n            if err != nil {\n                return err\n            }\n            log.Printf("Deploy hash: %s", deploy.DeployProcessed.DeployHash)\n            return nil\n        })\n    lastEventID := 1234\n    client.Start(context.TODO(), lastEventID)\n}\n')),(0,o.kt)("h3",{id:"sending-a-transfer"},"Sending a Transfer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "encoding/hex"\n    "log"\n    "math/big"\n    "net/http"\n\n    "github.com/make-software/casper-go-sdk/casper"\n    "github.com/make-software/casper-go-sdk/types/clvalue"\n)\n\nfunc main() {\n    accountPublicKey, err := casper.NewPublicKey("012488699f9a31e36ecf002675cd7186b48e6a735d10ec1b308587ca719937752c")\n    if err != nil { return }\n    amount := big.NewInt(100000000)\n    session := casper.ExecutableDeployItem{\n        ModuleBytes: &casper.ModuleBytes{\n            ModuleBytes: hex.EncodeToString([]byte("<Contract WASM>")),\n            Args: (&casper.Args{}).\n                AddArgument("target", clvalue.NewCLByteArray(accountPublicKey.AccountHash().Bytes())).\n                AddArgument("amount", *clvalue.NewCLUInt512(amount)),\n        },\n    }\n\n    payment := casper.StandardPayment(amount)\n\n    deployHeader := casper.DefaultHeader()\n    deployHeader.Account = accountPublicKey\n    deployHeader.ChainName = "casper-test"\n\n    newDeploy, err := casper.MakeDeploy(deployHeader, payment, session)\n\n    handler := casper.NewRPCHandler("https://<Node Address>:7777/rpc", http.DefaultClient)\n    client := casper.NewRPCClient(handler)\n    result, err := client.PutDeploy(context.Background(), *newDeploy)\n\n    log.Println(result.DeployHash)\n}\n')))}f.isMDXComponent=!0}}]);