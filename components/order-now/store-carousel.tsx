'use client';

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Store } from 'lib/data-types';
import app from 'lib/firebase/init';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GalleryCard from './gallery-card';
import './styles/carousel.css';

const StoreCarousel = () => {
  const [storeGalleryList, setStoreGalleryList] = useState<Store[]>([])
  useEffect(() => {
    const db = getFirestore(app);
    const q = query(collection(db, "shops"), where("is_commercial", "==", false))
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
    <div className="mt-[-80px] bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
      <div className="container relative z-10 mx-auto px-[1.5rem] pt-16 lg:pt-32">
        <h1 className="mb-6 text-center font-work text-[30px] font-medium leading-[36px] md:text-[35px] md:leading-[42px] xl:text-[48px] xl:leading-[56px]">
          Choose Your Local Stores
        </h1>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        pagination
        loop={true}
        slidesPerView={3}
        centeredSlides
        initialSlide={2}
        spaceBetween="30px"
      >
        {storeGalleryList && storeGalleryList.length > 0 && [...storeGalleryList, ...storeGalleryList].map((galleryItem, id) => {
          return (
            <SwiperSlide key={`${galleryItem.name}_${id}`}>
              <Link href={galleryItem?.store_ui?.store_url || ''}>
                <GalleryCard
                  imageSrc={galleryItem?.store_ui?.image_src || ''}
                  imageAlt={galleryItem.name}
                  pos={galleryItem?.store_ui?.pos || 'center'}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default StoreCarousel;
