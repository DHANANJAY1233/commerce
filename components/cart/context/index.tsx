'use client';

import { Product } from 'lib/data-types';
import React, { ReactNode, createContext, useEffect, useReducer } from 'react';
import { CartAction, CartActionTypes, cartReducer } from './reducers';

interface CartContextType {
  state: Product[];
  dispatch: React.Dispatch<CartAction>;
}

export const CartContext = createContext<CartContextType>({ state: [], dispatch: () => {} });

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const cartStorage = localStorage.getItem('cart')
    let cart:Product[] = []
    if(cartStorage) {
      cart = JSON.parse(cartStorage) || [];
    }
    dispatch({type: CartActionTypes.SYNC, payload: cart})
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
