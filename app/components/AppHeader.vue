<script setup lang="ts">
const route = useRoute()
const mobileOpen = ref(false)

watch(() => route.path, () => {
  mobileOpen.value = false
})

const navLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Dharma Play', path: '/dharmaplay' },
  { label: 'Cyber Manju', path: '/cybermanju' },
  { label: 'BhumiStudio', path: '/bhumistudio' },
  { label: '7k Project', path: '/projetos' },
  { label: 'Textos', path: '/textos' },
  { label: 'Videos', path: '/videos' },
  { label: 'Contato', path: '/contato' },
]

function handleNavHover(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  el.style.setProperty('--nav-glow-x', `${x}%`)
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-amoled-black/80 backdrop-blur-2xl border-b border-lux-purple/[0.06]"
  >
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <div class="flex items-center justify-between h-14">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <NuxtImg
            src="/images/logo.png"
            alt="Bhumisparsha"
            width="32"
            height="32"
            class="w-8 h-8 rounded-full border border-lux-purple/20 group-hover:border-lux-purple/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(155,89,255,0.3)]"
            loading="eager"
          />
          <div class="flex flex-col leading-none">
            <span class="font-orbitron text-[10px] tracking-[0.35em] text-amoled-white/90 group-hover:text-lux-purple transition-colors duration-500">
              BHUMI
            </span>
            <span class="font-rajdhani text-[9px] tracking-[0.2em] text-amoled-dim/60 uppercase">
              SPARSHA
            </span>
          </div>
        </NuxtLink>

        <nav class="hidden lg:flex items-center gap-0">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="relative px-3 py-2 font-rajdhani text-[11px] tracking-[0.12em] text-amoled-mid/70 hover:text-amoled-white transition-all duration-300 uppercase overflow-hidden group"
            active-class="!text-lux-purple"
            @mousemove="handleNavHover"
          >
            <span class="relative z-10">{{ link.label }}</span>
            <span class="absolute inset-0 bg-lux-purple/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-lux-purple to-transparent group-hover:w-4/5 transition-all duration-500" />
          </NuxtLink>
        </nav>

        <button
          class="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
          :aria-label="mobileOpen ? 'Fechar menu' : 'Abrir menu'"
          :aria-expanded="mobileOpen"
          @click="mobileOpen = !mobileOpen"
        >
          <span class="w-5 h-px bg-amoled-light/60 transition-all duration-300" :class="mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''" />
          <span class="w-5 h-px bg-amoled-light/60 transition-all duration-300" :class="mobileOpen ? 'opacity-0 scale-0' : ''" />
          <span class="w-5 h-px bg-amoled-light/60 transition-all duration-300" :class="mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-if="mobileOpen"
        class="lg:hidden bg-amoled-void/95 backdrop-blur-2xl border-b border-lux-purple/[0.06]"
      >
        <nav class="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-4 py-3 font-rajdhani text-sm tracking-[0.12em] text-amoled-mid/60 hover:text-lux-purple hover:bg-lux-purple/[0.04] transition-all duration-300 uppercase rounded"
            active-class="!text-lux-purple !bg-lux-purple/[0.06]"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>
