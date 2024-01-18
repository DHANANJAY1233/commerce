'use client';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles/carousel.css';
import Testimonial from './testimonial';

const Carousel = () => {
  return (
    <div className="bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
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
              <Testimonial
                message="Unikarte's grocery delivery service is exceptional! They always deliver fresh and high-quality products right to my doorstep. Their efficient and friendly staff make my shopping experience hassle-free. Thank you, Unikarte, for making my life easier!"
                name="Emily"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial
                message="UniCarte has been a game-changer for me! Their grocery delivery service in Montreal is fast, reliable, and the selection is amazing. Thanks to them, I can now enjoy quality time with my family instead of spending hours at the store. Highly recommended!"
                name="Sophie"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial
                message="UniCarte has been a lifesaver! Their grocery delivery service in Montreal is prompt and reliable. With their wide selection of fresh produce and pantry staples, I can now enjoy hassle-free shopping from the comfort of my home. Thank you UniCarte for making my life easier!"
                name="Emily"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
