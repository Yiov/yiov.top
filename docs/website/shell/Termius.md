# Termius的安装及使用




## 简介

一款强大的跨平台 SSH 工具，支持Windows、iOS、Mac、Android、Linux系统

官网：https://www.termius.com/

仓库：https://github.com/termius

![](/shell/termius/termius-01.png)




## 安装

在 [官网下载](https://www.termius.com/download/) 对应的客户端即可

![](/shell/termius/termius-02.png)


::: details iOS端安装
在 Appstore 搜索并下载 [termius](https://apps.apple.com/cn/app/id549039908)

![](/shell/termius/ios/ios-01.png)
:::






::: details windows端安装

在官网 [Termius下载页](https://www.termius.com/download/windows) ，点击 `Download.EXE` 下载

![](/shell/termius/win/win-01.png)

下载完成后，点击 `Install Termius.exe` 自动安装

![](/shell/termius/win/win-02.png)

安装好后打开 Termius 

![](/shell/termius/win/win-03.png)

![](/shell/termius/win/win-04.png)

点击 `set up your vault` 设置账户

![](/shell/termius/win/win-05.png)

点击 `Connect with email` 用邮箱注册

![](/shell/termius/win/win-06.png)

设置你的密码

![](/shell/termius/win/win-07.png)

这里邀请团队和导入数据，按需添加，我直接点 `later`

![](/shell/termius/win/win-08.png)

![](/shell/termius/win/win-09.png)

最后，点 `Start connecting` 开始连接

![](/shell/termius/win/win-10.png)

![](/shell/termius/win/win-11.png)

:::




## 使用


:::: details iOS端使用

打开，点击 `Hosts` ，再点右上角 `+`

::: tip 说明
可以不登录账号使用，登录只是方便同步信息
:::

![](/shell/termius/ios/ios-02.png)


点 `New Host` ，填写信息后，save保存

::: tip 说明
`host name` 填公网IP

`Username` 填账户名 `root`

`Password` 填服务器密码
:::

![](/shell/termius/ios/ios-03.png)


这样就登录成功了，点击当前标签也可关闭连接

![](/shell/termius/ios/ios-04.png)

::::





::: details windows端使用及汉化

我们使用 [Termius-Chinese-Patch](https://github.com/WizisCool/Termius-Chinese-Patch) 做好的汉化

点击下载

![](/shell/termius/win/win-12.png)

右边有下载按钮

![](/shell/termius/win/win-13.png)

解压，输入解压密码

![](/shell/termius/win/win-14.png)

鼠标对着 Termius 右键 - 属性 - 打开文件安装位置

![](/shell/termius/win/win-15.png)

进入 `resources` 文件夹，将解压的 `app.asar` 复制到安装目录替换

![](/shell/termius/win/win-16.png)

重新打开 Termius，基本上已经汉化好了，其他已经能看懂了

![](/shell/termius/win/win-17.png)

点击创建主机

![](/shell/termius/win/win-18.png)

地址处输入公网ip，SSH处输入账号密码，连接

![](/shell/termius/win/win-19.png)

添加并继续

![](/shell/termius/win/win-20.png)

这样就连接成功了，右侧可以选择背景色及字体大小

![](/shell/termius/win/win-21.png)

:::


## 特别鸣谢


* [@WizisCool：Termius-Chinese-Patch](https://github.com/WizisCool/Termius-Chinese-Patch)

