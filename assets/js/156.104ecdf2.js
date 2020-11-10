(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{475:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据结构堆栈-vs-内存堆栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构堆栈-vs-内存堆栈","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据结构堆栈 vs 内存堆栈")]),t._v(" "),a("p",[t._v("数据结构中的堆和内存中的堆是两个完全不同的概念。前者是组织数据的一种手段（或者叫工具），后者只是指明数据存储在哪种内存区之上。")]),t._v(" "),a("p",[t._v("数据结构中的一般称“栈(stack)”，是一种后进先出的数据结构。它是一种概念，或者说是一种逻辑技术，与语言、平台无关。")]),t._v(" "),a("p",[t._v("内存管理中的“堆栈”其实是分为堆(heap)和栈(stack)的，以引用变量为例，引用变量本身存储在栈中，引用变量指向的值存储在堆中。\n如int[] arr = {1, 2, 3};\n变量arr(数组名)存储在栈中，变量arr的值(数组元素)存储在堆中(普通结构)。\n内存管理中的栈采用的就是数据结构中的栈的思想，即遵循后进先出的管理方法。\n好比数据结构中的栈是一项先进的技术，在内存管理中采用了该技术。")]),t._v(" "),a("h2",{attrs:{id:"数据结构中的堆栈-堆结构和栈结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构中的堆栈-堆结构和栈结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据结构中的堆栈 堆结构和栈结构")]),t._v(" "),a("p",[a("code",[t._v("栈是一种特殊的列表")]),t._v("，栈内的元素只能通过列表的一端访问，这一端称为栈顶。\n栈被称为是一种"),a("code",[t._v("后入先出")]),t._v("（LIFO，last-in-first-out）的数据结构。\n由于栈具有后入先出的特点，所以任何不在栈顶的元素都无法访问。\n为了得到栈底的元素，必须先拿掉上面的元素。")]),t._v(" "),a("p",[a("code",[t._v("堆是一种经过排序的树形数据结构")]),t._v("，每个结点都有一个值。\n通常我们所说的堆的数据结构，是指二叉堆。\n堆的特点是根结点的值最小（或最大），且根结点的两个子树也是一个堆。\n由于堆的这个特性，常用来实现优先队列，堆的存取是随意，这就如同我们在图书馆的书架上取书，\n虽然书的摆放是有顺序的，但是我们想取任意一本时不必像栈一样，先取出前面所有的书，\n我们只需要关心书的名字。")]),t._v(" "),a("h2",{attrs:{id:"内存中的堆栈-堆内存-和栈内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存中的堆栈-堆内存-和栈内存","aria-hidden":"true"}},[t._v("#")]),t._v(" 内存中的堆栈 堆内存 和栈内存")]),t._v(" "),a("h3",{attrs:{id:"基本类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本类型")]),t._v(" "),a("p",[t._v("有Undefined、Null、Boolean、Number 和String。这些类型在内存中分别占有固定大小的空间，"),a("code",[t._v("他们的值保存在栈空间")]),t._v("，我们通过按值来访问的。")]),t._v(" "),a("h3",{attrs:{id:"引用类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 引用类型")]),t._v(" "),a("p",[t._v("Array,Function,Object都是引用数据类型。")]),t._v(" "),a("p",[t._v("当我们要访问堆内存中的引用数据类型时，实际上我们首先是从变量中获取了该对象的地址指针， 然后再从堆内存中取得我们需要的数据。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基本数据类型-栈内存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基本数据类型-栈内存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'this is string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基本数据类型-栈内存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象的指针存放在栈内存中，指针指向的对象存放在堆内存中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数组的指针存放在栈内存中，指针指向的数组存放在堆内存中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/25/16b8c0b5752823f6?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),t._v(" "),a("p",[t._v("在JS中，基本数据类型变量大小固定，并且操作简单容易，所以把它们放入栈中存储。 引用类型变量大小不固定，所以把它们分配给堆中，让他们申请空间的时候自己确定大小，这样把它们分开存储能够使得程序运行起来占用的内存最小。")]),t._v(" "),a("h2",{attrs:{id:"为什么内存分配中要用栈这个数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么内存分配中要用栈这个数据结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么内存分配中要用栈这个数据结构")]),t._v(" "),a("p",[a("code",[t._v("栈内存一般存储的是函数的调用信息和函数中申明的变量")]),t._v("。")]),t._v(" "),a("p",[t._v("因为函数的调用是递归的，"),a("code",[t._v("外层函数一定比内层被调用的函数先加载和执行")]),t._v("，而一定"),a("code",[t._v("等到内层被调用函数结束后才能结束")]),t._v("，这个先进后出的机制就是为什么叫栈内存的原因。")]),t._v(" "),a("blockquote",[a("p",[t._v("JavaScript中函数的执行过程，其实就是一个入栈出栈的过程。")])]),t._v(" "),a("h2",{attrs:{id:"闭包中的变量都保存在堆内存中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包中的变量都保存在堆内存中","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包中的变量都保存在堆内存中")]),t._v(" "),a("p",[t._v("闭包中的变量并不保存在栈内存中，而是保存在堆内存中。 这也就解释了函数调用之后之后为什么闭包还能引用到函数内的变量。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。")]),t._v(" "),a("p",[a("code",[t._v("函数 A 弹出调用栈后，函数 A 中的变量这时候是存储在堆上的")]),t._v("，所以函数B依旧能引用到函数A中的变量。\n现在的 JS 引擎可以通过逃逸分析辨别出哪些变量需要存储在堆上，哪些需要存储在栈上。")]),t._v(" "),a("p",[t._v("https://juejin.im/post/5d116a9df265da1bb47d717b")])])},[],!1,null,null,null);s.default=r.exports}}]);