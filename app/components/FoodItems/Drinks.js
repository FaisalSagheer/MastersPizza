
'use client'

import React, { useEffect, useState } from 'react'

function Drinks() {
    const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        const checkStatus = () => {
            try {
                const storedItems = JSON.parse(localStorage.getItem("menuItems"))
                const drinkItems = storedItems?.filter(item =>
                    item.category === "drinks" || item.category === "beverages"
                ) || []
                setMenuItems(drinkItems)
            } catch (error) {
                console.error("Error parsing menu items:", error)
                setMenuItems([])
            }
        }

        checkStatus()
        window.addEventListener('storage', checkStatus)

        return () => {
            window.removeEventListener('storage', checkStatus)
        }
    }, [])

    return (
        <>
            <section className="pt-12 lg:py-12 px-10 lg:px-36 max-w-7xl">
               
                    <h2 className="text-3xl font-bold text-center lg:text-start">Drinks</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-30 gap-y-2 pl-8">
                        {menuItems.map((item) => (
                            <div className="w-xs" key={item.id}>
                                <div  className='flex justify-end relative top-16 left-20'>
                                    <img src={item.src} alt={item.alt} className="w-64" />
                                </div>
                                <div className='bg-white border-0 rounded-lg shadow py-5 pl-6'>
                                    <span className="text-pizza-red font-bold text-lg pl-3 relative bottom-3 font-[inter]">From {item.price}</span>
                                    <h4 className="pl-2 mt-3 font-bold text-xl">{item.name}</h4>
                                    <p className="pl-2 text-gray-500 font-light">{item.description}</p>
                                    <button className="mt-6 bg-pizza-red hover:bg-pizza-yellow text-white text-sm font-bold py-2 px-4 rounded-full border border-pizza-yellow font-[inter]">
                                        Order Now
                                    </button>
                                </div>


                            </div>
                        ))}
                    </div>
              
            </section>
        </>
    )
}

export default Drinks