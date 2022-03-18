## Halo博客的搭建

注意：国内服务器可能需要备案！可以考虑国外服务器


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo.png)





## 简介

一款现代化的开源博客/CMS系统，界面非常美观

项目：https://github.com/halo-dev/halo/

演示：https://demo.halo.run/

官网：https://halo.run/

文档：https://docs.halo.run/



## 1.准备工作

服务器、域名、安装宝塔面板



本文用docker安装，非docker安装需要安装java环境，[请参考此文](https://bbs.halo.run/d/312-halo/9)




## 2.创建目录并下载配置文件

工作目录

    mkdir ~/.halo && cd ~/.halo

下载示例配置文件

    wget https://dl.halo.run/config/application-template.yaml -O ./application.yaml


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo-1.png)


编辑配置文件，可以用下面命令，也可以用宝塔进目录/root/.halo修改

[☛ 官方配置文档参考](https://docs.halo.run/getting-started/config/)

    vim application.yaml


### 2.1 配置：端口

默认端口8090，可以修改，但建议不要改成80端口

    server:
      port: 8090


### 2.2 配置：H2数据库

Halo 目前支持 H2 及 MySQL 数据库，推荐使用H2


```
spring:
  datasource: 
    driver-class-name: org.h2.Driver
    url: jdbc:h2:file:~/.halo/db/halo
    username: admin
    password: 123456
  h2:
    console:
      settings:
        web-allow-others: false
      path: /h2-console
      enabled: false
```

> `url` 为默认的数据本地存储地址，请勿修改

> 数据库账户和密码默认为 `admin` 和 `123456`，请修改账密

> `h2` 的配置使用默认，如果需要手动修改请参考官方配置



### 2.3 可选配置：Gzip压缩

启用压缩对于减少带宽和加快页面加载非常有用，在未使用 `Nginx` 或 `Caddy` 等反向代理服务器时（反向代理服务器通常是默认开启 Gzip 的），可以考虑开启，将 `false` 改成 `true`

```
  # Response data gzip.
  compression:
    enabled: false
```


### 2.4 可选配置：压缩

Halo 支持自定义后台管理的根路径。

```
halo:
  # Your admin client path is https://your-domain/{admin-path}
  admin-path: admin
```


### 2.5 可选配置：缓存

支持两种策略：

`memory` 将数据缓存至内存，重启服务缓存将清空。
`level` 将数据缓存至本地，重启服务不会清空缓存。

```
halo:
  # memory or level
  cache: memory
```




## 3.拉取 Halo 镜像


    docker pull halohub/halo:latest

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo-2.png)


## 4.创建容器

```
docker run -it -d \
-v ~/.halo:/root/.halo \
-p 8090:8090 \
--name halo \
--restart=unless-stopped \
halohub/halo:latest
```
> -it： 开启输入功能并连接伪终端

> -d： 后台运行容器

> -v： 工作目录映射。形式为：-v 宿主机路径:/root/.halo，后者不能修改

> -p： 端口映射，格式为 主机(宿主)端口:容器端口 ，可在 `application.yaml` 配置

> --name： 为容器指定一个名称

> --restart： 建议设置为 unless-stopped，在 Docker 启动的时候自动启动 Halo 容器

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo-3.png)


如果你想域名访问网站，请看完所有步骤！！！

> 不想域名访问用IP+端口即可

访问前请开启8090端口

    firewall-cmd --zone=public --add-port=8090/tcp --permanent




## 5.安装Nginx

宝塔软件商店搜索`Nginx`并安装

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo-4.png)


网站-添加站点-输入域名，FTP 和 数据库均不创建数据库，PHP纯静态

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo-5.png)




## 6.设置SSL

可以用宝塔的，也可以用服务器的，以腾讯服务器为例

> SSL证书可以实现加密传输，也可以消除不安全网站提示

搜索SSL证书进入，申请免费证书

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo-6.png)


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo-7.png)

填写域名信息，即可申请成功后，下载Nginx格式

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo-8.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo-9.png)


宝塔网站-域名-SSL-其他证书，这里需要KEY和PEM，我们从下载的安装包里找到对应文件，记事本方式打开复制粘贴进去，保存

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo-10.png)



## 7.修改配置文件


宝塔网站-域名-配置文件，把下面这一段加在第一行

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo-11.png)


> 8090为运行端口

```
upstream halo {
    server 127.0.0.1:8090;
}
```



下拉找到location，修改成为下面这样

```
location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
{
    proxy_pass http://halo;
    expires      30d;
    error_log /dev/null;
    access_log off;
}
```

```
location ~ .*\.(js|css)?$
{
    proxy_pass http://halo;
    expires      12h;
    error_log /dev/null;
    access_log off; 
}
```

然后在js|css下方，access_log之上添加这一整段，保存即可

```
location / {
    proxy_pass http://halo;
    proxy_set_header HOST $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

参考示例如图

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo-12.png)




## 7.访问域名并安装

访问域名成功进入安装引导界面，自行填写信息即可

> 这里的账密是后台登录用的，自己记好

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo-13.png)



后台登录：http://域名/admin

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo-14.png)



## 8.更换主题


官网去下载主题

https://halo.run/themes.html

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo-15.png)

启用上传的主题包即可

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Halo/images/halo-16.png)

更新方法也是一样





## 特别鸣谢

* [@halo](https://github.com/halo-dev/halo/)

* [@halo官网](https://halo.run/)

* [@xzhuz](https://github.com/xzhuz/halo-theme-xue/)「雪主题」

