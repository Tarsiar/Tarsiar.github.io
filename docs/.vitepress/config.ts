/*
 * @Author: dylan dylan@webpowerchina.com
 * @Date: 2023-05-22 11:19:22
 * @LastEditors: dylan dylan@webpowerchina.com
 * @LastEditTime: 2023-05-22 13:55:50
 * @FilePath: \Tarsiar.github.io\.vitepress\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// https://vitepress.dev/reference/default-theme-config
export default defineConfig({
  base: '',
  title: "mc 小唐",
  description: "知心",
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: "mc 小唐",
    search: {
      provider: 'algolia',
      options: {
        appId: '...',
        apiKey: '...',
        indexName: '...'
      }
    },

    nav: [                  //右上角的导航栏
      {
        text: "前端",             //导航标签的名字
        items: [                  //这种格式是有下拉菜单的版本
          { text: "基础", link: "/articles/basic/index", },      //text代表每一项的名字，link是连接的位置
          { text: "Vue", link: "/articles/vue/index" },
          { text: "React", link: "/articles/react/index" },
          { text: "小程序", link: "/articles/mini/index" },
          { text: "Electron", link: "/articles/electron/index" },
          { text: "Web3D", link: "/articles/web3d/index" },
          { text: "其他", link: "/articles/other/vitepress/index" },
        ],
      },
      { text: "项目", link: "/intent", target: '_self', rel: 'sponsored' },
    ],

    sidebar: [
      {
        text: '左侧sidebar1',
        items: [
          { text: '第一个', link: '/markdown-examples' }, //第一个
          { text: '第二个', link: '/api-examples' } //第二个
        ]
      },
      {
        text: '左侧sidebar2',
        items: [
          { text: '第一个', link: '/markdown-examples' }, //第一个
          { text: '第二个', link: '/api-examples' } //第二个
        ]
      },

    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
    },
  }
})
