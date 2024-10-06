# 腾讯云域名的注册及使用




## 简介

腾讯公司旗下的产品，提供云服务器、云存储、云数据库、域名注册等基础云服务

官网：https://cloud.tencent.com/

![](/domain/tencent/tencent-01.png)



## 注册

相较于服务器而言，域名真的是便宜

[腾讯云首页](https://cloud.tencent.com/) - 产品 - 域名注册

![](/domain/tencent/tencent-02.png)


自己想一个域名搜索，被注册了就换一个，直到有中意的

![](/domain/tencent/tencent-03.png)

![](/domain/tencent/tencent-04.png)


购买完成后，右上角 `控制台`- 云产品 - 域名注册

![](/domain/tencent/tencent-05.png)



## 域名解析

看到域名后，可以先进行域名解析

> 腾讯云域名解析，使用的是全资收购的 [DNSPod](https://www.dnspod.cn/)

![](/domain/tencent/tencent-06.png)


直接点`快速添加解析`，记录值填 `服务器的公网IP` 即可

::: tip 常用的解析

* 类型：A
    * 名称：`@` (一级域名，如：baidu.com)
        * iPv4地址：填服务器IP
    * 名称：`www` (二级域名，可自定义，如：www.baidu.com)
        * iPv4地址：填服务器IP
    * 名称：`*` (泛解析，不要轻易使用)
        * iPv4地址：填服务器IP

---

* 类型：CNAME (别名解析)
    * 名称：`@` (一级域名，如：yiov.top)
        * iPv4地址：其他域名 (比如：yiov.github.io)
    * 名称：`nav` (二级域名，可自定义，如：nav.yiov.top)
        * iPv4地址：其他域名 (比如：yiov.github.io)

---

说明：二级/三级域名，都可以随意添加，免费的
:::


![](/domain/tencent/tencent-07.png)






## SSL证书

::: tip 建议
等你网站搭建完毕后，再来申请

如不配置，网站有不安全风险提示
:::

控制台 - 云产品 - SSL证书

![](/domain/tencent/tencent-08.png)


我的证书 - 申请免费证书，最多申请50张，到期了也能恢复额度

![](/domain/tencent/tencent-09.png)

申请免费的就行，付费的咱也用不起

![](/domain/tencent/tencent-10.png)


填入你的域名，二级域名也可以，输入邮箱，下一步等通过就行了

![](/domain/tencent/tencent-11.png)


等一会通过后会邮件提示，根据自己的需求下载相应的证书，我选择的 `Nginx`


![](/domain/tencent/tencent-12.png)


下载的压缩包里有后缀为 `KEY` 的秘钥和 `PEM` 格式的证书

我这里使用的宝塔面板，鼠标右键 - 记事本打开，分别复制了粘贴，开启 `强制HTTPS` ，保存

![](/domain/tencent/tencent-13.png)


这样我们的网页就不一样了，对比一下

::: tip 说明
就是看着可信度高点，骗子网站可不一定有
:::

![](/domain/tencent/tencent-14.png)




## 备案

国内域名注册，必须备案

很简单，按照提示步骤实名备案即可