import Footer from 'components/layout/footer';
import OrderSummary from './order-summary';
import PaymentDetail from './payment-detail';

const cartMock = [
  {
    productId: '1',
    name: 'Bread',
    price: 50,
    imageSrc:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    count: 2
  },
  {
    productId: '3',
    name: 'Oat Milk',
    price: 15,
    imageSrc:
      'https://images.unsplash.com/photo-1611423475621-2a1cd7e2750a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    count: 1
  }
];

let subtotal = 0;
const deliveryCharge = 10;
cartMock.forEach((cartItem) => {
  subtotal = subtotal + cartItem.price * cartItem.count;
});

const Payment = () => {
  return (
    <>
      <div className="mt-[-80px] bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
        <div className="container relative z-10 mx-auto px-[1.5rem] pt-16 lg:pt-32">
          <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row">
            <div className="min-h-screen w-full flex-1 md:order-none">
              <OrderSummary
                cartItems={cartMock}
                deliveryCharge={deliveryCharge}
                subtotal={subtotal}
              />
            </div>
            <div className="flex-1 md:order-last md:w-[125px]">
              <PaymentDetail total={subtotal + deliveryCharge} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
