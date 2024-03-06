import Footer from 'components/layout/footer';
import { StoreManager } from 'components/store-manager';

export const runtime = 'edge';

export const metadata = {
  title: 'Store',
  description: 'Store Management Portal'
};

export default async function StorePage() {

  return (
    <>
      <div className="mt-[-80px] min-h-screen bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
        <div className="container relative z-10 mx-auto px-[1.5rem] pt-16 lg:pt-32">
          <StoreManager />
        </div> 
      </div>
      <Footer />
    </>
  );
}
