import PropTypes from 'prop-types'
import { TextInput } from 'flowbite-react'
import { useTranslation } from 'react-i18next'

const FilterComponent = ({ label, value, onChange }) => {
  const { t } = useTranslation()

  return (
    <div className="flex items-center w-full self-end pr-6 justify-end">
      <div className="bg-black text-white rounded-lg p-1.5 min-w-[40px] font-bold text-lg h-7 flex items-center justify-center">
        {label}
      </div>
      <TextInput
        value={value}
        onChange={event => onChange(event.target.value)}
        type="text"
        placeholder={t('Pages.Home.placeHolderFilter')}
        className="w-80 ml-6"
      />
    </div>
  )
}

FilterComponent.propTypes = {
  label: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default FilterComponent
