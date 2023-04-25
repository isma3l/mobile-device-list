import PropTypes from 'prop-types'

const SelectComponent = ({
  options,
  label,
  onChange,
  name,
  value,
  placeholder,
  disabled
}) => {
  return (
    <div className="flex gap-2 justify-between w-4/5">
      <label className="font-semibold text-gray-600">{label}</label>
      <select
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={event => onChange(event.target.value)}
        disabled={disabled}
        className="w-64 h-8 py-0 px-2 rounded-md"
      >
        {options.map(value => {
          const { code, name } = value
          return (
            <option key={code} value={code}>
              {name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

SelectComponent.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      name: PropTypes.string
    })
  ),
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.number,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
}

export default SelectComponent
