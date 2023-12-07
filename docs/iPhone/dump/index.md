# IOS应用砸壳及插件注入

::: warning 更新时间
最近更新：2022-11-11
:::


## 简介

为什么要砸壳，因为苹果商店上架的APP，都进行了加密，相当于给IPA加了一层外壳

无法直接安装，只有通过砸壳工具进行解密脱壳后才可以





## 准备工作

::: danger 注意
未越狱用户请无视
:::

* 砸壳：[DumpDecrypter](#安装插件)

* 文件管理：[Filza](#安装插件)

* 下载deb：[CyDown](#安装插件)

* 免签：[ReProvision Reborn](#安装插件)

* 终端：[NewTerm 2](#安装插件)

* 工具：[轻松签](#安装轻松签)





### 安装插件

在Cydia添加3个插件源

* DumpDecrypter 丨 哥哥源：[https://repo.initnil.com](https://repo.initnil.com)

* Filza 丨 TIGI Software源：[https://tigisoftware.com/cydia/](https://tigisoftware.com/cydia/) 丨 [Filza破解教程☛点我](../Filza/)

* CyDown丨julioverne源：[https://julio.hackyouriphone.org/](https://julio.hackyouriphone.org/)

* ReProvision Reborn 丨 Havoc源：[https://havoc.app](https://havoc.app)


![](./dump-01.png)


添加好源后，分别搜索安装哥哥源的 `DumpDecrypter` 砸壳

![](./dump-02.png)


TIGI Software的 `Filza` 文件管理

::: tip 说明
可以直接用 [Filza破解版](../Filza/)
:::

![](./dump-03.png)


julioverne源的 `CyDown` 下载deb插件

![](./dump-04.png)


Havoc源里的 `ReProvision Reborn` 或 [蔡明美源的AppSync Unified](https://cydia.akemi.ai/)

::: tip 说明
这个插件主要是为了安装IPA包，免签名
:::

![](./dump-05.png)


安装自带的 Chariz 源里的 `NewTerm 2` 终端和哥哥源里的 `injectipa`

::: tip 说明
都装好，不然哪里出错了都不知道
:::

![](./dump-06.png)






### 安装轻松签



轻松签官网：[https://esign.yyyue.xyz/](https://esign.yyyue.xyz/)

::: tip 说明
下载IPA后，在Filza里点击下载好的IPA文件就可以安装了
:::

Safari浏览器打开官网，请求桌面网站

![](./dump-07.png)

下载的文件在icloud的下载文件夹中，长按-分享-save to Filza

![](./dump-08.png)

存储，再次打开Filza会自动弹到目录

![](./dump-09.png)

点安装即可，这样我们所需的所有工具就都准备好了

![](./dump-10.png)


没有证书的，可以用我打包好的证书

::: tip 说明
过期证书：[https://dzp.lanzouy.com/iVToO0swgpfc](https://dzp.lanzouy.com/iVToO0swgpfc)

密码：1
:::


解压，保证p12证书和cert文件在一个目录，点击pe12，输入密码：1，导入证书库

![](./dump-11.png)







## 砸壳



我这里用`抖音`演示，应用商店下载原版

打开 `DumpDecrypter` APP，选择抖音-确定解密，等砸完，手机不要锁屏

![](./dump-12.png)

![](./dump-13.png)

砸完，前往Filza查看，一个完整的脱壳IPA就诞生了

我们先长按文件，点复制把路径复制出来

::: tip 默认路径
/var/mobile/Documents/DumpDecrypter/抖音_23.1.0.ipa
:::
![](./dump-14.png)





## 插件注入


### 下载



自己选一个喜欢的方式下载，本次用 `CyDown` 演示


我们用哥哥源里的抖音净化插件

源 - Tweaks - 抖音净化 - 更改 - 添加到Downloads

![](./dump-16.png)

![](./dump-17.png)


下载完成点击插件 - Show in Filza - 点击插件

::: tip Cydown下载插件的路径
/var/mobile/Documents/Cydown
:::

![](./dump-18.png)


我们先解压，进 Library 文件夹

![](./dump-19.png)


我们先长按文件，点复制把路径复制出来

::: tip 默认路径
/var/mobile/Documents/CyDown/netskao.***/Awemepure.dylib
:::

![](./dump-20.png)








### 注入

::: tip 说明
经测试，下载的插件注入后并没有生效，对比后发现是插件不适配

就看一下流程吧，也可以用轻松签提取ipa包里的插件

注入方式二选一，都可以！
:::




:::: details inject注入

打开NewTerm终端，输入 `injectipa` ，后面接IPA路径和插件的路径

::: tip 说明
输入不了，切换一下输入法
:::


格式：injectipa IPA路径 插件路径


```md
IPA路径路径：/var/mobile/Documents/DumpDecrypter/抖音_23.1.0.ipa

插件路径：/var/mobile/Documents/CyDown/netskao.***/Awemepure.dylib

例子：injectipa /var/mobile/Documents/DumpDecrypter/抖音_23.1.0.ipa /var/mobile/Documents/CyDown/netskao.***/Awemepure.dylib
```

![](./dump-21.png)


等它注入打包完就可以了，会自动跳到Filza目录

![](./dump-22.png)

之前安装了自签插件了，直接安装就可以打开了

首次打开会弹作者介绍窗，之后就没有了，在设置里可以看到插件设置

![](./dump-23.png)

::::





:::: details 轻松签注入

在 `DumpDecrypter` 文件夹把IPA文件导入，长按文件，打开方式选 轻松签

在 `CyDown` 文件夹把dylib文件导入，长按文件，打开方式选 轻松签

```
默认路径：/var/mobile/Documents/DumpDecrypter/抖音_23.1.0.ipa

默认路径：/var/mobile/Documents/CyDown/netskao.***/Awemepure.dylib
```



打开轻松签，点击IPA文件-导入应用库

![](./dump-24.png)


应用-签名-更多设置

::: tip 说明
如果要多开需要改应用名和Bundle ID，后面加字就行，不改就是官替会覆盖原版
:::

![](./dump-25.png)


添加第三方库-选择准备好的插件`Awemepure.dylib`

::: tip 说明
导入其他插件就按名字找
:::

![](./dump-26.png)


开启文件访问-立即签名，安装就不赘述了

::: tip 说明
巨魔用户直接永久安装，越狱用户用Filza安装，未越狱的用证书安装
:::

![](./dump-27.png)


下载的视频，也是无水印的，其他功能自行探索吧


![](./dump-28.png)

::::





### 提取


:::: details 已安装应用提取插件

点击轻松签已安装的应用，提取库-选择要提取的插件

::: tip 说明
最新版有此功能，记住插件都 `*.dylib` 的后缀名，其他的是系统的不要动，否则闪退
:::

![](./dump-29.png)

::::





:::: details 未安装应用提取插件

我们先下载好IPA文件，导入轻松签，解压，完成后有生成一个 `Payload` 的文件夹

![](./dump-30.png)


进入文件夹-点击文件夹-查看文件，跳转到Filza文件目录，其中 `Frameworks` 就是插件目录

![](./dump-31.png)

这里除了dylib插件，其他都是系统的不要动，复制出来即可

![](./dump-32.png)


::::










