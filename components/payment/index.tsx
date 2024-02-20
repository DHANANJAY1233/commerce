'use client';

import Footer from 'components/layout/footer';
import OrderSummary from './order-summary';

const Payment = () => {
  
  return (
    <>
      <div className="mt-[-80px] bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
        <div className="container relative z-10 mx-auto px-[1.5rem] pt-16 lg:pt-32">
            <OrderSummary />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
