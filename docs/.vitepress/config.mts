import { defineConfig } from 'vitepress'
import { sidebar } from './configs'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Yiov',
  description: '敏而好学，不耻下问',

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
    lineNumbers: false, 
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },

    // 组件插入h1标题下
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`; 
          return htmlResult;
      }
    }

  },

  lastUpdated: true,


  //主题配置
  themeConfig: {

    logo: '/logo.png',

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
    sidebar,
  



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
    // footer: {
    //   message: 'Power by VitePress && Vidstack',
    //   copyright: `Copyright © 2023-${new Date().getFullYear()} <a href="https://github.com/Yiov" target="_blank">Yiov</a>`,
    // },


    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel:'返回顶部',


    //大纲
    outline: { 
      level: [2,3], // 显示2-3级标题
      label: '当前页大纲' // 文字显示
    },


    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 

  },

  
  
})
