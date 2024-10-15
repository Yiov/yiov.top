# WireGuard使用及优选IP




## 简介

Wireguard是一款三层加密的隧道通信协议，以及免费开源软件

官网：https://www.wireguard.com/

![](/wireguard/wireguard-01.png)


## 客户端

* [iOS端](https://apps.apple.com/us/app/wireguard/id1441195209)

* [Android端](https://www.wireguard.com/install/)

* [Windows端](https://www.wireguard.com/install/)

* [Mac端](https://apps.apple.com/us/app/wireguard/id1451685025)

* [Linux端](https://www.wireguard.com/install/)



## 准备工作

* [TG账号](../telegram/tg.md) 「必备」

* [Apple ID美区苹果账号](../iPhone/Apple_ID.md) 「iOS准备」




## 安装


::: details iOS端 安装

先从美区AppStore下载 [wireguard](https://apps.apple.com/us/app/id1441195209) 并安装

![](/wireguard/ios/ios-01.png)

提示添加VPN配置，允许

![](/wireguard/ios/ios-02.png)

我们需要获取配置文件后，才可以使用

![](/wireguard/ios/ios-03.png)

:::







::: details Android端 安装

在 [Wireguard 官网](https://www.wireguard.com/install/) 点击 `Download APK File` 下载并安装

![](/wireguard/android/android-01.png)

:::







::: details Windows端 安装

在 [Wireguard官网 Installation 页面](https://www.wireguard.com/install/) 点击 `Windows` 下载

![](/wireguard/windows/windows-01.png)

点击安装包安装即可

![](/wireguard/windows/windows-02.png)

桌面没有快捷方式，在开始 - 最近添加中找到 Wireguard - 右键 - 更多 - 打开文件位置

![](/wireguard/windows/windows-03.png)

再次鼠标右键 - 发送到 - 桌面快捷方式

![](/wireguard/windows/windows-04.png)

:::







## 使用



::: details iOS端 使用

在Tg搜：[@generatewarpplusbot](https://t.me/generatewarpplusbot)，进入机器人对话，点开始

![](/wireguard/ios/ios-04.png)

点 `/generate` ，提示我们需要加3个群组后方可使用

![](/wireguard/ios/ios-05.png)

我们分别进入3个群组

![](/wireguard/ios/ios-06.png)

然后点 `I have subscribed` 确认，后再次点 `/generate`

会获得一个无限流量的密钥及配置文件，点分享

![](/wireguard/ios/ios-07.png)

选择 WireGuard 导入即可使用

![](/wireguard/ios/ios-08.png)

打开开关，访问 [谷歌](https://www.google.com) 只能访问 [谷歌香港](https://www.google.com.hk) 

打不开也不要急，一会优选IP就可以了

![](/wireguard/ios/ios-09.png)

:::










::: details Android端 使用

我们先去Tg获取密钥，在Tg搜：[@generatewarpplusbot](https://t.me/generatewarpplusbot)

进入机器人对话，点开始

![](/wireguard/android/android-02.png)

点 `/generate` ，提示我们需要加3个群组后方可使用

![](/wireguard/android/android-03.png)

我们分别进入3个群组

![](/wireguard/android/android-04.png)

然后点 `I have subscribed` 确认，后再次点 `/generate`

会获得一个无限流量的密钥及 `wg-config.conf` 配置文件

点击下载，返回 WireGuard 主界面

![](/wireguard/android/android-05.png)

点击左下角上角 `+` ，`导入配置或压缩包`

在下载内容 - Telegram 文件夹，选择刚才的文件

![](/wireguard/android/android-06.png)

导入成功后，打开开关看看，若无法成功访问

先关闭！！！我们优选IP后再来试！！

![](/wireguard/android/android-07.png)

:::








:::: details Windows端 使用

我们先去Tg获取密钥，在Tg搜：[@generatewarpplusbot](https://t.me/generatewarpplusbot)

进入机器人对话，点开始

![](/wireguard/windows/windows-05.png)

点 `/generate` ，提示我们需要加3个群组后方可使用

![](/wireguard/windows/windows-06.png)

我们分别进入3个群组

![](/wireguard/windows/windows-07.png)

然后点 `I have subscribed` 确认，后再次点 `/generate`

会获得一个无限流量的密钥及 `wg-config.conf` 配置文件

![](/wireguard/windows/windows-08.png)

下载配置文件并打开文件夹

![](/wireguard/windows/windows-09.png)

将这个文件拖到桌面，方便使用！

![](/wireguard/windows/windows-10.png)

回到桌面打开 WireGuard ，点 `从文件导入隧道`

![](/wireguard/windows/windows-11.png)

点击刚刚拖到桌面的 `wg-config.conf` 文件，打开

![](/wireguard/windows/windows-12.png)

导入成功后就能看到公钥等信息，点击 `连接`

![](/wireguard/windows/windows-13.png)

这样就连接成功了

![](/wireguard/windows/windows-14.png)

我们访问 [谷歌](https://www.google.com) 看看，自动跳到了 [谷歌香港](https://www.google.com.hk) 

::: details 访问不了？
不着急，一会我们优选IP就行了
:::

![](/wireguard/windows/windows-15.png)

::::











## 优选IP


::: warning 说明
* WARP+速度不错：不要优选，否则可能反向操作

* WARP+速度一般：建议优选，但如不好用了，需再次优选
:::



:::: details iOS端 优选IP

国区AppStore下载 [iSH Shell](https://apps.apple.com/cn/app/id1436902243) 并安装

![](/wireguard/ios/ios-10.png)

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


![](/wireguard/ios/ios-11.png)

拉取运行 [@甬哥](https://github.com/yonggekkk/warp-yg) 的优选IP脚本

```sh
curl -sSL https://gitlab.com/rwkgyg/CFwarp/raw/main/point/endip.sh -o endip.sh && chmod +x endip.sh && bash endip.sh
```



::: details 卡住不动了？
点击 `∧` + `z` 键可退出，挂上梯子翻墙了再安装即可
:::



![](/wireguard/ios/ios-12.png)

挂了梯子的先断开！断开！否则不准！然后都选 `1`

::: tip 如何查询IPv4还是IPv6
IPv6测试：https://www.test-ipv6.com/

IP查询：https://ipw.cn/
:::

![](/wireguard/ios/ios-13.png)


等代码跑完，我们自行翻到最上面选第一个延迟最低的，复制IP+端口

::: details 为什么要自己翻
由于苹果系统限制无法生成 `result.csv` 文件，导致脚本无法自动筛选最优的前10个显示
:::

::: details 卡住不动了？
点击 `∧` + `z` 键可退出，重新运行代码
:::

![](/wireguard/ios/ios-14.png)

进入 wireguard 点击刚才的配置，编辑

![](/wireguard/ios/ios-15.png)

将原先的对端改成你优选好的IP+端口，存储

::: details 默认对端是多少，想保存回来
```
engage.cloudflareclient.com:2408
```
:::

![](/wireguard/ios/ios-16.png)

打开开关，就能访问 [谷歌](https://www.google.com) 了

不过优选的IP是基本是香港的，所以只能用 [谷歌香港](https://www.google.com.hk) 

![](/wireguard/ios/ios-09.png)

::::













:::: details Android端 优选IP

下载 [Termux](https://github.com/termux/termux-app/releases) 并安装 

::: tip 下载哪一个
作者的文件名太长了，电脑端能看清

按顺序分别适用：手机64位、手机32位、手机64/32通用、平板32位、平板64位
:::

![](/wireguard/android/android-08.png)


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


![](/wireguard/android/android-09.png)



安装完成后，拉取运行 [@甬哥](https://github.com/yonggekkk/warp-yg) 的优选IP脚本

```sh
curl -sSL https://gitlab.com/rwkgyg/CFwarp/raw/main/point/endip.sh -o endip.sh && chmod +x endip.sh && bash endip.sh
```


![](/wireguard/android/android-10.png)


挂了梯子的先断开！断开！否则不准！然后都选 `1`

跑完后，自动帅选出最优的前10个IP

::: tip 如何查询IPv4还是IPv6
IPv6测试：https://www.test-ipv6.com/

IP查询：https://ipw.cn/
:::

![](/wireguard/android/android-11.png)

复制第1个IP+端口，点击 Wireguard 的配置文件

![](/wireguard/android/android-12.png)

右上角 编辑，下拉到对端的位置

![](/wireguard/android/android-13.png)

粘贴刚刚复制的优选IP+端口，打开开关运行

::: details 默认对端是多少，想保存回来
```
engage.cloudflareclient.com:2408
```
:::

![](/wireguard/android/android-14.png)

访问 [谷歌](https://www.google.com) 只能访问 [谷歌香港](https://www.google.com.hk) ，[油管](https://youtube.com) 也可以，不是很快，日常够用

![](/wireguard/android/android-15.png)

::::














:::: details Windows端 优选IP



接下来就是优选IP工具使用 [@甬哥](https://github.com/yonggekkk/warp-yg) 的 [WIN端warp自选IP-v23.11.15.zip](https://raw.githubusercontent.com/yonggekkk/warp-yg/main/WIN%E7%AB%AFwarp%E8%87%AA%E9%80%89IP-v23.11.15.zip)


解压后运行 `手动方式1：生成优选IP端口结果文件.bat`

::: danger 注意
运行前，请先断开 WireGuard 和其他代理工具

否则优选的IP不准！！！
:::

![](/wireguard/windows/windows-16.png)

这里我们输入 `1` ，回车

![](/wireguard/windows/windows-17.png)

优选的结果自动生成了 `result.csv` 文件，按任意键退出

![](/wireguard/windows/windows-18.png)

鼠标对着 `result.csv` 右键，用 `记事本打开`

![](/wireguard/windows/windows-19.png)

打开 WireGuard 客户端，在刚才的wg-config配置中，点击 `编辑`

![](/wireguard/windows/windows-20.png)

将原先的 `Endpoint` 改成我们优选的IP+端口，保存

::: tip 说明
只要丢包率是0，且延迟低都可以使用
:::

![](/wireguard/windows/windows-21.png)

[油管](https://youtube.com/) 4k视频，能跑2万多，带宽大概20M，8K还是有点吃力的

![](/wireguard/windows/windows-15.png)

::::




## 账户类型

连接WireGuard，打开连接查看账户类型

::: tip 说明
`warp=off`：wireguard未连接或失败

`warp=on`：普通账户

`warp=plus` warp+或team账户
:::

官网：https://www.cloudflare.com/cdn-cgi/trace


![](/wireguard/wireguard-02.png)




## 拓展

本次仅演示WARP普通账户注册，WARP+直接tg群获取现成的即可，不用这么麻烦



:::: details ios端 注册WARP

同样使用 [iSH Shell](https://apps.apple.com/cn/app/id1436902243) 工具， [@甬哥](https://github.com/yonggekkk/warp-yg) 的优选IP脚本

```sh
curl -sSL https://gitlab.com/rwkgyg/CFwarp/raw/main/point/endip.sh -o endip.sh && chmod +x endip.sh && bash endip.sh
```


运行后，选 `2`，在选 `1`

::: details 三者的区别
warp-go和wgcf就是内核不同，warp-go最新内核，推荐！

warp api是官方的接口，失败率比较高
:::

![](/wireguard/ios/ios-17.png)

等待配置生成

![](/wireguard/ios/ios-18.png)


生成后将配置复制出来，等会要用

![](/wireguard/ios/ios-19.png)

```
[Interface]
PrivateKey = uKv0YgRdFJVXXcPAH2cAaJHZOMoJJlhAjzVjzLBbbHE=
Address    = 172.16.0.2/32
Address    = 2606:4700:110:85d4:ec39:bd5b:23:7ef5/128
DNS        = 1.1.1.1
MTU        = 1280

[Peer]
PublicKey  = bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=
AllowedIPs = 0.0.0.0/0
AllowedIPs = ::/0
Endpoint   = 162.159.193.10:2408
```


打开 WireGuard 客户端，右上角 `+` 号，手动创建，再点一下 `生成密钥对`

![](/wireguard/ios/ios-20.png)

名称不要填中文，其他信息我们按要求填写，保存，然后激活

::: tip 对应关系
* PrivateKey：私钥 (自动生成的删掉，填这个；生成的公钥不用动)

* Address：局域网IP地址v4和v6 (格式：`v4地址 , v6地址`)

* DNS：DNS服务器

* MTU：MTU (端口不要漏)

---

* PublicKey：公钥 (远程peer里的，不是本地)

* AllowedIPs：路由的IP地址v4和v6 (格式：`v4地址段 , v6地址段`)

* Endpoint：对端

注：v6地址也可以不填，不影响使用
:::


![](/wireguard/ios/ios-21.png)


访问 [谷歌](https://www.google.com) 只能访问 [谷歌香港](https://www.google.com.hk)

[查看一下账户类型](#账户类型)，确定是warp普通账户了

::: tip 说明
移动和联通一般无法握手成功，[优选一下IP](#优选ip) 替换对端即可
:::


![](/wireguard/ios/ios-22.png)


::::











:::: details Android端 注册WARP


同样使用 [Termux](https://github.com/termux/termux-app/releases) 工具， [@甬哥](https://github.com/yonggekkk/warp-yg) 的优选IP脚本

```sh
curl -sSL https://gitlab.com/rwkgyg/CFwarp/raw/main/point/endip.sh -o endip.sh && chmod +x endip.sh && bash endip.sh
```


运行后，选 `2`，注册生成warp-wireguard配置

![](/wireguard/android/android-16.png)

再选 `1`，warp-go，等配置生成将它复制出来

::: details 三者的区别
warp-go和wgcf就是内核不同，warp-go最新内核，推荐！

warp api是官方的接口，失败率比较高
:::

![](/wireguard/android/android-17.png)

```
[Interface]
PrivateKey = IBh1rIzWkKzSdIkCZM6nKP7Sz1OPw3HXBtPaHZId7lc
Address = 172.16.0.2/32
DNS = 1.1.1.1
MTU = 1280
[Peer]
PublicKey = bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=
AllowedIPs = 0.0.0.0/0
Endpoint = 162.159.193.10:2408
```


打开 WireGuard 客户端，右下角 `+` 号，手动创建

![](/wireguard/android/android-18.png)

名称不要填中文，私钥需要点一下生成，会自动生成私钥和公钥

![](/wireguard/android/android-19.png)

然后我们依次填入信息，添加节点，填写Peer信息后，保存

::: tip 对应关系
* PrivateKey：私钥 (自动生成的删掉，填这个；生成的公钥不用动)

* Address：局域网IP地址

* DNS：DNS服务器

* MTU：MTU (端口不要漏)

---

* PublicKey：公钥 (远程peer里的，不是本地)

* AllowedIPs：路由的IP地址

* Endpoint：对端
:::

![](/wireguard/android/android-20.png)

添加成功后，打开开关连接

::: tip 说明
移动和联通一般无法握手成功，[优选一下IP](#优选ip) 替换对端即可
:::

![](/wireguard/android/android-21.png)

访问 [谷歌](https://www.google.com) 只能访问 [谷歌香港](https://www.google.com.hk)

[查看一下账户类型](#账户类型)，确定是warp普通账户了

![](/wireguard/android/android-22.png)

::::














:::: details Windows端 注册WARP

下载 @甬哥 的仓库：https://github.com/yonggekkk/warp-yg

![](/wireguard/windows/windows-22.png)

解压到桌面

![](/wireguard/windows/windows-23.png)

按住 `SHIFT键` 鼠标右键，选择 `在此处打开Powershell`

![](/wireguard/windows/windows-24.png)

在窗口输入 `./warp.exe` 回车

```sh
./warp.exe
```

![](/wireguard/windows/windows-25.png)

电脑端利用warp api的方式就注册好了，信息如下

::: tip 说明
其中最重要的是 `private_key` 和 `v6` 信息
:::

![](/wireguard/windows/windows-26.png)

```sh{7,12}
PS C:\Users\Administrator\Desktop\warp-yg-main> ./warp.exe
device_id: 6e140f41-7696-4135-b1d4-1b2e6b116e43
token: e00625db-b6d6-488d-bb81-ca2f0ea6d61a
account_id: 89b27fe6-d219-4c83-8813-c3c600ec2829
account_type: free
license: bX293su8-1j2Z76iv-a976XxW2
private_key: 6JGRWQ1YoRkajIrbeZb/focrzxiR4wuOka5VUQFlQUA=
public_key: bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=
client_id: I2LP
reserved: [ 35, 98, 207 ]
v4: 172.16.0.2
v6: 2606:4700:110:8972:6bae:af17:9509:f1cd
endpoint: engage.cloudflareclient.com:2408
```


准备一个wireguard模板，修改 `PrivateKey` 和 `Address` 的v6地址，其他默认即可

::: danger 注意
v6后面的 `/128` 不能漏掉

或者干脆删掉v6整个地址，只留v4
:::

```sh{2-3}
[Interface]
PrivateKey = 这里填private_key密钥 // [!code ++]
Address = 172.16.0.2/32, 这里填v6/128 // [!code ++]
DNS = 1.1.1.1
MTU = 1280
[Peer]
PublicKey = bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=
AllowedIPs = 0.0.0.0/0
AllowedIPs = ::/0
Endpoint = engage.cloudflareclient.com:2408
```

进入WireGuard客户端，新建空隧道

![](/wireguard/windows/windows-27.png)

粘贴到配置中，注意密钥和v6地址别错

::: tip 注意
隧道名称不要填中文，否则无法创建
:::

![](/wireguard/windows/windows-28.png)

连接，好像是没有握手成功，[优选一下IP](#优选ip) 替换 `Endpoint` 对端即可

![](/wireguard/windows/windows-29.png)

现在就可以了

![](/wireguard/windows/windows-30.png)

[查看一下账户类型](#账户类型)，确定是warp普通账户了

![](/wireguard/windows/windows-31.png)

::::















## 特别鸣谢

* [@甬哥：warp多功能脚本](https://github.com/yonggekkk/warp-yg)

* [IPv6测试](https://www.test-ipv6.com/)

* [ipw.cn](https://ipw.cn/)

* [ip.gs](https://ip.gs/)

* [ip.me](https://ip.me/)














