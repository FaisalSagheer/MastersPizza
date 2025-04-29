import { featuredItems } from '@/app/constants';
import React from 'react';
import ProductCard from '../ProductCard';

const Featured = () => {
  

  return (
    <section className="py-16">
      <div className="py-12 px-10 lg:px-36 max-w-7xl">
        <h2 className="text-3xl font-bold text-center lg:text-start">Our Featured Pizzas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-30 gap-y-2 pl-8">
          {featuredItems.map((items,key) => (
            <ProductCard key={key} data={items}/>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="bg-pizza-yellow hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg">
            VIEW FULL MENU
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Featured;