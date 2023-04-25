import { Route, Routes } from 'react-router-dom'
import './config/i18next/config'
import { RouteKeys } from './constants'
import { ShoppingProvider } from './context'
import { LayoutPage, HomePage, UnknownPage, ProductDetailsPage } from './pages'
import './App.css'

const App = () => {
  return (
    <ShoppingProvider>
      <Routes>
        <Route path={RouteKeys.baseUrl} element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route
            path={RouteKeys.productDetailsUrl}
            element={<ProductDetailsPage />}
          />
          <Route path="*" element={<UnknownPage />} />
        </Route>
      </Routes>
    </ShoppingProvider>
  )
}

export default App
