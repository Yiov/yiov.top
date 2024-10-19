# node.js的安装及使用



## 简介

基于Chrome V8引擎的JavaScript脚本语言的运行环境

npm是其包管理工具

官网：https://nodejs.org/zh-cn

仓库：https://github.com/nodejs/node

![](/nodejs/nodejs.png)








## 安装

> 如果你安装了宝塔，可直接在软件商店搜 `node` 安装



:::: details CentOS安装

安装前，使用 [shell](./shell/) 工具 连接服务器，查看centos版本

```sh
# 查看centos版本
yum list installed | grep centos
```


![](/nodejs/linux/linux-01.png)


进入下载页面，选择 [预构建二进制文件](https://nodejs.org/zh-cn/download/prebuilt-binaries)

我的系统是CentOS 7，只能选择 `v17.9.1` 

::: details 为什么不用最新版
node.js 18 已不支持 Centos 7 了

* centos 7：使用 node.js 18 以下（glibc版本低）

* CentOS 8：使用 node.js 18 及以上版本

其他版本查找：https://nodejs.org/dist/
:::



![](/nodejs/linux/linux-02.png)


鼠标右键，将下载链接复制出来，如下

```
https://nodejs.org/dist/v17.9.1/node-v17.9.1-linux-x64.tar.xz
```

![](/nodejs/linux/linux-03.png)



[shell](./shell/) 输入命令，进入根目录

::: tip 说明
鼠标右键粘贴！`ctrl+v` 是不可用的
:::

```sh
sudo su root #切换到root帐号
cd / #进入根目录
```


![](/nodejs/linux/linux-04.png)



使用wget命令安装，粘贴刚才的下载链接

```sh
wget https://nodejs.org/dist/v17.9.1/node-v17.9.1-linux-x64.tar.xz
```

::: details 命令无反应？
用 yum 安装一下 wget 就好

```sh
yum install wget -y
```
:::


![](/nodejs/linux/linux-05.png)


然后解压，改名那里回车一下就好了

::: warning 注意
这里的版本号，改成自己下载的，否则无法解压
:::


```sh
#解压
tar xvf node-v17.9.1-linux-x64.tar.xz

#改名
mv node-v17.9.1-linux-x64 node-v17.9.1
```

![](/nodejs/linux/linux-06.png)


进目录查看，有就代表安装好了


```sh
cd /node-v17.9.1/bin && ls
```
![](/nodejs/linux/linux-07.png)



建立软连接

```sh
ln -sf /node-v17.9.1/bin/node /usr/local/bin/node
ln -sf /node-v17.9.1/bin/npm /usr/local/bin/npm
```

![](/nodejs/linux/linux-08.png)



重启Xshell，关掉重新打开才生效

```sh
#查看node版本号
node -v

#查看npm版本
npm -v 
```

::: details 报错了？

让你下对应版本吧，你不听，好了吧，要么换nodejs版本，要么 [参考教程安装GLIBC](https://blog.csdn.net/nilm61/article/details/134266633)

```sh
node: /lib64/libm.so.6: version `GLIBC_2.27' not found (required by node)
node: /lib64/libstdc++.so.6: version `GLIBCXX_3.4.20' not found (required by node)
node: /lib64/libstdc++.so.6: version `CXXABI_1.3.9' not found (required by node)
node: /lib64/libstdc++.so.6: version `GLIBCXX_3.4.21' not found (required by node)
node: /lib64/libc.so.6: version `GLIBC_2.28' not found (required by node)
node: /lib64/libc.so.6: version `GLIBC_2.25' not found (required by node)
```
:::

![](/nodejs/linux/linux-09.png)



查看目录列表，清理下安装包，就是标红的 `node***.tar.xz`

```sh
cd / && ls
```

![](/nodejs/linux/linux-10.png)


删除node安装包，复制下列命令

```sh
rm -rf node-v17.9.1-linux-x64.tar.xz
```


删完后，我们再进目录看一下，完美


![](/nodejs/linux/linux-11.png)



最后建议更换一下国内源 [阿里云源](https://www.npmmirror.com/) ，下载文件速度会快很多


```sh
#查看源
npm config get registry

#更换阿里云源
npm config set registry https://registry.npmmirror.com/

#换回默认源
npm config set registry https://registry.npmjs.org/
```

![](/nodejs/linux/linux-12.png)


::::







:::: details Windows安装


安装前，鼠标右键 - 我的电脑 - 属性，查看电脑系统类型

以我的 `64位` 操作系统为例

![](/nodejs/win/win-01.png)


进入下载页面 选择 [预构建安装程序](https://nodejs.org/zh-cn/download/prebuilt-installer)

选择`window` `x64`(自己的电脑系统类型)， `LTS`（Long-term support，长期维护版）

![](/nodejs/win/win-02.png)

点击下载即可

![](/nodejs/win/win-03.png)

双击打开 `.msi` 文件安装，别安装在C盘即可

![](/nodejs/win/win-04.png)

直接下一步，什么都不要勾选，直到完成

![](/nodejs/win/win-05.png)


安装好后，我们运行 `window键+R` 进入 `cmd` 终端

![](/nodejs/win/win-06.png)


查看一下版本号，有就说明成功了

```sh
node -v
npm -v
```

![](/nodejs/win/win-07.png)


最后建议更换一下国内源 [阿里云源](https://www.npmmirror.com/) ，下载文件速度会快很多


```sh
#查看源
npm config get registry

#更换阿里云源
npm config set registry https://registry.npmmirror.com/

#换回默认源
npm config set registry https://registry.npmjs.org/
```

![](/nodejs/win/win-08.png)



为方便后续使用，建议更改下全局模块

在安装目录下创建两个文件夹 `node_global` 和 `node_cache`

::: tip 说明
我的安装目录是 `D:\Program Files\nodejs`

请根据自己的来
:::

![](/nodejs/win/win-09.png)


打开 `cmd` 输入下列指令

::: warning 说明
全程请参照自己的安装目录来修改！！！

prefix：创建的node_global文件夹所在路径

cache：创建的node_cache文件夹所在路径
:::

```sh
npm config set prefix "D:\Program Files\nodejs\node_global"
npm config set cache "D:\Program Files\nodejs\node_cache"
```

![](/nodejs/win/win-10.png)


此电脑 - 右键 - 属性 - 高级系统设置

![](/nodejs/win/win-11.png)


环境变量 - `用户变量` - Path - 编辑

![](/nodejs/win/win-12.png)


点 npm 路径 - 编辑，修改为 `node_global` 的路径后确定

```
D:\Program Files\nodejs\node_global
```

![](/nodejs/win/win-13.png)


环境变量 - `系统变量` - 新建

变量名为 `NODE_PATH` ，值如下：

```
D:\Program Files\nodejs\node_global\node_modules
```

![](/nodejs/win/win-14.png)


环境变量 - `系统变量` - Path - 编辑

新建，添加node全局文件夹，确定

```
D:\Program Files\nodejs\node_global
```

![](/nodejs/win/win-15.png)



鼠标右键 - Nodejs文件夹 - 属性

安全 - 编辑，将所有权限都✔上

![](/nodejs/win/win-16.png)


关掉cmd重新打开，看是否能查询版本

```sh
node -v
npm -v
```

::::









:::: details Android安装

::: warning 建议
手机端并不适合开发，不是特别建议使用，除非临时调试
:::


下载 [Termux](https://termux.com/cn/) 安装并打开，它是一款安卓终端仿真器和Linux环境应用程序



![](/nodejs/and/and-01.png)


用自带apt管理器，升级系统软件包

```sh
apt update && apt upgrade
```

::: tip 说明
* 有 [Y/N] 的，都 `y`

* 有 [Y/I/N/O/D/Z] 的，默认 `回车`
:::

![](/nodejs/and/and-02.png)




用 apt 来安装 nodejs，完成后查看版本

```sh
#安装
apt install nodejs

#查询版本
node -v
npm -v
```

![](/nodejs/and/and-03.png)


手机已root的也可以直接使用 [MT管理器](https://mt2.cn/)，路径：


```
/data/data/com.termux/
```

::::









:::: details iOS安装

在 AppStore 下载并安装 [iSH shell](https://ish.app/) 

::: tip 说明
它是一款iOS端终端 [Alpine Linux](https://alpinelinux.org/) x86系统，采用 musl libc 和 busybox 构建 ，自带apk管理软件包

注意：由于IOS系统特殊性，只能使用npm，无法升级成yarn/pnpm
:::


![](/nodejs/ios/ios-01.png)




安装前，请更新镜像源和软件包

```sh
#更新源索引
apk update

#更新软件包
apk upgrade
```




node 和 npm 要分开安装

::: warning 注意
由于系统默认是v3.14，最新的 [Alpinelinux 中的 nodejs](https://pkgs.alpinelinux.org/packages?name=nodejs&branch=v3.14) 是 `14.21.3` 

无法使用 `yarn` 或者 `pnpm` 命令，只能使用npm
:::


```sh
#安装
apk add nodejs

#查询版本
node -v
```

```sh
#安装
apk add npm

#查询版本
npm -v
```

![](/nodejs/ios/ios-02.png)


其他命令，通过 `apk –help` 命令查看其他包管理命令

```sh
#安装包名
apk add 包名

#删除包
apk del 包名

#搜索包
apk search

#查看包信息
apk info
```


::::



## PNPM

可以利用npm来安装常用的 `yarn` / `pnpm` 等


::: code-group

```sh [pnpm]
#安装pnpm
npm install -g pnpm

#查看版本号
pnpm -v
```

```sh [yarn]
#安装yarn
npm install -g yarn

#查看版本号
yarn -v
```

```sh [bun]
#安装bun
npm install -g bun

#查看版本号
bun -v
```

:::


:::: details windows安装注意事项

`win键` + `R键`，输入 `cmd` 回车，进入命令命令终端后，再输入命令安装

---

win11 如果报错，是因为power shell的安全策略，不允许执行不安全脚本

`nrm : 无法加载文件 C:\Users\用户\AppData\Roaming\npm\nrm.ps1，因为在此系统上禁止运行脚本`

解决：搜索 `power shell` 或者 `power shell ISE` ，管理员方式打开，改成 `RemoteSigned` 策略组，然后全选A

```sh
#修改策略组
set-ExecutionPolicy RemoteSigned

#改回默认策略组
set-ExecutionPolicy Default
```

::: details PowerShell 策略组类型
* Restricted：可以执行单个的命令，但是不能执行脚本

* AllSigned：允许执行所有具有数字签名的脚本

* RemoteSigned：当执行从网络上下载的脚本时，需要脚本具有数字签名，否则不会运行这个脚本。如果是在本地创建的脚本则可以直接执行，不要求脚本具有数字签名

* Unrestricted：允许运行未签名的脚本，会有安全性提示

* BypassBypass：任何脚本都可以执行，并且不会有安全性提示

* UndefinedUndefined：没有设置脚本策略，会继承或使用默认的脚本策略
:::

::::












## 常见问题


::: details 输入版本号没反应
关掉重新打开，再次查询，没有及时没装好
:::



:::: details 如何卸载
::: code-group

```sh [pnpm]
#pnpm卸载
npm rm -g pnpm
```

```sh [yarn]
#yarn卸载
npm uninstall yarn -g
```

```sh [npm]
#npm卸载
npm uninstall npm -g

#卸载node
yum remove nodejs npm -y
```
:::
::::



::: details 三者的关系
pnpm > yarn > npm
:::


::: details Linux镜像源
更换后可以让文件下载快一点
```
* 阿里云源：https://npmmirror.com/

* 华为云源：https://mirrors.huaweicloud.com/

* 兰州大学源：https://mirror.lzu.edu.cn/

* 清华大学源：https://mirrors.tuna.tsinghua.edu.cn/

* 上海交大源：https://mirror.sjtu.edu.cn/

* 腾讯源：https://mirrors.cloud.tencent.com/

* 网易源：https://mirrors.163.com/

* 中科大USTC：https://mirrors.ustc.edu.cn/
```
:::
