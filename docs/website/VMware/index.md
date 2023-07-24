# VM虚拟机安装centos

::: warning 更新时间
最近更新：2021-11-15

激活码百度一大堆
:::


本文仅演示虚拟机运行Linux系统的 [CentOS](https://www.centos.org/)

由于Linux的开源，市场上还有其他的发行版，[debian](https://www.debian.org/)、[商业版 Redhat](https://www.redhat.com/)、[Ubuntu](https://cn.ubuntu.com/)等

::: tip 说明
除了linux系统，还可以同样的方法安装 window 以及 PE系统

虚拟机做服务器的最大弊病就是：要一直开机！
:::


## 小科普


Linux指的是Linux系统内核，只有终端命令界面，无图形界面

CentOS是Linux发行套件系统，同时拥有终端命令界面和图形界面





## 1.下载虚拟机


我下载的时候还是V16.0，复制到迅雷打开下载

```
https://softdown01.rbread04.cn/huajunsafe/VMware-workstation-full-16.0.0-16894299.exe?timestamp=610ff0a5&auth_key=fb62b4bde191eaec6565e5d87231a4b9
```
::: tip 说明
原地址：[https://www.onlinedown.net/soft/2062.htm](https://www.onlinedown.net/soft/2062.htm)

切记！下载地址-普通下载地址-通用网络下载
:::





## 2.安装虚拟机

![](./VMware-01.png)


安装比较简单，点点点就好了，唯一注意的就是更改下安装位置，**别安装在C盘**了

![](./VMware-02.png)


安装好，打开，我们等会再用




## 3.下载Centos镜像


阿里云镜像：[https://mirrors.aliyun.com/centos/](https://mirrors.aliyun.com/centos/)

建议选择CentOS 7 以上，我选的7.9

选`7.9.2009/isos/x86_64/`，然后选DVD的，iso的后缀文件,`CentOS-7-x86 64-DVD-2009.ISO`

![](./VMware-03.png)

![](./VMware-04.png)


下载完成后，记住文件夹路径，一会要用，或者自己单独放一个文件夹





## 4.新建虚拟机



打开虚拟机，创建虚拟机

![](./VMware-05.png)



选择 `自定义 -下一步`

![](./VMware-06.png)



这里 `稍后安装操作系统`，`linux` `CentOS7 64位`

![](./VMware-07.png)



我是先再F盘新建了一个文件夹 `Virtual Machines` ，再 `浏览` 中选中这个文件夹

::: tip 说明
取简单一点就好，不用像我这么复杂
:::

![](./VMware-08.png)




处理器默认1，我选了2；内存默认1G，我选了2G

::: tip 说明
看自己电脑是否吃的消

本人电脑：I5 四核处理器，8G运存
:::

![](./VMware-09.png)





选 **桥接网络**，下一步按推荐的默认

::: tip 桥接和NAT的区别
1.桥接通过路由器联网

主机 → 路由器 ← 虚拟机

2.NAT通过主机联网

路由器 ← 主机 ← 虚拟机
:::


![](./VMware-10.png)



默认推荐下一步，创建新虚拟磁盘

![](./VMware-11.png)





磁盘容量我选了50G，正常是够用了，除非你还有其他的要装，100G都可以

![](./VMware-12.png)



自定义硬件，把声卡和打印机移除，用不到两个玩意，移除后完成

![](./VMware-13.png)

![](./VMware-14.png)




这样我们的虚拟机就建好了

![](./VMware-15.png)








## 5.安装CentOS


鼠标右键虚拟机-设置

![](./VMware-16.png)

选CD/DVD，使用ISO映像文件-浏览，即 [第3步下载centos镜像](#_3-下载centos镜像) 那个镜像文件 `后缀是.iso`，确定。

![](./VMware-17.png)



进入了系统开机界面，选择第一个

如果上下键没反应，左下提示按 `Ctrl+G` ，上下移动看看，选最上面的那个，**选中了是白色的字体**

::: tip 说明
Install CentOS 7（安装CentOS 7）

Test this media & install CentOS 7（测试并安装CentOS 7）

Troubleshooting（修复故障）
:::

![](./VMware-18.png)



默认的就是US键盘，语言是English，不要担心，一步步来就可以

![](./VMware-19.png)




设置时间


![](./VMware-20.png)


亚洲-上海，核对下时间和日期，完后点完成

![](./VMware-21.png)




安装所需软件



![](./VMware-22.png)


选 `Server with GUI`

![](./VMware-23.png)







安装位置并分区



![](./VMware-24.png)



选我即将分区 `I will configure partitioning`

![](./VMware-25.png)


点 `+` 添加分区，`/boot` 分 500M

::: tip 说明
这里只能用键盘上的数字打字，小键盘不可用
:::

![](./VMware-26.png)




同样的方式分配其他两个，完成

::: tip 说明
`/`  分 10G

`swap` 分 2G
:::

![](./VMware-27.png)


点接受更改

![](./VMware-28.png)



设置网卡和主机名



![](./VMware-29.png)


这里把网卡开关打开，`Host name`的主机名，自己随便设置，点一下应用，完成

::: warning 注意
这里的 `IP Address` 记一下，这个就是我们的 `假公网IP`

如果忘记密码，可以进CentOS系统-桌面-鼠标右键-打开终端(open Terminal)，输入`ip addr`，查看ens32或者33之类的IP地址即可
:::

![](./VMware-30.png)



开始安装



现在，点开始安装就行了

![](./VMware-31.png)




安装好之前，我们先设置root密码

::: warning 重要
这个就是登录服务器用到的密码
:::

![](./VMware-32.png)


这个密码一定要牢记，要用的，别弄太复杂

![](./VMware-33.png)




接下来就是创建管理员账户

![](./VMware-34.png)


账号随便，密码要记得，登录用的

![](./VMware-35.png)




耐心等待系统安装完成，点 `Reboot` 重启就好了

![](./VMware-36.png)


进入了开机界面

![](./VMware-37.png)


安装许可证



![](./VMware-38.png)


这里勾选接受，完成

![](./VMware-39.png)

结束许可信息，即可

![](./VMware-40.png)







## 登录



进入登录界面，输入自己设置的账密

![](./VMware-41.png)


这里我们选择`汉语`，一路点前进，就行

![](./VMware-42.png)


终于，我们完成了整个CentOS的安装，开始使用

![](./VMware-43.png)









## 常见问题





#### 1.虚拟机打不开 报错

> 报错：出现您的主机不满足在启用 Hyper-V 或 Device/Credential Guard 的情况下运行 VMware Workstation 的最低要求


解决：尝试过各种方法，不行，直接更新了本机电脑的微软系统，竟然可以了！

> 可能产生的原因：安装了docker desktop，导致和Hyper-V冲突。别看网上说关掉Hyper-V，这样桥接就没有网络了




#### 2.虚拟机如何进PE系统

选择其他安装方式中的第3个：`生成可启动的ISO` 自己选一个本地盘符文件夹放镜像文件

![](./VMware-44.png)

虚拟机CD/DVD选择生成的ISO镜像文件，启动即可

![](./VMware-45.png)



#### 3.搭建网站本地调试，域名怎么弄

按照下面路径修改host文件，填加IP+域名即可

```
C:\Windows\System32\drivers\etc
```

找到 `hosts` 文件，鼠标右键-记事本方式打开- 拉倒底部 输入`虚拟机的IP+空格+任意域名`，保存关掉

```
192.168.1.154 alibaba.com
```

在宝塔中添加站点，输入此网址即可


