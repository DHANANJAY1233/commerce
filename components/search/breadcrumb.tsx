'use client';

import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Store } from 'lib/data-types';
import app from 'lib/firebase/init';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const BreadCrumb = ({ storeId, isStoreManager = false }: { storeId: string, isStoreManager?: boolean }) => {
  const [store, setStore] = useState<Store | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const db = getFirestore(app);
    const docRef = doc(db, "shops", storeId);
    getDoc(docRef).then(querySnapshot => {
      if (querySnapshot.exists()) {
        setStore({ ...querySnapshot.data(), id: querySnapshot.id } as Store)
      }
    }).finally(() => setIsLoading(false))
  }, [])
  return isLoading ? <p>Loading...</p> : (store && store.store_ui.image_src && <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-8 px-4 pb-4 text-black md:flex-row">
    <div className="order-first w-full flex-none md:max-w-[125px]">
      <Image
        src={store.store_ui.image_src}
        alt="breadcrumb-logo"
        height={500}
        width={500}
        className="object-contains"
      />
    </div>
    <div className="order-last w-full md:order-none">
      <h1 className="font-work text-[30px] font-medium leading-[36px] md:text-[35px] md:leading-[42px] xl:text-[48px] xl:leading-[56px]">
        {isStoreManager ? `${store.name} Store Manager` : `Welcome to ${store.name}`}
      </h1>
      {isStoreManager && <p>Your inventory at a glance</p>}
    </div>
  </div>)
};

export default BreadCrumb;
