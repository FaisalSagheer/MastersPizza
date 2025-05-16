'use client'

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Checkout from '../Pages/checkout/page';
import CartTab from '../components/CartTab/CartTab';
import Dashboard from '../Pages/dashboard/page';
import Login from '../Pages/login/page';
import Navbar from '../components/Navbar';
import Home from '../Pages/home/page';
import Details from '../details/page';


function Website() {
    const pathname = usePathname()
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

    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>

            {/* <>{Loading ? <PreLoading /> : <> */}


            <main >
                <Navbar onCartClick={() => setIsCartOpen(true)} />
                {renderPageContent()}
            </main >
            <CartTab isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            {/* </>
      } */}
            {/* </> */}
        </>
    )
}

export default Website
