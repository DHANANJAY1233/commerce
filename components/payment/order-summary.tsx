import { Product } from "lib/data-types"
import OrderItem from "./order-item"
import OrderTotal from "./order-total"

export const OrderSummary = ({items, subtotal, delivery}:{items:Product[], subtotal: number, delivery: number}) => {
    
    return (
        <div className="w-full flex-1 md:order-none">
            <h1 className="mb-6 font-work text-[30px] font-medium leading-[36px] md:text-[35px] md:leading-[42px] xl:text-[48px] xl:leading-[56px]">
                Order Summary
            </h1>
            <hr className="border-black" />
            <div>
                {items.map((cartItem) => {
                    return (
                        <OrderItem
                            key={cartItem.id}
                            imageSrc={cartItem.image_src}
                            name={cartItem.name}
                            price={cartItem.price}
                            count={cartItem.count}
                            storeName={cartItem.store_name}
                        />
                    );
                })}
            </div>
            <hr className="border-black" />
            <OrderTotal subtotal={subtotal} delivery={delivery} />
        </div>
    )
}