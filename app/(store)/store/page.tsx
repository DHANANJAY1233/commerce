import Footer from 'components/layout/footer';
import BreadCrumb from 'components/search/breadcrumb';
import ProductList from 'components/search/product-list';
import ManagerOptions from 'components/store-manager/manager-options';

export const runtime = 'edge';

export const metadata = {
  title: 'Store',
  description: 'Store Management Portal'
};

export default async function StorePage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { store_id } = searchParams as { [key: string]: string };

  return (
    <>
      <div className="mt-[-80px] bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
        <div className="container relative z-10 mx-auto px-[1.5rem] pt-16 lg:pt-32">
          <BreadCrumb storeId={store_id || ''} isStoreManager />
          <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row">
            <div className="order-first w-full flex-none md:max-w-[125px]">
              <ManagerOptions />
            </div>
            <div className="order-last min-h-screen w-full md:order-none">
              <ProductList store_id={store_id} isStoreManager />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
