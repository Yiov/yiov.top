
# Xshell的安装及使用





## 简介

Xshell是 NetSarang 公司旗下的一个安全终端模拟软件（SSH）

官网：[https://www.xshell.com/](https://www.xshell.com/zh/)

![](/shell/Xshell/Xshell-01.png)




## 安装


进入 [Xshell下载](https://www.xshell.com/zh/all-downloads/) 官网

::: tip 说明
现在官网已经可以免费使用了
:::

进入页面后，点击 所有下载 - [家庭/学校免费](https://www.xshell.com/zh/free-for-home-school/)


![](/shell/Xshell/Xshell-02.png)


选择 `Xshell` 下载即可

![](/shell/Xshell/Xshell-03.png)


下载好后，我们双击开始安装

![](/shell/Xshell/Xshell-04.png)



客户信息默认，目的地文件夹，改一下，**别装C盘**

点 `浏览`

![](/shell/Xshell/Xshell-05.png)



我们把C盘改成D盘，其他不要动，确定，下一步

![](/shell/Xshell/Xshell-06.png)



安装，直到完成

![](/shell/Xshell/Xshell-07.png)


打开后会要求注册，填好用户名和邮箱，提交

关掉！再打开即可！不需要真的去注册！

![](/shell/Xshell/Xshell-08.png)





## 使用



打开Xshell，左上 - 新建会话

![](/shell/Xshell/Xshell-09.png)



名称随便，主机填你的服务器 `公网IP` ，端口默认22

![](/shell/Xshell/Xshell-10.png)



`用户身份登陆`，用户名默认 `root` ，密码服务器选系统的时候自己设置的

::: tip 说明
要是忘记了，去服务器控制台那里重置密码
:::

![](/shell/Xshell/Xshell-11.png)



弹出主机密钥验证，接受保存就好

![](/shell/Xshell/Xshell-12.png)



正常就连接成功了

::: tip 说明
如果不小心X掉了，选择服务器，鼠标右键打开即可
:::

![](/shell/Xshell/Xshell-13.png)



root目录用 `~`,根目录用 `/`

```
cd /
ls
```

![](/shell/Xshell/Xshell-14.png)


