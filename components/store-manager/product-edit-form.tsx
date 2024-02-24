'use client';

import { Gallery } from "components/product/gallery";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Product } from "lib/data-types";
import app from "lib/firebase/init";
import { htmlToPlainText } from "lib/utils";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

const ProductEditForm = ({ id }: { id: string }) => {
    if (!id) return notFound();
    const [product, setProduct] = useState<Product>()
    useEffect(() => {
        const db = getFirestore(app);

        const docRef = doc(db, "items", id);
        getDoc(docRef).then(querySnapshot => {
            if (querySnapshot.exists()) {
                setProduct({ ...querySnapshot.data(), id: querySnapshot.id } as Product)
            }
        })
    }, [])

    return <form noValidate>
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 pb-4 text-black md:flex-row">
            <div className="min-h-screen w-full flex-1 md:order-none">
                <div className="mb-4 flex flex-col gap-4 lg:flex-row">
                    <div className="flex-1">
                        <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
                            Product Title
                        </label>
                        <input
                            type="text"
                            value={product?.name || ""}
                            className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
                        />
                    </div>
                </div>
                <div className="mb-4 flex flex-col gap-4 lg:flex-row">
                    <div className="flex-1">
                        <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
                            Price
                        </label>
                        <input
                            type="number"
                            value={product?.price || 0}
                            className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
                        />
                    </div>
                </div>
                <div className="mb-4 flex flex-col gap-4 lg:flex-row">
                    <div className="flex-1">
                        <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
                            Count
                        </label>
                        <input
                            type="number"
                            value={product?.count || 0}
                            className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
                        Product Description
                    </label>
                    <textarea
                        value={htmlToPlainText(product?.description_html || '')}
                        rows={5}
                        className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
                    />
                </div>
            </div>
            <div className="flex-1 md:order-last md:w-[125px]">
                <div className="w-full basis-full lg:basis-4/6">
                    <Gallery imageSrc={product?.image_src || ''} />
                </div>
            </div>
        </div>
    </form>
}

export default ProductEditForm