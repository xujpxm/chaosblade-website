"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[6098],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=m(n),d=a,f=s["".concat(i,".").concat(d)]||s[d]||p[d]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var m=2;m<o;m++)c[m]=n[m];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var r=n(3117),a=(n(7294),n(3905));const o={id:"blade create mem load"},c="\u6a21\u62df\u5185\u5b58\u5360\u7528\u5b9e\u9a8c",l={unversionedId:"experiment-types/host/blade create mem load",id:"version-1.7.0/experiment-types/host/blade create mem load",title:"\u6a21\u62df\u5185\u5b58\u5360\u7528\u5b9e\u9a8c",description:"\u5185\u5b58\u5360\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.0/experiment-types/host/blade_create_mem_load.md",sourceDirName:"experiment-types/host",slug:"/experiment-types/host/blade create mem load",permalink:"/docs/experiment-types/host/blade create mem load",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/versioned_docs/version-1.7.0/experiment-types/host/blade_create_mem_load.md",tags:[],version:"1.7.0",frontMatter:{id:"blade create mem load"}},i={},m=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u5e38\u89c1\u9519\u8bef",id:"\u5e38\u89c1\u9519\u8bef",level:2}],u={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6a21\u62df\u5185\u5b58\u5360\u7528\u5b9e\u9a8c"},"\u6a21\u62df\u5185\u5b58\u5360\u7528\u5b9e\u9a8c"),(0,a.kt)("p",null,"\u5185\u5b58\u5360\u7528"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u6307\u5b9a\u5185\u5b58\u5360\u7528\uff0c\u6ce8\u610f\uff0c\u6b64\u573a\u666f\u89e6\u53d1\u5185\u5b58\u5360\u7528\u6ee1\uff0c\u5373\u4f7f\u6307\u5b9a\u4e86 --timeout \u53c2\u6570\uff0c\u4e5f\u53ef\u80fd\u51fa\u73b0\u901a\u8fc7 blade \u5de5\u5177\u65e0\u6cd5\u6062\u590d\u7684\u60c5\u51b5\uff0c\u53ef\u901a\u8fc7\u91cd\u542f\u673a\u5668\u89e3\u51b3\uff01\uff01\uff01\u63a8\u8350\u6307\u5b9a\u5185\u5b58\u767e\u5206\u6bd4\uff01"),(0,a.kt)("p",null,"\u7531\u4e8e\u76ee\u524d\u5185\u5b58\u5927\u5c0f\u8ba1\u7b97\u901a\u8fc7 memory.stat \u7b49\u6587\u4ef6\u8ba1\u7b97\uff0c\u6240\u4ee5\u548c free \u547d\u4ee4\u8ba1\u7b97\u4e0d\u4e00\u81f4\uff0c\u540c top \u547d\u4ee4\u4e00\u81f4\uff0c\u9a8c\u8bc1\u65f6\u8bf7\u4f7f\u7528 top \u547d\u4ee4\u67e5\u770b\u5185\u5b58\u4f7f\u7528\u3002\u540e\u7eed\u4f1a\u9488\u5bf9\u5185\u5b58\u5360\u7528\u573a\u666f\u8fdb\u884c\u4f18\u5316\u3002"),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"--mem-percent string    \u5185\u5b58\u4f7f\u7528\u7387\uff0c\u53d6\u503c\u662f 0 \u5230 100 \u7684\u6574\u6570\n--mode string   \u5185\u5b58\u5360\u7528\u6a21\u5f0f\uff0c\u6709 ram \u548c cache \u4e24\u79cd\uff0c\u4f8b\u5982 --mode ram\u3002ram \u91c7\u7528\u4ee3\u7801\u5b9e\u73b0\uff0c\u53ef\u63a7\u5236\u5360\u7528\u901f\u7387\uff0c\u4f18\u5148\u63a8\u8350\u6b64\u6a21\u5f0f\uff1bcache \u662f\u901a\u8fc7\u6302\u8f7dtmpfs\u5b9e\u73b0\uff1b\u9ed8\u8ba4\u503c\u662f --mode cache\n--reserve string    \u4fdd\u7559\u5185\u5b58\u7684\u5927\u5c0f\uff0c\u5355\u4f4d\u662fMB\uff0c\u5982\u679c mem-percent \u53c2\u6570\u5b58\u5728\uff0c\u5219\u4f18\u5148\u4f7f\u7528 mem-percent \u53c2\u6570\n--rate string \u5185\u5b58\u5360\u7528\u901f\u7387\uff0c\u5355\u4f4d\u662f MB/S\uff0c\u4ec5\u5728 --mode ram \u65f6\u751f\u6548\n--timeout string   \u8bbe\u5b9a\u8fd0\u884c\u65f6\u957f\uff0c\u5355\u4f4d\u662f\u79d2\uff0c\u901a\u7528\u53c2\u6570\n")),(0,a.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"# \u5728\u6267\u884c\u547d\u4ee4\u4e4b\u524d\uff0c\u5148\u4f7f\u7528 top \u547d\u4ee4\u67e5\u770b\u5185\u5b58\u4f7f\u7528\u4fe1\u606f\uff0c\u5982\u4e0b\uff0c\u603b\u5185\u5b58\u5927\u5c0f\u662f 8G\uff0c\u4f7f\u7528\u4e86 7.6%\nKiB Mem :  7.6/8010196  \n\n# \u6267\u884c\u5185\u5b58\u5360\u7528 50%\nblade c mem load --mode ram --mem-percent 50\n\n# \u67e5\u770b\u5185\u5b58\u4f7f\u7528\nKiB Mem : 50.0/8010196 \n\n# \u6267\u884c\u5185\u5b58\u5360\u7528 100%\nKiB Mem : 99.6/8010196\n\n# \u4fdd\u7559 200M \u5185\u5b58\uff0c\u603b\u5185\u5b58\u5927\u5c0f 1G\nblade c mem load --mode ram --reserve 200 --rate 100\nKiB Mem :  1014744 total,    78368 free,   663660 used,   272716 buff/cache\nKiB Swap:        0 total,        0 free,        0 used.   209652 avail Mem\nKiB Mem : 79.7/1014744  [||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||                   ]\n")),(0,a.kt)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,a.kt)("p",null,"ram \u6a21\u5f0f\u91c7\u7528\u4ee3\u7801\u7533\u8bf7\u5185\u5b58\u5b9e\u73b0\ncache \u6a21\u5f0f\u91c7\u7528 dd\u3001mount \u547d\u4ee4\u5b9e\u73b0\uff0c\u6302\u8f7d tmpfs \u5e76\u4e14\u8fdb\u884c\u6587\u4ef6\u586b\u5145"),(0,a.kt)("h2",{id:"\u5e38\u89c1\u9519\u8bef"},"\u5e38\u89c1\u9519\u8bef"),(0,a.kt)("p",null,"Q\uff1a\u5982\u679c\u6267\u884c\u4e86\u5185\u5b58\u6ee1\u8f7d\uff0c\u65e0\u6cd5\u6062\u590d\uff0c\u5982\u4f55\u5904\u7406\nA\uff1a\u91cd\u542f\u673a\u5668\u6062\u590d"))}p.isMDXComponent=!0}}]);