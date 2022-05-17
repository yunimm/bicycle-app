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

const center = [lat.value, lng.value]
let map
let markers

function initMap() {
  map = L.map('map').setView(center, 13)
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
}
function foundHandler(e) {
  marker.setLatLng(e.latlng) // 移動 marker
  // moveTo(map) // 移動到指定座標（平滑 || 縮放 效果）
  // panBy(map) // 移動 x, y 位置
  map.on('locationfound', foundHandler)
}
function addMark() {
  // let markerGroup = L.layerGroup().addTo(map)
  newData.value.forEach((item) => {
    markers = L.marker([item.lat, item.lng])
      .bindPopup('<b>Hello world!</b><br />I am a popup.')
      .addTo(map)
  })
}
function addPopup() {
  marker.bindPopup('<b>目前位置</b>').openPopup()
  map.locate({
    setView: true, // 是否讓地圖跟著移動中心點
    watch: true, // 是否要一直監測使用者位置
    maxZoom: 18, // 最大的縮放值
    enableHighAccuracy: true, // 是否要高精準度的抓位置
    timeout: 10000, // 觸發locationerror事件之前等待的毫秒數
  })
}
onMounted(() => {
  // 初始化地圖
  initMap()
})

watch(isLoading, () => {
  console.log('改變了')
  addMark()
})
</script>
<template>
  <loading
    :active.sync="isLoading"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="fullPage"
  ></loading>
  <div id="map" class="absolute bottom-0 z-0 h-[94%] w-full"></div>
  <BikeListPanel class="z-20" />
</template>
