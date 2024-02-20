'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import LoadingDots from 'components/loading-dots';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Product } from 'lib/data-types/products';
import app from 'lib/firebase/init';
import { useContext, useState } from 'react';
import { CartContext } from './context';
import { CartActionTypes } from './context/reducers';

function SubmitButton({ type, handler }: { type: 'plus' | 'minus', handler: Function }) {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <button
      onClick={async () => {
        setIsLoading(true)
        await handler()
        setIsLoading(false)
      }}
      disabled={isLoading}
      aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
      className={clsx(
        'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80',
        {
          'ml-auto': type === 'minus'
        }
      )}
    >
      {type === 'plus' ? (
        isLoading ? <LoadingDots className="bg-black" />:<PlusIcon className="h-4 w-4" />
      ) : (
        <MinusIcon className="h-4 w-4" />
      )}
    </button>
  );
}

export function EditItemQuantityButton({ item, type }: { item: Product; type: 'plus' | 'minus' }) {

  const { state, dispatch } = useContext(CartContext)

  const updateByOne = async(item: Product) => {
    // Try to retrieve the cart from localStorage and parse it as JSON
    const cartStorage = localStorage.getItem('cart')
    let cart: Product[] = []
    if (cartStorage) {
      cart = JSON.parse(cartStorage) || [];
    }

    // Check if the item already exists in the cart
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      //find count from firebase
      let skuCount = 0
      const db = getFirestore(app);
      const docRef = doc(db, "items", existingItem.id);
      const querySnapshot = await getDoc(docRef)
      if (!querySnapshot.exists()) {
        window.alert("Unable to fetch available units")
        return
      } else {
        skuCount = querySnapshot.data().count
      }
      if (existingItem.count >= skuCount) {
        window.alert("No more units available")
        return
      }
      // If the item exists, update its quantity
      existingItem.count += 1;
      dispatch({type: CartActionTypes.UPDATE, payload: {id: existingItem.id, count: existingItem.count}})
    } else {
      // If the item doesn't exist, add it to the cart with quantity 1
      const newItem = { ...item, count: 1 };
      dispatch({ type: CartActionTypes.ADD, payload: newItem })
    }
  }

  const removeItemByOne = (item: Product) => {
    // Try to retrieve the cart from localStorage and parse it as JSON
    const cartStorage = localStorage.getItem('cart')
    let cart: Product[] = []
    if (cartStorage) {
      cart = JSON.parse(cartStorage) || [];
    }

    // Check if the item already exists in the cart
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      if(existingItem.count > 1) {
        // decrease the count
        existingItem.count -= 1;
        dispatch({type: CartActionTypes.UPDATE, payload: {id: existingItem.id, count: existingItem.count}})
      } else if (existingItem.count === 1) {
        //remove from cart
        const cartItemToBeRemoved = cart.find(cartItem => cartItem.id === item.id);
        if(cartItemToBeRemoved) dispatch({type: CartActionTypes.DELETE, payload:{id: cartItemToBeRemoved.id}})
      }

    }
  }

  return (
    <SubmitButton handler={() => type === 'minus' ? removeItemByOne(item) : updateByOne(item)} type={type} />
  );
}
