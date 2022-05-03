<script setup>
import Searchbar from '@/components/Searchbar.vue'
import SortBtn from '@/components/SortBtn.vue'
// import TouristListCard from '@/components/TouristListCard.vue'
import { reactive } from 'vue'
import { ref } from 'vue'

const isActive = ref(false)

function switchPanel() {
  isActive.value = !isActive.value
}
const data = reactive([
  {
    id: 1,
    name: '國立中正紀念堂',
    category: '遊憩類',
    city: '台北市',
  },
  {
    id: 2,
    name: '台北自來水園區',
    category: '遊憩類',
    city: '台北市',
  },
  {
    id: 3,
    name: '北投溫泉博物館',
    category: '溫泉累',
    city: '台北市',
  },
  {
    id: 4,
    name: '北投溫泉博物館',
    category: '溫泉累',
    city: '台北市',
  },
])
</script>

<template>
  <div class="h-fll absolute bottom-0 w-full border shadow-2xl">
    <div class="h-[213px] rounded-t-lg bg-grey-100 py-5 px-6">
      <div class="flex">
        <Searchbar class="grow" />
        <SortBtn />
      </div>
      <div class="block overflow-x-auto overflow-y-hidden whitespace-nowrap">
        <div
          v-for="item in data"
          :key="item.id"
          class="mr-8 mt-4 inline-block h-[80px] w-[154px]"
        >
          <img
            class="h-full rounded-md bg-grey-300"
            src=""
            alt="scenery photo on screen"
          />
          <span class="text-md block font-bold text-primary-500">{{
            item.name
          }}</span>
          <div class="flex items-center justify-between">
            <span
              class="inline-block rounded-full bg-primary-400 px-2 py-0.5 text-xs text-white"
              >{{ item.category }}</span
            >
            <div class="right inline-block text-grey-500">
              <font-awesome-icon class="text-md" icon="map-marker-alt" />
              <span class="ml-1 text-xs">{{ item.city }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 觸發面板 -->
  <div class="absolute bottom-64 w-full shadow-lg">
    <button
      @click.stop.prevent="switchPanel"
      class="absolute left-1/2 -translate-x-8 -translate-y-4 rounded-t-md bg-grey-100 px-6"
    >
      <font-awesome-icon class="mb-1 text-grey-400" icon="caret-down" />
    </button>
    <div class="h-[213px] rounded-t-lg bg-grey-300 py-5 px-6">
      <div class="relative">
        <img
          class="block h-[97px] bg-red-400"
          src=""
          alt="scenery photo on screen"
        />
        <div class="absolute bottom-0 right-0 p-2">
          <button
            class="h-7 w-7 rounded-full border border-primary-300 bg-white text-primary-300 hover:bg-primary-300 hover:text-grey-100 focus:bg-grey-100 focus:text-primary-300 focus:ring-1 focus:ring-primary-300 disabled:border-grey-100 disabled:bg-white disabled:text-grey-300"
          >
            <font-awesome-icon icon="globe-americas" />
          </button>
          <button
            class="ml-2 h-7 w-7 rounded-full border border-primary-300 bg-white text-primary-300 hover:bg-primary-300 hover:text-grey-100 focus:bg-grey-100 focus:text-primary-300 focus:ring-1 focus:ring-primary-300 disabled:border-grey-100 disabled:bg-white disabled:text-grey-300"
          >
            <font-awesome-icon icon="phone" />
          </button>
        </div>
      </div>
      <div class="text-xs text-grey-400">
        <h3 class="text-lg text-primary-500">中正紀念堂</h3>
        <div>
          <font-awesome-icon class="mb-1 text-grey-400" icon="map-marker-alt" />
          <span>100台北市中山區中山南路21號 </span>
        </div>
        <div>
          <font-awesome-icon class="mb-1 text-grey-400" icon="clock" />
          <span>紀念堂開放時間: am09:00-pm06:00 (星期一不休館)</span>
        </div>
      </div>
    </div>
  </div>
</template>
