'use client';

import Link from 'next/link';
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
    imageSrc: '/marche-euro-entrance.jpeg',
    imageAlt: 'marche-euro-victoria',
    pos: 'center',
    url: '/search?store=victoria'
  },
  {
    imageSrc: '/marche-jang-teu.png',
    imageAlt: 'marche-jang-teu',
    pos: 'center',
    url: '/search?store=jangteu'
  },
  {
    imageSrc: '/tharsini-entrance.jpeg',
    imageAlt: 'marche-tharsini',
    pos: 'right',
    url: '/search?store=tharsini'
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
        slidesPerView={3}
        centeredSlides
        initialSlide={2}
        spaceBetween="30px"
      >
        {[...storeGalleryList, ...storeGalleryList].map((galleryItem) => {
          return (
            <SwiperSlide>
              <Link href={galleryItem.url}>
                <GalleryCard
                  imageSrc={galleryItem.imageSrc}
                  imageAlt={galleryItem.imageAlt}
                  pos={galleryItem.pos}
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
