'use client'
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

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
    localStorage.removeItem('adminAuth','true')
    router.push('/login')
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

                  <Link href="/dashboard"
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


            {/* <Link href="/login" className="hover:text-pizza-yellow transition-colors">
              Login
            </Link> */}




            <button
              className="hover:text-pizza-yellow transition-colors"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Cart"
            >
              <FaShoppingCart className="text-xl" />
            </button>
            <span className='relative bottom-3 right-6'>7</span>
          </div>
        </div>
      </div>

      {/* Shopping Cart Modal */}
      <Cart open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}