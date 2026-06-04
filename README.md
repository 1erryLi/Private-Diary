# AI Learning Diary

> 1erryLi AI learning and practice journal powered by VitePress

Website: https://1erryli.github.io/Private-Diary/

## About

This repository records my AI learning journey:

- Environment Setup
- Projects
- Knowledge
- Pitfalls

## Timeline

| Date | Topic | Status |
|------|-------|--------|
| 2025-06-02 | [Hermes Agent Desktop Setup](diary/2025/06-02-hermes.md) | Done |
| 2025-06-04 | [Claude Code CLI Setup](diary/2025/06-04-claude-code.md) | Done |

## Tech Stack

- VitePress
- GitHub Pages
- GitHub Actions

## Local Development

```
npm install
npm run dev
npm run build
npm run preview
```

## Add New Entry

1. Create .md file in diary/YYYY/
2. Add frontmatter (title, date, tags, description)
3. Add entry to DiaryTimeline.vue
4. Add sidebar link in config.ts
5. Push - auto deploys via GitHub Actions

## License

MIT
