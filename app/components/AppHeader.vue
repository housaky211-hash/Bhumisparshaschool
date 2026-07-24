<script setup lang="ts">
const route = useRoute()
const mobileOpen = ref(false)

watch(() => route.path, () => {
  mobileOpen.value = false
})

const navLinks = [
  { label: 'Inicio', path: '/', color: 'neo-purple' },
  { label: 'Sobre', path: '/sobre', color: 'neo-white' },
  { label: 'Dharma Play', path: '/dharmaplay', color: 'neo-purple' },
  { label: 'Cyber Manju', path: '/cybermanju', color: 'neo-red' },
  { label: 'BhumiStudio', path: '/bhumistudio', color: 'neo-purple' },
  { label: '7k Project', path: '/projetos', color: 'neo-green' },
  { label: 'Textos', path: '/textos', color: 'neo-yellow' },
  { label: 'Videos', path: '/videos', color: 'neo-red' },
  { label: 'Contato', path: '/contato', color: 'neo-cyan' },
]
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-neo-black border-b-4 border-neo-purple">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 border-3 border-neo-purple bg-neo-dark flex items-center justify-center group-hover:bg-neo-purple transition-colors duration-150 group-hover:rotate-6">
            <NuxtImg
              src="/images/logo.png"
              alt="Bhumisparsha"
              width="28"
              height="28"
              class="w-7 h-7"
              loading="eager"
            />
          </div>
          <div class="flex flex-col leading-none">
            <span class="font-orbitron text-[11px] tracking-[0.35em] text-neo-white group-hover:text-neo-purple transition-colors duration-150">
              BHUMI
            </span>
            <span class="font-rajdhani text-[9px] tracking-[0.2em] text-neo-purple uppercase font-bold">
              SPARSHA
            </span>
          </div>
        </NuxtLink>

        <nav class="hidden lg:flex items-center gap-0">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="relative px-3 py-2 font-rajdhani text-[11px] tracking-[0.12em] text-white/50 hover:text-neo-black transition-all duration-150 uppercase group"
            active-class="!text-neo-black !bg-neo-purple"
          >
            <span class="relative z-10">{{ link.label }}</span>
            <span class="absolute inset-0 bg-neo-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left" />
            <span class="absolute inset-0 bg-neo-purple scale-x-100 transition-transform duration-150 origin-left -z-10" style="display: none" />
          </NuxtLink>
        </nav>

        <button
          class="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border-2 border-neo-purple hover:bg-neo-purple transition-colors duration-150"
          :aria-label="mobileOpen ? 'Fechar menu' : 'Abrir menu'"
          :aria-expanded="mobileOpen"
          @click="mobileOpen = !mobileOpen"
        >
          <span class="w-5 h-0.5 bg-neo-white transition-all duration-200" :class="mobileOpen ? 'rotate-45 translate-y-[4px]' : ''" />
          <span class="w-5 h-0.5 bg-neo-white transition-all duration-200" :class="mobileOpen ? 'opacity-0 scale-0' : ''" />
          <span class="w-5 h-0.5 bg-neo-white transition-all duration-200" :class="mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-full"
    >
      <div
        v-if="mobileOpen"
        class="lg:hidden bg-neo-black border-b-4 border-neo-purple"
      >
        <nav class="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-4 py-3 font-rajdhani text-sm tracking-[0.12em] text-white/50 hover:text-neo-black hover:bg-neo-purple transition-all duration-150 uppercase font-bold"
            active-class="!text-neo-black !bg-neo-purple"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>
