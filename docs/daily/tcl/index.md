# TCL电视卸载预装应用

> 最近更新：2023-11-26


## 准备工作

### 开启adb调试

设置 - 系统信息，用遥控器依次点击 `上下左右`

看到桌面弹出ADB开关，将ADB开启


### 查看电视IP

设置 - 网络 - 有线/无线网络 - 网络详情


### 安装工具

[ADB工具包：请戳这里下载](https://pan.baidu.com/s/1xZgfr9kXYcvJXWXYP-BD1w?pwd=upfk#/home////)

[package view apk：请戳这里下载](https://pan.baidu.com/s/1rStKVh1-NrkvSPJXhIr8cw?dp-logid=32093100140706790002&pwd=k296#/home////)

[Emoth UI：请戳这里下载](https://pan.baidu.com/s/1P3y2ErP0F0w2uFjvNyZBXg?dp-logid=46171800286954240002&pwd=xcmy#/home////)



## ADB安装

Windows

适合windows版本: https://dl.google.com/android/repository/platform-tools_r33.0.0-windows.zip
解压缩到自定义的安装目录 例如：D:\adb\platform-tools_r33
接下来 把当前adb路径添加到环境变量中去

引用:
windows+r组合键 打开运行 输入sysdm.cpl回车
高级->环境变量->系统变量->path
将adb的存放路径添加进path中 保存即可
打开cmd执行：adb --version 会显示当前的adb版本信息


环境变量设置：打开“我的电脑->属性->系统高级设置->环境变量”，在Path变量中添加platform-tools文件夹的路径：

运行ADB：打开命令行窗口，输入adb，能打印出adb的版本号和用法，即为安装成功。


二、Mac

由于我使用的mac 早期已安装homebrew软件管理包工具(已安装可以忽略)和android-platform-tools（更多详情 ）



1.打开mac上的终端 执行以下命令即可
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.co ... all/HEAD/install.sh)"
完成homebrew安装后 再执行android-platform-tools安装
执行以下命令：
brew install --cask android-platform-tools
待完成后 再执行adb --version 会显示当前的adb版本信息



## IP连接设备
adb connect ip:5555 例如：192.168.1.50:5555 [5555是来自build.prop指定的port]
如果连接成功 使用adb devices查看



## 开启安装应用权限

```sh
adb shell setprop persist.tcl.installapk.enable 1
adb shell setprop persist.tcl.debug.installapk 1
```

执行adb shell进入shell模式，然后执行以下两条命令就可以成功打开第三方应用安装权限：


三、安装应用

安装应用

```sh
adb install  xxxx.apk   //[apk所在路径]
```

接着要采用第二个工具包package view apk获取TCL电视所有app名称；首先使用adb工具将package view apk安装到电视里，命令步骤是：adb install C:\Users\23672\Downloads\package_view.apk；这里需要注意，文件替换位置需按照你下载的文件package view apk的地址就好

执行后会提示success成功，然后打开电视的package view apk，就会看到下图所示画面，可以截图或拍照做好统计；

这里红色的就是预装应用，灰色的可能是TCL电视自己的应用，绿色的可能就是系统广告了，而黄色的估计就是系统桌面；当然不同版本电视或固件对应的可能有些差别，不过大致都差不多；如果怕电视玩坏的可以考虑删除部分应用，比如红色的和绿色的，以天气为例子，具体操作如下图所示；

成功后就会提示success，其他应用也是按照这里删除就好；
当然绿色的就是系统广告了：具体操作如下图所示

成功后也会提示success，就能完成预装应用和系统广告了；

四、删除应用

1.进入shell
adb shell



2.查看已安装的应用
pm list package



3.查看属于tcl的应用
pm list packages | grep 'tcl'



4.删除指定应用
例如 T商店
pm uninstall --user 0 com.tcl.tshop

04、将Emoth UI设置默认系统桌面
首先下载Emoth UI桌面并安装到电视，然后输入命令：adb install
C:User\23672\Downloads\Emoth UI.apk,还是将文件路径换成自己


然后进入原始桌面，找到电视管家将“自启动”和“直接进入应用”都设置为“Emoth UI”；
然后将冻结原始桌面，在ADB输入命令如下图所示，就可默认桌面了；

一、小米/TCL/海信/索尼如何进工程模式？各品牌电视开ADB教程

1.长虹电视

1.1 新款带语音的遥控器：按下【菜单键】后，当焦点移至 “情景模式” 下的 “标准模式” 菜单上时，按【上、下、右】组合键，弹出数字软键盘，当输入【0 8 1 6】进入工厂菜单。

1.2 带数字按键的遥控：
游客，如果您要查看本帖隐藏内容请回复

2.TCL电视

将音量减到0，调出“主菜单”, 光标移至"对比度"；在 2 秒内迅速按数字键【9 7 3 5】可进入工厂模式。

3.小米电视

在系统菜单中进入“设置”-“关于”-“联系客服”；在 “联系客服” 界面继续按住遥控器的 【下方向键】，即可看到【工厂模式】的入口。

4.海信电视

按下遥控器的【菜单键】，在菜单键中选择“声音设置”，再之后选择平衡选项，输入0532，完成之后，即可进入到海信电视的工程模式。

5.创维酷开电视

打开系统设置页面，进入到本机“详细信息”；遥控器依次按下【上上下下左右左右】方向键，就可以进入工程模式了。

6.索尼电视

开机播放有线电视节目，按遥控器上【电源/待机键】，进入待机，然后依此按下遥控器上的【屏显】、【5】、【音量+】、【电源/待机】，后进入工程模式。

7.乐视电视

首先“开机” -> “主页" -> 按遥控器上数字键 【2580】，即可进入工程模式。

8.三星电视

将电视进入待机状态，依次按下遥控器上的【显示器】、【项目键】、【静音键】、【电源键】，即进入工程模式，关闭电源就可以退出工程模式。

9.康佳电视

按一下菜单按钮，画面弹出普通功能设置菜单。这时连续点按5次“回看”按钮，即可打开康佳电视工厂模式菜单。

一般在 “工程模式” 或 “开发者模式” 中开启 ADB 调试功能，甚至有些智能电视直接默认开启了 ADB。

二、各品牌电视Recovery刷机

同时，安卓电视也有 Recovery 刷机模式，下面是一些电视的 Recovery 模式的进入方法：

1.创维

断电再重新通电的同时连续点按遥控的上键（I71和I71C、A818/A818C是点按遥控的左键），即可进入Recovery模式。

2.华为盒子

先将盒子关机，然后开机，在开机时开始一直按遥控器的【菜单键】和【音量-】（不停点按两个键，不是长按），就会进入Recovery 模式。

3.小米

开机中，同时按住遥控器上的【主页键】和【菜单键】，机器进入Recovery 模式。

4.其他

有的还有像手机一样，开机按【电源键】和【音量-】进入 Recovery 模式，另外值得注意的是有些电视可以在 “工程模式” 中选择进入Recovery 模式。


TCL电视V8-S38AT01-LF1V113第三方精简固件

链接: https://pan.baidu.com/s/1h0hFmZnyTkbNuLwp9aZdyg
提取码:
本帖隐藏的内容
w957


隐藏的内容
用adb connect 连上电视后，运行以下脚本。

https://www.123pan.com/s/n8Wvjv-TlHW3.html

提取码:LOhx


具箱解压密码：www.znds.com


https://www.znds.com/tv-1212290-1-1.html

https://www.znds.com/tv-1219253-1-1.html

https://www.znds.com/tv-1189881-1-1.html

https://www.znds.com/tv-1236797-1-1.html

https://www.znds.com/tv-1236683-1-1.html

https://t.cj.sina.cn/articles/view/1823348853/6cae187502001b399?vt=4

https://www.znds.com/tv-1216156-1-1.html

https://www.77itv.com/9030.html

https://www.znds.com/tv-1239983-1-1.html

https://www.znds.com/tv-1239437-1-1.html

https://www.znds.com/tv-1240227-1-2.html

