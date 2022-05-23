<template>
  <li class="xl:flex xl:flex-col xl:justify-center xl:pb-1">
    <div>
      <font-awesome-icon class="mr-1 text-xs xl:text-base" icon="bicycle" />
      <span class="mr-3 text-[0.94rem]">可租借</span>
    </div>
    <slot class="text-xl font-bold" name="borrow-number"></slot>
  </li>
</template>
