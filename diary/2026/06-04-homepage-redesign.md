---
title: 首页改版与滚动动画
date: 2026-06-04
tags: [VitePress, CSS, 动画, 首页设计]
description: 给学习日记网站做了一次大改版，加了滚动渐显动画、交互式卡片、近期项目展示
---

# 首页改版与滚动动画

<div class="diary-meta">
  <span>📅 2026-06-04</span>
  <span>🏷️ 前端</span>
  <span>⏱️ 状态：✅ 已完成</span>
</div>

## 背景

原来的首页比较简单，卡片点不动，也没有动效。想做成有高级感的深色科技风，滚动时内容能渐显出现。

## 做了什么

### 滚动渐显动画

用 IntersectionObserver 做了双向滚动动画：
- 往下滚 → 内容从下方滑入渐显
- 往上滚 → 内容反向滑出消失
- 可以反复触发，不是一次性的

踩了个坑：一开始把滚动方向检测的函数写在了 observer 回调里，导致每次触发都在重建 observer，动画永远触发不了。后来改成用一个 `direction` 变量，scroll handler 更新它，observer 回调只读取。

### 首页 Feature 卡片

原来卡片不能点，现在加了跳转链接。做了 hover 效果：上移 + 蓝色光晕 + 顶部渐变光线。

### 近期项目展示

在首页下方加了近期项目区域，用大白话描述做了什么项目，不用代码风格。每张卡片有图标、日期、状态标签、标签。

### 深色模式

锁定深色模式，用 `appearance: 'dark'` 强制生效。GitHub 按钮原来看不清，加了半透明背景和边框。

## 技术方案

- 框架：VitePress
- 动画：CSS animation + IntersectionObserver + transition
- 滚动检测：scroll 事件监听方向 + observer 判断进出视口
- 部署：push 到 main → GitHub Actions 自动构建 → GitHub Pages

## 踩坑记录

1. **VitePress Markdown 解析**：两个 HTML 块之间有空行会被当成代码块，要去掉空行
2. **IntersectionObserver 递归**：在回调里调用 setup 函数会导致无限重建 observer
3. **appearance 配置**：`false` 是浅色，`'dark'` 才是深色

## 总结

首页从一个静态页面变成了有动效、可交互的科技风主页。过程中修了好几个 bug，都是动画和 VitePress 渲染机制的问题。

---

*[上一篇：配置 Claude Code ←](/diary/2025/06-04-claude-code)*
