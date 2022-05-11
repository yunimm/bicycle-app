import axios from 'axios'
import qs from 'qs'

const token = window.localStorage.getItem('token')
const setSeconds = window.localStorage.getItem('set_seconds')
const resultTime = setSeconds - new Date().getTime() 

const parameter = {
  grant_type: 'client_credentials',
  client_id: 'yuu9916-227e67ac-b78a-41bb',
  client_secret: 'd6552544-b840-4ba7-8b51-0ee7cb500e0a',
}

const instance = axios.create({
  baseURL: 'https://tdx.transportdata.tw/',
  headers: {   
  'content-type': 'application/x-www-form-urlencoded',
  'Authorization': 'Bearer' + token 
  },
})


// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
)

getToken()

function removeToken() {
  localStorage.removeItem('token')
  localStorage.removeItem('exp')
  localStorage.removeItem('now')
}

function getToken() {
  if(resultTime <= 3600) {
    removeToken()
    instance.post('auth/realms/TDXConnect/protocol/openid-connect/token',qs.stringify(parameter))
    .then((res) => {
      const { access_token,expires_in } = res.data
      // 當前時間加上過期時間
      const expiresTime = new Date().getTime() + expires_in * 1000
      localStorage.setItem('token', access_token)
      localStorage.setItem('exp', expires_in)
      localStorage.setItem('set_Date', new Date(expiresTime))
      localStorage.setItem('set_seconds',expiresTime)
    }).catch((err) => console.log(err.message))
  } 
}

export default instance


