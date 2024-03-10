'use client';

import { collection, documentId, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Product } from 'lib/data-types';
import app from 'lib/firebase/init';
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
    if(cart.length === 0) {
      dispatch({type: CartActionTypes.SYNC, payload: []})
      return
    }
    const productIds = cart.map(cartItems => cartItems.id)
    const availableProducts:Record<string, Product> = {};

    const db = getFirestore(app)
    const q = query(collection(db, 'items'), where(documentId(), 'in', productIds));
    getDocs(q).then(querySnapshot => {
      querySnapshot.forEach(doc => {
        availableProducts[doc.id] = doc.data() as Product;
      });
      const updatedCartItems = cart.filter(item => {
        const product = availableProducts[item.id];
        // If product exists and stock is sufficient, keep the item in the cart
        if (product && item.count <= product.count) {
          return true;
        }
        // If product exists but stock is insufficient, adjust the item's quantity
        else if (product && item.count > product.count) {
          item.count = product.count;
          return true;
        }
        // Remove the item from the cart if it no longer exists or stock is 0
        return false;
      });
      dispatch({type: CartActionTypes.SYNC, payload: updatedCartItems})
    }).catch(e => {
      console.log('Something went wrong while syncing cart', e)
    }) 
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
