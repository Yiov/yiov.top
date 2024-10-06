# 简单的个人主页搭建




## 简介

简单的小主页，根据原作者 [@imsyy](https://github.com/imsyy/home) 的教程进行了详细截图补充


![無名の主页](/home/home.jpg)



## Demo

::: tip 说明
由于 CDN 缓存原因，查看最新效果可能需要 `Ctrl` + `F5` 强制刷新浏览器缓存
:::

- [無名の主页](https://www.imsyy.top)

- [無名の主页 - 备用线路](https://home-imsyy.vercel.app/)



## 前期准备

::: warning 注意
已安装过的无视
:::

::: details 安装nodejs

请参考之前的教程 [node.js安装使用](./nodejs.md#安装)
:::




:::: details 安装pnpm

::: warning 注意
pnpm和yarn任选一个
:::

`win键` + `R键`，输入`cmd` 回车，进入命令命令终端


![](/home/home-01.png)


```sh
# 安装 pnpm
npm install -g pnpm

# 查版本
pnpm -v
```

::: tip 说明
我们可以关闭cmd命令终端，一会用更快捷的方式进入
:::

![](/home/home-02.png)



::::


## 下载源码

下载源码：https://github.com/imsyy/home

![](/home/home-03.png)

放到一个盘符，并解压

::: tip 说明
我自己是放到了 `F盘`
:::

![](/home/home-04.png)





## 安装依赖


在目录栏上方输入 `cmd` 快捷进入终端

![](/home/home-05.png)

![](/home/home-06.png)


```sh
pnpm install
```


![](/home/home-07.png)





## 开发模式



```sh
pnpm dev
```


![](/home/home-08.png)


进入开发模式，会生成一个本地预览链接，打开

```
http://localhost:3000/
```

::: tip 说明
我们现在就要，将默认页面修改成自己的
:::



## 页面修改

![](/home/home-09.png)

![](/home/home-10.png)


### 站点信息

基础的修改都在 `.env` 里面，右键笔记本打开修改保存

![](/home/home-11.png)

根据自己需求，修改名称及关键词

```
#在.env中修改站点名称
VITE_SITE_NAME = "無名の主页"
VITE_SITE_ANTHOR = "無名"
VITE_SITE_KEYWORDS = "無名,个人主页"
VITE_SITE_DES = "一个默默无闻的主页"
```

### 站点链接

```
#在.env中修改
VITE_SITE_URL = "imsyy.top"
```

::: warning 注意
站点链接不想要也可以改成中文

但是这个字体优点和缺点一样明显，不支持的字母不转换，非常别扭
:::

于是我打算换字体，[点我查看 字体更换步骤](#字体修改)


更改成中文后这个 `.` 非常碍眼，可以在 `src - components - Message`文件夹将 `index.vue` 中 `sm` 后面的点删掉即可

```vue{9}
<template>
  <!-- 基本信息 -->
  <div class="message">
    <!-- Logo -->
    <div class="logo">
      <img class="logo-img" :src="siteLogo" alt="logo" />
      <div class="name text-hidden">
        <span class="bg">{{ siteUrl[0] }}</span>
        <span class="sm">.{{ siteUrl[1] }}</span> // [!code focus]
      </div>
    </div>
    ...
</template>
```

还有一个位置就是手机端，`views - Main`文件夹 `right.vue` 中 `sm` 后面的点删掉即可

```vue{6}
<template>
  <div :class="store.mobileOpenState ? 'right' : 'right hidden'">
    <!-- 移动端 Logo -->
    <div class="logo text-hidden" @click="store.mobileFuncState = !store.mobileFuncState">
      <span class="bg">{{ siteUrl[0] }}</span>
      <span class="sm">.{{ siteUrl[1] }}</span> // [!code focus]
    </div>
    ...
</template>
```


### Logo


```
图标
public/images/icon
```

除了主logo图是 `256x256` ，其他尺寸图需用Ps工具裁剪

![](/home/home-12.png)



* 图标工厂一键裁剪：https://icon.wuruihong.com/

* ICO图标在线转换：https://www.ico51.cn/



### 简介

这个按需修改就好了



```
#在.env中修改简介文本
VITE_DESC_HELLO = "Hello World !"
VITE_DESC_TEXT = "一个建立于 21 世纪的小站，存活于互联网的边缘"
VITE_DESC_HELLO_OTHER = "Oops !"
VITE_DESC_TEXT_OTHER = "哎呀，这都被你发现了（ 再点击一次可关闭 ）"
```

点击简介还能触发时光胶囊，我们在 `.env` 设置一下建站日期即可

```
#在.env中修改建站日期
## 若不需要，请设为空即可
## 请按照 YYYY-MM-DD 格式填写或者仅填写年份 YYYY
VITE_SITE_START = "2020-10-24"
```


### 社交链接

如果你需要改其他的，对应的图标放在 `images/icon/` 然后引用即可

```
社交链接
src/assets/socialLinks.json
```



不想要，直接清空 `socialLinks.json` 的内容，只留下中括号 `[]`

清空后的文字 `通过这里联系我吧` 在社交联系提示中修改

```
社交联系提示
src/components/SocialLinks/index.vue
```

这两个地方用 `//` 注释掉，一个是文字一个是背景框

```vue{6,14}
<script setup>
import { ref } from "vue";
import socialLinks from "@/assets/socialLinks.json";

// 社交链接提示
//const socialTip = ref("通过这里联系我吧"); // [!code focus]
</script>

<style lang="scss" scoped>
.social {
  ...
  @media (min-width: 768px) {
    &:hover {
      //background-color: #00000040; // [!code focus]
      backdrop-filter: blur(5px);
      .tip {
        display: block;
      }
    }
  }
}
</style>
```


### 网站列表

根据自己的需要修改即可，6个以上就是第2页

```
#网站列表
src/assets/siteLinks.json
```

icon作者使用的是 Xicon：https://xicons.org/

```
#icon修改
src/components/Links/index.vue
```

::: tip 说明
只能使用 `fa图标` ，网站好像得翻墙才能打开

以前是可以用字节旗下的 [IconPark](https://iconpark.oceanengine.com/official) ，现在不行了
:::

这两个地方要改对应，然后 `siteLinks.json` 中也要一致

```vue{3-10}
// 可前往 https://www.xicons.org 自行挑选并在此处引入
import {
  Link,
  Blog,
  CompactDisc,
  Buysellads,
  Compass,
  Book,
  Fire,
  LaptopCode,
} from "@vicons/fa";
```

```vue{3-8}
// 网站链接图标
const siteIcon = {
  Blog,
  Buysellads,
  CompactDisc,
  Compass,
  Book,
  Fire,
};
```



### 天气修改

天气及地区获取需要 [高德开放平台控制台](https://console.amap.com/dev/index) 获取 API

应用管理 - 我的应用 - 创建新应用

![](/home/home-13.png)

添加一个 `Web服务` 类型的Key

::: warning 注意
这里是添加 `Web服务`，不要选成web端(js api)
:::

![](/home/home-14.png)

将得到的 `Key` 复制填入 `.env` 中的 `VITE_WEATHER_KEY` 中

```
#在.env中修改天气 Key
VITE_WEATHER_KEY = "6c13af6fc30868bee488faf2cc652ab4"
```




### 页脚备案号

请在 `.env` 文件中更改

```
# #在.env中修改ICP 备案号
## 若不需要，请设为空即可
VITE_SITE_ICP = "豫ICP备2022018134号-1"
```


若无必要，可以不修改，保留作者信息

```
#更改页脚版权备案信息
src/components/Footer/index.vue
```


```vue{7-9}
<template>
  <footer>
    <div class="power" v-show="!store.playerState">
      <span>
        ...
        <!-- 站点作者显示 -->
        <a :href="SiteUrl">{{ SiteAnthor }}</a>
      </span>
      <!-- 以下信息请不要修改哦 -->
      <span class="hidden">
        &amp;&nbsp;Made&nbsp;by
        <a :href="config.github" target="_blank">
          {{ config.author }}
        </a>
      </span>
      ...
    </div>
  </footer>
</template>
```



### 音乐

请在 `.env` 文件中更改，本人不太喜欢网站有音乐的，有兴趣可以自行折腾


::: tip 说明
删除歌曲API等相关信息，就不会出现了，甚至都看不见列表入口
:::

```
# #在.env中修改歌曲 API 地址
## 请参照 https://github.com/xizeyoupan/Meting-API#deno-deploy 进行 API 服务部署
## 此处提供的服务可能会超量从而无法访问，请自行部署
## 若使用 QQ 音乐歌单，歌曲数量最好不要超出 50 首
## 备用：https://api.wuenci.com/meting/api/
VITE_SONG_API = "https://api-meting.imsyy.top/api"
# 歌曲服务器 ( netease-网易云, tencent-qq音乐 )
VITE_SONG_SERVER = "netease"
# 播放类型 ( song-歌曲, playlist-播放列表, album-专辑, search-搜索, artist-艺术家 )
VITE_SONG_TYPE = "playlist"
# 播放 ID
VITE_SONG_ID = "7452421335"
```


## 字体修改

在 `public - font` 文件夹中添加了一个字体即可，比如：[阿里巴巴普惠体](https://fonts.alibabagroup.com/#/font)

```
#字体文件夹
public/font
```

在 `src - style` 目录的 `style.scss` 里修改

```
#字体样式修改
src/style/style.scss
```

```scss{3-4}
// 字体文件
@font-face {
  font-family: "Pacifico-Regular";
  src: url("/font/Pacifico-Regular.ttf") format("truetype");
}
```

修改成其他字体后，首页LOGO和旁边的字体会错位

在 `src - components - Message` 目录中修改 `index.vue`里的 `.name` 值

```
#字体错位修改
src/components/Message/index.vue
```

PC端修改

```vue{5-11}
<style lang="scss" scoped>
.message {
  .logo {
    ...
    .name {
      width: 100%;
      height: 142px; //高度修改参考98px // [!code focus]
      margin-left: 12px;
      transform: translateY(-8px);
      font-family: "Pacifico-Regular"; //字体修改 // [!code focus]
    }
  }
}
</style>
```

手机端修改

```vue{12-17}
<style lang="scss" scoped>
.message {
  .logo {
    ...
    .name {
      ...
    },
    @media (max-width: 768px) {
      .logo-img {
        width: 100px;
      }
      .name {
        height: 128px; //修改高度参考88px // [!code focus]
        .bg {
          font-size: 4.5rem;
        }
      }
    }
  }
}
</style>
```



## 解除右键

::: tip 说明
为了浏览体验，本站禁用右键
:::

网页禁止了右键，查看审查元素不方便

可以在 `src - App.vue` 中使用 `/*` 和 `*/`注释掉即可

```
src/App.vue
```


```
// 屏蔽右键
  document.oncontextmenu = () => {
    ElMessage({
      message: "为了浏览体验，本站禁用右键",
      grouping: true,
      duration: 2000,
    });
    return false;
  };
```


## 加载中

进入首页会有个提示，不喜欢的可以在 `index.html` 中修改

只需要 `<!--注释-->` 加载动画的 `div`标签即可，当然你也可以删除

```html{2-17}
<body class="loading">
  <!--加载动画-->
  <!-- <div id="loading-box">
    <div class="loading-left-bg"></div>
    <div class="loading-right-bg"></div>
    <div class="spinner-box">
      <div class="loader">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
      </div>
      <div class="loading-word">
        <p class="loading-title" id="loading-title"><%- title %></p>
        <span id="loading-text">加载中</span>
      </div>
    </div>
  </div> -->
  ...
</body>
```


## 构建

修改完成后，我们退出开发模式

::: tip 说明
退出模式 `Ctrl`+`C`
:::

构建，构建后的静态资源会在 `dist` 目录中生成


```sh
pnpm build
```



![](/home/home-15.png)







## 上传

我们将`dist`打包并上传到服务器上

::: tip 说明
没有服务器也可使用 [静态托管平台部署](./pages/)
:::

![](/home/home-16.png)

![](/home/home-17.png)


上传后访问域名，却只有文字，因为要开启https，[直接SSL证书弄好了再开启](./Server/)

![](/home/home-18.png)

然后我们就看到成果了

![](/home/home-19.png)





## 常见问题

::: details pnpm不是内部或外部命令


原因：pnpm或yarn没有成功安装，卸载后重新安装


```sh
# 卸载
npm uninstall pnpm -g

# 安装pnpm
npm install -g pnpm

# 查看版本号
pnpm -v
```

:::