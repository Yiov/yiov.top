
## liunx系统安装Docker

</br>



更新时间：2021-11-17


虚拟机占用空间大，启动时间长，容器技术应运而生，docker就是其中一种应用容器引擎

可以更加便捷的管理镜像


官网：https://www.docker.com/

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/docker/docker-01.png)



</br>
</br>


## 1.安装

</br>


一键安装Docker需要的依赖包

```
cd
curl -fsSL https://get.docker.com/ | sh
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/docker/docker-02.png)




安装完成后，开启Docker服务

```
sudo systemctl start docker
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/docker/docker-03.png)



```
sudo systemctl status docker
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/docker/docker-04.png)




```
sudo systemctl enable docker
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/docker/docker-05.png)


</br>
</br>


## 2.其他功能

</br>

<details>
<summary>多容器管理 [可选]</summary>

</br>

安装Docker compose，用于管理多容器，容器不多的，可以不用装


这个有点慢，多等一会

> 仓库：https://github.com/docker/compose

```
sudo curl -L "https://ghproxy.com/https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```


```
chmod +x /usr/local/bin/docker-compose #给权限
```


```
docker-compose #运行docker-compose
```



</details>

</br>




### docker常用命令

</br>


```
docker ps -a #查看容器

docker stop 容器ID #暂停容器

docker rm -f 容器ID #删除容器

docker kill 容器ID #关闭容器

docker restart 容器名称 #重启容器

exit #退出容器

docker rmi 镜像ID #删除镜像

docker rm -f whyour/qinglong:latest #删除镜像
```



</br>
</br>




## 常见问题

</br>



### 问题1：Docker安装出现Errno 14

</br>


Errno 14连接失败，是密钥下载失败了，那我们手动下载即可

> 我碰到的情况有2种，都是这么解决的

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/docker/docker-06.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/docker/docker-07.png)


重新添加从仓库

```
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/docker/docker-08.png)



再编辑repo

```
sudo vi /etc/yum.repos.d/docker-ce.repo
```

进来之后，我们找到标记位置，按 `Vi` 进入编辑模式，会有个绿色的光标

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/docker/docker-09.png)


把 `$releasever` 改成 `7`

```
baseurl=https://download.docker.com/linux/centos/$releasever/$basearch/stable

用方向键移动，将$releasever改成7，多余的字用Del键删，其他的不要改

如：baseurl=https://download.docker.com/linux/centos/7/$basearch/stable

```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/docker/docker-10.png)



然后按`ESC` + `:wq` 即可保存退出

> `:`冒号按SHIFT键打出来，确保是全英文输入法状态



我们重新安装，两次y确定后安装成功

```
curl -fsSL https://get.docker.com/ | sh
```










### 问题2：如何卸载旧版本Docker


如果出现安装错误，或者未知错误，直接卸载了重装

> 放心卸，不会影响镜像面板的使用

```
sudo yum remove docker  docker-common docker-selinux docker-engine
```






