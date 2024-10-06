# Sing-box的安装及使用






## 简介

免费跨平台代理软件，是目前最强内核

::: tip 说明
虽说最强且自由度高，但需使用专属订阅格式

对初上手的小白不太友好，可使用同样是sing-box内核的 [NekoBox](./NekoBox.md) 或者 [Karing](./Karing.md)
:::

官网：https://sing-box.sagernet.org/zh/

仓库：https://github.com/SagerNet/sing-box


![](/singbox/singbox.png)


## 协议


| 类型 | 支持协议 |
|:-:|:-:|
| 入站 | Socks、HTTP、Shadowsocks、Vmess、Trojan、Naive、Hysteria、shadowtls、Vless、Tuic、Hysteria2、Tun、Redirec、TProxy |
| 出站 | Socks、HTTP、Shadowsocks、Vmess、Trojan、Wireguard、Hysteria、ShadowTLS、VLESS、Tuic、Hysteria2、Tor、SSH、DNS |


## 客户端

- [iOS端](https://apps.apple.com/us/app/sing-box/id6451272673)

- [Android端](https://github.com/SagerNet/sing-box/releases)

- [Windows端](https://github.com/SagerNet/sing-box/releases)「无图形界面」

- [Mac端](https://github.com/SagerNet/sing-box/releases)

- [Linux端](https://github.com/SagerNet/sing-box/releases)


## 安装

::: details iOS端 安装

注册一个 [美区苹果ID](../iPhone/Apple_ID.md) ，然后在Appstore下载 [sing-box](https://apps.apple.com/us/app/sing-box/id6451272673)

![](/singbox/ios/ios-01.png)

:::




:::: details Android端 安装

下载 [sing-box](https://github.com/SagerNet/sing-box/releases) 并安装

::: tip 说明
一般默认下载v8版本，v7版本是老旧手机

不知道版本下载 foss开源版 或者 universal通用版
:::

![](/singbox/android/android-01.png)

::::






## 使用



:::: details iOS端 使用

在仪表盘 `Dashboard` 点击安装网络插件 `Install Network Extension`

![](/singbox/ios/ios-02.png)

安装好后，点击底部 `Profile` - `New Profile`

![](/singbox/ios/ios-03.png)

找一个 [免费送流量的机场注册](./channel.md)，一键订阅 - 复制订阅地址


![](/singbox/ios/ios-04.png)

::: tip 订阅格式转换
sing-box有独特的格式，无法直接填入订阅

我们借助 [@Toperlock](https://github.com/Toperlock/) 的 [sing-box-subscribe](https://github.com/Toperlock/sing-box-subscribe/) 来转换
:::

```
格式：
https://sing-box-xxx.app/config/订阅链接
```

::: details 如何自己部署
如果你是小白，直接用文中的链接，使用过github和vercel的可以自己部署

---

* 先 [Fork项目：sing-box-subscribe](https://github.com/Toperlock/sing-box-subscribe/) 到自己仓库

* 按照 [Vercel教程部署](https://github.com/Toperlock/sing-box-subscribe/blob/main/docs/vercel-cn.md)

[部署失败，报错Error: Unable to find any supported Python versions.](https://github.com/Toperlock/sing-box-subscribe/issues/65)

进入该项目 Settings - General - Node.js Version，改成 `18.x` ，`Save` 保存

然后在 `Deployments` 报错的那条 `Deploy` 重新部署即可

![](/singbox/ios/ios-05.png)

链接一共三个，复制其中一个即可
:::


我准备的两个链接，第一个是作者的，第二个是我自己部署的

```
https://sing-box-subscribe-doraemon.vercel.app/config/订阅链接
```
---

```
https://sing-box-subscribe-pink-two.vercel.app/config/订阅链接
```

机场名随便输，Type类型选择 `Remote` 远程，URL处粘贴组合好的订阅链接，点 `Create` 创建

![](/singbox/ios/ios-06.png)

这样就添加成功了，回到仪表盘 `Dashboard` 开启 `Enabled` 开关

::: details 报错，创建失败
由于vercel生成的网址被墙，可能需要开梯子才能加载进去
:::

![](/singbox/ios/ios-07.png)

开启成功了就能到到流量使用信息，点击 `Groups`，展开这个收纳图标

![](/singbox/ios/ios-08.png)

这样就能看到我们的节点了，点击 `闪电`图标测速


![](/singbox/ios/ios-09.png)

选择一个延迟低的节点，访问 [谷歌](https://www.google.com) 看看

::: tip 谷歌打不开
在仪表盘 `Dashboard` 选择 `global` 全局，如果能成功访问即可

然后可切换回 `Rule` 规则
:::

![](/singbox/ios/ios-10.png)

::::









:::: details Android端 使用

安装好后，点击底部 `Profile` 右下角 `+` 号添加

![](/singbox/android/android-02.png)


然后找一个 [免费送流量的机场注册](./channel.md)，一键订阅 - 复制订阅地址

![](/singbox/android/android-03.png)



点击 `Creat Manually` ，机场名随便输，Type类型选择 `Remote` 远程，

URL处需填写特定的格式链接，机场订阅链接不可以直接用！！！


![](/singbox/android/android-04.png)


我们借助 [@Toperlock](https://github.com/Toperlock/) 的 [sing-box-subscribe](https://github.com/Toperlock/sing-box-subscribe/) 来转换

```
格式：
https://sing-box-xxx.app/config/订阅链接
```

我提供了两个链接，第一个是作者的，第二个是我自己部署的，配置好后粘贴，点 `Create` 创建

```
https://sing-box-subscribe-doraemon.vercel.app/config/订阅链接
```
---

```
https://sing-box-subscribe-pink-two.vercel.app/config/订阅链接
```

::: details 报错，创建失败
由于vercel生成的网址被墙，可能需要开梯子才能加载进去
:::

::: details 如何自己部署
如果你是小白，直接用文中的链接，老手使用过github和vercel的可以自己部署

---

* 先 [Fork项目：sing-box-subscribe](https://github.com/Toperlock/sing-box-subscribe/) 到自己仓库

* 按照 [Vercel教程部署](https://github.com/Toperlock/sing-box-subscribe/blob/main/docs/vercel-cn.md)

[部署失败，报错Error: Unable to find any supported Python versions.](https://github.com/Toperlock/sing-box-subscribe/issues/65)

进入该项目 Settings - General - Node.js Version，改成 `18.x` ，`Save` 保存

然后在 `Deployments` 报错的那条 `Deploy` 重新部署即可

![](/singbox/android/android-05.png)

链接一共三个，复制其中一个即可
:::



回到仪表盘 `Dashboard` 开启 `Enabled` 开关，点击 `Groups`，展开这个收纳图标


![](/singbox/android/android-06.png)


点击 `闪电`图标测速，选择一个延迟低的节点，访问 [谷歌](https://www.google.com) 看看

::: tip 谷歌打不开
在仪表盘 `Dashboard` 选择 `global` 全局，如果能成功访问即可

然后可切换回 `Rule` 规则
:::


![](/singbox/android/android-07.png)


::::














## 进阶

sing-box支持各种协议，需要根据官方配置修改保存成*.json格式导入使用

* [官网的出站配置](https://sing-box.sagernet.org/zh/configuration/outbound/#_3)

* [@chika0801 的 sing-box-examples](https://github.com/chika0801/sing-box-examples)


还可以自建节点，下次讲解