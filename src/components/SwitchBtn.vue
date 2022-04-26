<template>
  <div
    class="fixed top-32 left-1/2 flex h-[36px] w-[200px] -translate-x-1/2 justify-between rounded-[35px] bg-grey-100 px-1.5 py-1"
  >
    <button class="rounded-[16px] bg-primary-400 px-3 font-bold text-grey-100">
      <slot name="dark-icon"></slot>
      <slot name="dark-icon-name"></slot>
    </button>
    <button class="rounded-[16px] px-3 font-bold text-primary-400">
      <slot name="icon"></slot>
      <slot name="icon-name"></slot>
    </button>
  </div>
</template>
