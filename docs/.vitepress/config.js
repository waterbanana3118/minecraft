export default {
  title: "Minecraft 指令小百科",
  description: "使用 VitePress 製作的元件與 Minecraft 指令教學站",
  base: "/minecraft/",

  themeConfig: {
    nav: [
      { text: "首頁", link: "/" },
      { text: "滑動條", link: "/slider" }
    ],
    sidebar: [
      {
        text: "前言",
        items: [
          { text: "網站簡介", link: "/" }
        ]
      },
      {
        text: "元件",
        items: [
          { text: "固軸的滑動條", link: "/slider" }
        ]
      },
      {
        text: "Minecraft",
        items: [
          { text: "常用指令", link: "/" }
        ]
      }
    ],
    outline: [2, 3],
    outlineTitle: "頁面導覽", // ✅ ← 這就是加的地方
    socialLinks: [
      { icon: "github", link: "https://github.com/waterbanana3118/minecraft" }
    ]
  }
}
