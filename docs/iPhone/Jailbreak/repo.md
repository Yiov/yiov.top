# 搭建越狱源



::: danger 注意
本次仅讲解如何搬运插件，非编写插件！
:::


## 简介

有时候源太多了，插件使用起来觉得繁冗，就考虑是否能整合在一起

实际操作一遍后，搬运真的非常麻烦！所以不建议！！

仅此记录一下


## 准备工作

* [服务器](../../website/Server/)

* [安装shell](../../website/shell/)

* [安装宝塔面板](../../website/BT.md)

* [注册Github账号](../../website/pages/github.md)




## 目录结构

```
.
├─ debs
│   └─ xx.deb
├─ CydiaIcon.png
├─ index.html
├─ Packages
├─ Packages.bz2
├─ Packages.gz
├─ Packages.xz
└─ Release
```

[shell](#准备工作) 连接 [服务器（或虚拟机）](#准备工作)，然后进入 [宝塔面板](#准备工作)

文件 - 根目录/www/wwwroot ，新建一个 `jbrepo` 文件夹

::: warning 注意
我是准备部署到 Github Page 的，就随便命名了

如果你就准备放服务器上，不用新建，直接放域名文件夹里
:::

![](/repo/repo-01.png)

不要着急新建，我会逐一的分开讲解

![](/repo/repo-02.png)





---


### debs

新建插件文件夹，以 [BHTikTok-Plus](https://github.com/dayanch96/BHTikTok-Plus/releases) 为例

![](/repo/repo-03.png)

::: tip 说明
`iphoneos-arm` 为 有根插件rootful，unc0ver越狱等专用

`iphoneos-arm64` 为 无根插件rootless，多巴胺越狱等专用
:::



如果你想要两个插件都保留，就分别新建文件夹

`rootful` 放有根，`rootless` 放无根

```md{4,6}
.
├─ debs
│   └─ rootful
│       └─ bhtiktok_2.3_iphoneos-arm.deb
│   └─ rootless
│       └─ rootless.bhtiktok_2.3_iphoneos-arm64.deb
└─ ...
```

::: details dylib插件打包成deb

dylib是动态拓展库文件，只能由苹果的软件 [Xcode](https://developer.apple.com/cn/xcode/) 打开或编译

如果你不懂得使用，请放弃

:::




---

### CydiaIcon.png

这个是我们越狱源的头像，尺寸为64x64



---

### index.html

可选项，越狱源展示页，你也可以不弄

比如 [opa334的插件源](https://github.com/opa334/opa334.github.io) 首页：https://opa334.github.io/


```html
<!DOCTYPE html>
<html>
<body>
<h1>Hello World</h1>
<p>I'm yiov.</p>
</body>
</html>
```



---

### Packages

deb文件的control信息集合，不要直接复制了填，没用

了解下基础信息：

```
Package: 包名
Version: 版本号
Architecture: 架构(arm/arm64)
Maintainer: 维护者
Installed-Size: 安装包大小
Depends: 依赖 mobilesubstrate (>= 0.9.5000) , iOS 版本必须在 6.0 以上 firmware (>=6.0)
Filename: 文件路径
Size: 文件大小字节
MD5sum: MD5值
SHA1: SHA1值
SHA256: SHA256值
Section: 分类名
Description: 描述
Author: 作者
Name: 插件名
```

安装 dpkg-dev ，获取即可生成

::: tip 说明
Debian/Ubuntu系统自带dpkg-dev和dpkg-scanpackages命令，无需安装
:::

```sh
yum install -y dpkg-dev
```

![](/repo/repo-04.png)


进 插件目录，根据刚开始 [自己建立的文件夹名](#目录结构) 来

```sh
cd /www/wwwroot/jbrepo
```

::: details 进错目录怎么返回
可以用 `cd ..` 返回上一层
:::



打包

```sh
dpkg-scanpackages --multiversion debs /dev/null > Packages
```

```sh{1}
[root@yiov jbrepo]# dpkg-scanpackages --multiversion debs /dev/null > Packages
dpkg-scanpackages: warning: Packages in archive but missing from override file:
dpkg-scanpackages: warning:   com.bandarhl.bhtiktok
dpkg-scanpackages: info: Wrote 2 entries to output Packages file.
```


查看文件内容就有了

```
Package: com.bandarhl.bhtiktok
Version: 2.3
Architecture: iphoneos-arm
Maintainer: dvntm
Installed-Size: 1480
Depends: mobilesubstrate
Filename: debs/rootful/bhtiktok_2.3_iphoneos-arm.deb
Size: 481732
MD5sum: e5b410b6f43ac6146d8f506b1bd331a7
SHA1: cdad39b612c61f6143c88f29e1302cf88f474ee8
SHA256: 4bfeee68dff44248e0ee116b7745a788fac834a49735c6fdabe410918f7bba63
Section: Tweaks
Description: An awesome tweak for TikTok!
Author: dvntm
Icon: https://i.imgur.com/PKIhkrt.png
Name: BHTikTok Plus

Package: com.bandarhl.bhtiktok
Version: 2.3
Architecture: iphoneos-arm64
Maintainer: dvntm
Installed-Size: 1480
Depends: mobilesubstrate
Filename: debs/rootless/rootless.bhtiktok_2.3_iphoneos-arm64.deb
Size: 481152
MD5sum: 990bffab5b01644cb54add45328fa7a1
SHA1: a229326f24196f037a56cbd8e34d866583e92a04
SHA256: 0993c3730472bc7979dd760e120b83ad31c3cf2b72a2a6ab93166a3692d25d31
Section: Tweaks
Description: An awesome tweak for TikTok!
Author: dvntm
Icon: https://i.imgur.com/PKIhkrt.png
Name: BHTikTok Plus
```





::: details 题外话：关于哈希值
Hash Function，也叫hash值，类似于文件的身份证

而hash值的查看也非常简单，演示下deb插件的哈希值

比如：插件在F盘的debs文件夹内，然后在地址栏上方，输入 `CMD` 回车

```sh
Microsoft Windows [版本 10.0.19045.2965]
(c) Microsoft Corporation。保留所有权利。

F:\debs>
```

然后分别用命令查看

```sh
certutil -hashfile 文件名 MD5
certutil -hashfile 文件名 SHA1
certutil -hashfile 文件名 SHA256
```

比如：

```sh
F:\debs>certutil -hashfile .\com.dayanch96.bhtiktok_2.3_iphoneos-arm64.deb MD5

MD5 的 .\com.dayanch96.bhtiktok_2.3_iphoneos-arm64.deb 哈希:
990bffab5b01644cb54add45328fa7a1
CertUtil: -hashfile 命令成功完成。
```
:::





那怎么打包其他的压缩包格式呢，有很多方式

```sh
gzip -cf Packages > Packages.gz
bzip2 -cf Packages > Packages.bz2
xz -cf Packages > Packages.xz
```

::: details 相关命令的使用


```md
gzip / bzip2 / xz /指令参数：

-c (--stdout) 标准压缩
-d (--decompress) 强制解压缩
​-f (--force) 强制覆盖输出文件
-h (--help) 　显示帮助
-k (--keep) 保留源文件
-q (--quiet) 压制不重要的警告信息
-r (--recursive) 递归,将指定目录下的所有文件及子目录一并处理
-s (--small) 减少内存用量
-t (--test) 检查指定文件的完整性，但并不对其解压缩
-L (--license) 显示版本信息
-V (--version) 显示版本信息
-v (--verbose) 显示指令执行过程
-z (--compress) -d 的补充，强制进行压缩操作
-1 (-2、...、-9) 压缩率依次增大，速度依次减慢，默认为-6
```


---

```md

tar zcvf Packages.gz Packages

tar指令参数：

-A (--catenate，--concatenate) 将tar文件作为一个整体追加到另一个tar文件中
-c (--create) 建立新的tar文件
-d (--diff，--compare) 将文件系统里的文件和tar文件里的文件进行比较
-f (--file) 指定要处理的文件名
-k (--keep-old-files) 保留源有文件不覆盖
-P (--absolute-names) 使用绝对路径
-r (--append) 添加文件到已经压缩的tar文件
-t (--list) 列出tar文件中包含的文件的信息
-u (--update) 用已打包的文件的较新版本更新tar文件
-v (--verbose) 列出每一步处理涉及的文件的信息，仅列出文件名
-vv 列出权限、所有者、大小、时间、文件名等信息
-x (--extract，--get) 解开tar文件
-Z (--compress，--uncompress) 调用compress执行压缩或解压缩

-z (--gzip，--gunzip，--ungzip) 支持gzip解压文件
-j (--bzip2) 支持bzip2解压文件
-J (--xz，--lzma) 调用XZ Utils执行压缩或解压缩。依赖XZ Utils。

--delete 删除tar文件里的文件

```

---

Debian/Ubuntu系统 可以直接用cat打包

```
cat Packages | xz > Packages.xz
cat Packages | bzip2 > Packages.bz2
cat Packages | gzip > Packages.gz
cat Packages | lzma > Packages.lzma
cat Packages | zstd > Packages.zst
```

:::






---


### Release


我们直接新建一个空白文件 `Release`

按照格式进行修改：

```
Origin: 软件源名，可以使用中文
Label: 同上
Suite: 软件源的类型，比如正式源，测试源等，可以分别用stable, beta, unstable等来表示，一般填 stable 就可以了
Version: 版本号
Codename: 代码代号，只能用英文
Architectures: 架构
Components: main
Description: 描述
```

如下就是修改好的

```
Origin: Yiov's Repo
Label: Yiov's Repo
Suite: stable
Version: 1.0
Codename: yiov
Architectures: iphoneos-arm iphoneos-arm64
Components: main
Description: 自用搬运源，随缘更新
```



:::: details 关于Release签名

其实签不签名都可以用，既然说到了，就多学一个技能也无所谓

::: tip 说明
在此之前，先要关闭隧道，否则一会无法输入密码
:::

对着服务器右键 `属性 - 隧道 - 取消勾选 转发X11连接到`，再点连接，确保重新连接后生效

![](/repo/repo-06.png)

生成一个密钥

```sh
gpg --gen-key
```

按照提示 默认 `1` - 默认`2048` - 默认 `0` 永久有效 - 默认 `y`

```sh{11,13,21,23}
[root@yiov jbrepo]# gpg --gen-key
gpg (GnuPG) 2.0.22; Copyright (C) 2013 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
   (1) RSA and RSA (default)
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
Your selection? 1
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (2048) 
Requested keysize is 2048 bits
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 
Key does not expire at all
Is this correct? (y/N) y
```


输入名字(5位以上)、邮箱、描述(随便)，输入 `o` OK

输入两次密码完成创建

![](/repo/repo-07.png)

```sh{3-5,9}
GnuPG needs to construct a user ID to identify your key.

Real name: yiovcopy
Email address: ******@qq.com
Comment: one
You selected this USER-ID:
    "yiovcopy (one) <******@qq.com>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? o
You need a Passphrase to protect your secret key.

We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
gpg: key E238EC27 marked as ultimately trusted
public and secret key created and signed.

gpg: checking the trustdb
gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
pub   2048R/E238EC27 2024-01-15
      Key fingerprint = 9E7B 7AAC 0E59 4BB7 683C  E7B7 E44C A28F E238 EC27
uid                  yiovcopy (one) <******@qq.com>
sub   2048R/076007EB 2024-01-15

```

查看秘钥

```sh
gpg -k
```

这就是我们的秘钥了

```sh{1}
[root@yiov jbrepo]# gpg -k
/root/.gnupg/pubring.gpg
------------------------
pub   2048R/E238EC27 2024-01-15
uid                  yiovcopy (one) <******@qq.com>
sub   2048R/076007EB 2024-01-15
```

下面给Packages签个名，格式：

```sh
gpg -abs -r "你的Real name" -o Release.gpg Release
```

输入密码，签名成功

```sh{1}
[root@yiov jbrepo]# gpg -abs -r "yiovcopy" -o Release.gpg Release
gpg: WARNING: recipients (-r) given without using public key encryption

You need a passphrase to unlock the secret key for
user: "yiovcopy (one) <******@qq.com>"
2048-bit RSA key, ID E238EC27, created 2024-01-15

File `Release.gpg' exists. Overwrite? (y/N) y
```

目录下自动生成 `Release.gpg`，结束

![](/repo/repo-08.png)

::: details 删除秘钥
```sh
# 先删除私钥
gpg --delete-secret-key "你的Real name"

# 再删除公钥
gpg --delete-key "你的Real name"
```
:::

::::





## 上传


我们将所有文件打包下载到桌面

![](/repo/repo-09.png)


上传到github仓库

![](/repo/repo-10.png)

如果你弄了主页，就在设置中将 Github Page 开启

![](/repo/repo-11.png)



## 成果

我用 [PostBox](https://www.postbox.news/downloads) 添加源，看看效果

::: tip 为什么只有1个呢，不是2个吗
deb插件中也有control信息，作者没有区分就只有1个
:::

![](/repo/repo-12.png)

正常来说是2个都有的，可以尝试手动编写

![](/repo/repo-13.png)




## 更新

每次挨个弄真的很麻烦，我们直接用脚本

在服务器目录新建一个 `update.sh` ，粘贴如下命令

::: tip 说明
目录不同的，可以根据自己的来修改
:::


::: code-group

```sh [update.sh]
dpkg-scanpackages --multiversion debs /dev/null > Packages

gzip -cf Packages > Packages.gz
bzip2 -cf Packages > Packages.bz2
xz -cf Packages > Packages.xz
```
:::



cd 进入插件目录，然后再执行脚本

```sh
cd /www/wwwroot/jbrepo

sh update.sh
```

