<script setup>
import BorrowInfo from '@/components/BorrowInfo.vue'
import ParkingInfo from '@/components/ParkingInfo.vue'
import { reactive } from 'vue'
const data = reactive([
  {
    location: '太原廣場12345566699999',
    status: ['可借可還', '只可借車', '只可停車', '站點施工中'],
    distance: 25,
    borrow: 43,
    parking: 4,
  },
  {
    location: '捷運台大醫院站(四三二一零)',
    status: ['可借可還', '只可借車', '只可停車', '站點施工中'],
    distance: 25,
    borrow: 0,
    parking: 25,
  },
])
</script>

<template>
  <div v-for="item in data" class="mb-9">
    <div class="mt-4 flex flex-nowrap items-center justify-between">
      <div class="flex items-center">
        <span
          class="mr-2 inline-block w-40 truncate text-[0.94rem] font-bold tracking-wide text-primary-500 xl:text-xl"
          >{{ item.location }}</span
        >
        <span class="fixState xl:hidden">{{ item.status[3] }}</span>
      </div>
      <div class="text-grey-500 xl:hidden">
        <font-awesome-icon icon="map-marker-alt" />
        <span class="ml-1 text-xs">距離{{ item.distance }}公尺</span>
      </div>
    </div>
    <ul class="mt-2 flex items-center justify-between gap-1 xl:gap-6">
      <BorrowInfo v-if="item.borrow === 0" class="isZero">
        <template v-slot:borrow-number>
          <span class="text-xl font-bold xl:text-2xl">{{ item.borrow }}</span>
        </template>
      </BorrowInfo>
      <BorrowInfo v-else-if="item.borrow < 5" class="isLimit">
        <template v-slot:borrow-number>
          <span class="text-xl font-bold xl:text-2xl">{{ item.borrow }}</span>
        </template>
      </BorrowInfo>
      <BorrowInfo v-else="item.borrow >= 5" class="isEnough">
        <template v-slot:borrow-number>
          <span class="text-xl font-bold xl:text-2xl">{{ item.borrow }}</span>
        </template>
      </BorrowInfo>

      <ParkingInfo v-if="item.parking === 0" class="isZero">
        <template v-slot:parking-number>
          <span class="text-xl font-bold xl:text-2xl">{{ item.parking }}</span>
        </template>
      </ParkingInfo>
      <ParkingInfo v-else-if="item.parking < 5" class="isLimit">
        <template v-slot:parking-number>
          <span class="text-xl font-bold xl:text-2xl">{{ item.parking }}</span>
        </template>
      </ParkingInfo>
      <ParkingInfo v-else="item.parking >= 5" class="isEnough">
        <template v-slot:parking-number>
          <span class="text-xl font-bold xl:text-2xl">{{ item.parking }}</span>
        </template>
      </ParkingInfo>
    </ul>
    <div class="mt-3 hidden xl:block">
      <div class="flex items-center justify-between">
        <span class="defaultState">{{ item.status[0] }}</span>
        <div class="text-grey-500">
          <font-awesome-icon class="xl:text-base" icon="map-marker-alt" />
          <span class="ml-1 text-xs xl:text-sm"
            >距離{{ item.distance }}公尺</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
