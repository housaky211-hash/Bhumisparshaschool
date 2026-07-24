<script setup lang="ts">
const year = new Date().getFullYear()

const projectLinks = [
  { label: 'Dharma Play', path: '/dharmaplay' },
  { label: 'Cyber Manju', path: '/cybermanju' },
  { label: 'BhumiStudio Records', path: '/bhumistudio' },
  { label: '7k Project', path: '/projetos' },
  { label: 'Techno Sutra', path: '/dharmaplay' },
]

const navLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Textos Traduzidos', path: '/textos' },
  { label: 'Videos Legendados', path: '/videos' },
  { label: 'Contato', path: '/contato' },
]
</script>

<template>
  <footer class="relative bg-amoled-void border-t border-lux-purple/[0.06] mt-24">
    <div class="lux-divider" />

    <div class="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div class="flex items-center gap-3 mb-6">
            <NuxtImg
              src="/images/logo.png"
              alt="Bhumisparsha"
              width="36"
              height="36"
              class="w-9 h-9 rounded-full border border-lux-purple/15"
              loading="lazy"
            />
            <div class="flex flex-col leading-none">
              <span class="font-orbitron text-[11px] tracking-[0.3em] text-amoled-white/80">BHUMISPARSHA</span>
              <span class="font-rajdhani text-[9px] tracking-[0.2em] text-amoled-dim/40 uppercase">School</span>
            </div>
          </div>
          <p class="font-rajdhani text-sm text-amoled-dim/60 leading-relaxed">
            Arte, Dharma, Meio Ambiente e Tecnologia — no cruzamento entre a sabedoria ancestral e o futurismo digital.
          </p>
        </div>

        <div>
          <h4 class="font-orbitron text-[10px] tracking-[0.3em] text-lux-purple/60 mb-4 uppercase">Projetos</h4>
          <ul class="space-y-2">
            <li v-for="p in projectLinks" :key="p.label">
              <NuxtLink
                :to="p.path"
                class="font-rajdhani text-sm text-amoled-dim/50 hover:text-lux-purple transition-colors duration-300"
              >
                {{ p.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-orbitron text-[10px] tracking-[0.3em] text-lux-red/50 mb-4 uppercase">Navegacao</h4>
          <ul class="space-y-2">
            <li v-for="p in navLinks" :key="p.label">
              <NuxtLink
                :to="p.path"
                class="font-rajdhani text-sm text-amoled-dim/50 hover:text-lux-red transition-colors duration-300"
              >
                {{ p.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-orbitron text-[10px] tracking-[0.3em] text-lux-green/50 mb-4 uppercase">Agradecimentos</h4>
          <p class="font-rajdhani text-sm text-amoled-dim/50 leading-relaxed mb-4">
            Khyentse Foundation · Earth Guardians Global · Guardioes da Terra · SOS Aguas da Prata · ONG Planeta Plantar
          </p>
          <div class="flex gap-3">
            <a
              href="https://bhumisparshaschool.org"
              target="_blank"
              rel="noopener"
              class="w-9 h-9 flex items-center justify-center border border-lux-purple/10 text-amoled-dim/40 hover:text-lux-purple hover:border-lux-purple/30 transition-all duration-300 rounded"
              aria-label="Site"
            >
              <Icon name="heroicons:globe-alt" class="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@bhumisparshaschool"
              target="_blank"
              rel="noopener"
              class="w-9 h-9 flex items-center justify-center border border-lux-purple/10 text-amoled-dim/40 hover:text-lux-red hover:border-lux-red/30 transition-all duration-300 rounded"
              aria-label="YouTube"
            >
              <Icon name="heroicons:play-circle" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div class="lux-divider-thin mt-12 mb-8" />

      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="font-rajdhani text-[10px] text-amoled-dim/30 tracking-[0.15em] uppercase">
          &copy; {{ year }} Bhumisparsha School. Todos os direitos reservados.
        </p>
        <p class="font-rajdhani text-[10px] text-amoled-dim/20 tracking-[0.1em] italic">
          "Sem arte nao ha imaginacao. E se nao ha imaginacao, onde esta a vida?" — Dzongsar Khyentse Rinpoche
        </p>
      </div>
    </div>
  </footer>
</template>
