import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { Order } from "lib/data-types/orders"
import app from "lib/firebase/init"
import { useEffect, useState } from "react"
import { OrderCard } from "./order-card"

export const OrderListing = ({userId}:{userId:string}) => {
    const [orders, setOrders] = useState<Order[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const db = getFirestore(app)
        const q = query(collection(db, "orders"), where("user_id", "==", userId));
        getDocs(q).then(querySnapshot => {
            let items:Order[] = []
            querySnapshot.forEach(doc => {
                items.push({...doc.data(),id:doc.id} as Order)
            })
            setOrders(items)
        }).finally(() => setIsLoading(false))
        
    },[])
    return <div>
      {isLoading ? <div>Loading...</div>: (orders.length > 0 ? (
                <div>
                    {orders.map(order => {
                        return <OrderCard {...order} />
                    })}
                </div>
              ) : <div>Sorry, No Orders found</div>)}
     </div>
}