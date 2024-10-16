# 目录索引


<script setup>
import { gfw } from '/.vitepress/theme/lists/gfw'
import { daily } from '/.vitepress/theme/lists/daily'
import { computer } from '/.vitepress/theme/lists/computer'
import { mi } from '/.vitepress/theme/lists/mi'
import { iPhone } from '/.vitepress/theme/lists/iPhone'
import { tg } from '/.vitepress/theme/lists/tg'
import { website } from '/.vitepress/theme/lists/website'
</script>


## 科学上网

<lists v-for="{ items } in gfw" :items="items" />



## 日常生活

<lists v-for="{ title , items } in daily" :title="title" :items="items" />



## 电脑相关

<lists v-for="{ title , items } in computer" :title="title" :items="items" />




## 小米相关

<lists v-for="{ items } in mi" :items="items" />




## 苹果相关

<lists v-for="{  title , items } in iPhone" :title="title" :items="items" />




## Telegram

<lists v-for="{ items } in tg" :items="items" />





## 网站搭建

<lists v-for="{  title , items } in website" :title="title" :items="items" />

### 基础


* [服务器的介绍](../website/Server/)

   * [VMware虚拟机安装及使用](../website/VMware)

   * [腾讯云服务器的购买及使用](../website/Server/tencent)

   * [Serv00免费服务器注册](../website/Server/Serv00.md)

   * [wordpress免费主机](../website/Server/wordpress.md)

   * [Hax免费服务器](../website/Server/hax.md)

* [域名的介绍](../website/domain/)

    * [腾讯云域名注册](../website/domain/tencent.md)

    * [eu.org注册免费域名](../website/domain/eu.md)

    * [us.kg注册免费域名](../website/domain/uskg.md)

    * [ClouDNS的注册及使用](../website/domain/cloudns.md)

    * [L53注册免费域名](../website/domain/l53.md)

    * [com.mp注册免费域名](../website/domain/commp.md)

    * [DNSExit注册免费域名](../website/domain/dnsexit.md)


* [shell的介绍](../website/shell/)

    * [Xshell的安装及使用](../website/shell/Xshell.md)

    * [Termius的安装及使用](../website/shell/Termius.md)

    * [JuiceSSH的安装及使用](../website/shell/JuiceSSH.md)

* [安装宝塔面板](../website/BT)

* 环境安装

    * [node.js的安装教程](../website/nodejs)

    * [Go环境的安装教程](../website/go)

* [SSL证书](../website/ssl/)

    * [宝塔面板申请SSL证书](../website/ssl/bt.md)

    * [httpsok](https://httpsok.com/doc/guide/apply.html)

    * [acme.sh申请SSL证书](../website/ssl/acmesh.md)

    * [Zerossl申请SSL证书](../website/ssl/zerossl.md)

    * [来此加密申请SSL证书](../website/ssl/laici.md)

    * [腾讯云申请SSL证书](../website/ssl/tencent.md)

### WP相关

* [wordpress详细安装教程](../website/wordpress)

* [Webstack导航从零搭建](../website/WebStack)

* [Onenav导航网页的搭建](../website/onenav)


### Docker相关

* [Docker的安装教程](../website/docker)

* [Halo博客的搭建](../website/Halo)

* [Alist搭建自己的专属网盘](../website/Alist)

* [青龙面板的安装及使用](../website/qinglong)

* [dockerhub上传本地镜像](../website/dockerhub)



### 静态托管

* [静态托管介绍](../website/pages/)

* [Github注册及使用](../website/pages/github)

* [Vercel静态部署网站](../website/pages/vercel)

* [GitLab注册及使用](../website/pages/gitlab)

* [git使用及上传代码到仓库](../website/pages/git)


### 拓展工具


* [VSCode安装步骤](../website/VSCode)

* [简单的个人主页搭建](../website/home)

* [Cloudflare的注册使用](../website/cloudflare)

* [UptimeRobot的注册及使用](../website/uptimerobot)

* [Replit的注册及使用](../website/Replit)

* [搭建Favicon图标API](../website/Favicon)

* [搭建专属的记仇小本本](../website/heng)





### 其他

* [浅谈内网穿透](../website/NAT)

* [闲置iPhone搭建静态网站](../website/ish)

* [Centos系统切换图形界面](../website/Centos)







