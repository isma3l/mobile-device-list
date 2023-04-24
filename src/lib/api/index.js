import axios from 'axios'
import { urlKeys } from '@/constants'

const axiosConfig = {
  baseURL: urlKeys.baseUrl,
  headers: {
    'Content-type': 'application/json'
  },
  timeout: 15000
}

const apiClient = axios.create(axiosConfig)

export const get = async url => {
  const { data } = await apiClient.get(url)
  return data
}

export const post = async (url, body) => {
  const { data } = await apiClient.post(url, body)
  return data
}
