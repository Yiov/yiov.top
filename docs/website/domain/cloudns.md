# ClouDNS的注册及使用




## 简介

ClouDNS是欧洲最大的全球托管DNS服务提供商，还提供免费的二级域名

官网：[https://www.cloudns.net/](https://www.cloudns.net/index/lang/chs/)

![](/domain/cloudns/cloudns-01.png)


## 特色

* 可选类型：`.dns.dynamic.net`、`.cloudns.be`、`.cloudns.ch`（可能会变动）

* 账号限制：一个账号仅可注册1个

* 提供需求：不需要信用卡、手机号

* 能否托管到CF：能

* 推荐指数：⭐⭐⭐


## 注册


点 登记 ，注册新账户

![](/domain/cloudns/cloudns-02.png)

输入姓和名，中间要有空格，填入邮箱，提交

![](/domain/cloudns/cloudns-03.png)


点击邮箱里的链接，激活启用即可

![](/domain/cloudns/cloudns-04.png)

![](/domain/cloudns/cloudns-05.png)


![](/domain/cloudns/cloudns-06.png)





## 使用


::: details 申请免费域名

> 说明：ClouDNS提供的域名，仅有免费使用权，没有所有权！ClouDNS随时可以收回！

点 创建区域 

![](/domain/cloudns/cloudns-07.png)

免费区域

![](/domain/cloudns/cloudns-08.png)

自己取一个二级域名前缀，域名自己挑一个

![](/domain/cloudns/cloudns-09.png)

选好了，创建

![](/domain/cloudns/cloudns-10.png)


提示需要提供干净的IP才可以使用

![](/domain/cloudns/cloudns-11.png)

开启代理软件，全局代理，香港节点就行

不行就换下一个节点，直到成功创建

![](/domain/cloudns/cloudns-12.png)

默认的解析记录我们先删掉，后续添加自己想要的即可

![](/domain/cloudns/cloudns-13.png)

![](/domain/cloudns/cloudns-14.png)

:::





:::: details 域名解析到CloudFlare

在 [Cloudflare仪表盘](https://dash.cloudflare.com/) 处 添加站点

![](/domain/cloudns/cloudns-15.png)

输入你申请的免费域名，继续

![](/domain/cloudns/cloudns-16.png)

开始快速扫描

![](/domain/cloudns/cloudns-17.png)

一般是没有扫到的，我们点继续

![](/domain/cloudns/cloudns-18.png)

这两个服务器地址，要加入ClouDNS中

![](/domain/cloudns/cloudns-19.png)

点击 `添加新纪录`

![](/domain/cloudns/cloudns-20.png)

类型 `NS`，主机留空不要填，指向分别填入CloudFlare提供的地址

![](/domain/cloudns/cloudns-21.png)

2个服务器地址添加完成后，回到Cloudflare，点继续，等待激活

![](/domain/cloudns/cloudns-22.png)

ClouDNS 更新这里都是对勾就行，耐心等待，大概5分钟左右

![](/domain/cloudns/cloudns-23.png)

邮箱收到提示，激活成功

![](/domain/cloudns/cloudns-24.png)

点击左侧菜单栏 `SSL/TLS`,加密模式改成 `完全`

![](/domain/cloudns/cloudns-25.png)

然后点击左侧菜单来 `SSL/TLS - 边缘证书` ，点展开查看证书

![](/domain/cloudns/cloudns-26.png)

这里的证书名称，我们只需要域名签名的部分

![](/domain/cloudns/cloudns-27.png)

继续添加新纪录，类型为 `TXT`，主机为域名前的部分，指向分别填入CloudFlare提供的TXT值

![](/domain/cloudns/cloudns-28.png)

添加完成即可

![](/domain/cloudns/cloudns-29.png)

等待大概10分钟，边缘证书生效，这里会显示 `有效`

::: tip 说明
如果你使用了2级域名，也需要在此处，手动添加证书
:::

![](/domain/cloudns/cloudns-30.png)

::::


:::: details 域名解析到 CloudFlare 补充：Works使用自定义域

在你的Worker中，设置 - 触发器 - 添加自定义域

![](/domain/cloudns/cloudns-31.png)

这里要使用三级域名，在原本的二级域名中添加一个前缀

![](/domain/cloudns/cloudns-32.png)

然后查看DNS记录

![](/domain/cloudns/cloudns-33.png)

Cloudflare中已经添加好了，但是ClouDNS需要手动添加

![](/domain/cloudns/cloudns-34.png)

在ClouDNS中添加新记录，类型 `NS`,主机为你设置的前缀，指向为CloudFlare的NS地址

![](/domain/cloudns/cloudns-35.png)

2个都添加成功，就可以使用这个三级域名了

![](/domain/cloudns/cloudns-36.png)

然后在Worker的自定义域，点击显示证书

![](/domain/cloudns/cloudns-37.png)

这里有个待验证，需要手动添加一个TXT记录

![](/domain/cloudns/cloudns-38.png)

依次复制TXT名称和值，添加到ClouDNS中

::: warning 注意
注意看第一个TXT名称，需要你复制 `_acme-challenge.你的域名前缀`，不要漏
:::

![](/domain/cloudns/cloudns-39.png)

这样一共2条NS和2条TXT记录，就都添加完成了

![](/domain/cloudns/cloudns-40.png)

等10分钟，回到Worker自定义中查看，有效表示可以使用了

![](/domain/cloudns/cloudns-41.png)

::::