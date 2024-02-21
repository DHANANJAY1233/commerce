'use client';

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Store } from 'lib/data-types';
import app from 'lib/firebase/init';
import { useEffect, useState } from 'react';
import StoreCard from './store-card';

const StoreList = () => {
  const [storeGalleryList, setStoreGalleryList] = useState<Store[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const db = getFirestore(app);
    const q = query(collection(db, "shops"), where("is_commercial", "==", true))
    getDocs(q).then(querySnapshot => {
      let shops: Store[] = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        shops.push({ ...doc.data(), id: doc.id } as Store)
      });
      setStoreGalleryList(shops)
    }).finally(() => setIsLoading(false))
  }, [])
  return (
    <div className="bg-[rgb(255,209,97)] text-black">
      <div className="container relative z-10 mx-auto px-[1.5rem] pb-16 pt-16 lg:pb-32 lg:pt-32">
        <h1 className="mb-6 text-center font-work text-[30px] font-medium leading-[36px] md:text-[35px] md:leading-[42px] xl:text-[48px] xl:leading-[56px]">
          Choose Your Supermarket Stores
        </h1>
        {isLoading ? <div>Loading...</div> : <div>
          <div className="mb-6 grid grid-cols-1 gap-6 md:mb-10 md:gap-10 lg:grid-cols-3">
            {storeGalleryList.map((store, id) => {
              return <StoreCard key={`${store.name}_${id}`} imageSrc={store?.store_ui?.image_src || ''}
                imageAlt={store.name || ''}
                storeUrl={store?.store_ui?.store_url ? store?.store_ui?.store_url + `&store_id=${store.id}` : ''} />
            })}
          </div>
        </div>}
      </div>
    </div>
  );
};

export default StoreList;
