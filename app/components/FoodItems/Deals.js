import { deals } from '@/app/constants';
import React from 'react';
import ProductCard from '../ProductCard';

const Deals = () => {


  return (
    <section className="py-16 bg-white">
      <div className="py-12 px-10 lg:px-36 max-w-7xl">
        <h2 className="text-3xl font-bold text-center lg:text-start">Hot Deals</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-30 gap-y-2 pl-8">
          {deals.map((deal, key) => (
            <ProductCard key={key} data={deal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;