'use client';

import { useContext } from 'react';
import { CartContext } from './context';
import CartModal from './modal';

export default function Cart() {
  
  const {state} = useContext(CartContext)
  

  return <CartModal cart={state || []} />;
}
