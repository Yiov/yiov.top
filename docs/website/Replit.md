# Replit的注册及使用




## 简介

Replit是一个基于浏览器的云端协同开发平台，可用于构建开发环境、实时协作、托管网络应用、创建动态或者静态网站的容器等

官网：https://replit.com/

文档：https://docs.replit.com/

GitHub：https://github.com/replit

![](/replit/replit-01.png)



## 客户端

* [电脑端](https://replit.com/desktop) 

* [苹果端](https://apps.apple.com/cn/app/replit-idea-to-software-fast/id1614022293)

* [安卓端](https://replit.com/mobile)



## 注册

点击 `Log in` 注册，可以用第三方关联注册，我选择 [GitHub](../website/pages/github)

::: details 网站打不开？
那有可能你需要 [挂一个梯子](../gfw/channel.md)
:::

![](/replit/replit-02.png)

注册好，进入主界面，可以修改你的昵称，问你用于何处和多少开发经验

![](/replit/replit-03.png)

![](/replit/replit-04.png)


最后，根据上方提示邮箱验证一下即可

![](/replit/replit-05.png)

![](/replit/replit-06.png)

还可以在 `Account - Profile - through the CLI` 修改用户名

![](/replit/replit-07.png)





## 使用


:::: details 生成Wireguard配置


打开 [@甬哥](https://github.com/yonggekkk/warp-yg) 的脚本 [WARP-Wireguard-Register](https://replit.com/@yonggekkk/WARP-Wireguard-Register) ，点 `Rork&Run`

::: details 其他同类脚本
[@misaka-blog：注册warp密钥](https://replit.com/@misaka-blog/wgcf-profile-generator)

[@misaka-blog：生成Wireguard配置](https://replit.com/@misaka-blog/warpgo-profile-generator)
:::

![](/replit/replit-08.png)

名称可改可不改，点 `Fork Repl`

![](/replit/replit-09.png)

Fork成功会自动进入仓库运行

::: details 没有运行怎么办
返回 [Replit主页](https://replit.com/~) ，点击项目进入自动运行

未运行点击顶部的 `RUN`
:::

![](/replit/replit-10.png)

我这里就以 [CloudFare的 Zero Trust](./cloudflare.md#使用) 演示

输入`1`，选择warp-go回车，在输入 `3`，选择warp-go-teams回车

::: details warp-go 、wgcf、warp api的区别
* warp-go：最新内核

* wgcf：老内核

* warp api：官方申请api，有几率失败
:::

![](/replit/replit-11.png)

点击链接获取 [Teams团队Token](https://web--public--warp-team-api--coia-mfs4.code.run/)

![](/replit/replit-12.png)

输入你在 [CloudFare中注册的团队名](./cloudflare.md#使用)

![](/replit/replit-13.png)

使用的邮箱 (与注册时填入的邮箱后缀保持一致)

![](/replit/replit-14.png)

填入验证码

![](/replit/replit-15.png)

获取到ey开头的token

![](/replit/replit-16.png)

复制这一长串token

![](/replit/replit-17.png)

回到Replit 右键，Paste 粘贴，回车

![](/replit/replit-18.png)

申请成功后WireGuard配置，可以导入 [WireGuard使用](../gfw/wireguard.md)

![](/replit/replit-19.png)

::::





:::: details 搭建Xray节点

这里使用 [@甬哥](https://github.com/yonggekkk/Replit-Xray) 的脚本包 [vmvltrssso.zip](https://raw.githubusercontent.com/yonggekkk/Replit-Xray/main/vmvltrssso.zip)，并解压

![](/replit/replit-20.png)

左上角 `+ Create Repl`

![](/replit/replit-21.png)

选择 `Blank Repl`

![](/replit/replit-22.png)

名称Title随意，但不要出现代理协议的字眼，点击创建Create Repl

![](/replit/replit-23.png)

等待创建完成即可

![](/replit/replit-24.png)

然后将解压后的4个文件，全部拖到左侧文件栏内进行覆盖

![](/replit/replit-25.png)

会提示是否覆盖，点Yes

![](/replit/replit-26.png)

上传完成，左侧文件栏显示 `√ saved` 即可，点 `Run` 运行

![](/replit/replit-27.png)

多等一会运行起来后，点 `New Tab`

![](/replit/replit-28.png)


复制这个网址，一会要用到，去掉 `https://` 和尾部的 `/` 

```
https://123456.pike.replit.dev/ // [!code --]

123456.pike.replit.dev // [!code ++]
```

![](/replit/replit-29.png)


然后再左侧 `Secret`，右侧点 `+ New Secret`

![](/replit/replit-30.png)

key输入 `ym`，值 `Value` 输入刚才不带http斜杠的网址，添加 `Add Secret`

![](/replit/replit-31.png)

然后点击顶部停止 `stop`，重新 `Run`

![](/replit/replit-32.png)

等待生成，方案一要手搓，我们可以直接点击方案2的链接

![](/replit/replit-33.png)

挑你喜欢的协议导入 [科学上网工具](../gfw/proxy.md) ，不知道选哪个就选Vmess / Vless

::: tip 说明
默认是443端口，不可以更改

默认开启TLS，不可以关闭
:::

![](/replit/replit-34.png)

我这里使用V2ray演示，复制VMess节点，剪切板导入


![](/replit/replit-35.png)

导入成功后，右键 - 测试服务器真连接延迟

::: details 如何将印度节点切换成美国节点
Replit主页头像 - Account - Your server location，将原先的 Asia 改成 `North America`
:::

![](/replit/replit-36.png)

![](/replit/replit-37.png)

然后下方，选择 `自动配置系统代理`，访问 [谷歌](https://www.google.com/) 看看

::: details 打不开网页，代理工具真链接延迟-1ms
双击节点，在节点配置中，将 `TLS` 关闭，再重新开启 `TLS` 看看是否恢复正常
:::

![](/replit/replit-38.png)

::::












:::: details 搭建Xray节点 补充：argo隧道

::: warning 前提
注册 [Cloudflare](./cloudflare.md) 账号，自己有一个域名并已解析在Cloudflare上

否则不用看！！！
:::


进入 Cloudflare - Zero Trust

![](/replit/replit-39.png)

然后再 Networks - Tunnels - Add a tunnel

![](/replit/replit-40.png)

选择 Cloudflared，下一步

![](/replit/replit-41.png)

自己取一个隧道名，保存

![](/replit/replit-42.png)

然后自动生成了token，我们复制出来，一会要用，下一步

::: tip 说明

复制出来是这样的，我们只需要 `ey开头` 直到结尾的字符，前面的都删掉

```sh
cloudflared.exe service install

eyJhIjoiYmVjNjVjODk5NzVhN2JhYTM5ODA5OWExM2UwNDYyNWEiLCJ0IjoiOTZiNWYyYjgtZWVmMS00M2FiLWFjMzctYWIwNjJhODU4OTE2IiwicyI6Ik5tVTJNalE1WXpNdE1EazNZeTAwTUdRNUxXSTVaRFF0TnpKa09XUmpOekF4WWpjMyJ9
```

:::

![](/replit/replit-43.png)

然后给隧道添加一个域名，保存

::: tip 说明

* subdomain：二级域名

* Domain:主域名(需提前解析到Cloudfare)

* Path：留空即可

* Type：选 `HTTP`

* URL：`127.0.0:8089`
:::


![](/replit/replit-44.png)

这样我们就得到了一个二级域名的隧道网址

![](/replit/replit-45.png)

返回Replit，根据 [@甬哥的文档](https://github.com/yonggekkk/Replit-Xray) 分别添加密钥 `argotoken` 和 `argoym`

| 变量名称 | 变量值 | 变量说明 |
| :-: | :-: | :-: |
| ym | replit生成的域名 | 首次运行后必填<br>注意：不要带 `https://` 且末尾不要带 `/` |
| argotoken<br>`可选` | CF生成的一串token | argo固定隧道token，<br>但必须与argoym变量同时存在 |
| argoym<br>`可选` | CF设置的隧道域名 | argo固定隧道域名，<br>但必须与argotoken变量同时存在|
| uuid<br>`可选` | 自定义uuid | 已自动生成，可以自行更改 |
| www<br>`可选` | 数字1-9任选一个数字 | 9个网页中随机选择一个伪装 |
| ver<br>`可选` | 任意字符 | Xray1.4.3版支持苹果oneclick免费客户端 |


![](/replit/replit-46.png)

重新 `Run` 即可看到固定的隧道名

![](/replit/replit-47.png)

重新订阅节点，或者双击节点修改 `伪装域名host` 和 `SNI` 为伪装域名

| 类型 | HTTP | HTTPS |
| :-: | :-: | :-: |
| 节点 | vless+ws| vless+ws+tls |
| 端口 | 80、8080、8880、2052、2082、2086、2095 | 443、8843、2053、2083、2087、2096|
| TLS | 关闭 | 开启 |
| 域名 | 非必须提供 | 必须提供 |


![](/replit/replit-48.png)

::::





## 常见问题

#### 1.Replit如何保活

这也是Replit最大的弊端，关闭网页或者较长时间，脚本就自动停止了

目前的解决办法，只能 [下载客户端](#客户端) 后台挂机


#### 2.Replit可以部署Alist

以前可以，现在不行了


#### 3.网页打不开，节点测试-1ms

双击节点，在节点配置中，将 TLS 关闭，再重新开启 TLS 看看是否恢复正常


