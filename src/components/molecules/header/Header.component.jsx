import { Link } from 'react-router-dom'
import { BadgeCartComponent, BreadCrumbComponent } from '@/components/atoms'
import { useShoppingCarContext } from '@/hooks'

const HeaderComponent = () => {
  const { items } = useShoppingCarContext()

  return (
    <div className="flex flex-col gap-1">
      <div className="bg-black py-5 flex justify-between pl-5">
        <Link className="text-3xl font-semibold text-sky-600" to="/">
          <span className="text-white px-4">COMPANY NAME</span>
        </Link>
        <BadgeCartComponent items={items} />
      </div>
      <div className="pl-8">
        <BreadCrumbComponent />
      </div>
    </div>
  )
}

export default HeaderComponent
