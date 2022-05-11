<script setup>
import ListPanel from '@/components/ListPanel.vue'
import BikeListCard from '@/components/BikeListCard.vue'
import { reactive, onMounted, ref } from 'vue'
import instance from '@/apis/instance'

const staticBikeStation = reactive({ data: [] })
const dynamicBikeStation = reactive({ data: [] })
const newData = reactive({ data: [] })
const input = ref('Tainan')

const getData = async () => {
  try {
    const city = input.value
    const res = await instance.get(
      `api/basic/v2/Bike/Station/${city}?%24top=30&%24format=JSON`
    )
    staticBikeStation.data = res.data
    const dynamicRes = await instance.get(
      `api/basic/v2/Bike/Availability/${city}?%24top=30&%24format=JSON`
    )
    dynamicBikeStation.data = dynamicRes.data
  } catch (e) {
    console.log(e)
  }
}

function mixingData() {
  staticBikeStation.data.forEach((station) => {
    dynamicBikeStation.data.forEach((item) => {
      if (station.StationUID == item.StationUID) {
        let obj = {
          uId: station.StationUID,
          id: station.StationID,
          name: station.StationName,
          status: item.ServiceStatus,
          rent: item.AvailableRentBikes,
          return: item.AvailableReturnBikes,
        }
        newData.data.push(obj)
      }
    })
  })
  console.log(newData.data)
}

onMounted(async () => {
  await getData()
  await mixingData()
})
</script>
<template>
  <ListPanel>
    <template v-slot:card>
      <BikeListCard :newDataProps="newData" />
    </template>
  </ListPanel>
</template>
