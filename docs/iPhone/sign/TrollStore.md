---
prev: false
next: false
---

# 巨魔助手安装及使用

> 更新时间：2024-3-3



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

| 系统 / iPhone | 6-8系列 / SE / X<br>(A8-A11) | 11-15系列 / XR / XS / SE 2-3<br>(A12-A16)<br>(M1-M2) |
| :-: | :-: | :-: |
| [14.0](https://support.apple.com/zh-cn/HT211808) - 14.8.1 | [TrollMisaka](#官方安装) | [TrollHelper arm64e](#官方安装) |
| [15.0](https://support.apple.com/zh-cn/HT212788) - 15.4.1 | [TrollHelper arm64](#官方安装) | [TrollHelper arm64e](#官方安装) |
| 15.5 - 15.6.1 | [TrollInstaller MDC](#官方安装) | [TrollHelper arm64e](#官方安装) |
| 15.7 - 15.7.1 | [TrollInstaller MDC](#官方安装) | [TrollInstaller MDC](#官方安装) |
| 15.7.2 - 15.8.1 | [TrollMisaka](#官方安装) | [TrollMisaka](#官方安装) |
| [16.0](https://support.apple.com/zh-cn/HT213407) - 16.1.2 | [TrollInstaller MDC](#官方安装) | [TrollInstaller MDC](#官方安装) |
| 16.2 - 16.6.1 | [TrollStar](#官方安装) | [TrollStar](#官方安装) /<br>[第三方安装](#第三方安装) |
| 16.7 - 16.7.5 | ✘ | ✘ |
| [17.0](https://support.apple.com/zh-cn/HT213781) | checkra1n 越狱 | 无安装方式 |
| 17.0.1及以上 | ✘ | ✘ |


::: warning 注意
如果你是iPad 可以是使用 [Misaka](#其他第三方安装) 或者 [SimpleKFD](https://github.com/braumye/simplekfd-ipad-ipa/releases)
:::



## 安装



提供了 4+3 种安装方式，请参照 [适用范围](#适用范围) 选择


### 官方安装

:::: details arm64/arm64e 安装方式

> 教程仅适用于：[A8-A11](#适用范围)：`IOS 15.0 - 15.4.1`(arm64)
> 
> 教程仅适用于：[A12-A16](#适用范围)：`IOS 14.0 - 15.6.1`(arm64e)


* TrollHelper arm64：https://api.jailbreaks.app/troll64

* TrollHelper arm64e：https://api.jailbreaks.app/troll64e

根据自己的系统选择安装链接

![](/TrollStore/arm/arm-01.png)


安装的是 `GTA Car Tracker` ，打开点安装 `Install Trollstore`，自动注销后，回到桌面就发现装完成了

::: details 无法安装报错 Error
需要翻墙，[科学上网工具及使用方法](../../gfw/channel)
:::


![](/TrollStore/arm/arm-02.png)

自动安装好了 `Idid` ，灰色状态就是已经安装成功了

安装持久性助手，点击 `Install Persistence Helper`，选择 `Tips` 即可

::: warning 注意
选其他也可以，只要是自己不长使用的系统App就行

如果你之前装过巨魔，也是选的Tips，请先释放或者卸载重装它，再来选择 Tips 为持久性助手
:::


![](/TrollStore/arm/arm-03.png)


如果有天巨魔打不开，我们通过 `Tips` 可让巨魔恢复正常使用

::: tip 另外
有了持久性助手，GTA 可以直接卸载了
:::

![](/TrollStore/arm/arm-04.png)


安装完成，我们直接看 [巨魔界面介绍](#界面介绍)


::::







:::: details TrollInstallerMDC 安装方式

> 教程仅适用于：[A8-A11](#适用范围)：`IOS 15.5 - 15.6.1`
> 
> 教程仅适用于：[A8-A16](#适用范围)：`IOS 15.7 - 15.7.1` / `16.0 - 16.1.2`


它是一款利用MDC漏洞开发的巨魔安装辅助工具

使用前我们需要先安装好自签工具： [牛蛙助手](./bullfrog.md)

然后再下载：https://dhinakg.github.io/apps.html


![](/TrollStore/MDC/MDC-01.png)

下载完成后，点击浏览器 `下载` 按键，再点击已经下载好的 `TrollInstallerMDC`

![](/TrollStore/MDC/MDC-02.png)


右上角分享，选择 `牛蛙助手`

![](/TrollStore/MDC/MDC-03.png)

点 `发送`，牛蛙打开后，选择 `导入`

::: tip 说明
如果勿点了取消，也可直接点 TrollInstallerMDC.ipa 选择导入应用库
:::

![](/TrollStore/MDC/MDC-04.png)


点击 `TrollInstallerMDC` ，选择 `签名` - `立即签名`

![](/TrollStore/MDC/MDC-05.png)


在已签名的页卡中，选择刚签好名的 `TrollInstallerMDC` 安装，但牛蛙安装必须要开启`VPN和WIFI`，我们去打开

![](/TrollStore/MDC/MDC-06.png)

设置 - VPN - 勾选 `牛蛙助手` - 打开VPN开关

![](/TrollStore/MDC/MDC-07.png)

打开VPN后我们返回重新安装 TrollInstallerMDC 即可

![](/TrollStore/MDC/MDC-08.png)

TrollInstallerMDC就安装成功了，但是还打不开，要信任一下

![](/TrollStore/MDC/MDC-09.png)


设置 - 通用 - VPN与设备管理 - 选择 开发者APP - `信任`

![](/TrollStore/MDC/MDC-10.png)

![](/TrollStore/MDC/MDC-11.png)


再次打开 TrollInstallerMDC ，提示沙盒读写，点 `好`

这样 `Tips` 即 `提示` ，就成了一个安装器

![](/TrollStore/MDC/MDC-12.png)

打开 `提示` 点 `Install TrollStore` 安装巨魔即可

::: details 无法安装报错 Error
需要翻墙，[科学上网工具及使用方法](../../gfw/channel)
:::

![](/TrollStore/MDC/MDC-13.png)

自动安装好了 `Idid` ，灰色状态就是已经安装成功了

安装持久性助手，点击 `Install Persistence Helper`，选择除 `Tips` 以外的

::: danger 特别注意
因为安装器是Tips，如果持久性助手也选Tips，有可能会白苹果，就开不了机了
:::

如果非要选的Tips，请先卸载重装 [提示](https://apps.apple.com/cn/app/id1069509450)，再来选择 Tips 为持久性助手即可

![](/TrollStore/MDC/MDC-14.png)


如果有天巨魔打不开，可以通过持久性助手可让巨魔恢复正常使用

::: tip 另外
有了持久性助手，TrollInstallerMDC 可以直接卸载了
:::

![](/TrollStore/MDC/MDC-15.png)


安装完成，我们直接看 [巨魔界面介绍](#界面介绍)

::::












:::: details TrollMisaka 安装方式

> 教程仅适用于：[A12-A16](#适用范围)：`iOS 15.7.2 - 15.8.1`


开始前安装好自签工具： [牛蛙助手并认证好个人证书](./bullfrog.md)

再下载：https://github.com/straight-tamago/TrollMisaka/releases

::: tip 说明
下载最新版的即可，截稿前演示版本v2.0 Beta
:::


![](/TrollStore/TrollMisaka/TrollMisaka-01.png)



下载完成后，点击浏览器 下载 按键，再点击已经下载好的 `TrollMisaka`

![](/TrollStore/TrollMisaka/TrollMisaka-02.png)


右上角分享，选择 `牛蛙助手`

![](/TrollStore/TrollMisaka/TrollMisaka-03.png)

点 `发送`，牛蛙打开后，选择 `导入`

::: tip 说明
如果勿点了取消，也可直接点 TrollMisaka.ipa 选择导入应用库
:::

![](/TrollStore/TrollMisaka/TrollMisaka-04.png)

点击 `TrollMisaka` ，选择 `签名 - 立即签名` ，签名完成去安装

![](/TrollStore/TrollMisaka/TrollMisaka-05.png)

在已签名的页卡中，选择刚签好名的 `TrollMisaka` 安装

但牛蛙安装必须要开启 `VPN和WIFI`，我们去打开

![](/TrollStore/TrollMisaka/TrollMisaka-06.png)


设置 - VPN - 牛蛙助手 -打开连接开关

![](/TrollStore/TrollMisaka/TrollMisaka-07.png)


然后后我们返回重新安装 `TrollMisaka` 即可


![](/TrollStore/TrollMisaka/TrollMisaka-08.png)


安装成功了，但是还打不开，要信任一下

![](/TrollStore/TrollMisaka/TrollMisaka-09.png)



设置 - 通用 - VPN与设备管理 - 选择 开发者APP - `信任`

![](/TrollStore/TrollMisaka/TrollMisaka-10.png)

![](/TrollStore/TrollMisaka/TrollMisaka-11.png)


再进入 `TrollMisaka` ，点击 `Add keyboard` 添加新键盘


![](/TrollStore/TrollMisaka/TrollMisaka-12.png)

添加 `TrollMisaka` 键盘，并允许完全访问！一定要给权限！

![](/TrollStore/TrollMisaka/TrollMisaka-13.png)


然后返回 TrollMisaka 界面，重启手机

::: details 手机重启打不开了
参考 [官网强制重启](https://support.apple.com/zh-cn/guide/iphone/-iph8903c3ee6/15.0/ios/15.0) 方法：按一下音量+，再按一下音量-，最后长按开机键直到出现logo
:::

![](/TrollStore/TrollMisaka/TrollMisaka-14.png)

重启后，先别进 TrollMisaka ！别进！

打开 Safari 浏览器地址栏位置，切换输入法为 `TrollMisaka` ，即可进入安装器，点击 `kopen` 开启利用漏洞

![](/TrollStore/TrollMisaka/TrollMisaka-15.png)

漏洞利用成功后，下方显示 Kopen Success!

然后挂上梯子 [科学上网](../../gfw/proxy) ，不挂无法安装！

::: details kopen未显示成功
多点击几次kopen，或者换工具
:::

![](/TrollStore/TrollMisaka/TrollMisaka-16.png)

`install TrollStore` 安装巨魔，知道提示成功

![](/TrollStore/TrollMisaka/TrollMisaka-17.png)



再次重启手机，重启完，打开 TrollMisaka 会发现已变身成安装器了

![](/TrollStore/TrollMisaka/TrollMisaka-18.png)



再次挂上梯子 [科学上网](../../gfw/proxy) ，安装巨魔

![](/TrollStore/TrollMisaka/TrollMisaka-19.png)



打开巨魔会自动安装 `Idid` ，灰色状态就是已经安装成功了

安装持久性助手，点击 `Install Persistence Helper`，选择 `除Tips` 以外的

::: danger 特别注意
因为安装器是Tips，如果持久性助手也选Tips，有可能会白苹果，就开不了机了

如果非要选的Tips，请先卸载重装 [提示](https://apps.apple.com/cn/app/id1069509450)，再来选择 Tips 为持久性助手即可
:::

![](/TrollStore/TrollMisaka/TrollMisaka-20.png)

如果有天巨魔打不开，可以通过持久性助手可让巨魔恢复正常使用

::: tip 另外
有了持久性助手，TrollMisaka 可以直接卸载了
:::


![](/TrollStore/TrollMisaka/TrollMisaka-21.png)


安装完成，我们直接看 [巨魔界面介绍](#界面介绍)


::::








:::: details TrollStar 安装方式

> 教程仅适用于：[A12-A16](#适用范围)：`iOS 16.2 - 16.6.1`


巨魔之星是一款利用KFD漏洞开发的巨魔安装辅助工具

使用前找到你的 `提示` App 卸载，没错就是 `卸载`

::: tip 为什么要这样做
因为要确保提示没有打开过，避免产生诸多奇怪的问题

卸载可确保步骤的一致性
:::


![](/TrollStore/TrollStar/TrollStar-01.png)


然后去商店把 [提示](https://apps.apple.com/cn/app/id1069509450) 下载回来，但千万不要打开！！！

![](/TrollStore/TrollStar/TrollStar-02.png)



然后安装好自签工具： [牛蛙助手并认证好个人证书](./bullfrog.md)

再下载：https://github.com/34306/TrollStar/releases/


::: tip 说明
下载最新版的即可，截稿前演示版本v1.1
:::


![](/TrollStore/TrollStar/TrollStar-03.png)

下载完成后，点击浏览器 下载 按键，再点击已经下载好的 `TrollStar`

![](/TrollStore/TrollStar/TrollStar-04.png)


右上角分享，选择 `牛蛙助手`

![](/TrollStore/TrollStar/TrollStar-05.png)

点 `发送`，牛蛙打开后，选择 `导入`

::: tip 说明
如果勿点了取消，也可直接点 TrollStar.ipa 选择导入应用库
:::

![](/TrollStore/TrollStar/TrollStar-06.png)

点击 `TrollStar` ，选择 `签名 - 立即签名` ，签名完成去安装


![](/TrollStore/TrollStar/TrollStar-07.png)

在已签名的页卡中，选择刚签好名的 `TrollStar` 安装

但牛蛙安装必须要开启 `VPN和WIFI`，我们去打开

![](/TrollStore/TrollStar/TrollStar-08.png)


设置 - VPN - 勾选 `牛蛙助手` - 打开VPN开关

![](/TrollStore/TrollStar/TrollStar-09.png)


打开VPN后我们返回重新安装 `TrollStar` 即可

![](/TrollStore/TrollStar/TrollStar-10.png)


安装成功了，但是还打不开，要信任一下

![](/TrollStore/TrollStar/TrollStar-11.png)

设置 - 通用 - VPN与设备管理 - 选择 开发者APP - `信任`

![](/TrollStore/TrollStar/TrollStar-12.png)


![](/TrollStore/TrollStar/TrollStar-13.png)

再次打开 `TrollStar` ，点击 `kopen` 开启KFD漏洞利用

![](/TrollStore/TrollStar/TrollStar-14.png)

不出意外手机会自动重启，打开后再进去底部就显示漏洞利用成功了

::: details 手机重启打不开了
参考 [官网强制重启](https://support.apple.com/zh-cn/guide/iphone/-iph8903c3ee6/15.0/ios/15.0) 方法：按一下音量+，再按一下音量-，最后长按开机键直到出现logo
:::

![](/TrollStore/TrollStar/TrollStar-15.png)

挂上梯子 [科学上网](../../gfw/proxy) ，注入巨魔安装器

![](/TrollStore/TrollStar/TrollStar-16.png)

成功后，点击 `Respring to Apply` 注销一下即可，不成功可能会重启

![](/TrollStore/TrollStar/TrollStar-17.png)

打开提示app，挂上梯子 [科学上网](../../gfw/proxy) ，安装巨魔

::: details 提示没有变化或闪退
再试一次，或者换其他工具
:::

![](/TrollStore/TrollStar/TrollStar-18.png)


打开巨魔会自动安装 `Idid` ，灰色状态就是已经安装成功了

安装持久性助手，点击 `Install Persistence Helper`，选择 `除Tips` 以外的

::: danger 特别注意
因为安装器是Tips，如果持久性助手也选Tips，有可能会白苹果，就开不了机了

如果非要选的Tips，请先卸载重装 [提示](https://apps.apple.com/cn/app/id1069509450)，再来选择 Tips 为持久性助手即可
:::

![](/TrollStore/TrollStar/TrollStar-19.png)

如果有天巨魔打不开，可以通过持久性助手可让巨魔恢复正常使用

::: tip 另外
有了持久性助手，TrollStar 可以直接卸载了

软件初期可能有点不稳，巨魔安装成功后，建议手动重启一次后再使用
:::

![](/TrollStore/TrollStar/TrollStar-20.png)



安装完成，我们直接看 [巨魔界面介绍](#界面介绍)


::::












### 第三方安装

> 教程仅适用于：[A12-A16](#适用范围) `iOS 16.2 - 16.6.1`

::::: details PureKFD安装

PureKFD是一款利用KFD漏洞开发的工具，且已上线了巨魔的辅助安装功能


开始前找到你的 `提示` App 卸载，没错就是 `卸载`

::: tip 为什么要这样做
因为要确保提示没有打开过，避免产生诸多奇怪的问题

卸载可确保步骤的一致性
:::

![](/TrollStore/purekfd/purekfd-01.png)

然后去商店把 [提示](https://apps.apple.com/cn/app/id1069509450) 下载回来，但千万不要打开！！！

![](/TrollStore/purekfd/purekfd-02.png)





安装方式两种：在线安装 和 自签安装

::: details 在线安装 (二选一)
方便，无需签名直接安装，但是不一定是最新版

---

安装地址: https://hk2.ssdsl.xyz/

点击链接安装即可
:::


:::: details 自签安装 (二选一)

麻烦，需要使用签名工具安装，但是可装最新版

---

然后安装好自签工具： [牛蛙助手并认证好个人证书](./bullfrog.md)

再下载PureKFD：

https://github.com/Lrdsnow/PureKFD/releases


::: tip 说明
下载最新版的即可，截稿前演示版本v5
:::


![](/TrollStore/purekfd/purekfd-03.png)

下载完成后，点击浏览器 下载 按键，再点击已经下载好的 `Purekfd`

![](/TrollStore/purekfd/purekfd-04.png)


右上角分享，选择 `牛蛙助手`

![](/TrollStore/purekfd/purekfd-05.png)

点 `发送`，牛蛙打开后，选择 `导入`

::: tip 说明
如果勿点了取消，也可直接点 Purekfd.ipa 选择导入应用库
:::

![](/TrollStore/purekfd/purekfd-06.png)

点击 `Purekfd` ，选择 `签名` - `立即签名`


![](/TrollStore/purekfd/purekfd-07.png)

在已签名的页卡中，选择刚签好名的 `Purekfd` 安装

但牛蛙安装必须要开启 `VPN和WIFI`，我们去打开


![](/TrollStore/purekfd/purekfd-08.png)

设置 - VPN - 勾选 `牛蛙助手` - 打开VPN开关


![](/TrollStore/purekfd/purekfd-09.png)


打开VPN后我们返回重新安装 `Purekfd` 即可


![](/TrollStore/purekfd/purekfd-10.png)

::::



PureKFD安装成功了，但是还打不开，要信任一下

![](/TrollStore/purekfd/purekfd-11.png)


设置 - 通用 - VPN与设备管理 - 选择 开发者APP - `信任`

![](/TrollStore/purekfd/purekfd-12.png)

![](/TrollStore/purekfd/purekfd-13.png)

再次打开 PureKFD ，提示沙盒读写，点 `好`

::: details 提示Missing entitlement
在线安装的就会有这个提示，先不管

若无法安装巨魔，请尝试自签安装
:::

![](/TrollStore/purekfd/purekfd-14.png)

右上角齿轮 - 设置，查看自己是否是KFD

![](/TrollStore/purekfd/purekfd-15.png)

::: tip 关于 puaf method 漏洞选择
iOS 16.0 - 16.5 选择 `physpuppet` 、 `smith` 或 `landa`

iOS 16.5.1 - 16.6.1 必须选择 `landa`
:::


再点击底部 `Developer` ，安装巨魔 `Install Trollstore Helper`

::: details 点完安装手机重启
再尝试一次，不行就换其他工具
:::

提示 `Installed TSHelper!` ，不要点OK！

重启手机！直接重启！什么都不要点！


![](/TrollStore/purekfd/purekfd-16.png)



重启设备后，打开提示并点 `Install TrollStore` 安装巨魔，桌面有图标就是了

::: details 点开提示无变化
划掉提示后台，重进，如果依旧不行就换工具
:::


::: details 巨魔安装报错
请使用 [科学上网](../../gfw/proxy) 工具，挂梯子再安装
:::



![](/TrollStore/purekfd/purekfd-17.png)



自动安装好了 `Idid` ，灰色状态就是已经安装成功了

安装持久性助手，点击 `Install Persistence Helper`，选择除 `Tips` 以外的

::: danger 特别注意
因为安装器是Tips，如果持久性助手也选Tips，有可能会白苹果，就开不了机了

如果非要选的Tips，请先卸载重装 [提示](https://apps.apple.com/cn/app/id1069509450)，再来选择 Tips 为持久性助手即可
:::

![](/TrollStore/purekfd/purekfd-18.png)

如果有天巨魔打不开，可以通过持久性助手可让巨魔恢复正常使用

::: tip 另外
有了持久性助手，PureKFD 可以直接卸载了
:::

![](/TrollStore/purekfd/purekfd-19.png)


:::::

















::::: details Picasso安装


开始前请找到你的 `提示` App 卸载，没错就是 卸载

::: tip 为什么要这样做
因为要确保提示没有打开过，避免产生诸多奇怪的问题

卸载可确保步骤的一致性
:::

![](/TrollStore/picasso/picasso-01.png)

然后去商店把 [提示](https://apps.apple.com/cn/app/id1069509450) 下载回来，但千万不要打开！！！

![](/TrollStore/picasso/picasso-02.png)



然后安装好自签工具： [牛蛙助手并认证好个人证书](./bullfrog.md)


再在Picasso官网注册账号，App需要登录才可使用

https://repo.sourceloc.net/

![](/TrollStore/picasso/picasso-03.png)

由于App下载需要进 [Discord](https://discord.com/invite/aYW54vZFpt) ，我将文件转存到网盘，下载即可

https://www.123pan.com/s/3LWcVv-TjLrh.html

![](/TrollStore/picasso/picasso-04.png)

下载完成后，点击浏览器 `下载` 按键，再点击已经下载好的 `Picasso`

![](/TrollStore/picasso/picasso-05.png)

右上角分享，选择 `牛蛙助手`

![](/TrollStore/picasso/picasso-06.png)

点 发送，牛蛙打开后，选择 导入应用库

![](/TrollStore/picasso/picasso-07.png)

点击 `Picasso` ，选择 签名 - 立即签名，签好去安装

![](/TrollStore/picasso/picasso-08.png)

但牛蛙安装必须要开启VPN和WIFI，我们去打开

![](/TrollStore/picasso/picasso-09.png)

设置 - VPN - 勾选 牛蛙助手 - 打开VPN开关

![](/TrollStore/picasso/picasso-10.png)

打开VPN后我们返回重新安装 Picasso 即可

![](/TrollStore/picasso/picasso-11.png)

Picasso就安装成功了，但是还打不开，要信任一下

设置 - 通用 - VPN与设备管理 - 选择 开发者APP - `信任`

![](/TrollStore/picasso/picasso-12.png)


再次打开 Picasso ，登录账号

::: tip 说明书
老外的App，记得全程 [科学上网](../../gfw/proxy) ，我使用的是小火箭
:::


![](/TrollStore/picasso/picasso-13.png)


底部 `Explore` - 下拉 `TrollStore`

![](/TrollStore/picasso/picasso-14.png)


点 `Get` 安装，成功提示Success，回到Picasso首页，点击 `Apply`


![](/TrollStore/picasso/picasso-15.png)


出现 `Successfully overwritten Tips. app`还会显示 `Applying...`

不用管，直接重启手机！

::: danger 注意
一定要重启，否则提示注入失败无法打开，从头再来
:::

![](/TrollStore/picasso/picasso-16.png)


重启设备后，打开提示并点 `Install TrollStore` 安装巨魔，桌面有图标就是了


::: details 点开提示无变化
划掉提示后台，重进，如果依旧不行就换工具
:::

::: details 巨魔安装报错
请使用 [科学上网](../../gfw/proxy) 工具，挂梯子再安装
:::

![](/TrollStore/picasso/picasso-17.png)


自动安装好了 `Idid` ，灰色状态就是已经安装成功了

安装持久性助手，点击 `Install Persistence Helper`，选择除 `Tips` 以外的

::: danger 特别注意
因为安装器是Tips，如果持久性助手也选Tips，有可能会白苹果，就开不了机了
:::

如果非要选的Tips，请先卸载重装 [提示](https://apps.apple.com/cn/app/id1069509450)，再来选择 Tips 为持久性助手即可

![](/TrollStore/picasso/picasso-18.png)


如果有天巨魔打不开，可以通过持久性助手可让巨魔恢复正常使用

::: tip 另外
有了持久性助手，Picasso 可以直接卸载了
:::

![](/TrollStore/picasso/picasso-19.png)



:::::


















::::: details Misaka安装

misaka是一款利用MDC/KFD漏洞开发的工具，且已上线了巨魔的辅助安装功能


安装方式两种：在线安装 和 自签安装


::: details 在线安装 (二选一)
方便，无需签名直接安装，但是不一定是最新版

---

我们现在直接使用 [@Little_34306](https://x.com/Little_34306) 越南大佬提供的在线安装

* iPhone: http://is.gd/34306misaka

* iPad M1/M2: http://is.gd/34306misakaM1

注意：需要使用 [科学上网](../../gfw/proxy) ，才可以打开
:::



:::: details 自签安装 (二选一)
麻烦，需要使用签名工具安装，但是可装最新版

---

开始前先安装好自签工具：[牛蛙助手并认证好个人证书](./bullfrog.md)

再下载 Misaka ：

https://github.com/straight-tamago/misaka/releases

::: tip 说明
下载最新版的即可，截稿前演示版本8.2.1
:::

![](/TrollStore/misaka/misaka-01.png)

下载完成后，点击浏览器 `下载` 按键，再点击已经下载好的 `misaka`

![](/TrollStore/misaka/misaka-02.png)


右上角分享，选择 `牛蛙助手`

![](/TrollStore/misaka/misaka-03.png)

点 `发送`，牛蛙打开后，选择 `导入`

::: tip 说明
如果勿点了取消，也可直接点 misaka.ipa 选择导入应用库
:::

![](/TrollStore/misaka/misaka-04.png)


点击 `misaka` ，选择 `签名` - `立即签名`

![](/TrollStore/misaka/misaka-05.png)


在已签名的页卡中，选择刚签好名的 `misaka` 安装

但牛蛙安装必须要开启`VPN和WIFI`，我们去打开

![](/TrollStore/misaka/misaka-06.png)

设置 - VPN - 勾选 `牛蛙助手` - 打开VPN开关

![](/TrollStore/misaka/misaka-07.png)

打开VPN后我们返回重新安装 misaka 即可

![](/TrollStore/misaka/misaka-08.png)

::::


misaka就安装成功了，但是还打不开，要信任一下

![](/TrollStore/misaka/misaka-09.png)


设置 - 通用 - VPN与设备管理 - 选择 开发者APP - `信任`

![](/TrollStore/misaka/misaka-10.png)

![](/TrollStore/misaka/misaka-11.png)


再次打开 misaka ，提示沙盒读写，点 `好`

![](/TrollStore/misaka/misaka-12.png)

允许 `无限局域网与蜂窝数据`，但是提示 `Network Erro`


![](/TrollStore/misaka/misaka-13.png)

这时我们需要使用 [科学上网](../../gfw/proxy) ，我用小火箭，机场用的超级机场

![](/TrollStore/misaka/misaka-14.png)

连接好再次打开 misaka，`Agree` 同意后进入主界面

![](/TrollStore/misaka/misaka-15.png)


左上角 Setting - App Language

![](/TrollStore/misaka/misaka-16.png)

选择 `zh_CN` 完成后，自动退出，再次进入就能看到已经汉化了，下滑可退出页面


![](/TrollStore/misaka/misaka-17.png)



在 misaka 设置中，请根据自己的系统选择模式！

::: warning 参照表
KFD：iOS 16.2 - 16.6.1系统

MDC：iOS 15.0 - 16.1.2系统

No Exploit：无漏洞(iOS 16.7及以上系统)
:::


![](/TrollStore/misaka/misaka-18.png)


打开 misaka - 软件包 - 左下角图标 - `Install TrollStore`

::: details 点完Install TrollStore手机重启
利用的是KFD漏洞，偏移量不够，不行就换工具
:::

![](/TrollStore/misaka/misaka-19.png)

任选一个作为安装器，我这里选 `Books` 演示

::: danger 注意
选定的应用，就暂时无法使用原来的功能了，只能用来安装巨魔！

请根据自己的需求选择：[Tips：提示](https://apps.apple.com/cn/app/id1069509450)、[Books：图书](https://apps.apple.com/cn/app/id364709193)、[Home：家庭](https://apps.apple.com/cn/app/id1110145103)
:::

::: details 疑问1：选不了，这里图标是灰的
那是因为你没有安装这个应用，去App Store下载即可
:::

::: details 疑问2：提示错误2或1
确保你的科学上网软件没有掉，那就重启手机，再试一次

或在设置-隐私与安全中打开开发者模式
:::


![](/TrollStore/misaka/misaka-20.png)


成功后会自动注销，重新进入桌面打开 `Books`




:::: details 疑问3：books等打不开，闪退
这个就麻烦一点了，看步骤

下载：https://github.com/opa334/TrollStore/releases

![](/TrollStore/misaka/misaka-21.png)

打开 misaka 文件管理 - var - containers

![](/TrollStore/misaka/misaka-22.png)

Bundle - Application

![](/TrollStore/misaka/misaka-23.png)

com.apple.iBooks - Books.app

::: tip 说明
如果你选的是tips，那么就找 `com.apple.tips`

home，那么就找 `com.apple.Home`
:::

![](/TrollStore/misaka/misaka-24.png)

找到 `books`，再点 `Flie Overwrite`

![](/TrollStore/misaka/misaka-25.png)

选择我们刚才下好的文件 [PersistenceHelper_Embedded](https://github.com/opa334/TrollStore/releases/download/2.0.8/PersistenceHelper_Embedded)，这样就覆盖重写完成了，再次打开books即可

::: tip 说明
safari下载的文件路径：icloud云盘-下载
:::

![](/TrollStore/misaka/misaka-26.png)

::::



点 `Install TrollStore` 安装巨魔，桌面有图标就是了

::: details 点开提示无变化
划掉提示后台，重进，如果依旧不行就换工具
:::

::: details 巨魔安装报错
请使用 [科学上网](../../gfw/proxy) 工具，挂梯子再安装
:::

![](/TrollStore/misaka/misaka-27.png)


自动安装好了 `Idid` ，灰色状态就是已经安装成功了

安装持久性助手，点击 `Install Persistence Helper`，选择除 `Tips` 以外的

::: danger 特别注意
因为安装器是Tips，如果持久性助手也选Tips，有可能会白苹果，就开不了机了
:::

如果非要选的Tips，请先卸载重装 [提示](https://apps.apple.com/cn/app/id1069509450)，再来选择 Tips 为持久性助手即可

![](/TrollStore/misaka/misaka-28.png)


如果有天巨魔打不开，可以通过持久性助手可让巨魔恢复正常使用

::: tip 另外
有了持久性助手，misaka 可以直接卸载了
:::

![](/TrollStore/misaka/misaka-29.png)


:::::













## 界面介绍


![](/TrollStore/TrollStore-01.png)

::: warning 注意
用巨魔安装的应用，只能在巨魔的APP界面，左滑卸载
:::





## 使用

::: warning 注意
通过巨魔安装的应用，AppStore会显示小云朵，即未下载此应用的状态

巨魔安装的是系统级，应用商店安装的是用户级，不一样

---

想要更新应用依然只能找安装包，通过巨魔安装

应用商店下载会直接覆盖巨魔安装的版本
:::


---



### 虚拟定位

下载：[https://www.mediafire.com/file/qwdgdnvek84xb83/](https://www.mediafire.com/file/qwdgdnvek84xb83/虚拟定位_1.3.7_授权版.ipa/file)

打开链接，先下载授权的版本

![](/TrollStore/TrollStore-02.png)

下载完成后，点击查看，点击文件

![](/TrollStore/TrollStore-03.png)

右上角分享，用巨魔 `TrollStore` 打开安装即可

![](/TrollStore/TrollStore-04.png)

然后同样的方法，覆盖安装破解的可搜索的v1.4.1版本即可

[https://www.mediafire.com/file/0pfhnyv3twnw3f6/](https://www.mediafire.com/file/0pfhnyv3twnw3f6/%E8%99%9A%E6%8B%9F%E5%AE%9A%E4%BD%8D_1.4.1.ipa/file)

![](/TrollStore/TrollStore-05.png)







---








### 更换图标

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




---












### 静音模块

开始前请用巨魔安装好 [Filza：文件管理器 丨@巨魔e族破解v4.0_刀刀汉化版](https://www.mediafire.com/file/jwcsx875fmz9kep/Filza_4.0_巨魔e族_Dao.ipa/file)

然后下载由 [@赵楠](https://github.com/invalidunit) 大佬提供的文件：https://www.123pan.com/s/3LWcVv-WULrh.html

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




---








### 多开分身

巨魔没有多开App功能，但是可以借助 [轻松签](https://esign.yyyue.xyz/) 完成

点我查看 [轻松签多开微信教程](./esign.md#多开微信)

---











### 屏蔽更新



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

但保不齐苹果强制更新，巨魔安装好 [Filza：文件管理器 丨@巨魔e族破解v4.0_刀刀汉化版](https://www.mediafire.com/file/jwcsx875fmz9kep/Filza_4.0_巨魔e族_Dao.ipa/file)

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

---










### 砸壳dump

::: tip 简介
简而言之，就是提取APP安装包

与安卓不同，苹果对商店上架的APP，在外层包裹了一层加密的外壳

只有通过砸壳工具进行解密脱壳后才可以，所以叫做砸壳，也叫dump
:::

用巨魔安装好 [AppsDump2：巨魔非全权限砸壳 @bswbw](https://www.123pan.com/s/3LWcVv-g6qrh.html)

以 `抖音` 为例，打开 AppsDump2，选择抖音 - `脱壳 - 打包ipa`

![](/TrollStore/TrollStore-32.png)

解密完成后，可 `共享文件` 导入到轻松签，进行多开和注入插件等

::: tip 说明
因为砸壳的文件多了会占内存，建议安装一个 [Fliza文件管理器](https://www.mediafire.com/file/jwcsx875fmz9kep/Filza_4.0_巨魔e族_Dao.ipa/file)

删掉多余的ipa文件
:::

![](/TrollStore/TrollStore-33.png)

::: warning 注意
微信砸出来非全权限，没有分享等小组件

只能越狱机或Mac砸
:::






## 更多工具


### 聚合类
<br>


<div class="linkcard">
  <a href="https://ipa.cypwn.xyz/" target="_blank">
    <p class="description">CyPwnStore：破解应用商店<br><span>https://ipa.cypwn.xyz/</span></p>
    <div class="logo">
        <img alt="Logo" width="70px" height="70px" src="https://ipa.cypwn.xyz/favicon.ico" />
    </div>
  </a>
</div>

<br>


<div class="linkcard">
  <a href="https://decrypt.day/" target="_blank">
    <p class="description">Decrypt：在线砸壳商店<br><span>https://decrypt.day/</span></p>
    <div class="logo">
        <img alt="Logo" width="70px" height="70px" src="https://cdn.decrypt.day/images/decrypt-logo.webp" />
    </div>
  </a>
</div>

<br>


<div class="linkcard">
  <a href="https://zappfree.com/ipa-library/" target="_blank">
    <p class="description">IPA图书馆<br><span>https://zappfree.com/ipa-library/</span></p>
    <div class="logo">
        <img alt="Logo" width="70px" height="70px" src="https://zappfree.com/img/ipa-library.png" />
    </div>
  </a>
</div>

<br>


<div class="linkcard">
  <a href="https://ipa.store/game" target="_blank">
    <p class="description">IPA商店<br><span>https://ipa.store/game</span></p>
    <div class="logo">
        <img alt="Logo" width="70px" height="70px" src="https://ipa.store/wp-content/uploads/2022/08/2022080502143894.png" />
    </div>
  </a>
</div>

<br>


<div class="linkcard">
  <a href="https://toyou.club/" target="_blank">
    <p class="description">凸游CLUB<br><span>https://toyou.club/</span></p>
    <div class="logo">
        <img alt="Logo" width="70px" height="70px" src="https://toyou.club/wp-content/uploads/2023/03/cropped-%E7%BD%91%E7%AB%99fa-180x180.png" />
    </div>
  </a>
</div>

<br>


<div class="linkcard">
  <a href="https://www.mediafire.com/file/l6ggeti3d1pdrlw/SuperVIP8.1-3.ipa/file" target="_blank">
    <p class="description">SuperVIP8.1-33<br><span>冷冷雨·付费·应用破解</span></p>
    <div class="logo">
        <img alt="Logo" width="70px" height="70px" src="https://www.qhmanhua.com/d/file/soft/20230325/202109292979.jpg" />
    </div>
  </a>
</div>

<br>






### 工具类



| 应用 | 说明 | 推荐 |
|:-:|:-:|:-:|
| [巨魔汉化](https://github.com/sbwml/TrollStore_zh_Hans/releases) | 下载tar文件，用巨魔打开即可 | 🟢 |
| [轻松签](./esign.md) | 多开软件必备，可添加移除插件 | 🟢 |
| [AppsDump2](https://www.123pan.com/s/3LWcVv-g6qrh.html) | 巨魔非全权限砸壳/虚拟定位<br>[TG群](https://t.me/gblwjb) | 🟢 |
| [Copylog](https://havoc.app/package/copylogts) | 系统键盘最强剪切板插件<br>下滑到底部查看破解教程 | 🟢 |
| [DowngradeApp](https://www.123pan.com/s/3LWcVv-zSLrh.html) | 无广告<br>App随意升降级无广告 | 🟢 |
| [Filza](https://www.tigisoftware.com/default/?p=439) | 文件管理器<br>[@巨魔e族破解v4.0_刀刀汉化版](https://www.mediafire.com/file/jwcsx875fmz9kep/Filza_4.0_巨魔e族_Dao.ipa/file) | 🟢 |
| LocSim | 1.先装 [虚拟定位v1.3.7授权版](https://www.mediafire.com/file/qwdgdnvek84xb83/虚拟定位_1.3.7_授权版.ipa/file)<br>2.后装 [虚拟定位v1.4.1可搜索版](https://www.mediafire.com/file/0pfhnyv3twnw3f6/%E8%99%9A%E6%8B%9F%E5%AE%9A%E4%BD%8D_1.4.1.ipa/file) | 🟢 |
| [TrollRecorder](https://github.com/Lessica/TrollRecorder/releases) | 巨魔录音机，即通话录音 | 🟢 |
| [TrollSpeed](https://github.com/Lessica/TrollSpeed/releases) | 实时网速浮窗工具 | 🟢 |
| |
| [Apps Manager](https://www.tigisoftware.com/default/?p=435) | 用于备份还原<br>[@巨魔e族破解v1.8.4](https://www.123pan.com/s/3LWcVv-T7Lrh.html)<br>下滑到底部查看应用无法下载问题 | 🟠 |
| [AppStore++](https://github.com/CokePokes/AppStorePlus-TrollStore/releases) | 有广告<br>App随意升降级 | 🟠 |
| [ChargeLimiter](https://github.com/lich4/ChargeLimiter/releases) | 系统充电限制、过充保护 | 🟠 |
| [Helium](https://github.com/leminlimez/Helium/releases) | 悬浮显示日期/网速等 | 🟠 |
| [SecondHand](https://github.com/leminlimez/SecondHand/releases) | 状态栏显示实时秒数 | 🟠 |
| |
| [电话助手](https://www.htv123.com/) | [IOS17版](https://www.htv123.com/down/CallAssist_TrollStore17_103.tipa)<br>[IOS16版](https://www.htv123.com/down/CallAssist_TrollStore16_103.tipa)<br>[IOS15版](https://www.htv123.com/down/CallAssist_TrollStore15.tipa) | 🟣 |
| [CocoaTop](https://www.123pan.com/s/3LWcVv-D7zrh.html) | 进程查看工具 | 🟣 |
| [IpaDownloadTool](https://github.com/SmileZXLee/IpaDownloadTool/) | IPA下载器 | 🟣 |
| [RingTonesManager](https://www.123pan.com/s/3LWcVv-GuLrh.html) | 铃声管理器 | 🟣 |
| [TrollDecrypt](https://github.com/donato-fiore/TrollDecrypt/releases) | 巨魔非全权限砸壳<br>[秋名山汉化版v1.1.8](https://www.123pan.com/s/3LWcVv-F6qrh.html) | 🟣 |
| [TrollDecryptor](https://github.com/wh1te4ever/TrollDecryptor/releases) | 巨魔非全权限砸壳<br>需要配合 CocoaTop 查看PID进程 | 🟣 |
| |
| [AirTroller](https://github.com/sourcelocation/AirTroller/releases) | 强制隔空投送ipa | 🔵 |
| [BatteryInfo](http://www.htv123.com/down/BatteryInfo_1.0.7.ipa) | 查看电池健康状态 | 🔵 |
| [CAPerfHUD](https://github.com/khanhduytran0/CAPerfHUD/releases/) | 显示手机性能的工具 | 🔵 |
| [CAPerfHUDSwift](https://github.com/BomberFish/CAPerfHUDSwift/releases) | 浮窗式显示手机性能参数 | 🔵 |
| [DebToIPA](https://github.com/sourcelocation/DebToIPA/releases) | deb文件转IPA | 🔵 |
| [H5GG画中画版](https://www.mediafire.com/file/u3yy4myazbd5np1/H5GG_7.9_PIP%25E7%2594%25BB%25E4%25B8%25AD%25E7%2594%25BB%25E7%2589%2588.ipa/file) | 游戏修改器工具<br>仅限IOS 15.0-15.1.1 | 🔵 |
| [iMemScanTS](https://www.123pan.com/s/3LWcVv-r7zrh.html) | 数据修改器 | 🔵 |
| [IPCC](https://ipcc.xiaobo.pro) | 卡贴机解锁、去除系统漫游、开启独立5G语音<br>[B站视频讲解](https://www.bilibili.com/video/BV1gG41167k4/) | 🔵 |
| [Jaility](https://github.com/haxi0/Jaility/releases) | 开启/解除监督状态/角标/锁屏密码空白 | 🔵 |
| [mobileTSS](https://github.com/lucaIz-ldx/MobileTSS/releases) | 保存/下载 SHSH2 | 🔵 |
| [NetworkController](https://github.com/Halo-Michael/NetworkController-app) | 国行苹果设备网络控制，输入Bundle ID点SET即可 | 🔵 |
| [NiceBattery](https://www.niceios.com/download.php) | 电池助手,查看电池详细数据的工具 | 🔵 |
| [Supervise](https://www.123pan.com/s/3LWcVv-R7zrh.html) | 开启/解除监督状态 | 🔵 |
| [TrollNonce](https://github.com/opa334/TrollNonce/releases) | 固定G值 | 🔵 |
| [TSSSaver](https://www.123pan.com/s/3LWcVv-07zrh.html) | SHSH2备份工具<br>[在线SHSH备份](https://tsssaver.1conan.com/v2/) | 🔵 |
| [u0Launcher](https://github.com/opa334/u0Launcher/releases) | 修复unc0ver越狱过程的错误 | 🔵 |
| [Zomigle](https://github.com/HAHALOSAH/Zomigle/releases) | Apple Watch配对神器，低版系统可配对高版本 | 🔵 |


::: details Copylog破解教程

1.先下载安装 [Copylog_1.6_原版](https://www.123pan.com/s/3LWcVv-mJ5rh.html) ，打开

2.登录选择 `Or get it on Havoc`

3.自动跳浏览器后，选择 `Apple ID` 登录

4.下载安装 破解工具 [CLCracker](https://www.123pan.com/s/3LWcVv-1J5rh.html) ，打开点击 `Crack`，直到 `Finish` 结束

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
| [Price Tag](https://www.123pan.com/s/3LWcVv-S7zrh.html) | App 价格监控的工具，查看每日限免 | 🔵 |
| [uYou+](https://github.com/qnblackcat/uYouPlus/releases) | 去除广告/下载视频/音频 | 🔵 |
| [WiFiList](https://www.123pan.com/s/3LWcVv-l7zrh.html) | WiFi 密码查看器 | 🔵 |
| [WiFiScanner](https://www.123pan.com/s/3LWcVv-77zrh.html) | WiFi 扫描工具 | 🔵 |
| [Sileo](https://github.com/Sileo/Sileo/releases) | 软件包管理器；未越狱仅可查看 | 🔵 |
| [Saily](https://github.com/SailyTeam/Saily/releases) | 软件包管理器 | 🔵 |
| [Zebra](https://github.com/zbrateam/Zebra/releases) | 软件包管理器；未越狱仅可查看 | 🔵 |










## 常见问题



#### 安装完成，不显示图标


打开 TrollStore - Settings - 点击 `Rebuild Icon Cache` 等待重启，未重启的话，点击 `Respring` 即可


#### 可以安装其他应用吗

可以，以上只是一些工具，可以安装一些破解版APP，例如：Youtube破解版







