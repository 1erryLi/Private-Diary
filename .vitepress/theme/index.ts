import DefaultTheme from 'vitepress/theme'
import './style/custom.css'
import { setupScrollReveal } from './scrollReveal'
import { initParticles } from './particles'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    let particlesInited = false

    onMounted(() => {
      nextTick(() => {
        setupScrollReveal()
        if (!particlesInited) {
          initParticles()
          particlesInited = true
        }
      })
    })

    watch(
      () => route.path,
      () => {
        nextTick(() => {
          setTimeout(setupScrollReveal, 150)
        })
      }
    )
  }
}
