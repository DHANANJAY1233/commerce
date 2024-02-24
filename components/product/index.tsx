'use client';

import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Product } from "lib/data-types/products";
import app from "lib/firebase/init";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { Gallery } from "./gallery";
import { ProductDescription } from "./product-description";

const Product = ({id}: {id: string}) => {
    if (!id) return notFound();
    const [product, setProduct] = useState<Product>()
    useEffect(() => {
        const db = getFirestore(app);

        const docRef = doc(db, "items", id);
        getDoc(docRef).then(querySnapshot => {
            if (querySnapshot.exists()) {
                setProduct({...querySnapshot.data(), id:querySnapshot.id} as Product)
            }
        })
      },[])

      return product ? <div className="flex flex-col justify-center rounded-lg p-8 md:p-12 lg:flex-row lg:gap-8">
            <div className="h-full">
              <Gallery imageSrc={product?.image_src || ''} />
            </div>

            <div className="basis-full lg:basis-2/6">
              {<ProductDescription product={product} />}
            </div>
          </div> : <p>Loading ...</p>
}

export default Product