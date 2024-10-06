# 提取应用icon图标




## 简介

有些特殊的情形我们需要应用图标

* [网页提取](#网页提取)

* [软件提取](#软件提取)

* [自制图标](#自制图标)


## 网页提取


::: tip 说明
仅适用于已在应用商店上架的应用
:::


---

### PC端

在相应官网下载即可，比如：微信

官网：https://weixin.qq.com/

![](/icon/icon-01.png)


进官网后，鼠标右键-查看网页源代码

![](/icon/icon-02.png)

找图片格式就行，我这里是png，右键保存即可

![](/icon/icon-03.png)


---


### 安卓端

我们在应用宝里找即可，比如：微信

应用宝官网：https://sj.qq.com/

搜想要的应用：微信，长按查看图片，保存即可

![](/icon/icon-04.png)


---

### iOS端 {#ios}

由于iOS的特殊性无法直接打开查看，即便使用第三方浏览器可以打开，但是预览效果并不理想

::: tip
方案1：使用安卓机在 [Via浏览器](https://viayoo.com/zh-cn/) 中查看源代码

方案2：电脑网页打开，查看源代码
:::

从 App Store 找到应用复制链接出来，比如：微信

https://apps.apple.com/cn/app/id414478124

![](/icon/icon-05.png)

查看源代码，找到 `AppIcon` 这一段png链接就是

![](/icon/icon-06.png)

默认最小是246px，我们把链接最后 `246x0w.png` 改成 `1068x0w.png`

::: tip 说明
代码最后有说明max最大1068px
:::

```
https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/e4/bd/99/e4bd99ee-afda-3b81-cf17-5faa2960849e/AppIcon-0-1x_U007emarketing-0-4-0-sRGB-0-85-220.png/246x0w.png // [!code --]

https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/e4/bd/99/e4bd99ee-afda-3b81-cf17-5faa2960849e/AppIcon-0-1x_U007emarketing-0-4-0-sRGB-0-85-220.png/1068x0w.png // [!code ++]
```

![](/icon/icon-07.png)

还可以用 HQ ICON 在线获取图标，输入应用名称即可

官网：https://icon.yukonga.top/

::: tip 说明
唯一不足是尺寸只有512px
:::

![](/icon/icon-08.png)


还可以用快捷指令，效果一样的

https://www.icloud.com/shortcuts/1e38047c04b74604a7e60f5586a3d906



## 软件提取

::: tip 说明
常用于未上架的应用，已上架的也可以，只要有安装包即可
:::

---

### PC端

我们需要用到工具：IconViewer

官网：https://botproductions.com/iconview/download.html

现在的电脑一般都是64位，下载第一个后，安装

![](/icon/icon-09.png)

以 IconViewer 本身为例，提取他自己的图标

对着exe程序 - 鼠标右键 - 属性 - Icons选项卡

::: tip 说明
没有选项卡，说明没有安装成功
:::

![](/icon/icon-10.png)

选择png的那个，导出也选择png格式保存即可

![](/icon/icon-11.png)



---


### 安卓端

以 555电影 为例，在官网下载app

官网：https://www.555dy.app

![](/icon/icon-12.png)

将下载的apk后缀名改成zip

::: tip 说明
本质上来说，apk也是zip格式的压缩包
:::

![](/icon/icon-13.png)

然后解压，图标就在某个文件夹中，一般是在 assets 或者 res 中

![](/icon/icon-14.png)

但是这样找太费事了，我们利用安卓机的特性，打开相册查找

找到最清晰的那个，将它移出来即可

::: tip 说明
移出来了压缩包和文件夹就可以删了
:::


![](/icon/icon-15.png)


---


### iOS端

这里不建议折腾，[直接网页提取即可](#ios)，非要折腾

先下载安装好 [轻松签](../iPhone/sign/esign.md)，以 iBox 为例

下载：https://www.mediafire.com/file/o3x8js5vb2xhrdy/

![](/icon/icon-16.png)

下载 - 选择刚下载好的ibox

![](/icon/icon-17.png)

长按 - 分享 - 选择轻松签

![](/icon/icon-18.png)

然后导入到轻松签，解压并查看文件

![](/icon/icon-19.png)


进入目录就能看见图标了，点击保存到相册即可


![](/icon/icon-20.png)

## 自制图标

如果你想替换图标，一键裁剪成应用需要的所有尺寸

图标工厂：https://icon.wuruihong.com/


