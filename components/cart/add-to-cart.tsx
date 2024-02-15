'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Product } from 'lib/data-types/products';
import { useContext } from 'react';
import { CartContext } from './context';

function SubmitButton({addToCartHandler}: {addToCartHandler: Function}) {
  const buttonClasses =
    'relative flex w-full items-center justify-center rounded-full bg-[rgb(82,191,141)] p-4 tracking-wide text-white';

  return (
    <button
      onClick={() => addToCartHandler()}
      aria-label="Add to cart"
      // aria-disabled={pending}
      className={clsx(buttonClasses, {
        'hover:opacity-90': true
      })}
    >
      <div className="absolute left-0 ml-4">
        <PlusIcon className="h-5" />
      </div>
      Add To Cart
    </button>
  );
}

export function AddToCart({product}:{product: Product}) {

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
        if(cart[existingItemIndex].count >= item.count) {
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

  return (
    <SubmitButton addToCartHandler={() => addToCart(product)}  />
  );
}
