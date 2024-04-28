# 常见的协议

> 更新时间：2024-4-28



## 传输协议


### SSH

安全外壳协议(Secure Shell Protocol)，简称SSH

::: tip 说明
是一种加密的网络传输协议，SSH最常见的用途是远程登录系统，通过在网络中建立安全隧道来实现SSH客户端与服务器之间的连接

SSH 还可以实现隧道传输或端口转发，这是指数据包可以穿越原本无法穿越的网络

SSH 在 TCP/IP 协议套件的基础上运行，而互联网的大部分功能都依赖于 TCP/IP 协议套件
:::

::: tip 关于TCP
TCP 代表 Transmission Control Protocol（传输控制协议），IP 代表 Internet Protocol（Internet 协议）

TCP/IP 将这两个协议配合使用，以便格式化、路由和传送数据包

除其他信息外，IP 表示数据包应发送到哪个 IP 地址（看成邮寄地址），而 TCP 则表示数据包应发送到每个 IP 地址的哪个端口（看成大楼的楼层或公寓号码）

通常，在 TCP/IP 的基础上还会使用其他协议，以便将传输的数据转换成应用程序可以使用的形式

SSH 就是这样一种协议（其他例子包括 HTTP、FTP 和 SMTP）
:::


---


### http(s)

超文本传输协议(HyperText Transfer Protocol)，缩写：HTTP

HTTP 是一个基于 TCP/IP 通信协议来传递数据（HTML 文件、图片文件、查询结果等）


::: tip 关于HTTPS
超文本传输安全协议(Hypertext Transfer Protocol Secure)，它在 HTTP 下增加了 SSL/TLS 协议，提供了数据加密、完整性校验和身份验证

HTTP默认的端口号为80；HTTPS的端口号为443，工作在 TCP/IP 模型之上，通常使用端口 80
:::



---



### socks5

一种互联网协议，是 SOCKetS 的缩写，主要用于客户端与外网服务器之间通讯的中间传递

简单来说，她扮演一个中间人的角色，在客户端和目标主机之间转发数据

::: tip 历史进程
这个协议最初由David Koblas开发，而后由NEC的Ying-Da Lee将其扩展到SOCKS4

最新协议是SOCKS5，与前一版本相比，增加支持UDP、验证，以及IPv6
:::


::: warning 对比HTTP
这种代理只做封包传递，所以速度比 HTTP 代理更快，也支援多种网络应用

SOCKS5 代理能让网络流量匿名，但流量没有加密，因此无法保证安全性
:::


---




### ws

websocket协议模式，简称ws，它是基于TCP/IP协议，独立于HTTP协议的通信协议

其实它就是HTTP协议通过url的方式包装

::: tip 对比HTTP
说明：WebSocket通过HTTP端口80和443进行工作，并支持HTTP代理和中介，从而使其与HTTP协议兼容。为了实现兼容性，WebSocket握手使用HTTP Upgrade头，从HTTP协议更改为WebSocket协议。Websocket 通过 HTTP/1.1 协议的101状态码进行握手

缺陷：ws的http特征还是明文的，仍然可能会被GFW监听和分析
:::


---


### TLS

传输层安全性协议(Transport Layer Security)，缩写TLS

前身是安全套接层（Secure Sockets Layer，缩写SSL）是一种安全协议

::: tip 历史进程
* SSL安全套接层，是1994年由Netscape公司设计的一套协议，并与1995年发布了3.0版本

* TLS是IETF在SSL3.0基础上设计的协议，实际上相当于SSL的后续版本

SSL 和 TLS 都是通信协议，用于加密服务器、应用程序、用户和系统之间的数据

这两种协议都会对通过网络连接的双方进行身份验证，以便他们能安全交换数据
:::




---



### XTLS

XTLS 的核心逻辑在于使用真实的 TLS 将代理流量隐藏于互联网最常见的流量之中

::: tip 原理
使用TLS代理时，https数据其实经过了两层TLS：外层是代理的TLS，内层是https的TLS

XTLS无缝拼接了内外两条货真价实的TLS，使得代理几乎无需再对https流量进行数据加解密，只起到流量中转的作用，极大的提高了性能
:::




---



### QUIC


全称：quick，是由谷歌公司开发的一种基于用户数据报协议（UDP）的传输层协议

::: tip 历史进程
* 2012年，最初由Google的Jim Roskind设计后实现并部署

* 2013年，随着实验范围的扩大而公开发布，并向IETF描述

* 2015年6月，QUIC规范的互联网草案提交给IETF进行标准化，成立了QUIC工作组

* 2018年10月，IETF的HTTP工作组和QUIC工作组共同决定将QUIC上的HTTP映射称为 "HTTP/3"，以提前使其成为全球标准

* 2021年5月IETF公布RFC9000，QUIC规范推出了标准化版本
:::




---




### ShadowTLS

一个可以使用别人的受信证书的 TLS 伪装代理

官网：https://www.ihcblog.com/a-better-tls-obfs-proxy/

仓库：https://github.com/ihciah/shadow-tls

::: tip 对比Trojan
它和 trojan 的表现类似，但它在做真实 TLS 握手的同时，可以直接使用别人的受信证书（如某些大公司或机构的域名）,而不需要自己签发证书

当直接使用浏览器打开时，可以正常显示对应可信域名的网页内容
:::













## 翻墙协议


### Shadowsocks

一种基于Socks5代理方式的加密传输协议，简称SS，也叫影梭

官网：https://shadowsocks.org/

仓库：https://github.com/shadowsocks/shadowsocks-rust

客户端：[安卓端](https://github.com/shadowsocks/shadowsocks-android/releases)丨[PC端](https://github.com/shadowsocks/shadowsocks-windows/releases)丨[Mac端](https://github.com/shadowsocks/ShadowsocksX-NG/releases/)

::: tip 历史进程

* 2012年4月，V2EX论坛用户 [@clowwindy](https://github.com/Clowwindy) 发布第一个翻墙协议 Shadowsocks

* 2015年8月22日，作者Clowwindy称受到了中国警方的压力，宣布停止维护此计划（项目）并移除其GitHub个人页面所存储的源代码
:::


---


### ShadowsocksR

在Shadowsocks的sock5基础上添加了混淆协议，简称SSR

客户端：[安卓端](https://github.com/shadowsocksrr/shadowsocksr-android/releases)丨[PC端](https://github.com/shadowsocksr-rm/shadowsocksr-csharp/releases)

::: tip 历史进程

* 2016年，[@breakwa11](https://github.com/breakwa11) 发起的Shadowsocks分支并对其进行了一些优化

* 2017年7月27日，breakwa11遭到人肉，删除了GitHub上的所有代码、解散交流群组
:::



---




### VMess(V2Ray)

V2Ray是在 Shadowsocks 被封杀的后起之秀，VMess协议是其专属的加密通讯协议


官网：https://www.v2ray.com/

仓库：https://github.com/v2ray/v2ray-core

::: tip 历史进程

* 2019年，Victoria Raymond以及其社区团队开发的反审查工具

* 2019年2月，V2Ray项目创始人Victoria Raymond突然消失，其Twitter、Telegram以及知乎停止更新

* 2019年，新的社区V2Fly成立，后续关于 V2Ray 的更新都由 V2Fly 社区负责

V2Ray 现在已经是 Project V 项目的核心工具，而 Project V 是一个平台
:::


::: warning 关于VMess
全称 Virtual Machine Encryption Security Service，简称VMess，它是一种基于TLS的网络传输协议，用于建立安全的TCP和UDP连接


支持协议：

* Blackhole(出站协议)

* Dokodemo-door(入站协议)

* Freedom(出站协议)

* HTTP(超文本传输协议)

* MTProto(telegram专用协议)

* Shadowsocks(梯子协议，不支持SSR)

* Socks(传统代理协议)

* VMess(v2ray专用加密传输协议)

* Vless(xray协议)

:::




---






### Trojan

利用TLS加密方式的协议，全称为Trojan-GFW，2019年沿用至今，是目前最成功的科学上网伪装技术之一

官网：https://trojan-gfw.github.io/trojan/

仓库：https://github.com/trojan-gfw/trojan


::: tip 简介

* 原理：Trojan通过监听443端口，模仿互联网上最常见的 HTTPS 协议，把合法的Trojan代理数据伪装成正常的 HTTPS 通信，并真正地完整完成的TLS 握手，以诱骗GFW认为它就是 HTTPS，从而不被识别，但无法配合CDN使用。

* 对比：Trojan是V2Ray的“WS+TLS”模式的精简版，速度比V2Ray更快，伪装比V2Ray更逼真，更难以被GFW识别。
:::



---




### Trojan-Go

Trojan-Go 兼容原版 Trojan 的绝大多数功能，2020年沿用至今

官网：https://p4gefau1t.github.io/trojan-go/

仓库：https://github.com/p4gefau1t/trojan-go

::: tip 新特性

* Websocket 传输支持，以实现 CDN 流量中转（基于 WebSocket over TLS）和对抗 GFW 中间人攻击

* 支持对用户更友好的 YAML 配置文件格式

* 自定义路由模块，可实现国内外分流 / 广告屏蔽等功能

* 基于 TProxy 的透明代理（TCP / UDP）
:::




---




### VLESS(Xray)

Xray是V2ray的升级版，包含V2ray所有协议，以及新的VLESS协议

仓库：https://github.com/XTLS/Xray-core


::: tip 历史进程

* 2020年11月，因为开源许可证等原因 [@XTLS](https://github.com/XTLS) 被V2Ray社区从V2ray core移除，[@XTLS](https://github.com/XTLS) 和 [@rprx](https://github.com/RPRX)另行组建了Project X 组织，开发了基于V2Ray的派生版本Xray

:::

::: warning 关于VLESS

简介：VLESS 是一个无状态的轻量传输协议，最突出的就是它可以配合 XTLS 进行数据加密，效果更好、性能更强

优势：在使用 TLS 的情况下，VLess 协议比 VMess 速度更快，性能更好，因为 VLess 不会对数据进行加解密

:::




---






### mieru

仓库：https://github.com/enfein/mieru

mieru【見える】是一款安全的、无流量特征、难以主动探测的，基于 TCP 或 UDP 协议的 socks5 / HTTP / HTTPS 网络代理软件

---




### naive

naive协议消除了客户端的tls指纹和tls-in-tls特征，并且naive协议基于http2，自带多路复用，对比ws需要频繁握手来讲延迟更低

仓库：https://github.com/klzgrad/naiveproxy/

::: tip 历史进程
* NaiveProxy，挪威语叫NaïveProxy，翻译成中文：天真的代理

* 2019年底由klzgrad大神开发的一种突破GFW网络审查的新型科学上网代理技术，它使用Chrome的网络堆栈来伪装流量，具有较强的抗审查能力和较低的可检测性，重用Chrome网络堆栈是确保性能和安全性的最佳实践
:::


::: warning 对比Trojan
Trojan最大的优点就是伪装成互联网最常见的HTTPS流量，而NaiveProxy最大的优势不仅伪装成 HTTP/2 的流量

而且使用互联网最常用的浏览器Chrome网络堆栈的指纹，更加难以被识别，而且这些也是Go语言模仿不了的
:::



---




### Hysteria

Hysteria 2 基于经过修改的 QUIC 协议，安全且稳定


官网：https://v2.hysteria.network/zh/

仓库：https://github.com/apernet/hysteria



::: tip 优劣说明
QUIC不支持CDN，这使得Hysteria 2 节点被GFW封禁的可能性更高

有可能占用过多服务商资源，极有可能影响节点服务商的服务，这可能会违反某些服务商的TOS协议

相比其他代理工具如 X-ray、V2ray、Clash等仍有一定差距
:::




---



### tuic

个人开发者 [@EAimTY](https://github.com/EAimTY/) 基于 基于 QUIC 协议的新代理工具

仓库：https://github.com/EAimTY/tuic

删库说明：https://www.eaimty.com/2023/opensource-project-based-on-hormone/



---


### KCP

KCP以浪费 10%-20% 的带宽的代价，换取平均延迟降低 30%-40% 的传输效果。

仓库：https://github.com/skywind3000/kcp

::: tip 对比TCP
TCP保证数据准确交付，UDP保证数据快速到达

KCP则是两种协议的一个折中，在力求在保证可靠性的情况下提高传输速度
:::



---


### mKCP

mKCP是一个基于 UDP 的流式传输协议，由 KCP 协议修改而来，可以按顺序传输任意的数据流


::: tip 对比TCP
mKCP 同样也是牺牲带宽来降低延迟，传输同样的内容，mKCP 一般比 TCP 消耗更多的流量
:::



---


### KCPTUN

Kcptun 基于 KCP 协议的 UDP 隧道，它可以将 TCP 流转换为 KCP+UDP 流

仓库：https://github.com/xtaci/kcptun



---




### Brook

Brook 是一个高效的 Socks5 代理软件，官方支持Windows、Linux、MacOS、IOS、Android、树莓派等设备

官网：https://brook.app/

仓库：https://github.com/txthinking/brook


::: tip 支持协议
Brook（自主研发新版）、Stream Brook（旧版）协议、Shadowsocks 协议、SOCKS5 协议等

:::


