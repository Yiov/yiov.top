# Halo博客的搭建




## 简介

一款现代化的开源博客/CMS系统，界面非常美观

官网：https://halo.run/

[演示](https://demo.halo.run/) 丨 [仓库](https://github.com/halo-dev/halo/) 丨 [文档](https://docs.halo.run/)

![](/halo/halo.png)





## 准备工作


* [服务器1台](./Server/)

* [域名1个](./domain/)

* [安装shell工具](./shell/)

* [安装宝塔面板](./BT.md)

* [安装docker](./docker.md)


::: tip 说明
非docker安装需要安装java环境，[请参考此文](https://bbs.halo.run/d/312-halo/9)
:::



## 下载配置文件

shell登录服务器，创建工作目录

```sh
mkdir ~/.halo && cd ~/.halo
```

下载示例配置文件

```sh
wget https://dl.halo.run/config/application-template.yaml -O ./application.yaml
```

![](/halo/halo-01.png)


编辑配置文件，[☛ 官方配置文档参考](https://docs.halo.run/getting-started/config/)

::: tip 说明
可以用下面命令，也可以用宝塔进目录 `/root/.halo` 修改
:::

```sh
vim application.yaml
```


### 端口

默认端口8090，可以修改，但建议不要改成80端口

```sh
server:
  port: 8090
```


### H2数据库

Halo 目前支持 H2 及 MySQL 数据库，推荐使用H2


```sh
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

::: tip 说明
`url` 为默认的数据本地存储地址，请勿修改

数据库账户和密码默认为 `admin` 和 `123456`，请修改账密

`h2` 的配置使用默认，如果需要手动修改请参考官方配置
:::



### Gzip压缩(可选)

启用压缩对于减少带宽和加快页面加载非常有用

在未使用 `Nginx` 或 `Caddy` 等反向代理服务器时(反向代理服务器通常是默认开启 Gzip 的)，可以考虑开启，将 `false` 改成 `true`

```sh
# Response data gzip.
compression:
  enabled: false
```



### 压缩(可选)

Halo 支持自定义后台管理的根路径

```sh
halo:
# Your admin client path is https://your-domain/{admin-path}
admin-path: admin
```



### 缓存(可选)

支持两种策略：

`memory` 将数据缓存至内存，重启服务缓存将清空

`level` 将数据缓存至本地，重启服务不会清空缓存

```sh
halo:
# memory or level
cache: memory
```





## 拉取镜像



```sh
docker pull halohub/halo:latest
```

![](/halo/halo-02.png)



## 创建容器

```sh
docker run -it -d \
-v ~/.halo:/root/.halo \
-p 8090:8090 \
--name halo \
--restart=unless-stopped \
halohub/halo:latest
```

::: tip 说明
`-it` 开启输入功能并连接伪终端

`-d` 后台运行容器

`-v` 工作目录映射，宿主机路径:/root/.halo，后者不能修改

`-p` 端口映射，格式为 主机(宿主)端口:容器端口 ，可在 `application.yaml` 配置

`--name` 为容器指定一个名称

`--restart` 建议设置为 unless-stopped，在 Docker 启动的时候自动启动 Halo 容器
:::

![](/halo/halo-03.png)


如果你想域名访问网站，请看完所有步骤！！！

::: tip 说明
不想域名访问用IP+端口即可
:::

访问前请开启8090端口

::: warning 注意
服务器还需去控制台-防火墙安全组放行
:::

```sh
firewall-cmd --zone=public --add-port=8090/tcp --permanent
```





## 安装Nginx

宝塔软件商店搜索`Nginx`并安装

::: tip 说明
已装的无视
:::

![](/halo/halo-04.png)


网站-添加站点-输入域名，FTP 和 数据库均不创建数据库，PHP纯静态

![](/halo/halo-05.png)





## 设置SSL

可以用宝塔的，也可以用服务器的，以腾讯服务器为例

::: tip 说明
SSL证书可以实现加密传输，也可以消除不安全网站提示
:::

搜索SSL证书进入，申请免费证书

![](/halo/halo-06.png)


![](/halo/halo-07.png)

填写域名信息，即可申请成功后，下载Nginx格式

![](/halo/halo-08.png)

![](/halo/halo-09.png)


宝塔网站-域名-SSL-其他证书，这里需要 `KEY` 和 `PEM`

我们从下载的安装包里找到对应文件，记事本方式打开复制粘贴进去，保存

![](/halo/halo-10.png)





## 修改配置文件


宝塔网站-域名-配置文件，把下面这一段加在第一行

![](/halo/halo-11.png)

::: tip 说明
8090为运行端口
:::

```php
upstream halo {
    server 127.0.0.1:8090;
}
```



下拉找到location，修改成为下面这样

```php
#修改前
location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
{
    proxy_pass http://halo;
    expires      30d;
    error_log /dev/null;
    access_log off;
}
```

```php
#修改后
location ~ .*\.(js|css)?$
{
    proxy_pass http://halo;
    expires      12h;
    error_log /dev/null;
    access_log off; 
}
```

然后在js|css下方，`access_log`之上添加这一整段，保存即可

```php
location / {
    proxy_pass http://halo;
    proxy_set_header HOST $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

参考示例如图

![](/halo/halo-12.png)






## 访问域名并安装

访问域名成功进入安装引导界面，自行填写信息即可

::: tip 说明
这里的账密是后台登录用的，自己记好
:::

![](/halo/halo-13.png)



后台登录：`http://域名/admin`

![](/halo/halo-14.png)




## 更换主题


主题商店：[https://halo.run/themes.html](https://halo.run/themes.html)

![](/halo/halo-15.png)

启用上传的主题包即可，更新方法也是一样

![](/halo/halo-16.png)







## 特别鸣谢

* [halo](https://github.com/halo-dev/halo/)

* [halo官网](https://halo.run/)

* [xzhuz](https://github.com/xzhuz/halo-theme-xue/)「雪主题」

