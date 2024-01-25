'use client';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GalleryCard from './gallery-card';
import './styles/carousel.css';

const storeGalleryList = [
  {
    imageSrc:
      'https://images.unsplash.com/photo-1553688737-e4fbcdad80c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'local-store-1'
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1526267814039-b53c93dc3bc4?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'local-store-1'
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'local-store-1'
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'local-store-1'
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1585781207801-980f0274f317?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'local-store-1'
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1561385945-c99789cd12d1?q=80&w=2795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'local-store-1'
  }
];

const StoreCarousel = () => {
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
        slidesPerView={4}
        centeredSlides
        initialSlide={2}
        spaceBetween="30px"
      >
        {storeGalleryList.map((galleryItem) => {
          return (
            <SwiperSlide>
              <GalleryCard imageSrc={galleryItem.imageSrc} imageAlt={galleryItem.imageAlt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default StoreCarousel;
