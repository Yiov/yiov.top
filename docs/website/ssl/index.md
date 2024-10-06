# SSL证书介绍与申请



## 前言

本来证书申请并不难，有很多方式实现，但是自从 [Let's Encrypt](https://letsencrypt.org/zh-cn/) 由1年变成3个月后，证书自动续签成为刚需，借此机会列举一下证书签发的方式

![](/ssl/ssl-01.png)

::: details HTTPS

早前计算机数据传输，使用的是 [HTTP（超文本传输协议）](https://baike.baidu.com/item/HTTP)，但是由于HTTP是明文的，容易被劫持泄露

之后在 HTTP 的基础上使用 `SSL证书` 加密，形成了 [HTTPS （超文本传输安全协议）](https://baike.baidu.com/item/HTTPS)

![](/ssl/ssl-02.png)
:::



::: details SSL/TLS

浏览器中使用的数字证书（Digital Certificate），最早是 [SSL证书](https://baike.baidu.com/item/SSL%E8%AF%81%E4%B9%A6)，遵循 [SSL协议](https://baike.baidu.com/item/%E5%AE%89%E5%85%A8%E5%A5%97%E6%8E%A5%E5%B1%82)，但后面发现存在较多的漏洞，已经弃用

如今采用最新的 [TLS（传输层安全性协议）](https://baike.baidu.com/item/TLS) 作为全新的协议，比SSL更加安全可靠，由于SSL名声比较响亮，依然沿用

如今说的 SSL证书 实际就是指的 TLS证书，也称为 `SSL/TLS证书`

![](/ssl/ssl-03.png)

:::


::: details CA证书

CA是证书的签发机构（Certificate Authority），它们负责签发SSL证书，CA证书包含了SSL证书以及签名证书等信息

![](/ssl/ssl-04.png)

:::


## 简介

SSL安全证书本来是一个价格高昂的付费服务，但为了加快推广 HTTPS 的普及

一个公益组织 ISRG（Internet Security Research Group，互联网安全研究小组），于2015年推出了 [Let's Encrypt](https://letsencrypt.org/zh-cn/) 免费证书

![](/ssl/ssl-05.png)

Let's Encrypt 设计了一个 ACME 协议（目前最新是v2），这个协议可以通过客户端全自动化申请证书，官方推荐的客户端是 [Certbot](https://certbot.eff.org/)

![](/ssl/ssl-06.png)

网站没有SSL证书，访问就会提示你不安全的网站，有SSL证书的有绿色小锁标志

![](/ssl/ssl-07.png)



## 证书机构

> 本次仅列举免费的，收费的咱也用不起

| CA机构 | 说明 |
|:-:|:-:|
| [Let's Encrypt](https://letsencrypt.org/zh-cn/) | 公益组织 ISRG 推出的免费签发SSL证书的机构 |
| [ZeroSSL](https://zerossl.com/) | 奥地利的证书公司，也提供免费SSL证书，旨在替代Let's Encrypt |
| [Google](https://pki.goog/) | 谷歌推出的免费的SSL证书签发机构 |
| [Buypass](https://www.buypass.com/) | 挪威的证书公司，也提供免费SSL证书 |
| [SSL.com](https://www.ssl.com/) | 一家国际信托服务提供商，也提供免费SSL证书 |
| [Cloudflare](https://www.cloudflare.com/zh-cn/application-services/products/ssl/) | 美国著名的 CDN 加速服务商，也提供免费SSL证书 |




## 申请方式

> 带 ⭐ 的是有教程的，点击即可跳转

::: details DV证书、OV证书、EV证书是什么

* DV证书：域名型证书，安全性一般，适用于个人网站、测试等。

* OV证书：企业型证书，安全性高，适用于政府组织、企业、教育机构等。

* EV证书：企业增强型证书，安全性最高，适用于大型企业、金融机构等。
:::

| 官方/第三方 | 支持 | 说明 |
|:-:|:-:|:-:|
| [Let's Encrypt](https://letsencrypt.org/zh-cn/) | `单域名` `多域名` `泛域名` | 🟢 使用 [certbot](https://letsencrypt.org/zh-cn/docs/client-options/) 安装，每60天自动续签<br>🟠 步骤稍微有点复杂 |
| [⭐ZeroSSL](./zerossl.md) | `单域名` | 🟢 注册后即可申请，和 [SSL For Free](https://www.sslforfree.com/) 是一家<br>🟠 不支持泛域名，仅3个证书，到期需要手动续签 |
| [Google<br>Trust Services](https://pki.goog/) | `单域名` `多域名` `泛域名` | 🟢 支持泛域名，可使用ACME协议续签<br>🟠 需要翻墙，步骤稍微有点复杂 |
| [Cloudflare](https://www.cloudflare.com/zh-cn/application-services/products/ssl/) | `单域名` `多域名` `泛域名` | 🟢 域名托管后，自动配置90天证书，过期后可免费申请15年证书<br>🟠 需要将域名托管到cf |
| |
| [⭐acme.sh](./acmesh.md) | `单域名` `多域名` `泛域名` | 🟢 可申请各家证书的脚本集，参照文档完成申请，自动检测是否过期，过期自动续签 |
| [⭐httpsok](https://httpsok.com/doc/guide/apply.html) | `单域名` `多域名` `泛域名` | 🟢 微信登录控制台，直接申请，支持泛域名，一行命令可自动续签，有方便的可视化面板  |
| [⭐宝塔面板](./bt.md) | `单域名` `多域名` `泛域名` |🟢 操作简单，支持泛域名，自动续签 |
| [⭐来此加密](./laici.md) | `单域名` `多域名` `泛域名` | 🟢 注册后直接申请，支持泛域名<br>🟠 仅限个证书，到期需要手动续签 |
| [⭐腾讯云](./tencent.md) | `单域名` | 🟢 使用 [TrustAsia 亚洲诚信](https://www.trustasia.com/) 免费证书，50张额度<br>🟠 不支持泛域名，到期需要手动续签 |
| [阿里云](https://www.aliyun.com/product/cas) | `单域名` | 🟢 使用 [Digicert](https://www.digicert.com/cn) 免费证书，20张额度<br>🟠 不支持泛域名，到期需要手动续签 |
| [七牛云](https://www.qiniu.com/) | `单域名` | 🟢 使用 [TrustAsia 亚洲诚信](https://www.trustasia.com/) 免费证书🟠 不支持泛域名，到期需要手动续签 |
| [又拍云](https://www.upyun.com/products/ssl) | `单域名` `泛域名` | 只能申请1个，到期需要手动续签 |
| [Freessl](https://freessl.cn/) | `单域名` | 🟢 使用 [TrustAsia 亚洲诚信](https://www.trustasia.com/) 免费证书<br>🟠 注册需要手机号，泛域名需要付费开会员，仅5张证书，到期需要手动续签 |

