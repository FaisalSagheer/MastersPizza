

'use client'


import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function Navbar({ onCartClick,DetailsClick }) {

  const [totalQuantity, setTotalquantity] = useState(0)

  const carts = useSelector(store => store.cart.items)

  useEffect(() => {
    let total = 0;
    carts.forEach(item => { total += item.quantity });
    setTotalquantity(total)
  }, [carts])

  const [isAdmin, setAdmin] = useState(false)
  useEffect(() => {
    const checkStatus = () => {
      const adminAuth = (localStorage.getItem("adminAuth"))
      setAdmin(adminAuth === "true")
    }
    checkStatus()
    window.addEventListener('storage', checkStatus)
  }, [])

  const router = useRouter()
  const signOutFunc = () => {
    localStorage.removeItem('adminAuth', 'true')
    router.push('/Pages/login')
  }
  return (
    <header className="bg-pizza-red text-white shadow-lg px-10 lg:px-0">
      <div className="lg:px-20 mx-auto">
        <div className="flex justify-between h-16 items-center">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Pizza
            </Link>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center space-x-6">
            {/* <Link href="/" className="hover:text-pizza-yellow transition-colors">
              Home
            </Link> */}

            {
              isAdmin && (
                <>

                  <Link href="/Pages/dashboard"
                    className="hover:text-pizza-yellow transition-colors">
                    Dashboard
                  </Link>

                  <button onClick={signOutFunc}
                    className="hover:text-pizza-yellow transition-colors">
                    Sign Out
                  </button>
                </>

              )

            }

            <button className="hover:text-pizza-yellow transition-colors" onClick={DetailsClick}>
              Details
            </button>

            <Link href='/Pages/login'>
              Login
            </Link>
            <button
              className="hover:text-pizza-yellow transition-colors"
              onClick={onCartClick}
              aria-label="Shopping Cart"
            >
              <FaShoppingCart className="text-xl" />
            </button>
            <span className='relative bottom-3 right-6'>{totalQuantity}</span>
          </div>
        </div>
      </div>
    </header>
  );
}