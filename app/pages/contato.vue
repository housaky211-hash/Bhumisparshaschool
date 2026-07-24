<script setup lang="ts">
import gsap from 'gsap'

useSeoMeta({
  title: 'Contato | Bhumisparsha School',
  description: 'Entre em contato com a Bhumisparsha School.',
})

definePageMeta({
  pageTransition: { name: 'morph-contato', mode: 'out-in' },
})

const form = reactive({ firstName: '', lastName: '', email: '', message: '' })
const submitted = ref(false)
const focusedField = ref<string | null>(null)

const handleSubmit = () => {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    Object.assign(form, { firstName: '', lastName: '', email: '', message: '' })
  }, 4000)
}

const contactInfo = [
  { icon: 'heroicons:globe-alt', label: 'Site', value: 'bhumisparshaschool.org', color: 'cyan' },
  { icon: 'heroicons:envelope', label: 'Email', value: 'contato@bhumisparshaschool.org', color: 'purple' },
  { icon: 'heroicons:map-pin', label: 'Localizacao', value: 'Brasil', color: 'green' },
]

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${6 + Math.random() * 8}s`,
  size: `${2 + Math.random() * 4}px`,
  color: ['#a855f7', '#06b6d4', '#22c55e', '#facc15'][Math.floor(Math.random() * 4)],
}))

onMounted(() => {
  gsap.from('.contato-hero > *', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power4.out',
    delay: 0.2,
  })

  gsap.from('.form-field', {
    x: -40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: 'power3.out',
    delay: 0.6,
  })

  gsap.from('.contact-item', {
    x: 40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power3.out',
    delay: 0.5,
  })
})
</script>

<template>
  <div class="pt-20 overflow-hidden">
    <!-- PARTICLES BACKGROUND -->
    <div class="neo-particles">
      <div
        v-for="p in particles"
        :key="p.id"
        class="neo-particle"
        :style="{
          left: p.left,
          animationDelay: p.delay,
          animationDuration: p.duration,
          width: p.size,
          height: p.size,
          background: p.color,
        }"
      />
    </div>

    <!-- HERO -->
    <section class="relative py-24 px-4">
      <div class="max-w-5xl mx-auto relative z-10 contato-hero">
        <div class="flex items-center gap-4 mb-4">
          <div class="h-1 w-16 bg-neo-cyan" />
          <span class="neo-subtitle" style="color: #06b6d4">Fale Conosco</span>
        </div>
        <h1 class="neo-title-cyan mb-6">Contato</h1>
        <div class="neo-divider-cyan max-w-[200px] mb-8" />

        <p class="font-grotesk text-lg text-white/50 leading-relaxed max-w-2xl border-l-4 border-neo-cyan pl-4">
          Tem duvidas, sugestoes ou quer colaborar? Estamos abertos a parcerias,
          colaboracoes artisticas e iniciativas comunitarias.
        </p>
      </div>
    </section>

    <!-- FORM + CONTACT INFO -->
    <section class="pb-24 px-4">
      <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
        <!-- CONTACT INFO -->
        <div class="lg:col-span-2 space-y-6">
          <div
            v-for="(info, i) in contactInfo"
            :key="i"
            class="contact-item group flex items-start gap-4 p-4 border border-neo-border/30 hover:border-neo-cyan/40 transition-all duration-200 cursor-default"
            :style="`transition-delay: ${i * 60}ms`"
          >
            <div
              class="w-12 h-12 flex items-center justify-center border-2 flex-shrink-0 transition-all duration-200 group-hover:rotate-12 group-hover:scale-110"
              :class="[
                info.color === 'cyan' && 'border-neo-cyan text-neo-cyan',
                info.color === 'purple' && 'border-neo-purple text-neo-purple',
                info.color === 'green' && 'border-neo-green text-neo-green',
              ]"
            >
              <Icon :name="info.icon" class="w-5 h-5" />
            </div>
            <div>
              <span class="font-orbitron text-[9px] tracking-[0.3em] uppercase font-bold block mb-1"
                :class="[
                  info.color === 'cyan' && 'text-neo-cyan',
                  info.color === 'purple' && 'text-neo-purple',
                  info.color === 'green' && 'text-neo-green',
                ]"
              >{{ info.label }}</span>
              <p class="font-rajdhani text-sm text-white/50 group-hover:text-white/80 transition-colors duration-200">{{ info.value }}</p>
            </div>
          </div>

          <!-- MAP placeholder with glow -->
          <div class="relative border-4 border-neo-cyan/20 p-8 text-center overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-neo-cyan/5 to-neo-purple/5" />
            <Icon name="heroicons:map" class="w-12 h-12 text-neo-cyan/30 mx-auto mb-3" />
            <span class="font-orbitron text-[10px] tracking-[0.3em] text-neo-cyan/40 uppercase font-bold">Brasil</span>
          </div>
        </div>

        <!-- FORM -->
        <div class="lg:col-span-3">
          <div v-if="!submitted" class="border-4 border-neo-cyan p-8 relative overflow-hidden"
            style="box-shadow: 8px 8px 0px 0px #06b6d4">
            <div class="absolute top-0 right-0 w-32 h-32 border-4 border-neo-cyan/10 rotate-45" />

            <form class="space-y-5 relative z-10" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-2 gap-4">
                <div class="form-field">
                  <label class="font-orbitron text-[9px] tracking-[0.3em] text-neo-cyan uppercase mb-2 block font-bold">Nome</label>
                  <input
                    v-model="form.firstName"
                    type="text"
                    required
                    class="neo-input-cyan"
                    placeholder="Nome"
                    @focus="focusedField = 'firstName'"
                    @blur="focusedField = null"
                  />
                  <div class="h-0.5 bg-neo-cyan/20 mt-1 transition-all duration-300" :class="focusedField === 'firstName' ? 'bg-neo-cyan w-full' : 'w-0'" />
                </div>
                <div class="form-field">
                  <label class="font-orbitron text-[9px] tracking-[0.3em] text-neo-cyan uppercase mb-2 block font-bold">Sobrenome</label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    required
                    class="neo-input-cyan"
                    placeholder="Sobrenome"
                    @focus="focusedField = 'lastName'"
                    @blur="focusedField = null"
                  />
                  <div class="h-0.5 bg-neo-cyan/20 mt-1 transition-all duration-300" :class="focusedField === 'lastName' ? 'bg-neo-cyan w-full' : 'w-0'" />
                </div>
              </div>
              <div class="form-field">
                <label class="font-orbitron text-[9px] tracking-[0.3em] text-neo-cyan uppercase mb-2 block font-bold">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="neo-input-cyan"
                  placeholder="email@exemplo.com"
                  @focus="focusedField = 'email'"
                  @blur="focusedField = null"
                />
                <div class="h-0.5 bg-neo-cyan/20 mt-1 transition-all duration-300" :class="focusedField === 'email' ? 'bg-neo-cyan w-full' : 'w-0'" />
              </div>
              <div class="form-field">
                <label class="font-orbitron text-[9px] tracking-[0.3em] text-neo-cyan uppercase mb-2 block font-bold">Mensagem</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  class="neo-input-cyan resize-none"
                  placeholder="Sua mensagem..."
                  @focus="focusedField = 'message'"
                  @blur="focusedField = null"
                />
                <div class="h-0.5 bg-neo-cyan/20 mt-1 transition-all duration-300" :class="focusedField === 'message' ? 'bg-neo-cyan w-full' : 'w-0'" />
              </div>
              <button type="submit" class="neo-btn w-full justify-center" style="background: #06b6d4">
                <Icon name="heroicons:paper-airplane" class="w-4 h-4" />
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div v-else class="border-4 border-neo-green p-12 text-center neo-glow-green">
            <div class="w-20 h-20 flex items-center justify-center border-4 border-neo-green mx-auto mb-4 neo-clip-diamond animate-scale-in">
              <Icon name="heroicons:check-circle" class="w-10 h-10 text-neo-green" />
            </div>
            <h3 class="font-orbitron text-xl text-neo-green mb-3 uppercase font-bold">Mensagem Enviada!</h3>
            <p class="font-rajdhani text-sm text-white/40">Obrigado pelo contato. Responderemos em breve.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
