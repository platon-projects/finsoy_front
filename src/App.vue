<template>
  <div class="min-h-screen bg-binance-dark text-white">
    <!-- Particle background only on login page -->
    <div v-if="$route.name === 'login'" id="particles-js" class="absolute inset-0 z-0"></div>
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Particles from 'particles.js'

const route = useRoute()

const initParticles = () => {
  if (route.name === 'login') {
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: '#F3BA2F' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#F3BA2F',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        }
      },
      retina_detect: true
    })
  }
}

onMounted(() => {
  initParticles()
})

watch(() => route.name, () => {
  if (route.name === 'login') {
    setTimeout(initParticles, 0) // Ensure particles initialize after route change
  }
})
</script>