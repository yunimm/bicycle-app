<script setup>
import { storeToRefs } from 'pinia'
import { useBikeStore } from '@/stores/bikeStore'
const { newData } = storeToRefs(useBikeStore())

// 依照最近距離排序
function sortByDistance() {
  newData.value.sort((a, b) => a.betweens - b.betweens)
}
//依照可借車輛排序
function sortByRent() {
  newData.value.sort((a, b) => a.rent - b.rent)
}
//依照可還車輛排序
function sortByReturn() {
  newData.value.sort((a, b) => a.return - b.return)
}
</script>
<template>
  <div class="dropdown">
    <label
      tabindex="0"
      class="btn ml-3 h-[30px] min-h-[20px] w-[60px] rounded-md border border-primary-300 bg-grey-100 pl-0 pr-0 text-center text-xs font-bold leading-[30px] text-primary-300 hover:border-primary-500 hover:bg-white focus:bg-primary-100 focus:ring-1 focus:ring-primary-300 xl:m-1 xl:ml-3 xl:h-9 xl:w-20 xl:text-sm"
    >
      <font-awesome-icon icon="sort-amount-down" />
      排序
    </label>
    <ul
      tabindex="0"
      class="dropdown-content menu flex w-24 items-center justify-center divide-y rounded-md border-primary-300 bg-grey-100 text-xs leading-8 tracking-wider text-primary-300 shadow xl:ml-3 xl:p-2 xl:text-sm"
    >
      <li>
        <button
          class="active:bg-grey-500 xl:my-2"
          @click.stop.prevent="sortByDistance()"
        >
          距離較近
        </button>
      </li>
      <li>
        <button
          class="active:bg-grey-500 xl:my-2"
          @click.stop.prevent="sortByRent()"
        >
          可借車數
        </button>
      </li>
      <li>
        <button
          class="active:bg-grey-500 xl:my-2"
          @click.stop.prevent="sortByReturn()"
        >
          可停車數
        </button>
      </li>
    </ul>
  </div>
</template>
