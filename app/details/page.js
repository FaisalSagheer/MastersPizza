
'use client'

import React from 'react'
import { menu } from '../constants';
import ItemDetail from './ItemDetail';

export default function Details() {

  return (
    <>
      <section className='max-w-7xl mx-auto'>
        {menu.map((item, key) => <ItemDetail key={key} data={item} />)}
      </section>
    </>
  )
}

