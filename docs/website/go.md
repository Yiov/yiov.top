# Go环境的安装




## 简介

常说的go就是golang的简称

GO官网：https://go.dev/

备用官网：https://golang.google.cn/

![](/go/go-01.png)




## 安装

点击 [Download](https://go.dev/dl/) 进入下载页面，我用 Linux 演示

```
https://dl.google.com/go/go1.20.1.linux-amd64.tar.gz
```

![](/go/go-02.png)


打开 [shell工具](./shell/) 并登录 [服务器](./Server/)，然后下载go

```sh
#下载
cd /www/server && wget https://golang.google.cn/dl/go1.20.1.linux-amd64.tar.gz

#解压
tar -xzvf go1.20.1.linux-amd64.tar.gz
```

![](/go/go-03.png)


```sh
#添加环境变量
vi /etc/profile
```
![](/go/go-04.png)


输入 `i` 进入编辑模式，方向键拉倒最底部，回车一下粘贴下面变量

```sh
export GOROOT=/www/server/go
export GOBIN=$GOROOT/bin
export GOPKG=$GOROOT/pkg/tool/linux_amd64
export GOARCH=amd64
export GOOS=linux
export GOPATH=/www/wwwroot/Golang
export PATH=$PATH:$GOBIN:$GOPKG:$GOPATH/bin
```

![](/go/go-05.png)


按`ESC`退出编辑模式，输入`:wq` 回车保存并退出

::: tip 说明
若不保存退出，输入 `:q!`
:::

![](/go/go-06.png)


环境变量生效命令

```sh
source /etc/profile
```
![](/go/go-07.png)

检查版本

```sh
go version
```

![](/go/go-08.png)









## 常见问题

1.如何卸载go

```sh
#查看goroot目录地址
go env

#根据目录路径删除即可
cd
rm -rf /www/server/go
```