import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { createLocaleFormatter } from '@/utils'
import ItemComponent from './Item.component'
import CameraComponent from './DataCamera.component'

const formatPrice = createLocaleFormatter()

const ProductDescriptionComponent = ({
  brand,
  model,
  price,
  ram,
  cpu,
  os,
  displayResolution,
  dimentions,
  weight,
  primaryCamera,
  secondaryCmera
}) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="flex justify-between w-5/6 items-start h-20">
        <span className="text-3xl font-bold mr-2.5">
          {brand} - {model}
        </span>
        <span className="text-2xl font-medium">{formatPrice(price ?? 0)}</span>
      </div>
      <div className="flex flex-col w-full">
        <p className="font-bold text-lg mb-4">
          {t('Pages.Details.description.title')}
        </p>
        <div className="flex flex-col gap-3">
          <ItemComponent
            label={t('Pages.Details.description.cpu')}
            value={cpu}
          />
          <ItemComponent
            label={t('Pages.Details.description.ram')}
            value={ram}
          />
          <ItemComponent
            label={t('Pages.Details.description.operatingSystem')}
            value={os}
          />
          <ItemComponent
            label={t('Pages.Details.description.displayResolution')}
            value={displayResolution}
          />
          <ItemComponent
            label={t('Pages.Details.description.dimentions')}
            value={dimentions}
          />
          <ItemComponent label="Peso" value={weight ? `${weight}gr` : ''} />
          <CameraComponent
            label={t('Pages.Details.description.primaryCamera')}
            options={primaryCamera}
          />
          <CameraComponent
            label={t('Pages.Details.description.secondaryCamera')}
            options={secondaryCmera}
          />
        </div>
      </div>
    </>
  )
}
ProductDescriptionComponent.defaultProps = {
  primaryCamera: [],
  secondaryCmera: []
}

ProductDescriptionComponent.propTypes = {
  brand: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.string,
  ram: PropTypes.string,
  cpu: PropTypes.string,
  os: PropTypes.string,
  weight: PropTypes.string,
  displayResolution: PropTypes.string,
  dimentions: PropTypes.string,
  primaryCamera: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  secondaryCmera: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ])
}

export default ProductDescriptionComponent
