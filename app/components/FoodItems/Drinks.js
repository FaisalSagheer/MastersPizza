
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
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-pizza-red">Drinks</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-20 lg:px-40">
                        {menuItems.map(item => (
                            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow py-4">
                                <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                                    <p className="text-pizza-red font-bold mb-4">Rs.{item.price}</p>
                                    <button className="bg-pizza-red hover:bg-red-800 text-white border border-red-700 font-semibold py-2 px-4 rounded-full text-sm">
                                        ORDER NOW
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Drinks