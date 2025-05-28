import { onMounted, onUnmounted } from 'vue'

export function useParallax() {
  const handleScroll = () => {
    const scrollY = window.scrollY
    const offset = scrollY * 0.5 // Скорость параллакса
    document.documentElement.style.setProperty('--scroll-offset', `${offset}px`)
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
} 