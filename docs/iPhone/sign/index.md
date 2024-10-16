# iPhone签名工具介绍



## 简介

正常情况下，苹果安装应用，只能通过商店搜索下载

但是，苹果对开发App的个人或企业提供了付费证书，用证书给ipa包签名，就可以安装使用了


## 途径

* 证书+签名工具：卖证书的人购买了苹果证书，然后将此证书通过收费共享给多人来使用

* 自签工具：用Apple ID签名安装，7天有效期后会掉签

* 免签工具：无需证书，用不掉签


## 签名工具

带 ⭐ 的是有教程的，点击即可跳转

<script setup>
import { sign } from '/.vitepress/theme/navlist/sign'
</script>

<navlist v-for="{ items } in sign" :items="items" />
