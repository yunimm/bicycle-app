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
    L.marker([item.lat, item.lng]).bindPopup(item.id).addTo(map)
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
    .bindPopup('<b>所在位置</b>')
    .addTo(map)
}
function cleanMarker() {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer)
    }
  })
}
onMounted(() => {
  // 初始化地圖
  // initMap()
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
  {
    addMark()
  }
})
watch([lat, lng], () => {
  userMark()
})
</script>
<template>
  <!-- <loading
    :active.sync="isLoading"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="fullPage"
  ></loading> -->
  <div id="map" class="absolute bottom-0 z-0 h-[94%] w-full"></div>
  <BikeListPanel class="z-20" />
</template>
