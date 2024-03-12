'use client';

import { CartContext } from 'components/cart/context';
import { CartActionTypes } from 'components/cart/context/reducers';
import { addDoc, collection, doc, getFirestore, increment, updateDoc } from 'firebase/firestore';
import { Order } from 'lib/data-types/orders';
import { AuthContext } from 'lib/firebase/auth';
import app from 'lib/firebase/init';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { OrderSummary } from './order-summary';
import PaymentDetail from './payment-detail';

const Order = () => {
  const { state, dispatch } = useContext(CartContext)
  const user = useContext(AuthContext)
  const [subtotal, setSubtotal] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const delivery = 0

  useEffect(() => {
    const subtotalVal = state?.reduce((total, item) => {
      return total + (item?.price * item?.count || 0);
    }, 0);
    setSubtotal(subtotalVal)
  }, [state])

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const db = getFirestore(app)
    const order:Order = {
      cart: state,
      delivery, //charges
      status: 'created',
      subtotal,
      user_id: user?.id || '',
      user_loc: user?.loc || {latitude: 0, longitude: 0},
      user_name: user?.name || ''
    }
    try {
      const docRef = await addDoc(collection(db, 'orders'), order)
      console.log('Order created with id:', docRef.id)

      //update store item count
      state.forEach(async(cartItem) => {
        await updateDoc(doc(db, "items", cartItem.id), {
          count: increment(-cartItem.count)
        });
      })

      dispatch({type: CartActionTypes.SYNC, payload: []})
      alert(`Order #${docRef.id} created! Order will be shortly delivered`)
      window.location.href = '/order-now'
    }catch(e) {
      console.log('Error:', e)
      alert('Something went wrong while creating order')
    }finally{
      setIsLoading(false)
    }
    
  }

  return (
    <>
      <OrderSummary items={state} subtotal={subtotal} delivery={delivery} />
      <div className="flex-1 md:order-last md:w-[125px]">
        <PaymentDetail total={subtotal + delivery} isLoading={isLoading} handleSubmit={handleSubmit} />
      </div>
    </>

  );
};

export default Order;
