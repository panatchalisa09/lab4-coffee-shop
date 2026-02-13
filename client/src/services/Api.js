import axios from 'axios'
// 1. นำเข้า Store ที่เราสร้างไว้
import { useAuthenStore } from '@/stores/authen'

export default () => {
  // 2. ดึง Token ออกมา
  const authenStore = useAuthenStore()
  
  return axios.create({
    baseURL: 'http://localhost:8081/', // หรือ Port ที่คุณรัน server ไว้
    headers: {
      // 3. แนบ Token ไปในหัวจดหมาย (Header) ทุกครั้ง
      Authorization: `Bearer ${authenStore.token}`
    }
  })
}