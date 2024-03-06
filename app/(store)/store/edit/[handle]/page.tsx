import Footer from 'components/layout/footer';
import ProductEditForm from 'components/store-manager/form/product-edit-form';

export const runtime = 'edge';

export const metadata = {
  title: 'Product',
  description: 'Product Edit page'
};

export default async function ProductEditPage({ params }: { params: { handle: string } }) { 
  return (
    <>
      <div className="mt-[-80px] bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
        <div className="container relative z-10 mx-auto px-[1.5rem] pt-16 lg:pt-32">
          <div className="mx-auto max-w-screen-2xl px-4 h-screen">
            <h1 className='font-work text-[30px] font-medium leading-[36px] md:text-[35px] md:leading-[42px] xl:text-[48px] xl:leading-[56px]'>Edit Product</h1>
            <ProductEditForm id={params.handle} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};
