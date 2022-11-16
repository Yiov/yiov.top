
## 小米运动刷微信运动步数

</br>


更新时间：2021-10-18


</br>
</br>


## 准备工作

</br>

* 手机号1个(注册用)

* 小米运动APP(现已更名：Zepp life)


</br>
</br>


## 1.注册账号并绑定微信

</br>

打开 `Zepp life` App，点击注册账号，这里 不要点第三方登录

> 正常注册就行，该填的填，该选的选，照片不用传

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/xmsb/xmsb-01.png)



进入`Zepp life`APP后，点 我的—下拉 **第三方接入**

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/xmsb/xmsb-02.png)



这里绑定微信，就是刷微信运动

> 绑支付宝，就是刷的支付宝，其他同理

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/xmsb/xmsb-03.png)




进去后有个绑定的二维码，**手机截图**，微信扫码关注 `华米科技公众号` 绑定设备

> 没有显示绑定设备的，步骤不对，取关重来

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/xmsb/xmsb-04.png)



成功后，有提示，App也有绑定信息,到这里，我们就成功一半了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/xmsb/xmsb-05.png)




</br>
</br>


### 2.打开刷步网站开刷

</br>

刷步的网站、小程序以及APP也很多，基本都是一样的，哪个好用用哪个，懒得找就用下面的

爱刷步：http://www.ishuabu.com/

懒人运动宝：https://www.eyeit.cn

极速刷步：http://run.nanjin1937.com/


点击 **Zepp life** ，输入刚注册**小米的账号和密码**，以及要刷的步数，提交即可

> 注意：步数建议不要一下子太高，符合常理一点，你直接99999隔天就会被封微信运动，只能等解封


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/xmsb/xmsb-06.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/xmsb/xmsb-07.png)

</br>



如果服务器的，可以把脚本 `xmsb.py` 挂在青龙面板每天自动运行

```
第73行 改 步数区间范围
第156/158行 填入 账号密码
第160行 留空就按区间范围随机步数，填入就指定步数

```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/xmsb/xmsb-08.png)



</br>
</br>


### 3.打开 微信运动 查看步数

</br>

如果微信运动的步数，与你提交的一致，那么恭喜你成功了！

以后每次只需要打开刷步网站，提交步数就行了


</br>
</br>



## 常见问题

</br>

### 1.滴滴等第三方活动步数不同步

解决：微信端打开小程序同步即可

原因：获取步数的途径不同，APP获取的是手机本身的运动数据，而小程序是直接获取的微信运动的数据


</br>

### 2.如何查看是否绑定成功？

Zepp life-我的-第三方接入，这里显示的是你自己的微信，就说明已经绑定成功了

</br>


### 3.Zepp life App可以卸载了吗

完全可以，记得账号密码就行

</br>

### 4.刷步成功，数据没有同步

0-8点这个时间段，不同步

</br>

### 5.刷步成功，已经绑定，数据依然没有同步

可能有过手误取关过公众号，一但取关，绑定关系可能脱离，需要取关后重新进APP绑定

</br>


### 6.刷步成功，也已重新绑定过，数据依然没有同步


两种可能，要么是不是昨天刷的过猛，微信运动封了；要么就是你小米账号黑了，换个手机号重新注册绑定即可



