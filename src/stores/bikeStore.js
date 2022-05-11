import { defineStore } from "pinia";
import instance from '@/apis/instance'

export const useBikeStore = defineStore('bikeStore',{
  state: () => {
    return {
      staticData: [],
      dynamicData: [],
      city: 'Tainan',
      newData: [],
      keyword: '預設值'
    }
  },
  getters: {
    mixingData:(state) => {
      state.staticData.forEach((station) => {
        state.dynamicData.forEach((item) => {
          if (station.StationUID == item.StationUID) {
            let obj = {
              uId: station.StationUID,
              id: station.StationID,
              name: station.StationName,
              status: item.ServiceStatus,
              rent: item.AvailableRentBikes,
              return: item.AvailableReturnBikes,
            }
            state.newData.push(obj)
          }
        })
      })
      console.log('鳳梨資料',state.newData)
    }
  },
  actions: {
    async getData() {
      try {
        this.staticData = (await instance.get(
          `api/basic/v2/Bike/Station/${this.city}?%24top=30&%24format=JSON`
        )).data
        this.dynamicData = (await instance.get(
          `api/basic/v2/Bike/Availability/${this.city}?%24top=30&%24format=JSON`
        )).data

      } catch(e) {
        console.log(e)
      }
    }
  }
})