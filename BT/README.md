
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

参考官网的命令也可以的

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-02.png)

```
cd /
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install.sh && sh install.sh
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-03.png)



等待安装，提示输入 **y** 确定，**回车**，继续等待

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-04.png)




完成后会显示的宝塔后台地址/账号/密码

> 自己复制出来，保存好，要用到的

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-05.png)


</br>
</br>


## 2.登录宝塔面板

</br>

复制我们的后台地址，打开

> 比如：https://192.168.0.1:8888

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-06.png)


登进宝塔面板后，记得先改密码

> 面板设置-面板用户和密码，改完保存生效

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-07.png)



</br>
</br>


## 3.更新系统软件

</br>



```
yum update
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-08.png)



提示Is this ok ，输入 **y** ，回车确定，耐心等待完成

> 完成后Complete，自动返回根目录

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-09.png)



</br>
</br>





## 常见问题

</br>

### 问题1：如何找回宝塔账号密码


```
bt default
```
> 仅适用于查找初始密码，改过了不行

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-10.png)


</br>



```
cd /www/server/panel && python tools.pyc panel BT007 新密码 ##重置密码为BT007

rm -f /www/server/panel/data/*.login ##清除登录限制

bt ##宝塔6.x以上通用集成命令
```


</br>


### 问题2：无法正常使用删除键


更改键盘序列即可

> 按Backspace键，显示的是 `^H`
>
> 按Del键，显示的是 `^[[3~`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-11.png)

选择服务器-右键属性-终端-键盘,都选择成ASCII ，当然最后一个也可以，ASCII 常用

> 记得断开了，重连才生效

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/BT/BT-12.png)







