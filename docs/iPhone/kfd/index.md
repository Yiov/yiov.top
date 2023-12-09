# KFD漏洞的软件及使用

> 更新时间：2023-10-20


## 简介

Short For Kernel漏洞，也就是 [CVE-2023-23536](https://support.apple.com/zh-cn/HT213676) 和 [CVE-2023-32434](https://support.apple.com/zh-cn/103837) 漏洞，简称KFD

::: details 关于 CVE-2023-23536 和 CVE-2023-32434 漏洞
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
```
:::

::: tip 事件进展
* 2023-7-21 [@p0up0u](https://twitter.com/_p0up0u_) 公开 [kfd 内核读写项目](https://github.com/felix-pb/kfd)，它可以在 Apple 设备上读写内核内存的项目，该漏洞仅适用于iPhone 8 及更高机型

* 2023-8-2 [@Ledsnow101](https://twitter.com/Lrdsnow101) 利用此漏洞推出 [DevTest](https://github.com/Lrdsnow/kfd/)

* 其他开发者相继推出自己的工具
:::


* 原理：通过对设备添加对应系统的偏移量，以达到使用目的

* 弊端：并不保证一次成功，不用设备的偏移量均有不同，可能要多次重启才成功


::: details KFD与MDC的关系
不同的漏洞，并无太大关联，与 [MDC](../mdc/) 类似，可以进行一些简单的美化

系统在 `16.0 - 16.1.2` 的手机，可以同时选择使用MDC还是KFD
:::


## 适用范围

* 理论支持：iPhone 8及以上的设备 (A11-A17)

* 系统：`iOS 15.0-iOS 16.5` / `iOS 16.6 Beta1 / 17.0 beta1-2`

* 注意：具体以工具为准

::: details 芯片与手机
| 芯片| 手机 | 系统兼容设备范围 |
| :-: | :-: | :-: |
| A9 | iPhone 6s系列 / SE | [iOS14](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/14.0/ios/14.0) - [iOS15](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/15.0/ios/15.0) |
| A10 | iPhone 7系列 | [iOS14](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/14.0/ios/14.0) - [iOS15](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/15.0/ios/15.0) |
| A11 | iPhone 8系列 / X | [iOS14](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/14.0/ios/14.0) - [iOS16](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/16.0/ios/16.0) |
| A12 | iPhone XS系列 / XR | [iOS14](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/14.0/ios/14.0) - [iOS17](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/ios) |
| A13 | iPhone 11系列 / SE 2 | [iOS14](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/14.0/ios/14.0) - [iOS17](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/ios) |
| A14 | iPhone 12系列 | [iOS14](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/14.0/ios/14.0) - [iOS17](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/ios) |
| A15 | iPhone 13系列 / 14系列 / SE 3 | [iOS14](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/14.0/ios/14.0) - [iOS17](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/ios) |
| A16 | iPhone 14 pro系列 / 15系列 | [iOS14](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/14.0/ios/14.0) - [iOS17](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/ios) |
| A17 | iPhone 15 pro系列 | [iOS14](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/14.0/ios/14.0) - [iOS17](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/ios) |
:::


## 使用工具

> 软件里打开看文字就会用了，是在不会可以看 [Cluckabunga的使用教程](https://mp.weixin.qq.com/s/PMtNLWHIBmI2vOVGw_k5vw)

| KFD工具| 系统范围 | 说明 |
| :-: | :-: | :-: |
| [Misaka](https://github.com/straight-tamago/misaka/releases) | iOS 15.7.2 - 15.7.6 /<br>iOS 16.2 - 16.6 Beta1 | [@straight-tamago](https://twitter.com/straight_tamago) 开发的多功能插件商店 |
| [PureKFD](https://github.com/Lrdsnow/PureKFD/releases) | [A11](#适用范围) iOS 15.0 - 15.7.6 /<br>[A12及以上](#适用范围) iOS 15.0 - 16.5 | [@Lrdsnow](https://twitter.com/Lrdsnow101) 开发的插件商店，同时支持 [Picasso](https://repo.sourceloc.net/) 和 [Misaka](https://github.com/straight-tamago/misaka/releases) 软件源的包管理器 |
| [SimpleKFD](https://github.com/Lrdsnow/SimpleKFD/releases) | [A11](#适用范围) iOS 16.0-16.5 /<br>[A12及以上](#适用范围) 15.0-15.7.6 / 16.6 Beta1 | [@Lrdsnow](https://twitter.com/Lrdsnow101) 利用KFD漏洞开发的工具箱 |
| [Cluckabunga](https://github.com/leminlimez/Cluckabunga/releases) | iOS 16.2-16.5 /<br>16.6 Beta1 | MDC的奶牛开发者 [@LeminLimez](https://twitter.com/LeminLimez) 利用KFD漏洞开发的工具箱 |
| [posi0nKFD](https://github.com/GenericCoding/kfd/releases) | iOS 16.2-16.5 | [GenericCoding](https://twitter.com/GenericCoding) 利用KFD漏洞开发的工具箱 |
| [Picasso](https://repo.sourceloc.net/) | [A12及以上](#适用范围) iOS 16.0 - 16.5 / iOS 16.6 Beta1 | TrollTools 开发者 / 多巴UI 设计 [@sourcelocation](https://twitter.com/sourceloc) 利用KFD漏洞开发的工具箱 |




## 工具

### 其他

* [KFDFontOverwrite：KFD漏洞开发，支持iOS 16.2-16.5 / 16.6 Beta1 丨 @htrowii](https://github.com/hrtowii/WDBFontOverwrite)

* [KFDFontOverwrite：KFD漏洞开发，支持iOS 16.2-16.5 / 16.6 Beta1 丨 @Little_34306](https://github.com/34306/iPA/releases)

* [Blacklist KFD：修复企业证书黑名单 丨 @appinstalleriosgh](https://appinstalleriosgh.github.io/Sign/Blacklist%20KFD.ipa)


### Misaka商店

* [FontManager：字体管理插件 丨 @EPOS 丨 EPOSbox源](https://straight-tamago.github.io/misaka/?repo=https://raw.githubusercontent.com/EPOS05/EPOSbox/main/misaka.json&tweak=com.epos.fontmanager)

* [Joutai：状态栏显示信息插件，支持显示电池百分比，非画中画 丨 @Robin 丨 Puck源](https://straight-tamago.github.io/misaka/?repo=https://puck.roeegh.com/repo.json&tweak=com.roeegh.joutai)

* [PiP Status Bar：悬浮显示电池百分比 丨 @Phu Do 丨 PhucDo源](https://straight-tamago.github.io/misaka/?repo=https://phucdo-repo.pages.dev/repo.json&tweak=com.dobabaophuc.pipstt1)

* NoVuInTools：实现电量百分比 丨 Dekotas源








