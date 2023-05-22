/*
 * @Author: dylan dylan@webpowerchina.com
 * @Date: 2023-05-22 14:11:13
 * @LastEditors: dylan dylan@webpowerchina.com
 * @LastEditTime: 2023-05-22 16:51:34
 * @FilePath: \Tarsiar.github.io\docs\.vitepress\theme\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { h, App } from 'vue'
import { useData } from 'vitepress'
import Theme from 'vitepress/theme'

export default Object.assign({}, Theme, {
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()
    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(Theme.Layout, props)
  }
})