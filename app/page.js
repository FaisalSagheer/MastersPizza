'use client'

import React,{ useState } from 'react'
import { usePathname } from 'next/navigation'
import Navbar from "./components/Navbar"

import Checkout from './checkout/page'
import Home from './home/page'
import Cart from './components/Cart'
import Dashboard from './dashboard/page'
import Login from './login/page'

export default function Page() {
  const pathname = usePathname()
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Determine which page to show based on the current path
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

  return (
    <>
      <Navbar setIsCartOpen={setIsCartOpen} />

      {renderPageContent()}
      <Cart open={isCartOpen} onClose={() => setIsCartOpen(false)} />

    </>
  )
}