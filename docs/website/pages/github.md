# Github的注册及使用





## 简介

Github是微软旗下的开源项目托管平台，有无数的优质开源项目

同时也是 `全球最大同性交友网站` ，啊，不是 →_→，主要是男性比例重


官网：https://github.com/

![](/pages/github/github-01.png)



## 注册


在 [官网](https://github.com/) 点击 `Sign up` 注册，填你的邮箱、密码、用户名即可，然后接收验证码

::: tip 说明
由于网站处于半墙状态，打不开，反复刷新 或者 [挂梯子](../../gfw/proxy.md)

进入的界面是英文的，可以通过 [油猴](../../computer/tampermonkey.md) 安装 [☛GitHub汉化插件](https://greasyfork.org/zh-CN/scripts/407485-github-internationalization)
:::

![](/pages/github/github-02.png)

验证人机后，创建账户，然后输入验证码

![](/pages/github/github-03.png)

![](/pages/github/github-04.png)


注册好了，还需要填一些信息，跟我一样的小白，就选 `Just me` 和 `Student`

![](/pages/github/github-05.png)


然后问你的兴趣，不选也可以，直接点继续下一步

![](/pages/github/github-06.png)

这一步选免费账户，或者选择学生账户

学生账户有更多的权益，应该之后会需要学生认证，我没选并不清楚

![](/pages/github/github-07.png)


选择 `Continue for free` ，即可创建完成，进入github

::: tip 说明
正常情况到这里，都会被墙一下，反复刷新等加载进入即可
:::

![](/pages/github/github-08.png)






## 使用




:::: details 新建仓库


进入github了，我们点 `新建仓库`

![](/pages/github/github-09.png)


仓库名自己取，别打中文字就行，新建仓库

::: tip 说明
这里的 `Add a README file` 文件，勾不勾选都不影响，后面可以自己上传
:::

![](/pages/github/github-10.png)


创建完成后，就进去了我们的仓库页面

![](/pages/github/github-11.png)


::::









:::: details 客户端：Github Desktop


下载 [Github Desktop](https://desktop.github.com/) 并安装

::: tip 说明
下载不了的不要用迅雷，用浏览器自带的
:::

![](/pages/github/github-12.png)


下载完成，双击安装包，会自动生成一个桌面快捷方式，同时打开登录界面

::: tip 说明
默认安装在C盘了
:::

![](/pages/github/github-13.png)


点登入就会自动跳转到浏览器，然后要授权账号

![](/pages/github/github-14.png)



点击授权后，打开desktop，被墙了重新打开

![](/pages/github/github-15.png)



desktop打开后，要求我们设置用户名和邮箱

::: tip 说明
用户名默认，邮箱改成我们的常用邮箱即可，点Finish完成

设置的用处就是，为了知道远程仓库是谁上传的
:::

![](/pages/github/github-16.png)

选第2个，`Clone a repository` 克隆仓库到本地

::: tip 说明
因为我们已经网页创建过了，这里只需要克隆即可

如果你没有创建，就选第3个，`Create a  new repository`
:::

![](/pages/github/github-17.png)



这里的 `Local path` 路径，可以自行选择存放的文件夹，然后点 `Clone` 克隆

::: details 这里没有显示
点击刷新即可，然后选择我们创建好的仓库
:::

![](/pages/github/github-18.png)


完成后，在文件夹里就生成了 `.git` 的隐藏一个文件夹，这样就算完成了

::: details 没看到隐藏文件
文件夹顶部-查看-勾选 隐藏的项目
:::

![](/pages/github/github-19.png)



::::









:::: details 代码上传


进入Github Desktop工作界面，现在里面还啥都没有

![](/pages/github/github-20.png)



在文件夹内添加点东西，比如：新建 - 文本文档，然后重命名为 `README.md`

::: details 看不到文件拓展名
文件夹上方 - 查看 - 勾选 `文件拓展名`
:::

![](/pages/github/github-21.png)


有文件更新后，客户端界面就有了变动

勾选文件 - 填写描述 - `Commit to main`(上传缓存区) -  `Publish`(推送)

::: details 如何取消上传
在 `History`里右键选择 `undo`；没有undo说明时间太久了，只能先提交了
:::


::: details 推送报错erro：fatal: unable to access
github被墙了，别慌，要么继续点，要么[挂梯子](../../gfw/proxy.md)
:::


![](/pages/github/github-22.png)


刷新下页面，就可以看到文件已经上传完成了

![](/pages/github/github-23.png)

::::








:::: details 静态托管


其实就是 [Github Page](https://pages.github.com/) ，可以将静态网页内容部署到它的服务器上

![](/pages/githubpage/githubpage-01.png)


新建仓库，输入 `账户名.github.io`，仓库公开即可，确定

::: tip 说明
比如我的：yiov.github.io
:::

![](/pages/githubpage/githubpage-02.png)


这样就建好了

![](/pages/githubpage/githubpage-03.png)



用GitHub Desktop克隆仓库到本地，然后放入网页源代码

我这里使用 [@张洪Heo的微信关注页面](https://github.com/zhheo/Wechat-Official-Account-Web) 演示，下载

::: tip 说明
请按照文档，修改成自己的图片及文本
:::

![](/pages/githubpage/githubpage-04.png)

解压后，放入克隆下来的文件夹

![](/pages/githubpage/githubpage-05.png)

用GitHub Desktop上传即可

![](/pages/githubpage/githubpage-06.png)


上传完成，我们回到github刷新网页，这样就上传完成了

::: details 推送报错erro：fatal: unable to access
github被墙了，别慌，要么继续点，要么[挂梯子](../../gfw/proxy.md)
:::

![](/pages/githubpage/githubpage-07.png)



在 `Setting - page` 这里的 `https://yiov.github.io` 就是我们的网页了

![](/pages/githubpage/githubpage-08.png)

可以访问试试看看，这样就OK了

![](/pages/githubpage/githubpage-09.png)


::::











:::: details 静态托管：自定义域名

如果想用自己的域名，先去 [购买一个域名](../domain/)

然后再域名解析处添加一个 `CNAME` 值，记录值填这个网址 `yiov.github.io`

::: tip 说明
我这里用的二级域名 `doc` 
:::

![](/pages/githubpage/githubpage-10.png)


回到github设置，下拉在自定义域名里填入我们的二级域名，保存

等解析完成，过程会有点慢，直到显示 `DNS Check successful`即可

::: tip 说明
我这里是 `doc.***.com`

建议是勾选 htpps
:::

![](/pages/githubpage/githubpage-11.png)

然后我们就能看到域名已经变成自己的了

::: warning 注意
如果你要删除域名，先删掉输入的域名，然后再点`移除`

否则只点移除是没用的
:::

![](/pages/githubpage/githubpage-12.png)


::::




## 常见问题



::: details 如何创建分支
默认main，想创建新的分支的，在Github Desktop顶部 - Branch-NewBranch
:::



::: details 如何删除仓库
Github网页进入想删的仓库-设置，拉倒最底部，Delete this repository 删除仓库
:::


::: details 如何把别人项目添加到自己的仓库
在别人的项目主页，右上角 - Fork复刻
:::



::: details 网页端修改了，如何同步到本地仓库
在客户端点一键Fetch即可，Fetch Origin点一下会变成Pull Origin，再次点击即可同步
:::



::: details 能托管多少个静态网站

* 一个：帐户名只能一个，比如：`用户名.github.io`

* 多个：仓库可以有无数个，比如：`用户名.github.io/仓库名`，只需要在仓库页面下选择 Setting - pages，分支为main，选择root保存
:::

