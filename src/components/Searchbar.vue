<script setup>
import { storeToRefs } from 'pinia'
import { useBikeStore } from '@/stores/bikeStore'
const { keyword } = storeToRefs(useBikeStore())
</script>

<template>
  <div class="relative flex items-center">
    <input
      v-model="keyword"
      type="text"
      class="form-control m-0 block w-full min-w-[252px] rounded border-none bg-grey-200 bg-clip-padding py-1.5 px-4 text-xs text-gray-700 outline-slate-600 transition ease-in-out focus:bg-white focus:ring-2 focus:ring-primary-300 xl:h-[36px] xl:text-sm"
      id="exampleFormControlInput1"
      placeholder="搜尋站點名稱"
    />
    <font-awesome-icon
      class="absolute right-[5%] text-grey-500 xl:text-xl"
      icon="search"
    />
  </div>
</template>
