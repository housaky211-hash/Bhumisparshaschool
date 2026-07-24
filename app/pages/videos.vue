<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: 'Videos Legendados | Bhumisparsha School',
  description: 'Videos legendados em PT-BR — ensinamentos, series e producoes audiovisuais.',
})

definePageMeta({
  pageTransition: { name: 'morph-videos', mode: 'out-in' },
})

const hoveredVideo = ref<number | null>(null)

const videos = [
  {
    title: 'CYBER MANJU | Ep 01 [2026]',
    description: 'Primeiro episodio da serie CYBER MANJU — Sudana No Sekai',
    duration: '02:56',
    url: 'https://www.youtube.com/watch?v=3ozwHOeaIzI',
    category: 'Serie',
  },
  {
    title: 'Budismo daora?',
    description: 'Peyote vs Shamatha vs Vipassana — Dzongsar Khyentse Rinpoche',
    duration: '05:49',
    url: 'https://youtube.com/playlist?list=PL6-wArQbu9GDUzFU2ntgqlL119LjjTA6g',
    category: 'Ensinamento',
  },
  {
    title: 'A Brincadeira Milagrosa de Manjushri',
    description: 'Ensinamento de Khyentse Norbu sobre o sutra',
    duration: '04:30',
    url: 'https://www.youtube.com/watch?v=wciPl7va4Lc',
    category: 'Ensinamento',
  },
  {
    title: 'Manjushri 001 [Legendado PT-br]',
    description: 'Editado e ilustrado por Bhumisparsha School',
    duration: '03:40',
    url: 'https://www.youtube.com/watch?v=3ozwHOeaIzI',
    category: 'Ensinamento',
  },
  {
    title: 'DHYANA — Dia 1 | Parte 1',
    description: 'Cinco Minutos para Tocar a Base com Sanidade em meio a Incerteza',
    duration: '10:07',
    url: 'https://www.youtube.com/watch?v=CF2j9rlcoFA',
    category: 'Meditacao',
  },
  {
    title: 'Guru Padma Siddhi Hung — Karma Drum',
    description: 'Mantra eletronico — Electro Mix',
    duration: '04:21',
    url: 'https://www.youtube.com/watch?v=3ozwHOeaIzI',
    category: 'Musica',
  },
  {
    title: 'A Semente — Uhjoca, Banda Impermanente',
    description: 'Clipe musical do projeto 7k',
    duration: '06:01',
    url: 'https://www.youtube.com/watch?v=3ozwHOeaIzI',
    category: 'Musica',
  },
  {
    title: 'Vipassana: uma Sadhana — Parte 4',
    description: 'Legendado PT-br',
    duration: '15:56',
    url: 'https://www.youtube.com/watch?v=3ozwHOeaIzI',
    category: 'Meditacao',
  },
]

const selectedCategory = ref('Todos')
const categories = ['Todos', 'Serie', 'Ensinamento', 'Meditacao', 'Musica']

const categoryColors: Record<string, string> = {
  'Todos': 'bg-neo-purple border-neo-purple text-neo-black',
  'Serie': 'bg-neo-red border-neo-red text-neo-black',
  'Ensinamento': 'bg-neo-purple border-neo-purple text-neo-black',
  'Meditacao': 'bg-neo-green border-neo-green text-neo-black',
  'Musica': 'bg-neo-yellow border-neo-yellow text-neo-black',
}

const categoryTags: Record<string, string> = {
  'Serie': 'neo-tag-red',
  'Ensinamento': 'neo-tag-purple',
  'Meditacao': 'neo-tag-green',
  'Musica': 'neo-tag-yellow',
}

const filteredVideos = computed(() => {
  if (selectedCategory.value === 'Todos') return videos
  return videos.filter(v => v.category === selectedCategory.value)
})

onMounted(() => {
  gsap.from('.videos-hero > *', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power4.out',
    delay: 0.2,
  })

  gsap.from('.video-card', {
    y: 60,
    opacity: 0,
    scale: 0.95,
    duration: 0.5,
    stagger: 0.06,
    ease: 'power3.out',
    delay: 0.6,
  })
})
</script>

<template>
  <div class="pt-20 overflow-hidden">
    <!-- HERO -->
    <section class="relative py-24 px-4">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-[10%] left-[5%] w-36 h-36 border-4 border-neo-red/10 -rotate-12 animate-spin-slower" />
        <div class="absolute bottom-[15%] right-[8%] w-24 h-24 border-4 border-neo-red/15 animate-drift" />
      </div>

      <div class="max-w-6xl mx-auto relative z-10 videos-hero">
        <div class="flex items-center gap-4 mb-4">
          <div class="h-1 w-16 bg-neo-red" />
          <span class="neo-subtitle" style="color: #ef4444">Sala de Videos</span>
        </div>
        <h1 class="neo-title-red mb-6">Videos<br /> Legendados</h1>
        <div class="neo-divider-red max-w-[200px] mb-8" />

        <p class="font-grotesk text-lg text-white/50 leading-relaxed max-w-2xl border-l-4 border-neo-red pl-4">
          Videos legendados em PT-BR — ensinamentos, series e producoes audiovisuais da escola.
        </p>
      </div>
    </section>

    <!-- FILTER TABS -->
    <section class="px-4 pb-8">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat"
            class="px-5 py-2.5 font-rajdhani text-[10px] tracking-[0.15em] uppercase border-2 font-bold transition-all duration-200 cursor-pointer"
            :class="selectedCategory === cat
              ? categoryColors[cat]
              : 'bg-transparent border-neo-border text-white/30 hover:border-neo-red/50 hover:text-white/60'"
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- VIDEO GRID -->
    <section class="pb-24 px-4">
      <div class="max-w-6xl mx-auto">
        <TransitionGroup name="morph" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <a
            v-for="(video, i) in filteredVideos"
            :key="video.title"
            :href="video.url"
            target="_blank"
            rel="noopener"
            class="video-card group cursor-pointer relative"
            @mouseenter="hoveredVideo = i"
            @mouseleave="hoveredVideo = null"
          >
            <div class="border-2 border-neo-red/40 transition-all duration-300 hover:border-neo-red"
              :style="hoveredVideo === i ? 'box-shadow: 6px 6px 0px 0px #ef4444' : ''">
              <div class="relative overflow-hidden aspect-video bg-neo-dark">
                <NuxtImg
                  src="/images/project-main.png"
                  :alt="video.title"
                  width="600"
                  height="340"
                  class="w-full h-full object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-neo-black via-neo-black/30 to-transparent" />

                <!-- Category tag -->
                <div class="absolute top-3 left-3">
                  <span :class="categoryTags[video.category]" style="box-shadow: 2px 2px 0px 0px #ef4444">
                    {{ video.category }}
                  </span>
                </div>

                <!-- Duration -->
                <div class="absolute bottom-3 right-3 px-2.5 py-1 bg-neo-black border-2 border-neo-red font-orbitron text-[9px] text-neo-red tracking-[0.15em] uppercase font-bold">
                  {{ video.duration }}
                </div>

                <!-- Play overlay -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div class="w-16 h-16 flex items-center justify-center bg-neo-red border-3 border-neo-white transform scale-75 group-hover:scale-100 transition-transform duration-300"
                    style="box-shadow: 4px 4px 0px 0px #ffffff">
                    <Icon name="heroicons:play-solid" class="w-6 h-6 text-neo-white ml-0.5" />
                  </div>
                </div>
              </div>

              <div class="p-4 border-t-2 border-neo-red/40 transition-colors duration-200 group-hover:border-neo-red">
                <h3 class="font-orbitron text-[10px] tracking-[0.15em] text-neo-white group-hover:text-neo-red transition-colors duration-200 uppercase font-bold line-clamp-1">
                  {{ video.title }}
                </h3>
                <p class="font-rajdhani text-sm text-white/40 mt-1 line-clamp-2">
                  {{ video.description }}
                </p>
              </div>
            </div>
          </a>
        </TransitionGroup>
      </div>
    </section>
  </div>
</template>

<style scoped>
.morph-enter-active,
.morph-leave-active {
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.morph-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}
.morph-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.morph-move {
  transition: transform 0.4s ease;
}
</style>
