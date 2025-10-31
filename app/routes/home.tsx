import { useEffect, useId, useState } from 'react'
import type { Route } from './+types/home'
import { API_ENDPOINT } from '~/lib/constants'
import type { Laptops } from '~/env'
import { Link } from 'react-router'

export function meta ({}: Route.MetaArgs) {
  return [
    { title: 'Réplica e-commerce' },
    { name: 'description', content: 'Réplica de un e-commerce como última tarea de programación' }
  ]
}

export default function Home () {
  const [laptops, setLaptops] = useState<Laptops>()

  async function fetchLaptops () {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setLaptops({
          ...data,
          products: [
            ...data.products,
            ...data.products,
            ...data.products
          ]
        })
      })
  }
  
  useEffect(() => {
    fetchLaptops()
  }, [])
  
  return (
    <>
      <main className='h-full w-full p-16 pt-28 pb-0'>
        <div id='grid-masonry' className='w-full h-full grid grid-cols-[2fr_1fr_3fr_2fr] grid-rows-[2fr_1fr_0.2fr_3fr] gap-3 *:rounded-lg *:bg-gray-300'>
          { laptops?.products.map(({ id, images, title }, idx) => (
              <Link to={`/buy/${id}`} key={`product-id-grid-masonry-${id}-${idx}`} className='max-h-full relative overflow-hidden group cursor-pointer'>
                <div className='h-full overflow-hidden absolute w-full z-0 hover:z-1 transition-all'>
                  <img src={images[0]} className='object-contain h-full w-full' />
                </div>
                <div className='absolute h-full w-full not-hover:backdrop-blur-sm not-hover:bg-gray-200/30 group-hover:blur-sm z-1 p-2 transition-all'>
                  <h1 className='font-semibold text-lg text-gray-800'>{title}</h1>
                </div>
              </Link>
          )) }
        </div>
      </main>
    </>
  )
}
