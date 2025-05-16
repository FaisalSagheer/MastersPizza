
'use client'

import React from 'react'
import { menu } from '../constants';
import ItemDetail from './ItemDetail';
import { Provider } from 'react-redux';
import { stores } from '../store';

export default function Details() {

  return (
    <>
    <Provider store={stores}>
      <section className='max-w-7xl mx-auto'>
        {menu.map((item, key) => <ItemDetail key={key} data={item} />)}
      </section>
    </Provider>
    </>
  )
}

