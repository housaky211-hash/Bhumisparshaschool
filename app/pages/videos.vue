<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: 'Videos Legendados | Bhumisparsha School',
  description: 'Videos legendados em PT-BR — ensinamentos, series e producoes audiovisuais.',
})

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
    description: 'Peyote vs Shamatha vs Vipassana — Dzongsar Khyentse Rinpoche, Mexico City 2017',
    duration: '05:49',
    url: 'https://youtube.com/playlist?list=PL6-wArQbu9GDUzFU2ntgqlL119LjjTA6g',
    category: 'Ensinamento',
  },
  {
    title: 'A Brincadeira Milagrosa de Manjushri — Parte 1',
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
    title: 'Guru Padma Siddhi Hung — Karma Drum (Electro Mix)',
    description: 'Mantra eletronico',
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

const filteredVideos = computed(() => {
  if (selectedCategory.value === 'Todos') return videos
  return videos.filter(v => v.category === selectedCategory.value)
})

function handleCardMouse(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  el.style.setProperty('--mouse-x', `${x}%`)
  el.style.setProperty('--mouse-y', `${y}%`)
  el.style.transform = `perspective(800px) rotateX(${(y - 50) * -0.05}deg) rotateY(${(x - 50) * 0.05}deg) translateY(-2px)`
}

function handleCardLeave(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)'
}

function handleVideoEnter(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const img = el.querySelector('img')
  if (img) gsap.to(img, { scale: 1.08, duration: 0.6, ease: 'power2.out' })
}

function handleVideoLeaveCard(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const img = el.querySelector('img')
  if (img) gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' })
}

function setCategory(cat: string) {
  selectedCategory.value = cat
}

onMounted(() => {
  gsap.from('.videos-content > *', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
    ease: 'power3.out',
    delay: 0.2,
  })
})
</script>

<template>
  <div class="pt-20">
    <section class="relative py-20 px-4 overflow-hidden tex-dots">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lux-red/[0.025] rounded-full blur-[200px]" />
      <div class="max-w-6xl mx-auto relative z-10">
        <span class="lux-section-subtitle" style="color: rgba(255, 34, 68, 0.4)">Sala de Videos</span>
        <h1 class="lux-section-title mt-4 mb-8">Videos Legendados</h1>
        <div class="lux-divider max-w-xs mb-12" />

        <div class="flex flex-wrap gap-2 mb-10 videos-content">
          <button
            v-for="cat in categories"
            :key="cat"
            class="px-4 py-2 font-rajdhani text-[10px] tracking-[0.15em] uppercase clip-lux-sm border transition-all duration-300"
            :class="selectedCategory === cat
              ? 'bg-lux-purple/15 border-lux-purple/30 text-lux-purple/80'
              : 'bg-amoled-panel/40 border-amoled-border/40 text-amoled-dim/40 hover:border-lux-purple/15 hover:text-amoled-dim/60'"
            @click="setCategory(cat)"
          >
            {{ cat }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <a
            v-for="video in filteredVideos"
            :key="video.title"
            :href="video.url"
            target="_blank"
            rel="noopener"
            class="lux-card group cursor-pointer"
            @mousemove="handleCardMouse"
            @mouseleave="handleCardLeave"
            @mouseenter="handleVideoEnter"
            @mouseleave.self="handleVideoLeaveCard"
          >
            <div class="relative overflow-hidden aspect-video bg-amoled-surface">
              <NuxtImg
                src="/images/project-main.png"
                :alt="video.title"
                width="600"
                height="340"
                class="w-full h-full object-cover opacity-80 transition-transform duration-700"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-amoled-black/95 via-amoled-black/20 to-transparent" />
              <div class="absolute top-3 left-3 px-2 py-1 bg-lux-red/15 border border-lux-red/20 font-orbitron text-[8px] text-lux-red/60 tracking-[0.15em] rounded backdrop-blur-sm">
                {{ video.category }}
              </div>
              <div class="absolute bottom-3 right-3 px-2.5 py-1 bg-amoled-black/70 border border-lux-purple/15 font-orbitron text-[9px] text-amoled-light/50 tracking-[0.15em] rounded backdrop-blur-sm">
                {{ video.duration }}
              </div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="w-14 h-14 flex items-center justify-center bg-lux-purple/15 border border-lux-purple/30 rounded-full backdrop-blur-md">
                  <Icon name="heroicons:play-solid" class="w-5 h-5 text-lux-purple ml-0.5" />
                </div>
              </div>
            </div>
            <div class="p-4">
              <h3 class="font-orbitron text-[10px] tracking-[0.15em] text-amoled-light/70 group-hover:text-amoled-white transition-colors mb-1 line-clamp-1">
                {{ video.title }}
              </h3>
              <p class="font-rajdhani text-sm text-amoled-dim/40 line-clamp-2">
                {{ video.description }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
