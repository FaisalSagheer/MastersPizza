'use client'

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Orders from './orders/page';
import dynamic from 'next/dynamic';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('orders'); // 'orders' or 'addItems'
  const AddItem = dynamic(() => import ('./addItems/page'),{ssr:false})
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6 lg:p-0 lg:px-20 lg:pt-10">
        <div className="flex justify-between items-center mb-8">
          <div className='flex text-pizza-red cursor-pointer'>
            <button
              onClick={() => setActiveSection('orders')}
              className={`mr-3 ${activeSection === 'orders' ? 'font-bold' : ''}`}
            >
              Orders
            </button>

            <button
              onClick={() => setActiveSection('addItems')}
              className={activeSection === 'addItems' ? 'font-bold' : ''}
            >
              Add Items
            </button>
          </div>
        </div>

        {activeSection === 'orders' && <Orders />}
        {activeSection === 'addItems' && <AddItem />}
      </div>
    </div>
  );
}

export default Dashboard;