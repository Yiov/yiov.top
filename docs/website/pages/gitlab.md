# GitLab的注册及使用




## 简介

GitLab 是一款基于网络的、强大的代码托管平台，旨在简化团队协作、版本控制和持续集成流程

中文名：极狐

官网：https://gitlab.com/

![](/pages/gitlab/gitlab-01.png)

## 注册

点击 [官网 Sign in](https://gitlab.com/users/sign_in) 注册，这里建议使用第三方

因为直接注册会被识别IP为国内，强制跳转 [极狐SaaS](https://gitlab.cn/saasmigration/)

![](/pages/gitlab/gitlab-02.png)


我选择用 [GitHub](./github.md) 关联注册，邮箱也是共用的，输入验证码

::: details 页面没有加载出来
刷新几次，实在不行，挂个梯子
:::

![](/pages/gitlab/gitlab-03.png)

验证手机号，但是！没有 `+86` 的选项，真恶心！

我们曲线救国，按 `F12` 键进入开发者模式

![](/pages/gitlab/gitlab-04.png)

我使用的是 [Edge浏览器](https://www.microsoft.com/zh-cn/edge/download) ，点击 `网络`

![](/pages/gitlab/gitlab-05.png)

刷新一下页面，找到 `countries`，`发起程序` 中找到 `countries` ，点击 `resolvers.js:46`

::: details 发起程序中没找到countries
将开发者页面拉大一点，或者参数被收纳到一起了，点展开了再找
:::
![](/pages/gitlab/gitlab-06.png)

在 `resolvers.js` 中找到 `date.map...` 这一行，一般在48行


在 `48` 前面显示小红点的位置，单击点一下，打个断点

![](/pages/gitlab/gitlab-07.png)

断点处就会显示这个js文件了

![](/pages/gitlab/gitlab-08.png)

再次刷新页面，作用域会自动加载 `date` 数据

![](/pages/gitlab/gitlab-09.png)

展开第一个0-99，Array的数值双击修改，`0` 改成 `"CN"` ，`3` 改成 `"86"`

![](/pages/gitlab/gitlab-10.png)

修改好了，我们在验证码页面放行

![](/pages/gitlab/gitlab-11.png)

然后选择修改好的 `+86` ，输入手机号，却无法发验证码

点击下面 `改为信用卡验证`

![](/pages/gitlab/gitlab-12.png)

直到跳出 `验证` 小窗，先别着急验证，返回 `改为电话号码验证`

::: details 还是没有出来
反复切换，还没有就刷新一下，再次切换
:::

![](/pages/gitlab/gitlab-13.png)

输入手机号，开始验证，开发者工具可以按 `F12` 关了

::: tip 怎么验证？看不懂
选出一个图片中，两个骰子的正上面，图案相同的那一个

比如：我这个是选第4个，两个飞机
:::

![](/pages/gitlab/gitlab-14.png)

大概要验证5次

![](/pages/gitlab/gitlab-15.png)

成功完成验证

![](/pages/gitlab/gitlab-16.png)

这里要选角色和注册原因，自己看着选吧

![](/pages/gitlab/gitlab-17.png)

首次进入要创建项目或导入，先随便输吧，进去后再删

![](/pages/gitlab/gitlab-18.png)

进入后问你是否邀请人员，直接关掉即可

![](/pages/gitlab/gitlab-19.png)




## 汉化

英文看不懂，没关系，我们先汉化

点头像 - Preferences 偏好设置

![](/pages/gitlab/gitlab-20.png)

Localization - Language - 选择 `简体中文` - Save Changes 保存

![](/pages/gitlab/gitlab-21.png)

保存后，刷新即可

![](/pages/gitlab/gitlab-22.png)





## 主页

直接进 [GitLab官网](https://gitlab.com/) ，就可以进入仪表盘页面了

![](/pages/gitlab/gitlab-23.png)

点击头像 - 可进入个人项目主页

::: tip 说明
自己设置一下密码，头像 - 编辑个人资料 - 左侧菜单栏 密码
:::

![](/pages/gitlab/gitlab-24.png)




## 使用


GitLab没有专用的客户端，基于git使用

请参考 [Git使用及上传代码到仓库](./git.md)




::: details 删除项目

注册时创建的项目，我们现在演示删除

点头像 - 用户名主页，左侧菜单栏 `个人项目`

![](/pages/gitlab/gitlab-25.png)

进入项目 - 三个点 `…` - 项目设置

![](/pages/gitlab/gitlab-26.png)

下拉到底 高级 - `展开`

![](/pages/gitlab/gitlab-27.png)

下拉到底，删除项目

![](/pages/gitlab/gitlab-28.png)

输入项目名，确定删除即可

![](/pages/gitlab/gitlab-29.png)

:::






::: details 删除群组


点头像 - 用户名主页，左侧菜单栏 `群组`，点击要删的群组

![](/pages/gitlab/gitlab-30.png)

进入群组 - 三个点 `…` - 群组设置

![](/pages/gitlab/gitlab-31.png)

下拉到底 高级 - `展开`

![](/pages/gitlab/gitlab-32.png)

下拉到底，删除群组

![](/pages/gitlab/gitlab-33.png)

输入群组名，确定删除即可

![](/pages/gitlab/gitlab-34.png)

:::