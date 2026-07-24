<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: 'Dharma Play | Bhumisparsha School',
  description: 'Musica eletronica sagrada — onde o Dharma encontra o beat.',
})

const tracks = [
  { title: 'Guru Padma Siddhi Hung — Karma Drum (Electro Mix)', duration: '04:21' },
  { title: 'Guru Padma Siddhi Hung — Karma Drum (Extended 8 min)', duration: '08:30' },
  { title: 'A Semente — Uhjoca, Banda Impermanente', duration: '06:01' },
]

const features = ['Cursos de Producao Musical', 'Eventos Ao Vivo', 'Sessoes de Estudio', 'Colaboracoes Artisticas']

function handleTrackHover(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  el.style.transform = 'perspective(600px) translateX(4px)'
  el.style.borderColor = 'rgba(155, 89, 255, 0.25)'
}

function handleTrackLeave(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  el.style.transform = 'perspective(600px) translateX(0)'
  el.style.borderColor = 'rgba(155, 89, 255, 0.08)'
}

onMounted(() => {
  gsap.from('.dharmaplay-content > *', {
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
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lux-purple/[0.025] rounded-full blur-[200px]" />
      <div class="max-w-5xl mx-auto relative z-10">
        <span class="lux-section-subtitle">Projeto</span>
        <h1 class="lux-section-title mt-4 mb-8">Dharma Play</h1>
        <div class="lux-divider max-w-xs mb-12" />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start dharmaplay-content">
          <div>
            <p class="font-grotesk text-lg text-amoled-light/50 leading-relaxed mb-6">
              Dharma Play e o projeto de musica eletronica sagrada da Bhumisparsha School.
              Aqui, o beat encontra o vazio, o groove encontra o Dharma.
            </p>
            <p class="font-rajdhani text-amoled-dim/45 leading-relaxed mb-8">
              Producoes que transitam entre o eletronico, o meditativo e o experimental —
              transformando ensinamentos budistas em experiencias sonoras futuristas.
            </p>

            <div class="space-y-3">
              <div v-for="item in features" :key="item" class="flex items-center gap-3 font-rajdhani text-sm text-amoled-dim/50">
                <div class="w-1 h-1 rounded-full bg-lux-purple/50" />
                {{ item }}
              </div>
            </div>
          </div>

          <div class="lux-card p-0 overflow-hidden relative">
            <NuxtImg
              src="/images/project-main.png"
              alt="Dharma Play"
              width="600"
              height="400"
              class="w-full aspect-[3/2] object-cover"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-amoled-black/85 to-transparent" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 tex-hex">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-orbitron text-sm tracking-[0.3em] text-lux-purple/50 mb-8 uppercase">Destaques Sonoros</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            v-for="(track, i) in tracks"
            :key="i"
            class="lux-card p-4 flex items-center gap-4 group cursor-pointer transition-all duration-300"
            @mousemove="handleTrackHover"
            @mouseleave="handleTrackLeave"
          >
            <div class="w-11 h-11 flex items-center justify-center bg-lux-purple/10 border border-lux-purple/15 clip-lux-sm group-hover:bg-lux-purple/20 transition-colors duration-300 flex-shrink-0">
              <Icon name="heroicons:play" class="w-4 h-4 text-lux-purple/70" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-rajdhani text-sm text-amoled-light/70 group-hover:text-amoled-white transition-colors duration-300 truncate">{{ track.title }}</h3>
              <span class="font-orbitron text-[9px] text-amoled-dim/35 tracking-[0.15em]">{{ track.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
