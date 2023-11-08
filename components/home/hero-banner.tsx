import Image from 'next/image';

const HeroBanner = () => {
  return (
    <section className="relative">
      <div className="relative flex flex-shrink items-center break-words">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 z-10 bg-[rgb(255,99,87)] opacity-70"></div>
          <Image
            width={2000}
            height={2000}
            className="absolute h-full w-full object-cover object-center"
            alt="background"
            src="https://images.unsplash.com/photo-1554672409-87b40d480f70?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="container relative z-10 mx-auto pb-20 pt-20 lg:pb-48 lg:pt-48">
          <div className="ml-0 mr-auto max-w-3xl translate-y-0  text-left opacity-100 transition-all duration-500 ease-in-out">
            <h2 className="break-word heading-xlarge mb-6 text-left font-normal text-[rgb(17,24,39)]">
              Get Fresh Groceries Delivered
            </h2>
            <p className="body-large font-normal text-[rgb(17,24,39)]">
              Convenient, fast, and reliable grocery delivery service in Montreal, Order today!
            </p>
            <div className="flex flex-col rounded-[8px] border-2 border-solid border-[rgb(215,255,32)] bg-[rgb(215,255,32)] text-[rgb(17,24,39)] shadow-none md:inline-flex md:flex-row md:gap-4">
              <a
                className="button xl !my-[0.75rem] mx-[1rem] w-full md:w-max lg:mt-8 "
                target="_blank"
                href="https://unikarte.mydurable.com/new-page"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
