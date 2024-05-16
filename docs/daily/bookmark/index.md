# 书签同步至不同浏览器

::: warning 更新时间
最近更新：2023-8-6
:::

## 准备工作

* [BookmarkHub插件](https://github.com/dudor/BookmarkHub)

* [Github账号](../../website/github.md)



## 下载安装

BookmarkHub：[☛点我下载 谷歌商店版](https://chrome.google.com/webstore/detail/bookmarkhub-sync-bookmark/fohimdklhhcpcnpmmichieidclgfdmol)

::: tip 说明
不能翻墙的话，可以用插件小屋的

https://www.chajianxw.com/product-tool/32593.html
:::

![](bookmark-01.png)

谷歌下载就直接安装好了

如果是第三方比如 [插件小屋](https://www.chajianxw.com/product-tool/32593.html) 下的还需要手动安装，将压缩包解压得到一个 `.crx` 后缀的插件

::: tip 说明

360浏览器：直接拖入浏览器安装

Edge浏览器：右上角 `...` - 拓展 - 管理拓展 - 拖入安装
:::

![](bookmark-02.png)




## 设置参数


点击安装好的BookmarkHub，再点设置

![](bookmark-03.png)

这里需要填入相应的参数

![](bookmark-04.png)




### Github Token

登录 GitHub 账号：https://github.com/

![](bookmark-05.png)

在 个人头像 - 设置 最下方找到 `Developer Settings` 开发者设置

![](bookmark-06.png)

个人访问令牌中选择 `Tokens(classic)` - `Personal access tokens` - `Generate new token(classic)` 生成新令牌

::: tip 说明
注意不要选错，否则一会token选不了无有效期
:::

![](bookmark-07.png)

`Note` 名称随便写，有效期选 `无有效期`

::: tip 说明
名称建议还是写 `bookmarkhub` ，否则后期删除token，都不知道是啥
:::

![](bookmark-08.png)

拉倒下方，将gist勾选，然后生成令牌

![](bookmark-09.png)


这样我们的令牌token就生成了，复制填入插件

```
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
```

![](bookmark-10.png)




### Gist ID

在 [GitHub](https://github.com/) 登录的状态下，我们打开 Gist

官网：https://gist.github.com/

![](bookmark-11.png)

片段描述也可以随意写，建议还是 `bookmarkhub` ，字段随便写，然后创建私密片段

![](bookmark-12.png)

这样我们的gist id就得到了，填入插件中

::: tip 说明
`7ed6188110d982cfa68a7363850c3fd2`

就是 gist id，地址栏的链接也有

https://gist.github.com/Yiov/7ed6188110d982cfa68a7363850c3fd2
:::

```
gist:7ed6188110d982cfa68a7363850c3fd2 
```

![](bookmark-13.png)



## 同步书签

token填入自动保存，直接可以使用了

### 上传书签

点击插件 - 上传书签，将本地浏览器收藏的网址上传到gist上

![](bookmark-14.png)


上传成功后，我们看一下 gist 已经新增了一条信息

![](bookmark-15.png)


### 下载书签

我用Edge浏览器演示

我们用同样的方法，给Edge装上插件并填入参数后，点下载书签

![](bookmark-16.png)

这样就导入成功啦

::: tip 说明
觉得一长串很碍眼的，在 收藏夹 - ... - 显示收藏栏，改成 `从不`
:::

![](bookmark-17.png)



## 常见问题


#### 1.清空本地书签后无法再次导入

记录清空了就无法找回了，谨慎操作

其他浏览器还有记录的再上传一次，然后再回到被清空的浏览器下载书签即可