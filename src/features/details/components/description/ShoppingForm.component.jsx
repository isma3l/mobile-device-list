import PropTypes from 'prop-types'
import { Spinner } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { purchaseProduct } from '@/services'

const Options = ({ options, label, onChange, name, value, placeholder }) => {
  return (
    <div className="flex gap-2 justify-between w-4/5">
      <label className="font-semibold text-gray-600">{label}</label>
      <select
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={event => onChange(event.target.value)}
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

const ShoppingFormComponent = ({ colors, storages, productId }) => {
  const [color, setColor] = useState('')
  const [storage, setStorage] = useState('')
  const [loadingPurchase, setLoadingPurchase] = useState(false)
  const [errorPurchase, setErrorPurchase] = useState(false)

  const { t } = useTranslation()

  const onSubmitHandler = async event => {
    event.preventDefault()
    try {
      const params = {
        id: productId,
        colorCode: color,
        storageCode: storage
      }
      setLoadingPurchase(true)
      const result = await purchaseProduct(params)
      console.log('result', result)
    } catch (error) {
      setErrorPurchase(true)
    } finally {
      setLoadingPurchase(false)
    }
  }

  useEffect(() => {
    if (colors.length > 0) {
      setColor(colors[0].code)
    }
    if (storages.length > 0) {
      setStorage(storages[0].code)
    }
  }, [colors, storages])

  if (errorPurchase) return 'ERRROR'

  return (
    <div className="mt-10 w-5/6 border-t-2 pt-10">
      <form className="flex flex-col gap-7" onSubmit={onSubmitHandler}>
        <p className="font-bold text-lg">{t('Pages.Details.form.title')}</p>
        <Options
          label={t('Pages.Details.form.colors.label')}
          placeholder={t('Pages.Details.form.colors.placeholder')}
          options={colors}
          onChange={setColor}
          name="color"
          value={color}
        />
        <Options
          label={t('Pages.Details.form.storages.label')}
          placeholder={t('Pages.Details.form.storages.placeholder')}
          options={storages}
          onChange={setStorage}
          name="storage"
          value={storage}
        />
        <div className="flex justify-center pt-12">
          <button
            type="submit"
            value="Submit"
            className="bg-black text-white px-16 py-2 rounded-3xl"
            disabled={color === '' || storage === ''}
          >
            <div className="flex justify-center items-center">
              <span className="text-xl">{t('Pages.Details.form.button')}</span>
              {loadingPurchase && (
                <Spinner size="sm" aria-label="Default status example" />
              )}
            </div>
          </button>
        </div>
      </form>
    </div>
  )
}

ShoppingFormComponent.propTypes = {
  storages: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      name: PropTypes.string
    })
  ),
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      name: PropTypes.string
    })
  ),
  productId: PropTypes.string
}

export default ShoppingFormComponent
