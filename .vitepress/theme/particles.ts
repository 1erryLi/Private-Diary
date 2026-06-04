/**
 * 鼠标跟随粒子 - 平缓持续版
 * - 淡绿色微粒，缓慢漂浮
 * - 带轻微拖尾，不晃眼
 */
export function initParticles() {
  if (typeof window === 'undefined') return

  const canvas = document.createElement('canvas')
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9998;'
  document.body.appendChild(canvas)

  const ctx = canvas.getContext('2d')!
  let w = 0, h = 0
  let mx = -999, my = -999
  const particles: P[] = []
  const MAX = 25

  function resize() {
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  class P {
    x: number; y: number
    vx: number; vy: number
    life: number; size: number
    hue: number

    constructor(x: number, y: number) {
      const a = Math.random() * Math.PI * 2
      const s = Math.random() * 0.4 + 0.15
      this.x = x + (Math.random() - 0.5) * 40
      this.y = y + (Math.random() - 0.5) * 40
      this.vx = Math.cos(a) * s
      this.vy = Math.sin(a) * s - 0.08
      this.life = 1
      this.size = Math.random() * 2.5 + 1
      this.hue = Math.random() * 30 + 140 // 淡绿色系
    }

    update() {
      this.x += this.vx
      this.y += this.vy
      this.vy -= 0.003 // 轻微上浮
      this.life -= 0.006
      this.size *= 0.998
    }

    draw() {
      if (this.life <= 0) return
      const a = this.life * 0.4
      // 光点
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${this.hue}, 60%, 65%, ${a})`
      ctx.fill()
      // 柔和光晕
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${this.hue}, 60%, 65%, ${a * 0.08})`
      ctx.fill()
    }
  }

  window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY }, { passive: true })
  window.addEventListener('touchmove', (e) => {
    if (e.touches.length) { mx = e.touches[0].clientX; my = e.touches[0].clientY }
  }, { passive: true })
  window.addEventListener('touchend', () => { mx = -999; my = -999 })

  let tick = 0
  function loop() {
    ctx.clearRect(0, 0, w, h)
    tick++

    // 每 4 帧生成 1 个粒子，缓慢持续
    if (mx > 0 && tick % 4 === 0 && particles.length < MAX) {
      particles.push(new P(mx, my))
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update()
      particles[i].draw()
      if (particles[i].life <= 0) particles.splice(i, 1)
    }

    requestAnimationFrame(loop)
  }

  loop()
}
