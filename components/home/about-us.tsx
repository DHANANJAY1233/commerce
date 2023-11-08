import Image from 'next/image';
import Carousel from './carousel';

const AboutUs = () => {
  return (
    <div className="bg-[rgb(0,211,245)]">
      <div className="break-word relative flex flex-none flex-shrink-0 items-center">
        <div className="container relative z-10 mx-auto px-[1.5rem] pb-16 pt-16 lg:pb-32 lg:pt-32">
          <div className="mb-6 grid grid-cols-1 gap-6 md:mb-10 md:gap-10 lg:grid-cols-3">
            <div className="flex justify-center">
              <Image
                className="aspect-square rounded-sm object-cover object-center md:rounded-md lg:rounded-lg"
                src="https://images.unsplash.com/photo-1606237906294-ae86d103d715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxN3x8Z3JvY2VyeSUyMGRlbGl2ZXJ5JTIwfGVufDB8fHx8MTY5OTMyMDk0NXww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
                alt="our-service-1"
                height={500}
                width={500}
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="aspect-square rounded-sm object-cover object-center md:rounded-md lg:rounded-lg"
                src="https://images.unsplash.com/photo-1583922146273-68f11083858e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyN3x8Z3JvY2VyeSUyMGRlbGl2ZXJ5JTIwfGVufDB8fHx8MTY5OTMyMDk0NXww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
                alt="our-service-1"
                height={500}
                width={500}
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="aspect-square rounded-sm object-cover object-center md:rounded-md lg:rounded-lg"
                src="https://images.unsplash.com/photo-1611059264934-dfc78da7dc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxOXx8Z3JvY2VyeSUyMGRlbGl2ZXJ5JTIwfGVufDB8fHx8MTY5OTMyMDk0NXww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
                alt="our-service-1"
                height={500}
                width={500}
              />
            </div>

            <div className="flex justify-center">
              <Image
                className="aspect-square rounded-sm object-cover object-center md:rounded-md lg:rounded-lg"
                src="https://images.unsplash.com/photo-1582803824122-f25becf36ad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxNXx8Z3JvY2VyeSUyMGRlbGl2ZXJ5JTIwfGVufDB8fHx8MTY5OTMyMDk0NXww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
                alt="our-service-1"
                height={500}
                width={500}
              />
            </div>

            <div className="flex justify-center">
              <Image
                className="aspect-square rounded-sm object-cover object-center md:rounded-md lg:rounded-lg"
                src="https://images.unsplash.com/photo-1526470498-9ae73c665de8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyNnx8Z3JvY2VyeSUyMGRlbGl2ZXJ5JTIwfGVufDB8fHx8MTY5OTMyMDk0NXww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
                alt="our-service-1"
                height={500}
                width={500}
              />
            </div>

            <div className="flex justify-center">
              <Image
                className="aspect-square rounded-sm object-cover object-center md:rounded-md lg:rounded-lg"
                src="https://images.unsplash.com/photo-1585735633320-d24595a213a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyNHx8Z3JvY2VyeSUyMGRlbGl2ZXJ5JTIwfGVufDB8fHx8MTY5OTMyMDk0NXww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
                alt="our-service-1"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>

      <Carousel />

      <div className="break-word relative flex flex-none flex-shrink-0 items-center">
        <div className="container relative z-10 mx-auto px-[1.5rem] pb-8 pt-8 lg:pb-12 lg:pt-12">
          <div className="flex w-full translate-y-0 flex-col-reverse  items-center gap-10 opacity-100 transition-all transition-all duration-500 ease-in-out lg:flex-row-reverse lg:gap-20">
            <div className="max-w-240 flex flex-1 flex-col items-center lg:items-start">
              <h2 className="heading-large mb-6 text-center text-[30px] font-normal text-[rgb(17,24,39)] lg:text-[35px] xl:text-[48px]">
                About Us
              </h2>
              <p className="mb-2">
                Unikarte is a leading grocery delivery service based in Montreal, QC. We are
                committed to providing our customers with a convenient and hassle-free shopping
                experience from the comfort of their own homes.
              </p>
              <p>
                With a wide selection of fresh produce, pantry staples, and household essentials, we
                strive to meet the diverse needs of our customers. Our dedicated team ensures prompt
                and reliable delivery, ensuring that your groceries arrive at your doorstep in
                perfect condition. Experience the convenience of Unikarte and let us take care of
                your grocery needs.
              </p>
            </div>
            <div className="flex h-full w-full flex-1 justify-center lg:justify-start">
              <Image
                src="https://images.unsplash.com/photo-1517908954634-5c747a9ff10d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyOHx8Z3JvY2VyeSUyMGRlbGl2ZXJ5JTIwfGVufDB8fHx8MTY5OTMyMDk0NXww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
                alt="about-us"
                width={704}
                height={470}
                className="aspect-[3/2] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
