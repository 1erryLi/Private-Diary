---
title: 停车场自动布局工具
date: 2026-06-09
tags: [Electron, Canvas, 停车场, 桌面应用, 算法]
description: 做了一个 TestFit Clone —— 自动停车场配置工具，用 Electron 打包成 Windows 桌面应用
---

# 停车场自动布局工具

<div class="diary-meta">
  <span>📅 2026-06-09</span>
  <span>🏷️ 全栈</span>
  <span>⏱️ 状态：✅ 已完成</span>
</div>

## 背景

TestFit 是国外一款很贵的停车场自动排布软件，用来帮建筑师快速算出一块地能停多少车。想自己做一个免费的中文版，功能要接近原版，还能打包成桌面应用发给没有开发环境的人直接用。

## 做了什么

### 核心引擎

纯 JavaScript 写了一个几何排布引擎（solver.js），能自动把车位排进任意形状的地块里：
- 支持 90° / 60° / 45° 停车角度
- 双排停车模块自动排列，车道自动生成
- 建筑、障碍物会自动避开
- 支持标准车位、小型车位、无障碍车位、充电桩车位混排

### 地图集成

用 Leaflet 接了免费的卫星/街道地图（Esri + 高德），不需要 API Key：
- 可以在地图上直接描出地块边界
- 自动读取真实尺寸
- 支持国内直连的高德地图

### 建案模式

除了停车场，还能做建筑可行性分析：
- 自动算退缩线、建筑量体
- 容积率、覆盖率、楼层高度合规检查
- 户型配比、财务测算
- 合规评分卡（PASS/FAIL）

### 多地区法规

内置了中国、美国、台湾、日本、欧洲的参考预设，包括车位尺寸、车道宽度、退缩距离等参数，都可以手动调整。

### 桌面打包

用 Electron + electron-builder 打包成 Windows 安装包：
- `main.js` 创建 BrowserWindow 加载 index.html
- package.json 配置 build 字段（appId, nsis 安装器）
- 用国内镜像下载 Electron（npmmirror.com）
- 最终产出：安装包 + win-unpacked 免安装版

## 技术方案

- 前端：纯 HTML/CSS/JS，无框架
- 地图：Leaflet + Esri/高德瓦片
- 几何引擎：自研 solver.js（Sutherland–Hodgman 裁剪算法）
- 打包：Electron 35 + electron-builder 26
- 导出：PNG、CSV、DXF（CAD）、JSON

## 踩坑记录

1. **Electron 下载慢**：默认源在国内被墙，要设 `ELECTRON_MIRROR` 环境变量走 npmmirror 镜像
2. **Canvas 高 DPI 适配**：要根据 `devicePixelRatio` 放大 canvas 尺寸再缩放 CSS，否则在高分屏上模糊
3. **Leaflet 和 Canvas 叠加**：地图层和绘图层用 z-index 分层，地图模式下隐藏 canvas，3D 模式下隐藏地图

## 总结

从零开始做了一个接近 TestFit 核心功能的停车场自动排布工具，打包成了 Windows 桌面应用。整个过程对 Canvas 绘图、几何算法、Electron 打包都有了更深的理解。

---

*[上一篇：首页改版与滚动动画 ←](/diary/2026/06-04-homepage-redesign)*
