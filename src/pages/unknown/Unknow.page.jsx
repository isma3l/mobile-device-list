import { MessageComponent } from '@/components/atoms'
import { useTranslation } from 'react-i18next'

const UnknownPage = () => {
  const { t } = useTranslation()

  return <MessageComponent message={t('Pages.Unknown.message')} />
}

export default UnknownPage
