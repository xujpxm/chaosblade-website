"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[6703],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(n),u=l,k=m["".concat(p,".").concat(u)]||m[u]||g[u]||r;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function u(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2895:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return s}});var a=n(7462),l=(n(7294),n(3905));const r={title:"\u63a2\u9488(Agent)\u5b89\u88c5"},i=void 0,o={unversionedId:"getting-started/installation-and-deployment/agent-install",id:"getting-started/installation-and-deployment/agent-install",title:"\u63a2\u9488(Agent)\u5b89\u88c5",description:"\u63a2\u9488\u4e3b\u8981\u4f5c\u4e3a\u5e73\u53f0\u7aef\u5efa\u8054\u3001\u547d\u4ee4\u4e0b\u53d1\u901a\u9053\u548c\u6570\u636e\u6536\u96c6\u7b49\u529f\u80fd\uff0c\u6240\u4ee5\u5982\u679c\u9700\u8981\u5bf9\u76ee\u6807\u96c6\u7fa4\u6216\u4e3b\u673a\u8fdb\u884c\u6f14\u7ec3\uff0c\u9700\u8981\u5728\u7aef\u4fa7\u7684\u76ee\u6807\u96c6\u7fa4\u6216\u4e3b\u673a\u4e0a\u5b89\u88c5\u63a2\u9488\uff0c\u4ee5\u4fbf\u5c06\u5e73\u53f0\u7f16\u6392\u597d\u7684\u6f14\u7ec3\u8f6c\u5316\u6210\u547d\u4ee4\uff0c\u4e0b\u53d1\u5230\u76ee\u6807\u673a\u5668\u4e0a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-deployment/agent-install.md",sourceDirName:"getting-started/installation-and-deployment",slug:"/getting-started/installation-and-deployment/agent-install",permalink:"/docs/next/getting-started/installation-and-deployment/agent-install",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/docs/getting-started/installation-and-deployment/agent-install.md",tags:[],version:"current",frontMatter:{title:"\u63a2\u9488(Agent)\u5b89\u88c5"},sidebar:"docs",previous:{title:"\u6df7\u6c8c\u5de5\u7a0b\u5de5\u5177ChaosBlade\u5b89\u88c5\u4e0e\u5378\u8f7d",permalink:"/docs/next/getting-started/installation-and-deployment/tool-chaosblade-install-and-uninstall"},next:{title:"\u73af\u5883\u51c6\u5907",permalink:"/docs/next/getting-started/installation-and-deployment/environment-prepare"}},p={},s=[{value:"\u4e3b\u673a\u73af\u5883\u4e0b\u5b89\u88c5",id:"\u4e3b\u673a\u73af\u5883\u4e0b\u5b89\u88c5",level:2},{value:"\u81ea\u52a8\u5b89\u88c5\u63a2\u9488",id:"\u81ea\u52a8\u5b89\u88c5\u63a2\u9488",level:3},{value:"\u624b\u52a8\u5b89\u88c5\u63a2\u9488",id:"\u624b\u52a8\u5b89\u88c5\u63a2\u9488",level:3},{value:"Kubernetes\u73af\u5883\u4e0b\u5b89\u88c5",id:"kubernetes\u73af\u5883\u4e0b\u5b89\u88c5",level:2}],d={toc:s};function g(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u63a2\u9488\u4e3b\u8981\u4f5c\u4e3a\u5e73\u53f0\u7aef\u5efa\u8054\u3001\u547d\u4ee4\u4e0b\u53d1\u901a\u9053\u548c\u6570\u636e\u6536\u96c6\u7b49\u529f\u80fd\uff0c\u6240\u4ee5\u5982\u679c\u9700\u8981\u5bf9\u76ee\u6807\u96c6\u7fa4\u6216\u4e3b\u673a\u8fdb\u884c\u6f14\u7ec3\uff0c\u9700\u8981\u5728\u7aef\u4fa7\u7684\u76ee\u6807\u96c6\u7fa4\u6216\u4e3b\u673a\u4e0a\u5b89\u88c5\u63a2\u9488\uff0c\u4ee5\u4fbf\u5c06\u5e73\u53f0\u7f16\u6392\u597d\u7684\u6f14\u7ec3\u8f6c\u5316\u6210\u547d\u4ee4\uff0c\u4e0b\u53d1\u5230\u76ee\u6807\u673a\u5668\u4e0a\u3002"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/getting-started/installation-and-deployment/platform-box-install-and-uninstall"},"\u5b89\u88c5Box\u5e73\u53f0")," \u540e\uff0c\u8fdb\u5165Box\u4e3b\u9875\uff0c\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u63a2\u9488\u7ba1\u7406"),"\uff0c\u6839\u636e\u7aef\u4fa7\u73af\u5883\u9009\u62e9\u4e0d\u540c\u7684\u63a2\u9488\u5b89\u88c5\u65b9\u5f0f\n",(0,l.kt)("img",{alt:"image.png",src:n(9704).Z,width:"750",height:"229"})),(0,l.kt)("h2",{id:"\u4e3b\u673a\u73af\u5883\u4e0b\u5b89\u88c5"},"\u4e3b\u673a\u73af\u5883\u4e0b\u5b89\u88c5"),(0,l.kt)("h3",{id:"\u81ea\u52a8\u5b89\u88c5\u63a2\u9488"},"\u81ea\u52a8\u5b89\u88c5\u63a2\u9488"),(0,l.kt)("p",null,"\u5229\u7528\u81ea\u52a8\u5b89\u88c5\u63a2\u9488\uff0c\u9700\u8981\u5728\u5b89\u88c5Box\u5e73\u53f0\u65f6\u5df2\u6709",(0,l.kt)("a",{parentName:"p",href:"/docs/next/getting-started/installation-and-deployment/platform-box-install-and-uninstall/#%E7%AC%AC%E4%BA%8C%E6%AD%A5%E7%A1%AE%E4%BF%9D%E7%8E%AF%E5%A2%83%E8%83%BD%E8%87%AA%E5%8A%A8%E5%AE%89%E8%A3%85%E6%8E%A2%E9%92%88"},"\u81ea\u52a8\u5b89\u88c5\u63a2\u9488\u73af\u5883\u51c6\u5907"),"\uff0c\u5426\u5219\u65e0\u6cd5\u4f7f\u7528"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165",(0,l.kt)("strong",{parentName:"li"},"\u63a2\u9488\u7ba1\u7406"),"\u9875\u9762\u540e\uff0c\u70b9\u9009\u53f3\u4e0a\u89d2\u7684",(0,l.kt)("strong",{parentName:"li"},"\u81ea\u52a8\u5b89\u88c5\u63a2\u9488"),"\u6309\u94ae")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(7368).Z,width:"750",height:"191"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u6839\u636e\u662f\u5426\u5df2\u6709\u5e94\u7528\u540d\uff0c\u9009\u62e9",(0,l.kt)("strong",{parentName:"li"},"\u5df2\u6709\u5e94\u7528"),"\u548c",(0,l.kt)("strong",{parentName:"li"},"\u65b0\u589e\u5e94\u7528\uff0c"),"\u5e76\u586b\u5199\u76ee\u6807\u4e3b\u673a\u7684",(0,l.kt)("strong",{parentName:"li"},"IP\u5730\u5740"),"\u53caSSH\u767b\u9646\u7684",(0,l.kt)("strong",{parentName:"li"},"\u7528\u6237"),"\u548c",(0,l.kt)("strong",{parentName:"li"},"\u5bc6\u7801"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(9733).Z,width:"341",height:"233"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u6700\u540e\u70b9\u51fb\u5b89\u88c5\u5373\u53ef")),(0,l.kt)("h3",{id:"\u624b\u52a8\u5b89\u88c5\u63a2\u9488"},"\u624b\u52a8\u5b89\u88c5\u63a2\u9488"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165",(0,l.kt)("strong",{parentName:"li"},"\u63a2\u9488\u7ba1\u7406"),"\u9875\u9762\u540e\uff0c\u70b9\u9009\u53f3\u4e0a\u89d2\u7684",(0,l.kt)("strong",{parentName:"li"},"\u624b\u52a8\u5b89\u88c5\u63a2\u9488"),"\u6309\u94ae \u6216 \u9875\u9762\u4e2d\u7684",(0,l.kt)("strong",{parentName:"li"},"\u63a5\u5165\u63a2\u9488"),"\uff0c\u8fdb\u5165\u63a2\u9488\u5b89\u88c5\u6307\u5f15\u9875\u9762")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(2219).Z,width:"750",height:"186"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u4e3b\u673a"),"\uff0c\u8fdb\u5165\u4e3b\u673a\u624b\u52a8\u5b89\u88c5\u7684\u547d\u4ee4\u63d0\u793a\u9875\u9762")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(609).Z,width:"750",height:"208"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u590d\u5236\u547d\u4ee4\u63d0\u793a\u9875\u9762\u7684\u547d\u4ee4\uff0c\u5e76\u5c06\u5fc5\u8981\u53c2\u6570\u8fdb\u884c\u66ff\u6362\u540e\uff0c\u5728\u76ee\u6807\u4e3b\u673a\u4e0a\u6267\u884c\u5373\u53ef")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(9278).Z,width:"750",height:"213"}),"\n",(0,l.kt)("em",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u53c2\u6570\u540d")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5907\u6ce8")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"default")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u793a\u4f8b")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"p"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"chaos-default-app"),(0,l.kt)("td",{parentName:"tr",align:null},"my-test")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"g"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u5206\u7ec4\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"chaos-default-app-group"),(0,l.kt)("td",{parentName:"tr",align:null},"my-test-group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P"),(0,l.kt)("td",{parentName:"tr",align:null},"agent\u7aef\u53e3\u53f7"),(0,l.kt)("td",{parentName:"tr",align:null},"19527"),(0,l.kt)("td",{parentName:"tr",align:null},"19527")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"t"),(0,l.kt)("td",{parentName:"tr",align:null},"chaosblade-box\u7684ip:port"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"172.0.0.1:7001"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"kubernetes\u73af\u5883\u4e0b\u5b89\u88c5"},"Kubernetes\u73af\u5883\u4e0b\u5b89\u88c5"),(0,l.kt)("p",null,"Kubernetes\u73af\u5883\u4e0b\u53ea\u63d0\u4f9b\u624b\u52a8\u5b89\u88c5\u65b9\u5f0f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165",(0,l.kt)("strong",{parentName:"li"},"\u63a2\u9488\u7ba1\u7406"),"\u9875\u9762\u540e\uff0c\u70b9\u9009\u53f3\u4e0a\u89d2\u7684",(0,l.kt)("strong",{parentName:"li"},"\u624b\u52a8\u5b89\u88c5\u63a2\u9488"),"\u6309\u94ae \u6216 \u9875\u9762\u4e2d\u7684",(0,l.kt)("strong",{parentName:"li"},"\u63a5\u5165\u63a2\u9488"),"\uff0c\u8fdb\u5165\u63a2\u9488\u5b89\u88c5\u6307\u5f15\u9875\u9762")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(2219).Z,width:"750",height:"186"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u81ea\u5efaKubernetes"),"\uff0c\u8fdb\u5165\u4e3b\u673a\u624b\u52a8\u5b89\u88c5\u7684\u547d\u4ee4\u63d0\u793a\u9875\u9762")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(1804).Z,width:"750",height:"192"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u6839\u636e\u5b89\u88c5\u63d0\u793a\u9875\u9762\u4e0a\u7684\u6307\u5f15\uff0c\u5148\u4e0b\u8f7dChart\u5305\uff0c\u7136\u540e\u5229\u7528Helm\u8fdb\u884c\u5b89\u88c5")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(617).Z,width:"750",height:"322"}),"\n",(0,l.kt)("em",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u53c2\u6570\u540d")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5907\u6ce8")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"default")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u793a\u4f8b")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transport.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"chaosblade-box\u7684ip:port"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"127.0.0.1:7001"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controller.cluster_id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u88c5k8s\u96c6\u7fa4\u7684ID"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"abcdefg123hi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controller.cluster_name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u88c5k8s\u96c6\u7fa4\u7684name"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"test-cluster")))),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u9700\u8981\u5bf9\u8be5\u96c6\u7fa4\u8fdb\u884c\u6f14\u7ec3\uff0c\u5219\u9700\u8981\u518d\u5b89\u88c5chaosblade-operator\uff0c\u5177\u4f53\u53ef\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"/docs/next/getting-started/installation-and-deployment/tool-chaosblade-install-and-uninstall/#kubernetes%E7%8E%AF%E5%A2%83%E4%B8%8B%E5%AE%89%E8%A3%85"},"chaosblade-operator\u5b89\u88c5\u6307\u5f15"))))}g.isMDXComponent=!0},7368:function(t,e,n){e.Z=n.p+"assets/images/agent-auto-install-973bc689c375ddeb066f90fcee3105aa.png"},9733:function(t,e,n){e.Z=n.p+"assets/images/agent-install-app-7043d611147eea18311465ed0e73c629.png"},617:function(t,e,n){e.Z=n.p+"assets/images/agent-install-k8s-511b7eed03bc73ce16cc7f6112fc9894.png"},9278:function(t,e,n){e.Z=n.p+"assets/images/agent-install-linux-3dad4bae6731bf0994d96b7a52c793d6.png"},1804:function(t,e,n){e.Z=n.p+"assets/images/agent-install-list-k8s-b5f0b3bce7e58d42477b501dc4829e17.png"},609:function(t,e,n){e.Z=n.p+"assets/images/agent-install-list-1281d4a5c2e4e62dc68d4549cda7009a.png"},2219:function(t,e,n){e.Z=n.p+"assets/images/agent-install-manual-3b4f72d2d0fe0d8bc8b5a8034b3455a5.png"},9704:function(t,e,n){e.Z=n.p+"assets/images/agent-manager-eb61c2ad46dfda3ecd34551327f7b3b7.png"}}]);