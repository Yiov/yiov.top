# V2Ray的安装及使用



## 简介

在 Shadowsocks 被封杀后，V2Ray成立，VMess协议是其专属的加密通讯协议

现在所说的V2Ray其实是Project V（一个工具集合），其核心工具称为V2Ray

官网：https://www.v2ray.com/

仓库：https://github.com/v2ray/v2ray-core

![](/v2ray/v2ray.png)


## 客户端

* [Android端](https://github.com/2dust/v2rayNG/releases)

* [Windows端](https://github.com/2dust/v2rayN/releases)

* [Mac端](https://github.com/yanue/V2rayU/releases)


## 协议

| 类型 | 支持协议 |
|:-:|:-:|
| 节点 | Socks、HTTP、Shadowsocks、WebSocket、Trojan、VMess、VLESS、Hysteria 2 |




## 安装




:::: details Android端 安装

下载并安装 [v2rayNG](https://github.com/2dust/v2rayNG/releases)

::: details 下载哪个？

* 第一个：v8和v7通用

* arm64-v8a：64位处理器，常见于市面主流手机

* armeabi-v7a：32位处理器，常见于老旧款手机

* x86：32位处理器，常见于平板和模拟器

* x86_64：64位处理器，常见于平板
:::

![](/v2ray/android/android-01.png)

::::






::: details Windows端 安装

下载 [V2RayN](https://github.com/2dust/v2rayN/releases)，首次安装选 `v2rayN-With-Core.zip`

![](/v2ray/windows/windows-01.png)

解压并打开

![](/v2ray/windows/windows-02.png)


根据提示下载 [Microsoft .NET 8.0 Desktop Runtime](https://dotnet.microsoft.com/zh-cn/download)

![](/v2ray/windows/windows-03.png)

Edge浏览器，在右上方下载处点击 `保留`

![](/v2ray/windows/windows-04.png)

安装成功即可

![](/v2ray/windows/windows-05.png)

再次打开 V2RayN

![](/v2ray/windows/windows-06.png)

:::






## 使用


::: details Android端 使用

点击左上角三横 `≡` - 订阅分组设置

![](/v2ray/android/android-02.png)


找一个 [免费送流量的机场注册](./channel.md)，一键订阅 - 复制订阅地址

![](/v2ray/android/android-03.png)

点击 `+` 号，填写机场名，粘贴订阅链接

![](/v2ray/android/android-04.png)

回到主界面 右上角 `更新订阅`，然后测一下速

![](/v2ray/android/android-05.png)

为了避免后续导入节点使用问题，在设置中打开 `启用虚拟DNS` 开关

![](/v2ray/android/android-06.png)

选择延迟低的连接，访问 [谷歌](https://www.google.com) 看看

![](/v2ray/android/android-07.png)

:::









::: details Windows端 使用

找一个 [免费送流量的机场注册](./channel.md)，一键订阅 - 复制订阅地址

![](/v2ray/windows/windows-07.png)

点击 `+` 号，添加订阅，名字随便，粘贴订阅地址

![](/v2ray/windows/windows-08.png)

点击刚添加的订阅 - 订阅分组 - 更新当前订阅（不通过代理）

![](/v2ray/windows/windows-09.png)

这样节点就都加载进来了

![](/v2ray/windows/windows-10.png)

`Ctrl+A` 全选，测试服务器直接延迟

![](/v2ray/windows/windows-11.png)

选择一个延迟低的，右键 `设为活动服务器`

![](/v2ray/windows/windows-12.png)

对桌面右下角图标，右键 `自动配置系统代理`，图标变红即为工作状态

![](/v2ray/windows/windows-13.png)

访问 [谷歌](https://www.google.com) 看看

![](/v2ray/windows/windows-14.png)


:::








## 优选IP

对于分享的延迟较高的节点，我们可以通过优选IP来降低延迟



::: details Android端 优选IP

我这里准备了一个 [@冰河圈子](https://t.me/binghequanzi) 分享的Vmess节点，复制粘贴进来后，点编辑

![](/v2ray/android/android-08.png)

不要挂任何代理，打开 [在线优选IP（默认443端口）](https://stock.hostmonit.com/CloudFlareYes) ，从自动筛选的结果里，挑选自己运营商的IP，复制

然后打开V2RayNG，地址这里删掉之前的，粘贴复制的IP，保存

![](/v2ray/android/android-09.png)

我们点击运行，访问 [谷歌](https://www.google.com) 看看

![](/v2ray/android/android-10.png)

:::










::: details Windows端 优选IP

我这里准备了一个 [@冰河圈子](https://t.me/binghequanzi) 分享的Vmess节点

![](/v2ray/windows/windows-15.png)

复制后，点 服务器 - 从剪切板导入

![](/v2ray/windows/windows-16.png)

这样就添加成功了

![](/v2ray/windows/windows-17.png)

对着节点右键，编辑服务器

![](/v2ray/windows/windows-18.png)

不要挂任何代理，打开 [在线优选IP（默认443端口）](https://stock.hostmonit.com/CloudFlareYes) ，从自动筛选的结果里，挑选自己运营商的IP，复制

![](/v2ray/windows/windows-19.png)

地址这里删掉之前的，粘贴复制的IP，确定

![](/v2ray/windows/windows-20.png)

地址就变成了我们修改的

![](/v2ray/windows/windows-21.png)

然后设为活动服务器

![](/v2ray/windows/windows-22.png)

对桌面右下角图标，右键 `自动配置系统代理`，图标变红即为工作状态

![](/v2ray/windows/windows-23.png)

访问 [谷歌](https://www.google.com) 看看

![](/v2ray/windows/windows-14.png)



