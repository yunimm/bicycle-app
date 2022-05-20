<script setup>
import BikeListPanel from '@/components/BikeListPanel.vue'
import { ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useBikeStore } from '@/stores/bikeStore'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import L from 'leaflet'

const { lat, lng, isLoading, newData } = storeToRefs(useBikeStore())
const fullPage = ref(true)

function onCancel() {
  console.log('User cancelled the loader.')
}

// 初始化地圖
let map = {}

// 車站標記
function addMark() {
  newData.value.forEach((item) => {
    L.marker([item.lat, item.lng])
      .bindPopup(
        `
        <h2 class="text-base text-primary-500 font-bold">${item.name.Zh_tw}</h2>
        <div class="flex mt-1 justify-between">
          <div class="flex gap-2">
            <p class="tracking-wider flex justify-center items-center w-24 h-7 text-sm bg-primary-100 text-primary-500 rounded">可租借
              <span class="text-xl font-bold mx-1">${item.rent}</span>輛
            </p>
            <p class="tracking-wider rounded flex justify-center items-center w-24 h-7 text-sm bg-primary-100 text-primary-500">可歸還
              <span class="text-xl font-bold mx-1">${item.return}</span>輛
            </p>
          </div>
          <p class="leading-7 tracking-wider text-sm text-grey-500">距離${item.betweens}公尺
          </p>
        </div>
        `,
        {
          closeButton: false,
          className: 'stationPopup',
        }
      )
      .addTo(map)
  })
}
// 使用者標記
function userMark() {
  const myIcon = L.icon({
    iconUrl: '../src/assets/user-position.png',
    iconSize: [50, 50],
  })
  map.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer)
    }
  })
  L.marker([lat.value, lng.value], { icon: myIcon })
    .bindPopup(
      '<h2 class="text-base text-primary-500 font-bold">目前位置</h2>',
      { closeButton: false }
    )
    .addTo(map)
}
onMounted(() => {
  // 初始化地圖
  map = L.map('map').setView([lat.value, lng.value], 13)
  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/dark-v10',
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        'pk.eyJ1IjoieXV1OTkxNiIsImEiOiJjbDM5ZzR6MWwwOWo3M2JtbzVxMGowb2lhIn0.ob6jktqszpw5oXjGAAPy0g',
    }
  ).addTo(map)
  userMark()
  addMark()
})

// 參數改變就重繪
watch(isLoading, () => {
  addMark()
})
watch([lat, lng], () => {
  userMark()
})
</script>
<template>
  <loading
    :active.sync="isLoading"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="fullPage"
  >
    <div class="loadingio-spinner-ellipsis-arrs646dil">
      <div class="ldio-3oqr3et266e">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </loading>
  <div id="map" class="absolute bottom-0 z-0 h-[100%] w-full"></div>
  <BikeListPanel class="z-20" />
</template>
<style>
.stationPopup {
  width: 344px;
  height: 84px;
  border-radius: 16px;
  margin-bottom: 40px;
}
.leaflet-popup-tip {
  width: 0px;
  height: 0px;
}
.leaflet-popup-content-wrapper {
  border: 3px solid #a4b375;
}
.leaflet-popup-content p {
  margin: 8px 0px;
}
.leaflet-top .leaflet-control {
  margin-top: 65px;
}
/* loading樣式 */
@keyframes ldio-3oqr3et266e {
  0% {
    transform: translate(12px, 80px) scale(0);
  }
  25% {
    transform: translate(12px, 80px) scale(0);
  }
  50% {
    transform: translate(12px, 80px) scale(1);
  }
  75% {
    transform: translate(80px, 80px) scale(1);
  }
  100% {
    transform: translate(148px, 80px) scale(1);
  }
}
@keyframes ldio-3oqr3et266e-r {
  0% {
    transform: translate(148px, 80px) scale(1);
  }
  100% {
    transform: translate(148px, 80px) scale(0);
  }
}
@keyframes ldio-3oqr3et266e-c {
  0% {
    background: #e15b64;
  }
  25% {
    background: #abbd81;
  }
  50% {
    background: #f8b26a;
  }
  75% {
    background: #f47e60;
  }
  100% {
    background: #e15b64;
  }
}
.ldio-3oqr3et266e div {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform: translate(80px, 80px) scale(1);
  background: #e15b64;
  animation: ldio-3oqr3et266e 1s infinite cubic-bezier(0, 0.5, 0.5, 1);
}
.ldio-3oqr3et266e div:nth-child(1) {
  background: #f47e60;
  transform: translate(148px, 80px) scale(1);
  animation: ldio-3oqr3et266e-r 0.25s infinite cubic-bezier(0, 0.5, 0.5, 1),
    ldio-3oqr3et266e-c 1s infinite step-start;
}
.ldio-3oqr3et266e div:nth-child(2) {
  animation-delay: -0.25s;
  background: #e15b64;
}
.ldio-3oqr3et266e div:nth-child(3) {
  animation-delay: -0.5s;
  background: #f47e60;
}
.ldio-3oqr3et266e div:nth-child(4) {
  animation-delay: -0.75s;
  background: #f8b26a;
}
.ldio-3oqr3et266e div:nth-child(5) {
  animation-delay: -1s;
  background: #abbd81;
}
.loadingio-spinner-ellipsis-arrs646dil {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: rgba(0, 0, 0, 0);
}
.ldio-3oqr3et266e {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
</style>
