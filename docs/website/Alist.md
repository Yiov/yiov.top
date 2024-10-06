# Alist网盘搭建





## 简介

Alist是一个网盘文件列表程序，支持的网盘谷歌、pikpak、阿里、百度、夸克、蓝奏、123等等

* 演示：https://al.nn.ci/

* [官网](https://alist.nn.ci/zh/) 丨 [仓库](https://github.com/alist-org/alist/) 丨 [镜像](https://hub.docker.com/r/xhofe/alist) 丨 [美化教程](https://space.bilibili.com/36411485/channel/collectiondetail?sid=686340)

![](/Alist/Alist-01.png)








## 准备


* [服务器1台](./Server/)

* [搭建好宝塔面板](./BT.md)

* [域名 或 二级域名](./domain/) (可选)

* [shell工具](./shell/) (或服务器自带)






## 安装


### docker安装

::: tip 说明
本次仅演示使用Docker安装，其他请参照官方说明
:::

官方安装文档：https://alist.nn.ci/zh/guide/install/docker.html

点击复制 `发行版` 的安装命令

![](/Alist/Alist-02.png)


用shell登录服务器，粘贴，回车

::: tip 说明
第一个 `5244` 监听端口可以自己改，第二个5244不要动

怕出错的什么别改，默认就行
:::

```sh
docker run -d --restart=unless-stopped -v /etc/alist:/opt/alist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:latest
```

![](/Alist/Alist-03.png)


安装完成，我们还需要放行 `5244` 端口

```sh
firewall-cmd --zone=public --add-port=5244/tcp --permanent
```

![](/Alist/Alist-04.png)


服务器的端口也是需要放行的，以腾讯为例，防火墙 - 添加规则 - 端口：5244 - 确定

![](/Alist/Alist-05.png)


![](/Alist/Alist-06.png)

![](/Alist/Alist-07.png)



### 登录Alist

现在就可以用 `IP+端口` 访问了，比如：[http://198.124.1.1:5244](http://198.124.1.1:5244)

![](/Alist/Alist-08.png)


初始默认账号是 `admin` ，密码我们按文档的命令查看

```sh{5}
# 查看首次自动生成的密码
docker logs alist

# 随机生成一个密码
docker exec -it alist ./alist admin random

# 手动设置一个密码,`NEW_PASSWORD`是指你需要设置的密码
docker exec -it alist ./alist admin set NEW_PASSWORD

```

![](/Alist/Alist-09.png)

这样我们就登录进来了，点击底部 `管理`

![](/Alist/Alist-10.png)


登录成功后，改一下账号和密码，保存了重新登一次

![](/Alist/Alist-11.png)










### 反向代理



开反代的目的就是 `隐藏端口和IP` ，不然公网IP暴露，服务器就等着被捶打吧

登录宝塔，`网站 - 添加站点 - 域名输入你的域名 或者 二级域名` ，其他不用改，提交

::: tip 说明
我这里用的是二级域名，如：pan.baidu.com
:::

![](/Alist/Alist-12.png)


点击 `配置文件` , 删除这一段，或者选中后 `Ctrl+/` 注释掉

```
#禁止访问的文件或目录
location ~ ^/(\.user.ini|\.htaccess|\.git|\.env|\.svn|\.project|LICENSE|README.md)
{
    return 404;
}
```


![](/Alist/Alist-13.png)


还有另一段也删除，或者选中后 `Ctrl+/` 注释掉

```
location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
{
    expires      30d;
    error_log /dev/null;
    access_log /dev/null;
}

location ~ .*\.(js|css)?$
{
    expires      12h;
    error_log /dev/null;
    access_log /dev/null;
}
```

![](/Alist/Alist-14.png)



在点击 `SSL - Let's Encrypt` - 勾选域名 申请

::: warning 申请是免费的
建议还是在自己服务器的域名下去申请，本次只是演示
:::

![](/Alist/Alist-15.png)


等待一下就成功了，保存，再打开 `强制https开关`，再次保存

![](/Alist/Alist-16.png)


点反向代理 - 目标URL `127.0.0.1:5244`  - 启用反向代理，其他不用填

```
http://127.0.0.1:5244
```

![](/Alist/Alist-17.png)



现在用域名访问网站，就有了绿色的小锁

::: warning 注意
域名网页仅供预览，后台登录还是需要公网IP+端口登录！
:::

![](/Alist/Alist-18.png)





## 使用



网盘太多就不一一展示了，我就以阿里云盘为例吧



### 阿里云盘

先去获取令牌：https://alist.nn.ci/tool/aliyundrive/request

点 `Go to Login` 去登录

![](/Alist/Alist-19.png)


![](/Alist/Alist-20.png)

登录后允许权限

![](/Alist/Alist-21.png)

然后会得到一串数字和字母组合的令牌，一会要用到!

![](/Alist/Alist-22.png)




打开 [阿里云盘](https://www.alipan.com/) 进入你要分享的目录（没有就新建），比如：

```
https://www.alipan.com/drive/file/backup/634272c80aecead677524b03accbd969debd56ec
```

`634272c80aecead677524b03accbd969debd56ec` 就是 根文件夹ID 一会要用!

![](/Alist/Alist-23.png)


存储 - 添加 - 选择 `阿里云盘Open`，这里挂载路径填文件夹名，可以自己随便写

![](/Alist/Alist-24.png)

云盘类型选一下，我的是 `备份盘`

`根文件夹ID` 和 `刷新令牌` 也是刚刚获取的那一长串

![](/Alist/Alist-25.png)


`Oauth令牌链接` 改成下面连个任意一个，移除方式改成 `回收站`

```
https://api-cf.nn.ci/alist/ali_open/token

https://api.xhofe.top/alist/ali_open/token
```

![](/Alist/Alist-26.png)

添加成功即可

![](/Alist/Alist-27.png)

我们访问主页即可看到效果

![](/Alist/Alist-28.png)


最后，我们希望别人访问，还需要开启 `guest` 用户

用户 - 编辑 `guest` 不用给权限，直接保存启用即可

![](/Alist/Alist-29.png)




## 拓展

### 美化


关闭站点公告：设置 - 站点 - 站点公告，再次打开就不会弹了

![](/Alist/Alist-30.png)


元信息 - 路径(在哪个文件夹下显示) - 说明，支持Markdown


![](/Alist/Alist-31.png)

![](/Alist/Alist-32.png)


---

### 搜素

根据 [官方的区别说明](https://alist.nn.ci/zh/guide/advanced/search.html)，选 `数据库(非全文搜索)`

开启自动更新索引，保存

![](/Alist/Alist-33.png)

点击重建索引，等它自动爬数据

![](/Alist/Alist-34.png)

这样有数据就可以了，点一个 `更新索引` 即可

![](/Alist/Alist-35.png)



---

### WebDAV



可以挂载到本地当硬盘一样用，也可以在线看电影，但是由于阿里盘对流量有限制，就不演示了

[文档也很详细](https://alist.nn.ci/zh/guide/webdav.html)，参照着来就行



---

### 备份

备份与恢复 - 备份

![](/Alist/Alist-36.png)

会自动下载一个 `json` 文件，可用于恢复所有索引及布局

![](/Alist/Alist-37.png)





## 更新


需要删除容器和镜像，重新拉取，Xshell登录，删除容器

::: tip 说明
容器运行中，先停止后才可删除
:::

```sh
docker ps -a #查看容器

docker stop alist #暂停alist容器

docker rm -f alist #删除alist容器
```

![](/Alist/Alist-38.png)


重新命令拉取即可

```sh
docker pull xhofe/alist:latest
```

```sh
docker run -d --restart=unless-stopped -v /etc/alist:/opt/alist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:main
```


::: details 如何彻底卸载
先 暂停、删除容器，再来删除镜像

```sh
docker images #查看镜像

docker rmi 镜像ID #删除镜像

或者
docker rm -f xhofe/alist:latest #删除镜像
```

![](/Alist/Alist-39.png)

:::




## 常见问题


#### 1.添加目录时报错

> Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path

文件夹重名了，即便网盘不同，挂载到Alist也不能重名



#### 2.如何去掉底部的 `由 AList 驱动`

请尊重开发者的劳动，谢谢。如果你真的想删除它，你可以使用自定义 CSS 来隐藏它


#### 3.站点转移

登录后台备份，将备份下载到桌面，部署好新站点后，导入即可


#### 4.ipa下载变成了zip

设置 - 全局 - 打包下载关闭