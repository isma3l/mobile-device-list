import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchProductDetails } from '@/services'
import {
  ProductImageComponent,
  ProductDescriptionComponent,
  ShoppingFormComponent
} from '@/features/details'

const ProductDetailsPage = () => {
  const urlParams = useParams()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [productDetails, setProductDetails] = useState()

  useEffect(() => {
    const getProductsDetails = async () => {
      try {
        setLoading(true)
        const data = await fetchProductDetails(urlParams.productId)
        if (data) setProductDetails(data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getProductsDetails()
  }, [])

  const handleSubmit = value => {
    console.log(value)
  }

  if (loading) return 'cargando'
  if (error) return 'error'

  return (
    <div className="flex max-sm:flex-col px-4 py-10 justify-between h-full">
      <ProductImageComponent imageUrl={productDetails?.imgUrl} />
      <div className="flex flex-col px-8 w-3/5 max-sm:w-full">
        <ProductDescriptionComponent {...(productDetails || {})} />
        <ShoppingFormComponent
          colors={productDetails?.options.colors ?? []}
          storages={productDetails?.options.storages ?? []}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default ProductDetailsPage
