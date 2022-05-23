<script setup>
import PositionBtn from '@/components/PositionBtn.vue'
import { storeToRefs } from 'pinia'
import { useToogleStore } from '@/stores/toogleStore'

const { isActive, isSwitch } = storeToRefs(useToogleStore())

function change() {
  isSwitch.value = !isSwitch.value
  // console.log('切換狀態了')
}
</script>
<template>
  <header
    class="fixed z-20 h-[34px] w-full bg-primary-400 xl:h-14 xl:px-[72px]"
  >
    <div
      class="flex h-full items-center justify-center py-2 px-5 text-grey-100"
    >
      <h1 class="p-auto flex h-full items-center justify-center">
        <img
          class="p-auto h-full xl:h-2/3"
          src="../assets/Logo.png"
          alt="logo on screen"
        />
      </h1>
    </div>
    <div
      @click.stop.prevent="change"
      class="fixed left-1/2 mt-3 flex h-9 w-[200px] -translate-x-1/2 justify-between rounded-[35px] bg-grey-100 px-1.5 py-1 xl:h-[60px] xl:w-[276px] xl:py-2 xl:px-3"
    >
      <button
        :class="{ active: isSwitch, textPrimary: isSwitch }"
        class="switch-ani relative rounded-2xl px-3 text-sm font-bold text-grey-100 xl:w-[144px] xl:rounded-[40px] xl:text-lg xl:tracking-wider"
      >
        <font-awesome-icon class="mr-1 xl:mr-2" icon="bicycle" />
        <span class="z-50">找單車</span>
      </button>
      <button
        :class="{ textWhite: isSwitch }"
        class="rounded-2xl px-3 text-sm font-bold text-primary-400 xl:w-[144px] xl:rounded-[40px] xl:text-lg xl:tracking-wider"
      >
        <font-awesome-icon class="mr-1 text-lg xl:mr-2" icon="route" />
        <span>找路線</span>
      </button>
    </div>
    <PositionBtn />
  </header>
</template>

<style>
.switch-ani::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #738047;
  border-radius: 40px;
  z-index: -1;
  transition: all 0.3s ease-in-out;
}
/* .switch-ani:active::after {
  transition: all 0.5s ease-in-out;
} */
.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #738047;
  border-radius: 40px;
  z-index: -1;
  transform: translateX(100%);
}
.textPrimary {
  color: #738047;
}
.textWhite {
  color: white;
}
/* switch-ani rwd */
@media (max-width: 1280px) {
  .active::after {
    transform: translateX(115%);
  }
}
</style>
