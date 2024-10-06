# 创建自己的tg私聊机器人






## 准备


2个bot即可

* [BotFather](https://t.me/BotFather)

* [CSFather](https://t.me/CSFatherBot) 或者 [Livegram Bot](https://t.me/LivegramBot)




## 创建机器人


在tg上搜索 `BotFather` 并开始 `/start` 和机器人对话

::: tip 说明
机器人之父，是所有机器人建立的基础
:::

![](/tgbot/tgbot-01.png)

意思都比较简单，实在看不懂就参照翻译操作

![](/tgbot/tgbot-02.png)


点击 `/newbot` 创建一个机器人，给机器人取个昵称，中英文都可以，最后给他设置一个tg名

::: tip 说明
方便在tg直接搜索，类似于微信名
:::

成功创建会得到一个tg机器人链接和最最重要的API授权令牌

![](/tgbot/tgbot-03.png)

点击 `/setdescription` 给机器人设置一个描述

![](/tgbot/tgbot-04.png)

再点击 `/setabouttext` ，选择机器人，设置个人资料卡的简介

![](/tgbot/tgbot-05.png)

最后点击`/setuserpic` ，选择机器人，设置机器人的头像

![](/tgbot/tgbot-06.png)


这样我们的机器人就创建完成了

![](/tgbot/tgbot-07.png)


机器人可以衍生出非常多功能，就说一个最常用的私聊信息转发

需要用到机器人 `CSFather` 或者 `Livegram Bot` ，我用CSFather演示

::: tip 说明
CSFather第三方bot，支持中文，功能多

Livegram Bot官方bot，英文，功能少
:::


![](/tgbot/tgbot-08.png)

对话机器人后，点击 `/lang` 设置成 `中文简体`

![](/tgbot/tgbot-09.png)

点击新接一个机器人，根据提示粘贴之前的API令牌，就成功了

::: tip 说明
之前的步骤他这里也有视频演示
:::

![](/tgbot/tgbot-10.png)


其他功能不演示了，来看看消息发送是否正常

![](/tgbot/tgbot-11.png)

用另一个号发消息，本机接收消息预览

![](/tgbot/tgbot-12.png)

![](/tgbot/tgbot-13.png)






## 删除机器人

::: warning 注意
删除就直接销号，无法找回
:::

点击 `/deletebot` ，选择机器人，按提示输入确定删除

![](/tgbot/tgbot-14.png)

删除后，原帐号变成 `已销号`

![](/tgbot/tgbot-15.png)







## 其他机器人

tg机器人目录：[https://botostore.com/bots/telegram/](https://botostore.com/bots/telegram/)


### 官方

* [@BotFather：tg官方机器人创建](https://t.me/BotFather)

* [@Bot Support：tg官方问题和建议反馈机器人](https://t.me/BotSupport)

* [@DiscussBot：tg官方频道评论通知机器人](https://t.me/discussbot)

*  [@Gmail Bot：tg官方收发gmail机器人](https://t.me/GmailBot)

* [@GameBot：tg官方游戏平台demo机器人](https://t.me/gamebot)

* [@Spam Info Bot：tg官方垃圾信息机器人，可解除私聊限制](https://t.me/SpamBot)

* [@ Stickers Bot：tg官方贴纸表情包制作机器人](https://t.me/Stickers)

* [@Telegraph：tg官方Telegraph登录和管理机器人](https://t.me/telegraph)





### 音乐

* [@Audio Converter：将音乐文件转换成AAC+格式](https://t.me/encoderbot)

* [@MP3 Tools：音乐格式__转换/剪辑等](https://t.me/mp3toolsbot)

* [@Music163bot：网易云音乐下载](https://t.me/Music163bot)

* [@チノ喵：网易云音乐下载](https://t.me/ChinoNyanBot)

* [@Song🆔：音乐识别，听歌识曲](https://t.me/SongIDbot)

* [@Spotify：搜索并下载Spotify歌曲](https://t.me/spotifybot)


### 二维码


* [@QrCode Bot：二维码生成，支持文字/链接](https://t.me/MakeQrBot)

* [@URL Shortener：短网址生成，支持bit.ly/q.gs/tinyurl.com](https://t.me/LinkGeneratorBot)

* [@Scan Any QR Code：二维码识别，链接生成](https://t.me/ScanAnyQRbot)






### 文件

* [@Alert Bot：消息提醒工具，可指定时间](https://t.me/AlertBot)

* [@Countdown：设置倒计时天数提醒](https://t.me/ctdwnbot)

* [@Dr.Web：查看文件是否有病毒](https://t.me/DrWebBot)

* [@VirusTotal：查看文件是否有病毒](https://t.me/VirusTotalAV_bot)

* [@Get Public Link Bot：发送文件获取下载链接](https://t.me/GetPublicLinkBot)

* [@tlgur：tg文件托管服务，发送文件获取链接](https://t.me/tlgurbot)

* [@TGhost — file sharing：发送文件获取下载链接](https://t.me/TGhost_bot)

* [@网盘机器人：免费，支持文件/视频/图片/音乐上传](https://t.me/WangPanBOT)

* [@Nepho：在线网盘](https://t.me/NephoBot)

* [@Time：发送位置可获得当地的时间](https://t.me/TheTimeBot)

* [@telegram-sms：安卓短信自动转发到其他手机上](https://github.com/qwe7002/telegram-sms)




### 信息

* [@GetIDs Bot：查看个人tg电报ID/注册日期](https://t.me/getidsbot)

* [@getuserID：获取个人电报id](https://t.me/getuseridbot)

* [@Get My ID：获取个人电报id](https://t.me/getmyid_bot)

* [@GroupID：获取对话ID](https://t.me/GroupIDbot)

* [@Telegram Bot Raw：获取频道、群组和用户信息](https://t.me/RawDataBot)

* [@userinfobot：获取个人电报ID](https://t.me/userinfobot)

* [@平安社工库：个人信息查询](https://t.me/pingansgk_bot)



### 贴纸


* [@GifTube：截取油管视频片段生成Gif](https://t.me/giftubebot)

* [@Reverse Search Bot：图片/GIF/贴纸来源搜索，还支持动漫截图识别](https://t.me/reverseSearchBot)

* [@stickers to GIF convert：将tg动态贴纸表情包转换成GIF格式](https://t.me/tgstogifbot)

* [@stickers to Webp convert：将tg动态贴纸表情包转换成Webp格式](https://t.me/tgstowebpbot)

* [@Sticker Download：tg贴纸表情包下载，支持任何图片和压缩包格式](https://t.me/Stickerdownloadbot)

* [@StickerSetBot：tg静态贴纸表情包下载，发送贴纸链接](https://t.me/stickerset2packbot)

* [@TG Downloader：tg表情包下载，支持图片/视频](https://t.me/GIFDownloader_bot)

* [@Text sticker：大字图生成机器人](https://t.me/big_text_bot)

* [@为所欲为：有钱就可以为所欲为的表情包生成机器人](https://t.me/youqianbot)

* [@王境泽：王境泽真香的表情包生成机器人](https://t.me/wangjingze_bot)





### 视频

* [@All Saver：油管/ins/TikTok/Pinterest下载](https://t.me/allsaverbot)

* [@AudioTubeBot：解析下载油管/VK视频里的音频](https://t.me/AudioTubeBot)

* [@Downloads Master：油管/Spotify/Ins/TikTok/推特/脸书/Reddit/Twitch下载](https://t.me/DownloadsMasterBot)

* [@TwitterDlrobot：推特视频下载](https://t.me/twitterdlrobot)

* [@Twitter Video Downloader：推特视频下载](https://t.me/TwitterDownloaderBot)

* [@TorPurrBot：油管/tiktok/种子/磁力下载](https://t.me/TorPurrBot)

* [@utubebot：油管视频下载，也可转换成mp3](https://t.me/utubebot)

* [@youtube_dwnldr_bot：油管1080P视频下载](https://t.me/youtube_downloader_bot2)

* [@Video Download Bot：推特/油管/脸书/TikTok下载](https://t.me/VideoDownloadBot)

* [@YoutubeDL：油管/推特/脸书/TikTok下载](https://t.me/YtbDownBot)

* [@Youtube Audio Download：油管视频转音频(提取\)](https://t.me/YoutubeAudioDownloadBot)






### 频道

* [@File Store Bot：解除频道禁止转发保存的媒体机器人](https://t.me/GetFilesRoBot)

* [@Group Help：群组管理机器人](https://t.me/GroupHelpBot)

* [@ixdbot：查到群组管理员的用户名、id、昵称、管理权限等](https://t.me/ixdbot)

* [@Lottery Bot V2：Telegram 中文公平抽奖机器人](https://t.me/tgLotteryBot)

* [@msg_getbot：频道消息提取器，破除频道转发限制](https://t.me/msg_get_bot)

* [@NoAdBot：自动删除群组推广/广告/菠菜等等消息](https://t.me/keyworddel_bot)

* [@Policr Mini(beta)：进群验证机器人](https://t.me/policr_mini_bot)

* [@Quality Button Creator - Banner Creator：频道通知底部的按键导航](https://t.me/Buttoncreatingbot)

* [@Restricted Content Bot：频道消息复制，破除频道复制限制](https://t.me/RestrictedContentBot)

* [@Save Restricted Content：破除频道转发复制限制](https://t.me/SaveRestrictedBot)

* [@Rose：进群验证机器人](https://t.me/MissRose_bot)

* [@干物妹！小霾：频道群组管理机器人](https://t.me/WooMaiBot)

* [@無名：频到管理机器人](https://t.me/WuMingv2Bot)




### 其他

* [@APK Downloader：安卓apk文件下载，支持谷歌商店](https://t.me/apkdl_bot)

* [@Create .attheme：发送一张图片快速创建安卓tg主题](https://t.me/createAtthemeBot)

* [@CSFather：自行创建消息转发机器人](https://t.me/CSFatherBot)

* [@Livegram Bot：自行创建消息转发机器人](https://t.me/LivegramBot)

* [@FFQSubinfoBot：机场订阅查询/流量查询](https://t.me/FFQSubinfoBot)

* [@Free books downloader：搜索和下载 Library/Zlibrary的电子书](https://t.me/libsan_bot)

* [@BookDown：电子书下载](https://t.me/bookdownbot)

* [@搜书神器Bot V1.1：全能的智能搜书机器人](https://t.me/sosdbot)

* [@GitHubBot：GitHub仓库状态更新通知](https://t.me/GitHubBot)

* [@imgbb：图床机器人](https://t.me/imgbbpicbot)

* [@InstaSave：Instagram图片/头像下载](https://t.me/Instasave_bot)

* [@Manybot：创建自己的机器人](https://t.me/Manybot)

* [@MEGA_CONVERSION_BOT：视频/图片格式转换](https://t.me/MEGA_CONVERSION_BOT)

* [@Unarchive files：压缩包解压，支持多种格式](https://t.me/unzip_edm115bot)

* [@Telegram-Anti-Revoke：tg防撤回插件](https://github.com/SpriteOvO/Telegram-Anti-Revoke)

* [@ShziBot：AI换脸机器人](https://t.me/aishuazibot)

* [@RMBToUSDTBot：买U机器人](https://t.me/RMBToUSDTBot)

* [@8度节点机器人：24小时免费获取节点](https://t.me/badujd_bot)

* [@阿里云盘搜索机器人：阿里云盘资源搜索](https://t.me/aliyunshare_bot)

* [@主题酱：tg主题收集](https://t.me/zhutibot)


