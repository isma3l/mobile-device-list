import PropTypes from 'prop-types'
import ItemListComponent from '../item/ProductItem.component'

const ProductListComponent = ({ products }) => {
  return (
    <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-32 justify-items-center">
      {products.map(item => (
        <ItemListComponent key={item.id} {...item} />
      ))}
    </div>
  )
}

ProductListComponent.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      brand: PropTypes.string,
      model: PropTypes.string,
      price: PropTypes.string,
      imgUrl: PropTypes.string
    })
  )
}

export default ProductListComponent
