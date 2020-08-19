(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{724:function(t,e,a){"use strict";a.r(e);var s=a(9),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git实用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git实用命令"}},[t._v("#")]),t._v(" Git实用命令")]),t._v(" "),a("blockquote",[a("p",[t._v("总结最常用的git命令操作。Mac推荐可视化软件"),a("code",[t._v("Sourcetree")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/43519854-8b1ed5c4-95c3-11e8-931f-2754963333d2.png",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_1-本地仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-本地仓库"}},[t._v("#")]),t._v(" 1. 本地仓库")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化本地git 以下所有操作的前提条件")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加当前所有变动文件到本地缓存区")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<commit-word>'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交缓存区内容到本地仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -am "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<commit-word>'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上面两步合并为一步的命令")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("feat-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建feat-name分支并切换到该分支")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有本地分支和远程分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("feat-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除本地feat-name分支")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前分支状态")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回滚到最近的commit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前的Git配置")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-远程仓库"}},[t._v("#")]),t._v(" 2. 远程仓库")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("URL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关联远程仓库，以下操作的前提条件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示远程仓库")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取远程代码到本地")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送本地到远程master分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin :branch-name "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程分支 # 等同于 git push origin --delete [branch-name]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge feat-name "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# feat-name分支内容合并到当前分支，适合不同分支间commit合并操作")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-高级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-高级"}},[t._v("#")]),t._v(" 3. 高级")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 变基。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 记住，rebase操作永远不在公共分支操作；同时rebase与公共分支名永远不同时出现")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 场景1:减少同一分支提交记录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 交互式合并当前分支最近三次的记录，用于简化提交记录。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意：不要合并先前提交的东西，也就是已经提交远程分支的纪录。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i HEAD~3\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 场景2: 把feat-A变得基于feat-B")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# # 把当前A分支的提交commit，变基到A和B分支共同祖先的commit上，然后加上B分支后续的commit。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reabse feat-B\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 子模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" https://github.com/djyde/ToProgress "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加子模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule status "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查子模块状态")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update ToProgress "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新子模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule deinit ToProgress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" ToPogress "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除子模块")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Tag")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看tag")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("comment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建tag")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --tags "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送tag")]),t._v("\n")])])]),a("h2",{attrs:{id:"_4-常用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用"}},[t._v("#")]),t._v(" 4. 常用")]),t._v(" "),a("h3",{attrs:{id:"_4-1-部署gh-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-部署gh-pages"}},[t._v("#")]),t._v(" 4.1 部署gh-pages")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// 部署gh-pages主页"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("一直在master分支上执行"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 把dist分支上传到master分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -am "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 意思是把远程master（注意不是本地master）分支的dist文件夹，")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到远程的gh-pages分支。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" subtree push --prefix dist origin gh-pages\n")])])]),a("p",[t._v("可以设置deploy命令：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"npm run build && git commit -am 'deploy' && git subtree push --prefix dist origin gh-pages\"")]),t._v(",\n")])])]),a("blockquote",[a("p",[t._v("以上是使用原生git命令，实际项目中更推荐"),a("a",{attrs:{href:""}},[t._v("gh-pages")]),t._v("这样的工具包。")])]),t._v(" "),a("h3",{attrs:{id:"_4-2-fork仓库同步代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-fork仓库同步代码"}},[t._v("#")]),t._v(" 4.2 fork仓库同步代码")]),t._v(" "),a("p",[t._v("将源项目代码同步到Fork出来的个人项目上")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#拉取Fork出来的分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone Fork的分支url\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#注意：进入项目根目录，执行下面操作")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看所有远程库(remote repo)的远程url")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#添加源分支url")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" upstream 替换成源项目url\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看所有远程库(remote repo)的远程url")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#从源分支获取最新的代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch upstream\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#切换到主分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#合并本地分支和源分支,本地库和远程的github原仓库同步")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge upstream/master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#push到fork分支,本地的仓库提交到github")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])])]),a("h3",{attrs:{id:"_4-3-git-emoji"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-git-emoji"}},[t._v("#")]),t._v(" 4.3 git emoji")]),t._v(" "),a("p",[t._v('执行 git commit 时使用 emoji 为本次提交打上一个 "标签", 使得此次 commit 的主要工作得以凸现，也能够使得其在整个提交历史中易于区分与查找。')]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("emoji")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("emoji 代码")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("commit 说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🎉 (庆祝)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":tada:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("初次提交")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("✨ (火花)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":sparkles:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("引入新功能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🔖 (书签)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":bookmark:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("发行/版本标签")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🐛 (bug)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":bug:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修复 bug")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🚑 (急救车)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":ambulance:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重要补丁")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🌐 (地球)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":globe_with_meridians:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("国际化与本地化")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("💄 (口红)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":lipstick:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("更新 UI 和样式文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🎬 (场记板)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":clapper:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("更新演示/示例")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🚨 (警车灯)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":rotating_light:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("移除 linter 警告")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🔧 (扳手)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":wrench:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修改配置文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("➕ (加号)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":heavy_plus_sign:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("增加一个依赖")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("➖ (减号)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":heavy_minus_sign:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("减少一个依赖")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("⬆️ (上升箭头)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":arrow_up:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("升级依赖")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("⬇️ (下降箭头)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":arrow_down:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("降级依赖")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("⚡️ (闪电)"),a("br"),t._v("🐎 (赛马)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":zap:")]),a("br"),a("code",[t._v(":racehorse:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("提升性能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("📈 (上升趋势图)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":chart_with_upwards_trend:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("添加分析或跟踪代码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🚀 (火箭)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":rocket:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("部署功能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ (白色复选框)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":white_check_mark:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("增加测试")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("📝 (备忘录)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":memo:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("撰写文档")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🔨 (锤子)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":hammer:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重大重构")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🎨 (调色板)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":art:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("改进代码结构/代码格式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🔥 (火焰)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":fire:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("移除代码或文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("✏️ (铅笔)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":pencil2:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修复 typo")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🚧 (施工)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":construction:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("工作进行中")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("👷 (工人)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":construction_worker:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("添加 CI 构建系统")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("💚 (绿心)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":green_heart:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修复 CI 构建问题")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🔒 (锁)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":lock:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修复安全问题")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🐳 (鲸鱼)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":whale:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Docker 相关工作")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🍎 (苹果)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":apple:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修复 macOS 下的问题")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🐧 (企鹅)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":penguin:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修复 Linux 下的问题")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("🏁 (旗帜)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(":checked_flag:")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修复 Windows 下的问题")])])])]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("常用 Git 命令清单"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/06/git_remote.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git远程操作详解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/rebase#start",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rebase 代替合并"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/submodules#start",target:"_blank",rel:"noopener noreferrer"}},[t._v("子模块"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://yrq110.me/post/tool/git-rebase-submodule-and-flow/",target:"_blank",rel:"noopener noreferrer"}},[t._v("git rebase/submodule/flow介绍"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://jartto.wang/2018/12/11/git-rebase/",target:"_blank",rel:"noopener noreferrer"}},[t._v("彻底搞懂 Git-Rebase"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);