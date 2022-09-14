"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[3836],{4641:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/summer-2021","metadata":{"permalink":"/en/blog/summer-2021","editUrl":"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/blog/blog/summer-2021.md","source":"@site/blog/summer-2021.md","title":"\u6691\u671f2021","description":"\u5f00\u6e90\u8f6f\u4ef6\u4f9b\u5e94\u94fe\u70b9\u4eae\u8ba1\u5212","date":"2021-05-18T06:12:45.000Z","formattedDate":"May 18, 2021","tags":[{"label":"chaosblade","permalink":"/en/blog/tags/chaosblade"}],"readingTime":5.81,"hasTruncateMarker":false,"authors":[{"name":"\u53f6\u98de","title":"ChaosBlade PMC","url":"https://github.com/tiny-x","imageURL":"https://avatars.githubusercontent.com/u/29175949?v=4"}],"frontMatter":{"title":"\u6691\u671f2021","author":"\u53f6\u98de","author_title":"ChaosBlade PMC","author_url":"https://github.com/tiny-x","author_image_url":"https://avatars.githubusercontent.com/u/29175949?v=4","tags":["chaosblade"],"description":"\u5f00\u6e90\u8f6f\u4ef6\u4f9b\u5e94\u94fe\u70b9\u4eae\u8ba1\u5212","hide_table_of_contents":false},"nextItem":{"title":"\u6df7\u6c8c\u5de5\u7a0b\u4ecb\u7ecd\u4e0e\u5b9e\u8df5","permalink":"/en/blog/chaos-engineering"}},"content":"\u6b22\u8fce\u53c2\u52a0[\u5f00\u6e90\u8f6f\u4ef6\u4f9b\u5e94\u94fe\u70b9\u4eae\u8ba1\u5212](https://summer.iscas.ac.cn/help/) - \u6691\u671f 2021\uff08\u4ee5\u4e0b\u7b80\u79f0 \u6691\u671f 2021\uff09\u662f\u7531 \u4e2d\u56fd\u79d1\u5b66\u9662\u8f6f\u4ef6\u7814\u7a76\u6240 \u4e0e openEuler \u793e\u533a \u5171\u540c\u4e3e\u529e\u7684\u4e00\u9879\u9762\u5411\u9ad8\u6821\u5b66\u751f\u7684\u6691\u671f\u6d3b\u52a8\uff0c\u65e8\u5728\u9f13\u52b1\u5728\u6821\u5b66\u751f\u79ef\u6781\u53c2\u4e0e\u5f00\u6e90\u8f6f\u4ef6\u7684\u5f00\u53d1\u7ef4\u62a4\uff0c\u4fc3\u8fdb\u4f18\u79c0\u5f00\u6e90\u8f6f\u4ef6\u793e\u533a\u7684\u84ec\u52c3\u53d1\u5c55\u3002\u6211\u4eec\u5c06\u8054\u5408\u5404\u5927\u5f00\u6e90\u793e\u533a\uff0c\u9488\u5bf9\u91cd\u8981\u5f00\u6e90\u8f6f\u4ef6\u7684\u5f00\u53d1\u4e0e\u7ef4\u62a4\u63d0\u4f9b\u9879\u76ee\uff0c\u5e76\u5411\u5168\u7403\u9ad8\u6821\u5b66\u751f\u5f00\u653e\u62a5\u540d\u3002\\n\\n## \u76ee\u5f55\\n- [\u4efb\u52a1\u80cc\u666f](#\u4efb\u52a1\u80cc\u666f)\\n- [\u4efb\u52a1\u6e05\u5355](#\u4efb\u52a1\u6e05\u5355)\\n- [\u8054\u7cfb\u65b9\u5f0f](#\u8054\u7cfb\u65b9\u5f0f)\\n\\n## \u4efb\u52a1\u80cc\u666f\\n**\u5c06 ChaosBlade \u4e8b\u4ef6\u5bfc\u51fa\u5230 SkyWalking & Prometheus**\\n\\n\u901a\u5e38\uff0c\u7cfb\u7edf\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u4f1a\u53d1\u751f\u5f88\u591a\u4e8b\u4ef6\uff0c\u5982\u8fdb\u7a0b\u5f02\u5e38\u3001\u91cd\u542f\u3001\u6df7\u6c8c\u5b9e\u9a8c\u7b49\u3002\u4e8b\u4ef6\u7684\u53d1\u751f\u53ef\u80fd\u4f1a\u5f71\u54cd\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u8f93\u51fa\u6df7\u6c8c\u5b9e\u9a8c\u7684\u4e8b\u4ef6\uff0c\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u5c06\u4e8b\u4ef6\u5bfc\u5165\u5230 SkyWalking \u548c Prometheus \uff0c\u7528\u4e8e\u540e\u7eed\u7cfb\u7edf\u5206\u6790\u7edf\u8ba1\u7b49\u573a\u666f\u7684\u4f7f\u7528\u3002\\n\\n**chaosblade-box \u652f\u6301\u6f14\u7ec3\u5de5\u5177 chaos-mesh**\\n\\nchaosblade-box \u662f\u4e00\u4e2a\u573a\u666f\u4e30\u5bcc\u7684\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0\uff0cchaosblade-box \u7684\u51fa\u751f\u5c31\u5305\u542b\u4e86\u5de5\u5177\u5e02\u573a\u548c\u62d3\u5c55\u6f14\u7ec3\u5de5\u5177\u7684\u80fd\u529b\uff0c\u76ee\u524d\u5305\u542b\u6f14\u7ec3\u5de5\u5177 chaosblade \u548c litmuschaos\uff0c\u672c\u6b21\u4efb\u52a1\u6211\u4eec\u9700\u8981\u62d3\u5c55\u5bf9 chaos-mesh \u6f14\u7ec3\u5de5\u5177\u7684\u652f\u6301\u3002\\n\\n## \u4efb\u52a1\u6e05\u5355\\n\\n\u672c\u6b21\u201c\u6691\u671f2021\u201d\u603b\u5171\u6709\u4e24\u4e2a\u4efb\u52a1\uff0c\u5206\u522b\u662f\uff1a\\n- \u4efb\u52a1\u4e00\uff1a[\u5c06 ChaosBlade \u4e8b\u4ef6\u5bfc\u51fa\u5230 SkyWalking & Prometheus](https://github.com/chaosblade-io/chaosblade/issues/499)\\n- \u4efb\u52a1\u4e8c\uff1a[chaosblade-box \u652f\u6301\u6f14\u7ec3\u5de5\u5177 chaos-mesh](https://github.com/chaosblade-io/chaosblade/issues/498)\\n\\n\u5728\u4e0a\u4e00\u8282\u5df2\u7ecf\u4ecb\u7ecd\u4e86\u4efb\u52a1\u7684\u80cc\u666f\uff0c\u4e0b\u9762\u5c0f\u8282\u4e2d\u6211\u4eec\u5c06\u4ee5\u201c\u4efb\u52a1\u4e00\u201d\u548c\u201c\u4efb\u52a1\u4e8c\u201d\u6765\u533a\u5206\u4efb\u52a1\u3002\\n\\n### \u4efb\u52a1\u4e00\\n\u672c\u6b21\u4efb\u52a1\u4e3b\u8981\u5728 chaosblade \u548c chaosblade-operator \u9879\u76ee\u7f16\u7801\u5373\u53ef\uff0cGithub \u5730\u5740:\\n\\n- chaosblade: https://github.com/chaosblade-io/chaosblade\\n- chaosblade-operator: https://github.com/chaosblade-io/chaosblade-operator\\n\\n#### \u8981\u6c42\u7684\u6280\u80fd\\n\\n- Golang, Kubernetes\\n\\n#### \u53c2\u8003\u8d44\u6599\\n- [chaosblade \u65b0\u624b\u6307\u5357](https://github.com/chaosblade-io/chaosblade/wiki/%E6%96%B0%E6%89%8B%E6%8C%87%E5%8D%97 )\\n- [chaosblade-operator \u5b9e\u73b0\u65b9\u6848](https://github.com/chaosblade-io/chaosblade/blob/master/CLOUDNATIVE.md)\\n- [skywalking \u4e8b\u4ef6\u76f8\u5173](https://github.com/chaosblade-io/chaosblade/issues/495)\\n- [prometheus \u81ea\u5b9a\u4e49exporter](https://prometheus.io/docs/instrumenting/writing_exporters/)\\n\\n#### \u4efb\u52a1\u5185\u5bb9\\n- \u5728 chaosblade cli \u6267\u884c\u5668\u4e0a\u4e0b\u6587\u57cb\u70b9\uff0c\u5c06\u6f14\u7ec3\u521b\u5efa\u3001\u6f14\u7ec3\u6062\u590d\u3001Java Agent \u6302\u8f7d\u7b49\u4e8b\u4ef6\u5bfc\u51fa\u5230 SkyWalking\\n- \u5728 chaosblade cli \u6267\u884c\u5668\u4e0a\u4e0b\u6587\u57cb\u70b9\uff0c\u5c06\u6f14\u7ec3\u521b\u5efa\u3001\u6f14\u7ec3\u6062\u590d\u3001Java Agent \u6302\u8f7d\u7b49\u4e8b\u4ef6\u5bfc\u51fa\u5230 Prometheus\\n- \u5728 chaosblade-operator \u5bf9 crd \u76d1\u542c\u5668\u57cb\u70b9\uff0c\u5c06 crd \u72b6\u6001\u7684\u53d8\u66f4\u4e8b\u4ef6\u5bfc\u51fa\u5230 SkyWalking \u548c Prometheus\\n\\n#### \u5b9e\u73b0\u6b65\u9aa4\\n- \u5728 chaosblade exec \u5305\u4e0b\u9762\u5206\u522b\u5305\u542b\u5f88\u591a\u6267\u884c\u5668\u6709 os\u3001jvm\u3001docker \u7b49\uff0c\u9700\u8981\u5bf9\u6267\u884c\u5668\u7684\u6dfb\u52a0\u4e8b\u4ef6\u76d1\u542c\uff0c\u6765\u6f14\u7ec3\u6267\u884c\u3001\u6f14\u7ec3\u6062\u590d\u7b49\u4e8b\u4ef6\\n- \u5728 chaosblade-operator \u9879\u76ee\u4e0b\u76d1\u542c\u4e86 blade \u81ea\u5b9a\u4e49\u8d44\u6e90\u72b6\u6001\u7684\u53d8\u66f4\uff0c\u9700\u8981\u5c06 blade \u72b6\u6001\u7684\u53d8\u66f4\u4e8b\u4ef6\u5bfc\u51fa\u3002\\n\\n#### \u5de5\u4f5c\u91cf\\n\\n|  \u4efb\u52a1   | \u5de5\u4f5c\u91cf  |\\n|  ----  | ----  |\\n| \u4e86\u89e3\u6df7\u6c8c\u5de5\u7a0b\u548c ChaosBlade\uff0c\u80fd\u591f\u4f7f\u7528 ChaosBlade \u5bf9\u4e3b\u673a\u548c K8S \u6ce8\u5165\u6545\u969c | 5 |\\n| \u53ef\u4ee5\u5c1d\u8bd5\u642d\u5efa minikube \uff0c\u5b89\u88c5 chaosblade-operator\uff0c\u4e86\u89e3 Operator \u5b9e\u73b0 | 3 |\\n| \u4e86\u89e3 SkyWalking \u548c Prometheus | 5 |\\n| \u719f\u6089 Prometheus \u7684 exporter  | 5 |\\n| \u4e86\u89e3 SkyWalking \u7684\u4e8b\u4ef6\u5bfc\u5165\u65b9\u5f0f\uff0c\u53ef\u81ea\u884c\u9009\u62e9\u4e00\u79cd\u65b9\u6848\uff0c\u53c2\u8003 [ISSUE](https://github.com/chaosblade-io/chaosblade/issues/495)  | 5 |\\n| \u719f\u6089 chaosblade \u6267\u884c\u5668\u7684\u6a21\u578b\u5b9a\u4e49 | 3 |\\n| \u5728 chaosblade cli \u6267\u884c\u5668\u4e0a\u4e0b\u6587\u57cb\u70b9\uff0c\u5c06\u6f14\u7ec3\u521b\u5efa\u3001\u6f14\u7ec3\u6062\u590d\u3001Java Agent \u6302\u8f7d\u7b49\u4e8b\u4ef6\u5bfc\u51fa\u5230 SkyWalking | 5 |\\n| \u5728 chaosblade cli \u6267\u884c\u5668\u4e0a\u4e0b\u6587\u57cb\u70b9\uff0c\u5c06\u6f14\u7ec3\u521b\u5efa\u3001\u6f14\u7ec3\u6062\u590d\u3001Java Agent \u6302\u8f7d\u7b49\u4e8b\u4ef6\u5bfc\u51fa\u5230 Prometheus | 5 |\\n| \u5728 chaosblade operator \u5bf9 crd \u76d1\u542c\u5668\u57cb\u70b9\uff0c\u5c06 crd \u72b6\u6001\u7684\u53d8\u66f4\u4e8b\u4ef6\u5bfc\u51fa\u5230 SkyWalking \u548c Prometheus  | 5 |\\n| \u5355\u5143\u6d4b\u8bd5 | 3 |\\n| \u96c6\u6210\u6d4b\u8bd5 | 5 |\\n| PR \u4ea4\u4ed8 | 2 |\\n\\n### \u4efb\u52a1\u4e8c\\n\u672c\u6b21\u4efb\u52a1\u4e3b\u8981\u5728 chaosblade-box \u7f16\u7801\u5373\u53ef\uff0cGithub \u5730\u5740\uff1ahttps://github.com/chaosblade-io/chaosblade-box \uff0c\u53ef\u4ee5 litmuschaos \u662f\u5982\u4f55\u63a5\u5165\u5230 chaosblade-box \u7684\u3002\\n\\n#### \u8981\u6c42\u7684\u6280\u80fd\\n\\n- java\\n\\n#### \u53c2\u8003\u8d44\u6599\\n- [chaosblade-box \u7528\u6237\u624b\u518c](https://www.yuque.com/docs/share/bc9ad412-6f96-463b-b72d-6773b5fb5ea3?# )\\n- [chaosblade-box \u5f00\u53d1\u624b\u518c](https://www.yuque.com/docs/share/fa43fd1e-9de0-4f55-900b-08ab4e8cf06a?# )\\n- [chaos-mesh \u6587\u6863](https://chaos-mesh.org/docs)\\n\\n#### \u4efb\u52a1\u5185\u5bb9\\n- \u6dfb\u52a0 chaos-mesh \u573a\u666f\u89e3\u6790\\n- \u6dfb\u52a0 chaos-mesh \u6f14\u7ec3\u6267\u884c\u5668\\n\\n#### \u5b9e\u73b0\u6b65\u9aa4\\n- \u5728\u6a21\u5757 chaosblade-box-scenario\u4e0b\u6dfb\u52a0\u4e00\u4e2a chaosblade-box-scenario-chaosmesh \u7684\u5b9e\u73b0\u3002\\n- \u5728\u6a21\u5757 chaosblade-box-invoker \u4e0b\u6dfb\u52a0\u4e00\u4e2a chaosblade-box-invoker-chaosmesh-kubeapi \u5b9e\u73b0\u3002\\n\\n#### \u5de5\u4f5c\u91cf\\n\\n|  \u4efb\u52a1   | \u5de5\u4f5c\u91cf  |\\n|  ----  | ----  |\\n| \u4e86\u89e3 chaosblade-box\uff0c\u5e76\u4e14\u80fd\u90e8\u7f72\u548c\u4f7f\u7528 | 5 |\\n| \u4e86\u89e3 chaos-mesh\uff0c\u80fd\u4f7f\u7528 chaos-mesh \u6ce8\u5165\u6545\u969c | 5 |\\n| \u4e86\u89e3 chaosblade-box \u7684\u5de5\u5177\u5e02\u573a\u8bbe\u8ba1\uff0c\u8003\u8651\u5982\u4f55\u63a5\u5165 chaos-mesh | 3 |\\n| \u719f\u6089 chaos-mesh \u7684\u6df7\u6c8c\u5b9e\u9a8c\u6a21\u578b\u548c CRD \u5b9a\u4e49 | 5 |\\n| \u5728 chaosblade-box \u89e3\u6790 chaos-mesh \u7684\u6df7\u6c8c\u5b9e\u9a8c\u6a21\u578b\u548c CRD  | 5 |\\n| \u719f\u6089 chaos-mesh \u7684\u6f14\u7ec3\u521b\u5efa\u7684\u6d41\u7a0b | 5 |\\n| \u5728 chaosblade-box \u521b\u5efa chaos-mesh \u7684\u6f14\u7ec3  | 5 |\\n| \u5355\u5143\u6d4b\u8bd5 | 3 |\\n| \u96c6\u6210\u6d4b\u8bd5 | 5 |\\n| PR \u4ea4\u4ed8 | 2 |\\n\\n## \u8054\u7cfb\u65b9\u5f0f\\n- ChaosBlade \u9489\u9489\u8ba8\u8bba\u7fa4\u53f7\uff1a23177705\\n- \u90ae\u7bb1\uff1achaosblade.io.01@gmail.com"},{"id":"/chaos-engineering","metadata":{"permalink":"/en/blog/chaos-engineering","editUrl":"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/blog/blog/chaos-engineering.md","source":"@site/blog/chaos-engineering.md","title":"\u6df7\u6c8c\u5de5\u7a0b\u4ecb\u7ecd\u4e0e\u5b9e\u8df5","description":"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b\uff0c\u4e3a\u4ec0\u4e48\u9700\u8981\u6df7\u6c8c\u5de5\u7a0b\u4ee5\u53ca\u6df7\u6c8c\u5de5\u7a0b\u76f8\u5173\u5de5\u5177\u4e0e\u5b9e\u8df5\u3002","date":"2021-05-03T07:27:56.000Z","formattedDate":"May 3, 2021","tags":[{"label":"chaosblade","permalink":"/en/blog/tags/chaosblade"}],"readingTime":14.585,"hasTruncateMarker":false,"authors":[{"name":"\u8096\u957f\u519b\uff08\u7a79\u8c37\uff0c@xcaspar\uff09","title":"Co-creator of ChaosBlade","url":"https://github.com/xcaspar","imageURL":"https://avatars.githubusercontent.com/u/3992234?s=64&v=4"}],"frontMatter":{"title":"\u6df7\u6c8c\u5de5\u7a0b\u4ecb\u7ecd\u4e0e\u5b9e\u8df5","author":"\u8096\u957f\u519b\uff08\u7a79\u8c37\uff0c@xcaspar\uff09","author_title":"Co-creator of ChaosBlade","author_url":"https://github.com/xcaspar","author_image_url":"https://avatars.githubusercontent.com/u/3992234?s=64&v=4","tags":["chaosblade"],"description":"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b\uff0c\u4e3a\u4ec0\u4e48\u9700\u8981\u6df7\u6c8c\u5de5\u7a0b\u4ee5\u53ca\u6df7\u6c8c\u5de5\u7a0b\u76f8\u5173\u5de5\u5177\u4e0e\u5b9e\u8df5\u3002","hide_table_of_contents":false},"prevItem":{"title":"\u6691\u671f2021","permalink":"/en/blog/summer-2021"}},"content":"\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u67b6\u6784\u4e0b\uff0c\u670d\u52a1\u95f4\u7684\u4f9d\u8d56\u65e5\u76ca\u590d\u6742\uff0c\u5f88\u96be\u8bc4\u4f30\u5355\u4e2a\u670d\u52a1\u6545\u969c\u5bf9\u6574\u4e2a\u7cfb\u7edf\u7684\u5f71\u54cd\uff0c\u5e76\u4e14\u8bf7\u6c42\u94fe\u8def\u957f\uff0c\u76d1\u63a7\u544a\u8b66\u7684\u4e0d\u5b8c\u5584\u5bfc\u81f4\u53d1\u73b0\u95ee\u9898\u3001\u5b9a\u4f4d\u95ee\u9898\u96be\u5ea6\u589e\u5927\uff0c\u540c\u65f6\u4e1a\u52a1\u548c\u6280\u672f\u8fed\u4ee3\u5feb\uff0c\u5982\u4f55\u6301\u7eed\u4fdd\u969c\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u548c\u9ad8\u53ef\u7528\u6027\u53d7\u5230\u5f88\u5927\u7684\u6311\u6218\u3002\u6211\u4eec\u77e5\u9053\u53d1\u751f\u6545\u969c\u7684\u90a3\u4e00\u523b\u4e0d\u662f\u7531\u4f60\u6765\u9009\u62e9\u7684\uff0c\u800c\u662f\u90a3\u4e00\u523b\u6765\u9009\u62e9\u4f60\uff0c\u4f60\u80fd\u505a\u7684\u5c31\u662f\u4e3a\u4e4b\u505a\u597d\u51c6\u5907\u3002\u6240\u4ee5\u6784\u5efa\u7a33\u5b9a\u6027\u7cfb\u7edf\u5f88\u91cd\u8981\u7684\u4e00\u73af\u662f\u6df7\u6c8c\u5de5\u7a0b\uff0c\u5728\u53ef\u63a7\u8303\u56f4\u6216\u73af\u5883\u4e0b\uff0c\u901a\u8fc7\u6545\u969c\u6ce8\u5165\uff0c\u6765\u6301\u7eed\u63d0\u5347\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u548c\u9ad8\u53ef\u7528\u80fd\u529b\u3002  \\n\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b\uff0c\u4e3a\u4ec0\u4e48\u9700\u8981\u6df7\u6c8c\u5de5\u7a0b\u4ee5\u53ca\u6df7\u6c8c\u5de5\u7a0b\u76f8\u5173\u5de5\u5177\u4e0e\u5b9e\u8df5\u3002\u5982\u6709\u9057\u6f0f\u6216\u9519\u8bef\uff0c\u6b22\u8fce\u8865\u5145\u6307\u6b63\u3002\\n\\n## \u76ee\u5f55\\n\\n- [\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b](#\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b)\\n- [\u4e3a\u4ec0\u4e48\u9700\u8981\u6df7\u6c8c\u5de5\u7a0b](#\u4e3a\u4ec0\u4e48\u9700\u8981\u6df7\u6c8c\u5de5\u7a0b)\\n- [\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u65bd\u539f\u5219](#\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u65bd\u539f\u5219)\\n- [\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u65bd\u6b65\u9aa4](#\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u65bd\u6b65\u9aa4)\\n- [\u63a8\u8350\u5de5\u5177&\u4ea7\u54c1](#\u63a8\u8350\u5de5\u5177\u4ea7\u54c1)\\n- [\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u8df5\u6848\u4f8b](#\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u8df5\u6848\u4f8b)\\n- [\u76f8\u5173\u6587\u7ae0&\u4ea4\u6d41\u7fa4](#\u76f8\u5173\u6587\u7ae0\u4ea4\u6d41\u7fa4)\\n- [\u52a0\u5165\u6211\u4eec](#\u52a0\u5165\u6211\u4eec)\\n\\n## \u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b\\n\u6df7\u6c8c\u5de5\u7a0b\u662f\u5728 [\u6df7\u6c8c\u5de5\u7a0b\u7406\u8bba](https://principlesofchaos.org/) \u4e00\u6587\u4e2d\u63d0\u51fa\uff0c\u4f46\u5728 2010 \u5e74 Netflix \u4ece\u7269\u7406\u673a\u57fa\u7840\u8bbe\u65bd\u8fc1\u79fb\u5230 AWS \u8fc7\u7a0b\u4e2d\uff0c\u4e3a\u4fdd\u8bc1 EC2 \u5b9e\u4f8b\u6545\u969c\u4e0d\u4f1a\u5bf9\u4e1a\u52a1\u9020\u6210\u5f71\u54cd\uff0c\u5176\u56e2\u961f\u5f00\u53d1\u51fa\u4e86\u6740 EC2 \u5b9e\u4f8b\u7684\u5de5\u5177\uff0c\u8fd9\u4e5f\u662f\u6df7\u6c8c\u5de5\u7a0b\u7684\u96cf\u5f62\u3002\u5728 2015 \u5e74\u793e\u533a\u53d1\u5e03\u300a\u6df7\u6c8c\u5de5\u7a0b\u7406\u8bba\u300b\u4e00\u6587\u540e\uff0c\u6df7\u6c8c\u5de5\u7a0b\u5f00\u59cb\u5feb\u901f\u53d1\u5c55\u3002  \\n\u6df7\u6c8c\u5de5\u7a0b\u662f\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e0a\u8fdb\u884c\u5b9e\u9a8c\u7684\u5b66\u79d1\uff0c\u65e8\u5728\u63d0\u5347\u7cfb\u7edf\u5bb9\u9519\u6027\uff0c\u5efa\u7acb\u7cfb\u7edf\u62b5\u5fa1\u751f\u4ea7\u73af\u5883\u4e2d\u53d1\u751f\u4e0d\u53ef\u9884\u77e5\u95ee\u9898\u7684\u4fe1\u5fc3\u3002\u201d\u6253\u4e0d\u5012\u6211\u7684\u5fc5\u4f7f\u6211\u5f3a\u5927\u201c\uff0c\u5c3c\u91c7\u7684\u8fd9\u53e5\u8bdd\u5f88\u597d\u4e86\u8be0\u91ca\u4e86\u6df7\u6c8c\u5de5\u7a0b\u53cd\u8106\u5f31\u7684\u601d\u60f3\u3002\\n\\n## \u4e3a\u4ec0\u4e48\u9700\u8981\u6df7\u6c8c\u5de5\u7a0b\\n\u5206\u5e03\u5f0f\u7cfb\u7edf\u65e5\u76ca\u590d\u6742\uff0c\u800c\u4e14\u5728\u7cfb\u7edf\u9010\u6e10\u4e91\u5316\u7684\u80cc\u666f\u4e0b\uff0c\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u53d7\u5230\u5f88\u5927\u7684\u6311\u6218\u3002\u8fd9\u91cc\u4ece\u56db\u4e2a\u89d2\u8272\u6765\u8bf4\u660e\u6df7\u6c8c\u5de5\u7a0b\u7684\u91cd\u8981\u6027\u3002\\n- \u5bf9\u4e8e\u67b6\u6784\u5e08\u6765\u8bf4\uff0c\u53ef\u4ee5\u9a8c\u8bc1\u7cfb\u7edf\u67b6\u6784\u7684\u5bb9\u9519\u80fd\u529b\uff0c\u6bd4\u5982\u9a8c\u8bc1\u73b0\u5728\u63d0\u5021\u7684\u9762\u5411\u5931\u8d25\u8bbe\u8ba1\u7684\u7cfb\u7edf\uff1b\\n- \u5bf9\u4e8e\u5f00\u53d1\u548c\u8fd0\u7ef4\uff0c\u53ef\u4ee5\u63d0\u9ad8\u6545\u969c\u7684\u5e94\u6025\u6548\u7387\uff0c\u5b9e\u73b0\u6545\u969c\u544a\u8b66\u3001\u5b9a\u4f4d\u3001\u6062\u590d\u7684\u6709\u6548\u548c\u9ad8\u6548\u6027\u3002\\n- \u5bf9\u4e8e\u6d4b\u8bd5\u6765\u8bf4\uff0c\u53ef\u4ee5\u5f25\u8865\u4f20\u7edf\u6d4b\u8bd5\u65b9\u6cd5\u7559\u4e0b\u7684\u7a7a\u767d\uff0c\u4e4b\u524d\u7684\u6d4b\u8bd5\u65b9\u6cd5\u57fa\u672c\u4e0a\u662f\u4ece\u7528\u6237\u7684\u89d2\u5ea6\u53bb\u505a\uff0c\u800c\u6df7\u6c8c\u5de5\u7a0b\u662f\u4ece\u7cfb\u7edf\u7684\u89d2\u5ea6\u8fdb\u884c\u6d4b\u8bd5\uff0c\u964d\u4f4e\u6545\u969c\u590d\u53d1\u7387\u3002\\n- \u5bf9\u4e8e\u4ea7\u54c1\u548c\u8bbe\u8ba1\uff0c\u901a\u8fc7\u6df7\u6c8c\u4e8b\u4ef6\u67e5\u770b\u4ea7\u54c1\u7684\u8868\u73b0\uff0c\u63d0\u5347\u5ba2\u6237\u4f7f\u7528\u4f53\u9a8c\u3002\u6240\u4ee5\u8bf4\u6df7\u6c8c\u5de5\u7a0b\u9762\u5411\u7684\u4e0d\u4ec5\u4ec5\u662f\u5f00\u53d1\u3001\u6d4b\u8bd5\uff0c\u62e5\u6709\u6700\u597d\u7684\u5ba2\u6237\u4f53\u9a8c\u662f\u6bcf\u4e2a\u4eba\u7684\u76ee\u6807\\n\u6240\u4ee5\u5b9e\u65bd\u6df7\u6c8c\u5de5\u7a0b\uff0c\u53ef\u4ee5\u63d0\u65e9\u53d1\u73b0\u751f\u4ea7\u73af\u5883\u4e0a\u7684\u95ee\u9898\uff0c\u5e76\u4e14\u53ef\u4ee5\u4ee5\u6218\u517b\u6218\uff0c\u63d0\u5347\u6545\u969c\u5e94\u6025\u6548\u7387\u548c\u53ef\u4ee5\u4f7f\u7528\u4f53\u9a8c\uff0c\u9010\u6e10\u5efa\u8bbe\u9ad8\u53ef\u7528\u7684\u97e7\u6027\u7cfb\u7edf\u3002\\n\\n## \u6df7\u6c8c\u5de5\u7a0b\u5b9e\u65bd\u539f\u5219\\n![chaos-eng-rules](https://user-images.githubusercontent.com/3992234/63409822-858d2f80-c424-11e9-9aac-58f34a0f5c6d.png)\\n\\n- \u7b2c\u4e00\u6761\uff1a\u201d\u5efa\u7acb\u4e00\u4e2a\u56f4\u7ed5\u7a33\u5b9a\u72b6\u6001\u884c\u4e3a\u7684\u5047\u8bf4\u201c\uff0c\u5176\u5305\u542b\u4e24\u4e2a\u542b\u4e49\uff0c\u4e00\u4e2a\u662f\u5b9a\u4e49\u80fd\u76f4\u63a5\u53cd\u5e94\u4e1a\u52a1\u670d\u52a1\u7684\u76d1\u63a7\u6307\u6807\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u8fd9\u91cc\u7684\u76d1\u63a7\u6307\u6807\u5e76\u4e0d\u662f\u7cfb\u7edf\u8d44\u6e90\u6307\u6807\uff0c\u6bd4\u5982CPU\u3001\u5185\u5b58\u7b49\uff0c\u8fd9\u91cc\u7684\u76d1\u63a7\u6307\u6807\u662f\u80fd\u76f4\u63a5\u8861\u91cf\u7cfb\u7edf\u670d\u52a1\u8d28\u91cf\u7684\u4e1a\u52a1\u76d1\u63a7\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u4e00\u4e2a\u8c03\u7528\u5ef6\u8fdf\u6545\u969c\uff0c\u8bf7\u6c42\u7684 RT \u4f1a\u53d8\u957f\uff0c\u5bf9\u4e0a\u5c42\u4ea4\u6613\u91cf\u9020\u6210\u4e0b\u8dcc\u7684\u5f71\u54cd\uff0c\u90a3\u4e48\u8fd9\u91cc\u4ea4\u6613\u91cf\u5c31\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u76d1\u63a7\u6307\u6807\u3002\u8fd9\u6761\u539f\u5219\u7684\u53e6\u4e00\u4e2a\u542b\u4e49\u662f\u6545\u969c\u89e6\u53d1\u65f6\uff0c\u5bf9\u7cfb\u7edf\u884c\u4e3a\u4f5c\u51fa\u5047\u8bbe\u4ee5\u53ca\u76d1\u63a7\u6307\u6807\u7684\u9884\u671f\u53d8\u5316\u3002\\n- \u7b2c\u4e8c\u6761\u6307\u6a21\u62df\u751f\u4ea7\u73af\u5883\u4e2d\u771f\u5b9e\u7684\u6216\u6709\u7406\u8bba\u4f9d\u636e\u7684\u6545\u969c\u573a\u666f\uff0c\u6bd4\u5982\u4f9d\u8d56\u7684\u670d\u52a1\u8c03\u7528\u5ef6\u8fdf\u3001\u8d85\u65f6\u3001\u5f02\u5e38\u7b49\u3002\\n- \u7b2c\u4e09\u6761\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u8fd0\u884c\u5b9e\u9a8c\uff0c\u4f46\u4e5f\u4e0d\u662f\u8bf4\u5fc5\u987b\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6267\u884c\uff0c\u53ea\u662f\u5b9e\u9a8c\u73af\u5883\u8d8a\u771f\u5b9e\uff0c\u6df7\u6c8c\u5de5\u7a0b\u8d8a\u6709\u4ef7\u503c\uff0c\u4f46\u5982\u679c\u77e5\u9053\u7cfb\u7edf\u5728\u67d0\u4e2a\u6545\u969c\u573a\u666f\u4e0b\u4e0d\u5177\u5907\u5bb9\u707e\u80fd\u529b\uff0c\u4e0d\u53ef\u4ee5\u6267\u884c\u6b64\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u907f\u514d\u8d44\u635f\u53d1\u751f\u3002\\n- \u7b2c\u56db\u6761\uff0c\u6301\u7eed\u7684\u6267\u884c\u624d\u80fd\u6301\u7eed\u7684\u964d\u4f4e\u6545\u969c\u590d\u53d1\u7387\u548c\u63d0\u524d\u53d1\u73b0\u6545\u969c\uff0c\u6240\u4ee5\u9700\u8981\u6301\u7eed\u7684\u81ea\u52a8\u5316\u8fd0\u884c\u8bd5\u9a8c\u3002\\n- \u6700\u540e\u4e00\u4e2a\uff0c\u6df7\u6c8c\u5de5\u7a0b\u5f88\u91cd\u8981\u7684\u4e00\u70b9\u662f\u63a7\u5236\u7206\u70b8\u534a\u5f84\uff0c\u4e5f\u5c31\u662f\u8bd5\u9a8c\u5f71\u54cd\u9762\uff0c\u9632\u6b62\u9884\u671f\u5916\u7684\u8d44\u635f\u53d1\u751f\uff0c\u53ef\u4ee5\u901a\u8fc7\u73af\u5883\u9694\u79bb\u6216\u8005\u6545\u969c\u6ce8\u5165\u5de5\u5177\u63d0\u4f9b\u7684\u914d\u7f6e\u7c92\u5ea6\u6765\u63a7\u5236\u3002\\n\\n## \u6df7\u6c8c\u5de5\u7a0b\u5b9e\u65bd\u6b65\u9aa4\\n- \u5236\u8ba2\u6df7\u6c8c\u5b9e\u9a8c\u8ba1\u5212\\n- \u5b9a\u4e49\u7cfb\u7edf\u7a33\u6001\u6307\u6807\\n- \u505a\u51fa\u7cfb\u7edf\u5bb9\u9519\u884c\u4e3a\u5047\u8bbe\\n- \u6267\u884c\u6df7\u6c8c\u5b9e\u9a8c\\n- \u68c0\u67e5\u7cfb\u7edf\u7a33\u6001\u6307\u6807\\n- \u8bb0\u5f55&\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c\\n- \u4fee\u590d\u53d1\u73b0\u7684\u95ee\u9898\\n- \u81ea\u52a8\u5316\u6301\u7eed\u8fdb\u884c\u9a8c\u8bc1\\n\\n## \u63a8\u8350\u5de5\u5177\u4ea7\u54c1\\n![awesome-chaos-engineering.png](https://user-images.githubusercontent.com/3992234/63409859-9473e200-c424-11e9-89bc-09eff69dd390.jpg)\\n\u5927\u5bb6\u53ef\u4ee5\u4ece\u5de5\u5177\u7684\u573a\u666f\u4e30\u5bcc\u5ea6\u3001\u7c7b\u578b\u3001\u6613\u7528\u6027\u7b49\u65b9\u9762\u6765\u9009\u62e9\u4e00\u6b3e\u5408\u9002\u7684\u5de5\u5177\uff0cawesome-chaos-engineering Github \u9879\u76ee\u6536\u7eb3\u4e86\u4e00\u4e9b\u5f00\u6e90\u7684\u6df7\u6c8c\u5de5\u7a0b\u5de5\u5177\uff0c\u5728 CNCF Landscape \u4e2d\u6df7\u6c8c\u5de5\u7a0b\u4f5c\u4e3a\u5355\u72ec\u7684\u4e00\u4e2a\u9886\u57df\u5b58\u5728\uff0c\u5e76\u4e14\u6536\u7eb3\u4e86\u4e00\u4e9b\u4e3b\u6d41\u7684\u5de5\u5177\uff0c\u5305\u542b\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684 ChaosBlade \u5de5\u5177\u548c AHAS \u963f\u91cc\u4e91\u4ea7\u54c1\u3002\\n![cncf-landscape.png](https://user-images.githubusercontent.com/3992234/63409944-b705fb00-c424-11e9-887f-5e057b31536a.jpg)\\n\u4e0b\u6587\u91cd\u70b9\u4ecb\u7ecd ChaosBlade \u53ca\u5176\u76f8\u5173\u5b9e\u8df5\u3002\\n\\n### ChaosBlade\\n\\nChaosBlade \u4e2d\u6587\u540d\u6df7\u6c8c\u4e4b\u5203\uff0c\u662f\u4e00\u6b3e\u6df7\u6c8c\u5b9e\u9a8c\u5b9e\u65bd\u5de5\u5177\uff0c\u652f\u6301\u4e30\u5bcc\u7684\u5b9e\u9a8c\u573a\u666f\uff0c\u6bd4\u5982\u5e94\u7528\u3001\u5bb9\u5668\u3001\u57fa\u7840\u8d44\u6e90\u7b49\u3002\u5de5\u5177\u4f7f\u7528\u7b80\u5355\uff0c\u6269\u5c55\u65b9\u4fbf\uff0c\u5176\u9075\u5faa\u793e\u533a\u63d0\u51fa\u7684\u6df7\u6c8c\u5b9e\u9a8c\u6a21\u578b\u3002Github \u5730\u5740\uff1ahttps://github.com/chaosblade-io/chaosblade\\n\\n#### \u529f\u80fd\u548c\u7279\u70b9\\n**\u573a\u666f\u4e30\u5bcc\u5ea6\u9ad8**\\nChaosBlade \u652f\u6301\u7684\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f\u4e0d\u4ec5\u8986\u76d6\u57fa\u7840\u8d44\u6e90\uff0c\u5982 CPU \u6ee1\u8f7d\u3001\u78c1\u76d8 IO \u9ad8\u3001\u7f51\u7edc\u5ef6\u8fdf\u7b49\uff0c\u8fd8\u5305\u62ec\u8fd0\u884c\u5728 JVM \u4e0a\u7684\u5e94\u7528\u5b9e\u9a8c\u573a\u666f\uff0c\u5982 Dubbo \u8c03\u7528\u8d85\u65f6\u548c\u8c03\u7528\u5f02\u5e38\u3001\u6307\u5b9a\u65b9\u6cd5\u5ef6\u8fdf\u6216\u629b\u5f02\u5e38\u4ee5\u53ca\u8fd4\u56de\u7279\u5b9a\u503c\u7b49\uff0c\u540c\u65f6\u6d89\u53ca\u5bb9\u5668\u76f8\u5173\u7684\u5b9e\u9a8c\uff0c\u5982\u6740\u5bb9\u5668\u3001\u6740 Pod\u3002\u540e\u7eed\u4f1a\u6301\u7eed\u7684\u589e\u52a0\u5b9e\u9a8c\u573a\u666f\u3002\\n\\n**\u4f7f\u7528\u7b80\u6d01\uff0c\u6613\u4e8e\u7406\u89e3**\\nChaosBlade \u901a\u8fc7 CLI \u65b9\u5f0f\u6267\u884c\uff0c\u5177\u6709\u53cb\u597d\u7684\u547d\u4ee4\u63d0\u793a\u529f\u80fd\uff0c\u53ef\u4ee5\u7b80\u5355\u5feb\u901f\u7684\u4e0a\u624b\u4f7f\u7528\u3002\u547d\u4ee4\u7684\u4e66\u5199\u9075\u5faa\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u5185\u591a\u5e74\u6545\u969c\u6d4b\u8bd5\u548c\u6f14\u7ec3\u5b9e\u8df5\u62bd\u8c61\u51fa\u7684\u6545\u969c\u6ce8\u5165\u6a21\u578b\uff0c\u5c42\u6b21\u6e05\u6670\uff0c\u6613\u4e8e\u9605\u8bfb\u548c\u7406\u89e3\uff0c\u964d\u4f4e\u4e86\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u65bd\u7684\u95e8\u69db\u3002\\n\\n**\u52a8\u6001\u52a0\u8f7d\uff0c\u65e0\u4fb5\u5165**\\nChaosBlade\u91c7\u7528\u52a8\u6001\u6545\u969c\u6ce8\u5165\u7684\u65b9\u5f0f\uff0c\u6267\u884c\u6df7\u6c8c\u5b9e\u9a8c\u65f6\u7528\u6237\u7cfb\u7edf\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u7cfb\u7edf\u6539\u9020\u6216\u53d1\u5e03\uff0c\u5f00\u7bb1\u5373\u7528\u3002\\n\\n**\u573a\u666f\u6269\u5c55\u65b9\u4fbf**\\n\u6240\u6709\u7684 ChaosBlade \u5b9e\u9a8c\u6267\u884c\u5668\u540c\u6837\u9075\u5faa\u4e0a\u8ff0\u63d0\u5230\u7684\u6545\u969c\u6ce8\u5165\u6a21\u578b\uff0c\u4f7f\u5b9e\u9a8c\u573a\u666f\u6a21\u578b\u7edf\u4e00\uff0c\u4fbf\u4e8e\u5f00\u53d1\u548c\u7ef4\u62a4\u3002\u6a21\u578b\u672c\u8eab\u901a\u4fd7\u6613\u61c2\uff0c\u5b66\u4e60\u6210\u672c\u4f4e\uff0c\u53ef\u4ee5\u4f9d\u636e\u6a21\u578b\u65b9\u4fbf\u5feb\u6377\u7684\u6269\u5c55\u66f4\u591a\u7684\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f\u3002\\n\\n#### \u4f7f\u7528\u65b9\u5f0f\\n\u5728 ChaosBlade Release \u9875\u9762\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684\u5305\uff0c\u89e3\u538b\u5373\u7528\u3002\u5982\u521b\u5efa\u4e00\u4e2a CPU \u6ee1\u8f7d\u5b9e\u9a8c\uff0c\u547d\u4ee4\u4e3a\uff1a\\n```\\nblade create cpu fullload\\n```\\n\u5177\u4f53\u4f7f\u7528\u65b9\u5f0f\u53ef\u8be6\u89c1\uff1a[ChaosBlade \u65b0\u624b\u6307\u5357](https://github.com/chaosblade-io/chaosblade/wiki/%E6%96%B0%E6%89%8B%E6%8C%87%E5%8D%97)\\n\\n\u4e2d\u6587\u4f7f\u7528\u6587\u6863\uff1a[\u5e2e\u52a9\u6587\u6863](https://chaosblade-io.gitbook.io/chaosblade-help-zh-cn/)\\n\\n#### \u6df7\u6c8c\u5b9e\u9a8c\u6a21\u578b\\n![](https://user-images.githubusercontent.com/3992234/63409808-80c87b80-c424-11e9-9fa8-26b52e1fef73.jpg)\\n\u8be5\u6a21\u578b\u5206\u56db\u6b21\uff0c\u5c42\u5c42\u9012\u8fdb\uff0c\u5f88\u6e05\u6670\u7684\u8868\u8fbe\u51fa\u5bf9\u4ec0\u4e48\u7ec4\u4ef6\u505a\u5b9e\u9a8c\uff0c\u5b9e\u9a8c\u8303\u56f4\u662f\u4ec0\u4e48\uff0c\u5b9e\u9a8c\u89e6\u53d1\u7684\u5339\u914d\u89c4\u5219\u6709\u54ea\u4e9b\uff0c\u6267\u884c\u4ec0\u4e48\u5b9e\u9a8c\u3002\u8be5\u6a21\u578b\u7b80\u6d01\u3001\u901a\u7528\uff0c\u8bed\u8a00\u9886\u57df\u65e0\u5173\u3001\u6613\u4e8e\u5b9e\u73b0\u3002\u963f\u91cc\u96c6\u56e2\u5185\u7684 C++\u3001NodeJS\u3001Dart \u5e94\u7528\u4ee5\u53ca\u5bb9\u5668\u5e73\u53f0\u7684\u5b9e\u9a8c\u573a\u666f\u90fd\u57fa\u4e8e\u6b64\u6a21\u578b\u5b9e\u73b0\u3002\u6b64\u6a21\u578b\u5177\u6709\u5f88\u91cd\u8981\u7684\u610f\u4e49\uff0c\u4f9d\u636e\u6b64\u6a21\u578b\u53ef\u4ee5\u66f4\u7cbe\u51c6\u7684\u63cf\u8ff0\u3001\u66f4\u597d\u7684\u7406\u89e3\u3001\u66f4\u65b9\u4fbf\u6c89\u6dc0\u5b9e\u9a8c\u573a\u666f\u4ee5\u53ca\u53d1\u6398\u66f4\u591a\u7684\u573a\u666f\u3002\u4f9d\u636e\u6b64\u6a21\u578b\u5b9e\u73b0\u7684\u5de5\u5177\u66f4\u52a0\u89c4\u8303\u3001\u7b80\u6d01\u3002\u5b9e\u9a8c\u6a21\u578b\u4ecb\u7ecd\u53ef\u8be6\u89c1\uff1a[\u6df7\u6c8c\u5b9e\u9a8c\u6a21\u578b\u4ecb\u7ecd](https://github.com/chaosblade-io/chaosblade/wiki/%E6%B7%B7%E6%B2%8C%E5%AE%9E%E9%AA%8C%E6%A8%A1%E5%9E%8B)\u3002\\n\\n## \u6df7\u6c8c\u5de5\u7a0b\u5b9e\u8df5\u6848\u4f8b\\n![Screen Shot 2019-08-21 at 2.44.42 P](https://user-images.githubusercontent.com/3992234/63409672-35ae6880-c424-11e9-8a93-f4b10bdf6afb.png)\\n\u6b64\u62d3\u6251\u56fe\u6765\u81ea\u4e8e\u963f\u91cc\u4e91 AHAS \u4ea7\u54c1\u67b6\u6784\u611f\u77e5\u529f\u80fd\uff0c\u53ef\u81ea\u52a8\u611f\u77e5\u67b6\u6784\u62d3\u6251\uff0c\u5e76\u4e14\u53ef\u4ee5\u5c55\u793a\u8fdb\u7a0b\u3001\u7f51\u7edc\u3001\u8282\u70b9\u7b49\u6570\u636e\u3002\u8fd9\u4e2a\u5206\u5e03\u5f0f\u670d\u52a1 Demo \u5206\u4e09\u7ea7\u8c03\u7528\uff0cconsumer \u8c03\u7528 provider\uff0cprovider \u8c03\u7528 base\uff0c\u540c\u65f6 provider \u8fd8\u8c03\u7528 mk-demo \u6570\u636e\u5e93\uff0cprovider \u548c base \u670d\u52a1\u5177\u6709\u4e24\u4e2a\u5b9e\u4f8b\uff0c\u5728 AHAS \u67b6\u6784\u62d3\u6251\u56fe\u4e0a\uff0c\u6211\u4eec\u70b9\u51fb\u4e00\u4e2a\u5b9e\u4f8b\u8282\u70b9\uff0c\u53ef\u4ee5\u5230\u975e\u5e38\u6e05\u6670\u7684\u8c03\u7528\u5173\u7cfb\u3002\u6211\u4eec\u540e\u9762\u7ed3\u5408\u8fd9\u4e2a Demo \u53bb\u8bb2\u89e3\u5b9e\u8df5\u3002\\n\\n### \u9a8c\u8bc1\u76d1\u63a7\u544a\u8b66\\n![Screen Shot 2019-08-21 at 2.43.36 P](https://user-images.githubusercontent.com/3992234/63409252-63df7880-c423-11e9-9b39-13e9e5dca075.png)  \\n![Screen Shot 2019-08-21 at 2.43.58 P](https://user-images.githubusercontent.com/3992234/63409276-6e017700-c423-11e9-945d-4312005ba27e.png)\\n\u6848\u4f8b\u4e00\uff0c\u6211\u4eec\u9a8c\u8bc1\u7cfb\u7edf\u7684\u76d1\u63a7\u544a\u8b66\u6027\u6709\u6548\u6027\u3002\u6309\u7167\u524d\u9762\u63d0\u5230\u7684\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u65bd\u6b65\u9aa4\uff0c\u90a3\u4e48\u8fd9\u4e2a\u6848\u4f8b\u6267\u884c\u7684\u5b9e\u9a8c\u573a\u666f\u662f\u6570\u636e\u5e93\u8c03\u7528\u5ef6\u8fdf\uff0c\u6211\u4eec\u5148\u5b9a\u4e49\u76d1\u63a7\u6307\u6807\uff1a\u6162 SQL \u6570\u548c\u544a\u8b66\u4fe1\u606f\uff0c\u505a\u51fa\u671f\u671b\u5047\u8bbe\uff1a\u6162 SQL \u6570\u589e\u52a0\uff0c\u9489\u9489\u7fa4\u6536\u5230\u6162 SQL \u544a\u8b66\u3002\u63a5\u4e0b\u6765\u6267\u884c\u5b9e\u9a8c\u3002\u6211\u4eec\u76f4\u63a5\u4f7f\u7528 ChaosBlade \u5de5\u5177\u6267\u884c\uff0c\u53ef\u4ee5\u770b\u4e0b\u5de6\u4e0b\u89d2\uff0c\u6211\u4eec\u5bf9 demo-provider \u6ce8\u5165\u8c03\u7528 mysql \u67e5\u8be2\u65f6\uff0c\u82e5\u6570\u636e\u5e93\u662f demo \u4e14\u8868\u540d\u662f d_discount\uff0c\u5219\u5bf9 50% \u7684\u67e5\u8be2\u64cd\u4f5c\u5ef6\u8fdf 600 \u6beb\u79d2\u3002\u6211\u4eec\u4f7f\u7528\u963f\u91cc\u4e91\u4ea7\u54c1 ARMS \u505a\u76d1\u63a7\u544a\u8b66\u3002\u5927\u5bb6\u53ef\u4ee5\u770b\u5230\uff0c\u5f53\u6267\u884c\u5b8c\u6df7\u6c8c\u5b9e\u9a8c\u540e\uff0c\u5f88\u5feb\u9489\u9489\u7fa4\u91cc\u5c31\u6536\u5230\u4e86\u62a5\u8b66\u3002\u6240\u4ee5\u6211\u4eec\u5bf9\u6bd4\u4e0b\u4e4b\u524d\u5b9a\u4e49\u7684\u76d1\u63a7\u6307\u6807\uff0c\u662f\u7b26\u5408\u9884\u671f\u7684\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\u8fd9\u6b21\u7b26\u5408\u9884\u671f\u5e76\u4e0d\u4ee3\u8868\u4ee5\u540e\u4e5f\u7b26\u5408\uff0c\u6240\u4ee5\u9700\u8981\u901a\u8fc7\u6df7\u6c8c\u5de5\u7a0b\u6301\u7eed\u6027\u7684\u9a8c\u8bc1\u3002\u51fa\u73b0\u6162 SQL\uff0c\u53ef\u901a\u8fc7 ARMS \u7684 [\u94fe\u8def\u8ffd\u8e2a](https://help.aliyun.com/document_detail/63796.html) \u6765\u6392\u67e5\u5b9a\u4f4d\uff0c\u53ef\u4ee5\u5f88\u6e05\u695a\u7684\u770b\u51fa\u54ea\u6761\u8bed\u53e5\u6267\u884c\u6162\u3002\\n\\n### \u6848\u4f8b\u4e8c\\n![Screen Shot 2019-08-21 at 2.44.07 P](https://user-images.githubusercontent.com/3992234/63409297-778adf00-c423-11e9-9179-d991eab7b6db.png)\\n\u524d\u9762\u8bb2\u4e86\u4e00\u4e2a\u7b26\u5408\u9884\u671f\u7684\u6848\u4f8b\uff0c\u6211\u4eec\u518d\u6765\u770b\u4e00\u4e2a\u4e0d\u7b26\u5408\u9884\u671f\u7684\u3002\u6b64\u6848\u4f8b\u662f\u9a8c\u8bc1\u7cfb\u7edf\u5f02\u5e38\u5b9e\u4f8b\u9694\u79bb\u7684\u80fd\u529b\uff0c\u6211\u4eec\u7684 Demo \u4e2d consumer \u8c03\u7528 provider \u670d\u52a1\uff0cprovider \u670d\u52a1\u5177\u6709\u4e24\u4e2a\u5b9e\u4f8b\uff0c\u6211\u4eec\u5bf9\u5176\u4e2d\u4e00\u4e2a\u6ce8\u5165\u5ef6\u8fdf\u6545\u969c\uff0c\u76d1\u63a7\u6307\u6807\u662f consumer \u7684 QPS\uff0c\u7a33\u6001\u5728 510 \u5de6\u53f3\u3002\u6211\u4eec\u505a\u7684\u5bb9\u9519\u5047\u8bbe\u662f\u7cfb\u7edf\u4f1a\u81ea\u52a8\u9694\u79bb\u6216\u4e0b\u7ebf\u51fa\u95ee\u9898\u7684\u670d\u52a1\u5b9e\u4f8b\uff0c\u9632\u6b62\u8bf7\u6c42\u8def\u7531\u7684\u6b64\u5b9e\u4f8b\uff0c\u6240\u6709 QPS \u4f1a\u6709\u77ed\u6682\u7684\u4e0b\u8dcc\uff0c\u4f46\u5f88\u5feb\u4f1a\u6062\u590d\u3002\u8fd9\u4e2a\u6848\u4f8b\uff0c\u6211\u4eec\u4f7f\u7528\u963f\u91cc\u4e91 AHAS \u6df7\u6c8c\u5b9e\u9a8c\u5e73\u53f0\u6765\u6267\u884c\uff0c\u6211\u4eec\u5bf9 demo-provider-1 \u6ce8\u5165\u5ef6\u8fdf\u6545\u969c\uff0c\u57fa\u4e8e\u6b64\u5e73\u53f0\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u6267\u884c\u6df7\u6c8c\u5b9e\u9a8c\u3002\u6267\u884c\u6df7\u6c8c\u5b9e\u9a8c\u540e\uff0cQPS \u4e0b\u8dcc\u5230 40 \u5de6\u53f3\uff0c\u5f88\u957f\u65f6\u95f4\u6ca1\u6709\u81ea\u52a8\u6062\u590d\uff0c\u6240\u4ee5\u4e0d\u7b26\u5408\u9884\u671f\uff0c\u6211\u4eec\u901a\u8fc7\u4eba\u5de5\u7684\u65b9\u5f0f\u5bf9\u8be5\u5f02\u5e38\u7684\u5b9e\u4f8b\u505a\u4e0b\u7ebf\u5904\u7406\uff0c\u5f88\u5feb\u5c31\u770b\u5230\uff0cconsumer \u7684 QPS \u6062\u590d\u6b63\u5e38\u3002\u6240\u4ee5\u6211\u4eec\u901a\u8fc7\u6df7\u6c8c\u5de5\u7a0b\u53d1\u73b0\u4e86\u7cfb\u7edf\u95ee\u9898\uff0c\u6211\u4eec\u540e\u9762\u9700\u8981\u505a\u5c31\u662f\u8bb0\u5f55\u6b64\u95ee\u9898\uff0c\u5e76\u4e14\u63a8\u52a8\u4fee\u590d\uff0c\u540e\u7eed\u505a\u6301\u7eed\u6027\u7684\u9a8c\u8bc1\u3002\\n\\n## \u52a0\u5165\u6211\u4eec\\n- ChaosBlade \u9489\u9489\u8ba8\u8bba\u7fa4\u53f7\uff1a23177705"}]}')}}]);