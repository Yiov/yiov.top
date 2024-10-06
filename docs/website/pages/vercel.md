# Vercel静态部署网站





## 前言

一个网站托管服务平台，可以轻松的一键部署项目，且自带CDN加速

官网：https://vercel.com/

![](/pages/vercel/vercel-01.png)




## 准备工作

* [域名一个](../domain/)

* [Github账户并已上传代码](./github.md)




## 注册

点击 [Sign UP](https://vercel.com/signup) 注册，选择 `Hobby` 个人爱好者，再取一个昵称，点继续

::: tip 说明
这里为什么不直接用Github关联登录呢，因为登录不了

至少我是，没关系自己注册后再关联一样的
:::

![](/pages/vercel/vercel-02.png)


这里选择 `Continue With Email` 邮箱注册，一会再来关联Github

![](/pages/vercel/vercel-03.png)


输入邮箱后会发邮件，我们再邮箱点击验证，成功即可

![](/pages/vercel/vercel-04.png)

![](/pages/vercel/vercel-05.png)

![](/pages/vercel/vercel-06.png)

验证成功，我们去重新登录账号，会要手机验证码，选 Chinese `+86`

![](/pages/vercel/vercel-07.png)


输完验证码，我们就注册完成了

![](/pages/vercel/vercel-08.png)



## 使用


:::: details 部署项目

在 GitHub 仓库上传好代码，点击 `Add a New Project` 新增一个项目

![](/pages/vercel/vercel-09.png)


我们再选择 Github ，跳出关联确认

![](/pages/vercel/vercel-10.png)

![](/pages/vercel/vercel-11.png)

这里还是没有加载出仓库，我们选择底部 导入第三方仓库

![](/pages/vercel/vercel-12.png)


粘贴我们的仓库地址，并授权对Giithub仓库进行修改

![](/pages/vercel/vercel-13.png)

![](/pages/vercel/vercel-14.png)


我们先返回去看，仓库就都有了，我们选择想要的仓库 `import` 导入

![](/pages/vercel/vercel-15.png)

这里一般都默认不用改，会自动识别框架

::: tip 说明
如果你是源文件还未构建，需要打开下方按键并填入

已经是静态文件了，不用打开按钮
:::

![](/pages/vercel/vercel-16.png)


我是VitePress，根据文档命令改正确，然后 `Deploy` 发布

::: danger 特别注意
依赖、构建命令和静态文件夹保证都是对的，否则会失败

如果你安装了插件，也必须和依赖整合在一起安装！！！
:::

![](/pages/vercel/vercel-17.png)



耐心等待一会就自动部署完成啦，还能看到我们的首页


![](/pages/vercel/vercel-18.png)


点击 `Continue to Dashboard` 进入面板， `Domains` 就是我们的访问链接

::: tip 说明
是不是发现访问不了，因为自带域名被墙了，我们需要使用自己的域名
:::

![](/pages/vercel/vercel-19.png)


点击  `Domains` 进入域名管理，这里输入我们自己的域名 `Add` 添加

![](/pages/vercel/vercel-20.png)

这里我只选择新增一个一级域名，不喜欢用`www`，可以根据自己的需求

::: tip 说明
前两个实际就是一个重定向的区别

第一个：输入 `www.yiov.top` ，实际访问 `yiov.top`

第二个：输入 `yiov.top` ，实际访问 `www.yiov.top`

第三个：就只访问 `yiov.top`
:::

![](/pages/vercel/vercel-21.png)

现在他要求我们去解析域名，添加A记录

![](/pages/vercel/vercel-22.png)

我以腾讯云为例，添加域名解析 `@` ，记录值为 `76.76.21.21`

::: tip 说明
官方的其他解析值，任选一即可

* A记录：`76.223.126.88`

* cname记录： `cname-china.vercel-dns.com`
:::

![](/pages/vercel/vercel-23.png)

等一会它解析完成就可以了

![](/pages/vercel/vercel-24.png)


我们访问看看，完全OK

![](/pages/vercel/vercel-25.png)

::::





::: details 部署失败

部署失败后，可以点击 `Error` 查看什么原因

![](/pages/vercel/vercel-26.png)

这里告诉我是有23条死链，展开看一下

![](/pages/vercel/vercel-27.png)

已经告诉你在哪个文件中，哪一段是有问题的，依次修改即可

非常贴心，Vercel！YYDS！

![](/pages/vercel/vercel-28.png)

:::




::: details 延迟优化

先使用 [炸了么](https://zhale.me/http/) 测一下自己网站的速度

可以看到即便有vercel自带的cdn加成，仍还有超时的区域

![](/pages/vercel/vercel-29.png)


使用 [@Fgaoxing](https://www.yt-blog.top/9952/) 维护的Vercel节点，类似cf的优选节点

我们解析这里修改成 `CNAME` 记录，值 `vercel.cdn.yt-blog.top`，确认添加

![](/pages/vercel/vercel-30.png)


返回炸了么，再次测速，发现基本上都绿了

有超时的节点是没办法的，已经很不错了

![](/pages/vercel/vercel-31.png)

:::




## 特别鸣谢

* [炸了么](https://zhale.me/http/)

* [Fgaoxing](https://www.yt-blog.top/)