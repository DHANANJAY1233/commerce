'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Product } from 'lib/data-types/products';
import { useContext } from 'react';
import { CartContext } from './context';

function SubmitButton({ type, handler }: { type: 'plus' | 'minus', handler: Function }) {

  return (
    <button
      onClick={() => handler()}
      aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
      className={clsx(
        'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80',
        {
          'ml-auto': type === 'minus'
        }
      )}
    >
  {type === 'plus' ? (
        <PlusIcon className="h-4 w-4" />
      ) : (
        <MinusIcon className="h-4 w-4" />
      )}
    </button>
  );
}

export function EditItemQuantityButton({ item, type }: { item: Product; type: 'plus' | 'minus' }) {

  const {state, dispatch} = useContext(CartContext)

  const addToCart = (item:Product) => {
    // Try to retrieve the cart from localStorage and parse it as JSON
    const cartStorage = localStorage.getItem('cart')
    let cart:Product[] = []
    if(cartStorage) {
      cart = JSON.parse(cartStorage) || [];
    }

    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex >= 0) {
      //TODO: Remove hardcoded
        if(cart[existingItemIndex].count >= 10) {
          window.alert("No more units available")
          return
        }
        // If the item exists, update its quantity
        cart[existingItemIndex].count += 1;
    } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        const newItem = { ...item, count: 1 };
        cart.push(newItem);
    }

    dispatch({type: 'ADD', payload: cart})
   
  }

  const removeItemByOne = (item:Product) => {
     // Try to retrieve the cart from localStorage and parse it as JSON
     const cartStorage = localStorage.getItem('cart')
     let cart:Product[] = []
     if(cartStorage) {
       cart = JSON.parse(cartStorage) || [];
     }
 
     // Check if the item already exists in the cart
     const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
 
     if (existingItemIndex >= 0 && cart[existingItemIndex].count > 1) {
          cart[existingItemIndex].count -= 1;
     }
 
     dispatch({type: 'REMOVE', payload: cart})
  }

  return (
      <SubmitButton handler={() => type === 'minus' ? removeItemByOne(item): addToCart(item)} type={type} />
  );
}
