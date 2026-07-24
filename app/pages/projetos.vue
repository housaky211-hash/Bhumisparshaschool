<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: '7k Project | Bhumisparsha School',
  description: 'Meio ambiente, plantio de arvores e regeneracao da terra.',
})

const features = [
  'Acoes de Plantio de Arvores',
  'Monitoramento Ambiental',
  'Cursos e Oficinas Ecologicas',
  'Educacao Ambiental',
  'Parcerias Comunitarias',
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

function handlePartnerHover(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  gsap.to(el, { scale: 1.03, duration: 0.3, ease: 'power2.out' })
}

function handlePartnerLeave(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  gsap.to(el, { scale: 1, duration: 0.3, ease: 'power2.out' })
}

onMounted(() => {
  gsap.from('.projetos-content > *', {
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
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lux-green/[0.025] rounded-full blur-[200px]" />
      <div class="max-w-5xl mx-auto relative z-10">
        <span class="lux-section-subtitle" style="color: rgba(0, 230, 118, 0.4)">Projeto</span>
        <h1 class="lux-section-title mt-4 mb-8">7k Project</h1>
        <div class="lux-divider max-w-xs mb-12" />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start projetos-content">
          <div>
            <p class="font-grotesk text-lg text-amoled-light/50 leading-relaxed mb-6">
              O 7k Project e a iniciativa ambiental da Bhumisparsha School —
              plantio de arvores, regeneracao da terra e acoes concretas pelo clima.
            </p>
            <p class="font-rajdhani text-amoled-dim/45 leading-relaxed mb-8">
              Em parceria com Guardioes da Terra, Earth Guardians Global e ONGs locais,
              o projeto realiza acoes de plantio, monitoramento ambiental e educacao ecologica
              nas comunidades.
            </p>

            <div class="space-y-3">
              <div v-for="item in features" :key="item" class="flex items-center gap-3 font-rajdhani text-sm text-amoled-dim/50">
                <div class="w-1 h-1 rounded-full bg-lux-green/50" />
                {{ item }}
              </div>
            </div>
          </div>

          <div class="lux-card p-0 overflow-hidden relative">
            <NuxtImg
              src="/images/project-main.png"
              alt="7k Project"
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

    <section class="py-16 px-4 tex-grid">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-orbitron text-sm tracking-[0.3em] text-lux-green/50 mb-8 uppercase">Parceiros</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div
            v-for="partner in partners"
            :key="partner"
            class="lux-card p-4 text-center cursor-default"
            @mouseenter="handlePartnerHover"
            @mouseleave="handlePartnerLeave"
          >
            <span class="font-rajdhani text-sm text-amoled-dim/50">{{ partner }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
