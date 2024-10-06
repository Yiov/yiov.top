
# Docker hub注册及使用





## 简介

[Docker](./docker.md) 官方提供一个托管平台，用于存放镜像

官网：https://hub.docker.com/

![](/dockerhub/dockerhub.png)




## 注册


dockerhub 官网右上角 [Sign up](https://hub.docker.com/signup) 注册

![](/dockerhub/dockerhub-01.png)



## 创建仓库

注册后登录账号，点 `Repositories-Create Repository` 创建仓库

![](/dockerhub/dockerhub-02.png)


给仓库命名，公开(public) 还是 私有 (private)，创建

![](/dockerhub/dockerhub-03.png)


这样就创建成功了

![](/dockerhub/dockerhub-04.png)






## 使用

开始前，请先用 [shell工具](./shell/) 登录 [服务器](./Server/)




:::: details 拉取镜像


以 [青龙面板](https://hub.docker.com/r/whyour/qinglong) 做演示

![](/dockerhub/dockerhub-05.png)

拉取镜像

::: details 镜像下载很慢？
要么等，要么在安装docker的时候，[更换国内镜像源](./docker.md#安装docker)
:::

```sh
docker pull whyour/qinglong:latest
```

![](/dockerhub/dockerhub-06.png)

查看一下镜像

```sh
docker images
```

![](/dockerhub/dockerhub-07.png)


::::





:::: details 上传镜像

::: warning 注意
本次仅演示，如何上传已拉取别人的镜像

自己的镜像，Emm... 俺也不会写啊
:::

输入命令登录docker账号和密码，`Login Succeeded` 就是登录成功

```sh
docker login
```

::: tip 说明
Username：账户名

Password：密码 (输入是隐藏的，输入完成回车即可)
:::

![](/dockerhub/dockerhub-08.png)



先查看一下镜像


```sh
docker images
```

![](/dockerhub/dockerhub-09.png)



无法直接上传别人的镜像，但可以通过 `打标签` 的形式来上传

```sh
docker tag 镜像ID 账户名/仓库名:标签名
```


::: tip 说明
镜像ID：4dc24556b2ff(上面自己复制)

账户名：yiov(改成自己的账户名)

仓库名：nvjdc(上传到自己哪个仓库)

标签名：latest(也可以自己改)
:::


最终：

```sh
docker tag 4dc24556b2ff yiov/nvjdc:1.0
```

![](/dockerhub/dockerhub-10.png)




我们再查看一下镜像，这样我们就得到了与原镜像完全一致的镜像

```sh
docker images
```

![](/dockerhub/dockerhub-11.png)



现在我们来上传

::: tip 说明
如果上传前想查看数据 `docker inspect 账户名/仓库名:版本号`
:::

```sh
docker push yiov/nvjdc:1.0
```


![](/dockerhub/dockerhub-12.png)


回到dockerhub网页查看，已经上传成功了

![](/dockerhub/dockerhub-13.png)


在Tags也能直观的看到，pull命令就可以直接使用了

![](/dockerhub/dockerhub-14.png)


::::










:::: details 删除镜像


先退出账号避免自己误操作，需要的时候再登，`Removing login` 就是已经移除登录状态了


```sh
docker logout
```


![](/dockerhub/dockerhub-15.png)




先查看一下本地的镜像，我们用命令删除这个生成的镜像


```sh
docker images
```

![](/dockerhub/dockerhub-16.png)


用命令删除即可

```sh
docker rmi -f 账户名/仓库名:标签名tag
```
::: tip 说明
比如我的就是：`docker rmi -f yiov/nvjdc:1.0`
:::

这里再次 `docker images` 看一下，已经删除了

![](/dockerhub/dockerhub-17.png)


::::





## 常见问题




1.docker一直登陆失败

答：会话超时了，关掉SSH工具，重新打开，重新登录 `docker login` 即可






## 特别鸣谢

* [青龙镜像](https://hub.docker.com/r/whyour/qinglong)

* Nvjdc (已更名为方舟)

