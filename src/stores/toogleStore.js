import { defineStore } from "pinia"
export const useToogleStore = defineStore('toogleStore', { 
  state: () => {
    return {
      isSwitch: false,
    }
  },
})