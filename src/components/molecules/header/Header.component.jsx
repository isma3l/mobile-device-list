import { Link } from 'react-router-dom'
import { BadgeCartComponent } from '@/components/atoms'

const HeaderComponent = () => {
  return (
    <div className="bg-black py-5 flex justify-between">
      <Link className="text-3xl font-semibold text-sky-600" to="/">
        <span className="text-white px-4">COMPANY NAME</span>
      </Link>
      <BadgeCartComponent items={10} />
    </div>
  )
}

export default HeaderComponent
