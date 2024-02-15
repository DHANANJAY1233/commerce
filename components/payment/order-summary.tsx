import { Product } from 'lib/data-types/products';
import OrderItem from './order-item';
import OrderTotal from './order-total';

const OrderSummary = ({
  cartItems,
  subtotal,
  deliveryCharge
}: {
  cartItems: Product[];
  subtotal: number;
  deliveryCharge: number;
}) => {
  return (
    <div>
      <h1 className="mb-6 font-work text-[30px] font-medium leading-[36px] md:text-[35px] md:leading-[42px] xl:text-[48px] xl:leading-[56px]">
        Order Summary
      </h1>
      <hr className="border-black" />
      <div>
        {cartItems.map((cartItem) => {
          return (
            <OrderItem
              key={cartItem.id}
              imageSrc={cartItem.image_src}
              name={cartItem.name}
              price={cartItem.price}
              count={cartItem.count}
            />
          );
        })}
      </div>
      <hr className="border-black" />
      <OrderTotal subtotal={subtotal} delivery={deliveryCharge} />
    </div>
  );
};

export default OrderSummary;
