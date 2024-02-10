const OrderTotal = ({ subtotal, delivery }: { subtotal: number; delivery: number }) => {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between">
        <p>Subtotal</p>
        <p className="font-work text-[16px] font-normal text-[rgb(17,24,39)] lg:text-[18px] xl:text-[20px]">
          ${subtotal} CAD
        </p>
      </div>
      <div className="mb-3 flex items-center justify-between">
        <p>Delivery Fee</p>
        <p className="font-work text-[16px] font-normal text-[rgb(17,24,39)] lg:text-[18px] xl:text-[20px]">
          ${delivery} CAD
        </p>
      </div>
      <hr className="border-black" />
      <div className="mt-3 flex items-center justify-between">
        <p>Total</p>
        <p className="font-work text-[16px] font-normal text-[rgb(17,24,39)] lg:text-[18px] xl:text-[20px]">
          ${subtotal + delivery} CAD
        </p>
      </div>
    </div>
  );
};

export default OrderTotal;
