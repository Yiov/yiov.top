# 微PE制作PE启动盘

::: warning 更新时间
最近更新：2022-11-12
:::


## 简介

PE启动盘有很多，除了微PE还有：[老毛桃](https://www.laomaotao.net/)、[优启通](https://www.upe.net/)

方法都大同小异，本次仅演示微PE的安装



安装参考教程：[https://www.wepe.com.cn/ubook/](https://www.wepe.com.cn/ubook/)


## 准备工作


* 新U盘一个(至少要8G)

* [驱动大师](https://dm.weishi.360.cn/home.html)「装驱动要用」

* [激活工具包](https://dzp.lanzouy.com/ifnOv0rvnqmf)


## 1.制作PE启动盘


进微PE官网：[https://www.wepe.com.cn/](https://www.wepe.com.cn/)

![](./wepe-01.png)


右上角 下载，选择合适的版本

::: tip 说明
看要重新系统的电脑，电脑 - 右键属性 - 系统类型，看是32还是64位

新机器用新的，老机器用老版
:::

![](./wepe-02.png)


打开下载好出程序，选择第一个 `安装PE到U盘`

![](./wepe-03.png)


安装方法默认方案1，插入准备好的U盘，立刻安装到U盘

::: warning 注意
安装会格式化U盘，请提前备份U盘内的资料，以免丢失

U盘格式是exFAT，对于非要装XP系统就改成FAT32，XP系统才能识别，否则不要改！现在还有人装XP??? 

exFAT是为了解决FAT32不支持4G以上文件推出，常见的NTFS系统有日志，不停的读写比较伤U盘
:::

![](./wepe-04.png)


开始制作，直到完成安装，这样我们的PE启动盘就做好了

![](./wepe-05.png)

![](./wepe-06.png)




## 2.下载系统镜像及工具


推荐 Itellyou 官网:[https://next.itellyou.cn](https://next.itellyou.cn)

::: tip 说明
原 老站点 MSDN ：https://msdn.itellyou.cn/
:::

![](./wepe-07.png)


注册登录即可，选择我们要下载的系统

> 我直接用百度等第三方账号授权登录

![](./wepe-08.png)


比如 win11 系统，这里有一些简单的信息预览

![](./wepe-09.png)


下拉一点，不知道下哪个版本的，就下`建议使用`，选ed2k用迅雷下载好

::: tip 科普
business_editions版，俗称VL版，包含：Education(教育版); Enterprise(企业版); Professional(专业版)

consumer_editions版，俗称零售版，版本包含：Home(家庭版); Education(教育版); Professional(专业版)

版本无使用区别，都可以，区别在包含的版本里
:::

![](./wepe-10.png)


下载完成后，我们在U盘新建一个文件夹ISO，专门来放系统镜像文件

::: tip 说明
8G一般也就能放两个
:::

![](./wepe-11.png)


由于下载的是原版纯净系统，是未激活的，我打包好了 `激活工具` 和 `驱动安装程序`

![](./wepe-12.png)


如果有帮到您，请一定支持一下 MSDN 的站长，为爱发电真的很棒！！







## 3.BIOS设置U盘启动


一说到BIOS设置就头疼，不要慌，开机的时候其实已经告诉你了


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




以我的组装机电脑为例，微星主板是按F11，重启电脑按 F11 键，进入界面后后松手

::: tip 说明
不用非得去BIOS里设置，设置完你还要去改回来，麻烦不说，还要去简单了解下BIOS菜单，这个方法就一次性的，重启就恢复了，简单省事
:::

![](./wepe-13.png)


弹窗了用上下键，优先选带UEFI前缀的U盘选项，没有就选不带的，回车

::: tip 说明
一般新机器都是UEFI模式，老机器都是Legacy模式
:::

![](./wepe-14.png)


Legacy和UEFI模式不一样，进入的界面也不一样，后面我再细说

::: tip 说明
菜单中不知道选哪个就默认，和操作系统无关，都可以用
:::

![](./wepe-15.png)

![](./wepe-16.png)


等它自动启动进入PE系统，就能看到桌面啦

::: warning 注意
如果反复都进不去，确保启动顺序没问题就是U盘坏掉了
:::

![](./wepe-17.png)





## 3.了解PE系统工具


想深入了解工具使用的可以看，不看也不影响系统安装，直接看 [步骤4](#_4-系统安装) 即可


::: details window密码修改器

NTPWED官网：[http://cdslow.org.ru/ntpwedit/](http://cdslow.org.ru/ntpwedit/)

无需自行下载，因为在当前window系统中无法更改，只能在PE系统中运行，而PE系统一般都内置安装了

使用比较简单，点打开输入密码就好了，适用于忘记密码

![](./wepe-18.png)
:::



:::: details dism++

Dism++官网：[https://github.com/Chuyu-Team/Dism-Multi-language/releases](https://github.com/Chuyu-Team/Dism-Multi-language/releases)

主要功能：系统垃圾清理/驱动注入

::: tip 说明
当然还可以重装系统/备份还原/清除开机密码/引导修复/等
:::

垃圾清理：空间回收

![](./wepe-19.png)


重装系统：工具箱- 系统还原 - 选择镜像，勾选格式化和引导，确定即可

![](./wepe-20.png)


驱动注入：驱动管理-添加驱动

根据主板品牌去官网找驱动即可，或者用 [英特尔公版USB 3.0 驱动](https://www.intel.cn/content/www/cn/zh/download/17344/22824/intel-usb-3-0-extensible-host-controller-driver-for-intel-8-9-100-series-and-intel-c220-c610-chipset-family.html?)

::: warning 注意
由于win7原版镜像没有USB 3.0 驱动，系统安装完成不要重启！

注入3.0驱动后再重启，否则会出现鼠标键盘不能用的情况；

win8以上系统集成了，不用安装，这就是为什么不推荐安装旧系统
:::

![](./wepe-21.png)


打补丁：更新管理- 添加 - 选择补丁，安装完成即可

::: tip 说明
如果电脑有 NVME 的固态盘，且还是固执的要装win7，那需要打2个补丁
:::

不然识别不了盘符，装机工具包里有的

![](./wepe-22.png)


其他功能就自行摸索吧，用的频率就不高了
::::





:::: details 微PE小助手 启动方式 [必看]


主要是用来查看当前启动的方式, `legacy` 和 `UEFI`

::: tip 说明
固定固定组合 `legacy+MBR` 和 `UEFI+GPT` 必须是一一对应

如果你的启动方式是`legacy` ，那你的硬盘分区就必须是`MBR`

如果你的启动方式是`UEFI` ，那你的硬盘分区就必须是`GPT`
:::

![](./wepe-23.png)


简单科普下插件的这些参数，分区助手也能看到

> 主要是老方式和新方式，推荐都用新的

* 启动方式：legacy / UEFI

* 硬盘分区：MBR / GPT

* 硬盘工作模式：IDE / AHCI

* 文件系统：FAT32 / NTFS (启动盘格式exFAT)


![](./wepe-24.png)

::::




:::: details 硬盘分区 新机器 [必看]

常见的硬盘组合：1个固态硬盘(装系统)+1个机械硬盘(装软件)，固态盘不分区，机械硬盘分区，固态盘启动飞快

::: tip 说明
如果是新安装的硬盘，一定要分区好了，再去装系统！
:::

这里我们的2个工具 `DiskGenius` 和 `分区助手`

::: tip 说明
都是国产的，就很棒

易数科技的DiskGenius：[https://www.diskgenius.cn/](https://www.diskgenius.cn/)

傲梅科技的分区助手：[https://www.disktool.cn/](https://www.disktool.cn/)
:::

![](./wepe-25.png)


两个工具使用上是一样的，DiskGenius更强大，分区助手界面更直观


点快速分区，根据系统选MBR和GPT，主分区就是window系统要安装的盘

::: tip 说明
分区自己定，要几个盘，C盘最好200-300G
:::

![](./wepe-26.png)

![](./wepe-27.png)


如果你的启动方式是 `UEFI` ，那么你需要把硬盘分区转换成 `GPT`

::: tip 说明
启动方式和分区是对应的就不用改
:::

![](./wepe-28.png)


转换成GPT硬盘 - 选择系统盘 - 提交 - 执行即可

![](./wepe-29.png)

![](./wepe-30.png)
::::





:::: details 备份还原

现在已经不太流行用 `Ghost备份还原` 了，常用的是 `CGI备份还原`

::: tip 说明
Ghost：只能还原第三方GHO，捆绑程序一大堆

CGI：除了还原第三方GHO，选择镜像文件，还可以直接还原官方原版系统
:::

![](./wepe-31.png)


CGI还原系统：选择系统盘，再选择U盘里的ISO镜像，执行即可

![](./wepe-32.png)
::::







## 4.系统安装


常见的重装方式就包含3种：CGI备份还原、Winntsetup、直装，我只说后两者，其他的前面也提到过了

::: tip 说明
新硬盘安装的，请先看 `硬盘分区`
:::

老硬盘的安装前我们先用 `DiskGenius` 或 `分区助手` 格式化一下系统盘

![](./wepe-33.png)


::: warning 注意
我们根据适用的系统程序，任选一种方式安装即可，不用都看
:::



:::: details 直装(原生安装 适用win8以上)

选择我们之前下载好的ISO镜像文件，右键 `装载` 或者 直接双击


![](./wepe-34.png)

这样我们的镜像文件就挂载到驱动器上了，我们直接点 `Setup.exe` 安装

![](./wepe-35.png)

![](./wepe-36.png)



window安装器打开了，下一步

![](./wepe-37.png)


这里我们选择 `我没有产品秘钥` ，安装好后我们用工具激活

::: tip 说明
除非你就是想花钱 →_→
:::

![](./wepe-38.png)


这里按需选择系统版本，下一步

::: tip 说明
企业版：功能最全，价格最贵；装机比较常见；主要受众 大企业

教育版：功能次之，价格较贵；主要受众 学校等教育机构

专业版：功能多，价格高；装机比较常见；主要受众 中小企业

家庭版：功能少，价格低；主要受众 普通家庭
:::

![](./wepe-39.png)

这里选择自定义，仅安装window

![](./wepe-40.png)


之前没有格式化，这里会有老系统残留出来百十来兆的小分区，直接把小分区连同系统大分区一起删除

::: tip 说明
例图中1和2是多出来的，3是系统分区
:::

![](./wepe-41.png)


一起删除后，形成一个未分配的空间，直接下一步

::: tip 说明
若这里提示选中的磁盘具有MBR分区表...只能安装到GPT磁盘中
:::
![](./wepe-42.png)


系统开始安装，自动重启后简单设置一下，即可进入桌面

![](./wepe-43.png)

![](./wepe-44.png)

![](./wepe-45.png)

![](./wepe-46.png)

::::



::::: details Windows安装器(WinNTSetup)

Winntsetup安装无系统的限制，XP系统选左侧，win7及以上选右侧

::: tip 说明
XP系统时真的老了，但是还没有被放弃
:::

![](./wepe-47.png)


:::: details XP系统安装 [点我查看,不装不要看！]

若无必要，不建议安装这么古老的系统，除非机器带不动

选择我们之前下载好的ISO镜像文件，右键 `装载` 或者 直接双击

![](./wepe-34.png)


安装位置选我们装载的驱动盘符，其他都默认，安装即可

**注意：XP系统没有USB3.0/win7没有NVME驱动，请装完系统先别重启！！先看 `dism++注入驱动` 再重启！！！**

::: tip 说明
老机器和没有固态盘的不用装，已经重启了就没办法再次注入了，只能重装
:::

![](./wepe-48.png)


熟悉的界面，启动画面和桌面，曾经王者回来了


![](./wepe-49.png)


![](./wepe-50.png)


![](./wepe-51.png)
::::



同样的安装前，我们先进U盘点击ISO镜像文件，右键 `装载` 或者 直接双击

![](./wepe-34.png)


选择挂载驱动器里的 `source` 目录下的的 `install.wim` 文件，选择安装版本，开始安装

::: tip 说明
企业版：功能最全，价格最贵；装机比较常见；主要受众 大企业

教育版：功能次之，价格较贵；主要受众 学校等教育机构

专业版：功能多，价格高；装机比较常见；主要受众 中小企业

家庭版：功能少，价格低；主要受众 普通家庭
:::

![](./wepe-52.png)

![](./wepe-53.png)

![](./wepe-54.png)

系统开始安装，自动重启后简单设置一下，即可进入桌面

![](./wepe-44.png)

![](./wepe-45.png)

![](./wepe-46.png)

:::::


## 5.驱动和激活


驱动和激活工具用我打包好的即可

![](./wepe-55.png)


如今的驱动不付费就限速，恶心啊，我用的是360旗下免费的

驱动大师：[https://dm.weishi.360.cn/home.html](https://dm.weishi.360.cn/home.html)

::: tip 说明
轻巧版需有网络在线安装；网卡版无需网络离线安装
:::

![](./wepe-56.png)


系统激活，我已经打包好了，win10+的用云萌就行

::: tip 说明
建议是提前下到U盘里，等系统安装完成，就直接激活
:::

云萌官网：[https://cmwtat.cloudmoe.com/cn.html](https://cmwtat.cloudmoe.com/cn.html)

![](./wepe-57.png)


使用就不说了，就是点点点的事情，非常简单，完结！

::: warning 注意
云萌仅数字权利激活，Office不可用，可以选择国产的WPS

要用Office可以选择KMS激活方式，但是180天后需重新激活

[激活工具包](https://dzp.lanzouy.com/ifnOv0rvnqmf)
:::

![](./wepe-58.png)






## 常见问题



#### 1.U盘如何恢复

复制下面的连接，下载 `rufus` 软件并打开

```
https://d-image.i4.cn/i4web/image/news/2020-07-16/fileTypeImages_1594880598242082789.zip
```

插入U盘-引导类型-选择 `FreeDOS` - 点击开始，直到完成




## 特别鸣谢



* [微PE官网](https://www.wepe.com.cn/)

* [Itellyou官网](https://next.itellyou.cn)「原MSDN」

* [DiskGenius](https://www.diskgenius.cn/)「易数科技」

* [分区助手](https://www.disktool.cn/)「傲梅科技」

* [驱动大师](https://dm.weishi.360.cn/home.html)「360免费」

* [云萌](https://cmwtat.cloudmoe.com/cn.html)「win10+激活工具」

