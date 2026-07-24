<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: 'Contato | Bhumisparsha School',
  description: 'Entre em contato com a Bhumisparsha School.',
})

const form = reactive({ firstName: '', lastName: '', email: '', message: '' })
const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    Object.assign(form, { firstName: '', lastName: '', email: '', message: '' })
  }, 4000)
}

const contactInfo = [
  { icon: 'heroicons:globe-alt', label: 'Site', value: 'bhumisparshaschool.org', accent: 'lux-purple' },
  { icon: 'heroicons:envelope', label: 'Email', value: 'contato@bhumisparshaschool.org', accent: 'lux-red' },
  { icon: 'heroicons:map-pin', label: 'Localizacao', value: 'Brasil', accent: 'lux-green' },
]

function handleInputFocus(e: FocusEvent) {
  const el = e.currentTarget as HTMLElement
  gsap.to(el, { borderColor: 'rgba(155, 89, 255, 0.35)', duration: 0.3 })
}

function handleInputBlur(e: FocusEvent) {
  const el = e.currentTarget as HTMLElement
  gsap.to(el, { borderColor: 'rgba(155, 89, 255, 0.08)', duration: 0.3 })
}

onMounted(() => {
  gsap.from('.contato-content > *', {
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
    <section class="relative py-20 px-4 overflow-hidden tex-grid">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lux-purple/[0.025] rounded-full blur-[200px]" />
      <div class="max-w-4xl mx-auto relative z-10">
        <span class="lux-section-subtitle">Fale Conosco</span>
        <h1 class="lux-section-title mt-4 mb-8">Contato</h1>
        <div class="lux-divider max-w-xs mb-12" />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 contato-content">
          <div>
            <p class="font-grotesk text-lg text-amoled-light/50 leading-relaxed mb-8">
              Tem duvidas, sugestoes ou quer colaborar? Entre em contato conosco.
              Estamos abertos a parcerias, colaboracoes artisticas e iniciativas comunitarias.
            </p>

            <div class="space-y-6">
              <div v-for="(info, i) in contactInfo" :key="i" class="flex items-center gap-4 group">
                <div
                  class="w-10 h-10 flex items-center justify-center clip-lux-sm flex-shrink-0 transition-all duration-300"
                  :class="[
                    info.accent === 'lux-purple' && 'bg-lux-purple/10 border border-lux-purple/15 group-hover:border-lux-purple/30',
                    info.accent === 'lux-red' && 'bg-lux-red/10 border border-lux-red/15 group-hover:border-lux-red/30',
                    info.accent === 'lux-green' && 'bg-lux-green/10 border border-lux-green/15 group-hover:border-lux-green/30',
                  ]"
                >
                  <Icon :name="info.icon" class="w-4 h-4" :class="[
                    info.accent === 'lux-purple' && 'text-lux-purple/50',
                    info.accent === 'lux-red' && 'text-lux-red/50',
                    info.accent === 'lux-green' && 'text-lux-green/50',
                  ]" />
                </div>
                <div>
                  <span class="font-orbitron text-[9px] tracking-[0.3em] uppercase" :class="[
                    info.accent === 'lux-purple' && 'text-lux-purple/35',
                    info.accent === 'lux-red' && 'text-lux-red/35',
                    info.accent === 'lux-green' && 'text-lux-green/35',
                  ]">{{ info.label }}</span>
                  <p class="font-rajdhani text-sm text-amoled-dim/50">{{ info.value }}</p>
                </div>
              </div>
            </div>
          </div>

          <div v-if="!submitted" class="lux-card p-8">
            <form class="space-y-5" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="font-orbitron text-[9px] tracking-[0.3em] text-amoled-dim/40 uppercase mb-2 block">Nome</label>
                  <input
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-amoled-void/60 border border-lux-purple/[0.08] text-amoled-white font-rajdhani text-sm focus:outline-none transition-colors duration-300 rounded"
                    placeholder="Nome"
                    @focus="handleInputFocus"
                    @blur="handleInputBlur"
                  />
                </div>
                <div>
                  <label class="font-orbitron text-[9px] tracking-[0.3em] text-amoled-dim/40 uppercase mb-2 block">Sobrenome</label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-amoled-void/60 border border-lux-purple/[0.08] text-amoled-white font-rajdhani text-sm focus:outline-none transition-colors duration-300 rounded"
                    placeholder="Sobrenome"
                    @focus="handleInputFocus"
                    @blur="handleInputBlur"
                  />
                </div>
              </div>
              <div>
                <label class="font-orbitron text-[9px] tracking-[0.3em] text-amoled-dim/40 uppercase mb-2 block">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 bg-amoled-void/60 border border-lux-purple/[0.08] text-amoled-white font-rajdhani text-sm focus:outline-none transition-colors duration-300 rounded"
                  placeholder="email@exemplo.com"
                  @focus="handleInputFocus"
                  @blur="handleInputBlur"
                />
              </div>
              <div>
                <label class="font-orbitron text-[9px] tracking-[0.3em] text-amoled-dim/40 uppercase mb-2 block">Mensagem</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 bg-amoled-void/60 border border-lux-purple/[0.08] text-amoled-white font-rajdhani text-sm focus:outline-none transition-colors duration-300 rounded resize-none"
                  placeholder="Sua mensagem..."
                  @focus="handleInputFocus"
                  @blur="handleInputBlur"
                />
              </div>
              <button type="submit" class="lux-btn w-full justify-center">
                <Icon name="heroicons:paper-airplane" class="w-4 h-4" />
                Enviar
              </button>
            </form>
          </div>

          <div v-else class="lux-card p-12 text-center">
            <Icon name="heroicons:check-circle" class="w-14 h-14 text-lux-green/60 mx-auto mb-4" />
            <h3 class="font-orbitron text-lg text-lux-green/70 mb-2">Obrigado!</h3>
            <p class="font-rajdhani text-sm text-amoled-dim/45">Sua mensagem foi enviada.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
