
'use client'

import React, { useEffect, useState } from 'react';
import { addToCart } from '../store/cart';
import { useParams } from 'next/navigation';
import { menu, pricing } from '../constants';
import { useDispatch } from 'react-redux';

function item() {

  const dispatch = useDispatch();
  const { slug } = useParams(); 
  const [quantity, setQuantity] = useState(1)
  const [detail, setDetail] = useState([])
  useEffect(() => {
    const findDetail = menu.filter(product => product.slug === slug)
    if (findDetail.length > 0) {
      setDetail(findDetail[0])
    }
    // else {
    //   window.location.href = '/'
    // }
  }, [slug])
  const handleMinus = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
  }
  const handlePlus = () => {
    setQuantity(quantity + 1)
  }
  const handleCart = () => {
    dispatch(addToCart({
      productId: detail.id,
      quantity: quantity
    }))
  }

  return (
    <>
      <div className='grid grid-cols-2 gap-5 mt-5 p-16 border rounded-2xl'>
        <div>
          <img src={detail.src} alt='#' className='w-full' />
        </div>
        <div className='p-20'>
          <h2 className='text-2xl py-3'>
            {detail.name}
          </h2>
          <div className='font-[inter]'>
            <p className='text-lg text-gray-500'>
              {detail.subtitle}
            </p>
            <ul role='list' className='space-y-2 pt-5'>
              {
                pricing.map((item) => (
                  <li className='border-b border-gray-300 pb-3 text-gray-400' key={item.id}>
                    <div className='flex justify-between font-[lobster]'>
                      <span>
                        <input type='radio' />
                        <label className='px-2 text-lg'>
                          {item.size}
                        </label>
                      </span>
                      <span className='font-[inter]'>
                        Rs.
                        {item.price}
                      </span>
                    </div>
                  </li>
                ))}

            </ul>
          </div>
          <div className='flex justify-between items-center pt-20'>
            <span className='text-lg font-[inter]'>
              <button className='border rounded py-2 px-3' onClick={handleMinus}>-</button>
              <span className='mx-4'>{quantity}</span>
              <button className='border rounded py-2 px-3' onClick={handlePlus}>+</button>
            </span>
            <span>
              <button className='border px-3 py-2 rounded-md text-lg' onClick={handleCart}>Add To Cart</button>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default item
