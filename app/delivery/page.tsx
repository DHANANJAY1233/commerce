import Footer from 'components/layout/footer';
import MapWidget from 'components/map-widget';

export const runtime = 'edge';

export const metadata = {
  title: 'Product',
  description: 'Product description page'
};

export default async function DeliveryPage() {
  return (
    <>
      <div className="mt-[-80px] bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
        <div className="container relative z-10 mx-auto px-[1.5rem] pt-16 lg:pt-32">
          <MapWidget />
        </div>
      </div>
      <Footer />
    </>
  );
}
