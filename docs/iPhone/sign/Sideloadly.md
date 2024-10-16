---
prev: false
next: false
---

# Sideloadly安装及使用

## 简介

优点：免越狱且免费，支持 Windows 和 macOS

缺点：需手机连接电脑操作，且一个Apple ID只能签名3个应用，与 [爱思助手](https://www.i4.cn/) 差不多


## 安装


官网：https://sideloadly.io/

点击 `Download` ， 这里根据自己电脑系统下载

![](/Sideloadly/Sideloadly-01.png)

我的电脑 - 右键属性 - 系统类型显示的有 `32` 或者 `64` 位

![](/Sideloadly/Sideloadly-02.png)


下载完成后，双击安装，不装C盘就行，安装就不用说了吧

![](/Sideloadly/Sideloadly-03.png)


安装完成后，双击打开

![](/Sideloadly/Sideloadly-04.png)




## 签名


我在 [@SmileZXLee](https://github.com/SmileZXLee/IpaDownloadTool) 下了个 [ipa下载器](http://www.zxlee.cn/ipaDownloadTool/release/ipaDownloadTool-2.1.1.ipa) 的软件包，用来签名安装演示，其他安装同理

把ipa包拖入，然后看一下界面

![](/Sideloadly/Sideloadly-05.png)


手机连接数据线插入电脑，我们输入Apple ID账号后，点 `start` 开始

会要输入苹果ID密码，有开验证的还要输入验证码

::: tip 说明
提示 Login failed 就是登录失败，反复试，我试了20好几次才成功

这是唯一的难点，可以试试挂梯子会不会好点
:::

![](/Sideloadly/Sideloadly-06.png)

等到提示 `complete `完成即可，应用已经签名并安装好了

![](/Sideloadly/Sideloadly-07.png)


我们打开app，提示需要信任证书

![](/Sideloadly/Sideloadly-08.png)


设置-通用-VPN与设备管理-显示自己的苹果ID处-信任

![](/Sideloadly/Sideloadly-09.png)

再次打开APP即可使用

::: tip 说明
注：7天后需要重新签哦
:::

![](/Sideloadly/Sideloadly-10.png)


最后的最后，了解一下高级选项的功能


![](/Sideloadly/Sideloadly-11.png)





## 常见问题


::: details 设备信息没显示
手机未信任电脑，重新拔插手机信任；实在搞不定用爱思助手连接好了，再打开此软件
:::


::: details 苹果账号是手机号
在账号前加86，如手机为13300008888，则账号为：`8613300008888`
:::


::: details 输入密码闪退
可以尝试打开 `Advanced options` 高级选项 - 身份验证 改为远程 `Remote`
:::


::: details 未收到手机验证码
可以尝试手机 - 设置 - Apple ID - 密码与安全性 - 获取验证码
:::


