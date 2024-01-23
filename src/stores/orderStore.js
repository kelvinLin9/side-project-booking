import { defineStore } from "pinia"
import { ref } from 'vue'
const { VITE_URL } = import.meta.env
import axios from 'axios'
// import { Toast, Alert } from '@/mixins/swal'
// import { useRoute } from 'vue-router'


export const useOrderStore = defineStore('order', () => {
  // const route = useRoute()
  
  const orderList = ref([])
  const order = ref({})
  const orderTemp = ref(
    {
      "roomId": "65abd1f2f99f27e267fb3cde",
      "checkInDate": "2023/06/18",
      "checkOutDate": "2023/06/19",
      "peopleNum": 2,
      "userInfo": {
        "address": {
          "zipcode": 802,
          "detail": "文山路23號"
        },
        "name": "Joanne Chen",
        "phone": "0912345678",
        "email": "example@gmail.com"
      }
    }
  )


  // front
  const getFrontOrders = () => {
    const url = `${VITE_URL}/api/v1/orders/`
    axios.get(url)
      .then(res => {
        console.log(res)
        console.log(res.data.result)
        orderList.value = res.data.result
      })
      .catch(err => {
        console.log('getFrontOrders 失敗',err)
      })
  }

  const getFrontOrder = () => {
    // const url = `${VITE_URL}/api/v1/order/${route.params.id}`
    const url = `${VITE_URL}/api/v1/orders/65ac8c5080ae3e636b421c46`
    axios.get(url)
      .then(res => {
        console.log('getFrontOrder 取得單一資料',res)
        order.value = res.data.reslut
      })
      .catch(err => {
        console.log('getFrontOrder 失敗',err)
      })
  }

  const createOrder = () => {
    const url = `${VITE_URL}/api/v1/orders/`
    axios.post(url, orderTemp.value)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteFrontOrder = () => {
    // const url = `${VITE_URL}/api/v1/order/${route.params.id}`
    const url = `${VITE_URL}/api/v1/orders/65ac8c5080ae3e636b421c46`
    axios.delete(url)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }


  // admin
  const getOrders = () => {
    const url = `${VITE_URL}/api/v1/admin/orders/`
    axios.get(url)
      .then(res => {
        console.log(res)
        orderList.value = res.data.result
      })
      .catch(err => {
        console.log(err)
      })
  }

  const editOrder = () => {
    // const url = `${VITE_URL}/api/v1/admin/orders/${route.params.id}`
    const url = `${VITE_URL}/api/v1/admin/orders/65ac8c5080ae3e636b421c46`
    axios.put(url)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteOrder = () => {
    // const url = `${VITE_URL}/api/v1/admin/orders/${route.params.id}`
    const url = `${VITE_URL}/api/v1/admin/orders/65ac8c5080ae3e636b421c46`
    axios.delete(url)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // 地址無法取得
  const address = () => {
    const url = 'https://gist.githubusercontent.com/abc873693/2804e64324eaaf26515281710e1792df/raw/a1e1fc17d04b47c564bbd9dba0d59a6a325ec7c1/taiwan_districts.json'
    axios.get(url)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return {
    orderList,
    order,
    orderTemp,

    getFrontOrders,
    getFrontOrder,
    createOrder,
    deleteFrontOrder,
    getOrders,
    editOrder,
    deleteOrder,
    address
  }
})