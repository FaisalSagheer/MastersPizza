'use client'

import React from 'react'
import CartItem from './CartItem'; 
import { useSelector } from 'react-redux';
function CartTab() {

  const carts = useSelector(store => store.cart.items);
  const StatusTab = useSelector(store => store.cart.StatusTab);
  
  
  return (
    <>
      <div className={`fixed top-0 right-0 z-10 bg-white shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] overflow-auto
        translate transition-transform duration-500
        ${StatusTab === false ? "translate-x-full" : ""}
        `}>
        <h2 className='p-5 text-pizza-yellow text-2xl'>Meal Cart</h2>
        <div className='p-5'>
          {carts.map((item, key) =>
            <CartItem key={key} data={item} />
          )}
        </div>
        <div className='text-center'>
          <button className='px-35 py-3 rounded-md bg-pizza-red text-white' 
          // onClick={()=>window.location.href='/Pages/checkout'}
            >Check Out</button>
          {/* <button className='px-10 py-5 rounded-md bg-pizza-yellow text-white' >Cancel</button> */}
        </div>
      </div>
    </>
  )
}

export default CartTab
