(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{389:function(t,_,v){"use strict";v.r(_);var i=v(9),e=Object(i.a)({},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"《http图解》"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#《http图解》","aria-hidden":"true"}},[t._v("#")]),t._v(" 《HTTP图解》")]),t._v(" "),v("h2",{attrs:{id:"web及网络基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web及网络基础","aria-hidden":"true"}},[t._v("#")]),t._v(" Web及网络基础")]),t._v(" "),v("h3",{attrs:{id:"tcp-ip的分层管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip的分层管理","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP/IP的分层管理")]),t._v(" "),v("ol",[v("li",[t._v("应用层 - HTTP、FTP、DNS等\n"),v("ul",[v("li",[t._v("HTTP。")]),t._v(" "),v("li",[t._v("DNS协议。通过域名查找IP地址，或逆向从IP地址反查域名的服务。")])])]),t._v(" "),v("li",[t._v("传输层。提供两台计算机之间的数据传输。\n"),v("ul",[v("li",[t._v("TCP协议。把HTTP请求报文进行"),v("strong",[t._v("分割")]),t._v("（为了更容易传送大数据），并在报文上打上标记序号及端口号，发送给网络层。提供三次握手（TCP过程标志：SYN和ACK），确认数据最终送达到对方。")])])]),t._v(" "),v("li",[t._v("网络层。处理网络上流动的数据包，规定了通过怎样的路径到达对方计算机，并把数据包传送给对方。\n"),v("ul",[v("li",[t._v("IP协议。增加作为通信目的地的MAC地址后，转发给链路层。")]),t._v(" "),v("li",[t._v("使用ARP协议，反查出对应的MAC地址。（IP地址可变换，MAC地址基本不会变）")])])]),t._v(" "),v("li",[t._v("链路层。处理连接网络等硬件部分，包括控制操作系统、硬件的设备驱动、网卡等物理可见部分。")])]),t._v(" "),v("h3",{attrs:{id:"各种协议与http协议的关系："}},[v("a",{staticClass:"header-anchor",attrs:{href:"#各种协议与http协议的关系：","aria-hidden":"true"}},[t._v("#")]),t._v(" 各种协议与HTTP协议的关系：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/60406595-3d524d80-9be9-11e9-904a-22495ac30f25.png",alt:"image"}})]),t._v(" "),v("h3",{attrs:{id:"tcp协议三次握手："}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp协议三次握手：","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP协议三次握手：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/60406519-d3d23f00-9be8-11e9-8390-38c80bb260c6.png",alt:"image"}})]),t._v(" "),v("h2",{attrs:{id:"http协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http协议","aria-hidden":"true"}},[t._v("#")]),t._v(" Http协议")]),t._v(" "),v("p",[t._v("请求：请求行 + 首部字段 +（空行）正文")]),t._v(" "),v("p",[t._v("响应： 状态行 + 首部字段 +（空行）正文")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/61171226-30e5d180-a5a7-11e9-84b4-b874617105a0.png",alt:"image"}})]),t._v(" "),v("h3",{attrs:{id:"响应状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应状态")]),t._v(" "),v("ul",[v("li",[t._v("2xx 成功\n"),v("ul",[v("li",[t._v("200 ok")]),t._v(" "),v("li",[t._v("204 没有内容")]),t._v(" "),v("li",[t._v("206 部分内容")])])]),t._v(" "),v("li",[t._v("3xx 重定向\n"),v("ul",[v("li",[t._v("304 没有更新")])])]),t._v(" "),v("li",[t._v("4xx 客户端错误\n"),v("ul",[v("li",[t._v("403 禁止")]),t._v(" "),v("li",[t._v("404 没有找到")])])]),t._v(" "),v("li",[t._v("5xx 服务器错误\n"),v("ul",[v("li",[t._v("500 服务器错误")]),t._v(" "),v("li",[t._v("503 服务不可用，表明服务器正在停机维护")])])])]),t._v(" "),v("h2",{attrs:{id:"cookie"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie","aria-hidden":"true"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),v("p",[t._v("Cookie会根据从服务器发送的响应报文内一个叫"),v("code",[t._v("Set-Cookie")]),t._v("的首部字段信息，通知客户端保存Cookie。当下次客户端再往该服务器发送请求时，客户端会自动在请求报文中加入Cookie的值发送出去。")]),t._v(" "),v("p",[t._v("服务器发现客户端发送过来的Cookie后，会去"),v("strong",[t._v("检查究竟是从哪个客户端发来的连接请求")]),t._v("，然后对比服务器上的记录，最后得到之前的状态信息。")]),t._v(" "),v("p",[t._v("Cookie风险：")]),t._v(" "),v("ul",[v("li",[t._v("仅利用cookie中进行身份验证。比如在cookie中存isVip/userID等关键信息字段")]),t._v(" "),v("li",[t._v("不设置httponly。如果攻击者拿到用户的cookie值（XSS攻击等手段），那可以通过js修改cookie，伪造用户。")]),t._v(" "),v("li",[t._v("secure问题。当secure的限制没有开启时,那么在一个https的网站中,一个xss还是能通过http读取到https下的cookie。")])]),t._v(" "),v("p",[t._v("Cookie防护：")]),t._v(" "),v("ul",[v("li",[t._v("防止在 Cookies 中存放敏感信息")]),t._v(" "),v("li",[t._v("关键数据放服务端（session），cookie保存口令值。")]),t._v(" "),v("li",[t._v("对重要的值加上httponly标志")]),t._v(" "),v("li",[t._v("强制要求开启HTTPS连接")])]),t._v(" "),v("p",[t._v("Session安全（防护升级）：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("口令值通过私钥签名加密")]),t._v("。虽然Session不存敏感信息，找不到xss攻击拿到cookie的情况下，也有可能被伪造出。因为随机算法给出的口令值仍然可能被伪造（特别是用户量大的网站，难免被碰运气）。通过私钥签名可以解决这种情况。")]),t._v(" "),v("li",[v("code",[t._v("客户端独有信息（IP等） + 口令私钥签名")]),t._v("。有可能通过xss攻击，获得用户cookie中保存的口令值，以此伪造用户。通过客户端独有信息以及配合上面的口令私钥签名可以解决这种情况。")])]),t._v(" "),v("h2",{attrs:{id:"web安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web安全","aria-hidden":"true"}},[t._v("#")]),t._v(" Web安全")]),t._v(" "),v("p",[t._v("常用安全漏洞")]),t._v(" "),v("ol",[v("li",[t._v("输出值转义不完全\n"),v("ul",[v("li",[v("code",[t._v("跨站脚本攻击XSS")]),t._v("（比如：url地址栏、动态生成HTML）")]),t._v(" "),v("li",[t._v("sql注入攻击（属于主动攻击）")]),t._v(" "),v("li",[t._v("os命令攻击(比如：发送邮件)")]),t._v(" "),v("li",[t._v("Http首部注入攻击，通过在响应字段内"),v("strong",[t._v("插入换行")]),t._v("，添加任意响应首部的攻击")])])]),t._v(" "),v("li",[t._v("设计上的缺陷\n"),v("ul",[v("li",[t._v("会话劫持：拿到用户的绘画id（通常是XSS攻击盗取），并伪装成用户")]),t._v(" "),v("li",[v("code",[t._v("跨站请求伪造CSRF")]),t._v('。对已完成认证的用户进行非预期的信息更新（属于被动攻击）。加入留言板留言是get请求，攻击者可以发布恶意评论<img src="xxx/msg?q=123">，那所有访问这条评论的用户，都会发布自己都不知道的“123”评论')])])]),t._v(" "),v("li",[t._v("其他\n"),v("ul",[v("li",[t._v("点击劫持。常说的钓鱼网站，攻击者制作了一张游戏网页，引诱你去点击它的Play按钮，Play按钮下，隐藏的（通过iframe设置透明度即可）是你已经登录的网站（比如qq）。你点击Play有可能点击的是qq的注销功能。")]),t._v(" "),v("li",[t._v("Dos攻击。让运行的服务停止服务。比如集中请求资源，让服务器资源耗尽。")])])])])])},[],!1,null,null,null);e.options.__file="book-http-diagram.md";_.default=e.exports}}]);