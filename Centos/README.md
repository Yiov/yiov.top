## Centos切换到图形界面

</br>

更新时间：2022-9-8

远程centos需要借助VNC、xrdp等工具

注意：不可直接使用Xshell等工具！！！

</br>
</br>


## 演示环境

</br>

* 腾讯云服务器

* Centos 7.6

</br>
</br>


## 开始

</br>

我用的腾讯云，自带VNC登录，其他的云服务器请自测

控制台-云产品-云服务器-登录

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Centos/Centos-01.png)


VNC登录

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Centos/Centos-02.png)


进入命令行界面，我们输入账号密码登录

> 账号默认为root，密码自己设置的服务器密码

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Centos/Centos-03.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Centos/Centos-04.png)



安装 X window 控制

> -y 表示一直同意，省去手动输入

```
yum groupinstall "X Window System" -y
```

因为VNC登录不能粘贴，我们点击上面，在输入框里输入，确定，回车，直到安装完成

> 后面的命令也这样粘贴


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Centos/Centos-05.png)


安装 GNOME 图形界面，时间非常长，耐心等到安装完成

```
yum groupinstall -y "GNOME Desktop"
```


开启图形界面

```
init 5
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Centos/Centos-06.png)


设置下语言 `汉语`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Centos/Centos-07.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Centos/Centos-08.png)


隐私默认，位置也默认是上海

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Centos/Centos-09.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Centos/Centos-10.png)

在线账号跳过

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Centos/Centos-11.png)


设置下登录的账号和密码，登录用的

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Centos/Centos-12.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Centos/Centos-13.png)


设置成功，进入桌面

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Centos/Centos-14.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Centos/Centos-15.png)


</br>
</br>



## 其他命令

</br>

了解就行了，不需要输入

</br>

### 1.查看当前开机启动模式


```
systemctl get-default
```


开机时启动图形化界面

```
systemctl set-default graphical.target 
```


开机时启动dos界面

```
systemctl set-default multi-user.target
```




</br>

### 2.防火墙


防火墙状态
``
systemctl status firewalld
``

开启防火墙
``
systemctl start firewalld
``

关闭防火墙
``
systemctl stop firewalld
``

重启防火墙
``
firewall-cmd-reload
``


</br>


## 常见问题

</br>
</br>

### 1.如何使用浏览器

</br>


右上角-应用程序-Firefox

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Centos/Centos-16.png)


</br>


### 2.如何退出图形界面

</br>

按键盘`Ctrl+Alt+F2`

> 图形界面一共是6个，F1-F6，默认是F1，输入F2是为了切换图形界面

</br>


### 3.如何重新进入界面

</br>

我们先重新登录root账号，再输入`init 3`，再输入`init 5`即可

> init 3 是命令界面；init 5是图形界面


</br>


### 4.登录界面提示的tty1是什么

</br>

这是表示图形界面1，默认是tty1-tty6,我们退出图形界面就是用个切换的

</br>

### 5.我网络上搜都是`startx`进入

</br>

进是可以进，但是界面还是有不同的，主要是我也不知道这个界面怎么退




</br>
</br>


## 特别鸣谢

* [腾讯云](https://cloud.tencent.com/)



