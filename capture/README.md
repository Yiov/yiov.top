
## 手机抓包工具安装及使用方法

</br>

更新时间：2021-10-13


电脑抓包用Fiddler，自己搜，本文只讲手机端


* IOS端
  * Thor (俗称锤子，已凉)
  * HTTP Catcher （俗称网球，已跑路）
  * Stream（免费）

* 安卓
  * Packet Capture（已量）
  * HttpCanary（俗称小黄鸟/小蓝鸟）


由于工具繁多，只列举2个好用的APP，其他使用方法相差不大



</br>
</br>


## 安装

</br>

### 1.Stream（免费，限IOS）

</br>


APP Store下载：https://apps.apple.com/cn/app/stream/id1312141691

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-01.png)




下载安装后打开，但要先安装好证书后，才能正常使用

点击 **开始抓包-允许-去安装证书**


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-02.png)



**安装CA证书**，跳转到浏览器后，点允许


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-03.png)


提示描述文件下载完成，**设置-通用-描述文件与设备管理**

找到这个Stream描述文件，安装


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-04.png)


安装好就是 **已验证√ **了


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-05.png)


然后就是**信任证书**，**设置-通用-关于本机-证书信任设置**，把开关打开


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-06.png)


返回APP看，这样就安装完成了，记得把抓包关了先


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-07.png)


</br>
</br>


### 2.HttpCanary（免费，限安卓已root）


</br>

下载HttpCanary_v9.2.8.1_高级解锁版：https://dzp.lanzouy.com/iAEQc0bts5kj


> 说明：由于安卓11以后系统不再信任以外的证书，导致证书无法安装，https抓包时目标APP无网络，需要借助MT管理器手动导入安装证书

</br>

★ 硬性条件，缺一不可，达不到的无视以下教程

> 原因：手机必须root才可以使用MT管理器，手机不解锁分区，就会导致MT文件无法复制移动，会提示挂载失败

* 手机root

* 解锁system分区

* MT管理器


安装好后打开，左上角三横-设置

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-08.png)


**SSL证书设置-导出HttpCanary根证书**

> 这里为什么不点安装呢，因为就是装不了，才不能按正常的步骤
> 
> 不要点 安装 ！没用！

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-09.png)



类型选第一个，**System Trusted(.0)**，导出成功会提示下载到了相应的目录

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-10.png)



先解锁一下分区，我自己是小米，用的Syslock

> 其他手机请自测，一般刷面具root完成后就解锁分区了，如MT管理器无法移动文件就过来解锁

下载 Syslock：https://www.coolapk.com/apk/com.lerist.syslock

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-11.png)


下载后，打开按钮

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-12.png)


重启后，再次打开Syslock，开启即可完成

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-13.png)



下载MT管理器：https://www.coolapk.com/game/21048/

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-14.png)



安装完成后打开，简单说一下，这里分别显示的是根目录和SD卡目录

> 知道是目录就好了，那就开始操作


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-15.png)




点进MT管理器 **右栏** 的文件夹 `date/date`，然后搜索黄鸟的应用包名 `com.guoshi.httpcanary`

> 找到一个就可以点停止搜索了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-16.png)


点击搜索到的结果，再点绿色的包进去

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-17.png)



再点 **cache** 文件夹进去

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-18.png)


点底部的同步按钮，这样两边栏就都一致了，选择 **HttpCanary.pem**，复制

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-19.png)


复制时，把文件名改成**HttpCanary.jks**，确定

到这里我们的CA证书就弄好了，但是根证书还需要装到手机系统里才行

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-20.png)


点击 **左边** 栏空白处，再点左上角 **三横-内部存储-HttpCanary**

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-21.png)


再点 `cert` 文件夹进去，找到我们之前**导出的根证书**

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-22.png)



点击 **右边** 栏空白处，再点左上角 **三横-根目录**

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-23.png)



分别进入**etc/security/cacerts**文件夹，这里面就都是系统的证书了

我们选择证书长按复制到根目录即可

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-24.png)


到这里，证书就全部安装完成了

> 可以到卸载更证书里看到，系统的证书里已经有黄鸟了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-25.png)






### 使用

</br>

我们要抓某个APP的数据，先点击开始抓包，然后再进APP操作，抓到后点停止



为方便演示，以下以 **滴滴果园** 和 **京东CK**为例

> 注：请看清楚先后步骤


<details>
<summary>IOS抓包：滴滴果园 [展开]</summary>

</br>

进入滴滴APP主界面，找到免费领水果，**但先不要进去**

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-26.png)


然后打开Stream，点击**开始抓包**，切到滴滴APP，点**免费种水果**

> 先点开抓包，再进APP操作，这样才能精准的抓到数据


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-27.png)




直到完成进入滴滴果园，点击**停止抓包**

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-28.png)



进入抓包历史查看，刚刚抓到的数据

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-29.png)



接下来就是筛选数据，右上角放大镜，域名下选择 `game.xiaojikeji.com`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-30.png)


现在就4条记录了，选POST包进去，请求拉倒底 `查看JSON`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-31.png)


这里的`token`值就是我们要的数据

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-32.png)


</details>

</br>




<details>
<summary>IOS抓包：京东CK [展开]</summary>

</br>

打开浏览器，输入网址：https://m.jd.com/

> 多账号步骤：浏览器开无痕模式-登账号-抓CK1-叉掉网页-关无痕-退出浏览器...(多账号循环)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-33.png)



打开Stream，开启抓包-返回京东页面刷新一下

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-34.png)



停止抓包，然后在抓包历史里找数据

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-35.png)


点放大镜，筛选要找的包，就剩这一个

> 方法：GET
> 
> 域名：api.m.jd.com

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-36.png)


进去后点请求，下拉到最下面，找到 `pt_key=***;pt_pin=***;` 就我我们要的数据

> 注意：这里的分号不能漏，且不能有空格符

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-37.png)


还可以利用 [Alook浏览器](https://apps.apple.com/cn/app/alook/id1261944766) - 工具箱 - 开发者工具 - cookies ，一键提取

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-38.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-39.png)


如果觉得筛选数据麻烦，可以用快捷指令提取：https://www.icloud.com/shortcuts/f47146c2831a4e8e8bb7f06daac1b858

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-40.png)



</details>

</br>






<details>
<summary>安卓抓包：滴滴果园 [展开]</summary>

</br>

进入滴滴APP主界面，找到免费领水果，**但先不要进去**

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-26.png)


然后打开黄鸟，点击蓝色的飞机开始抓包，切到滴滴APP，点**免费种水果**

> 先点开抓包，再进APP操作，这样才能精准的抓到数据

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-42.png)


直到完成进入滴滴果园，点击绿色的飞机停止抓包

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-43.png)


右上角放大镜 - 服务器Host

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-44.png)

勾选 `game.xiaojukeji.com` ，就剩4个了，点POST包进去

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-45.png)

请求里的 `toekn`值就是我们需要的数据

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-46.png)

</details>

</br>





<details>
<summary>安卓抓包：京东CK [展开]</summary>

</br>

直接上工具 JD任务小辅：https://dzp.lanzoui.com/iCMXQr2edpg


安装登录APP-右上角-设置-导出登录信息，粘贴到任意聊天界面，提取pt信息

> 我们只需要 `pt_key=***;pt_pin=***;`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-47.png)


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/capture/capture-48.png)




</details>

</br>

