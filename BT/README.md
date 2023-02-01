
## linux如何安装宝塔面板和使用

</br>



更新时间：2021-11-12


宝塔面板官网：https://www.bt.cn/

无论新手老手，宝塔面板的便捷性永远都存在，所以是建议安装的

> 第一次接触命令的，请记住键盘中的 `Ctrl+C` 和 `Ctrl+V` 不可用，请用鼠标右键，复制/粘贴

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-01.png)



</br>
</br>



## 1.安装宝塔

</br>

参考官网的命令即可，我以`centos 7`为例


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-02.png)


```
yum install -y wget && wget -O install.sh https://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec
```


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-03.png)



等待安装，提示输入 **y** 确定，**回车**，继续等待

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-04.png)




完成后会显示的宝塔后台地址/账号/密码


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-05.png)


由于新版都是 `随机端口` ，要按需放行

服务器-防火墙-添加规则-TCP协议-端口输入你的端口

> 后台地址显示端口是那个，就放行那个

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-06.png)


</br>
</br>


## 2.登录宝塔面板

</br>

复制我们的后台地址(含端口)打开，打不开的就是没有放行

> 比如：https://192.168.0.1:8888

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-07.png)


登进宝塔面板后，记得先改密码

> 面板设置-面板用户和密码，改完保存生效，端口也可以一起改

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-08.png)



</br>
</br>






## 常见问题

</br>

### 问题1：如何找回宝塔账号密码

一个 `bt` 命令即可更改所有，按数字查看修改

```
bt
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-09.png)

</br>


### 问题2：无法正常使用删除键


更改键盘序列即可

> 按Backspace键，显示的是 `^H`
>
> 按Del键，显示的是 `^[[3~`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-10.png)

选择服务器-右键属性-终端-键盘,都选择成ASCII ，当然最后一个也可以，ASCII 常用

> 记得断开了，重连才生效

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-11.png)

</br>


### 问题3：堡塔app扫码连接超时

进入宝塔面板-设置-关闭面板SLL即可

</br>



### 问题4：更新系统及软件


如无必要，不要轻易更新

```
yum update
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-12.png)



提示Is this ok ，输入 **y** ，回车确定，耐心等待完成

> 完成后Complete，自动返回根目录

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-13.png)



</br>
</br>


