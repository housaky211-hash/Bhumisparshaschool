<script setup lang="ts">
import gsap from 'gsap'

const container = ref<HTMLDivElement | null>(null)
const particles = ref<{ id: number; x: number; y: number; size: number; color: string; opacity: number; vx: number; vy: number }[]>([])

if (import.meta.client) {
  onMounted(() => {
    const colors = ['#9b59ff', '#ff2244', '#00e676', '#f5c542']
    particles.value = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.3 + 0.1,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
    }))

    if (!container.value) return

    const children = container.value.children
    for (let i = 0; i < children.length; i++) {
      gsap.to(children[i] as HTMLElement, {
        x: `+=${(Math.random() - 0.5) * 100}`,
        y: `+=${(Math.random() - 0.5) * 100}`,
        duration: Math.random() * 20 + 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 5,
      })

      gsap.to(children[i] as HTMLElement, {
        opacity: Math.random() * 0.25 + 0.05,
        duration: Math.random() * 4 + 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 3,
      })
    }
  })
}
</script>

<template>
  <div ref="container" class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div
      v-for="p in particles"
      :key="p.id"
      class="absolute rounded-full"
      :style="{
        left: p.x + '%',
        top: p.y + '%',
        width: p.size + 'px',
        height: p.size + 'px',
        backgroundColor: p.color,
        boxShadow: `0 0 ${p.size * 6}px ${p.color}`,
        opacity: p.opacity,
      }"
    />
  </div>
</template>
