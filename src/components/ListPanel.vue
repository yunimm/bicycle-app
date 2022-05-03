<script setup>
import Searchbar from '@/components/Searchbar.vue'
import SortBtn from '@/components/SortBtn.vue'
import { ref } from 'vue'

const isActive = ref(false)

function switchPanel() {
  isActive.value = !isActive.value
}
</script>

<template>
  <div class="h-full bg-grey-500">
    <!-- 點擊後會向上展開 -->
    <div
      class="h-fll absolute -bottom-2/4 w-full shadow-lg"
      :class="{ isClickedPanel: isActive }"
    >
      <button
        @click.stop.prevent="switchPanel"
        class="absolute left-1/2 -translate-x-8 -translate-y-4 rounded-t-md bg-grey-100 px-6"
      >
        <font-awesome-icon
          v-if="isActive"
          class="mb-1 text-grey-400"
          icon="caret-down"
        />
        <font-awesome-icon
          v-else="isActive"
          class="mb-1 text-grey-400"
          icon="caret-up"
        />
      </button>
      <div class="h-[488px] rounded-t-lg bg-grey-100 py-5 px-6">
        <div class="flex">
          <Searchbar class="grow" />
          <SortBtn />
        </div>
        <slot name="card"></slot>
      </div>
    </div>
  </div>
</template>
