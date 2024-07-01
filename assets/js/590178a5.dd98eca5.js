"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4652],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(n),k=a,m=u["".concat(c,".").concat(k)]||u[k]||d[k]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,s[1]=p;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4605:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],p={},c=".NET SDK",i={unversionedId:"developers/dapps/sdk/csharp-sdk",id:"developers/dapps/sdk/csharp-sdk",title:".NET SDK",description:"The C# .NET SDK allows developers to interact with a Casper network using C#.",source:"@site/source/docs/casper/developers/dapps/sdk/csharp-sdk.md",sourceDirName:"developers/dapps/sdk",slug:"/developers/dapps/sdk/csharp-sdk",permalink:"/developers/dapps/sdk/csharp-sdk",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/dapps/sdk/csharp-sdk.md",tags:[],version:"current",lastUpdatedAt:1677490987,formattedLastUpdatedAt:"Feb 27, 2023",frontMatter:{},sidebar:"developers",previous:{title:"JavaScript/TypeScript SDK",permalink:"/developers/dapps/sdk/script-sdk"},next:{title:"Go SDK",permalink:"/developers/dapps/sdk/go-sdk"}},l={},u=[{value:"Documentation",id:"documentation",level:2},{value:"Get started",id:"get-started",level:2}],d={toc:u},k="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)(k,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"net-sdk"},".NET SDK"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/make-software/casper-net-sdk"},"C# .NET SDK")," allows developers to interact with a Casper network using C#."),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://make-software.github.io/casper-net-sdk/"},"https://make-software.github.io/casper-net-sdk/")," to find the SDK documentation, examples, and tutorials."),(0,o.kt)("h2",{id:"get-started"},"Get started"),(0,o.kt)("p",null,"This example shows how to retrieve an account's main purse balance from a testnet node. Make sure you have .NET 5 or higher before continuing."),(0,o.kt)("p",null,"Open a terminal window and create a new console app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new console -o GetAccountBalance\ncd GetAccountBalance\n")),(0,o.kt)("p",null,"The Casper.Network.SDK for .NET is published on ",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Casper.Network.SDK"},"nuget.org")," as a NuGet package."),(0,o.kt)("p",null,"To add a reference to the SDK in your project, use the Package Manager in Visual Studio or the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet")," CLI tool."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Package Manager (Windows)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Install-Package Casper.Network.SDK\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"dotnet CLI Tool (Windows, Mac, and Linux)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Casper.Network.SDK\n")),(0,o.kt)("p",null,"Now, replace the default code in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," with this main program:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'using System;\nusing System.Threading.Tasks;\nusing Casper.Network.SDK;\nusing Casper.Network.SDK.JsonRpc;\nusing Casper.Network.SDK.Types;\n\nnamespace Casper.NET.SDK.Examples\n{\n    public class GetAccountBalance\n    {\n        public static async Task Main(string[] args)\n        {\n            string nodeAddress = "http://testnet-node.make.services:7777";\n\n            var hex = "0203914289b334f57366541099a52156b149436fdb0422b3c48fe4115d0578abf690";\n            var publicKey = PublicKey.FromHexString(hex);\n\n            try\n            {\n                var casperSdk = new NetCasperClient(nodeAddress);\n\n                // Get the balance using the account public key\n                //\n                var rpcResponse = await casperSdk.GetAccountBalance(publicKey);\n                Console.WriteLine("Public Key Balance: " + rpcResponse.Parse().BalanceValue);\n            }\n            catch (RpcClientException e)\n            {\n                Console.WriteLine("ERROR:\\n" + e.RpcError.Message);\n            }\n            catch (Exception e)\n            {\n                Console.WriteLine(e);\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Finally, run the example with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet run\n")),(0,o.kt)("p",null,"The program will print the account's main purse balance retrieved from the testnet."),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://make-software.github.io/casper-net-sdk/"},"https://make-software.github.io/casper-net-sdk/")," to find other examples, tutorials, and complete documentation for this SDK."))}m.isMDXComponent=!0}}]);