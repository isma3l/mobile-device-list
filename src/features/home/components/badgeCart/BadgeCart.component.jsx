import { Badge } from 'flowbite-react'
import PropTypes from 'prop-types'
import { HiShoppingCart } from 'react-icons/hi'

const BadgeCartComponent = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge icon={HiShoppingCart}>{`${items} productos`}</Badge>
    </div>
  )
}

BadgeCartComponent.propTypes = {
  items: PropTypes.number
}

export default BadgeCartComponent
