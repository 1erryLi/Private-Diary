<script setup>
const entries = [
  {
    year: '2026',
    items: [
      {
        date: '06-04',
        title: '首页改版与滚动动画',
        link: '/diary/2026/06-04-homepage-redesign',
        desc: '给网站做了一次大改版：滚动渐显动画、交互式卡片、近期项目展示、深色科技风',
        tags: ['VitePress', 'CSS', '动画', '首页设计'],
      },
    ],
  },
  {
    year: '2025',
    items: [
      {
        date: '06-04',
        title: '配置 Claude Code',
        link: '/diary/2025/06-04-claude-code',
        desc: '完成 Claude Code CLI 的安装与配置，实现命令行 AI 编程助手',
        tags: ['Claude Code', 'CLI', '配置'],
      },
      {
        date: '06-02',
        title: '配置 Hermes 桌面版',
        link: '/diary/2025/06-02-hermes',
        desc: '完成 Hermes Agent 桌面版的安装与基础配置',
        tags: ['Hermes', '桌面版', '配置'],
      },
    ],
  },
]
</script>

<template>
  <div class="diary-timeline">
    <div v-for="yearGroup in entries" :key="yearGroup.year" class="diary-year">
      <h2>▌{{ yearGroup.year }}</h2>
      <div
        v-for="item in yearGroup.items"
        :key="item.date + item.title"
        class="diary-entry"
      >
        <span class="diary-date">{{ item.date }}</span>
        <div class="diary-info">
          <h3><a :href="item.link">{{ item.title }}</a></h3>
          <p class="desc">{{ item.desc }}</p>
          <div class="diary-tags">
            <span v-for="tag in item.tags" :key="tag" class="diary-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
