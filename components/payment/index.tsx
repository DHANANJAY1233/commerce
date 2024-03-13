'use client';

import { AuthContext } from 'lib/firebase/auth';
import { redirect } from 'next/navigation';
import { useContext } from 'react';
import OrderPayment from './order-payment';

const Payment = () => {
  const user = useContext(AuthContext);
  if(user === undefined) {
    return <div>Loading ...</div>
  }
  if(user === null || user.type!== 'shopper') {
    redirect('/login')
  }
  
  return (
      <OrderPayment />
  );
};

export default Payment;
