## 使用github静态页面托管建站

</br>

更新时间：2023-2-14

静态托管的网站有 [Github page](https://pages.github.com/)、[Gitee Pages](https://gitee.com/help/articles/4136#article-header0)、[GitLab Pages](https://docs.gitlab.cn/jh/user/project/pages/index.html)、[Netlify](https://www.netlify.com/)、[Vercel](https://vercel.com/)等等

> 静态和动态最直接的区别就是，静态没有数据库，动态有数据库，数据库的加持会大大减少工作量

现在只讲github page，操作和原理都大相径庭

</br>
</br>

## 说明及条件

</br>

* 官网：https://pages.github.com/


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/githubpage/githubpage-01.png)



* [注册github及使用](https://github.com/Yiov/notes/tree/main/github) 



</br>
</br>


## 1.新建仓库

</br>

此时因为要搭建静态网站，和平时建仓库就有一点区别了

这里输入 `你注册的账户名.github.io`，仓库公开即可，确定

> 比如我的：yiov.github.io

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/githubpage/githubpage-02.png)


这样就建好了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/githubpage/githubpage-03.png)


</br>
</br>


## 2.上传代码

</br>

用GitHub Desktop克隆仓库到本地后，把源码都放进去

> 不会使用的看我上面的教程
>
> 源码使用的是[@imsyy](https://github.com/imsyy/Snavigation)


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/githubpage/githubpage-04.png)


用GitHub Desktop上传即可

> 上传快了，截图截慢了，反正上传就行了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/githubpage/githubpage-05.png)


上传完成，我们回到github刷新网页，这样就上传完成了

> GitHub Desktop卡进度了，也要传完

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/githubpage/githubpage-06.png)

</br>
</br>

## 3.访问及自定义域名

</br>


`Setting-page` 这里的 `https://yiov.hithub.io` 就是我们的网页了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/githubpage/githubpage-07.png)

可以访问试试看看，这样就OK了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/githubpage/githubpage-08.png)


如果想用自己的域名，先在服务器添加一个 `CNAME` 值，记录值填这个网址 `yiov.hithub.io`

> 我这里用的二级域名 `doc` 

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/githubpage/githubpage-09.png)


回到github设置，下拉在自定义域名里填入我们的二级域名，保存，等解析完成，过程会有点慢，直到显示 `DNS Check successful`即可

> 我这里是 `doc.***.com`
>
> 建议是勾选 htpps

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/githubpage/githubpage-10.png)

然后我们就能看到域名已经变成自己的了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/githubpage/githubpage-11.png)


</br>
</br>

## 拓展

</br>

### 1.有没有其他好玩的静态源码

最简单的方法就是在github上搜 `github.io`

### 2.能否托管无数个静态网站

不行，一个帐户只能托管一个，你可以多注册几个账号


</br>
</br>

## 特别鸣谢

* [@imsyy](https://github.com/imsyy/Snavigation)