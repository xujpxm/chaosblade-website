"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[2515],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9370:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u5feb\u901f\u5f00\u59cb"},i=void 0,c={unversionedId:"getting-started/quick-start",id:"version-1.7.0/getting-started/quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"\u5feb\u901f\u4f53\u9a8c chaosblade\uff0c\u53ef\u4ee5\u62c9\u53d6 docker \u955c\u50cf\u5e76\u8fd0\u884c\uff0c\u5728\u5bb9\u5668\u5185\u8fdb\u884c\u4f53\u9a8c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.0/getting-started/quick-start.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/docs/getting-started/quick-start",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/versioned_docs/version-1.7.0/getting-started/quick-start.md",tags:[],version:"1.7.0",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb"},sidebar:"version-1.7.0/docs",previous:{title:"Box\u5e73\u53f0\u5feb\u901f\u5165\u95e8",permalink:"/docs/getting-started/platform-box-quick-start"},next:{title:"\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0Box\u5b89\u88c5\u4e0e\u5378\u8f7d",permalink:"/docs/getting-started/installation-and-deployment/platform-box-install-and-uninstall"}},l={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5feb\u901f\u4f53\u9a8c chaosblade\uff0c\u53ef\u4ee5\u62c9\u53d6 docker \u955c\u50cf\u5e76\u8fd0\u884c\uff0c\u5728\u5bb9\u5668\u5185\u8fdb\u884c\u4f53\u9a8c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tvax2.sinaimg.cn/large/ad5fbf65gy1gq593nrinog212i0mqu0y.gif",alt:null})),(0,o.kt)("p",null,"\u4e0b\u8f7d\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull chaosbladeio/chaosblade-demo\n")),(0,o.kt)("p",null,"\u8fd0\u884c demo \u5bb9\u5668\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --privileged chaosbladeio/chaosblade-demo\n")),(0,o.kt)("p",null,"\u8fdb\u5165\u955c\u50cf\u4e4b\u540e\uff0c\u53ef\u9605\u8bfb ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade/blob/master/README_CN.md"},"README.md")," \u6587\u4ef6\u5b9e\u65bd\u6df7\u6c8c\u5b9e\u9a8c\uff0cEnjoy it\u3002"))}p.isMDXComponent=!0}}]);