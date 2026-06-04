/**
 * 滚动渐显动画
 * - Hero / Feature 卡片：页面加载后直接渐显
 * - 下方内容：往下滚渐显，往上滚消失，可反复触发
 */

let lastScrollY = 0
let observer: IntersectionObserver | null = null

function isScrollingDown(): boolean {
  const y = window.scrollY
  const down = y >= lastScrollY
  lastScrollY = y
  return down
}

export function setupScrollReveal() {
  if (typeof window === 'undefined') return

  // ===== 1. Hero 和 Feature 卡片：加载后直接渐显 =====
  const hero = document.querySelector('.VPHero')
  if (hero && !hero.classList.contains('sr-hero-in')) {
    hero.classList.add('sr-hero-in')
  }

  const features = document.querySelectorAll('.VPFeature')
  features.forEach((feature, index) => {
    if (!feature.classList.contains('sr-feature-in')) {
      feature.classList.add('sr-feature-in')
      ;(feature as HTMLElement).style.animationDelay = `${index * 120 + 300}ms`
    }
  })

  // ===== 2. 下方区域：双向滚动触发 =====
  // 清理旧 observer
  if (observer) observer.disconnect()

  lastScrollY = window.scrollY

  window.removeEventListener('scroll', onScroll)
  window.addEventListener('scroll', onScroll, { passive: true })

  observer = new IntersectionObserver(
    (entries) => {
      const goingDown = isScrollingDown()
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement
        if (goingDown && entry.isIntersecting) {
          el.classList.add('sr-show')
        } else if (!goingDown && !entry.isIntersecting) {
          el.classList.remove('sr-show')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  // 找 sr-target 元素，找不到就重试
  bindTargets(0)
}

function onScroll() {
  const y = window.scrollY
  lastScrollY = y
}

function bindTargets(retryCount: number) {
  const targets = document.querySelectorAll('.sr-target')

  if (targets.length === 0 && retryCount < 20) {
    // DOM 还没渲染好，200ms 后重试
    setTimeout(() => bindTargets(retryCount + 1), 200)
    return
  }

  if (targets.length === 0) return

  targets.forEach((el, index) => {
    ;(el as HTMLElement).style.transitionDelay = `${index * 80}ms`
    observer!.observe(el)
  })
}
