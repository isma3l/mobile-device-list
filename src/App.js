import { Route, Routes } from 'react-router-dom'
import './App.css'
import { RouteKeys } from './constants'
import { LayoutPage, HomePage, UnknownPage } from './pages'

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
