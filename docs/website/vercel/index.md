# Vercel静态部署网站


::: warning 更新时间
最近更新：2023-7-15
:::

## 前言

之前我们讲过 [Github Page 静态部署](../github.md#使用)，但是Github这半墙状态就很烦人

Vercel 就完全不用担心，有国内CDN加速，访问丝滑，并且还能一键部署

::: tip 说明
vercel还可以部署私有仓库，真实棒棒
:::

## 准备工作

* [域名一个](../ECS/#域名)

* [Github注册使用及上传代码](../../website/github)

::: warning 注意
必须要准备，否则无法访问
:::

## 注册Vercel

官网：https://vercel.com/

![](./vercel-01.png)


点击 `Sign UP` 注册，选择 `Hobby` 个人爱好者，再取一个昵称，点继续

::: tip 说明
这里为什么不直接用Github关联登录呢，因为登录不了

至少我是，没关系自己注册后再关联一样的
:::

![](./vercel-02.png)


这里选择 `Continue With Email` 邮箱注册，一会再来关联Github

![](./vercel-03.png)


输入邮箱后会发邮件，我们再邮箱点击验证，成功即可

![](./vercel-04.png)

![](./vercel-05.png)

![](./vercel-06.png)

验证成功，我们去重新登录账号，会要手机验证码，选 Chinese `+86`

![](./vercel-07.png)


输完验证码，我们就注册完成了

![](./vercel-08.png)


## 导入仓库

::: warning 注意
请确保你 GitHub 仓库已经上传好代码
:::

点击 `Add a New Project` 新增一个项目

![](./vercel-09.png)


我们再选择 Github ，跳出关联确认

![](./vercel-10.png)

![](./vercel-11.png)

这里还是没有加载出仓库，我们选择底部 导入第三方仓库

![](./vercel-12.png)


粘贴我们的仓库地址，并授权对Giithub仓库进行修改

![](./vercel-13.png)

![](./vercel-14.png)


我们先返回去看，仓库就都有了，我们选择想要的仓库 `import` 导入

![](./vercel-15.png)

这里一般都默认不用改，会自动识别框架

::: tip 说明
如果你是源文件还未构建，需要打开下方按键并填入

已经是静态文件了，不用打开按钮
:::

![](./vercel-16.png)


我是VitePress，根据文档命令改正确，然后 `Deploy` 发布

::: danger 特别注意
依赖、构建命令和静态文件夹保证都是对的，否则会失败

如果你安装了插件，也必须和依赖整合在一起安装！！！
:::

![](./vercel-17.png)



耐心等待一会就自动部署完成啦，还能看到我们的首页


![](./vercel-18.png)


点击 `Continue to Dashboard` 进入面板， `Domains` 就是我们的访问链接

::: tip 说明
是不是发现访问不了，因为还没有完
:::

![](./vercel-19.png)



## 域名解析

::: warning 注意
因为 `vercel.app` 的域名被墙了，所以我们需要自己准备 一个域名 来解析
:::

点击  `Domains` 进入域名管理，这里输入我们自己的域名 `Add` 添加

![](./vercel-20.png)

这里我只选择新增一个一级域名，不喜欢用`www`，可以根据自己的需求

::: tip 说明
前两个实际就是一个重定向的区别

第一个：输入 `www.yiov.top` ，实际访问 `yiov.top`

第二个：输入 `yiov.top` ，实际访问 `www.yiov.top`

第三个：就只访问 `yiov.top`
:::

![](./vercel-21.png)

现在他要求我们去解析域名，添加A记录

![](./vercel-22.png)

我以腾讯云为例，添加域名解析 `@` ，记录值为 `76.76.21.21`

::: tip 说明
官方的另一个解析值

A记录：`@` `76.223.126.88`

cname记录： `@` `cname-china.vercel-dns.com`
:::

![](./vercel-23.png)

等一会它解析完成就可以了，能访问就是行了

::: tip 说明
好了应该也会发邮件给你
:::

![](./vercel-24.png)




## 访问


我们访问看看，完全OK


![](./vercel-25.png)


我们 [站长工具](https://ping.chinaz.com/) 跑一下PING，看看延迟


![](./vercel-26.png)







