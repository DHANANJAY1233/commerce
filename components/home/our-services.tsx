import Image from 'next/image';

export const OurServices = () => {
  return (
    <div className="bg-[rgb(0,203,236)]">
      <div className="break-word relative flex flex-none flex-shrink-0 items-center">
        <div className="container relative z-10 mx-auto px-[1.5rem] pb-8 pt-8 lg:pb-12 lg:pt-12">
          <div className="translate-y-0 opacity-100 transition-all transition-all  duration-500 ease-in-out">
            <div className="rich-text-block ml-0 mr-auto max-w-5xl text-left text-[rgb(17,24,39)]">
              <p className="large whitespace-pre-line text-[16px] lg:text-[18px] xl:text-[24px]">
                Introducing UniCarté, the premier grocery delivery service in Montreal, QC. With our
                seamless online platform, we bring convenience and quality right to your doorstep.
                Say goodbye to long grocery store lines and heavy bags, and let us handle your
                shopping needs.At Unikarte, we understand the importance of fresh and diverse
                products. That&apos;s why we partner with local farmers and trusted suppliers to
                ensure that you receive the finest ingredients for your meals. Whether you&apos;re a
                busy professional, a parent on the go, or simply looking to simplify your life, our
                dedicated team is committed to delivering exceptional service and a wide range of
                products tailored to your preferences. Experience the ease and reliability of
                Unikarte, your trusted grocery delivery solution in Montreal.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-[1.5rem] pb-16 pt-16 lg:pb-32 lg:pt-32">
        <h2 className="heading-large mb-6 text-center text-[30px] font-normal text-[rgb(17,24,39)] lg:text-[35px] xl:text-[48px]">
          Our Services
        </h2>
        <div className="relative flex flex-wrap justify-center gap-[40px]">
          <a
            className="group relative w-full flex-shrink-0 flex-grow-0 basis-[calc(33.3333%-26.6667px)] cursor-pointer overflow-hidden focus:outline-blue-600"
            href="/"
          >
            <div>
              <Image
                className="aspect-square rounded-sm object-cover object-center md:rounded-md lg:rounded-lg"
                src="https://images.unsplash.com/photo-1604742762376-562c12aabff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw1fHxncm9jZXJ5JTIwZGVsaXZlcnklMjB8ZW58MHx8fHwxNjk5MzIwOTQ1fDA&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
                alt="our-service-1"
                height={500}
                width={500}
              />
            </div>
            <div className="flex flex-col items-center py-6 text-center">
              <p className="heading-medium mb-4 text-[24px] group-hover:underline lg:text-[28px] xl:text-[32px]">
                Convenient Grocery Delivery
              </p>
              <div className="rich-text-block text-[16px]">
                Get your groceries delivered right to your doorstep. Forget the hassle of shopping,
                we&apos;ll take care of it for you.
              </div>
            </div>
          </a>
          <a
            className="group relative w-full flex-shrink-0 flex-grow-0 basis-[calc(33.3333%-26.6667px)] cursor-pointer overflow-hidden rounded-sm focus:outline-blue-600 md:rounded-md lg:rounded-lg"
            href="/"
          >
            <Image
              className="aspect-square rounded-sm object-cover object-center md:rounded-md lg:rounded-lg"
              src="https://images.unsplash.com/photo-1585742832738-02de795f4885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwzfHxncm9jZXJ5JTIwZGVsaXZlcnklMjB8ZW58MHx8fHwxNjk5MzIwOTQ1fDA&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
              alt="our-service-2"
              height={500}
              width={500}
            />
            <div className="flex flex-col items-center py-6 text-center">
              <p className="heading-medium mb-4 text-[24px] group-hover:underline lg:text-[28px] xl:text-[32px]">
                Fresh and Quality Produce
              </p>
              <div className="rich-text-block text-[16px]">
                Experience the freshest and highest quality fruits, vegetables, and organic products
                delivered to your home.
              </div>
            </div>
          </a>
          <a
            className="group relative w-full flex-shrink-0 flex-grow-0 basis-[calc(33.3333%-26.6667px)] cursor-pointer overflow-hidden rounded-sm focus:outline-blue-600 md:rounded-md lg:rounded-lg"
            href="/"
          >
            <Image
              className="aspect-square rounded-sm object-cover object-center md:rounded-md lg:rounded-lg"
              src="https://images.unsplash.com/photo-1553531889-56cc480ac5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyMXx8Z3JvY2VyeSUyMGRlbGl2ZXJ5JTIwfGVufDB8fHx8MTY5OTMyMDk0NXww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
              alt="our-service-3"
              height={500}
              width={500}
            />
            <div className="flex flex-col items-center py-6 text-center">
              <p className="heading-medium mb-4 text-[24px] group-hover:underline lg:text-[28px] xl:text-[32px]">
                Variety of Food and Essentials
              </p>
              <div className="rich-text-block text-[16px]">
                Discover a wide selection of food items, household essentials, and pantry staples
                available for delivery.
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
