/**
 * 鼠标跟随粒子特效
 * - 鼠标周围一圈粒子
 * - 带拖尾效果
 * - 移动端触摸支持
 */
export function initParticles() {
  if (typeof window === 'undefined') return

  const canvas = document.createElement('canvas')
  canvas.id = 'particle-canvas'
  canvas.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 9998;
  `
  document.body.appendChild(canvas)

  const ctx = canvas.getContext('2d')!
  let w = 0, h = 0
  let mouse = { x: -999, y: -999 }
  let particles: Particle[] = []
  const MAX = 35

  function resize() {
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  class Particle {
    x: number
    y: number
    vx: number
    vy: number
    life: number
    maxLife: number
    size: number
    hue: number

    constructor(x: number, y: number) {
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 1.5 + 0.5
      this.x = x + (Math.random() - 0.5) * 30
      this.y = y + (Math.random() - 0.5) * 30
      this.vx = Math.cos(angle) * speed
      this.vy = Math.sin(angle) * speed - 0.3
      this.life = 1
      this.maxLife = Math.random() * 0.6 + 0.4
      this.size = Math.random() * 3 + 1.5
      this.hue = Math.random() * 40 + 260 // 紫色范围
    }

    update() {
      this.x += this.vx
      this.y += this.vy
      this.vy += 0.01 // 微重力
      this.life -= 0.012
      this.size *= 0.995
    }

    draw() {
      if (this.life <= 0) return
      const alpha = Math.min(this.life / this.maxLife, 1) * 0.7
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${alpha})`
      ctx.fill()

      // 发光效果
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${alpha * 0.15})`
      ctx.fill()
    }
  }

  // 鼠标移动
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }, { passive: true })

  // 触摸支持
  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX
      mouse.y = e.touches[0].clientY
    }
  }, { passive: true })

  window.addEventListener('touchend', () => {
    mouse.x = -999
    mouse.y = -999
  })

  let frame = 0

  function loop() {
    ctx.clearRect(0, 0, w, h)
    frame++

    // 每帧生成新粒子
    if (mouse.x > 0 && frame % 2 === 0) {
      for (let i = 0; i < 2; i++) {
        if (particles.length < MAX) {
          particles.push(new Particle(mouse.x, mouse.y))
        }
      }
    }

    // 更新 & 绘制
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]
      p.update()
      p.draw()
      if (p.life <= 0) {
        particles.splice(i, 1)
      }
    }

    requestAnimationFrame(loop)
  }

  loop()
}
