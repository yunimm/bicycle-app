<template>
  <div class="absolute bottom-64 w-full shadow-lg xl:bottom-0">
    <button
      class="absolute left-1/2 -translate-x-8 -translate-y-4 rounded-t-md bg-grey-100 px-6 xl:left-[70%]"
    >
      <font-awesome-icon class="mb-1 text-grey-400" icon="caret-down" />
    </button>

    <div
      class="h-[213px] rounded-t-lg bg-white py-5 px-6 xl:flex xl:h-[308px] xl:flex-row-reverse xl:justify-evenly xl:gap-6 xl:rounded-none xl:py-8"
    >
      <div class="relative xl:w-3/4 xl:basis-[20%]">
        <img
          class="block h-[97px] bg-red-400 xl:rounded-lg"
          src=""
          alt="scenery photo on screen"
        />
        <div class="absolute bottom-0 right-0 p-2">
          <button
            class="h-7 w-7 rounded-full border border-primary-300 bg-white text-primary-300 hover:bg-primary-300 hover:text-grey-100 focus:bg-grey-100 focus:text-primary-300 focus:ring-1 focus:ring-primary-300 disabled:border-grey-100 disabled:bg-white disabled:text-grey-300"
          >
            <font-awesome-icon icon="globe-americas" />
          </button>
          <button
            class="ml-2 h-7 w-7 rounded-full border border-primary-300 bg-white text-primary-300 hover:bg-primary-300 hover:text-grey-100 focus:bg-grey-100 focus:text-primary-300 focus:ring-1 focus:ring-primary-300 disabled:border-grey-100 disabled:bg-white disabled:text-grey-300"
          >
            <font-awesome-icon icon="phone" />
          </button>
        </div>
      </div>
      <div
        class="text-xs text-grey-400 xl:basis-[35%] xl:text-base xl:tracking-widest"
      >
        <h3 class="text-lg font-bold text-primary-500 xl:text-3xl">
          國立中正紀念堂
        </h3>
        <div>
          <font-awesome-icon
            class="mb-1 leading-6 text-grey-400 xl:mb-0 xl:mr-2"
            icon="map-marker-alt"
          />
          <span>100台北市中山區中山南路21號 </span>
        </div>
        <div>
          <font-awesome-icon
            class="mb-1 text-grey-400 xl:mb-0 xl:mr-2"
            icon="clock"
          />
          <span>紀念堂開放時間: am09:00-pm06:00 (星期一不休館)</span>
        </div>
        <div class="hidden xl:block">
          <font-awesome-icon
            class="mb-1 text-grey-400 xl:mb-0 xl:mr-2"
            icon="phone"
          />
          <span>886-2-23431000</span>
        </div>
        <span class="hidden text-xs tracking-wide xl:block">
          白牆藍瓦，70公尺高聳立在紀念公園的中央，不論從哪個角度看過去，都很宏偉。國外觀光客來到臺灣，不論行程如何排，都一定會到這裡來參觀一下。紀念堂的下方有陳列和展覽，也有紀念品販售。紀念堂是為了紀念中華民國第一任總統蔣介石，他於1975年逝世，次年行政院就破土開建中正紀念堂，設計師是設計圓山大飯店的楊卓成。紀念堂原址是陸軍總部，當時是臺北市區內最大的軍區，據說從大陸運過來的黃金，就曾經存放在這個地方。紀念堂採用的藍白兩色，是國旗上面主要的顏色，紀念堂頂部天穹的裝飾是青天白日12道光芒，銅像朝西面對總統府和中國大陸，其中都有特殊的意義。隨著民主演進思想開放，紀念堂前的廣場
          已成了民主運動的集會場。
        </span>
      </div>
      <div class="xl:basis-[27%]"></div>
    </div>
  </div>
</template>
