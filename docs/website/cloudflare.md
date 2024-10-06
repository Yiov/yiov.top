# Cloudflare注册及使用





## 简介

美国比较有名的 CDN 加速服务商，提供免费和付费的加速和网站保护服务

我们常说的 `套个CF` ，其实就是说的cloudflare

::: tip 什么是CDN
CDN 的全称是 Content Delivery Network，即内容分发网络

* 比方：北京到广东的快递包裹，时长要3天；但如果北京在广东有货物仓储，直接广东发货，时长就仅需1天

* 作用：CDN就是这个作用，将我们的网站临时存储在服务器中，谁访问就分配距离他最近的节点连接，从而大大加快网页访问速度

另：常见的CDN服务商还有 [又拍云](https://www.upyun.com/)、[七牛云](https://www.qiniu.com/)、[腾讯云COS](https://cloud.tencent.com/act/pro/cos)、[阿里云OSS](https://www.aliyun.com/product/oss)等
:::

官网：https://www.cloudflare.com/zh-cn/

![](/cloudflare/cloudflare-01.png)






## 注册


在 [官网注册](https://dash.cloudflare.com/sign-up) 账号就行

::: warning 说明
虽然有中国站点，但访问还是要 [科学上网](../gfw/proxy.md) ，否则无法跳转
:::

![](/cloudflare/cloudflare-02.png)

![](/cloudflare/cloudflare-03.png)











## 使用

Cloudflare还可以创建 [cloudflare page](https://pages.cloudflare.com/) ，但体验上稍微差点，这里先不演示







:::: details 域名解析



先自己 [购买一个域名](./domain/index.md)  或者 使用 [ClouDNS的免费域名](./domain/cloudns.md)

以 [腾讯云](https://console.cloud.tencent.com/) 演示，进入控制台 - 域名注册 - 我的域名


![](/cloudflare/domain/domain-01.png)

在 Cloudflare 主页 - 添加站点

![](/cloudflare/domain/domain-02.png)

输入你的域名，继续

![](/cloudflare/domain/domain-03.png)

方案这里下拉，选 Free 免费的，确认计划

![](/cloudflare/domain/domain-04.png)

开始扫描DNS记录

![](/cloudflare/domain/domain-05.png)

我只买了域名，没买服务器，就没解析过，所以没扫描到，点继续

![](/cloudflare/domain/domain-06.png)

这里需要我们更改成 Cloudflare 的DNS服务器

![](/cloudflare/domain/domain-07.png)

打开域名界面，勾选域名，修改DNS服务器

![](/cloudflare/domain/domain-08.png)

自定义DNS，分别复制 Cloudflare 提供的两个DNS，下一步


![](/cloudflare/domain/domain-09.png)

确认提交

::: details 域名页面显示：DNS 地址待修改
因为它推荐你用默认的，我们已经使用Cloudflare了，不用管
:::

![](/cloudflare/domain/domain-10.png)

等待邮箱提示激活

![](/cloudflare/domain/domain-11.png)

![](/cloudflare/domain/domain-12.png)

成功后，域名前会显示对勾

![](/cloudflare/domain/domain-13.png)


::::





:::: details CDN加速：网站访问

适用于服务器在国外，给网站套了cf，访问会有明显提升

::: details 服务器在国内可以用吗
可以，但没必要！国内访问已经很快了，没必要通过cloudflare
:::

在 Cloudflare 主页点击你的域名

![](/cloudflare/cdn/cdn-01.png)

在DNS栏，添加记录

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



![](/cloudflare/cdn/cdn-02.png)

::::








::: details CDN加速：Github Pages 加速

之前写过，但访问效果平平，还不如直接用 [Vercel](./pages/vercel.md)

:::










:::: details WARP科学上网 - Zero Trust


WARP是cloudflare公司推出的一款基于wireguard协议的VPN服务，但比传统的VPN更稳定更安全可靠


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





:::: details 搭建Github镜像站


进入 [Cloudfare仪表盘](https://dash.cloudflare.com/) 点击 `Workers 和 Pages` - `创建Worker`


![](/cloudflare/github/github-01.png)

名称随便，我这里就写成github，点 `部署`

![](/cloudflare/github/github-02.png)

成功后，我们的链接也有了，先点 `编辑`

![](/cloudflare/github/github-03.png)


这里的代码先 `全部删掉` ，复制下面代码粘贴进去，部署

::: details 点我查看详细代码
```js
// 你要镜像的网站.
const upstream = 'github.com'

// 镜像网站的目录，比如你想镜像某个网站的二级目录则填写二级目录的目录名，镜像 google 用不到，默认即可.
const upstream_path = '/'

// 镜像站是否有手机访问专用网址，没有则填一样的.
const upstream_mobile = 'github.com'

// 屏蔽国家和地区.
const blocked_region = ['KP', 'SY', 'PK', 'CU']

// 屏蔽 IP 地址.
const blocked_ip_address = ['0.0.0.0', '127.0.0.1']

// 镜像站是否开启 HTTPS.
const https = true

// 文本替换.
const replace_dict = {'$upstream': '$custom_domain', '//github.com': ''}

// 以下保持默认，不要动
addEventListener('fetch', event => {
  event.respondWith(fetchAndApply(event.request))
})

async function fetchAndApply(request) {
  const region = request.headers.get('cf-ipcountry').toUpperCase()
  const ip_address = request.headers.get('cf-connecting-ip')
  const user_agent = request.headers.get('user-agent')

  let response = null
  let url = new URL(request.url)
  let url_hostname = url.hostname

  if (https == true) {
    url.protocol = 'https:'
  } else {
    url.protocol = 'http:'
  }

  if (await device_status(user_agent)) {
    var upstream_domain = upstream
  } else {
    var upstream_domain = upstream_mobile
  }

  url.host = upstream_domain
  if (url.pathname == '/') {
    url.pathname = upstream_path
  } else {
    url.pathname = upstream_path + url.pathname
  }

  if (blocked_region.includes(region)) {
    response = new Response('Access denied: WorkersProxy is not available in your region yet.', {
      status: 403
    })
  } else if (blocked_ip_address.includes(ip_address)) {
    response = new Response('Access denied: Your IP address is blocked by WorkersProxy.', {
      status: 403
    })
  } else {
    let method = request.method
    let request_headers = request.headers
    let new_request_headers = new Headers(request_headers)

    new_request_headers.set('Host', url.hostname)
    new_request_headers.set('Referer', url.hostname)

    let original_response = await fetch(url.href, {
            method: method,
            headers: new_request_headers
    })

    let original_response_clone = original_response.clone()
    let original_text = null
    let response_headers = original_response.headers
    let new_response_headers = new Headers(response_headers)
    let status = original_response.status

    new_response_headers.set('access-control-allow-origin', '*')
    new_response_headers.set('access-control-allow-credentials', true)
    new_response_headers.delete('content-security-policy')
    new_response_headers.delete('content-security-policy-report-only')
    new_response_headers.delete('clear-site-data')
    
    const content_type = new_response_headers.get('content-type')
    if (content_type.includes('text/html') && content_type.includes('UTF-8')) {
      original_text = await replace_response_text(original_response_clone, upstream_domain, url_hostname)
    } else {
      original_text = original_response_clone.body
    }

    response = new Response(original_text, {
      status,
      headers: new_response_headers
    })
  }
  return response
}

async function replace_response_text(response, upstream_domain, host_name) {
  let text = await response.text()

  var i, j
  for (i in replace_dict) {
    j = replace_dict[i]

    if (i == '$upstream') {
      i = upstream_domain
    } else if (i == '$custom_domain') {
      i = host_name
    }

    if (j == '$upstream') {
      j = upstream_domain
    } else if (j == '$custom_domain') {
      j = host_name
    }

    let re = new RegExp(i, 'g')
    text = text.replace(re, j)
  }
  return text
}

async function device_status(user_agent_info) {
  var agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]
  var flag = true
  for (var v = 0; v < agents.length; v++) {
    if (user_agent_info.indexOf(agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
```
:::

![](/cloudflare/github/github-04.png)

点连接查看，是否成功

![](/cloudflare/github/github-05.png)

![](/cloudflare/github/github-06.png)

由于works域名国内无法访问，我们可以添加一个自己的域名

设置 - 触发器 - 添加自定义域

![](/cloudflare/github/github-07.png)


注意：你的 [域名必须已经解析在Cloudflare](#使用) 上

![](/cloudflare/github/github-08.png)

再次使用绑定的域名访问即可

::: tip 关于缺点
无法登录账号 和 进入`raw.githubusercontent.com` 页面

其实就是利用了一个反代功能，理论上可以镜像所有网站
:::

![](/cloudflare/github/github-09.png)


::::












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

```js
let userID = '77a571fb-4fd2-4b37-8596-1b7d9728bb5c';
```

![](/cloudflare/vless/vless-08.png)

![](/cloudflare/vless/vless-09.png)

下一个参数是 `proxyIPs` ，默认已经填好了，如果失效可自行更换

::: tip 说明
此参数不填，会导致无法访问CF和ChatGPT，但谷歌/油管等不影响
:::

::: details 还有其他proxyIP吗

[@3Kmfi6HP](https://github.com/3Kmfi6HP/EDtunnel) 大佬提供的：

```md
cdn-all.xn--b6gac.eu.org

cdn.xn--b6gac.eu.org

cdn-b100.xn--b6gac.eu.org

edgetunnel.anycast.eu.org

cdn.anycast.eu.org
```

---

说明：还可以填入反代IP，需要自行优选

:::



```js
const proxyIPs = ["cdn.xn--b6gac.eu.org"]; //workers.cloudflare.cyou bestproxy.onecf.eu.org cdn-all.xn--b6gac.eu.org cdn.xn--b6gac.eu.org
```

![](/cloudflare/vless/vless-10.png)



最后一个参数 `cn_hostnames` ，伪装域名，建议填一下，随便伪装一个网站皆可

```js
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
| 端口 | 80、8080、8880、2052、2082、2086、2095 | 443、8843、2053、2083、2087、2096 |
| TLS | 关闭 | 开启 |
| 域名 | 非必须提供 | 必须提供 |


使用任意一款，支持Vless协议的 [科学上网工具](../gfw/proxy.md) 使用，比如 V2rayN

复制第一个没有tls， `Vless://` 开头的那一长串，从剪切板导入

::: details 有 tls 怎么使用
在当前Worker中，设置 - 触发器 - 添加自定义域，填入你已解析在Cloudfare上的域名

如果使用的是 [ClouDNS的免费域名](./domain/cloudns.md)，需自行解析三级域名并添加证书

![](/cloudflare/vless/vless-16.png)
:::

![](/cloudflare/vless/vless-17.png)

![](/cloudflare/vless/vless-18.png)

然后右键测速，真连接延迟，有数字就可以

::: details 延迟显示 `-1ms`
检查配置是否正确，或更换proxyIP后尝试
:::

![](/cloudflare/vless/vless-19.png)

现在还是连不了，双击节点打开配置，右上角切换为Xray核心

![](/cloudflare/vless/vless-20.png)

再次尝试访问 [谷歌](https://www.google.com/) 看看

::: tip 说明
由于节点延迟感人，强烈建议 [优选域名](#优选域名) 或者 [优选IP](#优选ip)！
:::

![](/cloudflare/vless/vless-21.png)

::::













## 优选域名

主要是对大型网站的服务器筛选，非常稳，但是速度不快

只能填在科学上网工具的 `服务器地址` 中





::: details 搭建节点补充：优选域名（windows端）

在节点上服务器地址，这个网址是什么

![](/cloudflare/yxym/win-01.png)

我们访问这个网址 [VISA](https://www.visa.com.sg/)，点击小锁查看证书，发现是 Cloufare 颁发的

也就是利用了 Cloudfare 的CDN特性，来降低延迟

![](/cloudflare/yxym/win-02.png)

这里用 [@甬哥的工具：CDN优选域名V23.8.18(电脑win64).exe](https://github.com/yonggekkk/Cloudflare_vless_trojan/blob/main/CDN%E4%BC%98%E9%80%89%E5%9F%9F%E5%90%8DV23.8.18(%E7%94%B5%E8%84%91win64).exe) 来筛选最优域名

![](/cloudflare/yxym/win-03.png)


开始前，请先断开所有代理！！！否则不准！！！

双击打开运行，耐心等待一会

![](/cloudflare/yxym/win-04.png)

跑完后会自动生成一个 `CDNym.txt` 文件

![](/cloudflare/yxym/win-05.png)

打开文件，复制延迟最低的网址

![](/cloudflare/yxym/win-06.png)

粘贴到代理软件，开启代理，测速真连接延迟明显降低

![](/cloudflare/yxym/win-07.png)

开启代理，通过访问 [ip.gs](https://ip.sb/) 、[ipleak.net](https://ipleak.net/)、[BrowserLeaks](https://browserleaks.com/dns)，IP是在一个范围内跳动，不是永久固定的

![](/cloudflare/yxym/win-08.png)

:::











:::: details 搭建节点补充：优选域名（iOS端）

iOS端可以使用 [小火箭](../gfw/shadowrocket.md) 或者 [Karing](../gfw/Karing.md)

我用小火箭演示，复制节点打开小火箭添加

![](/cloudflare/yxym/ios-01.png)

测一下速，有延迟显示即可，访问 [谷歌](https://www.google.com/) 看看

![](/cloudflare/yxym/ios-02.png)

国区AppStore下载 [iSH Shell](https://apps.apple.com/cn/app/id1436902243) 并安装

![](/cloudflare/yxym/ios-03.png)

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

![](/cloudflare/yxym/ios-04.png)

安装完成后，使用 [@甬哥的脚本：优选CDN域名](https://github.com/yonggekkk/Cloudflare_vless_trojan/) ，命令如下

```sh
curl -sSL https://gitlab.com/rwkgyg/CFwarp/raw/main/point/CFcdnym.sh -o CFcdnym.sh && chmod +x CFcdnym.sh && bash CFcdnym.sh
```

耐心等待一会，由于苹果的特殊性，排序是乱的，需要我们自行找到延迟最低的域名网址

![](/cloudflare/yxym/ios-05.png)

点击节点旁的 `i` 进入编辑，替换地址出的网址，再次测速延迟明显降低

![](/cloudflare/yxym/ios-06.png)

开启代理，通过访问 [ip.gs](https://ip.sb/) 、[ipleak.net](https://ipleak.net/)、[BrowserLeaks](https://browserleaks.com/dns)，IP是在一个范围内跳动，不是永久固定的

![](/cloudflare/yxym/ios-07.png)

::::









:::: details 搭建节点补充：优选域名（Android端）

安卓端可以使用 [NekoBox](../gfw/NekoBox.md) 或 [V2ray](../gfw/v2ray.md)

我用 NekoBox 演示，复制搭建好的节点，从剪切板导入

![](/cloudflare/yxym/and-01.png)

测一下速，连接测试 - URL Test

![](/cloudflare/yxym/and-02.png)


下载 [Termux](https://github.com/termux/termux-app/releases) 并安装 

::: tip 下载哪一个
作者的文件名太长了，电脑端能看清

按顺序分别适用：手机64位、手机32位、手机64/32通用、平板32位、平板64位
:::

![](/cloudflare/yxym/and-03.png)


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


![](/cloudflare/yxym/and-04.png)


安装完成后，使用 [@甬哥的脚本：优选CDN域名](https://github.com/yonggekkk/Cloudflare_vless_trojan/) ，命令如下

耐心等待一会，在结果中复制延迟最低的域名网址

```sh
curl -sSL https://gitlab.com/rwkgyg/CFwarp/raw/main/point/CFcdnym.sh -o CFcdnym.sh && chmod +x CFcdnym.sh && bash CFcdnym.sh
```


![](/cloudflare/yxym/and-05.png)

打开 NekoBox 点节点编辑 - 服务器，替换成优选的域名

![](/cloudflare/yxym/and-06.png)

再次测速发现，节点延迟已经降低了

![](/cloudflare/yxym/and-07.png)

开启代理，通过访问 [ip.gs](https://ip.sb/) 、[ipleak.net](https://ipleak.net/)、[BrowserLeaks](https://browserleaks.com/dns)，IP是在一个范围内跳动，不是永久固定的

![](/cloudflare/yxym/and-08.png)

::::








## 优选IP

主要是对所有cf的服务器筛选，速度快，但是不一定稳

既可以填在科学上网工具的 `服务器地址` 中，也可以填在 work.js 的 `proxyIPs` 中


:::: details 搭建节点补充：优选官方IP（windows端）

下载 甬哥的 [CF优选官方IP(电脑版).zip](https://github.com/yonggekkk/Cloudflare_vless_trojan/blob/main/CF%E4%BC%98%E9%80%89%E5%AE%98%E6%96%B9IP(%E7%94%B5%E8%84%91%E7%89%88).zip) ，解压后双击打开 `CF官方IP优先工具(电脑版).exe`

::: tip 说明
不太推荐 [优选反代IP](https://github.com/yonggekkk/Cloudflare_vless_trojan/blob/main/CF%E4%BC%98%E9%80%89%E5%8F%8D%E4%BB%A3IP(%E7%94%B5%E8%84%91%E7%89%88).zip) ，因为这些都是被大佬扫出来的，容易失效
:::


![](/cloudflare/ip/win-01.png)

这里我选 `1` IPv4，端口 我选 `2095`

::: details 如何查询IPv4还是IPv6
IPv6测试：https://www.test-ipv6.com/

IP查询：https://ipw.cn/
:::


::: details 端口的使用区别

* 搭建的节点未开启TLS，用80系列端口

* 搭建的节点已开启TLS，用443系列端口

| 类型 | HTTP | HTTPS |
| :-: | :-: | :-: |
| 节点 | vless+ws| vless+ws+tls |
| 端口 | 80、8080、8880、2052、2082、2086、2095 | 443、8843、2053、2083、2087、2096|
| TLS | 关闭 | 开启 |
| 域名 | 非必须提供 | 必须提供 |

:::

![](/cloudflare/ip/win-02.png)

脚本会自动选出最优的5个IP，复制第一个

![](/cloudflare/ip/win-03.png)

替换到节点 `服务器地址` 和 `端口` 中，确定

![](/cloudflare/ip/win-04.png)

测试一下延迟

![](/cloudflare/ip/win-05.png)

开启代理，通过访问 [ip.gs](https://ip.sb/) 、[ipleak.net](https://ipleak.net/)、[BrowserLeaks](https://browserleaks.com/dns)，IP是在一个范围内跳动，不是永久固定的

![](/cloudflare/ip/win-06.png)


::::





::: details 搭建节点补充：优选官方IP（iOS端）

经过测试，iOS端使用 [iSH Shell](https://apps.apple.com/cn/app/id1436902243) 跑代码会崩溃

所以，要么使用其他客户端优选后，复制过来用

要么直接用 [优选域名](#优选域名)


:::











:::: details 搭建节点补充：优选官方IP（Android端）


安卓端可以使用 [NekoBox](../gfw/NekoBox.md) 或 [V2ray](../gfw/v2ray.md)

我用 NekoBox 演示，复制搭建好的节点，从剪切板导入

![](/cloudflare/ip/and-01.png)

测一下速，连接测试 - URL Test

![](/cloudflare/ip/and-02.png)


下载 [Termux](https://github.com/termux/termux-app/releases) 并安装 

::: tip 下载哪一个
作者的文件名太长了，电脑端能看清

按顺序分别适用：手机64位、手机32位、手机64/32通用、平板32位、平板64位
:::

![](/cloudflare/ip/and-03.png)


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


![](/cloudflare/ip/and-04.png)


安装完成后，使用 [@甬哥的脚本：优选官方IP](https://github.com/yonggekkk/Cloudflare_vless_trojan/) ，命令如下

```sh
curl -sSL https://gitlab.com/rwkgyg/CFwarp/raw/main/point/cfip.sh -o cfip.sh && chmod +x cfip.sh && bash cfip.sh
```


我们选 `1` 优选官方IP，端口我用的 `8880`


::: details 官方IP和反代IP的区别

* 官方IP：稳定，但速度一般

* 反代IP：速度快，但不太稳定，容易失效

:::


::: details 端口的使用区别

* 搭建的节点未开启TLS，用80系列端口

* 搭建的节点已开启TLS，用443系列端口

| 类型 | HTTP | HTTPS |
| :-: | :-: | :-: |
| 节点 | vless+ws| vless+ws+tls |
| 端口 | 80、8080、8880、2052、2082、2086、2095 | 443、8843、2053、2083、2087、2096|
| TLS | 关闭 | 开启 |
| 域名 | 非必须提供 | 必须提供 |

:::

![](/cloudflare/ip/and-05.png)

耐心等待一会，在结果中复制延迟最低的域名网址

![](/cloudflare/ip/and-06.png)

打开 NekoBox 点节点编辑 - 服务器，替换成优选的域名

再次测速发现，节点延迟已经降低了

![](/cloudflare/ip/and-07.png)

开启代理，通过访问 [ip.gs](https://ip.sb/) 、[ipleak.net](https://ipleak.net/)、[BrowserLeaks](https://browserleaks.com/dns)，IP是在一个范围内跳动，不是永久固定的

![](/cloudflare/ip/and-08.png)


::::




## 特别鸣谢

* [ip.gs](https://ip.sb/)

* [DNS Leak Test - BrowserLeaks](https://browserleaks.com/dns)

* [ipleak.net](https://ipleak.net/)






