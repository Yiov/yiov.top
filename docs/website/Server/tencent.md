# 腾讯云服务器的购买及使用

> 2022-7-24



## 简介

腾讯公司旗下的产品，提供云服务器、云存储、云数据库、域名注册等基础云服务

官网：https://cloud.tencent.com/


## 购买

我这里腾讯云演示，进入 [腾讯云官网](https://cloud.tencent.com/)

::: details 关于腾讯的轻量云服务器轻量无忧计划
很可惜，这个活动已经结束了，可以 [终身180/年续费](https://cloud.tencent.com/act/lighthouse?fromSource=gwzcw.1293314.1293314.1293314)
:::

![](/server/tencent/tencent-01.png)


在产品里，可以选择 `云服务器` 或者 `轻量服务器` ，个人使用建议轻量，价格便宜

![](/server/tencent/tencent-02.png)


首次购买，活动场新人的折扣力度比较大

::: tip 说明
价格在100~200左右一年，可以闭眼入
:::

![](/server/tencent/tencent-03.png)



这里地域选离自己近的，镜像我使用 `CentOS 7.6` ，选好后，支付订单即可！

::: tip 说明
懒人可以选集成好的镜像，或者 [debian](https://www.debian.org/)、[Ubuntu](https://cn.ubuntu.com/)
:::

![](/server/tencent/tencent-04.png)









## 控制台


### 公网ip

右上角 `控制台` 进入，看我们刚买的服务器

::: tip 说明
一般会提示实名，国内服务器是这样的
:::

![](/server/tencent/tencent-05.png)


云产品 - 轻量应用服务器

![](/server/tencent/tencent-06.png)


这个就是你的服务器 `公网IP` ，别随意暴露给别人哦，以免被打

![](/server/tencent/tencent-07.png)




### 重置密码

更多 - 管理，可以进行重启 或 重置密码(服务器)

::: tip 说明
这里的登录，是指腾讯自带的 `WebShell` 工具登录，也可以使用 [其他shell工具](../shell/)
:::

![](/server/tencent/tencent-08.png)




### 防火墙

平时用的最多的就是 `防火墙` ，用来开放端口

![](/server/tencent/tencent-09.png)


端口根据你需求开放，不要全开，不安全

::: tip 说明
比如：需要开放5700端口，添加规则 - 端口填 `5700` 即可

来源默认都是：`0.0.0.0/0`
:::

![](/server/tencent/tencent-10.png)





## 备案

::: warning 注意
根据你购买的服务器而定

* 国内服务器：必须备案

* 国外服务器：无需备案
:::

控制台-云产品 - 网站备案，这个就没技巧而言了，按步骤实名即可

![](/server/tencent/tencent-11.png)


注意国内一般不允许个人做导航，网站名称一般 `写个人生活日志之类` 的，比较容易通过

::: tip 说明
腾讯客服会电话给你，不用慌，按你想的说就行了，客服也会给你些建议，最后等待备案通过

通过后会邮件通知你，并要求你在页脚添加备案信息，注意 [工信部备案](https://beian.miit.gov.cn/) 要能跳转哦
:::

![](/server/tencent/tencent-12.png)
