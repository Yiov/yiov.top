# Cloudflare注册及使用

> 更新时间：2024-4-16

## 简介

我们常说的 `套个CF` ，其实就是说的cloudflare，因为他其中最特色的功能就是免费的CDN

::: tip 什么是CDN
CDN 的全称是 Content Delivery Network，即内容分发网络

* 比方：北京到广东的快递包裹，时长要3天；但如果北京在广东有货物仓储，直接广东发货，时长就仅需1天

* 作用：CDN就是这个作用，将我们的网站临时存储在服务器中，谁访问就分配距离他最近的节点连接，从而大大加快网页访问速度

另：常见的CDN服务商还有 [又拍云](https://www.upyun.com/)、[七牛云](https://www.qiniu.com/)、[腾讯云COS](https://cloud.tencent.com/act/pro/cos)、[阿里云OSS](https://www.aliyun.com/product/oss)等
:::



## 注册

官网：[https://www.cloudflare.com/](https://www.cloudflare-cn.com/)

![](/cloudflare/cloudflare-01.png)

注册账号就行

::: warning 说明
虽然有中国站点，但访问还是要 [科学上网](../gfw/proxy.md) ，否则无法跳转
:::

![](/cloudflare/cloudflare-02.png)

![](/cloudflare/cloudflare-03.png)











## 使用

Cloudflare还可以创建 [cloudflare page](https://pages.cloudflare.com/) ，但体验上稍微差点，这里先不演示








:::: details CDN加速

::: tip 说明
仅演示下Github Page的步骤，服务器步骤也差不多

演示网站：https://yiov.github.io/

由于github基本处于半墙状态，也可以借助cloudflare进行加速
:::


#### 准备域名

需要自己先准备 [一个域名 或 自定二级域名](../website/githubpage/index.md#_3-访问及自定义域名) ，Github Pages不能修改DNS

---


#### 添加解析

我是腾讯云买的域名，进控制台，添加记录

* 主机记录：`@`或者自定义其他二级域名

* 记录类型为`CNAME`

* 记录值：`yiov.github.io`

::: warning 注意
如果你是加速自己的服务器，不需要填额外添加
:::

![](/cloudflare/cloudflare-04.png)



然后在仓库设置 - pages - 自定义域名 填入 我们购买的域名，保存

::: tip 说明
等待解析完成，用域名可以访问即可
:::

![](/cloudflare/cloudflare-05.png)

---

#### 添加站点

回到 cloudflare 添加站点

::: tip 说明
不需要填https，直接填域名
:::

![](/cloudflare/cloudflare-06.png)


拉倒最下面，选择 Free 免费的方案，继续

![](/cloudflare/cloudflare-07.png)



它会自动扫描我们原本的DNS

![](/cloudflare/cloudflare-08.png)


我只解析了一个`@`，竟然没扫描过来，那就手动添加一下 `CNAME` ，和DNSPod那里一样的


![](/cloudflare/cloudflare-09.png)

添加好后点 继续

::: tip 建议
这里最好将小云朵代理状态关掉，否则网站不可访问

代理走的是美国节点
:::

![](/cloudflare/cloudflare-10.png)

---

#### 修改DNS


最后要求我们修改DNS服务器


![](/cloudflare/cloudflare-11.png)


以腾讯云为例进入域名后台，勾选域名 - 更多操作 - 修改DNS服务器


![](/cloudflare/cloudflare-12.png)



自定义DNS，将cloudflare提供的2个DNS填上去


![](/cloudflare/cloudflare-13.png)


完成后，会显示其他，且可以进域名里看到变更了



![](/cloudflare/cloudflare-14.png)


![](/cloudflare/cloudflare-15.png)


点击检查服务器即可，等10分钟左右就会激活成功了


![](/cloudflare/cloudflare-16.png)


![](/cloudflare/cloudflare-17.png)


这里的快速入门，我也是一顿骚操作默认点完了，最后网站不能访问

> 提示：too many HTTP

需要将 `SSL/TLS - 边缘证书 - 始终使用HTTPS` 关闭


![](/cloudflare/cloudflare-18.png)


![](/cloudflare/cloudflare-19.png)


还是无法访问，最后发现是小云朵没关

DNS - 记录 - 将小云朵关掉，仅DNS即可


![](/cloudflare/cloudflare-20.png)


刷新访问就可以了，我们用 [站长工具](https://ping.chinaz.com/) ping一下前后

::: tip 说明
事实证明免费的也就这样，还是付费的好用
:::

![](/cloudflare/cloudflare-21.png)


::::












:::: details WARP科学上网

WARP是cloudflare公司推出的一款基于wireguard协议的VPN服务，但比传统的VPN更稳定更安全可靠

---

#### 创建团队

点击 `Zero Trust` 

::: tip 说明

* Zero Trust：无限流量，50人以内免费

* WARP+：无限流量，付费订阅版

* WARP：免费，每月1G，拉新获得流量
:::



![](/cloudflare/cloudflare-22.png)


输入一个团队名，自己取就行

![](/cloudflare/cloudflare-23.png)


然后选择免费 `Free` 的方案

![](/cloudflare/cloudflare-24.png)


点 `Proceed to payment` 继续支付

![](/cloudflare/cloudflare-25.png)

提示要添加信用卡，否则无法跳过，但是有办法

![](/cloudflare/cloudflare-26.png)

我们直接关闭网页！重新打开 [仪表盘主页](https://dash.cloudflare.com/) 就可以跳过了

重新进去后再次进入 `Zero Trust`

![](/cloudflare/cloudflare-22.png)

点击 `My Team` - `Devices`
![](/cloudflare/cloudflare-27.png)

然而我的团队里没有添加设备的选项

我们可以通过 `网页后退` 或者 `点其他地方` 再返回，就能恢复

![](/cloudflare/cloudflare-28.png)

我就随便点了一下 `Lists`

![](/cloudflare/cloudflare-29.png)

返回 `Devices` ，就可以正常添加了 `Connect a device`

![](/cloudflare/cloudflare-30.png)

这里填写邮箱后缀！邮箱后缀名！不是填完整的邮箱

::: warning 重要
由于我们是跳过了支付页，就无法进入后台，新增其他邮箱后缀了

本次填写后就无法修改，请确定要使用的邮箱类型

* 谷歌邮箱后缀：`@gmail.com`，必须用谷歌邮箱注册方可加入团队

* QQ邮箱后缀：`@qq.com`，必须用QQ邮箱注册方可加入团队

* ... (以此类推)

注：非当前填写的邮箱类型，注册将无法接收到验证码！
:::

![](/cloudflare/cloudflare-31.png)

然后要选择一个客户端，我就选 `Windows` 吧，必须要点一下！！！

不需要下载，等会我们统一使用其他客户端

![](/cloudflare/cloudflare-32.png)

接下来会跳出你的团队名，点一个 `copy`，必须要点一下！！！

::: details 团队名找回或修改
Zero Trust - Settings - Custom Pages - Team domain
:::

![](/cloudflare/cloudflare-33.png)

最后下载根证书，点一下就行了，不用其他操作了

![](/cloudflare/cloudflare-34.png)


---

#### 1.1.1.1

不管刚刚跳转的客户端是什么，都推荐使用 [1.1.1.1](https://one.one.one.one/zh-Hans/)

::: tip 为什么使用1.1.1.1
它本是Cloudflared的DNS服务，通过全球的CDN提高访问网站时的速度

而后官方集成了WARP，推出了这款应用程序
:::

官网：[https://1.1.1.1/](https://one.one.one.one/zh-Hans/)，网站打开需要 [科学上网](../gfw/proxy.md)

![](/cloudflare/cloudflare-35.png)

下载完成点安装

::: tip 关于手机端的使用
使用方式基本一致，是在搞不懂可以参照 [WARP的使用教程](../gfw/warp.md)
:::

![](/cloudflare/cloudflare-36.png)

安装完成没有桌面快捷方式，可以在开始菜单中找到，打开后再桌面右下角有小图标

![](/cloudflare/cloudflare-37.png)

现在不能直接用，需要配置账户，我们点击小齿轮

![](/cloudflare/cloudflare-38.png)

偏好设置

![](/cloudflare/cloudflare-39.png)

账户

![](/cloudflare/cloudflare-40.png)

使用 Cloudflare Zero Trust 登录

![](/cloudflare/cloudflare-41.png)

团队名输入你直接创建的账户名

![](/cloudflare/cloudflare-42.png)

输入你的邮箱账号，填写验证码

::: details 没有验证码
请确保你的填写的邮箱账户，与之前写的邮箱后缀名一致！

---

如果你是添加了信用卡的付费用户，在Zero Trust/Settings/Warp Client/Device enrollment/Policies 中添加邮箱后缀
:::

![](/cloudflare/cloudflare-43.png)

注册成功后，WARP会变为 Zero Trust 显示

![](/cloudflare/cloudflare-44.png)

打开开关，但是下面的提示仍然是不受保护

![](/cloudflare/cloudflare-45.png)

关闭后再次打开即可

![](/cloudflare/cloudflare-46.png)

访问 [谷歌](https://www.google.com/) 自动给我跳转到了 [谷歌香港](https://www.google.com.hk/)，应该是使用的台湾或香港节点

![](/cloudflare/cloudflare-47.png)

最后 [测一下速](https://www.speedtest.net/)

![](/cloudflare/cloudflare-48.png)

或者使用 国内的 [测速网](https://www.speedtest.cn/)，速度不快，延迟也高，只能说勉强能用

::: tip 说明
* 下载：900KB/s

* 上传：747KB/s

* 延迟：528ms
:::

![](/cloudflare/cloudflare-49.png)

在 Zero Trust - 团队 - 用户列表也能看到加入的用户

![](/cloudflare/cloudflare-50.png)



---

#### 优选IP

针对网络延迟高，我们可以通过优选一下IP来解决

::: tip 说明
这里的优选IP是 [优选WARP](https://gitlab.com/Misaka-blog/warp-script/) ，不是 [优选Cloudflare](https://github.com/XIU2/CloudflareSpeedTest)
:::

开始前请先断开WARP以及所有VPN

![](/cloudflare/cloudflare-44.png)

下载解压 [@Misaka-blog的优选WARP_Windows端](https://gitlab.com/Misaka-blog/warp-script/-/blob/main/files/warp-yxip/warp-yxip-win.7z)

::: details 其他优选工具
[@甬哥](https://github.com/yonggekkk/warp-yg) 的 [WIN端warp自选IP-v23.11.15.zip](https://raw.githubusercontent.com/yonggekkk/warp-yg/main/WIN%E7%AB%AFwarp%E8%87%AA%E9%80%89IP-v23.11.15.zip)
:::

点击 `warp-yxip.bat` 运行

![](/cloudflare/cloudflare-51.png)

默认ipv4，我们选 `1` 就行

![](/cloudflare/cloudflare-52.png)

批处理完成后，结果在 `result.csv` 中


![](/cloudflare/cloudflare-53.png)


鼠标右键 - 用记事本打开，就能查看了

![](/cloudflare/cloudflare-54.png)

然后将解压文件夹的 `新版WARP设置端点`，复制到Cloudflare WARP文件夹中后运行

::: details Cloudflare WARP文件夹在哪
* 默认路径：C:\Program Files\Cloudflare\Cloudflare WARP

* 桌面快捷方式查看：鼠标右键 - 属性 - 打开文件所在位置

* 没有桌面快捷方式：开始 - 最近 `Cloudflare WARP` - 右键 `更多` - 打开文件位置，鼠标右键 - 发送到 `桌面快捷方式`
:::

![](/cloudflare/cloudflare-55.png)

将筛选出来的IP带端口，填入bat命令行中，回车

![](/cloudflare/cloudflare-56.png)

重新打开WARP开关

![](/cloudflare/cloudflare-46.png)

再次 [测速](https://www.speedtest.cn/) ，会发现已经变的好多了

::: tip 说明
上传下载没什么提升，但是延迟确实有降低

日常用基本满足
:::

![](/cloudflare/cloudflare-57.png)


::::