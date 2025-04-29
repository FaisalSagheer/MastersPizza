
'use client'

import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard'

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
                        {menuItems.map((items,key) => (
                            <ProductCard key={key} data={items}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Drinks