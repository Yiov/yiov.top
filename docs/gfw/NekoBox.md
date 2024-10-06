# NekoBox的安装及使用



## 简介

NekoBox for Android，简称 `NB4A`，是一款基于 [sing-box内核](./singbox.md) 开发的安卓端代理工具

官网：https://matsuridayo.github.io/

![](/NekoBox/NekoBox.png)


## 客户端


* [安卓端](https://github.com/MatsuriDayo/NekoBoxForAndroid/releases)

* [Windows端](https://github.com/MatsuriDayo/nekoray/releases)

* [Linux端](https://github.com/MatsuriDayo/nekoray/releases)



## 协议

| 类型 | 支持协议 |
|:-:|:-:|
| 节点 | SOCKS、HTTP、Shadowsocks、VMess、VLESS、Trojan、Trojan-Go、Mieru、Naïve、Hysterria、TUIC、SSH、shadowTLS、WireGuard |
| 订阅 | Shadowsocks、V2RayN、Clash、Clash Meta、Sing-box |



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







::: details Windows端 Nekoray 安装

下载 [Nekoray](https://github.com/MatsuriDayo/nekoray/releases)，选择Windows端下载并解压

![](/NekoBox/windows/windows-01.png)

双击 `nekoray.exe` 打开

![](/NekoBox/windows/windows-02.png)

首次打开需要选择内核，推荐 `sing-box`

![](/NekoBox/windows/windows-03.png)

![](/NekoBox/windows/windows-04.png)

:::










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

为了避免后续导入节点使用问题，在设置 - 入站设置，打开 `追加HTTP代理至VPN` 开关

![](/NekoBox/android/android-07.png)

还可以按节点按延时最低的排序，选最低的，点击底部连接

访问 [谷歌](https://www.google.com) 成功即可

::: tip 说明
点击底部 测试 ，可以查看成否成功握手
:::

![](/NekoBox/android/android-08.png)

::::







:::: details Windows端 Nekoray 使用

在 [机场推荐指南](./channel.md) 中找一个白嫖机场注册

一键订阅 - 复制订阅地址，由于没有快速跳转，我们手动导入订阅

![](/NekoBox/windows/windows-05.png)


首选项 - 分组

![](/NekoBox/windows/windows-06.png)

新建分组

![](/NekoBox/windows/windows-07.png)

名称随便，类型选 `订阅` ，URL粘贴 `订阅链接`，确定

可勾选手动调节列宽

![](/NekoBox/windows/windows-08.png)


更新订阅

![](/NekoBox/windows/windows-09.png)

出现剩余流量等信息即可

![](/NekoBox/windows/windows-10.png)

点击刚才的机场名查看节点

![](/NekoBox/windows/windows-11.png)

服务器 - 当前分组 - Url Test 测速

![](/NekoBox/windows/windows-12.png)

选择一个延迟低一点的节点 `启动` 

![](/NekoBox/windows/windows-13.png)

勾选 `系统代理` ，开启代理

::: details 不使用了?
取消系统代理的勾选，节点停止
:::

![](/NekoBox/windows/windows-14.png)

访问 [谷歌](https://www.google.com) 成功即可


![](/NekoBox/windows/windows-15.png)

::::






## 分流

简而言之，就是访问国内网页，不走代理，走直连；

访问国外网页，走代理



:::: details Android端 分流

在 `设置` 中，开启分应用代理、绕过局域网地址、在核心中绕过LAN、IPv6路由启用

::: tip 开启有什么用
* 分应用代理：可以指定某些APP是否走代理

* 绕过局域网地址：开启后可以访问本地路由器 (和绕过LAN一样)
:::

![](/NekoBox/android/android-09.png)

在路由中开启 `中国域名规则` 和 `中国IP规则`

![](/NekoBox/android/android-10.png)

现在访问国内网址就不用走代理了，我们测试下是否分流成功

IP分流查询：https://ip.skk.moe/

::: tip 说明
左侧为Wireguard客户端，右侧为NekoBox客户端

可以发现NekoBox访问国内并没有走代理，走的直连，非常好用
:::

![](/NekoBox/android/android-11.png)

::::







:::: details Winddows端 分流

首选项 - 路由设置

![](/NekoBox/windows/windows-16.png)


简易路由 - 预设 - 绕过局域网和大陆

![](/NekoBox/windows/windows-17.png)

开启成功，会自动填入一些规则信息

![](/NekoBox/windows/windows-18.png)

设置改变重启代理

![](/NekoBox/windows/windows-19.png)

IP分流查询：https://ip.skk.moe/

::: tip 解读
* 国内的走直连，是本地IP

* 国外的走代理，是香港节点服务器
:::

![](/NekoBox/windows/windows-20.png)

::::





## 优选IP

对于分享的延迟较高的节点，我们可以通过优选IP来降低延迟

::: details Android端 优选IP

我这里准备了一个 [@冰河圈子](https://t.me/binghequanzi) 分享的Vmess节点，复制粘贴进来后，点编辑

![](/NekoBox/android/android-12.png)

不要挂任何代理，打开 [在线优选IP（默认443端口）](https://stock.hostmonit.com/CloudFlareYes) ，从自动筛选的结果里，挑选自己运营商的IP，复制

然后打开V2RayNG，地址这里删掉之前的，粘贴复制的IP，保存

![](/NekoBox/android/android-13.png)

我们点击运行，访问 [谷歌](https://www.google.com) 看看

![](/NekoBox/android/android-14.png)

:::





::: details Windows端 优选IP

我这里准备了一个 [@冰河圈子](https://t.me/binghequanzi) 分享的Vmess节点

![](/NekoBox/windows/windows-21.png)

复制后，点 程序 - 从剪切板添加

![](/NekoBox/windows/windows-22.png)

这样就添加成功了，双击这个节点

![](/NekoBox/windows/windows-23.png)

我们要更改这里的地址

![](/NekoBox/windows/windows-24.png)

不要挂任何代理，打开 [在线优选IP（默认443端口）](https://stock.hostmonit.com/CloudFlareYes) ，从自动筛选的结果里，挑选自己运营商的IP，复制

![](/NekoBox/windows/windows-25.png)

地址这里删掉之前的，粘贴复制的IP，确定

![](/NekoBox/windows/windows-26.png)

地址就变成了我们修改的

![](/NekoBox/windows/windows-27.png)

选择节点 - 启动

![](/NekoBox/windows/windows-28.png)

勾选系统代理

![](/NekoBox/windows/windows-29.png)

访问 [谷歌](https://www.google.com) 看看

![](/NekoBox/windows/windows-15.png)

:::





## 拓展

:::: details WARP (WireGuard)

NekoBox可一键生成WireGuard配置，仅限安卓端

NekoBox左上角三横 `≡` - `工具`

![](/NekoBox/android/android-15.png)

在 Cloudflare Warp 处点击 `生成配置` 即可

::: tip 说明
移动和联通用户大概率无法连接，需要优选IP
:::
![](/NekoBox/android/android-16.png)

请查看 [WireGuard优选IP的教程](./wireguard.md#优选ip) ，更改服务器IP和端口

也可以自行更换公钥和私钥

![](/NekoBox/android/android-17.png)

更改完后访问 [谷歌](https://www.google.com) 成功即可

::: tip 说明
但是这种转发速度比WireGuard要慢，推荐使用官方的客户端
:::

![](/NekoBox/android/android-18.png)

::::





## 特别鸣谢

* [IP分流查询](https://ip.skk.moe/)