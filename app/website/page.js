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
import { Provider } from 'react-redux';
import { stores } from '../store';
import PreLoading from '../components/Loading';
import Product from '../components/ProductDetails/Product';


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
    const [isModal, setModal] = useState(false);

    return (
        <Provider store={stores}>

            <>{Loading ? <PreLoading /> :
                <>


                    <main >
                        <Navbar onCartClick={() => setIsCartOpen(true)}
                            DetailsClick={() => setModal(true)} />
                        {renderPageContent()}
                    </main >
                    <CartTab isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
                    <Product isOpen={isModal} onClose={() => setModal(false)} />
                </>
            }
            </>
        </Provider>
    )
}

export default Website
