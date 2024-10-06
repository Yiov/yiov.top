# Reqable抓包工具的使用



## 简介

一款跨平台的HTTP/HTTPS抓包工具，前身是 HttpCanary (小黄鸟)

官网：https://reqable.com/zh-CN/

仓库：https://github.com/reqable/reqable-app

![](/reqable/reqable-01.png)





## 安装


::: details iOS端安装

在 AppStore 搜索下载并安装：[Reqable](https://apps.apple.com/cn/app/id6473166828)

![](/reqable/ios/ios-01.png)

这里我不用电脑，就选择 `独立模式`，进入界面后点左上角三横 `≡`

![](/reqable/ios/ios-02.png)

证书管理 - 安装根证书到手机

![](/reqable/ios/ios-03.png)

按照教程，点击 `下载` ，完成

![](/reqable/ios/ios-04.png)

跳转到Safari浏览器，下载描述文件

![](/reqable/ios/ios-05.png)

设置 - 已下载描述文件 - 安装

![](/reqable/ios/ios-06.png)

显示已验证就是安装完成了

![](/reqable/ios/ios-07.png)

设置 - 通用 - 关于本机 - 证书信任设置

![](/reqable/ios/ios-08.png)

打开 `Reqbale` 信任开关即可，回到Reqbale就能看到证书已安装

![](/reqable/ios/ios-09.png)

:::



:::: details Android端安装

手机打开 [官网](https://reqable.com/zh-CN/) ，下载客户端，我这里选择v8版

::: details 不知道下载哪个？

* universal：64/32位手机通用版

* arm64-v8a：64位处理器，常见于市面主流手机

* armeabi-v7a：32位处理器，常见于老旧款手机

* x86_64：64位处理器，常见于平板

* x86：32位处理器，常见于平板和模拟器
:::

![](/reqable/android/android-01.png)

下载完成后，我选择 `独立模式` ，需要电脑一起使用请选择协同模式

![](/reqable/android/android-02.png)

进入APP提示需要安装Reqable辅助服务，点查看，下载

![](/reqable/android/android-03.png)

完成后会提示下载目录，一般默认 `Download - Reqable`

![](/reqable/android/android-04.png)

安装辅助服务后打开

![](/reqable/android/android-05.png)

提示准备就绪即可，然后再Reqable上打开辅助开关

![](/reqable/android/android-06.png)

为了避免辅助服务掉后台，我们需要开启自启动

长按辅助服务图标 - 应用信息 - 打开自启动开关

![](/reqable/android/android-07.png)

最后安装证书，左上角三横 `≡` - 证书管理 - 安装根证书到手机

![](/reqable/android/android-08.png)

我使用 `Root设备` 演示，点击证书，完成下载即可，一会要用到

::: details 非root设备怎么安装
点击非Root设备标签，按照官方的安装教程来就行了
:::

![](/reqable/android/android-09.png)

下载 [MT管理器](https://mt2.cn/) ，安装并打开，点击右侧根目录中的 `etc`

::: details MT管理器需要root后使用吗
如果移动文件出现挂载失败，就需要！

我是使用的小米开发版，然后用 [Syslock解锁分区](https://dzp.lanzouj.com/ioB9Npn6xtg) 即可

![](/reqable/android/android-10.png)

![](/reqable/android/android-11.png)

:::

::: details MT目录简单解读

* 左侧：默认为内部存储 (也可在左侧菜单栏切换)

* 右侧：默认为根目录，即系统目录 (也可在左侧菜单栏切换)

:::

![](/reqable/android/android-12.png)

然后分别进入`Security - cacerts` 目录

![](/reqable/android/android-13.png)

右侧就停在这里页面，然后点击左侧内部存储找到 `Download` 文件夹进入

![](/reqable/android/android-14.png)

在 `Reqable` 文件夹找到刚才下载的证书，长按 `复制` 到右侧

![](/reqable/android/android-15.png)

确定就完成证书安装了，Reqable应用证书界面就看到是已经安装好了

::: details 手机设备上如何查看证书是否已经安装

设置 - 安全 - 更多安全设置 - 加密与凭据

![](/reqable/android/android-17.png)

信任与凭据，在系统标签中 个人和工作有 `Reqable LLC` 即可

![](/reqable/android/android-18.png)

:::


![](/reqable/android/android-16.png)


::::







## 使用


我们要抓某个APP的数据，先点击开始抓包，然后再进APP操作，抓到后点停止


演示：抓取 `滴滴果园token` (苹果和安卓方法一致)

---

点击开始抓包，提示开启VPN，确定

![](/reqable/reqable-02.png)

进入滴滴APP - 免费领水果，浇一次水

![](/reqable/reqable-03.png)


返回Reqable停止抓包，右上角 `…` - 按域名分组

点开 `game.xiaojikeji.com` 

![](/reqable/reqable-04.png)

在其中一个POST结果中进去，请求体里找到 `toekn` 值

![](/reqable/reqable-05.png)





## 特别鸣谢


* [京小辅](https://mp.weixin.qq.com/s/iAuW6if4o_P9wfR1h2pfeg)「京东ck_安卓端」


