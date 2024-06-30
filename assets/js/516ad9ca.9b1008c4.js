"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8566],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2355:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var a=r(7462),n=r(3366),s=(r(7294),r(3905)),i=r(4996),o=["components"],c={title:"Sidecar Setup"},l="The Casper Sidecar",p={unversionedId:"operators/setup/casper-sidecar",id:"operators/setup/casper-sidecar",title:"Sidecar Setup",description:"The Casper Sidecar is an application running alongside the node process. It allows subscribers to monitor a node's event stream, query stored events, and query the node's JSON-RPC API, thus receiving faster responses and reducing the load placed on the node. The Sidecar usually runs on the same machine as the node process, but it can be configured to run remotely if necessary. The Sidecar supports the following functionalities:",source:"@site/source/docs/casper/operators/setup/casper-sidecar.md",sourceDirName:"operators/setup",slug:"/operators/setup/casper-sidecar",permalink:"/docs/operators/setup/casper-sidecar",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/operators/setup/casper-sidecar.md",tags:[],version:"current",lastUpdatedAt:1718376391,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{title:"Sidecar Setup"},sidebar:"operators",previous:{title:"Node Events",permalink:"/docs/operators/setup/node-events"},next:{title:"Becoming a Validator",permalink:"/docs/operators/becoming-a-validator/"}},d={},u=[{value:"Configuring the Sidecar Service",id:"configuring-the-sidecar",level:2},{value:"Installing the Sidecar",id:"installing-the-sidecar",level:2},{value:"Monitoring the Installation",id:"monitoring-the-sidecar",level:3},{value:"The Admin Server",id:"the-admin-server",level:2},{value:"Swagger Documentation",id:"swagger-documentation",level:2},{value:"OpenAPI Specification",id:"openapi-specification",level:2},{value:"Using the Sidecar",id:"using-the-sidecar",level:2},{value:"Troubleshooting Tips",id:"troubleshooting-tips",level:2}],m={toc:u},h="wrapper";function g(e){var t=e.components,r=(0,n.Z)(e,o);return(0,s.kt)(h,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"the-casper-sidecar"},"The Casper Sidecar"),(0,s.kt)("p",null,"The Casper Sidecar is an application running alongside the node process. It allows subscribers to monitor a node's event stream, query stored events, and query the node's JSON-RPC API, thus receiving faster responses and reducing the load placed on the node. The Sidecar usually runs on the same machine as the node process, but it can be configured to run remotely if necessary. The Sidecar supports the following functionalities:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#the-sse-server"},"server-sent events (SSE) endpoint")," with an ",(0,s.kt)("inlineCode",{parentName:"li"},"/events")," endpoint streaming events from all the connected nodes. The Sidecar also stores these events."),(0,s.kt)("li",{parentName:"ul"},"A ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#the-rest-api-server"},"REST API server")," that allows clients to query stored events."),(0,s.kt)("li",{parentName:"ul"},"A ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#the-rpc-api-server"},"JSON-RPC API")," to interact with a Casper node."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/LEGACY_SSE_EMULATION.md"},"Legacy emulation")," for clients using older versions of the SSE API.")),(0,s.kt)("p",null,"Visit GitHub for the latest source code and information on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#system-components--architecture"},"system architecture"),", ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#configuring-the-sidecar"},"configurations"),", ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#running-and-testing-the-sidecar"},"testing")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#troubleshooting-tips"},"troubleshooting"),"."),(0,s.kt)("img",{class:"align-center",src:(0,i.Z)("/image/operators/sidecar-diagram.png"),alt:"Sidecar components and architecture diagram",width:"800"}),(0,s.kt)("h2",{id:"configuring-the-sidecar"},"Configuring the Sidecar Service"),(0,s.kt)("p",null,"Operators need to update the Sidecar configuration file according to their needs. Detailed configuration instructions are available in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/resources/ETC_README.md"},"GitHub"),". Further details regarding each ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#configuring-the-sidecar"},"configuration option")," are available in GitHub."),(0,s.kt)("h2",{id:"installing-the-sidecar"},"Installing the Sidecar"),(0,s.kt)("p",null,"The following command will install the Debian package for the Casper Sidecar service on various Linux flavors. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install ./casper-sidecar_0.1.0-0_amd64.deb\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Sample output")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Reading package lists... Done\nBuilding dependency tree       \nReading state information... Done\nNote, selecting 'casper-sidecar' instead of './casper-sidecar_0.1.0-0_amd64.deb'\nThe following NEW packages will be installed:\n  casper-sidecar\n0 upgraded, 1 newly installed, 0 to remove and 18 not upgraded.\nNeed to get 0 B/4162 kB of archives.\nAfter this operation, 20.2 MB of additional disk space will be used.\nGet:1 /home/ubuntu/casper-sidecar_0.1.0-0_amd64.deb casper-sidecar amd64 0.1.0-0 [4162 kB]\nSelecting previously unselected package casper-sidecar.\n(Reading database ... 102241 files and directories currently installed.)\nPreparing to unpack .../casper-sidecar_0.1.0-0_amd64.deb ...\nUnpacking casper-sidecar (0.1.0-0) ...\nSetting up casper-sidecar (0.1.0-0) ...\nAdding system user `csidecar' (UID 114) ...\nAdding new group `csidecar' (GID 120) ...\nAdding new user `csidecar' (UID 114) with group `csidecar' ...\nNot creating home directory `/home/csidecar'.\nCreated symlink /etc/systemd/system/multi-user.target.wants/casper-sidecar.service \u2192 /lib/systemd/system/casper-sidecar.service.\n"))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"monitoring-the-sidecar"},"Monitoring the Installation"),(0,s.kt)("p",null,"Check the service status:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status casper-sidecar\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Sample output")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-sidecar.service - Casper Event Sidecar\n     Loaded: loaded (/lib/systemd/system/casper-sidecar.service; enabled; vendor preset: enabled)\n     Active: active (running) since Wed 2022-12-07 20:33:29 UTC; 1min 3s ago\n       Docs: https://docs.casperlabs.io\n   Main PID: 16707 (casper-si)\n      Tasks: 5 (limit: 9401)\n     Memory: 7.1M\n     CGroup: /system.slice/casper-sidecar.service\n             \u2514\u250016707 /usr/bin/casper-sidecar /etc/casper-sidecar/config.toml\n\nDec 07 20:33:29 user systemd[1]: Started Casper Event Sidecar.\n"))),(0,s.kt)("br",null),(0,s.kt)("p",null,"Check the logs and make sure the service is running as expected."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl --no-pager -u casper-sidecar\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Sample output")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Dec 05 17:24:53 user systemd[1]: Started Casper Event Sidecar.\n"))),(0,s.kt)("br",null),(0,s.kt)("p",null,"If you see any errors, you may need to ",(0,s.kt)("a",{parentName:"p",href:"#configuring-the-service"},"update the configuration")," and restart the service with the commands below."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Stopping the service:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop casper-sidecar.service\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Starting the service:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start casper-sidecar.service\n")),(0,s.kt)("h2",{id:"the-admin-server"},"The Admin Server"),(0,s.kt)("p",null,"If enabled, the Sidecar's administrative API can be accessed using the following command. The ",(0,s.kt)("inlineCode",{parentName:"p"},"PORT")," is usually ",(0,s.kt)("inlineCode",{parentName:"p"},"18887"),", depending on how the Sidecar was configured."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"http://localhost:PORT/metrics/\n")),(0,s.kt)("h2",{id:"swagger-documentation"},"Swagger Documentation"),(0,s.kt)("p",null,"You can access the Swagger documentation at ",(0,s.kt)("inlineCode",{parentName:"p"},"http://localhost:PORT/swagger-ui/"),". The ",(0,s.kt)("inlineCode",{parentName:"p"},"PORT")," is usually ",(0,s.kt)("inlineCode",{parentName:"p"},"18888"),", depending on how the Sidecar was configured."),(0,s.kt)("h2",{id:"openapi-specification"},"OpenAPI Specification"),(0,s.kt)("p",null,"An OpenAPI schema is available at ",(0,s.kt)("inlineCode",{parentName:"p"},"http://localhost:PORT/api-doc.json/"),". The ",(0,s.kt)("inlineCode",{parentName:"p"},"PORT")," is usually ",(0,s.kt)("inlineCode",{parentName:"p"},"18888"),", depending on how the Sidecar was configured."),(0,s.kt)("h2",{id:"using-the-sidecar"},"Using the Sidecar"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/USAGE.md"},"Casper Sidecar Usage Guide")," describes how to consume events and perform queries using the Sidecar, covering the following topics:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Node-generated events emitted by the node(s) to which the Sidecar connects"),(0,s.kt)("li",{parentName:"ul"},"Sidecar-generated events originating solely from the Sidecar service and not from a node"),(0,s.kt)("li",{parentName:"ul"},"The RESTful endpoint for performing useful queries about the state of the network")),(0,s.kt)("h2",{id:"troubleshooting-tips"},"Troubleshooting Tips"),(0,s.kt)("p",null,"For troubleshooting tips, visit ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#troubleshooting-tips"},"Github"),"."))}g.isMDXComponent=!0}}]);