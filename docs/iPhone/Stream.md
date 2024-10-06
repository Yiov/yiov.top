# 苹果抓包工具安装及使用




## 简介

iOS开发的网络抓包工具，可以快速抓取和分析网络数据

![](/Stream/Stream.png)



## 安装


APP Store下载 [Stream](https://apps.apple.com/cn/app/stream/id1312141691)

![](/Stream/Stream-01.png)


下载安装后打开，但要先安装好证书后，才能正常使用

点击 开始抓包 - 允许 - 去安装证书


![](/Stream/Stream-02.png)



安装CA证书，跳转到浏览器后，点允许


![](/Stream/Stream-03.png)


提示描述文件下载完成，设置 - 通用 - 描述文件与设备管理`

找到这个Stream描述文件，安装


![](/Stream/Stream-04.png)


安装好就是 `已验证√` 了


![](/Stream/Stream-05.png)


然后就是信任证书**，设置-通用-关于本机-证书信任设置，把开关打开


![](/Stream/Stream-06.png)


返回APP看，这样就安装完成了，记得把抓包关了先


![](/Stream/Stream-07.png)









## 使用


我们要抓某个APP的数据，先点击开始抓包，然后再进APP操作，抓到后点停止


为方便演示，以下以 [滴滴果园](#滴滴果园) 和 [京东CK](#京东ck) 为例

---


### 滴滴果园

进入滴滴APP主界面，找到免费领水果，但先不要进去

![](/Stream/Stream-08.png)


然后打开Stream，点击开始抓包，切到滴滴APP，点 `免费种水果`

::: tip 说明
先点开抓包，再进APP操作，这样才能精准的抓到数据
:::

![](/Stream/Stream-09.png)


直到完成进入滴滴果园，点击停止抓包

![](/Stream/Stream-10.png)


进入抓包历史查看，刚刚抓到的数据

![](/Stream/Stream-11.png)


接下来就是筛选数据，右上角放大镜，域名下选择 `game.xiaojikeji.com`

![](/Stream/Stream-12.png)


现在就4条记录了，选POST包进去，请求拉倒底 `查看JSON`

![](/Stream/Stream-13.png)


这里的 `token` 值就是我们要的数据

![](/Stream/Stream-14.png)


---

### 京东CK


打开浏览器，输入网址：https://m.jd.com/

::: tip 多账号步骤
浏览器开无痕模式 - 登账号 - 抓CK1 - 叉掉网页 - 关无痕 - 退出浏览器...(多账号循环)
:::

![](/Stream/Stream-15.png)



打开Stream，开启抓包-返回京东页面刷新一下

![](/Stream/Stream-16.png)


停止抓包，然后在抓包历史里找数据

![](/Stream/Stream-17.png)


点放大镜，筛选要找的包，就剩这一个

::: tip 说明
方法：GET

域名：api.m.jd.com
:::

![](/Stream/Stream-18.png)


进去后点请求，下拉到最下面，找到 `pt_key=***;pt_pin=***;` 就我我们要的数据

::: warning 注意
这里的分号不能漏，且不能有空格符
:::

![](/Stream/Stream-19.png)


还可以利用 [Alook浏览器](https://apps.apple.com/cn/app/alook/id1261944766) - 工具箱 - 开发者工具 - cookies ，一键提取

![](/Stream/Stream-20.png)

![](/Stream/Stream-21.png)


如果觉得筛选数据麻烦，可以用 [点我☛快捷指令提取](https://www.icloud.com/shortcuts/f47146c2831a4e8e8bb7f06daac1b858)

![](/Stream/Stream-22.png)

![](/Stream/Stream-23.png)





