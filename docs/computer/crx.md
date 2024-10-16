# 浏览器crx插件导出



## 简介

安装插件后，下载地址忘了，或者发给不会翻墙的朋友，这时候导出插件就用上了


## 演示


:::: details 360浏览器演示

打开360浏览器，地址栏输入下面路径进入插件拓展管理

::: tip 说明
也可以直接点右上角的插件管理进入
:::

```
se://plugin-manager/
```

![](/crx/crx-01.png)

比如我想导出 `DuckDuckGo`，右上角 `高级管理`

![](/crx/crx-02.png)

这个ID就是对应的插件

![](/crx/crx-03.png)


那怎么找到这个ID呢，我们回到桌面，鼠标右键360浏览器-属性-打开文件所在位置

![](/crx/crx-04.png)


我是安装在D盘的，其他盘根据这个目录找到目录

```
D:\Program Files (x86)\360se\360se6\User Data\Default\Extensions
```

![](/crx/crx-05.png)


我要导出的DuckDuckGo的ID是：`bkdgflcldnnnapblkhphbgpggdiikppg` ，打开相对应文件夹


![](/crx/crx-06.png)

![](/crx/crx-07.png)


地址复制出来，点击 `打包扩展程序`，把地址粘贴进去，打包即可

```
D:\Program Files (x86)\360se\360se6\User Data\Default\Extensions\bkdgflcldnnnapblkhphbgpggdiikppg\2022.8.25_0
```

![](/crx/crx-08.png)


![](/crx/crx-09.png)


在版本号的同目录下会生成crx文件，我们把拖入浏览器，验证是否正确

> pem是证书文件，一般用不上，删掉就好了

![](/crx/crx-10.png)

![](/crx/crx-11.png)

::::





:::: details Edge浏览器演示

打开Edge浏览器，地址栏输入下面路径进入插件拓展管理

::: tip 说明
也可以直接点右上角的插件管理进入
:::

```
edge://extensions/
```

![](/crx/crx-12.png)


打开右侧这个 `开发者模式` 开关

![](/crx/crx-13.png)


比如：我们想打包 `微软tts` 这个插件

我们可以轻松的看到插件的ID

![](/crx/crx-14.png)


Edge插件默认位置在

```
C:\Users\你的用户名\AppData\Local\Microsoft\Edge\User Data\Default\Extensions
```

看不到 `AppDate` ，在上方属性-文件夹选项-查看里打开 `显示隐藏文件夹`

![](/crx/crx-15.png)

根据插件的ID，就可以轻松找到插件文件夹

![](/crx/crx-16.png)


我们进入插件目录页面，复制上方路径路径

::: tip 说明
我这里的 `5.0.1_0` 是插件的版本号

还要再进去一层
:::

![](/crx/crx-17.png)

将地址粘贴到浏览器 `拓展根目录` ，然后点 `打包拓展`，确定

![](/crx/crx-18.png)

![](/crx/crx-19.png)


自动生成在插件版本号，同级目录中

这样，我们就可以发别人安装了

> pem是证书文件，一般用不上，删掉就好了

![](/crx/crx-20.png)


::::






## 常见问题



::: details 找不到浏览器的文件夹

可以用 `电脑自带的搜索功能` ，觉得慢可以也使用 [Everything](https://www.voidtools.com/zh-cn/) 本地文件快速查找

![](/crx/crx-21.png)

:::



::: details 油猴里的插件可以导出么

油猴管理面板 - 实用工具 - 导出

![](/crx/crx-22.png)
:::


## 特别鸣谢


* [Everything](https://www.voidtools.com/zh-cn/)「快速查找本地文件」
