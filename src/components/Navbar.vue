<script setup>
import PositionBtn from '@/components/PositionBtn.vue'
import { ref } from 'vue'
const isActive = ref(false)
function switchNavbar() {
  isActive.value = !isActive.value
}
</script>
<template>
  <header
    class="fixed z-10 h-[34px] w-full bg-primary-400 xl:h-[76px] xl:px-[72px]"
  >
    <div
      class="flex h-full items-center justify-between py-2 px-5 text-grey-100"
    >
      <h1 class="p-auto flex h-full items-center justify-between">
        <img
          class="p-auto h-full xl:h-1/2"
          src="../assets/Logo.png"
          alt="logo on screen"
        />
      </h1>

      <!-- search-target desktop start-->
      <div class="hidden xl:block">
        <ul class="flex items-center justify-center gap-3 font-bold">
          <router-link
            :to="{ name: 'home' }"
            class="rounded-md bg-white px-4 py-1 text-primary-400 hover:bg-primary-100 focus:ring-4 focus:ring-primary-300 disabled:bg-grey-300 disabled:text-grey-300"
          >
            <font-awesome-icon icon="bicycle" />
            <li class="inline-block pl-1 text-sm">找單車</li>
          </router-link>
          <router-link
            :to="{ name: 'route' }"
            class="rounded-md bg-white px-4 py-1 text-primary-400 hover:bg-primary-100 focus:ring-4 focus:ring-primary-300 disabled:bg-grey-300 disabled:text-grey-300"
          >
            <font-awesome-icon icon="route" />
            <li class="inline-block pl-1 text-sm">找路線</li>
          </router-link>
          <router-link
            :to="{ name: 'tourist-spot' }"
            class="rounded-md bg-white px-4 py-1 text-primary-400 hover:bg-primary-100 focus:ring-4 focus:ring-primary-300 disabled:bg-grey-300 disabled:text-grey-300"
          >
            <font-awesome-icon icon="umbrella-beach" />
            <li class="inline-block pl-1 text-sm">找景點</li>
          </router-link>
        </ul>
      </div>
      <!-- search-target desktop end-->
      <!-- hamburger start -->
      <font-awesome-icon
        @click.stop.prevent="switchNavbar"
        class="cursor-pointer xl:hidden"
        icon="bars"
      />
    </div>
    <div v-show="isActive" class="bg-primary-100 xl:hidden">
      <ul
        class="flex justify-between px-8 py-2 text-center text-xs font-bold text-primary-400"
      >
        <router-link :to="{ name: 'home' }">
          <font-awesome-icon icon="bicycle" />
          <li>找單車</li>
        </router-link>
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
    <!-- hamburger end -->
    <!-- search-target mobile -->
    <div
      v-if="$route.name === 'route' || $route.name === 'home'"
      class="fixed left-1/2 z-10 mt-3 flex h-9 w-[200px] -translate-x-1/2 justify-between rounded-[35px] bg-grey-100 px-1.5 py-1 xl:h-[60px] xl:w-[276px] xl:py-2 xl:px-3"
    >
      <button
        class="switchAni rounded-2xl bg-primary-400 px-3 font-bold text-grey-100 xl:w-[144px] xl:rounded-[40px] xl:text-lg xl:tracking-wider"
      >
        <font-awesome-icon class="mr-1 xl:mr-2" icon="bicycle" />
        <span class="z-50">找單車</span>
      </button>
      <button
        class="rounded-2xl px-3 font-bold text-primary-400 xl:w-[144px] xl:rounded-[40px] xl:text-lg xl:tracking-wider"
      >
        <font-awesome-icon class="mr-1 text-lg xl:mr-2" icon="square-parking" />
        <span>找車位</span>
      </button>
    </div>

    <div
      v-else="$route.name === 'tourist-spot'"
      class="fixed left-1/2 z-10 mt-3 flex h-9 w-[200px] -translate-x-1/2 justify-between rounded-[35px] bg-grey-100 px-1.5 py-1 xl:h-[60px] xl:w-[276px] xl:py-2 xl:px-3"
    >
      <button
        class="rounded-2xl bg-primary-400 px-3 font-bold text-grey-100 xl:w-[144px] xl:rounded-[40px] xl:text-lg xl:tracking-wider"
      >
        <font-awesome-icon class="mr-1" icon="umbrella-beach" />
        <span>找景點</span>
      </button>
      <button
        class="rounded-2xl px-3 font-bold text-primary-400 xl:w-[144px] xl:rounded-[40px] xl:text-lg xl:tracking-wider"
      >
        <font-awesome-icon class="mr-1 text-lg" icon="utensils" />
        <span>找餐廳</span>
      </button>
    </div>
    <PositionBtn />
  </header>
</template>
