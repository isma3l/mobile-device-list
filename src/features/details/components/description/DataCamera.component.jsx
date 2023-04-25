import PropTypes from 'prop-types'

const CameraComponent = ({ options, label }) => {
  const data = typeof options === 'string' ? [options] : options

  return (
    <div className="flex flex-col w-5/6">
      <div>
        <p className="font-semibold text-gray-600">{label}</p>
        <div className="flex gap-6 pt-3 justify-center">
          {data
            .filter(value => value.length > 0)
            .map(value => (
              <span
                key={value}
                className="py-1 px-4 border rounded border-gray-950"
              >
                {value}
              </span>
            ))}
        </div>
      </div>
    </div>
  )
}

CameraComponent.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  label: PropTypes.string
}

export default CameraComponent
