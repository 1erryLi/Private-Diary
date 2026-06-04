---
layout: home

hero:
  name: "AI 学习日记"
  text: "1erryLi 的实践记录"
  tagline: 从零开始，记录每一步配置、每一个项目、每一次突破
  actions:
    - theme: brand
      text: 开始阅读 →
      link: /diary/
    - theme: alt
      text: GitHub
      link: https://github.com/1erryLi/Private-Diary

features:
  - title: 📖 学习日记
    details: 按时间线记录每天的 AI 学习进展，包括环境配置、工具使用、踩坑经验
    link: /diary/
  - title: 🚀 项目记录
    details: 记录完成的 AI 项目，附上代码仓库链接和技术方案
    link: /diary/
  - title: 🔧 工具配置
    details: 整理各类 AI 工具的配置方法，方便日后回顾和分享
    link: /diary/
  - title: 📚 知识积累
    details: 收藏的教程、论文、资源，构建个人 AI 知识体系
    link: /diary/
---

<!-- 名言轮播 -->
<div class="home-quote sr-target">
  <p id="quoteText">"每一个 bug 都是一次学习的机会。"</p>
</div>
<script>
(function() {
  var quotes = [
    "每一个 bug 都是一次学习的机会，每一次配置都是对未来效率的投资。",
    "工具是手的延伸，AI 是思维的延伸。",
    "不要害怕从零开始，每一次归零都是一次升级。",
    "最好的学习方式是边做边记录，回头看才知道走了多远。",
    "配置环境虽然枯燥，但它是所有创造力的地基。",
    "代码会过时，但解决问题的思路永远有用。",
    "今天的折腾，是明天的从容。",
    "写文档不是浪费时间，是给未来的自己省时间。",
    "AI 不会取代你，但会用 AI 的人会。",
    "学习最快的方式：用起来，踩坑了，记下来。"
  ];
  var i = 0;
  var el = document.getElementById('quoteText');
  if (!el) return;
  setInterval(function() {
    el.style.opacity = '0';
    setTimeout(function() {
      i = (i + 1) % quotes.length;
      el.textContent = quotes[i];
      el.style.opacity = '1';
    }, 600);
  }, 5000);
})();
</script>

<!-- 近期项目 -->
<div class="home-projects">
  <div class="section-header sr-target">
    <h2>近期项目</h2>
    <p>最近完成的学习与实践</p>
  </div>

  <div class="project-grid">
    <a href="/Private-Diary/diary/2026/06-04-homepage-redesign" class="project-card sr-target">
      <div class="project-icon">🎨</div>
      <div class="project-body">
        <div class="project-meta">
          <span class="project-date">2026-06-04</span>
          <span class="project-status">已完成</span>
        </div>
        <h3>首页改版与滚动动画</h3>
        <p>给网站做了一次大改版，加了滚动渐显动画、交互式卡片、近期项目展示，做成深色科技风</p>
        <div class="project-tags">
          <span>VitePress</span>
          <span>CSS</span>
          <span>动画</span>
        </div>
      </div>
      <div class="project-arrow">→</div>
    </a>
    <a href="/Private-Diary/diary/2025/06-04-claude-code" class="project-card sr-target">
      <div class="project-icon">🤖</div>
      <div class="project-body">
        <div class="project-meta">
          <span class="project-date">2025-06-04</span>
          <span class="project-status">已完成</span>
        </div>
        <h3>配置 Claude Code</h3>
        <p>把 Claude 装到了命令行里，现在终端直接跟 AI 对话写代码，不用再切浏览器了</p>
        <div class="project-tags">
          <span>Claude Code</span>
          <span>CLI</span>
          <span>AI 编程</span>
        </div>
      </div>
      <div class="project-arrow">→</div>
    </a>
    <a href="/Private-Diary/diary/2025/06-02-hermes" class="project-card sr-target">
      <div class="project-icon">⚡</div>
      <div class="project-body">
        <div class="project-meta">
          <span class="project-date">2025-06-02</span>
          <span class="project-status">已完成</span>
        </div>
        <h3>配置 Hermes 桌面版</h3>
        <p>装好了 Hermes Agent 桌面版，能用好几个 AI 后端，还能调工具、跑 MCP 协议</p>
        <div class="project-tags">
          <span>Hermes</span>
          <span>桌面版</span>
          <span>AI Agent</span>
        </div>
      </div>
      <div class="project-arrow">→</div>
    </a>
  </div>

  <div class="project-more sr-target">
    <a href="/Private-Diary/diary/" class="project-more-link">
      查看全部日记 →
    </a>
  </div>
</div>

<!-- 底部统计 -->
<div class="home-stats sr-target">
  <div class="stat-item">
    <span class="stat-num">3</span>
    <span class="stat-label">完成项目</span>
  </div>
  <div class="stat-divider"></div>
  <div class="stat-item">
    <span class="stat-num">2</span>
    <span class="stat-label">工具配置</span>
  </div>
  <div class="stat-divider"></div>
  <div class="stat-item">
    <span class="stat-num">4</span>
    <span class="stat-label">学习天数</span>
  </div>
</div>
