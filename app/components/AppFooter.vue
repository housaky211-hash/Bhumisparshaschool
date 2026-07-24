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
  <footer class="relative bg-neo-black border-t-4 border-neo-purple mt-24">
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 border-3 border-neo-purple bg-neo-dark flex items-center justify-center">
              <NuxtImg
                src="/images/logo.png"
                alt="Bhumisparsha"
                width="28"
                height="28"
                class="w-7 h-7"
                loading="lazy"
              />
            </div>
            <div class="flex flex-col leading-none">
              <span class="font-orbitron text-[11px] tracking-[0.3em] text-neo-white">BHUMISPARSHA</span>
              <span class="font-rajdhani text-[9px] tracking-[0.2em] text-neo-purple uppercase font-bold">School</span>
            </div>
          </div>
          <p class="font-rajdhani text-sm text-white/50 leading-relaxed">
            Arte, Dharma, Meio Ambiente e Tecnologia — no cruzamento entre a sabedoria ancestral e o futurismo digital.
          </p>
        </div>

        <div>
          <h4 class="font-orbitron text-[10px] tracking-[0.3em] text-neo-purple mb-4 uppercase font-bold">Projetos</h4>
          <ul class="space-y-2">
            <li v-for="p in projectLinks" :key="p.label">
              <NuxtLink
                :to="p.path"
                class="font-rajdhani text-sm text-white/40 hover:text-neo-purple hover:translate-x-1 inline-block transition-all duration-150"
              >
                {{ p.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-orbitron text-[10px] tracking-[0.3em] text-neo-red mb-4 uppercase font-bold">Navegacao</h4>
          <ul class="space-y-2">
            <li v-for="p in navLinks" :key="p.label">
              <NuxtLink
                :to="p.path"
                class="font-rajdhani text-sm text-white/40 hover:text-neo-red hover:translate-x-1 inline-block transition-all duration-150"
              >
                {{ p.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-orbitron text-[10px] tracking-[0.3em] text-neo-green mb-4 uppercase font-bold">Agradecimentos</h4>
          <p class="font-rajdhani text-sm text-white/40 leading-relaxed mb-4">
            Khyentse Foundation · Earth Guardians Global · Guardioes da Terra · SOS Aguas da Prata · ONG Planeta Plantar
          </p>
          <div class="flex gap-2">
            <a
              href="https://bhumisparshaschool.org"
              target="_blank"
              rel="noopener"
              class="w-9 h-9 flex items-center justify-center border-2 border-neo-purple text-white/40 hover:text-neo-purple hover:bg-neo-purple hover:text-neo-black transition-all duration-150"
              aria-label="Site"
            >
              <Icon name="heroicons:globe-alt" class="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@bhumisparshaschool"
              target="_blank"
              rel="noopener"
              class="w-9 h-9 flex items-center justify-center border-2 border-neo-red text-white/40 hover:text-neo-red hover:bg-neo-red hover:text-neo-black transition-all duration-150"
              aria-label="YouTube"
            >
              <Icon name="heroicons:play-circle" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div class="neo-divider-thin mt-12 mb-8" />

      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="font-rajdhani text-[10px] text-white/30 tracking-[0.15em] uppercase">
          &copy; {{ year }} Bhumisparsha School. Todos os direitos reservados.
        </p>
        <p class="font-rajdhani text-[10px] text-white/20 tracking-[0.1em] italic">
          "Sem arte nao ha imaginacao. E se nao ha imaginacao, onde esta a vida?" — Dzongsar Khyentse Rinpoche
        </p>
      </div>
    </div>
  </footer>
</template>
