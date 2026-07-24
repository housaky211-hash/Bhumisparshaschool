<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: 'Textos Traduzidos | Bhumisparsha School',
  description: 'Textos budistas traduzidos para PT-BR — Arya Tara, Manjushri, Sutras e Ensinamentos.',
})

interface TextCategory {
  title: string
  subtitle: string
  icon: string
  accent: string
  tex: string
  items: string[]
}

const categories: TextCategory[] = [
  {
    title: 'Arya Tara',
    subtitle: 'A Nobre Dama',
    icon: 'heroicons:star',
    accent: 'lux-purple',
    tex: 'tex-diamond',
    items: ['Arya Tara — A Nobre Dama', 'Traducao e Comentarios'],
  },
  {
    title: 'Manjushri',
    subtitle: 'Tudo sobre o jovial...',
    icon: 'heroicons:bolt',
    accent: 'lux-red',
    tex: 'tex-hex',
    items: ['Manjushri — O Bodhisattva da Sabedoria', 'Ensinamentos sobre Manjushri'],
  },
  {
    title: 'Ensinamentos',
    subtitle: 'Transcricoes de...',
    icon: 'heroicons:microphone',
    accent: 'lux-purple',
    tex: 'tex-dots',
    items: ['Transcricoes de Ensinamentos', 'Dzongsar Khyentse Rinpoche'],
  },
  {
    title: 'Sutras',
    subtitle: 'Assim eu ouvi...',
    icon: 'heroicons:book-open',
    accent: 'lux-green',
    tex: 'tex-waves',
    items: ['Gandavyuha Sutra', 'Outros Sutras Traduzidos'],
  },
  {
    title: 'Outros Textos',
    subtitle: 'Outros textos...',
    icon: 'heroicons:document-text',
    accent: 'lux-red',
    tex: 'tex-diagonal',
    items: ['Textos Diversos', 'Reflexoes e Traducoes'],
  },
]

function handleCardHover(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  el.style.setProperty('--mouse-x', `${x}%`)
  el.style.setProperty('--mouse-y', `${y}%`)
  el.style.transform = `perspective(800px) rotateX(${(y - 50) * -0.03}deg) rotateY(${(x - 50) * 0.03}deg) translateY(-2px)`
}

function handleCardLeave(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)'
}

onMounted(() => {
  gsap.from('.textos-content > *', {
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
    <section class="relative py-20 px-4 overflow-hidden tex-velvet">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lux-purple/[0.025] rounded-full blur-[200px]" />
      <div class="max-w-5xl mx-auto relative z-10">
        <span class="lux-section-subtitle">Biblioteca</span>
        <h1 class="lux-section-title mt-4 mb-8">Textos Traduzidos</h1>
        <div class="lux-divider max-w-xs mb-12" />

        <p class="font-grotesk text-lg text-amoled-light/50 leading-relaxed mb-12 max-w-3xl">
          Traducoes para Portugues (PT-BR) de textos budistas sagrados —
          ensinamentos, sutras, e textos de Dzongsar Khyentse Rinpoche e outros mestres.
        </p>

        <div class="space-y-5 textos-content">
          <div
            v-for="cat in categories"
            :key="cat.title"
            class="lux-card p-6 group relative overflow-hidden"
            @mousemove="handleCardHover"
            @mouseleave="handleCardLeave"
          >
            <div :class="cat.tex" class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div class="relative z-10 flex items-start gap-4">
              <div
                class="w-11 h-11 flex items-center justify-center clip-lux-sm flex-shrink-0 transition-all duration-300"
                :class="[
                  cat.accent === 'lux-purple' && 'bg-lux-purple/10 border border-lux-purple/15',
                  cat.accent === 'lux-red' && 'bg-lux-red/10 border border-lux-red/15',
                  cat.accent === 'lux-green' && 'bg-lux-green/10 border border-lux-green/15',
                ]"
              >
                <Icon :name="cat.icon" class="w-5 h-5" :class="[
                  cat.accent === 'lux-purple' && 'text-lux-purple/60',
                  cat.accent === 'lux-red' && 'text-lux-red/60',
                  cat.accent === 'lux-green' && 'text-lux-green/60',
                ]" />
              </div>
              <div class="flex-1">
                <h3 class="font-orbitron text-xs tracking-[0.15em] text-amoled-light/70 mb-1">
                  {{ cat.title }}
                </h3>
                <p class="font-rajdhani text-xs text-amoled-dim/35 mb-3">{{ cat.subtitle }}</p>
                <ul class="space-y-2">
                  <li v-for="item in cat.items" :key="item" class="font-rajdhani text-sm text-amoled-dim/45 hover:text-amoled-light/70 transition-colors duration-300 cursor-pointer flex items-center gap-2">
                    <div class="w-1 h-1 rounded-full bg-amoled-dim/20" />
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
