import { Route, Routes } from 'react-router-dom'
import './config/i18next/config'
import { RouteKeys } from './constants'
import { LayoutPage, HomePage, UnknownPage } from './pages'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path={RouteKeys.base} element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<UnknownPage />} />
      </Route>
    </Routes>
  )
}

export default App
