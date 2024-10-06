# KFD漏洞的软件及使用



::: danger 敬告
由于巨魔已经包含了MDC漏洞，[装巨魔](./sign/TrollStore.md) 就可以了

以下教程可以无视
:::


## 简介

Kernel Function Discovery漏洞，也就是 [CVE-2023-23536(physpuppet)](https://support.apple.com/zh-cn/HT213676) 、 [CVE-2023-32434(smith)](https://support.apple.com/zh-cn/103837) 和 [CVE-2023-41974(landa)](https://support.apple.com/en-us/HT213938) 漏洞，简称KFD

::: details 关于 CVE-2023-23536、CVE-2023-32434 和 CVE-2023-41974 漏洞
```
Kernel

适用于：iPhone 8 及更新机型、iPad Pro（所有机型）、iPad Air（第 3 代）及更新机型、iPad（第 5 代）及更新机型、iPad mini（第 5 代）及更新机型

影响：App 或许能够以内核权限执行任意代码

描述：已通过改进边界检查解决这个问题。

CVE-2023-23536：Félix Poulin-Bélanger 和 David Pan Ogea

---

Kernel

适用于：iPhone 8 及更新机型、iPad Pro（所有机型）、iPad Air（第 3 代）及更新机型、iPad（第 5 代）及更新机型、iPad mini（第 5 代）及更新机型

影响：App 或许能够以内核权限执行任意代码。有报告指出，在 iOS 15.7 之前发布的 iOS 版本中，这个问题可能已经遭到频繁利用；Apple 已知晓这一报告。

描述：已通过改进输入验证解决整数溢出问题。

CVE-2023-32434：Kaspersky 的 Georgy Kucherin (@kucher1n)、Leonid Bezvershenko (@bzvr_)、Boris Larin (@oct0xor) 和 Valentin Pashkov

---

Kernel

适用于：iPhone XS 及更新机型、12.9 英寸第 2 代及更新机型 iPad Pro、10.5 英寸 iPad Pro、11 英寸第 1 代及更新机型、iPad Air 第 3 代及更新机型、iPad 第 6 代及更新机型以及 iPad mini 第 5 代及更新机型

影响：App 或许能够以内核权限执行任意代码

描述：已通过改进内存管理解决释放后使用问题。

CVE-2023-41995：蚂蚁安全光年实验室的 Certik Skyfall 团队 pattern-f （@pattern_F_）

CVE-2023-42870：昆仑实验室的 Zweig

CVE-2023-41974：Félix Poulin-Bélanger
```
:::



::: tip 事件进展
* 2023-7-21 [@p0up0u](https://twitter.com/_p0up0u_) 公开 [kfd 内核读写项目](https://github.com/felix-pb/kfd)，它可以在 Apple 设备上读写内核内存的项目，该漏洞仅适用于iPhone 8 及更高机型

* 2023-8-2 [@Ledsnow](https://twitter.com/Lrdsnow101) 利用此漏洞推出 [DevTest](https://github.com/Lrdsnow/kfd/)

* 其他开发者相继推出自己的工具

* 2024-1-1 [@P0up0u](https://twitter.com/_p0up0u_) 新增landa漏洞(CVE-2023-41974)
:::


* 原理：通过对设备添加对应系统的偏移量，以达到使用目的

* 弊端：并不保证一次成功，不用设备的偏移量均有不同，可能要多次重启才成功


::: details KFD与MDC的关系
不同的漏洞，并无太大关联，与 [MDC](./mdc.md) 类似，可以进行一些简单的美化

系统在 `16.0 - 16.1.2` 的手机，可以同时选择使用MDC还是KFD
:::


## 适用范围

* 理论支持：iPhone 8及以上的设备 (A11-A17)

* 系统：`iOS 15.0-iOS 16.7.4` / `iOS 16.6 Beta1 / 17.0 beta1-2`

* 注意：具体以工具为准

::: details 芯片与手机
| 芯片| 手机 | 系统兼容设备范围 |
| :-: | :-: | :-: |
| A9 | iPhone 6s系列 / SE | iOS 9 - [iOS 15](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/15.0/ios/15.0) |
| A10 | iPhone 7系列 | iOS 10 - [iOS 15](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/15.0/ios/15.0) |
| A11 | iPhone 8系列 / X | iOS 11 - [iOS 16](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/16.0/ios/16.0) |
| A12 | iPhone XS系列 / XR | [iOS 12](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/12.0/ios/12.0) - [iOS 17](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/ios) |
| A13 | iPhone 11系列 / SE 2 | [iOS 13](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/13.0/ios/13.0) - [iOS 17](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/ios) |
| A14 | iPhone 12系列 | [iOS 14](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/14.0/ios/14.0) - [iOS 17](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/ios) |
| A15 | iPhone 13系列 / 14系列 / SE 3 | [iOS 15](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/15.0/ios/15.0) - [iOS 17](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/ios) |
| A16 | iPhone 14 pro系列 / 15系列 | [iOS 16](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/16.0/ios/16.0) - [iOS 17](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/ios) |
| A17 | iPhone 15 pro系列 | [iOS 17](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/ios) |
:::











## 工具

| KFD工具| 系统范围 | 说明 |
| :-: | :-: | :-: |
| [Misaka](https://github.com/straight-tamago/misaka/releases) | iOS 15.7.2 - 15.8.1 /<br>iOS 16.2 - 16.6.1 | [@straight-tamago](https://twitter.com/straight_tamago) 开发的多功能插件商店，[其他插件使用介绍](#misaka商店) |
| [PureKFD](https://github.com/Lrdsnow/PureKFD/releases) | [A11](#适用范围) iOS 15.0 - 15.7.6 /<br>[A12及以上](#适用范围) iOS 15.0 - 16.6.1 | [@Lrdsnow](https://twitter.com/Lrdsnow101) 开发的插件商店，同时支持 [Picasso](https://repo.sourceloc.net/) 和 [Misaka](https://github.com/straight-tamago/misaka/releases) 软件源的包管理器 |
| [SimpleKFD](https://github.com/Lrdsnow/SimpleKFD/releases) | [A11](#适用范围) iOS 16.0-16.5 /<br>[A12及以上](#适用范围) 15.0-15.7.6 / 16.6 Beta1 | [@Lrdsnow](https://twitter.com/Lrdsnow101) 利用KFD漏洞开发的工具箱 |
| [Cluckabunga](https://github.com/leminlimez/Cluckabunga/releases) | iOS 16.2-16.5 /<br>16.6 Beta1 | MDC的奶牛开发者 [@LeminLimez](https://twitter.com/LeminLimez) 利用KFD漏洞开发的工具箱 |
| [posi0nKFD](https://github.com/GenericCoding/kfd/releases) | iOS 16.2-16.5 | [GenericCoding](https://twitter.com/GenericCoding) 利用KFD漏洞开发的工具箱 |
| [Picasso](https://repo.sourceloc.net/) | [A12及以上](#适用范围) iOS 16.0 - 16.5 / iOS 16.6 Beta1 | TrollTools 开发者 / 多巴UI 设计 [@sourcelocation](https://twitter.com/sourceloc) 利用KFD漏洞开发的工具箱 |



## 演示

我用 `misaka` 软件演示，misaka是一款利用MDC/KFD漏洞开发的工具


安装方式两种：在线安装 和 自签安装


::: details 在线安装 (二选一)
方便，无需签名直接安装，但是不一定是最新版

---

我们现在直接使用 [@Little_34306](https://x.com/Little_34306) 越南大佬提供的在线安装

* iPhone: http://is.gd/34306misaka

* iPad M1/M2: http://is.gd/34306misakaM1

注意：需要使用 [科学上网](../gfw/proxy) ，才可以打开
:::



:::: details 自签安装 (二选一)
麻烦，需要使用签名工具安装，但是可装最新版

---

开始前先安装好自签工具：[牛蛙助手并认证好个人证书](./sign/bullfrog.md)

再下载 Misaka ：

https://github.com/straight-tamago/misaka/releases

::: tip 说明
下载最新版的即可，截稿前演示版本8.2.1
:::

![](/kfd/misaka-01.png)

下载完成后，点击浏览器 `下载` 按键，再点击已经下载好的 `misaka`

![](/kfd/misaka-02.png)


右上角分享，选择 `牛蛙助手`

![](/kfd/misaka-03.png)

点 `发送`，牛蛙打开后，选择 `导入`

::: tip 说明
如果勿点了取消，也可直接点 misaka.ipa 选择导入应用库
:::

![](/kfd/misaka-04.png)


点击 `misaka` ，选择 `签名` - `立即签名`

![](/kfd/misaka-05.png)


在已签名的页卡中，选择刚签好名的 `misaka` 安装

但牛蛙安装必须要开启`VPN和WIFI`，我们去打开

![](/kfd/misaka-06.png)

设置 - VPN - 勾选 `牛蛙助手` - 打开VPN开关

![](/kfd/misaka-07.png)

打开VPN后我们返回重新安装 misaka 即可

![](/kfd/misaka-08.png)

::::


misaka就安装成功了，但是还打不开，要信任一下

![](/kfd/misaka-09.png)


设置 - 通用 - VPN与设备管理 - 选择 开发者APP - `信任`

![](/kfd/misaka-10.png)

![](/kfd/misaka-11.png)


再次打开 misaka ，提示沙盒读写，点 `好`

![](/kfd/misaka-12.png)

允许 `无限局域网与蜂窝数据`，但是提示 `Network Erro`


![](/kfd/misaka-13.png)

这时我们需要使用 [科学上网](../gfw/proxy) ，我用小火箭，机场用的超级机场

![](/kfd/misaka-14.png)

连接好再次打开 misaka，`Agree` 同意后进入主界面

![](/kfd/misaka-15.png)


左上角 Setting - App Language

![](/kfd/misaka-16.png)

选择 `zh_CN` 完成后，自动退出，再次进入就能看到已经汉化了，下滑可退出页面


![](/kfd/misaka-17.png)



在 misaka 设置中，请根据自己的系统选择模式！

::: warning 参照表
KFD：iOS 16.2 - 16.6.1系统

MDC：iOS 15.0 - 16.1.2系统

No Exploit：无漏洞(iOS 16.7及以上系统)
:::


![](/kfd/misaka-18.png)




底部软件源，右上角默认源，点 `misaka.app` 安装一个插件试试

![](/kfd/misaka-19.png)

这里我就选虚拟定位，进去后点 `get`

![](/kfd/misaka-20.png)

显示队列中了，点一下底部查看，安装确认

![](/kfd/misaka-21.png)

安装成功后，在底部软件包里可以看到

![](/kfd/misaka-22.png)

点 `Simulation Start` 开始模拟位置，在地图上选择你要定位的位置，close关闭

![](/kfd/misaka-23.png)

插件有对勾就表示生效了，微信定位也是变动了

::: tip 说明
有些插件是需要应用注销后才生效，具体一插件说明为准
:::

![](/kfd/misaka-24.png)


不用了记得来关闭，除了点 `Simulation End` 结束模拟外，还建议长按关闭插件

部分插件是没有结束开关的，所以通过长按取消对勾就好，养成好习惯

![](/kfd/misaka-25.png)



不想要插件了，长按卸载，点开底部队列表，确认卸载即可

![](/kfd/misaka-26.png)

![](/kfd/misaka-27.png)





## 工具集

::: danger 注意
iOS 16 以下系统，请勿使用灵动岛，会白苹果！

请勿轻易尝试修改分辨率，操作失误，会白苹果！
:::


### 其他工具

* [Blacklist KFD：修复企业证书黑名单 丨 @appinstalleriosgh](https://appinstalleriosgh.github.io/Sign/Blacklist%20KFD.ipa)

* [KFDFontOverwrite：KFD漏洞开发的字体管理工具，支持iOS 16.2-16.5 / 16.6 Beta1 丨 @htrowii](https://github.com/hrtowii/WDBFontOverwrite)

* [kfd_stuffs：越南大佬编译的KFD漏洞工具，支持iOS 15.0-16.5 / 16.6 Beta1 丨 @Little_34306](https://github.com/34306/iPA/releases)


### Misaka商店

* [FontManager：字体管理插件 丨 @EPOS 丨 EPOSbox源](https://straight-tamago.github.io/misaka/?repo=https://raw.githubusercontent.com/EPOS05/EPOSbox/main/misaka.json&tweak=com.epos.fontmanager)

* [Joutai：状态栏显示信息插件，支持显示电池百分比，非画中画 丨 @Robin 丨 Puck源](https://straight-tamago.github.io/misaka/?repo=https://puck.roeegh.com/repo.json&tweak=com.roeegh.joutai)

* [PiP Status Bar：悬浮显示电池百分比 丨 @Phu Do 丨 PhucDo源](https://straight-tamago.github.io/misaka/?repo=https://phucdo-repo.pages.dev/repo.json&tweak=com.dobabaophuc.pipstt1)

* [NoVuInTools：实现电量百分比 丨 @DekotasTM 丨 Dekotas源](https://straight-tamago.github.io/misaka/?repo=https://raw.githubusercontent.com/hanabiADHD/DekotasMirror/main/dekotas.json&tweak=mirror.dekotastm.novulntools)

* [NoVulnTools2：系统动画加速 丨 @tyler1029 丨 EPOSbox 源](https://straight-tamago.github.io/misaka/?repo=https://raw.githubusercontent.com/EPOS05/EPOSbox/main/misaka.json&tweak=com.epos.novulntools2)

* [JBJFToolBox：让设备一键进入监督 丨 @jbjf 丨 misaka源](https://straight-tamago.github.io/misaka/?repo=https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/repo.json&tweak=com.jbjf.JBJFToolBox)

* [CC Mode iOS 15: 更改控制中心 丨 @Phuc Do 丨 phucDo 源](https://straight-tamago.github.io/misaka/?repo=https://phucdo-repo.pages.dev/repo.json&tweak=com.dobabaophuc.ccmodios15)

* [HideMamager：隐藏Dock栏等 丨 @YangJiii 丨 YangJiii 源](https://straight-tamago.github.io/misaka/?repo=https://yangjiii.tech/file/Repo/repo.json&tweak=com.yangjiii.hidemanager)

* [Radar：在 iPhone 储存空间的系统显示更多使用信息 丨 @YangJiii 丨 YangJiii 源](https://straight-tamago.github.io/misaka/?repo=https://yangjiii.tech/file/Repo/repo.json&tweak=com.yangjiii.radar)

* [LocationSimulator：虚拟定位 丨 @straight-tamago 丨 misaka 源](https://straight-tamago.github.io/misaka/?repo=https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/repo.json&tweak=com.straight-tamago.locationsimulator)

* [Plampy UI：控制中心图标美化 丨 @YangJiii 丨 YangJiii 源](https://straight-tamago.github.io/misaka/?repo=https://yangjiii.tech/file/Repo/repo.json&tweak=com.yangjiii.plampyuicc)

* [Pulsar Control Center UI：控制中心图标美化 丨 @Phuc Do 丨 PhucDo 源](https://straight-tamago.github.io/misaka/?repo=https://phucdo-repo.pages.dev/repo.json&tweak=com.dobabaophuc.pulsarCC)

* [Deco Control Center Ul：控制中心美化 丨 @PhucDo 丨 PhucDo源](https://straight-tamago.github.io/misaka/?repo=https://phucdo-repo.pages.dev/repo.json&tweak=com.dobabaophuc.DecoCC)

* [DuoTone Control Center Ul：控制中心美化丨 @PhucDo 丨 PhucDo源](https://straight-tamago.github.io/misaka/?repo=https://phucdo-repo.pages.dev/repo.json&tweak=com.dobabaophuc.controlcenter1_6)

* [Pulsar Settings Ul：设置添加顶图 丨@Phuc Do 丨 PhucDo源](https://straight-tamago.github.io/misaka/?repo=https://phucdo-repo.pages.dev/repo.json&tweak=com.dobabaophuc.PulsarSettingsUI)












