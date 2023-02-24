
## Xshell终端连接服务器

</br>


更新时间：2021-11-17


* 电脑端：Xshell、FinalShell、MobaXterm等等都行

* 手机端：[JuiceSSH-安卓](https://www.juicessh.com/changelog) 丨 [Termius-苹果](https://apps.apple.com/cn/app/id549039908)

本文仅演示Xshell安装教程

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-01.png)


</br>
</br>




## 1.下载Xshell

</br>


这里我们直接去官网下载免费版，也属于教育版

> 不要在其他网站下载，否则过一段时间会结束体验期

Xshell官网：https://www.netsarang.com/zh/all-downloads/


进入页面后，下拉到底部，找到 **家庭/学校免费**，点击


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-02.png)


进来后，需要填写邮箱，一会要接受邮件，姓名随便

> 我这里只用Xshell，我只勾选了这一个，想都要的都勾选

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-03.png)



填好后点下载，邮箱就会收到下载地址了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-04.png)




打开链接即可下载

> 注：如果下载的Xshell，提示评估期已过，那就再来一遍

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-05.png)



</br>
</br>







### 2.安装Xshell

</br>

下载好后，我们双击开始安装

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-06.png)



客户信息默认，下一步，目的地位置，我们改一下，**别装C盘**了

点 **浏览**

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-07.png)



我们把C盘改成D盘，其他不要动，确定，下一步

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-08.png)



安装-直到完成，打开

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-09.png)


</br>
</br>




## 3.连接服务器

</br>

打开Xshell，左上-新建会话

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-10.png)



名称随便，主机填你的服务器 `公网IP` ，端口默认22

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-11.png)



选 用户身份登陆，用户名 `root` ，密码服务器选系统的时候自己设置的

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-12.png)



弹出主机密钥验证，接受保存就好

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-13.png)



正常就连接成功了

> 如果不小心X掉了，选择服务器，鼠标右键-打开

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-14.png)


</br>
</br>



## 其他拓展

</br>


### 拓展1：查看根目录列表

```
cd /
ls
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-15.png)


</br>

### 拓展2：手机端远程SSH

</br>



下载 [@JuiceSSH](https://juicessh.com/)：https://dzp.lanzouy.com/iMsuF0gb2dha


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-16.png)


新建认证这里

> 用户名：root
> 
> 密码：(你自己设置的)
> 
> 填好后，右上对勾 `√` 确定

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-17.png)




连接页面右下+号 - 新建连接，这样就连接成功了

> 地址：(你的IP地址)
> 
> 认证：(你的服务器)
> 
> 填好后，右上对勾 `√` 确定

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Xshell/Xshell-18.png)






