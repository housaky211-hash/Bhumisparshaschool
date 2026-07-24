import { ref, onMounted, onUnmounted } from 'vue'

export function useMouseParallax(strength = 0.02) {
  const mouseX = ref(0.5)
  const mouseY = ref(0.5)
  const targetX = ref(0.5)
  const targetY = ref(0.5)
  let rafId: number | null = null
  let running = false

  function animate() {
    mouseX.value += (targetX.value - mouseX.value) * 0.08
    mouseY.value += (targetY.value - mouseY.value) * 0.08
    if (running) rafId = requestAnimationFrame(animate)
  }

  function onMouseMove(e: MouseEvent) {
    targetX.value = e.clientX / window.innerWidth
    targetY.value = e.clientY / window.innerHeight
  }

  function getOffset(factor = 1) {
    return {
      x: (mouseX.value - 0.5) * strength * factor * 100,
      y: (mouseY.value - 0.5) * strength * factor * 100,
    }
  }

  onMounted(() => {
    running = true
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    animate()
  })

  onUnmounted(() => {
    running = false
    if (rafId !== null) cancelAnimationFrame(rafId)
    window.removeEventListener('mousemove', onMouseMove)
  })

  return { mouseX, mouseY, getOffset }
}
