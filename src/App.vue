<script setup>
import Navbar from '@/components/Navbar.vue'
import List from '@/components/List.vue'
import SwitchBtn from '@/components/SwitchBtn.vue'
</script>

<template>
  <Navbar />
  <main class="h-[667px] overflow-clip">
    <SwitchBtn>
      <template v-slot:dark-icon>
        <font-awesome-icon icon="bicycle" />
      </template>
      <template v-slot:dark-icon-name> 找單車 </template>
      <template v-slot:icon>
        <font-awesome-icon icon="square-parking" />
      </template>
      <template v-slot:icon-name> 找車位 </template>
    </SwitchBtn>
    <router-view />
    <list />
  </main>
</template>
