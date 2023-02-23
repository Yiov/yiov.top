## 获取网站Favicon图标

</br>

更新时间：2023-2-23

Favicon图标就是浏览器标题栏上显示的小图标，也可以是缩小版的LOGO

之前搭建WebStack的时候，完全依赖的 [@owen0o0](https://github.com/owen0o0/getFavicon) 的api来获取Favicon图标

现在就按他的教程，尝试自己搭建一个

</br>
</br>


## 常见获取方式

</br>

### 1.域名+/favicon.ico

比如：https://github.com/favicon.ico

> 一定要是在主域名下 `/favicon.ico` 一般都放在主目录里

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Favicon/Favicon-01.png)



### 2.查看原代码

比如：https://www.iowen.cn/

网页右键-查看源代码(ctrl+u)，这里就很明显能看到 `.ico` 结尾的文件

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Favicon/Favicon-02.png)


## 3.谷歌链接获取

http://www.google.com/s2/favicons?domain=网站地址

比如：http://www.google.com/s2/favicons?domain=baidu.com

> 默认查看的尺寸是16*16，我们把后面的size=的值改成想要的大小即可，如果没有该尺寸，会返回默认16
>
> 常见的尺寸：16 / 32 / 48 / 64 / 128 / 256 / 512

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Favicon/Favicon-03.png)

</br>
</br>


## 搭建说明

</br>

* 仓库：https://github.com/owen0o0/getFavicon

* Demo：https://api.iowen.cn/doc/favicon.html



我们先进仓库，将代码下载到桌面

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Favicon/Favicon-04.png)

新建一个网站，进目录-上传压缩包-解压，并将文件名改成 `favicon`

> 改名是为了和下面的连接对上

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Favicon/Favicon-05.png)


cache 文件夹给 755 权限

> 宝塔直接上传的一般都是755

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Favicon/Favicon-06.png)


访问：http://你的网站/favicon/get.php?url=https://目标网站

> 如果出现获取不了的情况，`ctrl+F5` 强制刷新缓存再试一次
>
> 比如：http://api.yiov.com/favicon/get.php?url=https://www.iowen.cn

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Favicon/Favicon-07.png)



方便cdn缓存，伪静态规则二选一

> 域名-伪静态，粘贴保存

```bash
# Nginx规则
rewrite ^/favicon/(.*)\.png$ /favicon/get.php?url=$1;

# Apache 规则
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule ^favicon/(.*)\.png$ favicon/get.php?url=$1 [L]
</IfModule>
```
![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Favicon/Favicon-08.png)


调用方法：http://你的网站/favicon/目标网址.png

> 注：目标网址不能有 http(s)://，且结尾必须填 .png
>
> 以后亦可都用这种方式
>
> 比如：http://api.yiov.com/favicon/www.iowen.cn.png

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/Favicon/Favicon-09.png)

</br>
</br>


## 常见问题

</br>

### 1.访问出现404

域名是否需解析 / 链接路径是否和文件名一致 / 链接是否正确

### 2.有没有更便捷的方式

如果你懒的搭建，直接用一为的吧，按格式就行

https://api.iowen.cn/doc/favicon.html


### 3.自己的网站如何制作favicon.ico图标

图片在线转ico格式

* [在线生成透明ICO图标](http://www.ico51.cn/)

* [比特虫](https://www.bitbug.net/?rsv_upd=1)
