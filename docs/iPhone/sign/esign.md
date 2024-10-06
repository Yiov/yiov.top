---
prev: false
next: false
---

# 轻松签安装及使用




## 简介

轻松签原本只是签名工具，可插件注入/移除、修改bundle id多开应用等

后来集成了 [巨魔](./TrollStore.md) 的免签功能，推出了 `轻松签+`

::: tip 区别
* 轻松签：需要证书，证书到期，应用掉签，本质就是签名工具

* 轻松签+：免签，无需证书，应用永不掉签，本质 `轻松签+` = `轻松签+巨魔`
:::

官网：https://esign.yyyue.xyz/

![](/esign/esign-01.png)


## 适用范围


能装轻松签+，绝不装轻松签

* 轻松签+（与巨魔一致）：

| 系统/iPhone | 6-8系列 / SE / X (A8-A11) | XR / XS / 11-15系列 / SE 2-3 (A12-A16) |
| :-: | :-: | :-: |
| 14.0 - 14.8.1 | [轻松签(普通)](#安装) | :heart:[A12+（巨魔1代）](#安装) |
| 15.0 - 15.4.1 | :green_heart:[IOS15+（巨魔1代）](#安装) | :heart:[A12+（巨魔1代）](#安装) |
| 15.5 - 16.6.1 | :yellow_heart:[轻松签+安装器（巨魔2代）](#安装) | :yellow_heart:[轻松签+安装器（巨魔2代）](#安装) |
| 16.7及以上 | [轻松签(普通)](#安装) | [轻松签(普通)](#安装) |



## 安装


:::: details 轻松签 （普通）安装方式

由于轻松签本身也需要签名后才能安装，那就需要证书

虽然用 `巨魔`，可以免签安装，那为什么不直接安装 `轻松签+` 呢

所以，以下安装步骤仅供演示，无实际参考价值

---

在 [轻松签官网](https://esign.yyyue.xyz/) 下载ipa

![](/esign/esign-02.png)

下载 - 点击下载好的文件

![](/esign/esign-03.png)

右上角分享 - 用 `巨魔` 打开安装

![](/esign/esign-04.png)

安装成功后，桌面就有图标了

![](/esign/esign-05.png)

进入轻松签

![](/esign/esign-06.png)

::::





:::: details 轻松签+（巨魔1代）安装方式

::: details 若直装Esign+无网络，再来看此步骤
需要苹果国外ID登录应用商店，搜：`jetsign`  下载安装后打开


![](/esign/esign-07.png)

打开app，允许 `无限局域网与蜂窝网络` ，然后我们直接卸载

> 因为我们只需要把这个权限打开即可


![](/esign/esign-08.png)
:::

根据 [官网](https://esign.yyyue.xyz/) 的 表格 ，选择对应的安装方式

::: tip 注意
IOS 16及以上的手机不支持，官网还没有更新

以我列出的 [轻松签+适用范围](#适用范围) 表为准
:::

![](/esign/esign-09.png)

点击安装，桌面会出现一个 `jetsign`，进入点安装 `Esign+`

::: tip 说明
如果无法成功安装Esign+，可尝试 [科学上网](../../gfw/proxy) 挂一个梯子
:::

![](/esign/esign-10.png)


打开轻松签+，允许 `无限局域网与蜂窝网络` ，就可以使用了

![](/esign/esign-11.png)

::::






:::: details 👍 轻松签+（巨魔2代）安装方式

开始安装前，确保巨魔已释放持久性助手，是蓝色状态才行

![](/esign/esign-201.png)

在 [轻松签官网](https://esign.yyyue.xyz/) 下载 `轻松签+安装器`

![](/esign/esign-202.png)

下载 - 点击刚下载好的文件

![](/esign/esign-203.png)

分享 - 巨魔打开

![](/esign/esign-204.png)

安装，桌面就有此APP了

![](/esign/esign-205.png)

软件自动获取手机漏洞方式，当前演示的是MDC，单击底部获取权限，点击 `好`

::: tip KFD漏洞方式
相抵MDC，成功率低一点，失败后手机会重启，请再试一遍
:::

![](/esign/esign-206.png)

写入提示，提示修改成功，注销

![](/esign/esign-207.png)

::: details 提示：修改失败？
多次尝试后，依旧无法安装

请参考，[轻松签+ 安装不上的解决办法 (前提：有巨魔)](#安装)
:::

再次打开 提示 App，就注入成功了，安装轻松签

::: details 提示打不开，闪退
重启手机，再试一次，或者多次尝试写入
:::

![](/esign/esign-208.png)

提示安装成功即可，桌面已经有了

![](/esign/esign-209.png)

你也可以在轻松签+ - 永久安装配置中，安装持久性助手和更新

::: tip 建议
持久性助手不要选择tips，以免和巨魔同样造成冲突白苹果了
:::

![](/esign/esign-210.png)

最后，卸载提示和安装器App即可

::: details 巨魔如何恢复使用提示为持久性助手
重新下载安装 [提示app](https://apps.apple.com/cn/app/id1069509450) 后，去巨魔里选择 `Tips` 即可
:::

![](/esign/esign-211.png)


::::



:::: details 解决：轻松签+ 安装不上 (前提：有巨魔)

那我们只能通过安装轻松签+本体，然后修改权限即可

下载 轻松签+_5.0：https://www.mediafire.com/file/hu43y55914bmtwx/

::: tip 说明
以上的版本好像不能改了，可以安装5.0版本后自行升级
:::

![](/esign/esign-212.png)

下载 - 点击 `轻松签+_5.0`

![](/esign/esign-213.png)

分享到巨魔安装

![](/esign/esign-214.png)

安装好了，先别急着打开

同样的方式安装Filza文件管理器：[https://www.mediafire.com/file/jwcsx875fmz9kep/](https://www.mediafire.com/file/jwcsx875fmz9kep/Filza_4.0_巨魔e族_Dao.ipa/file)

![](/esign/esign-215.png)

进入 `Filza` 目录 `/var`

![](/esign/esign-216.png)

`Bundle` - `Application`

![](/esign/esign-217.png)

`轻松签+` - `ESign.app`

![](/esign/esign-218.png)

`esignhelper` 右边的 `!` ，所有者 `root`


![](/esign/esign-219.png)

将 `用户` 和 `组` 都改成 `0`，存储
![](/esign/esign-220.png)


返回桌面打开 轻松签+ 即可使用

::: tip 如何更新
进入 轻松签+ - 设置 - 永久安装配置，顶部更新

最新版无需更新
:::


![](/esign/esign-221.png)

::::










## 使用


:::: details 轻松签证书(必看) (轻松签+用户请无视)

我们还需要一个过期的签名证书

下载：https://www.mediafire.com/file/l5v551bfb0qeeuj/

::: tip 说明
没有证书，会无法签名，所以过期的也行
:::

![](/esign/esign-12.png)

下载好后，我们点击进入iCloud云盘

![](/esign/esign-13.png)

长按压缩包，共享

![](/esign/esign-14.png)

用轻松签打开

![](/esign/esign-15.png)

点击文件，直接解压，解压完后，进入文件夹

![](/esign/esign-16.png)

点击 `cert 2.p 12` 导入证书库，输入密码 `1`，在设置-证书管理可看到

![](/esign/esign-17.png)

![](/esign/esign-18.png)

::::


---



### 多开微信

> 其他应用多开也同理
>
> 目前已知：京东、淘宝、抖音无法多开，安装后无网络


点击下载 [砸壳的微信ipa包](https://github.com/Yiov/wechat-dump/releases/tag/dump)，演示的版本是 `8.0.44`


::: tip 科普
这里的dump就表示砸壳，就是提取应用的ipa安装包

苹果对安装包进行了加密，犹如外壳一样，砸壳的过程就是解密脱壳
:::

![](/esign/wechat/wechat-01.png)

下载 - 点击下载好的文件

![](/esign/wechat/wechat-02.png)

右上角分享 - 用 轻松签 打开

![](/esign/wechat/wechat-03.png)

点击微信文件，导入应用库

![](/esign/wechat/wechat-04.png)

选择微信 - 签名

![](/esign/wechat/wechat-05.png)

这里我们多开就修改下 `App名字` 和 `Bundle Identifier` 就好了

例如我在后面都加了个 `2`

::: tip 说明
Bundle ID就是 `应用程序标识符` ，也叫应用ID，也叫包名，独一无二就相当于人的身份证

我们通过修改应用ID，就变成了两个完全独立的App，可共存安装，也就是多开
:::

![](/esign/wechat/wechat-06.png)

点击 `更多设置` 根据自己需求也可以改一下图标

::: details 分享2个图片

![](/esign/icon/icon-01.png)

![](/esign/icon/icon-02.jpg)

:::

![](/esign/wechat/wechat-07.png)



然后下拉，建议打开 `移除应用跳转` 和 `开启文件访问` 开关，立即签名

::: tip 说明
移除应用跳转：可避免大号分享时跳转到分身上

开启文件访问：可访问本地文件及相册等
:::


::: details 轻松签 安装方式

![](/esign/wechat/wechat-08.png)

签名完成后，在 `已签名` 页卡中找到改好的微信，点击 `分享`

不要直接安装了，过期的证书签的名，装了也打不开

点分享！点分享！点分享！


![](/esign/wechat/wechat-09.png)


用巨魔打开安装

![](/esign/wechat/wechat-10.png)

:::





::: details 轻松签+ 安装方式

签名完成后，`轻松签+` 点击 `永久安装`，

![](/esign/wechat/wechat-11.png)

:::


安装完成后，打开应用登录账号即可


![](/esign/wechat/wechat-12.png)




::: details 疑问1：会封号吗
理论上来说，99.99%不会

本身就是原版未修改的ipa包，不存在封号一说

有插件的都未必封号，最多限制几小时登陆；修改过的微商版微信那肯定是会封
:::

::: details 疑问2：怎么卸载
卸载不能在桌面删，只能在 `已安装` 页卡，选中应用左滑即可卸载
:::

::: details 疑问3：再安装新版本微信聊天记录还在吗
只要签名的时候，应用ID和上次一样就可以直接覆盖安装，聊天记录都在
:::

::: details 官替 / 砸壳 / 多开 真的搞不懂
* 砸壳：提取官方应用的安装包

* 官替：和官方的应用ID一致，安装就会替换覆盖原版

* 多开：和官方的的应用ID不一致，可独立安装，就是分身

* 几合一：给安装包注入了插件，8合一就是注入了8个插件
:::


---






### 插件注入

需要先准备已砸壳好的应用和插件，本次以 `抖音` 为例

* 已砸壳应用：[抖音](https://decrypt.day/) 「或手动砸壳 [巨魔](./TrollStore.md#使用) / [越狱](../Jailbreak/checkra1n.md#砸壳dump)」

* 对应的插件：[抖音图层dyhook.deb](https://github.com/flyX099/repo/tree/main/debs/rootless) 「作者@X大佬的[TG群](https://t.me/DouYinHook) / [仓库](https://github.com/flyX099/repo/)」


::: tip 有根和无根的区别
对注入应用而言没有区别，仅是对越狱而言

有根即rootful，可以读写系统根文件，如：unc0ver 和 checkra1n 等越狱

无根即rootless，仅可读系统根文件，如 Dopamine 和 XinaA15 等越狱
:::


打开轻松签，分别倒入砸壳的IPA文件和插件

![](/esign/esign-19.png)


这样就都准备完毕了

::: details 插件要解压吗？
不用，注入的时候它会自动处理

插件的后缀是 `*.dylib` ，而 `*.deb` 是将其打包后的文件

:::

![](/esign/esign-20.png)


将抖音导入应用库，然后签名


![](/esign/esign-21.png)


更多设置 - 添加第三方库

![](/esign/esign-22.png)


选择下载好的插件，立即签名

![](/esign/esign-23.png)

::: details 轻松签 安装方式

返回已签名页卡，选择抖音 - 分享到巨魔安装

![](/esign/esign-24.png)

因为没有更改应用ID就是官替，巨魔提示存在相同应用，我们直接强制覆盖

![](/esign/esign-25.png)

:::


::: details 轻松签+ 安装方式

签完名，直接永久安装即可

![](/esign/esign-26.png)

:::

`双指双击屏幕` 打开插件设置，`单指双击屏幕` 下载无水印视频

![](/esign/esign-27.png)


前后视频对比

![](/esign/esign-28.png)


---







### 插件提取


确保ipa包是已经注入过插件的，我这里已 `抖音` 为例

在已安装的页面中点击抖音 `提取库` ，选择插件复制到

::: tip 这么多插件到底哪个是呢
插件都是以 `*.dylib` 后缀名结尾

`*.framework` 是系统文件不要动

`libsubstrate.dylib` 是默认插件不要动，否则闪退
:::


::: details 没有安装的应用 如何提取
将ipa包导入应用库，在 `未签名` 页卡也可以提取
:::


![](/esign/esign-29.png)


点击复制到当前目录即可


![](/esign/esign-30.png)


---





### 插件下载

输入越狱源下载，按需下载即可


<Linkcard url="https://github.com/Yiov/wechat-dump/releases/tag/deb" title="微信常用插件" description="按需下载" logo="https://pp.myapp.com/ma_icon/0/icon_10910_1711008413/256"/>

<Linkcard url="https://www.postbox.news/downloads" title="PostBox" description="插件下载工具" logo="https://www.postbox.news/assets/images/appIconSite.webp"/>


