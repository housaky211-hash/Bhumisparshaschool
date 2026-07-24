<template>
  <div class="relative min-h-screen bg-amoled-black">
    <CyberParticles />
    <ScanLine />
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
    <BackToTop />
  </div>
</template>
