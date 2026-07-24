<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: 'Bhumisparsha School | Cyber Dharma',
  description: 'Arte, Dharma, Meio Ambiente e Tecnologia — no cruzamento entre a sabedoria ancestral e o futurismo digital.',
})

const { getOffset } = useMouseParallax(0.015)

const projects = [
  {
    title: 'Dharma Play',
    description: 'Musica eletronica sagrada — onde o Dharma encontra o beat.',
    icon: 'heroicons:musical-note',
    accent: 'lux-purple',
    tex: 'tex-diamond',
    path: '/dharmaplay',
  },
  {
    title: 'Cyber Manju',
    description: 'Serie futurista — Sudana no Sekai. Buddhism meets cyberpunk.',
    icon: 'heroicons:cpu-chip',
    accent: 'lux-red',
    tex: 'tex-hex',
    path: '/cybermanju',
  },
  {
    title: 'BhumiStudio Records',
    description: 'Producao musical, cursos e eventos ao vivo.',
    icon: 'heroicons:microphone',
    accent: 'lux-purple',
    tex: 'tex-dots',
    path: '/bhumistudio',
  },
  {
    title: '7k Project',
    description: 'Meio ambiente, plantio de arvores e regeneracao da terra.',
    icon: 'heroicons:academic-cap',
    accent: 'lux-green',
    tex: 'tex-waves',
    path: '/projetos',
  },
  {
    title: 'Techno Sutra',
    description: 'Sutras eletronicos — tecnologia como caminho de sabedoria.',
    icon: 'heroicons:command-line',
    accent: 'lux-red',
    tex: 'tex-diagonal',
    path: '/dharmaplay',
  },
  {
    title: 'Textos Traduzidos',
    description: 'Arya Tara, Manjushri, Sutras e Ensinamentos em PT-BR.',
    icon: 'heroicons:book-open',
    accent: 'lux-purple',
    tex: 'tex-paper',
    path: '/textos',
  },
]

const featuredVideos = [
  {
    title: 'CYBER MANJU | Ep 01 [2026]',
    description: 'Primeiro episodio da serie CYBER MANJU — Sudana No Sekai',
    duration: '02:56',
    url: 'https://www.youtube.com/watch?v=3ozwHOeaIzI',
  },
  {
    title: 'DHYANA — Dia 1 | Parte 1',
    description: 'Cinco Minutos para Tocar a Base com Sanidade em meio a Incerteza',
    duration: '10:07',
    url: 'https://www.youtube.com/watch?v=CF2j9rlcoFA',
  },
  {
    title: 'A Brincadeira Milagrosa de Manjushri',
    description: 'Ensinamento de Khyentse Norbu sobre o sutra',
    duration: '04:30',
    url: 'https://www.youtube.com/watch?v=wciPl7va4Lc',
  },
]

function handleCardMouse(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  el.style.setProperty('--mouse-x', `${x}%`)
  el.style.setProperty('--mouse-y', `${y}%`)

  const rotateX = (y - 50) * -0.08
  const rotateY = (x - 50) * 0.08
  el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`
}

function handleCardLeave(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)'
}

function handleVideoHover(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const img = el.querySelector('img')
  if (img) {
    gsap.to(img, { scale: 1.08, duration: 0.6, ease: 'power2.out' })
  }
}

function handleVideoLeave(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const img = el.querySelector('img')
  if (img) {
    gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' })
  }
}

onMounted(() => {
  gsap.from('.hero-content > *', {
    y: 60,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: 'power3.out',
    delay: 0.3,
  })
})
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoplay
        muted
        loop
        playsinline
        poster="/images/poster.jpg"
        class="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-gradient-to-b from-amoled-black/80 via-amoled-void/60 to-amoled-black/90" />
      <div class="absolute inset-0 bg-lux-purple/5 mix-blend-overlay" />
      <div class="absolute inset-0 tex-grid opacity-20" />

      <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-lux-purple/[0.04] rounded-full blur-[150px] animate-glow-pulse" />
      <div class="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-lux-red/[0.03] rounded-full blur-[180px] animate-glow-pulse" style="animation-delay: 2s" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-lux-green/[0.02] rounded-full blur-[120px] animate-glow-pulse" style="animation-delay: 4s" />

      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          class="w-[550px] h-[550px] border border-lux-purple/[0.04] rounded-full animate-rotate-slow"
          :style="{ transform: `translate(${getOffset(0.3).x}px, ${getOffset(0.3).y}px)` }"
        />
        <div class="absolute w-[420px] h-[420px] border border-lux-red/[0.03] rounded-full animate-rotate-slow" style="animation-direction: reverse; animation-duration: 40s" />
        <div class="absolute w-[300px] h-[300px] border border-lux-green/[0.03] rounded-full animate-rotate-slow" style="animation-duration: 35s" />
      </div>

      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto hero-content">
        <div class="mb-8">
          <NuxtImg
            src="/images/logo.png"
            alt="Bhumisparsha School"
            width="120"
            height="120"
            class="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full border border-lux-purple/15 shadow-[0_0_60px_rgba(155,89,255,0.12)] animate-float"
            :style="{ transform: `translate(${getOffset(0.5).x}px, ${getOffset(0.5).y}px)` }"
            loading="eager"
          />
        </div>

        <h1 class="font-orbitron text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider mb-6">
          <span class="text-shimmer-lux">Bhumisparsha</span>
          <br />
          <span class="text-amoled-light/50 text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.5em]">School</span>
        </h1>

        <p class="font-rajdhani text-lg md:text-xl text-amoled-mid/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          Arte · Dharma · Meio Ambiente · Tecnologia
          <br />
          <span class="text-amoled-dim/40 text-base">No cruzamento entre sabedoria ancestral e futurismo digital</span>
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink to="/dharmaplay" class="lux-btn">
            <Icon name="heroicons:play" class="w-4 h-4" />
            Explorar Projetos
          </NuxtLink>
          <NuxtLink to="/contato" class="lux-btn-green">
            <Icon name="heroicons:envelope" class="w-4 h-4" />
            Contato
          </NuxtLink>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="heroicons:chevron-down" class="w-5 h-5 text-lux-purple/30" />
      </div>
    </section>

    <!-- QUOTE -->
    <section class="relative py-28 overflow-hidden tex-noise">
      <div class="absolute inset-0 tex-velvet" />
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <Icon name="heroicons:sparkles" class="w-7 h-7 text-lux-gold/40 mx-auto mb-6" />
        <blockquote class="font-grotesk text-xl md:text-2xl lg:text-3xl text-amoled-light/50 italic leading-relaxed mb-6">
          "Sem arte nao ha imaginacao.<br />
          E se nao ha imaginacao, onde esta a vida?"
        </blockquote>
        <cite class="font-orbitron text-[10px] tracking-[0.4em] text-lux-purple/40 not-italic">
          — DZONGSAR KHYENTSE RINPOCHE
        </cite>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="relative py-28 px-4 tex-paper">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="lux-section-subtitle">Nossos Projetos</span>
          <h2 class="lux-section-title mt-4">Projetos & Iniciativas</h2>
          <div class="lux-divider max-w-xs mx-auto mt-6" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <NuxtLink
            v-for="project in projects"
            :key="project.title"
            :to="project.path"
            class="lux-card p-6 group cursor-pointer"
            @mousemove="handleCardMouse"
            @mouseleave="handleCardLeave"
          >
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" :class="project.tex" />
            <div class="relative z-10">
              <div class="flex items-start gap-4 mb-4">
                <div
                  class="w-11 h-11 flex items-center justify-center clip-lux-sm flex-shrink-0 transition-all duration-300"
                  :class="[
                    project.accent === 'lux-purple' && 'bg-lux-purple/10 border border-lux-purple/15 group-hover:border-lux-purple/30 group-hover:shadow-[0_0_20px_rgba(155,89,255,0.15)]',
                    project.accent === 'lux-red' && 'bg-lux-red/10 border border-lux-red/15 group-hover:border-lux-red/30 group-hover:shadow-[0_0_20px_rgba(255,34,68,0.15)]',
                    project.accent === 'lux-green' && 'bg-lux-green/10 border border-lux-green/15 group-hover:border-lux-green/30 group-hover:shadow-[0_0_20px_rgba(0,230,118,0.15)]',
                  ]"
                >
                  <Icon :name="project.icon" class="w-5 h-5 text-amoled-light/70" />
                </div>
                <div>
                  <h3 class="font-orbitron text-xs tracking-[0.15em] text-amoled-white/80 group-hover:text-amoled-white transition-colors duration-300">
                    {{ project.title }}
                  </h3>
                </div>
              </div>
              <p class="font-rajdhani text-sm text-amoled-dim/50 leading-relaxed">
                {{ project.description }}
              </p>
              <div class="mt-4 flex items-center gap-2 text-amoled-dim/30 group-hover:text-lux-purple/70 transition-colors duration-300 font-rajdhani text-[10px] tracking-[0.2em] uppercase">
                <span>Explorar</span>
                <Icon name="heroicons:arrow-right" class="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FEATURED VIDEOS -->
    <section class="relative py-28 px-4 tex-diamond">
      <div class="absolute inset-0 bg-amoled-void/40" />
      <div class="relative z-10 max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="lux-section-subtitle">Destaques</span>
          <h2 class="lux-section-title mt-4">Videos em Destaque</h2>
          <div class="lux-divider max-w-xs mx-auto mt-6" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <a
            v-for="video in featuredVideos"
            :key="video.title"
            :href="video.url"
            target="_blank"
            rel="noopener noreferrer"
            class="lux-card group cursor-pointer"
            @mousemove="handleCardMouse"
            @mouseleave="handleCardLeave"
            @mouseenter="handleVideoHover"
            @mouseleave.self="handleVideoLeave"
          >
            <div class="relative overflow-hidden aspect-video bg-amoled-surface">
              <NuxtImg
                src="/images/project-main.png"
                :alt="video.title"
                width="600"
                height="340"
                class="w-full h-full object-cover transition-transform duration-700"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-amoled-black/95 via-amoled-black/20 to-transparent" />
              <div class="absolute bottom-3 right-3 px-2.5 py-1 bg-amoled-black/70 border border-lux-purple/15 font-orbitron text-[9px] text-amoled-light/50 tracking-[0.15em] rounded backdrop-blur-sm">
                {{ video.duration }}
              </div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="w-14 h-14 flex items-center justify-center bg-lux-purple/15 border border-lux-purple/30 rounded-full backdrop-blur-md">
                  <Icon name="heroicons:play-solid" class="w-5 h-5 text-lux-purple ml-0.5" />
                </div>
              </div>
            </div>
            <div class="p-5">
              <h3 class="font-orbitron text-[10px] tracking-[0.15em] text-amoled-white/70 group-hover:text-amoled-white transition-colors mb-2">
                {{ video.title }}
              </h3>
              <p class="font-rajdhani text-sm text-amoled-dim/45">
                {{ video.description }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- CYBER MANJU SECTION -->
    <section class="relative py-28 px-4 overflow-hidden tex-hex">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-lux-red/[0.02] rounded-full blur-[200px]" />
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="lux-section-subtitle">Serie em Destaque</span>
            <h2 class="lux-section-title mt-4 mb-6">Cyber Manju</h2>
            <p class="font-grotesk text-lg text-amoled-light/45 leading-relaxed mb-6">
              "In a hypothetical future, young cyberpunk wonders deep,<br />
              What's wrong with this life? Existential anguish, can't sleep.<br />
              Screens everywhere: buildings, squares, homes, glasses on your face,<br />
              Holograms in the air, algorithms predictin' every trace."
            </p>
            <p class="font-rajdhani text-sm text-amoled-dim/40 mb-8 leading-relaxed">
              Primeiro episodio da serie CYBER MANJU — Sudana No Sekai.
              No cruzamento entre o Gandavyuha Sutra e um futuro cyberpunk, Sudana busca respostas
              alem do codigo, alem das telas, alem das variacoes.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/cybermanju" class="lux-btn">
                <Icon name="heroicons:arrow-right" class="w-4 h-4" />
                Saiba Mais
              </NuxtLink>
              <a
                href="https://www.youtube.com/watch?v=3ozwHOeaIzI"
                target="_blank"
                rel="noopener noreferrer"
                class="lux-btn !border-lux-red/20"
              >
                <Icon name="heroicons:play" class="w-4 h-4" />
                Assistir
              </a>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-square relative overflow-hidden clip-lux-lg">
              <NuxtImg
                src="/images/project-main.png"
                alt="Cyber Manju"
                width="600"
                height="600"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-amoled-black via-transparent to-transparent" />
              <div class="absolute inset-0 bg-gradient-to-r from-lux-red/5 to-lux-purple/5 mix-blend-overlay" />
            </div>
            <div class="absolute -bottom-4 -right-4 w-24 h-24 border border-lux-red/15 rounded-full animate-pulse-ring" />
            <div class="absolute -top-4 -left-4 w-16 h-16 border border-lux-purple/15 rounded-full animate-pulse-ring" style="animation-delay: 1s" />
          </div>
        </div>
      </div>
    </section>

    <!-- MANTRA SECTION -->
    <section class="relative py-28 px-4 overflow-hidden tex-waves">
      <div class="absolute inset-0 bg-amoled-void/30" />
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <div class="lux-divider mb-12" />
        <span class="lux-section-subtitle" style="color: rgba(245, 197, 66, 0.4)">Mantra</span>
        <h3 class="font-jp text-2xl md:text-4xl text-amoled-light/60 mt-6 mb-4 leading-relaxed">
          hung · orgyen yul gyi nubjang tsam<br />
          pema gesar dongpo la<br />
          yatsen chok gi ngodrub nye<br />
          pema jungne zhe su drak<br />
          khor du khandro mangpo kor<br />
          khye kyi jesu dak drub kyi<br />
          jingyi lab chir shek su sol<br />
          guru pema siddhi hung
        </h3>
        <p class="font-orbitron text-[10px] tracking-[0.5em] text-lux-gold/30 uppercase mt-8">
          Guru Padma Siddhi Hung
        </p>
        <div class="lux-divider mt-12" />
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-28 px-4 tex-dots">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="lux-section-title mb-6">Conecte-se ao Dharma</h2>
        <p class="font-rajdhani text-lg text-amoled-mid/40 mb-10 max-w-2xl mx-auto">
          Explore nossos projetos de traducao, musica eletronica sagrada, acoes ambientais e series futuristas.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink to="/textos" class="lux-btn">
            <Icon name="heroicons:book-open" class="w-4 h-4" />
            Textos Traduzidos
          </NuxtLink>
          <NuxtLink to="/videos" class="lux-btn-green">
            <Icon name="heroicons:video-camera" class="w-4 h-4" />
            Videos Legendados
          </NuxtLink>
          <NuxtLink to="/bhumistudio" class="lux-btn !border-lux-red/20">
            <Icon name="heroicons:musical-note" class="w-4 h-4" />
            BhumiStudio
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
