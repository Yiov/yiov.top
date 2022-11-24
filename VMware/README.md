
## VM虚拟机安装教程

</br>

更新时间：2021-11-15

除了linux系统，还可以同样的方法安装window以及PE系统


</br>
</br>

## 前言


本文仅演示虚拟机运行linux系统的`CentOS`

> Linux和Windows区别：同样是操作系统；liux开源 用命令执行；window微软开发 直接打开使用

> Linux指的是Linux系统内核，只有终端命令界面，无图形界面；而CentOS是Linux发行套件系统，同时拥有终端命令界面和图形界面。由于Linux的开源，市场上还有其他的发行版，debian(商业版 Redhat)、Ubuntu、Debian等

</br>
</br>



## 1.虚拟机安装

</br>
</br>

### 1.1下载虚拟机V16.0


复制到迅雷打开下载
```
https://softdown01.rbread04.cn/huajunsafe/VMware-workstation-full-16.0.0-16894299.exe?timestamp=610ff0a5&auth_key=fb62b4bde191eaec6565e5d87231a4b9
```

原地址：https://www.onlinedown.net/soft/2062.htm

> #切记！下载地址-普通下载地址-通用网络下载


</br>


### 1.2安装虚拟机

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-01.png)


安装比较简单，点点点就好了，唯一注意的就是更改下安装位置，**别安装在C盘**了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-02.png)


安装好，打开，我们等会再用


</br>
</br>







## 2.下载Centos7镜像

</br>
</br>


阿里云镜像：https://mirrors.aliyun.com/centos/


建议选择CentOS 7 以上，我选的7.9


选`7.9.2009/isos/x86_64/`，然后选DVD的，iso的后缀文件,`CentOS-7-x86 64-DVD-2009.ISO`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-03.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-04.png)


下载完成后，记住文件夹路径，一会要用，或者自己单独放一个文件夹



</br>
</br>


## 3.新建虚拟机

</br>
</br>



打开虚拟机，创建虚拟机

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-05.png)



选择 `自定义 -下一步`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-06.png)



这里 `稍后安装操作系统`，`linux` `CentOS7 64位`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-07.png)



虚拟机位置别放C盘，自己选一个盘新建一个，然后 `浏览` 中选中这个文件夹

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-08.png)




处理器默认1，我选了2；内存默认1G，我选了2G

> 看自己电脑是否吃的消

> 本人电脑：I5 四核处理器，8G运存

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-09.png)





选 **桥接网络**，下一步按推荐的默认

> 说明：桥接和NAT的区别
> 
> 1.桥接通过路由器联网
> 主机 → 路由器 ← 虚拟机
>
> 2.NAT通过主机联网
> 路由器 ← 主机 ← 虚拟机



![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-10.png)



默认推荐下一步，创建新虚拟磁盘

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-11.png)





磁盘容量我选了50G，正常是够用了，除非你还有其他的要装，100G都可以

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-12.png)



自定义硬件，把声卡和打印机移除，用不到两个玩意，移除后完成

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-13.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-14.png)




这样我们的虚拟机就建好了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-15.png)



</br>
</br>



## 4.安装CentOS 7

</br>
</br>




### 4.1安装系统

</br>

鼠标右键虚拟机-设置

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-16.png)

选CD/DVD，使用ISO映像文件-浏览，即`第2步`下载的那个镜像文件 `后缀是.iso`，确定。

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-17.png)



</br>


### 4.2开启此虚拟机


进入了系统开机界面，选择第一个
如果上下键没反应，左下提示按Ctrl+G，上下移动看看，选最上面的那个，**选中了是白色的字体**

> Install CentOS 7（安装CentOS 7）
>
> Test this media & install CentOS 7（测试并安装CentOS 7）
>
> Troubleshooting（修复故障）


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-18.png)



默认的就是US键盘，语言是English，不要担心，一步步来就可以

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-19.png)



</br>



### 4.3设置时间

</br>

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-20.png)


亚洲-上海，核对下时间和日期，完后点完成

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-21.png)



</br>



### 4.4安装所需软件

</br>

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-22.png)


选 `Server with GUI`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-23.png)


</br>




### 4.5安装位置并分区

</br>

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-24.png)



选我即将分区 `I will configure partitioning`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-25.png)


点 + 添加分区，/boot 分500M

> 这里只能用键盘上的数字打字，小键盘不可用

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-26.png)




同样的方式分配其他两个，完成

>  /  分 10G
>
> swap 分 2G

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-27.png)


点，接受更改

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-28.png)



</br>



### 4.6设置网卡和主机名

</br>

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-29.png)


这里把网卡开关打开，`Host name`的主机名，自己随便设置，点一下应用，完成

> 这里的IP Address记一下，一会会用到
>
> 如果忘记密码，可以进CentOS系统-桌面-鼠标右键-打开终端(open Terminal)，输入`ip addr`，查看ens32或者33之类的IP地址即可


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-30.png)







</br>

### 4.7开始安装

</br>

现在，点开始安装就行了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-31.png)


</br>


### 4.8设置root密码

</br>

安装好之前，我们先设置root密码

> 重要：这个就是登录服务器用到的密码

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-32.png)


这个密码一定要牢记，要用的，别弄太复杂

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-33.png)

</br>



### 4.9创建账户

</br>

接下来就是创建管理员账户

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-34.png)


账号随便，密码要记得，登录用的

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-35.png)




耐心等待系统安装完成，点**Reboot**重启就好了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-36.png)


进入了开机界面

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-37.png)

</br>


### 4.10安装许可证

</br>

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-38.png)


这里勾选接受，完成

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-39.png)

结束许可信息，即可

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-40.png)


</br>




## 完成安装

</br>

进入登录界面，输入`第4.9步`的账密登录

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-41.png)


这里我们选择`汉语`，一路点前进，就行

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-42.png)


终于，我们完成了整个CentOS的安装，开始使用

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-43.png)


</br>






## 常见问题

</br>
</br>


### 1.虚拟机打不开 报错

> 报错：出现您的主机不满足在启用 Hyper-V 或 Device/Credential Guard 的情况下运行 VMware Workstation 的最低要求


解决：尝试过各种方法，不行，直接更新了微软系统，竟然可以了！

可能产生的原因：安装了docker desktop，导致和Hyper-V冲突。别看网上说关掉Hyper-V，这样桥接就没有网络了


</br>

### 2.虚拟机如何进PE系统

选择其他安装方式中的第3个：`生成可启动的ISO` 自己选一个盘符文件夹生成

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-44.png)

虚拟机CD/DVD选择生成的ISO镜像文件，启动即可

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/VMware/VMware-45.png)

</br>

### 3.搭建网站本地调试，域名怎么弄

按照下面路径修改host文件，填加IP+域名即可

```
C:\Windows\System32\drivers\etc
```

`hosts` 鼠标右键-记事本方式打开- 拉倒底部 输入`虚拟机的IP+空格+任意域名`，保存关掉

```
192.168.1.154 alibaba.com
```

在宝塔中添加次网址即可


