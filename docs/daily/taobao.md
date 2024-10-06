# 淘宝商品强制提交




## 简介

适用于无货商品、秒杀商品，当别人都在挤时，你已经进去提交了，也就是常见的BP链接

如果你不想动手，可以看一下实现的基本逻辑

最后直接使用 [快捷指令](#快捷指令) 快速达成


## 淘口令解析

其实在浏览器打开链接，即可获取原始链接了

随便找个商品，复制链接，比如：[雅兰儿童床垫蘭精灵](https://m.tb.cn/h.gf4xVnVN5QOdUsq?tk=Vfz1WyO2tcK)

![](/taobao/taobao-01.png)

本次借用一个在线网页工具：[9tool - 淘口令解析](http://m.91tool.com/tkljx)

粘贴到这里，解析口令，原始链接和商品ID都有了

![](/taobao/taobao-02.png)




## 发送商品

适用于聊天窗直接购买，但是需要手动选取商品规格


格式：

```
https://h5.m.taobao.com/awp/core/detail.htm?xxc=sendProduct&id={商品ID}
```

比如我的 [商品ID](#淘口令解析) 是：`628435603375` ，那组合后就是

```
https://h5.m.taobao.com/awp/core/detail.htm?xxc=sendProduct&id=628435603375
```

![](/taobao/taobao-03.png)






## 单件闪结

除了需要商品ID，还有一个重要参数 `skuId`

电脑端是点击商品规格后就可以获取，手机端就麻烦点了



::: details 自动获取skuId 并 生成BP链接 （推荐👍）

下载安装 [探火](https://apps.apple.com/cn/app/id1478077079) APP，并打开

![](/taobao/taobao-04.png)

随便找个商品，复制链接，比如：[雅兰儿童床垫蘭精灵](https://m.tb.cn/h.gf4xVnVN5QOdUsq?tk=Vfz1WyO2tcK)

![](/taobao/taobao-01.png)

探火APP - 秒杀- 闪结链接，粘贴淘宝口令 - 查询

![](/taobao/taobao-05.png)

选择自己要买的商品型号，`生成BP`，选 `淘宝`，复制全部

![](/taobao/taobao-06.png)

点击链接，即可进入购买的提交结算页面

![](/taobao/taobao-07.png)

:::






:::: details 手动获取skuId 并 拼接BP链接

请先在淘宝APP将要购买的东西加入购物车，比如：[雅兰儿童床垫蘭精灵](https://m.tb.cn/h.gf4xVnVN5QOdUsq?tk=Vfz1WyO2tcK)

::: tip 说明
无法加购的商品，请使用 [自动获取](#单件闪结)
:::

![](/taobao/taobao-08.png)

浏览器打开 [淘宝购物车](https://main.m.taobao.com/cart/index.html) 页面并登录，点击购物车中的商品进入

![](/taobao/taobao-09.png)

复制链接到其他聊天工具，将skuId复制出来即可

::: danger 注意
别发到淘宝聊天窗，会自动被识别成卡片！
:::

![](/taobao/taobao-10.png)


现在开始拼接BP链接，格式：

```
https://h5.m.taobao.com/cart/order.html?buyParam={商品ID}_{购买数量}_{skuId}
```


按格式组成后：

```
https://h5.m.taobao.com/cart/order.html?buyParam=628435603375_1_5292744355844

```

![](/taobao/taobao-11.png)

::::







## 多件闪结

其实就是挨个提取商品ID和skuId，然后组合



::: details 自动拼接 多件商品BP链接（推荐👍）

依然推荐用 [探火](https://apps.apple.com/cn/app/id1478077079) APP

![](/taobao/taobao-04.png)

先选第1个商品复制链接，比如：[雅兰儿童床垫蘭精灵](https://m.tb.cn/h.gf4xVnVN5QOdUsq?tk=Vfz1WyO2tcK)

到探火APP - 秒杀 - 闪付链接，粘贴口令 - 查询，选择规格后加入购物车

![](/taobao/taobao-12.png)

再选第2个商品复制链接，比如：[万代模型 RG 1/144 强攻型脉冲高达](https://m.tb.cn/h.gUrhQiHgACjaIb6?tk=fCNeWyN6hTu)

到探火APP - 秒杀 - 闪付链接，粘贴口令 - 查询，选择规格后加入购物车

![](/taobao/taobao-13.png)

回到秒杀界面，顶部 `淘宝购物车` ，全选，生成BP

![](/taobao/taobao-14.png)

选择淘宝BP，复制BP链接

![](/taobao/taobao-15.png)

粘贴到淘宝对话框，打开即可

![](/taobao/taobao-16.png)



:::



::: details 手动拼接 多件商品BP链接

需要先获取单个商品id和skuId，然后按格式拼接

```
https://h5.m.taobao.com/cart/order.html?buyParam=<商品1的ID>_<商品1的数量>_<商品1的skuid>,<商品2的ID>_<商品2的数量>_<商品2的skuid>
```

::::




## 快捷指令

* [淘宝BP链接](https://www.icloud.com/shortcuts/2f3d6dd7acd04cccb217ea96485cca30)

