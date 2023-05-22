/*
 * @Author: dylan dylan@webpowerchina.com
 * @Date: 2023-05-17 21:10:31
 * @LastEditors: dylan dylan@webpowerchina.com
 * @LastEditTime: 2023-05-18 23:11:53
 * @FilePath: \新建文件夹\docs\.vitepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: "mc 小唐",
  description: "知心",
  themeConfig: {
    siteTitle: "mc 小唐",
    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
    ],
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
      { text: "项目", link: "/intent/" },
    ],

    sidebar: [
      {
        text: '左侧sidebar',
        items: [
          { text: '第一个', link: '/markdown-examples' }, //第一个
          { text: '第二个', link: '/api-examples' } //第二个
        ]
      },

    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
