import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/Private-Diary/',
  lang: 'zh-CN',
  title: 'AI 学习日记',
  description: '1erryLi 的 AI 学习与实践记录',

  // 强制深色模式
  appearance: 'dark',

  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
    ['link', { rel: 'icon', href: '/Private-Diary/favicon.ico' }],
  ],

  themeConfig: {
    logo: '/Private-Diary/logo.svg',
    siteTitle: 'AI Diary',

    // 禁用暗色/亮色切换按钮
    darkModeSwitchLabel: '',

    nav: [
      { text: '首页', link: '/' },
      { text: '学习日记', link: '/diary/' },
      {
        text: '项目',
        items: [
          { text: 'GitHub 主页', link: 'https://github.com/1erryLi' },
          { text: '本仓库', link: 'https://github.com/1erryLi/Private-Diary' },
        ]
      },
    ],

    sidebar: {
      '/diary/': [
        {
          text: '2026',
          collapsed: false,
          items: [
            { text: '6月 · 首页改版', link: '/diary/2026/06-04-homepage-redesign' },
          ]
        },
        {
          text: '2025',
          collapsed: false,
          items: [
            { text: '6月 · 起步', link: '/diary/' },
            { text: '06-02 配置 Hermes 桌面版', link: '/diary/2025/06-02-hermes' },
            { text: '06-04 配置 Claude Code', link: '/diary/2025/06-04-claude-code' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/1erryLi/Private-Diary' },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索日记', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除搜索',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    outline: {
      label: '页面导航',
      level: [2, 3],
    },

    lastUpdated: {
      text: '最后更新于',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },
})
