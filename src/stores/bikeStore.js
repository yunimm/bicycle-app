import { defineStore } from "pinia"
import instance from '@/apis/instance'

export const useBikeStore = defineStore('bikeStore',{
  state: () => {
    return {
      staticData: [],
      dynamicData: [],
      newData: [],
      keyword: '',
      lat:'25.04939',
      lng:'121.51796',
      isLoading: false,
      isActive: false,
      cardLat:'',
      cardLng:'',
    }
  },
  getters: {
    // 搜尋功能
    searchData() {
      return this.newData.filter(result => result.name.Zh_tw.match(this.keyword))
    }
  },
  actions: {
    // 取得api資料
    async getData() {
      try {
        this.isLoading = true
        this.staticData = (await instance.get(
          `api/advanced/v2/Bike/Station/NearBy?%24spatialFilter=nearby%28${this.lat}%2C%20${this.lng}%2C%201000%29&%24format=JSON`
        )).data
        this.dynamicData = (await instance.get(
          `api/advanced/v2/Bike/Availability/NearBy?%24spatialFilter=nearby%28${this.lat}%2C%20${this.lng}%2C%201000%29&%24format=JSON`
        )).data
          await this.mixingData()
          await this.nearAttractions()
          await this.doAjax()
      } catch(e) {
        console.log(e)
      }
    },
    // 合併不同api資料
    mixingData(){
      this.staticData.forEach((station) => {
        this.dynamicData.forEach((item) => {
          if (station.StationUID === item.StationUID) {
            let obj = {
              uId: station.StationUID,
              id: station.StationID,
              name: station.StationName,
              address: station.StationAddress.Zh_tw,
              lat:station.StationPosition.PositionLat,
              lng:station.StationPosition.PositionLon,
              status: item.ServiceStatus,
              rent: item.AvailableRentBikes,
              return: item.AvailableReturnBikes,
            }
            this.newData.push(obj)
          } 
        })
      })
    },
    // 取得使用者位置
    getUserLocation() {
      this.isActive = true
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.lat = position.coords.latitude
            this.lng = position.coords.longitude
            this.isActive = false
          },
          (error) => {
            console.log(error.message)
            errorMessage.value = error.message
          }
        )
      } else {
        alert('你的瀏覽器不支援geolocation API')
      }
    },
    // 清除newData資料
    clearData() {
      this.newData = []
    },
    // loading延遲
    doAjax() {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    },
    // 計算經緯度距離
    distance(lat1, lng1, lat2, lng2) {
      if (lat1 == lat2 && lng1 == lng2) {
        return 0
      } else {
        const radlat1 = (Math.PI * lat1) / 180
        const radlat2 = (Math.PI * lat2) / 180
        const theta = lng1 - lng2
        const radtheta = (Math.PI * theta) / 180
        let dist =
          Math.sin(radlat1) * Math.sin(radlat2) +
          Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
        if (dist > 1) {
          dist = 1
        }
        dist = Math.acos(dist)
        dist = (dist * 180) / Math.PI
        dist = dist * 60 * 1.1515
    
        // 轉為公里
        dist = dist * 1.609344
        return dist
      }
    },
    // 計算車位離使用者的距離
    nearAttractions(){
      // 使用者位置
      let lat1 = this.lat
      let lng1 = this.lng
      //計算車位離使用者的距離
      this.newData.forEach(ele => {
        let lat2 = ele.lat
        let lng2 = ele.lng
        let tmp  = this.distance(lat1, lng1, lat2, lng2)
        ele.betweens = `${Math.floor(tmp * 1000)}`
      })
    },
  }
})
