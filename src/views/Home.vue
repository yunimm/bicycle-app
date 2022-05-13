<script setup>
import BikeListPanel from '@/components/BikeListPanel.vue'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useBikeStore } from '@/stores/bikeStore'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
const bikes = useBikeStore()
const { isLoading } = storeToRefs(useBikeStore())

const fullPage = ref(true)

function onCancel() {
  console.log('User cancelled the loader.')
}
</script>
<template>
  <loading
    :active.sync="isLoading"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="fullPage"
  ></loading>
  <div class="h-full w-full bg-red-300"></div>
  <BikeListPanel />
</template>
