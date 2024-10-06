# DNSExit注册免费域名

> 2024-6-20

## 简介

DNSExit是NetDorm动态DNS提供商的子公司，而 freedomain.one 是DNSExit提供的免费的二级域名服务

官网：https://dnsexit.com/

免费域名官网：https://freedomain.one/

![](/domain/dnsexit/dnsexit-01.png)


## 特色

* 可选类型：`.publicvm.com`、`.run.place`、`.linkpc.net`、`.line.pm`、`.work.gd`

* 账号限制：一个账号可免费注册3个

* 提供需求：不需要信用卡、手机号

* 能否托管到CF：不能

* 推荐指数：⭐⭐



## 注册

我们直接进 [免费官网](https://freedomain.one/)


![](/domain/dnsexit/dnsexit-02.png)

选择一个你中意的域名后缀

![](/domain/dnsexit/dnsexit-03.png)

点击 `Check Availability` 检查是否可用，被占用了就换

提示 `Availab` 表示可用

![](/domain/dnsexit/dnsexit-04.png)

点击 `Sign Up` 注册账号

![](/domain/dnsexit/dnsexit-05.png)

注册成功后，还需要邮箱验证才能激活使用

![](/domain/dnsexit/dnsexit-06.png)

点击邮件中的链接，跳转激活成功即可

![](/domain/dnsexit/dnsexit-07.png)

我们再次选择刚才挑好的域名，付费，免费一年

::: tip 说明
下方的小字提示：域名永久免费，到期后30内可以续订，再次续订一年
:::

![](/domain/dnsexit/dnsexit-08.png)

提交后，就购买成功了，可以使用了

![](/domain/dnsexit/dnsexit-09.png)



## 使用

本来应该演示解析到服务器的，但是服务器你能买，十来块的域名不买？

而且免费域名，也不建议弄自己常用服务器上

---

左侧菜单栏 DNS - `Manage your DNS` - `Edit DNS`

![](/domain/dnsexit/dnsexit-10.png)

经过测试是无法解析到 [Vercel](../pages/vercel.md) 上的，所以只能用来做别名解析了


![](/domain/dnsexit/dnsexit-11.png)


点击 `CNAME / Alias` - `Edit`，编辑现有的 `www` 三级域名

![](/domain/dnsexit/dnsexit-12.png)

将 `www` 改成自己喜欢的前缀，我改成了 `doc`

`Points to host` 输入你原本的域名，我用 [GithubPages](../pages/github.md) 演示

下面选择 `external host`，更新

![](/domain/dnsexit/dnsexit-13.png)

这里一定要点击 `Save Changes`，否则没有保存生效

![](/domain/dnsexit/dnsexit-14.png)

这样就是添加好了

![](/domain/dnsexit/dnsexit-15.png)

在github仓库设置 - pages - 自定义域 输入注册的免费域名

保存，然后勾选强制https，没有生效多等一会，大概5分钟

![](/domain/dnsexit/dnsexit-16.png)

下方显示 `DNS check successful` 就是可以访问了

![](/domain/dnsexit/dnsexit-17.png)



