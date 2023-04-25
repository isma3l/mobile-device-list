import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { purchaseProduct } from '@/services'
import { useShoppingApiContext } from '@/hooks'
import SelectComponent from './Select.component'
import { ButtonComponent } from '@/components'

const ShoppingFormComponent = ({ colors, storages, productId }) => {
  const { updateShoppingCart } = useShoppingApiContext()
  const [color, setColor] = useState()
  const [storage, setStorage] = useState()
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
      const shoppingCar = await purchaseProduct(params)
      console.log('result', shoppingCar)
      updateShoppingCart(shoppingCar.count)
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
      <form className="flex flex-col gap-7">
        <p className="font-bold text-lg">{t('Pages.Details.form.title')}</p>
        <SelectComponent
          label={t('Pages.Details.form.colors.label')}
          placeholder={t('Pages.Details.form.colors.placeholder')}
          options={colors}
          onChange={setColor}
          name="color"
          value={color}
          disabled={loadingPurchase}
        />
        <SelectComponent
          label={t('Pages.Details.form.storages.label')}
          placeholder={t('Pages.Details.form.storages.placeholder')}
          options={storages}
          onChange={setStorage}
          name="storage"
          value={storage}
          disabled={loadingPurchase}
        />
        <div className="flex justify-center pt-12">
          <ButtonComponent
            label={t('Pages.Details.form.button')}
            loading={loadingPurchase}
            handleClick={onSubmitHandler}
          />
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
