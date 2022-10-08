## TrollStore永久自签安装使用

</br>

更新时间：2022-10-7


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
| 6/6P/6s/6sP/SE</br>A8/A9 | 越狱 | 越狱 | 越狱 | SSH</br>Ramdisk | ✘ | SSH</br>Ramdisk | SSH</br>Ramdisk |
| 7/7P/8/8P</br>A10/A11 | 越狱 | 越狱 | 越狱 | ✔ | ✘ | SSH</br>Ramdisk | SSH</br>Ramdisk |
| XR/XS系列</br>A12 | 越狱 | 越狱 | ✔</br>:star2: | ✔ | ✘ | ✔</br>:star2: | ✔</br>:star2: |
| 11系列/SE 2</br>A13 | 越狱 | 越狱 | ✔</br>:star2: | ✔ | ✘ | ✔</br>:star2: | ✔</br>:star2: |
| 12系列</br>A14 | 越狱 | ✔</br>:star2: | ✔</br>:star2: | ✔ | ✔ | ✔</br>:star2: | ✔</br>:star2: |
| 13系列/SE 3</br>A15 | ✘ | ✘ | ✘ | ✔ | ✔ | ✔</br>:star2: | ✔</br>:star2: |


注：标注 `越狱` 的是需要越狱后安装；

✔ 表示可以使用trollstore

✔ :star2: 表示可以使用trollstore2

`SSH Ramdisk` 请参照视频：https://youtu.be/B0MueVvJSK4


</br>
</br>


## 1.安装

</br>

由于2022/10/6 [@Linus Henze](https://twitter.com/LinusHenze) 在OBTS会议上公开了 `fugu15` 的全新越狱方式，[@opa334](https://twitter.com/opa334dev) 也通过此方法用开发者工具做了新的trollstore2，，与之前的 `trollstore` 安装稍有不同，我分开演示


* 1.Trollstore的安装 ✔

* 2.Trollstore 2 的安装 ✔ :star2:

* 3.越狱安装Trollstore


</br>


### 1.1 Trollstore的安装 ✔

适用于A7-A15，IOS系统 15.0~15.1

</br>


先下载TrollStore的安装包：

https://github.com/opa334/TrollStore/releases


未越狱的下 `TrollInstaller.ipa` 文件，已越狱可以不用下，一会直接添加源

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-01.png)


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
</br>



### 1.2 Trollstore 2 的安装 ✔ :star2:

</br>

打开苹果应用商店，搜：`Developer`  下载安装后打开

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-16.png)


打开app，允许 `无限局域网与蜂窝网络` ，确保设置里也是开启了数据和Wlan，然后我们直接卸载

> 因为我们只需要把这个权限打开即可

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-17.png)



下载我们已经编译好的 `Trollstore 2` IPA包

备用下载：https://dzp.lanzouy.com/ivbXN0dczhkd

> 出现弹窗安装才行，没反应就刷新了再点安装

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-18.png)


会发现安装的还是Developer，再次打开发现界面是不一样的，点安装 `Install Trollstore`

> 如果我们直接安装Developer，没有下载过的会导致没有网络权限，就无法安装巨魔，所以只能先下原版打开权限，卸载后再下修改的版本

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-19.png)


手机会自动软重启一下，桌面就有 `Trollstore` 了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-20.png)






</br>
</br>


### 1.3 越狱安装

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

> 注意：重启可能会导致安装的APP失效，请参照 `常见问题3.2` 安装永久助手

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-15.png)


</br>

</br>




## 3.常见问题

</br>

### 3.1 安装失败，不显示图标

</br>

打开 TrollStore - Settings - 点击 `Rebuild Icon Cache` ，等待重启，未重启的话，点击 `Respring` 即可

</br>




### 3.2 如何避免TrollStore掉签

</br>

可以利用 `TrollStore` 重新安装 `TrollHelper`，以免打开不开了重新装

* 未越狱：打开`Helper Install As Standalone APP`，选择你要注入自带应用，选择Tips提醒或者其他，只要你重启，打开提醒App就能激活

* 已越狱：不存在掉签


</br>




### 3.3 如何单独删除已安装应用

打开 `TrollStore` 应用，在Apps页面中，选中你要删除应用，左滑，点击删除


</br>




### 3.4 卸载TrollStore

</br>

打开 `TrollStore` - Settings - 点击 Uninstall TrollStore ，等待重启即可


</br>

</br>


## 4.Throllstore必备软件

</br>



* [Filza](https://www.tigisoftware.com/default/?p=439) 「文件管理器」


```
Filza破解教程

1.设置 - 无限局域网 - 使用无线局域网与蜂窝网络的APP - Filza - 关闭网络

2.Filza - 齿轮 设置 - 激活状态 <体验> - 复制设备序列号<与关于本机-序列号一致>

3.Filza - 设置 - 备份 - 在上层文件夹中显示

4.点击 `settings.fzs` 右侧的 `i` - 分享 - 属性表编辑器

5.展开Root - 点击 `item 1` 右侧的 `i` - 点击 `Add item...`

6.电脑下载Loader1.0 - 打开Loader.exe关闭 再次打开即可使用 - `Device SN`填序列号 - 点`Generate`提示破解成功即可，复制计算出的破解码

7.名称栏改为`SerialNumber` - 计算的破解码粘贴到`值`这里 - 返回 - 存储 - 完成

8.点击 `settings.fzs`，出现警告 去定要恢复素有Filza设置吗 - 继续 - 自动退出

9.重新打开Filza - 设置 - 激活状态 <完整版> 破解完成
```


</br>



* [AppStore++](https://github.com/CokePokes/AppStorePlus-TrollStore/releases) 「有广告 自由升降级app版本」

</br>


* [DowngradeApp](https://initnil.com/DowngradeApp.txt) 「无广告 随意升降级app版本」

</br>


* [TrollNonce](https://github.com/opa334/TrollNonce/releases) 「固定G值」


</br>


* [red-dot](https://github.com/s8ngyu/red-dot/releases) 「自定义角标颜色」

```
生效：点击 Badge colour - 选择颜色 - 返回 Apply - TrollStore `Respring` 注销

恢复：点击 Revert Chanages - TrollStore `Respring` 注销
```

</br>



* [TSSSaver](https://tsssaver.1conan.com/v2/) 「SHSH2备份工具」


</br>

* [轻松签](https://esign.yyyue.xyz/) 「签名+修改bundleID」


</br>


* 饼干网盘：https://pan.iosvip.cc

* 奇心网盘：https://pan.qxnav.com

* 知网云盘：https://pan.xyyh.xyz

* 蜜蜂网盘：https://pan.ios98.com

* dump网盘：https://pan.dumpapp.com

* APP库网盘：https://pan.wxqqurl.cn

* 玩机一派网盘：https://pan.iggxx.com

* IPA分享盘：https://pan.cjq6525.xyz/

* 空了个孔：https://pan.kongtan.net/


</br>
</br>



## 特别鸣谢

* [@opa334](https://github.com/opa334/TrollStore) 「TrollStore」

* [@SmileZXLee](https://github.com/SmileZXLee/IpaDownloadTool) 「IPA下载器」









