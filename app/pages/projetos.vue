<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: '7k Project | Bhumisparsha School',
  description: 'Meio ambiente, plantio de arvores e regeneracao da terra.',
})

definePageMeta({
  pageTransition: { name: 'morph-projetos', mode: 'out-in' },
})

const activeFeature = ref<number | null>(null)

const features = [
  { title: 'Plantio', icon: 'heroicons:sparkles', desc: 'Acoes de plantio de arvores em comunidades.', stat: '500+' },
  { title: 'Monitoramento', icon: 'heroicons:chart-bar', desc: 'Acompanhamento ambiental e dados abertos.', stat: '3 anos' },
  { title: 'Educacao', icon: 'heroicons:academic-cap', desc: 'Cursos e oficinas ecologicas para jovens.', stat: '20+' },
  { title: 'Comunidade', icon: 'heroicons:user-group', desc: 'Parcerias com ONGs e organizacoes locais.', stat: '7+' },
]

const partners = [
  'Khyentse Foundation',
  'Earth Guardians Global',
  'Guardioes da Terra',
  'SOS Aguas da Prata',
  'ONG Planeta Plantar',
  'Circulo Vivencial Terra Viva',
  'Sitio Santa Clara',
]

const scrollContainer = ref<HTMLElement | null>(null)

function scrollGallery(dir: number) {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }
}

onMounted(() => {
  gsap.from('.projetos-hero > *', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power4.out',
    delay: 0.2,
  })

  gsap.from('.feature-card', {
    y: 80,
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    stagger: 0.1,
    ease: 'back.out(1.2)',
    delay: 0.5,
  })

  gsap.from('.gallery-item', {
    x: 100,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
    delay: 0.7,
  })
})
</script>

<template>
  <div class="pt-20 overflow-hidden">
    <!-- HERO: asymmetric -->
    <section class="relative py-24 px-4">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-[5%] right-[3%] w-40 h-40 border-4 border-neo-green/10 neo-clip-hex animate-spin-slower" />
        <div class="absolute bottom-[10%] left-[5%] w-28 h-28 border-4 border-neo-green/15 animate-drift" />
      </div>

      <div class="max-w-7xl mx-auto relative z-10 projetos-hero">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="flex items-center gap-4 mb-4">
              <div class="h-1 w-16 bg-neo-green" />
              <span class="neo-subtitle" style="color: #22c55e">Projeto Ambiental</span>
            </div>
            <h1 class="neo-title-green mb-6">7k Project</h1>
            <div class="neo-divider-green max-w-[200px] mb-8" />

            <p class="font-grotesk text-lg text-white/60 leading-relaxed mb-4 border-l-4 border-neo-green pl-4">
              A iniciativa ambiental da Bhumisparsha School — plantio de arvores,
              regeneracao da terra e acoes concretas pelo clima.
            </p>
            <p class="font-rajdhani text-white/40 leading-relaxed mb-8">
              Em parceria com Guardioes da Terra, Earth Guardians Global e ONGs locais,
              realizamos acoes de plantio, monitoramento e educacao ecologica.
            </p>

            <NuxtLink to="/contato" class="neo-btn-green">
              <Icon name="heroicons:envelope" class="w-4 h-4" />
              Quero Participar
            </NuxtLink>
          </div>

          <div class="relative">
            <div class="aspect-[4/3] border-4 border-neo-green overflow-hidden neo-glow-green">
              <NuxtImg
                src="/images/project-main.png"
                alt="7k Project"
                width="600"
                height="450"
                class="w-full h-full object-cover"
                loading="eager"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neo-black via-transparent to-transparent" />
            </div>
            <div class="absolute -top-3 -left-3 w-16 h-16 border-4 border-neo-green animate-pulse-border" />
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES: interactive cards -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12">
          <div class="flex items-center gap-4 mb-4">
            <div class="h-1 w-16 bg-neo-green" />
            <span class="neo-subtitle" style="color: #22c55e">Acoes</span>
          </div>
          <h2 class="font-orbitron text-3xl md:text-5xl font-black uppercase tracking-wider text-white" style="text-shadow: 3px 3px 0px #22c55e">Como Atuamos</h2>
          <div class="neo-divider-green max-w-[200px] mt-4" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="(f, i) in features"
            :key="f.title"
            class="feature-card group relative cursor-pointer"
            @mouseenter="activeFeature = i"
            @mouseleave="activeFeature = null"
          >
            <div
              class="p-6 border-3 transition-all duration-300 h-full relative overflow-hidden"
              :class="activeFeature === i ? 'border-neo-green bg-neo-green/5' : 'border-neo-border'"
            >
              <!-- animated bar -->
              <div class="absolute top-0 left-0 h-1 bg-neo-green transition-all duration-500"
                :class="activeFeature === i ? 'w-full' : 'w-0'" />

              <div class="w-14 h-14 flex items-center justify-center border-2 border-neo-green text-neo-green mb-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-neo-green group-hover:text-neo-black">
                <Icon :name="f.icon" class="w-6 h-6" />
              </div>

              <div class="font-orbitron text-2xl text-neo-green font-black mb-2 transition-all duration-300 group-hover:scale-110 origin-left">
                {{ f.stat }}
              </div>

              <h3 class="font-orbitron text-xs tracking-[0.15em] text-neo-white mb-2 uppercase font-bold">{{ f.title }}</h3>
              <p class="font-rajdhani text-sm text-white/40 leading-relaxed">{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HORIZONTAL GALLERY -->
    <section class="py-16 px-4 border-y-4 border-neo-green">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-between mb-8">
          <h2 class="font-orbitron text-sm tracking-[0.3em] text-neo-green uppercase font-bold">Galeria</h2>
          <div class="flex gap-2">
            <button class="w-10 h-10 border-2 border-neo-green text-neo-green flex items-center justify-center hover:bg-neo-green hover:text-neo-black transition-all duration-150 cursor-pointer" @click="scrollGallery(-1)">
              <Icon name="heroicons:chevron-left" class="w-5 h-5" />
            </button>
            <button class="w-10 h-10 border-2 border-neo-green text-neo-green flex items-center justify-center hover:bg-neo-green hover:text-neo-black transition-all duration-150 cursor-pointer" @click="scrollGallery(1)">
              <Icon name="heroicons:chevron-right" class="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref="scrollContainer" class="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style="scrollbar-width: none; -ms-overflow-style: none;">
          <div
            v-for="i in 6"
            :key="i"
            class="gallery-item flex-shrink-0 w-72 snap-start group cursor-pointer"
          >
            <div class="aspect-[4/3] border-2 border-neo-green/40 overflow-hidden relative transition-all duration-300 group-hover:border-neo-green group-hover:scale-[1.02]">
              <NuxtImg
                src="/images/project-main.png"
                :alt="`Acao ${i}`"
                width="400"
                height="300"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neo-black/60 via-transparent to-transparent" />
              <div class="absolute bottom-3 left-3 font-orbitron text-[9px] text-neo-green tracking-[0.2em] uppercase font-bold bg-neo-black/80 px-2 py-1 border border-neo-green/40">
                Acao #{{ String(i).padStart(2, '0') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PARTNERS -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="font-orbitron text-sm tracking-[0.3em] text-neo-green mb-8 uppercase font-bold">Parceiros</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="(partner, i) in partners"
            :key="partner"
            class="p-4 border-2 border-neo-border text-center hover:border-neo-green hover:bg-neo-green/5 transition-all duration-200 cursor-default group"
            :style="`transition-delay: ${i * 40}ms`"
          >
            <span class="font-rajdhani text-sm text-white/50 group-hover:text-neo-green transition-colors duration-200">{{ partner }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
</style>
