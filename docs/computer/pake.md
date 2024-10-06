# Pake将网页打包成应用程序



## 简介

​Pake是一个将网页打包成桌面客户端的程序，它支持 Mac / Windows / Linux三个系统

使用的是 [Rust](https://www.rust-lang.org/zh-CN/) 框架的 [Tauri](https://tauri.app/zh-cn/)，相比 [Electron](https://www.electronjs.org/zh/) 要更轻快体积更小


![](/pake/pake-01.png)


::: tip 说明
下图演示：用微信读书网页版打包的程序
:::

![](/pake/pake-02.png)



## Fork项目

准备一个 [GitHub账号](../website/pages/github.md) ，进入仓库fork复刻项目

项目仓库：https://github.com/tw93/Pake

![](/pake/pake-03.png)


仓库名不用改，直接创建


![](/pake/pake-04.png)


这样我们就fork好了

![](/pake/pake-05.png)



## 打包项目

这里我们用GitHub Action，点击 `Action` ，再点同意条款声明

::: tip 说明
其实也可以下载到本地开发，但是没必要占用自己电脑的资源，Action不香吗
:::

![](/pake/pake-06.png)


选择 `Build App with Pake CLI` ，右侧信息除必填项，其他默认，最后运行Run

::: warning 信息填写
platform：根据安装的电脑系统选择，windows-latest表示windows系统安装

URL：填入打包的网页网址，不需要带 `https://`

NAME：名字可以自己随便写

ICON：图标需要使用链接，留空就会使用pake的默认图标
:::


![](/pake/pake-07.png)


等一会就跑起来了，这个过程会有点久

::: tip 说明
我是用 [小红书](https://www.xiaohongshu.com/) 演示的，也用了15分钟左右

`www.xiaohongshu.com`
:::


![](/pake/pake-08.png)

![](/pake/pake-09.png)


点进去，就能到到打包好的附件了，才不到4M，点击压缩包即可下载

![](/pake/pake-10.png)




## 安装

下载后解压，我们直接安装

::: tip 说明
* dmg格式：MAC安装包

* msi格式：Windows安装包

* AppImage格式：Linux安装包

* deb格式：Debian安装包(Debian是一个Linux发行版)
:::

![](/pake/pake-11.png)


安装过程没啥好说的，就简单看一下吧

![](/pake/pake-12.png)

![](/pake/pake-13.png)

![](/pake/pake-14.png)


最后打开就可以了，界面很舒服


![](/pake/pake-15.png)


## 其他

作者在 [releases](https://github.com/tw93/Pake/releases) 上传了一些已经打包的程序

如果有自己想要的就直接下，没有的就自己动手
