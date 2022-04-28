<script setup>
import Navbar from '@/components/Navbar.vue'
import List from '@/components/List.vue'
</script>

<template>
  <main class="relative h-screen overflow-clip">
    <Navbar />
    <router-view />
    <list />
  </main>
</template>
