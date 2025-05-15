'use client'


import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiTrash2 } from 'react-icons/fi';
import { FaCcVisa, FaCcMastercard, FaCcApplePay } from 'react-icons/fa';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

const CheckOut = () => {

  const [cartItems, setCartItems] = useState([  
    {
      id: 1,
      name: "Mexican Pizza",
      size: "Large",
      price: 850,
      quantity: 2,
      image: "https://www.pizzamax.com.pk/wp-content/uploads/2021/01/maxican-pizza.png"
    },
    {
      id: 2,
      name: "Chicken Wings",
      size: "Regular",
      price: 650,
      quantity: 1,
      image: "https://www.pizzamax.com.pk/wp-content/uploads/2021/01/wings-category.jpg"
    }
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Form state
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    phone: '',
    address: '',
    instructions: ''
  });


  const [paymentMethod, setPaymentMethod] = useState('cash');

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 1000 ? 0 : 150;
  const tax = subtotal * 0.05;
  const total = subtotal + deliveryFee + tax;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-pizza-red mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {/* Cart Items */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Your Order ({cartItems.length})</h2>

                {cartItems.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty</p>
                ) : (
                  <div className="divide-y divide-gray-200">
                    {cartItems.map(item => (
                      <div key={item.id} className="py-4 flex items-start">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">{item.name}</h3>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-pizza-red"
                            >
                              <FiTrash2 />
                            </button>
                          </div>
                          <p className="text-sm text-gray-500">{item.size}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border rounded-md">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                <FiChevronDown size={16} />
                              </button>
                              <span className="px-2">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                <FiChevronUp size={16} />
                              </button>
                            </div>
                            <p className="font-medium">Rs. {item.price * item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Delivery Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Delivery Information</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={deliveryInfo.name}
                      onChange={(e) => setDeliveryInfo({ ...deliveryInfo, name: e.target.value })}
                      className="w-full px-4 py-2 border rounded-md focus:ring-pizza-red focus:border-pizza-red"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={deliveryInfo.phone}
                      onChange={(e) => setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })}
                      className="w-full px-4 py-2 border rounded-md focus:ring-pizza-red focus:border-pizza-red"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                    <textarea
                      value={deliveryInfo.address}
                      onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-2 border rounded-md focus:ring-pizza-red focus:border-pizza-red"
                      required
                    />
                  </div>
                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Special Instructions (Optional)</label>
                    <textarea
                      value={deliveryInfo.instructions}
                      onChange={(e) => setDeliveryInfo({ ...deliveryInfo, instructions: e.target.value })}
                      rows={2}
                      className="w-full px-4 py-2 border rounded-md focus:ring-pizza-red focus:border-pizza-red"
                      placeholder="e.g. Gate code, floor number, etc."
                    />
                  </div> */}
                        {/* Branches Dropdown */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-pizza-red shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Branches
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-pizza-red"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        href="/dashboard"  
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                          }`}
                      >
                        Branch 1
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        href="/dashboard"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                          }`}
                      >
                        Branch 2
                      </Link>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
                </form>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="cash"
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cash'}
                      onChange={() => setPaymentMethod('cash')}
                      className="h-4 w-4 text-pizza-red focus:ring-pizza-red"
                    />
                    <label htmlFor="cash" className="ml-3 block text-sm font-medium text-gray-700">
                      Cash on Delivery
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="card"
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="h-4 w-4 text-pizza-red focus:ring-pizza-red"
                    />
                    <label htmlFor="card" className="ml-3 block text-sm font-medium text-gray-700">
                      Credit/Debit Card
                    </label>
                  </div>
                  {paymentMethod === 'card' && (
                    <div className="mt-4 p-4 border rounded-md bg-gray-50">
                      <div className="flex space-x-4 mb-4">
                        <FaCcVisa className="text-3xl text-blue-800" />
                        <FaCcMastercard className="text-3xl text-red-600" />
                        <FaCcApplePay className="text-3xl text-black" />
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-2 border rounded-md focus:ring-pizza-red focus:border-pizza-red"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full px-4 py-2 border rounded-md focus:ring-pizza-red focus:border-pizza-red"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                            <input
                              type="text"
                              placeholder="123"
                              className="w-full px-4 py-2 border rounded-md focus:ring-pizza-red focus:border-pizza-red"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>Rs. {subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>{deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`}</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span className="text-gray-600">Tax (5%)</span>
                    <span>Rs. {tax.toFixed(2)}</span>
                  </div> */}
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-pizza-red">Rs. {total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-pizza-red hover:bg-red-800 text-white font-bold py-3 px-4 rounded-md transition duration-200">
                  Place Order
                </button>

                {/* <p className="mt-4 text-sm text-gray-500">
                  By placing your order, you agree to our <a href="#" className="text-pizza-red hover:underline">Terms of Service</a> and <a href="#" className="text-pizza-red hover:underline">Privacy Policy</a>.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default CheckOut;