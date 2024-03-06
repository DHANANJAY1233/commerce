'use client';

import { redirect } from "next/navigation";
import { useContext } from "react";
import ProductAddForm from "../form/product-add-form";
import { StoreContext } from "../store-context";

export const ProductAdd = () => {
    const store = useContext(StoreContext)
    if(store === undefined) {
        return <div>Loading...</div>
    }
    if(store === null) {
        redirect('/seller/login')
    }
    
    return  <ProductAddForm storeId={store.id} />
}