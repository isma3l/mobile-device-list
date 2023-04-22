import { Card } from 'flowbite-react'
import PropTypes from 'prop-types'

const ProductItemComponent = ({ id, brand, model, price, imgUrl }) => {
  return (
    <div className="max-w-sm">
      <Card imgSrc={imgUrl}>
        <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {model}
        </h4>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Marca: {brand}
        </p>
        <p>Precio: {price}</p>
      </Card>
    </div>
  )
}
ProductItemComponent.PropTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    brand: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.string,
    imgUrl: PropTypes.string
  })
}

export default ProductItemComponent
