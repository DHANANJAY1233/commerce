import LogoSquare from 'components/logo-square';
import Link from 'next/link';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  return (
    <footer className="bg-[rgb(255,209,97)] text-sm text-black">
      <div className="container relative z-10 mx-auto pb-8 pt-8 lg:pb-12 lg:pt-12">
        <div className="flex flex-col justify-center gap-12 text-center">
          <div className="flex flex-col items-center gap-6">
            <Link
              href="/"
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <LogoSquare />
              <h2 className="ml-2 flex-none font-header text-[32px] font-light text-black lg:block">
                {SITE_NAME}
              </h2>
            </Link>
          </div>
          <div className="flex flex-col justify-center gap-12 lg:gap-14" />
          <p className="body-normal whitespace-nowrap !text-center lg:text-right">
            Crafted by ▲ Unikart
          </p>
        </div>
      </div>
    </footer>
  );
}
