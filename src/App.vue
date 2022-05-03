<script setup>
import Navbar from '@/components/Navbar.vue'
</script>
<template>
  <Navbar />
  <main class="relative h-screen overflow-clip">
    <router-view />
  </main>
</template>
