# VMware虚拟机安装及使用





## 简介

VMware Workstation 是 VMware（威睿）公司为专业用户打造的一款电脑虚拟化软件，现已被 BROANCOM（博通）收购

它可以模拟Windows、Linux、macOS等系统，当成本地测试的服务器

官网：https://www.vmware.com/

![](/VMware/VMware-01.png)




## 下载

::: danger 下载前说明
由于被 [BROANCOM·博通](https://www.broadcom.com/) 收购，需要翻墙并注册，非常繁琐

不会折腾的，直接 [华军软件园下载](https://www.onlinedown.net/soft/2062.htm)，就不用看 [下载](#下载) 的步骤
:::


在官网点击 `Products` ，Desktop Hypervisor 标签 中的 `Workstation Pro`

![](/VMware/VMware-02.png)

然后选择 `VMware Workstation Pro for PC` 下载

![](/VMware/VMware-03.png)

跳转到 [博通登录页面](https://access.broadcom.com/default/ui/v1/signin/) ，我们点右上角 `REGISTER` 注册

![](/VMware/VMware-04.png)

在 [注册页面](https://profile.broadcom.com/web/registration) ，输入你的邮箱

![](/VMware/VMware-05.png)

填写姓名等基本信息，点 `Create` 创建

![](/VMware/VMware-06.png)

补充详细信息，就不弄了，点 `I'll do it later`

![](/VMware/VMware-07.png)

返回 [博通登录页面](https://access.broadcom.com/default/ui/v1/signin/) ，注意！这里的username是你的邮箱！

![](/VMware/VMware-08.png)

登录成功进入后台，点 `My Downloads`，右上角图标处选 `VMware Cloud Foundation`

![](/VMware/VMware-09.png)

然后选择 `VMware Workstation Pro`

![](/VMware/VMware-10.png)

选择自己喜欢的版本，这里个人注册的只能选 `Personal Use`

![](/VMware/VMware-11.png)

选择最新的版本即可

![](/VMware/VMware-12.png)

点击云图标下载

![](/VMware/VMware-13.png)

首次下载需要填写信息，然后提交 `submit`

![](/VMware/VMware-14.png)

返回重新下载即可，下载完成后安装

![](/VMware/VMware-15.png)




## 安装

安装比较简单，注意！这里的安装位置改一下，不要装载C盘！

![](/VMware/VMware-16.png)



## 激活

安装完成后，提示需要VMware 17的激活码，任选一个填入

```
4A4RR-813DK-M81A9-4U35H-06KND

NZ4RR-FTK5H-H81C1-Q30QH-1V2LA

JU090-6039P-08409-8J0QH-2YR7F

4Y09U-AJK97-089Z0-A3054-83KLA

4C21U-2KK9Q-M8130-4V2QH-CF810

MC60H-DWHD5-H80U9-6V85M-8280D

JU090-6039P-08409-8J0QH-2YR7F

ZF3R0-FHED2-M80TY-8QYGC-NPKYF

FC7D0-D1YDL-M8DXZ-CYPZE-P2AY6

ZC3TK-63GE6-481JY-WWW5T-Z7ATA

1Z0G9-67285-FZG78-ZL3Q2-234JG
```


::: details 其他版本：16/15 激活码

VMWare 16密钥：

```
ZF3RO-FHED2-M80TY-8QYGC-NPKYF
YF390-OHF8P-M81RQ-2DXQE-M2UT6
ZF71R-DMX85-08DQY-8YMNC-PPHV8
```

VMWare 15密钥：

```
UY758-0RXEQ-M81WP-8ZM7Z-Y3HDA
VF750-4MX5Q-488DQ-9WZE9-ZY2D6
UU54R-FVD91-488PP-7NNGC-ZFAX6
YC74H-FGF92-081VZ-R5QNG-P6RY4
YC34H-6WWDK-085MQ-JYPNX-NZRA2
```
:::


![](/VMware/VMware-17.png)




## 系统配置


创建新的虚拟机

![](/VMware/VMware-18.png)

自定义(高级) - 下一步

![](/VMware/VMware-19.png)


这里 `稍后安装操作系统`，我这里用 `linux` `CentOS7 64位` 演示

::: danger 注意
如果你要装Windows，就选择 `Microsoft Windows` ！
:::

![](/VMware/VMware-20.png)


我提前在F盘新建了一个文件夹，选择它作为虚拟机系统的目录

![](/VMware/VMware-21.png)




处理器我选的2核，每个数量为1，内存我选了2G

::: tip 说明
你的电脑配置好，可以选高点，担心电脑卡的和我选一样
:::

![](/VMware/VMware-22.png)




选 `桥接网络`,I/O控制器默认 `LSI Logic` 即可

::: details 桥接和NAT的区别
1.桥接通过路由器联网

主机 → 路由器 ← 虚拟机

2.NAT通过主机联网

路由器 ← 主机 ← 虚拟机
:::


![](/VMware/VMware-23.png)

下一步默认 `SCSI`，创建新虚拟磁盘

![](/VMware/VMware-24.png)

磁盘大小 `50G` `将虚拟磁盘拆分成多个文件`，然后给虚拟机命名

![](/VMware/VMware-25.png)

`自定义配件` 中可以移除用不上的 `声卡` `打印机` `USB`

![](/VMware/VMware-26.png)

![](/VMware/VMware-27.png)


这样我们的虚拟机就建好了

![](/VMware/VMware-28.png)







## 系统安装


:::: details CentOS系统安装

[CentOS](https://www.centos.org/) 为Linux开源的其中一个版本，其他的还有 [Debian](https://www.debian.org/)、[商业版 Redhat](https://www.redhat.com/)、[Ubuntu](https://cn.ubuntu.com/)等

::: details CentOS与Linux的关系
* Linux：Linux系统内核，只有终端命令界面，无图形界面

* CentOS：Linux发行套件系统，同时拥有终端命令界面和图形界面
:::


下载 [Centos镜像：阿里云镜像](https://mirrors.aliyun.com/centos/)，我选的 Centos `7.9.2009/`

![](/VMware/centos/centos-01.png)

进 `isos` 目录

![](/VMware/centos/centos-02.png)

`x86_64` 目录

![](/VMware/centos/centos-03.png)

然后选 `DVD` `iso` 的后缀文件 `CentOS-7-x86_64-DVD-2009.iso`

![](/VMware/centos/centos-04.png)

下载完成后，我将它放在了F盘

::: tip 说明
放哪自己随意，记得住就行
:::

![](/VMware/centos/centos-05.png)



点击要安装系统的虚拟机 ，鼠标右键 - 设置

![](/VMware/centos/centos-06.png)


点击 `CD/DVD` - `使用ISO映像文件` - `浏览`

![](/VMware/centos/centos-07.png)

选择刚才下载的iso镜像文件，确定

![](/VMware/centos/centos-08.png)

开启虚拟机

![](/VMware/centos/centos-09.png)


进入系统开机界面，用键盘上下键，选择第一个 `Install CentOS 7`

::: details 上下键没反应？
左下提示按 `Ctrl+G` ，上下移动看看，**选中了是白色的字体**
:::


::: tip 说明
Install CentOS 7（安装CentOS 7）

Test this media & install CentOS 7（测试并安装CentOS 7）

Troubleshooting（修复故障）
:::

![](/VMware/centos/centos-10.png)


默认的就是US键盘，语言是English，不要担心，下一步

![](/VMware/centos/centos-11.png)



设置时间 `DATE & TIME`

![](/VMware/centos/centos-12.png)


亚洲 `Asis` - 上海，核对下时间和日期，完后点完成

![](/VMware/centos/centos-13.png)


安装所需软件 `SOFTWARE SELECTION`

![](/VMware/centos/centos-14.png)


选 `Server with GUI`

![](/VMware/centos/centos-15.png)


安装位置并分区 `INSTALLATION DESTINATION`


![](/VMware/centos/centos-16.png)


选即将分区 `I will configure partitioning`

![](/VMware/centos/centos-17.png)


点 `+` 添加分区，`/boot` 分 500M

::: tip 说明
这里只能用字母键盘上的数字打，小键盘不可用
:::

![](/VMware/centos/centos-18.png)




同样的方式分配其他两个，完成

::: tip 说明
`/`  分 10G；`swap` 分 2G
:::

![](/VMware/centos/centos-19.png)


点接受更改

![](/VMware/centos/centos-20.png)



设置网卡和主机名

![](/VMware/centos/centos-21.png)


这里把网卡开关打开，`Host name`的主机名自己随便设置，应用，完成

::: warning 注意
这里的 `IP Address` 记一下，这个就是我们的 `假公网IP`
:::

::: details IP忘记了？
进CentOS系统 - 桌面 - 鼠标右键 - 打开终端(open Terminal)，输入`ip addr`，查看ens32或者33之类的IP地址即可
:::

![](/VMware/centos/centos-22.png)



现在，点开始安装就行了

![](/VMware/centos/centos-23.png)




安装好之前，我们先设置root密码

::: danger 这个很重要！
登录服务器，用到的root密码
:::

![](/VMware/centos/centos-24.png)


这个密码一定要牢记，要用的，别弄太复杂

![](/VMware/centos/centos-25.png)




接下来就是创建管理员账户

![](/VMware/centos/centos-26.png)


账号随便，密码要记得，登录用的

![](/VMware/centos/centos-27.png)




耐心等待系统安装完成，点 `Reboot` 重启就好了

![](/VMware/centos/centos-28.png)


进入了开机界面

![](/VMware/centos/centos-29.png)


安装许可证



![](/VMware/centos/centos-30.png)


这里勾选接受，完成

![](/VMware/centos/centos-31.png)

结束许可信息，即可

![](/VMware/centos/centos-32.png)



进入登录界面，输入自己设置的账密

![](/VMware/centos/centos-33.png)


这里我们选择`汉语`，一路点前进，就行

![](/VMware/centos/centos-34.png)


终于，我们完成了整个CentOS的安装，开始使用

![](/VMware/centos/centos-35.png)

::::








:::: details Windows系统安装


Itellyou 官网：https://next.itellyou.cn

::: tip 说明
原老站点是MSDN：https://msdn.itellyou.cn/
:::

![](/VMware/win/win-01.png)


注册登录即可，选择我们要下载的系统

> 我直接用百度等第三方账号授权登录

![](/VMware/win/win-02.png)


比如 win11 系统，这里有一些简单的信息预览

![](/VMware/win/win-03.png)


下拉一点，不知道下哪个版本的，就下`建议使用`，选ed2k用迅雷下载好

::: details 版本有什么区别

版本无使用区别，VL为团购版，零售版为单卖版

* business_editions版，俗称VL版，包含：

    * Education(教育版)
    
    * Enterprise(企业版)

    * Professional(专业版)

* consumer_editions版，俗称零售版，包含：

    * Home(家庭版)
    
    * Education(教育版)
    
    * Professional(专业版)
:::



::: details 企业版 / 教育版 / 专业版 / 家庭版 对比
* 企业版：功能最全，价格最贵；装机比较常见；主要受众 大企业

* 教育版：功能次之，价格较贵；主要受众 学校等教育机构

* 专业版：功能多，价格高；装机比较常见；主要受众 中小企业

* 家庭版：功能少，价格低；主要受众 普通家庭
:::

![](/VMware/win/win-04.png)


下载完成后，可以将ISO单独放一个文件夹，方便使用

![](/VMware/win/win-05.png)

点击要安装系统的虚拟机 ，鼠标右键 - 设置

点击 CD/DVD 选择生成的ISO镜像文件，确定

::: tip 说明
如果你要激活系统，请使用 [云萌](https://cmwtat.cloudmoe.com/cn.html) 工具在虚拟机里激活
:::

![](/VMware/win/win-06.png)

::::







::: details PE系统安装


以微PE为例，进入 [微PE官网](https://www.wepe.com.cn/download.html) 下载工具箱

![](/VMware/pe/pe-01.png)

打开工具，选择 `其他安装方式` 中的最后一个 `生成可启动的ISO`

![](/VMware/pe/pe-02.png)

然后，选一个本地盘文件夹放生成的文件 `立即生成ISO`

![](/VMware/pe/pe-03.png)

点击要安装系统的虚拟机 ，鼠标右键 - 设置

点击 CD/DVD 选择生成的ISO镜像文件，确定

![](/VMware/pe/pe-04.png)

启动虚拟机即可

![](/VMware/pe/pe-05.png)

:::





## 常见问题


1.虚拟机需要一直开机吗

如果你要使用，必须开


2.虚拟机打不开，报错

> 报错：出现您的主机不满足在启用 Hyper-V 或 Device/Credential Guard 的情况下运行 VMware Workstation 的最低要求


解决：尝试过各种方法，不行，直接更新了本机电脑的微软系统，竟然可以了！

> 可能产生的原因：安装了docker desktop，导致和Hyper-V冲突。别看网上说关掉Hyper-V，这样桥接就没有网络了


3.搭建网站本地调试，域名怎么弄

按照下面路径修改host文件，填加IP+域名即可

```
C:\Windows\System32\drivers\etc
```

找到 `hosts` 文件，鼠标右键-记事本方式打开- 拉倒底部 输入`虚拟机的IP+空格+任意域名`，保存关掉

```
192.168.1.154 alibaba.com
```

在宝塔中添加站点，输入此网址即可


