<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  delay: { type: Number, default: 0 },
  direction: { type: String, default: 'up' } // up, down, left, right
})

const el = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 加一点延迟，让多个元素有交错感
          setTimeout(() => {
            isVisible.value = true
          }, props.delay)
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    }
  )
  if (el.value) observer.observe(el.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div
    ref="el"
    class="scroll-fade-in"
    :class="[
      `direction-${direction}`,
      { 'is-visible': isVisible }
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
.scroll-fade-in {
  opacity: 0;
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

/* 从下方滑入（默认） */
.scroll-fade-in.direction-up {
  transform: translateY(40px);
}
.scroll-fade-in.direction-up.is-visible {
  transform: translateY(0);
}

/* 从上方滑入 */
.scroll-fade-in.direction-down {
  transform: translateY(-40px);
}
.scroll-fade-in.direction-down.is-visible {
  transform: translateY(0);
}

/* 从左滑入 */
.scroll-fade-in.direction-left {
  transform: translateX(-40px);
}
.scroll-fade-in.direction-left.is-visible {
  transform: translateX(0);
}

/* 从右滑入 */
.scroll-fade-in.direction-right {
  transform: translateX(40px);
}
.scroll-fade-in.direction-right.is-visible {
  transform: translateX(0);
}

.scroll-fade-in.is-visible {
  opacity: 1;
}
</style>
