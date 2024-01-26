import { notFound } from 'next/navigation';

import { productMock as products } from 'app/search/mock';
import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { ProductDescription } from 'components/product/product-description';

export const runtime = 'edge';

export const metadata = {
  title: 'Product',
  description: 'Product description page'
};

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = products.find((product) => product.productId === params.handle);

  if (!product) return notFound();

  return (
    <>
      <div className="mt-[-80px] bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
        <div className="container relative z-10 mx-auto px-[1.5rem] pt-16 lg:pt-32">
          <div className="mx-auto max-w-screen-2xl px-4">
            <div className="flex flex-col rounded-lg p-8 md:p-12 lg:flex-row lg:gap-8">
              <div className="h-full w-full basis-full lg:basis-4/6">
                <Gallery imageSrc={product.imageSrc} />
              </div>

              <div className="basis-full lg:basis-2/6">
                <ProductDescription product={product} />
              </div>
            </div>
            {/* <Suspense>
          <RelatedProducts id={product.id} />
        </Suspense> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// async function RelatedProducts({ id }: { id: string }) {
//   //todo: make actual recommendations according to id
//   const relatedProducts = mockProductList;

//   if (!relatedProducts.length) return null;

//   return (
//     <div className="py-8">
//       <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
//       <ul className="flex w-full gap-4 overflow-x-auto pt-1">
//         {relatedProducts.map((product) => (
//           <li
//             key={product.handle}
//             className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
//           >
//             <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
//               <GridTileImage
//                 alt={product.title}
//                 label={{
//                   title: product.title,
//                   amount: product.priceRange.maxVariantPrice.amount,
//                   currencyCode: product.priceRange.maxVariantPrice.currencyCode
//                 }}
//                 src={product.featuredImage?.url}
//                 fill
//                 sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
//               />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
