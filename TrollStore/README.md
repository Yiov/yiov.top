## TrollStore永久自签安装使用

</br>

更新时间：2022-11-9


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

> 系统已关闭验证，无法降级，除非很早前有SHSH备份

</br>

| 手机</br>/</br>系统| iPhone 6-8/SE/X</br>A8-A11 | iPhone 11-13/XR/XS/SE 2-3</br>A12-A15 |
| :-: | :-: | :-: |
| 14.0-</br>14.8.1 | checkra1n越狱 | :heart:</br>`troll arm64e` |
| 15.0-</br>15.4.1 | :green_heart:</br>`troll IOS 15+` | :green_heart:</br>`troll IOS 15+` |
| 15.5</br>beta1-4 | :green_heart:</br>`troll IOS 15+` | :green_heart:</br>`troll IOS 15+` |
| 15.5 RC/</br>15.5 | ✘ | ✘ |
| 15.6</br>beta1-5 | SSH Ramdisk | :heart:</br>`troll arm64e` |



注：

* `checkra1n越狱` 的是需要越狱后安装；

* `SSH Ramdisk` 使用教程：https://youtu.be/B0MueVvJSK4

* :green_heart: troll IOS 15+：安装使用: https://api.jailbreaks.app/troll

* :heart: troll64e：安装使用：https://api.jailbreaks.app/troll64e




</br>
</br>


## 1.安装

</br>

由于2022/10/6 [@Linus Henze](https://twitter.com/LinusHenze) 在OBTS会议上公开了 `fugu15` 的全新越狱方式，[@opa334](https://twitter.com/opa334dev) 也通过他的帮助发布了全新的工具






### 1.1 Trollstore的安装

</br>

请根据系统选择相应的安装方式

* :green_heart: troll IOS 15+：安装使用: https://api.jailbreaks.app/troll

* :heart: troll64e：安装使用：https://api.jailbreaks.app/troll64e


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-01.png)




安装的是 `GTA Car Tracker` ，打开点安装 `Install Trollstore`，自动注销后，回到桌面就发现装完成了


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-04.png)






</br>
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

> 注意：重启可能会导致安装的APP失效，请参照 `常见问题3.2` 安装永久助手

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/TrollStore/TrollStore-15.png)


</br>

</br>



## 3.Throllstore必备软件

</br>

除了以下软件外，[各种源/插件/IPA包整理大合辑](https://github.com/Yiov/notes/tree/main/repo#2各类ipa工具)

</br>

* [Filza](https://www.tigisoftware.com/default/?p=439) 「文件管理器」「[Filza破解教程](https://github.com/Yiov/notes/tree/main/Filza)」


* [AppStore++](https://github.com/CokePokes/AppStorePlus-TrollStore/releases) 「有广告 自由升降级app版本」


* [DowngradeApp](https://share.initnil.com/With_TorllStore/DowngradeApp) 「无广告 随意升降级app版本」


* [red-dot](https://github.com/s8ngyu/red-dot/releases) 「自定义角标颜色」

```
生效：点击 Badge colour - 选择颜色 - 返回 Apply - TrollStore `Respring` 注销

恢复：点击 Revert Chanages - TrollStore `Respring` 注销
```


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

* 未越狱：打开`Helper Install As Standalone APP`，选择你要注入自带应用，选择Tips提醒或者其他，只要你重启，打开提醒App就能激活

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





## 特别鸣谢

* [@opa334](https://github.com/opa334/TrollStore) 「TrollStore」

* [@SmileZXLee](https://github.com/SmileZXLee/IpaDownloadTool) 「IPA下载器」









