# 数据结构堆栈 vs 内存堆栈

数据结构中的堆和内存中的堆是两个完全不同的概念。前者是组织数据的一种手段（或者叫工具），后者只是指明数据存储在哪种内存区之上。

数据结构中的一般称“栈(stack)”，是一种后进先出的数据结构。它是一种概念，或者说是一种逻辑技术，与语言、平台无关。

内存管理中的“堆栈”其实是分为堆(heap)和栈(stack)的，以引用变量为例，引用变量本身存储在栈中，引用变量指向的值存储在堆中。
如int[] arr = {1, 2, 3};
变量arr(数组名)存储在栈中，变量arr的值(数组元素)存储在堆中(普通结构)。
内存管理中的栈采用的就是数据结构中的栈的思想，即遵循后进先出的管理方法。
好比数据结构中的栈是一项先进的技术，在内存管理中采用了该技术。

## 数据结构中的堆栈 堆结构和栈结构

`栈是一种特殊的列表`，栈内的元素只能通过列表的一端访问，这一端称为栈顶。
栈被称为是一种`后入先出`（LIFO，last-in-first-out）的数据结构。
由于栈具有后入先出的特点，所以任何不在栈顶的元素都无法访问。
为了得到栈底的元素，必须先拿掉上面的元素。

`堆是一种经过排序的树形数据结构`，每个结点都有一个值。
通常我们所说的堆的数据结构，是指二叉堆。
堆的特点是根结点的值最小（或最大），且根结点的两个子树也是一个堆。
由于堆的这个特性，常用来实现优先队列，堆的存取是随意，这就如同我们在图书馆的书架上取书，
虽然书的摆放是有顺序的，但是我们想取任意一本时不必像栈一样，先取出前面所有的书，
我们只需要关心书的名字。

## 内存中的堆栈 堆内存 和栈内存

### 基本类型

有Undefined、Null、Boolean、Number 和String。这些类型在内存中分别占有固定大小的空间，`他们的值保存在栈空间`，我们通过按值来访问的。

### 引用类型

Array,Function,Object都是引用数据类型。

当我们要访问堆内存中的引用数据类型时，实际上我们首先是从变量中获取了该对象的地址指针， 然后再从堆内存中取得我们需要的数据。

``` js
// 基本数据类型-栈内存
let a1 = 0;
// 基本数据类型-栈内存
let a2 = 'this is string';
// 基本数据类型-栈内存
let a3 = null;

// 对象的指针存放在栈内存中，指针指向的对象存放在堆内存中
let b = { m: 20 };
// 数组的指针存放在栈内存中，指针指向的数组存放在堆内存中
let c = [1, 2, 3];
```

![](https://user-gold-cdn.xitu.io/2019/6/25/16b8c0b5752823f6?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



在JS中，基本数据类型变量大小固定，并且操作简单容易，所以把它们放入栈中存储。 引用类型变量大小不固定，所以把它们分配给堆中，让他们申请空间的时候自己确定大小，这样把它们分开存储能够使得程序运行起来占用的内存最小。

## 为什么内存分配中要用栈这个数据结构

`栈内存一般存储的是函数的调用信息和函数中申明的变量`。

因为函数的调用是递归的，`外层函数一定比内层被调用的函数先加载和执行`，而一定`等到内层被调用函数结束后才能结束`，这个先进后出的机制就是为什么叫栈内存的原因。

> JavaScript中函数的执行过程，其实就是一个入栈出栈的过程。

## 闭包中的变量都保存在堆内存中

闭包中的变量并不保存在栈内存中，而是保存在堆内存中。 这也就解释了函数调用之后之后为什么闭包还能引用到函数内的变量。

``` js
function A() {
  let a = 1;
  function B() {
      console.log(a);
  }
  return B;
}
let res = A();
```

函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。

`函数 A 弹出调用栈后，函数 A 中的变量这时候是存储在堆上的`，所以函数B依旧能引用到函数A中的变量。
现在的 JS 引擎可以通过逃逸分析辨别出哪些变量需要存储在堆上，哪些需要存储在栈上。


https://juejin.im/post/5d116a9df265da1bb47d717b