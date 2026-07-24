<script setup lang="ts">
const show = ref(false)

const handleScroll = () => {
  show.value = window.scrollY > 400
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-3 scale-90"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-3 scale-90"
  >
    <button
      v-if="show"
      class="fixed bottom-8 right-8 z-50 w-11 h-11 flex items-center justify-center bg-amoled-panel/90 border border-lux-purple/20 hover:border-lux-purple/50 text-amoled-dim/50 hover:text-lux-purple transition-all duration-300 rounded-full backdrop-blur-xl hover:shadow-[0_0_25px_rgba(155,89,255,0.2)]"
      aria-label="Voltar ao topo"
      @click="scrollToTop"
    >
      <Icon name="heroicons:chevron-up" class="w-4 h-4" />
    </button>
  </Transition>
</template>
