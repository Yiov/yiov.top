# ZeroSSL免费证书申请



## 简介

ZeroSSL是一个免费的证书颁发机构，提供SSL证书创建和管理的一站式解决方案

官网：https://zerossl.com/

![](/ssl/zerossl/zerossl-01.png)


## 免费方案

* 证书数量：3张

* 有效期：90天

* 通配符/泛解析：不支持

* 验证方式：HTTP文件验证、DNS验证

* 自动续签：不支持



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





## 注册

点击官网右上角 [Log In](https://app.zerossl.com/signup) 注册账号，密码需大小写及数字，8位字符以上即可

![](/ssl/zerossl/zerossl-02.png)


## 申请

进入面板，可以看到90天的证书，只能申请3张，点击 `New Certificate` 创建SSL证书

![](/ssl/zerossl/zerossl-03.png)

输入我们的域名，选90天，其他默认，才是免费的

::: tip 说明
* Domains：输入一级域名或二级域名

* Validity：90-Day Certificate

* Add-Ons：什么都不选

* CSR & Contact：默认自动开启的即可
:::

![](/ssl/zerossl/zerossl-04.png)


![](/ssl/zerossl/zerossl-05.png)

验证方式推荐还是DNS验证，需要我们新建一个CNAME并指向对应的值

::: danger 注意
这里的 `Name` 后面的域名，不要复制！！！只要前面部分！！！
:::

::: details 域名是免费服务器分配的二级域名，没有所有权？
只要服务器有使用权就行，可以选择 HTTP 文件验证

---

都没有？那你搁着玩呢，总要有一个是你的吧
:::

![](/ssl/zerossl/zerossl-06.png)

在域名购买商提供的DNS解析处，`添加记录`，我用的腾讯云家的 [DNSPod](https://www.dnspod.cn/)

::: tip 说明

* 主机记录：ZeroSS给的 `Name`（仅复制域名前部分）

* 记录类型：CNAME

* 记录值：ZeroSS给的 `Point to` 的值

* TTL：3600
:::

![](/ssl/zerossl/zerossl-07.png)

添加成功，等待解析完成

![](/ssl/zerossl/zerossl-08.png)

返回 ZeroSSL 点击 `Verify Domain` 验证

![](/ssl/zerossl/zerossl-09.png)

验证成功后，点击 `Download Certificate (.zip)` 下载证书压缩包

![](/ssl/zerossl/zerossl-10.png)

我们的证书需要 `*.pem` 和 `*.key` 格式，但是只有 `crt` 格式怎么办呢，先解压

![](/ssl/zerossl/zerossl-11.png)

很简单，`pem证书` = `ca_bundle.crt` + `certificate.crt`

右键用记事本打开 `ca_bundle.crt`

![](/ssl/zerossl/zerossl-12.png)

全选内容，复制

![](/ssl/zerossl/zerossl-13.png)

同样的方式记事本打开 `certificate.crt`

![](/ssl/zerossl/zerossl-14.png)

拉倒最底部，粘贴将刚复制的内容，保存

![](/ssl/zerossl/zerossl-15.png)

最后将文件重命名改成 `certificate.pem`，确定即可

::: details 看不到文件后缀名
文件夹顶部 查看 - 勾选 `文件拓展名`
:::

![](/ssl/zerossl/zerossl-16.png)




## 部署

部署方式也非常的多，本次仅演示 [宝塔面板](../BT.md)

点击你的域名站点 - SSL - 当前证书，记事本打开 `private.key` ，全选，复制，粘贴在 `密钥（KEY）` 的框里

![](/ssl/zerossl/zerossl-17.png)

同样的方式，我们复制粘贴 `certificate.pem` 在 `证书(PEM格式)` 的框里

![](/ssl/zerossl/zerossl-18.png)

保存并使用证书

![](/ssl/zerossl/zerossl-19.png)

这里建议开启 `强制HTTPS` ，即便别人使用http访问，也强制跳转到https

![](/ssl/zerossl/zerossl-20.png)

回到 ZeroSSL 已经提示部署成功了

::: details 一直没成功
检查你在输入CNAME值的时候，是否没有删掉后面的域名部分
:::

![](/ssl/zerossl/zerossl-21.png)


访问网站，有小锁了，连接安全 - 显示证书，可以看到颁发者和到期时间

![](/ssl/zerossl/zerossl-22.png)




## 吊销

如果你不想使用了，可以吊销证书

点击 `Certificates - Install丨V - Revoke Certificate`

![](/ssl/zerossl/zerossl-23.png)

有个提示就是，即便你吊销了，你使用的名额并不会释放，问你是否确定

再次点击 `Revoke Certificate` 即可

![](/ssl/zerossl/zerossl-24.png)