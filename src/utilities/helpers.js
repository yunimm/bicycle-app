import axios from 'axios'

const baseURL = 'https://tdx.transportdata.tw/'

export const apiHelpers = axios.create([
  baseURL
])

