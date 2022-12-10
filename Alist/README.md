## Alist搭建自己的专属网盘


</br>

更新时间：2022-12-10

一直想搭建，总算抽出空来，搭建完成就可以通过网页，在任何电脑上访问并下载，而不需要打开任何网盘，方便至极

本次版本为V3.6.0


</br>


## 简介

Alist原本是一个网盘文件列表程序，但自从可利用WebDAV把网盘挂载到本地后，突然爆火，支持的网盘有20+，熟知的谷歌、pikpak、阿里、百度、夸克、蓝奏等等


现在的V3界面简洁，列表分明

* 演示：https://pan.nn.ci/

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-01.png)


* 官网：https://alist.nn.ci/

* 仓库：https://github.com/alist-org/alist

* 镜像：https://hub.docker.com/r/xhofe/alist

* 文档教程1：https://alist.nn.ci/zh/guide/

* 文档教程2：https://alist-doc.nn.ci/docs/intro/

* 美化：https://space.bilibili.com/36411485/channel/collectiondetail?sid=686340





</br>
</br>





## docker安装准备条件

</br>

本次仅演示docker安装，其他安装请参考文档

> 如果想安装在指定域名目录，可以使用Curl一键脚本，安装的时候指定目录

</br>


* 服务器1台

* 搭建好宝塔面板

* 域名 或者 二级域名 (可有可无)

* SSH工具 比如：Xshell(或者服务器自带的)


</br>
</br>


## 1.安装Alist

</br>

使用Docker安装，点击复制发行版的安装命令

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-02.png)


用Xshell登录服务器，粘贴，回车

> 第一个 `5244` 监听端口可以自己改，第二个5244不要动，怕出错的默认

```
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:latest
```
![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-03.png)


安装完成，我们还需要放行`5244`端口

```
firewall-cmd --zone=public --add-port=5244/tcp --permanent
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-04.png)


服务器的端口也是需要放行的，以腾讯为例，防火墙 - 添加规则 - 端口：5244 - 确定

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-05.png)


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-06.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-07.png)


现在就可以用IP+端口访问了，点击底部的登录

> 比如:http://198.124.1.1:5244

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-08.png)


初始默认账号是 `admin` ，密码我们按文档的命令查看


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-09.png)


密码查看命令，二选一

```
docker logs alist
docker exec -it alist ./alist -password
```
![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-10.png)


登录成功后，依然点击这里，管理

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-11.png)


改一下账号和密码，保存了重新登一次

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-12.png)


</br>
</br>




## 2.反向代理

</br>

开反代的目的就是隐藏端口和IP，不然你公网IP暴露了，服务器就等着被捶打吧

登录宝塔 - 网站 - 添加站点 - 域名输入你的域名 或者 二级域名 ，其他不用改，提交

> 我这里用的是二级域名，如：pan.baidu.com

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-13.png)


点击刚创建的站点 - SSL - Let's Encrypt - 勾选域名 申请

> 免费申请的，你也可以有腾讯/阿里的，都一样

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-14.png)


等待一下就成功了，保存，并打开强制https开关

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-15.png)


点反向代理 - 目标URL `127.0.0.1:5244`  - 启用反向代理，其他不用填

```
http://127.0.0.1:5244
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-16.png)



现在用域名访问网站，就有了绿色的小锁

> 域名网页仅供预览，后台还是需要公网IP+端口登录哦

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-17.png)


</br>
</br>

## 3.网盘挂载

</br>

网盘太多就不一一展示了，我就列举两个

</br>

### 3.1 阿里云盘

</br>

我们打开文档，两个文档都行

> 文档教程1：https://alist.nn.ci/zh/guide/
>
>文档教程2：https://alist-doc.nn.ci/docs/intro/


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-18.png)


生成的二维码，我们用手机应用 `阿里云盘app` 扫描，登录

>  如果加载不出来，可以换文档2获取

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-19.png)


扫描后再次点击这里，得到一个token，一会要用

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-20.png)



打开阿里云盘新建一个文件夹，自己命名，然后进入文件夹

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-21.png)


这里得到一个文件夹ID，一会要用

> 比如：https://www.aliyundrive.com/drive/folder/63413592352dec9935f948468d6a7cb9b8575be3
> 
> folder/ 后面就是文件夹ID


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-22.png)


登录Alist后台 - 存储 - 添加 - 阿里网盘


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-23.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-24.png)


挂载路径 -> 文件夹名字

根文件夹ID -> folder

刷新令牌 -> refresh_token


其他不用动，保存


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-25.png)


这样就挂载成功了，我们刷新下网页看看

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-26.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-27.png)

</br>



### 3.2 蓝奏网盘

</br>

这个稍微复杂一丢丢，也不难，看文档

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-28.png)


所说的开发者工具，我们浏览器F12键就可以了，打开网址 - `F12` - 登录账号

> 有登录状态的先退出

https://pc.woozooo.com/


登录后，有文件夹的进文件

开发者工具 - 网络 - 找到 `doupload.php` 文件 - 标头下有一个cookie，复制出来

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-29.png)


底部还有一个 `folder_id` ，也复制出来

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-30.png)


回到Alist - 存储 - 添加 - 蓝奏云

除了添加cookie和folder_id，还要填写一下分享的文件夹及其密码


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-31.png)

</br>
</br>





## 4.美化

</br>


关闭站点公告：设置 - 站点 - 站点公告，再次打开就不会弹了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-32.png)


元信息 - 路径(在哪个文件夹下显示) - 说明，支持Markdown


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-33.png)



这样一个网站就大工告成啦！

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-34.png)




</br>
</br>



## 5.WebDAV

</br>

可以挂载到本地当硬盘一样用，也可以在线看电影，但是由于阿里盘对流量有限制，就不演示了

文档也很详细，参照着来就行


</br>
</br>




## 6.如何更新


需要删除容器和镜像，重新拉取，Xshell登录，删除容器

> 容器运行中，先停止后才可删除

```
docker ps -a #查看容器

docker stop alist #暂停alist容器

docker rm -f alist #删除alist容器
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-35.png)



```
docker images #查看镜像

docker rmi 镜像ID #删除镜像

或者
docker rm -f xhofe/alist:latest #删除镜像
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Alist/Alist-36.png)


重新起容器即可，由于系统文件都还在，所有内容无需重新设置

> 如果想彻底删除，就需要删除安装目录了

```
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:latest
```

</br>
</br>


## 常见问题

</br>


### 1.添加目录时报错 Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path

文件夹重名了，即便网盘不同，挂载到Alist也不能重名

</br>

### 2.如何去掉底部的 由 AList 驱动

请尊重开发者的劳动，谢谢。如果你真的想删除它，你可以使用自定义 CSS 来隐藏它

</br>

### 3.搜索功能不能用

确保你是v3.6.0及以上版本，如果不是请更新；已经是的，在后台-索引-数据库-保存，然后点击构建索引，等数据读取完成刷新即可

</br>
</br>

## 特别鸣谢

* [Alist](https://github.com/alist-org/alist)