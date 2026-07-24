<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: 'Bhumisparsha School | Cyber Dharma',
  description: 'Arte, Dharma, Meio Ambiente e Tecnologia — no cruzamento entre a sabedoria ancestral e o futurismo digital.',
})

const { getOffset } = useMouseParallax(0.02)

const projects = [
  {
    title: 'Dharma Play',
    description: 'Musica eletronica sagrada — onde o Dharma encontra o beat.',
    icon: 'heroicons:musical-note',
    accent: 'purple',
    path: '/dharmaplay',
  },
  {
    title: 'Cyber Manju',
    description: 'Serie futurista — Sudana no Sekai. Buddhism meets cyberpunk.',
    icon: 'heroicons:cpu-chip',
    accent: 'red',
    path: '/cybermanju',
  },
  {
    title: 'BhumiStudio Records',
    description: 'Producao musical, cursos e eventos ao vivo.',
    icon: 'heroicons:microphone',
    accent: 'purple',
    path: '/bhumistudio',
  },
  {
    title: '7k Project',
    description: 'Meio ambiente, plantio de arvores e regeneracao da terra.',
    icon: 'heroicons:academic-cap',
    accent: 'green',
    path: '/projetos',
  },
  {
    title: 'Techno Sutra',
    description: 'Sutras eletronicos — tecnologia como caminho de sabedoria.',
    icon: 'heroicons:command-line',
    accent: 'red',
    path: '/dharmaplay',
  },
  {
    title: 'Textos Traduzidos',
    description: 'Arya Tara, Manjushri, Sutras e Ensinamentos em PT-BR.',
    icon: 'heroicons:book-open',
    accent: 'yellow',
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

function handleCardClick(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  el.classList.add('animate-shake')
  setTimeout(() => el.classList.remove('animate-shake'), 500)
}

onMounted(() => {
  gsap.from('.hero-content > *', {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power4.out',
    delay: 0.2,
  })

  gsap.from('.stagger-card', {
    y: 60,
    opacity: 0,
    rotation: gsap.utils.wrap([-3, 3, -2, 2, -3, 3]),
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
    delay: 0.6,
    scrollTrigger: {
      trigger: '.stagger-card',
      start: 'top 80%',
    },
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
        class="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-gradient-to-b from-neo-black via-neo-black/70 to-neo-black" />

      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-[15%] left-[10%] w-[500px] h-[500px] border-4 border-neo-purple/20 rotate-45 animate-spin-slower" />
        <div class="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] border-4 border-neo-red/15 -rotate-12 animate-spin-slow" />
        <div class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-neo-green/10 rotate-[30deg] animate-drift" />
      </div>

      <div class="absolute bottom-0 left-0 right-0 h-px bg-neo-purple" />

      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto hero-content">
        <div class="mb-8">
          <NuxtImg
            src="/images/logo.png"
            alt="Bhumisparsha School"
            width="120"
            height="120"
            class="w-28 h-28 md:w-36 md:h-36 mx-auto border-4 border-neo-purple animate-float"
            :style="{ transform: `translate(${getOffset(0.5).x}px, ${getOffset(0.5).y}px)` }"
            loading="eager"
          />
        </div>

        <h1 class="font-orbitron text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-wider mb-6 neo-text-shimmer">
          BHUMISPARSHA
        </h1>

        <div class="inline-block border-2 border-neo-purple px-6 py-2 mb-8" style="box-shadow: 4px 4px 0px 0px #ef4444">
          <span class="font-orbitron text-lg md:text-2xl tracking-[0.3em] text-neo-white uppercase font-bold">School</span>
        </div>

        <p class="font-rajdhani text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          <span class="text-neo-purple font-bold">Arte</span> · <span class="text-neo-red font-bold">Dharma</span> · <span class="text-neo-green font-bold">Meio Ambiente</span> · <span class="text-neo-yellow font-bold">Tecnologia</span>
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink to="/dharmaplay" class="neo-btn">
            <Icon name="heroicons:play" class="w-4 h-4" />
            Explorar Projetos
          </NuxtLink>
          <NuxtLink to="/contato" class="neo-btn-green">
            <Icon name="heroicons:envelope" class="w-4 h-4" />
            Contato
          </NuxtLink>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="heroicons:chevron-down" class="w-6 h-6 text-neo-purple" />
      </div>
    </section>

    <!-- MARQUEE -->
    <div class="border-y-4 border-neo-purple bg-neo-dark py-4 neo-marquee overflow-hidden">
      <div class="neo-marquee-inner font-orbitron text-sm tracking-[0.3em] text-neo-purple/40 uppercase whitespace-nowrap">
        <span class="mx-8">DHARMA PLAY</span>
        <span class="mx-4 text-neo-red">★</span>
        <span class="mx-8">CYBER MANJU</span>
        <span class="mx-4 text-neo-green">★</span>
        <span class="mx-8">BHUMISTUDIO</span>
        <span class="mx-4 text-neo-yellow">★</span>
        <span class="mx-8">7K PROJECT</span>
        <span class="mx-4 text-neo-purple">★</span>
        <span class="mx-8">TECHNO SUTRA</span>
        <span class="mx-4 text-neo-red">★</span>
        <span class="mx-8">DHARMA PLAY</span>
        <span class="mx-4 text-neo-green">★</span>
        <span class="mx-8">CYBER MANJU</span>
        <span class="mx-4 text-neo-yellow">★</span>
        <span class="mx-8">BHUMISTUDIO</span>
        <span class="mx-4 text-neo-purple">★</span>
        <span class="mx-8">7K PROJECT</span>
        <span class="mx-4 text-neo-red">★</span>
        <span class="mx-8">TECHNO SUTRA</span>
        <span class="mx-4 text-neo-green">★</span>
      </div>
    </div>

    <!-- QUOTE -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-neo-purple/5" />
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div class="inline-block border-2 border-neo-yellow px-4 py-2 mb-8" style="box-shadow: 3px 3px 0px 0px #a855f7">
          <Icon name="heroicons:sparkles" class="w-6 h-6 text-neo-yellow" />
        </div>
        <blockquote class="font-grotesk text-xl md:text-3xl text-white/70 italic leading-relaxed mb-6">
          "Sem arte nao ha imaginacao.<br />
          E se nao ha imaginacao, onde esta a vida?"
        </blockquote>
        <div class="inline-block border-l-4 border-neo-purple pl-4">
          <cite class="font-orbitron text-[10px] tracking-[0.4em] text-neo-purple not-italic uppercase">
            — Dzongsar Khyentse Rinpoche
          </cite>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="relative py-24 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16">
          <div class="flex items-center gap-4 mb-4">
            <div class="h-1 w-16 bg-neo-purple" />
            <span class="neo-subtitle">Nossos Projetos</span>
          </div>
          <h2 class="neo-title">Projetos &<br class="md:hidden" /> Iniciativas</h2>
          <div class="neo-divider max-w-[200px] mt-6" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="(project, i) in projects"
            :key="project.title"
            :to="project.path"
            class="group cursor-pointer stagger-card"
            :class="[
              project.accent === 'purple' && 'neo-card',
              project.accent === 'red' && 'neo-card-red',
              project.accent === 'green' && 'neo-card-green',
              project.accent === 'yellow' && 'neo-card-yellow',
            ]"
            @click="handleCardClick"
          >
            <div class="p-6 relative">
              <div class="absolute top-0 left-0 right-0 h-1" :class="[
                project.accent === 'purple' && 'bg-neo-purple',
                project.accent === 'red' && 'bg-neo-red',
                project.accent === 'green' && 'bg-neo-green',
                project.accent === 'yellow' && 'bg-neo-yellow',
              ]" />
              <div class="flex items-start gap-4 mb-4">
                <div
                  class="w-12 h-12 flex items-center justify-center border-2 flex-shrink-0 transition-all duration-150 group-hover:rotate-6"
                  :class="[
                    project.accent === 'purple' && 'border-neo-purple text-neo-purple',
                    project.accent === 'red' && 'border-neo-red text-neo-red',
                    project.accent === 'green' && 'border-neo-green text-neo-green',
                    project.accent === 'yellow' && 'border-neo-yellow text-neo-yellow',
                  ]"
                >
                  <Icon :name="project.icon" class="w-5 h-5" />
                </div>
                <div>
                  <h3 class="font-orbitron text-xs tracking-[0.15em] text-neo-white group-hover:text-neo-purple transition-colors duration-150 font-bold uppercase">
                    {{ project.title }}
                  </h3>
                </div>
              </div>
              <p class="font-rajdhani text-sm text-white/40 leading-relaxed">
                {{ project.description }}
              </p>
              <div class="mt-4 flex items-center gap-2 text-white/20 group-hover:text-neo-purple transition-colors duration-150 font-rajdhani text-[10px] tracking-[0.2em] uppercase font-bold">
                <span>Explorar</span>
                <Icon name="heroicons:arrow-right" class="w-3 h-3 group-hover:translate-x-1 transition-transform duration-150" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FEATURED VIDEOS -->
    <section class="relative py-24 px-4 border-y-4 border-neo-red">
      <div class="absolute inset-0 bg-neo-red/5" />
      <div class="relative z-10 max-w-7xl mx-auto">
        <div class="mb-16">
          <div class="flex items-center gap-4 mb-4">
            <div class="h-1 w-16 bg-neo-red" />
            <span class="neo-subtitle" style="color: #ef4444">Destaques</span>
          </div>
          <h2 class="neo-title-red">Videos em<br class="md:hidden" /> Destaque</h2>
          <div class="neo-divider-red max-w-[200px] mt-6" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            v-for="video in featuredVideos"
            :key="video.title"
            :href="video.url"
            target="_blank"
            rel="noopener noreferrer"
            class="neo-card-red group cursor-pointer"
          >
            <div class="relative overflow-hidden aspect-video bg-neo-dark">
              <NuxtImg
                src="/images/project-main.png"
                :alt="video.title"
                width="600"
                height="340"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neo-black via-neo-black/30 to-transparent" />
              <div class="absolute bottom-3 right-3 px-2.5 py-1 bg-neo-black border-2 border-neo-red font-orbitron text-[9px] text-neo-red tracking-[0.15em] uppercase font-bold">
                {{ video.duration }}
              </div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div class="w-14 h-14 flex items-center justify-center bg-neo-red border-3 border-neo-white" style="box-shadow: 4px 4px 0px 0px #ffffff">
                  <Icon name="heroicons:play-solid" class="w-5 h-5 text-neo-white ml-0.5" />
                </div>
              </div>
            </div>
            <div class="p-5 border-t-2 border-neo-red">
              <h3 class="font-orbitron text-[10px] tracking-[0.15em] text-neo-white group-hover:text-neo-red transition-colors duration-150 uppercase font-bold">
                {{ video.title }}
              </h3>
              <p class="font-rajdhani text-sm text-white/40 mt-1">
                {{ video.description }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- CYBER MANJU SECTION -->
    <section class="relative py-28 px-4 overflow-hidden">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] border-4 border-neo-red/10 rotate-45 animate-spin-slower" />
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="flex items-center gap-4 mb-4">
              <div class="h-1 w-16 bg-neo-red" />
              <span class="neo-subtitle" style="color: #ef4444">Serie em Destaque</span>
            </div>
            <h2 class="neo-title-red mb-6">Cyber Manju</h2>
            <p class="font-grotesk text-lg text-white/50 leading-relaxed mb-6 border-l-4 border-neo-red pl-4">
              "In a hypothetical future, young cyberpunk wonders deep,<br />
              What's wrong with this life? Existential anguish, can't sleep.<br />
              Screens everywhere: buildings, squares, homes, glasses on your face,<br />
              Holograms in the air, algorithms predictin' every trace."
            </p>
            <p class="font-rajdhani text-sm text-white/40 mb-8 leading-relaxed">
              Primeiro episodio da serie CYBER MANJU — Sudana No Sekai.
              No cruzamento entre o Gandavyuha Sutra e um futuro cyberpunk, Sudana busca respostas
              alem do codigo, alem das telas, alem das variacoes.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/cybermanju" class="neo-btn-red">
                <Icon name="heroicons:arrow-right" class="w-4 h-4" />
                Saiba Mais
              </NuxtLink>
              <a
                href="https://www.youtube.com/watch?v=3ozwHOeaIzI"
                target="_blank"
                rel="noopener noreferrer"
                class="neo-btn-outline"
              >
                <Icon name="heroicons:play" class="w-4 h-4" />
                Assistir
              </a>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-square relative overflow-hidden neo-clip border-4 border-neo-red" style="box-shadow: 8px 8px 0px 0px #a855f7">
              <NuxtImg
                src="/images/project-main.png"
                alt="Cyber Manju"
                width="600"
                height="600"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neo-black via-transparent to-transparent" />
            </div>
            <div class="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-neo-purple animate-pulse-border" />
            <div class="absolute -top-4 -left-4 w-16 h-16 border-4 border-neo-red animate-pulse-border" style="animation-delay: 1s" />
          </div>
        </div>
      </div>
    </section>

    <!-- MANTRA SECTION -->
    <section class="relative py-24 px-4 border-y-4 border-neo-yellow">
      <div class="absolute inset-0 bg-neo-yellow/5" />
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <div class="inline-block border-2 border-neo-yellow px-4 py-2 mb-8" style="box-shadow: 3px 3px 0px 0px #a855f7">
          <span class="font-orbitron text-[10px] tracking-[0.5em] text-neo-yellow uppercase font-bold">Mantra</span>
        </div>
        <h3 class="font-jp text-2xl md:text-3xl text-white/60 mt-6 mb-4 leading-relaxed font-bold">
          hung · orgyen yul gyi nubjang tsam<br />
          pema gesar dongpo la<br />
          yatsen chok gi ngodrub nye<br />
          pema jungne zhe su drak<br />
          khor du khandro mangpo kor<br />
          khye kyi jesu dak drub kyi<br />
          jingyi lab chir shek su sol<br />
          guru pema siddhi hung
        </h3>
        <div class="inline-block border-2 border-neo-yellow mt-8 px-6 py-2" style="box-shadow: 3px 3px 0px 0px #facc15">
          <p class="font-orbitron text-[10px] tracking-[0.5em] text-neo-yellow uppercase font-bold">
            Guru Padma Siddhi Hung
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="neo-title mb-6">Conecte-se<br class="md:hidden" /> ao Dharma</h2>
        <p class="font-rajdhani text-lg text-white/40 mb-10 max-w-2xl mx-auto">
          Explore nossos projetos de traducao, musica eletronica sagrada, acoes ambientais e series futuristas.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink to="/textos" class="neo-btn">
            <Icon name="heroicons:book-open" class="w-4 h-4" />
            Textos Traduzidos
          </NuxtLink>
          <NuxtLink to="/videos" class="neo-btn-green">
            <Icon name="heroicons:video-camera" class="w-4 h-4" />
            Videos Legendados
          </NuxtLink>
          <NuxtLink to="/bhumistudio" class="neo-btn-red">
            <Icon name="heroicons:musical-note" class="w-4 h-4" />
            BhumiStudio
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
