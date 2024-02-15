'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Product } from 'lib/data-types/products';
import { useContext } from 'react';
import { CartContext } from './context';

function SubmitButton({deleteHandler}:{deleteHandler: Function}) {

  return (
    <button
      onClick={() => deleteHandler()}
      aria-label="Remove cart item"
      className={clsx(
        'ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#ffe75f] transition-all duration-200',
      )}
    >
        <XMarkIcon className="hover:text-accent-3 mx-[1px] h-4 w-4 text-black" />
    </button>
  );
}

export function DeleteItemButton({ item }: { item: Product }) {

  const {state, dispatch} = useContext(CartContext)

  const deleteFromCart = (item:Product) => {
    // Try to retrieve the cart from localStorage and parse it as JSON
    const cartStorage = localStorage.getItem('cart')
    let cart:Product[] = []
    if(cartStorage) {
      cart = JSON.parse(cartStorage) || [];
    }

    // Check if the item already exists in the cart
    const cartAfterRemovedItem = cart.filter(cartItem => cartItem.id !== item.id);

    dispatch({type: 'DEL', payload:cartAfterRemovedItem})
  }

  return (
      <SubmitButton deleteHandler={() => deleteFromCart(item)} />
  );
}
