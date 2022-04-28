<script setup>
import Searchbar from '@/components/Searchbar.vue'
import SortBtn from '@/components/SortBtn.vue'
import ListCard from '@/components/ListCard.vue'
</script>

<template>
  <!-- 點擊後會向上展開 -->
  <!-- -bottom-2/4 -->
  <div class="h-fll absolute bottom-0 w-full shadow-lg">
    <button
      class="absolute left-1/2 -translate-x-8 -translate-y-4 rounded-t-md bg-grey-100 px-6"
    >
      <font-awesome-icon class="mb-1 text-grey-400" icon="caret-up" />
      <!-- <font-awesome-icon class="text-grey-400 mb-1" icon="caret-down" /> -->
    </button>
    <div class="h-[488px] rounded-t-lg bg-grey-100 py-5 px-6">
      <div class="flex">
        <Searchbar class="grow" />
        <SortBtn />
      </div>
      <div>
        <ListCard />
      </div>
    </div>
  </div>
</template>
