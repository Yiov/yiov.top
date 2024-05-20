# ClouDNS的注册及使用

> 更新时间：2024-5-20


## 简介

ClouDNS是欧洲最大的全球托管DNS服务提供商，还提供免费的二级域名

官网：[https://www.cloudns.net/](https://www.cloudns.net/index/lang/chs/)

![](/cloudns/cloudns-01.png)




## 注册


点 登记 ，注册新账户

![](/cloudns/cloudns-02.png)

输入姓和名，中间要有空格，填入邮箱，提交

![](/cloudns/cloudns-03.png)


点击邮箱里的链接，激活启用即可

![](/cloudns/cloudns-04.png)

![](/cloudns/cloudns-05.png)


![](/cloudns/cloudns-06.png)





## 使用


::: details 申请免费域名

> 说明：ClouDNS提供的域名，仅有免费使用权，没有所有权！ClouDNS随时可以收回！

点 创建区域 

![](/cloudns/cloudns-07.png)

免费区域

![](/cloudns/cloudns-08.png)

自己取一个二级域名前缀，域名自己挑一个

![](/cloudns/cloudns-09.png)

选好了，创建

![](/cloudns/cloudns-10.png)


提示需要提供干净的IP才可以使用

![](/cloudns/cloudns-11.png)

开启代理软件，挂一个机场节点，香港就行，就能成功创建了

![](/cloudns/cloudns-12.png)

默认的解析记录我们先删掉，后续添加自己想要的即可

![](/cloudns/cloudns-13.png)

![](/cloudns/cloudns-14.png)

:::





:::: details 域名解析到CloudFlare

在 [Cloudflare仪表盘](https://dash.cloudflare.com/) 处 添加站点

![](/cloudns/cloudns-15.png)

输入你申请的免费域名，继续

![](/cloudns/cloudns-16.png)

开始快速扫描

![](/cloudns/cloudns-17.png)

一般是没有扫到的，我们点继续

![](/cloudns/cloudns-18.png)

这两个服务器地址，要加入ClouDNS中

![](/cloudns/cloudns-19.png)

点击 `添加新纪录`

![](/cloudns/cloudns-20.png)

类型 `NS`，主机留空不要填，指向分别填入CloudFlare提供的地址

![](/cloudns/cloudns-21.png)

2个服务器地址添加完成后，回到Cloudflare，点继续，等待激活

![](/cloudns/cloudns-22.png)

ClouDNS 更新这里都是对勾就行，耐心等待，大概5分钟左右

![](/cloudns/cloudns-23.png)

邮箱收到提示，激活成功

![](/cloudns/cloudns-24.png)

点击左侧菜单栏 `SSL/TLS`,加密模式改成 `完全`

![](/cloudns/cloudns-25.png)

然后点击左侧菜单来 `SSL/TLS - 边缘证书` ，点展开查看证书

![](/cloudns/cloudns-26.png)

这里的证书名称，我们只需要域名签名的部分

![](/cloudns/cloudns-27.png)

继续添加新纪录，类型为 `TXT`，主机为域名前的部分，指向分别填入CloudFlare提供的TXT值

![](/cloudns/cloudns-28.png)

添加完成即可

![](/cloudns/cloudns-29.png)

等待大概10分钟，边缘证书生效，这里会显示 `有效`

::: tip 说明
如果你使用了2级域名，也需要在此处，手动添加证书
:::

![](/cloudns/cloudns-30.png)

::::


