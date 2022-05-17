<script setup>
import ListPanel from '@/components/ListPanel.vue'
import BikeListCard from '@/components/BikeListCard.vue'
</script>
<template>
  <ListPanel>
    <template v-slot:card>
      <BikeListCard />
    </template>
  </ListPanel>
</template>
