## 企业微信通知推送

</br>

更新时间：2022-9-3


> 注意：使用企业微信做推送，也有一定几率被封号，如果被封将无法再使用企业微信，建议使用小号！

</br>

## 准备条件

</br>

* 微信小号1个

* 企业ID

* 应用ID(AgentId)

* Secret(秘钥)

不要急我们一个个来


</br>


## 1.注册

</br>

> 通过自建应用，利用推送工具，可无需下载企业微信，微信即可接收通知


企业微信官网：https://work.weixin.qq.com/

点击 `⽴即注册` 

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-01.png)


说明：注册有2种，企业版和教育版，任选其一即可

> 企业版需要加入企业并关注插件；教育版只需要邀请进班级即可

</br>

### 1.1 企业注册

> 企业应用需要加入企业，并关注插件

企业名称随意，管理员姓名真实，扫码绑定

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-02.png)

这样就注册成功了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-03.png)

</br>

### 1.2 学校注册

企业名称随便，行业类型必须`教育-学前教育`，员工规模101-200人

> 超200人就要认证费了，200以下免费

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-01.png)

其他信息真实的，绑定微信注册成功

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-02.png)


</br>



## 2. 获取企业ID

</br>

我的企业 - 企业ID

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-04.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-05.png)

</br>




## 3.常规设置

</br>

进入管理后台，关闭这里的自动提醒成员使用，而且这里提示有1人未加入，我们下载企业微信app并登陆

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-03.png)


在 `聊天管理` 成员创建群聊上限改成最低，关闭 消息阅读状态、部门群 、全员群 

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-06.png)


在 `通讯录管理` 中关闭通讯录访问权限，对所有⼈隐藏，主要是保护个人隐私


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-07.png)


在 `工作台管理` 中关闭成员可见的 第三方入口 和 上门服务入口


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-08.png)


在 `微信插件` 中保存邀请关注⼆维码，关闭微信插件底部快捷打开

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-09.png)


在 `申请加⼊设置` 中关闭通过企业查找加入

> 如果不想别人乱加，可以开启 加入企业管理员审核

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-10.png)


在 `设置` 中关闭使⽤提醒

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-11.png)


</br>


## 4.获取应用ID和Secret

</br>

应⽤管理 中创建应⽤

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-12.png)


上传LOGO、填写应⽤名称，选择部门，创建

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-13.png)

记下 AgentId ，点击 查看 获取 Secret

> 手机登录企业微信app查看

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-14.png)


</br>

</br>

## 5.关于推送

</br>

### 5.1 青龙推送（企业版）

</br>

查看 通讯录 中的帐号 ，微信插件是否 `已关注` 状态

> 未关注需要扫描 我的企业 - 微信插件 -邀请关注 中的⼆维码

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-19.png)


到 发送消息 中 `发消息`,素材库-图片-上传图⽚

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-15.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-16.png)


上传完成后，点击图标，右键-复制图片地址


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-17.png)


media_id 就是图⽚ID，这个类似微信公众号的封⾯图


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-18.png)


我们来看看青龙的配置要求

```
## 企业微信应用
## 参考文档：http://note.youdao.com/s/HMiudGkb
## 下方填写素材库图片id（corpid,corpsecret,touser,agentid），素材库图片填0为图文消息, 填1为纯文本消息
export QYWX_AM=""
```


我们按照对应的变量填写即可

```
export QYWX_AM="企业ID,应⽤Secret,账号(@all),应⽤ID,图⽚ID(选填)"
```



### 5.2 家校推送（教育版）


应用下填写 `应用主页`，必填！不然后面用不了，网址就随意

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-04.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-05.png)


家校通知 - 配置 -家长可使用的应用

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-06.png)


添加应用 

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-07.png)


选择 刚出创建的应用

> 如果这里没有创建的应用，是因为应用没有设置`应用主页`

> 小字也提示了：仅支持**设置了工作台主页**的应用和学校已关联的小程序

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-08.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-09.png)


家校沟通-家校通讯录

> 没有家校沟通，说明你注册就没有选教育

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-10.png)

删掉学段，我们自己自定义添加

> 同样我们也可以自定义班级

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-11.png)


点 邀请加入 ，保存二维码发给别人，就可以摇人了

> 或者草料识别二维码后，提取连接

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-12.png)


姓名随便，手机要微信绑定的，提交

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-13.png)

微信就多了一个 学校通知 

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-14.png)


</br>
</br>


## 6.推送插件

</br>

这里以 [线报酷](https://v1.xianbao.fun/) 的为例，有能力的自己看 [企业微信文档](https://work.weixin.qq.com/api/doc/90000/90135/91609 ) 接口写

> 弊端就是需要电脑一直挂着，可以考虑挂在服务器上


[注册账号](https://v1.xianbao.fun/register.html)，邀请码:000000

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-15.png)


注册号后，进入[线报酷后台](https://v1.xianbao.fun/Ucenter)，购买会员

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-16.png)


站长非常良心，给了1元试用5天，觉得好用可以开永久，付完款后，就成了体验会员

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-17.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-18.png)


网站设置-信息推送设置-微信家校推送-打开推送开关，填入企业ID、应用ID和秘钥

> 我这里是家校推送演示，其他推送自己按需打开填写


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-19.png)


实时线报设置-打开请求开关，间隔30秒

> 站长建议也是10-30秒，不要太短

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-20.png)


列表筛选-实时线报分类筛选，自己不喜欢的分类，屏蔽即可

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-21.png)


最后打开企业微信-我的应用-之前创建的应用下拉，企业可信IP-配置-确定

> 这里就用自己的本机IP，百度IP

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-22.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-23.png)


最后还需要安装好，油猴及拓展插件

> 不会安装的看教程：[☛油猴安装及使用](https://github.com/Yiov/notes/tree/main/tampermonkey)

```
https://v1.xianbao.fun/zb_users/theme/xianbao_theme/script/kuozhan.user.js?1.0
```

安装好插件，这里就有个开启监控的按键，点击

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-24.png)

提示 `监控推送中` 就可以等推送了

> 没有推送的话就刷新下页面

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-25.png)





### 特别鸣谢

* [企业微信](https://work.weixin.qq.com/)

* [线报酷](https://v1.xianbao.fun/)

