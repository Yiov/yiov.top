## Onenav·导航网页的搭建

注意：国内服务器需要备案！个人也是不能做导航的！

刚开始看到这类网站，就比较喜欢，一为又要收费，后来发现github开源了，就开始折腾。从来没有建过站，只能一步步摸索

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/onenav/onesav.png)


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/onenav/baisu.png)




## 简介

OneNav是一款开源免费的书签（导航）管理程序，由xiaoz使用使用PHP + SQLite 3开发，界面简洁，安装简单，使用方便。OneNav可帮助你你将浏览器书签集中式管理，解决跨设备、跨平台、跨浏览器之间同步和访问困难问题，做到一处部署，随处访问。

项目：https://github.com/helloxz/onenav

演示：https://nav.rss.ink/

演示2：https://123.baisu58.com/

文档：https://doc.xiaoz.me/books/onenav



## 1.准备工作

服务器、域名、安装宝塔面板







## 2.常规安装

根据环境要求，需要5.6 <= PHP <= 7.4，那我们就选最新的7.2，然后极速安装套件

> 我用的VM虚拟机演示，如果也想本地调试的，在C:\Windows\System32\drivers\etc\hosts文件，鼠标右键打开，将你的内网IP添加到里面，例：192.168.2.10 alibaba.com(虚拟机里域名随便打)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/onenav/onesav-1.png)



新建站点，输入我们的域名（虚拟机输入自己设的域名），选择数据库MySQL，核对下PHP版本后提交

> 数据库的名称和密码是自动生成的，自己记一下就行

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/onenav/onesav-2.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/onenav/onesav-3.png)





我们访问域名，就会提示站点创建完成


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/onenav/onesav-4.png)




我们进 **根目录 /www/wwwroot** ，下载源码

> 这里有其他文件请先全部删掉！

在github找最新的版本，复制压缩包链接，比如：

    https://github.com/helloxz/onenav/releases

由于github半墙状态，下载链接前加个代理，比如：

    https://ghproxy.com/https://github.com/helloxz/onenav/archive/refs/tags/0.9.16.zip


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/onenav/onesav-5.png)


下载完成后，解压，然后再删除这个压缩包，进文件夹把里面所有文件剪切到域名目录下


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/onenav/onesav-6.png)



将文件类的 `config.simple.php`，更名为 `config.php`，然后移动到date目录下

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/onenav/onesav-7.png)


鼠标右键编辑打开文件，修改站点信息，画圈的位置都是可以改的，其他不要动

这里推荐使用 `baisuTwo` 的主题

    define('TEMPLATE','default');
    
    修改为：

    define('TEMPLATE','baisuTwo');

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/onenav/onesav-8.png)


刷新我们的网站，即可登录后台，域名访问也有了页面

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/onenav/onesav-9.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/onenav/onesav-10.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/onenav/onesav-11.png)




* 后台登录

http://域名/index.php?c=login






## 特别鸣谢

* [@helloxz](https://github.com/helloxz/onenav/)


* [@小z博客](https://www.xiaoz.me/)


* [@baisuTwo](https://gitee.com/baisucode/baisu-two)
