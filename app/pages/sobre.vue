<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: 'Sobre | Bhumisparsha School',
  description: 'Conheca a Bhumisparsha School — Arte, Dharma, Meio Ambiente e Tecnologia.',
})

definePageMeta({
  pageTransition: { name: 'morph-sobre', mode: 'out-in' },
})

const counters = ref([
  { label: 'Projetos', target: 6, current: 0 },
  { label: 'Artistas', target: 12, current: 0 },
  { label: 'Traducoes', target: 20, current: 0 },
  { label: 'Arvores', target: 500, current: 0 },
])

const hoveredPillar = ref<number | null>(null)

const pillars = [
  { title: 'Musica', icon: 'heroicons:musical-note', desc: 'Eletronica sagrada, beats que conectam ao vazio.', color: 'purple' },
  { title: 'Dharma', icon: 'heroicons:sparkles', desc: 'Ensinamentos traduzidos e acessiveis.', color: 'yellow' },
  { title: 'Terra', icon: 'heroicons:globe-alt', desc: 'Reflorestamento e regeneracao ambiental.', color: 'green' },
  { title: 'Codigo', icon: 'heroicons:cpu-chip', desc: 'Futurismo digital e series audiovisuais.', color: 'red' },
]

function animateCounters() {
  counters.value.forEach((c, i) => {
    const duration = 2000 + i * 300
    const start = performance.now()
    const step = (now: number) => {
      const elapsed = now - start
      c.current = Math.min(Math.round((elapsed / duration) * c.target), c.target)
      if (elapsed < duration) requestAnimationFrame(step)
    }
    setTimeout(() => requestAnimationFrame(step), 800 + i * 200)
  })
}

onMounted(() => {
  animateCounters()

  gsap.from('.sobre-hero > *', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power4.out',
    delay: 0.2,
  })

  gsap.from('.pillar-card', {
    y: 80,
    opacity: 0,
    rotation: gsap.utils.wrap([-4, 4, -3, 3]),
    duration: 0.7,
    stagger: 0.12,
    ease: 'power3.out',
    delay: 0.6,
  })

  gsap.from('.floating-shape', {
    scale: 0,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: 'elastic.out(1, 0.5)',
    delay: 0.4,
  })
})
</script>

<template>
  <div class="pt-20 overflow-hidden">
    <!-- HERO: split layout -->
    <section class="relative min-h-[70vh] flex items-center overflow-hidden">
      <!-- floating shapes -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="floating-shape absolute top-[10%] left-[5%] w-32 h-32 border-4 border-neo-purple/20 neo-clip-diamond animate-float" />
        <div class="floating-shape absolute top-[60%] right-[8%] w-24 h-24 border-4 border-neo-green/15 neo-clip-hex animate-drift" />
        <div class="floating-shape absolute bottom-[15%] left-[15%] w-20 h-20 border-4 border-neo-yellow/10 neo-clip-octagon animate-spin-slower" />
        <div class="floating-shape absolute top-[30%] right-[25%] w-16 h-16 bg-neo-purple/5 animate-float" style="animation-delay: 1s" />
      </div>

      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 sobre-hero">
        <div>
          <div class="flex items-center gap-4 mb-4">
            <div class="h-1 w-16 bg-neo-purple" />
            <span class="neo-subtitle">Quem Somos</span>
          </div>
          <h1 class="neo-title mb-6">Bhumisparsha<br /> School</h1>
          <div class="neo-divider max-w-[200px] mb-8" />

          <p class="font-grotesk text-lg text-white/60 leading-relaxed mb-6 border-l-4 border-neo-purple pl-4">
            Arte, Dharma, Meio Ambiente e Tecnologia — no cruzamento entre
            a sabedoria ancestral e o futurismo digital.
          </p>
          <p class="font-rajdhani text-white/40 leading-relaxed">
            Fundada a partir da inspiracao dos ensinamentos de Dzongsar Khyentse Rinpoche,
            atuamos em musicas eletronicas, traducoes budistas, reflorestamento e series futuristas.
          </p>
        </div>

        <div class="relative">
          <div class="aspect-[4/5] neo-clip border-4 border-neo-purple neo-glow-purple overflow-hidden">
            <NuxtImg
              src="/images/project-main.png"
              alt="Bhumisparsha School"
              width="600"
              height="750"
              class="w-full h-full object-cover"
              loading="eager"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-neo-black via-transparent to-neo-black/30" />
          </div>
          <div class="absolute -bottom-3 -right-3 w-20 h-20 border-4 border-neo-purple animate-pulse-border" />
        </div>
      </div>
    </section>

    <!-- PILLARS: interactive hover grid -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12">
          <div class="flex items-center gap-4 mb-4">
            <div class="h-1 w-16 bg-neo-yellow" />
            <span class="neo-subtitle" style="color: #facc15">Pilares</span>
          </div>
          <h2 class="neo-title-yellow mb-4">Os 4 Pilares</h2>
          <div class="neo-divider-yellow max-w-[200px] mt-4" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="(p, i) in pillars"
            :key="p.title"
            class="pillar-card group relative cursor-pointer"
            @mouseenter="hoveredPillar = i"
            @mouseleave="hoveredPillar = null"
          >
            <div
              class="p-6 border-3 transition-all duration-300 h-full"
              :class="[
                hoveredPillar === i ? 'bg-neo-dark' : 'bg-transparent',
                p.color === 'purple' && 'border-neo-purple',
                p.color === 'yellow' && 'border-neo-yellow',
                p.color === 'green' && 'border-neo-green',
                p.color === 'red' && 'border-neo-red',
              ]"
              :style="hoveredPillar === i ? `box-shadow: 6px 6px 0px 0px ${
                p.color === 'purple' ? '#a855f7' : p.color === 'yellow' ? '#facc15' : p.color === 'green' ? '#22c55e' : '#ef4444'
              }` : ''"
            >
              <div
                class="w-14 h-14 flex items-center justify-center border-2 mb-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                :class="[
                  p.color === 'purple' && 'border-neo-purple text-neo-purple',
                  p.color === 'yellow' && 'border-neo-yellow text-neo-yellow',
                  p.color === 'green' && 'border-neo-green text-neo-green',
                  p.color === 'red' && 'border-neo-red text-neo-red',
                ]"
              >
                <Icon :name="p.icon" class="w-6 h-6" />
              </div>
              <h3 class="font-orbitron text-sm tracking-[0.15em] uppercase font-bold mb-2"
                :class="[
                  p.color === 'purple' && 'text-neo-purple',
                  p.color === 'yellow' && 'text-neo-yellow',
                  p.color === 'green' && 'text-neo-green',
                  p.color === 'red' && 'text-neo-red',
                ]"
              >{{ p.title }}</h3>
              <p class="font-rajdhani text-sm text-white/40 leading-relaxed">{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- COUNTERS -->
    <section class="py-20 px-4 border-y-4 border-neo-purple bg-neo-purple/5">
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="c in counters" :key="c.label" class="text-center">
            <div class="neo-counter mb-2">{{ c.current }}+</div>
            <span class="font-orbitron text-[10px] tracking-[0.3em] text-white/40 uppercase font-bold">{{ c.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- LIST + IMAGE -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 class="font-orbitron text-sm tracking-[0.3em] text-neo-purple mb-8 uppercase font-bold">Nossas Iniciativas</h2>
          <div class="space-y-3">
            <div v-for="(item, i) in [
              'Musica Eletronica Sagrada (Dharma Play)',
              'Series Audiovisuais Futuristas (Cyber Manju)',
              'Producao Musical e Cursos (BhumiStudio)',
              'Reflorestamento e Educacao Ambiental (7k Project)',
              'Traducao de Textos Budistas para PT-BR',
              'Videos Legendados de Ensinamentos',
            ]" :key="item"
              class="flex items-center gap-4 p-3 border border-transparent hover:border-neo-purple/30 hover:bg-neo-purple/5 transition-all duration-200 group cursor-default"
            >
              <div class="w-8 h-8 flex items-center justify-center border border-neo-purple/40 font-orbitron text-[10px] text-neo-purple group-hover:bg-neo-purple group-hover:text-neo-black transition-all duration-200 flex-shrink-0">
                {{ String(i + 1).padStart(2, '0') }}
              </div>
              <span class="font-rajdhani text-sm text-white/50 group-hover:text-white/80 transition-colors duration-200">{{ item }}</span>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="neo-card">
            <NuxtImg
              src="/images/project-main.png"
              alt="Bhumisparsha"
              width="600"
              height="400"
              class="w-full aspect-[3/2] object-cover"
              loading="lazy"
            />
          </div>

          <div class="neo-card-yellow p-6">
            <Icon name="heroicons:sparkles" class="w-5 h-5 text-neo-yellow mb-3" />
            <p class="font-grotesk text-sm text-white/50 italic leading-relaxed">
              "Sem arte nao ha imaginacao. E se nao ha imaginacao, onde esta a vida?"
            </p>
            <cite class="font-orbitron text-[9px] tracking-[0.3em] text-neo-yellow not-italic mt-3 block uppercase">
              — Dzongsar Khyentse Rinpoche
            </cite>
          </div>
        </div>
      </div>
    </section>

    <!-- PARTNERS -->
    <section class="py-16 px-4 border-y-4 border-neo-green">
      <div class="max-w-6xl mx-auto">
        <h2 class="font-orbitron text-sm tracking-[0.3em] text-neo-green mb-8 uppercase font-bold">Agradecimentos</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="(partner, i) in [
            'Khyentse Foundation',
            'Earth Guardians Global',
            'Guardioes da Terra',
            'SOS Aguas da Prata',
            'ONG Planeta Plantar',
            'Circulo Vivencial Terra Viva',
            'Sitio Santa Clara',
          ]" :key="partner"
            class="neo-card-green p-4 text-center group cursor-default hover:scale-105 transition-transform duration-200"
            :style="`transition-delay: ${i * 50}ms`"
          >
            <span class="font-rajdhani text-sm text-white/50 group-hover:text-neo-green transition-colors duration-200">{{ partner }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
