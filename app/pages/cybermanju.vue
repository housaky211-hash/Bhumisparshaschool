<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: 'Cyber Manju | Bhumisparsha School',
  description: 'Serie futurista — Sudana no Sekai. Buddhism meets cyberpunk.',
})

const episodes = [
  {
    ep: '01',
    title: 'Sudana No Sekai',
    year: '2026',
    duration: '02:56',
    description: 'Primeiro episodio — Sudana enfrenta a angustia existencial em um mundo de hologramas e algoritmos.',
    url: 'https://www.youtube.com/watch?v=3ozwHOeaIzI',
  },
]

function handleEpHover(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  el.style.transform = 'perspective(800px) rotateX(0) rotateY(1.5deg) translateX(4px)'
}

function handleEpLeave(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateX(0)'
}

onMounted(() => {
  gsap.from('.cybermanju-content > *', {
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
    <section class="relative py-20 px-4 overflow-hidden tex-hex">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lux-red/[0.025] rounded-full blur-[200px]" />
      <div class="max-w-5xl mx-auto relative z-10">
        <span class="lux-section-subtitle" style="color: rgba(255, 34, 68, 0.4)">Serie</span>
        <h1 class="lux-section-title mt-4 mb-8">Cyber Manju</h1>
        <div class="lux-divider max-w-xs mb-12" />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start cybermanju-content">
          <div>
            <p class="font-grotesk text-lg text-amoled-light/50 leading-relaxed mb-6">
              "In a hypothetical future, young cyberpunk wonders deep,<br />
              What's wrong with this life? Existential anguish, can't sleep."
            </p>
            <p class="font-rajdhani text-amoled-dim/45 leading-relaxed mb-6">
              CYBER MANJU e uma serie audiovisual que entrelaca o Gandavyuha Sutra — a jornada de Sudana
              em busca da sabedoria — com um futuro cyberpunk onde telas, algoritmos e simulacoes
              pos-morte dominam a existencia.
            </p>
            <p class="font-rajdhani text-amoled-dim/45 leading-relaxed mb-8 font-mono text-xs leading-relaxed">
              "Post-death sims, cyberimmortality for old-school dreamers' thrill,
              But he ain't hyped: stats of likely moves equal real human feel? Chill.
              Top of the buildin', city buzz below, no words, just a gaze and grin..."
            </p>

            <div class="flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/watch?v=3ozwHOeaIzI"
                target="_blank"
                rel="noopener"
                class="lux-btn"
              >
                <Icon name="heroicons:play" class="w-4 h-4" />
                Assistir Episodio
              </a>
            </div>
          </div>

          <div class="lux-card p-0 overflow-hidden relative">
            <NuxtImg
              src="/images/project-main.png"
              alt="Cyber Manju"
              width="600"
              height="600"
              class="w-full aspect-square object-cover"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-amoled-black/95 via-transparent to-lux-red/5" />
            <div class="absolute bottom-4 left-4 right-4">
              <span class="font-orbitron text-[9px] tracking-[0.3em] text-lux-red/50">EP 01 — 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 tex-diagonal">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-orbitron text-sm tracking-[0.3em] text-lux-red/50 mb-8 uppercase">Episodios</h2>
        <div class="space-y-4">
          <a
            v-for="ep in episodes"
            :key="ep.ep"
            :href="ep.url"
            target="_blank"
            rel="noopener"
            class="lux-card p-6 flex items-start gap-6 group cursor-pointer transition-all duration-300"
            @mousemove="handleEpHover"
            @mouseleave="handleEpLeave"
          >
            <div class="w-14 h-14 flex items-center justify-center bg-lux-red/10 border border-lux-red/15 font-orbitron text-xl text-lux-red/60 flex-shrink-0 clip-lux-sm">
              {{ ep.ep }}
            </div>
            <div class="flex-1">
              <h3 class="font-orbitron text-xs tracking-[0.15em] text-amoled-light/70 group-hover:text-amoled-white transition-colors duration-300">
                {{ ep.title }}
              </h3>
              <span class="font-orbitron text-[9px] text-lux-red/35 tracking-[0.15em]">{{ ep.year }} · {{ ep.duration }}</span>
              <p class="font-rajdhani text-sm text-amoled-dim/45 mt-2">{{ ep.description }}</p>
            </div>
            <Icon name="heroicons:play-circle" class="w-7 h-7 text-lux-red/30 group-hover:text-lux-red/60 transition-colors duration-300 flex-shrink-0 mt-1" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
