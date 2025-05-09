'use client'

import { menu } from '@/app/constants';
import { ChangeQuantity } from '@/app/store/cart';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

function CartItem(props) {

    const { productId, quantity } = props.data;
    const [detail, setDetail] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = menu.filter(product => product.id === productId)[0];
        setDetail(findDetail)
    }, [productId])
    // console.log(detail)
    const HandleMinus = ()=>{
        dispatch(ChangeQuantity({
            productId:productId,
            quantity:quantity-1
        }))
    }
    const HandleAdd = () => {
        dispatch(ChangeQuantity({
            productId:productId,
            quantity:quantity+1
        }))
    }
    return (
        <>
            <div className="mt-8">
                <div className="flow-root">
                    <ul className="-my-6 divide-y divide-gray-200">
                        <li className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                    src={detail.src}
                                    // alt={detail.alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <div>

                                            <h3>
                                                {detail.name}
                                            </h3>
                                            <p className='font-[inter] text-sm text-gray-400'>{detail.subtitle}</p>
                                        </div>
                                        <div>
                                            <p className="ml-4">{detail.price * quantity}</p>
                                        </div>
                                    </div>
                                    <div className="w-20 flex justify-self-end items-center mt-5">
                                        <button onClick={HandleMinus}
                                            type="button"
                                            className="font-medium text-pizza-red hover:text-white text-center hover:bg-pizza-red px-2 border rounded-md"
                                        >
                                            -
                                        </button>
                                        <span className='mx-auto'>{quantity}</span>
                                        <button onClick={HandleAdd}
                                            type="button"
                                            className="font-medium text-pizza-red hover:text-white text-center hover:bg-pizza-red px-2 border rounded-md"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default CartItem
