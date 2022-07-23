## 服务器购买及网站初成


更新时间：2022-7-23


新手小白看看，老鸟没啥可看的



## 国内服务器

> 新手还是用名气大的，等熟练了再用便宜的

[腾讯云](https://cloud.tencent.com/)

[阿里云](https://www.aliyun.com/)

[华为云](https://activity.huaweicloud.com/)

[天翼云](https://www.ctyun.cn/)



## 国外服务器

> 现页面已支持切换中文了，也不难，机场首选

[Vultr](https://www.vultr.com/)



## 演示步骤


### 1.购买服务器

因为我有参加了[腾讯的轻量云服务器轻量无忧计划](https://cloud.tencent.com/act/lighthouse?fromSource=gwzcw.1293314.1293314.1293314)

可以终身180/年续费，平时偶尔来个券，150左右还是很香的

但是活动现在已结束了


先进腾讯云官网：https://cloud.tencent.com/


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/tencent.png)


服务器在产品里，`云服务器`或者`轻量服务器`，个人用轻量的比较便宜

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-1.png)


轻量服务器这里进，有活动会便宜不少，新人的力度更大

> 100-200左右一年，就不用挑了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-2.png)



这里地域选离自己近的，镜像我习惯使用`CentOS 7.6`，需要宝塔我自己搭

> 懒人可以选集成好的镜像

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-3.png)



选好后，支付订单即可！





### 2.查看及使用服务器


右上角控制台进入，看我们刚买的服务器

> 提示实名，就自己实名，不用演示吧

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-4.png)


云产品-轻量应用服务器

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-5.png)


这个就是你的服务器公网IP，别随意暴露给别人哦，以免被打

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-6.png)


这里我们点更多-管理，简单说下服务器

> 这里的登录，是通过腾讯自带的WebShell登录服务器，后续会说到其他登录工具

> 重置密码，不是腾讯的登录密码，是服务器的root密码

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-7.png)


这就是服务器的管理页面了，平时用的最多的就是防火墙，用来开放端口

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-8.png)


端口根据你需求开放，不要全开，不安全

> 来源默认都是`0.0.0.0/0`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-9.png)





### 3.域名（可选）

> 有些只是脚本调试，不建站的，可不用买

腾讯云首页-产品-域名注册


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-10.png)


自己想一个域名搜索，被注册了就换一个，直到有中意的

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-11.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-12.png)


购买完成后，右上角控制台-云产品-域名注册

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-13.png)


这样就看到我们的域名了，我们先进行域名解析

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-14.png)


直接点快速添加解析，记录值填入我们服务器的公网IP即可。自动生成的`@`和`www`记录，无论是通过域名访问还是www就都可以访问了

> 我这里添加了2个二级域名，即`hi`和`dh`，就是在域名前的前缀，如hi.yangpaifeng.com，需要几个自己添加就行了，免费的


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-15.png)




### 4.SSL证书（可选）

> 有些只是脚本调试，不建站的，可不用，网站搭建好了再弄

控制台-云产品-SSL证书

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-16.png)


我的证书-申请免费证书，最多申请50张，到期了也能恢复额度

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-17.png)

申请免费的就行，付费的咱也用不起

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-18.png)


填入你的域名，二级域名就写二级的，邮箱，下一步点点点，等通过就行了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-19.png)


通过后就可以下载了，根据自己的需求下载相应的证书，因为我用的宝塔，我下载的Nginx


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-20.png)


下载的压缩包里有后缀为`KEY`的秘钥和`PEM`格式的证书，鼠标右键-记事本打开，复制了分别粘贴进去，记得开启强制HTTPS，最后保存

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-21.png)


这样我们的网页就不一样了，对比一下

> 就是看着可信度高点，骗子网站可不一定有

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-22.png)




### 5.备案（可选）

> 有些只是脚本调试，不建站的，可不用买，网站搭建好了再备案

控制台-云产品-网站备案，这个就没技巧而言了，按步骤实名即可

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-23.png)


注意国内一般不允许个人做导航，非要做可以考虑国外服务器。网站名称一般写个人生活日志之类的，比较容易通过，这样一个网站就初成了

> 腾讯客服会电话给你，不用慌，按你想的说就行了，客服也会给你些建议，最后才完成提交整个备案。

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/ECS/ecs-24.png)




## 千里之行，始于足下


从来不鼓励知难而退，复杂也只是简单的集合体




## 特别鸣谢

* [腾讯云](https://cloud.tencent.com/)

* [阿里云](https://www.aliyun.com/)

* [华为云](https://activity.huaweicloud.com/)

* [天翼云](https://www.ctyun.cn/)

* [Vultr](https://www.vultr.com/)