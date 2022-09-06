## Chrome等浏览器crx插件导出

</br>
</br>

下载安装插件后，时间久了下载地址忘了，又如何导出分享给好友呢

</br>
</br>

## 前言

</br>

油猴插件都会用吧，不知道的看 ☛ [油猴安装及使用教程](https://github.com/Yiov/notes/tree/main/tampermonkey)


</br>
</br>



## 演示

</br>

言归正传，开始导出

打开浏览器插件拓展管理，我这里用360演示

> 快捷进入`se://plugin-manager/`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/crx/crx-01.png)

右上角 `高级管理`，比如我想导出 DuckDuckGo，这个ID就是对应的插件

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/crx/crx-02.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/crx/crx-03.png)


那怎么找到这个ID呢，我们回到桌面，鼠标右键360浏览器-属性-打开文件所在位置

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/crx/crx-04.png)


我是安装在D盘的，其他盘根据这个目录找到目录

```
D:\Program Files (x86)\360se\360se6\User Data\Default\Extensions
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/crx/crx-05.png)


我要导出的DuckDuckGo的ID是：`bkdgflcldnnnapblkhphbgpggdiikppg` ，把相对应文件夹打开


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/crx/crx-06.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/crx/crx-07.png)


地址复制出来，点击 `打包扩展程序`，把地址粘贴进去，打包即可

```
D:\Program Files (x86)\360se\360se6\User Data\Default\Extensions\bkdgflcldnnnapblkhphbgpggdiikppg\2022.8.25_0
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/crx/crx-08.png)


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/crx/crx-09.png)


在同目录下会生成crx文件，我们把拖入浏览器，验证是否正确

> pem是证书文件，一般用不上，删掉就好了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/crx/crx-10.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/crx/crx-11.png)


</br>
</br>


## 常见问题

</br>

### 1.找不到浏览器的文件夹

可以用 `电脑自带的搜索功能` ，觉得慢可以也使用 * [Everything](https://www.voidtools.com/zh-cn/) 本地文件快速查找

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/crx/crx-12.png)

</br>

### 2.油猴里的插件可以导出么

油猴管理面板-实用工具-导出

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/crx/crx-13.png)


</br>



## 特别鸣谢


* [Everything](https://www.voidtools.com/zh-cn/)「快速查找本地文件和文件夹」
