import { urlKeys, StorageKeys } from '@/constants'
import { post } from '@/lib/api'
import { storageDataWithTimeStamp } from '@/utils'

export const purchaseProduct = async data => {
  try {
    const product = await post(urlKeys.purchaseProduct, data)
    storageDataWithTimeStamp(product, StorageKeys.shoppingCart)

    return product
  } catch (error) {
    console.error('Error when purchasing a product.', error)
    throw error
  }
}
