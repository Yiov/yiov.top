## TrollStore永久自签安装使用

</br>

众所周知，IOS想安装IPA应用包，就需要证书签名，而TrollStore完美解决了要证书的这个问题，卖证书的瑟瑟发抖



</br>
</br>

## 准备条件

</br>

虽然可以实现永久签，但实质上是利用了旧版系统漏洞，目前IOS15.5以上系统已经修复，没升级的别手抖了，不升级系统，bug就是永久的

</br>

> 起因
>
> 先前有大神公开了利用漏洞 `CVE-2022-26766` / `CVE-2022-26763` 绕过签名的方法，可以安装永不过期的应用
>
> 2022年9月3日 [@opa334](https://twitter.com/opa334dev) 大神利用此漏洞开发了 `TrollStore` ，一款手机端永久签名安装工具

</br>

根据 [opa334的文档](https://github.com/opa334/TrollStore/) 表格查看是否符合，或者参照我的手机型号说明，不符合就默哀

> 系统版本降级应该是降不了

</br>

| 手机</br>/</br>系统| 14.0-</br>14.5.1 | 14.6-</br>14.8 | 14.8.1 | 15.0-</br>15.1 | 15.1.1 | 15.2-</br>15.4 | 15.5</br>Beta1-4 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 6/6P</br>A8 | 越狱 | 越狱 | 越狱 | SSH</br>Ramdisk | ✘ | SSH</br>Ramdisk | SSH</br>Ramdisk |
| 6s/6sP/SE</br>A9 | 越狱 | 越狱 | 越狱 | SSH</br>Ramdisk | ✘ | SSH</br>Ramdisk | SSH</br>Ramdisk |
| 7/7P</br>A10 | 越狱 | 越狱 | 越狱 | ✔ | ✘ | SSH</br>Ramdisk | SSH</br>Ramdisk |
| 8/8P/X</br>A11  | 越狱 | 越狱 | 越狱 | ✔ | ✘ | SSH</br>Ramdisk | SSH</br>Ramdisk |
| XR/XS系列</br>A12 | 越狱 | 越狱 | ✘ | ✔ | ✘ | ✘ | ✘ |
| 11系列/SE 2</br>A13 | 越狱 | 越狱 | ✘ | ✔ | ✘ | ✘ | ✘ |
| 12系列</br>A14 | 越狱 | ✘ | ✘ | ✔ | ✔ | ✘ | ✘ |
| 13系列/SE 3</br>A15 | ✘ | ✘ | ✘ | ✔ | ✔ | ✘ | ✘ |


注：标注 `越狱` 的是需要越狱后安装；SSH Ramdisk请参照视频：https://youtu.be/B0MueVvJSK4


</br>
</br>


## 1.安装

</br>


先下载TrollStore的安装包：

https://github.com/opa334/TrollStore/releases


未越狱的下 `TrollInstaller.ipa` 文件，已越狱可以不用下，一会直接添加源

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-01.png)


</br>

### 1.1 免越狱安装

</br>

> 请确保符合上面免越狱安装的条件，否则失败


首次安装 TrollStore 需要签名才行，我用 `Sideloadly` 自签

> 不知道如何使用的点我 [☛ Sideloadly使用教程](https://github.com/opa334/TrollStore/)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-02.png)



打开紫色的 `TrollInstaller`前，需要先去信任证书

> 老生常谈了，设置-通用-设备管理-信任，然后重新打开app

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-03.png)


再点击 Install 安装，完成后关闭弹窗，桌面就有应用了

> 如出现闪退/白苹果重启，再试一次，不行就是系统不支持

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-04.png)




</br>


### 1.2 越狱安装

</br>

打开Cydia-软件源-右上角编辑-左上角添加，输入源地址：https://havoc.app

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-05.png)


等安装完成即可，现在就有Havoc的源了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-06.png)



搜索 `Trollstore Helper` 然后右上角-更改-安装

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-07.png)


回到桌面打开 `Trollstore Helper` ，点 `Install TrollStore` 安装，却报错

> 这是没有网络权限

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-08.png)


回到 `Cydia` 搜索 `NetWorkMange`，安装

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-09.png)


手机-设置-拉到底找到 `NetWorkMange` - 系统应用 - 打开 `Trollstore` 的开关

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-10.png)

再次回到 `Trollstore Helper` 安装即可，桌面已经有应用了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-11.png)


</br>
</br>



## 2.Trollstore的使用

</br>

打开桌面蓝色的 `TrollStore` 工具，看一下Seeting 设置界面

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-12.png)



点开 settings 选项，安装 Install ldid，安装完成变成灰色

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-13.png)


准备要安装的IPA包，我这里用 `IPA下载器` 演示

仓库：https://github.com/SmileZXLee/IpaDownloadTool


打开文件-分享-选择Trollstore导入，即可安装完成

> 文件请放到 `我的iPhone中` ，如果放到 iCloud 上导入会出问题
>
> 由于苹果不能直接打开ipa，我弄成zip压缩包再解压出来

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-14.png)


现在签名安装的应用就不用担心证书过期的问题了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-15.png)


</br>

</br>

## 4.常见问题

</br>

### 4.1 安装失败，不显示图标

</br>

打开 TrollStore - Settings - 点击 `Rebuild Icon Cache` ，等待重启，未重启的话，点击 `Respring` 即可

</br>




### 4.2 如何避免TrollStore掉签

</br>

可以利用 `TrollStore` 重新安装 `TrollHelper`，以免打开不开了重新装

* 未越狱：打开`Helper Install As Standalone APP`，选择你要注入自带应用，选择HOME家庭或者其他，只要你重启，打开家庭App就能激活

* 已越狱：不存在掉签


</br>




### 4.3 如何单独删除已安装应用

打开 `TrollStore` 应用，在Apps页面中，选中你要删除应用，左滑，点击删除


</br>




### 4.4 卸载TrollStore

</br>

打开 `TrollStore` - Settings - 点击 Uninstall TrollStore ，等待重启即可


</br>

</br>


## 源列分享表

</br>
</br>

* 饼干网盘：https://pan.iosvip.cc

* 奇心网盘：https://pan.qxnav.com

* 知网云盘：https://pan.xyyh.xyz

* 蜜蜂网盘：https://pan.ios98.com

* dump网盘：https://pan.dumpapp.com

* APP库网盘：https://pan.wxqqurl.cn

* 玩机一派网盘：https://pan.iggxx.com

* IPA分享盘：https://pan.cjq6525.xyz/

</br>
</br>



## 特别鸣谢

* [@opa334](https://github.com/opa334/TrollStore) 「TrollStore」

* [@SmileZXLee](https://github.com/SmileZXLee/IpaDownloadTool) 「IPA下载器」









