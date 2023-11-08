'use client';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles/carousel.css';

const Carousel = () => {
  return (
    <div className="break-word relative flex flex-none flex-shrink-0 items-center">
      <div className="container relative z-10 mx-auto px-[1.5rem] pb-16 pt-16 lg:pb-32 lg:pt-32">
        <Swiper
          navigation={true}
          autoplay
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper"
          pagination
          loop={true}
        >
          <SwiperSlide>
            <div className="my-auto mb-16 flex h-full px-8 md:px-28">
              <div className="break-word ml-0 mr-auto flex flex-col items-start justify-center gap-4 text-left lg:max-w-5xl">
                <h3 className="large whitespace-pre-line text-[24px] lg:text-[28px] xl:text-[32px]">
                  Unikarte&apos;s grocery delivery service is exceptional! They always deliver fresh
                  and high-quality products right to my doorstep. Their efficient and friendly staff
                  make my shopping experience hassle-free. Thank you, Unikarte, for making my life
                  easier!
                </h3>
                <p className="large whitespace-pre-line text-[16px] lg:text-[18px] xl:text-[24px]">
                  - Emily
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-auto mb-16 flex h-full px-8 md:px-28">
              <div className="break-word ml-0 mr-auto flex flex-col items-start justify-center gap-4 text-left lg:max-w-5xl">
                <h3 className="large whitespace-pre-line text-[24px] lg:text-[28px] xl:text-[32px]">
                  Unikarte&apos;s grocery delivery service is exceptional! They always deliver fresh
                  and high-quality products right to my doorstep. Their efficient and friendly staff
                  make my shopping experience hassle-free. Thank you, Unikarte, for making my life
                  easier!
                </h3>
                <p className="large whitespace-pre-line text-[16px] lg:text-[18px] xl:text-[24px]">
                  - Sophie
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-auto mb-16 flex h-full px-8 md:px-28">
              <div className="break-word ml-0 mr-auto flex flex-col items-start justify-center gap-4 text-left lg:max-w-5xl">
                <h3 className="large whitespace-pre-line text-[24px] lg:text-[28px] xl:text-[32px]">
                  Unikarte&apos;s grocery delivery service in Montreal is exceptional! They always
                  deliver fresh produce and their customer service is top-notch. Thank you for
                  making my life easier and ensuring I have everything I need at my doorstep. Highly
                  recommended!
                </h3>
                <p className="large whitespace-pre-line text-[16px] lg:text-[18px] xl:text-[24px]">
                  - Emily
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
