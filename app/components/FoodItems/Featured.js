import { featuredItems, menu } from '@/app/constants';
import React from 'react';
import ProductCard from '../ProductCard';

const Featured = () => {
  

  return (
    <section className="lg:py-10">
      <div className="py-12 px-10 lg:px-36 max-w-7xl">
        <h2 className="text-3xl font-bold text-center lg:pl-48">Our Featured Pizzas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-30 gap-y-2 pl-8">
          {menu.filter(item => item.categories === 'FeaturedPizza').map((items,key) => (
            <ProductCard key={key} data={items}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;