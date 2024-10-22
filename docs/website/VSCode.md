# VSCode的安装及使用




## 简介

VScode全称：Visual Studio Code，由微软开发的免费源代码编辑器

官网：https://code.visualstudio.com/

![](/VSCode/VSCode-01.png)


## 安装


官网会自动匹配你的系统，我用Windows系统演示

点击 `Download for Windows` 下载即可，Edge浏览器下载的需要点一下保留

![](/VSCode/VSCode-02.png)


双击下载的安装包-安装，这里文件夹别放C盘了

点击 浏览 - 选择一个文件夹 - 确定

![](/VSCode/VSCode-03.png)


看你们个人需求勾选，也可以全部勾选

::: tip 说明
* 资源管理器文件上下文菜单：可通过鼠标右键，选择使用 VScode 打开文件

* 资源管理器目录上下文菜单：可通过鼠标右键，选择使用 VScode 打开目录

* 受支持的文件类型编辑器：VScode支持的文件会有关联图标

* 添加到PATH（重启后生效）：默认勾选，建议勾选
:::

![](/VSCode/VSCode-04.png)



直到安装成功，进入主界面


![](/VSCode/VSCode-05.png)






## 插件

推荐一些自己比较喜欢的插件

:::: details 安装汉化包(必装)

左侧扩展栏，搜索框搜 `Chinese` ，点击 `Install` 安装简体中文

![](/VSCode/VSCode-06.png)


安装好之后，提示我们重启生效，重新打开界面后，就是全中文了

::: tip 说明
不点不生效，可卸载了重新安装再点击
:::

![](/VSCode/VSCode-07.png)


汉化了基本就能看懂了，就不赘述了

![](/VSCode/VSCode-08.png)
::::



::: details Power Mode(可选)

打字连击插件，插件栏搜：`Power Mode`，安装

![](/VSCode/VSCode-09.png)

安装好默认是关闭的，我们需要手动开启

文件 - 首选项 - 设置 - 扩展 - Power Mode，勾选 `Powermode：Enabled`

![](/VSCode/VSCode-10.png)

但是文字界面有抖动效果，下拉到 `Shake` ,将 Intensity 的值改成 `0`

![](/VSCode/VSCode-11.png)
:::




:::: details Vue - Official
一个ts文件导入vue组件的辅助插件

::: tip 说明
目前新版 `v2.0.28` 没有兼容好，报错，可以退回 `v2.0.26` 版本
:::

![](/VSCode/VSCode-12.png)
::::



::: details vscode-icons

文件夹图标，不喜勿用

![](/VSCode/VSCode-13.png)
:::


## 使用

使用上没什么特别，学会一直使用 `Ctrl+S` 保存就行


## 疑问解答


::: details 打不开文件，拖拽也不行，但指定文件夹后，又可以打开
插件引起的故障，关闭VS，打开目录 `C:\Users\Administrator\AppData\Roaming` ，删除code文件件，重新打开VS，重新安装插件即可
:::



::: details 如何使用Markdown
可以桌面新建一个txt文本，然后将后缀名txt改成 `md` ，用vscode打开即可，书写格式参考Markdown语法
:::



::: details Markdown怎么预览
书写界面右键-命令面板-上方搜 `Markdown:侧边预览` 即可使用
:::