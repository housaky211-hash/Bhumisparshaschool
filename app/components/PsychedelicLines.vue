<script setup lang="ts">
import gsap from 'gsap'

const canvas = ref<HTMLCanvasElement | null>(null)
const lines = ref<{ x: number; y: number; angle: number; speed: number; color: string; width: number; length: number }[]>([])

const colors = ['#a855f7', '#ef4444', '#22c55e', '#facc15', '#ec4899', '#06b6d4']

if (import.meta.client) {
  onMounted(() => {
    if (!canvas.value) return
    const ctx = canvas.value.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.value!.width = window.innerWidth
      canvas.value!.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    lines.value = Array.from({ length: 12 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      angle: Math.random() * Math.PI * 2,
      speed: 0.3 + Math.random() * 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
      width: 2 + Math.random() * 4,
      length: 150 + Math.random() * 400,
    }))

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height)

      for (const line of lines.value) {
        line.x += Math.cos(line.angle) * line.speed
        line.y += Math.sin(line.angle) * line.speed
        line.angle += (Math.random() - 0.5) * 0.02

        if (line.x < -200) line.x = canvas.value!.width + 200
        if (line.x > canvas.value!.width + 200) line.x = -200
        if (line.y < -200) line.y = canvas.value!.height + 200
        if (line.y > canvas.value!.height + 200) line.y = -200

        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(
          line.x + Math.cos(line.angle) * line.length,
          line.y + Math.sin(line.angle) * line.length
        )
        ctx.strokeStyle = line.color
        ctx.globalAlpha = 0.08
        ctx.lineWidth = line.width
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(
          line.x + Math.cos(line.angle + 0.1) * line.length * 0.6,
          line.y + Math.sin(line.angle + 0.1) * line.length * 0.6
        )
        ctx.globalAlpha = 0.04
        ctx.lineWidth = line.width * 2
        ctx.stroke()
      }

      ctx.globalAlpha = 1
      animId = requestAnimationFrame(animate)
    }

    animate()

    onUnmounted(() => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    })
  })
}
</script>

<template>
  <canvas
    ref="canvas"
    class="fixed inset-0 pointer-events-none z-[1] opacity-60"
    aria-hidden="true"
  />
</template>
