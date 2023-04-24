import { StorageKeys, urlKeys } from '@/constants'
import { get } from '@/lib/api'
import {
  getLocalDataWithTimeStamp,
  isLocalDataValid,
  storageDataWithTimeStamp
} from '@/utils'

const fetchProductDetailsFromApi = async productId => {
  try {
    const productDetails = await get(urlKeys.productDetailsUrl(productId))

    storageDataWithTimeStamp(
      productDetails,
      StorageKeys.productDetailKey(productId)
    )

    return productDetails
  } catch (error) {
    console.error('Error getting the details of podcasts.', error)
    throw error
  }
}

const fetchValidProductDetailsFromLocalStorage = productId => {
  const productDetailsData = getLocalDataWithTimeStamp(
    StorageKeys.productDetailKey(productId)
  )
  const validStoredData =
    productDetailsData !== undefined && isLocalDataValid(productDetailsData)

  return validStoredData ? productDetailsData.data : undefined
}

export const fetchProductDetails = async productId => {
  const productDetailsData = fetchValidProductDetailsFromLocalStorage(productId)
  if (productDetailsData) return productDetailsData

  const data = await fetchProductDetailsFromApi(productId)
  return data
}
