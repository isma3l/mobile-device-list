import { Card } from 'flowbite-react'
import PropTypes from 'prop-types'
import { createLocaleFormatter } from '@/utils'

const formatPrice = createLocaleFormatter()

const ProductItemComponent = ({ id, brand, model, price, imgUrl }) => {
  return (
    <Card className="w-64 h-82">
      <div className="flex justify-center">
        <img src={imgUrl} alt="mobile product" width={190} height={252} />
      </div>
      <div>
        <p className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {model}
        </p>
        <p className="text-slate-600 font-light">Modelo {brand}</p>
        <p className="text-slate-600 font-light ">Desde</p>
        <p className="font-normal leading-3">
          {price !== '' ? formatPrice(price) : '-'}
        </p>
      </div>
    </Card>
  )
}
ProductItemComponent.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    brand: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.string,
    imgUrl: PropTypes.string
  })
}

export default ProductItemComponent
