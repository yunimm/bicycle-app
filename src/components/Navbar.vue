<template>
  <header class="fixed w-full">
    <div
      class="flex max-h-[34px] items-center justify-between bg-primary-400 p-2 text-grey-100"
    >
      <img class="max-h-[16px]" src="../assets/Logo.png" alt="logo on screen" />
      <font-awesome-icon icon="bars" />
    </div>
    <div class="bg-primary-100">
      <ul
        class="flex justify-between px-8 py-2 text-center text-xs font-bold text-primary-400"
      >
        <a href="">
          <font-awesome-icon icon="bicycle" />
          <li>找單車</li>
        </a>
        <a href="">
          <font-awesome-icon icon="route" />
          <li>找路線</li>
        </a>
        <a href="">
          <font-awesome-icon icon="umbrella-beach" />
          <li>找景點</li>
        </a>
      </ul>
      <div
        class="bg-accent-100 p-2 text-center text-xs font-bold text-accent-600"
      >
        <font-awesome-icon icon="phone" />
        <span class="mx-2">聯絡單車客服</span>
      </div>
    </div>
  </header>
</template>
