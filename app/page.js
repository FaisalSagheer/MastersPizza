'use client'

import React from 'react'
import { Provider } from 'react-redux';
import { stores } from './store';
import Website from './website/page';


export default function Page() {
  return (
    <Provider store={stores}>
      <Website />
    </Provider>

  )
}