import { Link } from 'react-router'
import { SearchBar } from './SearchBar'
import { Icon } from './Icon'
import { IconHeart, IconUser } from './Icons'
import { Cart } from './Cart'

export function Header () {
  return (
    <header className='fixed top-0 w-full h-fit min-h-fit flex flex-col items-center gap-px bg-white'>
      <main className='h-16 w-full p-2 px-4 bg-primary flex items-center gap-2 justify-between'>
        <Link to='/' className='h-fit w-fit px-4 p-2 flex items-center justify-center rounded-lg transition-colors hover:bg-gray-200/30'>
          <div className='h-8 overflow-hidden flex items-center justify-center'>
            <img src='/logo.svg' className='h-full w-full' />
          </div>
        </Link>
        <SearchBar />
        <div className='flex items-center gap-2 text-white'>
          <Link to='/' className='flex items-center justify-center gap-3 w-fit h-fit text-xs rounded-lg p-2 px-3 transition-colors hover:bg-gray-200/30'>
            <Icon className='size-6'>
              <IconHeart />
            </Icon>
            <div className='flex flex-col'>
              <span>Recorder</span>
              <strong>My Items</strong>
            </div>
          </Link>
          <Link to='/' className='flex items-center justify-center gap-3 w-fit h-fit text-xs rounded-lg p-2 px-3 transition-colors hover:bg-gray-200/30'>
            <Icon className='size-6'>
              <IconUser />
            </Icon>
            <div className='flex flex-col'>
              <span>Recorder</span>
              <strong>My Items</strong>
            </div>
          </Link>
          <Cart />
        </div>
      </main>
      <nav className='h-6 w-full bg-primary'></nav>
    </header>
  )
}
