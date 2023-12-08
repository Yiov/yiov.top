---
prev: false
next: false
---

# checkra1n越狱及使用

> 更新时间：2023-12-5

## 简介

它与 [Palera1n](https://palera.in/) 一样，都是基于 `Checkm8` 的一个硬件漏洞，即A11及以下的设备均存在此漏洞

硬件问题是无法修复的，无论当前是什么样的系统，一样可以越狱

官网：[https://checkra.in/](https://checkra.in/)

![](./checkra1n-01.png)


## 适用范围

| 手机/系统 | 6s-8系列 / SE / X<br>(A9-A11) | XS系列 / XR / SE 2-3 / 11-15系列<br>(A12-A17) |
| :-: | :-: | :-: |
| 14.0-16.7 | :heart: | ✘ |
| 17及以上 | - | ✘ |


## 制作U盘

如果刚上手不太懂得使用，直接 [爱思助手](https://www.i4.cn/) 简单且好用


官网：[https://www.i4.cn/](https://www.i4.cn/)


![](./checkra1n-02.png)


安装完成后，连接手机，手机端点一下 `信任` ，就进入了爱思界面

请先右上角注册并登录账号，否则无法使用越狱功能

::: tip 说明
都是手机的信息，查验手机也会用到它
:::

![](./checkra1n-03.png)


点工具箱 - 一键越狱，等下载安装完成

![](./checkra1n-04.png)



打开后会自动识别可用的越狱工具

::: tip 说明
如果你这里没有可用的工具，排出数据线没插好外，默哀，你的手机越狱不了
:::

![](./checkra1n-05.png)



选择 `U盘越狱`，镜像文件选 `cnx...` ，插入准备好的U盘，识别后开始制作

::: warning 注意
操作会清空U盘数据，自行备份好数据！！！
:::

![](./checkra1n-06.png)

![](./checkra1n-07.png)

![](./checkra1n-08.png)





## 开始越狱

U盘不要拔掉，重启电脑，进入BIOS模式并选择以U盘启动

我的微星主板是按 `F11` 快速选择

::: details 点击查看 组装机主板品牌启动快捷键
| 组装机主板品牌 | 启动快捷键 |
|:-:|:-:|
| 华硕 / 盈通 | F8 |
| 映泰 / 冠铭 | F9 |
| 翔升 | F10 |
| 微星 / 华擎 / 昂达 | F11 |
| 技嘉 / Intel / 致铭 | F12 |
| 冠盟 / 顶星 | F11或F12 |
| 斯巴达克 / 双敏 / 捷波 / 磐英 / 磐正 | ESC |
| 杰微 | ESC或F8 |
| 七彩虹 / 精英 / 铭瑄  | ESC或F11 |
| 梅捷 / 富士康  | ESC或F12 |
:::

::: details 点击查看 笔记本品牌启动快捷键
| 笔记本品牌 | 启动快捷键 |
|:-:|:-:|
| 微星 | F11 |
| 联想 / Thinkpad / 宏基 / 神舟 / 东芝 / IBM / 富士通 / 海尔 / 方正 / 清华同方 / 技嘉 / Gateway / eMachines | F12 |
| 三星 | F2或F12 |
| 明基 | F8或F9 |
| 惠普 | F9或F12 |
| 索尼 | ESC |
| 华硕 | ESC或F8 |
| 戴尔 | ESC或F12 |
| 苹果 | 长按“option”键 |
:::

::: warning 说明
如果U盘有一个EFUI模式，硬件支持的话选，速度快点；不支持就选常规U盘
:::

![](./checkra1n-09.png)



在Welcome to checkn1x 界面按组合键 `Alt+F2` 进入 Checkra1n

![](./checkra1n-10.png)


电脑用USB链接手机，手机弹窗点`信任`，然后再电脑端用方向键选择 `options` 回车

::: tip 说明
无反应，再次拔插数据线即可
:::

![](./checkra1n-11.png)


全选-返回，如果全选卡死就重启再来的时候，不选 `Safe Mode`

::: danger 注意
仍然卡死的话，先选1后，返回！再选2345！
:::

![](./checkra1n-12.png)



这时候 `start`就亮了，方向键选择 `Start` 后按回车，下一步

::: tip 说明
如果还没有亮，再次拔插数据线就可以了
:::

![](./checkra1n-13.png)



手机自动进入DFU模式，每个人手机不同，请看下电脑界面提示按键，然后 `Start` 开始操作

::: tip 说明
我的是先长按电源键+音量下键4秒

再松开电源键，保持按住音量下键10秒
:::

![](./checkra1n-14.png)



![](./checkra1n-15.png)


越狱完成后，Checkra1n 会提示 `All Done` 

::: tip 说明
如果越狱失败，请再尝试一次
:::

![](./checkra1n-16.png)


桌面会有 `checkra1n` 图标生成，打开 checkra1n，点击 Cydia 并安装 `Install Cydia`

::: tip 说明
如果不显示或者提示 `timed out` ，挂个梯子就好了
:::

![](./checkra1n-17.png)



## Cyida的使用


进入Cyida-更新必要软件包-确定-即可进入主页

![](./checkra1n-18.png)


界面简介，常用的就是 `软件源` 和 `搜索`，用Trollstore演示一下

软件源-右上角编辑-左上角添加，输入源地址：[https://havoc.app](https://havoc.app)

![](./checkra1n-19.png)

等安装完成即可，现在就有Havoc的源了

![](./checkra1n-20.png)

搜索 `Trollstore Helper` 然后右上角-更改-安装就完成了

![](./checkra1n-21.png)





## U盘恢复工具

越狱用的U盘无法正常使用，我们可以用恢复工具

[点我下载：rufus-3.11p.zip](https://d-image.i4.cn/i4web/image/news/2020-07-16/fileTypeImages_1594880598242082789.zip)丨 [备用：蓝奏云](https://dzp.lanzouy.com/iW1tG0cm7wcb)


下载工具下载到桌面，打开运行

![](./checkra1n-22.png)


插入U盘，会自动识别设备，在 引导类型选择 下选择 `FreeDOS`


![](./checkra1n-23.png)


点击开始，直到完成，U盘恢复正常模式

![](./checkra1n-24.png)

![](./checkra1n-25.png)





## 插件


由于插件源众多，不一一赘述，更多源请参考 `@艾橙互动` 公众号的整理

[插件目录大全](https://mp.weixin.qq.com/s/ploLK0P8KakFgicxZYC1UQ) 丨 [整理的各类源](https://mp.weixin.qq.com/s/lSE0PSKA4PT09ChOrEwRRw)


### 自带源

::: tip 说明
默认源，无需额外添加，避免误删的对照
:::

* Binger源：`https://apt.binger.com/`

* BigBoss源：`https://apt.thebigboss.org/repofiles/Cydia/`

* Chariz源：`https://repo.chariz.com/`

* Dynastic Repo源：`https://repo.dynastic.co/`

* ModMyi(Archive)源：`https://apt.modmyi.com/`

* ZodTTD&MacCiti(Archive)源：`https://cydia.zodttd.com/repo/cydia`


::: details 默认源好用插件
```md
# BigBoss源

* PreferenceLoader：越狱插件运行的依赖文件

* AppList：查看已经安装的 App 列表

* RocketBootstrap：允许在 App 运行时加载插件

* Apple File Conduit "2"：手机连接电脑，爱思助手可以访问导入或导出文件

* 连个锤子：修复无法联网问题


# Chariz源

* Atria：自定义桌面布局

* Cylinder Reborn：炫酷翻页特效

* LastLook：款熄屏显示插件，收费！

* NewTerm 2：终端工具

```
:::




### 其他插件


::: details 点我查看常用插件源
```md
# Netskao哥哥源

源地址：https://repo.initnil.com

DumpDecrypter：砸壳解密工具

NetWorkManager：联网权限管理

injectipa：dylib插件注入

微信净化/抖音净化等等

IPA下载：https://share.initnil.com/With_TorllStore

QQ及微信砸壳包：https://github.com/Netskao/iOS-DumpDecrypted-IPAs

公众号Netskao：https://mp.weixin.qq.com/s/ieLeWpUNjbDL9JGKYhJcmA




# 老牌猫源

源地址：https://apt.25mao.com/

插件：微信插件：密友/斗图助手/游戏扫码登录

TG群：https://t.me/lanmaoios




# APP库

源地址：http://ak.wxqqurl.cn/appstore

IPA盘：https://pan.wxqqurl.cn

公众号App库：https://mp.weixin.qq.com/s/aDLiPqL5tSxbTOa5M2IqGw



# 艾锋源

源地址：http://apt.ss03.cn/

公众号：艾锋降级




# 电话助手源

源地址：http://apt.htv123.com

购买授权码：https://buy.htv123.com/





# 嗨客汉化源

源地址：http://repo.qqtlr.com




# 冷冷雨源

源地址：https://lenglengyu.com

TG群：https://t.me/+l9inH184Ye9jZmM1




# 苏兔美化酸果

源地址：https://apt.sutuplus.com/

公众号苏兔：https://mp.weixin.qq.com/s/aDLiPqL5tSxbTOa5M2IqGw





# AppCake源

源地址：http://cydia.iphonecake.com/

CarackerXI+ 砸壳官方源





# akusio源

源地址：https://akusio.github.io/

BackgrounderAction15 for CCSupport：应用在后台保持运行，不支持微信 丨 需安装CCSupport

MilkyWay：分屏插件





# CokePokes源

源地址：http://cokepokes.github.io/

AppStore++ APP升降级，在APP Store长按应用的打开按键




# Delta源

源地址：http://getdelta.co

Flex3：免广告插件



# Fouad源

源地址：https://apt.fouadraheb.com/

AppData：系统垃圾清理





# Havoc源

源地址：https://havoc.app

原Packix源迁移至此

Trollstore Helper：巨魔助手(免签神器)

ReProvision Reborn：自签插件，免签安装IPA

Ampere：电池百分比数字显示




# 蔡明美源

源地址：https://cydia.akemi.ai/

AppSync Unified：自签插件，免签安装IPA




# Ivano Bilenchi`s Repo源

源地址：https://ib-soft.net/cydia

iCleaner pro：老牌清理插件




# julioverne源

源地址：https://julio.hackyouriphone.org/

Cydown：deb插件下载

NtSpeed：悬浮网速显示





# MiRO92源

源地址：http://miro92.com/repo

Cyrch：在Cydia顶部增加一个搜索功能





# opa334源

源地址：https://opa334.github.io/

Choicy：调整注入管理插件丨汉化赵楠源：`https://invalidunit.github.io/repo/`

AltList：安装Choicy的依赖

CCSupport：控制中心模块相关插件的依赖




# SkyPian源

源地址：https://skypain.github.io/repo/

CCLocation：控制中心添加定位开关，一键开启或关闭定位

CCRespring：控制中心一键注销

CCSettrings：控制中心添加设置开关，一键打开手机设置 App

MiniLsp：锁屏迷你播放器



# TIGI Software源

源地址：https://tigisoftware.com/cydia/

Apps Manager： Filza文件管理器


# xia0Repo源

源地址：http://xia0z.github.io/

FakeLocationX：虚拟定位
```
:::


### 插件下载


::: tip 说明
我们常见的 `dylib插件` 也就是deb解压出来的
:::

* [PC端：cydownload](https://github.com/borishonman/cydownload/releases)

* [手机端：PostBox](https://itunes.apple.com/app/id1644577838)「国区下架，美区下载即可」

* [手机端：Saily](https://github.com/SailyTeam/Saily/releases)

* [手机端：Sileo](https://github.com/Sileo/Sileo/releases)

* [越狱机：CyDown](https://julio.hackyouriphone.org/)

* [网页端：Repo Updates](https://www.ios-repo-updates.com/)




## 常见问题



#### 1.手机重启后，恢复到未越狱状态了

恭喜你，重新来一遍



#### 2.怎么清除越狱


清理越狱环境，但安装的插件配置文件会保留，建议先清理

* [iCleaner Pro](https://ib-soft.net/cydia)「删除插件」

* 用 [Filza File Manager](http://tigisoftware.com/cydia/)，在 `Cydown` 路径 `/var/mobile/Documents/CyDown` 删除已经下载的 deb 安装包

* 卸载必须依赖 用 `PreferenceLoader` 批量卸载

* Checkra1n：进入点击 `Restore System` ，清除完毕后重启，桌面残留Cydia图标删除即可。如果银行打不开，请备份后，抹机


#### 3.Checkra1n桌面没有图标了

用Checkra1n制作的U盘，重新越狱即可



