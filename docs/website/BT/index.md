# Linux安装宝塔面板

::: warning 更新时间
最近更新：2023-2-23
:::


宝塔官网：[https://www.bt.cn/](https://www.bt.cn/)

宝塔国际版：[https://www.aapanel.com/new/index.html](https://www.aapanel.com/new/index.html)



![](./BT-01.png)






## 1.安装宝塔



参考官网的命令即可，我以`centos 7`为例


![](./BT-02.png)

::: tip 说明
第一次接触命令的，请记住键盘中的`Ctrl+V` 不可用，请用鼠标右键 `粘贴`
:::

```sh
cd /
yum install -y wget && wget -O install.sh https://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec
```


![](./BT-03.png)



等待安装，提示输入 `y` 确定，`回车`，继续等待

::: tip 说明
若提示开不开启SSL，都可以，我是开了

就是访问面板是否是https
:::

![](./BT-04.png)




完成后会显示的宝塔后台地址/账号/密码，复制出来一会要用

::: tip 说明
我这里有个随机端口 `36663`
:::

![](./BT-05.png)


服务器控制台-防火墙-添加规则-TCP协议-端口输入你的随机端口

::: tip 说明
由于新版都是 `随机端口` ，要按需放行，后台地址显示端口是那个，就放行那个
:::

![](./BT-06.png)






## 2.登录宝塔



复制后台地址打开，打不开端口没有放行，账密就是 `username` `password`

::: tip 说明
比如我的：https://192.168.0.1:36663/e223387d
:::

![](./BT-07.png)


登录先改账密，面板设置-面板用户和密码，改完保存生效

::: tip 说明
安全入口也可以一起改
:::

![](./BT-08.png)







## 3.安装LNMP套件



登录注册好的宝塔账号，一般都会弹，就按默认推荐的即可，都够用了

::: tip 说明
如遇到添加站点的时候报错，卸载重新安装

大部分的环境安装都可以在软件商店找到
:::

```
L - 指的是Linux系统
N - 指的是Nginx代理服务器，建站必装
M - 指的是MySQL数据库，动态网站必装
P - 指的是PHP脚本语言

phpMyAdmin - 数据库管理软件，导入导出
Pure-Ftpd - ftp服务器软件
```

![](./BT-14.png)








## 常见问题



#### 1.如何找回宝塔账号密码

一个 `bt` 命令即可更改所有，按数字查看修改

```sh
bt
```

![](./BT-09.png)




#### 2.无法正常使用删除键


更改键盘序列即可

::: tip 说明
按Backspace键，显示的是 `^H`

按Del键，显示的是 `^[[3~`
:::

![](./BT-10.png)

选择服务器-右键属性-终端-键盘,都选择成ASCII ，当然最后一个也可以，ASCII 常用

::: tip 说明
记得断开了，重连才生效
:::

![](./BT-11.png)




#### 3.堡塔app扫码连接超时

进入宝塔面板-设置-关闭面板SSL即可；如需使用SSL，APP绑定好了再重新开启就行了





#### 4.更新系统及软件


如无必要，不要轻易更新

```sh
yum update
```

![](./BT-12.png)



提示Is this ok ，输入 **y** ，回车确定，耐心等待完成

::: tip 说明
完成后Complete，自动返回根目录
:::

![](./BT-13.png)





#### 5.使用PM2启动服务器的时候报错/bin/sh: line 9: pm2:command not found

这个和宝塔无关，应该是修改了应用变量无保存成功，进不去了

```sh
#1.将环境变量改回正确的路径
export PATH=/usr/bin:/usr/sbin:/bin:/sbin:/usr/X11R6/bin

#2.修改环境变量
vim ~/.bash_profile

#3.生效环境变量
source ~/.bash_profile
```

其实输入第1个的命令就可以了，第2个命令可再次进入设置环境变量界面，增减了命令 `esc` + `:wq` 保存，再用第3个命令使其生效



#### 6.宝塔如何网站迁移

软件商店搜：`宝塔一键迁移` ，按步骤走就可以了，非常简单

确保两个服务器都装了宝塔，在面板打开了API按钮

完成后别忘了修改成新的域名解析



#### 7.如何卸载宝塔面板

先下载宝塔的卸载程序，在执行命令

```sh
#下载卸载程序
wget http://download.bt.cn/install/bt-uninstall.sh

#执行卸载
sh bt-uninstall.sh
```
