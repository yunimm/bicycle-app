<script setup>
import Searchbar from '@/components/Searchbar.vue'
import SortBtn from '@/components/SortBtn.vue'
import { ref } from 'vue'

const isActive = ref(false)
const keyword = ref('')
function switchPanel() {
  isActive.value = !isActive.value
}
</script>

<template>
  <!-- 點擊後會向上展開 -->
  <div
    class="absolute -bottom-1/3 h-[488px] w-full shadow-lg xl:bottom-1/2 xl:ml-12 xl:h-[80%] xl:w-[425px] xl:translate-y-[55%]"
    :class="{ isClickedPanel: isActive }"
  >
    <button
      @click.stop.prevent="switchPanel"
      class="absolute left-1/2 -translate-x-8 -translate-y-4 rounded-t-md bg-grey-100 px-6 xl:hidden"
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
    <div
      class="h-full overflow-y-auto rounded-t-lg bg-grey-100 py-5 px-6 xl:rounded-lg"
    >
      <div class="flex">
        <Searchbar class="grow" />
        <SortBtn />
      </div>
      <slot name="card"></slot>
    </div>
  </div>
</template>
