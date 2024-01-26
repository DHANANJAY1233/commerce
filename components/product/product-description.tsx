import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/interface';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b border-neutral-700 pb-6">
        <h1 className="mb-4 text-5xl font-medium">{product.name}</h1>
        <div className="mr-auto w-auto rounded-full bg-[rgb(255,209,97)] p-2 text-sm text-black">
          <Price amount={product.price.toString()} currencyCode={'CAD'} />
        </div>
      </div>

      {product.descriptionHtml ? (
        <Prose className="mb-6 text-sm leading-tight" html={product.descriptionHtml} />
      ) : null}

      {/* TODO: availableForSale should be product dependant*/}
      <AddToCart />
    </>
  );
}
