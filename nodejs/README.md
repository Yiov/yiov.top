
## linux系统安装node.js

</br>



更新时间：2021-11-17

node.js是JavaScript的运行环境，可用于运行js脚本



中文官网：https://nodejs.org/zh-cn/

> 仓库：https://github.com/nodejs/node

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/nodejs/nodejs-01.png)





</br>
</br>



## 安装前说明

</br>

为了保证稳定性，建议选择长期维护的版本

> 不用直接点击下载，我们用命令

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/nodejs/nodejs-02.png)



## 1.切换到root账号

</br>

一般都是root，多加一步不影响

> 鼠标右键粘贴！ctrl+v是不可用的

```
sudo su root #切换到root帐号
cd / #进入根目录
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/nodejs/nodejs-03.png)



</br>
</br>



## 2.下载Node解压安装

</br>

版本我用的最新的V14.17.4，可按照官网最新的版本改好命令，保持一致

> 其他版本查找：https://nodejs.org/dist/


```
wget https://nodejs.org/dist/v14.17.4/node-v14.17.4-linux-x64.tar.xz #下载nodejs安装包
tar xvf node-v14.17.4-linux-x64.tar.xz #解压
mv node-v14.17.4-linux-x64 node-v14.17.4 #改名
```

等待完成，停在 改名 那 **回车** 一下就行了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/nodejs/nodejs-04.png)



进目录查看文件夹，有就代表安装好了

> 注意版本号一致

```
cd /node-v14.17.4/bin && ls #进入目录并列出
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/nodejs/nodejs-05.png)


</br>
</br>



## 3.建立软连接

</br>

> 注意版本号一致

```
ln -s /node-v14.17.4/bin/node /usr/local/bin/node
ln -s /node-v14.17.4/bin/npm /usr/local/bin/npm
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/nodejs/nodejs-06.png)



**完成后 关掉 Xshell 再打开，否则不生效**


</br>



确定重启后，复制下面命令查看一下

```
cd /node-v14.17.4/bin && ls
node -v #查看版本号
npm -v #查看包管理工具
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/nodejs/nodejs-07.png)


</br>
</br>



## 4.清理安装包(懒的无所谓)

</br>

查看目录列表，标红的`node***.tar.xz`就是刚下的压缩包

```
cd /
ls
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/nodejs/nodejs-08.png)


删除node安装包，复制下列命令

> 版本不同的话，自己改下名
> 
> 我这里有两个，是因为我运行了2次，下载重复了

```
rm -rf node-v14.17.4-linux-x64.tar.xz
```


删完后，我们再进目录看一下，完美

```
cd /
ls
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/nodejs/nodejs-09.png)






