'use client'

import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cart'

function ProductCard(props) {
    const { id, src, alt, price, name, subtitle, slug } = props.data
    
    const carts = useSelector(store => store.cart.items)
    // console.log(carts)
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }))
    }

    return (
        <>
            <div className="w-xs">
                <Link href={slug} className='flex justify-end relative top-16 left-10'>
                    <img src={src} alt={alt} className="w-48" />
                </Link>
                <div className='bg-white border-0 rounded-lg shadow py-5 pl-6'>
                    <span className="text-pizza-red font-bold text-lg pl-3 relative bottom-3 font-[inter]">From {price}</span>
                    <h4 className="mt-3 font-bold text-xl">{name}</h4>
                    <p className="text-gray-500 font-light">{subtitle}</p>
                    <button className="mt-6 bg-pizza-red hover:bg-pizza-yellow text-white text-sm font-bold py-2 px-4 rounded-full border border-pizza-yellow font-[inter]" onClick={handleAddToCart}>
                        Order Now
                    </button>
                </div>


            </div>
        </>
    )
}

export default ProductCard
