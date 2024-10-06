# 宝塔面板申请SSL证书




## 简介

宝塔大家都很熟了，不再做介绍了，它的SSL证书申请是最傻瓜式的了

官网：https://www.bt.cn/

![](/ssl/bt/bt-01.png)



## 免费方案

* 证书数量：无限制

* 有效期：90天

* 通配符/泛解析：支持

* 验证方式：HTTP文件验证、DNS验证

* 自动续签：支持

::: details 什么是 通配符 和 泛解析

* 通配符 `*`：是泛解析的一个必用字符，用来表示当前级

* 通配符证书：可以多个二级域名或三级域名共用一个证书，只需要申请一张即可

| 域名/示例 | 泛解析 | 包含 | 不包含 |
|:-:|:-:|:-:|:-:|
| 一级域名 | ❌ | baidu.com | - |
| 二级域名 | *.baidu.com | baike.baidu.com<br>www.baidu.com<br>... | baidu.com |
| 三级域名 | *.bce.baidu.com | login.bce.baidu.com<br>h5.bce.baidu.com<br>... | *.baidu.com<br>bce.baidu.com |
| 依次类推 | ... | ... | ... |
:::




## 申请与部署

进入宝塔面板，选择要申请证书的站点 - SSL - `Let's Encrypt`

::: details 宝塔的 文件验证 和 DNS验证（支持通配符）的区别
* 文件验证：通过服务器的HTTP文件验证，仅支持单域名

* DNS验证：通过域名解析验证，支持单域名、多域名、通配符

* 通配符：也就是泛解析，可以一级域名和所有二级域名，共用一个证书，非常省事
:::

![](/ssl/bt/bt-02.png)


### 文件验证

如果你是二级域名，可以直接使用 `文件验证`

![](/ssl/bt/bt-03.png)

方便又快速，申请完成后会自动填写，记得保存和开启 `强制HTTPS`

![](/ssl/bt/bt-04.png)




### DNS验证（推荐）

如果你是一级域名，强烈安利 `DNS验证（支持通配符）`



:::: details 手动解析

DNS接口我们选择 `手动解析`，建议勾选 `自动组合泛域名`，勾选域名，申请

::: tip 说明

* 域名：勾选要申请的域名，比如 `baidu.com`（如勾选 `自动组合泛域名`，此项仅勾选一级域名）

* 自动组合泛域名：建议勾选，示例为 `*.baidu.com`，表示包含所有的二级域名

* 域名+泛域名：表示一级域名和所有二级域名共用一张证书，非常省事

---

* 特例：如果你把 `www.baidu.com` 二级域名作为主域名，那么你的泛域名就是三级泛解析 `*.www.baidu.com`，以此类推
:::


![](/ssl/bt/bt-05.png)

根据提示到DNS处，添加一条 TXT 和 CAA（可选）

::: warning 特别注意！这里的TXT值，只需要复制 `域名前部分`
* 一级域名申请：比如解析值是 `_acme-challenge.baidu.com`，你只需要 `_acme-challenge`

* 二级域名申请：比如解析值是 `_acme-challenge.baike.baidu.com`，你只需要 `_acme-challenge.baike`
:::

![](/ssl/bt/bt-06.png)

我的域名在 [腾讯云的DNSPod](https://www.dnspod.cn/)，依次添加 `TXT记录` 和 `CAA记录`

复制值的时候注意前面有没有空格

![](/ssl/bt/bt-07.png)

![](/ssl/bt/bt-08.png)

回到宝塔，点击验证

::: details 验证失败?
该帐户1小时内失败的订单次数超过5次，请等待1小时再重试!

* 问题：检查TXT记录，是否复制填写错误，包含了域名

* 解决：重新点击申请，生成新的TXT记录，去DNS解析处修改成新的即可
:::

![](/ssl/bt/bt-09.png)


验证成功后，开始发放证书

![](/ssl/bt/bt-10.png)

点击保存，并开启 `强制HTTPS`

![](/ssl/bt/bt-11.png)

打开网站已经有小锁了，顺便查看证书

![](/ssl/bt/bt-12.png)

::::









:::: details 自动解析

我的域名在 [腾讯云的DNSPod](https://www.dnspod.cn/)，我就使用 `DnsPod` 演示

![](/ssl/bt/bt-13.png)

在DnsPod后台 - 用户 - API密钥 - DnsPod Token，创建密钥

![](/ssl/bt/bt-14.png)

名称随便输吧

![](/ssl/bt/bt-15.png)

这里的 `ID` 和 `Token` 分别复制过去，token只显示一次

![](/ssl/bt/bt-16.png)

粘贴到宝塔后，点保存

![](/ssl/bt/bt-17.png)

再次选择好 `DnsPod` ，建议勾选 `自动组合泛域名`，勾选域名，申请

::: tip 说明

* 域名：勾选要申请的域名，比如 `baidu.com`（如勾选 `自动组合泛域名`，此项仅勾选一级域名）

* 自动组合泛域名：建议勾选，示例为 `*.baidu.com`，表示包含所有的二级域名

* 域名+泛域名：表示一级域名和所有二级域名共用一张证书，非常省事

---

* 特例：如果你把 `www.baidu.com` 二级域名作为主域名，那么你的泛域名就是三级泛解析 `*.www.baidu.com`，以此类推
:::

![](/ssl/bt/bt-18.png)

后台就开始自动配置解析并申请了

![](/ssl/bt/bt-19.png)

点击保存，并开启 `强制HTTPS`

![](/ssl/bt/bt-20.png)

打开网站已经有小锁了，顺便查看证书

![](/ssl/bt/bt-21.png)

::::




## 吊销与续签

因为没有证书管理界面，只能直接关闭SSL，或者用其他证书替换

宝塔默认到期前1个月会自动续签，真是棒棒

![](/ssl/bt/bt-22.png)