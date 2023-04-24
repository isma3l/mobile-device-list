import PropTypes from 'prop-types'
import { Breadcrumb } from 'flowbite-react'

const BreadCrumbComponent = ({ data }) => {
  return (
    <Breadcrumb>
      {data.map((value, index) => (
        <Breadcrumb.Item
          href={value.url}
          icon={value.icon}
          key={`breadcrumb-${index}`}
        >
          {value.label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}

BreadCrumbComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string,
      icon: PropTypes.elementType
    })
  )
}

export default BreadCrumbComponent
