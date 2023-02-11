
## 無名の主页

简单的小主页，根据原作者[@imsyy](https://github.com/imsyy/home)的教程进行了详细截图补充


![無名の主页](https://s2.loli.net/2022/07/14/K5JigfvDoNewtuS.webp)

>主页的 Logo 字体已经过压缩，若用本站 Logo 以外的字母会变回默认字体，这里是 [完整字体](https://file.4everland.app/font/Other/Pacifico-Regular.ttf)


</br>
</br>


## Demo

>由于 CDN 缓存原因，查看最新效果可能需要 `Ctrl` + `F5` 强制刷新浏览器缓存

- [無名の主页](https://www.imsyy.top)

- [無名の主页 - 备用线路](https://home-imsyy.vercel.app/)

</br>
</br>


## 部署教程


### 1.下载源码

下载仓库源码后，放到一个盘符，并解压

> 我自己是放到了F盘

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-01.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-02.png)

</br>


### 2.安装nodejs环境


电脑打开nodejs官网下载：https://nodejs.org/zh-cn/

> 长期维护的版本，达到下面的要求就行
> 
> node > 16.16.0
> 
> npm > 8.15.0

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-03.png)

安装就不用我说了吧，一直下一步直到安装完成

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-04.png)


</br>



### 3.使用npm安装yarn

**win+R** 运行 `cmd` 终端

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-05.png)

`cd` 到 项目根目录，我这里是F盘，目录是home


```bash
#盘符
f:

#cd进目录
cd home
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-06.png)

</br>



```bash
# 安装yarn
npm install -g yarn

# 查看版本号
yarn -v

```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-07.png)

</br>


### 4.终端构建

安装依赖

```
yarn install
```
![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-08.png)



预览，退出预览`Ctrl`+`C`

```
yarn dev
```
![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-09.png)


构建，每次修改后都要重新构建一次

> 构建完成后，静态资源会在 **`dist` 目录** 中生成，可将 **`dist` 文件夹下的文件**上传至服务器，也可使用 `Vercel` 等托管平台一键导入并自动部署

```
yarn build
```
![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-10.png)


</br>
</br>


## 上传

</br>

我们将`dist`打包并上传到服务器上

> 我这里用的是宝塔[☛不会安装的看教程](https://github.com/Yiov/notes/tree/main/BT)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-11.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-12.png)


上传后访问域名，却只有文字，因为要开启https，我们直接SSL证书弄好了再开启

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-13.png)

然后我们就看到成果了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-14.png)



## 修改

</br>

基础信息的修改都在 `.env` 里面，右键笔记本打开修改保存

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-15.png)


其他信息的修改，请参考图

```bash
#站点信息/简介/天气/歌曲/建站日期
.env

#图标
public/images/icon

#社交链接
public/socialLinks.json

#社交联系语
src/components/SocialLinks/index.vue

#网站链接6个
src/components/Links/index.vue

#打开音乐
src/components/Hitokoto/index.vue

#音乐列表
src/components/Music/index.vue

#时间胶囊
src/components/TimeCapsule/index.vue

#设置
src/components/Set/index.vue

#页脚版权备案信息
src/components/Footer/index.vue
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-15.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/home/home-16.png)


</br>

### 1.天气

天气及地区获取需要 `高德开放平台` 相关 API

- 前往 [高德开放平台控制台](https://console.amap.com/dev/index) 创建一个 `Web 服务` 类型的 `Key`，并将 `Key` 填入 `.env` 中的 `VITE_WEATHER_KEY` 中

也可自行更换其他方式


### 2.音乐

>本项目采用了基于 `MetingJS` 的 `Aplayer` 音乐播放器，可实现快速自定义歌单
>
>*仅支持 **中国大陆地区**

请在 `.env` 文件中更改歌曲相关参数即可实现自定义歌单列表

```bash
# 歌曲 API 地址
VITE_SONG_API = "https://api-meting.imsyy.top"
# 歌曲服务器 ( netease-网易云, tencent-qq音乐 )
VITE_SONG_SERVER = "netease"
# 播放类型 ( song-歌曲, playlist-播放列表, album-专辑, search-搜索, artist-艺术家 )
VITE_SONG_TYPE = "playlist"
# 播放 ID
VITE_SONG_ID = "7452421335"
```

### 3.字体

现采用 `HarmonyOS Sans` 开源字体，采用字体拆分，提升加载速度

>由于本站 `CDN` 已开启防盗链，**非本站域名不可访问**，请将字体引入链接更改为下方内容，否则 **自定义字体将失效**
>
>`https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css`


</br>
</br>


## 常见问题

### 1.'yarn'不是内部或外部命令，也不是可执行的程序或批处理文件

答：yarn没有成功安装，卸载后重新安装

```bash
# 卸载
npm uninstall yarn -g

# 安装yarn
npm install -g yarn

# 查看版本号
yarn -v
```


## 特别鸣谢

* [@imsyy](https://github.com/imsyy/home)