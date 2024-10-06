# 企业微信通知推送





## 简介

通过自建应用，利用推送工具，可无需下载企业微信，微信即可接收通知

::: danger 注意
使用企业微信做推送，也有一定几率被封号，如果被封将无法再使用企业微信，建议使用小号！
:::

官网：https://work.weixin.qq.com/

![](/wecom/wecom-01.png)



## 注册


在 [企业微信官网](https://work.weixin.qq.com/)，点击 `⽴即注册` 


::: tip 说明
注册有2种：企业版 和 教育版，任选其一即可！

`企业版` 需要加入企业并关注插件

`教育版` 只需要邀请进班级即可
:::


::: details 企业注册

企业名称随意，管理员姓名真实，扫码绑定

![](/wecom/wecom-02.png)

这样就注册成功了

![](/wecom/wecom-03.png)

:::




:::: details 学校注册（推荐）

企业名称随便，行业类型必须`教育-学前教育`，员工规模101-200人

::: tip 说明
超200人就要认证费了，200以下免费
:::

![](/wecom/edu/edu-01.png)

其他信息真实的，绑定微信注册成功

![](/wecom/edu/edu-02.png)

::::




## 基础信息

### 企业ID


我的企业 - 企业ID

![](/wecom/wecom-04.png)

![](/wecom/wecom-05.png)






### 常规设置

进入管理后台，关闭这里的自动提醒成员使用

而且这里提示有1人未加入，我们下载企业微信app并登陆

![](/wecom/edu/edu-03.png)


在 `聊天管理` 成员创建群聊上限改成最低，关闭 消息阅读状态、部门群 、全员群 

![](/wecom/wecom-06.png)


在 `通讯录管理` 中关闭通讯录访问权限，对所有⼈隐藏，主要是保护个人隐私


![](/wecom/wecom-07.png)


在 `工作台管理` 中关闭成员可见的 第三方入口 和 上门服务入口


![](/wecom/wecom-08.png)


在 `微信插件` 中保存邀请关注⼆维码，**取消勾选** 微信插件底部快捷打开

![](/wecom/wecom-09.png)


在 `申请加⼊设置` 中关闭通过企业查找加入

::: tip 说明
如果不想别人乱加，可以开启 加入企业管理员审核
:::

![](/wecom/wecom-10.png)


在 `设置` 中关闭使⽤提醒

![](/wecom/wecom-11.png)





### 应用ID和Secret



应⽤管理 中创建应⽤

![](/wecom/wecom-12.png)


上传LOGO、填写应⽤名称，选择部门，创建

![](/wecom/wecom-13.png)

记下 AgentId ，点击 查看 获取 Secret

::: tip 说明
手机登录企业微信app查看
:::

![](/wecom/wecom-14.png)






## 推送



:::: details 青龙推送（企业版）


查看 通讯录 中的帐号 ，微信插件是否 `已关注` 状态

::: tip 说明
未关注需要扫描 我的企业 - 微信插件 -邀请关注 中的⼆维码
:::

![](/wecom/wecom-19.png)


到 发送消息 中 `发消息`,素材库-图片-上传图⽚

![](/wecom/wecom-15.png)

![](/wecom/wecom-16.png)


上传完成后，点击图标，右键-复制图片地址


![](/wecom/wecom-17.png)


media_id 就是图⽚ID，这个类似微信公众号的封⾯图


![](/wecom/wecom-18.png)


我们来看看青龙的配置要求

```sh
## 企业微信应用
## 参考文档：http://note.youdao.com/s/HMiudGkb
## 下方填写素材库图片id（corpid,corpsecret,touser,agentid），素材库图片填0为图文消息, 填1为纯文本消息
export QYWX_AM=""
```


我们按照对应的变量填写即可

```sh
export QYWX_AM="企业ID,应⽤Secret,账号(@all),应⽤ID,图⽚ID(选填)"
```

::::






:::: details 家校推送（教育版）


应用下填写 `应用主页`，必填！网址就随意

::: warning 注意
一定要填写，否则会无法使用
:::

![](/wecom/edu/edu-04.png)

![](/wecom/edu/edu-05.png)


家校通知 - 配置 -家长可使用的应用

![](/wecom/edu/edu-06.png)


添加应用 

![](/wecom/edu/edu-07.png)


选择 刚出创建的应用

::: tip 说明
如果这里没有创建的应用，是因为应用没有设置`应用主页`

小字也提示了：仅支持 **设置了工作台主页** 的应用和学校已关联的小程序
:::

![](/wecom/edu/edu-08.png)

![](/wecom/edu/edu-09.png)


家校沟通-家校通讯录

::: tip 说明
没有家校沟通，说明你注册，就没有选教育
:::

![](/wecom/edu/edu-10.png)

删掉学段，我们自己自定义添加

::: tip 说明
同样我们也可以自定义班级
:::

![](/wecom/edu/edu-11.png)


点 邀请加入 ，保存二维码发给别人，就可以摇人了

::: tip 说明
或者草料识别二维码后，提取连接
:::

![](/wecom/edu/edu-12.png)


姓名随便，手机要微信绑定的，提交

![](/wecom/edu/edu-13.png)

微信就多了一个 学校通知 

![](/wecom/edu/edu-14.png)


::::







:::: details 推送插件


这里以 [线报酷](https://v1.xianbao.fun/) 的为例，有能力的自己看 [企业微信文档](https://work.weixin.qq.com/api/doc/90000/90135/91609 ) 接口写

::: tip 说明
弊端就是需要电脑一直挂着，可以考虑挂在服务器上
:::

注册账号，邀请码：`000000`

![](/wecom/edu/edu-15.png)


注册号后，进入线报酷后台，购买会员

![](/wecom/edu/edu-16.png)


站长非常良心，给了1元试用5天，觉得好用可以开永久，付完款后，就成了体验会员

![](/wecom/edu/edu-17.png)

![](/wecom/edu/edu-18.png)


网站设置 - 信息推送设置 - 微信家校推送 - 打开推送开关，填入企业ID、应用ID和秘钥

::: tip 说明
我这里是家校推送演示，其他推送自己按需打开填写
:::

![](/wecom/edu/edu-19.png)


实时线报设置 - 打开请求开关，间隔30秒

::: tip 说明
站长建议也是10-30秒，不要太短
:::

![](/wecom/edu/edu-20.png)


列表筛选 - 实时线报分类筛选，自己不喜欢的分类，屏蔽即可

![](/wecom/edu/edu-21.png)


最后打开企业微信 - 我的应用 - 之前创建的应用下拉，企业可信IP - 配置 - 确定

::: tip 说明
这里就用自己的本机IP，百度IP
:::

![](/wecom/edu/edu-22.png)

![](/wecom/edu/edu-23.png)


最后通过 [油猴](./tampermonkey) 安装好 [线报酷拓展](https://greasyfork.org/zh-CN/scripts/439523)

::: details 插件页面失效，进线报酷官网查看
线报酷教程：http://new.xianbao.fun/jiaocheng/505211.html
:::

安装好插件，这里就有个开启监控的按键，点击

![](/wecom/edu/edu-24.png)

提示 `监控推送中` 就可以等推送了

::: tip 说明
没有推送的话就刷新下页面
:::

![](/wecom/edu/edu-25.png)


::::





## 特别鸣谢

* [企业微信](https://work.weixin.qq.com/)

* [线报酷](https://v1.xianbao.fun/)

