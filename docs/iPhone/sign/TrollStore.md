---
prev: false
next: false
---

# 巨魔助手安装及使用





## 简介

全称 `TrollStore` ，中文名 `巨魔助手`，是一个绕签名安装ipa的工具，是一个划时代的伟大作品！

::: tip 与其他签名工具的区别
* 牛蛙/轻松签等：必须要证书，有效期过后掉签

* 巨魔：无需证书，用不掉签！！！
:::

::: tip 事件进展
* [@Linus Henze](https://twitter.com/LinusHenze) 向苹果官方递交了漏洞 [CVE-2022-26766](https://support.apple.com/zh-cn/102877) / [CVE-2022-26763](https://support.apple.com/zh-cn/102877)

* 2022/7/2 [@Zhouwei Zhang](https://twitter.com/Zhouwei) 公开了利用此漏洞绕过签名的方法

* 2022/9/3 [@opa334](https://twitter.com/opa334dev) 利用此漏洞开发了 `TrollStore`

* 2022/10/6 [@Linus Henze](https://twitter.com/LinusHenze) 在OBTS会议上公开了 `Fugu15` 的全新越狱方式，[@opa334](https://twitter.com/opa334dev) 也通过他的帮助发布了全新的`TrollStore`工具

* 2023/11/28 [@opa334](https://twitter.com/opa334dev) 通过利用 [@Alfie](https://twitter.com/alfiecg_dev) 发现的 [CVE-2023-41991](https://support.apple.com/zh-cn/106369) 漏洞，并获得他的帮助完成了 `TrollStore2`
:::

::: details 关于 CVE-2022-26766 / CVE-2022-26763 和 CVE-2023-41991 漏洞
```
Security

适用于：Apple TV 4K、Apple TV 4K（第 2 代）和 Apple TV HD

影响：恶意 App 或许能够绕过签名验证

描述：已通过改进检查解决证书解析问题

CVE-2022-26766：Pinauten GmbH (pinauten.de) 的 Linus Henze

---

DriverKit

适用于：Apple TV 4K、Apple TV 4K（第 2 代）和 Apple TV HD

影响：恶意应用程序或许能够以系统权限执行任意代码

描述：已通过改进边界检查解决越界访问问题。

CVE-2022-26763：Pinauten GmbH (pinauten.de) 的 Linus Henze

---

Security

适用于：iPhone XS 及更新机型、12.9 英寸 iPad Pro（第 2 代）及更新机型、10.5 英寸 iPad Pro、11 英寸 iPad Pro（第 1 代）及更新机型、iPad Air（第 3 代）及更新机型、iPad（第 6 代）及更新机型、iPad mini（第 5 代）及更新机型

影响：恶意 App 或许能够绕过签名验证.有报告指出，在 iOS 16.7 之前发布的 iOS 版本中，这个问题可能已经遭到频繁利用；Apple 已知晓这一报告。

描述：已解决证书验证问题。

CVE-2023-41991：多伦多大学芒克学院 Citizen Lab 的 Bill Marczak 和 Google Threat Analysis Group 的 Maddie Stone 合作发现
```

:::

## 适用范围

根据 [opa334的文档](https://github.com/opa334/TrollStore/) 中的 [安装指南](https://ios.cfw.guide/installing-trollstore/) 查看是否符合

| 系统 / iPhone | 6s-8系列 / SE / X<br>(A9-A11) | 11-15系列 / XR / XS / SE 2-3<br>(A12-A16)<br>(M1-M2) |
| :-: | :-: | :-: |
| [14.0](https://support.apple.com/zh-cn/HT211808) - 14.8.1 | [TrollInstallerX](#trollinstallerx) | [TrollHelperOTA](#trollhelperota) |
| [15.0](https://support.apple.com/zh-cn/HT212788) - 15.4.1 | [TrollHelperOTA](#trollhelperota) | [TrollHelperOTA](#trollhelperota) |
| 15.5 | [TrollInstallerX](#trollinstallerx) | [TrollHelperOTA](#trollhelperota) |
| 15.6 - 15.6.1 | [TrollInstallerX](#trollinstallerx) | [TrollHelperOTA](#trollhelperota) |
| 15.7 - [16.6.1](https://support.apple.com/zh-cn/HT213407) | [TrollInstallerX](#trollinstallerx) | [TrollInstallerX](#trollinstallerx) |
| 16.7 - 16.7.7 | ✘ | ✘ |
| [17.0](https://support.apple.com/zh-cn/HT213781) | [TrollRestore](https://ios.cfw.guide/installing-trollstore-trollrestore/) | [TrollRestore](https://ios.cfw.guide/installing-trollstore-trollrestore/) |
| 17.0.1及以上 | ✘ | ✘ |





## 安装


> 由于官方已经出了安装应用，第三方安装方式不再演示



### TrollInstallerX

::: warning 教程适用于
[A8-A11](#适用范围)：`iOS 14.0 - 16.6.1`

[A12-A14](#适用范围)：`iOS 14.0 - 16.5.1`

[A15-A16](#适用范围)：`iOS 14.0 - 16.5`

注：iOS 15.7 - 16.6.1用户需要翻墙才能安装成功
:::


它是巨魔官方开发者之一 [@Alfie](https://twitter.com/alfiecg_dev) 推出的最简洁的巨魔安装工具

使用前，先安装好 [牛蛙助手](./bullfrog.md) ，然后再下载 [TrollInstallerX](https://github.com/alfiecg24/TrollInstallerX/releases)

![](/TrollStore/TrollInstallerX/TrollInstallerX-01.png)

下载完成后，点击浏览器 `下载` 按键，再点击已经下载好的 `TrollInstallerX`

![](/TrollStore/TrollInstallerX/TrollInstallerX-02.png)


右上角分享，选择 `牛蛙助手`

![](/TrollStore/TrollInstallerX/TrollInstallerX-03.png)

点 `发送`，牛蛙打开后，选择 `导入`

::: tip 说明
如果勿点了取消，也可直接点 `TrollInstallerX.ipa` 选择导入应用库
:::

![](/TrollStore/TrollInstallerX/TrollInstallerX-04.png)


点击 `TrollInstallerX` ，选择 `签名` - `立即签名`

![](/TrollStore/TrollInstallerX/TrollInstallerX-05.png)


在已签名的页卡中，选择刚签好名的 `TrollInstallerX` 安装

但牛蛙安装必须要开启`VPN和WIFI`，我们去打开

![](/TrollStore/TrollInstallerX/TrollInstallerX-06.png)

设置 - VPN - 勾选 `牛蛙助手` - 打开VPN开关

![](/TrollStore/TrollInstallerX/TrollInstallerX-07.png)

打开VPN后我们返回重新安装 TrollInstallerX 即可

![](/TrollStore/TrollInstallerX/TrollInstallerX-08.png)

TrollInstallerX 就安装成功了，但是还打不开，要信任一下

![](/TrollStore/TrollInstallerX/TrollInstallerX-09.png)


设置 - 通用 - VPN与设备管理 - 选择 开发者APP - `信任`

![](/TrollStore/TrollInstallerX/TrollInstallerX-10.png)

![](/TrollStore/TrollInstallerX/TrollInstallerX-11.png)


再次打开 TrollInstallerX ，会根据系统自动提供方案

::: tip 安装方式

* TrollHelperOTA：[OTA安装的教程](#trollhelperota)

* Unsandboxing：沙盒安装，通过利用MDC或者KFD漏洞安装
:::

![](/TrollStore/TrollInstallerX/TrollInstallerX-12.png)

弹窗提示开始利用漏洞，进入主界面安装 `Install TrollStore`


![](/TrollStore/TrollInstallerX/TrollInstallerX-13.png)

选择一个 `Persistence Helper` ，即持久性助手，我就直接选了 `Tips`

等待安装完成，过程顺滑速度飞快

::: details 无法安装报错 Failed to get kernel
可能需要翻墙，[科学上网工具及使用方法](../../gfw/channel)
:::

![](/TrollStore/TrollInstallerX/TrollInstallerX-14.png)


手机桌面巨魔安装成功，可以直接看 [巨魔界面介绍](#界面介绍)

::: tip 桌面没有巨魔
常见于iOS 16的KFD漏洞，需要通过注入系统程序来安装

如果你选了 `Tips` ，打开提示APP，它会变身成巨魔安装器，点 `Insatll TrollStore` 安装巨魔即可
:::

![](/TrollStore/TrollInstallerX/TrollInstallerX-15.png)

安装器 TrollInstallerX 可以卸载了，用不上了

![](/TrollStore/TrollInstallerX/TrollInstallerX-16.png)




### TrollHelperOTA



::: warning 教程适用于
教程仅适用于：[A8-A11](#适用范围)：`IOS 15.0 - 15.4.1`(arm64)

教程仅适用于：[A12-A16](#适用范围)：`IOS 14.0 - 15.6.1`(arm64e)
:::


* arm64：https://api.jailbreaks.app/troll

* arm64e：https://api.jailbreaks.app/troll64e

根据自己的系统选择安装链接

![](/TrollStore/OTA/OTA-01.png)


安装的是 `GTA Car Tracker` ，打开点安装 `Install Trollstore`


::: details 无法安装报错 Error
需要翻墙，[科学上网工具及使用方法](../../gfw/channel)
:::

自动注销后，手机桌面巨魔安装成功，可以直接看 [巨魔界面介绍](#界面介绍)

![](/TrollStore/OTA/OTA-02.png)










## 界面介绍

用巨魔安装的应用，只能在巨魔的APP界面，左滑卸载


![](/TrollStore/TrollStore-01.png)

使用巨魔前确保 `Idid` 和 `Persistence Helper` 是否已经安装

已安装的无视，没有安装就请自行安装！

![](/TrollStore/TrollStore-01-1.png)





## 使用

::: danger 注意
通过巨魔安装的应用，AppStore会显示小云朵，即未下载此应用的状态

巨魔安装的是系统级，应用商店安装的是用户级，不一样

---

想要更新应用依然只能找安装包，通过巨魔安装

应用商店下载会直接覆盖巨魔安装的版本
:::


---



:::: details 虚拟定位

下载：https://www.mediafire.com/file/qwdgdnvek84xb83/

打开链接，先下载授权的版本

![](/TrollStore/TrollStore-02.png)

下载完成后，点击查看，点击文件

![](/TrollStore/TrollStore-03.png)

右上角分享，用巨魔 `TrollStore` 打开安装即可

![](/TrollStore/TrollStore-04.png)

然后同样的方法，覆盖安装破解的可搜索的v1.4.1版本即可

https://www.mediafire.com/file/0pfhnyv3twnw3f6/

![](/TrollStore/TrollStore-05.png)

::::





:::: details 更换图标

请先用巨魔安装好 [轻松签](./esign.md#安装)

然后下载最新版的官方包

https://github.com/opa334/TrollStore/releases

![](/TrollStore/TrollStore-06.png)

点下载，在点击下载好的包

![](/TrollStore/TrollStore-07.png)

长按 - 共享

![](/TrollStore/TrollStore-08.png)

选择 轻松签 ，然后点击 `TrollStore.tar` 解压2次

![](/TrollStore/TrollStore-09.png)

得到 `TrollStore.app` 文件夹，点击选择 `签名` - 更多设置

![](/TrollStore/TrollStore-10.png)

桌面图标，选一张你自己喜欢的，除了 `仅修改配置，不签名` 开关打开，其他全部关闭

::: details 分享几个图片吧

![](/TrollStore/icon/icon-01.png)

![](/TrollStore/icon/icon-02.jpg)

![](/TrollStore/icon/icon-03.png)

![](/TrollStore/icon/icon-04.png)

![](/TrollStore/icon/icon-05.jpg)

![](/TrollStore/icon/icon-06.jpg)

![](/TrollStore/icon/icon-07.jpg)

![](/TrollStore/icon/icon-08.jpg)

![](/TrollStore/icon/icon-09.jpg)

![](/TrollStore/icon/icon-10.png)

![](/TrollStore/icon/icon-11.jpg)

![](/TrollStore/icon/icon-12.jpg)

:::

![](/TrollStore/TrollStore-11.png)

![](/TrollStore/TrollStore-12.png)

签名好后不要安装，`退出` ，文件列表进入 `YYYAppFolder` 文件夹

![](/TrollStore/TrollStore-13.png)

在 `SignedApps` 找到 刚签好名的ipa，解压，进入 `Payload`

![](/TrollStore/TrollStore-14.png)

![](/TrollStore/TrollStore-15.png)

将解压后的 `TrollStore.app` 文件夹压缩成zip，然后点 `i` 重命名为 `TrollStore.tar`

![](/TrollStore/TrollStore-16.png)

然后分享给巨魔安装，自动注销后，就能看到图标已经变了

::: tip 说明
想改回来，去下载官方包分享给巨魔安装即可
:::

![](/TrollStore/TrollStore-17.png)


:::: 











:::: details 静音模块

开始前请用巨魔安装好 [Filza：文件管理器 丨@巨魔e族破解v4.0_刀刀汉化版](https://www.mediafire.com/file/jwcsx875fmz9kep/)

然后下载由 [@赵楠](https://github.com/invalidunit) 大佬提供的文件：https://www.mediafire.com/file/4cpvykfuu2biqeo/

![](/TrollStore/TrollStore-18.png)

下载 - 选择下好的文件

![](/TrollStore/TrollStore-19.png)

右上分享 - 用 `Filza` 打开

![](/TrollStore/TrollStore-20.png)

进入了Filza的 `/var/mobile/Documents` 目录，长按导入的文件 `复制`

![](/TrollStore/TrollStore-21.png)

左上返回找到目录 `/var/Managed Preferences/mobile`

![](/TrollStore/TrollStore-22.png)

在此处左下角粘贴刚复制的文件

![](/TrollStore/TrollStore-23.png)

在目录后，打开巨魔注销一下就可以了

![](/TrollStore/TrollStore-24.png)

我们下拉控制中心就能看到了

::: tip 说明
文件是从iPad提取出来，只是手机上屏蔽了，我们通过文件恢复了，100%安全
:::

![](/TrollStore/TrollStore-25.png)


::::








:::: details 多开分身

巨魔没有多开App功能，但是可以借助 [轻松签](https://esign.yyyue.xyz/) 完成

点我查看 [轻松签多开微信教程](./esign.md#使用)

::::











:::: details 屏蔽更新

首先打开手机设置 - 通用 - 日期与时间，关闭 `自动设置` 开关，将时间改为 `2023-12-14`

然后，安装tvOS17描述文件

Safari打开：https://static.itsnebula.net/apple/noota/17.mobileconfig

::: details 进入链接浏览器警告了
苹果官方拦截的，无视即可，点 `显示详细信息 - 访问此网站`

注意：提示描述文件无效签名无效的问题，是你时间没改对
:::

![](/TrollStore/TrollStore-26.png)

设置中点开描述文件安装

![](/TrollStore/TrollStore-27.png)

安装完重不重启都可以，这样更新界面就不再推送了

::: tip 建议
如果你本身有更新红点，点 `以后` ，回设置中查看无红点了再重启

如果本身没有更新红点，直接 `重启启动`
:::

::: details 桌面多了一个反馈app
无视即可，删掉也行
:::

![](/TrollStore/TrollStore-28.png)

---

做完以上工作其实就可以了

但如果你担心苹果强制更新，直接把车门焊死

巨魔安装好 [Filza：文件管理器 丨@巨魔e族破解v4.0_刀刀汉化版](https://www.mediafire.com/file/jwcsx875fmz9kep/)

进入 `/usr/bin/` 目录，找到 `vm_stat` 打开运行

![](/TrollStore/TrollStore-29.png)

![](/TrollStore/TrollStore-30.png)

复制下面代码，Paste粘贴

```sh
rm -rf /var/MobileSoftwareUpdate/MobileAsset/AssetsV2/* && chflags schg,schange,simmutable /var/MobileSoftwareUpdate/MobileAsset/AssetsV2
```

这就苹果就彻底无法更新了

![](/TrollStore/TrollStore-31.png)

::: details 想还原使用：恢复命令

```sh
chflags noschg,noschange,nosimmutable /var/MobileSoftwareUpdate/MobileAsset/AssetsV2
```
:::

::::










:::: details 砸壳dump

::: tip 简介
简而言之，就是提取APP安装包

与安卓不同，苹果对商店上架的APP，在外层包裹了一层加密的外壳

只有通过砸壳工具进行解密脱壳后才可以，所以叫做砸壳，也叫dump
:::

用巨魔安装好 [AppsDump2：巨魔非全权限砸壳](https://www.mediafire.com/file/pu75onrrz0hdej3/)

以 `抖音` 为例，打开 AppsDump2，选择抖音 - `脱壳 - 打包ipa`

![](/TrollStore/TrollStore-32.png)

解密完成后，可 `共享文件` 导入到轻松签，进行多开和注入插件等

::: tip 说明
因为砸壳的文件多了会占内存，建议安装一个 [Fliza文件管理器](https://www.mediafire.com/file/jwcsx875fmz9kep/)

删掉多余的ipa文件
:::

![](/TrollStore/TrollStore-33.png)

::: warning 注意
微信砸出来非全权限，没有分享等小组件

只能越狱机或Mac砸
::::






## 更多工具


### 聚合类


<Linkcard url="https://ipa.cypwn.xyz/" title="CyPwnStore：破解应用商店" description="https://ipa.cypwn.xyz/" logo="https://ipa.cypwn.xyz/favicon.ico"/>


<Linkcard url="https://decrypt.day/" title="Decrypt：在线砸壳商店" description="https://decrypt.day/" logo="https://cdn.decrypt.day/images/decrypt-logo.webp"/>


<Linkcard url="https://zappfree.com/ipa-library/" title="IPA图书馆" description="https://zappfree.com/ipa-library/" logo="https://zappfree.com/img/ipa-library.png"/>


<Linkcard url="https://ipa.store/game" title="IPA商店" description="https://ipa.store/game" logo="https://ipa.store/wp-content/uploads/2022/08/2022080502143894.png"/>


<Linkcard url="https://toyou.club/" title="凸游CLUB" description="https://toyou.club/" logo="https://toyou.club/wp-content/uploads/2023/03/cropped-%E7%BD%91%E7%AB%99fa-180x180.png"/>



<Linkcard url="https://www.mediafire.com/file/l6ggeti3d1pdrlw/SuperVIP8.1-3.ipa/file" title="SuperVIP8.1-33" description="冷冷雨·付费·应用破解" logo="https://www.qhmanhua.com/d/file/soft/20230325/202109292979.jpg"/>









### 工具类



| 应用 | 说明 | 推荐 |
|:-:|:-:|:-:|
| [巨魔汉化](https://github.com/sbwml/TrollStore_zh_Hans/releases) | 下载tar文件，用巨魔打开即可 | 🟢 |
| [轻松签](./esign.md) | 多开软件必备，可添加移除插件 | 🟢 |
| [AppsDump2](https://www.mediafire.com/file/pu75onrrz0hdej3/) | 巨魔非全权限砸壳/虚拟定位<br>[TG群](https://t.me/gblwjb) | 🟢 |
| [Copylog](https://havoc.app/package/copylogts) | 系统键盘最强剪切板插件<br>下滑到底部查看破解教程 | 🟢 |
| [DowngradeApp](https://www.mediafire.com/file/dvyxb4tvutx1f0x/) | 无广告<br>App随意升降级无广告<br>一键切换AppStore账号 | 🟢 |
| [Filza](https://www.tigisoftware.com/default/?p=439) | 文件管理器<br>[@巨魔e族破解v4.0_刀刀汉化版](https://www.mediafire.com/file/jwcsx875fmz9kep/) | 🟢 |
| LocSim | 1.先装 [虚拟定位v1.3.7授权版](https://www.mediafire.com/file/qwdgdnvek84xb83/)<br>2.后装 [虚拟定位v1.4.1可搜索版](https://www.mediafire.com/file/0pfhnyv3twnw3f6/) | 🟢 |
| [TrollRecorder](https://github.com/Lessica/TrollRecorder/releases) | 巨魔录音机，即通话录音 | 🟢 |
| [TrollSpeed](https://github.com/Lessica/TrollSpeed/releases) | 实时网速浮窗工具 | 🟢 |
| |
| [Apps Manager](https://www.tigisoftware.com/default/?p=435) | 用于备份还原<br>[@巨魔e族破解v1.8.4](https://www.mediafire.com/file/ze98mhw9vz95z0b/)<br>下滑到底部查看应用无法下载问题 | 🟠 |
| [AppStore++](https://github.com/CokePokes/AppStorePlus-TrollStore/releases) | 有广告<br>App随意升降级 | 🟠 |
| [ChargeLimiter](https://github.com/lich4/ChargeLimiter/releases) | 系统充电限制、过充保护 | 🟠 |
| [Helium](https://github.com/leminlimez/Helium/releases) | 悬浮显示日期/网速等 | 🟠 |
| [SecondHand](https://github.com/leminlimez/SecondHand/releases) | 状态栏显示实时秒数 | 🟠 |
| |
| [电话助手](https://www.htv123.com/) | [IOS17版](https://www.htv123.com/down/CallAssist_TrollStore17_103.tipa)<br>[IOS16版](https://www.htv123.com/down/CallAssist_TrollStore16_103.tipa)<br>[IOS15版](https://www.htv123.com/down/CallAssist_TrollStore15.tipa) | 🟣 |
| [CocoaTop](https://www.mediafire.com/file/6p0w5239spd9quf/) | 进程查看工具 | 🟣 |
| [IpaDownloadTool](https://github.com/SmileZXLee/IpaDownloadTool/) | IPA下载器 | 🟣 |
| [RingTonesManager](https://www.mediafire.com/file/9011jolyzf2hso5/) | 铃声管理器 | 🟣 |
| [TrollDecrypt](https://github.com/donato-fiore/TrollDecrypt/releases) | 巨魔非全权限砸壳<br>[秋名山汉化版v1.1.8](https://www.mediafire.com/file/38naw9pkq483r25/) | 🟣 |
| [TrollDecryptor](https://github.com/wh1te4ever/TrollDecryptor/releases) | 巨魔非全权限砸壳<br>需要配合 CocoaTop 查看PID进程 | 🟣 |
| |
| [AirTroller](https://github.com/sourcelocation/AirTroller/releases) | 强制隔空投送ipa | 🔵 |
| [BatteryInfo](http://www.htv123.com/down/BatteryInfo_1.0.7.ipa) | 查看电池健康状态 | 🔵 |
| [CAPerfHUD](https://github.com/khanhduytran0/CAPerfHUD/releases/) | 显示手机性能的工具 | 🔵 |
| [CAPerfHUDSwift](https://github.com/BomberFish/CAPerfHUDSwift/releases) | 浮窗式显示手机性能参数 | 🔵 |
| [DebToIPA](https://github.com/sourcelocation/DebToIPA/releases) | deb文件转IPA | 🔵 |
| [H5GG画中画版](https://www.mediafire.com/file/u3yy4myazbd5np1/) | 游戏修改器工具<br>仅限IOS 15.0-15.1.1 | 🔵 |
| [iMemScanTS](https://www.mediafire.com/file/e8c848tdzx1suee/) | 数据修改器 | 🔵 |
| [IPCC](https://ipcc.xiaobo.pro) | 卡贴机解锁、去除系统漫游、开启独立5G语音<br>[B站视频讲解](https://www.bilibili.com/video/BV1gG41167k4/) | 🔵 |
| [Jaility](https://github.com/haxi0/Jaility/releases) | 开启/解除监督状态/角标/锁屏密码空白 | 🔵 |
| [mobileTSS](https://github.com/lucaIz-ldx/MobileTSS/releases) | 保存/下载 SHSH2 | 🔵 |
| [NetworkController](https://github.com/Halo-Michael/NetworkController-app) | 国行苹果设备网络控制，输入Bundle ID点SET即可 | 🔵 |
| [NiceBattery](https://www.niceios.com/download.php) | 电池助手,查看电池详细数据的工具 | 🔵 |
| [Supervise](https://www.mediafire.com/file/3sf5wge31vq3wjz/) | 开启/解除监督状态 | 🔵 |
| [TrollNonce](https://github.com/opa334/TrollNonce/releases) | 固定G值 | 🔵 |
| [TSSSaver](https://www.mediafire.com/file/4f64viw214drlko/) | SHSH2备份工具<br>[在线SHSH备份](https://tsssaver.1conan.com/v2/) | 🔵 |
| [u0Launcher](https://github.com/opa334/u0Launcher/releases) | 修复unc0ver越狱过程的错误 | 🔵 |
| [Zomigle](https://github.com/HAHALOSAH/Zomigle/releases) | Apple Watch配对神器，低版系统可配对高版本 | 🔵 |


::: details Copylog破解教程

1.先下载安装 [Copylog_1.6_原版](https://www.mediafire.com/file/0ve502rjnqo3l08/) ，打开

2.登录选择 `Or get it on Havoc`

3.自动跳浏览器后，选择 `Apple ID` 登录

4.下载安装 破解工具 [CLCracker](https://www.mediafire.com/file/nzbbvdr9r702qva/) ，打开点击 `Crack`，直到 `Finish` 结束

5.划掉浏览器、Copylog和CLCracker后台，重新打开 `Copylog`

6.能进入后台就说明破解完成，点击右上角 `Active` 激活使用

注：在原生键盘上滑（或长按空格键不限时字母后上滑），有手势划过的状态即可调出
:::



::: details AppsManager恢复数据后，无法从AppStore下载应用

Filza 找到 `/usr/bin/vm_stat` ，单击运行，粘贴下面的指令，回车

```
chown 0:0 /var/tmp
chmod 777 /var/tmp
chown 501:0 /var/tmp/com.apple.appstored
chmod 700 /var/tmp/com.apple.appstored
```
:::



### 美化类


| 应用 | 说明 | 推荐 |
|:-:|:-:|:-:|
| [red-dot](https://github.com/s8ngyu/red-dot/releases) | 自定义角标颜色 | 🟢 |
| |
| [Mugunghwa](https://github.com/s8ngyu/Mugunghwa/releases) | 木槿花：真主题/角标/全面屏手势 | 🔵 |
| [Mugunghwa](https://github.com/s8ngyu/Mugunghwa/releases) | 木槿花：真主题/角标/全面屏手势 | 🔵 |
| [ResolutionSetter](https://github.com/Halo-Michael/Resolution-Setter-app/releases) | 修改分辨率的工具<br>[苹果官网分辨率查看](https://www.apple.com.cn/iphone/compare/) | 🔵 |
| [ResolutionSetterSwift](https://github.com/haoict/haoict.github.io/tree/master/cydia/ipa/ResolutionSetterSwift) | 修改分辨率的工具、内置参考分辨率 | 🔵 |
| [StatusMagic](https://github.com/Avangelista/StatusMagic/releases) | 魔法状态栏 | 🔵 |
| [TrollTools](https://github.com/sourcelocation/TrollTools/releases) | 真假主题/角标/全屏手势/锁屏图案等 | 🔵 |
| [WallpaperSetter](https://github.com/Skittyblock/WallpaperSetter/releases) | 自定义浅色/深色模式的墙纸 | 🔵 |


### 其他


| 应用 | 说明 | 推荐 |
|:-:|:-:|:-:|
| [OldOS](https://github.com/zzanehip/The-OldOS-Project/releases) | 模拟 iOS 4 系统 | 🔵 |
| [Price Tag](https://www.mediafire.com/file/xy9paa4zmxuquzo/) | App 价格监控的工具，查看每日限免 | 🔵 |
| [uYou+](https://github.com/qnblackcat/uYouPlus/releases) | 去除广告/下载视频/音频 | 🔵 |
| [WiFiList](https://www.mediafire.com/file/tvg9cfom88jy64d/) | WiFi 密码查看器 | 🔵 |
| [WiFiScanner](https://www.mediafire.com/file/gtwdituuwwz8vv3/) | WiFi 扫描工具 | 🔵 |
| [Sileo](https://github.com/Sileo/Sileo/releases) | 软件包管理器；未越狱仅可查看 | 🔵 |
| [Saily](https://github.com/SailyTeam/Saily/releases) | 软件包管理器 | 🔵 |
| [Zebra](https://github.com/zbrateam/Zebra/releases) | 软件包管理器；未越狱仅可查看 | 🔵 |










## 常见问题



::: details 安装完成，不显示图标
打开 TrollStore - Settings - 点击 `Rebuild Icon Cache` 等待重启，未重启的话，点击 `Respring` 即可
:::



::: details 可以安装其他应用吗
可以，以上只是一些工具，可以安装一些破解版APP，例如：Youtube破解版
:::






