'use client';

import { CartContext } from 'components/cart/context';
import Footer from 'components/layout/footer';
import { Product } from 'lib/data-types/products';
import { useContext } from 'react';
import OrderSummary from './order-summary';
import PaymentDetail from './payment-detail';

const Payment = () => {
  const {state, dispatch} = useContext(CartContext)
  let subtotal = 0
  let delivery = 0
  if(subtotal !== 0) {
    delivery = 10
  }

  state?.forEach((item:Product)=> {
    subtotal = subtotal + item?.price*item?.count || 0
  })
  return (
    <>
      <div className="mt-[-80px] bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
        <div className="container relative z-10 mx-auto px-[1.5rem] pt-16 lg:pt-32">
          <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row">
            <div className="min-h-screen w-full flex-1 md:order-none">
              <OrderSummary
                cartItems={state}
                deliveryCharge={delivery}
                subtotal={subtotal}
              />
            </div>
            <div className="flex-1 md:order-last md:w-[125px]">
              <PaymentDetail total={subtotal + delivery} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
