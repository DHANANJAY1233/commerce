import Grid from 'components/grid';
import Footer from 'components/layout/footer';
import ProductGridItems from 'components/layout/product-grid-items';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import BreadCrumb from 'components/search/breadcrumb';
import { logoMapper } from 'components/search/logo-mapper';
import { defaultSort, sorting } from 'lib/constants';
import { productMock as products } from './mock';

export const runtime = 'edge';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, store } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  // const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'results' : 'result';
  const logoToShow = store && logoMapper[store];

  return (
    <>
      <div className="mt-[-80px] bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
        <div className="container relative z-10 mx-auto px-[1.5rem] pt-16 lg:pt-32">
          {logoToShow && <BreadCrumb imageSrc={logoToShow.logo} shopName={logoToShow.name} />}
          <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row">
            <div className="order-first w-full flex-none md:max-w-[125px]">
              <Collections />
            </div>
            <div className="order-last min-h-screen w-full md:order-none">
              {products.length > 0 ? (
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <ProductGridItems products={products} />
                </Grid>
              ) : null}
            </div>
            <div className="order-none flex-none md:order-last md:w-[125px]">
              <FilterList list={sorting} title="Sort by" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
