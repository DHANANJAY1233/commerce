import { getCart } from 'lib/shopify';
import CartModal from './modal';

export default async function Cart() {
  const cartId = null;

  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  return <CartModal cart={cart} />;
}
