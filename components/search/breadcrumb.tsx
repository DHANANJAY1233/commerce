import Image from 'next/image';

const BreadCrumb = ({ imageSrc, shopName }: { imageSrc: string; shopName: string }) => {
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-8 px-4 pb-4 text-black md:flex-row">
      <div className="order-first w-full flex-none md:max-w-[125px]">
        <Image
          src={imageSrc}
          alt="breadcrumb-logo"
          height={500}
          width={500}
          className="object-contains"
        />
      </div>
      <div className="order-last w-full md:order-none">
        <h1 className="font-work text-[30px] font-medium leading-[36px] md:text-[35px] md:leading-[42px] xl:text-[48px] xl:leading-[56px]">{`Welcome to ${shopName}`}</h1>
      </div>
    </div>
  );
};

export default BreadCrumb;
