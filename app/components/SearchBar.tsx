import { Icon } from './Icon'
import { IconSearch } from './Icons'

export function SearchBar ({ className }: { className?: string }) {
  return (
    <label className={`${className} relative flex-auto max-w-3xl rounded-full overflow-hidden pr-7 transition-colors bg-white focus-within:bg-gray-100`}>
      <input
        id='search-bar'
        name='search-bar'
        className='flex flex-auto items-center h-full w-full text-gray-800 outline-0 p-3 px-5 text-sm'
        placeholder='Search everything at Walmart online and in store'
      />
      <button
        className='absolute top-1/2 -translate-y-1/2 right-1.5 h-8 aspect-square flex items-center justify-center rounded-full cursor-pointer transition-colors bg-secondary hover:bg-[#eeb71e]'
      >
        <Icon className='text-gray-800 size-4'>
          <IconSearch />
        </Icon>
      </button>
    </label>
  )
}
