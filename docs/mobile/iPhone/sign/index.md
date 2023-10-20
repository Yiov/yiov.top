# iPhone签名工具

::: warning 更新时间
最近更新：2023-10-14
:::

## 简介

苹果不允许安装，除商店上架以外的应用

我们可以用 `证书+签名工具` 或 `免签工具` 安装，比如破解的ipa包


| 签名工具 | 电脑/手机 | 签名形式 | 是否收费 |
|:-:|:-:|:-:|:-:|
| [⭐巨魔助手](#巨魔助手) | 手机 | 绕过签名(永久) | 免费 |
| [⭐轻松签+](#轻松签) | 手机 | 绕过签名(永久) | 免费 |
| |
| [⭐牛蛙助手](#牛蛙助手) | (仅首次需要电脑) 手机 | 个人Apple ID(7天) / 可导入购买的企业证书 | 免费 |
| [NB助手](https://nbtool8.com/) | (仅首次需要电脑) 手机 | 个人Apple ID(7天) / 可导入购买的企业证书 | 免费 |
| [⭐Sideloadly](#sideloadly) | 电脑 | 个人Apple ID(7天) | 免费 |
| [爱思助手](https://www.i4.cn/) | 电脑 | 个人Apple ID(7天) | 免费 |
| [AltStore](https://altstore.io/) | 电脑 | 个人Apple ID(7天) | 免费  |
| [SideStore](https://sidestore.io/) | (仅首次需要电脑) 手机 | 个人Apple ID(7天) | 免费 |
| [Scarlet·猩红](http://usescarlet.com/) | 手机 | 自带免费企业证书(不推荐) | 免费 |
| |
| [轻松签](https://esign.yyyue.xyz/) | 手机 | 企业证书 | 收费 |
| [全能签](https://udid.nuosike.cn/sign/) | 手机 | 企业证书 | 收费 |
| [喵喵签](https://sign.mmqqq.com/) | 手机 | 企业证书 | 收费 |
| [Gbox](https://gbox.run/) | 手机 | 企业证书 | 收费 |
| [山猪签](https://www.shanzhuqian.com/) | 手机 | 企业证书 | 收费 |
| [签名之家](https://www.signhome.net/) | 手机 | 企业证书 | 收费 |




## 巨魔助手



### 1.简介

全称 `TrollStore` ，中文名 `巨魔助手`，是一个绕过签名安装ipa的工具

苹果系统的封闭性，未上架App Store的应用不可下载安装，必须给ipa软件签名才可安装

自签工具个人ID只能签3个，签名证书又要花钱买，而巨魔直接永久免签，yyds！

::: tip 事件进展
* [@Linus Henze](https://twitter.com/LinusHenze) 向苹果官方递交了漏洞 `CVE-2022-26766` / `CVE-2022-26763`

* 2022/7/2 大神 [@Zhouwei Zhang](https://twitter.com/Zhouwei) 公开了利用此漏洞绕过签名的方法

* 2022/9/3 大神 [@opa334](https://twitter.com/opa334dev) 利用此漏洞开发了 `TrollStore` ，手机端永久签名工具

* 2022/10/6 [@Linus Henze](https://twitter.com/LinusHenze) 在OBTS会议上公开了 `Fugu15` 的全新越狱方式，[@opa334](https://twitter.com/opa334dev) 也通过他的帮助发布了全新的`TrollStore`工具
:::



### 2.适用范围

根据 [opa334的文档](https://github.com/opa334/TrollStore/) 表格查看是否符合，或者参照我的手机型号说明

| 系统/iPhone | 6-8系列 / SE / X (A8-A11) | 11-14系列 / XR / XS / SE 2-3 (A12-A15) | 14 Pro系列 / 15系列(A16) |
| :-: | :-: | :-: | :-: |
| 14.0-14.8.1 | checkra1n越狱 | :heart:[troll arm64e](https://api.jailbreaks.app/troll64e) | ✘ |
| 15.0-15.4.1 | :green_heart:[troll IOS 15+](https://api.jailbreaks.app/troll) | :green_heart:[troll IOS 15+](https://api.jailbreaks.app/troll) | ✘ |
| 15.5及以上 | ✘ | ✘ | ✘ |

::: danger 2023/10/2喜讯：关于 巨魔2
[@opa334](https://twitter.com/opa334dev) 表示新的 CoreTrust 漏洞 `cve-2023-41991` ，与绕过签名漏洞相同，未来可实现巨魔2

理论支持：`iOS15.5-16.6.1` 及 `iOS 17` 系统，iPhone 8(A11)及以上设备

在系统范围的，请勿更新！
:::



### 3.安装


请根据上面的表格，对照选择相应的安装方式


![](./TrollStore-01.png)



安装的是 `GTA Car Tracker` ，打开点安装 `Install Trollstore`，自动注销后，回到桌面就发现装完成了

::: tip 报错 Error
那你可能需要挂个梯子，翻墙才能安装

☛ [点我查看 科学上网工具及使用方法](../../../gfw/channel/)
:::


![](./TrollStore-02.png)



打开桌面蓝色的 `TrollStore` 工具，看一下Seeting 设置界面

![](./TrollStore-03.png)



点开 `settings 选项`，安装 `Install ldid` ，安装完成变成灰色

这样，我们的巨魔助手就安装完成了

![](./TrollStore-04.png)




### 4.使用

软件众多，可以拉到下方查找，就以 `虚拟定位` 演示

下载：[https://www.mediafire.com/file/0pfhnyv3twnw3f6/](https://www.mediafire.com/file/0pfhnyv3twnw3f6/虚拟定位_1.4.1.ipa/file)


打开链接，下载软件

![](./TrollStore-05.png)

下载完成后，点击查看

![](./TrollStore-06.png)

点击文件 - 分享

![](./TrollStore-07.png)

用巨魔 `TrollStore` 打开安装即可，桌面就有图标了

![](./TrollStore-08.png)




### 5.其他工具

---

#### 聚合类

* [CyPwnStore：破解应用商店](https://ipa.cypwn.xyz/) | @Coolstars 丨[APP下载](https://www.123pan.com/s/3LWcVv-N7zrh.html)

* [Decrypt：在线砸壳商店](https://decrypt.day/)

* [IPA图书馆](https://zappfree.com/ipa-library/)

* [IPA商店](https://ipa.store/game)

* [凸游CLUB](https://toyou.club/)



#### 工具类

* <span style="border-bottom:2px dashed yellow;">[轻松签+：具备巨魔同样功能！多开软件必备，可添加移除插件 | @esign](https://esign.yyyue.xyz/)</span>

* [PostBox：插件下载工具，国区上架PostBox Pocket | @PostBoxTeam](https://www.postbox.news/downloads)

* [Apps Manager：用于备份还原 丨@TIGI Software](https://www.tigisoftware.com/default/?p=435) 丨 [@巨魔e族破解版v1.7](https://www.123pan.com/s/3LWcVv-O7zrh.html)

* [Filza：文件管理器 丨@TIGI Software](https://www.tigisoftware.com/default/?p=439) 丨 [破解教程](../Filza/)

* [AppStore++：App随意升降级 丨 @CokePokes](https://github.com/CokePokes/AppStorePlus-TrollStore/releases) 丨 [越狱源](https://cokepokes.github.io/)

* [DowngradeApp：无广告 App随意升降级 | @Netskao](https://share.initnil.com/With_TorllStore/DowngradeApp)

* [NetWorkManager：网络状态管理工具 | @Netskao](https://share.initnil.com/With_TorllStore/NetWorkManager)

* [RingTonesManager：铃声管理器 | @Netskao](https://share.initnil.com/With_TorllStore/RingTonesManager)

* [IpaDownloadTool：IPA下载器 | @SmileZXLee](https://github.com/SmileZXLee/IpaDownloadTool/)

* [LocSim：虚拟定位破解版 | @Mika](https://www.123pan.com/s/3LWcVv-X7zrh.html)

* [TrollSpeed：实时网速浮窗工具](https://www.123pan.com/s/3LWcVv-K7zrh.html)

* [SecondHand：状态栏显示实时秒数 | @leminlimez](https://github.com/leminlimez/SecondHand/releases)


---

* [电话助手：T9拨号 来电归属 | @xybp888](https://www.htv123.com/down/CallAssist_TrollStore.ipa)

* [AirTroller：强制隔空投送ipa 丨@sourcelocation](https://github.com/sourcelocation/AirTroller/releases)

* [DebToIPA：deb文件转IPA | @sourcelocation](https://github.com/sourcelocation/DebToIPA/releases)

---

* [Jaility：开启/解除监督状态/角标/锁屏密码空白 | @haxi0](https://github.com/haxi0/Jaility/releases)

* [Supervise：开启/解除监督状态](https://www.123pan.com/s/3LWcVv-R7zrh.html)

* [NiceBattery：电池助手,查看电池详细数据的工具 | @NiceiOS](https://www.niceios.com/download.php)

* [CocoaTop：进程查看工具 | @Domo](https://www.123pan.com/s/3LWcVv-D7zrh.html)

* [H5GG：游戏修改器工具，仅限IOS 15.0-15.1.1 | @H5GG](https://github.com/H5GG/H5GG)

* [iM 修改器：数据修改器](https://www.123pan.com/s/3LWcVv-r7zrh.html)

* [Legizmo：低版系统配对高版本watchOS 系统 | @lunotecth11](https://www.123pan.com/s/3LWcVv-87zrh.html)

* [TrollNonce：固定G值 | @opa334](https://github.com/opa334/TrollNonce/releases)

* [u0Launcher：修复了unc0ver越狱过程的错误 | @opa334](https://github.com/opa334/u0Launcher/releases)

* [mobileTSS：保存/下载 SHSH2 | @lucaIz-ldx](https://github.com/lucaIz-ldx/MobileTSS/releases)

* [TSSSaver：SHSH2备份工具](https://www.123pan.com/s/3LWcVv-07zrh.html) | [在线SHSH备份](https://tsssaver.1conan.com/v2/)


#### 美化类

* [BatteryInfo：查看电池健康状态 | @xybp888](https://www.123pan.com/s/3LWcVv-u7zrh.html)

* [Mugunghwa木槿花：真主题/角标/全面屏手势 | @s8ngyu](https://github.com/s8ngyu/Mugunghwa/releases)

* [red-dot：自定义角标颜色 | @s8ngyu](https://github.com/s8ngyu/red-dot/releases)

* [TrollTools：真假主题/角标/全屏手势/锁屏图案等 丨 @sourcelocation](https://github.com/sourcelocation/TrollTools/releases)

* [BlizzardBoard：主题美化 但书签形式 | @BenjaminHornbeck6](https://github.com/BenjaminHornbeck6/BlizzardBoard)

* [WallpaperSetter：自定义浅色/深色模式的墙纸](https://www.123pan.com/s/3LWcVv-U7zrh.html)

* [ResolutionSetter：修改分辨率的工具 | @Halo-Michael](https://github.com/Halo-Michael/Resolution-Setter-app/releases)丨 [苹果官网分辨率查看](https://www.apple.com.cn/iphone/compare/)

* [ResolutionSetterSwift：修改分辨率的工具、内置参考分辨率 | @haoict](https://github.com/haoict/haoict.github.io/tree/master/cydia/ipa/ResolutionSetterSwift)


#### 其他

* [Price Tag：App 价格监控的工具，查看每日限免](https://www.123pan.com/s/3LWcVv-S7zrh.html)

* [Zebra：软件包管理器；未越狱仅可查看 | @zbrateam](https://github.com/zbrateam/Zebra/releases)

* [Sileo：软件包管理器；未越狱仅可查看 | @Sileo](https://github.com/Sileo/Sileo/releases)

* [Saily：软件包管理器 | @SailyTeam](https://github.com/SailyTeam/Saily/releases)

* [OldOS：模拟 iOS 4 系统 | @zzanehip](https://github.com/zzanehip/The-OldOS-Project/releases)

* [uYou+：去除广告/下载视频/音频 | @qnblackcat](https://github.com/qnblackcat/uYouPlus/releases)

* [WiFiList：WiFi 密码查看器](https://www.123pan.com/s/3LWcVv-l7zrh.html)

* [WiFiScanner：WiFi 扫描工具](https://www.123pan.com/s/3LWcVv-77zrh.html)



### 6.常见问题

---

#### 6.1 安装失败，不显示图标


打开 TrollStore - Settings - 点击 `Rebuild Icon Cache` 等待重启，未重启的话，点击 `Respring` 即可


#### 6.2 如何避免巨魔掉签

打开 TrollStore - Settings - 点击  `Helper Install As Standalone APP`，选择你要注入自带应用，选择`Tips`(提醒) 或者 其他，只要掉签，打开提醒App就能重新激活


#### 6.3 如何单独删除已安装应用

打开 TrollStore 应用，在Apps页面中，选中你要删除应用，左滑，点击删除


#### 6.4 如何卸载巨魔

打开 TrollStore - Settings - 点击 `Uninstall TrollStore` ，等待重启即可













## 轻松签+


### 1.简介

随着fugu15漏洞演示，巨魔也出了新的永久签，轻松签也紧跟步伐推送了轻松签+

比巨魔好在可以注入、移除插件以及修改bundle id



### 2.适用范围


| 系统/iPhone | 6-8系列 / SE / X (A8-A11) | 11-14系列 / XR / XS / SE 2-3 (A12-A15) | 14 Pro系列 / 15系列(A16) |
| :-: | :-: | :-: | :-: |
| 14.0-14.8.1 | ✘| :heart:[A12+](https://esign.yyyue.xyz/yyy/api/esignapp/arm64e/install) | ✘ |
| 15.0-15.4.1 | :green_heart:[iOS15+](https://esign.yyyue.xyz/yyy/api/esignapp//arm64/install) | :green_heart:[iOS15+](https://esign.yyyue.xyz/yyy/api/esignapp//arm64/install) | ✘ |
| 15.5及以上 | ✘ | ✘ | ✘ |



### 3.安装


::: details 若直装Esign+无网络，再来看此步骤
需要苹果国外ID登录应用商店，搜：`jetsign`  下载安装后打开


![](./esign-01.png)

打开app，允许 `无限局域网与蜂窝网络` ，然后我们直接卸载

> 因为我们只需要把这个权限打开即可


![](./esign-02.png)
:::



轻松签官网：[https://esign.yyyue.xyz/](https://esign.yyyue.xyz/)

::: tip 说明
根据自己的系统，选择安装方式
:::

![](./esign-03.png)

点击安装，桌面会出现一个 `jetsign`，进入点安装 `Esign+`

::: tip 说明
如果无法成功安装Esign+，可尝试挂一个梯子 或者 展开查看第一步收缩的内容
:::

![](./esign-04.png)


打开轻松签+，允许 `无限局域网与蜂窝网络` ，就可以使用了

![](./esign-05.png)






### 4.使用


以 `微信` 为例，下载好后点击，用 `轻松签+` 打开即可

::: tip 说明
微信砸壳ipa：[https://github.com/Netskao/iOS-DumpDecrypted-IPAs](https://github.com/Netskao/iOS-DumpDecrypted-IPAs)

默认下载位置：文件 - `icloud云盘` 或 `我的iPhone` 里
:::

![](./esign-06.png)

打开轻松签+，文件 - 点击刚下载的ipa文件 - `导入应用库`

点击应用界面未签名的ipa应用，`签名`

![](./esign-07.png)

简单看一下界面，都是字面意思

![](./esign-08.png)


多开就要改一下 `名字` 和 `Bundle ID`

![](./esign-09.png)


点更改图标和注入插件的，就点更多设置

![](./esign-10.png)

我们这里有一个14合一的安装包，我们看一下，也是常用的插件

::: tip 说明
可自行移除或注入其他插件，建议直接使用别人弄好的，自己不懂不要乱弄
:::

![](./esign-11.png)

都弄好了，就可以签名了

::: tip 建议开启
移除应用跳转：不然分享会跳转到小号

文件访问：方便传图
:::

![](./esign-12.png)


签好名后，直接点 `永久安装` 即可

::: warning 注意
不满意可以重新签名安装，Bundle ID一致可以直接覆盖
:::

![](./esign-13.png)





### 5.插件提取


我这里已 `抖音` 为例


:::: details 5.1 已安装应用 提取插件

点击轻松签已安装的应用，提取库-选择要提取的插件

::: tip 说明
最新版有此功能，记住插件都 `*.dylib` 的后缀名，其他的是系统的不要动，否则闪退
:::

![](./esign-14.png)

::::





:::: details 5.2 未安装应用 提取插件

我们先下载好IPA文件，导入轻松签，解压，完成后有生成一个 `Payload` 的文件夹

![](./esign-15.png)


进入文件夹-点击文件夹-查看文件，跳转到Filza文件目录，其中 `Frameworks` 就是插件目录

![](./esign-16.png)

这里除了dylib插件，其他都是系统的不要动，复制出来即可

![](./esign-17.png)


::::





### 6.插件注入



打开轻松签，点击IPA文件-导入应用库

![](./esign-18.png)


应用-签名-更多设置

::: tip 说明
如果要多开需要改应用名和Bundle ID，后面加字就行，不改就是官替会覆盖原版
:::

![](./esign-19.png)


添加第三方库-选择准备好的插件`Awemepure.dylib`

::: tip 说明
导入其他插件就按名字找
:::

![](./esign-20.png)


开启文件访问-立即签名，安装就不赘述了

![](./esign-21.png)


下载的视频，也是无水印的，其他功能自行探索吧


![](./esign-22.png)

















## 牛蛙助手


### 1.简介
牛蛙助手的2个核心功能

* 虚拟定位：仅限连wifi/热点使用

* IPA签名：可下载/可导入



### 2.安装


牛蛙助手官网：[https://www.ios222.com/](https://www.ios222.com/)

![](./bullfrog-01.png)


下载打开安装，安装完成有提示


![](./bullfrog-02.png)

![](./bullfrog-03.png)


打开手机桌面的牛蛙助手，获取UDID

![](./bullfrog-04.png)


跳转到网页安装描述文件，设置-通用-VPN与设备与管理-安装

![](./bullfrog-05.png)


安装成功后，再次打开牛蛙助手即可进入界面

![](./bullfrog-06.png)



### 3.虚拟定位


点击虚拟定位，默认用蓝奏的镜像，这里提示`镜像挂载失败`

![](./bullfrog-07.png)


设置-通用-VPN与设备与管理-VPN，选择牛蛙助手，开关打开

再次回到APP，已经可以用了，权限给`使用App时允许`


![](./bullfrog-08.png)


先搜索一个自己要定位的地名，比如：东方明珠，点一下这个标记，然后点锁定即可

![](./bullfrog-09.png)


锁定成功，打开微信定位就可以看到，已经成功了

![](./bullfrog-10.png)


不使用了一定要解锁，否则就回不来了！！！

![](./bullfrog-11.png)




### 4.IPA签名



点击IPA签名，右下证书-右上个人证书

::: tip 说明
个人证书有效期7天，企业证书要花钱买
:::

![](./bullfrog-12.png)

输入你的Apple ID和密码，认证成功即可生成个人证书

![](./bullfrog-13.png)

准备一个IPA包，我这里用 [IPA下载器](https://github.com/SmileZXLee/IpaDownloadTool) 演示

应用-网页/链接/导入均可，我由于手机里有就直接导入了

![](./bullfrog-14.png)

导入成功后，签名

![](./bullfrog-15.png)


立即签名，完成后，安装

::: tip 说明
如果要多开，修改下Bundle ID

只要官方的不一致就行
:::

![](./bullfrog-16.png)


等待安装完成即可

![](./bullfrog-17.png)


这样就安装完一个应用了，其他依次类推

::: warning 注意
自签只有7天，失效后请重新签名安装，不要删除应用包
:::












## Sideloadly

### 1.简介

优点：免越狱且免费，支持 Windows 和 macOS

缺点：需手机连接电脑操作，且一个Apple ID只能签名3个应用


### 2.安装


官网：[https://sideloadly.io/](https://sideloadly.io/)

点击 `Download` ， 这里根据自己电脑系统下载

![](./Sideloadly-01.png)

我的电脑-右键属性-系统类型显示的有 `32` 或者 `64` 位

![](./Sideloadly-02.png)


下载完成后，双击安装，不装C盘就行，安装就不用说了吧

![](./Sideloadly-03.png)


安装完成后，双击打开

![](./Sideloadly-04.png)




### 3.签名


我在 [@SmileZXLee](https://github.com/SmileZXLee/IpaDownloadTool) 下了个 [ipa下载器](http://www.zxlee.cn/ipaDownloadTool/release/ipaDownloadTool-2.1.1.ipa) 的软件包，用来签名安装演示，其他安装同理

把ipa包拖入，然后看一下界面

![](./Sideloadly-05.png)


手机连接数据线插入电脑，我们输入Apple ID账号后，点 `start` 开始

会要输入苹果ID密码，有开验证的还要输入验证码

::: tip 说明
提示 Login failed 就是登录失败，反复试，我试了20好几次才成功

这是唯一的难点，可以试试挂梯子会不会好点
:::

![](./Sideloadly-06.png)

等到提示 `complete `完成即可，应用已经签名并安装好了

![](./Sideloadly-07.png)


我们打开app，提示需要信任证书

![](./Sideloadly-08.png)


设置-通用-VPN与设备管理-显示自己的苹果ID处-信任

![](./Sideloadly-09.png)

再次打开APP即可使用

::: tip 说明
注：7天后需要重新签哦
:::

![](./Sideloadly-10.png)


最后的最后，了解一下高级选项的功能


![](./Sideloadly-11.png)





### 4.常见问题


#### 4.1 设备信息没显示

手机未信任电脑，重新拔插手机信任；实在搞不定用爱思助手连接好了，再打开此软件



#### 4.2 苹果账号是手机号

在账号前加86，如手机为13300008888，则账号为：`8613300008888`



#### 4.3 输入密码闪退

可以尝试打开 `Advanced options` 高级选项 - 身份验证 改为远程 `Remote`



#### 4.4 未收到手机验证码

可以尝试手机 - 设置 - Apple ID - 密码与安全性 - 获取验证码



