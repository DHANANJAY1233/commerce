import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mt-[-80px] bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
        <div className="container relative z-10 mx-auto px-[1.5rem] pt-16 lg:pt-32">
          <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row">
            <div className="order-first w-full flex-none md:max-w-[125px]">
              <Collections />
            </div>
            <div className="order-last min-h-screen w-full md:order-none">{children}</div>
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
