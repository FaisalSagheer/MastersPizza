import { menu } from '@/app/constants'
import React from 'react'
import ProductCard from '../ProductCard'

export default function Special() {

  return (
    <section className="py-12 px-10 lg:px-36 max-w-7xl">
      <h2 className="text-3xl font-bold text-center lg:text-start">Our Special Pizzas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-30 gap-y-2 pl-8">
        {
          menu.map((items, key) => (
            <ProductCard key={key} data={items} />
          ))
        }
      </div>
      {/* <div className='pt-14 flex justify-center pl-20 text-center'>
        <button className="bg-pizza-red hover:bg-gray-700 text-white font-bold py-2 px-5 rounded-full text-lg ml-3 font-[inter]">
          View More
        </button>
      </div> */}
    </section>
  )
}
