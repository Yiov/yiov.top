# 京东商品强制加购




## 简介

适用于无货商品、秒杀商品，当别人都在挤时，你已经进去提交了，也就是常见的BP链接


## 登录

我们全程在 `微信端` 演示，毕竟微信有内置的浏览器

登陆账号：https://cart.jd.com


![](/jd/jd-01.png)


我截图了用京东APP扫码登录，成功后会跳转到购物车

![](/jd/jd-02.png)



如果你不想动手，可以看一下实现的基本逻辑

最后直接使用 [快捷指令](#快捷指令) 快速达成



## 商品ID

随便找个商品，复制链接，比如：[西门子](https://item.m.jd.com/product/100054487281.html?utm_term=CopyURL&utm_user=plusmember&utm_source=iosapp&utm_campaign=t_335139774&utm_medium=appshare&ad_od=share&gx=RnAox25ZYDHey5gSwNk7DC5U&gxd=RnAokDYLb2CMzJ1BrIEmXRWPmw_ivjT6XjFpOunSC_H8ewWZJI3wZ18Z7RwZ1Oc)

![](/jd/jd-03.png)

发到微信端，我们需要提取链接中的商品ID，即 `product` 后面的数字

比如：`100054487281`


![](/jd/jd-04.png)



## 技巧

### 强制加购

提取出商品id后，按如下格式填入

```
https://cart.jd.com/gate.action?ptype=1&pcount=1&pid={商品ID}
```


::: warning 注意
其中 `pcount` 是加购的数量，可以自己改

注：如果限购2件，你改成100件，也只能加购2件
:::

```
https://cart.jd.com/gate.action?ptype=1&pcount=1&pid=100054487281
```

![](/jd/jd-05.png)



微信点开链接，加自动加购了，在APP端也可以看到

![](/jd/jd-06.png)





### 闪结BP

预售的商品，不能加购，比如：[BANDAI：SHF假面骑士空我](https://item.m.jd.com/product/10104923384837.html?utm_term=CopyURL&utm_user=plusmember&utm_source=iosapp&utm_campaign=t_335139774&utm_medium=appshare&ad_od=share&gx=RnAox25ZYDHey5gSwNk7DC5U&gxd=RnAokDYLb2CMzJ1BrIEmXRWPmw_ivjT6XjFpOunSC_H8ewWZJI3wZ18Z7RwZ1Oc)

![](/jd/jd-07.png)

用同样的方法，提取链接中的商品ID，却无法加购


![](/jd/jd-08.png)


我们可以通过跳转付款页面，直接提交，将商品ID按如下格式组合：

```
https://trade.m.jd.com/pay?booking=1&type=0&commlist={商品ID},,{商品数量},{商品ID},{商品数量},0,0
```

改好后，我的链接是这样的

```
https://trade.m.jd.com/pay?booking=1&type=0&commlist=10104923384837,,1,10104923384837,1,0,0
```

![](/jd/jd-09.png)




## 快捷指令

* [快捷指令：JD加购BP二合一](https://www.icloud.com/shortcuts/89c1f19612284b23ad4b668e56468039)

* [JD商品ID 反查商品](https://www.icloud.com/shortcuts/3d1e706b4deb40c5a21a5f787f672320)

* [某东cookie提取](https://www.icloud.com/shortcuts/8efeb9d31c4d4f64948dd0fef9b568d2)
