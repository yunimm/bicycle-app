<script setup>
import BorrowInfo from '@/components/BorrowInfo.vue'
import ParkingInfo from '@/components/ParkingInfo.vue'
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useBikeStore } from '@/stores/bikeStore'

const bikes = useBikeStore()
bikes.getData()
const { newData, lat, lng, isLoading } = storeToRefs(useBikeStore())

watch([lat, lng], ([newLat, newLng]) => {
  {
    console.log('取得當前坐標', newLat, newLng)
    bikes.clearData()
    bikes.getData()
  }
})
</script>
<template>
  <div v-for="item in newData" class="mb-9" :id="item.uid">
    <div class="mt-4 flex flex-nowrap items-center justify-between">
      <div class="flex items-center">
        <span
          class="mr-2 inline-block w-40 truncate text-[0.94rem] font-bold tracking-wide text-primary-500 xl:text-xl"
          >{{ item.name.Zh_tw }}</span
        >
        <span
          v-show="item.rent && item.return > 0"
          class="defaultState xl:hidden"
          >可借可還</span
        >
        <span v-show="item.return === 0" class="singleService xl:hidden"
          >只可借車</span
        >
        <span v-show="item.rent === 0" class="singleService xl:hidden"
          >只可停車</span
        >
        <span v-show="item.rent && item.return === 0" class="fixState xl:hidden"
          >站點施工中</span
        >
      </div>
      <div class="text-grey-500 xl:hidden">
        <font-awesome-icon icon="map-marker-alt" />
        <span class="ml-1 text-xs">距離item.distance公尺</span>
      </div>
    </div>
    <ul class="mt-2 flex items-center justify-between gap-1 xl:gap-6">
      <BorrowInfo
        :class="{
          isZero: item.rent === 0,
          isLimit: item.rent < 5,
          isEnough: item.rent > 5,
        }"
      >
        <template v-slot:borrow-number>
          <span class="text-xl font-bold xl:text-2xl">{{ item.rent }}</span>
        </template>
      </BorrowInfo>
      <ParkingInfo
        :class="{
          isZero: item.rent === 0,
          isLimit: item.rent < 5,
          isEnough: item.rent > 5,
        }"
      >
        <template v-slot:parking-number>
          <span class="text-xl font-bold xl:text-2xl">{{ item.return }}</span>
        </template>
      </ParkingInfo>
    </ul>
    <div class="mt-3 hidden xl:block">
      <div class="flex items-center justify-between">
        <span v-show="item.rent && item.return > 0" class="defaultState"
          >可借可還</span
        >
        <span v-show="item.return === 0" class="singleService">只可借車</span>
        <span v-show="item.rent === 0" class="singleService">只可停車</span>
        <span v-show="item.rent && item.return === 0" class="fixState"
          >站點施工中</span
        >
        <div class="text-grey-500">
          <font-awesome-icon class="xl:text-base" icon="map-marker-alt" />
          <span class="ml-1 text-xs xl:text-sm">距離item.distance公尺</span>
        </div>
      </div>
    </div>
  </div>
</template>
