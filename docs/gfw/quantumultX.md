# 圈X安装及使用



## 简介

Quantumult X是一款强大的网络工具，可以用于代理、规则分流、脚本运行、抓包等，简称圈X

教程在 [圈X不完全教程的基础](https://www.notion.so/Quantumult-X-1d32ddc6e61c4892ad2ec5ea47f00917) 上进行了补充


官网：https://quantumult.app/x/

仓库：https://github.com/crossutility/Quantumult-X/

![](/quantumultX/quantumultX-01.png)



## 安装

你需要注册一个 [美区Apple ID](../iPhone/Apple_ID.md)，充值并在付费购买它，最后 [下载安装](https://apps.apple.com/us/app/quantumult-x/id1443988620)

::: warning ！千万不要买共享账号
开发者做了限制，共享号下载的不能使用
:::

![](/quantumultX/quantumultX-02.png)

安装好后进入圈X - 右下角 `风车` 设置 - 拉倒底部 `其他设置` - 拉倒底部

版本号后面蓝色的是正版，红色和绿色皆为非正版，不建议使用

![](/quantumultX/quantumultX-03.png)

## 主界面

主界面如下图都一一注明了

![](/quantumultX/quantumultX-04.png)


![](/quantumultX/quantumultX-05.png)




## 节点

非常重要，它是圈X运行的基础，必须全程使用代理，不然无法使用

---

### 科学上网

这里就要用到机场了，通过订阅使用机场的节点，实现代理科学上网

使用 `iKUUU` 免费机场演示，官网：https://ikuuu.pw/

::: tip 说明
主要用于普及订阅知识，后续有条件换好点的 [点我查看白嫖机场](./channel.md)
:::

![](/quantumultX/quantumultX-06.png)

点击 `复制Clash订阅链接` 会自动复制到剪切板，但是圈X不支持这种格式，需要转换

::: tip 说明
本来直接选 `复制SS订阅链接` 即可，但是这个机场不能用这个功能，只能选择 `复制Clash订阅链接` 
:::

订阅格式转换：https://dove.589669.xyz/web

粘贴订阅，选择圈X，点击 `复制转换链接`，打开圈X - 风车

![](/quantumultX/quantumultX-07.png)


节点 - 节点资源，右上角添加


![](/quantumultX/quantumultX-08.png)


标签随便，资源路径填我们 `刚转换的订阅链接` ，右上角保存即可


![](/quantumultX/quantumultX-09.png)

勾选状态代表启用中，回到主界面，就能看到添加成功的节点了

![](/quantumultX/quantumultX-10.png)

测一下网速，选可用的节点打开开关，要是都显示 `X` 不可用，直接换机场


![](/quantumultX/quantumultX-11.png)

---


### 资源解析器

资源解析器就是为了解决订阅转换的问题，它会自动本地处理完成转换


随便选一个速度可以的节点，打开圈X开关

![](/quantumultX/quantumultX-12.png)

点风车-下拉到底部，配置文件-编辑，右上角箭头 选择 `general`

![](/quantumultX/quantumultX-13.png)

在 `[general]` 下面粘贴 [资源解析器](https://github.com/KOP-XIAO/QuantumultX/) 代码，右上角保存

```js
resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js
```


![](/quantumultX/quantumultX-14.png)

然后在 `节点- 节点资源` ，右上角添加页面下

![](/quantumultX/quantumultX-15.png)

打开 资源解析器开关 即可

::: tip 说明
直接返回退出即可，也可以添加新节点来试试效果
:::

![](/quantumultX/quantumultX-16.png)



---

### 添加

不是很常用，适用于一些分享的单个节点，即便是单个节点也仍推荐使用 [节点资源](#节点资源)

对应配置文件中的 [[server_local]](#编辑) 模块

::: tip 说明
添加：仅支持ss协议

URI：支持ss / ssr / vmess / https / trojan / vless 的节点

扫码：支持ss / ssr / vmess / https / trojan / vless 的节点二维码
:::


![](/quantumultX/quantumultX-17.png)


---

### 节点资源

对应配置文件中的 [[server_remote]](#编辑) 模块

::: tip 说明
* 支持 ss / ssr / vmess / https /trojan / vless 的节点

* 以及由 [资源解析器](#资源解析器) 解析的各种格式
:::

进入节点资源，右上角第一个是 `配置片段 - 新建` ，适用于一些分享的节点

::: tip 说明
即以远程订阅的方式，来管理本地节点
:::

找了一个分享的Vmess/SS等节点，粘贴保存

![](/quantumultX/quantumultX-18.png)

文件名可以改，也可以默认

跳转到添加节点界面，打开资源解析器，保存

![](/quantumultX/quantumultX-19.png)

主界面就能看到我们添加的节点了

![](/quantumultX/quantumultX-20.png)



进入节点资源，右上角第二个是 `添加` ，即远程订阅


![](/quantumultX/quantumultX-21.png)


找 [白嫖机场](./channel.md) 演示一下，复制任意订阅，粘贴到 `资源路径` ，打开资源解析器开关

![](/quantumultX/quantumultX-22.png)

添加成功后，测一下速，选择延迟低的节点即可

![](/quantumultX/quantumultX-23.png)

在节点资源中，左滑可以更新/分享/删除，长按可以移动顺序，点击可以编辑

![](/quantumultX/quantumultX-24.png)






## 策略组

它是一个通过对 [节点](#节点) 进行分组，然后服务于 [分流规则](#分流规则) 之间功能


对应配置文件中的 [[policy]](#编辑) 模块

---

### 默认格式

首次使用，需要添加一次默认格式，才能看到按钮

```sh
static=策略组名, proxy, direct, reject
```

::: tip 3种策略
PROXY：代理 (使用代理访问)

DIRECT：直连 (不使用代理访问)

REJECT：屏蔽 (不访问)
:::


主界面左下角的 `快捷栏 - 编辑` 和 设置里的` 配置文件 - 编辑` 是一样的



![](/quantumultX/quantumultX-25.png)


点击 `policy` ，粘贴默认策略组格式

![](/quantumultX/quantumultX-26.png)

回到主界面就看到了，和填写的一一对应


---

### 手动添加

我们可以尝试手动添加，方便更好的了解，点击 `∑+`

![](/quantumultX/quantumultX-27.png)

类型选择 `static`，其他信息一次填入

::: tip 5种策略组
static：静态策略 (常用)

available：健康检查策略 (不常用)

Round-Robin：轮询策略 (不常用)

dest-hash：负载均衡 (不常用)

url-latency-benchmark：选取延迟最优节点 (不常用)
:::


::: tip 说明
策略名：`🇭🇰香港`，这里的 `🇭🇰` 是 [emoji旗帜表情](https://emoji6.com/emojiall/) ，不是英文拼音

图标：使用的是 [@Orz-3](https://github.com/Orz-3/mini) 的 [香港图标](https://raw.githubusercontent.com/Orz-3/mini/master/Color/HK.png)，也可以是用 [Koolson](https://github.com/Koolson/Qure)，也可自己制作尺寸108*108像素,png格式

匹配资源：根据订阅名正则匹配 (不常用)

匹配节点：`🇭🇰|香港|HK` ，正则匹配用 `|` 隔开 (常用)
:::

![](/quantumultX/quantumultX-28.png)

添加成功后，主机面就可以看到，美观了很多

![](/quantumultX/quantumultX-29.png)

之前默认添加的，并没有起到作用，我们直接删除

![](/quantumultX/quantumultX-30.png)


![](/quantumultX/quantumultX-31.png)



针对常用的节点，我们来做个完整点的策略组


![](/quantumultX/quantumultX-32.png)


```sh
url-latency-benchmark=优选节点, server-tag-regex=.*, check-interval=300, tolerance=0, img-url=globe.system
static=🇭🇰香港, server-tag-regex=🇭🇰|香港|HK, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/HK.png
static=🇹🇼台湾, server-tag-regex=🇹🇼|台湾TW, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/TW.png
static=🇸🇬新加坡, server-tag-regex=🇸🇬|新加坡|SG, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/SG.png
static=🇯🇵日本, server-tag-regex=🇯🇵|日本|JP, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/JP.png
static=🇺🇸美国, server-tag-regex=🇺🇸|美国|US, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/US.png
static=🇰🇷韩国, server-tag-regex=🇰🇷|韩国|KR, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/KR.png
```

::: tip 说明

* 优选节点：仅能筛选出延迟最低的节点，无法自动切换

* server-tag-regex：根据节点名匹配

* resource-tag-regex: 根据订阅名来筛选节点
:::



![](/quantumultX/quantumultX-33.png)


长按策略组还可以进行编辑，添加节点等操作


![](/quantumultX/quantumultX-34.png)





## 分流


简而言之就是，访问不同的网站，自动走你指定好的策略组节点


---


### 分流规则

虽然这种本地添加并不常用，但涉及分流的知识点

对应配置文件中的 [[filter_local]](#编辑) 模块

点分流规则，右上角 `+` 号


![](/quantumultX/quantumultX-35.png)



![](/quantumultX/quantumultX-36.png)

::: tip 分流规则类型
**HOST：域名匹配 (例：www.google.com)**

**HOST-SUFFIX：域名后缀匹配 (例：google.com)**

**HOST-WILDCARD：域名通配符匹配 (例：*.google.com)**

**HOST-KEYWORD：域名关键字匹配 (例：google)**

USER-AGENT：用户代理匹配 (不常用)

IP-CIDR：IP匹配 (不常用)

IP6-CIDR：IPV6匹配 (不常用)

GEOIP：IP数据库匹配 (不常用)

IP-ASN：IP归属地匹配 (不常用)
:::

::: tip 关于优先级
分流严格遵循优先级，HOST > HOST-SUFFIX > ... > IP-ASN

比如：2个规则存在同样的域名，分别使用了 `HOST` 和 `HOST-SUFFIX` 规则，则 仅 `HOST` 生效

详情请 [参考@DivineEngine的解析](https://divineengine.net/article/policy-and-filter-of-quantumult-x/) ，这里不再赘述
:::


在策略中，除了默认的3个策略，其他的都是自己添加的，可以自行选择


![](/quantumultX/quantumultX-37.png)

我们添加一个试试，来了解一下简单的使用

类型选 `HOST-SUFFIX`，参数填 `baidu.com`，策略选 `REJECT`

![](/quantumultX/quantumultX-38.png)

回到主界面，长按风车，切换成 `规则分流` 模式

::: tip 说明
必须切换，否则分流规则不生效，默认是全局代理模式了
:::

![](/quantumultX/quantumultX-39.png)

我们访问 [百度](https://www.baidu.com/) ，发现已经无法访问了，因为策略就是屏蔽

![](/quantumultX/quantumultX-40.png)

删除，就可以恢复正常使用了

![](/quantumultX/quantumultX-41.png)

那这些默认的分流规则，代表什么意思呢

::: tip 说明
* FINAL：兜底规则，没有匹配任何策略组，就自动选择 代理 `PROXY`

* IP-CIDR：IP匹配，保持默认即可

* GEOIP：IP数据库匹配，这里是 `CN` 直接匹配了国内的域名，只要是国内的使用 直连 `DIRECT`，这就是为什么圈X访问国内网站，IP还在国内的原因
:::

![](/quantumultX/quantumultX-42.png)







---

### 规则资源 {filter}

分流规则逐个添加的很慢，而规则资源就是远程批量添加，文件的格式为 `*.list`

对应配置文件中的 [[filter_remote]](#编辑) 模块

::: tip 说明

* [神机规则](https://github.com/DivineEngine/Profiles/tree/master/Quantumult/Filter)：一代最强规则，多数规则皆由它更改而来，但目前已停更

* [@blackmatrix7的规则](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/)：目前仍在热心更新的大佬，分类非常细致

:::



为了更了解及使用规则，我们直接演示一个：B站切换港区

规则资源 - 右上角 添加

![](/quantumultX/quantumultX-43.png)


在 [@blackmatrix7的规则](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/) 找到BiliBili

![](/quantumultX/quantumultX-44.png)

点击 list 文件 - 右上 `view` - 复制打开后的地址

::: tip 说明
这里的分流规则后面填写的是 `BiliBili` 策略组，而我们没有这个策略组，系统会自动新建
:::

![](/quantumultX/quantumultX-45.png)

资源路径填写list文件地址，标签自己命令一个

```
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/BiliBili/BiliBili.list
```

![](/quantumultX/quantumultX-46.png)


添加成功了，其实我们再分流规则中可以看到，有一堆的分流信息

![](/quantumultX/quantumultX-47.png)

回到主界面，会看到自动创建了一个 `BiliBili` 的策略组，而我们需要港区的节点策略组才可以达到目的，长按 `BiliBili策略组` - 编辑

![](/quantumultX/quantumultX-48.png)

选择香港和直连的策略，国区就使用直连，港区就使用香港策略组

::: tip 说明
顺便加个 [BiliBili图标](https://raw.githubusercontent.com/Orz-3/mini/master/Color/Bili.png) 更好看一点 
:::


![](/quantumultX/quantumultX-49.png)

打开BiliBili搜 `进击的巨人` ，发现啥也没有，我们切换到香港策略组，划掉APP后台重新进入搜索发现就能看了

::: tip 说明
切换前，请先测速，找能用的节点，否则无法生效
:::

![](/quantumultX/quantumultX-50.png)


::: warning 建议
如果你是小白，确实小白配置比较容易，但是有非常多的策略其实是用不上的

自己根据APP添加也并不麻烦
:::






## MitM

主要是用于解析https，常与重写搭配使用，保持开关常开即可

对应配置文件中的 [[MitM]](#编辑) 模块

打开MitM开关，提示错，未生成证书

![](/quantumultX/quantumultX-51.png)

点击 `生成证书`，证书保存成功

![](/quantumultX/quantumultX-52.png)

点击 `配置证书` ，要跳转浏览器 确定

![](/quantumultX/quantumultX-53.png)

允许下载描述文件，提示下载完成即可

![](/quantumultX/quantumultX-54.png)

打开手机设置，点击已下载的描述文件，安装

::: tip 说明
没有提示的，在设置 - 通用 - 描述文件与设备管理 里
:::

![](/quantumultX/quantumultX-55.png)

![](/quantumultX/quantumultX-56.png)

安装完成后，在 关于本机 - 证书信任设置

![](/quantumultX/quantumultX-57.png)

打开圈X的信任开关，回到主界面打开 `MitM开关` 即可

![](/quantumultX/quantumultX-58.png)

![](/quantumultX/quantumultX-59.png)




## 重写


可以用于修改http请求和响应，也是最核心的功能，首先要打开重写开关

常见的去广告等功能，就是利用的重写

![](/quantumultX/quantumultX-60.png)



---

### 重写规则


本地手动添加比较繁琐，但是有设计知识点，也讲一下

对应配置文件中的 [[rewrite_local]](#编辑) 模块

点击 重写规则，这里是空的，右上角添加


![](/quantumultX/quantumultX-61.png)

点类型可以看到，所有的类型

![](/quantumultX/quantumultX-62.png)

::: tip 说明
* reject：屏蔽，返回404状态码
* reject-img：屏蔽，返回HTTP状态码200并附带 1px gif
* reject-dict：屏蔽，返回HTTP状态码200并附带空的 JSON 对象
* reject-array：屏蔽，返回HTTP状态码200并附带空的 JSON 数组
* reject-200：屏蔽，返回HTTP状态码200

---

* 302：重定向，将POST请求改成GET,不保留请求体
* 307：重定向，将POST重定向到POST,PUT重定向到PUT，会保留请求体

---

* request-header：请求头，可匹配修改请求头
* request-body：请求体，可匹配修改请求体

* response-header：响应头，可匹配修改响应头
* response-body：响应体，可匹配修改响应体

---

* echo-response：响应体内容
---

* script-request-header：脚本返回的请求头
* script-request-body：脚本返回的请求体
* script-response-header：脚本返回的响应头
* script-response-body：脚本返回的响应体
---

* script-echo-response：脚本返回用户自定义的响应体(虚构的响应，不包含$request数据)
* script-analyze-echo-response：脚本返回用户自定义的响应体(真实的响应，包含$request数据)
:::


本次使用的是 [@墨鱼](https://github.com/ddgksf2013/) 的 [B站去广告脚本](https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js) 演示


![](/quantumultX/quantumultX-63.png)


点 view 查看获取脚本链接


![](/quantumultX/quantumultX-64.png)


填写信息后保存

::: tip 说明
* 类型：`script-response-body`

* 匹配URL：`^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab`

* 脚本路径：https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js

注：这里的URL涉及到正则匹配，可以使用 [QX生成正则 丨 快捷指令](https://www.icloud.com/shortcuts/ca8bb02b30d144b3996c84211372a011)
:::


![](/quantumultX/quantumultX-65.png)


然后再 MitM 中添加主机名，即hostname，右上角添加


![](/quantumultX/quantumultX-66.png)

主机名输入：`app.bilibili.com`

::: tip 说明
* 通配符 `*`：匹配所有字符，比如：`zhidao.baidu.com`，可用 `*.baidu.com` 表示

* 通配符 `?`：匹配单个字符，比如：`google.com`，可用 `goo?le.com` 表示

* 通配符组合 `*` 和 `?`：比如：`support.apple.com`，可用 `*.ap?le.com` 表示

* 通配符 `-`：排除主机，比如：`yiov.github.io`，可用 `-*.io` 表示
:::

![](/quantumultX/quantumultX-67.png)

看下使用脚本后B站的前后对比，少了几个标签

![](/quantumultX/quantumultX-68.png)

最后我们删除即可恢复

![](/quantumultX/quantumultX-69.png)


---

### 规则资源 {rewrite}

这是一个比较常用的功能了，格式是 `*.conf`

对应配置文件中的 [[rewrite_remote]](#编辑) 模块

我们同样来演示一下：B站去广告，点 规则资源，右上角添加

![](/quantumultX/quantumultX-70.png)

在墨鱼的 [重写仓库](https://github.com/ddgksf2013/Rewrite/) 找到 [Bilibili.conf](https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/AdBlock/Bilibili.conf)

![](/quantumultX/quantumultX-71.png)

![](/quantumultX/quantumultX-72.png)

粘贴 在资源路径，资源标签就写B站去广告

![](/quantumultX/quantumultX-73.png)

添加成功后，我们再重写规则里，可以看到添加了一堆不可删除的规则

![](/quantumultX/quantumultX-74.png)

主机名也是一样

![](/quantumultX/quantumultX-75.png)

打开B站APP看看效果，已经清爽很多了

![](/quantumultX/quantumultX-76.png)


点击可以编辑，长按可以排序，左滑可以更多操作

![](/quantumultX/quantumultX-77.png)





## 工具&分析

这个就是我们常见的跑js脚本以及抓包工具

对应配置文件中的 [[task_local]](#编辑) 模块

---

### HTTP请求(单脚本)

我们直接开演，更好的看懂及了解

点 HTTP请求 - 右上角 `+` 号 添加

![](/quantumultX/quantumultX-78.png)

执行日期 - 高级

::: tip 说明
* 下一步：在线编写脚本

* 高级：远程引用脚本

* 文本方式添加：本地添加脚本
:::


![](/quantumultX/quantumultX-79.png)


以 [野比大佬 @NobyDa](https://github.com/NobyDa/) 的 [京东多合一签到](https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js) 脚本为例

我们按脚本文件内的教程进行配置，逐个添加

::: tip 说明

* 标签：京东多合一签到

* Cron表达式：5 0 * * *

* 脚本路径：https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

* 图标：使用了[Orz-3](https://github.com/Orz-3/) 的 [京东图标](https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png)
:::


![](/quantumultX/quantumultX-80.png)

![](/quantumultX/quantumultX-81.png)


还需要在 `rewrite_local` 本地重写添加代码

```sh
# 获取京东Cookie. 
^https:\/\/(api\.m|me-api)\.jd\.com\/(client\.action\?functionId=signBean|user_new\/info\/GetJDUserInfoUnion\?) url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

# 获取钢镚签到body. 
^https:\/\/ms\.jr\.jd\.com\/gw\/generic\/hy\/h5\/m\/appSign\? url script-request-body https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js
```


![](/quantumultX/quantumultX-82.png)

![](/quantumultX/quantumultX-83.png)


在 `MitM` 添加hostname

```sh
ms.jr.jd.com, me-api.jd.com, api.m.jd.com
```

![](/quantumultX/quantumultX-84.png)

![](/quantumultX/quantumultX-85.png)


脚本里说要先登录网页版，再打开日历页，会提示获取到CK

::: tip 说明
* 京东主页登录页：https://home.m.jd.com/

* 京东日历签到页：https://bean.m.jd.com/bean/signIndex.action
:::

![](/quantumultX/quantumultX-86.png)

脚本往右滑，即可运行及查看

::: warning 注意
这里提示失败，是脚本的问题，大佬已经N年没有维护了

本次也仅是演示使用步骤，勿要较真
:::

![](/quantumultX/quantumultX-87.png)

顺便讲一下界面

![](/quantumultX/quantumultX-88.png)

以及Cron表达式

![](/quantumultX/quantumultX-89.png)


---

### HTTP请求(多脚本)

格式是 `*.json` ，我们直接拉仓库就行

点右上角第一个任务仓库，进入后添加系统默认的任务仓库，直接点好的

::: warning 注意
这里一定要先加系统的，否则无法使用
:::

::: details 点了取消，没有添加怎么办

复制json链接添加即可

```sh
https://raw.githubusercontent.com/crossutility/Quantumult-X/master/gallery.json

```
:::

![](/quantumultX/quantumultX-90.png)

仍然用 [野比大佬 @NobyDa](https://github.com/NobyDa) 的 [脚本仓库合辑](https://github.com/NobyDa/Script/blob/master/NobyDa_BoxJs.json) 演示

```sh
https://raw.githubusercontent.com/NobyDa/Script/master/NobyDa_BoxJs.json
```


![](/quantumultX/quantumultX-91.png)

添加成功后，其他脚本点击 `+` 按需添加

::: tip 说明
账号多的，可以用 [Boxjs,点我查看教程](./boxjs.md)
:::

![](/quantumultX/quantumultX-92.png)


::: danger 关于其他脚本
脚本的诞生是都基于活动，而活动是有时效性的

教程为了保证可用性，无法列出所有脚本

文章底部会放大佬的仓库，可以自行查找
:::



---

### HTTP抓取

就是抓包，抓取的数据用来去广告或者编写脚本

::: tip 界面说明
* 右上角第1个：开启 / 关闭抓包

* 右上角第2个：收藏数据

* 额外主机名：抓包时额外添加的MitM的hostname生效，关闭抓包时失效
:::


![](/quantumultX/quantumultX-93.png)

开启开关，随便打开网页或APP，看一下抓取的数据

::: tip 说明
* 关闭时：有 `斜杠 \`

* 开启时：没有 `斜杠 \`
:::

![](/quantumultX/quantumultX-94.png)

进入刚刚抓取的数据，右上角有搜索

![](/quantumultX/quantumultX-95.png)

搜索的信息如图

![](/quantumultX/quantumultX-96.png)

返回数据页，了解一下信息

![](/quantumultX/quantumultX-97.png)

那我们演示一下如何抓包屏蔽广告吧

在AppStore下载 [ZK助手](https://apps.apple.com/cn/app/id1498018958) 并安装

::: tip 说明
练手尽量挑简单的APP，相对好找

熟练了再干大厂的，阿里系腾讯系的都稍微复杂些
:::


![](/quantumultX/quantumultX-98.png)

广告有2种，开屏广告和弹窗广告，那就动手吧

![](/quantumultX/quantumultX-99.png)

主界面长按风车，也可以快捷的开启抓包

![](/quantumultX/quantumultX-100.png)

然后打开APP等它弹完广告后，关闭抓包，查看数据

![](/quantumultX/quantumultX-101.png)

分析下我的开屏广告，一个视频+下方APP推送广告

我直接搜最下的文字说明 `惊喜价格`

![](/quantumultX/quantumultX-102.png)

搜出几个结果，我们先看第一个数据，下拉到底部响应体 `JSON查看`

![](/quantumultX/quantumultX-103.png)

找到了一模一样的文字，那就是这个了


![](/quantumultX/quantumultX-104.png)


返回数据顶部，复制请求地址，要包含posid

然后用 [QX生成正则 丨 快捷指令](https://www.icloud.com/shortcuts/ca8bb02b30d144b3996c84211372a011) 来正则匹配转换

::: tip 说明
如果是其他APP，只要文字对得上，地址复制到哪就挨个试

比如：https://mi.gdt.qq.com/gdt_mview.fcg\?posid=3003491097068881
:::

![](/quantumultX/quantumultX-105.png)

转换完成后，自动复制到剪切板

![](/quantumultX/quantumultX-106.png)

我们粘贴到重写规则中

::: tip 说明
* 类型：`reject-200` (我是根据抓取的响应码改的，只要是reject就行)

* 匹配的URL：`^https:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg\?posid=3003491097068881`

```sh
# 快捷指令生成的，自己单独拷贝一下
^https:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg\?posid=3003491097068881 url reject-dict

hostname = mi.gdt.qq.com
```
:::

![](/quantumultX/quantumultX-107.png)

在MitM添加hostname，`mi.gdt.qq.com`

![](/quantumultX/quantumultX-108.png)

然后我们再来搞定弹窗广告，搜索 `查看详情`

![](/quantumultX/quantumultX-109.png)

搜索到一个结果后，看到了一模一样的文字，那就是它了

![](/quantumultX/quantumultX-110.png)

拷贝地址链接，生成正则

![](/quantumultX/quantumultX-111.png)

我们粘贴到重写规则中，hostname已经有了，就不加了

::: tip 说明
* 类型：`reject-200` (我是根据抓取的响应码改的，只要是reject就行)

* 匹配的URL：`^https:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg\?posid=2073246517409853`

```sh
# 快捷指令生成的，自己单独拷贝一下
^https:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg\?posid=2073246517409853 url reject-dict

hostname = mi.gdt.qq.com
```
:::

![](/quantumultX/quantumultX-112.png)

最后看一下效果吧，清爽很多

![](/quantumultX/quantumultX-113.png)



---

### HTTP Backend

对应配置文件中的 [[htp_backend]](#编辑) 模块

搭建一个本地服务器，以前是用于搭建Boxjs，但现在Boxjs改成重写了

现在基本也用不到了

![](/quantumultX/quantumultX-114.png)




## 配置文件

来来回回接触好几次了，估计也能猜到啥用处了

---

### 配置片段

常见于节点、分流和重写

实际是以远程订阅的方式，来管理本地的节点和规则

![](/quantumultX/quantumultX-115.png)

---

### 编辑

在圈X上添加的所有文件都在这里，一一对应，可添加并修改

::: tip 说明

* general：常规设置 (如：资源解析器)

* dns：域名系统

* policy：策略组

---

* server_local：本地节点

* server_remote：远程节点

* filter_local：本地分流

* filter_remote：远程分流

* rewrite_local：本地重写

* rewrite_remote：远程重写

---

* task_local：本地任务

* HTTP Backend：HTTP后端

* MitM：解密模块(hostname，主机名)
:::

![](/quantumultX/quantumultX-116.png)


---

### 导出配置

可以将自己的所有配置导出

![](/quantumultX/quantumultX-117.png)


---


### 导入配置


可以将已经导出的配置导入，或者别人分享的配置导入

![](/quantumultX/quantumultX-118.png)


---

### 下载配置

比较适合不愿意花时间了解圈X的人，直接下载别人的配置文件使用

::: danger 特别注意
下载任何配置会清空圈X的所有设置，请提前备份！！

* 备份节点：方便导入后更新、使用

* 备份MitM的 `passphrase` 和 `p12`：否则你需要重新安装证书

![](/quantumultX/quantumultX-119.png)

:::


![](/quantumultX/quantumultX-120.png)


* [@blackmatrix7](https://github.com/blackmatrix7/)：[blackmatrix7配置](https://github.com/blackmatrix7/ios_rule_script) 「推荐」

* [@墨鱼](https://github.com/ddgksf2013/Profile/)：[墨鱼配置](https://raw.githubusercontent.com/ddgksf2013/Profile/master/QuantumultX.conf) 「推荐」

* [@Orz-3](https://github.com/Orz-3/QuantumultX)：[小白配置](https://raw.githubusercontent.com/Orz-3/QuantumultX/master/Orz-3.conf)

* [@KOP-XIAO](https://github.com/KOP-XIAO/QuantumultX/)：[Shawn配置](https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/QuantumultX_Profiles.conf)

* [@limbopro](https://github.com/limbopro/Profiles4limbo/)：[毒奶配置](https://raw.githubusercontent.com/limbopro/Profiles4limbo/main/full.conf)

* [@fmz200](https://github.com/fmz200/wool_scripts/)：[张军配置](https://raw.githubusercontent.com/fmz200/wool_scripts/main/QuantumultX/config/lanren.conf)

* [@耳东橙](https://github.com/erdongchanyo/Rules/)：[耳东橙配置](https://raw.githubusercontent.com/erdongchanyo/Rules/main/Quantumult%20X/LazyConf/QuantumultX_EDC-Lazy.conf)

* [@奇心配置](https://github.com/zwf234/rules/)：[奇心配置](https://qxnav.com/rules/QuantumultX/qixin.conf)

* [@Sonmbs](https://github.com/Sonmbs/quantumult_X/)：[懒人配置](https://raw.githubusercontent.com/Sonmbs/quantumult_X/main/coconut.conf) 「停更」

* [@w37fhy](https://github.com/w37fhy/QuantumultX)：[懒人配置DIY版](https://raw.githubusercontent.com/w37fhy/QuantumultX/master/QuantumultX_diy.conf) 「停更」

* [@DivineEngine](https://github.com/DivineEngine/Profiles/)：[DivineEngine配置](https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Outbound.conf) 「停更」

* [@Tartarus2014](https://github.com/Tartarus2014/QuantumultX-Script/)：[Tartarus2014配置](https://raw.githubusercontent.com/Tartarus2014/QuantumultX-Script/main/QuanX.conf) 「停更」



---


### 示例配置

官方的示例，不懂使用可以在里面查看

![](/quantumultX/quantumultX-121.png)


---

### 初始化

::: danger 注意
会清空所有配置！且不可恢复！

如无必要！请谨慎使用！
:::

![](/quantumultX/quantumultX-122.png)





## 面板&工具栏

可以对首页的功能进行排序和样式的改变

![](/quantumultX/quantumultX-123.png)

底部的工具栏，可以改变功能

::: tip 说明
工具1和工具5，不可以改变！
:::

![](/quantumultX/quantumultX-124.png)


## 其他设置

可以改变模式，建议分流；出站接口，默认使用WIFI，无WIFI后使用蜂窝

::: tip 说明
资源默认保存在 `icloud云盘` ，关闭即保存在 `我的iPhone`
:::

![](/quantumultX/quantumultX-125.png)

通知、VPN和GeoLite2皆保持默认即可，有需要再开启

::: details 关于 HTTP 和 SOCKS5 代理的使用
即开启节点分享，仅限同局域网下

* 圈X连接代理，手机设置开启`个人热点`

* 圈X打开 `HTTP代理开关`

* 其他手机连接热点，点击wifi旁边的 `i` 

* 下拉到底 `HTTP代理` 改成手动，输入服务器ip和端口
:::

![](/quantumultX/quantumultX-126.png)


## 界面补充

网络活动中，可以查看已经重写的链接状态

![](/quantumultX/quantumultX-127.png)

以及正常的网络连接状态，长按即进入抓包页面

![](/quantumultX/quantumultX-128.png)

日志页是当天的日志，长按可查看近期

![](/quantumultX/quantumultX-129.png)



## 相关脚本

* [@KOP-XIAO：资源解析器](https://github.com/KOP-XIAO/QuantumultX) 丨 [查看流媒体解锁](https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/UI-Action.json)

* [@blackmatrix7：分流规则](https://github.com/blackmatrix7/ios_rule_script)

* [@Orz-3：图标](https://github.com/Orz-3/mini)

* [@Koolson：图标](https://github.com/Koolson/Qure)

* [@limbopro：毒奶](https://limbopro.com/)

* [@NobyDa：野比大佬](https://github.com/NobyDa)

* [@lucky：正则简介](https://qx.atlucky.me/zheng-ze-jian-jie)