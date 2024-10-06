# Onenav导航网页的搭建






## 简介

OneNav是一款开源免费的书签（导航）管理程序，由 [@xiaoz](https://blog.xiaoz.org/) 使用使用PHP + SQLite 3开发

官网：[https://www.onenav.top/](https://www.onenav.top/)

[仓库](https://github.com/helloxz/onenav) 丨 [文档](https://doc.xiaoz.me/books/onenav) 丨 [演示1](https://nav.rss.ink/) 丨 [演示2](https://123.baisu58.com/)

![](/onenav/onenav.png)


![](/onenav/baisu.png)




## 准备工作

* [服务器1台](./Server/)

* [域名1个](./domain/)

* [安装shell工具](./shell/)

* [安装宝塔面板](./BT.md)




## 安装

登录宝塔面板，根据环境要求，需要5.6 <= PHP <= 7.4，那我们就选最新的7.2，然后极速安装套件

::: tip 说明
已安装的无视，未安装成功的可以在宝塔 - 软件管理里面找到安装
:::

![](/onenav/onenav-01.png)



新建站点，输入我们的域名，选择数据库MySQL，核对下PHP版本后提交

::: tip 说明
数据库的名称和密码是自动生成的，自己改一下
:::

![](/onenav/onenav-02.png)

![](/onenav/onenav-03.png)





我们访问域名，就会提示站点创建完成


![](/onenav/onenav-04.png)




我们进 **根目录** `/www/wwwroot`

::: tip 说明
这里有其他文件请先全部删掉！
:::

下载源码：https://github.com/helloxz/onenav/


![](/onenav/onenav-05.png)


下载完成后，上传到服务器解压

然后再删除这个压缩包，进文件夹把里面所有文件剪切到域名目录下


![](/onenav/onenav-06.png)



将文件类的 `config.simple.php`，更名为 `config.php`，然后移动到date目录下

![](/onenav/onenav-07.png)


鼠标右键编辑打开文件，修改站点信息，画圈的位置都是可以改的，其他不要动

这里推荐使用 `baisuTwo` 的主题

```diff{3}
- define('TEMPLATE','default');

+ define('TEMPLATE','baisuTwo');
```

![](/onenav/onenav-08.png)





## 登录

刷新我们的网站，即可登录后台，域名访问也有了页面

::: tip 后台
http://域名/index.php?c=login
:::

![](/onenav/onenav-09.png)

![](/onenav/onenav-10.png)

![](/onenav/onenav-11.png)







## 特别鸣谢

* [helloxz](https://github.com/helloxz/onenav/)


* [小z博客](https://www.xiaoz.me/)


* [baisuTwo](https://gitee.com/baisucode/baisu-two)
