import PropTypes from 'prop-types'

const ItemComponent = ({ label, value }) => {
  return (
    <div className="max-lg:flex-col flex justify-between w-5/6">
      <span className="font-semibold text-gray-600">{label}</span>
      <span>{value}</span>
    </div>
  )
}

ItemComponent.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
}

export default ItemComponent
