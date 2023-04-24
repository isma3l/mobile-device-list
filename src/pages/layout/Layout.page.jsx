import { Outlet } from 'react-router-dom'
import { Header } from '@/components/molecules'

const LayoutPage = () => {
  return (
    <div className="w-full mx-auto h-full">
      <Header />
      <Outlet />
    </div>
  )
}

export default LayoutPage
