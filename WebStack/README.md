## Webstack导航详细安装教程

</br>

更新时间：2022-8-2

</br>

## 前言

</br>

正常情况下个人是不能做导航的，可以考虑国外服务器，毕竟免备案，不过价格就高点

</br>

这里我使用的是[@Viggoz](https://github.com/WebStackPage/)大佬的`Webstack`导航：https://webstack.cc/

> 好看的都收费，虽然模板已经停更了，不过这个已经很棒了

仓库：https://github.com/WebStackPage/WebStackPage.github.io


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-01.png)


</br>
</br>

## 准备工作

</br>

* [搭建WordPress教程 已搭建的无视☚](https://github.com/Yiov/notes/tree/main/wordpress)


根据文档说明，WordPress搭建项目文件：https://github.com/owen0o0/WebStack

把项目下载下来，或者直接用宝塔远程下

```
https://github.com/owen0o0/WebStack/archive/refs/tags/1.1620.zip
```

</br>

主页效果预览：http://webstack.iotheme.cn/

> 与Viggoz的有一丢丢小区别，无碍

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-02.png)



</br>
</br>

## 1.上传主题


登录wordpress的后台，外观-主题-上传主题-选择文件-安装，直到完成，然后**启用**

>或者在 /wp-content/themes 文件夹新建webstack文件夹，并上传所有文件

    WP后台：http://域名.com/wp-admin/


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-03.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-04.png)


其他主题怎么删掉呢，主题详情-右下有个删除

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-05.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-06.png)


</br>
</br>


## 2.设置伪静态


按自己服务器环境二选一，我就用Nginx，保存

```
# Nginx规则
location /
{
    try_files $uri $uri/ /index.php?$args;
}
rewrite /wp-admin$ $scheme://$host$uri/ permanent;
```

```
# Apache 规则
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-07.png)


</br>
</br>




## 3.美化网页内容


我们访问域名，看到的主页无比干净，我们挨个添加

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-08.png)


</br>
</br>

### 3.1 一级菜单

网址-网址分类-名称自己取，父级无

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-09.png)


这里图标，自己选一个，**添加新网址目录**

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-10.png)

回到网页刷新看看，就有了新增的菜单目录

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-11.png)


</br>



### 3.2 二级菜单

网址-网址分类-名称自己取，父级选已创建好的目录

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-12.png)

这里子级的图标不用选，因为不显示 ，**添加新网址目录**，回到网页刷新看看

> 有二级菜单存在的情况，主页面有二级菜单就不显示一级菜单

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-13.png)

</br>


### 3.3 侧栏底部菜单（可选）


非必须，看自己喜好吧


外观-菜单，菜单名称自己取，自定义链接-添加至菜单，然后导航标签写一下，勾选：侧栏底部菜单，保存菜单

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-14.png)

其他的就依次添加即可，菜单前也想加图标的话，右上方，**显示选项**

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-15.png)

勾选`css类`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-16.png)

这样菜单里就多了一个css类，我们找自己喜欢的fa图标即可

fa图标网站，使用前记得前面还要加一个fa

> 比如wordpress是fa-wordpress，那么css就是fa fa-wordpress

https://fontawesome.dashgame.com/


http://www.fontawesome.com.cn/icons-ui/


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-17.png)


回到网页刷新看看效果

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-18.png)


如果不喜欢后面的小星星，修改`wp-content/themes/WebStack-1.1620/inc/inc.php`文件，第473行的星星删掉即可

:loudspeaker: 修改文件前，请先备份！

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-19.png)



</br>




### 3.4 添加网页

网址-所有网址-添加网址


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-20.png)

网站名字，段落这里自己写，到时候详情页能看到的


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-21.png)

填入网站的网址，描述，滑上去点 **发布** 即可

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-22.png)


回到网页刷新看看，这里的网站没有自动获取图标，我们去设置一下

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-23.png)


主题设置-常规设置-图标源

> 这次设置好了，下次就不用管了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-24.png)


这里我们直接用[一为的api](https://api.iowen.cn/doc/favicon.html)，或者自己按他的源码搭建，图标源api后缀填`.png`，**保存**

```
https://api.iowen.cn/favicon/
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-25.png)


回到网页刷新看看，可以按步骤依次添加其他

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-26.png)




</br>


### 3.5 添加详情页

主题设置-常规设置-详情页开关(开启)，已开的无视

> 如果想直接跳转网页，不需要详情页，关闭即可

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-27.png)



我们随便点一个网站进去

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-28.png)


这个就是详情页

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-29.png)



如果不喜欢下方的`相关导航`，修改文件`wp-content/themes/WebStack-1.1620/single-sites.php`，删掉第111-146行，这样下面就干净了

:loudspeaker: 修改文件前，请先备份！

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-30.png)



</br>
</br>



## 4.其他设置

大部分都是有开关的，自己看下即可，我就说几个难点的

:loudspeaker: 修改文件前，请先备份！

### 4.1 删除天气



修改文件`wp-content/themes/WebStack-1.1620/templates/header-banner.php`，删除第23-27行即可

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-31.png)




若想替换成国旗，将第22-28行换成下面代码

```
        <!-- 国旗 -->
        <li style="min-height: 75px;">
                        <a href="">
                            <img src="https://webstack.cc/assets/images/flags/flag-cn.png" alt="flag-cn"> Chinese
                        </a>
                    </li>
        <!-- 国旗 end -->
```


</br>


### 4.2 删除Fork me on GitHub

修改文件`wp-content/themes/WebStack-1.1620/templates/header-banner.php`，删除第31行即可


</br>


### 4.3 关掉搜索框

主题设置-常规设置-搜索（关闭）

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/WebStack/westack-32.png)

觉得搜索框复杂，可以自己改文件`wp-content/themes/WebStack-1.1620/search-tool.php`


</br>


### 4.4 底部信息栏

修改文件`wp-content/themes/WebStack-1.1620/footer.php`，修改第22或者23行即可

```
Copyright © <?php echo date('Y') ?>  <?php if(io_get_option('icp')) echo '<a href="https://beian.miit.gov.cn/" target="_blank" rel="link noopener">' . io_get_option('icp') . '</a>'?>
&nbsp;&nbsp;Design by <a href="https://github.com/WebStackPage/" target="_blank"><strong>Webstack</strong></a>
```

</br>

### 4.5 公告

主题-常规设置-显示公告（开启/关闭），这里的公告在wp后台的公告里添加

</br>


### 4.6 图标LOGO设置


主题-图标设置，根据尺寸要求来就好了，制作完成上传到image文件夹并在设置中修改

`logo@2x.png` 左上角Logo：建议高度80px，原图尺寸178px*40px

`logo_dark@2x.png` 左上角Logo：暗黑模式，原图尺寸178px*40px

`logo-collapsed@2x.png` 左上角收起菜单栏Logo：建议80px*80px

`favicon.png` 本网站的fa图标，原图尺寸64px*64px

`app-ico.png` 添加的网站fa图标，开启了api自动获取这个就不用管，原图尺寸180px*180px

</br>
</br>


### 4.7 部署SLL证书不是绿锁


一般360浏览器会显示，正常部署了证书后，就是绿锁，如果出现灰锁，并提示如下

```diff
您与***.com之间的连接采用新型加密套件进行了加密。
+ 此外，此页中包含其他不安全的资源。他人能在这些资源传输过程中进行查看，攻击者也可以修改这些资源，从而改变此页的外观。
该连接使用TLS 1.2。
该连接使用AES_ 128 _GCM和
ECDHE_ RSA进行加密和身份验证。

```

我们按F12审查元素-安全可以查看到原因，就是因为有的图片用的是http，而不是https

```diff
此页面不安全。
资源 - 混合内容
+ 此页面包含 HTTP 资源。
Reload the page to record requests for HTTP resources.
```

F12审查元素-控制台下方就看得到，黄色的就是问题所在，自己上传了图片或者LOGO引用的链接

```diff
某些消息已移动到“问题”面板。

Mixed Content: The page at '<URL>' was loaded over HTTPS, but requested an insecure image '<URL>'. This content should also be served over HTTPS.
(index):557 Mixed Content: The page at 'https://***.com/' was loaded over HTTPS, but requested an insecure image 
+ 'http://***.com/wp-content/uploads/2022/08/zqyy.png'. 
This content should also be served over HTTPS.
```

我们根据报错的，在WP后台逐个修改网址的fa图标和logo地址，即http后加一个s

```diff
即在http后加一个s
http://***.com/wp-content/uploads/2022/08/zqyy.png
修改成
+ https://***.com/wp-content/uploads/2022/08/zqyy.png
```


</br>
</br>

## 特别鸣谢

* [@Viggoz](https://github.com/WebStackPage/)

* [@webstack.cc](https://webstack.cc/)

* [@owen0o0](https://github.com/owen0o0/WebStack)

* [@一为webstack](http://webstack.iotheme.cn/)

* [@Font Awesome](https://fontawesome.dashgame.com/)

* [@Font Awesome中文网](http://www.fontawesome.com.cn/icons-ui/)

* [@一为API](https://api.iowen.cn/doc/favicon.html)


