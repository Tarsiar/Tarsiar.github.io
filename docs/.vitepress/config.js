/*
 * @Author: dylan dylan@webpowerchina.com
 * @Date: 2023-05-17 21:10:31
 * @LastEditors: dylan dylan@webpowerchina.com
 * @LastEditTime: 2023-05-17 21:40:05
 * @FilePath: \新建文件夹\docs\.vitepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '.',
  title: "mc21212 小唐",
  description: "22222",
  themeConfig: {
    nav: [
      { text: '首页12', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples222',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
