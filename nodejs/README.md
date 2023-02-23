
## node.js的下载与安装

</br>

更新时间：2023-2-23

node.js是JavaScript的运行环境

本次仅演示 `linux` 和 `window` 安装方式

> 安装了宝塔的直接在软件商店搜node安装即可

</br>

* [官网](https://nodejs.org/zh-cn/)

* [仓库](https://github.com/nodejs/node)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/nodejs/nodejs-01.png)


</br>
</br>

## linux系统安装node

</br>

选择 `linux x64`下载，为了保证稳定性，建议选择长期维护的版本

> 不用直接点击下载，我们用命令

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/nodejs/nodejs-02.png)


### 1.切换到root账号

一般都是root，多加一步不影响

> 鼠标右键粘贴！ctrl+v是不可用的

```
sudo su root #切换到root帐号
cd / #进入根目录
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/nodejs/nodejs-03.png)

</br>

### 2.下载Node解压安装


版本我用的最新的V14.17.4，可按照官网最新的版本改好命令，保持一致

> 其他版本查找：https://nodejs.org/dist/
>
> 依次运行命令


```bash
#下载nodejs安装包
wget https://nodejs.org/dist/v14.17.4/node-v14.17.4-linux-x64.tar.xz

#解压
tar xvf node-v14.17.4-linux-x64.tar.xz

#改名
mv node-v14.17.4-linux-x64 node-v14.17.4
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


### 3.建立软连接

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




### 4.清理安装包(可选)


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


</br>
</br>


## window安装nodes.js

</br>

官网下载我们选择window的方式

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/nodejs/nodejs-10.png)


下载好安装，就不用说了吧

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/nodejs/nodejs-11.png)

安装好后，我们运行 `window键+R` 进入 `cmd` 终端

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/nodejs/nodejs-12.png)


查看一下版本号，有就说明成功了

```
node -v
npm -v
```
![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/nodejs/nodejs-13.png)



</br>
</br>




## 常见问题

### 1.linux输入版本号没反应

确保你退出了Xshell工具，重新登录了查询


### 2.如何卸载

```bash
#npm卸载
npm uninstall npm -g

#卸载node
yum remove nodejs npm -y
```


### 3.如何升级成yarn

```bash
#安装yarn
npm install -g yarn

#查看版本号
yarn -v

#安装依赖
yarn install

#卸载
npm uninstall yarn -g

#执行yarn serve报错
export NODE_OPTIONS=--openssl-legacy-provider
```




### 4.目前还有pnpm又如何

先弄清关系，yarn是npm的升级版，pnpm是npm的替代

速度上自然是新秀pnpm更快

```bash
# 安装pnpm
npm install -g pnpm

# 安装依赖包
pnpm install

# 查看版本号
pnpm -v
```




