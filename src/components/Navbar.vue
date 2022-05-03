<script setup>
import { ref } from 'vue'
const isActive = ref(false)
function switchNavbar() {
  isActive.value = !isActive.value
}
</script>
<template>
  <header class="fixed z-10 w-full">
    <div
      class="flex max-h-[34px] items-center justify-between bg-primary-400 p-2 text-grey-100"
    >
      <img class="max-h-[16px]" src="../assets/Logo.png" alt="logo on screen" />
      <font-awesome-icon
        @click.stop.prevent="switchNavbar"
        class="cursor-pointer"
        icon="bars"
      />
    </div>

    <div v-show="isActive" class="bg-primary-100">
      <ul
        class="flex justify-between px-8 py-2 text-center text-xs font-bold text-primary-400"
      >
        <a href="">
          <font-awesome-icon icon="bicycle" />
          <li>找單車</li>
        </a>
        <router-link :to="{ name: 'route' }">
          <font-awesome-icon icon="route" />
          <li>找路線</li>
        </router-link>
        <router-link :to="{ name: 'tourist-spot' }">
          <font-awesome-icon icon="umbrella-beach" />
          <li>找景點</li>
        </router-link>
      </ul>
      <div
        class="bg-accent-100 p-2 text-center text-xs font-bold text-accent-600"
      >
        <font-awesome-icon icon="phone" />
        <span class="mx-2">聯絡單車客服</span>
      </div>
    </div>
    <!-- 切換尋找類別按鈕 -->
    <div
      v-if="$route.name === 'route' || $route.name === 'home'"
      class="fixed left-1/2 z-10 mt-3 flex h-[36px] w-[200px] -translate-x-1/2 justify-between rounded-[35px] bg-grey-100 px-1.5 py-1 after:top-[10%]"
    >
      <button
        class="rounded-[16px] bg-primary-400 px-3 font-bold text-grey-100"
      >
        <font-awesome-icon class="mr-1" icon="bicycle" />
        <span>找單車</span>
      </button>
      <button class="rounded-[16px] px-3 font-bold text-primary-400">
        <font-awesome-icon class="mr-1 text-lg" icon="square-parking" />
        <span>找車位</span>
      </button>
    </div>
    <div
      v-else="$route.name === 'tourist-spot'"
      class="fixed left-1/2 z-10 mt-3 flex h-[36px] w-[200px] -translate-x-1/2 justify-between rounded-[35px] bg-grey-100 px-1.5 py-1 after:top-[10%]"
    >
      <button
        class="rounded-[16px] bg-primary-400 px-3 font-bold text-grey-100"
      >
        <font-awesome-icon class="mr-1" icon="umbrella-beach" />
        <span>找景點</span>
      </button>
      <button class="rounded-[16px] px-3 font-bold text-primary-400">
        <font-awesome-icon class="mr-1 text-lg" icon="utensils" />
        <span>找餐廳</span>
      </button>
    </div>
  </header>
</template>
