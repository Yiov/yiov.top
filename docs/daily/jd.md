# 京东商品强制加入购物车

> 更新时间：2024-5-28


## 简介

适用于无货商品、秒杀商品，别人都在挤，你已经进去提交了


## 登录

我们全程在微信端演示，微信有内置的浏览器

登陆账号：https://cart.jd.com


![](/jd/jd-01.png)


我截图了用京东APP扫码登录，成功后会跳转到购物车

![](/jd/jd-02.png)

随便找个商品，复制链接，比如：[西门子](https://item.m.jd.com/product/100054487281.html?utm_term=CopyURL&utm_user=plusmember&utm_source=iosapp&utm_campaign=t_335139774&utm_medium=appshare&ad_od=share&gx=RnAox25ZYDHey5gSwNk7DC5U&gxd=RnAokDYLb2CMzJ1BrIEmXRWPmw_ivjT6XjFpOunSC_H8ewWZJI3wZ18Z7RwZ1Oc)

![](/jd/jd-03.png)

发到微信端，我们需要提取链接中的商品ID，即 `product` 后面的数字

然后粘贴组合链接

```:no-line-numbers
https://cart.jd.com/gate.action?ptype=1&pcount=1&pid={商品ID}
```

比如：https://cart.jd.com/gate.action?ptype=1&pcount=1&pid=100054487281

![](/jd/jd-04.png)

微信点开链接，加自动加购了，在APP端也可以看到

![](/jd/jd-05.png)

![](/jd/jd-06.png)

其中product后面的数字就是我们要的pid

将pid粘贴到下面链接中

https://cart.jd.com/gate.action?ptype=1&pcount=1&pid=100054487281

微信打开改好的链接，打开就自动加购成功了

其中pcount是加购的数量，可以自己改


有一个例外，就是预售价的商品，无法加购

只能通过跳转付款页面解决

同样复制商品链接找到pid

https://item.m.jd.com/product/10104923384837.html?utm_term=CopyURL&utm_user=plusmember&utm_source=iosapp&utm_campaign=t_335139774&utm_medium=appshare&ad_od=share&gx=RnAox25ZYDHey5gSwNk7DC5U&gxd=RnAokDYLb2CMzJ1BrIEmXRWPmw_ivjT6XjFpOunSC_H8ewWZJI3wZ18Z7RwZ1Oc


https://item.m.jd.com/product/100100345700.html?utm_term=CopyURL&utm_user=plusmember&utm_source=iosapp&utm_campaign=t_335139774&utm_medium=appshare&ad_od=share&gx=RnAox25ZYDHey5gSwNk7DC5U&gxd=RnAokDYLb2CMzJ1BrIEmXRWPmw_ivjT6XjFpOunSC_H8ewWZJI3wZ18Z7RwZ1Oc


https://item.m.jd.com/product/10104923384837.html

https://trade.m.jd.com/pay?booking=1&type=0&wdref=https://item.m.jd.com/product/100100345700.html?appCode=&commlist=100100345700,,2,100100345700,2,0,0

