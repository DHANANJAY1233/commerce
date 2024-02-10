import Image from 'next/image';

const PaymentDetail = ({ total }: { total: number }) => {
  const paymentMethods = [
    {
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
      name: 'PayPal'
    },
    {
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg',
      name: 'Apple Pay'
    },
    {
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg',
      name: 'Credit Card'
    },
    {
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg',
      name: 'Google Pay'
    }
  ];
  return (
    <div>
      <h1 className="mb-6 font-work text-[30px] font-medium leading-[36px] md:text-[35px] md:leading-[42px] xl:text-[48px] xl:leading-[56px]">
        Payment Details
      </h1>
      <p className="mb-6">Complete your purchase by providing your payment details order</p>
      <form noValidate>
        <div className="mb-4 flex flex-col gap-4 lg:flex-row">
          <div className="flex-1">
            <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
              Name
            </label>
            <input
              type="text"
              className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
            />
          </div>
          <div className="flex-1">
            <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
              Email
            </label>
            <input
              type="email"
              className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
            Shipping Address
          </label>
          <textarea
            rows={5}
            className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
          />
        </div>
        <div className="mb-4 flex flex-col gap-4 lg:flex-row">
          <div className="flex-1">
            <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
              Phone
            </label>
            <input
              type="text"
              className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
            />
          </div>
          <div className="flex-1">
            <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
              Zipcode
            </label>
            <input
              type="text"
              className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
            />
          </div>
        </div>

        <div className="my-8">
          <p className="mb-1">Choose Payment Method</p>
          <div className="flex gap-[30px]">
            {paymentMethods.map((method) => {
              return (
                <div className="flex">
                  <input type="radio" name="method" />
                  <Image
                    src={method.imageSrc}
                    alt={method.name}
                    width={100}
                    height={100}
                    className="h-[24px] w-full object-contain pl-[10px]"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
          <button
            type="submit"
            className="button lg mt-2 w-full truncate rounded-[8px] bg-[#ffe75f] px-[16px] py-[12px] text-black md:mt-0"
          >
            Pay ${total} CAD
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentDetail;
