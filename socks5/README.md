## Socks5的搭建


要问有什么用，用不上也就不会看了

更新时间：2022-1-25


## Socks5官网地址

官网地址：
http://ss5.sourceforge.net/

下载地址
http://sourceforge.net/projects/ss5/files/


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/socks5/ss5.png)




## 1.安装依赖

    yum -y install gcc make automake pam-devel openldap-devel openssl-devel cyrus-sasl-devel


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/socks5/ss5-1.png)




## 2.下载安装包

    wget http://downloads.sourceforge.net/project/ss5/ss5/3.8.9-8/ss5-3.8.9-8.tar.gz

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/socks5/ss5-2.png)



另一个日本大学的包也可以用，选一个即可

    wget https://jaist.dl.sourceforge.net/project/ss5/ss5/3.8.9-8/ss5-3.8.9-8.tar.gz




## 3.解压

    tar -xzvf ss5-3.8.9-8.tar.gz

> tar注解：-x解压指令；-z解压/压缩gzip；-v过程显示文件；-f 使用文档名

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/socks5/ss5-3.png)






## 4.编译及安装

    cd ss5-3.8.9
    ./configure && make
    make install

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/socks5/ss5-4.png)


> 前面步骤不对，这里就会报错

> configure会检测当前环境是否满足依赖关系，自动生成makefile，否则会报错







## 5.配置用户

    vim /etc/opt/ss5/ss5.conf

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/socks5/ss5-5.png)


### 5.1不设置密码

在line 87用`DEL键`删掉注释#号

    auth 0.0.0.0/0 - -

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/socks5/ss5-6.png)


在line 203用`DEL键`删掉注释#号

    permit - 0.0.0.0/0 - 0.0.0.0/0 - - - - -


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/socks5/ss5-7.png)


> 修改好后，`ESC键`，然后`:wq`+`回车键`保存并退出

> 不保存并退出为`ESC键`，然后`:q!`+`回车键`





### 5.2 设置密码

一样在87行和203行，就是加了个 `u`

    auth 0.0.0.0/0 - u
    permit u 0.0.0.0/0 - 0.0.0.0/0 - - - - -


修改密码

    vim /etc/opt/ss5/ss5.passwd

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/socks5/ss5-8.png)


用户名和密码中间用空格隔开,一行一个账密

    user1 password1
    user2 password2


## 6.设置端口

默认端口是1080，`强烈建议修改`，不然会被扫，比如10080或者10800之类的

    vim /etc/sysconfig/ss5

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/socks5/ss5-9.png)



把第2行的#号删掉，然后改成下面的

    SS5_OPTS="-u root -b 0.0.0.0:1080"

> 修改好后，`ESC键`，然后`:wq`+`回车键`保存

> 不保存为`ESC键`，然后`:q!`+`回车键`


虚拟机放行端口即可，服务器放行后，还需要在安全组/防火墙放行

    cd
    firewall-cmd --zone=public --add-port=1080/tcp --permanent


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/socks5/ss5-10.png)





## 7.开启访问权限

    chmod a+x /etc/init.d/ss5

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/socks5/ss5-11.png)


不开权限启动会报错
env: /etc/init.d/ss5: Permission denied


> chmod注释：a为所有人；x为execute 执行权限；
> r为read 读权限；
> w为write 写权限




## 8.启动socks5

    service ss5 start

现在就搭建完毕，可以使用了，使用方法就不用说了吧

一般无密码方式

    socks5://ip:端口

一般有密码方式

    socks5://账号:密码@ip:端口



## 其他常用命令

```
service ss5 stop # 停止

service ss5 status # 查看状态

service ss5 restart # 重启

# 开机自启 自行选择
chkconfig --add ss5
chkconfig ss5 on

```


## 免费的在线Socks5

稳定性肯定没有自己搭建好，临时用用

https://www.proxy-list.download/SOCKS5


## Socks5验证

站大爷
https://www.zdaye.com/ip/CheckSocks5/


## 特别鸣谢


* [Socks5官网](http://ss5.sourceforge.net/)

* [Socks5下载](http://sourceforge.net/projects/ss5/files/)


