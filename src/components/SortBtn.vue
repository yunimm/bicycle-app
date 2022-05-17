<script setup>
import { storeToRefs } from 'pinia'
import { useBikeStore } from '@/stores/bikeStore'
const { newData } = storeToRefs(useBikeStore())
function sortByDistance() {
  // newData.sort(function (x, y) {
  //   let a = newData.forEach((item) => {
  //     item.betweens
  //   })
  //   let b = 0
  //   return a - b
  // })
  console.log(newData)
  console.log('123')
}
</script>
<template>
  <div class="dropdown">
    <label
      tabindex="0"
      class="btn m-1 ml-3 min-h-[30px] min-w-[63px] rounded-md border border-primary-300 bg-grey-100 text-center text-xs font-bold leading-[30px] text-primary-300 focus:bg-primary-100 focus:ring-1 focus:ring-primary-300 xl:h-9 xl:w-20 xl:text-sm"
    >
      <font-awesome-icon icon="sort-amount-down" />
      排序
    </label>
    <ul
      tabindex="0"
      class="dropdown-content menu ml-3 flex w-24 items-center justify-center divide-y rounded-md border-primary-300 bg-grey-100 p-2 text-sm leading-8 tracking-wider text-primary-300 shadow"
    >
      <li><button @click="sortByDistance()">距離較近</button></li>
      <li><button>可借車數</button></li>
      <li><button>可還車數</button></li>
    </ul>
  </div>
</template>
