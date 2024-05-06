# 科学上网工具介绍

> 更新时间：2024-4-16


## 简介

科学上网，也就是常说的 翻墙 / 梯子，都是一个意思


::: tip 什么是墙
墙，即防火长城，英文名Great Firewall of China，简称 Great Firewall ，缩写 `GFW`

* 目的：便于分析和过滤中国境外网络的信息

* 方式：国家会对所有国际网关通讯进行监督审查，对认为不符合国家的内容进行干扰、阻断、屏蔽
:::





::: warning 翻墙是否违法
违法，根据《计算机信息网络国际联网管理暂行规定》第6条：计算机信息网络直接进行国际联网，必须使用邮电部国家公用电信网提供的国际出入口信道。任何单位和个人不得自行建立或者使用其他信道进行国际联网。

* 行政处罚：警告和罚款，常见于浏览非法网站

* 刑事处罚：有期徒刑或拘役并处罚金，常见于兜售VPN、代搭建翻墙环境等非法获利，以及造谣抹黑国家等等
:::





:::: danger 到底能不能翻墙
能，是否违法取决于使用者本人

* 目的单一：大多数人翻墙仅是浏览文献、油管、推特、INS、Tiktok等，是可以的

* 目的复杂：售卖VPN获利、抹黑造谣国家、鼓动宣传分裂思想、网络赌博等，都是吃牢饭的

::: details 为什么明星可以注册国外账号并更新动态
1.明星经纪的公司办理了使用国际出入口信道的手续

2.明星人在国外

3.明星也使用了代理工具
:::
::::




## 原理

简单点说，就是利用代理工具绕过长城防火墙(GFW)

::: tip 访问流程
- 使用代理工具将访问请求，通过加密协议伪装成合法数据

- 数据发送到节点服务器，代为请求访问

- 访问请求通过，然后原路返回
:::


> 此处引用了 [@不良林 的视频](https://youtu.be/JfSJmPFiL_s?si=ZULTATzJN55H4on4) 截图


![](/proxy/proxy-01.png)



## 工具

::: tip 关于 VPN 与 代理工具
推荐使用列出的代理工具，不推荐使用任何VPN以及破解的VPN

* VPN：点击连接即可使用，自带节点，但是会被国家审计，说错话可能要请去喝茶

* 代理工具：需要自备节点，导入后方可使用，部分提供节点的机场可以绕过审计

:::



::: warning 推荐使用：带 ⭐ 的有教程
工具很多，不必都会，选其一即可
:::



| 名称 | 收费 | 支持客户端 |
|:-:|:-:|:-:|
| ⭐<br>[Shadowrocket<br>`小火箭`](./shadowrocket.md) | $2.99 | [iOS端](https://apps.apple.com/us/app/shadowrocket/id932747118) |
| ⭐<br>[QuantumultX<br>`圈X`](./quantumultX.md) | $7.99 | [iOS端](https://apps.apple.com/us/app/quantumult-x/id1443988620)、[Mac端](https://apps.apple.com/us/app/quantumult-x/id1443988620) |
| [Loon](https://nsloon.com/) | $5.99 | [iOS端](https://apps.apple.com/us/app/loon/id1373567447) |
| [Stash](https://stash.ws/) | $3.99 | [iOS端](https://apps.apple.com/us/app/stash-proxy-utility/id1596063349)、[Mac端](https://stash.ws/macos/pricing/) |
| [Surge](https://nssurge.com/) | 免费 | [iOS端](https://apps.apple.com/us/app/id1442620678)、[Mac端](https://nssurge.com/) |
| ⭐<br>[sing-box](./singbox.md) | 免费 |  [iOS端](https://apps.apple.com/us/app/sing-box/id6451272673)、[安卓端](https://github.com/SagerNet/sing-box/releases)、[PC端](https://github.com/SagerNet/sing-box/releases)、[Mac端](https://github.com/SagerNet/sing-box/releases)、[Linux端](https://github.com/SagerNet/sing-box/releases) |
| ⭐<br>[Karing](./Karing.md) | 免费 | [iOS端](https://apps.apple.com/us/app/karing/id6472431552)、[安卓端](https://github.com/KaringX/karing/releases)、[PC端](https://github.com/KaringX/karing/releases)、[Mac端](https://apps.apple.com/us/app/karing/id6472431552) |
| [OneClick](https://oneclick.earth/) | 免费 | [iOS端](https://apps.apple.com/us/app/id1545555197)、[安卓端](https://oneclick.earth/) |
| [Spectre](https://proxy.spectreapp.xyz/) | 免费 | [iOS端](https://apps.apple.com/app/spectre-vpn/id1508712998) |
| ⭐<br>[WARP](./warp.md)<br>`1.1.1.1` | 免费 | [iOS端](https://apps.apple.com/us/app/id1423538627)、[安卓端](https://one.one.one.one/zh-Hans/)、[PC端](https://one.one.one.one/zh-Hans/) | [Mac端](https://one.one.one.one/zh-Hans/)、[Linux端](https://one.one.one.one/zh-Hans/) |
| ⭐<br>[Wireguard](./wireguard.md) | 免费 | [iOS端](https://apps.apple.com/us/app/wireguard/id1441195209)、[安卓端](https://www.wireguard.com/install/)、[PC端](https://www.wireguard.com/install/)、[Mac端](https://apps.apple.com/us/app/wireguard/id1451685025)、[Linux端](https://www.wireguard.com/install/) |
| |
| ⭐<br>[Clash<br>小猫咪](./Clash.md) | 免费 | [iOS端](https://stash.ws/)、[安卓端](https://github.com/Yiov/Clash_For_Android/releases)、[PC端](https://github.com/Z-Siqi/Clash-for-Windows_Chinese/releases/tag/CFW)、[Mac端](./Clash.md#其他软件) |
| ⭐<br>[Hiddify](./Hiddify.md) | 免费 | [安卓端](https://github.com/hiddify/hiddify-next/releases)、[PC端](https://github.com/hiddify/hiddify-next/releases)、[Mac端](https://github.com/hiddify/hiddify-next/releases)、[Linux端](https://github.com/hiddify/hiddify-next/releases) |
| ⭐<br>[NekoBox](./NekoBox.md)<br>`nekoray` | 免费 | [安卓端](https://github.com/MatsuriDayo/NekoBoxForAndroid/releases)、[PC端](https://github.com/MatsuriDayo/nekoray/releases)、[Linux端](https://github.com/MatsuriDayo/nekoray/releases) |
| ⭐<br>[V2Ray](./v2ray.md) | 免费 | [安卓端](https://github.com/2dust/v2rayNG/releases)、[PC端](https://github.com/2dust/v2rayN/releases)、[Mac端](https://github.com/yanue/V2rayU/releases) |
| Shadowsocks<br>`SS` | 免费 | [安卓端](https://github.com/shadowsocks/shadowsocks-android/releases)、[PC端](https://github.com/shadowsocks/shadowsocks-windows/releases)、[Mac端](https://github.com/shadowsocks/ShadowsocksX-NG/releases/) |
| shadowsocksr<br>`SSR` | 免费 | [安卓端](https://github.com/shadowsocksrr/shadowsocksr-android/releases)、[PC端](https://github.com/shadowsocksr-rm/shadowsocksr-csharp/releases) |
| [Surfboard](https://getsurfboard.com/)<br>`冲浪板` | 免费 | [安卓端](https://github.com/getsurfboard/surfboard/releases/) |
| |
| [passwall2](https://github.com/xiaorouji/openwrt-passwall2/releases) | 免费 | OpenWrt软路由 |
