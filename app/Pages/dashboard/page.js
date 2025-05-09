'use client'

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import dynamic from 'next/dynamic';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('orders');
  const [isLoading, setLoading] = useState(false)
  const AddItems = dynamic(() => import('./addItems/page'), { ssr: false })
  const Orders = dynamic(() => import('./orders/page'), { ssr: false })

  const handleChange = (section) => {
    if (section === 'addItems') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    }
    setActiveSection(section)

  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6 lg:p-0 lg:px-20 lg:pt-10">
        <div className="flex justify-between items-center mb-8">
          <div className='flex text-pizza-red cursor-pointer'>
            <button
              onClick={() => handleChange('orders')}
              className={`mr-3 ${activeSection === 'orders' ? 'font-bold' : ''}`}
             
            >
              Orders
            </button>

            <button
              onClick={() => handleChange('addItems')}
              className={activeSection === 'addItems' ? 'font-bold' : ''}
              disabled={isLoading}
            >
              Add Items
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center mt-20">
            <svg className="animate-spin h-5 w-5 text-pizza-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : (
          <>
            {activeSection === 'orders' && <Orders />}

            {activeSection === 'addItems' && <AddItems />}
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;