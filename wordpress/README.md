## wordpress喂饭级安装教程


更新时间：2022-7-18


初衷：本想做个导航网站玩玩，遇到了各种头大问题，建议跟我一样的小白，还是按照我的步骤弄完后，再学着建其他类型的网站，就容易上手了



wordpress官网

https://cn.wordpress.org/


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-1.png)




## 准备工作


服务器1台、域名1个、网站模板、SSH远程终端、足够的耐心


> 老鸟直接看步骤，小白挨个了解清楚


1.服务器选择

挑便宜的买就好，我自己用的是[腾讯的轻量云服务器轻量无忧计划](https://cloud.tencent.com/act/lighthouse?fromSource=gwzcw.1293314.1293314.1293314)，旨在便宜，终身续费同价，阿里云的也可以，练手不需要太高配置



2.域名

越便宜越好，com后缀的贵，除非你看中喜欢的了就买com

因为我已经有域名了，就不花钱买了，直接申请个[二级域名](https://www.baidu.com)即可



3.网站模板

这里我使用的是[@Viggoz](https://github.com/WebStackPage/)大佬的`Webstack`导航模板

仓库：https://github.com/WebStackPage/WebStackPage.github.io

好看的都收费，虽然模板已经停更了，不过这个已经很棒了



4.SSH远程终端

比较热门的就是国产的[FinalShell](http://www.hostbuf.com/)，而我这里使用的是[Xshell 7](https://www.netsarang.com/zh/all-downloads/)，轻巧不占内存就够了

> 免费小技巧：进入页面后，下拉找到 家庭/学校免费，点击进入，填写邮箱，姓名随便，邮箱接收就可下载免费使用了



5.足够的耐心

即便你因为觉得太繁琐暂时放弃了，但也请坚持做完，成功后你会豁然开朗




## 步骤



### 1.下载Wordpress



进入[wordpress中国](https://cn.wordpress.org/) 官网

点击右上角获取-下载并安装-下载

> 下载完成后是一个压缩包

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-2.png)




### 2.安装Xshell软件（已装的略）

[Xshell 7安装步骤](https://www.baidu.com)

待我单独写一篇吧，不然篇幅过长



## 3.安装宝塔面板（已装的略）

[宝塔安装步骤](https://www.baidu.com)

待我单独写一篇吧，不然篇幅过长




### 4.添加站点


进入宝塔面板后，点 网站-添加站点

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-3.png)


域名填入你买的域名，FTP不创建，数据库MySQL，密码可以自己改的好记一点，提交


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-4.png)


这样站点就创建完成了

> 要记一下，等会要用

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-5.png)




### 5.上传wordpress

文件-/www/wwwroot/dh.***.com，把里面的文件都删掉

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-6.png)


上传下载好的wordpress压缩包，完成后右键解压

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-7.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-8.png)


但是这样我们站点只有个文件夹，而不是整个wordpress的文件，我们进文件夹，把里面文件全部剪切出来

> 事后记得删除空文件夹和压缩包哦

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-9.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-10.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-11.png)



### 6.安装wordpress


访问你的域名即可，我的是`dh.***.com`，你们按自己的域名来

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-12.png)


数据库名和用户名是一样的，密码自己设的，后面2项默认不用改

> 数据主机也可以填IP，表前缀除非有多个wordpress在数据库，避免冲突就改下，否则默认

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-13.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-14.png)


这样就可以了，运行程序，填写站点信息，自己填好就行了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-15.png)


完成后邮箱也会受到消息，我们点登录

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-16.png)


这样就完成了wordpress的所有安装，进入了后台，外观-主题里找到喜欢的，发挥自己的想象写文章，美化页面吧

后台的地址：http://***.com/wp-admin/

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-17.png)







### 7.搭建WebStack

根据@Viggoz大佬的推荐，使用方法2搭建WebStack，需要用到[@owen0o0](https://github.com/owen0o0/)的版本

项目地址：https://github.com/owen0o0/WebStack

> 
WordPress 4.4+
WordPress 伪静态
PHP 5.7+ 7.0+









## 特别鸣谢

* [@Viggoz](https://github.com/WebStackPage/)

* [@wordpress中国](https://cn.wordpress.org/)

* [@owen0o0](https://github.com/owen0o0/WebStack)
