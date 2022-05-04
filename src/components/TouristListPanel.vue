<script setup>
import Searchbar from '@/components/Searchbar.vue'
import SortBtn from '@/components/SortBtn.vue'
import ListPanel from '@/components/ListPanel.vue'
import TouristListCard from '@/components/TouristListCard.vue'
import TouristDetailPanel from '@/components/TouristDetailPanel.vue'
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
  <div class="absolute bottom-0 w-full shadow-2xl xl:hidden">
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

  <TouristDetailPanel />

  <template class="hidden xl:block">
    <ListPanel>
      <template v-slot:card>
        <TouristListCard />
      </template>
    </ListPanel>
  </template>
</template>
