# 来此加密申请SSL证书

> 更新时间：2024-7-12

## 简介

来此加密是一个SSL证书申请的聚合平台，支持自由选择证书

官网：https://letsencrypt.osfipin.com/

![](/ssl/laici/laici-01.png)




## 免费方案

* 证书数量：6张

* 有效期：90天 / 180天

* 多域名：1张证书仅支持2个

* 通配符/泛解析：支持

* 验证方式：HTTP文件验证、DNS验证

* 自动续签：不支持

::: details 什么是 通配符 和 泛解析

通配符 `*`，是泛解析的一个必用字符，且只能表示当前级

---

比如域名是：`baidu.com`，那么它的泛解析就是 `*.baidu.com` 

表示 baidu.com 下所有的二级域名（不含三级域名），如 `baike.baidu.com` 等

---

比如三级域名是 `bce.baidu.com`，那么它的泛解析就是 `*.bce.baidu.com`

表示 bce.baidu.com 下所有的三级域名（不含四级域名）， 如 `login.bce.baidu.com` 等

以此类推...
:::



## 支持证书

| CA机构 | 有效天数 | 域名数量 | 是否支持通配符 | 是否支持IDNs |
|:-:|:-:|:-:|:-:|:-:|
| [Let's Encrypt](https://letsencrypt.org/zh-cn/) | 90天 | 100个 | ✔️ | ✔️ |
| [ZeroSSL](https://zerossl.com/) | 90天 | 100个 | ✔️ | ✔️ |
| [Google](ttps://pki.goog/) | 90天 | 100个 | ✔️ | ❌ |
| [Buypass](https://www.buypass.com/) | 180天 | 6个 | ❌ | ✔️ |


## 注册

在官网点击 立即开始 [注册账号](https://letsencrypt.osfipin.com/user-0408/user/register)

![](/ssl/laici/laici-02.png)

![](/ssl/laici/laici-03.png)


## 申请

左侧菜单栏 - 申请证书

![](/ssl/laici/laici-04.png)

输入域名，勾选泛解析，仅二级域名就不要勾选

![](/ssl/laici/laici-05.png)

默认使用 ECC 即可，下一步

::: tip 说明
* CSR：Certificate Signing Request，证书签名请求文件

* ECC：Elliptic Curve Cryptography，椭圆加密算法，密钥短安全性高，但老旧设备兼容性不足

* RSA：非对称加密算法，普及率最高，但密钥较长安全性一般
:::

![](/ssl/laici/laici-06.png)

默认是Let's Encrypt，其他证书需要到小程序签到解锁

![](/ssl/laici/laici-07.png)

提交申请后，去验证

![](/ssl/laici/laici-08.png)

等加载出来后，方式只能选手动DNS验证，自动的需要开VIP

![](/ssl/laici/laici-09.png)

我们需要在DNS解析处，添加这一条TXT记录

![](/ssl/laici/laici-10.png)

我的域名在 [腾讯云的DNSPod](https://www.dnspod.cn/)，添加 `TXT记录` ，复制粘贴对应的值

![](/ssl/laici/laici-11.png)

![](/ssl/laici/laici-12.png)

点击 验证全部，提交

![](/ssl/laici/laici-13.png)

稍等一会证书就申请好了，在证书部署中可以看到

![](/ssl/laici/laici-14.png)

## 部署

点击 `查看证书(链)` ，复制，粘贴到宝塔的 `证书(PEM格式)` 框中

点击 `查看密钥(KEY)`，复制，粘贴到宝塔的 `密钥(KEY)` 框中

![](/ssl/laici/laici-15.png)

点击保存，并开启 `强制HTTPS`

![](/ssl/laici/laici-16.png)


打开网站已经有小锁了，顺便查看证书

![](/ssl/laici/laici-17.png)