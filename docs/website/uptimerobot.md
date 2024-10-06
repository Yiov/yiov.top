# UptimeRobot的注册及使用



## 简介

美国知名的网站监控服务工具，支持HTTP(s)网站、关键词、Ping 、端口等监控，免费版最多可监控 50 个网站

官网：https://uptimerobot.com/

![](/uptimerobot/uptimerobot-01.png)


## 注册

点击 `Register for FREE` 注册

![](/uptimerobot/uptimerobot-02.png)

这里我们直接跳过 `Skip onboarding` ，一会再创建监视器

![](/uptimerobot/uptimerobot-03.png)

最后建议设置一下时区，否则提示时间可能有偏差

右下角 `…` - Account details

![](/uptimerobot/uptimerobot-04.png)

Timezone 选择 `Beijing ...`

![](/uptimerobot/uptimerobot-05.png)


## 使用




https://linux.do/t/topic/113252/6
https://qninq.cn/archives/site-status.html



## 添加监控

点击 `Monitoring - New monitor` 创建监视器

![](/uptimerobot/uptimerobot-06.png)

`Monitor type` 类型选择 `HTTP / website monitoring`

然后输入你要监控的网站，点击左下角 `Create monitor` 创建

::: tip 类型说明
* HTTP / website monitoring：http监控

* Keyword monitoring：关键词监控

* Ping monitoring：延迟监控

* Port monitoring：端口监控

* Cron job / Heartbeat monitoring：定时任务/心跳监测（仅会员可用）
:::

![](/uptimerobot/uptimerobot-07.png)

这样就创建成功了

![](/uptimerobot/uptimerobot-08.png)

在 `Status pages` 中，点击小眼睛

![](/uptimerobot/uptimerobot-09.png)

进入了，查看生成的监控状态页面站点

![](/uptimerobot/uptimerobot-10.png)




## 状态页美化

### 说明

官方自带的是英文版，且不能绑定自己的域名，监控的网站也不能跳转

* 方式1：自己部署，请参考同类型的 [Uptime-Kuma](https://github.com/louislam/uptime-kuma)

* 方式2：搭建基于UptimeRonot API的面板 [uptime-status](https://github.com/yb/uptime-status) 或 [site-status](https://github.com/imsyy/site-status)


### 准备

* [安装好nodejs之pnpm](./nodejs.md)

* [Github账号](./pages/github.md)

* [Vscode软件](./VSCode.md)

* [Vercel账号](./pages/vercel.md)



### 演示

本文以 [site-status](https://github.com/imsyy/site-status) 演示，下载仓库

![](/uptimerobot/uptimerobot-11.png)

解压到任意盘符，右键使用Vscode打开

![](/uptimerobot/uptimerobot-12.png)


主要是这个 `ur` 开头的API Key，其他按需修改即可

::: danger 注意
如果你又新增了网站，必须重新获取key，否则页面不会更新
:::

![](/uptimerobot/uptimerobot-13.png)

在 [UptimeRobot官网](https://uptimerobot.com/) 上方点击 [old app](https://old.uptimerobot.com/dashboard)

![](/uptimerobot/uptimerobot-14.png)

右上角 - My Settings

![](/uptimerobot/uptimerobot-15.png)


下拉找到 `Read-Only API Key` ，点击 `Show/hide it.`，将api key 复制出来

::: tip 说明
一定要旧面板的api key，新面板的不可以，只有旧的是 `ur` 开头
:::

![](/uptimerobot/uptimerobot-16.png)


修改好后 `Ctrl+s` 保存，然后按 `Ctrl+~`键调出终端

![](/uptimerobot/uptimerobot-17.png)

输入命令安装依赖

```sh
pnpm install
```

![](/uptimerobot/uptimerobot-18.png)

安装好后，进入开发模式，点击生成的本地端口连接查看，看是否正常

```sh
pnpm dev
```

![](/uptimerobot/uptimerobot-19.png)

没问题，按 `Ctrl+C` 退出开发模式，使用 [Vercel部署](./pages/vercel.md)

::: details 为什么不pnpm build

build后将dist目录所有文件，上传到服务器，或者使用githubpages

而Vercel部署，只需拉取github代码，后台直接build生成
:::

![](/uptimerobot/uptimerobot-20.png)


