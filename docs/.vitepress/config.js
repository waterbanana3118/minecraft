export default {
  title: "Minecraft 指令小百科",
  description: "使用 VitePress 製作的元件與 Minecraft 指令教學站",
  base: "/minecraft/",

  themeConfig: {
    nav: [
      { text: "首頁", link: "/" }
      // ❌ 已移除滑動條項目
    ],
    sidebar: [
      {
        text: "📚 指令",
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
