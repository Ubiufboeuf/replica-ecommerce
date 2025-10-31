import { Link } from 'react-router'
import { IconCart } from './Icons'
import { Icon } from './Icon'

export function Cart () {
  return (
    <Link to='/cart' className='relative text-xs transition-colors hover:bg-gray-200/30 p-2 max-h-full px-4 rounded-lg'>
      <Icon className='size-6'>
        <IconCart />
      </Icon>
      <span>Shop</span>
      <div className='absolute top-1 right-3 size-4 bg-secondary flex items-center justify-center rounded-full border border-gray-800 text-gray-800 text-center'>0</div>
    </Link>
  )
}
