<script setup>
import ListPanel from '@/components/ListPanel.vue'
import RouteListCard from '@/components/RouteListCard.vue'
</script>
<template>
  <ListPanel>
    <template v-slot:card>
      <RouteListCard />
    </template>
  </ListPanel>
</template>
