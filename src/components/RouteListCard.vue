<script setup>
import { reactive } from 'vue'
const data = reactive([
  {
    location: '中正路(南側)',
    city: '臺北市',
    start: '承德路5段',
    end: '雨農路',
    distance: 3.4,
  },
  {
    location: '中華公園周邊',
    city: '臺北市',
    start: '敦化北路145巷',
    end: '民生東路4段80巷',
    distance: 3.4,
  },
])
</script>

<template>
  <div v-for="item in data" class="mb-8">
    <div class="mt-4 flex flex-nowrap items-center justify-between">
      <div class="flex items-center">
        <span
          class="mr-2 inline-block w-40 truncate text-lg font-bold tracking-wide text-primary-500"
          >{{ item.location }}</span
        >
      </div>
      <div class="text-grey-500">
        <font-awesome-icon class="text-md" icon="map-marker-alt" />
        <span class="ml-1 text-xs">{{ item.city }}</span>
      </div>
    </div>
    <div class="mt-3 flex h-6 w-full gap-1 text-primary-500">
      <span
        class="inline-block w-[8%] rounded bg-primary-100 text-center text-xs leading-[24px]"
        >起</span
      >
      <span
        class="inline-block w-[90%] rounded bg-primary-100 pl-2 text-xs leading-[24px]"
        >{{ item.start }}</span
      >
    </div>
    <div class="mt-2 flex h-6 w-full gap-1 text-primary-500">
      <span
        class="inline-block w-[8%] rounded bg-primary-100 text-center text-xs leading-[24px]"
        >迄</span
      >
      <span
        class="inline-block w-[90%] rounded bg-primary-100 pl-2 text-xs leading-[24px]"
        >{{ item.end }}</span
      >
    </div>
    <div class="mt-2 text-right text-grey-500">
      <font-awesome-icon class="text-md mr-1" icon="route" />
      <span class="inline-block text-xs">總長{{ item.distance }}公里</span>
    </div>
  </div>
</template>
