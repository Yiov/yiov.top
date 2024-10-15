# WARP安装及使用



## 简介

WARP是cloudflare公司推出的一款基于wireguard协议的VPN服务，但比传统的VPN更稳定更安全可靠


官网：[https://1.1.1.1/](https://one.one.one.one/zh-Hans/)

![](/warp/warp.png)






## 准备工作

* [TG账号](../telegram/tg.md) 「必备」

* [Apple ID美区苹果账号](../iPhone/Apple_ID.md) 「iOS准备」






## 安装使用


:::: details iOS端 安装使用


登录 `美区 AppStore` 搜索 [1.1.1.1](https://apps.apple.com/us/app/id1423538627) 下载安装

![](/warp/ios/ios-01.png)

允许VPN配置，会自动跳设置中的VPN界面，然后跳回

![](/warp/ios/ios-02.png)

点击右上角三横 `≡ - warp - 账户`

![](/warp/ios/ios-03.png)

按键 - 更改密钥，我们去tg上免费获取

::: details Cloudflare WARP 账户区别
账户分为3种：warp、warp+、zero trust

* warp：免费版(普通账户)，无限流量，拉新可获得Warp+流量，无法隐藏源IP

* Warp+：付费订阅版，有限流量，可以隐藏源IP

* Zero Trust：Team团队版，[需自行注册Cloudflare](../website/cloudflare.md) ，无限流量，50人以内免费，可以隐藏源IP
:::

![](/warp/ios/ios-04.png)

在Tg搜：[@generatewarpplusbot](https://t.me/generatewarpplusbot)，进入机器人对话，点开始

![](/warp/ios/ios-05.png)

点 `/generate` ，提示我们需要加3个群组后方可使用

![](/warp/ios/ios-06.png)

我们分别进入3个群组

![](/warp/ios/ios-07.png)

然后点 `I have subscribed` 确认，后再次点 `/generate`

会获得一个无限流量的密钥，我们复制粘贴到 `1.1.1.1` app中，存储

::: details 密钥有效期和使用限制
* 有效期：理论上是用完为止，即便失效了可以重新获取

* 限制：每个密钥可同时在线5个设备；Tg群获取每24小时获取一次
:::

![](/warp/ios/ios-08.png)

返回看WARP已经变成了 `WARP+` ，打开开关，提示连接是私密的即可

![](/warp/ios/ios-09.png)

访问 [谷歌](https://www.google.com) 只能 [谷歌香港](https://www.google.com.hk) ，[油管](https://youtube.com) 的速度看带宽在17M，不是很快，日常够用

![](/warp/ios/ios-10.png)

::::

















:::: details Android端 安装使用

由于 [1.1.1.1官网](https://one.one.one.one/zh-Hans/) 需要跳谷歌商店，没有梯子也打不开

使用我提取的安装包 [蓝奏云：1.1.1.1_6.32.apk](https://dzp.lanzouj.com/iSvei1w3mbza)，下载安装

![](/warp/android/android-01.png)

确定启动VPN，进入WARP右上角三横 `≡`

![](/warp/android/android-02.png)

WARP - 账户 - 按键

![](/warp/android/android-03.png)

我们先去Tg获取密钥，在Tg搜：[@generatewarpplusbot](https://t.me/generatewarpplusbot)

进入机器人对话，点开始

::: details Cloudflare WARP 账户区别
账户分为3种：warp、warp+、zero trust

* warp：免费版(普通账户)，无限流量，拉新可获得Warp+流量，无法隐藏源IP

* Warp+：付费订阅版，有限流量，可以隐藏源IP

* Zero Trust：Team团队版，[需自行注册Cloudflare](../website/cloudflare.md) ，无限流量，50人以内免费，可以隐藏源IP
:::

![](/warp/android/android-04.png)

点 `/generate` ，提示我们需要加3个群组后方可使用

![](/warp/android/android-05.png)

我们分别进入3个群组

![](/warp/android/android-06.png)

然后点 `I have subscribed` 确认，后再次点 `/generate`

会获得一个无限流量的密钥

复制到WARP - 更改密钥 - 粘贴 - 确定

::: details 密钥有效期和使用限制
* 有效期：理论上是用完为止，即便失效了可以重新获取

* 限制：每个密钥可同时在线5个设备；Tg群获取每24小时获取一次
:::

![](/warp/android/android-07.png)


回到WARP主界面，就变成WARP+了，打开开关

![](/warp/android/android-08.png)

访问 [谷歌](https://www.google.com) 只能访问 [谷歌香港](https://www.google.com.hk) ，[油管](https://youtube.com) 也可以，不是很快，日常够用


![](/warp/android/android-09.png)

::::













:::: details Windows端 安装使用


在 [1.1.1.1官网](https://one.one.one.one/zh-Hans/) 下载完成点安装

![](/warp/windows/windows-01.png)

安装完成没有桌面快捷方式，可以在开始菜单中找到，打开后再桌面右下角有小图标

![](/warp/windows/windows-02.png)

现在不能直接用，需要配置账户，我们点击小齿轮

![](/warp/windows/windows-03.png)

偏好设置

![](/warp/windows/windows-04.png)

账户

![](/warp/windows/windows-05.png)

我们先去Tg获取密钥，在Tg搜：[@generatewarpplusbot](https://t.me/generatewarpplusbot)

进入机器人对话，点开始


::: details Cloudflare WARP 账户区别
账户分为3种：warp、warp+、zero trust

* warp：免费版(普通账户)，无限流量，拉新可获得Warp+流量，无法隐藏源IP

* Warp+：付费订阅版，有限流量，可以隐藏源IP

* Zero Trust：Team团队版，[需自行注册Cloudflare](../website/cloudflare.md) ，无限流量，50人以内免费，可以隐藏源IP
:::

![](/warp/windows/windows-06.png)

点 `/generate` ，提示我们需要加3个群组后方可使用

![](/warp/windows/windows-07.png)

我们分别进入3个群组

![](/warp/windows/windows-08.png)

然后点 `I have subscribed` 确认，后再次点 `/generate`

会获得一个无限流量的密钥

::: details 密钥有效期和使用限制
* 有效期：理论上是用完为止，即便失效了可以重新获取

* 限制：每个密钥可同时在线5个设备；Tg群获取每24小时获取一次
:::

![](/warp/windows/windows-09.png)

复制回到电脑WARP - 使用其他密钥 - 粘贴 - 确定

![](/warp/windows/windows-10.png)

就可以看到显示WRAP+和流量了

::: details 提示许可证密钥失败
如果默认密钥为空，且设备ID全是0，就是无网，挂个梯子再进WARP看看
:::

![](/warp/windows/windows-11.png)

打开 WARP 开关

![](/warp/windows/windows-12.png)


访问 [谷歌](https://www.google.com) 只能 [谷歌香港](https://www.google.com.hk) ，不是很快，日常够用


![](/warp/windows/windows-13.png)

::::






## 进阶使用


### 优选IP

::: tip 什么是优选IP
当代理出现网络延迟较高时，通过筛选Cloudflare CDN的延迟和速度

优选出离你最近，网络连接状态最好的CDN节点接入，降低延迟
:::

::: warning 如何优选IP
WARP是使用的wireguard协议，那么我们可以使用 [WireGuard客户端更改优选后IP](./wireguard.md) 解决
:::



### 分流

::: tip 什么是分流
简而言之，就是访问国内网页，不走代理，走直连；访问国外网页，走代理

制定一个分流规则，让它自动判断是否走代理，丝滑访问
:::

::: warning 如何分流

由于WARP代理就是全局代理，访问国内网页延迟高。可以打开谷歌，却打不开百度

* 安卓/电脑端：第三方客户端 [NekoBox](./NekoBox.md) 实现

* iOS端：没有

:::




## 常见问题


::: details 密钥填不上去，提示无效

是否出现有这种情况：

* 直接退出了WARP+密钥账号

* 应用的设备ID都是0

解决：挂个梯子进应用，激活新的普通密钥即可

:::