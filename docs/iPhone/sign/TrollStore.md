# 巨魔助手安装及使用

> 更新时间：2023-11-29

## 1.简介

全称 `TrollStore` ，中文名 `巨魔助手`，是一个绕签名安装ipa的工具，是一个划时代的伟大作品！

::: tip 与其他签名工具的区别
* 牛蛙/轻松签等：必须要证书，有效期过后掉签

* 巨魔：无需证书，用不掉签！！！
:::

::: tip 事件进展
* [@Linus Henze](https://twitter.com/LinusHenze) 向苹果官方递交了漏洞 `CVE-2022-26766` / `CVE-2022-26763`

* 2022/7/2 [@Zhouwei Zhang](https://twitter.com/Zhouwei) 公开了利用此漏洞绕过签名的方法

* 2022/9/3 [@opa334](https://twitter.com/opa334dev) 利用此漏洞开发了 `TrollStore`

* 2022/10/6 [@Linus Henze](https://twitter.com/LinusHenze) 在OBTS会议上公开了 `Fugu15` 的全新越狱方式，[@opa334](https://twitter.com/opa334dev) 也通过他的帮助发布了全新的`TrollStore`工具

* 2023/11/28 [@opa334](https://twitter.com/opa334dev) 通过利用 [@Alfie](https://twitter.com/alfiecg_dev) 发现的 `cve-2023-41991` 漏洞，并获得他的帮助完成了 `TrollStore2`
:::



## 2.适用范围

根据 [opa334的文档](https://github.com/opa334/TrollStore/) 中的 [安装指南](https://ios.cfw.guide/installing-trollstore/) 查看是否符合

| 系统 / iPhone | 6-8系列 / SE / X<br>(A8-A11) | 11-15系列 / XR / XS / SE 2-3<br>(A12-A17)<br>(M1-M2) |
| :-: | :-: | :-: |
| [14.0](https://support.apple.com/zh-cn/HT211808) - 14.8.1 | checkra1n 越狱 | [TrollHelper arm64e](#arm64-arm64e) |
| [15.0](https://support.apple.com/zh-cn/HT212788) - 15.4.1 | [TrollHelper arm64](#arm64-arm64e) | [TrollHelper arm64e](#arm64-arm64e) |
| 15.5 - 15.6.1 | [TrollInstaller MDC](#trollinstaller-mdc) | [TrollHelper arm64e](#arm64-arm64e) |
| 15.7 - 15.7.1 | [TrollInstaller MDC](#trollinstaller-mdc) | [TrollInstaller MDC](#trollinstaller-mdc) |
| 15.7.2 | checkra1n 越狱 | 即将发布 |
| 15.7.3 - 15.8| checkra1n 越狱 | ✘ |
| [16.0](https://support.apple.com/zh-cn/HT213407) - 16.1.2 | [TrollInstaller MDC](#trollinstaller-mdc) | [TrollInstaller MDC](#trollinstaller-mdc) |
| 16.2 - 16.5 | checkra1n 越狱 | [Misaka](#misaka) |
| 16.5.1 - 16.6.1 | checkra1n 越狱 | 无安装方式 |
| 16.7 - 16.7.2 | ✘ | ✘ |
| [17](https://support.apple.com/zh-cn/HT213781) | checkra1n 越狱 | 无安装方式 |
| [17.0.1及以上](https://support.apple.com/zh-cn/guide/iphone/iphe3fa5df43/ios) | ✘ | ✘ |



## 3.安装

请参照 [适用范围](#_2-适用范围) ，选择对应的安装方式


### arm64/arm64e

::: warning 教程仅适用于
[A8-A11](#_2-适用范围)：IOS 15.0 - 15.4.1(arm64)

[A12-A17](#_2-适用范围)：IOS 14.0 - 15.6.1(arm64e)
:::

* TrollHelper arm64：https://api.jailbreaks.app/troll64

* TrollHelper arm64e：https://api.jailbreaks.app/troll64e

根据自己的系统选择安装链接

![](./TrollStore-arm-01.png)


安装的是 `GTA Car Tracker` ，打开点安装 `Install Trollstore`，自动注销后，回到桌面就发现装完成了

::: details 无法安装报错 Error
需要翻墙，[科学上网工具及使用方法](../../gfw/channel/)
:::


![](./TrollStore-arm-02.png)

自动安装好了 `Idid` ，灰色状态就是已经安装成功了

安装持久性助手，点击 `Install Persistence Helper`，选择 `Tips` 即可

::: tip 说明
选其他也可以，只要是自己不长使用的系统App就行

如果你之前装过巨魔，也是选的Tips，请先释放或者卸载重装它，再来选择 Tips 为持久性助手
:::


![](./TrollStore-arm-03.png)


如果有天巨魔打不开，我们通过 `Tips` 可让巨魔恢复正常使用

::: tip 另外
有了持久性助手，GTA 可以直接卸载了
:::

![](./TrollStore-arm-04.png)


---







### TrollInstaller MDC

::: warning 教程仅适用于
[A8-A11](#_2-适用范围)：IOS 15.5 - 15.6.1

[A8-A17](#_2-适用范围)：IOS 15.7 - 15.7.1 / 16.0 - 16.1.2
:::

它是一款利用MDC漏洞开发的巨魔安装辅助工具

使用前我们需要先安装好自签工具： [牛蛙助手](./bullfrog.md)

然后再下载：https://dhinakg.github.io/apps.html


![](./TrollStore-MDC-01.png)

下载完成后，点击浏览器 `下载` 按键，再点击已经下载好的 `TrollInstallerMDC`

![](./TrollStore-MDC-02.png)


右上角分享，选择 `牛蛙助手`

![](./TrollStore-MDC-03.png)

点 `发送`，牛蛙打开后，选择 `导入`

::: tip 说明
如果勿点了取消，也可直接点 TrollInstallerMDC.ipa 选择导入应用库
:::

![](./TrollStore-MDC-04.png)


点击 `TrollInstallerMDC` ，选择 `签名` - `立即签名`

![](./TrollStore-MDC-05.png)


在已签名的页卡中，选择刚签好名的 `TrollInstallerMDC` 安装，但牛蛙安装必须要开启`VPN和WIFI`，我们去打开

![](./TrollStore-MDC-06.png)

设置 - VPN - 勾选 `牛蛙助手` - 打开VPN开关

![](./TrollStore-MDC-07.png)

打开VPN后我们返回重新安装 TrollInstallerMDC 即可

![](./TrollStore-MDC-08.png)

TrollInstallerMDC就安装成功了，但是还打不开，要信任一下

![](./TrollStore-MDC-09.png)


设置 - 通用 - VPN与设备管理 - 选择 开发者APP - `信任`

![](./TrollStore-MDC-10.png)

![](./TrollStore-MDC-11.png)


再次打开 TrollInstallerMDC ，提示沙盒读写，点 `好`

这样 `Tips` 即 `提示` ，就成了一个安装器

![](./TrollStore-MDC-12.png)

打开 `提示` 点 `Install TrollStore` 安装巨魔即可

::: details 无法安装报错 Error
需要翻墙，[科学上网工具及使用方法](../../gfw/channel/)
:::

![](./TrollStore-MDC-13.png)

自动安装好了 `Idid` ，灰色状态就是已经安装成功了

安装持久性助手，点击 `Install Persistence Helper`，选择除 `Tips` 以外的

::: danger 特别注意
因为安装器是Tips，如果持久性助手也选Tips，有可能会白苹果，就开不了机了
:::

如果非要选的Tips，请先卸载重装 [提示](https://apps.apple.com/cn/app/id1069509450)，再来选择 Tips 为持久性助手即可

![](./TrollStore-arm-03.png)


如果有天巨魔打不开，可以通过持久性助手可让巨魔恢复正常使用

::: tip 另外
有了持久性助手，TrollInstallerMDC 可以直接卸载了
:::

![](./TrollStore-arm-04.png)



---






### Misaka

::: warning 教程仅适用于
[A12-A17](#_2-适用范围)：IOS 16.2 - 16.5
:::

misaka是一款利用MDC/KFD漏洞开发的工具，且已上线了巨魔的辅助安装功能

使用前我们需要先安装好自签工具：[牛蛙助手](./bullfrog.md)

然后再下载 Misaka ：

https://github.com/straight-tamago/misaka/releases

::: tip 说明
下载最新版的即可，截稿前演示版本3.2.5
:::

![](./TrollStore-misaka-01.png)

下载完成后，点击浏览器 `下载` 按键，再点击已经下载好的 `misaka`

![](./TrollStore-misaka-02.png)


右上角分享，选择 `牛蛙助手`

![](./TrollStore-misaka-03.png)

点 `发送`，牛蛙打开后，选择 `导入`

::: tip 说明
如果勿点了取消，也可直接点 misaka.ipa 选择导入应用库
:::

![](./TrollStore-misaka-04.png)


点击 `misaka` ，选择 `签名` - `立即签名`

![](./TrollStore-misaka-05.png)


在已签名的页卡中，选择刚签好名的 `misaka` 安装

但牛蛙安装必须要开启`VPN和WIFI`，我们去打开

![](./TrollStore-misaka-06.png)

设置 - VPN - 勾选 `牛蛙助手` - 打开VPN开关

![](./TrollStore-misaka-07.png)

打开VPN后我们返回重新安装 misaka 即可

![](./TrollStore-misaka-08.png)

misaka就安装成功了，但是还打不开，要信任一下

![](./TrollStore-misaka-09.png)


设置 - 通用 - VPN与设备管理 - 选择 开发者APP - `信任`

![](./TrollStore-misaka-10.png)

![](./TrollStore-misaka-11.png)


再次打开 misaka ，提示沙盒读写，点 `好`

![](./TrollStore-misaka-12.png)

允许 `无限局域网与蜂窝数据`，但是提示 `Network Erro`


![](./TrollStore-misaka-13.png)

这时我们需要使用 [科学上网](../../gfw/channel/) ，我用小火箭，机场用的超级机场

![](./TrollStore-misaka-14.png)

连接好再次打开 misaka，`Agree` 同意后进入主界面

![](./TrollStore-misaka-15.png)


左上角 Setting - App Language

![](./TrollStore-misaka-16.png)

选择 `zh_CN` 完成后，自动退出，再次进入就能看到已经汉化了，下滑可退出页面


![](./TrollStore-misaka-17.png)



在 misaka 设置中，请根据自己的系统选择模式！

::: warning 参照表
KFD：IOS 16.2-16.5系统

MDC：IOS 15.0-16.1.2系统

No Exploit：无漏洞(IOS 16.5及以上系统)
:::


![](./TrollStore-misaka-18.png)


打开 misaka - 软件包 - 左下角图标 - `Install TrollStore`

![](./TrollStore-misaka-19.png)

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


![](./TrollStore-misaka-20.png)


成功后会自动注销，重新进入桌面打开 `Books`




:::: details 疑问3：books等打不开，闪退
这个就麻烦一点了，看步骤

下载：https://github.com/opa334/TrollStore/releases

![](./TrollStore-misaka-21.png)

打开 misaka 文件管理 - var - containers

![](./TrollStore-misaka-22.png)

Bundle - Application

![](./TrollStore-misaka-23.png)

com.apple.iBooks - Books.app

::: tip 说明
如果你选的是tips，那么就找 `com.apple.tips`

home，那么就找 `com.apple.Home`
:::

![](./TrollStore-misaka-24.png)

找到 `books`，再点 `Flie Overwrite`

![](./TrollStore-misaka-25.png)

选择我们刚才下好的文件 [PersistenceHelper_Embedded](https://github.com/opa334/TrollStore/releases/download/2.0.8/PersistenceHelper_Embedded)，这样就覆盖重写完成了，再次打开books即可

::: tip 说明
safari下载的文件路径：icloud云盘-下载
:::

![](./TrollStore-misaka-26.png)


::::






点 `Install TrollStore` 安装巨魔，桌面有图标就是了

![](./TrollStore-misaka-27.png)


自动安装好了 `Idid` ，灰色状态就是已经安装成功了

安装持久性助手，点击 `Install Persistence Helper`，选择除 `Tips` 以外的

::: danger 特别注意
因为安装器是Tips，如果持久性助手也选Tips，有可能会白苹果，就开不了机了
:::

如果非要选的Tips，请先卸载重装 [提示](https://apps.apple.com/cn/app/id1069509450)，再来选择 Tips 为持久性助手即可

![](./TrollStore-misaka-28.png)


如果有天巨魔打不开，可以通过持久性助手可让巨魔恢复正常使用

::: tip 另外
有了持久性助手，TrollInstallerMDC 可以直接卸载了
:::

![](./TrollStore-misaka-29.png)




## 4.界面介绍


![](./TrollStore-01.png)

::: warning 注意
用巨魔安装的应用，只能在巨魔的APP界面，左滑卸载
:::


## 5.使用

软件众多，可以到 [更多工具](#_6-更多工具) 中查找，就以 `虚拟定位` 演示

下载：[https://www.mediafire.com/file/qwdgdnvek84xb83/](https://www.mediafire.com/file/qwdgdnvek84xb83/虚拟定位_1.3.7_授权版.ipa/file)

打开链接，先下载授权的版本

![](./TrollStore-02.png)

下载完成后，点击查看，点击文件

![](./TrollStore-03.png)

右上角分享，用巨魔 `TrollStore` 打开安装即可

![](./TrollStore-04.png)

然后同样的方法，覆盖安装破解的可搜索的v1.4.1版本即可

[https://www.mediafire.com/file/0pfhnyv3twnw3f6/](https://www.mediafire.com/file/0pfhnyv3twnw3f6/%E8%99%9A%E6%8B%9F%E5%AE%9A%E4%BD%8D_1.4.1.ipa/file)

![](./TrollStore-05.png)




## 6.更多工具



### 聚合类

* [CyPwnStore：破解应用商店](https://ipa.cypwn.xyz/) | [@Coolstars](https://twitter.com/CStar_OW) 丨[APP下载](https://www.123pan.com/s/3LWcVv-N7zrh.html)

* [Decrypt：在线砸壳商店](https://decrypt.day/)

* [IPA图书馆](https://zappfree.com/ipa-library/)

* [IPA商店](https://ipa.store/game)

* [凸游CLUB](https://toyou.club/)

* [冷冷雨·付费·应用破解·SuperVIP8.1-33](https://www.123pan.com/s/3LWcVv-auLrh.html)



### 工具类

* <span style="border-bottom:2px dashed yellow;">[轻松签：多开软件必备，可添加移除插件 | @esign](https://esign.yyyue.xyz/)</span>

* [PostBox：插件下载工具，国区上架PostBox Pocket | @PostBoxTeam](https://www.postbox.news/downloads)

* [TrollTools：巨魔多功能应用合集丨 @sourcelocation](https://github.com/sourcelocation/TrollTools/releases)

---
* [LocSim：虚拟定位破解版 | @Mika](https://www.123pan.com/s/3LWcVv-X7zrh.html)

* [TrollSpeed：实时网速浮窗工具](https://www.123pan.com/s/3LWcVv-K7zrh.html)

* [SecondHand：状态栏显示实时秒数 | @leminlimez](https://github.com/leminlimez/SecondHand/releases)

---

* [AppsDump2：巨魔非全权限砸壳](https://www.123pan.com/s/3LWcVv-JuLrh.html)

* [TrollDecrypt：巨魔非全权限砸壳](https://github.com/donato-fiore/TrollDecrypt/releases)

* [TrollDecryptor：巨魔非全权限砸壳，需要配合 CocoaTop 查看APPP的PID进程](https://github.com/wh1te4ever/TrollDecryptor/releases)


---

* [Apps Manager：用于备份还原 丨@TIGI Software](https://www.tigisoftware.com/default/?p=435) 丨 [破解版v1.8.3](https://www.123pan.com/s/3LWcVv-KuLrh.html)

* [Filza：文件管理器 丨@TIGI Software](https://www.tigisoftware.com/default/?p=439) 丨 [@巨魔e族破解v4.0_刀刀汉化版](https://www.mediafire.com/file/jwcsx875fmz9kep/Filza_4.0_巨魔e族_Dao.ipa/file)

* [AppStore++：App随意升降级 丨 @CokePokes](https://github.com/CokePokes/AppStorePlus-TrollStore/releases) 丨 [越狱源](https://cokepokes.github.io/)

* [DowngradeApp：无广告 App随意升降级 | @Netskao](https://www.123pan.com/s/3LWcVv-zSLrh.html)

* [NetWorkManager：网络状态管理工具 | @Netskao](https://www.123pan.com/s/3LWcVv-YuLrh.html)

* [RingTonesManager：铃声管理器 | @Netskao](https://www.123pan.com/s/3LWcVv-GuLrh.html)

* [IpaDownloadTool：IPA下载器 | @SmileZXLee](https://github.com/SmileZXLee/IpaDownloadTool/)

* [NetworkController：国行苹果设备网络控制，输入Bundle ID点SET即可 丨 @Halo-Michael](https://github.com/Halo-Michael/NetworkController-app)

---

* [电话助手：T9拨号 来电归属 | @xybp888](https://www.htv123.com/) 丨 [IOS16版](http://www.htv123.com/down/CallAssist_TrollStore16.ipa) 丨 [IOS15版](http://www.htv123.com/down/CallAssist_TrollStore.ipa)

* [AirTroller：强制隔空投送ipa 丨@sourcelocation](https://github.com/sourcelocation/AirTroller/releases)

* [DebToIPA：deb文件转IPA | @sourcelocation](https://github.com/sourcelocation/DebToIPA/releases)

---

* [Jaility：开启/解除监督状态/角标/锁屏密码空白 | @haxi0](https://github.com/haxi0/Jaility/releases)

* [Supervise：开启/解除监督状态](https://www.123pan.com/s/3LWcVv-R7zrh.html)

* [CocoaTop：进程查看工具 | @Domo](https://www.123pan.com/s/3LWcVv-D7zrh.html)

* [CAPerfHUD：显示手机性能的工具](https://github.com/khanhduytran0/CAPerfHUD/releases/tag/0.0.1)

* [NiceBattery：电池助手,查看电池详细数据的工具 | @NiceiOS](https://www.niceios.com/download.php)

* [H5GG：游戏修改器工具，仅限IOS 15.0-15.1.1 | @H5GG](https://github.com/H5GG/H5GG)丨 [H5GG画中画版](https://www.123pan.com/s/3LWcVv-IuLrh.html)

* [iM 修改器：数据修改器](https://www.123pan.com/s/3LWcVv-r7zrh.html)

* [Legizmo：低版系统配对高版本watchOS 系统 | @lunotecth11](https://www.123pan.com/s/3LWcVv-87zrh.html)

* [TrollNonce：固定G值 | @opa334](https://github.com/opa334/TrollNonce/releases)

* [u0Launcher：修复了unc0ver越狱过程的错误 | @opa334](https://github.com/opa334/u0Launcher/releases)

* [mobileTSS：保存/下载 SHSH2 | @lucaIz-ldx](https://github.com/lucaIz-ldx/MobileTSS/releases)

* [TSSSaver：SHSH2备份工具](https://www.123pan.com/s/3LWcVv-07zrh.html) | [在线SHSH备份](https://tsssaver.1conan.com/v2/)


### 美化类

* [StatusMagic：魔法状态栏 丨 @Avangelista](https://github.com/Avangelista/StatusMagic)

* [BatteryInfo：查看电池健康状态 | @xybp888](http://www.htv123.com/down/BatteryInfo_1.0.7.ipa)

* [Mugunghwa木槿花：真主题/角标/全面屏手势 | @s8ngyu](https://github.com/s8ngyu/Mugunghwa/releases)

* [red-dot：自定义角标颜色 | @s8ngyu](https://github.com/s8ngyu/red-dot/releases)

* [TrollTools：真假主题/角标/全屏手势/锁屏图案等 丨 @sourcelocation](https://github.com/sourcelocation/TrollTools/releases)

* [BlizzardBoard：主题美化 但书签形式 | @BenjaminHornbeck6](https://github.com/BenjaminHornbeck6/BlizzardBoard)

* [WallpaperSetter：自定义浅色/深色模式的墙纸](https://www.123pan.com/s/3LWcVv-U7zrh.html)

* [ResolutionSetter：修改分辨率的工具 | @Halo-Michael](https://github.com/Halo-Michael/Resolution-Setter-app/releases)丨 [苹果官网分辨率查看](https://www.apple.com.cn/iphone/compare/)

* [ResolutionSetterSwift：修改分辨率的工具、内置参考分辨率 | @haoict](https://github.com/haoict/haoict.github.io/tree/master/cydia/ipa/ResolutionSetterSwift)


### 其他

* [Price Tag：App 价格监控的工具，查看每日限免](https://www.123pan.com/s/3LWcVv-S7zrh.html)

* [Zebra：软件包管理器；未越狱仅可查看 | @zbrateam](https://github.com/zbrateam/Zebra/releases)

* [Sileo：软件包管理器；未越狱仅可查看 | @Sileo](https://github.com/Sileo/Sileo/releases)

* [Saily：软件包管理器 | @SailyTeam](https://github.com/SailyTeam/Saily/releases)

* [OldOS：模拟 iOS 4 系统 | @zzanehip](https://github.com/zzanehip/The-OldOS-Project/releases)

* [uYou+：去除广告/下载视频/音频 | @qnblackcat](https://github.com/qnblackcat/uYouPlus/releases)

* [WiFiList：WiFi 密码查看器](https://www.123pan.com/s/3LWcVv-l7zrh.html)

* [WiFiScanner：WiFi 扫描工具](https://www.123pan.com/s/3LWcVv-77zrh.html)



## 7.使用拓展


### 更换图标

请先用巨魔安装好 [轻松签](https://esign.yyyue.xyz/)

然后下载最新版的官方包：https://github.com/opa334/TrollStore/releases

![](./TrollStore-06.png)

点下载，在点击下载好的包

![](./TrollStore-07.png)

长按 - 共享

![](./TrollStore-08.png)

选择 轻松签 ，然后点击 `TrollStore.tar` 解压2次

![](./TrollStore-09.png)

得到 `TrollStore.app` 文件夹，点击选择 `签名` - 更多设置

![](./TrollStore-10.png)

桌面图标，选一张你自己喜欢的，除了 `仅修改配置，不签名` 开关打开，其他全部关闭

![](./TrollStore-11.png)

![](./TrollStore-12.png)

签名好后不要安装，`退出` ，文件列表进入 `YYYAppFolder` 文件夹

![](./TrollStore-13.png)

在 `SignedApps` 找到 刚签好名的ipa，解压，进入 `Payload`

![](./TrollStore-14.png)

![](./TrollStore-15.png)

将解压后的 `TrollStore.app` 文件夹压缩成zip，然后点 `i` 重命名为 `TrollStore.tar`

![](./TrollStore-16.png)

然后分享给巨魔安装，自动注销后，就能看到图标已经变了

::: tip 说明
想改回来，去下载官方包分享给巨魔安装即可
:::

![](./TrollStore-17.png)


::: details 分享几个图片吧

![](./TrollStore-icon-01.png)

![](./TrollStore-icon-02.png)

![](./TrollStore-icon-03.png)

![](./TrollStore-icon-04.png)
:::



### 静音模块

开始前请用巨魔安装好 [Filza：文件管理器 丨@巨魔e族破解v4.0_刀刀汉化版](https://www.mediafire.com/file/jwcsx875fmz9kep/Filza_4.0_巨魔e族_Dao.ipa/file)

然后下载由 @赵楠 大佬提供的文件：https://www.123pan.com/s/3LWcVv-WULrh.html

![](./TrollStore-18.png)

下载 - 选择下好的文件

![](./TrollStore-19.png)

右上分享 - 用 `Filza` 打开

![](./TrollStore-20.png)

进入了Filza的 `/var/mobile/Documents` 目录，长按导入的文件 `复制`

![](./TrollStore-21.png)

左上返回找到目录 `/var/Managed Preferences/mobile`

![](./TrollStore-22.png)

在此处左下角粘贴刚复制的文件

![](./TrollStore-23.png)

在目录后，打开巨魔注销一下就可以了

![](./TrollStore-24.png)

我们下拉控制中心就能看到了

::: tip 说明
文件是从iPad提取出来，只是手机上屏蔽了，我们通过文件恢复了，100%安全
:::

![](./TrollStore-25.png)






## 8.常见问题

---

#### 8.1 安装失败，不显示图标


打开 TrollStore - Settings - 点击 `Rebuild Icon Cache` 等待重启，未重启的话，点击 `Respring` 即可


#### 8.2 可以安装其他应用吗

可以，以上只是一些工具，可以安装一些破解版APP，例如：Youtube破解版



#### 8.3 可以多开微信等应用吗

不可以，巨魔仅具有免签安装，不能实现多开

不过可以通过巨魔，安装轻松签等签名工具，就可以修改Bundle ID来多开了








