export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-07-01',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
  ],
  ssr: true,
  nitro: {
    output: { dir: 'dist' },
  },
  app: {
    baseURL: '/Bhumisparshaschool/',
    pageTransition: { name: 'morph', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      title: 'Bhumisparsha School | Cyber Dharma',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Bhumisparsha School — Arte, Dharma, Meio Ambiente e Tecnologia no Cyberpunk Magico.',
        },
        { name: 'theme-color', content: '#000000' },
        { property: 'og:title', content: 'Bhumisparsha School | Cyber Dharma' },
        {
          property: 'og:description',
          content: 'Arte, Dharma, Meio Ambiente e Tecnologia.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://bhumisparshaschool.org' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images/logo.png',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  icon: {
    size: '24px',
    class: 'icon',
  },
  image: {
    quality: 80,
    format: ['webp', 'avif'],
  },
  googleFonts: {
    families: {
      'Orbitron': [400, 500, 600, 700, 800, 900],
      'Rajdhani': [300, 400, 500, 600, 700],
      'Space Grotesk': [300, 400, 500, 600, 700],
      'Noto Sans JP': [300, 400, 500, 700],
    },
    display: 'swap',
  },
})
