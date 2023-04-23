import { urlKeys, StorageKeys } from '@/constants'
import { get } from '@/lib/api'
import {
  getLocalDataWithTimeStamp,
  storageDataWithTimeStamp,
  isLocalDataValid
} from '@/utils'

const fetchProductsFromApi = async () => {
  try {
    const products = await get(urlKeys.productsUrl)
    storageDataWithTimeStamp(products, StorageKeys.productsKey)

    return products
  } catch (error) {
    console.error('Error getting the list of products.', error)
    throw error
  }
}

/**
 * If the required local data exists and has not expired it is returned,
 * otherwise it is returned undefined
 */
const fetchValidPodCastFromLocalStorage = () => {
  const productData = getLocalDataWithTimeStamp(StorageKeys.productsKey)
  const dataValid = productData !== undefined && isLocalDataValid(productData)

  return dataValid ? productData.data : undefined
}

export const fetchProducts = async () => {
  const productsFromLocalStorage = fetchValidPodCastFromLocalStorage()
  if (productsFromLocalStorage) return productsFromLocalStorage

  const productsFromApi = await fetchProductsFromApi()
  return productsFromApi
}
