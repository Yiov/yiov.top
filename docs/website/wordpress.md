# wordpress详细安装教程





## 简介


一款使用php语言开发的博客平台，并逐步演化成一款内容管理系统(CMS)，是使用最广泛的网站建设平台之一


官网：https://cn.wordpress.org/


![](/wordpress/wordpress-01.png)




## 准备工作


* [服务器1台](./Server/)

* [域名1个](./domain/)

* [安装shell工具](./shell/)

* [安装宝塔面板](./BT.md)



## 安装

在官网点击右上角 [获取wordpress](https://cn.wordpress.org/download/) - 下载，不要解压！一会用

![](/wordpress/wordpress-02.png)


登录宝塔面板后，点 网站 - 添加站点

![](/wordpress/wordpress-03.png)


域名填入你的域名，FTP不创建，数据库MySQL，密码可以自己改的好记一点，提交


![](/wordpress/wordpress-04.png)


这样站点就创建完成了

::: tip 说明
要记一下，等会要用
:::

![](/wordpress/wordpress-05.png)


文件  `/www/wwwroot/dh.***.com` 目录，把里面的文件都删掉！！！

![](/wordpress/wordpress-06.png)


删掉后，上传下载好的wordpress压缩包

![](/wordpress/wordpress-07.png)


然后右键解压

![](/wordpress/wordpress-08.png)


我们进文件夹，把里面文件全部剪切出来

![](/wordpress/wordpress-09.png)

粘贴到 `/www/wwwroot/dh.***.com` 目录

![](/wordpress/wordpress-10.png)

删除空文件夹和压缩包即可

![](/wordpress/wordpress-11.png)


访问你的域名，我的是`dh.***.com`，你们按自己的域名来

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




## 使用

进入了后台，外观 - 主题里找 或 上传主题

后台的地址：http://你的域名.com/wp-admin/

![](/wordpress/wordpress-17.png)


## 主题

> 带 ⭐ 的是有教程的，点击即可跳转

| WP主题 | 收费 | 类型 | 演示 |
|:-:|:-:|:-:|:-:|
| [wordpress](https://cn.wordpress.org/themes/) | 免费 / 收费 | 官方主题商店 | - |
| [⭐Webstack](./WebStack.md) | 免费 | 导航 | [DEMO](https://webstack.cc/) |
| [一为导航](https://www.iotheme.cn/store/onenav.html) | 收费 | Webstack衍生主题 | [DEMO](https://nav.iowen.cn/) |
| [⭐Onenav](./onenav.md) | 免费 | 导航 | [DEMO](https://nav.rss.ink/) |
| [子比主题](https://www.zibll.com/) | 收费 | 博客 / 社区 | [DEMO](https://demo.zibll.com/) |
| [PIX主题](https://www.get.top/shop/64.html) | 收费 | 社交类朋友圈 | [DEMO](https://pixit.cn/) |
| [CorePress主题](https://www.lovestu.com/corepress-free) | 免费 / 收费 | 博客 | [DEMO](https://www.lovestu.com/) |
| [奈斯主题：vanilla](https://www.nicetheme.cn/store/vanilla-wordpress-theme) | 收费 | 图库 | [DEMO](https://bananahub.nicetheme.xyz/) |
| [奈思主题：Maggie](https://www.nicetheme.cn/store/maggie) | 收费 | 知识库主题 | [DEMO](https://theme.nicetheme.xyz/maggie/) |
| [奈思主题：Orange](https://www.nicetheme.cn/store/orange-theme) | 收费 | 企业商城 | [DEMO](https://orange.demo.nicetheme.xyz/) |
| [闪电博：爆米花](https://www.wbolt.com/themes/popcorn) | 收费 | 影视资源下载 | [DEMO](https://popcorn.demo.wbolt.com/) |
| [闪电博：Astore](https://www.wbolt.com/themes/astore) | 收费 | 软件应用商店 | [DEMO](https://www.inpandora.com/?ref=wbolt) |
| [追格：企业官网](https://www.zhuige.com/) | 收费 | 企业官网 | [DEMO](https://qygw.zhuige.com/) |
| [追格：小站点评主题](https://www.zhuige.com/) | 免费 / 收费 | 企业官网 | [DEMO](https://www.xzdp.com/) |
| [上海米尊网络：ZAXU](https://www.zaxu.com/) | 收费 | 博客 / 商城 | [DEMO](https://demo.zaxu.com/) |
| [Wing](https://github.com/Tokinx/Wing) | 免费 | 博客 | [DEMO](https://biji.io/) |
| 其他PHP网站 |
| [MDclub](https://www.mdclub.org/) | 免费 | 论坛 | [DEMO](https://community.mdclub.org/) |
| [泡泡社区](https://github.com/rocboss/paopao-ce) | 免费 | 社区 | [DEMO](https://www.paopao.info/) |
| [Blogger](https://www.blogger.com/) | 免费 | 谷歌免费网络博客 | - |
| [CRMEB](https://www.crmeb.com/) | 收费 | 商城系统 | [DEMO](https://v5.crmeb.net/) |




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