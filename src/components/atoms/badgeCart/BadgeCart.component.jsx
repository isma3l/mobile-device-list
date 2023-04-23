import PropTypes from 'prop-types'
import { HiShoppingCart } from 'react-icons/hi'

const BadgeCartComponent = ({ items }) => {
  return (
    <div className="flex gap-3 pr-5 items-center">
      <HiShoppingCart className="w-10 h-10 text-white" />
      <div className="bg-white text-black rounded-lg p-1.5 min-w-[40px] font-bold text-lg h-7 flex items-center justify-center">
        {items}
      </div>
    </div>
  )
}

BadgeCartComponent.propTypes = {
  items: PropTypes.number
}

export default BadgeCartComponent
