# git使用及上传代码到仓库


::: warning 更新时间
最近更新：2021-9-21
:::


网上教程对我这种小白，越看越头疼。于是自己边摸索，边写了这篇教程

官网：[https://git-scm.com/](https://git-scm.com/)

::: tip 说明
Git入门教程:[https://www.githubs.cn/post/git-tutorial](https://www.githubs.cn/post/git-tutorial)
:::

![](./git-01.png)





## 1.下载安装


根据自己的系统下载git，本次演示仅为windows

[https://git-scm.com/downloads](https://git-scm.com/downloads)

![](./git-02.png)


安装的时候，这里要勾选

![](./git-03.png)


下载安装完成后 选择Launch Git Bash启动


![](./git-04.png)






## 2.设置账户


打开git后是这样的界面

![](./git-05.png)


名字修改一下，再粘贴

```sh
#"DzPian"更改成你github用户名
git config --global user.name "DzPian"
```


鼠标右键-Paste粘贴，`不要用ctrl v`

![](./git-06.png)


![](./git-07.png)


回车，然后设置邮箱

```sh
#"490857007@qq.com"这里填你的邮箱
git config --global user.email "490857007@qq.com"
```

![](./git-08.png)


设置的用处就是，为了知道远程仓库是谁上传的

有没有设置成功，可以输入命令查看

```sh
#查看身份
git config user.name
git config user.email
```





## 3.新建本地仓库


自己在任意盘符创建一个文件夹，命名自己取

::: tip 说明
例：我在F盘新建了一个文件夹，命名为Github，然后再创建子文件夹copydog
:::

![](./git-09.png)

`copydog` 就是我的仓库项目名，我们cd进文件夹

::: tip 说明
斜杠不能掉，大小写无所谓
:::

```sh
#f是F盘，自己根据自己的盘符和文件夹改
cd /f/github/copydog
```

或者简单粗暴git bash文件夹，空白处，鼠标右键- `Git Bash Here` ，一样也能进入页面

![](./git-10.png)



我们初始化项目git init就可以远程上传了

```
git init
```
![](./git-11.png)


注意这里后面的蓝色 `master` 分支要转换成 `main`

::: tip 说明
以前的github默认是master分支，为避免这个词产生歧义，2020年10月改成了main

而git工具还是默认的master，我们先转换下分支了才能正确上传
:::

```
git checkout main
```
![](./git-12.png)




创建完成后会在本地生成一个.git的隐藏文件

![](./git-13.png)



看不到的是因为系统默认隐藏了文件，查看里面打开即可，不打开也没有关系，以免你误删

![](./git-14.png)



通过 ls -al 来查看一下，到这里本地仓库就建立完成了

```
ls -al
```

![](./git-15.png)






## 4.创建连接



用 `~/.ssh` 检查一下是否有SSH Key

```sh
~/.ssh

#显示ssh: Is a directory，表示有
#显示ssh: No such file or directory，表示没有
```

![](./git-16.png)


没有就输入命令创建SSH Key

```sh
#"490857007@qq.com"填你自己的邮箱
ssh-keygen -t rsa -C "490857007@qq.com"
```

直接3次回车即可

::: tip 说明
第1次问你保存在哪，默认就行，回车

第2次问你密码，默认空白，回车

第3次要你确认密码，默认空白，回车
:::


![](./git-17.png)


刚才的 SSH key 代码默认生成 `id_rsa` 和 `id_rsa.pub` 两个秘钥文件

在 `C:\Users\Administrator\.ssh` 目录下找到 `id_rsa.pub` 鼠标右键-用记事本打开

![](./git-18.png)



打开Github，右上角-头像-设置

![](./git-19.png)


点击 SSH与GPG公钥，创建New SSH key

![](./git-20.png)

标题随便起，key是刚刚生成的SSH key，全选了，复制粘贴进去

![](./git-21.png)


授权，输入你github的登录密码

![](./git-22.png)

SSH key就创建好了，邮箱也会收到通知

![](./git-23.png)

![](./git-24.png)



在git Bash 中输入以下代码，测试一下


```sh
#默认git@github.com不要改
ssh -T git@github.com
```

这里问你是否继续连接，输入yes，回车

::: tip 提示
You’ve successfully authenticated, but GitHub does not provide shell access.

已经验证，但还不能shell访问，我们继续
:::


![](./git-25.png)








## 5.添加远程仓库


进入自己的仓库，点击SSH连接并复制

![](./git-26.png)



然后，更改下方代码

```sh
git remote add origin 这里是你的SSH连接地址

#如：git remote add origin git@github.com:DzPian/copydog.git
```


![](./git-27.png)


输入git remote -v查看是否成功

```sh
git remote -v

#push是推送，fetch是获取，有就是正常

#git remote remove origin
#断开仓库连接，慎用
```


![](./git-28.png)






## 6.上传





提交上传很简单，add后面的 `.` 不能漏掉

::: tip 前提条件
你在本地仓库放了新文件，脚本或者文件夹都可以
:::

```sh
git add .

#git add 只将修改的文件添加缓存区
#git add +文件名.文件类型 ，将某个文件加到缓存区
#git add +文件名.文件类型 ... 文件名.文件类型 ，将n个文件添加到缓存区
#git add xx文件夹/*.html 将xx文件夹下的所有的html文件添加到缓存区。
#git add *hhh  将以hhh结尾的文件的所有修改添加到暂存区
#git add Hello*  将所有以Hello开头的文件的修改添加到暂存区
#git add -u  提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)
#git add . 提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件
#…
#git add -A 提交所有变化。git add前几条都可以记不住，这个必须记住！！！
```

![](./git-29.png)


添加描述

```bash
git commit -m “这里描述上传了什么”

#如：git commit -m “描述文件README”
```



![](./git-30.png)



推送到远程仓库，去网页版刷新一下，就能看到了

::: tip 说明
默认分支是main，除非你想创建其他分支
:::

```sh
#第1次推送使用-u，之后就不用了
git push -u origin main

#常用推送命令
git push origin main

#强制推送，报错懒得处理，建议少用
#git push origin main-f
```

![](./git-31.png)






## 7.常见问题



#### 1. 分支错误

原来的master变成了 `master rebase 1/2` 之类的，用abort回退即可

```sh
git rebase --abort
```

出现 `main|MERGING` ，回退

```sh
git reset --hard head
```



#### 2. 删除分支

如果你上传错了分支，不是main而是传到了分支，在网页仓库点分支删除




#### 3. 修改注释

修改后，别忘了push

```sh
#修改内容
git commit --amend -m "你要修改的内容"

#更新推送
git push origin main
```




#### 4. 修改文件名


```sh
#修改内容
git commit -m "你要修改的文件名"

#更新推送
git push origin main
```



#### 5. 查看历史提交

```sh
git log
```


#### 6. 远程删除文件

```sh
#删除文件
git rm -r 你要删除的文件名

#删除说明
git commit -m "注释一下你删除了什么"

#更新推送
git push origin main
```


#### 7. 创建分支

```sh
#用英文
git branch 这里写分支的名字

#比如：git branch master
```


#### 8. 仓库克隆

```sh
git clone 你的SSH仓库地址
```


