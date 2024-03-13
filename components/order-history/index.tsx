'use client';

import { AuthContext } from "lib/firebase/auth";
import { redirect } from "next/navigation";
import { useContext } from "react";
import { OrderListing } from "./order-listing";

export const OrderHistory = () => {
    const user = useContext(AuthContext)

    if (user === undefined) {
        return <div>Loading...</div>
    }
    if(user === null || user.type !== 'shopper') {
      redirect('/login')  
    }
    return <OrderListing userId={user.id} />
}