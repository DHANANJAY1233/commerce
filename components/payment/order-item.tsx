import Image from 'next/image';

const OrderItem = ({
  imageSrc,
  name,
  price,
  count,
  storeName
}: {
  imageSrc: string;
  name: string;
  price: number;
  count: number;
  storeName: string;
}) => {
  return (
    <div className="my-6 flex w-full gap-[20px]">
      <Image
        src={imageSrc}
        alt="order-item"
        width={200}
        height={200}
        className="h-[100px] w-[100px] object-cover object-center"
      />
      <div className="flex flex-1 flex-col">
        <h2 className="font-work text-[20px] font-normal text-[rgb(17,24,39)] lg:text-[24px] xl:text-[28px]">
          {name}
        </h2>
        <p className='text-[14px] text-[rgb(17,24,39)] lg:text-[16px] xl:text-[18px]'> from {storeName}</p>
        <div className="mt-auto flex justify-between">
          {price && (
            <p className="font-work text-[16px] font-normal text-[rgb(17,24,39)] lg:text-[18px] xl:text-[20px]">
              ${price} CAD
            </p>
          )}
          {count && (
            <p className="font-work text-[16px] font-normal text-[rgb(17,24,39)] lg:text-[18px] xl:text-[20px]">
              Qty: {count}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
