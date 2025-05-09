'use client'

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Checkout from './Pages/checkout/page';
import Cart from './components/CartTab/CartTab';
import Dashboard from './Pages/dashboard/page';
import Login from './Pages/login/page';
import PreLoading from './components/Loading';
import { Provider } from 'react-redux';
import { stores } from './store';
import Navbar from './components/Navbar';
import Home from './Pages/home/page';
import Details from './details/page';

export default function Page() {
  const pathname = usePathname()
  const [isCartOpen, setIsCartOpen] = useState(false)

  const renderPageContent = () => {
    switch (pathname) {
      case '/details':
        return <Details />
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
  }, [])

  return (
    <Provider store={stores}>

      {/* <>{Loading ? <PreLoading /> : <> */}

        <Navbar setIsCartOpen={setIsCartOpen} />

        {renderPageContent()}
        <Cart open={isCartOpen} onClose={() => setIsCartOpen(false)} />
      {/* </>
      } */}
      {/* </> */}
    </Provider>

  )
}