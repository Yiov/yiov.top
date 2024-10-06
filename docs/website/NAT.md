# 浅谈内网穿透




## 前言

实话讲我个人是不太喜欢的，之前家里有闲置电脑，于是用内网穿透当做服务器使用，结果电费还挺高，几百块一年的服务器不香吗


### 1.为什么要内网穿透

因为不知道公网IP，只能这样选择这样的方式

::: tip 说明
公网：所有人可访问

内网：仅限局域网内用户访问

内网穿透：所有人可访问内网
:::

### 2.怎么获得公网IP

联通或者电信：直接打电话给运营商开通，就说要装摄像头

移动的：emm，有点难

当然也不排除，三大运营商都不给开


### 3.公网IP可以用来做什么

搭建服务器、远程访问等等










## 常用的穿透工具



免费内网穿透工具还是挺多的，基本都罗列出来了

::: tip 关于网速
免费基本都是1M，网速在128K

日常用倒是没啥问题
:::






::: details 神卓互联

官网：https://www.shenzhuohl.com/

官方教程：https://www.shenzhuohl.com/article/1/shenzhuo/show/6

优劣：两个映射，不限流量，稳定程度中等

![](/NAT/NAT-01.png)

:::




::: details 花生壳

官网：https://hsk.oray.com/

官方教程：http://service.oray.com/question/8146.html

优劣：**需6元**开通使用，赠送一个域名，两个映射，每月1G流量

![](/NAT/NAT-02.png)

:::






::: details Sunny-Ngrok

官网：https://www.ngrok.cc/

说明：下拉到底有免费服务器，注册账号，开通隧道即可

官方教程：https://www.ngrok.cc/_book/start/ngrok_windows.html

![](/NAT/NAT-03.png)

:::




::: details Natapp

官网：https://natapp.cn/

官方教程：https://natapp.cn/article/natapp_newbie

优劣：两条免费隧道，不定时强制更换域名

![](/NAT/NAT-04.png)


:::





::: details 大象(原WeNAT)


官网：https://nat.72wo.com/

说明：下载即可使用，现已改为付费

![](/NAT/NAT-05.png)

:::



::: details 闪库

官网：http://www.ipyingshe.com/

说明：开通免费隧道即可，据说是2M网速

![](/NAT/NAT-06.png)

:::





::: details 小蝴蝶

官网：https://www.npsvip.com/

说明：说有免费方案的，我没找到

![](/NAT/NAT-07.png)

:::







::: details nat123

官网：http://www.nat123.com/

说明：最右侧软件下载使用即可

![](/NAT/NAT-08.png)

:::





::: details Ngrok·搭建类

官网：[https://ngrok.com/](https://ngrok.com/)

搭建教程：https://yangqiang.im/?p=750

![](/NAT/NAT-09.png)

:::




::: details Ssh+autossh·搭建类

官网：http://www.harding.motd.ca/autossh/

搭建教程：https://yangqiang.im/?p=698

![](/NAT/NAT-10.png)

:::






::: details Frp·搭建类

项目地址：https://github.com/fatedier/frp

![](/NAT/NAT-11.png)

:::






::: details Spike·搭建类

项目地址：https://github.com/slince/spike

![](/NAT/NAT-12.png)

:::




::: details Lanproxy·搭建类

项目地址：https://github.com/ffay/lanproxy

![](/NAT/NAT-13.png)

:::




::: details smarGate·搭建类


项目地址：https://github.com/lazy-luo/smarGate

![](/NAT/NAT-14.png)

:::






## 演示

::: tip 说明
本次演示`神卓互联`的使用，实际体验并不是很顺滑
:::

适用于：服务器搭建在虚拟机中，也不知道公网IP，人不在电脑旁，但想远程访问


神卓互联官网：https://www.shenzhuohl.com/
![](/NAT/NAT-15.png)


安装好后，注册一个账号并登录-左下 `添加映射`

![](/NAT/NAT-16.png)


填好后保存，返回点刷新，卡退了的重新打开软件

::: tip 说明
应用名称：随便写

内网主机：填内网IP，`win+R`键 - 输入 `cmd` - 输入 `ipconfig` 查询
 
内网端口：比如宝塔面板填8888
:::

![](/NAT/NAT-17.png)


复制地址就可以了，手机断开WIFI了，用数据也可以访问


![](/NAT/NAT-18.png)


然后你不能退出软件，一整天都要挂着，否则会断开映射，最糟心的是这个

::: tip 说明
你可以考虑其他映射（都差不多），或者付费，或者买轻量服务器
:::

![](/NAT/NAT-19.png)




