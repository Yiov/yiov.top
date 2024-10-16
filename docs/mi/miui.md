
# 小米线刷降级破MIUI限制






## 前言


[MIUI 12.5](https://miui12.home.miui.com/) 后小米限制了降级

本教程仅适用于 刷机时出现 `remote:update sparse crc list failed`

![](/miui/miui-01.png)



## 准备工作



### 备份


方便恢复数据，一定要备份！！

设置 - 更多设置 - 备份与恢复，建议选择电脑备份

::: details 为什么不选择手机备份
手机备份完成后，仍需要将文件拷贝到电脑，否则刷机后会丢失！

在 `MIUI-Backup-AllBackup` 文件夹可以找到备份文件

![](/miui/miui-03.png)
:::

![](/miui/miui-02.png)








---

### 下载ROM包



想要降回哪个版本，就去下载相应稳定/开发版包，下载后解压

::: details 稳定版和开发版区别

* 稳定版：Bug少，不可开启root

* 开发版：Bug多，可开启root，需在小米论坛申请内测资格并通过，然后去 [官网申请BL锁](http://www.miui.com/unlock/index.html)
:::

两个途径：[官方_小米论坛刷机包汇总](https://web.vip.miui.com/page/info/mio/mio/detail?postId=37093637) 或 [第三方_XiaomiRom](https://xiaomirom.com/)

![](/miui/miui-04.png)



---





### 官方刷机工具


下载 [MiFlash2020-3-14-0.rar](https://cdn.alsgp0.fds.api.mi-img.com/micomm/MiFlash2020-3-14-0.rar) ，然后解压出来

::: details 网传带下载包的版本
* [miflash pro](https://dzp.lanzouy.com/ij7Wk0g7755g)
:::

![](/miui/miui-05.png)





## 步骤


### Fastboot

手机关机后马上 `长按音量下键+电源键` ，进入线刷 `FASTBOOT` 兔子模式

并插入数据线，连接电脑

![](/miui/miui-06.png)


---

### 安装驱动

打开小米刷机工具文件夹，运行 `XiaoMiFlash.exe`

![](/miui/miui-07.png)


第一次下载使用的，点一下 `Driver` 安装一下驱动

![](/miui/miui-08.png)

安装过的，不用装了，停在这个界面就行

![](/miui/miui-09.png)



---

### 删除代码

这里推荐选择 `全部删除`，对应关系如下

::: tip 说明
全部删除 —— flash_all.bat

保留数据 —— flash_all_except_storage

全部删除并上BL锁 —— flash_all_lock.bat
:::


![](/miui/miui-10.png)


打开ROM包文件夹，找到 `全部删除` 的bat命令，鼠标右键 - 用记事本打开

![](/miui/miui-11.png)


编辑 - 查找 `Flash sparsecrclist error`

![](/miui/miui-12.png)


把包含 `Flash sparsecrclist error `这段整句全删掉！

从`fastboot`开始，到 `/B 1` 结束，且不留空格，删除后保存并退出

![](/miui/miui-13.png)


---

### 开始刷机

打开刷机工具，选择你ROM包的文件夹路径

::: tip 说明
这里注意你的ROM包文件夹的路径，一定要对

不知道路径的，进你的ROM包文件夹里，复制顶部的路径，粘贴过去就行
:::

![](/miui/miui-14.png)




然后点击 - `加载设备` - `刷机` 即可，会有绿色进度条

等300-400秒就可以完成了，开机还要等一会


![](/miui/miui-15.png)




## 常见问题



::: details 刷机出现couldn't find flash script
ROM文件夹位置没选对
:::


::: details 半天没开机
只要刷机显示success，就耐心等开机就行
:::


::: details 手机已开机，但刷机工具卡进度条800多秒
如果没开机，给我老实等着，千万不要动

如果已经开机了，就表示已经完成了，不用担心，拔掉数据线即可
:::

