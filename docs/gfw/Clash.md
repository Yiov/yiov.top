# Clash安装及使用



## 简介


著名的网络代理工具，由于它的LOGO是酷似一只猫，俗称：小猫咪


::: tip 关于Clash
clash是一个core核心，即 [clash core](https://github.com/Dreamacro/clash) ，以`Clash Premium`、`Clash meta` 两个衍生出的核心为代表

* Premium核：Clash for Windows、Clash for Android等

* Meta核：Clash verge、ClashN等

注：这些衍生是在内核是代码的基础上，增加了一个可视化的图形界面，即GUI
:::



::: warning 删库事件(蝴蝶效应)

* 起因：clash for windows，作者 [@Fndroid](https://github.com/Fndroid) 于2023/11/2在 [Tg群](https://t.me/fndroid_news) 和 [推特](https://twitter.com/fndroid/status/1719980029571109092) 上发出：`停止更新了，江湖再见吧`，并对Clash for window删库。

* 过程：由于未发布具体原因，导致他人开始造谣作者被抓，还上了微博热搜

* 结果：其他Clash内核及相关项目的开发人员，不得已暂避锋芒，集体删库
:::


![](/Clash/Clash-01.png)


## 客户端

* [iOS端](https://stash.ws/)

* [安卓端](https://github.com/Yiov/Clash_For_Android/releases)

* [PC端](https://github.com/Z-Siqi/Clash-for-Windows_Chinese/releases/tag/CFW)

* [Mac端](./Clash.md#其他软件)




## 协议


| 内核 | 支持协议 |
|:-:|:-:|
| clash core | socks、HTTP、Shadowsocks(SS)、ShadowsocksR(SSR)、Snell、VMess(V2Ray)、Trojan |
| Clash.Meta<br>`mihomo` | socks、HTTP、Shadowsocks(SS)、ShadowsocksR(SSR)、Snell、VMess(V2Ray)、Trojan、Hysteria、VLESS(xray)、Hysteria2、TUIC、WireGuard、SSH |


## 安装


::: details Clash for Windows的安装

下载热心人士保存的备份：[Clash-for-Windows](https://github.com/Z-Siqi/Clash-for-Windows_Chinese/releases/tag/CFW)

![](/Clash/Clash-02.png)

下载最后版本 `0.20.39`后解压，双击 `Clash for Windows.exe` 运行

免安装的便携版，打开就可以用了

![](/Clash/Clash-03.png)


进入后，界面是英文的

![](/Clash/Clash-04.png)

我们来下载 [Clash汉化补丁](https://github.com/Z-Siqi/Clash-for-Windows_Chinese/releases/tag/CFW-V0.20.39_CN)

选择 `app.asar` 下载

![](/Clash/Clash-05.png)


右下角退出 Clash ，一定要先退出！！！

将下载好的 `app.asar` 文件拖入Clash目录中的 `resources` 中替换


![](/Clash/Clash-06.png)

这样就汉化成功了

![](/Clash/Clash-07.png)

:::




::: details Clash for Android的安装

下载最后更新版的备份：[Clash-for-Android](https://github.com/Yiov/Clash_For_Android/releases)


根据自己的系统下载安装，不知道的下载通用版

![](/Clash/Clash-08.png)

:::



## 使用


:::: details Clash for Windows的使用

找一个免费送流量的机场注册，我以 [ikuuu](https://ikuuu.pw/) 为例

::: tip 说明
以下截图机场仅为演示

更多免费好用机场，请查看 [机场大全一览表](./channel.md)
:::

![](/Clash/Clash-09.png)


下拉找到订阅，选择 `一键导入Clash` ，也可以复制

![](/Clash/Clash-10.png)

这样就自动跳转下载好了，手动的话粘贴订阅地址后点下载即可

![](/Clash/Clash-11.png)

在代理中查看节点，点击WIFI图标测速，选择延迟低的使用

![](/Clash/Clash-12.png)


桌面右下角对着Clash鼠标右键，代理模式选 `规则`，勾选 `系统代理` 即可开启翻墙

::: tip 建议启用规则
对应了下方的 `代理组`，如果你不懂，保持默认即可

* 访问国外应用：走节点

* 访问国内应用：不走节点，使用直连 (无需关闭Clash)

系统会自动根据使用场景，选择代理组切换
:::

![](/Clash/Clash-13.png)


我们访问 [谷歌](https://www.google.com/) 看一下

![](/Clash/Clash-14.png)

::::





:::: details Clash for Android的使用

找一个免费送流量的机场注册，点击 `一键订阅`

::: tip 说明
以下截图机场仅为演示

更多免费好用机场，请查看 [机场channel大全一览表](./channel.md)
:::

![](/Clash/Clash-15.png)

自动跳转过来保存即可，不能跳转的，手动复制填写，返回启动

![](/Clash/Clash-16.png)

在代理中点击 闪电 图标测速，选择速度快的

然后访问谷歌，成功即可，打不开说明节点不行，换机场

![](/Clash/Clash-17.png)

::::





## 其他软件

Clash三大内核：Clash core、Premium、Meta

🔴-删库 / 🟡-归档 / 🟢-在更

| 状态 | 名称 | 支持平台及说明 |
|:-:|:-:|:-:|
| 🔴 | [Clash core](https://github.com/Dreamacro/) | Clash内核 (开源) |
| 🔴 | [Clash Premium](https://github.com/Dreamacro/) | 基于Clash内核开发 (闭源) |
| 🟢 | [Clash.Meta](https://github.com/MetaCubeX/mihomo) | 基于Clash内核开发 (开源) ，现已更名为 `mihomo` |
| |
| 🔴 | [Clash for Windows](https://github.com/Fndroid)<br>Premium内核 | Windows<br>[备份文件](https://github.com/Z-Siqi/Clash-for-Windows_Chinese/releases/tag/CFW) |
| 🔴 | [Clash for Android](https://github.com/Fndroid)<br>Premium内核 | Android<br>[备份文件](https://github.com/Yiov/Clash_For_Android/releases) |
| 🔴 | [ClashX](https://github.com/yichengchen/)<br>Premium内核 | macOS<br>[备份文件](https://github.com/bannedbook/ClashX/releases) |
| 🔴 | [ClashX Pro](https://install.appcenter.ms/users/clashx/apps/clashx-pro/distribution_groups/public)<br>Premium内核 | macOS<br>[备份文件](https://github.com/cfwtf/clashX/releases/tag/1.118.1) |
| 🟢 | [Stash](https://stash.ws/)<br>Premium内核 | iOS、macOS |
| 🟢 | [OpenClash](https://github.com/vernesong/OpenClash/releases)<br>Premium内核 | OpenWrt软路由 |
| |
| 🟢 | [ClashMetaForAndroid](https://github.com/MetaCubeX/ClashMetaForAndroid/releases)<br>Meta内核 | Android |
| 🟢 | [ClashX.Meta](https://github.com/MetaCubeX/ClashX.Meta/releases)<br>Meta内核 | macOS |
| 🟡 | [clash-verge](https://github.com/zzzgydi/clash-verge/releases)<br>Meta内核 | windows、macOS、linux |
| 🟢 | [clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev/releases)<br>Meta内核 | windows、macOS、linux |
| 🟢 | [clash-nyanpasu](https://github.com/LibNyanpasu/clash-nyanpasu/releases)<br>Meta内核<br>兼容Premium内核 | windows、macOS、linux |