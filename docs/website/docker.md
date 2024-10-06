
# Docker的安装



::: danger 通知
最近dockerhub官网被GFW屏蔽，镜像站也挂掉了

* 解决：直接用阿里云的就行 或者 自行搭建

* 不建议：使用其他搭建的镜像站，要维护也不稳定
:::

## 简介

虚拟机占用空间大，启动时间长，容器技术应运而生

docker就是其中一种应用容器引擎，可以更加便捷的管理镜像

官网：https://www.docker.com/

仓库：https://github.com/docker/docker-install/

![](/docker/docker-01.png)




## 安装

用 [shell工具](./shell/) 登录 [服务器](./Server/)，然后一键安装Docker需要的依赖包

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

![](/docker/docker-02.png)



安装完成后，启动docker服务

```sh
sudo systemctl start docker
```

![](/docker/docker-03.png)


设置docker开机自启

```sh
sudo systemctl enable docker
```

![](/docker/docker-04.png)




查看docker状态，绿色的运行中即可

```sh
sudo systemctl status docker
```

![](/docker/docker-05.png)


查一下docker版本

```sh
docker -v
```

![](/docker/docker-06.png)


最后建议跟换一下国内源，下载文件速度会快很多

[阿里云官网](https://www.aliyun.com/) - 产品 - 容器 - 容器镜像服务 ACR

![](/docker/docker-07.png)

管理控制台，登录你的账号

![](/docker/docker-08.png)

镜像工具 - 镜像加速器，选择自己的操作系统按步骤来即可

![](/docker/docker-09.png)



创建 `/etc/docker` 目录

```sh
sudo mkdir -p /etc/docker
```

然后使用 `tee` 命令将 `EOF`之间的内容写入到 `daemon.json`中

```sh
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://改成你自己的.mirror.aliyuncs.com"]
}
EOF
```

![](/docker/docker-10.png)

重新加载配置并重启docker

```sh
sudo systemctl daemon-reload
sudo systemctl restart docker
```

![](/docker/docker-11.png)

最后查看一下，`Registry Mirrors` 镜像是否更换成功 

```sh
docker info
```


![](/docker/docker-12.png)


## Docker compose

::: warning ！可选安装
如果你容器不多，可以选择不装，我用最新的版本演示
:::

官网：https://docs.docker.com/compose/

仓库：https://github.com/docker/compose


本次仅演示 [官网的独立安装方式](https://docs.docker.com/compose/install/standalone/) ，其他请自行参考




```sh
curl -L "https://github.com/docker/compose/releases/download/v2.27.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

![](/docker/docker-13.png)


开启可执行权限

```sh
chmod +x /usr/local/bin/docker-compose
```

![](/docker/docker-14.png)


运行

```sh
docker-compose
```

![](/docker/docker-15.png)



查看版本

```sh
docker-compose -v
```

![](/docker/docker-16.png)



使用上可以通过 `hlep` 来查看命令

```sh
docker-compose --help
```




## 使用

> 带 ⭐ 的是有教程的，点击即可跳转

| 应用 | 说明 |
|:-:|:-|
| [⭐Halo](./Halo.md) | 一款现代化的开源博客/CMS系统 |
| [⭐Alist](./Alist.md) | 一个网盘文件列表程序 |
| [⭐青龙面板](./qinglong.md) | 一个支持 Python3、JavaScript、Shell、Typescript 的定时任务管理平台 |
| [⭐dockerhub](./dockerhub.md) | Docker官方提供一个托管平台，镜像上传 |
| [MeEdu](https://meedu.vip/h5.html) | 网校系统，有开源版本 |
| [Memos](https://usememos.com/) | 轻量级笔记服务 |




## 常用命令

更多命令请查看 [官方文档](https://docs.docker.com/reference/cli/docker/)


```sh
docker ps -a #查看容器

docker stop 容器ID #暂停容器

docker start	#启动指定容器

docker restart	#重新启动容器

docker exec	#进入容器

exit #退出容器

docker rm -f 容器ID #删除容器

docker kill 容器ID #关闭容器

docker restart 容器名称 #重启容器

docker images #查看镜像

docker rmi 镜像ID #删除镜像

docker rm -f whyour/qinglong:latest #删除青龙镜像
```







## 常见问题



::: details 安装报错Errno 14

`Error: Unable to curl repository file ... repo`

检查安装命令是否正确，下载失败了，或者卸载后重装
:::




::: details 卸载旧Docker

如果你不是用curl方式安装的，请参考 [官网卸载说明](https://docs.docker.com/engine/install/centos/#uninstall-docker-engine)

```sh
sudo yum remove docker-ce docker-ce-cli containerd.io
sudo rm -rf /var/lib/docker #删除Docker缓存
sudo rm -rf /var/lib/containerd #删除Docker容器实例
```
:::


::: details 卸载docker compose

```sh
sudo rm /usr/local/bin/docker-compose
```
:::