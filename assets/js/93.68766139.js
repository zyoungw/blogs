(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{377:function(t,a,s){"use strict";s.r(a);var n=s(9),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javascript-event-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-event-loop","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript Event Loop")]),t._v(" "),s("p",[t._v("javascript是一门单线程语言,Event Loop是javascript的执行机制")]),t._v(" "),s("p",[t._v('同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入Event Table并注册函数。\n当指定的事情完成时，Event Table会将这个函数移入Event Queue。\n主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。\n上述过程会不断重复，也就是常说的Event Loop(事件循环)。')]),t._v(" "),s("h2",{attrs:{id:"js-运行机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-运行机制","aria-hidden":"true"}},[t._v("#")]),t._v(" JS 运行机制")]),t._v(" "),s("p",[t._v("JS 执行是单线程的，它是基于事件循环的。事件循环大致分为以下几个步骤：")]),t._v(" "),s("p",[t._v("（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。")]),t._v(" "),s("p",[t._v('（2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。')]),t._v(" "),s("p",[t._v('（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。')]),t._v(" "),s("p",[t._v("（4）主线程不断重复上面的第三步。")]),t._v(" "),s("p",[t._v("主线程的执行过程就是一个 tick，而所有的异步结果都是通过 “任务队列” 来调度。 消息队列中存放的是一个个的任务（task）。规范中规定 task 分为两大类，分别是 macro task 和 micro task，并且每个 macro task 结束后，都要清空所有的 micro task。")]),t._v(" "),s("p",[t._v("在浏览器环境中，常见的 macro task 有 setTimeout、MessageChannel、postMessage、setImmediate；常见的 micro task 有 MutationObsever 和 Promise.then。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 执行顺序")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("macroTask "),s("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" macroTaskQueue"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 1. Handle current MACRO-TASK")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("handleMacroTask")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      \n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 2. Handle all MICRO-TASK")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microTask "),s("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" microTaskQueue"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("handleMicroTask")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microTask"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://ustbhuangyi.github.io/vue-analysis/reactive/next-tick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS 运行机制"),s("OutboundLink")],1)])])])},[],!1,null,null,null);e.options.__file="js-event-loop.md";a.default=e.exports}}]);