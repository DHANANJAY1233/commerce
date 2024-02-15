'use client';

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Store } from 'lib/data-types';
import app from 'lib/firebase/init';
import { useEffect, useState } from 'react';
import StoreCard from './store-card';

const storeList = [
  {
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/IGA_logo.svg',
    imageAlt: 'IGA',
    storeUrl: '/search?store=iga'
  },
  {
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg',
    imageAlt: 'Walmart',
    storeUrl: '/search?store=walmart'
  },
  {
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Metro_Inc._logo.svg',
    imageAlt: 'Metro',
    storeUrl: '/search?store=metro'
  },
  {
    imageSrc: 'https://upload.wikimedia.org/wikipedia/en/6/60/Superc_grocery_logo.png',
    imageAlt: 'Super-c',
    storeUrl: '/search?store=superc'
  },
  {
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/5/59/Costco_Wholesale_logo_2010-10-26.svg',
    imageAlt: 'Costco',
    storeUrl: '/search?store=costco'
  },
  {
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/2/29/Maxi_%28Canadian_supermarket%29_logo.svg',
    imageAlt: 'Maxi',
    storeUrl: '/search?store=maxi'
  }
];

const StoreList = () => {
  const [storeGalleryList, setStoreGalleryList] = useState<Store[]>([])
  useEffect(() => {
    const db = getFirestore(app);
    const q = query(collection(db, "shops"), where("is_commercial", "==", true))
    getDocs(q).then(querySnapshot => {
      let shops:Store[] = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        shops.push(doc.data() as Store)
      });
      setStoreGalleryList(shops)
    })
  },[])
  return (
    <div className="bg-[rgb(255,209,97)] text-black">
      <div className="container relative z-10 mx-auto px-[1.5rem] pb-16 pt-16 lg:pb-32 lg:pt-32">
        <h1 className="mb-6 text-center font-work text-[30px] font-medium leading-[36px] md:text-[35px] md:leading-[42px] xl:text-[48px] xl:leading-[56px]">
          Choose Your Supermarket Stores
        </h1>
        <div>
          <div className="mb-6 grid grid-cols-1 gap-6 md:mb-10 md:gap-10 lg:grid-cols-3">
            {storeGalleryList.map((store, id) => {
              return <StoreCard key={`${store.name}_${id}`} imageSrc={store?.store_ui?.image_src || ''}
              imageAlt={store.name || ''}
              storeUrl={store?.store_ui?.store_url || ''} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreList;
