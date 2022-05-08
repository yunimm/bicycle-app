<template>
  <img
    class="min-h-[80px] w-[154px] bg-grey-300 xl:mt-6 xl:mb-2 xl:h-[155px] xl:w-full xl:rounded"
    src=""
    alt="scenery photo on screen"
  />
  <span
    class="block xl:inline-block xl:text-xl xl:font-bold xl:text-primary-500"
    >國立中正紀念堂</span
  >
  <span class="inline-block xl:hidden">國家風景區類</span>
  <div class="text-grey-500 xl:float-right xl:inline-block xl:text-grey-400">
    <font-awesome-icon class="text-md" icon="map-marker-alt" />
    <span class="ml-1 text-xs xl:text-sm">臺北市</span>
  </div>
  <div class="mt-1 text-xs">
    <span class="inline-block rounded-2xl bg-primary-400 py-1 px-2 text-white"
      >遊憩類</span
    >
    <span
      class="ml-2 inline-block rounded-2xl bg-primary-400 py-1 px-2 text-white"
      >都會公園</span
    >
    <button
      class="float-right h-7 w-7 rounded-full border border-primary-300 bg-white text-base text-primary-300 hover:bg-primary-300 hover:text-grey-100 focus:bg-grey-100 focus:text-primary-300 focus:ring-1 focus:ring-primary-300 disabled:border-grey-100 disabled:bg-white disabled:text-grey-300"
    >
      <font-awesome-icon icon="globe-americas" />
    </button>
  </div>
</template>
