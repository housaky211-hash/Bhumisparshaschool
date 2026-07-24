<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: 'Textos Traduzidos | Bhumisparsha School',
  description: 'Textos budistas traduzidos para PT-BR — Arya Tara, Manjushri, Sutras e Ensinamentos.',
})

definePageMeta({
  pageTransition: { name: 'morph-textos', mode: 'out-in' },
})

interface TextCategory {
  title: string
  subtitle: string
  icon: string
  accent: string
  items: { title: string; desc: string }[]
}

const openAccordion = ref<number | null>(null)

function toggleAccordion(i: number) {
  openAccordion.value = openAccordion.value === i ? null : i
}

const categories: TextCategory[] = [
  {
    title: 'Arya Tara',
    subtitle: 'A Nobre Dama — Protetora e Guiia',
    icon: 'heroicons:star',
    accent: 'purple',
    items: [
      { title: 'Arya Tara — A Nobre Dama', desc: 'Traducao completa com comentarios e contexto historico.' },
      { title: 'As 21 Taras', desc: 'Invocacoes e significados das 21 formas de Tara.' },
    ],
  },
  {
    title: 'Manjushri',
    subtitle: 'Bodhisattva da Sabedoria',
    icon: 'heroicons:bolt',
    accent: 'red',
    items: [
      { title: 'Manjushri — O Bodhisattva da Sabedoria', desc: 'A lenda e os ensinamentos sobre a espada da discriminacao.' },
      { title: 'Sutras de Manjushri', desc: 'Textos canonicos dedicados ao jovial Bodhisattva.' },
    ],
  },
  {
    title: 'Ensinamentos',
    subtitle: 'Transcricoes de Mestres',
    icon: 'heroicons:microphone',
    accent: 'purple',
    items: [
      { title: 'Dzongsar Khyentse Rinpoche', desc: 'Transcricoes e traducoes dos ensinamentos ao vivo.' },
      { title: 'Outros Mestres', desc: 'Ensinamentos de various tradicoes budistas.' },
    ],
  },
  {
    title: 'Sutras',
    subtitle: 'Assim Eu Ouvi...',
    icon: 'heroicons:book-open',
    accent: 'green',
    items: [
      { title: 'Gandavyuha Sutra', desc: 'A jornada de Sudana em busca da sabedoria suprema.' },
      { title: 'Heart Sutra', desc: 'O coracao da sabedoria transcendental.' },
    ],
  },
  {
    title: 'Reflexoes',
    subtitle: 'Textos e Comentarios',
    icon: 'heroicons:document-text',
    accent: 'yellow',
    items: [
      { title: 'Textos Diversos', desc: 'Reflexoes, ensaios e traducoes livres.' },
      { title: 'Comentarios', desc: 'Notas e interpretacoes pessoais.' },
    ],
  },
]

onMounted(() => {
  gsap.from('.textos-hero > *', {
    y: 60,
    opacity: 0,
    scale: 0.95,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power4.out',
    delay: 0.2,
  })

  gsap.from('.accordion-item', {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: 'power3.out',
    delay: 0.6,
  })
})
</script>

<template>
  <div class="pt-20 overflow-hidden">
    <!-- ZEN FLOATING ELEMENTS -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[15%] right-[8%] w-32 h-32 border-4 border-neo-yellow/10 rotate-45 animate-float" />
      <div class="absolute bottom-[20%] left-[5%] w-24 h-24 border-4 border-neo-yellow/10 neo-clip-diamond animate-drift" style="animation-delay: 2s" />
      <div class="absolute top-[60%] right-[15%] w-16 h-16 border-2 border-neo-yellow/10 animate-spin-slower" />
    </div>

    <!-- HERO -->
    <section class="relative py-24 px-4">
      <div class="max-w-5xl mx-auto relative z-10 textos-hero">
        <div class="flex items-center gap-4 mb-4">
          <div class="h-1 w-16 bg-neo-yellow" />
          <span class="neo-subtitle" style="color: #facc15">Biblioteca Sagrada</span>
        </div>
        <h1 class="neo-title-yellow mb-6">Textos<br /> Traduzidos</h1>
        <div class="neo-divider-yellow max-w-[200px] mb-8" />

        <p class="font-grotesk text-lg text-white/50 leading-relaxed max-w-3xl border-l-4 border-neo-yellow pl-4 mb-4">
          Traducoes para Portugues (PT-BR) de textos budistas sagrados —
          ensinamentos, sutras, e textos de Dzongsar Khyentse Rinpoche.
        </p>
        <p class="font-rajdhani text-sm text-white/30">
          Cada categoria contem traducoes cuidadosas com comentarios e contexto.
        </p>
      </div>
    </section>

    <!-- ACCORDION CATEGORIES -->
    <section class="pb-24 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="space-y-4">
          <div
            v-for="(cat, i) in categories"
            :key="cat.title"
            class="accordion-item border-2 transition-all duration-300"
            :class="[
              openAccordion === i
                ? cat.accent === 'purple' ? 'border-neo-purple bg-neo-purple/5'
                  : cat.accent === 'red' ? 'border-neo-red bg-neo-red/5'
                  : cat.accent === 'green' ? 'border-neo-green bg-neo-green/5'
                  : 'border-neo-yellow bg-neo-yellow/5'
                : 'border-neo-border hover:border-neo-border/60'
            ]"
          >
            <!-- Header -->
            <button
              class="w-full p-5 flex items-center gap-4 text-left cursor-pointer group"
              @click="toggleAccordion(i)"
            >
              <div
                class="w-12 h-12 flex items-center justify-center border-2 flex-shrink-0 transition-all duration-300"
                :class="[
                  cat.accent === 'purple' && 'border-neo-purple text-neo-purple',
                  cat.accent === 'red' && 'border-neo-red text-neo-red',
                  cat.accent === 'green' && 'border-neo-green text-neo-green',
                  cat.accent === 'yellow' && 'border-neo-yellow text-neo-yellow',
                  openAccordion === i ? 'rotate-12 scale-110' : '',
                ]"
              >
                <Icon :name="cat.icon" class="w-5 h-5" />
              </div>

              <div class="flex-1">
                <h3 class="font-orbitron text-xs tracking-[0.15em] uppercase font-bold"
                  :class="[
                    cat.accent === 'purple' && 'text-neo-purple',
                    cat.accent === 'red' && 'text-neo-red',
                    cat.accent === 'green' && 'text-neo-green',
                    cat.accent === 'yellow' && 'text-neo-yellow',
                  ]"
                >{{ cat.title }}</h3>
                <p class="font-rajdhani text-xs text-white/35 mt-0.5">{{ cat.subtitle }}</p>
              </div>

              <Icon
                name="heroicons:chevron-down"
                class="w-5 h-5 text-white/30 transition-transform duration-300"
                :class="openAccordion === i ? 'rotate-180' : ''"
              />
            </button>

            <!-- Content -->
            <div class="neo-accordion-content" :class="openAccordion === i ? 'open' : ''">
              <div class="px-5 pb-5 space-y-3">
                <div
                  v-for="item in cat.items"
                  :key="item.title"
                  class="p-4 border border-neo-border/30 hover:border-neo-border/60 transition-all duration-200 cursor-default group/item"
                >
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 mt-2 flex-shrink-0"
                      :class="[
                        cat.accent === 'purple' && 'bg-neo-purple',
                        cat.accent === 'red' && 'bg-neo-red',
                        cat.accent === 'green' && 'bg-neo-green',
                        cat.accent === 'yellow' && 'bg-neo-yellow',
                      ]"
                    />
                    <div>
                      <h4 class="font-grotesk text-sm text-white/70 group-hover/item:text-white/90 transition-colors duration-200 font-bold">
                        {{ item.title }}
                      </h4>
                      <p class="font-rajdhani text-xs text-white/30 mt-1">{{ item.desc }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
