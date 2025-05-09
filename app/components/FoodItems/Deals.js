import { menu } from '@/app/constants';
import React from 'react';
import ProductCard from '../ProductCard';

const Deals = () => {

  // function CategoriesFilter(categories){
  // return categories = 'deals'
  // }
  // const categorieDeal = menu.filter(CategoriesFilter)
  // console.log(categorieDeal)

  // function CategoriesFilter() {
  //   menu.filter(item => item.categories === 'deals')
  // }
  return (
    <section className="lg:py-10">
      <div className="py-12 px-10 lg:px-36 max-w-7xl">
        <h2 className="text-3xl font-bold text-center pl-48">Hot Deals</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-30 gap-y-2 pl-8">
          {menu.filter(item => item.categories === 'deals').map((deal, key) => (
            <ProductCard key={key} data={deal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;