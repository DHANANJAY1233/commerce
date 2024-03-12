'use client';

import { AuthContext } from 'lib/firebase/auth';
import { redirect } from 'next/navigation';
import { useContext } from 'react';
import Order from './order';

const Payment = () => {
  const user = useContext(AuthContext);
  if(user === undefined) {
    return <div>Loading ...</div>
  }
  if(user === null || user.type!== 'shopper') {
    redirect('/login')
  }
  
  return (
      <Order />
  );
};

export default Payment;
