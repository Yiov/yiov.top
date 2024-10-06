# 闲置iPhone搭建静态网站




## 简介

闲置苹果机卖掉不值钱，那就发挥一下余热

做一个 **仅可本地可以访问** 的web服务器


## 准备

* 闲置苹果机一部 (IOS 11及以上)

* [下载ISH工具](https://apps.apple.com/cn/app/ish-shell/id1436902243)


## 安装


苹果商店下载 [ISH shell](https://apps.apple.com/cn/app/ish-shell/id1436902243) ，安装好打开

![](/ish/ish-01.png)


## 安装python3

::: warning 注意
报错 `ERROR` 的话，[挂一个梯子翻墙](../gfw/proxy.md) 再运行就行了
:::

```sh
apk add python3
```

![](/ish/ish-02.png)


## 启动http服务


```sh
python3 -m http.server
```

::: tip 科普
`-m` 表示将模块当脚本运行
:::


启动成功，我们就开启了一个本地IP+`端口8000` 的页面

![](/ish/ish-03.png)



## 访问页面

手机设置 - 无线局域网 - 查看自己的内网IP地址

::: tip 说明
根据自己的IP地址来

8000是端口，必加
:::

如下图，我的地址：[http://192.168.2.215:8000](http://192.168.2.215:8000)

访问后，ISH也会显示哪个IP的人在访问



![](/ish/ish-04.png)



## 上传网站代码

进入文件 - 右上角 编辑

![](/ish/ish-05.png)

将 `ISH` 开关打开，完成，进入root目录

![](/ish/ish-06.png)

我这里放了一个静态网页测试一下

::: tip 说明
仓库：[https://github.com/Yiov/static-nav](https://github.com/Yiov/static-nav)
:::

访问：[http://192.168.2.215:8000](http://192.168.2.215:8000)

首次进入有点慢，但是没问题的


![](/ish/ish-07.png)


## 终止

手动终止服务，按 `∧`+`Z` 键即可

::: tip 说明
划掉后台或者关机都可以
:::

![](/ish/ish-08.png)