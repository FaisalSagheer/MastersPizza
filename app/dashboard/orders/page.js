
'use client'

import React, { useState } from 'react'

function Orders() {
  const [orders, setOrders] = useState([
    { id: 'PMX-1042', customer: 'Ali Khan', items: 'Mexican Pizza x2', Address: 'mehmoodabad 2', Phone: "12345678910" },
    { id: 'PMX-1041', customer: 'Sara Ahmed', items: 'Chicken Wings x1', Address: 'mehmoodabad 1', Phone: "12345678910" },
    { id: 'PMX-1040', customer: 'Usman Malik', items: 'BBQ Pizza x1, Coke x2', Address: 'mehmoodabad 3', Phone: "12345678910" },
  ]);
  return (
    <>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone No.</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.items}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.Address}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.Phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <td className="px-6 py-4 whitespace-nowrap">
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
            order.status === 'Preparing' ? 'bg-yellow-100 text-yellow-800' :
              'bg-blue-100 text-blue-800'
            }`}>
            {order.status}
          </span>
        </td> */}
    </>
  )
}
export default Orders;