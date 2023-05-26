export const nav = [                  //右上角的导航栏
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
  { text: "vitepress", link: "/pages/blog/index", target: '_self', rel: 'sponsored' },
]