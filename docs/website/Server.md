# 服务器的购买及使用

> 更新时间：2022-7-24



## 简介

计算机的一种，具有高速的CPU运算能力、长时间的可靠运行、强大的I/O外部数据吞吐能力以及更好的扩展性

简单来说它就是一台云电脑，同样有`CPU`、`主板`、`硬盘`、`内存`等

从外观上分为：机架式、刀片式、塔式、机柜式

![](/server/server-01.png)


## 提供商

::: tip 建议
新手还是用名气大的，等熟练了再用便宜的
:::

| 国内域名商 | 国际域名商 |
|:-:|:-:|
| [阿里云](https://www.aliyun.com/)、[腾讯云](https://cloud.tencent.com/)、[西部数据](https://www.west.cn/)、[UCloud·优刻得](https://www.ucloud.cn/)、[华为云](https://activity.huaweicloud.com/)、[百度云](https://qifu.baidu.com/)、[天翼云](https://www.ctyun.cn/)、[新网互联](https://www.dns.com.cn/) |  [搬瓦工](https://bandwagonhost.com/)、[Vultr](https://www.vultr.com/)、[Alphavps](https://alphavps.com/)、[DigitalOcean](https://www.digitalocean.com/)、[Linode](https://www.linode.com/)、[RackNerd](https://www.racknerd.com/)、[DMIT](https://www.dmit.io/)、[HostDare](https://bill.hostdare.com/)、[GigsGigsCloud](https://www.gigsgigscloud.com/)、[亚马逊AWS](https://aws.amazon.com/cn/)、[微软Azure](https://azure.microsoft.com/zh-cn/)、[Google Cloud](https://cloud.google.com/)、[ClouDNS](https://www.cloudns.net/index/lang/chs/)  |








## 购买

我这里腾讯云演示，进入 [腾讯云官网](https://cloud.tencent.com/)

::: details 不想花钱购买？
可以考虑使用 [GitHub免费托管](./github.md) 或者 [本地搭建个虚拟机](./VMware.md)
:::

::: details 关于腾讯的轻量云服务器轻量无忧计划
很可惜，这个活动已经结束了，可以 [终身180/年续费](https://cloud.tencent.com/act/lighthouse?fromSource=gwzcw.1293314.1293314.1293314)
:::

![](/server/server-02.png)


在产品里，可以选择 `云服务器` 或者 `轻量服务器` ，个人使用建议轻量，价格便宜

![](/server/server-03.png)


首次购买，活动场新人的折扣力度比较大

::: tip 说明
价格在100~200左右一年，可以闭眼入
:::

![](/server/server-04.png)



这里地域选离自己近的，镜像我使用 `CentOS 7.6` ，选好后，支付订单即可！

::: tip 说明
懒人可以选集成好的镜像，或者 [debian](https://www.debian.org/)、[Ubuntu](https://cn.ubuntu.com/)
:::

![](/server/server-05.png)









## 控制台


### 公网ip

右上角 `控制台` 进入，看我们刚买的服务器

::: tip 说明
一般会提示实名，国内服务器是这样的
:::

![](/server/server-06.png)


云产品 - 轻量应用服务器

![](/server/server-07.png)


这个就是你的服务器 `公网IP` ，别随意暴露给别人哦，以免被打

![](/server/server-08.png)




### 重置密码

更多 - 管理，可以进行重启 或 重置密码(服务器)

::: tip 说明
这里的登录，是指腾讯自带的 `WebShell` 工具登录，也可以使用 [其他shell工具](./Xshell)
:::

![](/server/server-09.png)




### 防火墙

平时用的最多的就是 `防火墙` ，用来开放端口

![](/server/server-10.png)


端口根据你需求开放，不要全开，不安全

::: tip 说明
比如：需要开放5700端口，添加规则 - 端口填 `5700` 即可

来源默认都是：`0.0.0.0/0`
:::

![](/server/server-11.png)





## 备案

::: warning 注意
根据你购买的服务器而定

* 国内服务器：必须备案

* 国外服务器：无需备案
:::

控制台-云产品 - 网站备案，这个就没技巧而言了，按步骤实名即可

![](/server/server-12.png)


注意国内一般不允许个人做导航，网站名称一般 `写个人生活日志之类` 的，比较容易通过

::: tip 说明
腾讯客服会电话给你，不用慌，按你想的说就行了，客服也会给你些建议，最后等待备案通过

通过后会邮件通知你，并要求你在页脚添加备案信息，注意 [工信部备案](https://beian.miit.gov.cn/) 要能跳转哦
:::

![](/server/server-13.png)
