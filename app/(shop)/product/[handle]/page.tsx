
import Product from 'components/product';

export const runtime = 'edge';

export const metadata = {
  title: 'Product',
  description: 'Product description page'
};

export default async function ProductPage({ params }: { params: { handle: string } }) {

  return <div className="mt-[-80px] bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
    <div className="container relative z-10 mx-auto px-[1.5rem] pt-16 lg:pt-32">
      <div className="mx-auto max-w-screen-2xl px-4 h-screen"><Product id={params.handle} /></div></div></div>
}
