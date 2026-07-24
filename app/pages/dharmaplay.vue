<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: 'Dharma Play | Bhumisparsha School',
  description: 'Musica eletronica sagrada — onde o Dharma encontra o beat.',
})

definePageMeta({
  pageTransition: { name: 'morph-dharmaplay', mode: 'out-in' },
})

const playingTrack = ref<number | null>(null)

const tracks = [
  { title: 'Guru Padma Siddhi Hung — Karma Drum', mix: 'Electro Mix', duration: '04:21', bpm: 128 },
  { title: 'Guru Padma Siddhi Hung — Karma Drum', mix: 'Extended 8 min', duration: '08:30', bpm: 120 },
  { title: 'A Semente — Uhjoca, Banda Impermanente', mix: 'Original', duration: '06:01', bpm: 110 },
]

const features = [
  { title: 'Producao', icon: 'heroicons:musical-note' },
  { title: 'Eventos Ao Vivo', icon: 'heroicons:microphone' },
  { title: 'Estudio', icon: 'heroicons:stop-circle' },
  { title: 'Colaboracoes', icon: 'heroicons:user-group' },
]

function togglePlay(i: number) {
  playingTrack.value = playingTrack.value === i ? null : i
}

onMounted(() => {
  gsap.from('.dharma-hero > *', {
    y: 80,
    opacity: 0,
    scaleY: 0.8,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power4.out',
    delay: 0.2,
  })

  gsap.from('.waveform-row', {
    scaleX: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.06,
    ease: 'power3.out',
    delay: 0.6,
    transformOrigin: 'left center',
  })

  gsap.from('.track-item', {
    y: 40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power3.out',
    delay: 0.8,
  })
})
</script>

<template>
  <div class="pt-20 overflow-hidden">
    <!-- WAVEFORM BG -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <svg viewBox="0 0 1200 200" class="w-full h-full" preserveAspectRatio="none">
          <path d="M0,100 Q50,20 100,100 Q150,180 200,100 Q250,20 300,100 Q350,180 400,100 Q450,20 500,100 Q550,180 600,100 Q650,20 700,100 Q750,180 800,100 Q850,20 900,100 Q950,180 1000,100 Q1050,20 1100,100 Q1150,180 1200,100" stroke="#a855f7" stroke-width="2" fill="none" />
          <path d="M0,100 Q75,40 150,100 Q225,160 300,100 Q375,40 450,100 Q525,160 600,100 Q675,40 750,100 Q825,160 900,100 Q975,40 1050,100 Q1125,160 1200,100" stroke="#a855f7" stroke-width="1" fill="none" opacity="0.5" />
        </svg>
      </div>
    </div>

    <!-- HERO -->
    <section class="relative py-24 px-4">
      <div class="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center dharma-hero">
        <div>
          <div class="flex items-center gap-4 mb-4">
            <div class="h-1 w-16 bg-neo-purple" />
            <span class="neo-subtitle">Musica Eletronica</span>
          </div>
          <h1 class="neo-title mb-6">Dharma Play</h1>
          <div class="neo-divider max-w-[200px] mb-8" />

          <p class="font-grotesk text-lg text-white/60 leading-relaxed mb-6 border-l-4 border-neo-purple pl-4">
            Musica eletronica sagrada — onde o beat encontra o vazio, o groove encontra o Dharma.
          </p>
          <p class="font-rajdhani text-white/40 leading-relaxed mb-8">
            Producoes que transitam entre o eletronico, o meditativo e o experimental —
            transformando ensinamentos budistas em experiencias sonoras futuristas.
          </p>

          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contato" class="neo-btn">
              <Icon name="heroicons:play" class="w-4 h-4" />
              Ouca Agora
            </NuxtLink>
            <NuxtLink to="/bhumistudio" class="neo-btn-outline">
              <Icon name="heroicons:musical-note" class="w-4 h-4" />
              BhumiStudio
            </NuxtLink>
          </div>
        </div>

        <div class="relative">
          <div class="aspect-[4/3] border-4 border-neo-purple overflow-hidden neo-glow-purple">
            <NuxtImg
              src="/images/project-main.png"
              alt="Dharma Play"
              width="600"
              height="450"
              class="w-full h-full object-cover"
              loading="eager"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-neo-black via-transparent to-transparent" />
          </div>
          <div class="absolute -bottom-3 -right-3 w-20 h-20 border-4 border-neo-purple animate-pulse-border" />
        </div>
      </div>
    </section>

    <!-- WAVEFORM VISUALIZER -->
    <section class="py-12 px-4 border-y-4 border-neo-purple bg-neo-purple/5">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-end gap-[3px] h-16 justify-center">
          <div v-for="i in 80" :key="i" class="waveform-row flex-1 bg-neo-purple/40 max-w-[6px]" :style="{
            height: `${8 + Math.sin(i * 0.3) * 20 + Math.random() * 12}px`,
            animation: `waveform ${1 + Math.random() * 1.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.03}s`,
          }" />
        </div>
      </div>
    </section>

    <!-- TRACKS -->
    <section class="py-20 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="mb-12">
          <div class="flex items-center gap-4 mb-4">
            <div class="h-1 w-16 bg-neo-purple" />
            <span class="neo-subtitle">Destaques Sonoros</span>
          </div>
          <h2 class="font-orbitron text-3xl md:text-5xl font-black uppercase tracking-wider text-white" style="text-shadow: 3px 3px 0px #a855f7">Tracks</h2>
          <div class="neo-divider max-w-[200px] mt-4" />
        </div>

        <div class="space-y-4">
          <div
            v-for="(track, i) in tracks"
            :key="i"
            class="track-item group border-2 border-neo-border hover:border-neo-purple p-5 flex items-center gap-5 transition-all duration-300 cursor-pointer relative overflow-hidden"
            :class="playingTrack === i ? 'border-neo-purple bg-neo-purple/5' : ''"
            @click="togglePlay(i)"
          >
            <!-- Playing indicator -->
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-neo-purple transition-all duration-300"
              :class="playingTrack === i ? 'opacity-100' : 'opacity-0'" />

            <div class="w-14 h-14 flex items-center justify-center border-2 border-neo-purple flex-shrink-0 neo-clip-sm transition-all duration-300 group-hover:bg-neo-purple group-hover:text-neo-black"
              :class="playingTrack === i ? 'bg-neo-purple text-neo-black' : 'text-neo-purple'">
              <Icon :name="playingTrack === i ? 'heroicons:stop' : 'heroicons:play'" class="w-5 h-5" :class="playingTrack === i ? 'ml-0' : 'ml-0.5'" />
            </div>

            <div class="flex-1 min-w-0">
              <h3 class="font-rajdhani text-sm text-white/70 group-hover:text-neo-white transition-colors duration-200 truncate font-bold">
                {{ track.title }}
              </h3>
              <div class="flex items-center gap-3 mt-1">
                <span class="font-orbitron text-[9px] text-neo-purple tracking-[0.15em] uppercase font-bold">{{ track.mix }}</span>
                <span class="w-1 h-1 bg-neo-purple/30" />
                <span class="font-orbitron text-[9px] text-white/30 tracking-[0.15em] uppercase font-bold">{{ track.duration }}</span>
                <span class="w-1 h-1 bg-neo-purple/30" />
                <span class="font-orbitron text-[9px] text-white/30 tracking-[0.15em] uppercase font-bold">{{ track.bpm }} BPM</span>
              </div>
            </div>

            <!-- Mini waveform when playing -->
            <div v-if="playingTrack === i" class="flex items-end gap-[2px] h-6">
              <div v-for="j in 12" :key="j" class="w-1 bg-neo-purple" :style="{
                height: `${4 + Math.random() * 20}px`,
                animation: `waveform ${0.6 + Math.random() * 0.8}s ease-in-out infinite`,
                animationDelay: `${j * 0.05}s`,
              }" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="py-16 px-4 border-y-4 border-neo-purple">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-orbitron text-sm tracking-[0.3em] text-neo-purple mb-8 uppercase font-bold">O Que Oferecemos</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="f in features"
            :key="f.title"
            class="p-4 border-2 border-neo-border text-center hover:border-neo-purple hover:bg-neo-purple/5 transition-all duration-200 cursor-default group"
          >
            <Icon :name="f.icon" class="w-6 h-6 text-neo-purple/40 group-hover:text-neo-purple mx-auto mb-2 transition-colors duration-200 group-hover:rotate-12" />
            <span class="font-rajdhani text-sm text-white/50 group-hover:text-neo-purple transition-colors duration-200">{{ f.title }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
