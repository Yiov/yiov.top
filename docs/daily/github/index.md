# Github的注册使用到上传


::: warning 更新时间
最近更新：2021-10-18
:::


Github是微软旗下的开源项目托管平台，也是 `全球最大同性交友网站` 

啊，不是 →_→，主要是男性比例重

除了可以找到无数的优质开源项目，也可以上传自己的作品





## 1.注册账号


Github官网：[https://github.com/](https://github.com/)

::: tip 说明
由于网站处于半墙状态，打不开，就继续刷新，没有办法

进入的界面是英文的，可以通过油猴安装 [☛GitHub汉化插件](https://greasyfork.org/zh-CN/scripts/407485-github-internationalization)
:::

![](./github-01.png)


点 `Singn up` 注册，填你的邮箱、密码、用户名即可，然后接收验证码

![](./github-02.png)

验证人机后，创建账户，然后输入验证码

![](./github-03.png)

![](./github-04.png)


注册好了，还需要填一些信息，跟我一样的小白，就选 `Just me` 和 `Student`

![](./github-05.png)


然后问你的兴趣，不选也可以，直接点继续下一步

![](./github-06.png)

这一步选免费账户，或者选择学生账户，学生账户有更多的权益，应该之后会需要学生认证，我没选并不清楚

![](./github-07.png)


选择 `Continue for free` ，即可创建完成，进入github

::: tip 说明
正常情况到这里，都会被墙一下，反复刷新等加载吧
:::

![](./github-08.png)






## 2.新建仓库


进入github了，我们点 `新建仓库`

![](./github-09.png)


仓库名自己取，别打中文字就行，新建仓库

::: tip 说明
这里的 `Add a README file` 文件，勾不勾选都不影响，后面可以自己上传
:::

![](./github-10.png)


创建完成后，就进去了我们的仓库页面

![](./github-11.png)






## 3.Github Desktop


::: tip 心酸泪
之前还用过git工具，全命令行界面，对新手不是很友好，为此我还熬夜专门写了篇文章

但自从用了GitHub Desktop，腰也不酸了，腿也不痛了，可视化界面真的便捷的吹到爆
:::

Github Desktop官方：[https://desktop.github.com/](https://desktop.github.com/)

::: tip 说明
下载不了的不要用迅雷，用浏览器自带的
:::

![](./github-12.png)


下载完成，双击安装包，会自动生成一个桌面快捷方式，同时打开登录界面

::: tip 说明
默认安装在C盘了
:::

![](./github-13.png)


点登入就会自动跳转到浏览器，然后要授权账号

![](./github-14.png)



点击授权后，打开desktop，被墙了重新打开

![](./github-15.png)



desktop打开后，要求我们设置用户名和邮箱

::: tip 说明
用户名默认，邮箱改成我们的常用邮箱即可，点Finish完成

设置的用处就是，为了知道远程仓库是谁上传的
:::

![](./github-16.png)







## 4.克隆仓库


选第2个，`Clone a repository` 克隆仓库

::: tip 说明
因为我们已经网页创建过了，这里只需要克隆即可

如果你没有创建，就选第3个，`Create a  new repository`
:::

![](./github-17.png)



这里的 `Local path` 路径，选择除C盘以外的盘符和文件夹，然后点 `Clone` 克隆

::: tip 说明
如果这里没显示，点击刷新即可，然后选择我们创建好的仓库
:::

![](./github-18.png)


完成后，就生成了.git的隐藏一个文件夹，这样就算完成了

::: tip 说明
隐藏文件可通过：文件夹顶部-查看-勾选 隐藏的项目
:::

![](./github-19.png)











## 5.上传


这样就进入了工作界面，现在里面还啥都没有

![](./github-20.png)



我们新建一个文件 `README.md`

![](./github-21.png)


Github Desktop界面变动，勾选文件 - 填写描述 - `Commit to main` 上传缓存区 -  `Publish` 推送

::: tip 说明
取消上传，在 `History`里右键选择 `undo`
:::

![](./github-22.png)


刷新下页面，就可以看到文件已经上传完成了

![](./github-23.png)







## 6.常见问题




#### 1.推送报错erro



```sh
fatal: unable to access 'https://github.com/XXX/copydog.git/' schannel: failed to receive handshake，SSL/TLS connection failed
```

被墙了，别慌，继续点 `pull Origin` 吧，等一会能连接了会自动上传了




#### 2.创建分支


默认main，想创建新的分支的，在Github Desktop顶部-Branch-NewBranch

删除/合并 分支都在这里面





#### 3.删除仓库


Github网页进入想删的仓库-设置，拉倒最底部，Delete this repository删除仓库




#### 4.把别人项目添加到自己的仓库


在别人的项目主页，右上角-Fork复刻




#### 5.误删文件找回/版本回退


Github Desktop修改区，有个History历史记录里找即可




#### 6.网页也被更改，同步到本地仓库


一键Fetch即可，Fetch Origin点一下会变成Pull Origin，再次点击即可同步