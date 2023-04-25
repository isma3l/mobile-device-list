import { ShoppingContext } from '@/context'
import { useContext } from 'react'

export const useShoppingCarContext = () => {
  const context = useContext(ShoppingContext)

  if (context === undefined) {
    throw new Error(
      'The useShoppingCarContext hook must be used within a ShoppingContext.Provider'
    )
  }
  return context
}
