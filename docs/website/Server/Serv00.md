# Serv00免费主机注册

> 更新时间：2024-6-26


## 简介

波兰主机商 [MyDevil.net](http://www.mydevil.net/) 推出的免费空间服务

官网：https://www.serv00.com/

![](/server/serv00/serv00-01.png)


## 特色

* 存储：512MB + 3GB容量，不限单个文件大小

* 流量：不限月流量

* 域名：提供免费域名1个 `你的用户名.serv00.net`，也可绑定自己域名

* SSL证书：[Let's Encrypt](https://letsencrypt.org/zh-cn/)

* 有效期：10年（90天内必须登录一次，含SHH登录）


## 注册

点击官网的 `Register an account` 进入 [offer页面](https://www.serv00.com/offer)

![](/server/serv00/serv00-02.png)


点击 [Create account](https://www.serv00.com/offer/create_new_account) 创建账户

![](/server/serv00/serv00-03.png)

输入姓名邮箱等信息，这里的答案是：`0`，创建

![](/server/serv00/serv00-04.png)

成功后会将账号、密码、后台面板地址、数据库账密、DNS以及网址都发到邮箱中

::: details 提示如下
The account has been created successfully. Further instructions have been sent to the provided e-mail address.
:::

![](/server/serv00/serv00-05.png)

我们打开控制面板，复制邮箱中的账号密码登录

::: details 显示的是波兰语看不懂？
点击登录框下方的小字 `Zmień język`，弹窗中选择 `English`，最后点击 `Zapisz zmiany` 保存即可
:::

![](/server/serv00/serv00-06.png)

这个就是后台管理面板了

![](/server/serv00/serv00-07.png)

我们先改一下密码，随机密码真的不好记

注意：密码必须包含大小写及数字

![](/server/serv00/serv00-08.png)





## 使用

能干的事情太多了，自己慢慢研究吧


::: details 创建静态页面网站

点击 `File Manager` 进入文件管理器

![](/server/serv00/serv00-09.png)

进入目录 `domains/用户名.serv00.net/public_html`，可以将这个index.html删掉

![](/server/serv00/serv00-10.png)

点击 `send - from computer` 上传我们准备好的静态网站 [static-green-nav.zip](https://dzp.lanzouj.com/ikleX22s6hyf)

![](/server/serv00/serv00-11.png)

上传完成后，右键点击 `Explore`，进入查看压缩包内容

![](/server/serv00/serv00-12.png)

全选所有文件，右键点击 `Extract`，提取文件

![](/server/serv00/serv00-13.png)

选择刚才的目录 `domains/用户名.serv00.net/public_html` ，确定

![](/server/serv00/serv00-14.png)

最后进入你的网站查看是否成功 `用户名.serv00.net`

![](/server/serv00/serv00-15.png)

:::






::: details SSH登录

使用自己喜欢的 [shell工具](../shell/) ，我用 [Xshell](../shell/Xshell.md) 演示

新建 - 连接 - 主机，输入邮箱中给的主机地址

![](/server/serv00/serv00-16.png)

用户登录验证，输入账号密码，确定

![](/server/serv00/serv00-17.png)

然后点击连接

![](/server/serv00/serv00-18.png)

选择接受并保存

![](/server/serv00/serv00-19.png)

这里如果还需要认证，选择 `Keyboard Interactive` 键盘输入验证

![](/server/serv00/serv00-20.png)

再次输入密码，确定

![](/server/serv00/serv00-21.png)

看到 Serv00.com 的图形就是成功了

![](/server/serv00/serv00-22.png)

:::