import Footer from 'components/layout/footer';
import { ProductDelete } from 'components/store-manager/product-delete';

export const runtime = 'edge';

export const metadata = {
  title: 'Store',
  description: 'Store Management Portal'
};

export default async function DeleteProductPage() {

  return (
    <>
      <div className="mt-[-80px] bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
        <div className="container relative z-10 mx-auto px-[1.5rem] pt-16 lg:pt-32">
          <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row">
            <div className="order-last min-h-screen w-full md:order-none">
            <h1 className='font-work text-[30px] mb-4 font-medium leading-[36px] md:text-[35px] md:leading-[42px] xl:text-[48px] xl:leading-[56px]'>Delete a Product</h1>
              <ProductDelete />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
