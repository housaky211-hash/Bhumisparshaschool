<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: 'BhumiStudio Records | Bhumisparsha School',
  description: 'Producao musical, cursos e eventos ao vivo.',
})

definePageMeta({
  pageTransition: { name: 'morph-bhumistudio', mode: 'out-in' },
})

const hoveredArtist = ref<number | null>(null)
const activeFilter = ref('all')

const features = [
  { title: 'Producao', icon: 'heroicons:musical-note', desc: 'Producao musical eletronica e experimental.' },
  { title: 'Cursos', icon: 'heroicons:academic-cap', desc: 'Oficinas de producao sonora e mixagem.' },
  { title: 'Eventos', icon: 'heroicons:microphone', desc: 'Sessoes ao vivo e performances.' },
  { title: 'Gravacao', icon: 'heroicons:stop-circle', desc: 'Sessoes de estudio profissional.' },
]

const artists = [
  { name: 'Bplug', tag: 'eletronico' },
  { name: 'Banda Impermanente', tag: 'experimental' },
  { name: 'Dani Zen', tag: 'meditacao' },
  { name: 'Levi Karma Drum', tag: 'percussao' },
  { name: 'Louis', tag: 'eletronico' },
  { name: 'Nanci Ferreira', tag: 'vocal' },
  { name: 'Pesads', tag: 'experimental' },
  { name: 'Tupa', tag: 'tribal' },
  { name: 'Uhjoca', tag: 'eletronico' },
  { name: 'Sintonia 019', tag: 'coletivo' },
  { name: 'Wera Trap Guarani', tag: 'indigena' },
  { name: 'Yellow Bird', tag: 'vocal' },
]

const tags = ['all', 'eletronico', 'experimental', 'meditacao', 'tribal', 'vocal']

const filteredArtists = computed(() => {
  if (activeFilter.value === 'all') return artists
  return artists.filter(a => a.tag === activeFilter.value)
})

onMounted(() => {
  gsap.from('.bstudio-hero > *', {
    y: 60,
    opacity: 0,
    rotation: -3,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power4.out',
    delay: 0.2,
  })

  gsap.from('.feature-block', {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: 'back.out(1.5)',
    delay: 0.6,
  })

  gsap.from('.artist-chip', {
    scale: 0,
    opacity: 0,
    duration: 0.4,
    stagger: 0.04,
    ease: 'back.out(2)',
    delay: 0.8,
  })
})
</script>

<template>
  <div class="pt-20 overflow-hidden">
    <!-- VISUALIZER BARS BG -->
    <div class="absolute inset-0 pointer-events-none flex items-end justify-center gap-1 opacity-5">
      <div v-for="i in 60" :key="i" class="w-1 bg-neo-purple" :style="{
        height: `${20 + Math.random() * 300}px`,
        animation: `waveform ${1 + Math.random() * 2}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 2}s`,
      }" />
    </div>

    <!-- HERO -->
    <section class="relative py-24 px-4">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-[8%] right-[10%] w-40 h-40 border-4 border-neo-purple/10 rotate-45 animate-spin-slower" />
        <div class="absolute bottom-[12%] left-[5%] w-24 h-24 border-4 border-neo-purple/15 neo-clip-hex animate-drift" />
      </div>

      <div class="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bstudio-hero">
        <div>
          <div class="flex items-center gap-4 mb-4">
            <div class="h-1 w-16 bg-neo-purple" />
            <span class="neo-subtitle">Estudio</span>
          </div>
          <h1 class="neo-title mb-6">BhumiStudio<br /> Records</h1>
          <div class="neo-divider max-w-[200px] mb-8" />

          <p class="font-grotesk text-lg text-white/60 leading-relaxed mb-6 border-l-4 border-neo-purple pl-4">
            O braco de producao musical e audiovisual da Bhumisparsha School.
            Arte e Dharma se encontram em frequencias sonoras.
          </p>
          <p class="font-rajdhani text-white/40 leading-relaxed mb-8">
            Cursos de producao musical, gravacoes em estudio, eventos ao vivo e colaboracoes
            com artistas da cena eletronica e underground.
          </p>

          <NuxtLink to="/contato" class="neo-btn">
            <Icon name="heroicons:musical-note" class="w-4 h-4" />
            Quero Gravar
          </NuxtLink>
        </div>

        <div class="relative">
          <div class="aspect-[4/3] border-4 border-neo-purple overflow-hidden neo-glow-purple">
            <NuxtImg
              src="/images/project-main.png"
              alt="BhumiStudio"
              width="600"
              height="450"
              class="w-full h-full object-cover"
              loading="eager"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-neo-black via-transparent to-transparent" />
            <!-- Waveform overlay -->
            <div class="absolute bottom-4 left-4 right-4 flex items-end gap-[2px] h-10">
              <div v-for="i in 40" :key="i" class="flex-1 bg-neo-purple/60" :style="{
                height: `${10 + Math.random() * 30}px`,
                animation: `waveform ${0.8 + Math.random() * 1.5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 1.5}s`,
              }" />
            </div>
          </div>
          <div class="absolute -bottom-3 -right-3 w-20 h-20 border-4 border-neo-purple animate-pulse-border" />
        </div>
      </div>
    </section>

    <!-- FEATURES: visualizer blocks -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12">
          <div class="flex items-center gap-4 mb-4">
            <div class="h-1 w-16 bg-neo-purple" />
            <span class="neo-subtitle">Servicos</span>
          </div>
          <h2 class="font-orbitron text-3xl md:text-5xl font-black uppercase tracking-wider text-white" style="text-shadow: 3px 3px 0px #a855f7">O Que Fazemos</h2>
          <div class="neo-divider max-w-[200px] mt-4" />
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="(f, i) in features"
            :key="f.title"
            class="feature-block group p-6 border-3 border-neo-border hover:border-neo-purple transition-all duration-300 cursor-default relative overflow-hidden"
          >
            <div class="absolute bottom-0 left-0 right-0 bg-neo-purple/10 transition-all duration-500"
              :style="`height: ${20 + i * 15}%`" />

            <div class="w-12 h-12 flex items-center justify-center border-2 border-neo-purple text-neo-purple mb-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 relative z-10">
              <Icon :name="f.icon" class="w-5 h-5" />
            </div>
            <h3 class="font-orbitron text-xs tracking-[0.15em] text-neo-purple mb-2 uppercase font-bold relative z-10">{{ f.title }}</h3>
            <p class="font-rajdhani text-sm text-white/40 leading-relaxed relative z-10">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ARTISTS: tag filter + grid -->
    <section class="py-16 px-4 border-y-4 border-neo-purple">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-between mb-8">
          <h2 class="font-orbitron text-sm tracking-[0.3em] text-neo-purple uppercase font-bold">Artistas Colaboradores</h2>
          <span class="font-rajdhani text-sm text-white/30">{{ filteredArtists.length }} artistas</span>
        </div>

        <div class="flex flex-wrap gap-2 mb-8">
          <button
            v-for="tag in tags"
            :key="tag"
            class="px-4 py-2 font-rajdhani text-[10px] tracking-[0.15em] uppercase border-2 font-bold transition-all duration-200 cursor-pointer"
            :class="activeFilter === tag
              ? 'bg-neo-purple border-neo-purple text-neo-black'
              : 'bg-transparent border-neo-border text-white/30 hover:border-neo-purple hover:text-white/60'"
            @click="activeFilter = tag"
          >
            {{ tag }}
          </button>
        </div>

        <div class="flex flex-wrap gap-3">
          <TransitionGroup name="morph">
            <span
              v-for="artist in filteredArtists"
              :key="artist.name"
              class="artist-chip px-5 py-2.5 border-2 border-neo-purple text-neo-purple/60 neo-clip-sm hover:bg-neo-purple hover:text-neo-black transition-all duration-200 cursor-default font-rajdhani text-sm font-bold"
              @mouseenter="hoveredArtist = artists.indexOf(artist)"
              @mouseleave="hoveredArtist = null"
            >
              {{ artist.name }}
            </span>
          </TransitionGroup>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.morph-enter-active,
.morph-leave-active {
  transition: all 0.3s ease;
}
.morph-enter-from,
.morph-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
