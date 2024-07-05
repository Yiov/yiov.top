# wordpress详细安装教程


> 更新时间：2023-12-22


## 简介


一款使用php语言开发的博客平台，并逐步演化成一款内容管理系统(CMS)，是使用最广泛的网站建设平台之一


官网：https://cn.wordpress.org/


![](/wordpress/wordpress-01.png)




## 准备工作


* [服务器1台](./Server/)

* [域名1个](./domain/)

* [安装shell工具](./shell/)

* [安装宝塔面板](./BT.md)




## 下载

点击wordpress中国官网，点击右上角 [获取](https://cn.wordpress.org/download/) - 下载并安装 - 下载

::: tip 说明
下载就可以了，不要解压！一会用
:::

![](/wordpress/wordpress-02.png)



## 添加站点


打开宝塔面板后，点 网站-添加站点

![](/wordpress/wordpress-03.png)


域名填入你买的域名，FTP不创建，数据库MySQL，密码可以自己改的好记一点，提交


![](/wordpress/wordpress-04.png)


这样站点就创建完成了

::: tip 说明
要记一下，等会要用
:::

![](/wordpress/wordpress-05.png)




## 上传



文件  `/www/wwwroot/dh.***.com` 目录，把里面的文件都删掉

![](/wordpress/wordpress-06.png)


上传下载好的wordpress压缩包，完成后右键解压

![](/wordpress/wordpress-07.png)

![](/wordpress/wordpress-08.png)


但是，这样我们站点只有个文件夹，而不是整个wordpress的文件

我们进文件夹，把里面文件全部剪切出来

::: tip 说明
事后记得删除空文件夹和压缩包哦
:::

![](/wordpress/wordpress-09.png)

![](/wordpress/wordpress-10.png)

![](/wordpress/wordpress-11.png)




## 安装



访问你的域名即可，我的是`dh.***.com`，你们按自己的域名来

![](/wordpress/wordpress-12.png)


数据库名和用户名是一样的，密码自己设的，后面2项默认不用改

::: tip 说明
数据主机也可以填IP，表前缀除非有多个wordpress在数据库，避免冲突就改下，否则默认
:::

![](/wordpress/wordpress-13.png)

这样就可以了，运行程序

![](/wordpress/wordpress-14.png)


填写站点信息，密码自己改一下

![](/wordpress/wordpress-15.png)


完成后邮箱也会受到消息，我们点登录

![](/wordpress/wordpress-16.png)




## 登录

进入了后台，外观-主题里找 或 上传主题

::: tip 说明
我整理了一些自己喜欢的主题 [自行参考](./source)
:::

后台的地址：http://你的域名.com/wp-admin/

![](/wordpress/wordpress-17.png)





## 常见问题

::: details 1.网站打不开，突然403了

很有可能是误删了wordpress文件，回收站也没有文件就只能重装，数据还在不要怕

1.先备份

* 首先打开宝塔 - 数据库，选择自己的网站 `备份数据库`

* 在网站目录找到 `wp-config.php` 手动下载到电脑，这里是重要的恢复数据

* 在 `wp-content/themes` 目录找到 `wordpress的主题文件夹` 打包并下载到电脑

2.恢复

* 清空网站目录，重新解压安装wordpress，数据库账户密码填和之前一样的

* 在 `wp-content/themes` 目录上传刚备份的主题文件夹并解压，然后登录wordpress后台启用主题

* 在电脑右键记事本打开刚备份的 `wp-config.php`，全选复制，粘贴到网站目录的 `wp-config.php` 文件中保存即可

:::