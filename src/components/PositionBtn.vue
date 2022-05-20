<script setup>
import { useBikeStore } from '@/stores/bikeStore'
import { storeToRefs } from 'pinia'
const bikes = useBikeStore()
const { isActive } = storeToRefs(useBikeStore())
</script>
<template>
  <!-- <div class="relative h-full w-full"> -->
  <button
    :disabled="isActive"
    @click="bikes.getUserLocation()"
    class="absolute right-9 h-10 w-10 translate-y-2 rounded-full bg-primary-400 ring-primary-400 hover:bg-primary-500 focus:bg-primary-400 focus:ring-2 focus:ring-primary-500 disabled:bg-grey-300 sm:right-1/4 md:right-1/4 xl:right-1/3 xl:h-[60px] xl:w-[60px] xl:translate-y-3"
  >
    <font-awesome-icon
      class="pt-1 text-center text-xl text-grey-100 xl:text-3xl"
      icon="crosshairs"
    />
  </button>
  <!-- </div> -->
</template>
