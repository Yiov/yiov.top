
# 电视应用的安装与使用




## 简介

电视TV的系统也是安卓，后缀格式也是apk，苹果请使用Apple TV盒子



## 安装应用


以安装 `淘宝` app 为例

先下载 当贝应用市场：https://www.dangbei.com/apps/

::: tip 说明
建议安装，应用丰富，且比自带的好用

如果电视不让安装它，可以 [电脑装模拟器](#电脑安装应用) 提取安装包后，再来安装
:::


![](/tvapp/tvapp-01.png)


下载后请 [参考自己的品牌安装方式](https://www.znds.com/jc/)

::: tip 说明
有的电视，自带商店可直装；有的要下载到U盘，插入电视安装
:::

![](/tvapp/tvapp-02.png)


我家电视是海信，但是盒子用的是 `创维A810` ，常用的盒子就找盒子的型号

::: tip 说明
界面没找到，我直接搜竟然有，就离谱
:::

![](/tvapp/tvapp-03.png)


根据教程，我需要下载好APP，并在U盘新建一个文件夹 `mipt_apks`，再把文件放进去


![](/tvapp/tvapp-04.png)


U盘插上电视，就自动安装完成了

![](/tvapp/tvapp-05.png)




## 使用拓展


### 电脑安装应用



用模拟器即可，比手机好的地方，在于能够用键盘控制切换频道


雷电模拟器官网：https://www.ldmnq.com/

![](/tvapp/tvapp-06.png)



安装好后，打开

![](/tvapp/tvapp-07.png)


去下载当贝市场：http://www.dangbei.com/

拖入模拟器安装

![](/tvapp/tvapp-08.png)



然后进去当贝搜索 `DSTB`（电视淘宝的开头首字母），安装

![](/tvapp/tvapp-09.png)

![](/tvapp/tvapp-10.png)


如果页面显示不全，右边齿轮 `设置` 改成 `1080P`，保存设置

![](/tvapp/tvapp-11.png)



重新打开运行即可，页面控制参照下方

::: tip 说明
键盘的方向键 —— 遥控器的方向键

键盘的ESC键 —— 遥控器的返回键

鼠标点击或回车键 —— 遥控器的OK
:::

![](/tvapp/tvapp-12.png)




`长按` 电视淘宝 -别松手 拖拽至 右侧的 `导出` 上，松开

> 其他apk导出同理


![](/tvapp/tvapp-13.png)

这样我们就得到了安装apk的应用包，发给小伙伴即可

![](/tvapp/tvapp-14.png)



如果不想每天麻烦的切号，`新建模拟器` 或者 `复制模拟器`

::: warning 注意
右下角选择要复制的模拟器

否则会默认复制第一个，也就是0号模拟器
:::

![](/tvapp/tvapp-15.png)


这样就双开了，多开非常吃内存，开多了卡

::: tip 建议
最多同时开2个，关掉后，再打开另外的
:::

![](/tvapp/tvapp-16.png)




---



### 卸载预装应用

电视自带的APP严重占用内存，太恶心，这就给它卸载，本次以 `TCL` 为例


开启ADB：设置 - 系统 - 系统信息

![](/tvapp/tvapp-17.png)

![](/tvapp/tvapp-18.png)


用遥控器依次点击 `上下左右`，看到桌面弹出ADB开关，将ADB开启


![](/tvapp/tvapp-19.png)

![](/tvapp/tvapp-20.png)

![](/tvapp/tvapp-21.png)


查看电视IP：设置 - 网络 - 有线/无线网络 - 网络详情


![](/tvapp/tvapp-22.png)

拍照记住这个IP，一会要用到，我的是 `192.168.2.242`

![](/tvapp/tvapp-23.png)

![](/tvapp/tvapp-24.png)



下载 [ADB windows版本](https://dl.google.com/android/repository/platform-tools_r33.0.0-windows.zip) 并解压

![](/tvapp/tvapp-25.png)

`windows+R`组合键，打开运行输入`sysdm.cpl` 回车，进入系统属性 - `高级 - 环境变量`


![](/tvapp/tvapp-26.png)


系统变量点击 `path - 编辑`，新建一个环境变量，将解压的路径填进去，确定保存

::: tip 比如
我的ADB解压路径为：D:\Downloads\Desktop\platform-tools_r33.0.0-windows\platform-tools
:::

![](/tvapp/tvapp-27.png)

`windows+R`组合键，打开运行输入`cmd` 回车，然后输入 `adb --version` 会显示当前的adb版本信息，即为安装成功

> 我这里的 `49085` 是win系统账户名，每个人的不一样哈

```sh
adb --version
```
![](/tvapp/tvapp-28.png)



连接电视，输入之前的ip，例如：`adb connect 192.168.2.242`


```sh
adb connect 你的ip
```

![](/tvapp/tvapp-29.png)


这时候电视会弹窗，勾选后确定

![](/tvapp/tvapp-30.png)


根据提示加上端口，再次连接电视

```sh
adb connect 你的ip:5555
```
::: tip 说明
已连接成功会显示 `already connected` ，你也可以输入 `adb devices` 查看
:::


![](/tvapp/tvapp-31.png)






执行 `adb shell` 进入shell模式，开启安装应用权限

```sh
adb shell
```

```sh
setprop persist.tcl.installapk.enable 1

shell setprop persist.tcl.debug.installapk 1

exit #退出，弄完一定要退出来
```

![](/tvapp/tvapp-32.png)


这样就可以安装第三方应用了，我们下载 [package view.apk](https://dzp.lanzouj.com/iqqVS1pihuyb) 到电脑


```sh
adb install xxxx.apk #apk所在路径
```

比如我的是：adb install D:\Downloads\package_view.apk

提示 `Success` 就是安装成功了

![](/tvapp/tvapp-33.png)

打开应用就能所有应用的包名了，可以拍下并记住要卸载的包名

![](/tvapp/tvapp-34.png)


进入 `adb shell` 卸载自带应用

```sh
adb shell
```

```sh{5}
pm list package #查看已安装的应用

pm list packages | grep 'tcl' #查看属于tcl的应用

pm uninstall --user 0 com.tcl.tshop #卸载T商店

cmd package install-existing com.tcl.tshop #恢复T商店

exit #退出adb shell
```

![](/tvapp/tvapp-35.png)

这样电视的应用里就没有了 `T商店` 了

![](/tvapp/tvapp-36.png)

::: details 其他使用命令
```sh
pm disable com.snm.upgrade #关闭更新

pm disable com.tcl.versionUpdateApp #关闭系统版本更新
pm enable com.tcl.versionUpdateApp #打开系统版本更新
```
:::

有些系统级的App是不能删的，请谨慎操作

::: details TCL系统应用参照表
一键精简工具：https://dzp.lanzouj.com/iNEpH1piihaf

注：关掉杀软使用，也不是清理的百分百干净

![](/tvapp/tvapp-37.png)



---

```sh
#TCL智慧家居 直接卸载
pm uninstall --user 0 com.tcl.convergehome

#T惠购，直接卸载
pm uninstall --user 0 com.tcl.tshop

#T2游戏中心，直接卸载
pm uninstall --user 0 com.tcl.gamecenter

#TCL智慧家居，直接卸载
pm uninstall --user 0 com.tcl.convergehome

#艺生活，直接卸载
pm uninstall --user 0 com.tcl.appreciate.art

#全民K歌，视情况卸载
pm uninstall --user 0 com.tcl.ffkaraoke

#轮播，视情况卸载
pm uninstall --user 0 com.tcl.tliveplay

#QQ音乐，视情况卸载
pm uninstall --user 0 com.tcl.tclmusic

#完整对照表
package:com.tcl.recognize.service
package:com.iflytek.xiri
package:com.tcl.wholenetsearch               //搜索
package:com.android.cts.priv.ctsshim
package:com.tcl.initsetup
package:com.xiaodianshi.tv.yst                //云视听小电视
package:com.android.providers.media
package:com.tcl.bootadservice
package:com.tcl.factory.view
package:com.ffalcon.orange
package:com.sohu.inputmethod.sogou.tv          //搜狗输入法
package:com.android.externalstorage
package:com.android.htmlviewer
package:com.android.companiondevicemanager
package:com.tcl.tvhealthcheck                     //TCL系统检测
package:com.tcl.common.terminalmanagerplus
package:com.tcl.common.weather                      //天气预报
package:com.tcl.packageinstaller.service.renew
package:com.android.providers.downloads
package:com.android.providers.tv
package:com.tcl.common.viewer
package:com.tcl.miracast
package:com.android.defcontainer
package:com.tcl.tvsmartalbum                    //智能相册
package:com.android.pacprocessor
package:com.android.certinstaller
package:android
package:com.tcl.browser
package:com.tcl.camera
package:com.tcl.appmarket2                     //应用商店
package:com.android.backupconfirm
package:com.tcl.xian.StartandroidService
package:com.tcl.qiyiguo                       //奇异果TV
package:com.tcl.ffkaraoke                     //卡拉OK
package:com.android.statementservice
package:com.tcl.tshop                         //T惠购，直接卸载
package:com.tcl.rewalleve
package:com.android.tcl.messagebox             //消息盒子
package:com.android.settings.intelligence
package:com.tcl.videocall                       //视频通话
package:com.android.providers.settings
package:com.tcl.versionUpdateApp
package:com.android.sharedstoragebackup
package:com.android.printspooler
package:com.bilibili.tv                      //哔哩哔哩   
package:com.android.dreams.basic
package:com.tcl.vod
package:com.hunantv.market                  //芒果TV
package:com.tcl.micmanager
package:com.android.webview
package:com.android.inputdevices
package:com.tcl.weixin                          //微信互联
package:com.hw.screentest
package:com.tcl.healthinfo
package:com.tcl.audioplayer
package:com.tcl.MultiScreenInteraction_TV
package:com.tcl.gamecenter                        //T2游戏中心，直接卸载
package:com.tcl.walleve
package:android.ext.shared
package:com.android.keychain
package:com.tcl.bt.phone
package:com.tcl.cyberui
package:com.mediatek.tunerservice
package:com.tcl.securityapp
package:android.ext.services
package:com.android.packageinstaller
package:com.tencent.qqmusictv               //QQ音乐
package:com.android.proxyhandler
package:com.tcl.tliveplay                     //轮播
package:com.tcl.convergehome                   //TCL智慧家居，直接卸载
package:com.tcl.morningmode                    //清晨时刻
package:com.tcl.videoplayer
package:com.ktcp.csvideo                        //云视听极光（腾讯TV）
package:com.tcl.playskill                      //玩机技巧
package:com.snm.upgrade
package:com.an.tv
package:com.tcl.m
package:com.tcl.usercenter                         //用户中心
package:com.tcl.tvweishi                           //电视卫士
package:com.tcl.bi                                 
package:com.tcl.tv
package:com.tcl.ffeducation                        //雷鸟教育
package:com.kookong.tvplus                         //遥控专家酷控
package:com.google.android.leanbacklauncher.partnercustomizer
package:com.android.cts.ctsshim
package:com.mediatek.network
package:com.tcl.settings
package:com.tcl.autopair
package:com.tcl.c2dm.client
package:com.android.vpndialogs
package:com.tcl.usagestats
package:com.tcl.ui_mediaCenter                //媒体中心
package:com.tcl.common.shortcutmenu
package:com.android.shell
package:com.android.wallpaperbackup
package:com.android.providers.userdictionary
package:com.tcl.TFDS.service
package:com.android.location.fused
package:com.tcl.soundbox
package:com.example.tvcapture
package:com.tcl.shutdowndialog
package:com.tcl.appreciate.art              //艺生活，直接卸载
package:com.iflytek.xiri.recorder.svc       //科大讯飞语音控制
package:com.iflytek.xiri2.hal               //科大讯飞语音控制
package:com.android.bluetooth               //蓝牙
package:com.android.wallpaperpicker
package:com.android.providers.contacts       //联系人
package:com.android.captiveportallogin
package:com.cibn.tv                              //CIBN酷喵
package:com.iflytek.mictest
package:com.kwai.tv.yst                         //快手TV
```

:::



---



### TVBOX（强荐）


下载地址：https://github.com/pvqogw/TVBoxOSC/releases


下载后安装好TVBOX，复制任一一个添加源即可

```json
月光宝盒家庭版
https://jihulab.com/ygbh1/box/-/raw/main/月光宝盒

肥猫Panda
http://我不是.肥猫.love:63/接口禁止贩卖

饭太硬
http://饭太硬.top/tv

小雅
http://drpy.site/js1

莱妮丝
https://tvbox.cainisi.cf

龙门影视
https://agit.ai/VivoMax/ddtv/raw/branch/master/%E9%BE%99%E9%97%A8%E5%BD%B1%E8%A7%86.json

南风
https://agit.ai/Yoursmile7/TVBox/raw/branch/master/XC.json

神器推送
https://神器每日推送.tk/pz.json

吾爱
http://52bsj.vip:98/wuai

运输车
https://weixine.net/ysc.json

小苹果
https://agit.ai/nbwzlyd/xiaopingguo/raw/branch/master/xiaopingguo/xiaopingguo.json

分享者
https://agit.ai/66666/mao/raw/branch/master/00/000.m3u8

蜂蜜
https://ghproxy.com/https://raw.githubusercontent.com/FongMi/CatVodSpider/main/json/config.json

喵影视
http://miaotvs.cn/meow

甜蜜
https://raw.iqiq.io/kebedd69/TVbox-interface/main/%E7%94%9C%E8%9C%9C.json

老刘备
https://raw.iqiq.io/liu673cn/box/main/m.json

白嫖线路
http://js.134584.xyz/json/pp87.json

乱世
http://www.dmtv.ml/mao/single.json

巧技接口
https://agit.ai/relax/adcc/raw/branch/master/tvbox.json

家庭版升级
http://itvbox.cc/tvbox/云星日记/1.m3u8

哔哩大套餐
http://itvbox.cc/tvbox/云星日记/bili.m3u8

阿里大套餐
http://itvbox.cc/tvbox/云星日记/ali.m3u8

刚刚
http://刚刚.live/猫

唐三
https://hutool.ml/tang

lekan
https://gitee.com/lekanbox/ysc/raw/master/ysc.json

无名
https://jx.izny.cn/qwsp/qwsp.json

4k云盘
http://9xi4o.tk/0725.json

无名路线
https://gitea.com/52670576/tvbox/raw/branch/master/ysc.json

兽爪
http://52bsj.vip:81/api/v3/file/get/46060/Tv%20box%E6%BA%902.txt?sign=yI8sCYT8pei-pxp1_xwLjWOfepQ9b7c1y6Q_QD_0RY4%3D%3A0

星辰
http://8.210.232.168/xc.json

大聪明
https://yydsys.top/duo

于俊
http://home.jundie.top:81/top98.json

高山流水
https://raw.gitmirror.com/gaotianliuyun/gao/master/js.json

刘C
https://raw.liucn.cc/box/m.json

佰欣园
https://raw.gitmirror.com/chengxueli818913/maoTV/main/44.txt

潇洒
https://download.kstore.space/download/2863/01.txt

心魔
https://gitee.com/yw88075/tvbox1/raw/main/dr/js.json

Imabc
https://www.agit.ai/n/b/raw/branch/a/b/c.json

宋
https://cdn.staticaly.com/gh/XuQqu/PinkBird/main/normal.json

网络1
https://cdn.staticaly.com/gh/XuQqu/PinkBird/main/normal.json

网络2
https://agit.ai/n/b/raw/branch/a/b/c.json

liu673cn
https://raw.fastgit.org/liu673cn/box/main/m.json

学习
http://52bsj.vip:81/api/v3/file/get/41063/bili.json?sign=TxuApYZt6bNl9TzI7vObItW34UnATQ4RQxABAEwHst4%3D%3A0

二哈
https://raw.gitmirror.com/2hacc/TVBox/main/tvbox.json

荷城茶秀
http://rihou.cc:88/荷城茶秀

小胡
https://jihulab.com/xiaohutx/box/-/raw/main/0.json

道长
https://pastebin.com/raw/5NHaxyGR

霜辉月明
https://ghproxy.com/raw.githubusercontent.com/lm317379829/PyramidStore/pyramid/py.json

dxawi
http://dxawi.github.io/0/0.json

蚂蚁
https://la.kstore.space/download/2883/0110.txt

冰河
https://ju.binghe.ga/4.txt

不良帅
https://notabug.org/qizhen15800/My9394/raw/master/ProfessionalEdition.m3u8

乱世
http://www.dmtv.ml/mao/single.json

一影视
https://ghproxy.com/https://raw.githubusercontent.com/tv-player/tvbox-line/main/tv/fj.json

一木
https://ghproxy.com/https://raw.githubusercontent.com/xianyuyimu/TVBOX-/main/TVBox/%E4%B8%80%E6%9C%A8%E8%87%AA%E7%94%A8.json

kvymin
https://agit.ai/kvymin/TV/raw/branch/master/Box.json

agit/abc
https://agit.ai/n/b/raw/branch/a/b/c.json

zzz1
https://agit.ai/mmmgit/tvbox/raw/branch/main/zzz1.json

```

