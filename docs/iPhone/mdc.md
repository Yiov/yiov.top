# MDC漏洞的软件及使用



::: danger 敬告
由于巨魔已经包含了MDC漏洞，[装巨魔](./sign/TrollStore.md) 就可以了

以下教程可以无视
:::


## 简介

MacDirtyCow漏洞，也就是 [CVE-2022-46689](https://support.apple.com/zh-cn/HT213532) 漏洞，简称MDC

::: details 关于 CVE-2022-46689 漏洞
```
Kernel

适用于：macOS Ventura

影响：App 或许能够以内核权限执行任意代码

描述：已通过额外验证解决竞态条件问题。

CVE-2022-46689：Google Project Zero 的 Ian Beer
```
:::

::: tip 事件进展
* [Google Project Zero](https://github.com/googleprojectzero) 的 Ian Beer 提交了这个漏洞，它可以使App能够以内核权限执行任意代码，该漏洞仅适用于iPhone 8 及更高机型

* 大神 [@Zhouwei Zhang](https://twitter.com/Zhouwei) 利用此漏洞发布了项目 [MacDirtyCow Demo](https://github.com/zhuowei/MacDirtyCowDemo)，通过 MacDirtyCow 可以制作一些特殊的应用程序，允许重写沙盒，覆盖文件，且无需越狱
:::


* 原理：通过交换同等大小文件的方式，覆盖文件实现，覆盖的文件体积越大，越占用内存

* 弊端：内存占用过多会导致手机变卡、小组件无法使用等情况，只能通过重启后释放内存



## 适用范围


| 手机/系统 | 6s-7系列 / SE (A9-A10) | 8-15系列/ XS系列 / XR / SE 2-3 (A11-A16) |
| :-: | :-: | :-: |
| 15.0 - 15.7.1 | ✘ | :heart: |
| 15.7.2-15.8 | ✘ | ✘ |
| 16.0 - 16.1.2 | ✘ | :heart: |
| 16.2及以上 | ✘ | ✘ |


* 支持 `iOS 15.0 - 15.7.1` 及 `iOS 16.0 - 16.1.2` 系统

* 不支持 `iOS 15.7.2` 和 `iOS 16.2 及更高的系统`

* 注意：IOS 14系统、巨魔/越狱用户，不推荐使用



## 使用

以下操作仅做演示：突破Apple ID只能安装3个应用的限制


::: tip 时间进展2
* 2023-1-31 大神 [@XsF1ref](https://twitter.com/XsF1ref) 发推通过使用此漏洞修补 `/user/libexec/istalld` 文件，可以移除Apple ID安装3个限制

* 2023-2-4 [@Zhouwei Zhang](https://twitter.com/Zhouwei) 发布 WDBRemoveThreeAppLimit
:::

个人ID签名只能签3个，用MDC就可以打破这个限制


* 安装：[牛蛙助手](./sign/bullfrog.md)


* 下载：[WDBRemoveThreeAppLimit](https://github.com/zhuowei/WDBRemoveThreeAppLimit/releases)

![](/MDC/MDC-01.png)



打开牛蛙助手，右上角+ -> 导入资源


![](/MDC/MDC-02.png)


选择刚下载好的 `WDBRemoveThreeAppLimit`，并导入应用库

::: tip 说明
Safari浏览器下载的默认在文件-icloud云盘-下载里
:::

![](/MDC/MDC-03.png)


选择 `WDBRemoveThreeAppLimit` 签名

![](/MDC/MDC-04.png)


立即签名- 安装

![](/MDC/MDC-05.png)


打开 `WDBRemoveThreeAppLimit` ，进入会有个提示，点好

![](/MDC/MDC-06.png)

点击 `go`，提示成功后，重启一下手机

![](/MDC/MDC-07.png)

我们继续用牛蛙自签，可以看到我已经装了5个了

![](/MDC/MDC-08.png)



同样的方法我们下载安装 Blacklist：[https://appinstalleriosgh.github.io/Sign/Blacklist.ipa](https://appinstalleriosgh.github.io/Sign/Blacklist.ipa)


::: tip 说明
主要用于修复右图这种，证书过期打不开的情况
:::

![](/MDC/MDC-09.png)

进入的提示点好，在点击修复 `Fix Blacklist` 即可

![](/MDC/MDC-10.png)




## 其他软件

::: warning 注意
有些工具功能是相同的，请勿同时启用
:::


### 聚合类


* [Cowabunga：俗称奶牛，是MDC漏洞最具代表性的超强工具箱，适用于iOS 14.0-15.7.1 / 16.0-16.1.2 | @leminlimez](https://github.com/leminlimez/Cowabunga/releases) 丨 [官网](https://cowabun.ga/)

* [Cowabunga Lite：Mac端的MDC漏洞开发的超强工具箱，适用于 iOS 15 - 17.x 系统 | @leminlimez](https://github.com/leminlimez/CowabungaLite/releases) 丨 [Windows版-Cowabunga Lite](https://github.com/Avangelista/CowabungaLiteWindows)

* [Misaka：MDC和KFD漏洞集合的多功能插件商店，MDC适用于iOS 15.0-15.7.1 / iOS 16.0 - 16.1.2](https://github.com/straight-tamago/misaka/releases)


### 工具类

* [Blacklist：修复企业证书黑名单 丨 @appinstalleriosgh](https://appinstalleriosgh.github.io/Sign/Blacklist.ipa)

* [Whitelist：一键修复企业证书黑名单 | @BomberFish](https://github.com/BomberFish/Whitelist/releases)

* [FilazEscaped16：文件管理器](https://basvtdevelopments.com/filzaescaped)

* [Santander：类似 Filza 的文件管理器 | @Mineek](https://github.com/34306/iPA/releases/tag/Santander_iPA)

---

* [CCEnabler：自定义控制中心](https://www.mediafire.com/file/3k83zr48bkoubpd/)

* [RespringCC：一键注销工具，可添加到控制中心 | @straight-tamago](https://github.com/straight-tamago/RespringCC/releases)

* [NoCameraSound：一键关闭拍照快门声静音拍照 | @straight-tamago](https://github.com/straight-tamago/NoCameraSound/releases)

* [ControlConfig：自定义控制中心工具 | @f1shy-dev](https://github.com/BomberFish/ControlConfig/releases)

---

* [KillMyOTA：禁OTA升级 | @haxi0](https://github.com/haxi0/KillMyOTA)

* [InstaSpring：一键注销 | @haxi0](https://github.com/haxi0/InstaSpring)

* [VanishBar：隐藏状态栏 | @haxi0](https://github.com/haxi0/VanishBar)






### 美化类



* [DockHider：Dock 栏透明背景/隐藏主页条 | @leminlimez](https://github.com/leminlimez/DockHider/releases)

* [FileSwitcherX：Dock栏透明/文件夹背透/系统键盘音等 | @straight-tamago](https://github.com/straight-tamago/FileSwitcherX/releases)

* [NoHomeBar：隐藏全面屏设备底部的主页条 | @straight-tamago](https://github.com/straight-tamago/NoHomeBar/releases)

* [DockTransparent：一键 Dock 栏透明背景 | @straight-tamago](https://github.com/straight-tamago/DockTransparent/releases)

---

* [Appabetical：主屏幕图标一键排序 | @Avangelista ](https://github.com/Avangelista/Appabetical/releases)

* [WDBFontOverwrite：系统更换字体工具 | @ginsudev](https://github.com/ginsudev/WDBFontOverwrite/releases)

* [TrollLock：更换锁屏锁头  | @haxi0](https://github.com/haxi0/TrollLock-Reborn) 丨 [锁头主题](https://github.com/YangJiiii/trolllock) 丨 [锁头下载](http://www.lockstore.top/)

---

* [FileSwitcherPro：多功能修改器 | @straight-tamago](https://github.com/straight-tamago/FileSwitcherPro)

* [DynamicCow：非iPhone 14实现激活灵动岛功能 IOS16.0-16.1.2| @matteozappia](https://github.com/matteozappia/DynamicCow/releases)

* [ResSet16：自定义分辨率工具 | @sourcelocation](https://github.com/sourcelocation/ResSet16/releases)

* [StatusMagic：自定义状态/运营商名称 | @Avangelista](https://github.com/Avangelista/StatusMagic/releases)

* [Mise：通知横幅发光效果 需配合Cowabunga或FileSwitcherPro使用 | @roeegh](https://github.com/roeegh/Mise/releases)







