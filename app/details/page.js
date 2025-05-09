
'use client'

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { menu} from '../constants';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart';


export default function Details() {

  const dispatch = useDispatch();
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1)
  const [detail, setDetail] = useState([])
  useEffect(() => {
    const findDetail = menu.filter(product => product.slug === slug)
    if (findDetail.length > 0) {
      setDetail(findDetail[0])
    }
    else {
      window.location.href = '/'
    }
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
      <section className='max-w-7xl mx-auto'>
        {menu.map((item) => (
          <div className='grid grid-cols-2 gap-5 mt-5 p-16 border rounded-2xl' key={item.id}>
            <div>
              <img src={item.src} alt='#' className='w-full' />
            </div>
            <div className='p-20'>
              <h2 className='text-2xl py-3'>
                {item.name}
              </h2>
              <div className='font-[inter]'>
                <p className='text-lg text-gray-500'>
                  {item.subtitle}
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
        ))}

      </section>
    </>
  )
}

