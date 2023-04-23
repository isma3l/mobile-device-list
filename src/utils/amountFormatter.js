const createFormatter = (locales, currency) => {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency
  }).format
}

export const createLocaleFormatter = () => createFormatter('es-ES', 'EUR')
