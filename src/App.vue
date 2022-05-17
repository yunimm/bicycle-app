<script setup>
import Navbar from '@/components/Navbar.vue'
</script>
<template>
  <Navbar class="z-50" />
  <main class="relative h-screen overflow-clip">
    <router-view />
  </main>
</template>
