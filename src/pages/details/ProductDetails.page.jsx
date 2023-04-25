import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { fetchProductDetails } from '@/services'
import {
  ProductImageComponent,
  ProductDescriptionComponent,
  ShoppingFormComponent,
  DetailSqueletonComponent
} from '@/features/details'

const ProductDetailsPage = () => {
  const urlParams = useParams()
  const [loadingFetch, setLoadingFetch] = useState(false)
  const [productDetails, setProductDetails] = useState()

  const { t } = useTranslation()

  useEffect(() => {
    const getProductsDetails = async () => {
      try {
        setLoadingFetch(true)
        const data = await fetchProductDetails(urlParams.productId)
        if (data) setProductDetails(data)
      } catch (err) {
        toast.error(t('Pages.Details.results.messageError'))
      } finally {
        setLoadingFetch(false)
      }
    }

    getProductsDetails()
  }, [])

  if (loadingFetch) return <DetailSqueletonComponent />

  return (
    <div className="flex max-sm:flex-col px-4 pt-10 pb-16 justify-between h-full">
      <ProductImageComponent imageUrl={productDetails?.imgUrl} />
      <div className="flex flex-col px-8 w-3/5 max-sm:w-full">
        <ProductDescriptionComponent {...(productDetails || {})} />
        <ShoppingFormComponent
          colors={productDetails?.options.colors ?? []}
          storages={productDetails?.options.storages ?? []}
          productId={productDetails?.id}
        />
      </div>
    </div>
  )
}

export default ProductDetailsPage
