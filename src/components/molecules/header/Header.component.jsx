import { Link } from 'react-router-dom'
import { Logo } from '@/assets'

const HeaderComponent = () => {
  return (
    <div className="border-b-2 border-gray-300 py-3 flex justify-between">
      <Link className="text-3xl font-semibold text-sky-600" to="/">
        <img src={Logo} className="h-10" alt="React Logo" />
      </Link>
    </div>
  )
}

export default HeaderComponent
