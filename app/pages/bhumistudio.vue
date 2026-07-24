<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: 'BhumiStudio Records | Bhumisparsha School',
  description: 'Producao musical, cursos e eventos ao vivo.',
})

const features = [
  'Producao Musical Eletronica',
  'Cursos e Oficinas',
  'Eventos ao Vivo',
  'Sessoes de Gravacao',
  'Colaboracoes com Artistas',
]

const artists = ['Bplug', 'Banda Impermanente', 'Dani Zen', 'Levi Karma Drum', 'Louis', 'Nanci Ferreira', 'Pesads', 'Tupa', 'Uhjoca', 'Sintonia 019', 'Wera Trap Guarani', 'Yellow Bird']

function handleArtistHover(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  gsap.to(el, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
}

function handleArtistLeave(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  gsap.to(el, { scale: 1, duration: 0.3, ease: 'power2.out' })
}

onMounted(() => {
  gsap.from('.bstudio-content > *', {
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
    <section class="relative py-20 px-4 overflow-hidden tex-waves">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lux-purple/[0.025] rounded-full blur-[200px]" />
      <div class="max-w-5xl mx-auto relative z-10">
        <span class="lux-section-subtitle">Projeto</span>
        <h1 class="lux-section-title mt-4 mb-8">BhumiStudio Records</h1>
        <div class="lux-divider max-w-xs mb-12" />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bstudio-content">
          <div>
            <p class="font-grotesk text-lg text-amoled-light/50 leading-relaxed mb-6">
              BhumiStudio e o braco de producao musical e audiovisual da Bhumisparsha School.
              Aqui, arte e Dharma se encontram em frequencias sonoras.
            </p>
            <p class="font-rajdhani text-amoled-dim/45 leading-relaxed mb-8">
              Cursos de producao musical, gravacoes em estudio, eventos ao vivo e colaboracoes
              com artistas da cena eletronica e underground.
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
              alt="BhumiStudio"
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

    <section class="py-16 px-4 tex-diamond">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-orbitron text-sm tracking-[0.3em] text-lux-purple/50 mb-8 uppercase">Artistas Colaboradores</h2>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="artist in artists"
            :key="artist"
            class="px-4 py-2 bg-lux-purple/[0.06] border border-lux-purple/10 font-rajdhani text-sm text-lux-purple/50 clip-lux-sm hover:bg-lux-purple/10 hover:text-lux-purple/80 transition-all duration-300 cursor-default"
            @mouseenter="handleArtistHover"
            @mouseleave="handleArtistLeave"
          >
            {{ artist }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
