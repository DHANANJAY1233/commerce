'use client';

import { AuthContext } from 'lib/firebase/auth';
import { redirect } from 'next/navigation';
import { useContext } from 'react';
import OrderSummary from './order-summary';

const Payment = () => {
  const user = useContext(AuthContext);
  if(user === undefined) {
    return <div>Loading ...</div>
  }
  if(user === null || user.type!== 'shopper') {
    redirect('/login')
  }
  
  return (
      <OrderSummary />
  );
};

export default Payment;
