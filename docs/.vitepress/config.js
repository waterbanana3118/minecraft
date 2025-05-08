export default {
  title: "waterbanana3118 Components",
  description: "使用 VitePress 製作的 UI 文件網站",
  base: "/minecraft/",

  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '滑動條', link: '/slider' }
    ],
    sidebar: [
      {
        text: '元件',
        items: [
          { text: '固軸的滑動條', link: '/slider' }
        ]
      }
    ],
    outline: [2, 3],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/waterbanana3118/minecraft' }
    ]
  }
}
