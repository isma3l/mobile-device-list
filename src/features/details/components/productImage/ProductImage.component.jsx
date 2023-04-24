import PropTypes from 'prop-types'

const ProductImageComponent = ({ imageUrl }) => {
  return (
    <div className="w-2/5 max-sm:w-full max-sm:h-auto mb-12 flex justify-center">
      <img src={imageUrl} alt="mobile product" className="w-72 h-min" />
    </div>
  )
}

ProductImageComponent.propTypes = {
  imageUrl: PropTypes.string
}

export default ProductImageComponent
