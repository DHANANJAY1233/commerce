'use client';

import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import LogoSquare from 'components/logo-square';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { User } from './user';

interface NavbarProps {
  siteName: string | undefined;
  userType?: "shopper" | "seller" | "executive"
}

export default function Navbar({ siteName, userType = 'shopper' }: NavbarProps) {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-[49] flex items-center justify-between ${
        isScrolled ? 'bg-[#52bf8d] shadow-md' : 'bg-transparent'
      } p-4 lg:px-6`}
    >
      <div className="container relative mx-auto flex w-full items-center justify-center">
        <div className="flex">
          <Link href={userType === 'seller' ? '/seller' : '/'} className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <LogoSquare />
            <h2 className="ml-2 flex-none font-header text-[32px] font-light text-black lg:block">
              {siteName} {userType === 'seller' ? 'Seller': userType === 'executive' ? 'Executive': ''}
            </h2>
          </Link>
        </div>
        <div className="absolute right-0 flex gap-5 z-[1]">
          {userType === 'shopper' && 
            <>
              <Link href="/order-now" className="hidden rounded-[8px] border-2 border-[#ffe75f] bg-[#ffe75f] px-[16px] py-[6px] text-[20px] text-black md:block">
                Order Now
              </Link>
              <div>
                <Suspense fallback={<OpenCart />}>
                  <Cart />
                </Suspense>
              </div>
            </>
          }
          {
            userType === 'seller' && 
              <Link href="/store" className="hidden rounded-[8px] border-2 border-[#ffe75f] bg-[#ffe75f] px-[16px] py-[6px] text-[20px] text-black md:block">
                Manage Store
              </Link>
          }
          {
            userType === 'executive' && 
            <Link href="/delivery" className="hidden rounded-[8px] border-2 border-[#ffe75f] bg-[#ffe75f] px-[16px] py-[6px] text-[20px] text-black md:block">
              Manage Deliveries
            </Link>
          }
          <User userType={userType} />
        </div>
      </div>
    </nav>
  );
}
