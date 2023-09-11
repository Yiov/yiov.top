# 电脑常见问题汇总

::: warning 更新时间
最近更新：2023-4-30

注：本文长期更新 ...
:::


## 演示的条件

生活所需，购置了一台笔记本，与组装台式机还是有不同的

时隔十年，再次使用笔记本，也遇到很多坑，在此记录

::: tip 说明
这里不讨论性能，对我来说够用且完美
:::

* 品牌：联想小新Pro16 2022款 R7集显

* 系统：Win11

![](./lenovo.png)




## Windows hello

::: tip 说明
首次登录必须要设置这个PIN，不然无法跳过
:::

关闭方法：设置-账户-先关闭 其他设置里的

>为了提高安全性，仅允许此设备上的Microsoft账户使用windows hello登录

然后再到 登录方式中 将PIN删除

::: warning 注意
步骤不能反，不然删不了！！！
:::


![](./win11-01.png)





## bitlocker加密

头一次见，硬盘上了bitlocker加密，是我孤陋寡闻了，这个我肯定是要解的

::: tip 原因
因为我要重新分区，只有C盘和D盘肯定是不行的，至少多分出2个，用pe盘里的DG或者分区助手都可以

另外一个就是，重装系统不解密无法重装
:::


关闭方法：设置-隐私和安全-设备加密关闭即可

![](./win11-02.png)

如果想彻底删掉，[登录微软官网](https://www.microsoft.com/zh-cn/) - 头像 我的Microsoft账户 - 设备 `查看详细信息` - Btilocker数据保护 - 删除两个秘钥即可

::: tip 说明
不知道是哪一台电脑，在设置-系统里查看电脑名
:::

![](./win11-03.png)







## Fn键不使用

习惯了台式，真的不太适应组合键位

特别是 `F12` 开发者工具，非要两个手按 `Fn+F12`

关闭方法：`Fn+Esc`键

::: tip 说明
其他电脑可以自己看看，哪个键位上有这个Fnlock
:::

![](./win11-04.png)






## 开盖开机

这个就真无语，我只是打开放个键盘膜，就给我开机了，服气

关闭方法：开机不停按F2直到进入BIOS设置，将语言先改成 `简体中文`

![](./win11-05.png)

然后系统设置-下拉到 `开盖开机` ，选择关闭即可

![](./win11-06.png)






## 开机锁屏界面两侧技巧

跟个牛皮癣一样，影响视觉，点击还是跳转联想自己的浏览器

::: tip 说明
后来发现是联想的东西，在应用里全部卸载就可以了，巨难用
:::

关闭方法：桌面右键-个性化-锁屏界面，将个性化锁屏界面改成 `图片`

> 这里我也就发现了他们是啥，不要勾选 `在锁屏界面上获取花絮、提示、技巧等`

![](./win11-07.png)

另外屏幕超时锁屏也很快，可以自己改长一点

在下方 `屏幕超时`里面，我是直接改成了从不






## Edge浏览器净化


标签页简直是灾难级别，edge虽然好用但这广告也太杂了，又是牛皮癣


关闭方法：浏览器标签页 - 设置 - 自定义 - 内容关闭


![](./win11-08.png)





## 浏览器无网络

网络正常，但是各种网页都打不开，提示代理是否正确

::: tip 说明
前一天还好好的，突然不能用给我整蒙圈了
:::

解决：开始-搜 `Internet选项` - 连接 - 局域网设置 - 代理服务器的 勾取消掉

![](./win11-09.png)





## 桌面任务栏

这个看个人吧，我是喜欢清爽一点

关闭方法：设置-个性化-任务栏

::: tip 说明
我把任务视图和搜索都去除了，反正开始键里也可以搜
:::

![](./win11-10.png)






## 快捷方式箭头

和以前去除win10一样

原理其实也是修改了注册表，只不过是批处理

### 去掉小箭头

桌面右键新建一个文本文档，复制下面代码

```bat
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v 29 /d "%systemroot%\system32\imageres.dll,197" /t reg_sz /f
taskkill /f /im explorer.exe
attrib -s -r -h "%userprofile%\AppData\Local\iconcache.db"
del "%userprofile%\AppData\Local\iconcache.db" /f /q
start explorer
pause
```

粘贴，另存，名字自取，但后缀名一定要是`.bat`文件，然后右键以`管理员身份`运行

::: tip 说明
win11 一定要管理员身份，否则不生效
:::


![](./win11-11.png)


### 恢复小箭头

同样的方法，新建一个文本文档，复制代码粘贴，管理员方式运行即可恢复

```bat
reg delete "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v 29 /f
taskkill /f /im explorer.exe
attrib -s -r -h "%userprofile%\AppData\Local\iconcache.db"
del "%userprofile%\AppData\Local\iconcache.db" /f /q
start explorer
pause
```

![](./win11-12.png)











## 删除文件夹需要administrators的权限

这个问题常出现在盗版系统，利用官方的升级工具升级成正版系统，导致权限出现问题

::: tip 说明
所以升级系统，要么是系统自动OTA升级，要么重装

跨版本系统就容易出问题
:::

![](./win11-13.png)

鼠标右键 - 不能删除的文件夹 - 属性

![](./win11-14.png)

安全选项卡 - 高级

![](./win11-15.png)

所有者这里 点 `更改`

![](./win11-16.png)

点击下方的 `高级`

![](./win11-17.png)

立即查找，选择 `Administrators` ，确定

::: tip 说明
这里不要选择成了Administrator，正确的多一个`s`

Administrators：是超级用户组，包含了Administrator

Administrator：是超级用户
:::

![](./win11-18.png)


对象名称里就是你选择的用户组，然后确定

![](./win11-19.png)


勾选 `替换子容器和对象的所有者`

![](./win11-20.png)

回到属性卡，点编辑，选中 `Administrators` 用户组，并勾选 `完全控制`权限，确定

::: warning 注意
属性页卡的 `确定` 也要点，否则不生效
:::

![](./win11-21.png)

最后尝试文件夹删除即可







## 公众号主页链接


点开任意文章，草稿的也行，在链接中有一个 biz值


::: tip 比如
https://mp.weixin.qq.com/s?__biz=Mzk0MDU3MjA4Ng==&tempkey=MTIzNF9MTzF2TWJYak93VzY0YmRQVi1lc1pack5PMn
:::

文章的biz值就是：`Mzk0MDU3MjA4Ng==`


根据自己的文章修改后面的biz即可，结尾添加一个`#wechat_redirect`，可用于外链跳转

```
https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=你的biz值#wechat_redirect
```





