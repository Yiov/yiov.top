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
    lineNumbers: false, 
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },

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
        items: [
          { text: '工具', 
            collapsed: true,
            items: [
              { text: '介绍(必看)', link: '/gfw/proxy' },
              { text: '圈X', link: '/gfw/quantumultX' },
              { text: 'BoxJS', link: '/gfw/boxjs' },
              { text: '小火箭', link: '/gfw/shadowrocket' },
              { text: 'Clash', link: '/gfw/Clash' },
              { text: 'WARP', link: '/gfw/warp' },
              { text: 'WireGuard', link: '/gfw/wireguard' },
              { text: 'sing-box', link: '/gfw/singbox' },
              { text: 'NekoBox', link: '/gfw/NekoBox' },
              { text: 'Karing', link: '/gfw/Karing' },
              { text: 'Hiddify', link: '/gfw/Hiddify' },
              { text: 'V2Ray', link: '/gfw/v2ray' },
            ],
          },
          { text: '机场', link: '/gfw/channel' },
          { text: '协议', link: '/gfw/protocol' },

        ],
      },

      {
        //分组标题2
        text: '日常生活',
        items: [
          { text: '常识', 
            collapsed: true,
            items: [
              { text: '维生素', link: '/daily/vitamin' },
              { text: '血常规', link: '/daily/blood' },
              { text: '车厘子', link: '/daily/cherries' },
              { text: '房产证', link: '/daily/house' },
              { text: '廿四节气', link: '/daily/24' },
            ],
          },

          { text: '技巧', 
            collapsed: true,
            items: [
              { text: 'PayPal', link: '/daily/paypal' },
              { text: '待产包', link: '/daily/bags-just-yet' },
              { text: '台州麻将', link: '/daily/mahjong' },
              { text: '1688同源店', link: '/daily/1688' },
              { text: '京东强制加购', link: '/daily/jd' },
              { text: '淘宝强制提交', link: '/daily/taobao' },
            ],
          },

        ],
      },

      {
        //分组标题3
        text: '电脑相关', 
        items: [
          { text: '系统', 
            collapsed: true,
            items: [
              { text: '微PE', link: '/computer/wepe' },
              { text: '电脑常见问题', link: '/computer/win11' },
            ],
          },

          { text: 'crx', 
            collapsed: true,
            items: [
              { text: '油猴插件', link: '/computer/tampermonkey' },
              { text: '书签同步', link: '/computer/bookmark' },
              { text: '插件导出', link: '/computer/crx' },
            ],
          },

          { text: '应用', 
            collapsed: true,
            items: [
              { text: 'Pake', link: '/computer/pake' },
              { text: 'Todesk', link: '/computer/todesk' },
              { text: 'Markdown', link: '/computer/markdown' },
              { text: 'PS 2023', link: '/computer/ps' },
              { text: 'icon提取', link: '/computer/icon' },
              { text: 'QQ邮箱', link: '/computer/qqmail' },
              { text: '电视应用', link: '/computer/tvapp' },
              { text: '微软TTS', link: '/computer/tts' },
              { text: '企业微信推送', link: '/computer/wecom' },
            ],
          },

        ],
      },

      {
        //分组标题4
        text: '小米相关',
        items: [
          { text: '小米降级', link: '/mi/miui' },
          { text: '小米主题', link: '/mi/mi_theme' },
        ],
      },
      {
        //分组标题5
        text: 'iPhone玩机',
        items: [
          { text: '日常使用', 
            collapsed: true,
            items: [
              { text: 'iMessage', link: '/iPhone/smscard' },
              { text: 'Apple ID', link: '/iPhone/Apple_ID' },
              { text: 'stay2', link: '/iPhone/stay2' },
              { text: 'Stream', link: '/iPhone/Stream' },
              { text: 'Reqable', link: '/iPhone/Reqable' },
            ],
          },
          { text: '签名工具', 
            collapsed: true,
            items: [
            { text: '使用介绍(必读)', link: '/iPhone/sign/' },
            { text: '巨魔助手', link: '/iPhone/sign/TrollStore' },
            { text: '轻松签', link: '/iPhone/sign/esign' },
            { text: '牛蛙助手', link: '/iPhone/sign/bullfrog' },
            { text: 'Sideloadly', link: '/iPhone/sign/Sideloadly' },
            ],
          },
          { text: '越狱工具', 
            collapsed: true,
            items: [
            { text: '使用介绍(必读)', link: '/iPhone/Jailbreak/' },
            { text: 'Dopamine', link: '/iPhone/Jailbreak/Dopamine' },
            { text: 'unc0ver', link: '/iPhone/Jailbreak/unc0ver' },
            { text: 'checkra1n', link: '/iPhone/Jailbreak/checkra1n' },
            { text: '搭建插件源', link: '/iPhone/Jailbreak/repo' },

            ],
          },
          { text: '其他工具', 
            collapsed: true,
            items: [
              { text: 'MDC工具', link: '/iPhone/mdc' },
              { text: 'KFD工具', link: '/iPhone/kfd' },
              { text: 'Filza破解', link: '/iPhone/Filza' },

            ],
          },
        ],
      },
      {
        //分组标题6
        text: 'Telegram',
        items: [
          { text: 'TG', link: '/telegram/tg' },
          { text: '机器人 ', link: '/telegram/tgbot' },
          { text: '表情包', link: '/telegram/sticker' },
        ],
      },
      {
        //分组标题7
        text: '网站相关',
        items: [
          { text: '基础', 
            collapsed: true,
            items: [
              { text: '服务器', 
                collapsed: true,
                items: [
                  { text: '使用介绍(必读)', link: '/website/Server/' },
                  { text: '虚拟机', link: '/website/VMware' },
                  { text: '腾讯云', link: '/website/Server/tencent' },
                  { text: 'Serv00', link: '/website/Server/Serv00' },
                  { text: 'wordpress', link: '/website/Server/wordpress' },
                  { text: 'Hax', link: '/website/Server/hax' },

                ],
              },
              { text: '域名', 
                collapsed: true,
                items: [
                  { text: '使用介绍(必读)', link: '/website/domain/' },
                  { text: '腾讯云', link: '/website/domain/tencent' },
                  { text: 'eu.org', link: '/website/domain/eu' },
                  { text: 'US.KG', link: '/website/domain/uskg' },
                  { text: 'ClouDNS', link: '/website/domain/cloudns' },
                  { text: 'L53', link: '/website/domain/l53' },
                  { text: 'com.mp', link: '/website/domain/commp' },
                  { text: 'DNSExit', link: '/website/domain/dnsexit' },
                ],
              },
              { text: 'Shell', 
                collapsed: true,
                items: [
                  { text: '使用介绍(必读)', link: '/website/shell/' },
                  { text: 'Xshell', link: '/website/shell/Xshell' },
                  { text: 'Termius', link: '/website/shell/Termius' },
                  { text: 'JuiceSSH', link: '/website/shell/JuiceSSH' },
                ],
              },
              { text: '宝塔面板', link: '/website/BT' },
              { text: '环境', 
                collapsed: true,
                items: [
                  { text: 'node.js', link: '/website/nodejs' },
                  { text: 'Go', link: '/website/go' },
                ],
              }, 
              { text: 'SSL证书', 
                collapsed: true,
                items: [
                  { text: '使用介绍(必读)', link: '/website/ssl/' },
                  { text: '宝塔面板', link: '/website/ssl/bt' },
                  { text: 'httpsok', link: 'https://httpsok.com/doc/guide/apply.html' },
                  { text: 'acme.sh', link: '/website/ssl/acmesh' },
                  { text: 'ZeroSSL', link: '/website/ssl/zerossl' },
                  { text: '来此加密', link: '/website/ssl/laici' },
                  { text: '腾讯云', link: '/website/ssl/tencent' },
                ],
              },
            ],
          },

          { text: 'WP相关', 
            collapsed: true,
            items: [
              { text: 'wordpress', link: '/website/wordpress' },
              { text: 'Webstack', link: '/website/WebStack' },
              { text: 'Onenav', link: '/website/onenav' },
            ],
          },

          { text: 'Docker', 
            collapsed: true,
            items: [
              { text: '使用介绍(必读)', link: '/website/docker' },
               { text: 'Halo', link: '/website/Halo' },
               { text: 'Alist', link: '/website/Alist' },
               { text: '青龙面板', link: '/website/qinglong' },
              { text: 'Dockerhub', link: '/website/dockerhub' },
             ],
          },

          { text: '静态托管', 
            collapsed: true,
            items: [
              { text: '使用介绍(必读)', link: '/website/pages/' },
              { text: 'Github', link: '/website/pages/github' },
              { text: 'Vercel', link: '/website/pages/vercel' },
              { text: 'GitLab', link: '/website/pages/gitlab' }, 
              { text: 'Git', link: '/website/pages/git' },
            ],
          },

          

          { text: '拓展工具', 
            collapsed: true,
            items: [
              { text: 'VSCode', link: '/website/VSCode' },
              { text: '个人主页搭建', link: '/website/home' },
              { text: 'Cloudflare', link: '/website/cloudflare' },
              { text: 'UptimeRobot ', link: '/website/uptimerobot' },
              { text: 'Replit', link: '/website/Replit' },
              { text: 'Favicon', link: '/website/Favicon' },
              { text: '记仇小本本', link: '/website/heng' },
            ],
          },

          { text: '其他', 
            collapsed: true,
            items: [
              { text: '浅谈内网穿透', link: '/website/NAT' },
              { text: '闲置苹果托管网站', link: '/website/ish' },
              { text: 'Centos切换图形界面', link: '/website/Centos' },
            ],
          },

        ],
      },
      {
        //分组标题8
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
      copyright: 'Copyright © 2023-2024 <a href="https://github.com/Yiov" target="_blank">Yiov</a>',
    },


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
