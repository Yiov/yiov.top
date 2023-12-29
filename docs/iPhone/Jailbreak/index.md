#  iPhone越狱工具介绍


> 更新时间：2023-10-17


## 简介

越狱的目的简单来讲，就是通过安装各种插件来追求更个性化、更安卓化

随着苹果漏洞的完善，越狱在不久的将来，可能会不复存在


## 芯片与手机

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



## 越狱工具

带 ⭐ 的是有教程的，点击即可跳转

> 除 `Dopamine` 和 `XinaA15` 为 `rootless无根越狱`，其他均为 `rootful有根越狱`

::: details 关于有根和无根
有根是 `读写` 系统权限，无根是`只读` 系统权限

主要原因是由于苹果漏洞的修复，越狱已经举步维艰了
:::

| 越狱工具| 系统范围 | 说明 |
| :-: | :-: | :-: |
| [⭐Dopamine](./Dopamine.md) | [A12 - A15 M1](#芯片与手机)<br>iOS 15.0 - 15.4.1 | [@opa334](https://twitter.com/opa334dev) 开发的IOS 15越狱工具，目前是主流 |
| [XinaA15](https://apt.xina.vip/) | [A12 - A15 M1](#芯片与手机)<br>iOS 15.0 - 15.4.1 | 国人 [@朱心浪](https://twitter.com/xina520) 独立开发的首款IOS 15越狱工具 |
| [Freya](https://github.com/pwned4ever/Freya15/releases) | [A9 - A11](#芯片与手机)<br>iOS 15.0 - 15.1 | 由 [@pwned4ever](https://twitter.com/shogunpwnd) 利用 `KFD` 漏洞开发的越狱工具，越狱后可以正常使用面容或指纹 |
| |
| [Taurine](https://taurine.app/) | [A9 - A14](#芯片与手机)<br>iOS 14.0 - 14.8.1 | 俗称牛磺酸，是 [CoolStar(酷星)](https://twitter.com/CStar_OW) 主导开发的越狱工具，现在他已离开越狱社区，[参考我爱搞机网的教程](http://www.52ggi.cn/yynews/256.html) |
| [⭐unc0ver](./unc0ver.md) | [A9 - A14](#芯片与手机)<br>iOS 11.0 - 14.3 /<br>[A12 - A13](#芯片与手机)<br>iOS 14.6 - 14.8 | 前 [Electra](https://coolstar.org/electra/) 成员的 [@pwn20wnd](https://twitter.com/Pwn20wnd) 开发的越狱工具，其在v7版本中添加了Fugu14的支持 |
| [⭐checkra1n](./checkra1n.md) | [A9 - A11](#芯片与手机)<br>iOS 14-16.7 | 俗称C1，需要电脑U盘引导，利用 `checkm8` 漏洞，越狱后无法正常使用面容或指纹 |
| [Palera1n](https://palera.in/) | [A9 - A11](#芯片与手机)<br>iOS 14-16.7 | 需要电脑U盘引导，利用 `checkm8` 漏洞，越狱后无法正常使用面容或指纹，[参考爱思的教程](https://www.i4.cn/news_detail_52687.html) |
| [Fugu14](https://github.com/LinusHenze/Fugu14) | [A8 - A11](#芯片与手机)<br>iOS 14.3 - 14.5.1 | 由 [@Linus Henze](https://twitter.com/LinusHenze) 发布的越狱工具，后 [unc0ver](https://unc0ver.dev/) 和 [Taurine](https://taurine.app/) 添加了对它的支持|
| |
| [Odyssey](https://theodyssey.dev/) | [A8 - A13](#芯片与手机)<br>iOS 13 - 13.7 | 俗称奥德赛，由CoolStar(酷星)团队发布的越狱工具 |
| |
| [Chimera](https://chimera.coolstar.org/) | [A7 - A11](#芯片与手机)<br>iOS 12 - 12.5.7 /<br>[A12 iOS](#芯片与手机)<br>12.0 - 12.1.2 | 俗称奇美拉，由CoolStar(酷星)团队发布的越狱工具 |
| |
| [Electra](https://coolstar.org/electra/) | [A8 - A11](#芯片与手机)<br>iOS 11.0 – 11.4.1 | 由CoolStar(酷星)团队发布的越狱工具 |

