# 小火箭安装及使用




## 简介

Shadowrocket著名的网络代理工具，直译暗影火箭，俗称来源于它的LOGO：小火箭

官网（无） 丨 [TG群](https://t.me/ShadowrocketApp) 丨 [推特(X)](https://twitter.com/shadowrocketapp)

![](/shadowrocket/shadowrocket-01.png)


## 协议


| 类型 | 支持协议 |
|:-:|:-:|
| 节点 | Shadowsocks(SS)、ShadowsocksR(SSR)、VMess(V2Ray)、VLESS(Xray)、Relay(GOST)、socks5、socks5Over TLS、HTTP、HTTPS、HTTP2、Trojan、Hysterria、Hysterria2、TUIC、Juicity、SSH、WireGuard、Snell、Brool、Lua |
| 订阅 | URL、clash YAML URL |


## 客户端

* [iOS端](https://apps.apple.com/us/app/shadowrocket/id932747118)


## 安装


::: details 付费安装

- 先 [注册美区Apple ID](../iPhone/Apple_ID.md) 后登陆美区苹果商店

- 然后充值后购买 [小火箭 shadowrocket](https://apps.apple.com/us/app/shadowrocket/id932747118) 下载安装

:::




::: details 免费安装

- 借别人购买过小火箭的账号，登录下载安装

- 或安装 [巨魔助手](../iPhone/sign/TrollStore.md) ，下载 [小火箭巨魔专用版](https://pan.liuchengxi.com/%E5%9B%BD%E5%A4%96%E5%BA%94%E7%94%A8/Shadowrocket) ，用巨魔安装

:::


![](/shadowrocket/shadowrocket-02.png)



## 使用

找一个免费送流量的机场注册，点击 `一键订阅`

::: tip 说明
以下截图机场仅为演示

更多免费好用机场，请查看 [机场channel大全一览表](./channel.md)
:::

![](/shadowrocket/shadowrocket-03.png)

选择对应的工具，我这里选 `shadowrocket`，跳转后点右上角保存

::: details 没有跳转到小火箭
点复制订阅地址，打开小火箭，右上角+号添加保存即可

![](/shadowrocket/shadowrocket-05.png)

:::

![](/shadowrocket/shadowrocket-04.png)

设置 - 延迟测试方法，改成 `CONNECT`

::: tip 说明
这一步虽然不是非必要的，但是是一个查看网络延迟的重要参考
:::

![](/shadowrocket/shadowrocket-06.png)

点击 `连通性测试` 选择延迟低的，打开开关，上 [谷歌](https://www.google.com/) 看看是否成功

::: details 谷歌打不开
* 节点拉垮：换节点或机场

* 台湾节点：国内是屏蔽的，只能用 [谷歌香港](https://www.google.com.hk/)
:::

![](/shadowrocket/shadowrocket-07.png)



## 手动添加


除了机场订阅，还可以添加搭建的节点

复制了节点，打开小火箭，会弹窗

![](/shadowrocket/shadowrocket-08.png)


:::: details 如果不弹窗怎么手搓呢

以Vless节点为例，点 `+` 号添加

::: tip 说明

* 类型：VLESS

* 地址：优选域名地址

* 端口：HTTP用 `80、8080、8880、2052、2082、2086、2095` 端口任选一；HTTPS用 `443、8843、2053、2083、2087、2096` 端口任选一

* UUID：创建节点时的userID

* TLS：根据自己搭建的情况选择开启还是关闭

* 传输方式

    * 名称：选择 `websocket`

    * Host：输入你的搭建域名

    * 路径：`/?ed=2560`
:::

![](/shadowrocket/shadowrocket-09.png)

::::