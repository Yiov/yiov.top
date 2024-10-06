# Serv00免费主机注册




## 简介

波兰主机商 [MyDevil.net](http://www.mydevil.net/) 推出的免费空间服务

官网：https://www.serv00.com/

![](/server/serv00/serv00-01.png)


## 特色

* 存储：512MB+3GB容量，不限单个文件大小

* 流量：不限月流量

* 系统：FreeBSD（类UNIX系统）

* 域名：提供免费域名1个 `你的用户名.serv00.net`，也可绑定自己域名

* SSL证书：[Let's Encrypt](https://letsencrypt.org/zh-cn/)

* 有效期：10年（90天内必须登录一次，含SHH登录）


## 注册

点击官网的 `Register an account` 进入 [offer页面](https://www.serv00.com/offer)

![](/server/serv00/serv00-02.png)


点击 [Create account](https://www.serv00.com/offer/create_new_account) 创建账户

![](/server/serv00/serv00-03.png)

输入姓名邮箱等信息，这里的答案是：`0`，创建

![](/server/serv00/serv00-04.png)

成功后会将账号、密码、后台面板地址、数据库账密、DNS以及网址都发到邮箱中

::: details 提示如下
The account has been created successfully. Further instructions have been sent to the provided e-mail address.
:::

![](/server/serv00/serv00-05.png)

我们打开控制面板，复制邮箱中的账号密码登录

::: details 显示的是波兰语看不懂？
点击登录框下方的小字 `Zmień język`，弹窗中选择 `English`，最后点击 `Zapisz zmiany` 保存即可
:::

![](/server/serv00/serv00-06.png)

这个就是后台管理面板了

![](/server/serv00/serv00-07.png)

我们先改一下密码，随机密码真的不好记

注意：密码必须包含大小写及数字

![](/server/serv00/serv00-08.png)





## 使用

能干的事情太多了，自己慢慢研究吧


::: details 创建静态页面网站

点击 `File Manager` 进入文件管理器

![](/server/serv00/static/static-01.png)

进入目录 `domains/用户名.serv00.net/public_html`，可以将这个index.html删掉

![](/server/serv00/static/static-02.png)

点击 `send - from computer` 上传我们准备好的静态网站 [static-green-nav.zip](https://dzp.lanzouj.com/ikleX22s6hyf)

![](/server/serv00/static/static-03.png)

上传完成后，右键点击 `Explore`，进入查看压缩包内容

![](/server/serv00/static/static-04.png)

全选所有文件，右键点击 `Extract`，提取文件

![](/server/serv00/static/static-05.png)

选择刚才的目录 `domains/用户名.serv00.net/public_html` ，确定

![](/server/serv00/static/static-06.png)

最后进入你的网站查看是否成功 `用户名.serv00.net`

![](/server/serv00/static/static-07.png)

:::






:::: details SSH登录

使用自己喜欢的 [shell工具](../shell/) ，我用 [Xshell](../shell/Xshell.md) 演示

::: details 如果没有特殊的使用，用电脑自带的Open SSH也可以

`window键+R`- 输入 `cmd`，打开命令终端

输入 `ssh 用户名@面板地址` 回车，确定连接输入`yes`

![](/server/serv00/ssh/ssh-09.png)

密码为了安全，是不显示的，输入密码后回车即可连接

![](/server/serv00/ssh/ssh-10.png)
:::


新建 - 连接 - 主机，输入邮箱中给的主机地址

![](/server/serv00/ssh/ssh-01.png)

用户登录验证，输入账号密码，确定

![](/server/serv00/ssh/ssh-02.png)

然后点击连接

![](/server/serv00/ssh/ssh-03.png)

选择接受并保存

![](/server/serv00/ssh/ssh-04.png)

这里如果还需要认证，选择 `Keyboard Interactive` 键盘输入验证

![](/server/serv00/ssh/ssh-05.png)

再次输入密码，确定

![](/server/serv00/ssh/ssh-06.png)

看到 Serv00.com 的图形就是成功了

![](/server/serv00/ssh/ssh-07.png)

我们输入 `uname -a` 可以看一下系统

![](/server/serv00/ssh/ssh-08.png)

如果出现不能连接SSH的情况，请关掉代理后重连！

也可以使用官方 [提供IP解锁](https://www.serv00.com/ip_unban/) 后使用

![](/server/serv00/ssh/ssh-11.png)

::::








:::: details 创建二级站点


点击 `WWW Websites` - `Add website` 添加站点，在你的域名前，再加任意字母，创建站点

比如：`nav.yiov.serv00.net`

![](/server/serv00/two/two-01.png)

点击 `Add` 添加，提示成功即可

![](/server/serv00/two/two-02.png)

再点击 `File Manager` 进入文件管理器

![](/server/serv00/two/two-03.png)

进入目录 `domains/域名前缀.用户名.serv00.net/public_html`

将这个index.html删掉后，上传我们准备好的静态网站 [static-green-nav.zip](https://dzp.lanzouj.com/ikleX22s6hyf)

![](/server/serv00/two/two-04.png)


上传完成后，右键点击 `Explore`，进入查看压缩包内容

![](/server/serv00/two/two-05.png)

全选所有文件，右键点击 `Extract`，提取文件

![](/server/serv00/two/two-06.png)

选择刚才的目录 `domains/域名前缀.用户名.serv00.net/public_html` ，确定

![](/server/serv00/two/two-07.png)

删除刚才上传的压缩包，免得占空间

![](/server/serv00/two/two-08.png)

最后进入你的网站查看是否成功 `域名前缀.用户名.serv00.net`

![](/server/serv00/two/two-09.png)

但是这个域名是没有SSL证书的，我们申请一下

点击 `SSL - WWW Websites` ，选择一个IP点 `Manage` 管理

![](/server/serv00/two/two-10.png)

点击 `Add certificate` 添加证书

![](/server/serv00/two/two-11.png)

选择 `Generate Let's Encrypt certificate` 添加即可

::: details The weekly certificate limit for the domain has been used
每周证书数量限制，等名额吧，或者自己申请
:::

::: details The A record for the domain is incorect
换一个IP申请
:::

![](/server/serv00/two/two-12.png)

::::



:::: details 自行申请SSL证书

由于我们没有域名的使用权，所以只能使用HTTP文件验证

那么，推荐使用 [ZeroSSL](https://zerossl.com/) ，点右上角 `Get Free SSL` 注册

![](/server/serv00/zerossl/zerossl-01.png)

输入邮箱密码即可，密码要大小写及数字，8位数以上

![](/server/serv00/zerossl/zerossl-02.png)

点 `New Certificate` 创建新证书

![](/server/serv00/zerossl/zerossl-03.png)

输入我们的Serv00二级域名，90天，其他默认，才是免费的

::: tip 说明
* Domains：输入单个域名（多域名和泛域名要付费）

* Validity：90-Day Certificate

* Add-Ons：什么都不选

* CSR & Contact：默认自动开启的即可
:::

![](/server/serv00/zerossl/zerossl-04.png)

![](/server/serv00/zerossl/zerossl-05.png)

我们只能选 HTTP 文件验证，先下载txt验证文件 `Download Auth File`

![](/server/serv00/zerossl/zerossl-06.png)

然后再serv00文件管理器，域名 `public_html` 文件夹下

按要求分别新建子母文件夹后，上传验证文件

![](/server/serv00/zerossl/zerossl-07.png)

访问链接能成功读取，就可以了

![](/server/serv00/zerossl/zerossl-08.png)

回到 ZeroSSL `verify` 验证

![](/server/serv00/zerossl/zerossl-09.png)

验证成功后，点击 `Download Certificate (.zip)` 下载证书压缩包

![](/server/serv00/zerossl/zerossl-10.png)

解压后，还不能直接使用，需要将ca_bundle.crt和certificate.crt合并

![](/server/serv00/zerossl/zerossl-11.png)

右键用记事本打开 `ca_bundle.crt` 全选内容，复制

同样的方式打开 `certificate.crt` ，拉倒最底部，粘贴将刚复制的内容，保存

![](/server/serv00/zerossl/zerossl-12.png)

然后将 `certificate.crt` 重命名为 `certificate.pem`，确定

::: details 看不到文件后缀名
文件夹顶部 查看 - 勾选 `文件拓展名`
:::

![](/server/serv00/zerossl/zerossl-13.png)

打开 serv00 面板 - SSL - WWW Websites，第一个IP `Manage` 管理

![](/server/serv00/zerossl/zerossl-14.png)

点击 `Add certificate` 添加证书，`choose file` 选择我们刚才的文件

::: tip 说明

* Type：Certificate file

* Certificate File：刚才合并的pem文件（必须要pem才是完整的）

* Key File：解压后的key文件

* Domain：申请的域名
:::

![](/server/serv00/zerossl/zerossl-15.png)

成功后在面板中能看到

![](/server/serv00/zerossl/zerossl-16.png)

回到ZeroSSL验证，这样就完成了

![](/server/serv00/zerossl/zerossl-17.png)

浏览网站，已经可以https访问了，证书是3个月过期

![](/server/serv00/zerossl/zerossl-18.png)

::::














::: details Wordpress搭建

请参照 [wordpess教程](../wordpress.md)，将压缩包放入 域名下的 `public_html` 解压后安装即可

个人不太建议，wordpress使用起来会太卡了
:::







::: details 进程管理工具：pm2

据说官方会不定时重启，可以使用 `pm2` 、`nohup` 、 `screen` 等工具

本文参考 [Saika's Blog](https://blog.rappit.site/) 安装 `pm2` ，打开SSH工具连接后输入下面命令

```sh
bash <(curl -s https://raw.githubusercontent.com/k0baya/alist_repl/main/serv00/install-pm2.sh)
```

![](/server/serv00/pm2/pm2-01.png)


安装好就可以了，下面是一些常用命令

```sh
#查询版本
pm2 -v

#查看进程状态
pm2 status

#查看进程列表及ID
pm2 list

#开机启动pm2
pm2 startup

#停止进程
pm2 stop <进程id>

#停止所有进程
pm2 stop all

#删除进程
pm2 delete <进程id>

#删除所有进程
pm2 delete all

#重启所有进程
pm2 restart all

#保存当前任务列表快照
pm2 save
```

:::









:::: details 搭建Alist网盘


::: warning 不建议使用这类
serv00重启母鸡后，这类需要后台挂载的应用都会掉，即便有定时任务拉起，也是一样的
:::

在控制台 `Additional services - Run your own applications` 打开开关

允许第三方应用，不打开后面运行Alist，会提示没有权限

![](/server/serv00/alist/alist-01.png)

![](/server/serv00/alist/alist-02.png)


然后在控制台 `Port reservation - Add port`  开放端口

在1-65525中选一个，提示冲突就换，我用的是 `3399`，一会要用到

![](/server/serv00/alist/alist-03.png)

![](/server/serv00/alist/alist-04.png)


接着在 `WWW Websites - Add new website` 添加一个新站点

::: tip 说明
* Domain：强烈建议使用cf托管的域名，还提供15年SSL证书

* Website type：Proxy

* Proxy target：localhost

* Proxy url (optional)：不填

* Proxy port：刚才开放的端口，比如：3399

* Use HTTPS：不勾选

* DNS support：cf托管的域名不勾选
:::

![](/server/serv00/alist/alist-05.png)


最后在 `MySQL - Add database` 新增数据库

::: tip 说明
* Database name：数据库名自己取

* New user：新用户

* Username：用户名，和数据库名保持一致

* Password：密码及确认密码
:::


![](/server/serv00/alist/alist-06.png)

添加成功后在 `Database list` 中可以看到

![](/server/serv00/alist/alist-07.png)


SSH工具连接Serv00服务器，cd进刚才你创建的域名`public_html`目录

```sh
cd ~/domains/你的域名/public_html
```

![](/server/serv00/alist/alist-08.png)


运行下面命令，安装FreeBSD版本的Alist

```sh
wget -O alist-freebsd.sh https://raw.githubusercontent.com/k0baya/alist_repl/main/serv00/alist-freebsd.sh && sh alist-freebsd.sh
```

![](/server/serv00/alist/alist-09.png)



赋予权限并运行Alist，运行后会自动关闭，因为我们还没有进行配置

::: details -bash: ./alist: Permission denied
没有权限，请检查是否打开了 `Additional services - Run your own applications` 开关

如果已经打开，请关闭SSH工具重新连接

或者使用SSH命令
```sh
devil binexec on
```
:::

```sh
chmod +x alist && ./alist server
```

![](/server/serv00/alist/alist-10.png)


点击控制台 `File manager` 进入文件管理器

![](/server/serv00/alist/alist-11.png)

进入域名下的 `public_html - date` 文件夹，双击 `config.json` 打开

::: details 没有 date 文件夹？
请先运行一次 `./alist server` ，否则不会自动生成
:::


![](/server/serv00/alist/alist-12.png)



我们要修改 `database` `scheme` `s3` 三个部分

::: tip database 部分
* type：数据库类型，填 `mysql`

* host：数据库地址，是 `MySQL中的Server`

* port：`3306`（默认）

* user：数据库用户名，是 `MySQL中的Username` ，与name一致

* password：数据库的密码，自己设置的

* name：数据库名，是 `MySQL中的Database name`

* 其他保持默认
:::


::: tip scheme 部分
* address：`127.0.0.1`（回环地址）

* http_port：之前开放的端口，比如 `3399`

* 其他保持默认
:::


::: tip s3 部分
* port：`0`，就是不使用端口，避免端口占用冲突

* 其他保持默认
:::


![](/server/serv00/alist/alist-13.png)

修改好后 `save` 保存

![](/server/serv00/alist/alist-14.png)


再次运行Alist，运行成功后，会显示 `登录密码`

::: details Alist未运行，提示`init logrus...` 初始化中
请检查配置是否填写完整，端口有没有填之类的
:::

```sh
./alist server
```

![](/server/serv00/alist/alist-15.png)


访问域名，进入Alist登录界面，账号是`admin`，密码显示在SSH里

::: details 忘记密码？
```sh
# 随机生成一个密码
./alist admin random
# 手动设置一个密码,`NEW_PASSWORD`是指你需要设置的密码
./alist admin set NEW_PASSWORD
```
:::

![](/server/serv00/alist/alist-16.png)

进入Alist页面，点击管理页面，修改用户名和密码

![](/server/serv00/alist/alist-17.png)

在SSH工具中按 `Ctrl+C` 结束窗口，然后使用pm2运行Alist

即便关掉了SSH终端，Alist仍然在后台运行

```sh
pm2 start ./alist -- server
```

![](/server/serv00/alist/alist-18.png)

::::




:::: details 自动续期

Serv00需要每3个月内登录一次面板，或者SSH登录一次，否则会删号

SSH工具连接Serv00服务器，使用 `cat` 命令新建 `auto-renew.sh` 脚本

::: tip 说明
将下方的 `密码` `用户名` `服务器地址` 改成自己的
:::

```sh
cat > auto_renew.sh << EOF
#!/bin/bash

sshpass -p '密码' ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -tt 用户名@服务器地址 "exit" &
EOF
```

![](/server/serv00/renew/renew-01.png)

赋予权限并查看列表

```sh
chmod +x auto_renew.sh && ls
```

![](/server/serv00/renew/renew-02.png)

在控制台 `Cron jobs - Add cron job`，添加一个定时任务

::: tip 说明
* Specify time：Monthly

* Form type：Advanced

* Command：如下↓ ，将 `你的用户名` 修改成自己的
:::

```sh
/home/你的用户名/auto_renew.sh 2>/dev/null 2>&1
```

![](/server/serv00/renew/renew-03.png)

添加成功后，在 `Cron jobs list` 可以看到一个cron规则，每月的1号0点0分自动执行

![](/server/serv00/renew/renew-04.png)

::::







:::: details 自启动

对于Serv00不定时重启，也可以通过添加自启任务，保证其他应用唤醒

在控制台 `Cron jobs - Add cron job`，添加一个定时任务

::: tip 说明
* Specify time：After rebot

* Form type：Advanced

* Command：如下↓ ，将 `你的用户名` 修改成自己的
:::

```sh
pkill -kill -u 你的用户名 && /home/你的用户名/.npm-global/bin/pm2 resurrect
```
![](/server/serv00/rebot/rebot-01.png)

这样就添加了一个在服务器重启后，运行的命令

![](/server/serv00/rebot/rebot-02.png)

同样的方式在添加一个定时任务

::: tip 说明
* Specify time：Specify manually

* Form type：Advanced

* Minute：10

* 其他：Each time

* Command：如下↓ ，将 `你的用户名` 修改成自己的
:::

```sh
/home/你的用户名/.npm-global/bin/pm2 resurrect
```

添加完之后，在 SSH 窗口输入下面命令保存当前任务列表快照

::: warning 注意
每次添加其他应用或任务，都需要保存一下，pm2会按照快照的列表执行
:::

```sh
pm2 save
```

![](/server/serv00/rebot/rebot-03.png)

::::



## 常见问题

1.SSH连不上，后台进程占用较多

答：在 `Cron jobs` 中添加任务清除进程 `pkill -kill -u 你的用户名`



## 特别鸣谢

* [Saika's Blog](https://blog.rappit.site/2024/01/27/serv00_logs)