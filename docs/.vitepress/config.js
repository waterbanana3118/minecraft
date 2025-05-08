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
          { text: "基礎設定", link: "/basics" },
          { text: "進階設定", link: "/advanced" },
          { text: "玩家操作", link: "/players" },
          { text: "效果藥水", link: "/effects" },
          { text: "生物召喚", link: "/summon" },
          { text: "附魔道具", link: "/enchantments" }
        ]
      }
    ],
    outline: [2, 3],
    outlineTitle: "目錄",
    socialLinks: [
      { icon: "github", link: "https://github.com/waterbanana3118/minecraft" }
    ]
  }
}
