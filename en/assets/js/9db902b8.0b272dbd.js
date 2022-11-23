"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[7471],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=o,m=h["".concat(i,".").concat(d)]||h[d]||u[d]||r;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},311:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var n=a(7462),o=(a(7294),a(3905));const r={title:"\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0 ChaosBlade-Box \u65b0\u7248\u91cd\u78c5\u53d1\u5e03",authors:"camix",tags:["chaosblade"],description:"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0\u65b0\u7248\u672c\u529f\u80fd\u7279\u6027\u3002",hide_table_of_contents:!1},l=void 0,s={permalink:"/en/blog/2022/06/24/ChaosBlade-Box-new-release",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/blog/2022-06-24-ChaosBlade-Box-new-release.md",source:"@site/blog/2022-06-24-ChaosBlade-Box-new-release.md",title:"\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0 ChaosBlade-Box \u65b0\u7248\u91cd\u78c5\u53d1\u5e03",description:"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0\u65b0\u7248\u672c\u529f\u80fd\u7279\u6027\u3002",date:"2022-06-24T00:00:00.000Z",formattedDate:"June 24, 2022",tags:[{label:"chaosblade",permalink:"/en/blog/tags/chaosblade"}],readingTime:9.745,hasTruncateMarker:!0,authors:[{name:"\u8521\u94ed\u971e\uff08\u94ed\u5c11\uff0c@MandssS\uff09",title:"Maintainer of ChaosBlade",url:"https://github.com/MandssS",imageURL:"https://avatars.githubusercontent.com/u/13030286?v=4",key:"camix"}],frontMatter:{title:"\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0 ChaosBlade-Box \u65b0\u7248\u91cd\u78c5\u53d1\u5e03",authors:"camix",tags:["chaosblade"],description:"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0\u65b0\u7248\u672c\u529f\u80fd\u7279\u6027\u3002",hide_table_of_contents:!1},prevItem:{title:"ChaosBlade-Box, a New Version of the Chaos Engineering Platform Has Released",permalink:"/en/blog/2022/06/24/ChaosBlade-Box-a-New-Version-of-the-Chaos-Engineering-Platform-Has-Released"},nextItem:{title:"ChaosBlade, From the Chaos Engineering Experiment Tool to the Chaos Engineering Platform",permalink:"/en/blog/2022/03/03/ChaosBlade-From-the-Chaos-Engineering-Experiment-Tool-to-the-Chaos-Engineering-Platform"}},i={authorsImageUrls:[void 0]},p=[{value:"2.1 \u5e73\u53f0\u6574\u4f53\u4ecb\u7ecd",id:"21-\u5e73\u53f0\u6574\u4f53\u4ecb\u7ecd",level:2},{value:"2.2 \u65b0\u7248\u6f14\u7ec3\u6d41\u7a0b",id:"22-\u65b0\u7248\u6f14\u7ec3\u6d41\u7a0b",level:2},{value:"4.1 ChaosBlade-Box\u529f\u80fd\u5347\u7ea7",id:"41-chaosblade-box\u529f\u80fd\u5347\u7ea7",level:2},{value:"4.2 Agent\uff08\u63a2\u9488\uff09\u529f\u80fd\u5347\u7ea7",id:"42-agent\u63a2\u9488\u529f\u80fd\u5347\u7ea7",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image.png",src:a(7079).Z,width:"1768",height:"274"})),(0,o.kt)("h1",{id:"1-\u524d\u8a00"},"1. \u524d\u8a00"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ChaosBlade-Box\u662f\u4ec0\u4e48\uff1f"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"ChaosBlade-Box\u662f\u9762\u5411\u591a\u96c6\u7fa4\u3001\u591a\u8bed\u8a00\u3001\u591a\u73af\u5883\uff0c\u963f\u91cc\u5f00\u6e90\u7684\u4e91\u539f\u751f\u6df7\u6c8c\u5de5\u7a0b\u63a7\u5236\u53f0\u3002\u4e3b\u8981\u529f\u80fd\u6709\uff1a\u7edf\u4e00\u6df7\u6c8c\u5b9e\u9a8c\u7528\u6237\u754c\u9762\u3001\u6df7\u6c8c\u5de5\u7a0b\u5de5\u5177\u90e8\u7f72\uff08ChaosBlade\u3001LitmusChaos...\uff09\u3001\u652f\u6301\u5b9e\u9a8c\u573a\u666f\u7ba1\u7406\u548c\u591a\u7ef4\u5ea6\u5b9e\u9a8c\u7b49\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ChaosBlade\u662f\u4ec0\u4e48\uff1f"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"ChaosBlade\u662f\u9075\u5faa\u5b9e\u9a8c\u6a21\u578b\u3001\u7b80\u5355\u6613\u7528\u3001\u529f\u80fd\u5f3a\u5927\u7684\uff0c\u963f\u91cc\u5f00\u6e90\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c\u5de5\u5177\u3002\u652f\u6301\u591a\u5e73\u53f0\u3001\u591a\u8bed\u8a00\u73af\u5883\uff0c\u652f\u6301\u4ece \u4e3b\u673a\u7cfb\u7edf-> \u5bb9\u5668 -> k8s\u96c6\u7fa4 -> \u5e38\u7528\u7ec4\u4ef6\uff08ElasticSearch\\Redis\\Mysql...\uff09 -> \u5e94\u7528 \uff08Java\\Golang\\C++\\NodeJS...\uff09\u7b49200\u591a\u4e2a\u6f14\u7ec3\u573a\u666f\uff0c3000\u591a\u4e2a\u53c2\u6570\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6df7\u6c8c\u5de5\u7a0b\u662f\u4ec0\u4e48\uff1f"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u6df7\u6c8c\u5de5\u7a0b\uff08Chaos Engineering\uff09\u662f\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e0a\u8fdb\u884c\u5b9e\u9a8c\u7684\u5b66\u79d1\uff0c\u901a\u8fc7\u4e3b\u52a8\u6ce8\u5165\u6545\u969c\u7684\u65b9\u5f0f\uff0c\u63d0\u524d\u53d1\u73b0\u7cfb\u7edf\u7684\u8584\u5f31\u70b9\uff0c\u63a8\u8fdb\u67b6\u6784\u7684\u6539\u8fdb\uff0c\u6700\u7ec8\u5b9e\u73b0\u4e1a\u52a1\u97e7\u6027")))),(0,o.kt)("p",null,"2021\u5e74\u8d77\u8fdb\u5165\u6df7\u6c8c\u5de5\u7a0b\u5143\u5e74\uff0c\u5404\u5927\u516c\u53f8\u7eb7\u7eb7\u5173\u6ce8\u5e76\u6295\u5165\u5230\u6df7\u6c8c\u5de5\u7a0b\u7684\u7814\u53d1\u5f53\u4e2d\u3002\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u6df7\u6c8c\u5de5\u7a0b\u5de5\u5177ChaosBlade\u6b63\u5f0f\u6210\u4e3aCNCF Sandbox\u9879\u76ee\u3002\u4e3a\u5e2e\u52a9\u5f00\u6e90\u7528\u6237\u66f4\u597d\u5730\u843d\u5730\u6df7\u6c8c\u5de5\u7a0b\uff0c\u53d1\u5e03\u65b0\u7248ChaosBlade-Box\uff0c\u4ee5\u4e0b\u4e3b\u8981\u4ecb\u7ecd\u6b64\u6b21\u53d1\u5e03\u65b0\u7248\u672c\u7684\u529f\u80fd\u53ca\u7279\u6027\u3002"),(0,o.kt)("h1",{id:"2-\u65b0\u7248chaosblade-box\u4ecb\u7ecd"},"2. \u65b0\u7248ChaosBlade-Box\u4ecb\u7ecd"),(0,o.kt)("p",null,"ChaosBlade-Box\u65e8\u5728\u5efa\u8bbe\u7edf\u4e00\u7684\u6df7\u6c8c\u5de5\u7a0b\u64cd\u4f5c\u5e73\u53f0\uff0c\u4ece\u53d1\u5e03\u4ee5\u6765\uff0c\u53d7\u5230\u4e86\u5f00\u6e90\u793e\u533a\u7684\u5e7f\u6cdb\u5173\u6ce8\u3002\u4f46\u4e5f\u5b58\u5728\u4ee5\u4e0b\u51e0\u4e2a\u95ee\u9898"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u793e\u533a\u7248\u5bf9\u4e8ek8s\u96c6\u7fa4\u4e0a\u6f14\u7ec3\u7684\u652f\u6301\u4e0d\u8db3\uff0c\u4e3b\u8981\u8868\u73b0\u4e3a\u65e0\u6cd5\u81ea\u52a8\u83b7\u53d6\u96c6\u7fa4\u76f8\u5173\u6570\u636e\u6765\u8fdb\u884c\u6f14\u7ec3\u5e94\u7528\u9009\u62e9\u3001\u6f14\u7ec3\u6b65\u9aa4\u7e41\u7410\u9700\u8981\u624b\u52a8\u586b\u5145\u96c6\u7fa4\u914d\u7f6e\u4fe1\u606f\u6765\u5b9a\u4f4d\u96c6\u7fa4\u7b49\uff0c\u5bfc\u81f4\u7528\u6237\u4f7f\u7528\u4e0d\u591f\u4fbf\u6377"),(0,o.kt)("li",{parentName:"ul"},"\u793e\u533a\u7248\u65e0\u6cd5\u6ee1\u8db3\u56fd\u9645\u5f00\u6e90\u793e\u533a\u540c\u5b66\u7684\u4f7f\u7528\uff0c\u4e5f\u5bf9\u63a2\u9488\u7684\u7ba1\u63a7\u80fd\u529b\u4e0d\u8db3"),(0,o.kt)("li",{parentName:"ul"},"\u793e\u533a\u7248\u548c\u4f01\u4e1a\u7248\u8f83\u4e3a\u5272\u88c2\uff0c\u8fd9\u4f7f\u5f97\u7528\u6237\u4f53\u9a8c\u5927\u5927\u964d\u4f4e\uff0c\u4e5f\u4f7f\u5f97\u5f00\u6e90\u7528\u6237\u540e\u7eed\u8f6c\u5411\u4f01\u4e1a\u7248\uff0c\u5b58\u5728\u8f83\u5927\u7684\u8fc1\u79fb\u6210\u672c\uff0c\u8fd9\u91cc\u4e0d\u6b62\u662f\u6570\u636e\u8fc1\u79fb\u6210\u672c\uff0c\u8fd8\u5b58\u5728\u64cd\u4f5c\u4e60\u60ef\u4e0a\u7684\u8fc1\u79fb\u6210\u672c")),(0,o.kt)("p",null,"\u5c31\u4ee5\u4e0a\u95ee\u9898\uff0c\u5bf9ChaosBlade-Box\u53caAgent\u8fdb\u884c\u4e00\u6b21\u5927\u7684\u6539\u7248\uff0c\u5c06\u793e\u533a\u7248\u4e0e\u4f01\u4e1a\u7248\u5185\u6838\u8fdb\u884c\u878d\u5408\uff0c\u7edf\u4e00\u7528\u6237\u64cd\u4f5c\u4e60\u60ef\uff0c\u5347\u7ea7\u793e\u533a\u7248\u7cfb\u7edf\u67b6\u6784\uff0c\u5e76\u589e\u5f3a\u5176\u7ec4\u4ef6\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"21-\u5e73\u53f0\u6574\u4f53\u4ecb\u7ecd"},"2.1 \u5e73\u53f0\u6574\u4f53\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u65b0\u7248ChaosBlade-Box\u63a7\u5236\u53f0\u662f\u4e00\u4e2a\u9762\u5411\u591a\u96c6\u7fa4\u3001\u591a\u73af\u5883\u3001\u591a\u8bed\u8a00\u7684\u4e91\u539f\u751f\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0\u3002\u652f\u6301\u56fd\u9645\u5316\u4e2d\u82f1\u6587\u5207\u6362\uff0c\u652f\u6301\u5168\u5c40\u547d\u540d\u7a7a\u95f4\uff0c\u4f7f\u5f97\u540c\u4e00\u7528\u6237\u53ef\u6839\u636e\u81ea\u5df1\u9700\u6c42\uff0c\u8bbe\u7f6e\u4e0d\u540c\u7684\u5168\u5c40\u547d\u540d\u7a7a\u95f4\uff0c\u5982\uff1a\u6d4b\u8bd5\u7a7a\u95f4\u3001\u6c99\u76d2\u7a7a\u95f4\u548c\u7ebf\u4e0a\u7a7a\u95f4\u7b49\u3002\u63d0\u4f9b\u81ea\u52a8\u5316\u7684\u5de5\u5177\u90e8\u7f72\uff0c\u7b80\u5316\u5de5\u5177\u5b89\u88c5\u6b65\u9aa4\uff0c\u63d0\u9ad8\u6267\u884c\u6548\u7387\u3002\u5e73\u53f0\u652f\u6301\u4e0d\u540c\u73af\u5883\u7684\u63a2\u9488\u5b89\u88c5\u548c\u6f14\u7ec3\uff0c\u5982\u4e3b\u673a\u548cKubernetes\uff0c\u5176\u4e2dKubernetes\u73af\u5883\u4e0b\u652f\u6301 Node\u3001Pod\u3001Container\u7ef4\u5ea6\u4e0b\u7684\u6f14\u7ec3\u3002\u5728Kubernetes\u73af\u5883\u4e0b\u4f1a\u81ea\u52a8\u6536\u96c6\u96c6\u7fa4\u5185\u7684Pod\u76f8\u5173\u6570\u636e\uff0c\u5e76\u5728\u5e94\u7528\u7ba1\u7406\u4e2d\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff0c\u8fd9\u6837\u7b80\u5316\u7528\u6237\u6f14\u7ec3\u67e5\u8be2\u6b65\u9aa4\uff0c\u65e0\u9700\u53bb\u96c6\u7fa4\u5185\u67e5\u770b\u8981\u6f14\u7ec3\u5e94\u7528\u7684Pod\u540d\u6216Container\u540d\u3002\u5e76\u652f\u6301\u4e00\u952e\u8fc1\u79fb\u5230\u4f01\u4e1a\u7248\uff0c\u6309\u9700\u5c06\u793e\u533a\u7248\u7684\u6f14\u7ec3\u6570\u636e\u540c\u6b65\u5230\u4f01\u4e1a\u7248\u3002\n",(0,o.kt)("img",{alt:"image.png",src:a(2520).Z,width:"2720",height:"1474"})),(0,o.kt)("h2",{id:"22-\u65b0\u7248\u6f14\u7ec3\u6d41\u7a0b"},"2.2 \u65b0\u7248\u6f14\u7ec3\u6d41\u7a0b"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u5728\u65b0\u7248ChaosBlade-Box\u5e73\u53f0\u4e0a\u8fdb\u884c\u4e00\u6b21\u6f14\u7ec3\u7684\u5168\u8fc7\u7a0b\uff0c\u652f\u6301\u987a\u5e8f\u6267\u884c\u3001\u9636\u6bb5\u6267\u884c\u4e24\u79cd\u6d41\u7a0b\u7f16\u6392\uff0c\u987a\u5e8f\u6267\u884c\u6307\u7684\u662f\u591a\u4e2a\u6f14\u7ec3\u573a\u666f\u4f9d\u6b21\u751f\u6548\uff0c\u9636\u6bb5\u6267\u884c\u6307\u7684\u662f\u591a\u4e2a\u6f14\u7ec3\u573a\u666f\u540c\u65f6\u751f\u6548\u3002\u901a\u8fc7\u591a\u79cd\u5b89\u5168\u7b56\u7565\u4fdd\u8bc1\u6f14\u7ec3\u5f97\u5230\u6062\u590d\uff0c\u5982\u624b\u52a8\u89e6\u53d1\u548c\u81ea\u52a8\u505c\u6b62\uff0c\u81ea\u52a8\u505c\u6b62\u901a\u8fc7\u5728\u6f14\u7ec3\u914d\u7f6e\u7684\u65f6\u5019\u8bbe\u7f6e\u8d85\u65f6\u53c2\u6570\u6765\u8fdb\u884c\u914d\u7f6e\uff0c\u8fd9\u6837\u5373\u4fbf\u5e73\u53f0\u548c\u63a2\u9488\uff08Agent\uff09\u5931\u8054\uff0c\u65e0\u6cd5\u8fdb\u884c\u624b\u52a8\u505c\u6b62\u65f6\uff0c\u4e5f\u80fd\u5728\u8d85\u65f6\u65f6\u95f4\u5230\u8fbe\u7684\u65f6\u5019\uff0c\u81ea\u52a8\u6062\u590d\u6545\u969c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image.png",src:a(482).Z,width:"1320",height:"689"}),"\n",(0,o.kt)("img",{alt:"image.png",src:a(6669).Z,width:"1302",height:"678"})),(0,o.kt)("h1",{id:"3--\u67b6\u6784\u4ecb\u7ecd"},"3.  \u67b6\u6784\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u4e0b\u56fe\u8bf4\u660e\u4e86\u65b0\u7248\u672cChaosBlade\u7684\u7cfb\u7edf\u67b6\u6784\u53ca\u5176\u7ec4\u4ef6\u529f\u80fd\uff1a\n",(0,o.kt)("img",{alt:"image.png",src:a(8460).Z,width:"2434",height:"1964"}),"\n",(0,o.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ChaosBlade-Box Console: \u6df7\u6c8c\u5de5\u7a0b\u63a7\u5236\u53f0\u524d\u7aef\uff0c\u8d1f\u8d23\u524d\u7aef\u754c\u9762\u4ea4\u4e92"),(0,o.kt)("li",{parentName:"ul"},"ChaosBlade-Box Server: \u6df7\u6c8c\u5de5\u7a0b\u63a7\u5236\u53f0\u670d\u52a1\u7aef\uff0c\u4e3b\u8981\u63d0\u4f9b\u6f14\u7ec3\u7f16\u6392\u3001\u573a\u666f\u7ba1\u7406\u3001\u6f14\u7ec3\u5de5\u5177\u6258\u7ba1\u548c\u4e00\u952e\u8fc1\u79fb\u7b49\u529f\u80fd"),(0,o.kt)("li",{parentName:"ul"},"Agent: \u6df7\u6c8c\u5de5\u7a0b\u63a2\u9488\uff0c\u4e3b\u8981\u7528\u4e8e\u6570\u636e\u6536\u96c6\u548c\u6f14\u7ec3\u547d\u4ee4\u4e0b\u53d1\u6267\u884c"),(0,o.kt)("li",{parentName:"ul"},"ChaosBlade: \u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c\u5de5\u5177\uff0c\u652f\u6301\u4e3b\u673a\u3001docker\u548ck8s\u7b49\u4e0d\u540c\u7684\u73af\u5883")),(0,o.kt)("h1",{id:"4-\u65b0\u7248\u4f18\u52bf"},"4. \u65b0\u7248\u4f18\u52bf"),(0,o.kt)("h2",{id:"41-chaosblade-box\u529f\u80fd\u5347\u7ea7"},"4.1 ChaosBlade-Box\u529f\u80fd\u5347\u7ea7"),(0,o.kt)("p",null,"\u65b0\u7248\u793e\u533a\u7248\u7684\u63a7\u5236\u53f0\u76f8\u8f83\u4e8e\u8001\u7248\u63a7\u5236\u53f0\uff0c\u6709\u4ee5\u4e0b\u7684\u529f\u80fd\u5347\u7ea7\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1\uff09\u56fd\u9645\u5316"),"\n\u652f\u6301\u56fd\u9645\u5316\u7684\u4e2d\u82f1\u6587\u5207\u6362"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2\uff09\u547d\u540d\u7a7a\u95f4\u5207\u6362"),"\n\u652f\u6301\u5168\u5c40\u7684\u7a7a\u95f4\u5207\u6362\uff0c\u4f7f\u5f97\u540c\u4e00\u7528\u6237\u53ef\u6839\u636e\u81ea\u5df1\u9700\u6c42\uff0c\u8bbe\u7f6e\u4e0d\u540c\u7684\u5168\u5c40\u547d\u540d\u7a7a\u95f4\uff0c\u5982\uff1a\u6d4b\u8bd5\u7a7a\u95f4\u3001\u6c99\u76d2\u7a7a\u95f4\u548c\u7ebf\u4e0a\u7a7a\u95f4\u7b49"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3\uff09\u66f4\u4e3a\u6d41\u7545\u7684\u6f14\u7ec3\u7f16\u6392"),"\n\u6d41\u7545\u7f16\u6392\u548c\u4f01\u4e1a\u7248\u7684\u6f14\u7ec3\u6d41\u7a0b\u7f16\u6392\u4fdd\u6301\u4e00\u81f4\uff0c\u652f\u6301\u540c\u65f6\u591a\u4e2a\u6545\u969c\u6f14\u7ec3\u7684\u5e76\u884c\u6216\u4e32\u884c\u7684\u6f14\u7ec3\u6d41\u7a0b"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4\uff09\u5b8c\u5584\u7684\u5e94\u7528\u7ba1\u7406"),"\n\u63d0\u4f9b\u4e86\u66f4\u4e3a\u5b8c\u5584\u7684\u5e94\u7528\u7ba1\u7406\u529f\u80fd\uff0c\u540c\u65f6\u652f\u6301\u5728\u4e3b\u673a\u548ck8s\u73af\u5883\u4e0b\u90e8\u7f72\u7684\u5e94\u7528\uff0c\u5305\u62ec\u4e86\uff1a\u5e94\u7528\u6982\u89c8\u3001\u673a\u5668\u5217\u8868\u3001\u6f14\u7ec3\u8bb0\u5f55\u548c\u5e94\u7528\u914d\u7f6e\u7b49\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5\uff09\u65e0\u7f1d\u8fc1\u79fb"),"\n\u4e0e\u4f01\u4e1a\u7248\u7684\u64cd\u4f5c\u754c\u9762\u4fdd\u6301\u4e00\u81f4\uff0c\u5e76\u63d0\u4f9b\u4e86\u4e00\u952e\u8fc1\u79fb\u529f\u80fd\uff0c\u80fd\u5c06\u63a2\u9488\u81ea\u52a8\u66ff\u6362\u6210\u516c\u6709\u4e91\u63a2\u9488\uff0c\u5c06\u6f14\u7ec3\u673a\u5668\u6ce8\u518c\u5230\u4f01\u4e1a\u7248\u4e2d\uff0c\u5e76\u5c06\u6f14\u7ec3\u6570\u636e\u540c\u6b65\u5230\u4f01\u4e1a\u7248\u3002\u8f7b\u677e\u7b80\u5355\u5207\u6362\u5230\u4f01\u4e1a\u7248\u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6\uff09\u5b89\u5168"),"\n\u591a\u79cd\u6545\u969c\u6062\u590d\u7b56\u7565\uff0c\u4fdd\u8bc1\u4e0b\u53d1\u6f14\u7ec3\u53ef\u6062\u590d"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7\uff09\u591a\u73af\u5883\u90e8\u7f72"),"\n\u652f\u6301\u4e0d\u540c\u73af\u5883\u4e0b\u7684\u90e8\u7f72\u65b9\u5f0f\uff0c\u5305\u62ec\u4e3b\u673a\u3001docker\u3001k8s\u7b49"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8\uff09\u5c42\u6b21\u5206\u660e\u7684\u6f14\u7ec3\u573a\u666f"),"\n\u5bf9\u6f14\u7ec3\u573a\u666f\u8fdb\u884c\u5206\u7c7b\u5c55\u793a\uff0c\u5728\u521b\u5efa\u6f14\u7ec3\u65f6\uff0c\u4f1a\u6839\u636e\u9009\u5b9a\u6f14\u7ec3\u76ee\u6807\u4e0d\u540c\uff0c\u800c\u5b9e\u65f6\u5c55\u793a\u4e0d\u540c\u5206\u7c7b\u5c55\u793a\u7684\u53ef\u6f14\u7ec3\u573a\u666f"),(0,o.kt)("h2",{id:"42-agent\u63a2\u9488\u529f\u80fd\u5347\u7ea7"},"4.2 Agent\uff08\u63a2\u9488\uff09\u529f\u80fd\u5347\u7ea7"),(0,o.kt)("p",null,"\u65b0\u7248\u672c\u63a2\u9488\uff08Agent\uff09\u76f8\u8f83\u4e8e\u8001\u7248\u672c\uff0c\u6709\u4e86\u8f83\u4e3a\u591a \u7684\u529f\u80fd\u63d0\u5347\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1\uff09\u652f\u6301\u4e0d\u540c\u73af\u5883\u6f14\u7ec3\u901a\u9053"),"\n\u652f\u6301\u5728\u4e0d\u540c\u73af\u5883\u4f5c\u4e3a\u6f14\u7ec3\u547d\u4ee4\u4e0b\u53d1\u901a\u9053\uff0c\u7b80\u5316\u4e86\u8001\u7248\u5728k8s\u73af\u5883\u4e0b\uff0c\u9700\u8981\u6307\u5b9a\u96c6\u7fa4\u7684kubeconfig\u6765\u8fdb\u884c\u6f14\u7ec3"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2\uff09\u66f4\u4e3a\u5b8c\u5584\u7684API"),"\n\u7edf\u4e00\u4e86\u63a2\u9488\u5bf9\u5916API\u63a5\u53e3\uff0c\u65b9\u4fbf\u6269\u5c55\u4e0e\u5bf9\u63a5"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3\uff09\u6570\u636e\u81ea\u52a8\u6536\u96c6\u5e76\u4e0a\u62a5"),"\n\u65b0\u589e\u5728k8s\u73af\u5883\u4e0b\uff0c\u5c06k8s\u76f8\u5173\u6570\u636e\u8fdb\u884c\u4e0a\u62a5\u5230\u63a7\u5236\u53f0\u7684\u670d\u52a1\u7aef\uff0c\u7528\u4e8e\u5728k8s\u73af\u5883\u4e0b\uff0c\u65b9\u4fbf\u7528\u6237\u9009\u62e9\u6f14\u7ec3\u76ee\u6807"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4\uff09\u63a2\u9488\u81ea\u52a8\u5378\u8f7d"),"\n\u65b0\u589e\u4e86\u63a2\u9488\u81ea\u52a8\u5378\u8f7d\u63a5\u53e3\uff0c\u76f4\u63a5\u5728\u63a7\u5236\u53f0\u76f4\u63a5\u63a7\u5236\u63a2\u9488\u5b89\u88c5\u4e0e\u5378\u8f7d"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5\uff09\u6301\u7eed\u4fdd\u6d3b"),"\n\u589e\u52a0\u63a2\u6d3b\u811a\u672c\uff0c\u4fdd\u969c\u63a2\u9488\u8fdb\u7a0b\u6301\u7eed\u5b58\u6d3b"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6\uff09\u591a\u73af\u5883\u90e8\u7f72"),"\n\u652f\u6301\u4e0d\u540c\u73af\u5883\u4e0b\u7684\u90e8\u7f72\u65b9\u5f0f\uff0c\u5305\u62ec\u4e3b\u673a\u3001docker\u3001k8s\u7b49"),(0,o.kt)("h1",{id:"5-\u603b\u7ed3"},"5. \u603b\u7ed3"),(0,o.kt)("p",null,"\u6df7\u6c8c\u5de5\u7a0b -- \u4fdd\u969c\u7cfb\u7edf\u9ad8\u53ef\u7528\u7684\u624b\u6bb5\u4e4b\u4e00\uff0cChaosBlade\u4f5c\u4e3a\u56fd\u5185\u7b2c\u4e00\u5bb6\u5f00\u6e90\u7684\u6df7\u6c8c\u5de5\u7a0b\u5de5\u5177\uff0c\u5f97\u5230\u4e86\u5e7f\u6cdb\u5e94\u7528\uff0c\u57282021\u5e74\u5f00\u6e90ChaosBlade-Box\uff08\u6df7\u6c8c\u5de5\u7a0b\u63a7\u5236\u53f0\uff09\uff0c\u65e8\u5728\u52a9\u529b\u793e\u533a\u7248\u6df7\u6c8c\u5de5\u7a0b\u843d\u5730\uff0c\u7eb3\u7ba1\u4e0d\u540c\u5f00\u6e90\u7684\u6545\u969c\u6ce8\u5165\u5de5\u5177\uff0c\u5efa\u8bbe\u7edf\u4e00\u7684\u6df7\u6c8c\u5de5\u7a0b\u64cd\u4f5c\u5e73\u53f0\u3002\u6b64\u6b21\u65b0\u7684\u7248\u672c\u65e0\u8bba\u662f\u5728\u7528\u6237\u754c\u9762\u7684\u4f7f\u7528\u4e0a\uff0c\u8fd8\u662f\u529f\u80fd\u5b9e\u73b0\u4e0a\u90fd\u6709\u5f88\u591a\u7684\u63d0\u5347\uff0c\u8ba9\u7528\u6237\u66f4\u7b80\u5355\u3001\u66f4\u65b9\u4fbf\u7684\u4f7f\u7528\uff0c\u5e76\u843d\u5730\u6df7\u6c8c\u5de5\u7a0b\u3002"),(0,o.kt)("h1",{id:"6-\u63a8\u8350\u793e\u533a"},"6. \u63a8\u8350\u793e\u533a"),(0,o.kt)("p",null,"[1]"," chaosblade-box: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-box"},"https://github.com/chaosblade-io/chaosblade-box"),"\n","[2]"," chaosblade-box-agent: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-box-agent"},"https://github.com/chaosblade-io/chaosblade-box-agent"),"\n","[3]"," chaosblade: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-box"},"https://github.com/chaosblade-io/chaosblade")),(0,o.kt)("p",null,"\u6b22\u8fce\u9489\u9489\u641c\u7d22\u7fa4\u53f7 23177705 \u52a0\u5165 CNCF chaosblade \u793e\u533a\u4ea4\u6d41\u9489\u7fa4\uff01"))}u.isMDXComponent=!0},2520:function(e,t,a){t.Z=a.p+"assets/images/chaosblade-box-overview-46755b6543ba912a3cc9eca17339071c.png"},6669:function(e,t,a){t.Z=a.p+"assets/images/chaosblade-box-result-dac16a602c9f1a570443bb747afb2c56.png"},482:function(e,t,a){t.Z=a.p+"assets/images/chaosblade-box-workflow-dbbb2c3a557e6ff914a2d01dd56386fb.png"},7079:function(e,t,a){t.Z=a.p+"assets/images/logo-9bd69360af7a8fdb451b8de390c28c09.png"},8460:function(e,t,a){t.Z=a.p+"assets/images/overall-architecture-7e874671c3f84bc5392272edad1453dc.png"}}]);