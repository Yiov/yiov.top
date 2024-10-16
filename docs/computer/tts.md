# 微软TTS·云希音色配音





## 简介

自媒体，短视频配音必备！

我们抖音常见的电影解说配音都出自它，实际是微软Azure的一个文本转语音功能，而 `云希` 就是最常见的一个音色



::: danger 关于微软正式关闭Azure的文本转语音功能

虽然已关闭，但我们还有方法，曲线救国

任选一种即可

* [安装插件](#安装插件)

* [TTS-VUE](#tts-vue)
:::



## 安装插件


打开谷歌商店，搜索：[tts](https://chrome.google.com/webstore/category/extensions)

::: details 打不开，需要翻墙？
蓝奏云：https://dzp.lanzouk.com/iwHgE1192tud

注：chrome和Edge需要在拓展里打开 `开发者工具` 开关
:::


![](/tts/tts-01.png)


然后 点击 更多拓展程序

![](/tts/tts-02.png)

点击 [Microsoft™ 文字转语音下载器 - 添加 TTS 下载](https://chrome.google.com/webstore/detail/downloader-for-microsoft/dplnecggiofdkdcagdkjebneaonfhbbb)

![](/tts/tts-03.png)


点 获取，等待安装成功就可以了

![](/tts/tts-04.png)

![](/tts/tts-05.png)


我们打开 [微软Azure文本转语音官网](https://azure.microsoft.com/zh-cn/services/cognitive-services/text-to-speech/) 看下，稍微等一下就出来了


![](/tts/tts-06.png)

更改下语言和音色，输入文本就可以转换,试听并下载了

::: warning 注意
插件限制每月6次，否则就要付费，可尝试多开浏览器
:::

![](/tts/tts-07.png)






## TTS-VUE

官网：[https://tts-doc.loker.vip/home.html](https://tts-doc.loker.vip/home.html)

仓库：[https://github.com/LokerL/tts-vue/](https://github.com/LokerL/tts-vue/)

![](/tts/tts-08.png)

按照教程先下载并解压

* [下载地址 Gitee](https://gitee.com/LGW_space/tts-vue/releases)

* [下载地址 GitHub](https://github.com/LokerL/tts-vue/releases)

* [下载地址 蓝奏云](https://wwn.lanzoul.com/b0f3ype9g) 密码：`em1n`

![](/tts/tts-09.png)


安装，哪个都可以，路径改一下不要装C盘了

![](/tts/tts-10.png)


安装好打开，就可以使用了

::: tip 说明
没有自动运行，关掉窗口再打开即可
:::

![](/tts/tts-11.png)



输入文本，选择自己想要的音色，转换完成下载即可

::: warning 注意
下载保存的时候，文件名后缀是text

需手动改成mp3
:::

![](/tts/tts-12.png)






## 常见问题

::: details 转换失败
查看文本是否过长，是否未添加逗号
:::


::: details 转换失败检查
点击左上角第4个按钮打开开发者工具，点击console打开控制台，点击custom level取消勾选Warnings，点击“开始转换”，并查看console输出内容
:::


::: details 429错误
调用接口过于频繁，暂时没有解决方案
:::



::: details 400错误
文本内出现了不能识别的字符，如：“&”等
:::


::: details 多音字
直接用声调拼音，搜狗输入法有注声调的拼音

如：`重复` 打成 `chóng复`

`重量` 打成 `zhòng量`

或者用在线的 [拼音声调表](https://www.feisuxs.com/zidian/pyzm/shengdiao.html)
:::



::: details 停顿
不停顿

```
你好啊<mstts:ttsbreak strength="none" />今天天气怎么样
```

停顿2秒

```
你好啊<break time="2000ms"/>今天天气怎么样?
```
:::



::: details 转换的声音都是 one one one

点击文本文档，另存为，编码选择UTF-8
:::


