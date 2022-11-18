"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[8431],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,g=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6221:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u88ab\u4f60\u8d28\u7591\u4ef7\u503c\u7684\u6df7\u6c8c\u5de5\u7a0b\uff0c\u963f\u91cc\u5df4\u5df4\u5df2\u843d\u5730\u5b9e\u8df5\u4e869\u5e74",author:"\u5f20\u4fca\u5b9d",tags:["chaosblade"],description:"\u6df7\u6c8c\u5de5\u7a0b\u4ef7\u503c\uff0c\u53ca\u5176\u5728\u963f\u91cc\u5df4\u5df4\u7684\u843d\u5730\u60c5\u51b5",hide_table_of_contents:!1},i=void 0,l={permalink:"/en/blog/2021/12/08/chaos-engineering-value",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/blog/2021-12-08-chaos-engineering-value.md",source:"@site/blog/2021-12-08-chaos-engineering-value.md",title:"\u88ab\u4f60\u8d28\u7591\u4ef7\u503c\u7684\u6df7\u6c8c\u5de5\u7a0b\uff0c\u963f\u91cc\u5df4\u5df4\u5df2\u843d\u5730\u5b9e\u8df5\u4e869\u5e74",description:"\u6df7\u6c8c\u5de5\u7a0b\u4ef7\u503c\uff0c\u53ca\u5176\u5728\u963f\u91cc\u5df4\u5df4\u7684\u843d\u5730\u60c5\u51b5",date:"2021-12-08T00:00:00.000Z",formattedDate:"December 8, 2021",tags:[{label:"chaosblade",permalink:"/en/blog/tags/chaosblade"}],readingTime:16.095,hasTruncateMarker:!0,authors:[{name:"\u5f20\u4fca\u5b9d"}],frontMatter:{title:"\u88ab\u4f60\u8d28\u7591\u4ef7\u503c\u7684\u6df7\u6c8c\u5de5\u7a0b\uff0c\u963f\u91cc\u5df4\u5df4\u5df2\u843d\u5730\u5b9e\u8df5\u4e869\u5e74",author:"\u5f20\u4fca\u5b9d",tags:["chaosblade"],description:"\u6df7\u6c8c\u5de5\u7a0b\u4ef7\u503c\uff0c\u53ca\u5176\u5728\u963f\u91cc\u5df4\u5df4\u7684\u843d\u5730\u60c5\u51b5",hide_table_of_contents:!1},prevItem:{title:"ChaosBlade, From the Chaos Engineering Experiment Tool to the Chaos Engineering Platform",permalink:"/en/blog/2022/03/03/ChaosBlade-From-the-Chaos-Engineering-Experiment-Tool-to-the-Chaos-Engineering-Platform"},nextItem:{title:"\u6691\u671f2021",permalink:"/en/blog/2021/06/06/summer-2021"}},c={authorsImageUrls:[void 0]},u=[],p={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8f6c\u81ea\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/jHopgbHmWCuF0JHv7Z7Erg"},"https://mp.weixin.qq.com/s/jHopgbHmWCuF0JHv7Z7Erg")),(0,o.kt)("p",null,"\u4e3a\u4ec0\u4e48\u963f\u91cc\u5df4\u5df4\u3001\u5de5\u5546\u94f6\u884c\u3001\u4e2d\u56fd\u79fb\u52a8\u3001\u534e\u6cf0\u8bc1\u5238\u2026\u2026\u90fd\u5728\u5173\u6ce8\u6df7\u6c8c\u5de5\u7a0b\uff1f"),(0,o.kt)("p",null,"\u81ea\u4ece Netflix \u5f00\u6e90 Chaos Monkey\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u56fd\u5185\u516c\u53f8\u770b\u5230\u4e86\u6df7\u6c8c\u5de5\u7a0b\u5728\u5efa\u7acb\u7cfb\u7edf\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4fe1\u5fc3\u7684\u80fd\u529b\uff0c\u5f00\u59cb\u5c1d\u8bd5\u901a\u8fc7\u6df7\u6c8c\u5de5\u7a0b\u63d0\u9ad8\u53ef\u9760\u6027\u3002\u963f\u91cc\u5df4\u5df4\u4f5c\u4e3a\u56fd\u5185\u8f83\u65e9\u5bf9\u5916\u8f93\u51fa\u6df7\u6c8c\u5de5\u7a0b\u80fd\u529b\u7684\u4f01\u4e1a\uff0c\u65e9\u5728 2012 \u5e74\u5c31\u5f00\u59cb\u5728\u7535\u5546\u4e1a\u52a1\u4e0a\uff0c\u5c1d\u8bd5\u901a\u8fc7\u6545\u969c\u6ce8\u5165\u6280\u672f\u53bb\u89e3\u51b3\u5fae\u670d\u52a1\u7684\u4f9d\u8d56\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u5e94\u7528\u5c42\u8ffd\u6c42\u66f4\u5168\u9762\u3001\u66f4\u4fbf\u5229\u3001\u66f4\u5feb\u6377\u7684\u670d\u52a1\uff0c\u5012\u903c\u6280\u672f\u5c42\u9762\u7cfb\u7edf\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u53ef\u4f9b\u89c2\u6d4b\u548c\u6301\u7eed\u7ef4\u62a4\u7684\u96be\u5ea6\u4e0d\u65ad\u52a0\u5927\uff0c\u9519\u7efc\u76f8\u8fde\u7684\u8f6f\u4ef6\u670d\u52a1\u8282\u70b9\u8d8a\u53d1\u4f9d\u8d56\u6280\u672f\u624b\u6bb5\u548c\u80fd\u529b\u3002\u968f\u7740\u5206\u5e03\u5f0f\u548c\u4e91\u539f\u751f\u6280\u672f\u6210\u4e3a\u4e3b\u6d41\u6280\u672f\u8d8b\u52bf\uff0c\u6df7\u6c8c\u5de5\u7a0b\u4e5f\u968f\u4e4b\u5907\u53d7\u5173\u6ce8\u3002\u7531\u4e8e\u6df7\u6c8c\u5de5\u7a0b\u81ea\u8eab\u7279\u6027\uff0c#\u96be\u4ee5\u91cf\u5316\u5ea6\u91cf\u51e0\u4e4e\u6210\u4e3a\u4e1a\u5185\u5171\u8bc6\uff0c\u4f46\u5bf9\u4e8e\u4f01\u4e1a\u6df7\u6c8c\u5de5\u7a0b\u5efa\u8bbe\u7684\u6210\u719f\u5ea6\uff0c\u4e5f\u9700\u8981\u63a2\u8ba8\u8861\u91cf\u6807\u51c6\u3002# "),(0,o.kt)("p",null,"\u5982\u4eca\uff0c\u968f\u7740\u4e2d\u56fd\u4fe1\u901a\u9662\u6210\u7acb\u4e86\u56fd\u5185\u9996\u4e2a\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c\u5ba4\uff0c\u6df7\u6c8c\u5de5\u7a0b\u5728\u56fd\u5185\u7684\u53d1\u5c55\u8d70\u5230\u4e86\u65b0\u9636\u6bb5\u3002\u4e3a\u6b64\uff0cInfoQ \u548c\u963f\u91cc\u4e91\u8d44\u6df1\u6280\u672f\u4e13\u5bb6\u4e2d\u4ead\uff0c\u804a\u4e86\u804a\u6df7\u6c8c\u5de5\u7a0b\u5728\u963f\u91cc\u5df4\u5df4\u7684\u6280\u672f\u5b9e\u8df5\u3002"))}s.isMDXComponent=!0}}]);