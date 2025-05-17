'use client'

import React, { Fragment} from 'react'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Transition} from '@headlessui/react';
function CartTab({isOpen,onClose}) {

  const carts = useSelector(store => store.cart.items);

  return (
    <>
    <Transition show={isOpen} as={Fragment}>

      <Dialog  onClose={onClose} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <DialogPanel 
                transition
                className="pointer-events-auto relative transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
               
                <div className="flex flex-col h-full overflow-auto bg-white py-6 shadow-xl px-5">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-2xl font-semibold text-pizza-red">Meal Cart</DialogTitle>
                  </div>
                  <div className='p-5'>
                    {carts.map((item, key) =>
                      <CartItem key={key} data={item} />
                    )}
                  </div>
                  <div className='text-center my-auto -mb-3 '>
                    <button className='px-35 py-3 rounded-md bg-pizza-red text-white'
                    onClick={()=>window.location.href='/Pages/checkout'}
                  //  onClick={()=>OnClose}
                   >Check Out</button>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>

    </>
  )
}

export default CartTab

//  <div className='p-5'>
//           {carts.map((item, key) =>
//             <CartItem key={key} data={item} />
//           )}
//         </div>
//         <div className='text-center'>
//           <button className='px-35 py-3 rounded-md bg-pizza-red text-white'
//           // onClick={()=>window.location.href='/Pages/checkout'}
//           >Check Out</button>
//         </div>
