import OrderItem from "components/payment/order-item"
import { Order } from "lib/data-types/orders"

export const OrderCard = ({ id, createdAt, status, subtotal, delivery, cart }: Order) => {
    return <div className="w-full border-black border-solid border p-5 mb-4">
        <div className="flex justify-between mb-1">
            <p>Order ID:
                <span className="font-bold"> {id}</span>
            </p>
            <p>Ordered on:
                <span className="font-bold"> {createdAt.toDate().toLocaleDateString()} {createdAt.toDate().toLocaleTimeString()}</span>
            </p>
        </div>
        <div className="flex justify-between mb-2">
            <p>Amount Paid:
                <span className="font-bold"> ${subtotal + delivery} CAD</span>
            </p>
            <p>Order Status:
                <span className="font-bold"> {status}</span>
            </p>
        </div>
        <p>Items:</p>
        {cart.map(cartItem => {
            return <OrderItem
                key={cartItem.id}
                imageSrc={cartItem.image_src}
                name={cartItem.name}
                price={cartItem.price}
                count={cartItem.count}
                storeName={cartItem.store_name}
            />
        })}
    </div>
}