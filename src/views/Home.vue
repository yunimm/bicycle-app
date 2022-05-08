<script setup>
import BikeListPanel from '@/components/BikeListPanel.vue'
import { reactive, onMounted } from 'vue'
import qs from 'qs'
import { apiGetToken } from '../apis/api.js'

const getBikeStation = reactive([
  {
    StationUID: 'TNN10',
    StationID: '10',
    StationName: '南科健康生活館站',
  },
  {
    StationUID: 'TNN11',
    StationID: '11',
    StationName: '霞客湖站',
  },
  {
    StationUID: 'TNN18',
    StationID: '18',
    StationName: '延平郡王祠站',
  },
])

const getBikeStatus = reactive([
  {
    StationUID: 'TNN10',
    ServiceStatus: 1,
    rentBikes: 6,
    returnBikes: 18,
  },
  {
    StationUID: 'TNN11',
    ServiceStatus: 2,
    rentBikes: 9,
    returnBikes: 12,
  },
  {
    StationUID: 'TNN18',
    ServiceStatus: 0,
    rentBikes: 6,
    returnBikes: 1,
  },
])
const newData = reactive([])

function data() {
  getBikeStation.forEach((station) => {
    getBikeStatus.forEach((item) => {
      if (station.StationUID == item.StationUID) {
        let obj = {
          uId: station.StationUID,
          id: station.StationID,
          name: station.StationName,
          status: item.ServiceStatus,
          rent: item.rentBikes,
          return: item.returnBikes,
        }

        newData.push(obj)
      }
    })
  })
  console.log(newData)
}
// function fetchData() {
//   bikeAPI
//     .getStaticBikes({
//       city: 'Tainan',
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// }

function getToken() {
  const parameter = {
    grant_type: 'client_credentials',
    client_id: 'yuu9916-227e67ac-b78a-41bb',
    client_secret: 'd6552544-b840-4ba7-8b51-0ee7cb500e0a',
  }
  apiGetToken(qs.stringify(parameter))
    .then((res) => {
      console.log(res.data)
      const { data } = res
      localStorage.setItem('token', data.access_token)
      console.log(data.expires_in)
    })

    .catch((err) => console.log(err.message))
}

onMounted(() => {
  // getToken()
})
</script>

<template>
  <div class="h-full w-full bg-red-300"></div>
  <BikeListPanel />
</template>
