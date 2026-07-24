<script setup lang="ts">
defineProps<{
  pattern: 'velvet' | 'paper' | 'diamond' | 'dots' | 'grid' | 'waves' | 'hex' | 'diagonal'
  accent?: 'purple' | 'red' | 'green'
}>()
</script>

<template>
  <div class="absolute inset-0 pointer-events-none" :class="[
    pattern === 'velvet' && 'tex-velvet',
    pattern === 'paper' && 'tex-paper',
    pattern === 'diamond' && 'tex-diamond',
    pattern === 'dots' && 'tex-dots',
    pattern === 'grid' && 'tex-grid',
    pattern === 'waves' && 'tex-waves',
    pattern === 'hex' && 'tex-hex',
    pattern === 'diagonal' && 'tex-diagonal',
  ]">
    <div v-if="accent === 'purple'" class="absolute inset-0 bg-gradient-to-br from-lux-purple/[0.02] to-transparent" />
    <div v-else-if="accent === 'red'" class="absolute inset-0 bg-gradient-to-br from-lux-red/[0.02] to-transparent" />
    <div v-else-if="accent === 'green'" class="absolute inset-0 bg-gradient-to-br from-lux-green/[0.02] to-transparent" />
  </div>
</template>
