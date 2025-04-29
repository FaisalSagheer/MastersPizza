'use client'

import React,{ useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Navbar from "./components/Navbar"

import Checkout from './checkout/page'
import Home from './home/page'
import Cart from './components/Cart'
import Dashboard from './dashboard/page'
import Login from './login/page'
import PreLoading from './components/Loading'

export default function Page() {
  const pathname = usePathname()
  const [isCartOpen, setIsCartOpen] = useState(false)

  const renderPageContent = () => {
    switch(pathname) {
      case '/dashboard':
        return <Dashboard />
      case '/login':
        return <Login />
      case '/checkout':
        return <Checkout />
      case '/':
      default:
        return <Home />
    }
  }

  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  },[])

  return (
    <>{Loading?<PreLoading/>:<>

      <Navbar setIsCartOpen={setIsCartOpen} />

      {renderPageContent()}
      {/* <Home/>
      <Dashboard/>
      <Checkout/>
      <Login/> */}
      <Cart open={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </>
    }
    </>
  )
}