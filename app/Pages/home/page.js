'use client'

import React from 'react'
import Hero from '../../components/Hero';
import FoodItems from '../../components/FoodItems';
import Footer from '../../components/Footer';
import { Provider } from 'react-redux';
import { stores } from '@/app/store';

function Home() {
  return (
    <Provider store={stores}>
      <Hero />
      <FoodItems />
      <Footer />
    </Provider>
  )
}

export default Home;  