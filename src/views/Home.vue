<script setup>
import SwitchBtn from '@/components/SwitchBtn.vue'
import PositionBtn from '@/components/PositionBtn.vue'
</script>
<template>
  <div class="map h-full bg-gray-600">
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
    <PositionBtn />
  </div>
</template>
