<template>
  <li class="xl:flex xl:flex-col xl:justify-center xl:pb-1">
    <div>
      <font-awesome-icon class="mr-1 text-xs xl:text-base" icon="parking" />
      <span class="mr-3 text-[0.94rem]">可停車</span>
    </div>
    <slot class="text-xl font-bold" name="parking-number"></slot>
  </li>
</template>
