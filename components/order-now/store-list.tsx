import Image from 'next/image';

const StoreList = () => {
  return (
    <div className="bg-[rgb(255,209,97)] text-black">
      <div className="container relative z-10 mx-auto px-[1.5rem] pb-16 pt-16 lg:pb-32 lg:pt-32">
        <h1 className="mb-6 text-center font-work text-[30px] font-medium leading-[36px] md:text-[35px] md:leading-[42px] xl:text-[48px] xl:leading-[56px]">
          Choose Your Supermarket Stores
        </h1>
        <div>
          <div className="mb-6 grid grid-cols-1 gap-6 md:mb-10 md:gap-10 lg:grid-cols-3">
            <div className="aspect-w-16 aspect-h-9 relative flex cursor-pointer items-center justify-center overflow-hidden transition-opacity hover:opacity-70">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/IGA_logo.svg"
                alt="IGA"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-w-16 aspect-h-9 relative flex cursor-pointer items-center justify-center overflow-hidden transition-opacity hover:opacity-70">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg"
                alt="Walmart"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-w-16 aspect-h-9 relative flex cursor-pointer items-center justify-center overflow-hidden transition-opacity hover:opacity-70">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Metro_Inc._logo.svg"
                alt="Metro"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-w-16 aspect-h-9 relative flex cursor-pointer items-center justify-center overflow-hidden transition-opacity hover:opacity-70">
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/6/60/Superc_grocery_logo.png"
                alt="Super-c"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-w-16 aspect-h-9 relative flex cursor-pointer items-center justify-center overflow-hidden transition-opacity hover:opacity-70">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/59/Costco_Wholesale_logo_2010-10-26.svg"
                alt="Costco"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-w-16 aspect-h-9 relative flex cursor-pointer items-center justify-center overflow-hidden transition-opacity hover:opacity-70">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/29/Maxi_%28Canadian_supermarket%29_logo.svg"
                alt="Maxi"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreList;
