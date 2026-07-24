<template>
  <div class="relative min-h-screen bg-neo-black neo-noise">
    <PsychedelicLines />
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
    <BackToTop />
  </div>
</template>
