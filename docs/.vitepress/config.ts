/*
 * @Author: dylan dylan@webpowerchina.com
 * @Date: 2023-05-22 11:19:22
 * @LastEditors: dylan dylan@webpowerchina.com
 * @LastEditTime: 2023-05-22 15:13:29
 * @FilePath: \Tarsiar.github.io\.vitepress\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './SideBar'
import { footer } from './footer'

// https://vitepress.dev/reference/site-config
// https://vitepress.dev/reference/default-theme-config
export default defineConfig({
  base: '',
  lang: 'zh-CH', //语言
  title: "mc 简单",
  description: "知心",
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: "简单",
    search: {
      provider: 'algolia',
      options: {
        appId: '...',
        apiKey: '...',
        indexName: '...'
      }
    },
    nav:nav,
    sidebar: sidebar,
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer:footer,
  }
})
