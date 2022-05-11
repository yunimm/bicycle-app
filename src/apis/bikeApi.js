import instance from '@/apis/instance'

export const apiGetScenicSpot = () => instance.get('api/basic/v2/Tourism/ScenicSpot')
// 取得靜態車站資料
export const apiGetStatic =  () => instance.get('api/basic/v2/Bike/Station/')
export const apiGetDynamic = () => instance.get('api/basic/v2/Bike/Availability/{City}')
export const apiGetShape = () => instance.get('api/basic/v2/Cycling/Shape/{City}')