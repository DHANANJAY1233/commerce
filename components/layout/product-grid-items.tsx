import CloseCart from 'components/cart/close-cart';
import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { deleteDoc, doc, getFirestore } from 'firebase/firestore';
import { Product } from 'lib/data-types/products';
import app from 'lib/firebase/init';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductGridItems({ products, isStoreManager = false, deleteProduct = false }: { products: Product[], isStoreManager?: boolean, deleteProduct?: boolean }) {
  const [isLoading, setIsLoading] = useState(false)
  const deleteHandler = async (id: string) => {
    const del = window.confirm("Are you sure you want to delete this item?")
    if (del) {
      setIsLoading(true)
      const db = getFirestore(app)
      try {
        await deleteDoc(doc(db, "items", id));
        window.alert('Product was successfully removed.')
        location.reload()
      } catch (e) {
        console.log('Error:', e)
      } finally {
        setIsLoading(false)
      }

    }
  }
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.id} className="animate-fadeIn">
          {deleteProduct ? (
            <div className='relative inline-block h-full w-full'>
              <button aria-label="Close cart" className='absolute z-10 right-5 top-5 bg-[rgb(255,209,97)]' onClick={() => deleteHandler(product.id)}>
                <CloseCart />
              </button>
              <GridTileImage
                alt={product.name}
                label={{
                  title: product.name,
                  amount: product.price.toString(),
                  currencyCode: 'CAD',
                }}
                src={product.image_src}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
          ) : (
            <Link
              className="relative inline-block h-full w-full"
              href={`${isStoreManager ? '/store/edit' : '/product'}/${product.id}`}
            >
              <GridTileImage
                alt={product.name}
                label={{
                  title: product.name,
                  amount: product.price.toString(),
                  currencyCode: 'CAD',
                }}
                src={product.image_src}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </Link>
          )}
        </Grid.Item>
      ))}
      {isLoading && <div className='fixed top-0 left-0 w-full h-full z-[100] bg-gray-500 opacity-75 flex justify-center items-center'>
        <h1 className='font-work text-[30px] mb-4 font-medium leading-[36px] md:text-[35px] md:leading-[42px] xl:text-[48px] xl:leading-[56px]'>Please wait ...</h1>
      </div>}
    </>
  );
}
