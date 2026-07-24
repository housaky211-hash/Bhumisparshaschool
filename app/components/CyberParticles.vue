<script setup lang="ts">
import gsap from 'gsap'

const container = ref<HTMLDivElement | null>(null)
const particles = ref<{ id: number; x: number; y: number; size: number; color: string; opacity: number }[]>([])

if (import.meta.client) {
  onMounted(() => {
    const colors = ['#a855f7', '#ef4444', '#22c55e', '#facc15', '#ec4899']
    particles.value = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 4 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.2,
    }))

    if (!container.value) return

    const children = container.value.children
    for (let i = 0; i < children.length; i++) {
      gsap.to(children[i] as HTMLElement, {
        x: `+=${(Math.random() - 0.5) * 150}`,
        y: `+=${(Math.random() - 0.5) * 150}`,
        rotation: Math.random() * 360,
        duration: Math.random() * 15 + 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 5,
      })
    }
  })
}
</script>

<template>
  <div ref="container" class="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
    <div
      v-for="p in particles"
      :key="p.id"
      class="absolute"
      :style="{
        left: p.x + '%',
        top: p.y + '%',
        width: p.size + 'px',
        height: p.size + 'px',
        backgroundColor: p.color,
        opacity: p.opacity,
        transform: `rotate(45deg)`,
      }"
    />
  </div>
</template>
