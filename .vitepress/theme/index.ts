import DefaultTheme from 'vitepress/theme'
import './style/custom.css'
import { setupScrollReveal } from './scrollReveal'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()

    onMounted(() => {
      nextTick(() => {
        setupScrollReveal()
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
