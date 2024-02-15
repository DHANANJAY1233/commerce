'use client';

import { Product } from 'lib/data-types/products';
import { useContext, useState } from 'react';
import { CartContext } from './context';
import CartModal from './modal';

export default function Cart() {

  const [cart, setCart] = useState<Product[]>([])
  const {state} = useContext(CartContext)
  

  return <CartModal cart={state || []} />;
}
