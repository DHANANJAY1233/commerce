import Image from 'next/image';

const HeroBanner = ({imageSrc, title, description}:{imageSrc:string, title:string, description:string}) => {
  return (
    <section className="relative">
      <div className="relative mt-[-80px] flex min-h-screen flex-shrink items-end break-words pt-[80px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 z-10 bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] opacity-[0.78]"></div>
          <Image
            width={2000}
            height={2000}
            className="absolute h-full w-full object-cover object-center"
            alt="background"
            src={imageSrc}
          />
        </div>
        <div className="container relative z-10 mx-auto px-[1.5rem] pb-8 pt-8 lg:pb-32 lg:pt-32">
          <div className="ml-0 mr-auto max-w-3xl translate-y-0  text-left opacity-100 transition-all duration-500 ease-in-out">
            <h2 className="break-word heading-xlarge mb-6 text-left font-work text-[36px] font-normal text-[rgb(17,24,39)] lg:text-[46px]">
              {title}
            </h2>
            <p className="body-large text-[16px] font-normal text-[rgb(17,24,39)] lg:text-[18px] xl:text-[24px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
