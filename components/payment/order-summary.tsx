import { CartContext } from 'components/cart/context';
import { useContext, useEffect, useState } from 'react';
import OrderItem from './order-item';
import OrderTotal from './order-total';
import PaymentDetail from './payment-detail';

const OrderSummary = () => {
  const { state } = useContext(CartContext)
  const [subtotal, setSubtotal] = useState(0)
  const delivery = 0

  useEffect(() => {
    const subtotalVal = state?.reduce((total, item) => {
      return total + (item?.price * item?.count || 0);
    }, 0);
    setSubtotal(subtotalVal)
  }, [state])
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row">
      <div className="min-h-screen w-full flex-1 md:order-none">
        <h1 className="mb-6 font-work text-[30px] font-medium leading-[36px] md:text-[35px] md:leading-[42px] xl:text-[48px] xl:leading-[56px]">
          Order Summary
        </h1>
        <hr className="border-black" />
        <div>
          {state.map((cartItem) => {
            return (
              <OrderItem
                key={cartItem.id}
                imageSrc={cartItem.image_src}
                name={cartItem.name}
                price={cartItem.price}
                count={cartItem.count}
                storeName={cartItem.store_name}
              />
            );
          })}
        </div>
        <hr className="border-black" />
        <OrderTotal subtotal={subtotal} delivery={delivery} />
      </div>
      <div className="flex-1 md:order-last md:w-[125px]">
        <PaymentDetail total={subtotal + delivery} />
      </div>
    </div>

  );
};

export default OrderSummary;
