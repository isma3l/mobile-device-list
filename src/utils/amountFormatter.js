const createFormatter = (locales, currency) => {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: 'EUR'
  }).format
}

export const createLocaleFormatter = () => createFormatter('es-ES', 'EUR')
