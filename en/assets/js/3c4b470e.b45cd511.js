"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[7759],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return s}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(r),s=a,v=d["".concat(i,".").concat(s)]||d[s]||u[s]||l;return r?n.createElement(v,c(c({ref:t},m),{},{components:r})):n.createElement(v,c({ref:t},m))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<l;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2813:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p}});var n=r(7462),a=(r(7294),r(3905));const l={id:"blade create jvm"},c="Jvm\u76f8\u5173\u573a\u666f",o={unversionedId:"experiment-types/jvm/blade create jvm",id:"experiment-types/jvm/blade create jvm",title:"Jvm\u76f8\u5173\u573a\u666f",description:"\u4ecb\u7ecd",source:"@site/docs/experiment-types/jvm/blade_create_jvm.md",sourceDirName:"experiment-types/jvm",slug:"/experiment-types/jvm/blade create jvm",permalink:"/en/docs/next/experiment-types/jvm/blade create jvm",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/experiment-types/jvm/blade_create_jvm.md",tags:[],version:"current",frontMatter:{id:"blade create jvm"},sidebar:"docs",previous:{title:"\u6a21\u62df\u5bb9\u5668\u8d44\u6e90\u81ea\u8eab\u573a\u666f",permalink:"/en/docs/next/experiment-types/k8s/blade create k8s container-container"},next:{title:"\u6302\u8f7dJava Agent",permalink:"/en/docs/next/experiment-types/jvm/blade prepare jvm"}},i={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u5b9e\u9a8c\u539f\u7406",id:"\u5b9e\u9a8c\u539f\u7406",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],m={toc:p};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jvm\u76f8\u5173\u573a\u666f"},"Jvm\u76f8\u5173\u573a\u666f"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"jvm \u672c\u8eab\u76f8\u5173\u573a\u666f\uff0c\u4ee5\u53ca\u53ef\u4ee5\u6307\u5b9a\u7c7b\uff0c\u65b9\u6cd5\u6ce8\u5165\u5ef6\u8fdf\u3001\u8fd4\u56de\u503c\u3001\u5f02\u5e38\u6545\u969c\u573a\u666f\uff0c\u4e5f\u53ef\u4ee5\u7f16\u5199 groovy \u548c java \u811a\u672c\u6765\u5b9e\u73b0\u590d\u6742\u7684\u573a\u666f\u3002\u76ee\u524d\u652f\u6301\u7684\u573a\u666f\u5982\u4e0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[blade create jvm CodeCacheFilling]","(blade create jvm CodeCacheFilling.md) \u586b\u5145 jvm code cache"),(0,a.kt)("li",{parentName:"ul"},"[blade create jvm OutOfMemoryError]","(blade create jvm OutOfMemoryError.md) \u5185\u5b58\u6ea2\u51fa\uff0c\u652f\u6301\u5806\u3001\u6808\u3001metaspace \u533a\u6ea2\u51fa"),(0,a.kt)("li",{parentName:"ul"},"[blade create jvm cpufullload]","(blade create jvm cpufullload.md) java \u8fdb\u7a0b CPU \u4f7f\u7528\u7387\u6ee1\u8f7d"),(0,a.kt)("li",{parentName:"ul"},"[blade create jvm delay]","(blade create jvm delay.md) \u65b9\u6cd5\u5ef6\u8fdf"),(0,a.kt)("li",{parentName:"ul"},"[blade create jvm return]","(blade create jvm return.md) \u6307\u5b9a\u8fd4\u56de\u503c"),(0,a.kt)("li",{parentName:"ul"},"[blade create jvm script]","(blade create jvm script.md) \u7f16\u5199 groovy \u548c java \u5b9e\u73b0\u573a\u666f"),(0,a.kt)("li",{parentName:"ul"},"[blade create jvm throwCustomException]","(blade create jvm throwCustomException.md) \u629b\u81ea\u5b9a\u4e49\u5f02\u5e38\u573a\u666f")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("p",null,"\u6b64\u5904\u5217\u4e3e jvm \u652f\u6301\u7684\u901a\u7528\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--pid string         \u6307\u5b9a java \u8fdb\u7a0b\u53f7\n--process string     \u6307\u5b9a java \u8fdb\u7a0b\u540d\uff0c\u5982\u679c\u540c\u65f6\u586b\u5199\n--timeout string     \u8bbe\u5b9a\u8fd0\u884c\u65f6\u957f\uff0c\u5355\u4f4d\u662f\u79d2\uff0c\u901a\u7528\u53c2\u6570\n")),(0,a.kt)("p",null,"JVM \u65b9\u6cd5\u7ea7\u522b\u7684\u6545\u969c\u573a\u666f\u901a\u7528\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--classname string        \u6307\u5b9a\u7c7b\u540d\uff0c\u5fc5\u987b\u662f\u5b9e\u73b0\u7c7b\uff0c\u5e26\u5168\u5305\u540d\uff0c\u4f8b\u5982 com.xxx.xxx.XController (\u5fc5\u586b\u9879)\n--methodname string       \u6307\u5b9a\u65b9\u6cd5\u540d\uff0c\u6ce8\u610f\u76f8\u540c\u65b9\u6cd5\u540d\u7684\u65b9\u6cd5\u90fd\u4f1a\u88ab\u6ce8\u5165\u76f8\u540c\u6545\u969c (\u5fc5\u586b\u9879)\n--after                   \u65b9\u6cd5\u6267\u884c\u5b8c\u6210\u8fd4\u56de\u524d\u6ce8\u5165\u6545\u969c\uff0c\u6bd4\u5982\u4fee\u6539\u590d\u6742\u7684\u8fd4\u56de\u5bf9\u8c61\n--effect-count string     \u9650\u5236\u5f71\u54cd\u6570\u91cf\n--effect-percent string   \u9650\u5236\u5f71\u54cd\u767e\u5206\u6bd4\n")),(0,a.kt)("p",null,"\u5404\u573a\u666f\u8fd8\u6709\u81ea\u8eab\u6240\u72ec\u6709\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u5728\u6bcf\u4e2a\u573a\u666f\u6587\u6863\u4e2d\u67e5\u770b"),(0,a.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.kt)("p",null,"\u6b64\u5904\u4e3e\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff1a\u5f53\u524d Java \u8fdb\u7a0b CPU \u4f7f\u7528\u7387\u6ee1\u8f7d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# \u5148\u6267\u884c prepare \u64cd\u4f5c\nblade prepare jvm --process tomcat\n{"code":200,"success":true,"result":"af9ec083eaf32e26"}\n\n# \u6267\u884c\u8fdb\u7a0b\u5185 CPU \u6ee1\u8f7d\nblade create jvm cpufullload --process tomcat\n{"code":200,"success":true,"result":"2a97b8c2fe9d7c01"}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"-w461",src:r(5441).Z,width:"922",height:"684"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u505c\u6b62\u5b9e\u9a8c\nblade destroy 2a97b8c2fe9d7c01\n\n# \u5378\u8f7d agent\nblade revoke af9ec083eaf32e26\n")),(0,a.kt)("h2",{id:"\u5b9e\u9a8c\u539f\u7406"},"\u5b9e\u9a8c\u539f\u7406"),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"))}u.isMDXComponent=!0},5441:function(e,t,r){t.Z=r.p+"assets/images/15758721082138-5b791089981f14176ff263c569853794.jpg"}}]);