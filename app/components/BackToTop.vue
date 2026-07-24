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
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 translate-y-4 scale-75"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-4 scale-75"
  >
    <button
      v-if="show"
      class="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center bg-neo-purple border-3 border-neo-white text-neo-black hover:translate-y--1 hover:translate-x--1 transition-all duration-150 hover:shadow-[4px_4px_0px_0px_#ef4444] font-bold"
      style="box-shadow: 4px 4px 0px 0px #ffffff"
      aria-label="Voltar ao topo"
      @click="scrollToTop"
    >
      <Icon name="heroicons:chevron-up" class="w-5 h-5" />
    </button>
  </Transition>
</template>
