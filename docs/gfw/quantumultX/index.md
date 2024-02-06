# 圈X上手教程

::: warning 更新时间
最近更新：2022-1-25
:::

参考教程：

https://www.notion.so/Quantumult-X-1d32ddc6e61c4892ad2ec5ea47f00917


![](./quantumultX.png)





## 1.主界面说明


主界面如下图都一一注明了，基本操作都是点按/长按/左滑/右滑动

![](./quantumultX-1.png)



## 2.连通圈X


圈X的使用全程需要扶梯子，就顺道演示下如何用机场翻墙

::: tip 说明
主要用于普及订阅知识，机场仅供参考，后续有条件换好点的

[点我查看白嫖机场](../channel/)
:::

免费机场：iKUUU，注册就有50G

官网：https://ikuuu.me/

![](./IKUUU.png)


下拉，找到V2Ray，点击会复制到剪切板

![](./IKUUU-1.png)


因为圈X不直接支持这种格式，我们用订阅转化一下

官网：[https://dove.589669.xyz/web](https://dove.589669.xyz/web)

![](./quantumultX-2.png)



然后来到我们的圈X，点右下角风车-节点-引用（订阅）

![](./quantumultX-3.png)


标签随便，资源路径填我们 `刚转换的订阅链接` ，右上角保存即可


![](./quantumultX-4.png)


回到主界面，就能看到我们添加成功的节点了







## 3.资源解析器


有了资源解析器的加持，以后都不会用到转换链接了，它会自动本地处理转换完成

随便选一个速度可以的节点，打开圈X开关，点风车-下拉到底部，配置文件-编辑

![](./quantumultX-5.png)


在 `[general]` 下面粘贴资源解析器代码，右上角保存

```js
resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js
```

::: tip 说明
资源解析器来源：[https://github.com/KOP-XIAO/QuantumultX/](https://github.com/KOP-XIAO/QuantumultX/)
:::

![](./quantumultX-6.png)




风车-节点-引用（订阅）-资源解析器的下方，有灰色介绍字体就说明成功了

![](./quantumultX-7.png)


只要是导入节点，都要开启开关，否则导入失败





## 4.节点


Quantumult X共支持5种类型的格式：SS，SSR，VMess，HTTP(s)，Trojan

* 一次添加一个节点，对应配置文件中的 `[server local]` 模块

::: tip 说明
添加：只支持ss协议

URI：支持ss、ssr以及圈x格式的vmess/https/trojan的节点

扫码：支持ss、ssr以及圈x格式的vmess/https/trojan的节点二维码
:::

* 一次添加多个节点，对应配置文件中的 `[server remote]` 模块

**引用（订阅）是最常用的，有资源解析器的加持，非常强大**

::: tip 说明
引用（订阅）：支持ss、ssr订阅，以及圈X格式的vmess/https/trojan的订阅
:::

![](./quantumultX-8.png)


自己找好用的机场或者免费分享节点的tg群都可以，演示一遍，粘贴订阅链接-开启资源解析器-保存


![](./quantumultX-9.png)




## 5.分流

相对复杂的知识，涉及到分流规则和策略组

::: tip 说明
分流规则是为了访问不同的网页或App，自动走不同的节点；策略组是为了把节点进行归类

那么问题来了，这么多策略组，我要如何写又如何归类，反正我第一次看到这里头都大了，一度想放弃，那就和我一样直接看5.4小白配置吧
:::



### 5.1分流规则

* 一次添加一个规则，对应配置文件中的 [**filter_local**] 模块

> 添加：不常用也不推荐

* 一次添加多个规则，对应配置文件中的 [**filter_remote**] 模块

> 引用（订阅）：灵活更细分，格式：*.list


![](./quantumultX-10.png)



* 神机规则（最强规则，其他配置也是按它的修改而来）

[https://github.com/DivineEngine/Profiles/tree/master/Quantumult/Filter](https://github.com/DivineEngine/Profiles/tree/master/Quantumult/Filter)

![](./rule-1.png)

![](./rule-2.png)


获取到list链接，粘贴到引用里即可

![](./quantumultX-11.png)


更多的规则，请自己挨个导入，另外在配置文件中可使用 force-policy 来强制使用策略偏好,如

> tag - 标签；force-policy - 强制指定策略组；enabled - 是否生效

```
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Extra/Apple/Apple.list, tag=Apple服务, force-policy=🍎 苹果服务,enabled=true
```




### 5.2策略组

策略组需要配合分流规则使用，可包含多个节点和策略组，对应配置文件中的 `[policy]` 模块


* Quantumult X自带3种策略：PROXY（代理）、DIRECT（直连）、REJECT（拒绝）

* Quantumult X有策略类型：static、available、Round-Robin

::: tip 说明
static 静态策略：需自己手动选择路线/子策略组

available 健康检查策略：从第一个节点开始检查是否可用，直到选择可用节点

Round-Robin 轮询策略：按网络请求轮流使用所有节点；
:::

我们在神机规则中找一个策略组演示一下

```
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Extra/Apple/Apple.list
```

风车-分流-引用，添加后主界面的节点变成了策略组的图标

![](./quantumultX-12.png)


长按这个策略组-编辑，进入组查看，根据需要添加，访问苹果走哪些节点

![](./quantumultX-13.png)




### 5.3策略组图标

主要是美化作用，喜欢折腾的可以弄，否则无视

::: tip 说明
图片格式：*.PNG（透明背景）

图片尺寸：108*108像素

本地引用路径：我的iPhone/Quantumultx/Images

远程引用路径：iCloud/Qantumult X/Images，需要在记得去quantumultX其他设置中开启iCloud
:::

图片在对应的策略组后写上图片链接，在 `[policy]` 模块添加，格式如：

```
static=YouTube,  节点1, 节点2 , 策略组1 , 策略组2 , img-url= https://raw.githubusercontent.com/crossutility/Quantumult-X/master/icon-samples/youtube.PNG
```

#### 制作icon图标的网站

* icons8：[https://igoutu.cn/icons/set/youtube](https://igoutu.cn/icons/set/youtube)

* 阿里iconfont：[https://www.iconfont.cn/](https://www.iconfont.cn/)


#### 收集一些好用的icon库

* [https://github.com/Orz-3/mini](https://github.com/Orz-3/mini)

* [https://github.com/Koolson/Qure](https://github.com/Koolson/Qure)




### 5.4小白/懒人配置

深度理解了分流规则和策略组就可以自己写规则了，反正我不会，我选择小白配置

删除之前添加的规则，跟我做，下面2个均可

::: danger 注意
注：使用小白/懒人配置会清空已保存的圈X所有设置，请提前备份
:::


| 配置 | 路径 |
|:-:|:-|
| [小白配置](https://github.com/Orz-3/QuantumultX) | [https://raw.githubusercontent.com/Orz-3/QuantumultX/master/Orz-3.conf](https://raw.githubusercontent.com/Orz-3/QuantumultX/master/Orz-3.conf) |
| [懒人配置](https://github.com/Sonmbs/quantumult_X/) | [https://raw.githubusercontent.com/Sonmbs/quantumult_X/main/coconut.conf](https://raw.githubusercontent.com/Sonmbs/quantumult_X/main/coconut.conf)
| [懒人配置DIY版](https://github.com/w37fhy/QuantumultX) | [https://raw.githubusercontent.com/w37fhy/QuantumultX/master/QuantumultX_diy.conf](https://raw.githubusercontent.com/w37fhy/QuantumultX/master/QuantumultX_diy.conf) |
| [神机出国配置](https://github.com/DivineEngine/Profiles/) | [https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Outbound.conf](https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Outbound.conf)
| [神机回国配置](https://github.com/DivineEngine/Profiles/) | [https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Inbound.conf](https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Inbound.conf)
| [墨鱼配置](https://github.com/ddgksf2013/ddgksf2013) | [https://github.com/ddgksf2013/Profile/raw/master/QuantumultX.conf](https://github.com/ddgksf2013/Profile/raw/master/QuantumultX.conf)
| [Shaw配置](https://github.com/KOP-XIAO/QuantumultX/) | [https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/QuantumultX_Profiles.conf](https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/QuantumultX_Profiles.conf)
| [毒奶配置](https://github.com/limbopro/Profiles4limbo/) | [https://raw.githubusercontent.com/limbopro/Profiles4limbo/main/full.conf](https://raw.githubusercontent.com/limbopro/Profiles4limbo/main/full.conf)
| [莫离配置](https://github.com/GodMoli/QuanX) | [https://raw.githubusercontent.com/GodMoli/QuanX/main/File/Auto.conf](https://raw.githubusercontent.com/GodMoli/QuanX/main/File/Auto.conf)
| [张军配置](https://github.com/fmz200/wool_scripts/) | [https://raw.githubusercontent.com/fmz200/wool_scripts/main/QuantumultX/config/lanren.conf](https://raw.githubusercontent.com/fmz200/wool_scripts/main/QuantumultX/config/lanren.conf)
| [耳东橙配置](https://github.com/) | [https://raw.githubusercontent.com/erdongchanyo/Rules/main/Quantumult%20X/LazyConf/QuantumultX_EDC-Lazy.conf](https://raw.githubusercontent.com/erdongchanyo/Rules/main/Quantumult%20X/LazyConf/QuantumultX_EDC-Lazy.conf)
| [烧烤哥配置](https://github.com/Tartarus2014/QuantumultX-Script/) | [https://raw.githubusercontent.com/Tartarus2014/QuantumultX-Script/main/QuanX.conf](https://raw.githubusercontent.com/Tartarus2014/QuantumultX-Script/main/QuanX.conf)
| [GeQ1an配置](https://github.com/GeQ1an/Rules/) | [https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/QuantumultX.conf](https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/QuantumultX.conf)
| [奇心配置](https://github.com/rules/QuantumultX/) | [https://qxnav.com/rules/QuantumultX/qixin.conf](https://qxnav.com/rules/QuantumultX/qixin.conf)
| [奇心大陆配置](https://github.com/zwf234/rules/) | [https://raw.githubusercontent.com/zwf234/rules/master/QuantumultX/qixin.conf](https://raw.githubusercontent.com/zwf234/rules/master/QuantumultX/qixin.conf)
| [奇心海外配置](https://github.com/zwf234/rules/) | [https://raw.githubusercontent.com/zwf234/rules/master/QuantumultX/overseas.conf](https://raw.githubusercontent.com/zwf234/rules/master/QuantumultX/overseas.conf)



风车-配置文件-下载，粘贴链接保存

![](./quantumultX-14.png)

这里就替换了自己原先的配置文件了，主界面也清空了！

我们重新把订阅节点添加进来，好使用

![](./quantumultX-15.png)



打开重写和Mitm开关，重新安装证书，请看 [6.1安装证书](#_6-1-安装证书 ) 的操作

::: tip 说明
如果之前安装过证书的，顺手删掉哈
:::

安装完成后，我们导入订阅节点，打开圈X开关，全部更新

![](./quantumultX-16.png)


我们开启分流规则，就可以愉快的使用了

![](./quantumultX-17.png)





## 6.重写和Mitm

* 添加：本地重写，对应配置文件中的[**rewrite_local**]模块

* 引用：远程重写，对应配置文件中的[**rewrite_remote**]模块，格式*.conf

这是很常用的功能了，去广告跑脚本这些


![](./quantumultX-18.png)




### 6.1 安装证书


打开 `重写` 和 `MitM` 开关，并生成证书

![](./quantumultX-19.png)


然后点配置证书-跳转浏览器 允许

![](./quantumultX-20.png)


设置-通用-描述文件与设备管理，找到圈X-安装

![](./quantumultX-21.png)

![](./quantumultX-22.png)


设置-通用-关于本机-证书信任设置

![](./quantumultX-23.png)


到这里，就完成了证书的安装



### 6.2 去广告的演示


其实小白/懒人配置里其实都已经集成了，我这里演示一下其他大佬的订阅怎么用


比如`毒奶`的去广告：[https://limbopro.com/](https://limbopro.com/)

风车-配置文件 编辑，我们来这里粘贴

![](./quantumultX-24.png)


右上角跳转到 远程分流 `[filter_remote]` 添加，保存

```
http://limbopro.xyz/Adblock4limbo.list, tag=毒奶特供, force-policy=reject, enabled=true
```

右上角跳转到 远程重写 `[rewrite_remote]` 添加，保存

```
http://limbopro.xyz/Adblock4limbo.conf, tag=毒奶特供, enabled=true
```

![](./quantumultX-25.png)


这样在重写界面，我们就能看到毒奶的脚本了

![](./quantumultX-26.png)

::: tip 说明
其他规则请参照脚本作者说明
:::



## 7.工具&分析

这个就是我们常见的用来跑js脚本


![](./quantumultX-27.png)


### 7.1 单脚本任务

格式是 *.js，单脚本运行，以野比大佬 @NobyDa 的脚本为例

```js
https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js
```

我们在浏览器打开这个脚本，根据要求在 `task_local` 、 `rewrite_local` 和 `mitm` 添加，然后保存

![](./quantumultX-28.png)

::: warning 注意
注：如果这里已经有hostname=了，就只复制主机名，添加在后面，用逗号隔开
:::

![](./quantumultX-29.png)


脚本里说打开网页获取CK，登录一次账号后再粘贴进入一次，即可获取

```
https://home.m.jd.com/myJd/newhome.action
```
![](./quantumultX-30.png)


我们来运行看看，脚本往右滑，运行，查看

![](./quantumultX-31.png)


顺便讲一下界面

![](./quantumultX-32.png)



### 7.2 多脚本任务

格式是 `*.json` ，有些大佬已经写好了，我们直接拉仓库


点右上角任务仓库，进入后默认添加了系统默认的任务仓库，直接点好的

::: tip 说明
这里一定要先加系统的，后面才能加其他大佬的
:::

![](./quantumultX-33.png)


野比大佬  [@NobyDa](https://github.com/NobyDa) 我又来了

```json
https://raw.githubusercontent.com/NobyDa/Script/master/NobyDa_BoxJs.json
```

![](./quantumultX-34.png)


这样我们就添加成功了，其他脚本可以按需添加。添加后再任务栏，右滑查看脚本，如何获取数据即可


![](./quantumultX-35.png)



有些多账号管理的可以用boxjs，最后说一下Cron表达式吧，看图，还不懂就度娘吧

![](./quantumultX-36.png)




## 8.配置文件及设置

终于最后了，好家伙我真累了

这里没啥好说的了，已经来来回回接触它几次了，看一下吧

![](./quantumultX-37.png)


就是圈X的核心配置文件了，关于其他设置里，开不开启开启iCloud，看个人喜好吧

::: tip 说明
开启iCloud，脚本都会在iCloud云盘，方便换设备了使用

不开启，默认在我的iphone文件夹里，方便保存脚本

本地使用也可用 `Working Copy` 软件Fetch脚本，前提在我的iphone里建一个文件夹
:::

![](./quantumultX-37.png)


篇幅真的长，上手还是有点门槛的！收工！



## 相关及其他脚本

* [@KOP-XIAO](https://github.com/KOP-XIAO/QuantumultX)「资源解析器」

* [@DivineEngine](https://github.com/DivineEngine/Profiles/tree/master/Quantumult/Filter)「神机规则」

* [@Orz-3](https://github.com/Orz-3/QuantumultX)「小白配置」

* [@w37fhy](https://github.com/w37fhy/QuantumultX)「懒人配置」

* [@Orz-3](https://github.com/Orz-3/mini)「Orz-3图标」

* [@Koolson](https://github.com/Koolson/Qure)「Koolson图标」

* [@limbopro](https://limbopro.com/)「毒奶」

* [@NobyDa](https://github.com/NobyDa)「野比大佬」

* 查看流媒体解锁：[https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/UI-Action.json](https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/UI-Action.json)