import axios from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'
import qs from 'qs'
const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

// 添加请求拦截器
http.interceptors.request.use(
  function (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig<any> {
    // 在发送请求之前做些什么
    config.data = qs.stringify(config.data)
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    if(response.data.code === 0) {
      return response.data.data
    } else {
      return Promise.reject(response.data)
    }
  },
  function (error) {
    // 对响应错误做点什么
    console.log(error)
    if (error?.response?.staus === '403') {
      console.error('当前用户无权限')
    }
    return Promise.reject(error)
  }
)

export default http
