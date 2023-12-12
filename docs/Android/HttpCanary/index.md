# 安卓抓包工具安装及使用

> 更新时间：2021-10-13


## 简介

抓包顾名思义，即通过工具来截取当前网页的内容

工具：

* [HttpCanary](https://dzp.lanzouj.com/i8XJZ1hnd1zg)（俗称小黄鸟/小蓝鸟）

* Packet Capture（已凉）

...

::: details 其他抓包工具
由于工具繁多，只列举常见且好用的APP，毕竟方法相差不大

苹果端点我，电脑抓包用 `Fiddler`
:::


## 准备工作

::: tip 说明
缺一不可，达不到的无视以下教程
:::

* 手机root (小米系统切换为开发版)

* 解锁system分区


:::: details 解锁分区步骤

先解锁一下分区，我自己是小米，用的Syslock

::: tip 说明
其他手机请自测，一般刷面具root完成后就解锁分区了，如MT管理器无法移动文件就过来解锁
:::

下载Syslock：https://www.coolapk.com/apk/com.lerist.syslock

![](./HttpCanary-01.png)


下载后，打开按钮

![](./HttpCanary-02.png)


重启后，再次打开Syslock，开启即可完成

![](./HttpCanary-03.png)

::::



## 安装


### 导出证书


::: warning 注意
由于安卓11以后系统不再信任以外的证书，导致证书无法安装

https抓包时目标APP无网络，需要借助MT管理器手动导入安装证书
:::


下载小黄鸟高级解锁版：

https://dzp.lanzouj.com/i8XJZ1hnd1zg



安装好后打开，左上角三横 - 设置

![](./HttpCanary-04.png)


SSL证书设置 - 导出HttpCanary根证书

::: tip 说明
这里为什么不点安装呢，因为就是装不了，才不能按正常的步骤
:::

![](./HttpCanary-05.png)



类型选第一个 `System Trusted(.0)`  导出成功会提示下载到了相应的目录

::: tip 说明
默认目录：/HttpcCanary/cert/
:::

![](./HttpCanary-06.png)


---


### MT管理器

下载MT管理器：https://www.coolapk.com/game/21048/

![](./HttpCanary-07.png)


安装完成后打开，简单说一下，这里分别显示的是根目录和SD卡目录

::: tip 说明
知道是目录就好了，那就开始操作
:::

![](./HttpCanary-08.png)


点进MT管理器右栏根目录的文件夹 `date/date`，然后搜索黄鸟的应用包名 `com.guoshi.httpcanary`

::: tip 说明
找到一个就可以点停止搜索了
:::

![](./HttpCanary-09.png)


点击搜索到的结果，再点绿色的包进去

![](./HttpCanary-10.png)



再点 `cache` 文件夹进去

![](./HttpCanary-11.png)


点底部的同步按钮，这样两边栏就都一致了，选择 `HttpCanary.pem`，复制

![](./HttpCanary-12.png)


复制时，把文件名改成 `HttpCanary.jks`，确定

::: tip 说明
主要是备份一个，以方便失误后恢复
:::

![](./HttpCanary-13.png)


点击左边栏空白处，再点左上角 `三横 - 内部存储 - HttpCanary`

![](./HttpCanary-14.png)


再点 `cert` 文件夹进去，找到我们之前导出的根证书

![](./HttpCanary-15.png)



点击右边栏空白处，再点左上角 `三横-根目录`

![](./HttpCanary-16.png)



分别进入 `etc/security/cacerts` 文件夹，这里面就都是系统的证书了

我们选择证书长按复制到根目录即可

![](./HttpCanary-17.png)


到这里，证书就全部安装完成了

::: tip 说明
可以到卸载更证书里看到，系统的证书里已经有黄鸟了
:::

![](./HttpCanary-18.png)







## 使用


我们要抓某个APP的数据，先点击开始抓包，然后再进APP操作，抓到后点停止


为方便演示，以下以 [滴滴果园](#滴滴果园) 和 [京东CK](#京东ck) 为例

---

### 滴滴果园


进入滴滴APP主界面，找到免费领水果，但先不要进去

![](./HttpCanary-19.png)


然后打开黄鸟，点击蓝色的飞机开始抓包，切到滴滴APP，点 `免费种水果`

::: tip 说明
先点开抓包，再进APP操作，这样才能精准的抓到数据
:::

![](./HttpCanary-20.png)


直到完成进入滴滴果园，点击绿色的飞机停止抓包

![](./HttpCanary-21.png)


右上角放大镜 - 服务器Host

![](./HttpCanary-22.png)

勾选 `game.xiaojukeji.com` ，就剩4个了，点POST包进去

![](./HttpCanary-23.png)


请求里的 `toekn`值就是我们需要的数据

![](./HttpCanary-24.png)



---

### 京东CK


直接上工具 JD任务小辅：https://mp.weixin.qq.com/s/iAuW6if4o_P9wfR1h2pfeg


安装登录APP-右上角-设置-导出登录信息，粘贴到任意聊天界面，提取pt信息

::: tip 说明
我们只需要 `pt_key=***;pt_pin=***;`
:::

![](./HttpCanary-25.png)

![](./HttpCanary-26.png)



