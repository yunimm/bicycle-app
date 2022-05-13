import { defineStore } from "pinia"
import instance from '@/apis/instance'

export const useBikeStore = defineStore('bikeStore',{
  state: () => {
    return {
      staticData: [],
      dynamicData: [],
      city: 'Tainan',
      newData: [],
      keyword: '搜尋站點或鄰近地點',
      lat:'22.989704',
      lng:'120.201523',
      isLoading: false,
      isActive: false,
    }
  },
  getters: {

  },
  actions: {
    async getData() {
      try {
        this.isLoading = true
        this.staticData = (await instance.get(
          `api/advanced/v2/Bike/Station/NearBy?%24spatialFilter=nearby%28${this.lat}%2C%20${this.lng}%2C%201000%29&%24format=JSON`
        )).data
        console.log('拉取附近的站點,第一支')
        this.dynamicData = (await instance.get(
          `api/advanced/v2/Bike/Availability/NearBy?%24spatialFilter=nearby%28${this.lat}%2C%20${this.lng}%2C%201000%29&%24format=JSON`
        )).data
        console.log('拉第2支')
          await this.mixingData()
          await this.doAjax()
      } catch(e) {
        console.log(e)
      }
    },
    mixingData(){
      this.staticData.forEach((station) => {
        this.dynamicData.forEach((item) => {
          if (station.StationUID == item.StationUID) {
            let obj = {
              uId: station.StationUID,
              id: station.StationID,
              name: station.StationName,
              address: station.StationAddress.Zh_tw,
              status: item.ServiceStatus,
              rent: item.AvailableRentBikes,
              return: item.AvailableReturnBikes,
            }
            this.newData.push(obj)
          } 
        })
      })
      console.log('我執行完mixing了')
    },
    getUserLocation() {
      this.isActive = true
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.lat = position.coords.latitude
            this.lng = position.coords.longitude
            console.log('步驟ㄧ:取得座標')
            this.isActive = false
          },
          (error) => {
            console.log(error.message)
            errorMessage.value = error.message
          }
        )
      } else {
        console.log('你的瀏覽器不支援geolocation API')
      }
    },
    clearData() {
      this.newData = []
      console.log('我清掉囉')
    },
    doAjax() {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }
})
