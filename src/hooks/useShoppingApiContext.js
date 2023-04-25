import { ShoppingApiContext } from '@/context'
import { useContext } from 'react'

export const useShoppingApiContext = () => {
  const context = useContext(ShoppingApiContext)

  if (context === undefined) {
    throw new Error(
      'The useShoppingApiContext hook must be used within a ShoppingApiContext.Provider'
    )
  }
  return context
}
