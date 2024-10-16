# Photoshop 2023无法安装



## 起因

给公司电脑安装ps 2023，结果报错

操作系统不满足此安装程序的最低系统要求，{0}是安装所需的最低版本。(错误代码:21)


![](/ps/ps-01.png)

根据 [官网的配置要求](https://helpx.adobe.com/cn/photoshop/system-requirements.chromeless.html) 来看，系统确实没有达到要求

::: tip 说明
更早其他ps版本，[点我查看](https://helpx.adobe.com/cn/photoshop/system-requirements/earlier-versions.chromeless.html)
:::

![](/ps/ps-02.png)

![](/ps/ps-03.png)



我原本的系统为 `1809`，配置要求需要 `20H2`，更新系统也没解决

::: tip 说明
`win键+R键`调出cmd，输入 `winver` 即可查询系统版本
:::





## 解决

于是在CSDN参考了 [@大心匠](https://blog.csdn.net/leitingvre) 的文章，解决了问题

* [安装Photoshop 2022时出现操作系统不满足此安装程序的最低系统要求](https://blog.csdn.net/leitingvre/article/details/123267644)


### Media Creation Tool

直接上微软的官网下载 [Media Creation Tool](https://www.microsoft.com/zh-cn/software-download/windows10/)


![](/ps/ps-04.png)



### ISO文件

下载完成后打开，接受声明

![](/ps/ps-05.png)

选 `为另一台电脑创建安装介质` 

![](/ps/ps-06.png)

这里我选择 ISO 文件

::: tip 说明 
如果你要用PE启动盘安装，就选第1个

否则就和我一样，本地安装
:::

![](/ps/ps-07.png)

选择一个位置存放ISO文件，我直接放到了H盘

![](/ps/ps-08.png)

接下来就是等下载完成了，镜像文件大概4.5G左右

![](/ps/ps-09.png)

下载完成还要等他完成验证，就可以了


![](/ps/ps-10.png)

如果有在自动清理，等一会就好，不要急

![](/ps/ps-11.png)




### 安装系统

双击打开下载好的ISO文件，然后再双击 `setup.exe`

![](/ps/ps-12.png)

![](/ps/ps-13.png)

win10的安装程序就出来了，直接下一步

::: tip 说明
如果你想取消win系统自动更新，先点 `更改windows安装程序下载更新的方式`，不是现在即可
:::


![](/ps/ps-14.png)


由于公司电脑是卖电脑的安装的，这里的激活码并不是真的，而是破解版

::: tip 说明
真密钥ID是没有数字0的
:::

![](/ps/ps-15.png)

现在没有密钥就无法下一步了

::: warning 注意
如果你本身就是正版软件，就不会弹这个窗口
:::

![](/ps/ps-16.png)

百度随便找了个企业版激活码：`NPPR9-FWDCX-D2C8J-H872K-2YT43`

::: tip 说明
想要真实的windows密钥，可以去

爱好论坛：[https://www.aihao.cc/](https://www.aihao.cc/)
:::

![](/ps/ps-17.png)

接受条款，下一步

![](/ps/ps-18.png)

![](/ps/ps-19.png)

漫长的等待时间后，开始安装

![](/ps/ps-20.png)

不出意外，意外就来了，报错的是雷电模拟器，卸载了再装就是

::: warning 报错
VirtualBox (LDPlayer)

立即卸载此应用，因为它与 Windows 10 不兼容
:::

![](/ps/ps-21.png)

手动卸载了，刷新就可以装了

::: tip 说明
如果你不想保留应用和文件，可以更改
:::

![](/ps/ps-22.png)

然后电脑就开始安装了，等吧，要好久好久好久...

![](/ps/ps-23.png)


安装完成进入桌面，我们查一下版本

::: tip 说明
`win键+R键`调出cmd，输入 `winver` 即可查询系统版本
:::

![](/ps/ps-24.png)


### 再装PS

再次安装ps，成功装上，完美运行

![](/ps/ps-25.png)


![](/ps/ps-26.png)





## 常见问题

::: details 自定义形状中追加默认形状后无法删除

窗口 - 形状，然后右侧的小窗口就可以删除了，可以导入自己喜欢的形状，格式是 `.csh`
:::



::: details Ps一直弹窗，怎么禁用联网

win+R键 - control - Windows Defender 防火墙 - 高级设置 - 出站规则 - 新建规则 - 程序 选择Ps所在文件夹的exe程序 - 阻止，下一步直到完成

:::