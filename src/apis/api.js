import axios from 'axios'
import qs from 'qs'

const token = window.localStorage.getItem('token')
const instance = axios.create({
  baseURL: 'https://tdx.transportdata.tw/',
  headers: {   
  'content-type': 'application/x-www-form-urlencoded',
  'Authorization': 'Bearer' + token 
  },
})

function getToken() {
    const parameter = {
    grant_type: 'client_credentials',
    client_id: 'yuu9916-227e67ac-b78a-41bb',
    client_secret: 'd6552544-b840-4ba7-8b51-0ee7cb500e0a',
  }
  instance.post('auth/realms/TDXConnect/protocol/openid-connect/token',qs.stringify(parameter))
    .then((res) => {
      console.log(res.data)
      const { data } = res
      localStorage.setItem('token', data.access_token)
      // console.log(data.expires_in)

    })

    .catch((err) => console.log(err.message))
}


function getScenicSpot() {
  instance.get('api/basic/v2/Tourism/ScenicSpot')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => console.log(err.message))
}


//匯出其他api設定 
export const apiGetToken = data => bikeRequest.post('auth/realms/TDXConnect/protocol/openid-connect/token',data)

getToken()
getScenicSpot()
