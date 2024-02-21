import Footer from 'components/layout/footer';
import MapWidget from 'components/map-widget';

export const runtime = 'edge';

export const metadata = {
  title: 'Product',
  description: 'Product description page'
};

export default async function DeliveryPage() {
  const api_key = process.env.GOOGLE_MAP_KEY;
  return (
    <>
      <div className="mt-[-80px] bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
        <div className="container relative z-10 mx-auto px-[1.5rem] pb-16 pt-16 lg:pb-32 lg:pt-32">
          <MapWidget apikey={api_key || ''} />
        </div>
      </div>
      <Footer />
    </>
  );
}
