import { Breadcrumb } from 'flowbite-react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HiHome, HiDeviceMobile } from 'react-icons/hi'
import { RouteKeys } from '@/constants'

const BreadCrumbComponent = () => {
  const location = useLocation()
  const { t } = useTranslation()

  const origin = window.location.origin
  const paths = [
    {
      url: origin,
      icon: HiHome,
      label: t('Header.breadcrumb.home')
    }
  ]

  if (location.pathname.includes(RouteKeys.productBaseUrl)) {
    paths.push({
      url: `${origin}${location.pathname}`,
      icon: HiDeviceMobile,
      label: t('Header.breadcrumb.product')
    })
  }

  return (
    <Breadcrumb>
      {paths.map((value, index) => (
        <Breadcrumb.Item
          href={index < paths.length - 1 ? value.url : null}
          icon={value.icon}
          key={`breadcrumb-${index}`}
        >
          {value.label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}

export default BreadCrumbComponent
