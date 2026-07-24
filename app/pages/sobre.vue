<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: 'Sobre | Bhumisparsha School',
  description: 'Conheca a Bhumisparsha School — Arte, Dharma, Meio Ambiente e Tecnologia.',
})

function handleCardHover(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  el.style.setProperty('--mouse-x', `${x}%`)
  el.style.setProperty('--mouse-y', `${y}%`)
  const rotateX = (y - 50) * -0.05
  const rotateY = (x - 50) * 0.05
  el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`
}

function handleCardLeave(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)'
}

onMounted(() => {
  gsap.from('.sobre-content > *', {
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
    <section class="relative py-20 px-4 overflow-hidden tex-paper">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lux-purple/[0.025] rounded-full blur-[200px]" />
      <div class="max-w-5xl mx-auto relative z-10">
        <span class="lux-section-subtitle">Sobre</span>
        <h1 class="lux-section-title mt-4 mb-8">Bhumisparsha School</h1>
        <div class="lux-divider max-w-xs mb-12" />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start sobre-content">
          <div>
            <p class="font-grotesk text-lg text-amoled-light/50 leading-relaxed mb-6">
              Bhumisparsha School e um projeto que cruza arte, Dharma, meio ambiente e tecnologia —
              no ponto de encontro entre a sabedoria ancestral e o futurismo digital.
            </p>
            <p class="font-rajdhani text-amoled-dim/45 leading-relaxed mb-6">
              Fundada a partir da inspiracao dos ensinamentos de Dzongsar Khyentse Rinpoche,
              a escola atua em multiplas frentes: producoes musicais eletronicas, traducao de textos
              budistas para portugues, projetos de reflorestamento e series audiovisuais futuristas.
            </p>
            <p class="font-rajdhani text-amoled-dim/45 leading-relaxed mb-8">
              Nosso nome vem do toque da terra — Bhumisparsha — o gesto do Buda ao despertar,
              tocando a terra como testemunha. Assim, tocamos a terra com acoes concretas
              de regeneracao ambiental, e tocamos a mente com ensinamentos traduzidos e acessiveis.
            </p>

            <div class="space-y-3">
              <div v-for="item in [
                'Musica Eletronica Sagrada (Dharma Play)',
                'Series Audiovisuais Futuristas (Cyber Manju)',
                'Producao Musical e Cursos (BhumiStudio)',
                'Reflorestamento e Educacao Ambiental (7k Project)',
                'Traducao de Textos Budistas para PT-BR',
                'Videos Legendados de Ensinamentos',
              ]" :key="item" class="flex items-center gap-3 font-rajdhani text-sm text-amoled-dim/50">
                <div class="w-1 h-1 rounded-full bg-lux-purple/50" />
                {{ item }}
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div
              class="lux-card p-0 overflow-hidden relative"
              @mousemove="handleCardHover"
              @mouseleave="handleCardLeave"
            >
              <NuxtImg
                src="/images/project-main.png"
                alt="Bhumisparsha School"
                width="600"
                height="400"
                class="w-full aspect-[3/2] object-cover"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-amoled-black/85 to-transparent" />
            </div>

            <blockquote class="lux-card p-6 relative">
              <Icon name="heroicons:sparkles" class="w-5 h-5 text-lux-gold/30 mb-3" />
              <p class="font-grotesk text-sm text-amoled-dim/45 italic leading-relaxed">
                "Sem arte nao ha imaginacao. E se nao ha imaginacao, onde esta a vida?"
              </p>
              <cite class="font-orbitron text-[9px] tracking-[0.3em] text-lux-purple/30 not-italic mt-3 block">
                — DZONGSAR KHYENTSE RINPOCHE
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 tex-diamond">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-orbitron text-sm tracking-[0.3em] text-lux-green/50 mb-8 uppercase">Agradecimentos</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="partner in [
            'Khyentse Foundation',
            'Earth Guardians Global',
            'Guardioes da Terra',
            'SOS Aguas da Prata',
            'ONG Planeta Plantar',
            'Circulo Vivencial Terra Viva',
            'Sitio Santa Clara',
          ]" :key="partner" class="lux-card p-4 text-center">
            <span class="font-rajdhani text-sm text-amoled-dim/50">{{ partner }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
