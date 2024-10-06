# 腾讯云申请SSL证书



## 简介

腾讯提供50张免费的 [TrustAsia 亚洲诚信](https://www.trustasia.com/) SSL证书

官网：https://console.cloud.tencent.com/ssl

![](/ssl/tencent/tencent-01.png)



## 免费方案

* 证书数量：50张

* 有效期：90天

* 通配符/泛解析：不支持

* 验证方式：DNS验证

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





## 申请

登录账号进入 [控制台 - SSL证书](https://console.cloud.tencent.com/ssl) ，我的证书 - `申请免费证书（0/50）`

![](/ssl/tencent/tencent-02.png)

再次点击 `申请免费证书`

![](/ssl/tencent/tencent-03.png)

输入我们的域名，选择 自动DNS验证，填入邮箱，提交申请

![](/ssl/tencent/tencent-04.png)

会自动添加解析记录，点完成

![](/ssl/tencent/tencent-05.png)




## 部署

申请完成后，点击 `下载` - 选择其他（pem格式的就行）

![](/ssl/tencent/tencent-06.png)

分别用记事本打开 `*.pem` 文件 和 `*.key` 文件，复制

![](/ssl/tencent/tencent-07.png)

分别粘贴到框里，保存，并开启强制HTTPS

![](/ssl/tencent/tencent-08.png)

打开网站已经有小锁了，顺便查看证书

![](/ssl/tencent/tencent-09.png)



## 吊销

在证书页面，选择要吊销的证书，更多 - 吊销

![](/ssl/tencent/tencent-10.png)

根据提示下一步

![](/ssl/tencent/tencent-11.png)

删除证书即可

![](/ssl/tencent/tencent-12.png)



## 续签

需要手动重新申请一张新的证书，然后重新 [部署](#部署)