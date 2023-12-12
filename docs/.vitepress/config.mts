import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "Yiov",
  description: "敏而好学，不耻下问",

  // fav
  head: [
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],

  base: '/', //网站部署到根目录

  //启用深色模式
  appearance:'dark',

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true, 

  },


  //主题配置
  themeConfig: {

    //导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '🐋 目录', link: '/guide/' },
      {
        //下拉菜单
        text: '其他站点',
        items: [
          { text: 'VitePress文档搭建', link: 'https://vitepress.yiov.top/' },
          { text: 'VuePress文档搭建', link: 'https://vuepress.yiov.top' },
          { text: '个人主页', link: 'https://yingyayi.com/' },
        ],
      },
    ],


    //侧边栏
    sidebar: [
      {
        //分组标题1
        text: '科学上网',
        collapsed: true,
        items: [
          { text: '圈X上手教程', link: '/gfw/quantumultX/' },
          { text: 'BoxJS的搭建', link: '/gfw/boxjs/' },
          { text: '科学上网工具及使用方法', link: '/gfw/proxy/' },
          { text: '机场channel大全一览表', link: '/gfw/channel/' },
        ],
      },
      {
        //分组标题2
        text: '日常使用',
        collapsed: true,
        items: [
          { text: '待产包清单及入院指南', link: '/daily/bags-just-yet/' },
          { text: '百度云下载变态加速', link: '/daily/baiduyun/' },
          { text: '书签同步至不同浏览器', link: '/daily/bookmark/' },
          { text: '微软tts·云希音色配音', link: '/daily/tts/' },
          { text: 'crx浏览器插件导出', link: '/daily/crx/' },
          { text: 'git使用及上传代码到仓库', link: '/daily/git/' },
          { text: 'Github的注册使用到上传', link: '/daily/github/' },
          { text: '快速提取应用icon图标', link: '/daily/icon/' },
          { text: 'Markdown的简单用法', link: '/daily/markdown/' },
          { text: 'Pake将网页打包成应用程序', link: '/daily/pake/' },
          { text: 'QQ邮箱接收其他邮箱信息', link: '/daily/qqmail/' },
          { text: '油猴安装及使用教程', link: '/daily/tampermonkey/' },
          { text: 'Todesk远程开关电脑', link: '/daily/todesk/' },
          { text: 'TV电视安装apk应用', link: '/daily/tvapp/' },
          { text: 'VSCode安装步骤', link: '/daily/VSCode/' },
          { text: '企业微信推送教程', link: '/daily/wecom/' },
          { text: '微PE制作PE启动盘', link: '/daily/wepe/' },
          { text: '小米运动刷步教程', link: '/daily/xmsb/' },
          { text: '电脑常见问题汇总', link: '/daily/win11/' },
          { text: 'Photoshop 2023无法安装', link: '/daily/ps/' },
          { text: '买房及房产证办理', link: '/daily/house/' },
          { text: '台州麻将玩法', link: '/daily/mahjong/' },
          { text: '1688母婴同源店', link: '/daily/1688/' },
        ],
      },
      {
        //分组标题3
        text: '安卓玩机',
        collapsed: true,
        items: [
          { text: '安卓抓包工具安装及使用', link: '/Android/HttpCanary/' },
          { text: '小米线刷降级破MIUI限制', link: '/Android/miui/' },
          { text: '小米下载国外版主题并提取', link: '/Android/mi_theme/' },
        ],
      },
      {
        //分组标题4
        text: 'iPhone玩机',
        collapsed: true,
        items: [
          { text: 'iPhone短信添加头像', link: '/iPhone/smscard/' },
          { text: '苹果抓包工具安装及使用', link: '/iPhone/Stream/' },
          { text: '注册国外苹果Apple_ID步骤', link: '/iPhone/Apple_ID/' },
          { text: 'stay2给Safari安装油猴插件', link: '/iPhone/stay2/' },
          { text: '签名工具', link: '/iPhone/sign/' },
          { text: '越狱工具', link: '/iPhone/Jailbreak/' },
          { text: 'MDC工具', link: '/iPhone/mdc/' },
          { text: 'KFD工具', link: '/iPhone/kfd/' },
          { text: '砸壳及注入', link: '/iPhone/dump/' },
          { text: 'Filza破解', link: '/iPhone/Filza/' },
        ],
      },
      {
        //分组标题5
        text: 'Telegram',
        collapsed: true,
        items: [
          { text: 'Telegram的注册及使用', link: '/telegram/tg/' },
          { text: '创建自己的tg私聊机器人 ', link: '/telegram/tgbot//' },
          { text: 'TG表情包下载与制作', link: '/telegram/sticker/' },
        ],
      },
      {
        //分组标题6
        text: '网站搭建',
        collapsed:true,
        items: [
          { text: '服务器的购买及网站初成', link: '/website/ECS/' },
          { text: 'VM虚拟机安装centos系统', link: '/website/VMware/' },
          { text: 'Xshell终端连接服务器', link: '/website/Xshell/' },
          { text: 'linux安装宝塔面板', link: '/website/BT/' },
          { text: 'node.js的安装教程', link: '/website/nodejs/' },
          { text: 'Go环境的安装教程', link: '/website/go/' },
          { text: 'Docker的安装教程', link: '/website/docker/' },
          { text: 'dockerhub上传本地镜像', link: '/website/dockerhub/' },
          { text: '青龙面板的安装及使用', link: '/website/qinglong/' },
          { text: 'wordpress详细安装教程', link: '/website/wordpress/' },
          { text: 'Webstack导航从零搭建', link: '/website/WebStack/' },
          { text: '搭建Favicon图标API', link: '/website/Favicon/' },
          { text: 'Onenav导航网页的搭建', link: '/website/onenav/' },
          { text: 'Github Page静态托管建站', link: '/website/githubpage/' },
          { text: 'Vercel静态部署网站', link: '/website/vercel/' },
          { text: '闲置iPhone搭建静态网站', link: '/website/ish/' },
          { text: 'Halo博客的搭建', link: '/website/Halo/' },
          { text: '简单的个人主页搭建', link: '/website/home/' },
          { text: 'Portofolio个人主页搭建', link: '/website/Portofolio/' },
          { text: '搭建专属的记仇小本本', link: '/website/heng/' },
          { text: 'Alist搭建自己的专属网盘', link: '/website/Alist/' },
          { text: 'Centos系统切换图形界面', link: '/website/Centos/' },
          { text: '浅谈内网穿透', link: '/website/NAT/' },
          { text: 'Socks5的搭建', link: '/website/socks5/' },
          { text: 'cloudflare注册使用', link: '/website/cloudflare/' },
          { text: '各类主题/模板/源码汇总 ', link: '/website/source/' },
        ],
      },
      {
        //分组标题6
        text: '其他站点',
        //collapsed: false,
        items: [
          { text: 'VitePress文档搭建', link: 'https://vitepress.yiov.top/' },
          { text: 'VuePress文档搭建', link: 'https://vuepress.yiov.top/' },
          { text: '个人主页', link: 'https://yingyayi.com/' },
        ],
      },
    ],
  



    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },



    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yiov/yiov.top' },
    ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',

    //页脚
    footer: {
      message: 'Power by <a href="https://github.com/yyx990803" target="_blank">VitePress(Evan You)</a>',
      copyright: 'Copyright © 2023 <a href="https://github.com/Yiov" target="_blank">Yiov</a>',
    },


    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel:'返回顶部',


    //大纲显示2-3级标题
    outline:[2,3],
    //大纲顶部标题
    outlineTitle:'当前页大纲',


    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 

  },

  
  
})
