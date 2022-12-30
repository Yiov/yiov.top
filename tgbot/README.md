## 创建自己的tg私聊机器人

</br>

更新时间：2022-12-17

主要目的还是方便信息处理，当然tg还有其他功能性的bot，这个以后慢慢了解

tg机器人目录：https://botostore.com/bots/telegram/

</br>
</br>

## 准备条件

</br>

2个bot即可

* [BotFather](https://t.me/BotFather)

* [CSFather](https://t.me/CSFatherBot) 或者 [Livegram Bot](https://t.me/LivegramBot)

</br>
</br>


## 步骤

</br>

在tg上搜索 `BotFather` 并开始 `/start` 和机器人对话

> 机器人之父，是所有机器人建立的基础

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/tgbot/tgbot-01.png)

意思都比较简单，实在看不懂就参照翻译操作

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/tgbot/tgbot-02.png)


点击 `/newbot` 创建一个机器人，给机器人取个昵称，中英文都可以，最后给他设置一个tg名

> 方便在tg直接搜索，类似于微信名

成功创建会得到一个tg机器人链接和最最重要的API授权令牌

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/tgbot/tgbot-03.png)

点击 `/setdescription` 给机器人设置一个描述

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/tgbot/tgbot-04.png)

再点击 `/setabouttext` ，选择机器人，设置个人资料卡的简介

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/tgbot/tgbot-05.png)

最后点击`/setuserpic` ，选择机器人，设置机器人的头像

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/tgbot/tgbot-06.png)


这样我们的机器人就创建完成了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/tgbot/tgbot-07.png)


机器人可以衍生出非常多功能，就说一个最常用的私聊信息转发

需要用到机器人 `CSFather` 或者 `Livegram Bot` ，我用CSFather演示

> CSFather第三方bot，支持中文，功能多
> 
> Livegram Bot官方bot，英文，功能少

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/tgbot/tgbot-08.png)

对话机器人后，点击 `/lang` 设置成 `中文简体`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/tgbot/tgbot-09.png)

点击新接一个机器人，根据提示粘贴之前的API令牌，就成功了

> 之前的步骤他这里也有视频演示

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/tgbot/tgbot-10.png)


其他功能不演示了，来看看消息发送是否正常

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/tgbot/tgbot-11.png)

用另一个号发消息，本机接收消息预览

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/tgbot/tgbot-12.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/tgbot/tgbot-13.png)

</br>
</br>



## 删除机器人

</br>

点击 `/deletebot` ，选择机器人，按提示输入确定删除

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/tgbot/tgbot-14.png)

删除后，原帐号变成 `已销号`

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/tgbot/tgbot-15.png)









