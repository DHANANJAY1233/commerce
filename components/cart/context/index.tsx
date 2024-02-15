'use client';

import { Product } from 'lib/data-types/products';
import { ReactNode, createContext, useEffect, useReducer } from 'react';
import { cartReducer } from './reducers';

export const CartContext = createContext([]);

export const CartProvider = ({ children }: {children: ReactNode}) => {

  const [state, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const cartStorage = localStorage.getItem('cart')
    let cart:Product[] = []
    if(cartStorage) {
      cart = JSON.parse(cartStorage) || [];
    }
    dispatch({type: 'ADD', payload: cart})
  },[])

  // Sync state with local storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
