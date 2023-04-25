import { createContext, useReducer, useMemo, useEffect } from 'react'
import { StorageKeys } from '@/constants'
import { getLocalDataWithTimeStamp, isLocalDataValid } from '@/utils'

export const ShoppingContext = createContext({})
export const ShoppingApiContext = createContext({})

const initialState = {
  items: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateShoppingCart':
      return { ...state, items: action.items }
  }
}

export const ShoppingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const localData = getLocalDataWithTimeStamp(StorageKeys.shoppingCart)
    const isValid = localData !== undefined && isLocalDataValid(localData)

    if (isValid) {
      api.updateShoppingCart(localData.data.count)
    }
  }, [])

  const api = useMemo(() => {
    const updateShoppingCart = items => {
      dispatch({ type: 'updateShoppingCart', items })
    }

    return { updateShoppingCart }
  }, [])

  return (
    <ShoppingApiContext.Provider value={api}>
      <ShoppingContext.Provider value={state}>
        {children}
      </ShoppingContext.Provider>
    </ShoppingApiContext.Provider>
  )
}
