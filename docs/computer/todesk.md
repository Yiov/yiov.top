# Todesk远程开关电脑




## 简介

跨平台远程协作软件，支持Windows、Linux、Mac、Android、iOS等系统

其他远程软件：[TeamViewer](https://www.teamviewer.cn/)、[向日葵](https://sunlogin.oray.com/)、[AnyViewer](https://www.anyviewer.cn/)

官网：https://www.todesk.com/

![](/todesk/todesk-01.png)






## 安装


:::: details Windows系统安装
[Tosesk官网](https://www.todesk.com/download.html) 下载安装

![](/todesk/todesk-02.png)


注册好账号，并登录

::: details 登录密码如何修改？
登录网页端，网页端页面修改即可
:::

![](/todesk/todesk-03.png)

::::








:::: details Linux系统安装


由于系统原因，[Linux需要切换为图形界面](../website/Centos.md) 的系统才可安装，我这里以CentOS为例

我们进入CentOS后，打开 [Todesk官网](https://www.todesk.com/download.html) 下载Linux版本

![](/todesk/todesk-19.png)


我这里用的是CentOS，下载CentOS7即可

::: tip 说明
其他版本按自己的系统下载
:::

![](/todesk/todesk-20.png)


下载后我们把下载的文件，放到 `主目录` 才可以正确安装！否则会提示找不到文件！

::: warning 注意
找不到的看我图示，就是和公共、视频、图片等同一级目录
:::

![](/todesk/todesk-21.png)


然后我们看 [官方文档](https://www.todesk.com/linux.html) ，输入安装命令

::: warning 注意
请把这里安装包名改对，不然也安装不了

自己下的包名是什么，这里就填什么，少一个字都不行!
:::

![](/todesk/todesk-22.png)

在桌面-鼠标右键-打开终端，输入命令，等待安装完成

```sh
#安装，注意自己的包名是否一致
sudo rpm -Uvh todesk-v4.3.1.0-c7-x86_64.rpm
```

![](/todesk/todesk-23.png)

![](/todesk/todesk-24.png)



然后启动todesk，安装好登录账号就可以用了

```sh
#启动命令
todesk
```
![](/todesk/todesk-25.png)

![](/todesk/todesk-26.png)


::::



## 使用

:::: details 远程控制：手机 → 电脑

手机端在应用商店安装好todesk，并登录`同样的账号`

填入`远程设备代码`  点击远程控制，填入`临时密码`即可远程桌面

::: details 临时密码会变，如何固定？
高级设置 - 安全设置 - 临时密码更新，改成手动即可
:::

![](/todesk/todesk-04.png)


远程成功后，就可以操作电脑了，单击、双击命令说明里面也有


![](/todesk/todesk-05.png)

::::




:::: details 手机远程开机（远程唤醒）

如无必要，不建议折腾，买个智能插座就可以了

---

硬性条件：需要有同一局域网的设备(电脑或手机)


::: tip Todesk远程唤醒
流程：A手机(外地) → 远程B安卓机(室内wifi) → 远程开机电脑(室内wifi)

A手机 → 远程电脑

:::



A手机，建立一次电脑连接后

在我的-设置-打开 `Wake 0n Lan` 开关

![](/todesk/todesk-06.png)



B手机，开启`允许远程本设备`- 控制模式 - 开启所有开关-开启被控模式


![](/todesk/todesk-07.png)

在我的-设置-打开 `Wake 0n Lan` 开关

![](/todesk/todesk-08.png)


然后A手机连接一次B手机，是否能正常连接，确认可以后断开

::: warning 注意
B手机和电脑必须在同一WIFI下，[详情请参考Todesk文档：远程开机如何配置 Wake On Lan](https://www.todesk.com/helpcenter/questions-86.html)
:::



我的电脑 - 右键 - 属性 - 设备管理器

![](/todesk/todesk-09.png)

网络适配器，找到网卡-右键-属性，我这里是 `Realtek...Controller`

![](/todesk/todesk-10.png)


电源管理 选项卡里面开启 `允许此设备唤醒计算机`

![](/todesk/todesk-11.png)



然后在 高级 选项卡里找到`wake on magic packet`、`关机网络唤醒`、`魔术封包唤醒`里设置成 `开启`

`网络唤醒和关机连接速度`，改成 100Mbps 优先，确定！一定要点确定生效！

![](/todesk/todesk-12.png)





电脑关机，进入主板 BIOS 里面设置 WOL 唤醒功能的开关

```
不同主板 BIOS 里关于 WOL 网络唤醒的选项一般是类似这些字眼:
wake on lan；
resume on lan；
power on PME；
power on by PCI-E device;
Power on by Onboard LAN
等等，将其设为 Enabled 即可
```

以我的 `微星msi主板` 演示，只是演示！其他根据自己的主板来！

重启按`DEL`键进入BIOS，SETTINGS-Advanced

![](/todesk/todesk-13.png)


再进入 Wake Up Event Setup

![](/todesk/todesk-14.png)


将 Resume By PCI-E Device 改成 `Enabled`，按 `F10` 保存并推出

![](/todesk/todesk-15.png)



最后路由器设置，我是斐讯路由器，浏览器 `192.168.2.1` 进入路由器

::: details 其他路由器怎么进
手机设置 - 无限局域网 - wifi旁的`i`，路由器
:::

功能设置 - DCHP服务 - 绑定，这样即便重启了地址也不会变

::: tip 说明
其他路由器自己找下，只要把MAC地址和IP绑定即可
:::

![](/todesk/todesk-16.png)



所有设置都完成了，我们关掉电脑

A手机用数据打开Tosesk - 设备列表 - 远程B安卓手机

安卓机也打开Tosesk - 设备列表 - 远程开机电脑

::: tip 说明
B手机要和电脑在同一WIFI下哦
:::

![](/todesk/todesk-17.png)

电脑已进入开机界面，完结

![](/todesk/todesk-18.png)

::::






