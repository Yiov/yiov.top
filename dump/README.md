## IOS应用砸壳及插件注入教程

</br>

更新时间：2022-11-11

为什么要砸壳，因为苹果商店上架的APP，都进行了加密，相当于给IPA加了一层外壳

无法直接安装，只有通过砸壳工具进行解密脱壳后才可以

</br>
</br>


## 说明

</br>

本来想砸`微信`演示的，结果手机砸出来的没有相册权限，还是得Mac砸

就换成演示 `抖音` 了

我们也可以直接用 [Netskao砸好的微信及QQ](https://github.com/Netskao/iOS-DumpDecrypted-IPAs)





</br>
</br>


## 1.安装插件及工具

</br>


插件：DumpDecrypter(砸壳)、Filza(文件管理)、CyDown(下载deb)、ReProvision Reborn(自签)

工具：NewTerm 2(终端) 或 轻松签



</br>


### 1.1 安装插件

</br>

另额外需要用到：3个插件源

* 哥哥源：https://repo.initnil.com

* TIGI Software源：https://tigisoftware.com/cydia/

* julioverne源：https://julio.hackyouriphone.org/


> 题外话：[Filza破解教程☛点我](https://github.com/Yiov/notes/tree/main/Filza)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-01.png)


添加好源后，分别搜索安装哥哥源的 `DumpDecrypter` 砸壳

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-02.png)


TIGI Software的 `Filza` 文件管理

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-03.png)


julioverne源的 `CyDown` 下载deb插件

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-04.png)


自带的 Havoc源里的 `ReProvision Reborn` 或 [蔡明美源的AppSync Unified](https://cydia.akemi.ai/)

> 这个插件主要是为了安装IPA包，不用签名

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-05.png)


自带的 Chariz源里的 `NewTerm 2` 终端和哥哥源里的 `injectipa`

> 都装好，不然一样哪里出错了都不知道

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-06.png)

</br>




### 1.2 安装轻松签

</br>

轻松签官网：https://esign.yyyue.xyz/

```
非越狱 符合条件的用 ：轻松签+ 

越狱机：下载IPA后，在Filza里点击下载好的IPA文件就可以安装了
```

Safari浏览器打开官网，请求桌面网站

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-07.png)

下载的文件在icloud的下载文件夹中，长按-分享-save to Fliza

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-08.png)

存储，再次打开Fliza会自动弹到目录

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-09.png)

点安装即可，这样我们所需的所有工具就都准备好了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-10.png)


没有证书的，可以用我打包好的证书

> 轻松签+用户无需证书，可以无视


解压，保证p12证书和cert文件在一个目录，点击pe12，输入密码：1，导入证书库

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-11.png)


</br>
</br>



## 2.砸壳

</br>

我这里用`抖音`演示，应用商店下载好

打开 `DumpDecrypter` APP，选择抖音-确定解密，等砸完，手机不要锁屏

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-12.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-13.png)

砸完，前往Fliza查看，一个完整的脱壳IPA就诞生了

我们先长按文件，点复制把路径复制出来

>默认路径：/var/mobile/Documents/DumpDecrypter/抖音_23.1.0.ipa

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-14.png)



</br>
</br>




## 3.下载deb插件

</br>

自己选一个喜欢的方式下载，本次用 `CyDown`演示


> 我们常见的 `dylib插件` 也就是deb解压出来的

* [PC端：cydownload](https://github.com/borishonman/cydownload/releases)

* [手机端：PostBox](https://itunes.apple.com/app/id1644577838)

* [手机端：Saily](https://github.com/SailyTeam/Saily/releases)

* [手机端：Sileo](https://github.com/Sileo/Sileo/releases)

* [越狱机：CyDown](https://julio.hackyouriphone.org/)

* [网页端：Repo Updates](https://www.ios-repo-updates.com/)



我们用哥哥源里的抖音净化插件

源 - Tweaks - 抖音净化 - 更改 - 添加到Downloads

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-16.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-17.png)


下载完成点击插件 - Show in Fliza - 点击插件

>Cydown下载插件的路径：/var/mobile/Documents/Cydown

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-18.png)


我们先解压，进 Library 文件夹

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-19.png)


我们先长按文件，点复制把路径复制出来

>默认路径：/var/mobile/Documents/CyDown/netskao.***/Awemepure.dylib

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-20.png)



</br>
</br>



### 4.注入插件

</br>

> 说明：经测试，将下载的插件注入后并没有生效，反复安装对比发现是插件的问题，但是下载的方式是没问题的，也可以从别人做的的IPA里提取插件来使用

</br>



### 4.1 inject注入

</br>

打开NewTerm终端，输入 `injectipa` ，后面接IPA路径和插件的路径

格式：injectipa IPA路径 插件路径

> 例：injectipa /var/mobile/Documents/DumpDecrypter/抖音_23.1.0.ipa /var/mobile/Documents/CyDown/netskao.***/Awemepure.dylib

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-21.png)


等它注入打包完就可以了，会自动跳到Fliza目录

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-22.png)

之前安装了自签插件了，直接安装就可以打开了

首次打开会弹作者介绍窗，之后就没有了，在设置里可以看到插件设置

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-23.png)

</br>


### 4.2 轻松签注入

</br>

在 `DumpDecrypter` 文件夹把IPA文件导入，长按文件，打开方式选 轻松签

在 `CyDown` 文件夹把dylib文件导入，长按文件，打开方式选 轻松签

>默认路径：/var/mobile/Documents/DumpDecrypter/抖音_23.1.0.ipa
>
>默认路径：/var/mobile/Documents/CyDown/netskao.***/Awemepure.dylib

</br>

打开轻松签，点击IPA文件-导入应用库

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-24.png)


应用-签名-更多设置

> 如果要多开需要改应用名和Bundle ID，后面加字就行，不改就是官替会覆盖原版

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-25.png)


添加第三方库-选择准备好的插件`Awemepure.dylib`

> 导入其他插件就按名字找

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-26.png)


开启文件访问-立即签名，安装就不赘述了

>巨魔用户直接永久安装，越狱用户用Fliza安装，未越狱的用证书安装

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-27.png)


下载的视频，也是无水印的，其他功能自行探索吧


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-28.png)




</br>
</br>

## 5.插件提取

</br>

### 51.已安装的插件提取

</br>

点击轻松签已安装的应用，提取库-选择要提取的插件

> 最新版有此功能，记住插件都*.dylib的后缀名，其他的是系统的不要动，否则闪退

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-29.png)

</br>



### 52.未安装的插件提取

</br>

我们先下载好IPA文件，导入轻松签，解压，完成后有生成一个 `Payload` 的文件夹

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-30.png)


进入文件夹-点击文件夹-查看文件，跳转到Fliza文件目录，其中 `Frameworks` 就是插件目录

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-31.png)

这里除了dylib插件，其他都是系统的不要动，复制出来即可

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dump/dump-32.png)



## 特别鸣谢

* [Netskao砸壳](https://github.com/Netskao/iOS-DumpDecrypted-IPAs)「微信/QQ」

* [Filza](https://www.tigisoftware.com/default/?p=439) 「文件管理器」










