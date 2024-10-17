# 搭建专属的记仇小本本



## 简介

利用码云Issues作为数据库的记仇小本本，简约设计，支持富文本

::: tip 说明
十分的感谢 [@N0ts](https://github.com/n0tssss/) 大佬耐心的指导

搭建成功，别忘了给请大佬点个星星！！
:::

![](/heng/heng-25.png)




## Demo

* 演示：https://heng.n0ts.top/

* 仓库：https://github.com/n0tssss/heng 或 https://gitee.com/n0ts/heng

* 后端：https://gitee.com/n0ts/gitee-api




## 准备条件

* [服务器1台](./Server/)

* [域名1个](./domain/)

* [安装shell工具](./shell/)

* [安装宝塔面板](./BT.md)

* [安装nodejs](./nodejs.md)





## 部署API后端

shell登录服务器，安装git

::: tip 说明
防止有些人没有安装，等会下不了
:::

```sh
yum install git
```

![](/heng/heng-01.png)


API后端：[https://gitee.com/n0ts/gitee-api](https://gitee.com/n0ts/gitee-api)

::: tip 说明
内有 `Gitee API 部署教程.docx` 很详细，参考着看就行了
:::

![](/heng/heng-02.png)


```sh
cd /www/wwwroot
git clone https://gitee.com/n0ts/gitee-api.git
```

![](/heng/heng-03.png)



安装依赖

```sh
cd gitee-api
npm i
```


完成后,测试运行一下

::: tip 说明
端口默认3000，可以自己在 `config.js` 里改，如没有其他项目冲突就默认
:::

```sh
node main.js
```


![](/heng/heng-04.png)




## 创建私人令牌


进入自己的gitee主页 - 私人令牌 -生成令牌

::: tip 说明
按照图示给与权限，懒的全给
:::

![](/heng/heng-05.png)

记住你的秘钥，关闭后就无法再次查看了

![](/heng/heng-06.png)



## 配置config

按需修改 `password` & `端口` & `AccessToken` 保存，其他不要动

::: warning 注意
密码要记住！搭建完成后，新增内容的时候需要输入的

`accessToken` 就是我们申请的私人令牌秘钥
:::

![](/heng/heng-07.png)





## 创建node项目

进宝塔-网站-node项目，安装node管理器

::: tip 说明
已经安装的直接看下一步
:::

![](/heng/heng-08.png)


![](/heng/heng-09.png)

这里更新下列表，选择最新的稳定版安装即可

![](/heng/heng-10.png)



添加node项目，选择gitee-api目录,按要去设置提交

::: tip 说明
项目名称：随便

启动项目：自定义启动命令 `node main.js`

端口：3000 (改过的用修改的端口)
:::

![](/heng/heng-11.png)

![](/heng/heng-12.png)

添加成功后，点设置-域名管理，添加一个域名

![](/heng/heng-13.png)

网站建议是开启https，先开`外网隐射`

::: tip 说明
注意你的api网站和最终部署的网站，要一致；要么都是 `https` 或者 `http`
:::

![](/heng/heng-14.png)

添加 `SSL` 证书，建议去服务器申请免费的SSL证书

::: tip 说明
腾讯云为例：控制台-云产品-SSL证书-我的证书-申请免费证书

嫌麻烦也可以直接用测试证书和Let's Encrypt
:::

![](/heng/heng-15.png)

访问搭建好的api网站，像这个就可以了，作者的图片挂了

::: tip 说明
我的是 `https://api.yiov.com` ，如果不是https就是没开启
:::

![](/heng/heng-16.png)




## 部署

先添加一个站点，输入你的域名，数据库不用创建

![](/heng/heng-17.png)

进入目录，删除掉多余的文件

::: tip 说明
`.user.ini` 要删两次
:::

![](/heng/heng-18.png)


仓库下载：https://github.com/n0tssss/heng

下载上传-解压-将解压的文件剪切到域名文件夹下，就可以了

::: tip 说明
多余的压缩包和空文件夹删掉
:::

![](/heng/heng-19.png)

![](/heng/heng-20.png)

![](/heng/heng-21.png)

![](/heng/heng-22.png)


接下来我们来配置 `config/config.js` 文件，按需修改保存

::: tip 说明
后端地址的 `/api/gitee` 不要删，自己的地址加在前面
:::

![](/heng/heng-23.png)

在gitee新建一个仓库，私有/公开都可以，建议私有

::: tip 说明
owner：填自己的gitee账户名

repo：填创建的仓库名

然后填入 `config.js` 中保存
:::

![](/heng/heng-24.png)

访问看一下，这样就可以了

![](/heng/heng-25.png)






## 常见问题

::: details 添加内容密码

配置config自己设置的 `password` ，自己在后台文件夹 `git-api - config/config.js`里看

:::




::: details 一直提示 记仇也要认真哦

选择记仇人即可，记仇的标题旁有个 `你是？`，选择佩奇或者乔治

:::



::: details 如何删掉记录

因为使用的仓库 `Issues` ，直接进仓库去删即可

![](/heng/heng-26.png)

:::



::: details 记录的时候一直转圈

没有开https，再说一次无论你api网站和记录网站，要保持一致

:::