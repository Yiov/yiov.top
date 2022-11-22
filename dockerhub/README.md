
## dockerhub如何上传本地镜像

</br>



更新时间：2021-11-12




本文仅演示本地有的镜像，就是你服务器拉取了别人的镜像，怎么上传到自己的dockerhub，如何制作镜像不教，因为我也不会，哈哈哈哈




</br>
</br>


## 1.创建docker账号

</br>

打开官网注册账号

docker官网：https://hub.docker.com/

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dockerhub/dockerhub-01.png)



登录账号后，点 `Repositories-Create Repository` 创建仓库

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dockerhub/dockerhub-02.png)


给仓库命名，公开还是私有，创建

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dockerhub/dockerhub-03.png)


这样就创建成功了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dockerhub/dockerhub-04.png)


</br>
</br>



## 2.SSH连接服务器

</br>

本文用Xshell演示，未使用过的点右侧 [☛Xshell软件的安装及使用](https://github.com/Yiov/notes/tree/main/Xshell)


> 登录连接好，确保已经拉取过镜像
>
> 未拉取过镜像的，可用练手的青龙镜像：https://hub.docker.com/r/whyour/qinglong

**已拉取过的无视！**

```
docker pull whyour/qinglong:latest
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dockerhub/dockerhub-05.png)



</br>
</br>


### 3.登录docker

</br>

输入命令登录docker账号和密码，输完直接回车

```
docker login
```

`Login Succeeded` 就是登录成功了

> Username：账户名
> 
> Password：密码(输入是隐藏的，尽管输入，不是键盘出问题)


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dockerhub/dockerhub-06.png)



</br>
</br>




## 4.上传镜像

</br>


我们先查看一下查看镜像

> 如没有镜像，就是还未拉取，看步骤2
> 
> 我这里想要上传 @nolan 的 `nvjdc` 镜像作为演示

```
docker images
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dockerhub/dockerhub-07.png)




dockerhub无法直接上传别人的镜像，我们pull的镜像后，通过 `打标签` 的形式换成自己的账户仓库名，再上传就可以了

```
docker tag 镜像ID 账户名/仓库名:标签名
```

> 镜像ID：4dc24556b2ff(上面自己复制)
>
> 账户名：nolanhzy(自己的账户名)
>
> 仓库名：nvjdc(仓库名用第1步自己建的名字)
>
> 标签名：latest(可以自己改)


最终：
```
docker tag 4dc24556b2ff yiov/nvjdc:1.0
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dockerhub/dockerhub-08.png)




我们再查看一下镜像，这样我们就得到了与原镜像完全一致的镜像

```
docker images
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dockerhub/dockerhub-09.png)



现在我们来上传镜像

> 如果想查看数据的用命令 `docker inspect 账户名/仓库名:版本号`


```
docker push yiov/nvjdc:1.0
```


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dockerhub/dockerhub-10.png)




回到dockerhub网页查看，这样就是上传成功了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dockerhub/dockerhub-11.png)



在Tags也能直观的看到，pull命令就可以直接使用了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dockerhub/dockerhub-12.png)




</br>
</br>






## 5.退出账号并删除镜像

</br>


先退出账号的好处，就是为了毕竟自己误操作，需要的时候再登


```
docker logout
```

Removing login就是已经移除登录状态了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dockerhub/dockerhub-13.png)




先查看一下本地的镜像，我们用命令删除这个生成的镜像


```
docker images
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dockerhub/dockerhub-14.png)


用命令删除即可

> 我的就是：docker rmi -f yiov/nvjdc:1.0

```
docker rmi -f 账户名/仓库名:标签名tag
```

这里再次 `docker images` 看一下，已经删除了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/dockerhub/dockerhub-15.png)


</br>
</br>




## 常见问题

</br>


### 1.docker一直登陆失败

答：会话超时了，关掉SSH工具，重新打开，重新登录 `docker login`即可


</br>
</br>


## 特别鸣谢

* [青龙镜像](https://hub.docker.com/r/whyour/qinglong)

