## wordpress喂饭级安装教程


更新时间：2022-7-18




wordpress官网

https://cn.wordpress.org/


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-01.png)




## 准备工作


服务器1台、域名1个、SSH远程终端、足够的耐心


> 老鸟直接看步骤，小白挨个了解清楚

</br>

### 1.服务器

挑便宜的买就好，不会买的参考教程[服务器购买及网站初成](https://github.com/Yiov/notes/tree/main/ECS)



</br>

### 2.域名

越便宜越好，com后缀的贵，除非你看中喜欢的了就买com

因为我已经有域名了，就不花钱买了，直接申请个[二级域名](https://github.com/Yiov/notes/tree/main/ECS#3域名可选)即可

</br>

### 3.SSH远程终端

比较热门的就是国产的[FinalShell](http://www.hostbuf.com/)，而我这里使用的是[Xshell 7](https://www.netsarang.com/zh/all-downloads/)，轻巧不占内存就够了

> 免费小技巧：进入页面后，下拉找到 家庭/学校免费，点击进入，填写邮箱，姓名随便，邮箱接收就可下载免费使用了

</br>

### 4.足够的耐心

即便你因为觉得太繁琐暂时放弃了，但也请坚持做完，成功后你会豁然开朗

</br>
</br>

## 步骤

</br>

### 1.下载Wordpress



进入[wordpress中国](https://cn.wordpress.org/) 官网

点击右上角获取-下载并安装-下载

> 下载完成后是一个压缩包

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-02.png)

</br>

### 2.安装Xshell软件（已装的略）

[Xshell 7安装步骤](https://www.baidu.com)

待我单独写一篇吧，不然篇幅过长

</br>

## 3.安装宝塔面板（已装的略）

[宝塔安装步骤](https://www.baidu.com)

待我单独写一篇吧，不然篇幅过长


</br>

### 4.添加站点


进入宝塔面板后，点 网站-添加站点

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-03.png)


域名填入你买的域名，FTP不创建，数据库MySQL，密码可以自己改的好记一点，提交


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-04.png)


这样站点就创建完成了

> 要记一下，等会要用

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-05.png)


</br>

### 5.上传wordpress

文件-/www/wwwroot/dh.***.com，把里面的文件都删掉

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-06.png)


上传下载好的wordpress压缩包，完成后右键解压

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-07.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-08.png)


但是这样我们站点只有个文件夹，而不是整个wordpress的文件，我们进文件夹，把里面文件全部剪切出来

> 事后记得删除空文件夹和压缩包哦

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-09.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-10.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wordpress/wordpress-11.png)


</br>

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











## 特别鸣谢


* [@wordpress中国](https://cn.wordpress.org/)
