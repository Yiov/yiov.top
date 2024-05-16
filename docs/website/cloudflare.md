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

官网：https://www.cloudflare.com/

![](/cloudflare/cloudflare-01.png)



## 注册


在官网注册账号就行

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
:::



#### 准备域名

需要自己先准备 [一个域名 或 自定二级域名](../website/githubpage/index.md#_3-访问及自定义域名) ，Github Pages不能修改DNS


---

#### 添加解析

我是腾讯云买的域名，进控制台，添加记录

* 主机记录：`@` (或 自定义二级域名)

* 记录类型：`CNAME`

* 记录值：`yiov.github.io` (根据自己的来)

::: warning 注意
如果你是加速自己的服务器，不需要填额外添加
:::

![](/cloudflare/cdn/cdn-01.png)



然后在仓库设置 - pages - 自定义域名 填入 我们购买的域名，保存

::: tip 说明
等待解析完成，用域名可以访问即可
:::

![](/cloudflare/cdn/cdn-02.png)


---



#### 添加站点

回到 cloudflare 添加站点

::: tip 说明
不需要填https，直接填域名
:::

![](/cloudflare/cdn/cdn-03.png)


拉倒最下面，选择 Free 免费的方案，继续

![](/cloudflare/cdn/cdn-04.png)



它会自动扫描我们原本的DNS

![](/cloudflare/cdn/cdn-05.png)


我只解析了一个`@`，竟然没扫描过来，那就手动添加一下 `CNAME` ，和DNSPod那里一样的


![](/cloudflare/cdn/cdn-06.png)

添加好后点 继续

::: tip 建议
这里最好将小云朵代理状态关掉，否则网站不可访问

代理走的是美国节点
:::

![](/cloudflare/cdn/cdn-07.png)



----


#### 修改DNS


最后要求我们修改DNS服务器


![](/cloudflare/cdn/cdn-08.png)


以腾讯云为例进入域名后台，勾选域名 - 更多操作 - 修改DNS服务器


![](/cloudflare/cdn/cdn-09.png)



自定义DNS，将cloudflare提供的2个DNS填上去


![](/cloudflare/cdn/cdn-10.png)


完成后，会显示其他，且可以进域名里看到变更了



![](/cloudflare/cdn/cdn-11.png)


![](/cloudflare/cdn/cdn-12.png)


点击检查服务器即可，等10分钟左右就会激活成功了


![](/cloudflare/cdn/cdn-13.png)


![](/cloudflare/cdn/cdn-14.png)


这里的快速入门，我也是一顿骚操作默认点完了，最后网站不能访问

> 提示：too many HTTP

需要将 `SSL/TLS - 边缘证书 - 始终使用HTTPS` 关闭


![](/cloudflare/cdn/cdn-15.png)


![](/cloudflare/cdn/cdn-16.png)


还是无法访问，最后发现是小云朵没关

DNS - 记录 - 将小云朵关掉，仅DNS即可


![](/cloudflare/cdn/cdn-17.png)


刷新访问就可以了，我们用 [站长工具](https://ping.chinaz.com/) ping一下前后

::: tip 说明
事实证明免费的也就这样，还是付费的好用
:::

![](/cloudflare/cdn/cdn-18.png)


::::





:::: details WARP科学上网 - Zero Trust


WARP是cloudflare公司推出的一款基于wireguard协议的VPN服务，但比传统的VPN更稳定更安全可靠


#### 创建团队

点击 `Zero Trust` 

::: details Cloudflare WARP 账户区别
账户分为3种：warp、warp+、zero trust

* warp：免费版(普通账户)，无限流量，拉新可获得Warp+流量，无法隐藏源IP

* Warp+：付费订阅版，有限流量，可以隐藏源IP

* Zero Trust：Team团队版，[需自行注册Cloudflare](../website/cloudflare.md) ，无限流量，50人以内免费，可以隐藏源IP
:::

![](/cloudflare/cloudflare-01.png)


输入一个团队名，自己取就行

![](/cloudflare/warp/warp-02.png)


然后选择免费 `Free` 的方案

![](/cloudflare/warp/warp-03.png)


点 `Proceed to payment` 继续支付

![](/cloudflare/warp/warp-04.png)

提示要添加信用卡，否则无法跳过，但是有办法

![](/cloudflare/warp/warp-05.png)

我们直接关闭网页！重新打开 [仪表盘主页](https://dash.cloudflare.com/) 就可以跳过了

重新进去后再次进入 `Zero Trust`

![](/cloudflare/warp/warp-06.png)

点击 `My Team` - `Devices` ，然而我的团队里没有添加设备的选项

![](/cloudflare/warp/warp-07.png)


我们可以通过 `网页后退` 或者 `点其他地方` 再返回，就能恢复

我就随便点了一下 `Lists`

![](/cloudflare/warp/warp-08.png)


返回 `Devices` ，就可以正常添加了 `Connect a device`

![](/cloudflare/warp/warp-09.png)

这里填写邮箱后缀！邮箱后缀名！不是填完整的邮箱

::: warning 重要
由于我们是跳过了支付页，就无法进入后台，新增其他邮箱后缀了

本次填写后就无法修改，请确定要使用的邮箱类型

* 谷歌邮箱后缀：`@gmail.com`，必须用谷歌邮箱注册方可加入团队

* QQ邮箱后缀：`@qq.com`，必须用QQ邮箱注册方可加入团队

* ... (以此类推)

注：非当前填写的邮箱类型，注册将无法接收到验证码！
:::

![](/cloudflare/warp/warp-10.png)

然后要选择一个客户端，我就选 `Windows` 吧，必须要点一下！！！

不需要下载，等会我们统一使用其他客户端

![](/cloudflare/warp/warp-11.png)

接下来会跳出你的团队名，点一个 `copy`，必须要点一下！！！

::: details 团队名找回或修改
Zero Trust - Settings - Custom Pages - Team domain
:::

![](/cloudflare/warp/warp-12.png)

最后下载根证书，点一下就行了，不用其他操作了

![](/cloudflare/warp/warp-13.png)



---


#### 1.1.1.1

不管刚刚跳转的客户端是什么，都推荐使用 [1.1.1.1](https://one.one.one.one/zh-Hans/)

::: tip 为什么使用1.1.1.1
它本是Cloudflared的DNS服务，通过全球的CDN提高访问网站时的速度

而后官方集成了WARP，推出了这款应用程序
:::

官网：[https://1.1.1.1/](https://one.one.one.one/zh-Hans/)，网站打开需要 [科学上网](../gfw/proxy.md)

![](/cloudflare/warp/warp-14.png)

下载完成点安装

::: tip 关于手机端的使用
使用方式基本一致，是在搞不懂可以参照 [WARP的使用教程](../gfw/warp.md)
:::

![](/cloudflare/warp/warp-15.png)

安装完成没有桌面快捷方式，可以在开始菜单中找到，打开后再桌面右下角有小图标

![](/cloudflare/warp/warp-16.png)

现在不能直接用，需要配置账户，我们点击小齿轮

![](/cloudflare/warp/warp-17.png)

偏好设置

![](/cloudflare/warp/warp-18.png)

账户

![](/cloudflare/warp/warp-19.png)

使用 Cloudflare Zero Trust 登录

![](/cloudflare/warp/warp-20.png)

团队名输入你直接创建的账户名

![](/cloudflare/warp/warp-21.png)

输入你的邮箱账号，填写验证码

::: details 没有验证码
请确保你的填写的邮箱账户，与之前写的邮箱后缀名一致！

---

如果你是添加了信用卡的付费用户，在Zero Trust/Settings/Warp Client/Device enrollment/Policies 中添加邮箱后缀
:::

![](/cloudflare/warp/warp-21.png)

注册成功后，WARP会变为 Zero Trust 显示

![](/cloudflare/warp/warp-23.png)

打开开关，但是下面的提示仍然是不受保护

![](/cloudflare/warp/warp-24.png)

关闭后再次打开即可

![](/cloudflare/warp/warp-25.png)

访问 [谷歌](https://www.google.com/) 自动给我跳转到了 [谷歌香港](https://www.google.com.hk/)，应该是使用的台湾或香港节点

![](/cloudflare/warp/warp-26.png)

最后 [测一下速](https://www.speedtest.net/)

![](/cloudflare/warp/warp-27.png)

或者使用 国内的 [测速网](https://www.speedtest.cn/)，速度不快，延迟也高，只能说勉强能用

::: tip 说明
* 下载：900KB/s

* 上传：747KB/s

* 延迟：528ms
:::

![](/cloudflare/warp/warp-28.png)

在 Zero Trust - 团队 - 用户列表也能看到加入的用户

![](/cloudflare/warp/warp-29.png)



---


#### 优选IP

针对网络延迟高，我们可以通过优选一下IP来解决

::: tip 说明
这里的优选IP是 [优选WARP](https://gitlab.com/Misaka-blog/warp-script/) ，不是 [优选Cloudflare](https://github.com/XIU2/CloudflareSpeedTest)
:::

开始前请先断开WARP以及所有VPN

![](/cloudflare/warp/warp-23.png)

下载解压 [@甬哥](https://github.com/yonggekkk/warp-yg) 的 [WIN端warp自选IP-v23.11.15.zip](https://raw.githubusercontent.com/yonggekkk/warp-yg/main/WIN%E7%AB%AFwarp%E8%87%AA%E9%80%89IP-v23.11.15.zip)

解压后运行 `手动方式1：生成优选IP端口结果文件.bat`


![](/cloudflare/warp/warp-30.png)

这里我们输入 `1` ，回车

![](/cloudflare/warp/warp-31.png)

优选的结果自动生成了 `result.csv` 文件，按任意键退出

![](/cloudflare/warp/warp-32.png)

鼠标对着 `result.csv` 右键，用 `记事本打开`

![](/cloudflare/warp/warp-33.png)

![](/cloudflare/warp/warp-34.png)


点击运行 `手动方式2：将IP端口复制到这里.bat`

将筛选出来的IP和端口，填入bat命令行中，回车

::: details 没有效果？

将 `手动方式2：将IP端口复制到这里.bat` 复制到Cloudflare WARP文件夹中后运行

默认路径：C:\Program Files\Cloudflare\Cloudflare WARP

或者使用 `自动方式：官方warp自动设置端点.bat`

---

其他：

* 桌面快捷方式查看：鼠标右键 - 属性 - 打开文件所在位置

* 没有桌面快捷方式：开始 - 最近 `Cloudflare WARP` - 右键 `更多` - 打开文件位置，鼠标右键 - 发送到 `桌面快捷方式`

:::

![](/cloudflare/warp/warp-35.png)


重新打开WARP开关

![](/cloudflare/warp/warp-25.png)

再次 [测速](https://www.speedtest.cn/) ，会发现已经变的好多了

::: tip 说明
上传下载没什么提升，但是延迟确实有降低

日常用基本满足
:::

![](/cloudflare/warp/warp-36.png)

::::











## 搭建节点


:::: details 搭建vless节点


进入 [Cloudfare仪表盘](https://dash.cloudflare.com/) 点击 `Workers 和 Pages` - `创建Worker`

::: details Workers 和 Pages 有什么区别
* Workers：仅修改 `workws.js` 代码即可，可选择是否开启tls

* Pages：需要将 `_workws.js` 文件放入文件夹中上传，默认开启tls，不可关闭
:::

![](/cloudflare/vless/vless-01.png)

名称随便，我这里就写成vless，点 `部署`

![](/cloudflare/vless/vless-02.png)

成功后，我们的链接也有了，先点 `编辑`

![](/cloudflare/vless/vless-03.png)

这里的代码先 `全部删掉` ，去找搭建脚本替换上去

![](/cloudflare/vless/vless-04.png)

这里用 [@甬哥的脚本：Cloudflare_vless_trojan](https://github.com/yonggekkk/Cloudflare_vless_trojan) 演示，进入文件夹 `vless_workers_pages`

::: details 其他大佬脚本
主要是甬哥的比较适合小白，而且更新比较频繁

* [@3Kmfi6HP](https://github.com/3Kmfi6HP/EDtunnel)

* [@zizifn](https://github.com/zizifn/edgetunnel)
:::

![](/cloudflare/vless/vless-05.png)

点击 `_worker.js`

![](/cloudflare/vless/vless-06.png)

复制全部代码

![](/cloudflare/vless/vless-07.png)

粘贴到 Worker.js 中，这里的 `userID` 需要我们自己换一下

::: tip 说明
使用 [UUID Generator](https://www.uuidgenerator.net/) 或 [1024tools](https://1024tools.com/uuid) 都可以，粘贴替换
:::

```js:no-line-numbers
let userID = '77a571fb-4fd2-4b37-8596-1b7d9728bb5c';
```

![](/cloudflare/vless/vless-08.png)

![](/cloudflare/vless/vless-09.png)

下一个参数是 `proxyIPs` ，默认已经填好了，如果失效可自行更换

::: tip 说明
此参数不填，会导致无法访问CF和ChatGPT，但谷歌/油管等不影响
:::

::: details @3Kmfi6HP 大佬提供的其他proxyIP
```md
cdn-all.xn--b6gac.eu.org

cdn.xn--b6gac.eu.org

cdn-b100.xn--b6gac.eu.org

edgetunnel.anycast.eu.org

cdn.anycast.eu.org
```
:::


```js:no-line-numbers
const proxyIPs = ["cdn.xn--b6gac.eu.org"]; //workers.cloudflare.cyou bestproxy.onecf.eu.org cdn-all.xn--b6gac.eu.org cdn.xn--b6gac.eu.org
```

![](/cloudflare/vless/vless-10.png)



最后一个参数 `cn_hostnames` ，伪装域名，建议填一下，随便伪装一个网站皆可

```js:no-line-numbers
const cn_hostnames = [''];
```

我就直接填百度吧 `www.baidu.com`

::: details 伪装报错：Redirects to ***.com are not allowed.
检查你的网址，比如 www.baidu.com，你少了3个w，写成了 baidu.com 是不行的
:::

![](/cloudflare/vless/vless-11.png)

直接保存并部署

![](/cloudflare/vless/vless-12.png)

然后打开部署好的页面

![](/cloudflare/vless/vless-13.png)

这就是我们伪装的页面，和百度一模一样

![](/cloudflare/vless/vless-14.png)

我们在网址后加 `/你替换的uerID` 回车进入节点页面

::: tip 比如
网址：vless.你的用户名.workers.dev

访问：vless.你的用户名.workers.dev/userID
:::


![](/cloudflare/vless/vless-15.png)

节点有两个，一个是没有tls，一个是有tls

| 类型 | HTTP | HTTPS | 
| :-: | :-: | :-: |
| 节点 | vless+ws| vless+ws+tls | 
| 端口 | 80、8080、8880、2052、2082、2086、2095 | 443、8843、2053、2083、2087、2096
| TLS | 关闭 | 开启 | 


使用任意一款，支持Vless协议的 [科学上网工具](../gfw/proxy.md) 使用，比如 V2rayN

复制第一个没有tls， `Vless://` 开头的那一长串，从剪切板导入

::: details 有tls怎么使用
在当前Worker中，设置 - 触发器 - 添加自定义域，填入你已解析在Cloudfare上的域名

然后重新部署，复制有tls且是自己域名的 `Vless://` 节点使用
:::

![](/cloudflare/vless/vless-16.png)

![](/cloudflare/vless/vless-17.png)

然后右键测速，真连接延迟，有数字就可以

::: details 延迟显示 `-1ms`
检查配置是否正确，或更换proxyIP后尝试
:::

![](/cloudflare/vless/vless-18.png)

现在还是连不了，双击节点打开配置，右上角切换为Xray核心

![](/cloudflare/vless/vless-19.png)

再次尝试访问 [谷歌](https://www.google.com/) 看看

![](/cloudflare/vless/vless-20.png)

::::










::: details 搭建节点补充：优选域名（windows端）

在节点上服务器地址，这个网址是什么

![](/cloudflare/domain/domain-win-01.png)

我们访问这个网址 [VISA](www.visa.com.sg)，点击小锁查看证书，发现是 Cloufare 颁发的

也就是利用了 Cloudfare 的CDN特性，来降低延迟

![](/cloudflare/domain/domain-win-02.png)

这里用 [@甬哥的工具：CDN优选域名V23.8.18(电脑win64).exe](https://github.com/yonggekkk/Cloudflare_vless_trojan/blob/main/CDN%E4%BC%98%E9%80%89%E5%9F%9F%E5%90%8DV23.8.18(%E7%94%B5%E8%84%91win64).exe) 来筛选最优域名

![](/cloudflare/domain/domain-win-03.png)


开始前，请先断开所有代理！！！否则不准！！！

双击打开运行，耐心等待一会

![](/cloudflare/domain/domain-win-04.png)

跑完后会自动生成一个 `CDNym.txt` 文件

![](/cloudflare/domain/domain-win-05.png)

打开文件，复制延迟最低的网址

![](/cloudflare/domain/domain-win-06.png)

粘贴到代理软件，开启代理，测速真连接延迟明显降低

![](/cloudflare/domain/domain-win-07.png)

通过访问 [ip.gs](https://ip.sb/) 、[ipleak.net](https://ipleak.net/)、[BrowserLeaks](https://browserleaks.com/dns)，IP是在一个范围内跳动，不是永久固定的

![](/cloudflare/domain/domain-win-08.png)

:::











:::: details 搭建节点补充：优选域名（iOS端）

iOS端可以使用 [小火箭](../gfw/shadowrocket.md) 或者 [Karing](../gfw/Karing.md)

我用小火箭演示，复制节点打开小火箭添加

![](/cloudflare/domain/domain-ios-01.png)

测一下速，有延迟显示即可，访问 [谷歌](https://www.google.com/) 看看

![](/cloudflare/domain/domain-ios-02.png)

国区AppStore下载 [iSH Shell](https://apps.apple.com/cn/app/id1436902243) 并安装

![](/cloudflare/domain/domain-ios-03.png)

安装 `openssh` `curl` `bash` 命令


```sh
apk add openssh curl bash
```

::: details 卡住不动了？
点击 `∧` + `z` 键可退出，挂上梯子翻墙了再安装即可

也可以直接更换镜像

```sh
sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories
```
:::

![](/cloudflare/domain/domain-ios-04.png)

安装完成后，使用 [@甬哥的脚本：优选CDN域名](https://github.com/yonggekkk/Cloudflare_vless_trojan/) ，命令如下

耐心等待一会，由于苹果的特殊性，排序是乱的，需要我们自行找到延迟最低的域名网址

![](/cloudflare/domain/domain-ios-05.png)

点击节点旁的 `i` 进入编辑，替换地址出的网址，再次测速延迟明显降低

![](/cloudflare/domain/domain-ios-06.png)

通过访问 [ip.gs](https://ip.sb/) 、[ipleak.net](https://ipleak.net/)、[BrowserLeaks](https://browserleaks.com/dns)，IP是在一个范围内跳动，不是永久固定的

![](/cloudflare/domain/domain-ios-07.png)

::::









:::: details 搭建节点补充：优选域名（Android端）

安卓端可以使用 [NekoBox](../gfw/NekoBox.md) 或 [V2ray](../gfw/v2ray.md)

我用 NekoBox 演示，复制搭建好的节点，从剪切板导入

![](/cloudflare/domain/domain-and-01.png)

测一下速，连接测试 - URL Test

![](/cloudflare/domain/domain-and-02.png)


下载 [Termux](https://github.com/termux/termux-app/releases) 并安装 

::: tip 下载哪一个
作者的文件名太长了，电脑端能看清

按顺序分别适用：手机64位、手机32位、手机64/32通用、平板32位、平板64位
:::

![](/cloudflare/domain/domain-and-03.png)


首次使用需要更新一下，后面使用就不用了

有提示[Y/n]，输入 `y`，提示 `Defult` 直接回车

```sh
pkg update && pkg install curl
```

::: details 卡住不动了？
点击 `∧` + `z` 键可退出，挂上梯子翻墙了再安装即可

也可以直接更换镜像

```sh
sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories
```
:::


![](/cloudflare/domain/domain-and-04.png)


安装完成后，使用 [@甬哥的脚本：优选CDN域名](https://github.com/yonggekkk/Cloudflare_vless_trojan/) ，命令如下

耐心等待一会，在结果中复制延迟最低的域名网址

```sh
curl -sSL https://gitlab.com/rwkgyg/CFwarp/raw/main/point/CFcdnym.sh -o CFcdnym.sh && chmod +x CFcdnym.sh && bash CFcdnym.sh
```


![](/cloudflare/domain/domain-and-05.png)

打开 NekoBox 点节点编辑 - 服务器，替换成优选的域名

![](/cloudflare/domain/domain-and-06.png)

再次测速发现，节点延迟已经降低了

![](/cloudflare/domain/domain-and-07.png)

通过访问 [ip.gs](https://ip.sb/) 、[ipleak.net](https://ipleak.net/)、[BrowserLeaks](https://browserleaks.com/dns)，IP是在一个范围内跳动，不是永久固定的

![](/cloudflare/domain/domain-and-08.png)

::::



## 特别鸣谢

* [ip.gs](https://ip.sb/)

* [DNS Leak Test - BrowserLeaks](https://browserleaks.com/dns)

* [ipleak.net](https://ipleak.net/)


