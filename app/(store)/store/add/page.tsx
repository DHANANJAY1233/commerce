import Footer from 'components/layout/footer';
import ProductAddForm from 'components/store-manager/product-add-form';
import { notFound } from 'next/navigation';

export const runtime = 'edge';

export const metadata = {
    title: 'Product',
    description: 'Product add page'
};

export default async function ProductAddPage({
    searchParams
}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {

    const { store_id } = searchParams as { [key: string]: string };
    if(!store_id) return notFound()
    return (
        <>
            <div className="mt-[-80px] bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
                <div className="container relative z-10 mx-auto px-[1.5rem] pt-16 lg:pt-32">
                    <div className="mx-auto max-w-screen-2xl px-4 h-screen">
                        <h1 className='font-work text-[30px] font-medium leading-[36px] md:text-[35px] md:leading-[42px] xl:text-[48px] xl:leading-[56px]'>Add a Product</h1>
                        <ProductAddForm storeId={store_id} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};
