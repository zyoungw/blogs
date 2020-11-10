(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{456:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"circle-ci用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#circle-ci用法","aria-hidden":"true"}},[t._v("#")]),t._v(" Circle CI用法")]),t._v(" "),a("h2",{attrs:{id:"基本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本")]),t._v(" "),a("p",[t._v("1.Register CircleCI\nOpen CircleCI official website and login with your GitHub account.")]),t._v(" "),a("p",[t._v("2.Enable repository\nCheck the switch button of the repos you want to manage on CircleCI.")]),t._v(" "),a("p",[t._v("3.Make config.yml\nCreate a config file for CircleCI named config.yml in your project root or .circleci directory.")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("orbs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" circleci/node@1.1.6\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("executor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node/default\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" checkout\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node/with-cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm run build\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workflows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("and"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n")])])]),a("h2",{attrs:{id:"高级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级","aria-hidden":"true"}},[t._v("#")]),t._v(" 高级")]),t._v(" "),a("p",[t._v("需要push权限发布gh-pages。")]),t._v(" "),a("p",[t._v("主要是在生成公钥和私钥，公钥放在github项目的setting中，私钥放在circle ci的setting中。然后circleci会返回一个私钥指纹fingerprints，把这个配置进yml文件中即可赋予circleci拥有github项目的push权限。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("注意记得设置全局的email/username，不然gh-pages工具会报错")])]),t._v(" "),a("ol",[a("li",[t._v("Generate a new ssh key")]),t._v(" "),a("li",[t._v("Upload ssh key\n"),a("ul",[a("li",[t._v("Upload the id_rsa.pub on your GitHub repo settings at https://github.com/<your_name>/<your_repo>/settings/keys")]),t._v(" "),a("li",[t._v("Go to https://circleci.com/gh/<your_name>/<your_repo>/edit#ssh on CircleCI and add the private key id_rsa that you just created. Enter github.com in the Hostname field and press the submit button.")])])]),t._v(" "),a("li",[t._v("Add ssh key to your config file(不要忘了全局设置email/username)")])]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("add_ssh_keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fingerprints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'54:19:54:8f:1d:d3:d7:c3:8c:06:09:c0:b3:36:5e:08'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" checkout\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node/with-cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm run build\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("github\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n                    git config --global user.email "782655835@qq.com"\n                    git config --global user.name "lq782655835"\n                    npm run ghpages')]),t._v("\n")])])]),a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[t._v("https://juejin.im/entry/5a38ba46f265da43133d4545")]),t._v(" "),a("li",[t._v("https://hddhyq.github.io/2019/01/31/CircleCI%E5%AE%9E%E8%B7%B5gh-pages%E9%83%A8%E7%BD%B2/")])]),t._v(" "),a("h2",{attrs:{id:"mocha开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mocha开发","aria-hidden":"true"}},[t._v("#")]),t._v(" Mocha开发")]),t._v(" "),a("ol",[a("li",[t._v("添加工具npm install mocha chai --save-dev")]),t._v(" "),a("li",[t._v("添加文件test/index.spec.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" expect "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chai'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mocha'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'download'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v('启动单测命令："mocha --timeout 60000 test/**/*.spec.js"')])]),t._v(" "),a("h2",{attrs:{id:"辅助工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#辅助工具","aria-hidden":"true"}},[t._v("#")]),t._v(" 辅助工具")]),t._v(" "),a("ul",[a("li",[t._v("husky + lint-staged + prettier 基础统一格式化代码")]),t._v(" "),a("li",[t._v("commitlint + husky: 规范commit 日志。\n"),a("ul",[a("li",[t._v("教程：https://github.com/conventional-changelog/commitlint")]),t._v(" "),a("li",[t._v("npm install --save-dev @commitlint/{config-conventional,cli}")])])]),t._v(" "),a("li",[t._v("commitizen cz-conventional-changelog：使用git-cz代替git commit命令，统一团队Git commit 文本标准。\n"),a("ul",[a("li",[t._v("教程：https://www.jianshu.com/p/eff5726f8633")]),t._v(" "),a("li",[t._v("npm i commitizen cz-conventional-changelog --save-dev")])])]),t._v(" "),a("li",[t._v("conventional-changelog-cli 自动根据commit生成changelog\n"),a("ul",[a("li",[t._v("教程：https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli")]),t._v(" "),a("li",[t._v("npm install conventional-changelog-cli -D")])])]),t._v(" "),a("li",[t._v("github\n"),a("ul",[a("li",[t._v("gh-pages（发布demo到github）")]),t._v(" "),a("li",[t._v("release-it/"),a("a",{attrs:{href:"https://github.com/conventional-changelog/standard-version",target:"_blank",rel:"noopener noreferrer"}},[t._v("standard-version"),a("OutboundLink")],1),t._v("（自动提交github代码 + 自动修改lib库版本 + 推送npm服务器）")])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("husky + lint-staged + prettier作为基础工具。\ncommitlint约束提交规范。\ncommitizen让工具通过select选项，进行git commit。\nrelease-it核心是可以把包自动发送到npm上。")])]),t._v(" "),a("p",[t._v("cz工具教程：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("https://www.cnblogs.com/mengfangui/p/12634845.html（cz + log）")])]),t._v(" "),a("li",[a("p",[t._v("https://blog.csdn.net/weixin_33890526/article/details/91393527 cz适配器")])]),t._v(" "),a("li",[a("p",[t._v('平时开发提交commit： npm run commit "commit": "git add -A && git-cz",')])]),t._v(" "),a("li",[a("p",[t._v('发布npm包: npm publish "prepublish": "npm run build && release-it && npm run changelog",')])]),t._v(" "),a("li",[a("p",[t._v('发布docs: npm run docs "release:docs": "npm run build:docs && gh-pages -d docs/.vuepress/dist",')])])])])},[],!1,null,null,null);s.default=e.exports}}]);