"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[4802],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20097:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=n(87462),a=(n(67294),n(3905));const o={title:"Contribute documents"},i=void 0,l={unversionedId:"community/docs",id:"version-1.7.1/community/docs",title:"Contribute documents",description:"Requirements",source:"@site/versioned_docs/version-1.7.1/community/docs.md",sourceDirName:"community",slug:"/community/docs",permalink:"/en/docs/community/docs",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.1/community/docs.md",tags:[],version:"1.7.1",frontMatter:{title:"Contribute documents"},sidebar:"docs",previous:{title:"Environment Prepare",permalink:"/en/docs/getting-started/installation-and-deployment/environment-prepare"},next:{title:"PR Submission Guidelines",permalink:"/en/docs/community/PR-guide"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Clone Website Project",id:"clone-website-project",level:2},{value:"Local Development",id:"local-development",level:2},{value:"Preview",id:"preview",level:2},{value:"Create a doc",id:"create-a-doc",level:2},{value:"Pull Request",id:"pull-request",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GItHub ID: You'll need a GitHub account first"),(0,a.kt)("li",{parentName:"ul"},"fork repo",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"fork ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chaosblade-io/chaosblade-website.git"},"chaosblade-website")," repo\uff0cand ",(0,a.kt)("inlineCode",{parentName:"li"},"git remote add upstream https://github.com/chaosblade-io/chaosblade-website.git")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version >= 12.13.0 or above (which can be checked by running ",(0,a.kt)("inlineCode",{parentName:"li"},"node -v"),"). You can use ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing multiple Node versions on a single machine installed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://yarnpkg.com/en/"},"Yarn")," version >= 1.5 (which can be checked by running ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn --version"),"). Yarn is a performant package manager for JavaScript and replaces the ",(0,a.kt)("inlineCode",{parentName:"li"},"npm")," client. It is not strictly necessary but highly encouraged.")),(0,a.kt)("h2",{id:"clone-website-project"},"Clone Website Project"),(0,a.kt)("p",null,"Clone project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/<your-fork-repo>/chaosblade-website.git\n")),(0,a.kt)("h2",{id:"local-development"},"Local Development"),(0,a.kt)("p",null,"Installing dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'cd chaosblade-website\nyarn install\nyarn install v1.22.10\nwarning ../../package.json: No license field\n[1/4] \ud83d\udd0d  Resolving packages...\n[2/4] \ud83d\ude9a  Fetching packages...\n[3/4] \ud83d\udd17  Linking dependencies...\nwarning "@docusaurus/preset-classic > @docusaurus/theme-search-algolia > @docsearch/react@3.0.0-alpha.36" has unmet peer dependency "@types/react@>= 16.8.0 < 18.0.0".\nwarning "@docusaurus/preset-classic > @docusaurus/theme-search-algolia > @docsearch/react > @algolia/autocomplete-preset-algolia@1.0.0-alpha.44" has unmet peer dependency "@algolia/client-search@^4.5.1".\n[4/4] \ud83d\udd28  Building fresh packages...\n\u2728  Done in 11.02s.\n')),(0,a.kt)("h2",{id:"preview"},"Preview"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn start\nyarn run v1.22.10\nwarning ../../package.json: No license field\n$ docusaurus start\nStarting the development server...\nDocusaurus website is running at: http://localhost:3000/\n\n\u2714 Client\n  Compiled successfully in 7.54s\n\n\u2139 \uff62wds\uff63: Project is running at http://localhost:3000/\n\u2139 \uff62wds\uff63: webpack output is served from /\n\u2139 \uff62wds\uff63: Content not from webpack is served from /Users/saybot/own/chaosblade-website\n\u2139 \uff62wds\uff63: 404s will fallback to /index.html\n")),(0,a.kt)("h2",{id:"create-a-doc"},"Create a doc"),(0,a.kt)("p",null,"Create a markdown file, ",(0,a.kt)("inlineCode",{parentName:"p"},"xxx.md"),", and place it under the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"chaosblade-website # root directory of chaosblade-website\n\u251c\u2500\u2500 docs\n\u2502\xa0\xa0 \u2514\u2500\u2500 xxx.md\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2514\u2500\u2500 pages\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 ...\n")),(0,a.kt)("p",null,"At the top of the file, specify ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," in the front matter, so that Docusaurus will pick them up correctly when generating your site."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"---\nid: greeting\ntitle: Hello\n---\n\n## Hello from Docusaurus\n\nAre you ready to create the documentation site for your open source project?\n\n### Headers\n\nwill show up on the table of contents on the upper right\n\nSo that your users will know what this page is all about without scrolling down or even without reading too much.\n\n### Only h2 and h3 will be in the toc\n\nThe headers are well-spaced so that the hierarchy is clear.\n\n- lists will help you\n- present the key points\n- that you want your users to remember\n  - and you may nest them\n    - multiple times\n\n### Custom id headers {#custom-id}\n\nWith `{#custom-id}` syntax you can set your own header id.\n")),(0,a.kt)("p",null,"Once you save the file, the development server will automatically reload the changes. Now open ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/docs/xxx"),", you will see the new page you just created."),(0,a.kt)("h2",{id:"pull-request"},"Pull Request"),(0,a.kt)("p",null,"Once the document is updated, it is ready for PR submission."))}p.isMDXComponent=!0}}]);