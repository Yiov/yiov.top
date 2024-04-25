# NekoBox / Nekoray 的使用

> 更新时间：2024-4-25

## 简介

NekoBox for Android 是一款基于sing-box内核开发的代理工具，目前最强内核

* 安卓端：[NekoBox](https://github.com/MatsuriDayo/NekoBoxForAndroid/releases)，简称 `NB4A`

* 电脑端：[Nekoray](https://github.com/MatsuriDayo/nekoray/releases)，含Windows端 / Linux端


::: tip 支持协议

* 节点：SOCKS、HTTP、Shadowsocks、VMess、VLESS、Trojan、Trojan-Go、Mieru、Naïve、Hysterria、TUIC、SSH、shadowTLS 和 WireGuard

* 订阅模式：Shadowsocks、V2RayN、Clash、Clash Meta
:::


官网：https://matsuridayo.github.io/

![](/NekoBox/NekoBox.png)



## 安装


:::: details Android端 安装

下载并安装 [NekoBox](https://github.com/MatsuriDayo/NekoBoxForAndroid/releases)，我直接下第一个演示

::: details 下载哪个？
* arm64-v8a：64位处理器，常见于市面主流手机

* armeabi-v7a：32位处理器，常见于老旧款手机

* x86：32位处理器，常见于平板和模拟器

* x86_64：64位处理器，常见于平板
:::


![](/NekoBox/android/android-01.png)

::::










## 使用

:::: details Android端 使用

找一个免费送流量的机场注册，[点我查看：机场推荐指南](./channel.md)

一键订阅 - 复制订阅地址，由于没有快速跳转，我们手动导入订阅

![](/NekoBox/android/android-02.png)

打开NekoBox左上角三横 `≡` - `分组` - 右上角 `添加`

![](/NekoBox/android/android-03.png)

分组名自己随便写，分组类型改成 `订阅` 

在订阅链接处粘贴订阅地址，右上角保存

![](/NekoBox/android/android-04.png)

等待自动导入成功即可，不要了直接左滑删除

![](/NekoBox/android/android-05.png)

先点右上角三点 `┇` - 连接测试 - `URL Test` 测速

![](/NekoBox/android/android-06.png)

还可以按节点按延时最低的排序，选最低的，点击底部连接

访问 [谷歌](https://www.google.com) 成功即可

::: tip 说明
点击底部 测试 ，可以查看成否成功握手
:::

![](/NekoBox/android/android-07.png)

::::








## 拓展

:::: details WARP (WireGuard) 及分流

NekoBox可一键生成WireGuard配置，非常方便

NekoBox左上角三横 `≡` - `工具`

![](/NekoBox/android/android-08.png)

在 Cloudflare Warp 处点击 `生成配置` 即可

::: tip 说明
移动和联通用户大概率无法连接，需要优选IP
:::
![](/NekoBox/android/android-09.png)

请查看 [WireGuard优选IP的教程](./wireguard.md#优选ip) ，更改服务器IP和端口

![](/NekoBox/android/android-10.png)

更改完后访问 [谷歌](https://www.google.com) 成功即可

![](/NekoBox/android/android-11.png)

而NekoBox还有一个很便捷的功能：分流

在 `设置` 中，开启分应用代理、绕过局域网地址、在核心中绕过LAN、IPv6路由启用

::: tip 开启有什么用
* 分应用代理：可以指定某些APP是否走代理

* 绕过局域网地址：开启后可以访问本地路由器 (和绕过LAN一样)
:::

![](/NekoBox/android/android-12.png)

在路由中开启 `中国域名规则` 和 `中国IP规则`

![](/NekoBox/android/android-13.png)

现在访问国内网址就不用走代理了，我们测试下是否分流成功

IP地址查询：https://ip.skk.moe/

::: tip 说明
左侧为Wireguard客户端，右侧为NekoBox客户端

可以发现NekoBox访问国内并没有走代理，走的直连，非常好用
:::

![](/NekoBox/android/android-14.png)

::::