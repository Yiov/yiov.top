# 域名的购买及使用

> 更新时间：2022-7-24


## 简介

英文名 Domain Name，常于服务器绑定在一起

由于服务器的IP地址不方便记忆，后来通过DNS将域名与IP互相映射，只要通过域名就可以直接访问服务器



## 提供商

::: tip 建议
新手还是用名气大的，等熟练了再用便宜的
:::

| 国内域名商 | 国际域名商 |
|:-:|:-:|
| [万网·阿里云](https://www.aliyun.com/)、[新网](https://www.xinnet.com/)、[腾讯云](https://cloud.tencent.com/)、[西部数据](https://www.west.cn/services/domain/)、[华为云](https://activity.huaweicloud.com/)、[百度云](https://qifu.baidu.com/)、[新网互联](https://www.dns.com.cn/) | [GoDaddy](https://www.godaddy.com/)、[namecheap](https://www.namecheap.com/)、[Dynadot](https://www.dynadot.com/)、[NameSilo](https://www.namesilo.com/)、[Crazydomains](https://www.crazydomains.com/)、[Domain.com](https://www.domain.com/)、[Name.com](https://www.name.com/zh-cn/)、[Porkbun](https://porkbun.com/)、[Cloudflare Domains](https://www.cloudflare.com/zh-cn/products/registrar/)、[Google Domains](https://domains.google/)  |



## 分类


### 域名后缀

域名后缀 分为 国际域名 和 国内域名 

* 国际域名：`.com` `.net` `.org` 等

* 国内域名：`.cn` `.us` `.hk` 等



---

### 域名前缀

购买单个域名后，可以免费在域名前，添加 二级域名 或 三级域名

* 顶级域名：域名前仅有一个前缀，比如 `baidu.com`

* 二级域名：在 `顶级域名` 前，还有一个前缀，比如 `www.baidu.com`

* 三级域名：在 `二级域名` 前，还有一个前缀，比如 `login.bce.baidu.com`



## 注册

相较于服务器而言，域名真的是便宜，我用 腾讯云 演示

腾讯云首页 - 产品 - 域名注册

![](/domain/domain-01.png)


自己想一个域名搜索，被注册了就换一个，直到有中意的

![](/domain/domain-02.png)

![](/domain/domain-03.png)


购买完成后，右上角 `控制台`- 云产品 - 域名注册

![](/domain/domain-04.png)



## 域名解析

看到域名后，可以先进行域名解析

![](/domain/domain-05.png)


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


![](/domain/domain-06.png)






## SSL证书

::: tip 建议
等你网站搭建完毕后，再来申请

如不配置，网站有不安全风险提示
:::

控制台 - 云产品 - SSL证书

![](/domain/domain-07.png)


我的证书 - 申请免费证书，最多申请50张，到期了也能恢复额度

![](/domain/domain-08.png)

申请免费的就行，付费的咱也用不起

![](/domain/domain-09.png)


填入你的域名，二级域名也可以，输入邮箱，下一步等通过就行了

![](/domain/domain-10.png)


等一会通过后会邮件提示，根据自己的需求下载相应的证书，我选择的 `Nginx`


![](/domain/domain-11.png)


下载的压缩包里有后缀为 `KEY` 的秘钥和 `PEM` 格式的证书

我这里使用的宝塔面板，鼠标右键 - 记事本打开，分别复制了粘贴，开启 `强制HTTPS` ，保存

![](/domain/domain-12.png)


这样我们的网页就不一样了，对比一下

::: tip 说明
就是看着可信度高点，骗子网站可不一定有
:::

![](/domain/domain-13.png)




## 备案

国内域名注册，必须备案

很简单，按照提示步骤实名备案即可