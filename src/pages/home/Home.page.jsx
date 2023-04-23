import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ProductListComponent,
  HomeSqueletonComponent,
  FilterComponent
} from '@/features/home'
import { fetchProducts } from '@/services'
import { MessageComponent } from '@/components/atoms'

const HomePage = () => {
  const [error, setError] = useState(false)
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([])
  const { t } = useTranslation()

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true)
        const data = await fetchProducts()
        setProducts(data)
        setFilteredProducts(data ?? [])
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  const handleChange = value => {
    const filteredList = products?.filter(product => {
      return (
        product.brand.toLowerCase().search(value.toLowerCase()) !== -1 ||
        product.model.toLowerCase().search(value.toLowerCase()) !== -1
      )
    })
    setQuery(value)
    setFilteredProducts(filteredList)
  }

  return (
    <div className="flex flex-col py-6 w-10/12 mx-auto">
      {error ? (
        <MessageComponent message={t('Pages.Home.messageError')} />
      ) : loading ? (
        <HomeSqueletonComponent />
      ) : (
        <>
          <FilterComponent
            label={filteredProducts.length}
            value={query}
            onChange={handleChange}
          />
          <ProductListComponent products={filteredProducts} />
        </>
      )}
    </div>
  )
}

export default HomePage
