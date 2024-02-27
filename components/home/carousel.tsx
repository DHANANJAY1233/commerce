'use client';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles/carousel.css';
import Testimonial from './testimonial';

const Carousel = ({testimonials}:{testimonials:Testimonial[]}) => {
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
            {testimonials.map(testimonial => {
              return <SwiperSlide>
                 <Testimonial {...testimonial} />
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
