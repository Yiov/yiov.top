# KFD

::: warning 更新时间
最近更新：2023-10-20
:::

## 简介

[@p0up0u](https://twitter.com/_p0up0u_) 公开 [kfd 内核读写项目](https://github.com/felix-pb/kfd)，利用的是 `CVE-2023-2353`6 和 `CVE-2023-32434` 漏洞

此漏洞与 [MDC](../mdc/) 类似，可以进行一些简单的美化



## 适用范围

| 手机/系统 | 6s-7系列 / SE (A9-A10) | 8-15系列/ XS系列 / XR / SE 2-3 (A11-A16) |
| :-: | :-: | :-: |
| 15.0 - 16.5 | ✘ | :heart: |
| 16.6及以上 | ✘ | ✘ |

理论支持 `A11-A16` `iOS 15.0-iOS 16.5` / `iOS 16.6 Beta1 / 17.0 beta1-2` 系统



## 使用

有了 MDC 的经验，大神也开始整合这些功能，不在是单一的了，使用上就更简单

::: tip 说明
软件里打开看文字就会用了，是在不会可以看 [Cluckabunga的使用教程](https://mp.weixin.qq.com/s/PMtNLWHIBmI2vOVGw_k5vw)
:::

| 手机/系统 | iPhone 8系列 / X (A11) | 11-15系列/ XS系列 / XR / SE 2-3 (A12-A16) |
| :-: | :-: | :-: |
| 15.0-15.7.3 | [Misaka](https://www.123pan.com/s/3LWcVv-cZzrh.html) / [PureKFD](https://github.com/Lrdsnow/PureKFD/releases) / [SimpleKFD](https://github.com/Lrdsnow/SimpleKFD/releases) | [Misaka](https://www.123pan.com/s/3LWcVv-cZzrh.html) / [PureKFD](https://github.com/Lrdsnow/PureKFD/releases) |
| 15.7.4-15.7.6 | [PureKFD](https://github.com/Lrdsnow/PureKFD/releases) / [SimpleKFD](https://github.com/Lrdsnow/SimpleKFD/releases) | [PureKFD](https://github.com/Lrdsnow/PureKFD/releases) |
| 15.7.7-15.7.9 | - | [PureKFD](https://github.com/Lrdsnow/PureKFD/releases) |
| 16.0-16.0.1 | [Misaka](https://www.123pan.com/s/3LWcVv-cZzrh.html) / [SimpleKFD](https://github.com/Lrdsnow/SimpleKFD/releases) | [Misaka](https://www.123pan.com/s/3LWcVv-cZzrh.html) / [PureKFD](https://github.com/Lrdsnow/PureKFD/releases) |
| 16.2-16.5 | [Misaka](https://www.123pan.com/s/3LWcVv-cZzrh.html) / [Cluckabunga](https://github.com/leminlimez/Cluckabunga/releases) / [SimpleKFD](https://github.com/Lrdsnow/SimpleKFD/releases) | [Misaka](https://www.123pan.com/s/3LWcVv-cZzrh.html) / [Cluckabunga](https://github.com/leminlimez/Cluckabunga/releases) / [PureKFD](https://github.com/Lrdsnow/PureKFD/releases) / [posi0nKFD](https://github.com/GenericCoding/kfd/releases) |
| 16.6及以上 | ✘ | ✘ |



* [Misaka：KFD漏洞开发多功能插件商店，适用于iOS 15.0-15.7.3 / iOS16.0-16.5 / iOS16.6 Beta1 | 在Dekotas源找到NoVuInTools安装实现电量百分比](https://www.123pan.com/s/3LWcVv-cZzrh.html)

* [Cluckabunga：KFD漏洞开发，适用于iOS 16.2-16.5 / 16.6 Beta 1 | @leminlimez](https://github.com/leminlimez/Cluckabunga/releases) 丨 [详细使用教程](https://mp.weixin.qq.com/s/PMtNLWHIBmI2vOVGw_k5vw)

* [PureKFD：KFD漏洞开发，适用于A12及以上 iOS 15.0-16.5 / A11及以下 iOS 15.0-15.7.6 丨 @Lrdsnow](https://github.com/Lrdsnow/PureKFD/releases)

* [posi0nKFD：KFD漏洞开发，适用于A12-A16 iOS 16.2-16.5 丨 @GenericCoding](https://github.com/GenericCoding/kfd/releases)

* [SimpleKFD：KFD漏洞开发，适用于iOS 15.0-15.7.6 / A12及以上 iOS 16.0-16.5 / 16.6 Beta1 丨 @Lrdsnow](https://github.com/Lrdsnow/SimpleKFD/releases)


