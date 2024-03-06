'use client';

import BreadCrumb from "components/search/breadcrumb";
import ProductList from "components/search/product-list";
import { redirect } from "next/navigation";
import { useContext } from "react";
import ManagerOptions from "./manager-options";
import { StoreContext } from "./store-context";

export const StoreManager = () => {
    const store = useContext(StoreContext)
    if(store === undefined) {
        return <div>Loading...</div>
    }
    if(store === null) {
        redirect('/seller/login')
    }
    
    
    return (
        <>
        <BreadCrumb storeId={store.id || ''} isStoreManager /><div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row">
            <div className="order-first w-full flex-none md:max-w-[125px]">
                <ManagerOptions />
            </div>
            <div className="order-last min-h-screen w-full md:order-none">
                <ProductList store_id={store.id || ''} isStoreManager />
            </div>
        </div>
        </>
       
    )
}