# 快速提取应用icon图标

::: warning 更新时间
最近更新：2023-9-11
:::



主要讲两种方式：[网页提取](#网页提取) 何 [软件提取](#软件提取)


## 网页提取

仅适用于：已在应用商店上架的应用

::: tip 说明
如果你图片要求质量高，不推荐此方式
:::




### 1.PC端

在相应官网下载即可，比如：微信

官网：https://weixin.qq.com/

![](./icon-01.png)


进官网后，鼠标右键-查看网页源代码

![](./icon-02.png)

找图片格式就行，我这里是png，右键保存即可

![](./icon-03.png)




### 2.安卓端

我们在应用宝里找即可，比如：微信

应用宝官网：https://sj.qq.com/

搜想要的应用：微信，长按查看图片，保存即可

![](./icon-04.png)



### 3.iOS端

由于iOS的特殊性无法直接打开查看，即便使用第三方浏览器可以打开，但是预览效果并不理想

::: tip
方案1：使用安卓机在 [Via浏览器](https://viayoo.com/zh-cn/) 中查看源代码

方案2：电脑网页打开，查看源代码
:::

从 App Store 找到应用复制链接出来，比如：微信

https://apps.apple.com/cn/app/id414478124

![](./icon-05.png)

查看源代码，找到 `AppIcon` 这一段png链接就是

![](./icon-06.png)

默认最小是246px，我们把链接最后 `246x0w.png` 改成 `1068x0w.png`

::: tip 说明
代码最后有说明max最大1068px
:::

```
https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/e4/bd/99/e4bd99ee-afda-3b81-cf17-5faa2960849e/AppIcon-0-1x_U007emarketing-0-4-0-sRGB-0-85-220.png/246x0w.png // [!code --]

https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/e4/bd/99/e4bd99ee-afda-3b81-cf17-5faa2960849e/AppIcon-0-1x_U007emarketing-0-4-0-sRGB-0-85-220.png/1068x0w.png // [!code ++]
```

![](./icon-07.png)

还可以用 HQ ICON 在线获取图标，输入应用名称即可

官网：https://icon.yukonga.top/

::: tip 说明
唯一不足是尺寸只有512px
:::

![](./icon-08.png)


还可以用快捷指令，效果一样的

https://www.icloud.com/shortcuts/1e38047c04b74604a7e60f5586a3d906



## 软件提取

常用于：未上架的应用，已上架的也可以，只要有安装包即可

### 1.PC端

我们需要用到工具：IconViewer

官网：https://botproductions.com/iconview/download.html

现在的电脑一般都是64位，下载第一个后，安装

![](./icon-09.png)

以 IconViewer 本身为例，提取他自己的图标

对着exe程序 - 鼠标右键 - 属性 - Icons选项卡

::: tip 说明
没有选项卡，说明没有安装成功
:::

![](./icon-10.png)

选择png的那个，导出也选择png格式保存即可

![](./icon-11.png)




### 2.安卓端

以 555电影 为例，在官网下载app

官网：https://www.555dy.app

![](./icon-12.png)

将下载的apk后缀名改成zip

::: tip 说明
本质上来说，apk也是zip格式的压缩包
:::

![](./icon-13.png)

然后解压，图标就在某个文件夹中，一般是在 assets 或者 res 中

![](./icon-14.png)

但是这样找太费事了，我们利用安卓机的特性，打开相册查找

找到最清晰的那个，将它移出来即可

::: tip 说明
移出来了压缩包和文件夹就可以删了
:::


![](./icon-15.png)


### 3.iOS端

这里不建议折腾，[直接网页提取即可](#_3-ios端)，非要折腾，先会 [轻松签](../../mobile/iPhone/sign/#轻松签) 再说

以 iBox 为例，先下载

123云盘：https://www.123pan.com/s/6ITiVv-RpSU3.html

![](./icon-16.png)

然后导入到轻松签，解压并查看文件

![](./icon-17.png)


进入目录就能看见图标了，点击保存到相册即可

![](./icon-18.png)



## 自制图标

如果你想替换图标，一键裁剪成应用需要的所有尺寸

图标工厂：https://icon.wuruihong.com/


