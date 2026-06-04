/**
 * 滚动渐显动画
 * - Hero / Feature：加载后直接渐显
 * - 下方内容：往下滚渐显，往上滚消失
 */

let observer: IntersectionObserver | null = null
let lastY = 0

function goingDown(): boolean {
  const y = window.scrollY
  const down = y >= lastY
  lastY = y
  return down
}

export function setupScrollReveal() {
  if (typeof window === 'undefined') return

  // --- Hero 和 Feature 卡片：加载后直接播放动画 ---
  const hero = document.querySelector('.VPHero')
  if (hero) hero.classList.add('sr-hero-in')

  document.querySelectorAll('.VPFeature').forEach((el, i) => {
    if (!el.classList.contains('sr-feature-in')) {
      el.classList.add('sr-feature-in')
      ;(el as HTMLElement).style.animationDelay = `${i * 120 + 300}ms`
    }
  })

  // --- 清理旧 observer ---
  if (observer) observer.disconnect()
  lastY = window.scrollY

  // --- 更新滚动方向（全局变量，observer 回调里读取） ---
  let direction: 'down' | 'up' = 'down'
  const onScroll = () => { direction = goingDown() ? 'down' : 'up' }
  window.removeEventListener('scroll', onScroll)
  window.addEventListener('scroll', onScroll, { passive: true })

  // --- 创建 observer ---
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement
        if (direction === 'down' && entry.isIntersecting) {
          el.classList.add('sr-show')
        } else if (direction === 'up' && !entry.isIntersecting) {
          el.classList.remove('sr-show')
        }
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  // --- 绑定 sr-target 元素（带重试） ---
  bind(0)
}

function bind(retry: number) {
  const targets = document.querySelectorAll('.sr-target')
  if (targets.length === 0 && retry < 25) {
    setTimeout(() => bind(retry + 1), 200)
    return
  }
  targets.forEach((el, i) => {
    ;(el as HTMLElement).style.transitionDelay = `${i * 80}ms`
    observer!.observe(el)
  })
}
