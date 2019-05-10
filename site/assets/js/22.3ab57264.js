(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{349:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript-event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-event-loop","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript Event Loop")]),t._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("h3",{attrs:{id:"单线程、同步、异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单线程、同步、异步","aria-hidden":"true"}},[t._v("#")]),t._v(" 单线程、同步、异步")]),t._v(" "),a("p",[t._v("JS是单线程，单线程即任务是串行的，后一个任务需要等待前一个任务的执行，这就可能出现长时间的等待。但由于类似ajax网络请求、setTimeout时间延迟、DOM事件的用户交互等，这些任务并不消耗 CPU，是一种空等，资源浪费，因此出现了异步。通过将任务交给相应的异步模块去处理，主线程的效率大大提升，可以并行的去处理其他的操作。当异步处理完成，主线程空闲时，主线程读取相应的callback，进行后续的操作，最大程度的利用CPU。")]),t._v(" "),a("p",[t._v("此时出现了同步执行和异步执行的概念，同步执行是主线程按照顺序，CPU串行执行任务（通过执行栈，先进后出）；异步执行就是跳过等待，先处理后续的同步任务（不是说异步不执行了，而是交给网络模块、timer等并行进行任务）。由此"),a("code",[t._v("产生了事件循环与任务队列，来协调主线程与异步模块之间的工作。")])]),t._v(" "),a("h3",{attrs:{id:"引擎和runtime概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引擎和runtime概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 引擎和runtime概念")]),t._v(" "),a("p",[t._v("JS引擎是单线程的，它负责维护任务队列，并通过 Event Loop 的机制，按顺序把任务放入栈中执行。异步处理模块，是 runtime 提供的，拥有和JS引擎互不干扰的线程。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("引擎")]),t._v("：解释并编译代码，让它变成能交给机器运行的代码。")]),t._v(" "),a("li",[a("code",[t._v("runtime")]),t._v("：就是运行环境，它提供一些对外接口供JS调用，以跟外界打交道，比如，浏览器环境、Node.js环境。不同的runtime，会提供不同的接口，比如，在 Node.js 环境中，我们可以通过 require 来引入模块；而在浏览器中，我们有 window、 DOM。\n"),a("ul",[a("li",[t._v("浏览器异步模块\n"),a("ul",[a("li",[t._v("类似onclick等，由"),a("router-link",{attrs:{to:"/js/http-base-2.browser.html"}},[t._v("浏览器内核")]),t._v("的DOM binding模块处理，事件触发时，回调函数添加到任务队列中；")],1),t._v(" "),a("li",[t._v("setTimeout等，由浏览器内核的Timer模块处理，时间到达时，回调函数添加到任务队列中；")]),t._v(" "),a("li",[t._v("Ajax，由浏览器内核的Network模块处理，网络请求返回后，添加到任务队列中。")])])])])])]),t._v(" "),a("blockquote",[a("p",[t._v("浏览器的 Event Loop 遵循的是HTML Standand，而 NodeJs 的 Event Loop 遵循的是 libuv。")])]),t._v(" "),a("h2",{attrs:{id:"事件循环机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件循环机制")]),t._v(" "),a("h3",{attrs:{id:"event-loop定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop定义","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Loop定义")]),t._v(" "),a("p",[t._v("网络上许多文章关于event loop定义不是很清晰，这里我们看下官方标准规范。有趣的是event loop不是定义在js语言中的，而是在"),a("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/webappapis.html#event-loops",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML Standand"),a("OutboundLink")],1),t._v("中。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Event loops Definitions\n\nTo coordinate events, user interaction, scripts, rendering, networking, and so forth, user agents must use event loops as described in this section. Each agent has an associated event loop.\n\n// 为了协调事件，用户交互，脚本，渲染，网络等，用户代理必须使用本节所述的event loop。\n")])])]),a("p",[t._v("事件，用户交互，"),a("strong",[t._v("脚本")]),t._v("，渲染，网络这些都是我们所熟悉的东西，他们都是由event loop协调的。触发一个click事件，进行一次ajax请求，背后都有event loop在运作。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("An event loop has one or more task queues. A task queue is a set of tasks.\n\nThe microtask queue is not a task queue.\n// 一个event loop有一个或者多个task队列。\n// microtask队列不是一个任务队列（在ES6规范中叫job）\n")])])]),a("p",[a("code",[t._v("task也被称为macrotask，而microtask更像是job概念(task == macrotask != microtask)")]),t._v("。")]),t._v(" "),a("p",[t._v("经典event loop图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*7GXoHZiIUhlKuKGT22gHmA.png",alt:""}})]),t._v(" "),a("p",[t._v("执行模型（以下为个人通俗版本，更细节可看官方"),a("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model",target:"_blank",rel:"noopener noreferrer"}},[t._v("Processing model"),a("OutboundLink")],1),t._v("）：")]),t._v(" "),a("ol",[a("li",[t._v("初始时，stack为空。整个全局script代码作为一个macrotask（macrotask == task），放入主线程中。")]),t._v(" "),a("li",[t._v("代码在主线程stack中执行。同步代码直接拿到结果，异步代码在对应线程中完后（比如ajax数据拿到了），放在"),a("code",[t._v("异步队列")]),t._v("。"),a("strong",[t._v("注意异步队列中放的是注册的回掉函数（函数里又是script代码）")]),t._v("。如果是micro代码(比如Promise.then)，马上放在"),a("code",[t._v("microtask队列")]),t._v("中。")]),t._v(" "),a("li",[t._v("执行完所有函数体代码，马上执行"),a("strong",[t._v("所有microtask队列的代码")]),t._v("。")]),t._v(" "),a("li",[t._v("此时stack为空，取下一个异步代码函数块，放入主线程中。然后重复2和3步骤,构成循环。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1200/1*64BQlpR00yfDKsXVv9lnIg.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"任务队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务队列","aria-hidden":"true"}},[t._v("#")]),t._v(" 任务队列")]),t._v(" "),a("p",[t._v("有两类任务队列：宏任务队列macrotasks和微任务队列microtasks，在最新标准中，它们被分别称为task与jobs。宏任务队列可以有多个，微任务队列只有一个，而且每一次event loop，都会清空微任务队列。")]),t._v(" "),a("ul",[a("li",[t._v("宏任务："),a("code",[t._v("script（全局任务，这个很重要）")]),t._v(", setTimeout, setInterval, setImmediate, I/O, UI rendering.")]),t._v(" "),a("li",[t._v("微任务：process.nextTick, Promise, Object.observer, MutationObserver.")])]),t._v(" "),a("p",[t._v("示意执行代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 初始时的全局代码script，作为第一个macroTaskQueue")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("macroTask "),a("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" macroTaskQueue"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 这里可能又会产生新的macroTask和microTask。")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 新产生的macroTask只能在下一个event loop中才能执行")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 新产生的microTask（job）会在当前event loop末尾执行")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("handleMacroTask")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 这里也可能又会产生新的macroTask和microTask。")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// microTaskQueue只有一个，新增的microTask附加到队列末尾，也会在当前event loop执行，而不是在下一个event loop循环")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microTask "),a("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" microTaskQueue"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("handleMicroTask")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microTask"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Promise"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("promise1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'promise1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("setTimeout1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'setTimeout1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Promise"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v("  "),a("span",{attrs:{class:"token function"}},[t._v("promise2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'promise2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("setTimeout2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'setTimeout2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// promise1")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// setTimeout1")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// promise2")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// setTimeout2")]),t._v("\n")])])]),a("p",[t._v("运行过程：")]),t._v(" "),a("p",[a("code",[t._v("script里的代码被列为一个task，放入task队列。")]),t._v("注意这里我们把全局script的代码也作为一个macrotask，网络上有些文章（如："),a("a",{attrs:{href:"https://www.cnblogs.com/hity-tt/p/6733062.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("任务队列、web API、JS主线程的相互协同"),a("OutboundLink")],1),t._v("）把全局的script当成同步执行代码，不是作为macrotask。但代表的意思是一样的，都会把microtask加载进主进程执行代码，同时在每一个event loop结尾，都有个microtasks需要全部执行完。")]),t._v(" "),a("p",[a("code",[t._v("初始情况，执行栈为空，循环1：")])]),t._v(" "),a("p",[t._v("【task队列：script ；microtask队列：】")]),t._v(" "),a("p",[t._v("从task队列中取出script任务，推入栈中执行。promise1列为microtask，setTimeout1列为task，setTimeout2列为task。")]),t._v(" "),a("p",[t._v("【task队列：setTimeout1 setTimeout2；microtask队列：promise1】")]),t._v(" "),a("p",[t._v("script任务执行完毕，执行microtask checkpoint，取出microtask队列的promise1执行。")]),t._v(" "),a("p",[a("code",[t._v("执行栈为空，循环2：")])]),t._v(" "),a("p",[t._v("【task队列：setTimeout1 setTimeout2；microtask队列：】")]),t._v(" "),a("p",[t._v("从task队列中取出setTimeout1，推入栈中执行，将promise2列为microtask。")]),t._v(" "),a("p",[t._v("【task队列：setTimeout2；microtask队列：promise2】")]),t._v(" "),a("p",[t._v("执行microtask checkpoint，取出microtask队列的promise2执行。")]),t._v(" "),a("p",[a("code",[t._v("执行栈为空，循环3：")])]),t._v(" "),a("p",[t._v("【task队列：setTimeout2；microtask队列：】")]),t._v(" "),a("p",[t._v("从task队列中取出setTimeout2，推入栈中执行。setTimeout2任务执行完毕，执行microtask checkpoint。")]),t._v(" "),a("p",[t._v("【task队列：；microtask队列：】")]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://flaviocopes.com/javascript-event-loop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The JavaScript Event Loop"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript Event Loop Explained"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://ustbhuangyi.github.io/vue-analysis/reactive/next-tick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS 运行机制"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/hity-tt/p/6733062.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("任务队列、web API、JS主线程的相互协同"),a("OutboundLink")],1)])])])])},[],!1,null,null,null);e.options.__file="js-base-3.event-loop.md";s.default=e.exports}}]);