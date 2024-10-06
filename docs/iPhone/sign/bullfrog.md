---
prev: false
next: false
---

# 牛蛙助手安装及使用



## 简介

最早接触的签名工具是 [爱思助手](https://www.i4.cn/) ，但全程都需要电脑，很麻烦

牛蛙的诞生就完美解决了这个问题，仅需首次需要电脑



## 安装


牛蛙助手官网：https://www.ios222.com/

![](/bullfrog/bullfrog-01.png)


下载打开，手机解锁屏幕，连接数据线安装


![](/bullfrog/bullfrog-02.png)

直到提示安装完成

![](/bullfrog/bullfrog-03.png)


打开手机桌面的牛蛙助手，获取UDID

![](/bullfrog/bullfrog-04.png)


跳转到网页，下载描述文件

![](/bullfrog/bullfrog-05.png)


设置 - 已下载描述文件，安装描述文件

::: details 其他入口
设置  -通用 - VPN与设备与管理 - 安装
:::

![](/bullfrog/bullfrog-06.png)

安装完成，跳转进入牛蛙主界面

![](/bullfrog/bullfrog-07.png)


点击 `IPA签名` ，右下 `证书` - 右上+号 `个人证书`

![](/bullfrog/bullfrog-08.png)

输入你的 `Apple ID和密码` ，认证成功即可生成个人证书

::: details 登录失败报错
1.确保密码正确，再次尝试登录

2.一般首次会被锁定，强制要求改密码，在设置中退出账号后重新登录，修改完 Apple ID 密码后再次尝试，或者半小时后再试
:::

![](/bullfrog/bullfrog-09.png)

::: tip 说明
个人证书有效期7天，企业证书要花钱买！
:::


## 使用



### 虚拟定位


点击虚拟定位，默认用蓝奏的镜像，这里提示`镜像挂载失败`

![](/bullfrog/bullfrog-10.png)


设置-通用-VPN与设备与管理-VPN，选择牛蛙助手，开关打开

再次回到APP，已经可以用了，权限给`使用App时允许`


![](/bullfrog/bullfrog-11.png)


先搜索一个自己要定位的地名，比如：东方明珠，点一下这个标记，然后点锁定即可

![](/bullfrog/bullfrog-12.png)


锁定成功，打开微信定位就可以看到，已经成功了

![](/bullfrog/bullfrog-13.png)


不使用了一定要解锁，否则就回不来了！！！

![](/bullfrog/bullfrog-14.png)




### 签名及多开


以 `微信` 签名及多开为例

点击下载 [砸好壳的微信ipa包](https://github.com/Yiov/wechat-dump/releases/tag/dump)，演示的版本是 `8.0.44`

::: tip 科普
这里的dump就表示砸壳，就是提取ipa安装包

因为苹果对安装包进行了加密，并包裹在了ipa上，砸壳的过程就是解密脱壳
:::


![](/bullfrog/bullfrog-15.png)

下载 - 点击下载好的文件

![](/bullfrog/bullfrog-16.png)

右上角分享 - 用 `牛蛙助手` 打开

![](/bullfrog/bullfrog-17.png)

发送，导入应用库

![](/bullfrog/bullfrog-18.png)

点微信 - 签名

![](/bullfrog/bullfrog-19.png)

这里我们多开就修改下 `应用名称` 和 `Bundle Identifier` 就好了，例如我在后面都加了个 `pro`

::: tip 说明
Bundle ID就是应用程序标识符，也叫应用ID，也叫包名，独一无二就相当于人的身份证

我们通过修改应用ID，就变成了两个完全独立的App，可共存安装，也就是多开
:::

![](/bullfrog/bullfrog-20.png)

根据自己需求也可以改一下图标，立即签名，签名成功，去安装

::: details 分享2个图片

![](/bullfrog/icon/icon-01.png)

![](/bullfrog/icon/icon-02.jpg)

:::

![](/bullfrog/bullfrog-21.png)


设置 - VPN - 勾选 `牛蛙助手` - 打开VPN开关


![](/bullfrog/bullfrog-22.png)

再去安装，安装好后返回桌面查看

![](/bullfrog/bullfrog-23.png)

现在还打不开，要信任一下

![](/bullfrog/bullfrog-24.png)


![](/bullfrog/bullfrog-25.png)

这样就能打开登录了

![](/bullfrog/bullfrog-26.png)



## 常见问题

::: details 疑问1：为什么应用名称改了没用
牛蛙每次签名自动默认原名称，并改掉应用ID

而应用ID还是按我们修改的来了
:::


::: details 疑问2：会封号吗
理论上来说，99.99%不会

本身就是原版未修改的ipa包，不存在封号一说

有插件的都未必封号，最多限制几小时登陆；修改过的微商版微信那肯定是会封
:::

::: details 疑问3：怎么卸载
卸载不能在桌面删，只能在 `已安装` 页卡，选中应用左滑即可卸载
:::

::: details 疑问4：再安装新版本微信聊天记录还在吗
只要签名的时候，应用ID和上次一样就可以直接覆盖安装，聊天记录都在
:::




