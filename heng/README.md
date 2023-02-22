## 搭建专属自己的记仇小本本

</br>

利用码云Issues作为数据库的记仇小本本，独一无二的简约设计，支持富文本

[@N0ts](https://github.com/n0tssss/) 大佬耐心的指导最终完成了部署，十分的感谢

如果和我一样的小白，也喜欢搭建并且成功了，请务必给大佬点个星星！！

</br>
</br>


## Demo

</br>

* [演示](https://heng.n0ts.cn/)

* [仓库](https://github.com/n0tssss/heng)

* [后端](https://gitee.com/n0ts/gitee-api)


</br>
</br>


## 准备条件

* 服务器

* 域名

* 工具：Xshell终端(也可以用宝塔内置的)

* 安装宝塔

* 安装nodejs

</br>
</br>


## 开始部署

</br>

### 1.安装git

安装git

> 防止有些人没有安装，等会下不了

```
yum install git
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-01.png)


### 2.克隆仓库

gitee仓库：https://gitee.com/n0ts/gitee-api

> 内有 `Gitee API 部署教程.docx` 很详细，参考着看就行了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-02.png)


```
cd /www/wwwroot
git clone https://gitee.com/n0ts/gitee-api.git
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-03.png)


### 3.安装依赖

依赖安装完成，测试运行一下

> 端口默认3000，可以自己在config.js里改，如没有其他项目冲突就默认


```
cd gitee-api
npm i
```


```
node main.js
```


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-04.png)





### 4.创建git私人令牌


进入自己的gitee主页 - 私人令牌 -生成令牌

> 按照图示给与权限，懒的全给

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-05.png)

记住你的秘钥，关闭后就无法再次查看了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-06.png)



### 5.配置config

按需修改 `password` & `端口` & `AccessToken` 保存，其他不要动

> 密码要记住！搭建完成后，新增内容的时候需要输入的
>
> `accessToken` 就是我们申请的私人令牌秘钥

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-07.png)





### 6.创建node项目

进宝塔-网站-node项目，安装node管理器

> 已经安装的直接看下一步

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-08.png)


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-09.png)

这里更新下列表，选择最新的稳定版安装即可

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-10.png)



添加node项目，选择gitee-api目录,按要去设置提交

> 项目名称：随便
>
> 启动项目：自定义启动命令 `node main.js`
>
> 端口：3000


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-11.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-12.png)

添加成功后，点设置-域名管理，添加一个域名

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-13.png)

网站建议是开启https，先开`外网隐射`

> 注意你的api网站和最终部署的网站，要一致；要么都是 `https` 或者 `http`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-14.png)

添加 `SSL` 证书，建议去服务器申请免费的SSL证书

> 腾讯云为例：控制台-云产品-SSL证书-我的证书-申请免费证书
>
> 嫌麻烦也可以直接用测试证书和Let's Encrypt

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-15.png)

访问搭建好的api网站，作者的图片挂了，像这个就可以了

> 我的是https://api.yiov.com ，如果不是https就是没开启

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-16.png)



### 7.部署

先添加一个站点，输入你的域名，数据库不用创建

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-17.png)

进入目录，删除掉多余的文件

> `.user.ini` 要删两次

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-18.png)


上传网站的压缩包-解压-将解压的文件剪切到域名文件夹下，就可以了

> 多余的压缩包和空文件夹删掉

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-19.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-20.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-21.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-22.png)


接下来我们来配置config/config.js文件，按需修改保存

> 后端地址的/api/gitee不要删，自己的地址加在前面

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-23.png)

在gitee新建一个仓库，私有/公开都可以，建议私有

> owner：填自己的gitee账户名
>
> repo：填创建的仓库名

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-24.png)

访问看一下，这样就可以了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-25.png)


</br>
</br>


## 常见问题

### 1.添加的时候密码是多少

第5步的时候配置config，自己设置的 `password` ，自己在后台文件夹 `git-api - config/config.js`里看

### 2.一直提示 记仇也要认真哦

记仇的标题旁有个 `你是？`，选择佩奇或者乔治，再记录就可以了

### 3.如何删掉记录

因为使用的仓库 `Issues` ，直接进仓库去删即可

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/heng/heng-26.png)

### 4.记录的时候一直转圈，记不上

没有开https，再说一次无论你api网站和记录网站，要保持一致
